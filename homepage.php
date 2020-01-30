<?php
include 'login.php';
?>
<!Doctype HTML>
<html>
<head>
</head>
<body>
<h1>Welcome <?php echo $_SESSION["username"] ?> </h1>
  <button type="button" onclick="signout();">Sign out</button>
  
  <script src="homepageScript.js"></script>
</body>
</html>
