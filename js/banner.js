var wwidth = $(window).width();
function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  if (results)
    return (unescape ( results[2]));
  else
    return null;
}
function set_cookie (name, value, exp_y, exp_m, exp_d, path, domain, secure)
{
  var cookie_string = name + "=" + escape ( value ); 
  if (exp_y)
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
  if (path)
        cookie_string += "; path=" + escape ( path );

  if (domain)
        cookie_string += "; domain=" + escape ( domain );
  
  if (secure)
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}
  var arr_page =[];
  var test_page =[];
$(document).ready(function() {
  var page1 = window.location.href;
  var coc_page = get_cookie("url");
  var test_page1= sessionStorage.getItem("someNumber");
  if(coc_page !== null){     
    if (coc_page !== page1){ 
        if(test_page1.indexOf(',') !== -1){
            arr_page = test_page1.split(',');
            $.each(arr_page, function(i){
                var search = String(arr_page[i]);
                // ищем элементы массива не содержащие page1
                if(search.indexOf('page1') == -1) {
                  if ( arr_page.length <= 3){
                    $('#banner').css('display','inline-block');
                    $('#banner').popup({
                      opacity: 0.5,
                      transition: 'all 0.5s',
                      autoopen: true
                    });
                    arr_page.push(page1);
                    sessionStorage.setItem("someNumber", arr_page);
                  }
                }
            });
          }else{
             arr_page.push(test_page1);
            arr_page.push(page1);
            sessionStorage.setItem("someNumber", arr_page);
            $('#banner').css('display','inline-block');
            $('#banner').popup({
              opacity: 0.5,
              transition: 'all 0.5s',
              autoopen: true
            });
          }               
      
    }
  }else{
      if(test_page1 !== null ){
          if(test_page1.indexOf(',') !== -1){
            arr_page = test_page1.split(',');
             arr_page.push(page1);
            sessionStorage.setItem("someNumber", arr_page);
             $.each(arr_page, function(i){
        var search = String(arr_page[i]);
        // ищем элементы массива не содержащие page1
        if(search.indexOf('page1') == -1) {
          if ( arr_page.length <= 3){
            $('#banner').css('display','inline-block');
            $('#banner').popup({
              opacity: 0.5,
              transition: 'all 0.5s',
              autoopen: true
            });
           
          }
        }
      });
          }else{
            arr_page.push(test_page1);
            arr_page.push(page1);
            sessionStorage.setItem("someNumber", arr_page);
            $('#banner').css('display','inline-block');
            $('#banner').popup({
              opacity: 0.5,
              transition: 'all 0.5s',
              autoopen: true
            });
          }        
      }else{
        arr_page.push(page1);
        sessionStorage.setItem("someNumber", arr_page);
        $('#banner').css('display','inline-block');
        $('#banner').popup({
          opacity: 0.5,
          transition: 'all 0.5s',
          autoopen: true
        });
      }         
      
    
      
   
    
  }
    set_cookie ( "url", page1 );

      var marquee = $("#marquee"); 
      // оболочка для текста ввиде span 
      marquee.wrapInner("<span>");
      marquee.append(marquee.find("span").not('.clone').clone().addClass('clone')); // тут у нас два span с текстом
      marquee.wrapInner("<div>");
      var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
      };
      reset.call(marquee.find("div"));

      var marquee2 = $("#marquee-mobile"); 
      // оболочка для текста ввиде span 
      marquee2.wrapInner("<span>");
      marquee2.append(marquee2.find("span").not('.clone').clone().addClass('clone')); // тут у нас два span с текстом
      marquee2.wrapInner("<div>");
      var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
      };
      reset.call(marquee2.find("div"));

  
});
