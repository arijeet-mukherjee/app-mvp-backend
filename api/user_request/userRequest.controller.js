const { parseConnectionUrl } = require('nodemailer/lib/shared');
const { db, initializeDb } = require('../../_helpers/db');
const Joi = require('joi');
initializeDb();

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

        console.log(max_id);

        //Create a userRequest object
        const UserRequest = {

            id: req.body.id ? req.body.id : max_id + 1,
            user_id: req.body.user_id,
            request_type: req.body.request_type,
            request_payload: req.body.request_payload,
            page_id: req.body.page_id

        };

        //console.log(schema.validate(UserRequest))
        let validatedRequest = schema.validate(UserRequest);

        function validate_payload(req_payload, req_type) {
            if (req_type === "tc_check") {
                return req_payload !== "";
            } else if (req_type === "leaked_check") {
                const payload = req_payload && req_payload.trim().split(",");
                if (payload && payload.length === 0) return false;
                else {
                    for (let i = 0; i < payload.length; i++) {

                        const email = payload[i];
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

async function getAllUserRequests(req, res) {

    
    try {
        await db.models.UserRequest.findAll()
            .then((data) => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(500).json({ message: error.message });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { create, getAllUserRequests };