const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PageDetail', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    page_type: {
      type: DataTypes.ENUM('product','input_form','blog','helpdesk','user_profile'),
      allowNull: false,
      defaultValue: "product"
    },
    title: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    language_id: {
      type: DataTypes.BIGINT,
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
    tableName: 'page_detail',
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
        name: "page_details_page_id_foreign",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
