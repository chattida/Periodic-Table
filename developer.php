<?php
    if ($_COOKIE['lang'] == 'th') {
        include("./page/developer/th.html");
    } else if ($_COOKIE['lang'] == 'en') {
        include("./page/developer/en.html");
    } else {
        include("./page/developer/th.html");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
?>