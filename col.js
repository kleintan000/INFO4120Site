Highcharts.chart('col_container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Watermelons', 'Mangoes', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Tanner',
        data: [5, 3, 3, -3, -1]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});