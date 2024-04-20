const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BusinessSetting', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    gallery_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'gallery',
        key: 'id'
      }
    },
    timezone_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'timezones',
        key: 'id'
      }
    },
    business_name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    year_start_month: {
      type: DataTypes.ENUM('January','February','March','April','May','June','July','August','September','October','November','December'),
      allowNull: false,
      defaultValue: "January"
    },
    transaction_edit_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_format: {
      type: DataTypes.ENUM('mm/dd/yyyy','mm-dd-yyyy','dd-mm-yyyy','dd/mm/yyyy'),
      allowNull: false
    },
    time_format: {
      type: DataTypes.ENUM('12 hr','24 hr'),
      allowNull: false
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
    tableName: 'business_setting',
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
        name: "business_setting_created_by_foreign",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "business_setting_gallery_id_foreign",
        using: "BTREE",
        fields: [
          { name: "gallery_id" },
        ]
      },
      {
        name: "business_setting_timezone_id_foreign",
        using: "BTREE",
        fields: [
          { name: "timezone_id" },
        ]
      },
      {
        name: "business_setting_updated_by_foreign",
        using: "BTREE",
        fields: [
          { name: "updated_by" },
        ]
      },
    ]
  });
};
