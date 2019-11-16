$('.page-scroll').on('click', function(e){
	var clPG = $(this).attr('href');	
	var secClPG = $(clPG);
	// console.log(secClPG.offset().top);
	// console.log($('body').scrollTop());

 	$('html, body').animate({
 		scrollTop: secClPG.offset().top - 50
 	}, 1000);
	// $('html, body').scrollTop(secClPG.offset().top - 50);

	e.preventDefault();

	
});

// Parallax


$(window).scroll(function(){
	var pScroll = $(this).scrollTop();

	// JumboTron
	//Fixed backgroud scroll body
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ pScroll/6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ pScroll/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ pScroll/10 +'%)'
	});

	// Portfolio
	// Landing background
	if(pScroll > $('.portfolio').offset().top - 250){
		// $('.portfolio .thumbnail').addClass('nongol');
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('nongol');
			}, 200 * (i+1));
		});
	}
});

