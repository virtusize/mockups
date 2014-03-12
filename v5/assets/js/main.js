
(function($) {

    /**
     * Start/Wardrobe
     */
    setTimeout(function(){
        $('#ph-scroll-container').tinyscrollbar({trackSize: 375});
    }, 0);

    //Product compare component
    $('.comparison .store .overlay').on('mouseenter', function(){
        $('.compare-symbol').addClass('js-hover')
    });
    $('.comparison .store .overlay').on('mouseleave', function(){
        $('.compare-symbol').removeClass('js-hover')
    });
    $('.comparison .compare-symbol').on('mouseenter', function(){
        $('.store .overlay').addClass('js-hover')
    });
    $('.comparison .compare-symbol').on('mouseleave', function(){
        $('.store .overlay').removeClass('js-hover')
    });

    /**
     * Wardrobe
     */
    $('.type-dropdown.dropdown .dropdown-toggle').one('click', function(){
        setTimeout(function(){
            $('#wardrobe-dropdown-scroll-container').tinyscrollbar();
        }, 0);
    });

    /* Compare */
    $('.left .product-component .dropdown .dropdown-toggle').one('mouseenter', function(){
        setTimeout(function(){
            $('#product-pane-size-dropdown-scroll-container').tinyscrollbar();
        }, 220);
    });
    $('.right .product-component .dropdown .dropdown-toggle').one('mouseenter', function(){
        setTimeout(function(){
            $('#product-pane-item-dropdown-scroll-container').tinyscrollbar();
        }, 220);
    });



})(jQuery);
