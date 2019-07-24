<?php require 'functions.php'; ?>
<?php logged_only();
$user = $_SESSION['auth']->id;

require 'db.php';

$req = $pdo->prepare("SELECT
	personnages.id,
	users.username,
	pseudo,
	hability,
	endurance,
	luck
	FROM personnages
	INNER JOIN users ON personnages.user_id = users.id
	WHERE users.id= ? ");

$req->execute([$user]);
$persoList = $req->fetchAll();

$template = 'account';

include '../view/layout.phtml';
