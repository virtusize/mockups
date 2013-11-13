
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
        $overlay.show();

        if (first) {
            // Compare w/o garment
            $view.html(get_tmpl("tmpl-compare-first"));
            first = false;
        }
        else {
            // Compare w/ garment
        }
    });

    $widget.find(".close").on("click", function(e) {
        $overlay.hide();
    });


    /* ---- VIEW SPECIFIC ---- */

    $(document)

        // Compare, w/o garment

        .on("click", ".compare #continue", function(e) {
            $view.html(get_tmpl("tmpl-purchase-history"));
        })


        // Purchase history

        .on("click", ".ph #button", function(e) {
            if ($(this).hasClass("active")) {
                alert("next!");
            }
            else {
                $view.html(get_tmpl("tmpl-compare-first"));
            }
        })

        .on("click", ".ph .select", function(e) {
            $(this).toggleClass("on");
            $(".ph #button").toggleClass("active", $(".ph .select.on").length > 0);
        });

})(jQuery);
