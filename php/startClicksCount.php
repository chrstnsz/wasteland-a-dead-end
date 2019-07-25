<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

	if(session_status() == PHP_SESSION_NONE){
		session_start();
		}

	$user = $_SESSION['auth'];
	require 'db.php';
	$pdo->prepare("UPDATE users SET score=0+1 WHERE id=?")->execute([$user->id]);

	$req = $pdo->prepare("SELECT score FROM users WHERE id=?");
	$req->execute([$user->id]);
	$count = $req->fetch();

	echo htmlspecialchars($count->score);

} else {
	header('Location: .././');
}
