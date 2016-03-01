<?php

/*
*	Config file: Stage environment
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

);