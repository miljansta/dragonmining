<?php
    session_start();
	
	if(isset($_GET['page']) && $_GET['page'] != ''){
		$_SESSION['page'] = $_GET['page'];
	}else{
		$_SESSION['page'] = 'home';
	}
?>