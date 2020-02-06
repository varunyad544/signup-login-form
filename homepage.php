<?php
session_start();
echo " <script> console.log('" . $_SESSION["username"] . "') </script> ";
if(!isset($_SESSION['username'])){
	header("Location: http://34.66.9.69/signup-login-form/index.php");
}
?>
<!Doctype HTML>
<html>
<head>
	<link rel="shortcut icon" href="#" />
	
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="homepageStyle.css">
	
</head>
<body>
	<h1>Welcome <?php echo $_SESSION["username"] ?> </h1>
  	<p>
	 
  	</p>
  	<button type="button" onclick="signout();">Sign out</button>
  	<div id="data">
    
  	</div>
	
	<div class="modal" id="myModal">
		<div class="modal-dialog">
			<div class="modal-content">

				<!-- Modal Header -->
				<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>

				<!-- Modal body -->
				<div class="modal-body">
				Are you sure to delete this user permanentaly?
					<button type='button' class='btn btn-danger delete-btn' onclick="deleteUser();">Delete</button>
				</div>

				<!-- Modal footer -->
				<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>

			</div>
		</div>
	</div>
	<script src="homepageScript.js"></script>
	
	<script>
		var id = <?php echo $_SESSION["userId"] ?>;
		if(id==13){
			$.ajax({
			type: 'POST',
			async: false,
			url: 'http://34.66.9.69/signup-login-form/fetchUsers.php',
			success: function(response){
				response = JSON.parse(response);
				renderAllUsersData(response);
			},
			error: function(error){
				console.log(error);
			}
		});	
		}
		
		function signout(){
			<?php
				session_unset();
				session_destroy();
			?>
			window.location.replace("http://34.66.9.69/signup-login-form/index.php");
		}
	</script>
</body>
</html>
