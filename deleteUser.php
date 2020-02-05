<?php
$servername = "34.66.9.69";
$dbusername = "varun1";
$dbpassword = "Varun@123";
$dbname = "mydb";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$userId = $_POST["userId"];

if($userId!=""){
	$sql = "DELETE FROM users WHERE	user_id='$userId'";
	if ($conn->query($sql) === TRUE) {
		echo 1;
	} else {
    		
	}
	
$conn->close();
} 

?>
