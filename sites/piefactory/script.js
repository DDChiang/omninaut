$(document).ready(function() {
	var $window = $(window);
	var w = $window.width();
	
	function navToggle() {
	  $("#slideout_menu_icon, .linker").click(function() { //only works on first one it finds
	    $(".home-navbar").slideToggle("medium", function() {  
	      $(window).resize(function(){  
		    var w = $(window).width();  
		 
			$(".home-navbar").removeAttr('style'); 
		  
	      });
        });
      });
	};
	
	if ( w  < 590) {
	  navToggle();
    }

});


$(window).resize(function () { 
    if ($(window).width() < 590 ) {
	  setToken();
	
    }
	
	else {
	 clearToken();
	}
  });