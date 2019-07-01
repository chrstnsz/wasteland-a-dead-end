<?php
if(!empty($_POST)){

	if(session_status() == PHP_SESSION_NONE){
	session_start();
	}
	require_once 'php/db.php';	

	$errors = array();


	if(empty($_POST['pseudo']) || !preg_match('/^[a-zA-Z0-9_]+$/', $_POST['pseudo']) || strlen($_POST['pseudo']) > 12)){
		$errors['pseudo'] = "Votre pseudo n'est pas valide.";

	} else {

		$req = $pdo->prepare('SELECT id FROM personnages WHERE pseudo = ?');

		$req->execute([$_POST['pseudo']]);
		$user = $req->fetch();

		if($user){
			$errors['pseudo'] = "Ce pseudo est déjà utilisé";
		}
	}

	if(empty($_POST['hability']) || !filter_var($_POST['hability'],
		FILTER_VALIDATE_INT,
			array(
	        	'options' => array(
	            	'min_range' => 1, 
	            	'max_range' => 100
	        	)
	    	)
    	)
    ){
		$errors['hability'] = "L'entrée hability est incorrecte.";
    }

    if(empty($_POST['endurance']) || !filter_var($_POST['endurance'],
		FILTER_VALIDATE_INT,
			array(
	        	'options' => array(
	            	'min_range' => 1, 
	            	'max_range' => 100
	        	)
	    	)
    	)
    ){
		$errors['endurance'] = "L'entrée endurance est incorrecte.";
    }

    if(empty($_POST['luck']) || !filter_var($_POST['luck'],
		FILTER_VALIDATE_INT,
			array(
	        	'options' => array(
	            	'min_range' => 1, 
	            	'max_range' => 100
	        	)
	    	)
    	)
    ){
		$errors['luck'] = "L'entrée chance est incorrecte.";
    }

	if(empty($errors)){

		$pseudo = $_POST['pseudo'];
		$hability = intval($_POST['hability']);
		$endurance = intval($_POST['endurance']);
		$chance = intval($_POST['luck']);
		$user_id = $_SESSION['auth']->id;

		$req = $pdo->prepare("INSERT INTO personnages SET pseudo = ?, hability = ?, endurance = ?, luck = ?, user_id= ?");
		$req->bindParam( 1 , $pseudo);
		$req->bindParam( 2 , $hability);
		$req->bindParam( 3 , $endurance);
		$req->bindParam( 4 , $chance);
		$req->bindParam( 5 , $user_id);
		$req->execute();

		$last_Id = $pdo->lastInsertId();

		$req3 = $pdo->prepare("INSERT INTO backpack SET perso_id = ?");
		$req3->bindParam( 1 , $last_Id);
		$req3->execute();

		$req = $pdo->prepare("SELECT id, pseudo, hability, endurance, luck FROM personnages WHERE id = ? ");
		$req->execute([$last_Id]);
		$selectedPerso = $req->fetch();

		$_SESSION['perso'] = $selectedPerso;

		$req = $pdo->prepare("SELECT id, first_aid_kit, credits FROM backpack WHERE perso_id = ?");
		$req->execute([$last_Id]);
		$perso_backpack = $req->fetch();
		
		$_SESSION['backpack'] = $perso_backpack;

		$_SESSION['flash']['success'] = 'Votre perso a bien été créé !';
		header('Location: account.php');
		exit();
	}

}else {
	header('Location: index.php');
	exit();
}

include 'index.php';
