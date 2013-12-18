(function (window, document, Snap) {
    function renderText() {
        var paper = Snap('svg.demo'),
            paperCX = parseInt(paper.attr('width')) / 2,
            paperCY = parseInt(paper.attr('height')) / 2,
            theMatrix = new Snap.Matrix().translate(paperCX, paperCY),
            rawTextSimple = 'Simple: Just plain English, no surprises',
            rawTextFancy = 'Fancy: Ö, en älg [sv], Moż się waćpoł [pl], このアイテムを追加 [ja]',
            textSimple = paper.text(0, -250, rawTextSimple),
            textFancy = paper.text(0, -200, rawTextFancy),
            allTextStuff = paper.group(textSimple, textFancy);

        allTextStuff.transform(theMatrix).attr({
            'class': 'text',
            'text-anchor': 'middle'
        });
    }

    function loadWebFonts(includeExtLatin) {
        var scriptSet = includeExtLatin ? 'latin,latin-ext' : 'latin';

        window.WebFontConfig = {
            google: { families: [ 'Devonshire:400:' + scriptSet ] },
            active: function(){},
            inactive: function(){ alert('Font loading unsuccessful =/'); }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    }

    window.renderText = renderText;
    window.loadWebFonts = loadWebFonts;

})(window, window.document, window.Snap);
