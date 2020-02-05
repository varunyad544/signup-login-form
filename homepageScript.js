	var editUserRowId='';
	var deleteUserRowId='';
	var deleteUsername='';
	var deleteUserId='';
	
	function renderAllUsersData(data){
	var userTable = "<table><tr><th>User ID</th><th>Username</th><th>Phone</th><th>Email</th><th></th></tr>";
	for(key in data){
		userTable+= "<tr id='row"+key+"'><td>" + key + "</td><td><input type='text' value='" + data[key]['username'] + "' readonly></td><td><input type='text' value='" + data[key]['phone'] + "' readonly></td><td><input type='text' value='" + data[key]['email'] + "' readonly></td><td>";
		
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

function editUser(button){
	editUserRowId = $(button).parent().parent().attr('id');
	console.log($(button).val());
	if($(button).val()=='Edit'){
		console.log('here');
		$(button).val('Save');
		$(button).html('Save');
		for(var i=0;i<3;i++){
			$("#"+editUserRowId).children().children()[i].readOnly = false; 
			$("#"+editUserRowId).children().children()[i].style.border = "1px solid #ced4da";	
		}
	}
	if($(button).val()=='Save'){
		$(button).val('Edit');
		$(button).html('Edit');
		for(var i=0;i<3;i++){
			$("#"+editUserRowId).children().children()[i].readOnly = true; 
			$("#"+editUserRowId).children().children()[i].style.border = "none";	
		}
	}
}

function setModal(e){
	deleteUserRowId = $(e).parent().parent().attr('id');
	deleteUserId = $("#"+deleteUserRowId).children()[0].innerText;
	
	var x = $("#"+deleteUserRowId).find("input");
	deleteUsername = x[0]['value'];
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
			if(response==1){
				$("#"+deleteUserRowId).remove();
				$('.modal-body').empty();
				$('.modal-body').text('User deleted sucessfully');
			}
		},
		error: function(error){
			console.log(error);
		}
	});
}
