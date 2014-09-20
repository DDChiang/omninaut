$(document).ready(function() {
	$("#slideout_menu_icon").click(function() { //only works on first one it finds
	  $(".home-navbar").slideToggle("medium", function() {  
	    $(window).resize(function(){  
		  var w = $(window).width();  
		 
			$(".home-navbar").removeAttr('style'); 
		  
	    });
      });
    });
 
  
   

});




	
$(window).resize(evalToggle);	
evalToggle();
  
$(window).resize(function () { 
    if ($(window).width() <500 ) {
	
      $(".linker").click(function() { //only works on first one it finds
	    $(".home-navbar").slideToggle("medium", function() {  
	       
		});
      });
	
	
    };
  });