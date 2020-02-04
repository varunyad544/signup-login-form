<?php
	$userData = array();
	$sql = "SELECT * FROM users WHERE username!='admin'";
	$result = $conn->query($sql);
	
	while($data = $result->fetch_assoc()){
		$userData += [$data['user_id']=> array('username'=>$data['username'], 'phone'=>$data['phone'], 
		      					'email'=>$data['email'], 'password'=>$data['password'])];
	}
	die(json_encode($userData));
?>
