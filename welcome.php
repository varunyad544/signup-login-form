<?php
include 'login.php';
session_start();
?>
<!Doctype HTML>
<html>
<head>
</head>
<body>
<h1>Welcome <?php echo $_SESSION["username"] ?> </h1>
</body>
</html>
