<?php
require_once 'db.php';

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
	/* ajax here */
	$int = 1;
	$req = $pdo->prepare("SELECT * FROM story WHERE id =?");
	$req->execute([$int]);
	$res = $req->fetch();

	if(is_array($res) && count($res) > 0){
		$first_scene_id = $res['id'];
		$first_scene = $res['scene'];
		$first_scene_choice_1 = $res['choice_1'];
		$first_scene_choice_target_1 = $res['choice_target_1'];
		$first_scene_choice_2 = $res['choice_2'];
		$first_scene_choice_target_2 = $res['choice_target_2'];
		$first_scene_picture_alt = $res['picture_alt'];

		$ii = json_encode(array(
		    "a" => $first_scene_id,
		    "c" => $first_scene,
		    "d" => $first_scene_choice_1,
		    "e" => $first_scene_choice_target_1,
		    "f" => $first_scene_choice_2,
		    "g" => $first_scene_choice_target_2,
			"i" => $first_scene_picture_alt));
		echo $ii;
	}
}else{
	header('Location: ../');
}
