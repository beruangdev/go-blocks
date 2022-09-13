<?php

use GB\Block\HowTo\API;

API::init();

function gb_how_to_block_init()
{

    register_block_type(
        __DIR__,
        array(
            'render_callback' => 'gb_how_to_render_callback',
        )
    );
}
add_action('init', __NAMESPACE__ . '\gb_how_to_block_init');



function gb_how_to_render_callback($attributes, $content, $block_instance)
{
    extract($attributes);
    ob_start();
    require plugin_dir_path(__FILE__) . './save/index.php';
    require plugin_dir_path(__FILE__) . './save/schema.php';
    return ob_get_clean();
}
