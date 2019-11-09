<?php
    if ($_COOKIE['lang'] == 'th') {
        include("./page/media/th.html");
    } else if ($_COOKIE['lang'] == 'en') {
        include("./page/media/en.html");
    } else {
        include("./page/media/th.html");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
?>