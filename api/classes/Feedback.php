<?php

    class Feedback{

        public $id = null;
        public $contact_name = null;
        public $contact_email = null;
        public $message = null;


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
            if(strlen($this->contact_name) > 50){
                return json_encode("Name must be shorter than or equal to 50 characters");
            }

            if(!filter_var($this->contact_email, FILTER_VALIDATE_EMAIL)){
                return json_encode("Invalid email format");
            }
            else if(strlen($this->contact_email) > 100){
                return json_encode("Email must be shorter than or equal to 100 characters in length");
            }
            elseif(strlen($this->contact_email) < 3){
                return json_encode("Email must be greater than or equal to 3 characters in length");
            }

            if(strlen($this->message) > 150){
                return json_encode("Message must be shorter than or equal to 150 characters in length");
            }

            $this->id = mysqli_real_escape_string($conn, $this->generateString(12));
            $this->contact_name = mysqli_real_escape_string($conn, $this->contact_name);
            $this->contact_email = mysqli_real_escape_string($conn, $this->contact_email);
            $this->message = mysqli_real_escape_string($conn, $this->message);

            $sql = "INSERT INTO feedback(id, contact_name, contact_email, message)
                    VALUES('$this->id','$this->contact_name','$this->contact_email','$this->message')";
            $result = $conn->query($sql);
            return json_encode("Created");
        }

    }
?>
