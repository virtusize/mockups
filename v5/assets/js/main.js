
(function($) {

    /**
     * Start/Wardrobe
     */
    setTimeout(function(){
        $('#ph-scroll-container').tinyscrollbar({trackSize: 375});
    }, 0);

    //Product compare component
    $('.store .overlay').on('mouseenter', function(){
        $('.compare-symbol').addClass('js-hover')
    });
    $('.store .overlay').on('mouseleave', function(){
        $('.compare-symbol').removeClass('js-hover')
    });
    $('.compare-symbol').on('mouseenter', function(){
        $('.store .overlay').addClass('js-hover')
    });
    $('.compare-symbol').on('mouseleave', function(){
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

})(jQuery);
