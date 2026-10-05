<?php

class DatabaseService
{
    private $db_host = getenv('DB2_HOST');
    private $db_user= getenv('DB2_USER');
    private $db_password = getenv('DB2_PASS');
    private $db_name = getenv('DB2_NAME');

    private $connection;

    public function getConnection()
    {

        $this->connection = null;

        try {
            $this->connection = new PDO("mysql:host=" . $this->db_host . ";dbname=" . $this->db_name, $this->db_user, $this->db_password);
        } catch (PDOException $exception) {
            echo "Connection failed: " . $exception->getMessage();
        }

        return $this->connection;
    }

}

