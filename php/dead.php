<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

	if(session_status() == PHP_SESSION_NONE){
		session_start();
	}

	$perso_id = $_SESSION['perso']->id;

	require 'db.php';
	$req = $pdo->prepare("DELETE FROM personnages WHERE id = ?");
	$req->execute([$perso_id]);
	unset($_SESSION['perso']);
	header('Location: ../index.php');
	exit();

}else{
	header('Location: ../index.php');
	exit();
}