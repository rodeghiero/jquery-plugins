(function($) {
jQuery.fn.extend({
  navtabs: function (options) {
		// Establish our default settings
	    var settings = $.extend({
	        paneldiv   	: '.list-wrap',
	        overClass   : 'current',
	        elementc   	: 'a',
	        hashnav 	: true,
	        onComplete     : null
	    }, options);

	    return this.each( function() {
		    $this = $(this);
		    $this.find(settings.elementc).click(function(e){
		    	e.preventDefault();
			    var $tab = $(this);
			    var tabdata = $tab.data('tab');
				$this.parent().find(settings.paneldiv+' > div').hide();
			    $this.parent().find('#'+tabdata).fadeIn();
			    $this.find(settings.elementc).removeClass(settings.overClass);
			    $tab.addClass(settings.overClass);
			});

			if ( settings.hashnav ) {
				var hash = window.location.hash;
				var $a = jQuery('a[href=' + hash + ']');

				if($a.length>0){
					$a.click();
				}
			}

			if ( $.isFunction( settings.onComplete ) ) {
			        settings.onComplete.call( this );
			}

		});
	}
});
}(jQuery));
