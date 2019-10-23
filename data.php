<?php
    if ($_COOKIE['lang'] == 'th') {
        include("./php/data/th.php");
    } else if ($_COOKIE['lang'] == 'en') {
        include("./php/data/en.php");
    } else {
        include("./php/data/th.php");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
?>