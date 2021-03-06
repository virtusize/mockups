(function (Raphael) {
    function scalePts(ptsOrig, scale) {
        var pts = {};

        for (var point in ptsOrig) {
            pts[point] = {};
            for (var k in ptsOrig[point]) {
                pts[point][k] = ptsOrig[point][k] * scale;
            }
        }

        return pts;
    }

    function spacePad(inputString) {
        return ' ' + inputString + ' ';
    }

    function svgGetClasses(fragment) {
        return fragment.node.getAttribute('class') || '';
    }

    function svgSetClasses(fragment, classNames) {
        fragment.node.setAttribute('class', classNames);
    }

    function svgHasClass(fragment, className) {
        var currentClasses = svgGetClasses(fragment),
            indexOfClassName = spacePad(currentClasses).indexOf(spacePad(className));

        return indexOfClassName != -1;
    }

    function svgAddClass(fragment, className) {
        if (!svgHasClass(fragment, className)) {
            svgSetClasses(fragment, (svgGetClasses(fragment) + ' ' + className).trim());
        }

        return fragment;
    }

    function svgRemoveClass(fragment, className) {
        if (svgHasClass(fragment, className)) {
            svgSetClasses(fragment, spacePad(svgGetClasses(fragment)).replace(spacePad(className), '').trim());
        }

        return fragment;
    }

    function PathStringBuilder() {
        this.subStrings = [];
    }

    // Extend PathStringBuilder with a set of functions
    (function pathStringBuilderExtender(pathStringBuilderPrototype, pathFunctions) {
        for (var funcName in pathFunctions) {
            pathStringBuilderPrototype[funcName] = pathFunctions[funcName];
        }
    })(PathStringBuilder.prototype, {
        subPath: function (pathCmd, pointList) {
            for (var i = 0; i < pointList.length; i++) {
                pointList[i] = pointList[i].x + ',' + pointList[i].y;
            }
            return pathCmd + pointList.join(',');
        },
        moveTo: function (point) {
            this.subStrings.push(this.subPath('M', [point]));
            return this;
        },
        lineTo: function (point) {
            this.subStrings.push(this.subPath('L', [point]));
            return this;
        },
        quadTo: function (ctrl, point) {
            this.subStrings.push(this.subPath('Q', [ctrl, point]));
            return this;
        },
        close: function () {
            this.subStrings.push('Z');
            return this;
        },
        finalize: function() {
            return this.subStrings.join('');
        }
    });

    function flipX(point) {
        return {x: -point.x, y: point.y};
    }

    function pantiesOutlinePathString(pts) {
        return new PathStringBuilder()
            .moveTo(pts.p1)
            .quadTo(pts.c1A, pts.p2)
            .quadTo(pts.c2B, pts.p3)
            .lineTo(pts.p4)
            .lineTo(flipX(pts.p4))
            .lineTo(flipX(pts.p3))
            .quadTo(flipX(pts.c2B), flipX(pts.p2))
            .quadTo(flipX(pts.c1A), flipX(pts.p1))
            .close()
            .finalize();
    }

    function pantiesDetailsPathString(pts) {
        return new PathStringBuilder()
            .moveTo(pts.p1)
            .quadTo(pts.c1F, pts.p2)
            .moveTo(flipX(pts.p1))
            .quadTo(flipX(pts.c1F), flipX(pts.p2))

            .moveTo(pts.p5)
            .quadTo(pts.c5H, pts.p6)
            .quadTo(pts.c6I, pts.p7)
            .quadTo(pts.c7J, pts.p5)
            .quadTo(flipX(pts.c5H), flipX(pts.p6))
            .quadTo(flipX(pts.c6I), flipX(pts.p7))
            .quadTo(flipX(pts.c7J), pts.p5)

            .quadTo(pts.c5K, pts.p8)
            .quadTo(pts.c8L, pts.p9)
            .quadTo(pts.c9M, pts.p5)
            .quadTo(flipX(pts.c5K), flipX(pts.p8))
            .quadTo(flipX(pts.c8L), flipX(pts.p9))
            .quadTo(flipX(pts.c9M), pts.p5)
            .finalize()
    }

    function pantiesGroup(paper, pts, hasDetails, uniqueClass) {
        paper.setStart();

        var outline = paper.path(pantiesOutlinePathString(pts));

        if (hasDetails) {
            var details = paper.path(pantiesDetailsPathString(pts)),
                detailCircle = paper.circle(pts.p5.x, pts.p5.y, pts.s1.s);
        }

        if (Raphael.type == 'SVG') {
            // Only edit classes for SVG, will break VML rendering
            svgAddClass(outline, 'item outline ' + uniqueClass);

            if (hasDetails) {
                svgAddClass(details, 'item details ' + uniqueClass);
                svgAddClass(detailCircle, 'item details fill ' + uniqueClass);
            }

            setupHoverSVG(outline);
        } else {
            // In a real case, style values should be parsed from CSS
            var styles = {
                    'no1': {
                        'fill': '#b3d9b3', // Opaque version of rgba(0,128,0,0.3) on white bg
//                        'fill': '#007700',
                        'opacity': '1.0',
                        'stroke': '#00aa00',
                        'outline-sw': '4',
                        'details-sw': '2'
                    },
                    'no2': {
//                        'fill': '#d9b3b3', // Opaque version of rgba(128,0,0,0.3) on white bg
                        'fill': '#770000',
                        'opacity': '0.3',
                        'stroke': '#aa0000',
                        'outline-sw': '4',
                        'details-sw': '2'
                    }
                };

            if (styles[uniqueClass]['opacity'] == '1.0') {
                outline.attr({
                    'fill': styles[uniqueClass]['fill'],
                    'stroke': styles[uniqueClass]['stroke'],
                    'stroke-width': styles[uniqueClass]['outline-sw']
                });

                setupHoverVML(outline, outline, styles[uniqueClass]['outline-sw']);
            } else {
                var outlineStroke = outline.clone();

                outline.attr({
                    'fill': styles[uniqueClass]['fill'],
                    'opacity': styles[uniqueClass]['opacity']
                });
                outlineStroke.attr({
                    'stroke': styles[uniqueClass]['stroke'],
                    'stroke-width': styles[uniqueClass]['outline-sw']
                });

                setupHoverVML(outline, outlineStroke, styles[uniqueClass]['outline-sw']);
            }

            if (hasDetails) {
                details.attr({
                    'stroke': styles[uniqueClass]['stroke'],
                    'stroke-width': styles[uniqueClass]['details-sw']
                });
                detailCircle.attr({
                    'fill': styles[uniqueClass]['fill'],
                    'stroke': styles[uniqueClass]['stroke'],
                    'stroke-width': styles[uniqueClass]['details-sw']
                });
            }
        }

        return paper.setFinish();
    }

    function setupHoverSVG(fragment) {
       fragment.hover(
            function () {
                svgAddClass(this, 'fat-stroke');
            },
            function () {
                svgRemoveClass(this, 'fat-stroke');
            }
        );
    }

    function setupHoverVML(triggerFragment, targetFragment, strokeWidth) {
        triggerFragment.hover(
            function () {
                targetFragment.attr({
                    'stroke-width': strokeWidth * 2
                });
            },
            function () {
                targetFragment.attr({
                    'stroke-width': strokeWidth
                });
            }
        );
    }

    function setupClick(fragment, fragmentToPlaceAfter) {
        fragment.click(
            function () {
                this.insertBefore(fragmentToPlaceAfter);
            }
        );
    }

    var paperW = 600,
        paperH = 600,
        paper = Raphael('canvas', paperW, paperH),
        scaleFactor = 0.9,
        scaleFactor2 = 1.3,
        theMatrix = new Raphael.matrix(),
        theMatrix2,
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
        pts2 = scalePts(pts, scaleFactor2),
        panties1 = pantiesGroup(paper, pts, true, 'no1'),
        panties2 = pantiesGroup(paper, pts2, false, 'no2');

    theMatrix.translate(paperW/2, paperH/2);
    theMatrix.scale(scaleFactor);
    theMatrix2 = theMatrix.clone();
    theMatrix2.translate(0, 37);

    panties1.transform(theMatrix.toTransformString());
    panties2.transform(theMatrix2.toTransformString());

    setupClick(panties1, panties2);
    setupClick(panties2, panties1);

    // For the text rendering script, so it doesn't create another SVG/VML element
    window.raphaelData = {
        paper: paper,
        theMatrix: theMatrix,
        isSVG: Raphael.type == 'SVG'
    };
})(window.Raphael.ninja());
