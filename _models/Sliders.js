const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sliders', {
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
    position: {
      type: DataTypes.ENUM('position-right','position-left','position-center'),
      allowNull: false
    },
    textcontent: {
      type: DataTypes.ENUM('textcontent-right','textcontent-left','textcontent-center'),
      allowNull: false
    },
    text: {
      type: DataTypes.ENUM('text-white','text-black'),
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
    slider_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'slider_types',
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
    ref_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
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
    tableName: 'sliders',
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
        name: "sliders_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "sliders_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "sliders_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
      {
        name: "sliders_slider_navigation_id_foreign",
        using: "BTREE",
        fields: [
          { name: "slider_navigation_id" },
        ]
      },
      {
        name: "sliders_slider_type_id_foreign",
        using: "BTREE",
        fields: [
          { name: "slider_type_id" },
        ]
      },
      {
        name: "sliders_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  });
};
