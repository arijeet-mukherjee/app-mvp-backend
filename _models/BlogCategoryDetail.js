const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlogCategoryDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blog_category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'blog_categories',
        key: 'id'
      }
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'languages',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'blog_category_detail',
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
        name: "blog_category_detail_blog_category_id_foreign",
        using: "BTREE",
        fields: [
          { name: "blog_category_id" },
        ]
      },
      {
        name: "blog_category_detail_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
