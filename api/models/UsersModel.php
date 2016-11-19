<?php

    class UsersModel{

        public $id = null;
        public $email = null;
        public $password = null;

        function generateID(){
    		$charList1 = "abcdefghijklmnopqrstuvwxyz";
    		$charList2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    		$charList3 = "1234567890";

    		$generatedID = "";
    		for($i = 0; $i < 7; $i++){
    			$chooseList = mt_rand(1,3);
    			if($chooseList == 1){
    				$selectChar = mt_rand(0,25);
    				$char = $charList1{$selectChar};
    				$generatedID .= $char;
    			}
    			elseif($chooseList == 2){
    				$selectChar = mt_rand(0,25);
    				$char = $charList2{$selectChar};
    				$generatedID .= $char;
    			}
    			else{
    				$selectChar = mt_rand(0,9);
    				$char = $charList3{$selectChar};
    				$generatedID .= $char;
    			}
    		}
    		return $generatedID;
    	}

        function create($conn){
            //Email validation
            $result = $conn->query("SELECT * FROM users WHERE email='$this->email'");
            if($result->num_rows > 0){
                http_response_code(400);
                echo json_encode("Email unavailable");
                exit();
            }
            elseif(!filter_var($this->email, FILTER_VALIDATE_EMAIL)){
                http_response_code(400);
                echo json_encode("Invalid email format");
                exit();
            }
            elseif(strlen($this->email) > 100){
                http_response_code(400);
                echo json_encode("Email must be less than or equal to 100 characters in length");
                exit();
            }
            elseif(strlen($this->email) < 3){
                http_response_code(400);
                echo json_encode("Email must be greater than or equal to 3 characters in length");
                exit();
            }

            //Password validation
            if(strlen($this->password) < 8){
                http_response_code(400);
                echo json_encode("Password must be greater than or equal to 8 characters in length");
                exit();
            }

            $this->id = $this->generateID();
            while(true){
                $sql = "SELECT * FROM users WHERE id='this->id'";
                $result = $conn->query($sql);
                if($result->num_rows == 0){
                    break;
                }
                else {
                    $this->id = $this->generateID();
                }
            }
            $this->id = mysqli_real_escape_string($conn,$this->id);
            $this->email = mysqli_real_escape_string($conn,$this->email);
            $this->password = mysqli_real_escape_string($conn,password_hash($this->password, PASSWORD_BCRYPT));
            $sql = "INSERT INTO users (id, email, password) VALUES ('$this->id', '$this->email', '$this->password')";
            $conn->query($sql);
            http_response_code(201);
        }

    }

?>
