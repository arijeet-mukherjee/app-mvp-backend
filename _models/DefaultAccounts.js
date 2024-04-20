const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DefaultAccounts', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM('customer','editor','admin'),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'default_accounts',
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
        name: "default_accounts_account_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
    ]
  });
};
