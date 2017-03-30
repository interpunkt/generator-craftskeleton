<?php

/*
*   Config file: Stage environment
*
*/

return array(

    'db' => array(
        'server' => '<%= server %>',
        'user' => '<%= user %>',
        'password' => '<%= password %>',
        'database' => '<%= dbname %>',
    ),

    'backupDbOnUpdate' => true,
    'allowAutoUpdates' => false,
    /*
     * Cache data indefinitely: https://craftcms.com/docs/config-settings#cacheDuration
     * More Info here: https://nystudio107.com/blog/the-craft-cache-tag-in-depth
     * */
    'cacheDuration' => '0',

);