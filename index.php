<!doctype html>
<html lang="fr">
<head>
<title>Wasteland, a Dead End</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link href="https://fonts.googleapis.com/css?family=Oswald%7cSlabo+27px" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="js/utilities.js"></script>
	<script src="js/scenes.js"></script>
	<script src="js/intro.js"></script>
</head>
<body>
<main class="container">

	<section id="picture_target">
		<img src="img/wasteland.jpg" alt="wasteland">
	</section>

	<section id="scene_target">
		<h1>Wasteland Story: A Dead End.</h1>
	</section>

	<form id="choices_target" method="POST" name="choices_target" class="hidden">		
		
	</form>
	<section id="btn_bar">
		<button class="btn" name="start_intro" id="start_intro">Start Game</button>
		<button id="credits" name="credits" class="btn switchon">Credits</button>
	</section>
	<section id="skip_intro_target">
	</section>
	<div id="audio_target">
		<button id="mute"><i class="fas fa-volume-up"></i></button>
		<audio loop id="background_audio"  src="audio/moonlit-melody.ogg" autoplay="autoplay"></audio>
	</div>
	<footer>
		<small>
			<p>From the book "Freeway Fighter" of Ian Livingstone.</p>
		</small>
	</footer>
</main>
	<script src="js/main.js"></script>
</body>
 	
</html>