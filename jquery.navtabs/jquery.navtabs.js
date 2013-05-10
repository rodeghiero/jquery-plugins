(function($) {
jQuery.fn.extend({
    navtabs: function (options) {

        // Establish our default settings user
        var settings = $.extend({
            paneldiv   : '.tabs',
            overClass  : 'active',
            elementc   : 'a',
            effect     : 'slide',
            timerClose : '380',
            timerOpen  : '600',
            delay      : '320',
            hashnav    : true,
            onComplete : null
        }, defaults, options);

        // Actions
        return this.each( function() {

            $this = $(this);
            $this.find(settings.elementc).click( function(e) {
                e.preventDefault();
                var $lnk = $(this);
                var tabActive = $lnk.attr('href');

                //this is active?
                if( !$lnk.is('.active') ){
                    $boxClose = $this.parent().find(settings.paneldiv+' > div');
                    $boxOpen = $this.parent().find(tabActive);

                    if(settings.effect === 'fade'){
                        $boxClose.fadeOut(settings.timerClose);
                        $boxOpen.delay(settings.delay).fadeIn(settings.timerOpen);
                    }else if(settings.effect === 'transition'){
                        //
                    }else{
                        $boxClose.slideUp(settings.timerClose);
                        $boxOpen.delay(settings.delay).slideDown(settings.timerOpen);
                    }

                    $this.find(settings.elementc).removeClass(settings.overClass);
                    $lnk.addClass(settings.overClass);
                }

            });

            // Navigation for URL
            if( settings.hashnav ) {
                var hash = window.location.hash;
                var $a = jQuery('a[href=' + hash + ']');
                if($a.length>0){
                    $a.click();
                }
            }

            // Action Complete Load
            if ( $.isFunction( settings.onComplete ) ) {
                settings.onComplete.call( this );
            }

        });
    }
});
}(jQuery));
