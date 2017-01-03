<?php

    class Tokens{

        public $id = null;
        public $user_id = null;
        public $value = null;
        public $duration = null;
        public $creation = null;
        public $expiration = null;


        function generateString($length){
    		$charList1 = "abcdefghijklmnopqrstuvwxyz";
    		$charList2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    		$charList3 = "1234567890";
    		$generatedString = "";
    		for($i = 0; $i < $length; $i++){
    			$chooseList = mt_rand(1,3);
    			if($chooseList == 1){
    				$selectChar = mt_rand(0,25);
    				$char = $charList1{$selectChar};
    				$generatedString .= $char;
    			}
    			elseif($chooseList == 2){
    				$selectChar = mt_rand(0,25);
    				$char = $charList2{$selectChar};
    				$generatedString .= $char;
    			}
    			else{
    				$selectChar = mt_rand(0,9);
    				$char = $charList3{$selectChar};
    				$generatedString .= $char;
    			}
    		}
    		return $generatedString;
    	}

        function removeExpired($conn){
            $conn->query("DELETE FROM tokens WHERE DATEDIFF(NOW(), expiration) > 0");
        }

        function create($conn, $email, $password){
            $this->removeExpired($conn);
            $result = $conn->query("SELECT * FROM users WHERE email='$email'");
            if($result->num_rows == 1){
                $row = $result->fetch_assoc();
                $dbpass = $row["password"];
                if(password_verify($password, $dbpass)){
                    $this->id = mysqli_real_escape_string($conn,$this->generateString(16));
                    $this->user_id = mysqli_real_escape_string($conn,$row["id"]);
                    $this->value = mysqli_real_escape_string($conn,$this->generateString(24));
                    $this->duration = mysqli_real_escape_string($conn,$this->duration);
                    if($this->duration == 0){
                        $sql = "INSERT INTO tokens(id, user_id, value, duration, creation, expiration)
                        VALUES('$this->id', '$this->user_id', '$this->value', $this->duration, NOW(), DATE_ADD(creation, INTERVAL 1 DAY))";
                        $conn->query($sql);
                        return $this->retrieve($conn);
                    }
                    else if($this->duration == 1){
                        $sql = "INSERT INTO tokens(id, user_id, value, duration, creation, expiration)
                        VALUES('$this->id', '$this->user_id', '$this->value', $this->duration, NOW(), DATE_ADD(creation, INTERVAL 1 YEAR))";
                        $conn->query($sql);
                        return $this->retrieve($conn);
                    }
                }
                else{
                    return json_encode("Invalid email and/or password");
                }
            }
            else{
                return json_encode("Invalid email and/or password");
            }
        }

        function retrieve($conn){
            $this->removeExpired($conn);
            if($this->id != null){
                $result = $conn->query("SELECT * FROM tokens WHERE id='$this->id'");
                return json_encode($result->fetch_assoc());
            }
        }

        function delete($conn){
            $this->removeExpired($conn);
            $sql = "DELETE FROM tokens WHERE value='$this->value'";
            $conn->query($sql);
            return json_encode("Deleted");
        }

        function verifyToken($conn){
            if($this->value !== null && $this->user_id !== null){
                $result = $conn->query("SELECT * FROM tokens WHERE value='$this->value' AND user_id='$this->user_id'");
                if($result->num_rows == 1){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
?>
