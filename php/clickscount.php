<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

	if(session_status() == PHP_SESSION_NONE){
		session_start();
	}

	$user = $_SESSION['auth'];

	require 'db.php';
	$pdo->prepare("UPDATE users SET score=score+1 WHERE id=?")->execute([$user->id]);

	$req = $pdo->prepare("SELECT score, scoreMax FROM users WHERE id=?");
	$req->execute([$user->id]);
	$count = $req->fetch();

	$scoreMax = $count->scoreMax;
	$scoreIndex = $count->score;

	if($scoreIndex >= $scoreMax){
		$req1 = $pdo->prepare("UPDATE users SET scoreMax=? WHERE id=?");
		$req1->bindParam(1, $scoreIndex);
		$req1->bindParam(2, $user->id);
		$req1->execute();	
	}

	echo htmlspecialchars($count->score);

} else {
	header('Location: ../index.php');
}
