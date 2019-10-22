<?php
session_start();
function page_count(){
        if(isset($_SESSION['page_count'])){
                $_SESSION['page_count'] += 1;
                return $_SESSION['page_count'];
        }else{
                $_SESSION['page_count'] = 1;
                return $_SESSION['page_count'];
        }
}

function set_cookie(){
        $count_loadpage = page_count();
        $cookie_value = "th";
        if($count_loadpage<1){
                setcookie("lang", $cookie_value, time() + (86400 * 30), "/");
        }else{
                return $cookie_value;
        }
}
function page_lang(){
        if (!isset($_COOKIE[set_cookie()])) {
        include("./lang/th.php");
        }
        else {
        include("./lang/en.php");
        }
}
page_lang();
?>