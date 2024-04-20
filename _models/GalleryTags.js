const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GalleryTags', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'id'
      }
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
    tableName: 'gallery_tags',
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
        name: "gallery_tags_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "gallery_tags_tag_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tag_id" },
        ]
      },
    ]
  });
};
