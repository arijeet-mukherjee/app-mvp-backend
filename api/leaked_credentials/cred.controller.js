const { Sequelize } = require("sequelize");
const { db, initializeDb } = require("../../_helpers/db");
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
async function create(req, res) {
  // Validate request
  if (!req.body) {
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
      no_leaks: req.body.no_leaks,
    };
    db.models.LeakCred.create(leakCred)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
}

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

//This returns total number of leaks per email address.
const { Op } = Sequelize;
async function leakCounts(req, res) {
  const { pageSize = 10 } = req.query;
  try {
    const count = await db.models.LeakCred.count({
      where: {
        email: {
          [Op.eq]: req.query.email,
        },
      },
    });
    const totalCount = await db.models.LeakCred.count();
    const totalPages = Math.ceil(totalCount / Number(pageSize));

    res.status(200).json({ count, totalPages });
  } catch (error) {
    console.error("Error counting leaked emails:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//This returns all existing records of user in pagintion method.
async function findAll(req, res) {
  const { page = 1, pageSize = 10 } = req.query;
  const offset = Number(Number(page) - 1) * Number(pageSize);
  try {
    const totalCount = await db.models.LeakCred.count();
    const totalPages = Math.ceil(totalCount / Number(pageSize));
    await db.models.LeakCred.findAll({
      offset,
      limit: Number(pageSize),
    })
      .then((data) => {
        res.status(200).json({ data, totalPages });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//This returns all existing emails of user in pagintion method.
async function totalEmails(req, res) {
  const { page = 1, pageSize = 10 } = req.query;
  const offset = Number(Number(page) - 1) * Number(pageSize);

  try {
    const totalCount = await db.models.LeakCred.count();
    const totalPages = Math.ceil(totalCount / Number(pageSize));
    const emails = await db.models.LeakCred.findAll({
      attributes: ["email"],
      group: ["email"],
      offset,
      limit: Number(pageSize),
    });

    res.json({ emails, totalPages });
  } catch (error) {
    console.error("Error fetching tracked emails:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { create, findAll, leakCounts, totalEmails }; // Export the controller functions
