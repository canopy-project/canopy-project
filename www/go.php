<?php
/* Redirect mobile devices to mobile site */

$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true) {
    header('Location: http://canopy.link/canopy-app/index_mobile.html?' . $_SERVER['QUERY_STRING']);
}
else {
    header('Location: http://canopy.link/canopy-app/index_nodes.html?' . $_SERVER['QUERY_STRING']);
}
?>
