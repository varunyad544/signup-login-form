<?php
session_start();
if(!isset($_SESSION['username'])){
	header("Location: http://104.154.144.118/signup-login-form/index.php");
}

$servername = "104.154.144.118";
$dbusername = "root";
$dbpassword = "Varun@123";
$dbname = "mydb";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$userData = array();
$sql = "SELECT * FROM users WHERE username!='admin'";
$result = $conn->query($sql);

while($data = $result->fetch_assoc()){
	$userData += [$data['user_id']=> array('username'=>$data['username'], 'phone'=>$data['phone'], 
						'email'=>$data['email'], 'password'=>$data['password'])];
}
die(json_encode($userData));
?>
