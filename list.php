<?php
    if ($_COOKIE['lang'] == 'th') {
        include("./page/list/th.html");
    } else if ($_COOKIE['lang'] == 'en') {
        include("./page/list/en.html");
    } else {
        include("./page/list/th.html");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
?>