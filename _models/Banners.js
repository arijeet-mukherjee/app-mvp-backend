const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Banners', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    page_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pages',
        key: 'id'
      }
    },
    slider_navigation_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'slider_navigation',
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
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'languages',
        key: 'id'
      }
    },
    ref_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false,
      defaultValue: "inactive"
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'banners',
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
        name: "banners_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "banners_page_id_foreign",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
      {
        name: "banners_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "banners_slider_navigation_id_foreign",
        using: "BTREE",
        fields: [
          { name: "slider_navigation_id" },
        ]
      },
    ]
  });
};
