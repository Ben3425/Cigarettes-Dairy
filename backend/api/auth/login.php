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


$email = '';
$password = '';

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();


$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$table_name = 'Users';

$query = "SELECT id, username, password FROM " . $table_name . " WHERE email = ? LIMIT 0,1";

$stmt = $conn->prepare($query);
$stmt->bindParam(1, $email);
$stmt->execute();
$num = $stmt->rowCount();

if ($num > 0) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $id = $row['id'];
    $username = $row['username'];
    $password2 = $row['password'];

    if (password_verify($password, $password2)) {
        $key = getenv('SECRET_KEY');
        $issuer_claim = "https://gymprogress.de.cool/api"; // this can be the servername
        $audience_claim = "https://gymprogress.de.cool";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 10; //not before in seconds
        $expire_claim = $issuedat_claim + 60; // expire time in seconds
        $payload = [
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => [
                "id" => $id,
                "username" => $username,
                "email" => $email,
            ]];

        $jwt = JWT::encode($payload, $key, 'HS256');

        http_response_code(200);
        echo json_encode(
            [
                "message" => "Successful login.",
                "jwt" => $jwt,
                "email" => $email,
                "username" => $username,
                "expireAt" => $expire_claim,
            ],
        );

    } else {

        http_response_code(401);
        echo json_encode(["message" => "Login failed.", "password" => $password]);
    }
} else {

    http_response_code(404);
    echo json_encode(["message" => "Missing data."]);
}
