const { fetchAllDataInChunks } = require('../../_util');
const { db , initializeDb } = require('../../_helpers/db');
const { Sequelize } = require("sequelize");
const { Op } = Sequelize;
initializeDb();



//Write all the controller functions and export them
/**
 * 
 * POST /api/leakCred
 * Description: Creates a new leakCred record in the database.
 * Request Body:

  *  Parameter	Type	Description
  *  id	String	The unique identifier for the leakCred.
  *  email	String	The email associated with the leakCred.
  *  created_at	Date	The date the leakCred was created.
  *  updated_at	Date	The date the leakCred was last updated.
  *  created_by	String	The identifier of the creator of the leakCred.
  *  updated_by	String	The identifier of the last updater of the leakCred.
  *  no_leaks	Number	The number of leaks associated with the leakCred.
  *  Response: 201 Created on success
    * {
    "id": "string",
    "email": "string",
    "created_at": "date",
    "updated_at": "date",
    "created_by": "string",
    "updated_by": "string",
    "no_leaks": "number"
    }

    curl -X POST /api/leakCred \
    -H 'Content-Type: application/json' \
    -d '{
        "id": "123",
        "email": "test@example.com",
        "created_at": "2022-01-01T00:00:00Z",
        "updated_at": "2022-01-01T00:00:00Z",
        "created_by": "admin",
        "updated_by": "admin",
        "no_leaks": 5
    }'
 */
async function create (req, res) {
    // Validate request
    if(!req.body){
        res.status(400).json({ message: "Content can not be empty!" });
        return;
    }
    //Create a new leakCred
    try {
        //Create a leakCred
        const leakCred = {
            id: req.body.id,
            email: req.body.email,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            created_by: req.body.created_by,
            updated_by: req.body.updated_by,
            no_leaks: req.body.no_leaks
        };
        db.models.LeakCred.create(leakCred)
        .then((data)=>{
            res.status(201).json(data);
        })
        .catch((error)=>{
            res.status(500).json({ message: error.message });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
};

// Description:
// This Function retrieves all LeakCred records from the database.
// Parameters:
// req: The HTTP request object. This function does not use any data from the request object.
// res: The HTTP response object. This is used to send the response back to the client.
// Functionality:
// The function uses the findAll method of the LeakCred model to retrieve all records from the database. It then sends these records back to the client with a status code of 200. If an error occurs during this process, it sends a response with a status code of 500 and a JSON object containing the error message.
// Response: 200 OK on success
// [
//     {
//         "id": "string",
//         "email": "string",
//         "created_at": "date",
//         "updated_at": "date",
//         "created_by": "string",
//         "updated_by": "string",
//         "no_leaks": "number"
//     },
//     ...
// ]

async function getTotalLeakCounts(req, res){    
    try{
        const leaked_entry = await db.models.LeakCred.findOne({
            where:{
                email:{
                    [Op.eq] : req.query.email
                }
            }           
        });
       if(!leaked_entry || leaked_entry === null){       
            res.status(200).json({});
            return;
       }
       else{
           const lc_id = leaked_entry.id;
           const conditions = {};
           conditions.lc_id = { [Op.eq] : lc_id}
           const leaked_details_count = await db.models.LeakCredDetail.count({
               where: conditions      

            })
            res.status(200).json({ leaked_details_count});
            return;
        }
    }
    catch(error){
        res.status(500).json({ error: "Internal server error" });
        return;
        }   
};




async function findAll (req, res)  {
    try {
        const wss = req.wssManager.wss;
        let limit = req.query && req.query.limit ? Number(req.query.limit) : 2;
        let batchSize = req.query && req.query.batchSize ? Number(req.query.batchSize) : 2;
        const initialData = await db.models.LeakCred.findAll({limit});
        res.status(200).json(initialData);
        fetchAllDataInChunks(db.models.LeakCred, wss, limit, batchSize, undefined, undefined, "getAllLeakCredentials");

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { create, findAll, getTotalLeakCounts}; // Export the controller functions
