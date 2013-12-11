(function (window, _, Snap) {
    function pathSubString(pathCmd, pointList) {
        for (var i = 0; i < pointList.length; i++) {
            pointList[i] = pointList[i].x + ',' + pointList[i].y;
        }

        return pathCmd + pointList.join(',');
    }

    function flipX(point) {
        return {x: -point.x, y: point.y};
    }

    function moveTo(point) {
        return pathSubString('M', [point]);
    }

    function lineTo(point) {
        return pathSubString('L', [point]);
    }

    function quadTo(ctrl, point) {
        return pathSubString('Q', [ctrl, point]);
    }

    function pantiesOutlinePathString(pts) {
        var pathStringList = [
                moveTo(pts.p1),
                quadTo(pts.c1A, pts.p2),
                quadTo(pts.c2B, pts.p3),
                lineTo(pts.p4),
                lineTo(flipX(pts.p4)),
                lineTo(flipX(pts.p3)),
                quadTo(flipX(pts.c2B), flipX(pts.p2)),
                quadTo(flipX(pts.c1A), flipX(pts.p1)),
                'Z'
            ];

        return pathStringList.join('');
    }

    function pantiesDetailsPathString(pts) {
        var pathStringList = [
                moveTo(pts.p1),
                quadTo(pts.c1F, pts.p2),
                moveTo(flipX(pts.p1)),
                quadTo(flipX(pts.c1F), flipX(pts.p2)),

                moveTo(pts.p5),
                quadTo(pts.c5H, pts.p6),
                quadTo(pts.c6I, pts.p7),
                quadTo(pts.c7J, pts.p5),
                quadTo(flipX(pts.c5H), flipX(pts.p6)),
                quadTo(flipX(pts.c6I), flipX(pts.p7)),
                quadTo(flipX(pts.c7J), pts.p5),

                quadTo(pts.c5K, pts.p8),
                quadTo(pts.c8L, pts.p9),
                quadTo(pts.c9M, pts.p5),
                quadTo(flipX(pts.c5K), flipX(pts.p8)),
                quadTo(flipX(pts.c8L), flipX(pts.p9)),
                quadTo(flipX(pts.c9M), pts.p5)
            ];

        return pathStringList.join('');
    }

    /*
    * The SVG view box center point should be computed using the bounding box
    */
    var paper = Snap('svg.demo'),
        svgCX = parseInt(paper.attr('width')) / 2,
        svgCY = parseInt(paper.attr('height')) / 2,
        scaleFactor = 0.9,
        theMatrix = new Snap.Matrix().translate(svgCX, svgCY).scale(scaleFactor),
        pts = {
            p1: {x: 17.5, y: 125},
            p2: {x: 192.5, y: -32.5},
            p3: {x: 175, y: -105},
            p4: {x: 175, y: -125},
            p5: {x: 0, y: -105},
            p6: {x: 40, y: -90},
            p7: {x: 40, y: -120},
            p8: {x: 6.262789543202945, y: -60.43793690662933},
            p9: {x: 19.999999999999996, y: -70.35898384862244},
            c1A: {x: 70, y: 14.75},
            c1F: {x: 26.25, y: -24.625},
            c2B: {x: 175, y: -83.25},
            c5H: {x: 12, y: -94.5},
            c6I: {x: 48, y: -105},
            c7J: {x: 12, y: -115.5},
            c5K: {x: 5.010231634562356, y: -96.08758738132587},
            c8L: {x: 11.757673725921766, y: -66.3905650718252},
            c9M: {x: 11.999999999999996, y: -91.14359353944897},
            s1: {s: 13}
        },
        panties1Outline = paper.path(pantiesOutlinePathString(pts)),
        panties1Details = paper.path(pantiesDetailsPathString(pts)),
        panties1DetailCircle = paper.circle(pts.p5.x, pts.p5.y, pts.s1.s),
//        panties1ClipCircle = paper.circle(pts.p5.x, pts.p5.y, pts.s1.s),
        panties1 = paper.group(panties1Outline),
        panties1DetailGroup = panties1.group(panties1Details, panties1DetailCircle),
        allShapes = paper.group(panties1);

    allShapes.transform(theMatrix);

    panties1.attr({
        fill: 'none',
        stroke: '#00aa00'
    });

    panties1Outline.attr({
        strokeWidth: 4 / scaleFactor
    });

    panties1DetailGroup.attr({
        strokeWidth: 2 / scaleFactor
    });

    // Oddly, this makes *all* details go away, even inside circle. Coordinate mismatch?
//    panties1Details.attr({
//        mask: panties1ClipCircle
//    });
})(window, window._, window.Snap);
