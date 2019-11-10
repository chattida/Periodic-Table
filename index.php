<?php
    function page_lang() {
        if (check_cookie()) {
            include("./page/table/th.html");
        } else if ($_COOKIE['lang'] == "th") {
            include("./page/table/th.html");
        } else if ($_COOKIE['lang'] == "en") {
            include("./page/table/en.html");
        } else {
            setcookie("lang", "th", time() + (86400 * 30), "/");
            include("./page/table/th.html");
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