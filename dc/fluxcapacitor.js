//var dataRaw = [
//        {date: "12/27/2012", http_404: 2, http_200: 190, http_302: 100},
//        {date: "12/28/2012", http_404: 2, http_200: 10, http_302: 100},
//        {date: "12/29/2012", http_404: 1, http_200: 300, http_302: 200},
//        {date: "12/30/2012", http_404: 2, http_200: 90, http_302: 0},
//        {date: "12/31/2012", http_404: 2, http_200: 90, http_302: 0},
//        {date: "01/01/2013", http_404: 2, http_200: 90, http_302: 0},
//        {date: "01/02/2013", http_404: 1, http_200: 10, http_302: 1},
//        {date: "01/03/2013", http_404: 2, http_200: 90, http_302: 0},
//        {date: "01/04/2013", http_404: 2, http_200: 90, http_302: 0},
//        {date: "01/05/2013", http_404: 2, http_200: 90, http_302: 0},
//        {date: "01/06/2013", http_404: 2, http_200: 200, http_302: 1},
//        {date: "01/07/2013", http_404: 1, http_200: 200, http_302: 100}
//    ]
//var data = melt(dataRaw, ["date"], "status", "hits");
var data = [
    {"quarter":"Q1","hits":0,"date":"01/01/2011"},
    {"quarter":"Q1","hits":0,"date":"01/15/2011"},
    {"quarter":"Q1","hits":0,"date":"02/01/2011"},
    {"quarter":"Q1","hits":0,"date":"02/15/2011"},
    {"quarter":"Q1","hits":0,"date":"03/01/2011"},
    {"quarter":"Q1","hits":0,"date":"03/15/2011"},
    {"quarter":"Q2","hits":0,"date":"04/01/2011"},
    {"quarter":"Q2","hits":0,"date":"04/15/2011"},
    {"quarter":"Q2","hits":0,"date":"05/01/2011"},
    {"quarter":"Q2","hits":0,"date":"05/15/2011"},
    {"quarter":"Q2","hits":0,"date":"06/01/2011"},
    {"quarter":"Q2","hits":0,"date":"06/15/2011"},
    {"quarter":"Q3","hits":0,"date":"07/01/2011"},
    {"quarter":"Q3","hits":0,"date":"07/15/2011"},
    {"quarter":"Q3","hits":0,"date":"08/01/2011"},
    {"quarter":"Q3","hits":0,"date":"08/15/2011"},
    {"quarter":"Q3","hits":0,"date":"09/01/2011"},
    {"quarter":"Q3","hits":0,"date":"09/15/2011"},
    {"quarter":"Q4","hits":12,"date":"10/01/2011"},
    {"quarter":"Q4","hits":13,"date":"10/15/2011"},
    {"quarter":"Q4","hits":16,"date":"11/01/2011"},
    {"quarter":"Q4","hits":15,"date":"11/15/2011"},
    {"quarter":"Q4","hits":12,"date":"12/01/2011"},
    {"quarter":"Q4","hits":10,"date":"12/15/2011"},

    {"quarter":"Q1","hits":25,"date":"01/01/2012"},
    {"quarter":"Q1","hits":27,"date":"01/15/2012"},
    {"quarter":"Q1","hits":28,"date":"02/01/2012"},
    {"quarter":"Q1","hits":26,"date":"02/15/2012"},
    {"quarter":"Q1","hits":29,"date":"03/01/2012"},
    {"quarter":"Q1","hits":24,"date":"03/15/2012"},
    {"quarter":"Q2","hits":36,"date":"04/01/2012"},
    {"quarter":"Q2","hits":33,"date":"04/15/2012"},
    {"quarter":"Q2","hits":35,"date":"05/01/2012"},
    {"quarter":"Q2","hits":35,"date":"05/15/2012"},
    {"quarter":"Q2","hits":39,"date":"06/01/2012"},
    {"quarter":"Q2","hits":34,"date":"06/15/2012"},
    {"quarter":"Q3","hits":41,"date":"07/01/2012"},
    {"quarter":"Q3","hits":45,"date":"07/15/2012"},
    {"quarter":"Q3","hits":40,"date":"08/01/2012"},
    {"quarter":"Q3","hits":42,"date":"08/15/2012"},
    {"quarter":"Q3","hits":47,"date":"09/01/2012"},
    {"quarter":"Q3","hits":43,"date":"09/15/2012"},
    {"quarter":"Q4","hits":55,"date":"10/01/2012"},
    {"quarter":"Q4","hits":57,"date":"10/15/2012"},
    {"quarter":"Q4","hits":54,"date":"11/01/2012"},
    {"quarter":"Q4","hits":53,"date":"11/15/2012"},
    {"quarter":"Q4","hits":51,"date":"12/01/2012"},
    {"quarter":"Q4","hits":50,"date":"12/15/2012"},

    {"quarter":"Q1","hits":32,"date":"01/01/2013"},
    {"quarter":"Q1","hits":36,"date":"01/15/2013"},
    {"quarter":"Q1","hits":34,"date":"02/01/2013"},
    {"quarter":"Q1","hits":31,"date":"02/15/2013"},
    {"quarter":"Q1","hits":33,"date":"03/01/2013"},
    {"quarter":"Q1","hits":36,"date":"03/15/2013"},
    {"quarter":"Q2","hits":45,"date":"04/01/2013"},
    {"quarter":"Q2","hits":40,"date":"04/15/2013"},
    {"quarter":"Q2","hits":42,"date":"05/01/2013"},
    {"quarter":"Q2","hits":49,"date":"05/15/2013"},
    {"quarter":"Q2","hits":44,"date":"06/01/2013"},
    {"quarter":"Q2","hits":42,"date":"06/15/2013"},
    {"quarter":"Q3","hits":58,"date":"07/01/2013"},
    {"quarter":"Q3","hits":53,"date":"07/15/2013"},
    {"quarter":"Q3","hits":58,"date":"08/01/2013"},
    {"quarter":"Q3","hits":52,"date":"08/15/2013"},
    {"quarter":"Q3","hits":54,"date":"09/01/2013"},
    {"quarter":"Q3","hits":58,"date":"09/15/2013"},
    {"quarter":"Q4","hits":65,"date":"10/01/2013"},
    {"quarter":"Q4","hits":63,"date":"10/15/2013"},
    {"quarter":"Q4","hits":66,"date":"11/01/2013"},
    {"quarter":"Q4","hits":64,"date":"11/15/2013"},
    {"quarter":"Q4","hits":68,"date":"12/01/2013"},
    {"quarter":"Q4","hits":63,"date":"12/15/2013"}
];
var parseDate  = d3.time.format("%m/%d/%Y").parse;
var parseDate2 = d3.time.format("%m/%d").parse;
var parseDate3 = d3.time.format("%Y-%m-%d").parse;

//var gData = reduceData(dataGenerator("2013-12-31", "2014-12-31", 7, allValues), 20);
var gData = dataGenerator("2013-12-31", "2014-12-31", 7, allValues);

// Convert UTC dates to JS dates
gData.forEach(function (d) {
    d.date = parseDate3(d.date);
});

var gndx = crossfilter(gData);

/**
 *   Quarter ring
 */
function quarterRing(filteredData) {
    var quarterRingChart = dc.pieChart("#g-chart-ring-quarter");

    var quarterDim = filteredData.dimension(function (d) {
        return +d.quarter;
    });

    var quarterTotal = quarterDim.group().reduceSum(function (d) {
        return d.sold_items;
    });

    quarterRingChart
        .width(200).height(200)
        .dimension(quarterDim)
        .group(quarterTotal)
        .ordinalColors(["#cceafa", "#bcdaea", "#accada", "#9cbaca", "#8caaba"])
        .innerRadius(60)
        .legend(dc.legend().x(80).y(70).itemHeight(13).gap(5))
        .renderLabel(false);
}

quarterRing(gndx);

/**
 * Line graph
 */

function salesLineChart(filteredData) {
    var gLineChart = dc.lineChart("#g-chart-line");
    var gDateDim = filteredData.dimension( function (d) { return +d.date; });
    var totalSalesDim = gDateDim.group().reduceSum( function (d) {
        return d.sold_items;
    });

    var gMinDate = gDateDim.bottom(1)[0].date;
    var gMaxDate = gDateDim.top(1)[0].date;

    gLineChart
        .width(500).height(200)
        .dimension(gDateDim)
        .group(totalSalesDim)
        .ordinalColors(["#cceafa", "#bcdaea", "#accada", "#9cbaca", "#8caaba"])
        .brushOn(false)
        .renderTitle(true)
        .renderlet(function (chart) {
            chart.selectAll("circle.dot")
                .style("fill-opacity", 1)
                .style("stroke-opacity", 1)
                .on('mousemove', null)
                .on('mouseout', null);


        })
        .x(d3.time.scale().domain([gMinDate,gMaxDate]));


}
salesLineChart(gndx);

function compositeLineChart(filteredData) {
    var compositeLineChart = dc.compositeChart("#g-composite-chart-line");

    var gDateDim = filteredData.dimension( function (d) { return +d.date; });
    var gMinDate = gDateDim.bottom(1)[0].date;
    var gMaxDate = gDateDim.top(1)[0].date;


    var totalSalesDim = gDateDim.group().reduceSum( function (d) {
        return d.sold_items;
    });
    var vsSalesDim = gDateDim.group().reduceSum( function (d) {
        return d.sold_items_vs;
    });

    var totalSalesChart = dc.lineChart(compositeLineChart)
        .dimension(gDateDim)
        .group(totalSalesDim)
        .ordinalColors(["#0098e6", "#10a8f6", "#20b8f6", "#30c8f6", "#40d8f6"])
        .renderArea(true);

    var vsSalesChart = dc.lineChart(compositeLineChart)
        .dimension(gDateDim)
        .group(vsSalesDim)
        .ordinalColors(["#20b8f6", "#30c8f6", "#40d8f6"])
        .renderArea(true);

    window.totSalesChart = totalSalesChart;

    compositeLineChart
        .width(500)
        .height(200)
        .x(d3.time.scale().domain([gMinDate,gMaxDate]))
        .y(d3.time.scale().domain([0,450]))
        .brushOn(false)
        .renderTitle(true)
        .renderHorizontalGridLines(true)
        .renderVerticalGridLines(true)
        .margins({top: 10, left: 50, right: 10, bottom: 30})
        .renderlet(function (chart) {
            chart.selectAll("circle.dot")
                .style("fill-opacity", 1)
                .style("stroke-opacity", 1)
                .on('mousemove', null)
                .on('mouseout', null);
        })
        .compose([totalSalesChart, vsSalesChart])
        .xAxis().tickFormat(d3.time.format("%b"));
}
compositeLineChart(gndx);










/*var compose1 = dc.lineChart(hitsLineChart)
//    .width(500).height(200)
    .dimension(hits)
    .ordinalColors(["#56B2EA","#E064CD","#F8B700","#78CC00","#7B71C5"])
    .renderArea(true)
    .group(hits_2011, '2011')
    .stack(hits_2012, '2012')
    .stack(hits_2013, '2013');

var compose2 = dc.lineChart(hitsLineChart)
    .dimension(dateDim)
    .ordinalColors(["#56B2EA","#E064CD","#F8B700","#78CC00","#7B71C5"])
    .group(target_2011, '2011 Target')
    .stack(target_2012, '2012 Target')
    .stack(target_2013, '2013 Target')
    .dashStyle([5, 5]);

hitsLineChart
    .width(500).height(200)
    .x(d3.time.scale().domain([minDate,maxDate]))
    .brushOn(false)
    .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
    .yAxisLabel("Hits Per Day")
    //.elasticX(true)
    .compose([compose1, compose2]);*/


















//    .x(d3.time.scale().domain([gMinDate, gMaxDate]))
//    .brushOn(false)
//    .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
//    .yAxisLabel("Sales Per Day")
    //.elasticX(true)
//    .compose([totalSalesChart, vsSalesChart]);





data.forEach(function (d) {
    d.date = parseDate(d.date);
    d.qtime = parseDate2((d.date.getMonth() + 1) + '/' + d.date.getDate());
    d.Year = d.date.getFullYear();
});

var ndx = crossfilter(data);

function print_filter(filter){
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
}

// Year ring
var yearRingChart = dc.pieChart("#chart-ring-year");

var yearDim = ndx.dimension( function (d) {
    return +d.Year;  // same as Number(d.year)
});

var year_total = yearDim.group().reduceSum( function (d) {
    return d.hits;
});

yearRingChart
    .width(200).height(200)
    .dimension(yearDim)
    .group(year_total)
    .ordinalColors(["#56B2EA","#E064CD","#F8B700","#78CC00","#7B71C5"])
    .innerRadius(60)
    .legend(dc.legend().x(80).y(70).itemHeight(13).gap(5))
    .renderLabel(false);

// Status donut
/*
var statusRingChart = dc.pieChart("#chart-ring-status");
var statusDim = ndx.dimension( function (d) {
    return d.status;
});
var hit_status = statusDim.group().reduceSum( function (d) {
    return d.hits;
});

statusRingChart
    .width(150).height(150)
    .dimension(statusDim)
    .group(hit_status)
    .innerRadius(30)
*/

//Stacked area chart
var hitsLineChart = dc.compositeChart("#chart-line-hitsperday");
var dateDim = ndx.dimension( function (d) {
    return d.qtime;
});
var hits = dateDim.group().reduceSum( function (d) {
    return d.hits;
});
var minDate = new Date("01/01/1900");
var maxDate = new Date("12/30/1900");

var hits_2011 = dateDim.group().reduceSum(function (d) {
    if (d.Year === 2011) {
        return d.hits;
    } else {
        return 0;
    }
});
var hits_2012 = dateDim.group().reduceSum(function (d) {
    if (d.Year === 2012) {
        return d.hits;
    } else {
        return 0;
    }
});
var hits_2013 = dateDim.group().reduceSum(function (d) {
    if (d.Year === 2013) {
        return d.hits;
    } else {
        return 0;
    }
});

var target_2011=dateDim.group().reduceSum(function(d) {if (d.Year===2011 ) {return 10;}else{return 0;}});
var target_2012=dateDim.group().reduceSum(function(d) {if (d.Year===2012 ) {return 20;}else{return 0;}});
var target_2013=dateDim.group().reduceSum(function(d) {if (d.Year===2013 ) {return 30;}else{return 0;}});
/*
function getvalues(d){
    var str=d.key.getDate() + "/" + (d.key.getMonth() + 1) + "/" + d.key.getFullYear()+"\n";
    var key_filter = dateDim.filter(d.key).top(Infinity);
    var total=0
    key_filter.forEach(function(a) {
        str+=a.status+": "+a.hits+" Hit(s)\n";
        total+=a.hits;
    });

    str+="Total:"+total;
    //remove filter so it doesn't effect the graphs,
    //this is the only filter so we can do this
    dateDim.filterAll();
    return str;
}
*/

var compose1 = dc.lineChart(hitsLineChart)
//    .width(500).height(200)
    .dimension(hits)
    .ordinalColors(["#56B2EA","#E064CD","#F8B700","#78CC00","#7B71C5"])
    .renderArea(true)
    .group(hits_2011, '2011')
    .stack(hits_2012, '2012')
    .stack(hits_2013, '2013');

var compose2 = dc.lineChart(hitsLineChart)
    .dimension(dateDim)
    .ordinalColors(["#56B2EA","#E064CD","#F8B700","#78CC00","#7B71C5"])
    .group(target_2011, '2011 Target')
    .stack(target_2012, '2012 Target')
    .stack(target_2013, '2013 Target')
    .dashStyle([5, 5]);

hitsLineChart
    .width(500).height(200)
    .x(d3.time.scale().domain([minDate,maxDate]))
    .brushOn(false)
    .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
    .yAxisLabel("Hits Per Day")
    //.elasticX(true)
    .compose([compose1, compose2]);

//    .x(d3.time.scale().domain([minDate, maxDate]))
//    .elasticX(true)
//    .brushOn(false)
//    .margins({top: 10, left: 50, right: 10, bottom: 50})
//    .legend(dc.legend().x(70).y(10).itemHeight(13).gap(5))
//    .renderlet( function (chart) {
//        chart.selectAll("g.x text")
//            .attr('dx', '-30')
//            .attr('dy', '-7')
//            .attr('transform', 'rotate(-90)');
//    })
//    .yAxisLabel("Hits per day")
/*    .title( function (d) {
        return getvalues(d);
    })*///;

/*
$('#chart-ring-year').on('click', function (e) {
    var minDate2 = dateDim.bottom(1)[0].date;
    var maxDate2 = dateDim.top(1)[0].date;
    hitsLineChart.x(d3.time.scale().domain([minDate2, maxDate2]));
    hitsLineChart.redraw();
});
*/

// Data table
var datatable = dc.dataTable("#dc-data-table");
var tableGroup = dateDim.group().reduce(
    function reduceAdd(p,v) {
        p[v.status] = (p[v.status] || 0) + +v.hits;
        p["Year"]= v.Year;
        return p;
    },
    function reduceRemove(p,v) {
        p[v.status] = (p[v.status] || 0) - +v.hits;
        p["Year"]=v.Year;
        return p;
    },
    function reduceInitial() { return {}; }
);

datatable
    .dimension(tableGroup)
    .group( function (d) { return d.value.Year} )
    .columns([
        function (d) { return d.key.getDate() + "/" + (d.key.getMonth() + 1) + d.key.getFullYear()},
        function (d) { return d.value.http_200;},
        function (d) { return d.value.http_302;},
        function (d) { return d.value.http_404;},
        function (d) { return d.value.http_200 + d.value.http_302 + d.value.http_404;}
    ]);




var meltedDim = ndx.dimension( function (d) { return d.status });
print_filter("meltedDim");




dc.renderAll();



//print_filter("total_90");
//print_filter("visa_filter");