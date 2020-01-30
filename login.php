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
	echo $user;
	$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
	$result = $conn->query($sql);
	$row=mysqli_fetch_assoc($result);
	
	echo 'result';
	
	if($result->num_rows == 1){	
		$_SESSION["username"] = $row["username"];
		$_SESSION["phone"] = $row["phone"];
		$_SESSION["email"] = $row["email"];
		$_SESSION["password"] = $row["password"];
		echo 'here';
		
		if($row['username'] == 'admin'){
			echo 'admin';
			$userData = array();
			$sql = "SELECT * FROM users WHERE username!='admin'";
			$result = $conn->query($sql);
			while($data = $result->fetch_assoc()){
				$userData += [$data['user_id']=> array('username'=>$data['username'], 'phone'=>$data['phone'], 
								      'email'=>$data['email'], 'password'=>$data['password'])];
			}
			print json_encode($userData);
		}else{
			echo 'not admin';	
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
