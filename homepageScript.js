function renderAllUsersData(data){
	var userTable = "<table><tr><th>User ID</th><th>Username</th><th>Phone</th><th>Email</th><th></th></tr>";
	for(key in data){
		userTable+= "<tr><td>" + key + "</td><td>" + data[key]['username'] + "</td><td>" + data[key]['phone'] + 
			"</td><td>" + data[key]['email'] + "</td><td><button class='edit-btn' onclick='editUser' value='Edit'>Edit</button>"+
			"<button type='button' class='btn btn-danger delete-btn' onclick='deleteUser' value='Delete'>Delete</button></td></tr>";
	}
	userTable+= "</table>";
	$('#data').append(userTable);
}

function signout(){
	window.location.replace("http://34.66.9.69/signup-login-form/index.php");
}
