<?php

function logged_only(){

	if(!isset($_SESSION['auth'])){
	$_SESSION['flash']['danger'] = "Vous n'avez pas le droit d'accéder a cette page";
	header('Location: index.php');
	exit();
	}

}