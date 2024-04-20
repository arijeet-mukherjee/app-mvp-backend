const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlogNewsDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blog_news_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'blog_news',
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
    name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'blog_news_detail',
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
        name: "blog_news_detail_blog_news_id_foreign",
        using: "BTREE",
        fields: [
          { name: "blog_news_id" },
        ]
      },
      {
        name: "blog_news_detail_language_id_foreign",
        using: "BTREE",
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};
