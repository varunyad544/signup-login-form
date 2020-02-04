function renderAllUsersData(data){
	console.log('in second file');
	data = JSON.parse(data);
	var userTable = "<table style='width:100%'><tr><th>User ID</th><th>Username</th><th>Phone</th><th>Email</th></tr>";
	for(key in data){
		userTable+= "<tr><td>" + key + "</td><td>" + data[key]['username'] + "</td><td>" + data[key]['phone'] + 
			"</td><td>" + data[key]['email'] + "</td></tr>";
	}
	userTable+= "</table>";
	$('#data').append(userTable);
}

function signout(){
	window.location.replace("http://34.66.9.69/signup-login-form/index.php");
}
