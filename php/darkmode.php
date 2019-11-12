<?php
    // get language
    if ($_COOKIE['darkstatus'] == 0) {
        setcookie("darkstatus", 1, time() + (86400 * 30), "/");
    } else if ($_COOKIE['darkstatus'] == 1) {
        setcookie("darkstatus", 0, time() + (86400 * 30), "/");
    }

    // get path
    $link = "../{$_GET['path']}.php";

    // redirect
    redirect($link);

    // reditect function
    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>