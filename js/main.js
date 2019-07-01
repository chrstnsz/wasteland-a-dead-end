"use strict";
$(document).ready(function(){

    //on click forms errors > hide
    $(".danger").on("click", function(){
        $(".danger").fadeOut();
    });

    //sections hidden
    $('#newPersoSection').hide();
    $('#persoList').hide();

    // show sections on click
    $('#createNewPerso').on("click", function(){
        $('#persoList').fadeOut( 500, function(){
            $('#newPersoSection').fadeIn();
        });
    });

    $('#searchPerso').on("click", function(){
        $('#newPersoSection').fadeOut( 500, function(){
            $('#persoList').fadeIn();
        });
    });

    //dice roll
    $('#dice_btn').on("click", function(){
        $(".dice_result").html("Your die roll is <strong>: " +  Math.floor(Math.random()*6 + 1) + "</strong>");
    });

    $('#scene_target').on('click', '#dice_btn', function(){
        $(".dice_result").html("Your die roll is <strong>: " +  Math.floor(Math.random()*6 + 1) + "</strong>");
    });

    //hide flash message
    $('#log_notif').delay(3000).fadeOut(300);

    // slide side info div
     var sideMenu = false;

    $("#sidebutton").click(function() {
        if (!sideMenu) {
            $("#sidebar").animate({right: "0px"});
            $("#sidebutton").html('<i class="fas fa-angle-double-right"></i>');
            sideMenu = true;
        } else { 
            $("#sidebar").animate({right: "-189px"});
            $("#sidebutton").html('<i class="fas fa-angle-double-left"></i>');
            sideMenu = false;     
        }
    });

/////// BUTTON START GAME AT THE END OF THE INTRO //////////
// on click > first story scene
    $('#choices_target').on("click", '#run', onClickFirstScene);
    
/////// BUTTON SKIP INTRO ////////
    $('#skip_intro_target').on("click", '#run', onClickFirstScene);
    
/////// STORY PART // ON CLICK BTN NEXTSCENE > NEXTSCENE ////////
    $('#choices_target').on("click", '#nextscene', onClickNextScene);

// on click "menu principal" (homepage) > reload //
    $('#choices_target').on("click", '#homepage', onClickHomePage);

////// FIRST BUTTON START GAME  IN BTN BAR HOMEPAGE////
    $('#start_intro').on("click", function(e){
    	e.preventDefault();   
    	$('#btn_bar').empty();
	    $('#choices_target').empty();
	    $('footer').hide();
        $('#infos').hide();
        $('#newPersoSection').hide();
        $('#dice').hide();
        $('#newPersoForm').hide();
        $('#persoList').hide();
        $('#nav_bar').hide();
	    $('h1').fadeOut(1000);
        $('.danger').fadeOut();
	    $('img').fadeOut(1000, onClickStartIntro);

	});
/////////////////////////////////////////

});


