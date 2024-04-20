const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    siteid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mealid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saledate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mealprice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    numberofplates: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    }
  }, {
    sequelize,
    tableName: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
