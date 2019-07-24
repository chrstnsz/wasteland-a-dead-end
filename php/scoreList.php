<?php
require 'db.php';

$req = $pdo->prepare("SELECT username, scoreMax FROM users");
$req->execute();
$userList = $req->fetchAll();

$template = "scoreList";

include '../view/layout.phtml';
