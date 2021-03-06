(function (Snap) {
    function spacePad(inputString) {
        return ' ' + inputString + ' ';
    }

    function svgGetClasses(fragment) {
        return fragment.attr('class') || '';
    }

    function svgSetClasses(fragment, classNames) {
        return fragment.attr({'class': classNames});
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

    function pantiesMaskGroup(paper, pts, scaledStrokeWidth, outlinePath) {
        var bBox = outlinePath.getBBox(),
            colorPass = '#fff',
            colorBlock = '#000',
            maskRect = paper.rect(bBox.x, bBox.y, bBox.w, bBox.h).attr({
                fill: colorPass
            }),
            maskCirc = paper.circle(pts.p5.x, pts.p5.y, pts.s1.s).attr({
                fill: colorBlock,
                stroke: colorBlock,
                strokeWidth: scaledStrokeWidth
            });

        return paper.group(maskRect, maskCirc);
    }

    function getStrokeWidth(fragment) {
        return fragment.attr('stroke-width');
    }

    function descaleStrokeWidth(fragment, scaleFactor) {
        var descaledStrokeWidth = getStrokeWidth(fragment) / scaleFactor;

        fragment.attr({'stroke-width': descaledStrokeWidth});
    }

    function pantiesGroup(paper, pts, scaleFactor, uniqueClass) {
        var outline = paper.path(pantiesOutlinePathString(pts)),
            details = paper.path(pantiesDetailsPathString(pts)),
            detailCircle = paper.circle(pts.p5.x, pts.p5.y, pts.s1.s),
            mainGroup = paper.group(outline),
            detailsGroup = mainGroup.group(details, detailCircle);

        svgAddClass(mainGroup, 'item ' + uniqueClass);
        svgAddClass(outline, 'outline');
        svgAddClass(detailsGroup, 'details');

        descaleStrokeWidth(outline, scaleFactor);
        descaleStrokeWidth(detailsGroup, scaleFactor);

        details.attr({
            mask: pantiesMaskGroup(paper, pts, getStrokeWidth(detailsGroup) / scaleFactor, outline)
        });

        return mainGroup;
    }

    function setupHoverClick(fragment, fragmentToPlaceAfter) {
        fragment.hover(
            function () {
                svgAddClass(this, 'dashy');
            },
            function () {
                svgRemoveClass(this, 'dashy');
            }
        );

        fragment.click(
            function () {
                this.after(fragmentToPlaceAfter);
            }
        );
    }

    /*
    * The SVG view box center point should be computed using the bounding box
    */
    var paper = Snap('svg.demo'),
        svgCX = parseInt(paper.attr('width')) / 2,
        svgCY = parseInt(paper.attr('height')) / 2,
        scaleFactor = 0.9,
        scaleFactor2 = 1.2,
        theMatrix = new Snap.Matrix().translate(svgCX, svgCY).scale(scaleFactor),
        theMatrix2 = new Snap.Matrix().translate(0, 25).scale(scaleFactor2),
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
        panties1 = pantiesGroup(paper, pts, scaleFactor, 'no1'),
        panties2 = pantiesGroup(paper, pts, scaleFactor * scaleFactor2, 'no2').transform(theMatrix2),
        allShapes = paper.group(panties1, panties2);

    allShapes.transform(theMatrix);

    setupHoverClick(panties1, panties2);
    setupHoverClick(panties2, panties1);
})(window.Snap);
