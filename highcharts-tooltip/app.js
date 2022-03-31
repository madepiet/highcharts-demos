function renderChart(point) {
    Highcharts.chart('hc-tooltip', {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        subtitle: {
            text: 'Chart inside tooltip'
        },
        series: [{
            data: point.options.eData
        }]
    });
}

Highcharts.addEvent(
    Highcharts.Tooltip,
    'refresh',
    function (e) {
        renderChart(this.chart.hoverPoint)
    }
)

Highcharts.chart('container', {
    title: {
        text: 'Chart inside tooltip demo'
    },
    tooltip: {
        useHTML: true,
        formatter: function () {
            return '<div id="hc-tooltip"></div>';
        }
    },
    series: [{
        type: 'line',
        data: [{
            y: 10,
            eData: [1, 2, 3]
        }, {
            y: 5,
            eData: [-10, 20, 50]
        }, {
            y: 2,
            eData: [103, 11]
        }]
    }]
});
