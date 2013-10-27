jQuery(function(){

    if($(window).width() < 1400){
        $('#nav ul li a i').css({'display': 'none'});
        $('#nav ul li a').css({'padding-left': '15px'});
        $('#nav ul li a span').css({'font-size': '1.2em'});
    }

    if(($(window).width() < 1600) && ($(window).width() > 1400)){

        $('#nav ul li a').css({'padding-left': '5px'});
        $('#nav ul li a span').css({'font-size': '0.6em'});
        $('.sub h1').css({'font-size': '2.1em'});
         $('.sub h2').css({'font-size': '1.8em'});
         $('.header-image').css({'margin-left': '-200px'});
    }

    $('#nav ul li a').hover(function(){
        var a = $(this).css('BackgroundColor');
        if( a != '#f0c600' ){
        $('i', this).transition({'color': '#e77327'}); }
    }, function(){
        $('i', this).transition({'color': '#624f42'});
    });



});

