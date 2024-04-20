const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UnitDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    unit_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'units',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'unit_detail',
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
        name: "unit_detail_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "unit_detail_unit_id_foreign",
        using: "BTREE",
        fields: [
          { name: "unit_id" },
        ]
      },
    ]
  });
};
