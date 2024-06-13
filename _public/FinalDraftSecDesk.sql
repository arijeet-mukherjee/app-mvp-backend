-- Author: @Arijeet mukherjee

-- 1. **`attributes` table**:
--    - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 2. **`attribute_detail` table**:
--    - Links `attribute_id` to the `id` column in the `attributes` table (with CASCADE behavior on delete and update).
--    - Links `language_id` to the `id` column in the `languages` table (with CASCADE behavior on delete and update).

-- 3. **`banners` table**:
--    - Links `gallery_id` to the `id` column in the `gallery` table (with CASCADE behavior on delete and update).
--    - Links `language_id` to the `id` column in the `languages` table.
--    - Links `slider_navigation_id` to the `id` column in the `slider_navigation` table (with CASCADE behavior on delete and update).

-- 4. **`blog_categories` table**:
--    - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.
--    - Links `gallery_id` to the `id` column in the `gallery` table.

-- 5. **`blog_category_detail` table**:
--    - Links `blog_category_id` to the `id` column in the `blog_categories` table.
--    - Links `language_id` to the `id` column in the `languages` table.

-- 6. **`blog_news` table**:
--    - Links `blog_category_id` to the `id` column in the `blog_categories` table.
--    - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.
--    - Links `gallery_id` to the `id` column in the `gallery` table.

-- 7. **`blog_news_detail` table**:
--    - Links `blog_news_id` to the `id` column in the `blog_news` table.
--    - Links `language_id` to the `id` column in the `languages` table.

-- 8. **`business_setting` table**:
--    - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.
--    - Links `gallery_id` to the `id` column in the `gallery` table.
--    - Links `timezone_id` to the `id` column in the `timezones` table.

-- 9. **`cart_items` table**:
--    - Links `product_combination_id` to the `id` column in the `product_combination` table.
--    - Links `product_id` to the `id` column in the `products` table.

-- 10. **`categories` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.
--     - Links `gallery_id` to the `id` column in the `gallery` table.

-- 11. **`category_detail` table**:
--     - Links `category_id` to the `id` column in the `categories` table.
--     - Links `language_id` to the `id` column in the `languages` table.

-- 12. **`compares` table**:
--     - Links `customer_id` to the `id` column in the `customers` table.
--     - Links `product_id` to the `id` column in the `products` table.

-- 13. **`coupon_setting` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 14. **`currency` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 15. **`current_theme` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 16. **`customers` table**:
--     - Links `gallery_id` to the `id` column in the `gallery` table.

-- 17. **`customer_address_book` table**:
--     - Links `country_id` to the `id` column in the `countries` table.
--     - Links `customer_id` to the `id` column in the `customers` table.
--     - Links `state_id` to the `id` column in the `states` table.

-- 18. **`default_accounts` table**:
--     - Links `account_id` to the `id` column in the `accounts` table (with CASCADE behavior on delete and update).

-- 19. **`email_template_settings` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 20. **`gallery` table**:
--     - Links `created_by`, `updated_by`, and `user_id` columns to the `id` column in the `users` table.

-- 21. **`gallery_detail` table**:
--     - Links `gallery_id` to the `id` column in the `gallery` table.

-- 22. **`gallery_tags` table**:
--     - Links `gallery_id` to the `id` column in the `gallery` table (with CASCADE behavior on delete and update).
--     - Links `tag_id` to the `id` column in the `tags` table (with CASCADE behavior on delete and update).

-- 23. **`languages` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 24. **`menu_details` table**:
--     - Links `menu_id` to the `id` column in the `menus` table.

-- 25. **`newsletter` table**:
--     - Links `gallery_id` to the `id` column in the `gallery` table (with CASCADE behavior on delete and update).

-- 26. **`orders` table**:
--     - Links `currency_id` to the `id` column in the `currency` table.
--     - Links `customer_id` to the `id` column in the `customers` table.

-- 27. **`order_comments` table**:
--     - Links `customer_id` to the `id` column in the `customers` table.
--     - Links `order_id` to the `id` column in the `orders` table.
--     - Links `user_id` to the `id` column in the `users` table.

-- 28. **`order_detail` table**:
--     - Links `order_id` to the `id` column in the `orders` table.
--     - Links `product_combination_id` to the `id` column in the `product_combination` table.
--     - Links `product_id` to the `id` column in the `products` table.

-- 29. **`order_histories` table**:
--     - Links `order_id` to the `id` column in the `orders` table.

-- 30. **`order_notes` table**:
--     - Links `order_id` to the `id` column in the `orders` table.

-- 31. **`payment_methods` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.

-- 32. **`payment_method_descriptions` table**:
--     - Links `language_id` to the `id` column in the `languages` table.
--     - Links `payment_method_id` to the `id` column in the `payment_methods` table.

-- 33. **`payment_method_settings` table**:
--     - Links `payment_method_id` to the `id` column in the `payment_methods` table.

-- 34. **`permission_role` table**:
--     - Links `created_by` and `updated_by` columns to the `id` column in the `users` table.
--     - Links `permission_id` to the `id` column in the `permission` table.
--     - Links `role_id` to the `id` column in the `roles` table.

-- 35. **`products` table**:
--     - Links `created_by`, `updated_by`, and `user_id` columns to the `id` column in the `users` table.
--     - Links `gallery_id` to the `id` column in the `gallery` table.
--     - Links `tax_id` to the `id` column in the `taxes` table.

-- 36. **`product_attribute` table**:
--     - Links `attribute_id` to the `id` column in the `attributes` table.
--     - Links `product_id` to the `id` column in the `products` table.

-- 37. **`product_category` table**:
--     - Links `category_id` to the `id` column in the `categories` table.
--     - Links `product_id` to the `id` column in the `products` table.

-- 38. **`product_combination` table**:
--     - Links `gallery_id` to the `id` column in the `gallery` table.
--     - Links `product_id` to the `id` column in the `products` table.

-- 39. **`product_combination_dtl` table**:
--     - Links `product_combination_id` to the `id` column in the `product_combination

-- 40. **`Leak_cred` table**:
--     - Links `id` to the `id` column in the `user table

-- 41. **`Leak_cred_detail` table**:
--     - Links `lc_id` to the `id` column in the `leak_cred` table





CREATE TABLE `accounts` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT null,
  `code` varchar(191) DEFAULT null,
  `account_type` varchar(191) DEFAULT null,
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 for active & 0 for inactive',
  `parent_id` bigint(20) DEFAULT null,
  `reference_id` bigint(20) DEFAULT null,
  `type` ENUM ('customer', 'supplier', 'simple_product', 'variable_product', 'tax', 'shipping', 'couponcode', 'discount', 'sale', 'income') DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `attributes` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `attribute_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `attribute_id` bigint(20) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(191) DEFAULT null
);

CREATE TABLE `banners` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` longtext DEFAULT null,
  `page_id` bigint(20) DEFAULT null,
  `slider_navigation_id` bigint(20) NOT NULL,
  `gallery_id` bigint(20) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `ref_id` bigint(20) DEFAULT null,
  `url` varchar(191) DEFAULT null,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'inactive',
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `blog_categories` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gallery_id` bigint(20) DEFAULT null,
  `blog_category_slug` varchar(191) DEFAULT null,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `blog_category_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `blog_category_id` bigint(20) DEFAULT null,
  `language_id` bigint(20) DEFAULT null,
  `name` varchar(191) NOT NULL
);

CREATE TABLE `blog_news` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gallery_id` bigint(20) DEFAULT null,
  `blog_category_id` bigint(20) DEFAULT null,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `is_featured` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 for not featured & 1 for featured',
  `slug` varchar(191) NOT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `blog_news_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `blog_news_id` bigint(20) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `name` varchar(191) DEFAULT null,
  `desc` longtext DEFAULT null
);

CREATE TABLE `business_setting` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gallery_id` bigint(20) NOT NULL,
  `timezone_id` bigint(20) NOT NULL,
  `business_name` varchar(191) NOT NULL,
  `start_date` date NOT NULL,
  `year_start_month` ENUM ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December') NOT NULL DEFAULT 'January',
  `transaction_edit_days` int(11) NOT NULL,
  `date_format` ENUM ('mm/dd/yyyy', 'mm-dd-yyyy', 'dd-mm-yyyy', 'dd/mm/yyyy') NOT NULL,
  `time_format` ENUM ('12 hr', '24 hr') NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `cart_items` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) NOT NULL,
  `product_combination_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `qty` int(11) DEFAULT null,
  `is_order` tinyint(1) NOT NULL DEFAULT 0,
  `session_id` varchar(191) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `categories` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gallery_id` bigint(20) DEFAULT null,
  `category_icon` varchar(191) DEFAULT null,
  `parent_id` int(11) DEFAULT null,
  `category_slug` varchar(191) DEFAULT null,
  `sort_order` int(11) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `category_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category_name` varchar(191) DEFAULT null,
  `description` longtext DEFAULT null,
  `category_id` bigint(20) DEFAULT null,
  `language_id` bigint(20) DEFAULT null
);

CREATE TABLE `compares` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `constant_banners` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `banner_number` varchar(191) NOT NULL,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `language_id` bigint(20) DEFAULT null,
  `gallery_id` bigint(20) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `countries` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `iso_code_2` varchar(191) DEFAULT null,
  `iso_code_3` varchar(191) DEFAULT null,
  `address_format_id` varchar(191) DEFAULT null,
  `country_code` varchar(191) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `coupon_order` (
  `customer_id` bigint(20),
  `coupon_code` varchar(191),
  `num_of_usage` bigint(21)
);

CREATE TABLE `coupon_setting` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `code` varchar(191) NOT NULL,
  `description` longtext DEFAULT null,
  `type` ENUM ('fixed', 'percentage') NOT NULL DEFAULT 'fixed',
  `amount` double(8,2) NOT NULL,
  `expiry_date` date NOT NULL,
  `usage_limit_per_user` int(11) DEFAULT null,
  `usage_limit_per_coupon` int(11) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `currency` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `symbol_position` ENUM ('left', 'right') NOT NULL DEFAULT 'left',
  `decimal_point` int(11) NOT NULL DEFAULT 2,
  `thousand_point` varchar(191) DEFAULT null,
  `decimal_place` varchar(191) DEFAULT null,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `country_id` int(11) DEFAULT null,
  `code` varchar(191) DEFAULT null,
  `exchange_rate` double(8,2) DEFAULT 0,
  `is_default` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'if 1 then currency is set to as default!',
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `current_theme` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `home_setting` longtext DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `customers` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `first_name` varchar(191) DEFAULT null,
  `last_name` varchar(191) DEFAULT null,
  `email` varchar(191) NOT NULL,
  `gallery_id` bigint(20) DEFAULT null,
  `is_seen` ENUM ('0', '1') NOT NULL DEFAULT '0',
  `status` ENUM ('0', '1') NOT NULL DEFAULT '0' COMMENT '0 for active & 1 for delete',
  `password` varchar(191) DEFAULT null,
  `provider` varchar(191) DEFAULT null,
  `provider_id` varchar(191) DEFAULT null,
  `hash` varchar(191) DEFAULT null,
  `forget_hash` varchar(191) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `remember_token` varchar(100) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `customer_address_book` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `customer_id` bigint(20) NOT NULL,
  `gender` ENUM ('Male', 'Female', 'Other') DEFAULT null,
  `first_name` varchar(191) DEFAULT null,
  `last_name` varchar(191) DEFAULT null,
  `company` varchar(191) DEFAULT null,
  `street_address` varchar(191) DEFAULT null,
  `suburb` varchar(191) DEFAULT null,
  `phone` varchar(191) DEFAULT null,
  `postcode` varchar(191) DEFAULT null,
  `dob` date DEFAULT null,
  `city` varchar(191) DEFAULT null,
  `country_id` bigint(20) NOT NULL,
  `state_id` bigint(20) DEFAULT null,
  `lattitude` varchar(191) DEFAULT null,
  `longitude` varchar(191) DEFAULT null,
  `latlong` varchar(191) DEFAULT null,
  `is_default` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'default'
);

CREATE TABLE `customer_order_amount` (
  `customer_id` bigint(20),
  `order_amount` double(19,2)
);

CREATE TABLE `custom_css_js` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `before_head_tag` longtext DEFAULT null,
  `end_of_body_tag` longtext DEFAULT null
);

CREATE TABLE `default_accounts` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `account_id` bigint(20) NOT NULL,
  `type` ENUM ('customer', 'editor', 'admin') DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `demo_settings` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `color` varchar(191) NOT NULL,
  `header_style` varchar(191) NOT NULL,
  `footer_style` varchar(191) NOT NULL,
  `slider_style` varchar(191) NOT NULL,
  `banner_style` varchar(191) NOT NULL,
  `cart_style` varchar(191) NOT NULL,
  `product_page_style` varchar(191) NOT NULL,
  `shop_style` varchar(191) NOT NULL,
  `ip` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `email_template_settings` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `subject` varchar(191) NOT NULL,
  `body` varchar(191) NOT NULL,
  `type` ENUM ('amazing_deal', 'forget_password', 'new_arrival', 'overall_sale', 'sale', 'singup', 'winter_sale') NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `failed_jobs` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT (current_timestamp())
);

CREATE TABLE `gallery` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT null,
  `extension` varchar(191) DEFAULT null,
  `user_id` bigint(20) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `gallery_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `gallery_id` bigint(20) DEFAULT null,
  `gallery_type` ENUM ('large', 'medium', 'thumbnail') DEFAULT null,
  `height` int(11) DEFAULT null,
  `width` int(11) DEFAULT null,
  `path` varchar(191) DEFAULT null
);

CREATE TABLE `gallery_tags` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tag_id` bigint(20) NOT NULL,
  `gallery_id` bigint(20) NOT NULL
);

CREATE TABLE `home_banners` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `banner_name` varchar(191) NOT NULL,
  `language_id` int(11) NOT NULL DEFAULT 1,
  `content` text DEFAULT null,
  `gallery_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `languages` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `code` varchar(191) DEFAULT null,
  `directory` varchar(191) DEFAULT null,
  `direction` ENUM ('ltr', 'rtl') NOT NULL DEFAULT 'ltr',
  `is_default` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'if 1 then langauge is set to as default!',
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `localizations` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `current_language` varchar(191) NOT NULL,
  `ip` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `membership` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `start_value` double(8,2) NOT NULL,
  `end_value` double(8,2) NOT NULL,
  `display_text` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `menus` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `type` varchar(191) NOT NULL,
  `type_detail` varchar(191) DEFAULT null,
  `status` ENUM ('1', '0') DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `menu_builders` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `menu` longtext DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `menu_details` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `menu_id` bigint(20) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `migrations` (
  `id` int(10) PRIMARY KEY NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
);

CREATE TABLE `newsletter` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` ENUM ('Enable', 'Disable') NOT NULL,
  `mailchip_api` varchar(191) NOT NULL,
  `mailchip_id` varchar(191) NOT NULL,
  `gallery_id` bigint(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(100),
  `lastName` VARCHAR(100),
  `subscribedOn` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `subscriptionUrl` VARCHAR(1024)
);

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) PRIMARY KEY NOT NULL,
  `user_id` bigint(20) DEFAULT null,
  `client_id` bigint(20) NOT NULL,
  `name` varchar(191) DEFAULT null,
  `scopes` text DEFAULT null,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null,
  `expires_at` datetime DEFAULT null
);

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) PRIMARY KEY NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` bigint(20) NOT NULL,
  `scopes` text DEFAULT null,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT null
);

CREATE TABLE `oauth_clients` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT null,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) DEFAULT null,
  `provider` varchar(191) DEFAULT null,
  `redirect` text DEFAULT null,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) PRIMARY KEY NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT null
);

CREATE TABLE `orders` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `customer_id` bigint(20) DEFAULT null,
  `payment_status` varchar(191) NOT NULL DEFAULT 'Pending',
  `order_type` ENUM ('free', 'mvp', 'vip'),
  `latlong` varchar(191) DEFAULT null,
  `cc_type` varchar(191) DEFAULT null,
  `cc_owner` varchar(191) DEFAULT null,
  `cc_number` varchar(191) DEFAULT null,
  `cc_expiry` varchar(191) DEFAULT null,
  `currency_id` bigint(20) DEFAULT null,
  `currency_value` double(8,2) DEFAULT null,
  `order_price` double(8,2) DEFAULT null,
  `order_notes` varchar(191) DEFAULT null,
  `is_seen` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 for seen & 0 for unseen',
  `coupon_code` varchar(191) DEFAULT null,
  `coupon_amount` double(8,2) DEFAULT null,
  `payment_method` ENUM ('banktransfer', 'cards', 'paypal') NOT NULL DEFAULT 'banktransfer',
  `transaction_id` varchar(191) DEFAULT null,
  `order_status` ENUM ('Pending', 'Complete') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `order_comments` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `user_id` bigint(20) DEFAULT null,
  `message` text NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `order_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) DEFAULT null,
  `product_id` bigint(20) DEFAULT null,
  `product_combination_id` bigint(20) DEFAULT null,
  `product_price` double(8,2) DEFAULT null,
  `product_tax` double(8,2) DEFAULT null,
  `product_discount` double(8,2) DEFAULT null,
  `total` double(8,2) DEFAULT null,
  `qty` int(11) DEFAULT null
);

CREATE TABLE `order_histories` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) DEFAULT null,
  `order_status` ENUM ('Pending', 'Complete', 'Cancel') NOT NULL DEFAULT 'Pending',
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `order_notes` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `notes` text NOT NULL,
  `order_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `pages` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `page_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `page_type` ENUM ('product', 'input_form', 'blog', 'helpdesk', 'user_profile') NOT NULL DEFAULT 'product',
  `title` varchar(191) NOT NULL,
  `description` longtext DEFAULT null,
  `language_id` bigint(20) DEFAULT null,
  `page_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null
);

CREATE TABLE `payment_methods` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `payment_method` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 for active 0 for inactive',
  `default` tinyint(1) NOT NULL DEFAULT 0,
  `environment` tinyint(1) NOT NULL DEFAULT 0 COMMENT '1 for active 0 for inactive',
  `type` ENUM ('banktransfer', 'card', 'paypal') NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `payment_method_descriptions` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `payment_method_id` bigint(20) NOT NULL,
  `name` varchar(191) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `sub_name_1` varchar(191) NOT NULL,
  `sub_name_2` varchar(191) NOT NULL
);

CREATE TABLE `payment_method_settings` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `payment_method_id` bigint(20) NOT NULL,
  `key` varchar(191) NOT NULL,
  `value` varchar(191) NOT NULL
);

CREATE TABLE `permission` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `key` varchar(191) NOT NULL,
  `value` varchar(191) NOT NULL,
  `parent_id` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `permission_role` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `permission_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT null,
  `last_used_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `points` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `points` double(8,2) DEFAULT null,
  `description` varchar(191) DEFAULT null,
  `type` ENUM ('checkin_point', 'product_share_point', 'invite_friend_share_point', 'per_order_point', 'redeem') NOT NULL,
  `reference_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `status` ENUM ('1', '0') DEFAULT '0' COMMENT 'o for not redeem 1 for redeem',
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `products` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_type` ENUM ('service', 'training') NOT NULL,
  `product_slug` varchar(191) NOT NULL,
  `sku` varchar(191) DEFAULT null,
  `video_url` varchar(191) DEFAULT null,
  `gallery_id` bigint(20) NOT NULL,
  `price` double(8,2) DEFAULT null,
  `discount_price` double(8,2) DEFAULT null,
  `product_unit` int(11) DEFAULT null,
  `product_weight` varchar(191) DEFAULT null,
  `digital_file` varchar(191) DEFAULT null,
  `product_status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `tax_id` bigint(20) DEFAULT null,
  `product_view` int(11) DEFAULT null,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0 for not featured & 1 for featured',
  `product_min_order` int(11) DEFAULT null,
  `product_max_order` int(11) DEFAULT null,
  `seo_meta_tag` varchar(191) DEFAULT null,
  `seo_desc` longtext DEFAULT null,
  `is_points` ENUM ('1', '0') NOT NULL DEFAULT '0',
  `user_id` bigint(20) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `product_attribute` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `attribute_id` bigint(20) DEFAULT null
);

CREATE TABLE `product_category` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `category_id` bigint(20) DEFAULT null
);

CREATE TABLE `product_combination` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `sku` varchar(191) DEFAULT null,
  `price` double(8,2) DEFAULT null,
  `gallery_id` bigint(20) DEFAULT null
);

CREATE TABLE `product_combination_dtl` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_combination_id` bigint(20) DEFAULT null,
  `variation_id` bigint(20) DEFAULT null,
  `product_id` bigint(20) DEFAULT null
);

CREATE TABLE `product_comments` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `comment` longtext DEFAULT null,
  `parent_id` int(11) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `product_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `title` varchar(191) DEFAULT null,
  `desc` longtext DEFAULT null,
  `language_id` bigint(20) DEFAULT null
);

CREATE TABLE `product_gallery_details` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `gallery_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `product_review` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `comment` longtext DEFAULT null,
  `title` varchar(191) DEFAULT null,
  `rating` varchar(191) DEFAULT null,
  `status` ENUM ('active', 'inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `product_variation` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_attribute_id` bigint(20) NOT NULL,
  `variation_id` bigint(20) DEFAULT null
);

CREATE TABLE `roles` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `settings` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `key` varchar(191) NOT NULL,
  `value` text NOT NULL,
  `type` ENUM ('client_secret', 'business_general', 'pos', 'email_smtp', 'email_template', 'sms', 'invoice', 'barcode', 'website_general', 'seo', 'app_login_signup', 'website_login_signup', 'app_general', 'gallery_setting', 'store_setting', 'business_notification_setting', 'app_display_in_setting', 'app_notification_setting', 'web_theme_setting', 'point_setting', 'membership_setting', 'email_notify_setting', 'login_credential', 'kundol_web_setting', 'business_firebase_setting', 'business_google_setting') NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `shipping_methods` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `methods_type_link` varchar(191) NOT NULL,
  `is_default` tinyint(1) NOT NULL COMMENT '1 for active 0 for inactive',
  `status` tinyint(1) NOT NULL COMMENT '1 for active 0 for inactive',
  `amount` double(8,2) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `shipping_method_descriptions` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `shipping_method_id` bigint(20) NOT NULL
);

CREATE TABLE `sliders` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` longtext DEFAULT null,
  `position` ENUM ('position-right', 'position-left', 'position-center') NOT NULL,
  `textcontent` ENUM ('textcontent-right', 'textcontent-left', 'textcontent-center') NOT NULL,
  `text` ENUM ('text-white', 'text-black') NOT NULL,
  `language_id` bigint(20) NOT NULL,
  `slider_type_id` bigint(20) NOT NULL,
  `slider_navigation_id` bigint(20) NOT NULL,
  `gallery_id` bigint(20) NOT NULL,
  `ref_id` bigint(20) DEFAULT null,
  `url` varchar(191) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `slider_navigation` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT null
);

CREATE TABLE `slider_types` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT null
);

CREATE TABLE `states` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `country_id` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `tags` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `taxes` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` longtext DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `tax_rates` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tax_id` bigint(20) NOT NULL,
  `state_id` bigint(20) NOT NULL,
  `country_id` bigint(20) NOT NULL,
  `tax_rate` double(8,2) NOT NULL,
  `description` longtext DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `timezones` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `offset` varchar(191) NOT NULL,
  `diff_from_gtm` varchar(191) NOT NULL,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `top_offer` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `top_offer_text` varchar(191) NOT NULL,
  `language_id` bigint(20) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `top_selling_products` (
  `qty` decimal(32,0),
  `product_id` bigint(20)
);

CREATE TABLE `transactions` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `transaction_number` bigint(20) NOT NULL,
  `transaction_date` date NOT NULL,
  `description` varchar(500) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `transaction_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `transaction_id` bigint(20) NOT NULL,
  `account_id` bigint(20) NOT NULL,
  `reference_id` bigint(20) DEFAULT null,
  `user_id` bigint(20) DEFAULT null,
  `type` ENUM ('sale', 'cash', 'redeem') DEFAULT null,
  `dr_amount` double(8,2) DEFAULT null,
  `cr_amount` double(8,2) DEFAULT null,
  `description` text DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `units` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `is_active` tinyint(4) NOT NULL DEFAULT 1 COMMENT '1 for active & 0 for inactive',
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `unit_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `unit_id` bigint(20) DEFAULT null,
  `name` varchar(191) DEFAULT null,
  `language_id` bigint(20) DEFAULT null
);

CREATE TABLE `users` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `first_name` varchar(191) DEFAULT null,
  `last_name` varchar(191) DEFAULT null,
  `avatar` varchar(191) DEFAULT null,
  `email` varchar(191) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  `is_seen` tinyint(4) NOT NULL DEFAULT 0,
  `status` ENUM ('active', 'inactive', 'disable') NOT NULL DEFAULT 'active',
  `email_verified_at` timestamp DEFAULT null,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `variations` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `attribute_id` bigint(20) DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `deleted_at` timestamp DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);

CREATE TABLE `variation_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT null,
  `variation_id` bigint(20) NOT NULL,
  `language_id` bigint(20) NOT NULL
);

CREATE TABLE `wishlist` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT null,
  `customer_id` bigint(20) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null
);


CREATE TABLE `user_request` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT null,
  `request_type` ENUM ('leaked_check', 'tc_check') NOT NULL DEFAULT 'leaked_check',
  `request_payload` varchar(191) DEFAULT null,
  `page_id` bigint(20) DEFAULT null
);

CREATE TABLE `leak_cred` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(199) DEFAULT null UNIQUE,
  `created_at` timestamp DEFAULT null,
  `updated_at` timestamp DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `no_leak` ENUM ('yes', 'no') NOT NULL DEFAULT 'no'  
);


CREATE TABLE `leak_cred_detail` (
  `id` bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `lc_id` bigint(20) DEFAULT NULL,
  `source` varchar(50) DEFAULT null,
  `icon` varchar(50) DEFAULT null,
  `leaked_at` timestamp DEFAULT null,
  `description` varchar(200) DEFAULT null,
  `created_at` timestamp DEFAULT null,
  `created_by` bigint(20) DEFAULT null,
  `updated_by` bigint(20) DEFAULT null,
  `is_Fixed` ENUM ('yes', 'no') NOT NULL DEFAULT 'no'
);



ALTER TABLE `leak_cred` ADD CONSTRAINT `leak_cred_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);
ALTER TABLE `leak_cred_detail` ADD CONSTRAINT `leak_cred_detail_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `leak_cred` ADD CONSTRAINT `leak_cred_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);
ALTER TABLE `leak_cred_detail` ADD CONSTRAINT `leak_cred_detail_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `user_request` ADD CONSTRAINT `user_request_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_request` ADD CONSTRAINT `user_request_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`);

ALTER TABLE `leak_cred_detail` ADD CONSTRAINT `leak_cred_lc_id_foreign` FOREIGN KEY(`lc_id`) REFERENCES `leak_cred` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `attributes` ADD CONSTRAINT `attributes_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `attributes` ADD CONSTRAINT `attributes_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `attribute_detail` ADD CONSTRAINT `attribute_detail_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `attribute_detail` ADD CONSTRAINT `attribute_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `banners` ADD CONSTRAINT `banners_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `banners` ADD CONSTRAINT `banners_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`);

ALTER TABLE `banners` ADD CONSTRAINT `banners_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `banners` ADD CONSTRAINT `banners_slider_navigation_id_foreign` FOREIGN KEY (`slider_navigation_id`) REFERENCES `slider_navigation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `blog_categories` ADD CONSTRAINT `blog_categories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `blog_categories` ADD CONSTRAINT `blog_categories_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `blog_categories` ADD CONSTRAINT `blog_categories_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `blog_category_detail` ADD CONSTRAINT `blog_category_detail_blog_category_id_foreign` FOREIGN KEY (`blog_category_id`) REFERENCES `blog_categories` (`id`);

ALTER TABLE `blog_category_detail` ADD CONSTRAINT `blog_category_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `blog_news` ADD CONSTRAINT `blog_news_blog_category_id_foreign` FOREIGN KEY (`blog_category_id`) REFERENCES `blog_categories` (`id`);

ALTER TABLE `blog_news` ADD CONSTRAINT `blog_news_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `blog_news` ADD CONSTRAINT `blog_news_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `blog_news` ADD CONSTRAINT `blog_news_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `blog_news_detail` ADD CONSTRAINT `blog_news_detail_blog_news_id_foreign` FOREIGN KEY (`blog_news_id`) REFERENCES `blog_news` (`id`);

ALTER TABLE `blog_news_detail` ADD CONSTRAINT `blog_news_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `business_setting` ADD CONSTRAINT `business_setting_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `business_setting` ADD CONSTRAINT `business_setting_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `business_setting` ADD CONSTRAINT `business_setting_timezone_id_foreign` FOREIGN KEY (`timezone_id`) REFERENCES `timezones` (`id`);

ALTER TABLE `business_setting` ADD CONSTRAINT `business_setting_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_product_combination_id_foreign` FOREIGN KEY (`product_combination_id`) REFERENCES `product_combination` (`id`);

ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `categories` ADD CONSTRAINT `categories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `categories` ADD CONSTRAINT `categories_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `categories` ADD CONSTRAINT `categories_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `category_detail` ADD CONSTRAINT `category_detail_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `category_detail` ADD CONSTRAINT `category_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `compares` ADD CONSTRAINT `compares_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `compares` ADD CONSTRAINT `compares_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `coupon_setting` ADD CONSTRAINT `coupon_setting_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `coupon_setting` ADD CONSTRAINT `coupon_setting_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `currency` ADD CONSTRAINT `currency_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `currency` ADD CONSTRAINT `currency_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `current_theme` ADD CONSTRAINT `current_theme_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `current_theme` ADD CONSTRAINT `current_theme_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `customers` ADD CONSTRAINT `customers_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `customer_address_book` ADD CONSTRAINT `customer_address_book_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

ALTER TABLE `customer_address_book` ADD CONSTRAINT `customer_address_book_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `customer_address_book` ADD CONSTRAINT `customer_address_book_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`);

ALTER TABLE `default_accounts` ADD CONSTRAINT `default_accounts_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `email_template_settings` ADD CONSTRAINT `email_template_settings_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `email_template_settings` ADD CONSTRAINT `email_template_settings_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `gallery` ADD CONSTRAINT `gallery_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `gallery` ADD CONSTRAINT `gallery_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `gallery` ADD CONSTRAINT `gallery_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `gallery_detail` ADD CONSTRAINT `gallery_detail_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `gallery_tags` ADD CONSTRAINT `gallery_tags_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `gallery_tags` ADD CONSTRAINT `gallery_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `languages` ADD CONSTRAINT `languages_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `languages` ADD CONSTRAINT `languages_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `menu_details` ADD CONSTRAINT `menu_details_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);

ALTER TABLE `newsletter` ADD CONSTRAINT `newsletter_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `orders` ADD CONSTRAINT `orders_currency_id_foreign` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`);

ALTER TABLE `orders` ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `order_comments` ADD CONSTRAINT `order_comments_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `order_comments` ADD CONSTRAINT `order_comments_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_comments` ADD CONSTRAINT `order_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_product_combination_id_foreign` FOREIGN KEY (`product_combination_id`) REFERENCES `product_combination` (`id`);

ALTER TABLE `order_detail` ADD CONSTRAINT `order_detail_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `order_histories` ADD CONSTRAINT `order_histories_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_notes` ADD CONSTRAINT `order_notes_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `payment_methods` ADD CONSTRAINT `payment_methods_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `payment_methods` ADD CONSTRAINT `payment_methods_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `payment_method_descriptions` ADD CONSTRAINT `payment_method_descriptions_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `payment_method_descriptions` ADD CONSTRAINT `payment_method_descriptions_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`);

ALTER TABLE `payment_method_settings` ADD CONSTRAINT `payment_method_settings_payment_method_id_foreign` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`);

ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`);

ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `permission_role` ADD CONSTRAINT `permission_role_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_tax_id_foreign` FOREIGN KEY (`tax_id`) REFERENCES `taxes` (`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `products` ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `product_attribute` ADD CONSTRAINT `product_attribute_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`);

ALTER TABLE `product_attribute` ADD CONSTRAINT `product_attribute_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_category` ADD CONSTRAINT `product_category_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `product_category` ADD CONSTRAINT `product_category_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_combination` ADD CONSTRAINT `product_combination_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `product_combination` ADD CONSTRAINT `product_combination_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_combination_dtl` ADD CONSTRAINT `product_combination_dtl_product_combination_id_foreign` FOREIGN KEY (`product_combination_id`) REFERENCES `product_combination` (`id`);

ALTER TABLE `product_combination_dtl` ADD CONSTRAINT `product_combination_dtl_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_combination_dtl` ADD CONSTRAINT `product_combination_dtl_variation_id_foreign` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`);

ALTER TABLE `product_comments` ADD CONSTRAINT `product_comments_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `product_comments` ADD CONSTRAINT `product_comments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_detail` ADD CONSTRAINT `product_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `product_detail` ADD CONSTRAINT `product_detail_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_gallery_details` ADD CONSTRAINT `product_gallery_details_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `product_gallery_details` ADD CONSTRAINT `product_gallery_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_review` ADD CONSTRAINT `product_review_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `product_review` ADD CONSTRAINT `product_review_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_variation` ADD CONSTRAINT `product_variation_product_attribute_id_foreign` FOREIGN KEY (`product_attribute_id`) REFERENCES `product_attribute` (`id`);

ALTER TABLE `product_variation` ADD CONSTRAINT `product_variation_variation_id_foreign` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`);

ALTER TABLE `settings` ADD CONSTRAINT `settings_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `settings` ADD CONSTRAINT `settings_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `shipping_methods` ADD CONSTRAINT `shipping_methods_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `shipping_methods` ADD CONSTRAINT `shipping_methods_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_gallery_id_foreign` FOREIGN KEY (`gallery_id`) REFERENCES `gallery` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_slider_navigation_id_foreign` FOREIGN KEY (`slider_navigation_id`) REFERENCES `slider_navigation` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_slider_type_id_foreign` FOREIGN KEY (`slider_type_id`) REFERENCES `slider_types` (`id`);

ALTER TABLE `sliders` ADD CONSTRAINT `sliders_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `states` ADD CONSTRAINT `states_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

ALTER TABLE `tags` ADD CONSTRAINT `tags_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `tags` ADD CONSTRAINT `tags_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `taxes` ADD CONSTRAINT `taxes_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `taxes` ADD CONSTRAINT `taxes_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `tax_rates` ADD CONSTRAINT `tax_rates_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

ALTER TABLE `tax_rates` ADD CONSTRAINT `tax_rates_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `tax_rates` ADD CONSTRAINT `tax_rates_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`);

ALTER TABLE `tax_rates` ADD CONSTRAINT `tax_rates_tax_id_foreign` FOREIGN KEY (`tax_id`) REFERENCES `taxes` (`id`);

ALTER TABLE `tax_rates` ADD CONSTRAINT `tax_rates_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `top_offer` ADD CONSTRAINT `top_offer_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `top_offer` ADD CONSTRAINT `top_offer_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `top_offer` ADD CONSTRAINT `top_offer_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `transaction_detail` ADD CONSTRAINT `transaction_detail_transaction_id_foreign` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `units` ADD CONSTRAINT `units_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `units` ADD CONSTRAINT `units_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `unit_detail` ADD CONSTRAINT `unit_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`);

ALTER TABLE `unit_detail` ADD CONSTRAINT `unit_detail_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`);

ALTER TABLE `users` ADD CONSTRAINT `users_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

ALTER TABLE `users` ADD CONSTRAINT `users_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `variations` ADD CONSTRAINT `variations_attribute_id_foreign` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`);

ALTER TABLE `variations` ADD CONSTRAINT `variations_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `variations` ADD CONSTRAINT `variations_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

ALTER TABLE `variation_detail` ADD CONSTRAINT `variation_detail_language_id_foreign` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `variation_detail` ADD CONSTRAINT `variation_detail_variation_id_foreign` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `wishlist` ADD CONSTRAINT `wishlist_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

ALTER TABLE `wishlist` ADD CONSTRAINT `wishlist_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `page_detail` ADD CONSTRAINT `page_details_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `pages` (`id`);