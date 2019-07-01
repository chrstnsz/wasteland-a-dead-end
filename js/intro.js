"use strict";
function onClickStartIntro(){

    $('#btn_bar').remove();
    $('#choices_target').removeClass("hidden");

    emptyHtmlTargets();

    pictureSlider(
        "intro/the-earth-disaster","Planète terre sur terrain vaste",
        "intro/world-in-peace","Carte du monde avec une poignet de main",
        "intro/advanced-technology","Techniciens devant une technologie avancée",
        "intro/peace-future","Mélange de photos montrant la population en paix");

    $('#scene_target').html('<p id="intro_text1" class="introText">Une catastrophe que nul n\'aurait pu prévoir survint au moment où la paix et l\'harmonie commençaient enfin à régner sur terre.</p><p id="intro_text2" class="introText">La troisième guerre mondiale avait pu être évitée et les gouvernements des blocs est-ouest s\'efforçaient désormais d\'instaurer une paix durable dans le monde.</p><p id="intro_text3" class="introText">Dans le domaine agricole, des techniques de production révolutionnaires avaient aboli la famine dans les régions les plus défavorisées du globe.</p><p id="intro_text4" class="introText">Les progrès remarquables réalisés dans le secteur de la communication et des moyens de transport avaient contribué à une meilleure compréhension entre les peuples.</p>');

     hideFadeSkipNext('goToPart2', '#goToPart2', introPart2, "peace-future","Mélange de photos montrant la population en paix");
}

function introPart2(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/morning-city", "Une matinée classique dans une grande ville",
        "intro/city-advertising", "Publicités sur une façade d'un immeuble",
        "intro/solar-cell-farm","Une ferme de panneaux solaires",
        "intro/peaceful-city", "Photo d'un afterwork paisible dans un batiment en hauteur, vue sur une ville");

    $('#scene_target').html('<p id="intro_text1" class="introText">Matin du 21 juillet 2022. Un matin comme les autres.</p><p id="intro_text2" class="introText">La journée promettait d’être belle et ensoleillée, et les informations diffusées par l’holovision étaient des plus optimistes :</p><p id="intro_text3" class="introText">le porte-parole du gouvernement annonça, avec une fierté non dissimulée, que l’énergie solaire satisfaisait désormais les besoins de 90% des foyers domestiques et de 70% de l’industrie.</p><p id="intro_text4" class="introText">La durée normale du temps de travail venait d’être fixée à trois jours par semaine, et l’Angleterre allait affronter les Etats-Unis dans la finale de la Coupe du Monde de football américain qui se déroulerait à Sydney.</p>');

    hideFadeSkipNext('goToPart3', '#goToPart3', introPart3, "peaceful-city", "Photo d'un afterwork paisible dans un batiment en hauteur, vue sur une ville");
}

function introPart3(){
    
    emptyHtmlTargets();

    pictureSlider("intro/end-of-civilisation", "Grande ville avec un nuage rouge terrifiant",
        "intro/virus-epidemic-in-city", "Dessin de New York faisant face a une épidemie",
        "intro/map-with-plane", "Avion survolant une carte du monde",
        "intro/doomsday-epidemic", "Grande ville détruite");

    $('#scene_target').html('<p id="intro_text1" class="introText">Et pourtant, il ne restait plus que quelques heures avant la fin de la civilisation.</p><p id="intro_text2" class="introText">Un peu plus tard dans la même journée, une maladie inconnue se déclara à New York et se propagea à une telle rapidité que la moitié de la population de la ville fut décimée, avant même que les autorités scientifiques et gouvernementales aient pu comprendre de quoi il s\'agissait.</p><p id="intro_text3" class="introText">La maladie s\'étendit à la terre entière, transmise par le trafic de population.</p><p id="intro_text4" class="introText">L\'épidemie fit de véritables ravages dans les zones à forte densité de population et toutes les tentatives de quarantaine s\'avérèrent vite inutiles devant l\'ampleur du phénomème.</p>');

    hideFadeSkipNext('goToPart4', '#goToPart4', introPart4, "doomsday-epidemic", "Grande ville détruite");
}

function introPart4(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/terror-attack","Image d'une route avec des véhicules abandonnés",
        "intro/world-chaos", "Ville en ruine",
        "intro/world-no-living", "Ville en ruine",
        "intro/coward-smell-death", "Corbeau à côté d'une carcasse de daim");

    $('#scene_target').html('<p id="intro_text1" class="introText">Quatre jours plus tard.</p><p id="intro_text2" class="introText">85% de la population mondiale avait disparu.</p><p id="intro_text3" class="introText">Les communications, les principaux services publics, les transports, les administrations, et même les gouvernements avaient cessé de fonctionner.</p><p id="intro_text4" class="introText">Parmi les rescapés, personne ne pouvait désormais expliquer les causes de cette maladie inconnue. Quoiqu’il en soit, leur seule et unique préoccupation était désormais de survivre.</p>');

    hideFadeSkipNext('goToPart5', '#goToPart5', introPart5, "coward-smell-death", "Corbeau à côté d'une carcasse de daim");
}

function introPart5(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/metro-chaos","Un metro dans une ville en ruine",
        "intro/last-survivor-wasteland","Paysage en ruine",
        "intro/last-hero","statue au milieu d'immeuble en ruine",
        "intro/truck-contamination","affichage contre la contamination avec un camion en dessous");

    $('#scene_target').html('<p id="intro_text1" class="introText">Quelques semaines plus tard.</p><p id="intro_text2" class="introText">La civilisation commença à se dégrader à une rapidité affolante. La plupart des survivants ne comprenaient pas pourquoi ils se trouvaient toujours en vie et ils se demandaient par quels moyens ils pourraient le rester.</p><p id="intro_text3" class="introText">Ce fut bientôt l’avènement de la loi du plus fort : les émeutes, le pillage, le vandalisme et l’ébriété étaient phénomènes courants.</p><p id="intro_text4" class="introText">Certains individus étaient même prêts à tuer pour une boîte de conserve et les grandes villes furent bientôt désertées, en raison du manque de vivres et des risques de contamination.</p>');

    hideFadeSkipNext('goToPart6', '#goToPart6', introPart6, "truck-contamination","affichage contre la contamination avec un camion en dessous");
}

function introPart6(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/city-girafe","une girafe au milieu d'une ville abandonnée",
        "intro/wasteland-survivor-police","un homme vétu d'une combinaison protectrice de la police au milieu d'un batiment abandonné",
        "intro/resistance-fort","la devanture d'une base d'un groupe de résistants",
        "intro/wasteland_crossroads_bar","bandits dans un bar");

    $('#scene_target').html('<p id="intro_text1" class="introText">Six mois après la catastrophe.</p><p id="intro_text2" class="introText">On pouvait diviser les survivants en deux catégories : d’une part, ceux qui désiraient rétablir l’ordre et la sécurité, d’autre part, ceux qui s’accommodaient du chaos et découvraient dans la violence et l’anarchie un nouvel art de vivre.</p><p id="intro_text3" class="introText">Les premiers se regroupèrent pour vivre dans de petites villes qu’ils transformèrent en places fortes. A l’intérieur de celles-ci, les habitants élurent des dirigeants et s’efforcèrent de vivre en autarcie.</p><p id="intro_text4" class="introText">La seconde catégorie de survivants se groupèrent en petites bandes pour mener une existence semi-nomade où régnaient la violence et la brutalité. Ces « nouveaux barbares » sillonnaient le pays, semant partout la terreur et anéantissant les communautés civilisées qui avaient le malheur de se trouver sur leur chemin.</p>');

    hideFadeSkipNext('goToPart7', '#goToPart7', introPart7, "wasteland_crossroads_bar","bandits dans un bar");
}

function introPart7(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/new_beginning","homme de dos",
        "intro/door-open","une porte ouverte",
        "intro/explicative-hands","mains entrelacées",
        "intro/trade-post","entrepôt  avec un couché de soleil en arrière plan");

    $('#scene_target').html('<p id="intro_text1" class="introText">Vous êtes l’un des survivants habitant la ville fortifiée de Nouvelle Espérance.</p><p id="intro_text2" class="introText">Un soir, vous entendez frapper à votre porte. Vos visiteurs sont deux membres du Conseil Municipal.</p><p id="intro_text3" class="introText">Ils vous révèlent qu’ils viennent de capter un message-radio provenant de San Angelo, une raffinerie de pétrole fortifiée située au sud du pays.</p><p id="intro_text4" class="introText">Les habitants de San Angelo proposent d’échanger dix mille litres d’essence contre des céréales et du grain, indispensables à l’amélioration de leur production alimentaire. C’est une occasion unique à ne pas laisser passer.</p>');

    hideFadeSkipNext('goToPart8', '#goToPart8', introPart8,"trade-post", "entrepôt  avec un couché de soleil en arrière plan");
}

function introPart8(){
    
    emptyHtmlTargets();

    pictureSlider(
        "intro/ready-to-go","une personne prête à partir",
        "intro/landscape-river","paysage de montagnes et d'une rivière",
        "intro/interceptor-by-noro8","photo d'une voiture équipée, nommée 'Interceptor'",
        "intro/backpack-ready","photo d'un ananas à côté d'un sac à dos");

    $('#scene_target').html('<p id="intro_text1" class="introText">Le Conseil a accepté ce marché et vous demande d’entreprendre ce voyage.</p><p id="intro_text2" class="introText">Vous y ramenerez ensuite un camion-citerne rempli d’essence, et selon eux, vous êtes la personne la mieux qualifiée pour remplir cette mission.</p><p id="intro_text3" class="introText">Il s’agit là d’une expédition fort dangereuse, à travers un monde sauvage et hostile. Vous apprenez qu’une Dodge Interceptor sera spécialement équipée pour le voyage.</p><p id="intro_text4" class="introText">Le profit énorme que votre ville pourra tirer de cette opération suffit à vous convaincre d’accepter la mission. Vous demandez de commencer dès à présent les préparatifs de l’expédition.</p>');

    hideFadeSkipNext('goToPart9', '#goToPart9', introPart9, "backpack-ready","photo d'un ananas à côté d'un sac à dos");
}

function introPart9(){
    //delete the skip intro button
    $("#skip_intro_target").remove();

    emptyHtmlTargets();

    pictureSlider(
        "intro/adult-army-black-and-white","Un soldat armé",
        "intro/people-waving","Personnes levant la main pour dire au revoir",
        "intro/inside-car","Vue interieur d'une voiture",
        "intro/wasteland-ready","paysage d'une route avec un environnement desert");

    $('#scene_target').html('<p id="intro_text1" class="introText">Vous ajustez l’étui qui soutient votre revolver et vous mettez votre veste en cuir, où sont glissés des munitions et votre poignard.</p><p id="intro_text2" class="introText">Vous êtes fin prêt, vous vous mettez au volant de l’Interceptor. Vous apercevez une foule qui s’est rassemblée pour saluer votre départ.</p><p id="intro_text3" class="introText">Vous faites démarrer le moteur et commencez à rouler lentement vers les portes de la ville.</p><p id="intro_text4" class="introText">Il y a plus d’un an que vous ne vous êtes pas aventuré hors de ces murs, et vous frémissez d’impatience à la perspective de ce que vous allez découvrir à l’extérieur.</p>');

    //same as the hideFadeSkipNext function but the end is different
   $('#choices_target').hide().delay(500).fadeIn(1000).html('<button type="submit" class="btn" id="skip">Skip</button>');
   //fadeIn texts
    $('#intro_text1').hide().fadeIn(1000);
    $('#intro_text2').hide().delay(7000).fadeIn(1000);
    $('#intro_text3').hide().delay(14000).fadeIn(1000);
    $('#intro_text4').hide().delay(21000).fadeIn(1000, function(){
        $('#choices_target').html('<button type="submit" class="btn" id="run">Start Game</button>');
    });
    //on click skip, finish all fadein
    $('#skip').on("click", function(event){
        event.preventDefault();
        $("#intro_text1").finish();
        $("#intro_text2").finish();
        $("#intro_text3").finish();
        $("#intro_text4").finish();

        $('#img_drop').remove();
        $('#picture_target').append('<section id="last_img_drop"></section>');
        $('#last_img_drop').html('<img src="img/intro/wasteland-ready.jpg" alt="paysage d\'une route avec un environnement desert"/>');
    //and change the skip button to run (start game)
        $('#choices_target').empty(); 
        $('#choices_target').html('<button type="submit" class="btn" id="run">Start Game</button>');
    });
}
