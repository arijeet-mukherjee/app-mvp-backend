const config = require('../config.js');
const { Sequelize, DataTypes } = require('sequelize');
const initModels = require('../_models/init-models');
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
        port: port,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    db.sequelize = sequelize;

    //call initModels and store in db object
    db.models = initModels(sequelize);

    // sync all models with database
    // if(process.env.NODE_ENV === 'development'){
    //     await sequelize.sync();
    // }
    // else if(process.env.NODE_ENV === 'production'){
    //     await sequelize.sync();
    // }
}

module.exports = { db, initializeDb };  // Export the db object
