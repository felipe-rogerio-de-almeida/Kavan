<?php
  $config = array(
    'host' => 'smtp.gmail.com',
    'username' => 'site.kavan@gmail.com',
    'password' => 'kavansite',
    'from' => 'site.kavan@gmail.com',
    'to' => 'felipe.rogerio@outlook.com',
  );
  header('Content-Type: application/json');
  echo json_encode($config);
?>
