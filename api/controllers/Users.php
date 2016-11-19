<?php

    class Users{

        private $requestArray;
        private $requestString;
        private $requestVerb;

        function __construct($requestArray, $requestString, $requestVerb){
            include_once("commands/connectDB.php");
            $this->requestArray = $requestArray;
            $this->requestString = $requestString;
            $this->requestVerb = $requestVerb;
            $this->interpretRequest($conn);
        }

        function interpretRequest($conn){
            switch ($this->requestVerb) {
                case "POST":
                    // users/ endpoint
                    if(preg_match("/\Ausers\/\z/", $this->requestString)){
                        $model = new UsersModel();
                        if(isset($_POST["email"]) && isset($_POST["password"])){
                            $model->email = $_POST["email"];
                            $model->password = $_POST["password"];
                            $model->create($conn);
                        }
                        else{
                            http_response_code(400);
                            echo json_encode("Required parameters email and/or password not received");
                            exit();
                        }
                    }
                    break;
                default:
                    http_response_code(400);
                    break;
            }
        }

        function toString(){
            return print_r($this->requestArray) . PHP_EOL . $this->requestString . PHP_EOL . $this->requestVerb;
        }

    }

?>
