  var map;

jQuery(function(){

    var px = $('#scene').parallax({
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

    if($(window).width() < 960){
      //   px.disable;
      //  $('.header-image').css({'display': 'none'});
        $('#nav ul li a i').css({'display': 'none'});
        $('#nav ul li a').css({'padding-left': '10px'});
        $('#nav ul li a span').css({'font-size': '14px'});

          $('.first-sub').css({'margin-top': '18em'});

            $('.box-info i').removeClass('icn');
           $('.btn-go').css({'display': 'none'});

    }

    $('.box-info').hover(function(){
        $(this).fadeTo(1, 500);
        $('i', this).transition({scale: '1.1', rotate: '+=15deg', x: '5px', textShadow: '0 10px 1px rgba(0,0,0,0.15)'});
    },function(){
       $(this).fadeTo(0.9, 500);
       $('i', this).transition({scale: '1', rotate: '-=15deg',x:'0', textShadow: '0 0 0 rgba(0,0,0,0)'});
    })

    if( ($(window).width() > 480) &&($(window).width() < 960)){
      $('.tt-gird').css({'max-width': '100%'});
      $('#header').css({'width': '450px'});
    }

    if($(window).width() > 1600){
         $('.tt-grid').css({'width': '110%', 'max-width': '110%'});
         $('#nav ul li a span').css({'font-size': '1em'});
    }

    if($(window).width() < 1200){
        $('#nav ul li a i').css({'display': 'none'});
        $('#nav ul li a').css({'padding-left': '15px'});
        $('#nav ul li a span').css({'font-size': '1.2em'});
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

        $('.tt-img span').html('<i class="fa fa-search"></i>');
      $('.tt-img').hover(function(){

        $('span', this).animate({top: '0px'});

      }, function(){
        $('span',this).animate({top: '-250px'});
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

        $('#nav ul li a').each(function(){
          $(this).removeClass('active');
              $('i', this).transition({'color': '#624f42'});
        });
        $('i', this).transition({color: '#000'})
        $(this).addClass('active');
    });

    $('#nav ul li a').hover(function(){

        if ( $(this).hasClass("active") ) {
       //     $(this).transition({ borderBottomColor: 'rgba(202,151,4,1)'});
        } else {

          $('i', this).transition({'color': '#e77327', rotate: '+=360deg'}, 800);
        }

    }, function(){

        if ( $(this).hasClass("active") ) {
          //  $(this).transition({ borderBottomColor: 'rgba(202,151,4,0.7)'});
           $('i', this).transition({'color': '#000', rotate: '-=360deg'});
        } else {
     $('i', this).transition({'color': '#624f42', rotate: '-=360deg'});
        }

    });



});

