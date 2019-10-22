<?php
    if ($_GET['lang'] == "th") {
        setcookie("lang", "th", time() + (86400 * 30), "/");
    } else if ($_GET['lang'] == "en") {
        setcookie("lang", "en", time() + (86400 * 30), "/");
    }
    redirect('../index.php');

    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>