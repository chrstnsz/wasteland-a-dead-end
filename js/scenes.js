function onClickFirstScene(e){
    e.preventDefault();

    $('#run').remove();

    $('form').css('height', '128px');

    $.ajax({ 
        url: 'php/startClicksCount.php',
        success: function(data) {
        $('#clicks_count').html(data);
        }
    });

    $.ajax({
        url: 'php/first_scene.php',
        method: 'POST',
        dataType: 'json',
        success: function(data){
            $('#picture_target').empty();
            $('#scene_target').empty();
            $('#choices_target').empty();

            $('#picture_target').html('<img src="img/story/' + data.a + '.jpg" />');

            $('#scene_target').html('<p>' + data.c + '</p>');

            $('#choices_target').html('<label><input type="radio" name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><label><input type="radio" name="story_choice" value="' + data.g + '" id="' + data.g + '" />' + data.f + '</label></br><button type="submit" class="btn" id="nextscene">next</button>');
        }
    });
}

function onClickNextScene(e){
    e.preventDefault();

    var radioChoice;
    var testDecimal = /^-{0,1}d*.{0,1}d+$/;

    //Récupération de la valeur du bouton radio qui a été sélectionné.
    radioChoice = $('input[name=story_choice]:checked').val();
    console.log(radioChoice);

    var test = testDecimal.test(radioChoice);
    console.log(test);
    
    //verif if radiochoice is a number and positive and not decimal
    if(isNaN(radioChoice) || radioChoice < 1 || test === true){
        window.location.replace("index.php");
    }else{
        $.ajax({
          url: 'php/clickscount.php',
          success: function(data) {
            $('#clicks_count').html(data);
          },
          error: function(){
            window.location.replace = 'index.php';
          }
        });

        $.ajax({
            url:'php/stories.php',
            method: 'POST',
            dataType: 'json',
            data: {radioChoice:radioChoice},
            success: function(data){
                    $('#picture_target').empty();
                    $('#scene_target').empty();
                    $('#choices_target').empty();
                    $('#combat_infos').empty();

                    $('#picture_target').html('<img src="img/story/' + data.a + '.jpg" />');
                    $('#scene_target').html('<p>' + data.c + '</p>');

                    if(data.a == 167){

                        $('#choices_target').empty();
                        //button id="nextscene"
                        $('#nextscene').remove();
                        $('#choices_target').html('<p>Coming Soon..</p>');
                        $('#choices_target').append("<button type='submit' id='homepage' class='btn'>Menu Principal</button>").show();

                    }else if(data.a == 100 || data.a == 209 || data.a == 666){

                        $('#choices_target').empty();
                        //button id="nextscene"
                        $('#nextscene').remove();
                        $('#choices_target').html('<p>Vous êtes mort.</p>');
                        $('#choices_target').append("<button type='submit' class='btn' id='homepage'>Menu Principal</button>");

                    }else{

                        if(data.g === null){
                            if(data.a == 350 || data.a == 374){
                                combat_mele_dog();
                            }
                            $('#choices_target').html('<label><input type="radio" name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><button type="submit" class="btn" id="nextscene">next</button>');

                        }else{
                            if(data.a == 333){ 
                                combat_dice_hab("php/combat_dice_1.php");
                            }
                            if(data.a == 48){
                                combat_mele_gangster();
                            }
                            if(data.a == 38){
                                getFirstAidKit();
                            }
                            if(data.a == 176){
                                combat_dice_hab("php/combat_dice_2.php");
                            }
                            if(data.a == 219){
                                combat_dice_luck();
                            }
                            
                            $('#choices_target').html('<label><input type="radio" checked name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><label><input type="radio" name="story_choice" value="' + data.g + '" id="' + data.g + '"/>' + data.f + '</label></br><button class="btn" type="submit" id="nextscene">next</button>');
                        }
                    }
            }
        });
    }
}