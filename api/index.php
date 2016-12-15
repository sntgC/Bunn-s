<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require '../libs/vendor/autoload.php';

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $config['db']['host']   = "localhost";
    $config['db']['user']   = "root";
    $config['db']['pass']   = "";
    $config['db']['dbname'] = "bunns_database";

    $app = new \Slim\App(["settings" => $config]);

    //Endpoints
    $app->get('/hello/{name}', function (Request $request, Response $response){
        $name = $request->getAttribute('name');
        $response->getBody()->write("Hello, $name");
        return $response;
    });
    
    $app->run();
?>
