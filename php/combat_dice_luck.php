<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

	if(session_status() == PHP_SESSION_NONE){
			session_start();
	}

	include 'db.php';
	if(!empty($_SESSION['perso']) || isset($_SESSION['perso'])){
		$perso_id = $_SESSION['perso']->id;
		$perso_l = $_SESSION['perso']->luck;

		$req = $pdo->prepare("UPDATE personnages SET luck=luck-1 WHERE id = ?");
		$req->execute([$perso_id]);

		$_SESSION['perso']->luck = $_SESSION['perso']->luck - 1;

		echo "Vous perdez 1 point de Chance.";
	}

} else {
	header('Location: .././');
	exit();
}
