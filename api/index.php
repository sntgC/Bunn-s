<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require 'libs/vendor/autoload.php';

    //Load class files
    spl_autoload_register(function($classname){
        require ("classes/" . $classname . ".php");
    });

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $config['db']['server'] = "localhost";
    $config['db']['username'] = "root";
    $config['db']['password'] = "";
    $config['db']['dbname'] = "bunns_database";

    $app = new \Slim\App(["settings" => $config]);

    $container = $app->getContainer();
    $container["db"] = function ($c) {
        $db = $c["settings"]["db"];
        $conn = new mysqli($db["server"],$db["username"],$db["password"]) or die("Failed to connect to the server");
        mysqli_select_db($conn,$db["dbname"]) or die("Failed to connect to the database");
        return $conn;
    };

    //Feedback endpoints
    //POST
    $app->post('/feedback',function(Request $request, Response $response){
        $data = $request->getParsedBody();
        $feedback = new Feedback();
        if(!isset($data["name"]) || !isset($data["email"]) || !isset($data["message"])){
            $response->getBody()->write(json_encode("Name, email, and/or message input missing"));
            return $response;
        }
        $feedback->contact_name = filter_var($data["name"], FILTER_SANITIZE_STRING);
        $feedback->contact_email = filter_var($data["email"], FILTER_SANITIZE_STRING);
        $feedback->message = filter_var($data["message"], FILTER_SANITIZE_STRING);
        $response->getBody()->write($feedback->create($this->db));
        return $response;
    });

    //Token endpoints
    //POST
    $app->post('/tokens',function(Request $request, Response $response){
        $data = $request->getParsedBody();
        $token = new Tokens();
        if(!isset($data["email"]) || !isset($data["password"]) || !isset($data["duration"])){
            $response->getBody()->write(json_encode("Email, password, and/or duration input missing"));
            return $response;
        }
        if($data["duration"] != 0 && $data["duration"] != 1){
            $response->getBody()->write(json_encode("Duration input must be either 0 or 1"));
            return $response;
        }
        $token->duration = $data["duration"];
        $email = filter_var($data["email"], FILTER_SANITIZE_STRING);
        $password = filter_var($data["password"], FILTER_SANITIZE_STRING);
        $response->getBody()->write($token->create($this->db, $email, $password));
        return $response;
    });

    //User endpoints
    //POST
    $app->post('/users',function(Request $request, Response $response){
        $data = $request->getParsedBody();
        $user = new Users();
        if(!isset($data["email"]) || !isset($data["password"])){
            $response->getBody()->write(json_encode("Email and/or password input missing"));
            return $response;
        }
        $user->email = filter_var($data["email"], FILTER_SANITIZE_STRING);
        $user->password = filter_var($data["password"], FILTER_SANITIZE_STRING);
        $response->getBody()->write($user->create($this->db));
        return $response;
    });

    $app->run();
?>
