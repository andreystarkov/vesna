
$(function () {

  $('.button-send').click( function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('textarea#message').val();

      if($.cookie('sent') != '1'){

        if(email == ""){
          $('.tt-warning').tooltipster('enable');
          $('.tt-warning').tooltipster('show');
        } else {

          $.ajax({
            type: 'POST',
            url: 'engine/mail.php',
            data: {
              'name': name,
              'email': email,
              'text': text
            },

            success: function(msg){
              $.cookie('sent', '1',{ expires: 1});
              $('.tt-sent').tooltipster('enable');
              $('.tt-sent').tooltipster('show');
              $('.button-send').animate({backgroundColor: '#93cb5d', borderBottomColor: '#618d37', boxShadow: 'inset 0px 0px 0px 1px #618d37, inset 0px 2px 1px 0px rgba(255,255,255,0.75)', color: 'rgba(255,255,255,0)'},
              function(){
              $('.button-send').html('<i class="icon-ok-circle icon-large"></i> Ваша заявка принята');
              $('.button-send').animate({color: 'rgba(255,255,255,1)'});
              });
            }
          });
      }
      } else {
         $('.tt-sent').tooltipster('enable');
         $('.tt-sent').tooltipster('update', '<i class="icon-warning-sign icon-4x tt-ico"></i><span class="tt-txt">Вы уже отправили одну заявку несколько минут назад. Чтобы отправить ещё одну с этого же компьютера &mdash; подождите несколько минут. </span>');
         $('.tt-sent').tooltipster('show');
      }

  });

});
