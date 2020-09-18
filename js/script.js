var wwidth = $(window).width();
if( wwidth>=768){
    $('#usluga_1 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime1');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_2 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_3 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime3');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
    });
    $('#usluga_1 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_2 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_3 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime3');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
    });

    $('#usluga_4 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime1');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_5 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_6 .title').on('mouseover', function() {
        $('.block-anime_uslugi').addClass('anime3');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
    });
    $('#usluga_4 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_5 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
        $('.block-anime_uslugi').removeClass('anime3');
    });
    $('#usluga_6 .title').on('mouseout', function() {
        $('.block-anime_uslugi').removeClass('anime3');
        $('.block-anime_uslugi').removeClass('anime2');
        $('.block-anime_uslugi').removeClass('anime1');
    });

    $('.title').on('click', function() {
        $('header').removeClass('anime2');
        $('.block-usligi').removeClass('anime2'); 
        $('header').addClass('anime');
        $('.block-usligi').addClass('anime');
        $('.list_uslugi > li').css('display','none');
        $('.block-anime_uslugi').css('display','none');
        $(this).parent('li').addClass('onclick');
    });
    function displayList() {
        $('.block-usligi.anime .list_uslugi li').show('500');
        $('.block-anime_uslugi').show('500');
        $('header.anime .header-right').show('500');
        $('header.anime .header-right').css('opacity', '1');
    }
    function removeClass(){
        $('header').removeClass('anime');
        $('header').removeClass('anime2');
        $('.block-usligi').removeClass('anime'); 
        $('.block-usligi').removeClass('anime2'); 
    }
    $('.btn.close').on('click', function() {
        $('header').addClass('anime2');
        $('.block-usligi').addClass('anime2');
        setTimeout($('li.onclick').removeClass('onclick'), 1000);
        setTimeout(displayList, 2000);
        setTimeout(removeClass, 2000);
        
    });
    var thisId;
    $('body').on('click', '.btn.next', function(){
        $('header').addClass('anime2');
        $('.block-usligi').addClass('anime2 anime3');
        thisId = $(this).parents('.onclick').attr('id');
        $(this).parents('.onclick').removeClass('onclick');
        setTimeout(NextUsluga, 2000);
    });
    function NextUsluga(){
        
        var textID = thisId.split('_');
        var numId = Number(textID[1]);
        var newID = numId + 1;
        var newText ='#usluga_'+newID;
        
        $(newText).addClass('onclick');
        $('header').removeClass('anime');
        $('header').removeClass('anime2');
        $('.block-usligi').removeClass('anime'); 
        $('.block-usligi').removeClass('anime2'); 
        $('.block-usligi').removeClass('anime3');
        $('header').addClass('anime');
        $('.block-usligi').addClass('anime');

    }
    
}  
function Display(){
    $('#form_popup .block-form_contact h5').css('display','block');
    $('#form_popup .block-form_contact form').css('display','flex');
}  
$(document).ready(function() {
    $('#form_popup').popup({
        opacity: 0.5,
        transition: 'all 0.5s',
        onopen: function() {
            $('#form_popup .block-contact').addClass('anime_form');
            setTimeout(Display, 3000);
          },
          onclose: function(){
            $('#form_popup .block-contact').removeClass('anime_form');
            $('#form_popup .block-contact').removeClass('anime_form2');
            $('#form_popup .block-form_contact h5').css('display','none');
            $('#form_popup .block-form_contact form').css('display','none');
          }
      });
     
     if (wwidth < 768){
        $('.block-usligi span.title').on('click', function(){
            if($(this).parent('li').hasClass('open')){
                $(this).siblings('.block-content_uslug').fadeOut(1000);
                $(this).parent('li').removeClass('open');
            }else{
                $(this).siblings('.block-content_uslug').fadeIn(1000);
                $(this).parent('li').addClass('open');
            }
        });
     } 
  });
 $('body').on('click', '#form_popup .submit', function(){
     var tel = $('#form_popup .tel').val();
     var email =$('#form_popup .email').val();
     var name = $('#form_popup .name').val();
     let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
     var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     if(tel== ''){
        $('#form_popup .tel').css('border-bottom','1px solid #f00');
        $('#form_popup .error_tel').css('display','block').text('введите номер телефона');

     }else if(!regex.test(tel)){
        $('#form_popup .tel').css('border-bottom','1px solid #f00');
        $('#form_popup .error_tel').css('display','block').text('введите корректный номер телефона');

     }else{
        $('#form_popup .error_tel').css('display','none');
        $('#form_popup .tel').css('border-bottom','1px solid #444');
     }
     
     if(email == ''){
        $('#form_popup .email').css('border-bottom','1px solid #f00');
        $('#form_popup .error_email').css('display','block').text('введите email');

     }else if(!re.test(email)){
        $('#form_popup .email').css('border-bottom','1px solid #f00');
        $('#form_popup .error_email').css('display','block').text('введите корректный email');

     }else{
        $('#form_popup .error_email').css('display','none');
        $('#form_popup .email').css('border-bottom','1px solid #444');
     }
     if(name == ''){
        $('#form_popup .name').css('border-bottom','1px solid #f00');
        $('#form_popup .error_name').css('display','block').text('введите имя');

     }else{
        $('#form_popup .name').css('border-bottom','1px solid #444');
        $('#form_popup .error_name').css('display','none');
     }
     if(tel!= '' && regex.test(tel) && email != ''&& re.test(email) && name != ''){
        
        $('#form_popup .text').css('border-bottom','1px solid #444');
        $('#form_popup .err').css('display','none');
        $('#form_popup .block-contact').addClass('anime_form2');
        setTimeout(opasityForm, 3000);
        
        return false;
     }
     if(tel== '' || !regex.test(tel) || email == '' || !re.test(email) || name == ''){
        return false;
    }
       

 }); 
 function opasityForm(){
    $('#form_popup .block-contact').removeClass('anime_form');
    $('#form_popup .block-form_contact').css('display','none');
    $('#form_popup .submit_text').css('display','block');
}

