const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Points', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    points: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('checkin_point','product_share_point','invite_friend_share_point','per_order_point','redeem'),
      allowNull: false
    },
    reference_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "0",
      comment: "o for not redeem 1 for redeem"
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
    tableName: 'points',
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
