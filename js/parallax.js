$(document).ready(function(){
	$(window).scroll(function(){
		var windoWidth = $(window).width();
		if( windoWidth > 800){
			var scroll = $(window).scrollTop();
			$('Header .informacion').css({
				'transform': 'translate(0px, '+ scroll / 2 +'%)'
			});
			$('.acercaDe .contenido').css({
				'transform': 'translate(0px, -'+ scroll / 6 +'%)'
			});
		}
		
	});
	$(window).resize(function(){

		var windoWidth = $(window).width();
		if( windoWidth < 800){
			$('Header .informacion').css({
				'transform': 'translate(0px, 0px)'
			});
			$('.acercaDe .contenido').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});

});