
(function($) {

    var $button = $(".button"),
        $overlay = $("#virtusize-overlay-wrapper"),
        $widget = $(".widget"),
        $view = $widget.find(".view"),

        itemList = [],

        get_tmpl = function(id, data) {
            return _.template($("#" + id).html())(data);
        },
        get_compare = function($view) {
            $view.html(get_tmpl("tmpl-compare", {products: itemList}));
            if (!itemList.length) {
                $view.find(".compare").addClass("intro");
            }
        };

    $button.on("click", function(e) {
        $overlay.show();
        get_compare($view);
    });

    $widget.find(".close").on("click", function(e) {
        $overlay.hide();
    });


    /* ---- VIEW SPECIFIC ---- */

    $(document)

        // Compare

        .on("click", ".compare.intro #continue", function(e) {
            $view.html(get_tmpl("tmpl-purchase-history"));
        })

        .on("click", ".compare #notice", function(e) {
            $(this).hide();
        })

        .on("click", ".compare .btn-pill", function(e) {
            var $this = $(this),
                $left = $(".compare .left"),
                size = $this.data("size"),
                url = (!itemList.length) ? "-intro" : "",
                path = "url('assets/img/compare%u-%s.png')".replace("%s", size).replace("%u", url);

            $(".compare .size-item.checked").removeClass("checked");
            $this.parent().addClass("checked");
            $left
                .fadeOut(300, function() {
                    $left.css("background-image", path);
                })
                .fadeIn();
        })


        // Purchase history

        .on("click", ".ph #button", function(e) {
            $(".ph .select.on").each(function() {
                itemList.push($(this).data("name"));
            });
            get_compare($view);
        })

        .on("click", ".ph .select", function(e) {
            $(this).toggleClass("on");
            $(".ph #button").toggleClass("active", $(".ph .select.on").length > 0);
        });

})(jQuery);
