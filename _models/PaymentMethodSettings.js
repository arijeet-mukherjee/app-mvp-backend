const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentMethodSettings', {
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
    key: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payment_method_settings',
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
        name: "payment_method_settings_payment_method_id_foreign",
        using: "BTREE",
        fields: [
          { name: "payment_method_id" },
        ]
      },
    ]
  });
};
