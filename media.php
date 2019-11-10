<?php
    function page_lang() {
        if (check_cookie()) {
            include("./page/media/th.html");
        } else if ($_COOKIE['lang'] == "th") {
            include("./page/media/th.html");
        } else if ($_COOKIE['lang'] == "en") {
            include("./page/media/en.html");
        } else {
            setcookie("lang", "th", time() + (86400 * 30), "/");
            include("./page/media/th.html");
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