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
    //DELETE
    $app->delete('/tokens/{token_value}',function(Request $request, Response $response, $args){
        $token_value = $args["token_value"];
        $token = new Tokens();
        $token->value = filter_var($token_value, FILTER_SANITIZE_STRING);
        $response->getBody()->write($token->delete($this->db));
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
    //GET
    $app->get('/users/{id}', function(Request $request, Response $response, $args){
        if($request->hasHeader("Authorization")){
            $auth = $request->getHeader("Authorization")[0];
            $id = $args["id"];
            $user = new Users();
            $user->id = filter_var($id, FILTER_SANITIZE_STRING);
            $user->auth = filter_var($auth, FILTER_SANITIZE_STRING);
            $response->getBody()->write($user->retrieve($this->db));
            return $response;
        }
        else{
            $response->getBody()->write(json_encode("Authorization header missing"));
            return $response;
        }
    });
    //PUT
    $app->put('/users/{id}', function(Request $request, Response $response, $args){
        if($request->hasHeader("Authorization")){
            $data = $request->getParsedBody();
            if(!isset($data["emailNew"]) && !isset($data["passNew"])){
                $response->getBody()->write(json_encode("No input data given"));
                return $response;
            }
            $auth = $request->getHeader("Authorization")[0];
            $id = $args["id"];
            $user = new Users();
            $user->id = filter_var($id, FILTER_SANITIZE_STRING);
            $user->auth = filter_var($auth, FILTER_SANITIZE_STRING);
            if(isset($data["emailNew"])){
                $user->email = filter_var($data["emailNew"], FILTER_SANITIZE_STRING);
            }
            else if(isset($data["passNew"])){
                $user->password = filter_var($data["passNew"], FILTER_SANITIZE_STRING);
            }
            $response->getBody()->write($user->update($this->db,$data["password"]));
            return $response;
        }
        else{
            $response->getBody()->write(json_encode("Authorization header missing"));
            return $response;
        }
    });

    //Reservation endpoints
    //POST
    $app->post('/reservations',function(Request $request, Response $response){
        if($request->hasHeader("Authorization")){
            $data = $request->getParsedBody();
            if(!isset($data["data"]) || !isset($data["user_id"])){
                $response->getBody()->write(json_encode("Missing party data and/or user id input"));
                return $response;
            }
            $reservation = new Reservations();
            $reservation->user_id = filter_var($data["user_id"], FILTER_SANITIZE_STRING);
            $reservation->data = $data["data"];
            $reservation->auth = filter_var($request->getHeader("Authorization")[0], FILTER_SANITIZE_STRING);
            $response->getBody()->write($reservation->create($this->db));
            return $response;
        }
        else{
            $response->getBody()->write(json_encode("Authorization header missing"));
            return $response;
        }
    });

    $app->run();
?>
