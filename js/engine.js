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
/*
    $('#nav ul li a').hover(function(){
        $(this).transition({boxShadow: 'inset 0 0 15px rgba(86,73,65,0.1)', backgroundColor: 'rgba(244,240,229,0.9)', borderBottomColor: 'rgba(212,168,140,0.9)'});
        $('i', this).transition({'color': '#e77327', rotate: '+=360deg'});
    }, function(){
        $(this).transition({boxShadow: 'inset 0 0 20px rgba(86,73,65,0)', backgroundColor: 'background: rgba(247,241,221,0.3)', borderBottomColor: 'rgba(212,168,140,0.3)'});
        $('i', this).transition({'color': '#624f42', scale: '1'});
    });

*/

        $('.tt-img span').html('<i class="fa fa-eye"></i>');
      $('.tt-img').hover(function(){

        $('span', this).animate({top: '0px'});

      }, function(){
        $('span',this).animate({top: '-250px'});
      });

    $('#scene').parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: false,
      invertY: true,
      limitX: false,
      limitY: 10,
      scalarX: 2,
      scalarY: 8,
      frictionX: 0.2,
      frictionY: 0.8
    });

    $('.round').each( function(){

          if( $(this).html() == "" ) {
            $(this).html('<i class="fa-angle-down fa i-1"></i><i class="fa-angle-double-down fa i-2"></i>');
          }

          if( $('.i-2', this).length == 0 ){
            $(this).append('<i class="fa-angle-double-down fa i-2"></i>');
          }
    });
$('.carousel').carousel();
    $('.round').hover(function(){

        $('.i-1', this).transition({top: '250px', opacity:0});
        $('.i-2', this).transition({top: '18px', opacity:1});
    }, function(){
        $('.i-1', this).transition({top: '15px', opacity:1});
        $('.i-2', this).transition({top: '-250px', opacity:0});
    });
    $('#nav ul li a').click(function(){
      $('i', this).transition({'color': '#2b2521'});
    });

    $('#nav ul li a').hover(function(){

        if ( $(this).hasClass("active") ) {
       //     $(this).transition({ borderBottomColor: 'rgba(202,151,4,1)'});
        } else {
          $(this).transition({boxShadow: 'inset 0 0 15px rgba(86,73,65,0.1)', borderBottomColor: 'rgba(212,168,140,0.7)'}, {queue: false, duration: 600});
          $('i', this).transition({'color': '#e77327', rotate: '+=360deg'});
        }

    }, function(){

        if ( $(this).hasClass("active") ) {
          //  $(this).transition({ borderBottomColor: 'rgba(202,151,4,0.7)'});
        } else {
          $(this).transition({boxShadow: 'inset 0 0 0 rgba(86,73,65,0)', borderBottomColor: 'rgba(212,168,140,0.3)'}, {queue: false, duration: 600});
        }
        $('i', this).transition({'color': '#624f42'});
    });



});

