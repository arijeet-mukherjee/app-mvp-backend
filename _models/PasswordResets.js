const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PasswordResets', {
    email: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'password_resets',
    timestamps: false
  });
};
