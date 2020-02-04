<?php
include 'login.php';
?>
<!Doctype HTML>
<html>
<head>
	<link rel="shortcut icon" href="#" />
	<script>
		var id = <?php echo $_SESSION["userId"] ?>
		    console.log(id);
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
