const { Sequelize } = require("sequelize");
const { db, initializeDb } = require("../../_helpers/db");
const {fetchAllDataInChunks} = require('../../_util/index.js');
const { Op } = Sequelize;
initializeDb();

async function getByCondition(req, res){
  let leaked_detail_id = null;

  if(req.query.email){    
    const leaked_entry = await db.models.LeakCred.findOne({
      where:{
        email:{
          [Op.eq] : req.query.email
        }
      }           
    });
    leaked_detail_id = leaked_entry.id
  }
  else if(req.query.lc_id){
    leaked_detail_id = req.query.lc_id
  }
    try {
      const wss = req.wssManager.wss;
      let limit = req.query && req.query.limit ? Number(req.query.limit) : 2;
      let batchSize = req.query && req.query.batchSize ? Number(req.query.batchSize) : 2;
  
      const condition = {};
      if(leaked_detail_id){
        condition.lc_id = { [Op.eq] : leaked_detail_id}
      }      

      const all_leaked_cred_details = await db.models.LeakCredDetail.findAll({
        where: condition
      });

      res.status(200).json({ all_leaked_cred_details });
      fetchAllDataInChunks(db.models.LeakCredDetail, wss, limit, batchSize, condition, undefined, "getAllLeakedCredDetailsByCondition");          

    } catch (error) {
      console.error("Error featching leaked emails:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {getByCondition}