
(function($) {

    // Underscore setting
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    var $button = $(".button"),
        $overlay = $("#virtusize-overlay-wrapper"),
        $widget = $(".widget"),
        $view = $widget.find(".view"),

        first = true,

        get_tmpl = function(id) {
            return _.template($("#" + id).html())();
        };

    $button.on("click", function(e) {
        e.preventDefault();
        $overlay.show();

        if (first) {
            $view.html(get_tmpl("tmpl-compare-first"));
            first = false;
        }
    });

    $widget.find(".close").on("click", function(e) {
        e.preventDefault();
        $overlay.hide();
    });

})(jQuery);
