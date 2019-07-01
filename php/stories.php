<?php

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	/* ajax here */
	if(array_key_exists('radioChoice',$_POST) && !empty($_POST['radioChoice'])){
		$choice = $_POST['radioChoice'];

		require_once 'db.php';
		
		$req = $pdo->prepare("SELECT * FROM story WHERE id=?");
		$req->execute([$choice]);
		$res = $req->fetch(PDO::FETCH_ASSOC);

		if(is_array($res) && count($res) > 0){
			$nextId = $res['id'];
			$nextScene = $res['scene'];
			$nextChoice1 = $res['choice_1'];
			$nextTarget1 = $res['choice_target_1'];
			$nextChoice2 = $res['choice_2'];
			$nextTarget2 = $res['choice_target_2'];

		    $e = json_encode(array(
		        "a" => $nextId,
		        "c" => $nextScene,
		        "d" => $nextChoice1,
		        "e" => $nextTarget1,
		        "f" => $nextChoice2,
		        "g" => $nextTarget2));
		    echo $e;
		}
	}
}else{
	header('Location: ../index.php');
}