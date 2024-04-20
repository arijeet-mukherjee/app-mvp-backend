const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OauthClients', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    redirect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    personal_access_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    revoked: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'oauth_clients',
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
