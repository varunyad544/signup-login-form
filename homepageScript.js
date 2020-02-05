	var deleteUserRowId='';
	var deleteUsername='';
	var deleteUserId='';
	
	function renderAllUsersData(data){
	var userTable = "<table><tr><th>User ID</th><th>Username</th><th>Phone</th><th>Email</th><th></th></tr>";
	for(key in data){
		userTable+= "<tr id='row"+key+"'><td>" + key + "</td><td>" + data[key]['username'] + "</td><td>" + data[key]['phone'] + 
			"</td><td>" + data[key]['email'] + "</td><td>";
		
		userTable+= "<button type='button' class='btn btn-primary edit-btn' onclick='editUser(this);' value='Edit'>Edit</button>";
		
		userTable+= "<button type='button' class='btn btn-danger' onclick='setModal(this);' data-toggle='modal' data-target='#myModal'>Delete</button>";
		
		userTable+= "</td></tr>";
	}
	userTable+= "</table>";
	$('#data').append(userTable);
}

function signout(){
	window.location.replace("http://34.66.9.69/signup-login-form/index.php");
}

function setModal(e){
	deleteUserRowId = $(e).parent().parent().attr('id');
	var x = $("#"+deleteUserRowId).children();
	deleteUsername = x[1].textContent;
	deleteUserId = x[0].textContent;
	$('.modal-title').text('Delete '+ deleteUsername);
}

function deleteUser(){
	$.ajax({
		type: 'POST',
		async: false,
		url: 'http://34.66.9.69/signup-login-form/deleteUser.php',
		data: {
			userId: deleteUserId	
		},
		success: function(response){
			if(response==1{
				$('.modal-body').empty();
				$('.modal-body').text('User deleted sucessfully');
			}
		},
		error: function(error){
			console.log(error);
		}
	});
}
