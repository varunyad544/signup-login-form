<?php

$usernameFlag = false;
$phoneFlag = false;
$emailFlag = false;
$passwordFlag = false;

$username = $_POST["username"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$pass = $_POST["pass"];

if($username!="" and $phone!="" and $email!="" and $pass!=""){
	$servername = "34.66.9.69";
	$dbusername = "varun1";
	$dbpassword = "Varun@123";
	$dbname = "mydb";

	$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$sql = "INSERT INTO users(username, phone, email, password) VALUES ('$username','$phone','$email','$pass')";

	if ($conn->query($sql) === TRUE){
		echo 1;
	}else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
}
else{
	echo 0;	
}
?>
