(function (window, _, Snap) {
    function scalePts(pts, scale) {
        var scaledPts = {},
            scaledPoint;

        _.each(pts, function (pointData, pointName) {
            scaledPoint = {};
            _.each(pointData, function (value, key) {
                scaledPoint[key] = scale * value;
            });
            scaledPts[pointName] = scaledPoint;
        });

        return scaledPts;
    }

    function pointToPathString(pathCmd, point, tx, ty, mirrorX) {
        var xCoord = mirrorX ? tx - point.x : tx + point.x,
            yCoord = ty + point.y;

        return pathCmd + xCoord + ',' + yCoord;
    }

    function pantiesPathString(pts, tx, ty) {
        var pathStringArray = [],
            M = 'M',
            L = 'L',
            Z = 'Z';

        pathStringArray.push(pointToPathString(M, pts.p1, tx, ty, false));
        pathStringArray.push(pointToPathString(L, pts.p2, tx, ty, false));
        pathStringArray.push(pointToPathString(L, pts.p3, tx, ty, false));
        pathStringArray.push(pointToPathString(L, pts.p4, tx, ty, false));
        pathStringArray.push(pointToPathString(L, pts.p4, tx, ty, true));
        pathStringArray.push(pointToPathString(L, pts.p3, tx, ty, true));
        pathStringArray.push(pointToPathString(L, pts.p2, tx, ty, true));
        pathStringArray.push(pointToPathString(L, pts.p1, tx, ty, true));
        pathStringArray.push(Z);

        return pathStringArray.join('');
    }

    /*
    * The whole approach of passing the center point of the SVG view port to the
    * rendering is only temporary, until proper coordinate system translation is implemented
    * Also, the center point for the SVG view port should be computed using the bounding box
    */
    var svg = Snap('svg.demo'),
        svgCX = parseInt(svg.attr('width')) / 2,
        svgCY = parseInt(svg.attr('height')) / 2,
        ptsOrig = {
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
        pts = scalePts(ptsOrig, 0.9),
        pantiesShape1 = svg.path(pantiesPathString(pts, svgCX, svgCY));

    pantiesShape1.attr({
        stroke: '#00aa00',
        fill: 'none',
        strokeWidth: 4
    });
})(window, window._, window.Snap);
