<?php

$usernameFlag = false;
$phoneFlag = false;
$emailFlag = false;
$passwordFlag = false;

$username = $_POST["username"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$pass = $_POST["pass"];

$servername = "104.154.144.118";
$dbusername = "root";
$dbpassword = "Varun@123";
$dbname = "mydb";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

if($username!="" and $phone!="" and $email!="" and $pass!=""){
	$emailAvailable = checkEmailAvailability($email);
	$usernameAvailable = checkUsernameAvailability($username);
	
	if($emailAvailable and $usernameAvailable){
		$sql = "INSERT INTO users(username, phone, email, password) VALUES ('$username','$phone','$email','$pass')";

		if ($conn->query($sql) === TRUE){
			echo 1;
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}	
	}else{
		if($emailAvailable == false)
			echo "email already exists.";
		if($usernameAvailable == false)
			echo "username already exists.";
	}
	$conn->close();
}
else{
	echo 0;	
}

function checkEmailAvailability($email){
	global $conn;
	$result = $conn->query("SELECT user_id from users where email = '$email'");	
	if($result->num_rows == 0){
		return true;	
	}else{
		return false;	
	}
}

function checkUsernameAvailability($username){
	global $conn;
	$result = $conn->query("SELECT user_id from users where username = '$username'");
	if($result->num_rows == 0){
		return true;	
	}else{
		return false;	
	}
}
?>
