<?php

$host = getenv('DB1_HOST');
$username = getenv('DB1_USER');
$password = getenv('DB1_PASS');
$dbname = getenv('DB1_NAME');

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

