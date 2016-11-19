<?php
    header("Access-Control-Allow-Orgin: *");
    header("Access-Control-Allow-Methods: *");
    header("Content-Type: application/json");

    include_once("models/UsersModel.php");

    $request = explode("/",trim($_SERVER['REQUEST_URI'],'/'));
    unset($request[0], $request[1]);
    $request = array_values($request);

    $requestString = "";
    foreach ($request as $i) {
        $requestString .= $i . "/";
    }

    $requestVerb = $_SERVER['REQUEST_METHOD'];
    if(count($request) > 0){
        switch ($request[0]) {
            case "users":
                include_once("controllers/Users.php");
                $controller = new Users($request, $requestString, $requestVerb);
                break;
            default:
                http_response_code(400);
                break;
        }
    }
    else {
        http_response_code(400);
    }

    function inRequest($needle){
        global $request;
        if(in_array($needle, $request)){
            return true;
        }
        return false;
    }
?>
