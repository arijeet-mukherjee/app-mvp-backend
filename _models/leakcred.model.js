const Sequelize = require('sequelize');

function defineLeakCredModel(sequelize) {
    

    const LeakCred = sequelize.define('LeakCred', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(199),
            allowNull: true
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        created_by: {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        updated_by: {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        no_leak: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no',
            allowNull: false
        }
    }, {
        tableName: 'leak_cred',
        timestamps: false
    });

    return LeakCred;
}

module.exports = defineLeakCredModel;