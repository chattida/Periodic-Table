<?php
    function page_lang() {
        if (check_cookie()) {
            include("./page/table/th.php");
        } else if ($_COOKIE['lang'] == "th") {
            include("./page/table/th.php");
        } else if ($_COOKIE['lang'] == "en") {
            include("./page/table/en.php");
        } else {
            setcookie("lang", "th", time() + (86400 * 30), "/");
            include("./page/table/th.php");
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

    function check_darkmode() {
        if (!isset($_COOKIE['darkstatus'])) {
            setcookie("darkstatus", 0, time() + (86400 * 30), "/");
            header('Location: '.'./index.php');
        }
    }

    check_darkmode();

    page_lang();
?>