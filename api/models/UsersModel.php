<?php

    class UsersModel{

        public $id = null;
        public $email = null;
        public $password = null;

        function create($conn){
            //Add data validation and escape strings before inserting into the database
            $sql = "INSERT INTO users (id, email, password) VALUES (1, '$this->email', '$this->password')";
            $conn->query($sql);
        }

    }

?>
