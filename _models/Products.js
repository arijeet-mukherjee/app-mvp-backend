const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_type: {
      type: DataTypes.ENUM('service','training'),
      allowNull: false
    },
    product_slug: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    video_url: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'gallery',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    discount_price: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    product_unit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_weight: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    digital_file: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    product_status: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false,
      defaultValue: "active"
    },
    tax_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'taxes',
        key: 'id'
      }
    },
    product_view: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_featured: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for not featured & 1 for featured"
    },
    product_min_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_max_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seo_meta_tag: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    seo_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_points: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
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
    tableName: 'products',
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
        name: "products_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "products_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "products_tax_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tax_id" },
        ]
      },
      {
        name: "products_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "products_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
