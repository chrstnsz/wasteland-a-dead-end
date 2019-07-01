<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
?>
<section id="combat_dice_hab">
	<p>Lancez <span class="bold">deux</span> dés. Si le chiffre obtenu est <span class="bold">inférieur ou égal</span> à votre total d'<span class="bold">HABILITY</span>, rendez-vous au <span class="bold">108</span>. Si ce chiffre est supérieur à votre total d'<span class="bold">HABILITY</span>, rendez-vous au  <span class="bold">350</span>.</p>
	
	<div>
		<button id="dice_btn" type="button" class="rollTheDice"><i class="fas fa-dice"></i></button>
			<p class="dice_result">Roll me !</p>
	</div>
</section>
<?php
} else {
	header('Location: ../index.php');
	exit();
}
