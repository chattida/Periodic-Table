<?php
    $msg = $_POST['msg'];
    if ($_COOKIE['lang'] == 'th') {
        include("./page/search/th.html");
    } else if ($_COOKIE['lang'] == 'en') {
        include("./page/search/en.html");
    } else {
        include("./page/search/th.html");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
?>