const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'gallery',
        key: 'id'
      }
    },
    is_seen: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "0 for active & 1 for delete"
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    provider_id: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    forget_hash: {
      type: DataTypes.STRING(191),
      allowNull: true
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
    remember_token: {
      type: DataTypes.STRING(100),
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
    tableName: 'customers',
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
        name: "customers_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
    ]
  });
};
