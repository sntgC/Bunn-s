<?php
    class Users{

        private $requestArray;
        private $requestString;

        function __construct($requestArray, $requestString){
            $this->requestArray = $requestArray;
            $this->requestString = $requestString;
        }

        function toString(){
            return print_r($this->requestArray) . " " . $this->requestString;
        }
    }

?>
