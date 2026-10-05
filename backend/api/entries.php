<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET; POST; PUT; DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../../config/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        handleGet($pdo);
        break;
    case 'POST':
        handlePost($pdo, $input);
        break;
    case 'PUT':
        handlePut($pdo, $input);
        break;
    case 'DELETE':
        handleDelete($pdo, $input);
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}

function handleGet($pdo)
{
    if (isset($_GET['email']) == null) {
        error422("Missing email");
    }
    $email = $_GET['email'];

    if (isset($_GET['date']) == null) {
        $sql = "SELECT * FROM cigarette_dairy WHERE email=:email ORDER BY time";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':email' => $email ]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    } else {
        $date = $_GET['date'];
        $sql = "SELECT * FROM cigarette_dairy WHERE (email=:email AND date=:date) ORDER BY time";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':email' => $email,':date' => $date]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
}

function handlePost($pdo, $input)
{
    $sql = "INSERT INTO cigarette_dairy (email, date, time, amount, reason, needed) VALUES (:email, :date, :time, :amount, :reason, :needed)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'email' => $input['email'],
        'date' => $input['date'],
        'time' => $input['time'],
        'amount' => $input['amount'],
        'reason' => $input['reason'],
        'needed' => $input['needed'],
    ]);
    echo json_encode(['message' => 'Cigarette entry created successfully']);
}

function handlePut($pdo, $input)
{
    $sql = "UPDATE cigarette_dairy (email, date, time, amount, reason, needed) VALUES (:email, :date, :time, :amount, :reason, :needed) WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'email' => $input['email'],
        'date' => $input['date'],
        'time' => $input['time'],
        'amount' => $input['amount'],
        'reason' => $input['reason'],
        'needed' => $input['needed'],
        'id' => $input['id']]);
    echo json_encode(['message' => 'Cigarette entry updated successfully']);
}

function handleDelete($pdo, $input)
{
    $sql = "DELETE FROM cigarette_dairy WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $input['id']]);
    echo json_encode(['message' => 'Cigarette entry deleted successfully']);
}

function error422($message)
{
    $res = [
        'status' => 422,
        'message' => $message,
    ];
    header("HTTP/1.0 422 Unprocessable Entity");

    return json_encode($res);

    exit();
}
