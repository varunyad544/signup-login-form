<?php
include 'login.php';
?>
<!Doctype HTML>
<html>
<head>
	<link rel="shortcut icon" href="#" />
	<script>
		var id = <?php echo $_SESSION["userId"] ?>;
		if(id==13){
			$.ajax({
			type: 'POST',
			async: false,
			url: 'http://34.66.9.69/signup-login-form/processing.php',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});	
		}
	</script>
</head>
<body>
	<h1>Welcome <?php echo $_SESSION["username"] ?> </h1>
  	<p>
	 
  	</p>
  	<button type="button" onclick="signout();">Sign out</button>
  	<div id="data">
    
  	</div>
	<script src="homepageScript.js"></script>
</body>
</html>
