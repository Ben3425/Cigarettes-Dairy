<?php

include_once "../../../config/user_database.php";
require "../../../vendor/autoload.php";

use Dotenv\Dotenv;
use Firebase\JWT\JWT;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$jwt = null;
$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));


$authHeader = $_SERVER['HTTP_AUTHORIZATION'];

$arr = explode(" ", $authHeader);


/*echo json_encode(array(
    "message" => "sd" .$arr[1]
));*/

$jwt = $arr[1];

if ($jwt) {

    try {

        $decoded = JWT::decode($jwt, getenv('SECRET_KEY'), null, ['HS256']);

        // Access is granted. Add code of the operation here
        http_response_code(200);
        echo json_encode([
            "message" => "Access granted:",
            "error" => $e->getMessage(),
        ]);

    } catch (Exception $e) {

        http_response_code(401);

        echo json_encode([
            "message" => "Access denied.",
            "error" => $e->getMessage(),
        ]);
    }
}
