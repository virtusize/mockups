var data = [
    {"quarter": "Q1", "date": "01/01/2011", "sold_items": 100, "vs_sold_items": 30, "product_type": "dress"},
    {"quarter": "Q1", "date": "01/01/2011", "sold_items": 112, "vs_sold_items": 24, "product_type": "pants"},
    {"quarter": "Q1", "date": "01/01/2011", "sold_items": 98, "vs_sold_items": 42, "product_type": "shirt"},
    {"quarter": "Q1", "hits": 0, "date": "01/15/2011"},
    {"quarter": "Q1", "hits": 0, "date": "02/01/2011"},
    {"quarter": "Q1", "hits": 0, "date": "02/15/2011"},
    {"quarter": "Q1", "hits": 0, "date": "03/01/2011"},
    {"quarter": "Q1", "hits": 0, "date": "03/15/2011"},
    {"quarter": "Q2", "hits": 0, "date": "04/01/2011"},
    {"quarter": "Q2", "hits": 0, "date": "04/15/2011"},
    {"quarter": "Q2", "hits": 0, "date": "05/01/2011"},
    {"quarter": "Q2", "hits": 0, "date": "05/15/2011"},
    {"quarter": "Q2", "hits": 0, "date": "06/01/2011"},
    {"quarter": "Q2", "hits": 0, "date": "06/15/2011"},
    {"quarter": "Q3", "hits": 0, "date": "07/01/2011"},
    {"quarter": "Q3", "hits": 0, "date": "07/15/2011"},
    {"quarter": "Q3", "hits": 0, "date": "08/01/2011"},
    {"quarter": "Q3", "hits": 0, "date": "08/15/2011"},
    {"quarter": "Q3", "hits": 0, "date": "09/01/2011"},
    {"quarter": "Q3", "hits": 0, "date": "09/15/2011"},
    {"quarter": "Q4", "hits": 12, "date": "10/01/2011"},
    {"quarter": "Q4", "hits": 13, "date": "10/15/2011"},
    {"quarter": "Q4", "hits": 16, "date": "11/01/2011"},
    {"quarter": "Q4", "hits": 15, "date": "11/15/2011"},
    {"quarter": "Q4", "hits": 12, "date": "12/01/2011"},
    {"quarter": "Q4", "hits": 10, "date": "12/15/2011"},

    {"quarter": "Q1", "hits": 25, "date": "01/01/2012"},
    {"quarter": "Q1", "hits": 27, "date": "01/15/2012"},
    {"quarter": "Q1", "hits": 28, "date": "02/01/2012"},
    {"quarter": "Q1", "hits": 26, "date": "02/15/2012"},
    {"quarter": "Q1", "hits": 29, "date": "03/01/2012"},
    {"quarter": "Q1", "hits": 24, "date": "03/15/2012"},
    {"quarter": "Q2", "hits": 36, "date": "04/01/2012"},
    {"quarter": "Q2", "hits": 33, "date": "04/15/2012"},
    {"quarter": "Q2", "hits": 35, "date": "05/01/2012"},
    {"quarter": "Q2", "hits": 35, "date": "05/15/2012"},
    {"quarter": "Q2", "hits": 39, "date": "06/01/2012"},
    {"quarter": "Q2", "hits": 34, "date": "06/15/2012"},
    {"quarter": "Q3", "hits": 41, "date": "07/01/2012"},
    {"quarter": "Q3", "hits": 45, "date": "07/15/2012"},
    {"quarter": "Q3", "hits": 40, "date": "08/01/2012"},
    {"quarter": "Q3", "hits": 42, "date": "08/15/2012"},
    {"quarter": "Q3", "hits": 47, "date": "09/01/2012"},
    {"quarter": "Q3", "hits": 43, "date": "09/15/2012"},
    {"quarter": "Q4", "hits": 55, "date": "10/01/2012"},
    {"quarter": "Q4", "hits": 57, "date": "10/15/2012"},
    {"quarter": "Q4", "hits": 54, "date": "11/01/2012"},
    {"quarter": "Q4", "hits": 53, "date": "11/15/2012"},
    {"quarter": "Q4", "hits": 51, "date": "12/01/2012"},
    {"quarter": "Q4", "hits": 50, "date": "12/15/2012"},

    {"quarter": "Q1", "hits": 32, "date": "01/01/2013"},
    {"quarter": "Q1", "hits": 36, "date": "01/15/2013"},
    {"quarter": "Q1", "hits": 34, "date": "02/01/2013"},
    {"quarter": "Q1", "hits": 31, "date": "02/15/2013"},
    {"quarter": "Q1", "hits": 33, "date": "03/01/2013"},
    {"quarter": "Q1", "hits": 36, "date": "03/15/2013"},
    {"quarter": "Q2", "hits": 45, "date": "04/01/2013"},
    {"quarter": "Q2", "hits": 40, "date": "04/15/2013"},
    {"quarter": "Q2", "hits": 42, "date": "05/01/2013"},
    {"quarter": "Q2", "hits": 49, "date": "05/15/2013"},
    {"quarter": "Q2", "hits": 44, "date": "06/01/2013"},
    {"quarter": "Q2", "hits": 42, "date": "06/15/2013"},
    {"quarter": "Q3", "hits": 58, "date": "07/01/2013"},
    {"quarter": "Q3", "hits": 53, "date": "07/15/2013"},
    {"quarter": "Q3", "hits": 58, "date": "08/01/2013"},
    {"quarter": "Q3", "hits": 52, "date": "08/15/2013"},
    {"quarter": "Q3", "hits": 54, "date": "09/01/2013"},
    {"quarter": "Q3", "hits": 58, "date": "09/15/2013"},
    {"quarter": "Q4", "hits": 65, "date": "10/01/2013"},
    {"quarter": "Q4", "hits": 63, "date": "10/15/2013"},
    {"quarter": "Q4", "hits": 66, "date": "11/01/2013"},
    {"quarter": "Q4", "hits": 64, "date": "11/15/2013"},
    {"quarter": "Q4", "hits": 68, "date": "12/01/2013"},
    {"quarter": "Q4", "hits": 63, "date": "12/15/2013"}
];

var dressValue = {
        "product_type": function () {
            return "dress"
        },
        "sold_items": function (t) {
            return Math.floor((t * t / 1000000 + 1) * 100 + Math.random() * 50);
        },
        "sold_items_vs": function (t) {
            return Math.floor((t * t / 50000 + 1) * 10 + Math.random() * 20);
        }
    },
    pantsValue = {
        "product_type": function () {
            return "pants"
        },
        "sold_items": function (t) {
            return Math.floor((t * t / 1000000 + 1) * 80 + Math.random() * 40);
        },
        "sold_items_vs": function (t) {
            return Math.floor((t * t / 50000 + 1) * 15 + Math.random() * 15);
        }
    },
    shirtValue = {
        "product_type": function () {
            return "shirt"
        },
        "sold_items": function (t) {
            return Math.floor((t * t / 1000000 + 1) * 120 + Math.random() * 60);
        },
        "sold_items_vs": function (t) {
            return Math.floor((t * t / 50000 + 1) * 15 + Math.random() * 30);
        }
    },
    allValues = [dressValue, pantsValue, shirtValue];

function dataGenerator(startDateStr, stopDateStr, interval, values) {
    var startMoment = moment(startDateStr),
        endMoment = moment(stopDateStr),
        currentMoment = startMoment,
        dayCount = 0,
        data = [];

    while (currentMoment.isBefore(endMoment)) {
        _.each(values, function (element, index, list) {
            var line = {};

            _.each(element, function (value, key, list) {
                line[key] = value(dayCount);
            });

            line.quarter = currentMoment.quarter();
            line.date = currentMoment.format("YYYY-MM-DD");
            data.push(line);
        });

        currentMoment.add("days", interval);
        dayCount = dayCount + interval;
    }

    return data;
}

function reduceData (dataSet, maxDates) {
    var uniqueDates = [];
    for(var j=0; j<dataSet.length; j++) {
        if(uniqueDates.indexOf(dataSet[j].date) === -1){
            uniqueDates.push(dataSet[j].date);
        }
    }

    if (uniqueDates.length <= maxDates) {
        return dataSet;
    }

    var chunkSize = uniqueDates.length / maxDates,
        reducedDateSet = [],
        reducedDataSet = [];

    for(var i=1; i<=maxDates; i++) {
        reducedDateSet.push(uniqueDates[Math.floor(chunkSize * i) - 1]);
    }
    for (var j=0; j<dataSet.length; j++) {
        if(reducedDateSet.indexOf(dataSet[j].date) > -1) {
            reducedDataSet.push(dataSet[j]);
        }
    }

    return reducedDataSet;
}







