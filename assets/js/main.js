
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

        .on("click", ".compare #notice", function(e) {
            $(this).hide();
        })

        .on("click", ".compare .btn-pill", function(e) {
            var $this = $(this),
                $left = $(".compare .left"),
                size = $this.data("size");

            $(".compare .size-item.checked").removeClass("checked");
            $this.parent().addClass("checked");
            $left
                .fadeOut(300, function() {
                    $left.css("background-image", "url('assets/img/compare-intro-%s.png')".replace("%s", size));
                })
                .fadeIn();
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
