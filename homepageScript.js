function renderAllUsersData(data){
	data = JSON.parse(data);
	console.log(data);
	var userTable = "<table style='width:100%'><tr><th>User ID</th><th>Username</th><th>Phone</th><th>Email</th></tr>";
	for(var key in data){
		userTable+= "<tr><td>" + key + "</td><td>" + data.key.username + "</td><td>" + data.key.phone + 
			"</td><td>" + data.key.email + "</td></tr>";
	}
	userTable+= "</table>";
	document.write(userTable);
}

function signout(){
	window.location.replace("http://34.66.9.69/signup-login-form/index.php");
}
