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

function editUser(e){
	editUserRowId = $(e).parent().parent().attr('id');
	console.log($(e).val());
	if($(e).val()=='Edit'){
		console.log('here');
		$(e).val('Save');
		$(e).html('Save');
		for(var i=0;i<3;i++){
			$("#"+editUserRowId).children().children()[i].readOnly = false; 
			$("#"+editUserRowId).children().children()[i].style.border = "1px solid #ced4da";	
		}
	}else if($(e).val()=='Save'){
		$(e).val('Edit');
		$(e).html('Edit');
		for(var j=0;j<3;j++){
			$("#"+editUserRowId).children().children()[j].readOnly = true; 
			$("#"+editUserRowId).children().children()[j].style.border = "none";
		}
		var newUsername = $("#"+editUserRowId).children().children()[0].value;
		var newPhone = $("#"+editUserRowId).children().children()[1].value;
		var newEmail = $("#"+editUserRowId).children().children()[2].value;
		var editUserId = $("#"+editUserRowId).children()[0].innerText;
		
		$.ajax({
		type: 'POST',
		async: false,
		url: 'http://104.154.144.118/signup-login-form/updateUser.php',
		data: {
			userId: editUserId,
			username: newUsername,
			phone: newPhone,
			email: newEmail
		},
		success: function(response){
			if(response==1){
				console.log('user updated');
			}
		},
		error: function(error){
			console.log(error);
		}
	});
		
	}else{
		console.log('error');	
	}
}

function setModal(e){
	deleteUserRowId = $(e).parent().parent().attr('id');
	deleteUserId = $("#"+deleteUserRowId).children()[0].innerText;
	
	var x = $("#"+deleteUserRowId).find("input");
	deleteUsername = x[0]['value'];
	$('.modal-title').text('Delete '+ deleteUsername + '?');
}

function deleteUser(){
	$.ajax({
		type: 'POST',
		async: false,
		url: 'http://104.154.144.118/signup-login-form/deleteUser.php',
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

function signout(){
	$.ajax({
		url: 'http://104.154.144.118/signup-login-form/signout.php',
		success: function(response){
			window.location.replace("http://104.154.144.118/signup-login-form/index.php");
		}
	});
}
