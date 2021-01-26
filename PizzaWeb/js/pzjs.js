$( document ).ready(function() {
//AOS.init();

setInterval(function(){
let sliceHeight = $('#online-order').outerHeight()-150;
	$('.order-slice').css({
		'marginTop' : `${sliceHeight}px`
	})
},100)

setInterval(function(){
let menusliceHeight = $('#online-menu').outerHeight()-150;
	$('.menu-slice').css({
		'marginTop' : `${menusliceHeight}px`
	})
},100)
$('#pasti').click(function(e){
	  	e.preventDefault();
	  	console.log('antipasto');
	  	 $('#pizzas').hide();
	  	 $('#antipasti').show();
	  });
	   $('#pizza').click(function(e){
	   		e.preventDefault();
	   	console.log('pizza');
	  	  $('#pizzas').show();
	  	 $('#antipasti').hide();
	  })
  // Handler for .ready() called.
  let status=0;
  $('.navbar-toggler').click(function(){
  	 status++;
  	if(status == 1){
  		$(this).removeClass('navbar-toggler-anim2');
  		$(this).addClass('navbar-toggler-anim');
	  	$('.navbar-toggler-icon').css({
	  		'display' : 'none'
	  	})
	  	$('.navbar-toggler-x').css({
	  		'display' : 'block'
	  	})
	  }
	 if(status == 2){
	 	$(this).removeClass('navbar-toggler-anim');
	 	$(this).addClass('navbar-toggler-anim2');
	  	$('.navbar-toggler-icon').css({
	  		'display' : 'block'
	  	})
	  	$('.navbar-toggler-x').css({
	  		'display' : 'none'
	  	})

	  	status = 0;
	 }
  })

  $('#gal-this').click(function(){
  	$('#gal-btn').addClass('gal-this-anim');	
  },function(){
  	$( "#gal-con" ).slideUp( 300, function() {
    $('#gal-con').remove();
  });
  
  })
 

	  
	$(window).scroll(function () {
		
	   	let scroll = $(window).scrollTop();
	   	 let allpage = $('.allpage');

	  	allpage.each(function(){
	  	if($(window).scrollTop()>=($(this).offset().top- $(this).outerHeight()-450)){
	  		$(this).addClass('pageanim');
	  	}
	  	else{	
	  		$(this).removeClass('pageanim');
	  	}
	  })

	  	
	  if($(window).scrollTop()>=($('#pizza-offer').offset().top- $('#pizza-offer').outerHeight()-150)){
	  		$('#pizza-offer').animate({
	  			overflow: 'hidden',
				marginTop: '350px',
				width: '320px',
				height: '320px',
				border: '10px solid #ffffff', 
				color: '#ffffff',
				marginBottom: '120px',	
	  		},1000)
	  	}
	  	
	  	if($(window).scrollTop()>($('#pizza-offer2').offset().top- $('#pizza-offer2').outerHeight()-150) ){
	  		
	  		$('#pizza-offer2').animate({
	  			overflow: 'hidden',
				marginTop: '120px',
				width: '350px',
				height: '350px',
				border: '10px solid #ffffff', 
				color: '#ffffff',
				transform: 'rotate(40deg)',
				position: 'relative'
				
	  		},1000)
	  		
	  	}
	  	
	  	


	  	/*/ let story = $('#story').offset().top;
	  	let outerheight = $('#story').outerHeight() ;
	  	console.log(story)
	    if(scroll > (story-outerheight) ){
	    	
	    	console.log("hits")
	    	 $("#story").children().addClass('pageanim');
	    }else{
	    	$("#story").removeClass('pageanim');
	    }*/
	});
	   

	  $('#specialreq').click(function(){
	  	$('#textthis').show();
	  	 setTimeout(function(){
	  	 	 $('#specialreq').css({
	  	 	 	'display': 'none'
	  	 	 });
	  	 },100)
	  });

	  

	  

});