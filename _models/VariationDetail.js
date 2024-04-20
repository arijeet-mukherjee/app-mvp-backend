const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VariationDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    variation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'variations',
        key: 'id'
      }
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'languages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'variation_detail',
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
        name: "variation_detail_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "variation_detail_variation_id_foreign",
        using: "BTREE",
        fields: [
          { name: "variation_id" },
        ]
      },
    ]
  });
};
