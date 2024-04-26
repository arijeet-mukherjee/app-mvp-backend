const { parseConnectionUrl } = require('nodemailer/lib/shared');
const { db, initializeDb } = require('../../_helpers/db');
const Joi = require('joi');
const { Op } = require('sequelize');
initializeDb();

//Create an Entry in User_requests
async function create(req, res) {
    // Validate request
    if (!req.body) {
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }

    //Create a new entry in userRequest
    //id is optional (auto increment)
    //user_id is required
    //request_type is required 
    //request_payload is required
    //page_id is required

    try {

        const schema = Joi.object().keys({
            id: Joi.number().integer(),
            user_id: Joi.number().integer().required(),
            request_type: Joi.string().valid('leaked_check', 'tc_check').required(),
            request_payload: Joi.string().required(),
            page_id: Joi.number().integer().required()
        });

        //take the max id from db and then increment it by one then create 
        let max_id = await db.models.UserRequest.max('id');

        //Create a userRequest object
        const UserRequest = {

            id: req.body.id ? req.body.id : max_id + 1,
            user_id: req.body.user_id,
            request_type: req.body.request_type,
            request_payload: req.body.request_payload,
            page_id: req.body.page_id

        };

        //Request is validated here
        let validatedRequest = schema.validate(UserRequest);

        function validate_payload(req_payload, req_type) {
            if (req_type === "tc_check") {
                return req_payload !== "";
            } else if (req_type === "leaked_check") {
                const payload = req_payload && req_payload.trim().split(",");
                if (payload && payload.length === 0) return false;
                else {
                    for (let i = 0; i < payload.length; i++) {

                        const email = payload[i].trim();
                        if (!email.toLowerCase()
                            .match(
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            )) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }

        if (!validatedRequest.error && validate_payload(req.body.request_payload, req.body.request_type)) {

            //inserting into DB
            db.models.UserRequest.create(validatedRequest.value)
                .then((data) => {
                    res.status(201).json(data);
                })
                .catch((error) => {
                    res.status(500).json({ message: error.message });
                });

            return;

        } else {
            res.status(400).json({ message: "Bad request" });
            return;
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};


//get all User_requests in paginated manner 
async function getAllUserRequests(req, res) {

    try {
        const { page = 1, pageSize = 2 } = req.query;
        const offset = (Number(page - 1) * Number(pageSize));

        await db.models.UserRequest.findAll({
            offset,
            limit: Number(pageSize),

        }).then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json({ message: error.message });
        });

        return;

    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
}

//Get User_Requests by condition.
async function getUserRequestsByCondition(req, res) {

    const { page = 1, pageSize = 2 } = req.query;
    const offset = (Number(page - 1) * Number(pageSize));

    // Extract conditions from query parameters
    const conditions = {};
    if (req.query.user_id) {
        conditions.user_id = { [Op.eq]: req.query.user_id };
    }
    if (req.query.request_type) {
        conditions.request_type = { [Op.eq]: req.query.request_type };
    }


    try {
        const userRequests = await db.models.UserRequest.findAll({
            offset,
            limit: Number(pageSize),
            where: conditions
        });
        res.json(userRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user requests" });
    }
}

//Delete the entry from this method
async function deleteUserRequest(req, res) {

    // Extract conditions from query parameters
    const conditions = {};
    if (req.query.id) {
        conditions.id = { [Op.eq]: req.query.id };
    }
    // Add more conditions based on your needs
    try {
        const deletedCount = await db.models.UserRequest.destroy({
            where: conditions,
        });
        res.json({ message: `${deletedCount} user requests deleted` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting user requests" });
    }
}

module.exports = {
    create,
    getAllUserRequests,
    getUserRequestsByCondition,
    deleteUserRequest
};