async function getData() {
    const date = [],
        globalTemp = [],
        northernTemp = [],
        southernTemp = [],
        response = await fetch('../ZonAnn.Ts+dSST.csv'),
        data = await response.text(),
        rows = data.split(/\n/).slice(1);

    rows.forEach(element => {
        const row = element.split(','),
            year = row[0],
            gt = +row[1],
            nt = +row[2],
            st = +row[3];

        date.push(year);
        globalTemp.push(gt);
        northernTemp.push(nt);
        southernTemp.push(st);
    })

    return { date, globalTemp, northernTemp, southernTemp }
}

async function drawData() {
    const data = await getData()

    Highcharts.chart('container', {

        title: {
            text: 'Global temperature change'
        },

        subtitle: {
            text: 'Zonal annual means'
        },

        xAxis: {
            categories: data.date
        },

        yAxis: {
            labels: {
                format: '{value}°'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                '<td style="text-align: right"><b>{point.y}°</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 2
        },

        series: [{
            name: 'Global',
            data: data.globalTemp
        }, {
            name: 'Northern Hemisphere',
            data: data.northernTemp
        }, {
            name: 'Southern Hemisphere',
            data: data.southernTemp
        }],

        exporting: {
            showTable: true
        }
    });
}

drawData();