<?php

if($_POST && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){

	if(empty($_POST['perso_hab']) || empty($_POST['pnj_hab'])){
		$result = json_encode(
					array(
					'a' => "Empty",
					'b' => "Battez vous."
					)
				);
	}else{

		if(session_status() == PHP_SESSION_NONE){
			session_start();
		}

		include 'db.php';

		$perso_h = $_SESSION['perso']->hability;
		$perso_e = $_SESSION['perso']->endurance;
		$perso_id = $_SESSION['perso']->id;

		$persoTurnCount = $_POST['persoTurnCount'];
		$pnjTurnCount = $_POST['pnjTurnCount'];

		$perso_hab = $_POST['perso_hab'];
		$pnj_hab = $_POST['pnj_hab'];


		if($perso_hab > $pnj_hab){
			$pnjTurnCount += 2;
			if ($pnjTurnCount > 5){
				$result = json_encode(
					array(
					'a' => "Victory",
					'b' => "Vous sortez victorieux de cette lutte."
					)
				);
			}else{
				$result = json_encode(
					array(
					'a' => "Give",
					'b' => "Vous êtes plus rapide, vous lui assènez un coup. Relancez les dés !"
					)
				);
			}
			
		} elseif ($pnj_hab > $perso_hab){
			$persoTurnCount += 2;
			$req = $pdo->prepare("UPDATE personnages SET endurance=endurance-1 WHERE id = ?");
			$req->execute([$perso_id]);

			$_SESSION['perso']->endurance = $_SESSION['perso']->endurance - 1;

			if ($_SESSION['perso']->endurance < 1 || $persoTurnCount > 5){
				$result = json_encode(
					array(
					'a' => "Dead",
					'b' => "Vous tombez à terre."
					)
				);
			} else {
				$result = json_encode(
					array(
					'a' => "Take",
					'b' => "Il est plus rapide que vous, il vous touche, il vous reste " . htmlspecialchars($_SESSION['perso']->endurance) . " pts d'endurance. Relancez les dés !"
					)
				);			
			}
			
		} else {
			$result = json_encode(
					array(
					'a' => "Draw",
					'b' => "Vous parrez son attaque. Relancez les dés !"
					)
				);
		}
	}

	echo $result;

}else{
	header('Location: ../index.php');
	exit();
}

