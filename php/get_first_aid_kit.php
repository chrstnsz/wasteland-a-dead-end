<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

	if(session_status() == PHP_SESSION_NONE){
			session_start();
		}

	include 'db.php';

	$perso_id = $_SESSION['perso']->id;

	$req = $pdo->prepare("UPDATE backpack SET first_aid_kit=first_aid_kit-1 WHERE id = ?");
	$req->execute([$perso_id]);

	$req2 = $pdo->prepare("UPDATE personnages SET endurance=endurance+4 WHERE id = ?");
	$req2->execute([$perso_id]);

	$_SESSION['backpack']->first_aid_kit = $_SESSION['backpack']->first_aid_kit - 1;
	$_SESSION['perso']->endurance += 4;
	
	echo "Vous avez regagné 4 points d'endurance. Une unité de Trousse de Secours a été retiré.";

} else {
	header('Location: ../index.php');
	exit();
}