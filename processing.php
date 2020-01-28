<?php
$username = $_POST["username"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$password = $_POST["pass"];

$servername = "34.66.9.69";
$dbusername = "varun1";
$dbpassword = "Varun@123";
$dbname = "mydb";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users(username, phone, email, password) VALUES ('$username','$phone','$email','$password')";

if ($conn->query($sql) === TRUE){
	echo "New record created successfully";
}else{
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>