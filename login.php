<?php

session_start();
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
	
	$row=mysqli_fetch_assoc($result);
	if($result->num_rows == 1){
		//header('Content-Type: application/json');
		
		$_SESSION["username"] = $row['username'];
		echo $row['username'];
		if($row['username'] == 'admin'){
			echo 'here';
			$sql = "SELECT * FROM users where username!='admin'";
			$data = mysqli_fetch_assoc($conn->query($sql));
			print json_encode($data);
		}
		echo 1;
	}else{
		header('HTTP/1.1 500 Internal Server Error');
        	header('Content-Type: application/json; charset=UTF-8');
        	die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
	}
}
$conn->close();
?>
