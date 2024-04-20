const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerOrderAmount', {
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    order_amount: {
      type: DataTypes.DOUBLE(19,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customer_order_amount',
    timestamps: false
  });
};
