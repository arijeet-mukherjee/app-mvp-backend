const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AttributeDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    attribute_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'attributes',
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
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'attribute_detail',
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
        name: "attribute_detail_attribute_id_foreign",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
      {
        name: "attribute_detail_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
