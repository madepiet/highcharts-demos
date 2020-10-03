document.addEventListener('DOMContentLoaded', () => {

  const options = {
    title: {
      text: 'Global temperature change'
    },

    subtitle: {
      text: 'Zonal annual means'
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
      lineWidth: 1
    }, {
      type: 'areaspline',
      color: '#c4392d',
      negativeColor: '#5679c4',
      fillOpacity: 0.5
    }],

    exporting: {
      showTable: true
    }
  }

  fetch('../ZonAnn.Ts+dSST.csv').then(res => {
    return res.text()
  }).then(csv => {
    options.data = {
      csv: csv,
      endColumn: 3
    }
    Highcharts.chart('container', options);
  })

});