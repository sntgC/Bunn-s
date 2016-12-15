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

    //Endpoints
    $app->get('/users',function(Request $request, Response $response){
        $user = new Users();
        $response->getBody()->write($user->retrieve($this->db));
        return $response;
    });
    $app->get('/users/{id}',function(Request $request, Response $response){
        $user = new Users();
        $user->id = $request->getAttribute('id');
        $response->getBody()->write($user->retrieve($this->db));
        return $response;
    });

    $app->run();
?>
