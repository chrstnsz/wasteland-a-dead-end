<?php
try {
$pdo = new PDO('mysql:dbname=wasteland;host=localhost;charset=UTF8', 'root', '');

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
}
	catch (Exeption $e){
		die('Erreur : ' .$e->getMessage()) or die(print_r($bdd->errorInfo()));
	}