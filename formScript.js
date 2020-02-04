var phnnoFlag= false;
var emailFlag= false;
var passFlag= false;
var usernameFlag= false;

function checkName(){
	var e = document.getElementById('username');
	var name = e.value;
	var regex = /^\w?([A-Za-z0-9_])+$/;
	
	if(name.match(regex)){
		e.style.borderBottomColor="#0f0";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-check-circle"></i>';
		usernameFlag = true;
	}
	else if(name==""){
		e.style.borderColor="";
		e.nextElementSibling.innerHTML="";
		usernameFlag = false;
	}
	else{
		e.style.borderColor="#f00";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-times-circle"></i>';
		usernameFlag = false;
	}
}

function checkPhn(){
	  var e=document.getElementById('phone');
	  var phnno= e.value;
	  var regex = /^\(?([6-9]{1})\)?([0-9]{9})$/;
	  
	  if(phnno.match(regex)) {
		e.style.borderColor="#0f0";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-check-circle"></i>';
		phnnoFlag=true;
	  }
	  else if(phnno==""){
		e.style.borderColor="";
		e.nextElementSibling.innerHTML="";
		phnnoFlag=false;
	  }
	  else {
		e.style.borderColor="#f00";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-times-circle"></i>';
		phnnoFlag=false;
	  }
}

function checkEmail(){
	var e = document.getElementById('email');
	var email= e.value;
	var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(email.match(regex)){
		e.style.borderBottomColor="#0f0";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-check-circle"></i>';
		emailFlag = true;
	}
	else if(email==""){
		e.style.borderColor="";
		e.nextElementSibling.innerHTML="";
		emailFlag = false;
	}
	else{
		e.style.borderColor="#f00";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-times-circle"></i>';
		emailFlag = false;
	}
}

function confirmPass(){
	var e = document.getElementById('confirm-password');
	var pass = document.getElementById('password').value;
	var cpass = e.value;
	
	if(pass=="" || cpass==""){
		e.style.borderColor="";
		e.nextElementSibling.innerHTML="";
		passFlag = false;
	}
	else if(pass===cpass && pass!= "" && cpass!=""){
		e.style.borderColor="#0f0";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-check-circle"></i>';
		passFlag = true;
	}
	else{
		e.style.borderColor="#f00";
		e.nextElementSibling.innerHTML="";
		e.nextElementSibling.innerHTML='<i class="far fa-times-circle"></i>';
		passFlag= false;
	}
}

function submitted(){
	var submitBtn= document.getElementById('signup-submit-btn');
	var usernameElement= document.getElementById('username');
	var phoneElement= document.getElementById('phone');
	var emailElement= document.getElementById('email');
	var passwordElement= document.getElementById('password');
	var confirmPasswordElement= document.getElementById('confirm-password');
	
	if(phnnoFlag==true && emailFlag==true && passFlag==true && usernameFlag==true){
		usernameElement.disabled = true;
		phoneElement.disabled = true;
		emailElement.disabled = true;
		passwordElement.disabled = true;
		confirmPasswordElement.disabled = true;
		submitBtn.disabled= true;
		
		usernameElement.style.borderColor="";
		phoneElement.style.borderColor="";
		emailElement.style.borderColor="";
		confirmPasswordElement.style.borderColor="";
		
		usernameElement.nextElementSibling.innerHTML="";
		phoneElement.nextElementSibling.innerHTML="";
		emailElement.nextElementSibling.innerHTML="";
		confirmPasswordElement.nextElementSibling.innerHTML="";
		
		submitBtn.innerHTML = 'Submitting';
		
		$.ajax({
			type: 'POST',
			async: false,
			url: 'http://34.66.9.69/signup-login-form/processing.php',
			data: {username: usernameElement.value,
					phone: phoneElement.value,
					email: emailElement.value,
					pass: passwordElement.value},
			success: function(response){
				console.log(response);
				if(response==1){
					submitBtn.innerHTML = 'Submitted';
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	}else{
		if(usernameElement.value==""){
			usernameElement.style.borderColor="#f00";
		}
		if(phoneElement.value==""){
			phoneElement.style.borderColor="#f00";
		}
		if(emailElement.value==""){
			emailElement.style.borderColor="#f00";
		}
		if(passwordElement.value==""){
			passwordElement.style.borderColor="#f00";
		}
		if(confirmPasswordElement.value==""){
			confirmPasswordElement.style.borderColor="#f00";
		}
	}
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
				if(response==1){
					window.location.replace("http://34.66.9.69/signup-login-form/homepage.php");
				}
			},
			error: function(error){
				console.log('error: ' +error);
			}
		});
	}
}
