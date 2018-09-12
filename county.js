$(function(){
	$('.nav-content ul li a').click(function(){
			 $('html, body').stop().animate({ 
			        scrollTop: $( $(this).attr('href') ).offset().top - 100 
			    }, 500); 
		   	 return false; 
			})

	$('.select ul li a').click(function(){
			 $('html, body').stop().animate({ 
			        scrollTop: $( $(this).attr('href') ).offset().top - 100 
			    }, 500); 
		   	 return false; 
			})

	$('.img').click(function(){
		if($('.select ul').css('display')=='none'){
			$('.select ul').show('slow');
		}else{
			$('.select ul').hide('slow');
		}
	
	})

	$('.tab ul li').eq(0).click(function(){
		$('.tab ul li').eq(0).css('background','#B09219').siblings().css('background','#fff');
		$('.col-img').css('display','block');
	})

	$('.tab ul li').eq(1).click(function(){
		$('.col-img').eq(1).show();
		$('.col-img').eq(2).show();
		$('.col-img').eq(3).show();
		$('.col-img').eq(4).hide();
		$('.col-img').eq(5).hide();
		$('.col-img').eq(0).hide();
		$('.tab ul li').eq(1).css('background','#B09219').siblings().css('background','#fff');

	})

	$('.tab ul li').eq(2).click(function(){
		$('.tab ul li').eq(2).css('background','#B09219').siblings().css('background','#fff');
		$('.col-img').eq(4).show();
		$('.col-img').eq(5).show();
		$('.col-img').eq(0).hide()
		$('.col-img').eq(1).hide()
		$('.col-img').eq(2).hide()
		$('.col-img').eq(3).hide()
	
	})

	$('.tab ul li').eq(3).click(function(){
		$('.tab ul li').eq(3).css('background','#B09219').siblings().css('background','#fff');
		$('.col-img').eq(4).show().siblings().hide();
	})


	$('.col-content').mouseenter(function(){
			$(this).css('box-shadow','0px 0px 10px #272822').css({'zoom':1.01,"transform":"scale(1.01)"})
		})
		$('.col-content').mouseleave(function(){
			$(this).css('box-shadow','0px 0px 0px #ffffff').css({'zoom':1.01,"transform":"scale(1)"})
		})

	$('.banner-info-fig').click(function(e){
		var index = $(this).index()
		e.preventDefault();
		var href = $('.banner-info-fig a').eq(index).attr('href');
		$('.pic').attr('src',href);
		var src = $('.pic').attr('src');
		$('.body').show('slow');

	})

	$('.pic').click(function(){
		$('.body').hide('slow');
		
	})

	$('.col-img img').mouseenter(function(){
		$(this).css('opacity','0.3')
	})

	$('.col-img img').mouseleave(function(){
		$(this).css('opacity','1')
	})

})