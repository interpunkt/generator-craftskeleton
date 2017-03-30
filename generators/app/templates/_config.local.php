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

    'devMode' => true,
    'phpMaxMemoryLimit' => '256M',
    'backupDbOnUpdate' => true,
    'translationDebugOutput' => false,
    'useCompressedJs' => false,
    'enableTemplateCaching' => false,
    'userSessionDuration' => 'P101Y',
    'rememberedUserSessionDuration' => 'P101Y',
    'rememberUsernameDuration' => 'P101Y',

    'backupDbOnUpdate' => true,
    'allowAutoUpdates' => true,

);