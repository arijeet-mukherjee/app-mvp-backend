const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductCombination', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    sku: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gallery',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_combination',
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
        name: "product_combination_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "product_combination_product_id_foreign",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
