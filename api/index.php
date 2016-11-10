<?php
//Include all models
include_once 'models/TodoItem.php';

try {
    $params = $_REQUEST;

    //Get controller
    $controller = ucfirst(strtolower($params['controller']));

    //Get action
    $action = strtolower($params['action']).'Action';

    //Check if controller exists
    if( file_exists("controllers/{$controller}.php") ) {
        include_once "controllers/{$controller}.php";
    } else {
        throw new Exception('Controller is invalid.');
    }

    //create a new instance of the controller, and pass
    //it the parameters from the request
    $controller = new $controller($params);

    //check if the action exists in the controller. if not, throw an exception.
    if( method_exists($controller, $action) === false ) {
        throw new Exception('Action is invalid.');
    }

    //execute the action
    $result['data'] = $controller->$action();
    $result['success'] = true;

} catch( Exception $e ) {
    //catch any exceptions and report the problem
    $result = array();
    $result['success'] = false;
    $result['errormsg'] = $e->getMessage();
}

//echo the result of the API call
echo json_encode($result);
exit();
?>
