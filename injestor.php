<?php
    $devicePref = $_POST['devicePref'];
    if (isset($_POST['submit'])) {
        if($devicePref=="PC") {
            header("Location: ./PC/injestorPC.php");
        }
        else if($devicePref=="PCwr") {
            header("Location: ./PCwr/injestorPCwr.php");
        }
        else if($devicePref=="mobile") {
            header("Location: ./PCwr/injestorMobile.php");
        }
        else if($devicePref=="mobilefull") {
            header("Location: ./PCwr/injestorMobilefull.php");
        }
    }
?>