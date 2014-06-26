/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
  // Avoid following the href location when clicking
  event.preventDefault();
  // Avoid having the menu to close when clicking
  event.stopPropagation();
  // Toggle menu.
  if ($(this).parent().hasClass('open'))
    $(this).parent().removeClass('open');
  else
    $(this).parent().addClass('open');
  // If children are open, close them.
  $(this).children().removeClass('open');
  // If a sibling menu is already open we close it
  $(this).parent().siblings().removeClass('open').children().removeClass('open');
  $(this).siblings().children().removeClass('open');
  
  var menu = $(this).parent().find("ul");
  var menupos = menu.offset();
  
  if (menupos.left + menu.width() > $(window).width()) {
    var newpos = -$(menu).width();
    menu.css({ left: newpos });
  } else {
    var newpos = $(this).parent().width();
    menu.css({ left: newpos });
  }
});

 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}(jQuery));

$('.bg-1,.bg-3').parallax({
	speed :	0.15
});

$('.bg-2').parallax({
	speed :	0.25
});
