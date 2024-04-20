const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TopSellingProducts', {
    qty: {
      type: DataTypes.DECIMAL(32,0),
      allowNull: true
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'top_selling_products',
    timestamps: false
  });
};
