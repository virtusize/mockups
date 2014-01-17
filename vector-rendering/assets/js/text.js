(function (window, document, Snap, raphaelData) {
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

    function renderTextRaphael() {
        /**
         * Forcefully set a class and delete some default properties
         * that prevent CSS styles to work
         */
        function prepareTextSVG(textFragment) {
            textFragment.node.setAttribute('class', 'text');
            textFragment.node.removeAttribute('font');
            textFragment.node.removeAttribute('text-anchor');
            textFragment.node.removeAttribute('style');
        }

        var paper = raphaelData.paper,
            rawTextSimple = 'Simple: Just plain English, no surprises',
            rawTextFancy = 'Fancy: Ö, en älg [sv], Moż się waćpoł [pl], このアイテムを追加 [ja]',
            textSimple = paper.text(0, -275, rawTextSimple),
            textFancy = paper.text(0, -225, rawTextFancy),
            textFancy2 = paper.text(0, -175, rawTextFancy.replace('Fancy', 'Fancy (CS)')),
            allTextStuff = paper.set();

        allTextStuff.push(textSimple, textFancy, textFancy2);
        allTextStuff.transform(raphaelData.theMatrix.toTransformString());

        if (raphaelData.isSVG) {
            allTextStuff.forEach(prepareTextSVG);
        } else {
            // In a real case, style values should be parsed from CSS
            var styles = {
                    'font-family': '"Times"', // only locally fonts available, unless using Cufón
                    'font-size': '17px',
                    'text-anchor': 'middle' // start | middle | end
                };

            allTextStuff.attr({
                'font-family': styles['font-family'],
                'font-size': styles['font-size'],
                'text-anchor': styles['text-anchor']
            });

            textFancy2.attr({
                'font-family': '"Comic Sans MS", ' + styles['font-family']
            });
        }
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
    window.renderTextRaphael = renderTextRaphael;
    window.loadWebFonts = loadWebFonts;

})(window, window.document, window.Snap, window.raphaelData);
