$(document).ready(function() {
    $('#banner').popup({
        opacity: 0.5,
        transition: 'all 0.5s',
        autoopen: true
    });
    var marquee = $("#marquee"); 
	// оболочка для текста ввиде span 
	marquee.wrapInner("<span>");
	marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
	marquee.wrapInner("<div>");
	var reset = function() {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
	};
	reset.call(marquee.find("div"));
         
});     