const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    product_combination_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product_combination',
        key: 'id'
      }
    },
    product_price: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    product_tax: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    product_discount: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    total: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
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
        name: "order_detail_order_id_foreign",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "order_detail_product_combination_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_combination_id" },
        ]
      },
      {
        name: "order_detail_product_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
