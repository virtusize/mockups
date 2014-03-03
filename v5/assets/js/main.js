
(function($) {
    $('#ph-scroll-container').tinyscrollbar({trackSize: 375});

    //Krisses
//    $('.vs-content').hide()
    $('.vs-container').hover(
        // Over
        function(){
            $('.vs-content').fadeIn(300);
        }
        ,
        // Out
        function(){
            $('.vs-content').fadeOut(200);
        }
    );

    function textMeasurements(){
        var textchange2 = "MEASUREMENTS" ;
        var id = document.getElementById("action-txt");
        id.innerHTML=textchange2;
    }

    function textEdit(){
        var textchange2 = "EDIT" ;
        var id = document.getElementById("action-txt");
        id.innerHTML=textchange2;
    }

    function textDelete(){
        var textchange2 = "REMOVE" ;
        var id = document.getElementById("action-txt");
        id.innerHTML=textchange2;
    }

    function textOut(){
        var textchange2 = " " ;
        var id = document.getElementById("action-txt");
        id.innerHTML=textchange2;
    }

    $('.vs-circle.js-measure').on('mouseenter', textMeasurements);
    $('.vs-circle.js-edit').on('mouseenter', textEdit);
    $('.vs-circle.js-delete').on('mouseenter', textDelete);
    $('.vs-circle').on('mouseleave', textOut);

})(jQuery);
