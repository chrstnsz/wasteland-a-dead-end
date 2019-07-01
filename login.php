<?php
if(session_status() == PHP_SESSION_NONE){
	session_start();
}

if(!empty($_POST) && !empty($_POST['username']) && !empty($_POST['password'])) {

	require_once 'php/db.php';

	$req = $pdo->prepare('SELECT * FROM users WHERE (username = :username OR email = :username)');
	$req->execute(['username' => $_POST['username']]);

	if($user = $req->fetch()){
		if(password_verify($_POST['password'], $user->password)){
			$_SESSION['auth'] = $user;
			$_SESSION['flash']['success'] = "Vous êtes maintenant connecté.";
			header('Location: account.php');
			exit();
		}else{
		$_SESSION['flash']['danger'] = 'Identifiant ou mot de passe incorrect.';
		}
	}else {
		$_SESSION['flash']['danger'] = 'Identifiant ou mot de passe incorrect.';
	}
}
?>

<?php include 'header.php' ?>
<section id="login">
	<h2>Connexion</h2>

	<form id="login_form" action="" method="POST">
		<label>Pseudo ou Email :
		<input type="text" name="username" autocomplete="username"/></label>

		<label>Mot de  Passe :
		<input type="password" name="password" autocomplete="new-password" /></label>

		<button class="btn" type="submit">Se connecter</button>
	</form>
</section>
<?php include 'footer.php' ?>