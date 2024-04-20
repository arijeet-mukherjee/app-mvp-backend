const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxRates', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tax_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'taxes',
        key: 'id'
      }
    },
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'states',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'countries',
        key: 'id'
      }
    },
    tax_rate: {
      type: DataTypes.DOUBLE(8,2),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    deleted_at: {
      type: DataTypes.DATE,
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
    tableName: 'tax_rates',
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
        name: "tax_rates_country_id_foreign",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "tax_rates_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "tax_rates_state_id_foreign",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "tax_rates_tax_id_foreign",
        using: "BTREE",
        fields: [
          { name: "tax_id" },
        ]
      },
      {
        name: "tax_rates_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  });
};
