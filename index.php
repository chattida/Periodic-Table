<?php

function page_lang() {
    if (check_cookie()) {
        include("./lang/th.html");
    } else if ($_COOKIE['lang'] == "th") {
        include("./lang/th.html");
    } else if ($_COOKIE['lang'] == "en") {
        include("./lang/en.html");
    } else {
        include("./lang/th.html");
        setcookie("lang", "th", time() + (86400 * 30), "/");
    }
}

function check_cookie() {
    if (!isset($_COOKIE['lang'])) {
        setcookie("lang", "th", time() + (86400 * 30), "/");
        return true;
    } else {
        return false;
    }
}

page_lang();
?>