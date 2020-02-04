<?php
include 'login.php';
?>
<!Doctype HTML>
<html>
<head>
  <link rel="shortcut icon" href="#" />
</head>
<body>
<h1>Welcome <?php echo $_SESSION["username"] ?> </h1>
  <button type="button" onclick="signout();">Sign out</button>
  <div id="data">
    <p id="dat">hgdskj</p>
  </div>
  <script src="homepageScript.js"></script>
</body>
</html>
