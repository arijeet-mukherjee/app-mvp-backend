const config = require('../config.js');
const { Sequelize, DataTypes } = require('sequelize');
const db = {};
initializeDb();
async function initializeDb() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    // const connection = await mysql.createConnection({ host, port, user, password });
    // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, {
        host: host,
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    db.sequelize = sequelize;

    //TODO : init models and add them to the exported db object 
    db.Accounts = require('../_models/Accounts')(sequelize, DataTypes);
    db.AttributeDetail = require('../_models/AttributeDetail')(sequelize, DataTypes);
    db.Attributes = require('../_models/Attributes')(sequelize, DataTypes);
    db.Banners = require('../_models/Banners')(sequelize, DataTypes);
    db.BlogCategories = require('../_models/BlogCategories')(sequelize, DataTypes);
    db.BlogCategoryDetail = require('../_models/BlogCategoryDetail')(sequelize, DataTypes);
    db.BlogNews = require('../_models/BlogNews')(sequelize, DataTypes);
    db.BlogNewsDetail = require('../_models/BlogNewsDetail')(sequelize, DataTypes);
    db.BusinessSetting = require('../_models/BusinessSetting')(sequelize, DataTypes);
    db.CartItems = require('../_models/CartItems')(sequelize, DataTypes);
    db.Categories = require('../_models/Categories')(sequelize, DataTypes);
    db.CategoryDetail = require('../_models/CategoryDetail')(sequelize, DataTypes);
    db.Compares = require('../_models/Compares')(sequelize, DataTypes);
    db.ConstantBanners = require('../_models/ConstantBanners')(sequelize, DataTypes);
    db.Countries = require('../_models/Countries')(sequelize, DataTypes);
    db.CouponOrder = require('../_models/CouponOrder')(sequelize, DataTypes);
    db.CouponSetting = require('../_models/CouponSetting')(sequelize, DataTypes);
    db.Currency = require('../_models/Currency')(sequelize, DataTypes);
    db.CurrentTheme = require('../_models/CurrentTheme')(sequelize, DataTypes);
    db.CustomCssJs = require('../_models/CustomCssJs')(sequelize, DataTypes);
    db.CustomerAddressBook = require('../_models/CustomerAddressBook')(sequelize, DataTypes);
    db.CustomerOrderAmount = require('../_models/CustomerOrderAmount')(sequelize, DataTypes);
    db.Customers = require('../_models/Customers')(sequelize, DataTypes);
    db.DefaultAccounts = require('../_models/DefaultAccounts')(sequelize, DataTypes);
    // db.demo.model = require('../_models/demo.model')(sequelize, DataTypes);
    db.DemoSettings = require('../_models/DemoSettings')(sequelize, DataTypes);
    db.EmailTemplateSettings = require('../_models/EmailTemplateSettings')(sequelize, DataTypes);
    db.FailedJobs = require('../_models/FailedJobs')(sequelize, DataTypes);
    db.Gallery = require('../_models/Gallery')(sequelize, DataTypes);
    db.GalleryDetail = require('../_models/GalleryDetail')(sequelize, DataTypes);
    db.GalleryTags = require('../_models/GalleryTags')(sequelize, DataTypes);
    db.HomeBanners = require('../_models/HomeBanners')(sequelize, DataTypes);
    db.Languages = require('../_models/Languages')(sequelize, DataTypes);    
    db.LeakCred = require('../_models/LeakCred')(sequelize, DataTypes);
    // db.leakcred.model = require('../_models/leakcred.model')(sequelize, DataTypes);
    db.LeakCredDetail = require('../_models/LeakCredDetail')(sequelize, DataTypes);
    // db.leakcreddetail.model = require('../_models/leakcreddetail.model')(sequelize, DataTypes);
    db.Localizations = require('../_models/Localizations')(sequelize, DataTypes);
    db.Membership = require('../_models/Membership')(sequelize, DataTypes);
    db.MenuBuilders = require('../_models/MenuBuilders')(sequelize, DataTypes);
    db.MenuDetails = require('../_models/MenuDetails')(sequelize, DataTypes);
    db.Menus = require('../_models/Menus')(sequelize, DataTypes);
    db.Migrations = require('../_models/Migrations')(sequelize, DataTypes);
    db.Newsletter = require('../_models/Newsletter')(sequelize, DataTypes);
    db.OauthAccessTokens = require('../_models/OauthAccessTokens')(sequelize, DataTypes);
    db.OauthAuthCodes = require('../_models/OauthAuthCodes')(sequelize, DataTypes);
    db.OauthClients = require('../_models/OauthClients')(sequelize, DataTypes);
    db.OauthPersonalAccessClients = require('../_models/OauthPersonalAccessClients')(sequelize, DataTypes);
    db.OauthRefreshTokens = require('../_models/OauthRefreshTokens')(sequelize, DataTypes);
    db.OrderComments = require('../_models/OrderComments')(sequelize, DataTypes);
    db.OrderDetail = require('../_models/OrderDetail')(sequelize, DataTypes);
    db.OrderHistories = require('../_models/OrderHistories')(sequelize, DataTypes);
    db.OrderNotes = require('../_models/OrderNotes')(sequelize, DataTypes);
    db.Orders = require('../_models/Orders')(sequelize, DataTypes);
    db.PageDetail = require('../_models/PageDetail')(sequelize, DataTypes);
    db.Pages = require('../_models/Pages')(sequelize, DataTypes);
    db.PasswordResets = require('../_models/PasswordResets')(sequelize, DataTypes);
    db.PaymentMethodDescriptions = require('../_models/PaymentMethodDescriptions')(sequelize, DataTypes);
    db.PaymentMethods = require('../_models/PaymentMethods')(sequelize, DataTypes);
    db.PaymentMethodSettings = require('../_models/PaymentMethodSettings')(sequelize, DataTypes);
    db.Permission = require('../_models/Permission')(sequelize, DataTypes);
    db.PermissionRole = require('../_models/PermissionRole')(sequelize, DataTypes);
    db.PersonalAccessTokens = require('../_models/PersonalAccessTokens')(sequelize, DataTypes);
    db.Points = require('../_models/Points')(sequelize, DataTypes);
    db.ProductAttribute = require('../_models/ProductAttribute')(sequelize, DataTypes);
    db.ProductCategory = require('../_models/ProductCategory')(sequelize, DataTypes);
    db.ProductCombination = require('../_models/ProductCombination')(sequelize, DataTypes);
    db.ProductCombinationDtl = require('../_models/ProductCombinationDtl')(sequelize, DataTypes);
    db.ProductComments = require('../_models/ProductComments')(sequelize, DataTypes);
    db.ProductDetail = require('../_models/ProductDetail')(sequelize, DataTypes);
    db.ProductGalleryDetails = require('../_models/ProductGalleryDetails')(sequelize, DataTypes);
    db.ProductReview = require('../_models/ProductReview')(sequelize, DataTypes);
    db.Products = require('../_models/Products')(sequelize, DataTypes);
    db.ProductVariation = require('../_models/ProductVariation')(sequelize, DataTypes);
    db.Roles = require('../_models/Roles')(sequelize, DataTypes);
    db.Sales = require('../_models/Sales')(sequelize, DataTypes);
    db.Settings = require('../_models/Settings')(sequelize, DataTypes);
    db.ShippingMethodDescriptions = require('../_models/ShippingMethodDescriptions')(sequelize, DataTypes);
    db.ShippingMethods = require('../_models/ShippingMethods')(sequelize, DataTypes);
    db.SliderNavigation = require('../_models/SliderNavigation')(sequelize, DataTypes);
    db.Sliders = require('../_models/Sliders')(sequelize, DataTypes);
    db.SliderTypes = require('../_models/SliderTypes')(sequelize, DataTypes);
    db.States = require('../_models/States')(sequelize, DataTypes);
    db.Tags = require('../_models/Tags')(sequelize, DataTypes);
    db.Taxes = require('../_models/Taxes')(sequelize, DataTypes);
    db.TaxRates = require('../_models/TaxRates')(sequelize, DataTypes);
    db.Timezones = require('../_models/Timezones')(sequelize, DataTypes);
    db.TopOffer = require('../_models/TopOffer')(sequelize, DataTypes);
    db.TopSellingProducts = require('../_models/TopSellingProducts')(sequelize, DataTypes);
    db.TransactionDetail = require('../_models/TransactionDetail')(sequelize, DataTypes);
    db.Transactions = require('../_models/Transactions')(sequelize, DataTypes);
    db.UnitDetail = require('../_models/UnitDetail')(sequelize, DataTypes);
    db.Units = require('../_models/Units')(sequelize, DataTypes);
    db.UserRequest = require('../_models/UserRequest')(sequelize, DataTypes);
    db.Users = require('../_models/Users')(sequelize, DataTypes);
    db.VariationDetail = require('../_models/VariationDetail')(sequelize, DataTypes);
    db.Variations = require('../_models/Variations')(sequelize, DataTypes);
    db.Wishlist = require('../_models/Wishlist')(sequelize, DataTypes);

    // sync all models with database
    // if(process.env.NODE_ENV === 'development'){
    //     await sequelize.sync();
    // }
    // else if(process.env.NODE_ENV === 'production'){
    //     await sequelize.sync();
    // }
}

module.exports = { db, initializeDb };  // Export the db object