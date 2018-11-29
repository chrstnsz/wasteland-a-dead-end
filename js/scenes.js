function onClickFirstScene(){

    $('#run').remove();
    $('#background_audio').attr("src", "audio/darkbeast.ogg");
        if (window.muted) {
            return;
        } else {
            $('#background_audio').animate({volume: 0.5});
        }

    $('form').css('height', '128px');

    $.ajax({
        url: 'php/first_scene.php',
        method: 'POST',
        dataType: 'json',
        success: function(data){
            $('#picture_target').empty();
            $('#scene_target').empty();
            $('#choices_target').empty();

            $('#picture_target').html('<img src="img/story/' + data.a + '.jpg" alt="' + data.i + '"/>');

            $('#scene_target').html('<p>' + data.c + '</p>');

            $('#choices_target').html('<label><input type="radio" name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><label><input type="radio" name="story_choice" value="' + data.g + '" id="' + data.g + '" />' + data.f + '</label></br><button type="submit" class="btn" id="nextscene">next</button>');
        }
    });
}

function onClickNextScene(e){
    e.preventDefault();

    var radioChoice;

    //Récupération de la valeur du bouton radio qui a été sélectionné.
    radioChoice = $('input[name=story_choice]:checked').val();
    console.log(radioChoice);

    $.ajax({
        url:'php/stories.php',
        method: 'POST',
        dataType: 'json',
        data: {radioChoice:radioChoice},
        success: function(data){
                $('#picture_target').empty();
                $('#scene_target').empty();
                $('#choices_target').empty();

                $('#picture_target').html('<img src="img/story/' + data.a + '.jpg" alt="' + data.i + '"/>');
                $('#scene_target').html('<p>' + data.c + '</p>');

                if(data.a == 167){

                    $('#choices_target').empty();
                    //button id="nextscene"
                    $('#nextscene').remove();
                    $('#choices_target').html('<p>Coming Soon..</p>');
                    $('#choices_target').append("<button type='submit' id='homepage' class='btn'>Menu Principal</button>").show();

                }else if(data.a == 100 || data.a == 209 || data.a == 666){

                    $('#background_audio').animate({volume: 0}, 500, function(){
                        $('#background_audio').attr("src", "audio/lullaby-for-mergo.ogg");
                        if (window.muted) {
                            return;
                        } else {
                            $('#background_audio').animate({volume: 0.5}, 1000);
                        }
                    });

                    $('#choices_target').empty();
                    //button id="nexscene"
                    $('#nextscene').remove();
                    $('#choices_target').html('<p>Vous êtes mort.</p>');
                    $('#choices_target').append("<button type='submit' class='btn' id='homepage'>Menu Principal</button>");

                }else{
                    if(data.g === null){
                        $('#choices_target').html('<label><input type="radio" name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><button type="submit" class="btn" id="nextscene">next</button>');

                    }else{
                    $('#choices_target').html('<label><input type="radio" checked name="story_choice" value="' + data.e + '" id="' + data.e + '" checked />' + data.d + '</label></br><label><input type="radio" name="story_choice" value="' + data.g + '" id="' + data.g + '"/>' + data.f + '</label></br><button class="btn" type="submit" id="nextscene">next</button>');
                    }
                }
        }
    });
}