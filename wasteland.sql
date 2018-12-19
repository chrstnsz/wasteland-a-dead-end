-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 19 déc. 2018 à 00:15
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `wasteland`
--

-- --------------------------------------------------------

--
-- Structure de la table `story`
--

DROP TABLE IF EXISTS `story`;
CREATE TABLE IF NOT EXISTS `story` (
  `id` int(11) NOT NULL,
  `scene` text COLLATE utf8_bin NOT NULL,
  `choice_1` text COLLATE utf8_bin NOT NULL,
  `choice_target_1` int(11) DEFAULT NULL,
  `choice_2` text COLLATE utf8_bin NOT NULL,
  `choice_target_2` int(11) DEFAULT NULL,
  `picture_alt` text COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `story`
--

INSERT INTO `story` (`id`, `scene`, `choice_1`, `choice_target_1`, `choice_2`, `choice_target_2`, `picture_alt`) VALUES
(1, 'La première chose qui vous frappe, alors que vous roulez à vive allure sur la route qui s\'ouvre devant vous, est la rapidité à laquelle tout s\'est dégradé. Vous n\'aviez jamais réalisé, jusqu\'à présent, combien l\'entretien régulier du matériel, des routes et des constructions était indispensable au maintien de la civilisation. Tout autour de vous, des bâtiments tombent en ruine, les carcasses rouillées de voitures abandonnées encombrent la voie dans un désordre indescriptible, l\'herbe et le chiendent, désormais livrés à eux-mêmes, ont envahi la chaussée, et des hordes de chiens sauvages rôdent en toute liberté. A quinze kilomètres environ de Nouvelle Espérance, vous faites halte dans une petite ville et vous coupez le contact. Seul, le hurlement lugubre d\'un chien solitaire vient rompre le silence de mort qui plane sur l\'agglomération. Vous êtes tenté de descendre de voiture pour explorer les lieux, mais vous savez que ce serait prendre là un risque inutile, aussi préférez-vous quitter cet endroit sans plus tarder. Mais au moment où vous vous apprêtez à redémarrer, une détonation déchire le silence.', 'Sortir de l\'Interceptor pour essayer de savoir d\'où provient le tir.', 126, 'Démarrer et quitter la ville immédiatement.', 34, NULL),
(126, 'Vous traversez la rue en courant et vous vous aplatissez contre le mur d\'un immeuble, vous attendant, à tout instant, à entendre claquer une autre détonation. Le coeur battant la chamade, vous rampez prudemment jusqu\'à l\'angle du bâtiment et vous observez les alentours: il n\'y a personne en vue dans l\'étroite ruelle. Alors que vous avancez à découvert, vous entendez soudain une voix crier: « Ne faites pas un pas de plus, ou vous êtes un homme mort ! D\'où venez-vous ! »', 'Avouer que vous êtes de Nouvelle Espérance.', 274, 'Prétendre être un guerrier de la route, solitaire et sans point d\'attache particulier.', 155, NULL),
(274, 'Soudain, un homme apparaît dans l\'encadrement de la porte et marche vers vous, le fusil pointé dans votre direction. Il vous regarde durement et vous dit : « Moi aussi, je vais par là. Cela fait trois jours que je circule à moto dans la région depuis que mon break est tombé dans une embuscade où ma femme et mon fils ont trouvé la mort. Je m\'étais arrêté ici pour me procurer quelques boîtes de conserve au supermarché d\'à côté, quand des chiens furieux m\'ont attaqué. J\'ai réussi à en tuer un mais les autres se sont enfuis. Je m\'appelle Johnson, heureux de vous rencontrer. » Il repose son fusil et vous tend la main. Il vous dit qu\'il est entrepreneur de son métier puis il vous demande s\'il est encore loin de Nouvelle Espérance et s\'il a une chance d\'y être accueilli. Vous lui répondez que Nouvelle Espérance n\'est qu\'à une quinzaine de kilomètres et qu\'il y sera sûrement le bienvenu car la ville a besoin de gens qualifiés. Vous lui parlez également de votre mission et il vous dit de ne pas vous arrêter au \"garage du sud\" qui se trouve à environ huit kilomètres de la ville. « Ils n\'ont pas une goutte d\'essence et ils volent les gens qui s\'arrêtent pour faire le plein. » Vous remerciez Johnson pour son conseil et vous lui souhaitez bonne chance.', 'Vous retournez à l\'Interceptor. Vous tournez la clé de contact, aussitôt le moteur rugit, et vous démarrez en faisant crisser vos pneus.', 34, '', NULL, NULL),
(34, 'Vous sortez rapidement de la ville, zigzaguant entre les épaves de voitures et les arbres abattus qui encombrent la voie. Un peu plus loin, vous voyez que la route rejoint l\'autoroute du sud. Il y a une petite station-service à la jonction, portant comme enseigne « le Garage du Sud ». Vous vous y arrêtez, car vous êtes fort intrigué par un hot-rod d\'un rouge éclatant, garé le long du bâtiment. Le bolide a l\'air bient entretenu et en état de marche. Soudain, une jeune fille, vêtue d\'un blue-jean et d\'un T-shirt, sort du bureau et vous demande en souriant : « Salut ! Est-ce que je peux vous être utile ? »', 'Vous désirez engager la conversation.', 302, 'Vous préférez quitter cet endroit et rejoindre l\'autoroute sans tarder.', 167, NULL),
(302, 'Vous ouvrez la portière et vous descendez de l\'Interceptor. Alors que vous avancez vers la fille, l\'homme au crâne rasé surgit de derrière une pompe, tenant à la main une arbalète. Il vous crie : « Quelle surprise !  Allez vite ! les clés et les Crédits, et n\'essaye pas de jouer au plus malin avec moi si tu ne veux pas être blessé ! »', 'Vous décidez de lui obéir et de lui donner vos clés et vos Crédits.', 209, 'Vous préférez vous battre avec lui au couteau.', 48, NULL),
(48, 'Vous agrippez fermement le manche de votre poignard et vous vous ramassez sur vous-même en attendant que le gangster fasse le premier mouvement. Celui-ci pousse soudain un hurlement et se jette sur vous.', 'Vous sortez vainqueur de cette lutte.', 138, 'Vous sombrez dans l\'inconscience.', 100, NULL),
(100, 'Vous reprenez conscience quelque temps après, avec un mal de tête épouvantable ! Puis tout vous revient en mémoire et votre première pensée est pour l\'Interceptor : qu\'en est-il advenu ? Vous vous redressez et regardez tout autour de vous, mais la voiture a disparu... Votre mission se termine ici.', '', NULL, '', NULL, NULL),
(155, 'L\'homme surgit soudain dans l\'encadrement d\'une porte et avance en braquant son fusil sur vous. Il vous dévisage avec dureté et dit : « Vous m\'avez tout l\'air d\'être l\'homme qui a provoqué la mort de ma femme et de mon fils en faisant exploser mon break, la semaine dernière. Je vais enfin pouvoir les venger ! Mais je me battrai selon les règles. Dégainez lorsque vous serez prêt.»', 'Vous vous expliquez avec lui afin de le convaincre de votre innocence', 219, 'Dégainer votre arme, selon son injonction.', 333, NULL),
(86, 'Votre revolver est à moitié sorti de son étui lorsque l\'étranger presse la gâchette de son fusil. Vous voyez s\'élever un mince filet de fumée et vous ressentez, au même instant, une douleur fulgurante à la cuisse droite. Vous êtes projeté en arrière contre le mur et l\'écho de la détonation résonne encore dans votre tête lorsque vous vous affalez sur le sol. L\'homme tourne les talons et vous abandonne à la férocité des chiens affamés qui rôdent dans les parages.', 'Soigner immédiatement votre blessure.', 38, 'Vous préférez ramper vers l\'Interceptor pour vous y réfugier.', 256, NULL),
(256, 'Bien que vous saigniez abondamment, vous parvenez à regagner votre voiture. Vous vous effondrez sur le siège du conducteur et vous saisissez la Trousse de Secours. Vous ôtez les éclats de balle et vous appliquez une pellicule de peau synthétique sur la blessure, puis vous la recouvrez d\'un bandage. Assis à nouveau au volant, vous retrouvez le moral.', 'Vous relâchez l\'embrayage et vous sortez de la ville en faisant rugir votre moteur.', 34, '', NULL, NULL),
(167, 'Bien que vous couriez le risque de rencontrer à tout instant une épave de voiture entravant le passage, la route est assez large pour vous permettre de rouler à fond. Vous prenez un réel plaisir à rouler ainsi en toute liberté, sans craindre d\'être interpellé par la police pour excès de vitesse ou autre violation du Code de la route, et vous voyez  avec excitation l\'aiguille indiquer 190 km/h ! Mais votre joie est de courte durée car une Chevrolet rouge, solidement blindée, arrive en sens inverse. Un homme se tient debout dans une petite tourelle aménagée sur le toit, prêt à actionner sa mitrailleuse. Vous pensez alors, en votre for intérieur, que la police du bon vieux temps n\'était pas si terrible, en comparaison de ce qui vous attend à présent ! Vous retenez votre souffle et vous vous tenez prêt à appuyer sur la gâchette de votre mitrailleuse.', '', NULL, '', NULL, NULL),
(209, 'Au moment où vous tendez vos clés au gangster, celui-ci ricane doucement et vous frappe violemment avec son arbalète. Le coup vous fait perdre connaissance et quand vous vous réveillez, vous vous apercevez que le couple et leur hot-rod ont disparu mais.. votre Interceptor aussi ! Vous avez échoué dans votre mission.', '', NULL, '', NULL, NULL),
(138, 'Vous faites un bond en arrière pour vous écarter du gangster qui s\'écroule lourdement au sol. A ce moment, sa complice fait brusquement démarrer le hot-rod. Une odeur âcre de caoutchouc brûlé se répand dans l\'atmosphère, tandis qu\'elle s\'éloigne vers l\'autoroute dans un rugissement de moteur.', 'Vous vous lancez à sa poursuite.', 75, 'Fouiller le garage', 146, NULL),
(146, 'Tout a été saccagé à l\'intérieur du garage : le bureau et l\'atelier sont un véritable dépôt d\'ordures et une épaisse couche de poussière recouvre les vestiges des installations. Selon toute évidence, l\'homme et sa comparse ne devaient utiliser cet endroit que de temps à autre, afin de prendre au piège les voyageurs sans méfiance qui avaient le malheur de s\'arrêter là... Le seul objet qui pourrait vous être utile est une lourde chaîne, que vous enroulez soigneusement avant de la ranger dans l\'Interceptor.', 'Vous quittez les lieux pour rejoindre l\'autoroute.', 167, '', NULL, NULL),
(75, 'Alors que vous relâchez l\'embrayage, vous entendez un claquement sonore résonner dans l\'étrange silence des lieux : un de vos pneus vient d\'éclater. En effet, la fille avait placé une petite mine sous l’une des roues pendant que vous luttiez contre son complice. La roue est maintenant hors d\'usage et vous devrez la remplacer par la roue de secours. Vous vous promettez intérieurement de ne plus adresser la parole à n\'importe qui dorénavant.', 'Vous rejoignez l\'autoroute sans plus tarder.', 167, '', NULL, NULL),
(219, 'De votre ton le plus convaincant, vous lui assurez que vous n\'êtes pour rien dans la mort de sa femme et de son fils.', 'Vous le fixez du regard.', 288, 'Vous le regardez d\'un air émotionné.', 236, NULL),
(288, 'L\'homme vous dévisage durement pendant un long moment avant de vous adresser la parole : « C\'est bon, je vous crois mais je voudrais en savoir un peu plus. » Vous lui expliquez alors que ce n\'est pas vous qui avez tué sa femme et son fils et que si vous avez menti en prétendant être un guerrier de grand chemin, c\'était pour la bonne cause, et uniquement dans le but de ne pas révéler où se trouve Nouvelle Espérance, au cas où l\'homme aurait voulu lancer une attaque contre la ville. L\'homme a l\'air soudain très excité et vous dit : « Nouvelle Espérance ! Mais c\'est là que je vais. Je roule dans sa direction depuis l\'embuscade. je me suis juste arrêté ici pour acheter des boîtes de conserve au supermarché à côté, quand des chiens fous furieux m\'ont attaqué. J\'en ai abattu un mais les autres se sont enfuis. Je m\'appelle Johnson, je suis vraiment désolé de vous avoir traité de cette façon, mais on ne peut vraiment plus faire confiance à personne par les temps qui courent. » Vous lui souriez puis vous lui serrez la main. L\'homme reprend : « Je suis entrepreneur en bâtiment. A combien de kilomètres sommes-nous de Nouvelle Espérance ? Et pensez-vous que j\'ai une chance de pouvoir y entrer ? » Vous lui répondez que Nouvelle Espérance n\'est qu\'à une quinzaine de kilomètres et qu\'il a de grandes chances d\'être accepté car la ville a besoin de gens qualifiés. Vous poursuivez en lui racontant votre mission et il vous prévient de ne pas vous arrêter au Garage du sud qui se trouve à environ huit kilomètres hors de la ville. « Ils n\'ont pas une goutte d\'essence et ils volent les automobilistes qui s\'y arrêtent. » Vous remerciez Johnson pour son précieux conseil et vous lui souhaitez bonne chance.', 'Vous regagnez l\'Interceptor et le puissant moteur rugit lorsque vous tournez la clé de contact. Vous voilà à nouveau sur la route.', 34, '', NULL, NULL),
(236, 'L\'homme vous regarde puis il crache par terre avant de vous dire : « Dégaine, je te dis, misérable assassin ! »', 'Vous n\'avez pas d\'autre choix que de lui obéir.', 333, '', NULL, NULL),
(57, 'Vif comme l\'éclair, vous dégainez votre revolver et vous le pointez sur l\'homme avant que celui-ci ne puisse esquisser le moindre geste. Vous lui ordonnez de lâcher son fusil, puis vous lui expliquez que vous n\'êtes pour rien dans l\'attentat qui a causé la mort de sa femme et de son fils. Vous lui avouez avoir menti en prétendant être un guerrier de la route afin de ne pas révéler l\'emplacement de Nouvelle Espérance, au cas où l\'homme aurait eu l\'intention de monter une attaque contre la ville. L\'homme s\'anime soudain et vous demande avec excitation : « Nouvelle Espérance, avez-vous dit ? Mais c\'est justement là que je veux aller ! Je me dirige vers cette ville depuis l\'attentat dont je vous ai parlé. Je m\'étais arrêté ici, seulement pour me procurer quelques boîtes de conserve au supermarché qui se trouve par-derrière, lorsque j\'ai été attaqué par des chiens sauvages. J\'en ai abattu un et les autres ont pris la fuite avant que vous arriviez. Je m\'appelle Johnson et je suis navré de vous avoir menacé comme je l\'ai fait mais, par les temps qui courent, on ne peut faire confiance à personne. » Vous gratifiez l\'homme d\'un sourire sans rancune et vous lui serrez la main. Johnson vous apprends alors qu\'il est entrepreneur de son métier. Il vous demande si Nouvelle Espérance est encore loin et s\'il sera autorisé à y pénétrer une fois arrivé. Vous lui répondez que Nouvelle Espérance n\'est qu\'à une quinzaine de kilomètres et qu\'il y a de fortes chances pour qu\'on le laisse entrer car les hommes qualifiés sont toujours les bienvenus. Vous mettez l\'homme au courant de votre mission et il vous avertit de ne pas vous arrêter au « Garage du Sud » qui se trouve à huit kilomètres environ après la sortie de la ville. « Les pompes à essences sont vides depuis longtemps, dit-il, et les conducteurs qui ont le malheur de s\'arrêter là se font dévaliser par des bandits.» Après l\'avoir remercié pour ce précieux renseignement, vous lui souhaitez bonne chance et vous retournez à l\'Interceptor.', 'Le puissant moteur semble rugir de plaisir lorsque vous tournez la clé de contact, et vous vous remettez en route sans plus tarder.', 34, '', NULL, NULL),
(38, 'Vous prenez une unité de votre Trousse de Secours et vous soignez rapidement votre blessure : après avoir soigneusement retiré les éclats de balle de la plaie, vous appliquez sur votre cuisse une pellicule de peau synthétique que vous protégez ensuite par un bandage. Vous vous levez, prêt à vous remettre au volant de l\'Interceptor, lorsqu\'un énorme chien sauvage apparaît au bout de la rue. Son pelage porte les marques de nombreux et féroces combats et sa gueule écumante de base laisse supposer qu\'il s\'agit là d\'une bête enragée. Soudain, le chien courbe l\'échine et s\'élance rapidement vers vous en grognant.', 'Vous essayez de l\'abattre d\'un coup de revolver.', 176, 'Vous préférez attendre qu\'il se rapproche pour l\'affronter poignard au poing.', 374, NULL),
(374, 'Vous tirez votre couteau, prêt à attaquer, lorsque le chien se jette sur vous.', 'Vous prenez votre couteau pointe en l\'air pour le poignarder en plein ventre.', 999, 'Vous prenez votre couteau pointe en bas pour lui planter la lame dans le cou.', 666, NULL),
(89, 'Vous trouvez que cette ville est décidément trop dangereuse et qu\'il vaut mieux la quitter le plus vite possible ! Vous clopinez péniblement vers l\'Interceptor mais, une fois assis au volant, vous reprenez courage en entendant ronronner le moteur et, relâchant l\'embrayage, vous reprenez la route sans tarder.', '...', 34, '', NULL, NULL),
(176, 'La bête se met soudainement à courir à une vitesse folle dans votre direction', 'Vous prenez le temps de viser.', 350, 'Vous dégainez votre revolver et tirez sans viser.', 108, NULL),
(108, 'A votre grand soulagement, vous ne manquez pas votre cible et le chien est tué sur le coup.', '...', 89, '', NULL, NULL),
(350, 'Trop tard, le chien est trop proche et se jette sur vous, et vous devez saisir votre poignard pour vous défendre.', 'Vous prenez votre couteau pointe en l\'air pour le poignarder en plein ventre.', 999, 'Vous prenez votre couteau pointe en bas pour lui planter la lame dans le cou.', 666, NULL),
(333, 'Vous n\'avez qu\'une fraction de seconde pour sortir votre arme, mais le temps parait si long.', 'Dégainer en regardant ces yeux.', 57, 'Dégainer en regardant sa main.', 86, NULL),
(666, 'Votre main est pleine de sang dû à la blessure antérieur. Vous tentez de retourner votre couteau dans votre main, mais celui-ci tombe à terre. Pendant que vous tentez de l\'attraper du bout des doigts, la bête vous met votre bras droit en lambeaux. Pris de panique vous essayez avec votre main gauche de l\'empoigner par le tête pour libérer votre bras ensanglanté. La bête lâcha prise mais plus aucun obstacle la sépare de votre cou. Elle s\'élance bouche ouverte vers vous tandis que vous essayez de la tirer de l\'autre coté. Aucun moyen, elle est plus affamé que vous. Ses dents disparaissent progressivement sous votre peau.', '', NULL, '', NULL, NULL),
(999, 'Vous vous protégez le visage de votre bras droit tandis qu\'avec votre main gauche vous parvenez à sortir votre couteau de son étui. D\'une grande férocité vous lui rentrer votre lame au niveau du ventre tout en remontant jusqu\'a son cou. La bête lâcha prise et tenta de s\'enfuir, mais au bout d\'une vingtaine de mètres elle s\'écroula laissant une marre de sang derrière elle.', '', 89, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `confirmation_token` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `confirmed_at` datetime DEFAULT NULL,
  `reset_token` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `reset_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
