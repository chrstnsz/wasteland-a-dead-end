<?php
if(session_status() == PHP_SESSION_NONE){
	session_start();
}

if(!empty($_POST)){

	$errors = array();

	require_once 'php/db.php';

	if(empty($_POST['username']) || !preg_match('/^[a-zA-Z0-9_]+$/', $_POST['username'])){
		$errors['username'] = "Votre pseudo n'est pas valide.";

	} else {

		$req = $pdo->prepare('SELECT id FROM users WHERE username = ?');

		$req->execute([$_POST['username']]);
		$user = $req->fetch();

		if($user){
			$errors['username'] = "ce pseudo est déjà utilisé";
		}

	}

	if(empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
		$errors['email'] =  "Votre email n'est pas valide";
	}else{
		$req = $pdo->prepare('SELECT id FROM users WHERE email = ?');
		$req->execute([$_POST['email']]);
		$user = $req->fetch();

		if($user){
			$errors['email'] = 'Ce mail est déjà pris';
		}
	}

	if(empty($_POST['password']) || $_POST['password'] != $_POST['password_confirm']){
		$errors['password'] = "mot de passe invalide";
	}

	if(empty($errors)){

		$username = $_POST['username'];
		$email = $_POST['email'];

		$req = $pdo->prepare("INSERT INTO users SET username = ?, password = ?, email = ?");

		$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

		$req->execute([$username, $password, $email]);

		$user_id = $pdo->lastInsertId();

		$_SESSION['flash']['success'] = 'Votre compte a bien été créé !';

		$req = $pdo->prepare('SELECT * FROM users WHERE id = ?');

		$req->execute([$user_id]);

		$user = $req->fetch();

		$_SESSION['auth'] = $user;
		header('Location: index.php');

		exit();

	}
}

 include 'header.php'
?>
	<h2>Inscription</h2>

<?php if(!empty($errors)): ?>
	<section class="danger">
	<p>Vous n'avez pas rempli le formulaire correctement</p>
	<ul>
	<?php foreach($errors as $error): ?>
		<li><?= $error; ?></li>
	<?php endforeach; ?>
	</ul>
	</section>	
<?php endif; ?>

	<form id="register_form" action="register.php" method="POST">
		<label>Pseudo :
		<input type="text" name="username" autocomplete="username" /></label>

		<label>Email :
		<input type="email" name="email" autocomplete="username"/></label>

		<label>Mot de  Passe :
		<input type="password" name="password" autocomplete="new-password"/></label>

		<label>Confirmation mot de passe :
		<input type="password" name="password_confirm" autocomplete="new-password"/></label>

		<button class="btn" type="submit">M'inscrire</button>
	</form>

<?php include 'footer.php' ?>