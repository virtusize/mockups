
(function($) {
    $('#ph-scroll-container').tinyscrollbar({trackSize: 375});

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

})(jQuery);
