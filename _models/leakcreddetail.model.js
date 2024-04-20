const Sequelize = require('sequelize');
const defineLeakCred = require('./leakcred.model');

function defineLeakCredDetails(sequelize) {
    const LeakCred = defineLeakCred(sequelize);
    const LeakCredDetail = sequelize.define('LeakCredDetail', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        lc_id: {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        source: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        icon: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        leaked_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING(200),
            allowNull: true
        },
        created_at: {
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
        is_Fixed: {
            type: Sequelize.ENUM('yes', 'no'),
            defaultValue: 'no',
            allowNull: false
        }
    }, {
        tableName: 'leak_cred_detail',
        timestamps: false
    });

    // Define associations
    LeakCred.hasMany(LeakCredDetail, { foreignKey: 'lc_id' });
    LeakCredDetail.belongsTo(LeakCred, { foreignKey: 'lc_id' });

    return LeakCredDetail;
}

module.exports = defineLeakCredDetails;