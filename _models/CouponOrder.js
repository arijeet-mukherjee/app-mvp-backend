const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CouponOrder', {
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    coupon_code: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    num_of_usage: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coupon_order',
    timestamps: false
  });
};
