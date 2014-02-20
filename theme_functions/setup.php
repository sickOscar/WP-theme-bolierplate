<?php 

// supports
add_theme_support( 'post_thumbnail' );

// menus
register_nav_menu( 'primary', 'Menu Principale' );


// sidebar 
register_sidebar(array(
  'name' => __( 'Right Sidebar', 'sickdev' ),
  'id' => 'right-sidebar',
  'description' => __( 'Widgets in this area will be shown on the right-hand side.', 'sickdev' ),
  'before_title' => '<h1>',
  'after_title' => '</h1>'
));