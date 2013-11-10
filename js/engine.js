  var map;

function hexToRgb(hex) {
    alert(hex);
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

jQuery(function(){

    var bx = $('#blur').parallax({
      calibrateX: true,
      calibrateY: true,
      limitX: 15,
      limitY: 15});

    $('.carousel').css({y: '-300px', opacity:'0'});
    $('.box-info').css({y: '300px', opacity:'0'});
    $('.btn-go').css({x: '500px', opacity: '0'});
     $('.sub h1').css({scale: "0.1", opacity: '0'});
     $('.waypoint').css({opacity: 0});

    $('section').waypoint(function(direction) {

    }, { offset: '5%', triggerOnce: true });


    $('.carousel').waypoint(function(direction) {
      $(this).transition({y: '0', opacity:'1'}, 800);
    }, { offset: '60%', triggerOnce: true });

   $('.btn-go').waypoint(function(direction) {
      $(this).transition({x: '0', opacity:'1', rotate: '+=360deg'}, 800);
    }, { offset: '75%', triggerOnce: true });

   $('.sub h1').waypoint(function(direction) {
      if($(this).css("opacity") == 0) $(this).transition({scale: '1.3', opacity:'1'}, 500, function(){
          $(this).transition({scale: '1'}, 300);
      });
    }, { offset: '55%', triggerOnce: true });

   $('.box-info').waypoint(function(direction) {
      if(direction == "down") $(this).transition({y: '0', opacity:'1'}, 800);
    }, { offset: '110%', triggerOnce: true });

   $('.waypoint').waypoint(function(direction) {
    $(this).transition({opacity: 1}, 500);
  }, { offset: '90%', triggerOnce: true});

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
        $('#nav ul li a span').css({'font-size': '16px'});

          $('.first-sub').css({'margin-top': '20em'});

            $('.box-info i').removeClass('icn');
           $('.btn-go').css({'display': 'none'});

    }

    $('.box-info').hover(function(){

        $('i', this).transition({scale: '1.1', rotate: '+=15deg', x: '5px', y: '-10px',textShadow: '0 14px 3px rgba(0,0,0,0.13)'});
    },function(){

       $('i', this).transition({scale: '1', rotate: '-=15deg',x:'0', y: '0',textShadow: '0 0 0 rgba(0,0,0,0)'});
    })

    if( ($(window).width() > 480) &&($(window).width() < 960)){
      $('.tt-gird').css({'max-width': '100%'});

    }

    if($(window).width() > 1600){
         $('.tt-grid').css({'width': '1400px'});
         $('#nav ul li a span').css({'font-size': '20pt'});
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
    $('.carousel').carousel({
      interval: false,
      pause: true
    });
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

