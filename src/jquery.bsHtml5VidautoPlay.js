$(function(){

	var carousel_el = $('.carousel');
	carousel_el.on('slid.bs.carousel', function(){
		var current_carousel = $(this);

		current_carousel.find('video').each(function(){
			$(this).load();
		});
		
		if(current_carousel.find('.carousel-inner .item.active video').size() > 0){
			current_carousel.find('.carousel-inner .item.active video')[0].play();
			current_carousel.carousel('pause');
			
			current_carousel.find('.carousel-inner .item.active video')[0].onended = function(e){
				current_carousel.carousel('next');
			}
		}
	});
	
});