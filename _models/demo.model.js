const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {type: DataTypes.INTEGER, allowNull: false, primaryKey : true},
        siteid: {type: DataTypes.INTEGER, allowNull: false, foreignKey : true},
        mealid: {type: DataTypes.INTEGER, allowNull: false, foreignKey :true},
        saledate: { type: DataTypes.DATE, allowNull: false },
        mealprice: { type: DataTypes.FLOAT, allowNull: false },
        numberofplates: { type: DataTypes.INTEGER, allowNull: false }
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('sale', attributes, options);
}