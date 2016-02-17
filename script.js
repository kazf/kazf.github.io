$(function(){
	//$('#sample1').hide();
	//console.log('ttdddt');
});

$(function(){
	$('#sample1').css('background','pink');
	
	$('a#a1').text('testtesttest');

	var sample1 = $('#sample1');


	sample1.click(function(){
		

//	sample1.css('color','red');
	sample1.text('TEST');

//	sample1.css('fontSize','200%');
//	sample1.css('height','3em');
//	sample1.hide();
//	sample1.fadeIn(2000);
//	sample1.fadeOut(2000);
//	sample1.slideDown(2000);
//	sample1.slideUp(2000);

//	sample1.animate({
//		top: 150,
//		left: 150,
//		marginLeft : 150,
//		marginTop : 300,	
//	},300);

	sample1.removeClass('before');
	sample1.addClass('after');

	});


	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){
	balloon.css({ left: x + 45 , top: y - 15});
	}
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(function(event){
			balloon.text(text);
			updateBalloonPosition(event.pageX, event.pageY); 
			balloon.show();
		},function(){
			balloon.hide();
		})
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});


	
});



//alert('ttdddt');
