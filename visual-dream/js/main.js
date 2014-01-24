$(document).scroll(function(){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#bullets').css('top',(0-(scrolled*.25))+'px');
    $('#val').css('top',(0-(scrolled*.5))+'px');
    $('#val_rev').css('top',(0-(scrolled*.75))+'px');
}

$(document).ready(function(){
	$('#menu_pos').dblclick(function(){
		$(".menu").slideToggle('slow');
		$('.menu').css('display','block');
	})
});


$(document).ready(function(){
	$('#menu_pos').draggable();
});