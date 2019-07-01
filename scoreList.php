<?php include 'header.php'; 

 require 'php/db.php';

$req = $pdo->prepare("SELECT username, scoreMax FROM users");
$req->execute();
$userList = $req->fetchAll();
?>
<section id="scoreList">
	<table id="classement">
		<thead>
			<tr>
				<th>Username</th>
				<th>Best score</th>
			</tr>
		</thead>
		<tbody>
			<?php foreach($userList as $user): ?>
				<?php if($user->scoreMax > 0): ?>
					<tr>
						<td><?= htmlspecialchars($user->username); ?></td>
						<td><?= htmlspecialchars($user->scoreMax); ?></td>
					</tr>
				<?php endif ?>
			<?php endforeach ?>
		</tbody>
	</table>
</section>

<?php include 'footer.php';