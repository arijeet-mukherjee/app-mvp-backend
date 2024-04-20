const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCombinationDtl', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_combination_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'product_combination',
        key: 'id'
      }
    },
    variation_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'variations',
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
    }
  }, {
    sequelize,
    tableName: 'product_combination_dtl',
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
        name: "product_combination_dtl_product_combination_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_combination_id" },
        ]
      },
      {
        name: "product_combination_dtl_product_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "product_combination_dtl_variation_id_foreign",
        using: "BTREE",
        fields: [
          { name: "variation_id" },
        ]
      },
    ]
  });
};
