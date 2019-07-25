<?php

session_start();

unset($_SESSION['auth']);
unset($_SESSION['perso']);
unset($_SESSION['backpack']);
unset($_SESSION['LAST_ACTIVITY']);

$_SESSION['flash']['success'] = "Vous êtes maintenant déconnecté(e).";

header('Location: index.php');