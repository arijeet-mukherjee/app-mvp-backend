const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Newsletter', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('Enable','Disable'),
      allowNull: false
    },
    mailchip_api: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    mailchip_id: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'gallery',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'newsletter',
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
        name: "newsletter_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
    ]
  });
};
