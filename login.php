<?php
$servername = "34.66.9.69";
$dbusername = "varun1";
$dbpassword = "Varun@123";
$dbname = "mydb";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$user = $_POST["user"];
$pass = $_POST["pass"];

if($user!="" and $pass!=""){
	$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
	$result = $conn->query($sql);
	if($result->num_rows == 1){
		echo 1;
	}else{
		echo 0;
	}
}
$conn->close();
?>