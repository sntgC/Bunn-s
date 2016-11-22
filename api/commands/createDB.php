<?php
    $server = "localhost";
    $username = "root";
    $password = "";

    $database = "bunns_database";

    $conn = new mysqli($server,$username,$password) or die("Failed to connect to the server");
    $sql = "CREATE DATABASE IF NOT EXISTS bunns_database CHARACTER SET utf8; ";
    $conn->query($sql);

    mysqli_select_db($conn,$database) or die("Failed to connect to the database");

    $sql = "";
    $sql .="CREATE TABLE IF NOT EXISTS users(
                id varchar(7) CHARACTER SET utf8 NOT NULL,
                email varchar(100) CHARACTER SET utf8 DEFAULT NULL,
                password varchar(60) CHARACTER SET utf8 DEFAULT NULL,
                points int DEFAULT 0,
                PRIMARY KEY (id)
            ) CHARACTER SET utf8; ";

    $result = mysqli_multi_query($conn,$sql);
    if (!$result){
        die ("The SQL command was not processed correctly");
    } else{
        echo "MySQL tables setup successfully";
    }

    mysqli_close($conn);
?>
