$("#login-btn").on("click", function () {
    $(this)
      .addClass("active-button")
      .siblings()
      .removeClass("active-button");
    $(".signup-form").slideUp(500);
    $(".login-form").slideDown(500);
  });

  $("#signup-btn").on("click", function () {
    $(this)
      .addClass("active-button")
      .siblings()
      .removeClass("active-button");
    $(".login-form").slideUp(500);
    $(".signup-form").slideDown(500);
  });

function signup(username,phone,email,pass){
 $.ajax({
			type: 'POST',
			async: false,
			url: 'http://34.66.9.69/signup-login-form/processing.php',
			data: {username: username,
					phone: phone,
					email: email,
					pass: pass},
			success: function(response){
				console.log(response);
				if(response==1){
					$("#signup-submit-btn").html('submitted');
				}
			},
			error: function(error){
				console.log(error);
			}
		});   
}

function login(){
	var username = document.getElementById('login-username').value;
	var pass = document.getElementById('login-password').value;

	if(username!="" && pass!=""){
		$.ajax({
			type: 'POST',
			async: false,
			url: 'http://34.66.9.69/signup-login-form/login.php',
			data: {user: username,
				pass: pass},
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	}
