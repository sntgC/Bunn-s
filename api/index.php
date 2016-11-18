<?php
    header("Access-Control-Allow-Orgin: *");
    header("Access-Control-Allow-Methods: *");
    header("Content-Type: application/json");

    $request = explode("/",trim($_SERVER['REQUEST_URI'],'/'));
    unset($request[0], $request[1]);
    $request = array_values($request);

    $requestString = "";
    foreach ($request as $i) {
        $requestString .= $i . "/";
    }

    switch ($request[0]) {
        case "users":
            include_once("models/users.php");
            $model = new Users($request, $requestString);
            break;
        default:
            http_response_code(400);
            break;
    }

    function inRequest($needle){
        global $request;
        if(in_array($needle, $request)){
            return true;
        }
        return false;
    }
?>
