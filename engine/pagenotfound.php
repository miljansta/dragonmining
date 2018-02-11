<?php
	$path    = 'view/pages/';

	$pages = array_diff(scandir($path), array('.', '..'));
	
	$currPage = $_SESSION['page'] . '.html';
	$pageExist = 0;
	
	foreach(array_values($pages) as $page){
			if($page == $currPage){	$pageExist = 1; }
	}
?>