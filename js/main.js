"use strict";
$(document).ready(function(){
	//call audio function
	audioLoad();

/////// BUTTON START GAME AT THE END OF THE INTRO //////////
// on click > first story scene
    $('#choices_target').on("click", '#run', onClickFirstScene);
    
/////// BUTTON SKIP INTRO ////////
    $('#skip_intro_target').on("click", '#run', function(e){
    	e.preventDefault();
    	// $('#background_audio').animate({volume: 0});
    		onClickFirstScene();   	
    });
    
/////// STORY PART // ON CLICK BTN NEXTSCENE > NEXTSCENE ////////
    $('#choices_target').on("click", '#nextscene', onClickNextScene);

// on click "menu principal" (homepage) > reload //
    $('#choices_target').on("click", '#homepage', onClickHomePage);

// switch hide/show credits page //
    $('#btn_bar').on("click", ".switchoff", hideCreditsPage);
    $('#btn_bar').on("click", ".switchon", showCreditsPage);

////// FIRST BUTTON START GAME  IN BTN BAR HOMEPAGE////
    $('#start_intro').on("click", function(e){
    	e.preventDefault();
 
	    	$('#background_audio').animate({volume: 0}, 1000, function(){
		        $('#background_audio').attr("src", "audio/ludwig-the-holy-blade.ogg");
		        if (!muted) {
		        	$('#background_audio').animate({volume: 0.5}, 1000);
		        }
    		});
   
    	$('#btn_bar').empty();
	    $('#choices_target').empty();
	    $('footer').hide();
	    $('h1').fadeOut(1000);
	    $('img').fadeOut(1000, onClickStartIntro);
	});
/////////////////////////////////////////
});


