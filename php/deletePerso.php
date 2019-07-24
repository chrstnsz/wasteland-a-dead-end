<?php 	
	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
	    header('Location: index.php');
	    exit();
	}

	if(session_status() == PHP_SESSION_NONE){
	session_start();
	}

	if(!isset($_SESSION['auth'])){
	header('Location: index.php');
	exit();
	}

	require 'db.php';

	$perso_id = $_GET['id'];
	$req = $pdo->prepare("DELETE FROM personnages WHERE id = ? ");
	$req->execute([$perso_id]);

	if($_SESSION['perso']->id == $perso_id) {
		unset($_SESSION['perso']);
	}
	$_SESSION['flash']['danger'] = 'Perso supprimé !';

	header('Location: account.php');
    exit();
