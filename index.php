<?php

	include 'engine/session.php';
	include 'engine/pagenotfound.php';
	
	//incluce header
    include ('view/layout/header.html');
	
	//include page
	if($pageExist){
		include('view/pages/' . $_SESSION['page'] . '.html');
	}else{
		include('view/pages/pageNotFound.html');
	}
	
	//include footer
    include ('view/layout/footer.html'); 
?>