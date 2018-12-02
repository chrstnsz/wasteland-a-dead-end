"use strict";
function hideFadeSkipNext(nextBtnId, nextBtnSelector, nextIntroFunction, lastSliderImg, lastImgAlt){
     
    if ($(window).width() > 480){
           //create the skip intro button in skip intro target section
        $('#skip_intro_target').hide().delay(500).fadeIn().append('<button type="submit" class="btn" id="run">Skip Intro</button>');
        //button skip appear
        //give 'a' class to btn to hide/visible them
        $('.a').css("visibility", "visible");
        $('#choices_target').hide().delay(500).fadeIn().html('<button type="submit" class="a btn" id="skip">Skip</button>');

        $('#intro_text1').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);

        //fadeIn texts
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
    //clean the sections game
    $('#picture_target').empty();
    $('#scene_target').empty();
}

function onClickHomePage(e){
    e.preventDefault();
    $('#background_audio').animate({volume: 0}, 2000);
    $('body').fadeOut(3000, function() {
        location.reload();
    });
    
}

function showCreditsPage(e){
    e.preventDefault();
    $("footer").hide();
    $("#start_intro").hide();
    $("#scene_target").hide();
    $("#credits").hide();
    $("#picture_target").fadeOut(600, function(){
        $.ajax({
            url: "php/credits.php",
            type:"POST",
            success: function(data){
                        $("#credits").show();
                        $("main").hide().prepend(data).fadeIn();
                        $('#credits').removeClass('switchon');
                        $('#credits').addClass('switchoff');
                        $('#credits').html('Back');
            }
        });
    });

    
}

function hideCreditsPage(e){
    e.preventDefault();
    $('#credits').fadeOut();
    $("#credits_page").fadeOut(600, function(){
        $("#credits_page").remove();
        $("#picture_target").fadeIn();
        $("#scene_target").fadeIn();
        $("#start_intro").fadeIn();
        $("footer").fadeIn();
        $('#credits').fadeIn();
        $('#credits').removeClass('switchoff');
        $('#credits').addClass('switchon');
        $('#credits').html('Credits');
    });
}

//////////// AUDIO ///////////////

var muted = false;

function audioLoad(){
    var backAudio = $('#background_audio');
    backAudio.animate({volume: 0.5}, 1000);

    

    $('#mute').on("click", function(){
        var button = $(this);
        if (!muted) {
            button.attr("disabled", "");
            
            backAudio.animate({volume: 0}, 1000, function(){
                muted = true;
                button.removeAttr("disabled", "");
                button.html("<i class='fas fa-volume-mute'>");
            });
        }
        else {
            button.attr("disabled", "");
            
            backAudio.animate({volume: 0.5}, 1000, function(){
                muted = false;
                button.removeAttr("disabled", "");
                button.html("<i class='fas fa-volume-up'>");
            });
        }
    });
}
/////////////////////////////////////////