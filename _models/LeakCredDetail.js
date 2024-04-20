const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeakCredDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lc_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'leak_cred',
        key: 'id'
      }
    },
    source: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leaked_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_fixed: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: false,
      defaultValue: "no",
      field: 'is_Fixed'
    }
  }, {
    sequelize,
    tableName: 'leak_cred_detail',
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
      {
        name: "lc_id",
        using: "BTREE",
        fields: [
          { name: "lc_id" },
        ]
      },
    ]
  });
};
