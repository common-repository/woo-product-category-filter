<?php
/**
 * Plugin Name: WooCommerce Product Category Filter
 * Plugin URI: https://www.jumptoweb.com
 * Description: This plugin adds a search bar above your products category list. If you are running an online store, you need this!
 * Author: Manny Costales
 * Version: 1
 * Author URI: https://www.mannycostales.com
 */
defined( 'ABSPATH' ) or die( 'Plugin file cannot be accessed directly.' );

function mocp_register_category_search_script($hook) {
    if ('post.php' != $hook && $hook != 'post-new.php') {
        return;
    }
    if (!class_exists( 'WooCommerce' ) ) {
  		return;
	}

    wp_enqueue_script('admin_post_category_filter', plugin_dir_url(__FILE__) . 'js/post-category-filter.js', false, array(), false, true);
}

add_action('admin_enqueue_scripts', 'mocp_register_category_search_script');
