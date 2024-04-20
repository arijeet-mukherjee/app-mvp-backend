const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TransactionDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    transaction_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'transactions',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'accounts',
        key: 'id'
      }
    },
    reference_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('sale','cash','redeem'),
      allowNull: true
    },
    dr_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    cr_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: 'transaction_detail',
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
        name: "transaction_detail_account_id_foreign",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "transaction_detail_transaction_id_foreign",
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  });
};
