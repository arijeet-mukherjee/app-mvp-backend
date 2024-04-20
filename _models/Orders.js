const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    payment_status: {
      type: DataTypes.STRING(191),
      allowNull: false,
      defaultValue: "Pending"
    },
    order_type: {
      type: DataTypes.ENUM('free','mvp','vip'),
      allowNull: true
    },
    latlong: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cc_type: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cc_owner: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cc_number: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    cc_expiry: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    currency_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'currency',
        key: 'id'
      }
    },
    currency_value: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    order_price: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    order_notes: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    is_seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1 for seen & 0 for unseen"
    },
    coupon_code: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    coupon_amount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    payment_method: {
      type: DataTypes.ENUM('banktransfer','cards','paypal'),
      allowNull: false,
      defaultValue: "banktransfer"
    },
    transaction_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    order_status: {
      type: DataTypes.ENUM('Pending','Complete'),
      allowNull: false,
      defaultValue: "Pending"
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
    tableName: 'orders',
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
        name: "orders_currency_id_foreign",
        using: "BTREE",
        fields: [
          { name: "currency_id" },
        ]
      },
      {
        name: "orders_customer_id_foreign",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
