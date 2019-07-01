function onClickHomePage(e){
    e.preventDefault();
    $.post("php/dead.php");
    // $('#background_audio').animate({volume: 0}, 2000);
    $('body').fadeOut(2000, function() {
        window.location.replace("index.php");
    });
    
}
