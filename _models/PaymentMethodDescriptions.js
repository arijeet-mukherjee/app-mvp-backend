const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentMethodDescriptions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    payment_method_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payment_methods',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'languages',
        key: 'id'
      }
    },
    sub_name_1: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    sub_name_2: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_method_descriptions',
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
        name: "payment_method_descriptions_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "payment_method_descriptions_payment_method_id_foreign",
        using: "BTREE",
        fields: [
          { name: "payment_method_id" },
        ]
      },
    ]
  });
};
