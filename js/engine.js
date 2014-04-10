/* im@andreystarkov.ru */

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

    var slider = $('.carousel').carousel({
      interval: false,
      pause: true
    });

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
        $('#nav ul li a i').css({'display': 'none'});
        $('#nav ul li a').css({'padding-left': '10px'});
        $('#nav ul li a span').css({'font-size': '16px'});
        $('.logo-top-1').css({'right': '8%'});
          $('.first-sub').css({'margin-top': '25em'});

           $('.btn-go').css({'display': 'none'});

    }

    if($(window).width() < 500){
          $('.first-sub').css({'margin-top': '25em'});
    }

    if( ($(window).width() > 480) &&($(window).width() < 960)){
      $('.tt-gird').css({'max-width': '100%'});

    }
    if($(window).width() > 1200){
       waypointsInit();
    }

    if($(window).width() > 1600){
         $('.tt-grid').css({'width': '1400px'});
         $('#nav ul li a span').css({'font-size': '19pt'});
    }

    if($(window).width() < 1200){
        $('#nav ul li a i').css({'display': 'none'});
        $('#nav ul li a').css({'padding-left': '15px'});
        $('#nav ul li a span').css({'font-size': '1.2em'});
    }

    $.cookie('sent', '0',{ expires: 1});

    if($.cookie('sent') == '1'){
        $('#button-send').html('<i class="icon-ok-circle icon-large"></i> Ваша заявка принята');
        $('#button-send').animate({color: 'rgba(255,255,255,1)'});
        $('#button-send').animate({backgroundColor: '#93cb5d', borderBottomColor: '#618d37', boxShadow: 'inset 0px 0px 0px 1px #618d37, inset 0px 2px 1px 0px rgba(255,255,255,0.75)', color: 'rgba(255,255,255,0)'});
    }

    $('.not-ready').click( function(){
      $('i', this).transition({rotate: '+360deg', color: '#b85638', textShadow: '0 0 0 rgba(0,0,0,0.4)'}, 500, function(){
         $(this).animate({color: '#333', textShadow: '0px 2px 6px rgba(0,0,0,0.1)'});
      });
    });

    $('.not-ready').tooltipster({
       animation: 'grow',
       content:  'Информация по проеку в разработке.</span>',
       position: 'bottom', theme: '.tooltipster-punk', maxWidth: 310, trigger: 'hover' });

    $('#button-send').click( function(){

      var name = $('#form-name').val();
      var back = $('#form-back').val();
      var text = $('#form-text').val();

      if(text == ""){
        $('.tt-warning').tooltipster('enable');
        $('.tt-warning').tooltipster('show');
        } else {
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: {
              'name': name,
              'back': back,
              'text': text
            },
            success: function(msg){
              $.cookie('sent', '1',{ expires: 1});
              $('.tt-sent').tooltipster('enable');
              $('.tt-sent').tooltipster('show');
              $('#button-send').animate({backgroundColor: '#93cb5d', borderBottomColor: '#618d37',
              boxShadow: 'inset 0px 0px 0px 1px #618d37, inset 0px 2px 1px 0px rgba(255,255,255,0.75)', color: 'rgba(255,255,255,0)'}, function(){
                $('#button-send').html('<i class="icon-ok-circle icon-large"></i> Ваша заявка принята');
                $('#button-send').animate({color: 'rgba(255,255,255,1)'});
              });
            }
          });
        }
    });

    $('.responsive-slider').each(function(){
      $(this).css({maxHeight: $(this).find('img').height()+'px'});
    });

    $('.house-standalone').transition({right: '0', opacity: 1}, 50);

    function waypointsInit(){
        $('.waypoint').transition({right: '-1500px', opacity: 0}, 10);
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

        $('.sub h1, h3').waypoint(function(direction) {
        $(this).transition({scale: '1.3', opacity:'1'}, 500, function(){
        $(this).transition({scale: '1'}, 300);
        });
        }, { offset: '55%', triggerOnce: true });

        $('.box-info').waypoint(function(direction) {
        $(this).transition({y: '0', opacity:'1'}, 800);
        }, { offset: '110%', triggerOnce: true });

        $('.waypoint').waypoint(function(direction) {
        $(this).transition({opacity: 1, right: 0}, 1000, function(){});

        }, { offset: '90%', triggerOnce: true});

    }
    $('.img-thumb span').html('<i class="fa fa-search"></i>');

    $('.img-thumb').hover(function(){
      $('span', this).animate({opacity:1});
    }, function(){
      $('span',this).animate({opacity:0});
    });

    $('.btn-studio').click(function(){
      $('#carousel-design').carousel(0);
    });

    $('.btn-flat-1').click(function(){
     $('#carousel-design').carousel(1);
    });

    $('.btn-flat-2').click(function(){
      $('#carousel-design').carousel(2);
    });

    $('.tt-img span').html('<i class="fa fa-search"></i>');

    $('.tt-img').hover(function(){
      $('span', this).animate({opacity:1});
    }, function(){
      $('span',this).animate({opacity:0});
    });

    $('.round').each( function(){
          if( $(this).html() == "" ) {
            $(this).html('<i class="fa-angle-down fa i-1"></i><i class="fa-angle-double-down fa i-2"></i>');
          }
          if( $('.i-2', this).length == 0 ){
            $(this).append('<i class="fa-angle-double-down fa i-2"></i>');
          }
    });

    $('.img-responsive').hover(function(){
        $('span', this).transition({opacity: '1', scale:1});
    }, function(){
        $('span', this).transition({opacity: '0', scale:0});
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
        if ( !($(this).hasClass("active")) ) {
          // $('i', this).transition({'color': '#e77327', rotate: '+=360deg'}, 800);
           $('i', this).transition({'color': '#e77327'}, 500);
        }
    }, function(){
        if ( $(this).hasClass("active") ) {
           $('i', this).transition({'color': '#000'/*, rotate: '-=360deg'*/});
        } else {
          $('i', this).transition({'color': '#624f42'/*, rotate: '-=360deg'*/});
        }
    });

});

