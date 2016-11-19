<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "bunns_database";

    $conn = new mysqli($server,$username,$password) or die("Failed to connect to the server");
    mysqli_select_db($conn,$database) or die("Failed to connect to the database");
?>
