const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DemoSettings', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    color: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    header_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    footer_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    slider_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    banner_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    cart_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    product_page_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    shop_style: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(191),
      allowNull: false
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
    tableName: 'demo_settings',
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
    ]
  });
};
