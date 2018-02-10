<?php

	include 'engine/session.php';
	
	
	//incluce header
    include ('view/layout/header.html');
	
	//print_r($_SESSION);
	
	//include page
    include('view/pages/' . $_SESSION['page'] . '.html');
	//print_r($_GET);
	
	//include footer
    include ('view/layout/footer.html'); 
?>