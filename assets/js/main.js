
(function($) {

    // Underscore setting
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    var $button = $(".button"),
        $overlay = $("#virtusize-overlay-wrapper"),
        $widget = $(".widget");

    $button.on("click", function(e) {
        e.preventDefault();
        $overlay.show();
    });

    $widget.find(".close").on("click", function(e) {
        e.preventDefault();
        $overlay.hide();
    });

})(jQuery);
