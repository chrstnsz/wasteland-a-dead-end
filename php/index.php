<?php if(session_status() == PHP_SESSION_NONE){
	session_start();
}
if(isset($_SESSION['auth'])) {
	include 'account.php';
} else {
	$template = 'index';
	include '../view/layout.phtml';
}