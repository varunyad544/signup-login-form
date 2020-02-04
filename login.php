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
		$_SESSION["userId"] = $row["user_id"];
		$_SESSION["username"] = $row["username"];
		$_SESSION["phone"] = $row["phone"];
		$_SESSION["email"] = $row["email"];
		$_SESSION["password"] = $row["password"];
		
		echo 1;
	}else{
		//die(json_encode(array('validUser'=>false, 'isAdmin'=>false, 'allUserData'=>"")));
		echo 0;
	}
}else{
	//die(json_encode(array('validUser'=>false, 'isAdmin'=>false, 'allUserData'=>"")));
	echo 0;
}
$conn->close();
?>
