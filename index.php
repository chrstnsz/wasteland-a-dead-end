<?php if(session_status() == PHP_SESSION_NONE){
	session_start();
}
if(isset($_SESSION['auth'])) {
	include 'account.php';
} else {
	include 'header.php';
?>
	<section id="accueil">
		<article>
			<h2>Introduction</h2>
			<p>Un virus mortel a décimé la population de la Terre devenue un vaste territoire inculte et sauvage, livré à la barbarie des survivants dont certains, tels que vous, se sont réfugiés dans des villes fortifiées, alors que d'autres se sont réunis en hordes de bandits qui rôdent à travers le pays. VOUS avez été chargé d'une mission périlleuse : traverser, à bord d'une Dodge Interceptor spécialement équipée et armée, les sauvages étendues qui mènent à la raffinerie de San Angelo, afin de ravitailler en essence la paisible ville où vous vivez, Nouvelle Espérance.</p>
			<p>Vous seul déciderez de la route à suivre, des risques à courir et des créatures à combattre. Bonne chance...</p>
		</article>
	</section>
<?php
	include 'footer.php';
}