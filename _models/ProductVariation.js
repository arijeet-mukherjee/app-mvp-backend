const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductVariation', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_attribute_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'product_attribute',
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
    }
  }, {
    sequelize,
    tableName: 'product_variation',
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
        name: "product_variation_product_attribute_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_attribute_id" },
        ]
      },
      {
        name: "product_variation_variation_id_foreign",
        using: "BTREE",
        fields: [
          { name: "variation_id" },
        ]
      },
    ]
  });
};
