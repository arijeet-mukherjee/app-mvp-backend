const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerAddressBook', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    gender: {
      type: DataTypes.ENUM('Male','Female','Other'),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    street_address: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    suburb: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    country_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'states',
        key: 'id'
      }
    },
    lattitude: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    longitude: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    latlong: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "default"
    }
  }, {
    sequelize,
    tableName: 'customer_address_book',
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
        name: "customer_address_book_country_id_foreign",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "customer_address_book_customer_id_foreign",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "customer_address_book_state_id_foreign",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
