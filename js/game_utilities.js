"use strict";
function hideFadeSkipNext(nextBtnId, nextBtnSelector, nextIntroFunction, lastSliderImg, lastImgAlt){
     
    if ($(window).width() > 480){

           //create the skip intro button in skip intro target section
        $('#skip_intro_target').hide().delay(500).fadeIn().append('<button type="submit" class="btn" id="run">Skip Intro</button>');
        //button skip appear
        //give 'a' class to btn to hide/visible them
        $('.a').css("visibility", "visible");
        $('#choices_target').hide().delay(500).fadeIn().html('<button type="submit" class="a btn" id="skip">Skip</button>');

        //fadeIn texts
        $('#intro_text1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);

      
        $('#intro_text2').delay(7000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
        $('#intro_text3').delay(14000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
        $('#intro_text4').delay(21000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000, function(){
        //when the text finish fadeIn > change skip button to next
             $('#choices_target').html('<button type="submit" class="a btn" id="' + nextBtnId + '">Next</button>');
            });

        //on click skip, finish all fadein
        $('#skip').one("click", function(event){
            event.preventDefault();
            $('#intro_text1').finish();
            $('#intro_text2').finish();
            $('#intro_text3').finish();
            $('#intro_text4').finish();
        //, and remove img_drop to stop the function pictureslider (stop fadeIn fadeOut loop), then create last_img_drop with the last picture of the slide
            $('#img_drop').remove();
            $('#picture_target').append('<section id="last_img_drop"></section>');
            $('#last_img_drop').html('<img src="img/intro/' + lastSliderImg + '.jpg" alt="' + lastImgAlt + '"/>');
        //and change the skip button to next with the id of next introfunction
            $('#choices_target').empty(); 
            $('#choices_target').html('<button type="submit" class="a btn" id="' + nextBtnId + '">Next</button>');
        });

        //on click on the next button (id change to next introPart)
        //fadeout img/intro texts section
        $('#choices_target').one("click", nextBtnSelector, function(event){
            event.preventDefault();
            $('#skip_intro_target').empty();
            $('#last_img_drop').fadeOut(1200);
            $('#img_drop').fadeOut(1200);
            $('.a').css("visibility", "hidden");
            $('#intro_text1').fadeOut(1200);
            $('#intro_text2').fadeOut(1200);
            $('#intro_text3').fadeOut(1200);
            $('#intro_text4').fadeOut(1200, nextIntroFunction);
        //and return to the top of the page
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
        });

    } else {

        $('#skip_intro_target').hide().delay(500).fadeIn().append('<button type="submit" class="btn" id="run">Skip Intro</button>');
        //button skip appear
        //give 'a' class to btn to hide/visible them
        $('.a').css("visibility", "visible");

        $('#intro_text1').hide().fadeIn();

        //fadeIn texts
        $('#intro_text2').hide().fadeIn();
        $('#intro_text3').hide().fadeIn();
        $('#intro_text4').hide().fadeIn(400, function(){
        //when the text finish fadeIn > change skip button to next
             $('#choices_target').html('<button type="submit" class="a btn" id="' + nextBtnId + '">Next</button>');
            });

        //on click on the next button (id change to next introPart)
        //fadeout img/intro texts section
        $('#choices_target').one("click", nextBtnSelector, function(event){
            event.preventDefault();
            $('#skip_intro_target').empty();
            $('#last_img_drop').fadeOut(1200);
            $('#img_drop').fadeOut(1200);
            $('.a').css("visibility", "hidden");
            $('#intro_text1').fadeOut(1200);
            $('#intro_text2').fadeOut(1200);
            $('#intro_text3').fadeOut(1200);
            $('#intro_text4').fadeOut(1200, nextIntroFunction);
        //and return to the top of the page
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
        });
    }
}

function pictureSlider(a,aa,b,bb,c,cc,d,dd){


    if ($(window).width() > 480){
        //last img drop removed
        $('#last_img_drop').remove();
        //replace with img drop
        $('#picture_target').show().append('<section id="img_drop"></section>');

        //start the slider with fadeIn fadeout loop
        $('#img_drop').hide().html('<img src="img/' + a + '.jpg" alt="' + aa +'"/>').fadeIn(2000, function(){
            $('#img_drop').delay(3000).fadeOut(2000, function(){
                $('#img_drop').html('<img src="img/' + b + '.jpg" alt="' + bb + '"/>').fadeIn(2000, function(){
            $('#img_drop').delay(3000).fadeOut(2000, function(){
            $('#img_drop').html('<img src="img/' + c + '.jpg" alt="' + cc + '"/>').fadeIn(2000, function(){
            $('#img_drop').delay(3000).fadeOut(2000, function(){
            $('#img_drop').html('<img src="img/' + d + '.jpg" alt="' + dd + '"/>').fadeIn(2000);
                                });
                            });
                        });
                    });
                });
            });

    }else{
        $('#picture_target').hide();
    }
}

function emptyHtmlTargets(){
    //clean the sections of intro
    $('#picture_target').empty();
    $('#scene_target').empty();
}

function combat_dice_hab(url){
    $('#choices_target').hide();

    $.post(url, function(data){
        $("#scene_target").append(data);
        $("#combat_dice_hab").on("click", "#dice_btn", function(){
            $('#choices_target').show();
        });
    });
}

function combat_dice_luck(){
    $('#scene_target').append('<p><span class="italic bold">Tentez votre Chance</span>. Si vous êtes <span class="bold">Chanceux</span>, rendez-vous au <span class="bold">288</span>. Si vous êtes <span class="bold">Malchanceux</span>, rendez-vous au <span class="bold">236</span>.</p><p>Lancez <span class="bold">deux</span> dés. Si le chiffre obtenu est <span class="bold">égal ou inférieur</span> à vos points de <span class="bold">CHANCE</span>, vous êtes <span class="bold">Chanceux</span>. Si ce chiffre est <span class="bold">supérieur</span> à vos points de <span class="bold">CHANCE</span>, vous êtes <span class="bold">Malchanceux</span> et vous serez pénalisé.</p>');
    $('#scene_target').append('<div id="dice_roll_div"><button id="dice_btn" type="button" class="rollTheDice"><i class="fas fa-dice"></i></button><p class="dice_result">Roll me !</p></div>');

    $.post("php/combat_dice_luck.php", function(data){
        $("#sidebar_infos").load("index.php #sidebar_infos");
        $("#perso_infos").load("index.php #perso_infos");
        $("#scene_target").prepend("<p class='italic'>" + data + "</p>");

    });
}

function combat_mele_gangster(){
    $('#choices_target').hide();
  
    $("#scene_target").append('<p>GANGSTER hability : 7 , endurance : 10</p>');
    $("#scene_target").append("<p>Lancez deux dés. Ajoutez le chiffre aux points d'HABILITY de votre adversaire. Ce total représente la force d'attaque de l'adversaire.</p>");
    $("#scene_target").append("<p>Lancez deux dés. Ajoutez le chiffre à votre score d'HABILITY. Ce total représente votre force d'attaque.</p>");
    $("#scene_target").append('<div id="dice_roll_div"><button id="dice_btn" type="button" class="rollTheDice"><i class="fas fa-dice"></i></button><p id="dice_result" class="dice_result">Roll me !</p></div>');
    $("#scene_target").append('<form id="combat_hab_form" method="POST"><div style="float:left;"><label for="perso_hab">VOUS</label><input id="perso_hab" type="number" name="perso_hab"></div><div style="float:right;"><label for="pnj_hab">ADVERSAIRE</label><input id="pnj_hab" type="number" name="pnj_hab" ></div><br style="clear:both;" /><button id="fight_loop_btn" class="btn" type"submit">FIGHT</button></form>');

    $("<p id='combat_infos'></p>").insertBefore("#combat_hab_form");

    var persoTurnCount = 0;
    var pnjTurnCount = 0;


    $("#fight_loop_btn").on('click', function(e){
        e.preventDefault();

        var perso_hab = $("input[name=perso_hab]").val();
        var pnj_hab = $("input[name=pnj_hab]").val();

        var testDecimal = /^-{0,1}d*.{0,1}d+$/;
        var test = testDecimal.test(perso_hab);
        var test2 = testDecimal.test(pnj_hab);
    
        //verif if radiochoice is a number and positive and not decimal
        if(isNaN(perso_hab) || isNaN(pnj_hab) || test === true || test2 === true){
        window.location.replace("index.php");
        }else{

            $('#combat_infos').empty();

            $.ajax({
                url: 'php/combat_r.php',
                method: 'POST',
                dataType : 'json',
                data: {perso_hab:perso_hab, pnj_hab:pnj_hab, persoTurnCount:persoTurnCount, pnjTurnCount:pnjTurnCount},
                success: function(data){
                    $("#sidebar_infos").load("index.php #sidebar_infos");
                    $("#perso_infos").load("index.php #perso_infos");
                    
                    if(data.a === "Dead"){
                        $("#scene_target").empty();
                        $("#scene_target").append(data.b);
                        $('#choices_target').html('<label><input type="radio" checked name="story_choice" value="100" id="100" checked />Vous sombrez dans l\'inconscience.</label></br><button class="btn" type="submit" id="nextscene">next</button>');
                        $('#choices_target').show();
                    }
                    if(data.a === "Victory"){
                        $("#scene_target").empty();
                        $("#scene_target").append(data.b);
                        $('#choices_target').html('<label><input type="radio" checked name="story_choice" value="138" id="138" checked />...</label></br><button class="btn" type="submit" id="nextscene">next</button>');
                        $('#choices_target').show();
                    }
                    if(data.a === "Give"){
                        pnjTurnCount += 2;
                    }
                    if(data.a === "Take"){
                        persoTurnCount += 2;
                    }
                    $("#combat_infos").append(data.b);
                },
                error: function(jqXHR, textStatus, errorThrown)
                    {
                        alert(textStatus);
                        alert(errorThrown);
                    }
            });
        }
    });

}

function combat_mele_dog(){
    $('#choices_target').hide();
  
    $("#scene_target").append('<p>CHIEN SAUVAGE hability : 7 , endurance : 5</p>');
    $("#scene_target").append("<p>Lancez deux dés. Ajoutez le chiffre aux points d'HABILITY de votre adversaire. Ce total représente la force d'attaque de l'adversaire.</p>");
    $("#scene_target").append("<p>Lancez deux dés. Ajoutez le chiffre à votre score d'HABILITY. Ce total représente votre force d'attaque.</p>");
    $("#scene_target").append('<div id="dice_roll_div"><button id="dice_btn" type="button" class="rollTheDice"><i class="fas fa-dice"></i></button><p id="dice_result" class="dice_result">Roll me !</p></div>');
    $("#scene_target").append('<form id="combat_hab_form" method="POST"><div style="float:left;"><label for="perso_hab">VOUS</label><input id="perso_hab" type="number" name="perso_hab"></div><div style="float:right;"><label for="pnj_hab">ADVERSAIRE</label><input id="pnj_hab" type="number" name="pnj_hab" ></div><br style="clear:both;" /><button id="fight_loop_btn" class="btn" type"submit">FIGHT</button></form>');

    $("<p id='combat_infos'></p>").insertBefore("#combat_hab_form");

    var persoTurnCount = 0;
    var pnjTurnCount = 0;


    $("#fight_loop_btn").on('click', function(e){
        e.preventDefault();
        var perso_hab = $("input[name=perso_hab]").val();
        var pnj_hab = $("input[name=pnj_hab]").val();

        var testDecimal = /^-{0,1}d*.{0,1}d+$/;
        var test = testDecimal.test(perso_hab);
        var test2 = testDecimal.test(pnj_hab);

       if(isNaN(perso_hab) || isNaN(pnj_hab) || test === true || test2 === true){
        window.location.replace("index.php");
        }else{
            $('#combat_infos').empty();

            $.ajax({
                url: 'php/combat_r.php',
                method: 'POST',
                dataType : 'json',
                data: {perso_hab:perso_hab, pnj_hab:pnj_hab, persoTurnCount:persoTurnCount, pnjTurnCount:pnjTurnCount},
                success: function(data){
                    $("#sidebar_infos").load("index.php #sidebar_infos");
                    $("#perso_infos").load("index.php #perso_infos");
                    
                    if(data.a === "Dead"){
                        $("#scene_target").empty();
                        $('#choices_target').html("<button type='submit' id='homepage' class='btn'>Vous êtes mort</button>");
                        $('#choices_target').show();
                    }
                    if(data.a === "Victory"){
                        $("#scene_target").empty();
                        $("#scene_target").append(data.b);
                        $('#choices_target').show();
                    }
                    if(data.a === "Give"){
                        pnjTurnCount += 2;
                    }
                    if(data.a === "Take"){
                        persoTurnCount += 2;
                    }
                    $("#combat_infos").append(data.b);
                },
                error: function(jqXHR, textStatus, errorThrown)
                    {
                        alert(textStatus);
                        alert(errorThrown);
                    }
            });
        }
    });

}

function getFirstAidKit(){
    $.post("php/get_first_aid_kit.php", function(data){
        
        $("#scene_target").prepend("<p class='italic'>" + data + "</p>");

        $("#sidebar_infos").load("index.php #sidebar_infos");
        $("#perso_infos").load("index.php #perso_infos");
    });
}