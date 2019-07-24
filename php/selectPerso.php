<?php if(session_status() == PHP_SESSION_NONE){
		session_start();
		}

	if(!isset($_SESSION['auth'])){
	header('Location: index.php');
	exit();
	}

	if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
	    header('Location: index.php');
	    exit();
	}

	$perso_id = $_GET['id'];

	require 'db.php';

	$req = $pdo->prepare("SELECT id, pseudo, hability, endurance, luck FROM personnages WHERE id = ? ");
	$req->execute([$perso_id]);
	$selectedPerso = $req->fetch();

	$_SESSION['perso'] = $selectedPerso;

	$req = $pdo->prepare("SELECT id, first_aid_kit, credits FROM backpack WHERE perso_id = ?");
	$req->execute([$_SESSION['perso']->id]);
	$perso_backpack = $req->fetch();
	
	$_SESSION['backpack'] = $perso_backpack;

	$_SESSION['flash']['success'] = 'Perso selectionné !';

	header('Location: index.php');
	exit();

