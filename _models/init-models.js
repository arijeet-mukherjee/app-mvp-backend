var DataTypes = require("sequelize").DataTypes;
var _Accounts = require("./Accounts");
var _AttributeDetail = require("./AttributeDetail");
var _Attributes = require("./Attributes");
var _Banners = require("./Banners");
var _BlogCategories = require("./BlogCategories");
var _BlogCategoryDetail = require("./BlogCategoryDetail");
var _BlogNews = require("./BlogNews");
var _BlogNewsDetail = require("./BlogNewsDetail");
var _BusinessSetting = require("./BusinessSetting");
var _CartItems = require("./CartItems");
var _Categories = require("./Categories");
var _CategoryDetail = require("./CategoryDetail");
var _Compares = require("./Compares");
var _ConstantBanners = require("./ConstantBanners");
var _Countries = require("./Countries");
var _CouponOrder = require("./CouponOrder");
var _CouponSetting = require("./CouponSetting");
var _Currency = require("./Currency");
var _CurrentTheme = require("./CurrentTheme");
var _CustomCssJs = require("./CustomCssJs");
var _CustomerAddressBook = require("./CustomerAddressBook");
var _CustomerOrderAmount = require("./CustomerOrderAmount");
var _Customers = require("./Customers");
var _DefaultAccounts = require("./DefaultAccounts");
var _DemoSettings = require("./DemoSettings");
var _EmailTemplateSettings = require("./EmailTemplateSettings");
var _FailedJobs = require("./FailedJobs");
var _Gallery = require("./Gallery");
var _GalleryDetail = require("./GalleryDetail");
var _GalleryTags = require("./GalleryTags");
var _HomeBanners = require("./HomeBanners");
var _Languages = require("./Languages");
var _LeakCred = require("./LeakCred");
var _LeakCredDetail = require("./LeakCredDetail");
var _Localizations = require("./Localizations");
var _Membership = require("./Membership");
var _MenuBuilders = require("./MenuBuilders");
var _MenuDetails = require("./MenuDetails");
var _Menus = require("./Menus");
var _Migrations = require("./Migrations");
var _Newsletter = require("./Newsletter");
var _OauthAccessTokens = require("./OauthAccessTokens");
var _OauthAuthCodes = require("./OauthAuthCodes");
var _OauthClients = require("./OauthClients");
var _OauthPersonalAccessClients = require("./OauthPersonalAccessClients");
var _OauthRefreshTokens = require("./OauthRefreshTokens");
var _OrderComments = require("./OrderComments");
var _OrderDetail = require("./OrderDetail");
var _OrderHistories = require("./OrderHistories");
var _OrderNotes = require("./OrderNotes");
var _Orders = require("./Orders");
var _PageDetail = require("./PageDetail");
var _Pages = require("./Pages");
var _PasswordResets = require("./PasswordResets");
var _PaymentMethodDescriptions = require("./PaymentMethodDescriptions");
var _PaymentMethodSettings = require("./PaymentMethodSettings");
var _PaymentMethods = require("./PaymentMethods");
var _Permission = require("./Permission");
var _PermissionRole = require("./PermissionRole");
var _PersonalAccessTokens = require("./PersonalAccessTokens");
var _Points = require("./Points");
var _ProductAttribute = require("./ProductAttribute");
var _ProductCategory = require("./ProductCategory");
var _ProductCombination = require("./ProductCombination");
var _ProductCombinationDtl = require("./ProductCombinationDtl");
var _ProductComments = require("./ProductComments");
var _ProductDetail = require("./ProductDetail");
var _ProductGalleryDetails = require("./ProductGalleryDetails");
var _ProductReview = require("./ProductReview");
var _ProductVariation = require("./ProductVariation");
var _Products = require("./Products");
var _Roles = require("./Roles");
var _Sales = require("./Sales");
var _Settings = require("./Settings");
var _ShippingMethodDescriptions = require("./ShippingMethodDescriptions");
var _ShippingMethods = require("./ShippingMethods");
var _SliderNavigation = require("./SliderNavigation");
var _SliderTypes = require("./SliderTypes");
var _Sliders = require("./Sliders");
var _States = require("./States");
var _Tags = require("./Tags");
var _TaxRates = require("./TaxRates");
var _Taxes = require("./Taxes");
var _Timezones = require("./Timezones");
var _TopOffer = require("./TopOffer");
var _TopSellingProducts = require("./TopSellingProducts");
var _TransactionDetail = require("./TransactionDetail");
var _Transactions = require("./Transactions");
var _UnitDetail = require("./UnitDetail");
var _Units = require("./Units");
var _UserRequest = require("./UserRequest");
var _Users = require("./Users");
var _VariationDetail = require("./VariationDetail");
var _Variations = require("./Variations");
var _Wishlist = require("./Wishlist");

function initModels(sequelize) {
  var Accounts = _Accounts(sequelize, DataTypes);
  var AttributeDetail = _AttributeDetail(sequelize, DataTypes);
  var Attributes = _Attributes(sequelize, DataTypes);
  var Banners = _Banners(sequelize, DataTypes);
  var BlogCategories = _BlogCategories(sequelize, DataTypes);
  var BlogCategoryDetail = _BlogCategoryDetail(sequelize, DataTypes);
  var BlogNews = _BlogNews(sequelize, DataTypes);
  var BlogNewsDetail = _BlogNewsDetail(sequelize, DataTypes);
  var BusinessSetting = _BusinessSetting(sequelize, DataTypes);
  var CartItems = _CartItems(sequelize, DataTypes);
  var Categories = _Categories(sequelize, DataTypes);
  var CategoryDetail = _CategoryDetail(sequelize, DataTypes);
  var Compares = _Compares(sequelize, DataTypes);
  var ConstantBanners = _ConstantBanners(sequelize, DataTypes);
  var Countries = _Countries(sequelize, DataTypes);
  var CouponOrder = _CouponOrder(sequelize, DataTypes);
  var CouponSetting = _CouponSetting(sequelize, DataTypes);
  var Currency = _Currency(sequelize, DataTypes);
  var CurrentTheme = _CurrentTheme(sequelize, DataTypes);
  var CustomCssJs = _CustomCssJs(sequelize, DataTypes);
  var CustomerAddressBook = _CustomerAddressBook(sequelize, DataTypes);
  var CustomerOrderAmount = _CustomerOrderAmount(sequelize, DataTypes);
  var Customers = _Customers(sequelize, DataTypes);
  var DefaultAccounts = _DefaultAccounts(sequelize, DataTypes);
  var DemoSettings = _DemoSettings(sequelize, DataTypes);
  var EmailTemplateSettings = _EmailTemplateSettings(sequelize, DataTypes);
  var FailedJobs = _FailedJobs(sequelize, DataTypes);
  var Gallery = _Gallery(sequelize, DataTypes);
  var GalleryDetail = _GalleryDetail(sequelize, DataTypes);
  var GalleryTags = _GalleryTags(sequelize, DataTypes);
  var HomeBanners = _HomeBanners(sequelize, DataTypes);
  var Languages = _Languages(sequelize, DataTypes);
  var LeakCred = _LeakCred(sequelize, DataTypes);
  var LeakCredDetail = _LeakCredDetail(sequelize, DataTypes);
  var Localizations = _Localizations(sequelize, DataTypes);
  var Membership = _Membership(sequelize, DataTypes);
  var MenuBuilders = _MenuBuilders(sequelize, DataTypes);
  var MenuDetails = _MenuDetails(sequelize, DataTypes);
  var Menus = _Menus(sequelize, DataTypes);
  var Migrations = _Migrations(sequelize, DataTypes);
  var Newsletter = _Newsletter(sequelize, DataTypes);
  var OauthAccessTokens = _OauthAccessTokens(sequelize, DataTypes);
  var OauthAuthCodes = _OauthAuthCodes(sequelize, DataTypes);
  var OauthClients = _OauthClients(sequelize, DataTypes);
  var OauthPersonalAccessClients = _OauthPersonalAccessClients(sequelize, DataTypes);
  var OauthRefreshTokens = _OauthRefreshTokens(sequelize, DataTypes);
  var OrderComments = _OrderComments(sequelize, DataTypes);
  var OrderDetail = _OrderDetail(sequelize, DataTypes);
  var OrderHistories = _OrderHistories(sequelize, DataTypes);
  var OrderNotes = _OrderNotes(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var PageDetail = _PageDetail(sequelize, DataTypes);
  var Pages = _Pages(sequelize, DataTypes);
  var PasswordResets = _PasswordResets(sequelize, DataTypes);
  var PaymentMethodDescriptions = _PaymentMethodDescriptions(sequelize, DataTypes);
  var PaymentMethodSettings = _PaymentMethodSettings(sequelize, DataTypes);
  var PaymentMethods = _PaymentMethods(sequelize, DataTypes);
  var Permission = _Permission(sequelize, DataTypes);
  var PermissionRole = _PermissionRole(sequelize, DataTypes);
  var PersonalAccessTokens = _PersonalAccessTokens(sequelize, DataTypes);
  var Points = _Points(sequelize, DataTypes);
  var ProductAttribute = _ProductAttribute(sequelize, DataTypes);
  var ProductCategory = _ProductCategory(sequelize, DataTypes);
  var ProductCombination = _ProductCombination(sequelize, DataTypes);
  var ProductCombinationDtl = _ProductCombinationDtl(sequelize, DataTypes);
  var ProductComments = _ProductComments(sequelize, DataTypes);
  var ProductDetail = _ProductDetail(sequelize, DataTypes);
  var ProductGalleryDetails = _ProductGalleryDetails(sequelize, DataTypes);
  var ProductReview = _ProductReview(sequelize, DataTypes);
  var ProductVariation = _ProductVariation(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var Sales = _Sales(sequelize, DataTypes);
  var Settings = _Settings(sequelize, DataTypes);
  var ShippingMethodDescriptions = _ShippingMethodDescriptions(sequelize, DataTypes);
  var ShippingMethods = _ShippingMethods(sequelize, DataTypes);
  var SliderNavigation = _SliderNavigation(sequelize, DataTypes);
  var SliderTypes = _SliderTypes(sequelize, DataTypes);
  var Sliders = _Sliders(sequelize, DataTypes);
  var States = _States(sequelize, DataTypes);
  var Tags = _Tags(sequelize, DataTypes);
  var TaxRates = _TaxRates(sequelize, DataTypes);
  var Taxes = _Taxes(sequelize, DataTypes);
  var Timezones = _Timezones(sequelize, DataTypes);
  var TopOffer = _TopOffer(sequelize, DataTypes);
  var TopSellingProducts = _TopSellingProducts(sequelize, DataTypes);
  var TransactionDetail = _TransactionDetail(sequelize, DataTypes);
  var Transactions = _Transactions(sequelize, DataTypes);
  var UnitDetail = _UnitDetail(sequelize, DataTypes);
  var Units = _Units(sequelize, DataTypes);
  var UserRequest = _UserRequest(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var VariationDetail = _VariationDetail(sequelize, DataTypes);
  var Variations = _Variations(sequelize, DataTypes);
  var Wishlist = _Wishlist(sequelize, DataTypes);

  DefaultAccounts.belongsTo(Accounts, { as: "account", foreignKey: "account_id"});
  Accounts.hasMany(DefaultAccounts, { as: "default_accounts", foreignKey: "account_id"});
  TransactionDetail.belongsTo(Accounts, { as: "account", foreignKey: "account_id"});
  Accounts.hasMany(TransactionDetail, { as: "transaction_details", foreignKey: "account_id"});
  AttributeDetail.belongsTo(Attributes, { as: "attribute", foreignKey: "attribute_id"});
  Attributes.hasMany(AttributeDetail, { as: "attribute_details", foreignKey: "attribute_id"});
  ProductAttribute.belongsTo(Attributes, { as: "attribute", foreignKey: "attribute_id"});
  Attributes.hasMany(ProductAttribute, { as: "product_attributes", foreignKey: "attribute_id"});
  Variations.belongsTo(Attributes, { as: "attribute", foreignKey: "attribute_id"});
  Attributes.hasMany(Variations, { as: "variations", foreignKey: "attribute_id"});
  BlogCategoryDetail.belongsTo(BlogCategories, { as: "blog_category", foreignKey: "blog_category_id"});
  BlogCategories.hasMany(BlogCategoryDetail, { as: "blog_category_details", foreignKey: "blog_category_id"});
  BlogNews.belongsTo(BlogCategories, { as: "blog_category", foreignKey: "blog_category_id"});
  BlogCategories.hasMany(BlogNews, { as: "blog_news", foreignKey: "blog_category_id"});
  BlogNewsDetail.belongsTo(BlogNews, { as: "blog_new", foreignKey: "blog_news_id"});
  BlogNews.hasMany(BlogNewsDetail, { as: "blog_news_details", foreignKey: "blog_news_id"});
  CategoryDetail.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
  Categories.hasMany(CategoryDetail, { as: "category_details", foreignKey: "category_id"});
  ProductCategory.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
  Categories.hasMany(ProductCategory, { as: "product_categories", foreignKey: "category_id"});
  CustomerAddressBook.belongsTo(Countries, { as: "country", foreignKey: "country_id"});
  Countries.hasMany(CustomerAddressBook, { as: "customer_address_books", foreignKey: "country_id"});
  States.belongsTo(Countries, { as: "country", foreignKey: "country_id"});
  Countries.hasMany(States, { as: "states", foreignKey: "country_id"});
  TaxRates.belongsTo(Countries, { as: "country", foreignKey: "country_id"});
  Countries.hasMany(TaxRates, { as: "tax_rates", foreignKey: "country_id"});
  Orders.belongsTo(Currency, { as: "currency", foreignKey: "currency_id"});
  Currency.hasMany(Orders, { as: "orders", foreignKey: "currency_id"});
  Compares.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(Compares, { as: "compares", foreignKey: "customer_id"});
  CustomerAddressBook.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(CustomerAddressBook, { as: "customer_address_books", foreignKey: "customer_id"});
  OrderComments.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(OrderComments, { as: "order_comments", foreignKey: "customer_id"});
  Orders.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(Orders, { as: "orders", foreignKey: "customer_id"});
  ProductComments.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(ProductComments, { as: "product_comments", foreignKey: "customer_id"});
  ProductReview.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(ProductReview, { as: "product_reviews", foreignKey: "customer_id"});
  Wishlist.belongsTo(Customers, { as: "customer", foreignKey: "customer_id"});
  Customers.hasMany(Wishlist, { as: "wishlists", foreignKey: "customer_id"});
  Banners.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Banners, { as: "banners", foreignKey: "gallery_id"});
  BlogCategories.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(BlogCategories, { as: "blog_categories", foreignKey: "gallery_id"});
  BlogNews.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(BlogNews, { as: "blog_news", foreignKey: "gallery_id"});
  BusinessSetting.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(BusinessSetting, { as: "business_settings", foreignKey: "gallery_id"});
  Categories.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Categories, { as: "categories", foreignKey: "gallery_id"});
  Customers.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Customers, { as: "customers", foreignKey: "gallery_id"});
  GalleryDetail.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(GalleryDetail, { as: "gallery_details", foreignKey: "gallery_id"});
  GalleryTags.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(GalleryTags, { as: "gallery_tags", foreignKey: "gallery_id"});
  Newsletter.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Newsletter, { as: "newsletters", foreignKey: "gallery_id"});
  ProductCombination.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(ProductCombination, { as: "product_combinations", foreignKey: "gallery_id"});
  ProductGalleryDetails.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(ProductGalleryDetails, { as: "product_gallery_details", foreignKey: "gallery_id"});
  Products.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Products, { as: "products", foreignKey: "gallery_id"});
  Sliders.belongsTo(Gallery, { as: "gallery", foreignKey: "gallery_id"});
  Gallery.hasMany(Sliders, { as: "sliders", foreignKey: "gallery_id"});
  AttributeDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(AttributeDetail, { as: "attribute_details", foreignKey: "language_id"});
  Banners.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(Banners, { as: "banners", foreignKey: "language_id"});
  BlogCategoryDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(BlogCategoryDetail, { as: "blog_category_details", foreignKey: "language_id"});
  BlogNewsDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(BlogNewsDetail, { as: "blog_news_details", foreignKey: "language_id"});
  CategoryDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(CategoryDetail, { as: "category_details", foreignKey: "language_id"});
  PaymentMethodDescriptions.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(PaymentMethodDescriptions, { as: "payment_method_descriptions", foreignKey: "language_id"});
  ProductDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(ProductDetail, { as: "product_details", foreignKey: "language_id"});
  Sliders.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(Sliders, { as: "sliders", foreignKey: "language_id"});
  TopOffer.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(TopOffer, { as: "top_offers", foreignKey: "language_id"});
  UnitDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(UnitDetail, { as: "unit_details", foreignKey: "language_id"});
  VariationDetail.belongsTo(Languages, { as: "language", foreignKey: "language_id"});
  Languages.hasMany(VariationDetail, { as: "variation_details", foreignKey: "language_id"});
  LeakCredDetail.belongsTo(LeakCred, { as: "lc", foreignKey: "lc_id"});
  LeakCred.hasMany(LeakCredDetail, { as: "leak_cred_details", foreignKey: "lc_id"});
  MenuDetails.belongsTo(Menus, { as: "menu", foreignKey: "menu_id"});
  Menus.hasMany(MenuDetails, { as: "menu_details", foreignKey: "menu_id"});
  OrderComments.belongsTo(Orders, { as: "order", foreignKey: "order_id"});
  Orders.hasMany(OrderComments, { as: "order_comments", foreignKey: "order_id"});
  OrderDetail.belongsTo(Orders, { as: "order", foreignKey: "order_id"});
  Orders.hasMany(OrderDetail, { as: "order_details", foreignKey: "order_id"});
  OrderHistories.belongsTo(Orders, { as: "order", foreignKey: "order_id"});
  Orders.hasMany(OrderHistories, { as: "order_histories", foreignKey: "order_id"});
  OrderNotes.belongsTo(Orders, { as: "order", foreignKey: "order_id"});
  Orders.hasMany(OrderNotes, { as: "order_notes", foreignKey: "order_id"});
  Banners.belongsTo(Pages, { as: "page", foreignKey: "page_id"});
  Pages.hasMany(Banners, { as: "banners", foreignKey: "page_id"});
  PageDetail.belongsTo(Pages, { as: "page", foreignKey: "page_id"});
  Pages.hasMany(PageDetail, { as: "page_details", foreignKey: "page_id"});
  UserRequest.belongsTo(Pages, { as: "page", foreignKey: "page_id"});
  Pages.hasMany(UserRequest, { as: "user_requests", foreignKey: "page_id"});
  PaymentMethodDescriptions.belongsTo(PaymentMethods, { as: "payment_method", foreignKey: "payment_method_id"});
  PaymentMethods.hasMany(PaymentMethodDescriptions, { as: "payment_method_descriptions", foreignKey: "payment_method_id"});
  PaymentMethodSettings.belongsTo(PaymentMethods, { as: "payment_method", foreignKey: "payment_method_id"});
  PaymentMethods.hasMany(PaymentMethodSettings, { as: "payment_method_settings", foreignKey: "payment_method_id"});
  PermissionRole.belongsTo(Permission, { as: "permission", foreignKey: "permission_id"});
  Permission.hasMany(PermissionRole, { as: "permission_roles", foreignKey: "permission_id"});
  ProductVariation.belongsTo(ProductAttribute, { as: "product_attribute", foreignKey: "product_attribute_id"});
  ProductAttribute.hasMany(ProductVariation, { as: "product_variations", foreignKey: "product_attribute_id"});
  CartItems.belongsTo(ProductCombination, { as: "product_combination", foreignKey: "product_combination_id"});
  ProductCombination.hasMany(CartItems, { as: "cart_items", foreignKey: "product_combination_id"});
  OrderDetail.belongsTo(ProductCombination, { as: "product_combination", foreignKey: "product_combination_id"});
  ProductCombination.hasMany(OrderDetail, { as: "order_details", foreignKey: "product_combination_id"});
  ProductCombinationDtl.belongsTo(ProductCombination, { as: "product_combination", foreignKey: "product_combination_id"});
  ProductCombination.hasMany(ProductCombinationDtl, { as: "product_combination_dtls", foreignKey: "product_combination_id"});
  CartItems.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(CartItems, { as: "cart_items", foreignKey: "product_id"});
  Compares.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(Compares, { as: "compares", foreignKey: "product_id"});
  OrderDetail.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(OrderDetail, { as: "order_details", foreignKey: "product_id"});
  ProductAttribute.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductAttribute, { as: "product_attributes", foreignKey: "product_id"});
  ProductCategory.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductCategory, { as: "product_categories", foreignKey: "product_id"});
  ProductCombination.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductCombination, { as: "product_combinations", foreignKey: "product_id"});
  ProductCombinationDtl.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductCombinationDtl, { as: "product_combination_dtls", foreignKey: "product_id"});
  ProductComments.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductComments, { as: "product_comments", foreignKey: "product_id"});
  ProductDetail.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductDetail, { as: "product_details", foreignKey: "product_id"});
  ProductGalleryDetails.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductGalleryDetails, { as: "product_gallery_details", foreignKey: "product_id"});
  ProductReview.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductReview, { as: "product_reviews", foreignKey: "product_id"});
  Wishlist.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(Wishlist, { as: "wishlists", foreignKey: "product_id"});
  PermissionRole.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
  Roles.hasMany(PermissionRole, { as: "permission_roles", foreignKey: "role_id"});
  Users.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
  Roles.hasMany(Users, { as: "users", foreignKey: "role_id"});
  Banners.belongsTo(SliderNavigation, { as: "slider_navigation", foreignKey: "slider_navigation_id"});
  SliderNavigation.hasMany(Banners, { as: "banners", foreignKey: "slider_navigation_id"});
  Sliders.belongsTo(SliderNavigation, { as: "slider_navigation", foreignKey: "slider_navigation_id"});
  SliderNavigation.hasMany(Sliders, { as: "sliders", foreignKey: "slider_navigation_id"});
  Sliders.belongsTo(SliderTypes, { as: "slider_type", foreignKey: "slider_type_id"});
  SliderTypes.hasMany(Sliders, { as: "sliders", foreignKey: "slider_type_id"});
  CustomerAddressBook.belongsTo(States, { as: "state", foreignKey: "state_id"});
  States.hasMany(CustomerAddressBook, { as: "customer_address_books", foreignKey: "state_id"});
  TaxRates.belongsTo(States, { as: "state", foreignKey: "state_id"});
  States.hasMany(TaxRates, { as: "tax_rates", foreignKey: "state_id"});
  GalleryTags.belongsTo(Tags, { as: "tag", foreignKey: "tag_id"});
  Tags.hasMany(GalleryTags, { as: "gallery_tags", foreignKey: "tag_id"});
  Products.belongsTo(Taxes, { as: "tax", foreignKey: "tax_id"});
  Taxes.hasMany(Products, { as: "products", foreignKey: "tax_id"});
  TaxRates.belongsTo(Taxes, { as: "tax", foreignKey: "tax_id"});
  Taxes.hasMany(TaxRates, { as: "tax_rates", foreignKey: "tax_id"});
  BusinessSetting.belongsTo(Timezones, { as: "timezone", foreignKey: "timezone_id"});
  Timezones.hasMany(BusinessSetting, { as: "business_settings", foreignKey: "timezone_id"});
  TransactionDetail.belongsTo(Transactions, { as: "transaction", foreignKey: "transaction_id"});
  Transactions.hasMany(TransactionDetail, { as: "transaction_details", foreignKey: "transaction_id"});
  UnitDetail.belongsTo(Units, { as: "unit", foreignKey: "unit_id"});
  Units.hasMany(UnitDetail, { as: "unit_details", foreignKey: "unit_id"});
  Attributes.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Attributes, { as: "attributes", foreignKey: "created_by"});
  Attributes.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Attributes, { as: "updated_by_attributes", foreignKey: "updated_by"});
  BlogCategories.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(BlogCategories, { as: "blog_categories", foreignKey: "created_by"});
  BlogCategories.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(BlogCategories, { as: "updated_by_blog_categories", foreignKey: "updated_by"});
  BlogNews.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(BlogNews, { as: "blog_news", foreignKey: "created_by"});
  BlogNews.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(BlogNews, { as: "updated_by_blog_news", foreignKey: "updated_by"});
  BusinessSetting.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(BusinessSetting, { as: "business_settings", foreignKey: "created_by"});
  BusinessSetting.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(BusinessSetting, { as: "updated_by_business_settings", foreignKey: "updated_by"});
  Categories.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Categories, { as: "categories", foreignKey: "created_by"});
  Categories.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Categories, { as: "updated_by_categories", foreignKey: "updated_by"});
  CouponSetting.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(CouponSetting, { as: "coupon_settings", foreignKey: "created_by"});
  CouponSetting.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(CouponSetting, { as: "updated_by_coupon_settings", foreignKey: "updated_by"});
  Currency.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Currency, { as: "currencies", foreignKey: "created_by"});
  Currency.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Currency, { as: "updated_by_currencies", foreignKey: "updated_by"});
  CurrentTheme.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(CurrentTheme, { as: "current_themes", foreignKey: "created_by"});
  CurrentTheme.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(CurrentTheme, { as: "updated_by_current_themes", foreignKey: "updated_by"});
  EmailTemplateSettings.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(EmailTemplateSettings, { as: "email_template_settings", foreignKey: "created_by"});
  EmailTemplateSettings.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(EmailTemplateSettings, { as: "updated_by_email_template_settings", foreignKey: "updated_by"});
  Gallery.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Gallery, { as: "galleries", foreignKey: "created_by"});
  Gallery.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Gallery, { as: "updated_by_galleries", foreignKey: "updated_by"});
  Gallery.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Gallery, { as: "user_galleries", foreignKey: "user_id"});
  Languages.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Languages, { as: "languages", foreignKey: "created_by"});
  Languages.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Languages, { as: "updated_by_languages", foreignKey: "updated_by"});
  OrderComments.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(OrderComments, { as: "order_comments", foreignKey: "user_id"});
  PaymentMethods.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(PaymentMethods, { as: "payment_methods", foreignKey: "created_by"});
  PaymentMethods.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(PaymentMethods, { as: "updated_by_payment_methods", foreignKey: "updated_by"});
  PermissionRole.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(PermissionRole, { as: "permission_roles", foreignKey: "created_by"});
  PermissionRole.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(PermissionRole, { as: "updated_by_permission_roles", foreignKey: "updated_by"});
  Products.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Products, { as: "products", foreignKey: "created_by"});
  Products.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Products, { as: "updated_by_products", foreignKey: "updated_by"});
  Products.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(Products, { as: "user_products", foreignKey: "user_id"});
  Settings.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Settings, { as: "settings", foreignKey: "created_by"});
  Settings.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Settings, { as: "updated_by_settings", foreignKey: "updated_by"});
  ShippingMethods.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(ShippingMethods, { as: "shipping_methods", foreignKey: "created_by"});
  ShippingMethods.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(ShippingMethods, { as: "updated_by_shipping_methods", foreignKey: "updated_by"});
  Sliders.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Sliders, { as: "sliders", foreignKey: "created_by"});
  Sliders.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Sliders, { as: "updated_by_sliders", foreignKey: "updated_by"});
  Tags.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Tags, { as: "tags", foreignKey: "created_by"});
  Tags.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Tags, { as: "updated_by_tags", foreignKey: "updated_by"});
  TaxRates.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(TaxRates, { as: "tax_rates", foreignKey: "created_by"});
  TaxRates.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(TaxRates, { as: "updated_by_tax_rates", foreignKey: "updated_by"});
  Taxes.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Taxes, { as: "taxes", foreignKey: "created_by"});
  Taxes.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Taxes, { as: "updated_by_taxes", foreignKey: "updated_by"});
  TopOffer.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(TopOffer, { as: "top_offers", foreignKey: "created_by"});
  TopOffer.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(TopOffer, { as: "updated_by_top_offers", foreignKey: "updated_by"});
  Units.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Units, { as: "units", foreignKey: "created_by"});
  Units.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Units, { as: "updated_by_units", foreignKey: "updated_by"});
  UserRequest.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(UserRequest, { as: "user_requests", foreignKey: "user_id"});
  Users.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Users, { as: "users", foreignKey: "created_by"});
  Users.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Users, { as: "updated_by_users", foreignKey: "updated_by"});
  Variations.belongsTo(Users, { as: "created_by_user", foreignKey: "created_by"});
  Users.hasMany(Variations, { as: "variations", foreignKey: "created_by"});
  Variations.belongsTo(Users, { as: "updated_by_user", foreignKey: "updated_by"});
  Users.hasMany(Variations, { as: "updated_by_variations", foreignKey: "updated_by"});
  ProductCombinationDtl.belongsTo(Variations, { as: "variation", foreignKey: "variation_id"});
  Variations.hasMany(ProductCombinationDtl, { as: "product_combination_dtls", foreignKey: "variation_id"});
  ProductVariation.belongsTo(Variations, { as: "variation", foreignKey: "variation_id"});
  Variations.hasMany(ProductVariation, { as: "product_variations", foreignKey: "variation_id"});
  VariationDetail.belongsTo(Variations, { as: "variation", foreignKey: "variation_id"});
  Variations.hasMany(VariationDetail, { as: "variation_details", foreignKey: "variation_id"});

  return {
    Accounts,
    AttributeDetail,
    Attributes,
    Banners,
    BlogCategories,
    BlogCategoryDetail,
    BlogNews,
    BlogNewsDetail,
    BusinessSetting,
    CartItems,
    Categories,
    CategoryDetail,
    Compares,
    ConstantBanners,
    Countries,
    CouponOrder,
    CouponSetting,
    Currency,
    CurrentTheme,
    CustomCssJs,
    CustomerAddressBook,
    CustomerOrderAmount,
    Customers,
    DefaultAccounts,
    DemoSettings,
    EmailTemplateSettings,
    FailedJobs,
    Gallery,
    GalleryDetail,
    GalleryTags,
    HomeBanners,
    Languages,
    LeakCred,
    LeakCredDetail,
    Localizations,
    Membership,
    MenuBuilders,
    MenuDetails,
    Menus,
    Migrations,
    Newsletter,
    OauthAccessTokens,
    OauthAuthCodes,
    OauthClients,
    OauthPersonalAccessClients,
    OauthRefreshTokens,
    OrderComments,
    OrderDetail,
    OrderHistories,
    OrderNotes,
    Orders,
    PageDetail,
    Pages,
    PasswordResets,
    PaymentMethodDescriptions,
    PaymentMethodSettings,
    PaymentMethods,
    Permission,
    PermissionRole,
    PersonalAccessTokens,
    Points,
    ProductAttribute,
    ProductCategory,
    ProductCombination,
    ProductCombinationDtl,
    ProductComments,
    ProductDetail,
    ProductGalleryDetails,
    ProductReview,
    ProductVariation,
    Products,
    Roles,
    Sales,
    Settings,
    ShippingMethodDescriptions,
    ShippingMethods,
    SliderNavigation,
    SliderTypes,
    Sliders,
    States,
    Tags,
    TaxRates,
    Taxes,
    Timezones,
    TopOffer,
    TopSellingProducts,
    TransactionDetail,
    Transactions,
    UnitDetail,
    Units,
    UserRequest,
    Users,
    VariationDetail,
    Variations,
    Wishlist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
