<?php

    class Reservations{

        public $id = null;
        public $user_id = null;
        public $data = null;

        public $auth = null;

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

        function create($conn){
            $token = new Tokens();
            $token->user_id = $this->user_id;
            $token->value = $this->auth;
            if($token->verifyToken($conn)){
                $this->id = filter_var($this->generateString(14), FILTER_SANITIZE_STRING);
                $this->user_id = mysqli_real_escape_string($conn, $this->user_id);
                $this->data = mysqli_real_escape_string($conn, $this->data);
                $sql = "INSERT INTO reservations (id, user_id, data) VALUES ('$this->id','$this->user_id','$this->data')";
                $conn->query($sql);
                return json_encode("Created");
            }
            else{
                return json_encode("Unauthorized");
            }
        }

    }

?>
