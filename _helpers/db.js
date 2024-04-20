const config = require('../config.js');
const { Sequelize, DataTypes } = require('sequelize');
const db = {};
initializeDb();
async function initializeDb() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    // const connection = await mysql.createConnection({ host, port, user, password });
    // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, {
        host: host,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    db.sequelize = sequelize;

    //TODO : init models and add them to the exported db object 
    db.Accounts = require('../_models/Accounts')(sequelize, DataTypes);
    db.Banners = require('../_models/Banners')(sequelize, DataTypes);
    db.LeakCred = require('../_models/LeakCred')(sequelize, DataTypes);
    db.LeakCredDetail = require('../_models/LeakCredDetail')(sequelize, DataTypes);

    // sync all models with database
    // if(process.env.NODE_ENV === 'development'){
    //     await sequelize.sync();
    // }
    // else if(process.env.NODE_ENV === 'production'){
    //     await sequelize.sync();
    // }
}

module.exports = { db, initializeDb };  // Export the db object