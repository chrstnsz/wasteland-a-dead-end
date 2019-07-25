<?php
if(session_status() == PHP_SESSION_NONE){
	session_start();
}

if(isset($_SESSION['auth'])){
	header('Location: index.php');
	exit();
}

if(!empty($_POST) && !empty($_POST['username']) && !empty($_POST['password'])) {

	require_once 'db.php';

	$req = $pdo->prepare('SELECT * FROM users WHERE (username = :username OR email = :username)');
	$req->execute(['username' => $_POST['username']]);

	if($user = $req->fetch()){
		if(password_verify($_POST['password'], $user->password)){
			$_SESSION['auth'] = $user;
			$_SESSION['flash']['success'] = "Vous êtes maintenant connecté.";

			$_SESSION['LAST_ACTIVITY'] = time();
			
			header('Location: account.php');
			exit();
		}else{
		$_SESSION['flash']['danger'] = 'Identifiant ou mot de passe incorrect.';
		}
	}else {
		$_SESSION['flash']['danger'] = 'Identifiant ou mot de passe incorrect.';
	}
}

$template = 'login';

include '../view/layout.phtml';