$('#product-list').waterfall({
    itemCls: 'item',
    colWidth: 222,
    gutterWidth: 15,
    gutterHeight: 15,
    maxPage: 5,
    checkImagesLoaded: false,
    callbacks: {

        loadingFinished: function($loading, isBeyondMaxPage) {
            if ( !isBeyondMaxPage ) {
                $loading.fadeOut();
            } else {
                $loading.hide();
                $('#page-navigation').show();
            }
        },
        renderData: function (data, dataType) {
            var tpl,
                template,
                resultNum = data.total;

            if ( resultNum < 20) {
                $('#container').waterfall('pause', function() {
                    $('#waterfall-message').html('<p style="color:#666;">no more data...</p>');
                    //alert('no more data');
                });
            }

            if ( dataType === 'json' ||  dataType === 'jsonp'  ) { // json or jsonp format
                tpl = $('#waterfall-tpl').html();
                template = Handlebars.compile(tpl);

                return template(data);
            } else { // html format
                return data;
            }
        }
    },
    path: function(page) {
        return 'data/data.json';
    }
});

$('#scrollbar1').tinyscrollbar({
    scrollInvert  : true
});

$('.offcanvas-toggle').on('click', function () {
    $('#filter-nav').addClass('open');
});
$('.navmenu-close').on('click', function () {
    $('#filter-nav').removeClass('open');
});

function setMenuHeight () {
    $('.navbar-fixed-bottom .navbar-collapse').css('max-height', window.innerHeight - $('.js-navbar-bottom').height());
}

$(window).resize(function () {
    setMenuHeight();
});

setMenuHeight();

