const { Sequelize } = require("sequelize");
const { db, initializeDb } = require("../../_helpers/db");
initializeDb();

async function getAll(req, res){
    const { page = 1, pageSize = 10 } = req.query;
    const offset = Number(Number(page) - 1) * Number(pageSize);
    
    try {
        const totalCount = await db.models.LeakCredDetail.count();
        const totalPages = Math.ceil(totalCount / Number(pageSize));
        const emails = await db.models.LeakCredDetail.findAll({
            offset,
            limit: Number(pageSize),
        });
        console.log(emails);
        res.json({ emails, totalPages });
    } catch (error) {
        console.error("Error fetching tracked emails:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const { Op } = Sequelize;
async function getByCondition(req, res){
    const { pageSize = 10 } = req.query;
    try {
      const data = await db.models.LeakCredDetail.findAll({
        where: {
          lc_id: {
            [Op.eq]: req.query.lc_id,
          },
        },
      });
      const totalCount = await db.models.LeakCredDetail.count();
      const totalPages = Math.ceil(totalCount / Number(pageSize));
  
      res.status(200).json({ data, totalPages });
    } catch (error) {
      console.error("Error counting leaked emails:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {getAll, getByCondition}