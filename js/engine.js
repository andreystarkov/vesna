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



    $('#nav ul li a').hover(function(){

        if ( $(this).hasClass("active") ) {
       //     $(this).transition({ borderBottomColor: 'rgba(202,151,4,1)'});
        } else {
          $(this).transition({boxShadow: 'inset 0 0 15px rgba(86,73,65,0.1)', borderBottomColor: 'rgba(212,168,140,0.9)'});
          $('i', this).transition({'color': '#e77327', rotate: '+=360deg'});
        }

    }, function(){

        if ( $(this).hasClass("active") ) {
          //  $(this).transition({ borderBottomColor: 'rgba(202,151,4,0.7)'});
        } else {
          $(this).transition({boxShadow: 'inset 0 0 20px rgba(86,73,65,0)', borderBottomColor: 'rgba(212,168,140,0.3)'});
        }
        $('i', this).transition({'color': '#624f42'});
    });



});

