/* show and hide menu*/


$(document).ready(function(){

	

	'use strict';

	// menu elrejtese ha top on van az oldal

	$(window).scroll(function() {

		
    if($(this).scrollTop()<80){
      
      
    	 
    


      //figyelni erre a kib*szott sintaxra mert szar az anyag
	$(".navbar").css("margin-top", "-100px");
	$(".navbar").css("opacity", "0");
	

	 $(".navbar-default").css("background-color", "rgba(59,59,59,0)");


    } 

   



    else{




    $(".navbar").css("margin-top", "0px");
	$(".navbar").css("opacity", "1");
	
	$(".navbar-default").css("background-color", "rgba(59,59,59,0.7)");
	$(".navbar-default").css("border-color", "#444");


	$(".navbar-brand img").css("height", "35px");
	$(".navbar-brand img").css("padding-top", "0px");


	$(".navbar-nav > li > a").css("padding-top", "15px");
    }





	});

	


//Smooth scrolling bar.

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


});



  // Menu item aktiválás onclick

  $(document).ready(function(){

  	'use strict';



  	$(".navbar-nav li a").click(function(){
  		
  		'use strict';

  		$(".navbar-nav li a").parent().removeClass("active");

  		$(this).parent().addClass("active");


  	});


  });


  //highlight menu item onscroll


  $(document).ready(function(){


  	'use strict';

  	$(window).scroll(function(){

  		'use strict';

  		$("section").each(function(){

  			'use strict';

  			var bb = $(this).attr("id");  //about, contact, download  features
  			var hei = $(this).outerHeight(); // border és pannding et ad viszza
  			var grttop =$(this).offset().top -70;


  			if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {

  			
  			$(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");

  				


  			} else {

  				
  				$(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
  			


  			}


  		});


  	});


  });
    


    
// auto padding header

$(document).ready(function(){


	'use strict'

	setInterval( function(){

		'use strict';

		var windowheight = $(window).height();
		var containerheight = $(".header-container").height();

		var padtop = windowheight - containerheight;

		$(".header-container").css({ 

			'padding-top': Math.round(padTop / 2) + 'px',
			'padding-bottom': Math.round(padTop / 2) + 'px',

		});



	},10)

});


//https://bxslider.com/

// bx slider screens

$(document).ready(function(){



$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600,
    auto:true,
    speed: 500
  });
});



});


//add counter


$(document).ready(function(){


$('.counter-num').counterUp({
    delay: 10,
    time: 2000
});




});


// add animation 



$(document).ready(function(){

	new WOW().init();




});