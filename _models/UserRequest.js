const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserRequest', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    request_type: {
      type: DataTypes.ENUM('leaked_check','tc_check'),
      allowNull: false,
      defaultValue: "leaked_check"
    },
    request_payload: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    page_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_request',
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
        name: "user_request_user_id_foreign",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_request_page_id_foreign",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
