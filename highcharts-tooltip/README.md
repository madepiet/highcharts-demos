# How to display a chart inside the tooltip?

Creating a chart within a tooltip can be useful, for example, to visualize more information ​​or correlation in a given data point.

*Remark
If you are not familiar with the tooltip options, feel free to check the [tooltip](https://api.highcharts.com/highcharts/tooltip) and the [tooltip useHTML](https://api.highcharts.com/highcharts/tooltip.useHTML) documentation for further information regarding the main options used in this article.*

Here you can find a [demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/blog/chart-inside-tooltip).

## There are four steps to create the chart inside a tooltip:

#### 1. Be sure to set useHTML to true and return the replaced HTML tooltip element in the tooltip.pointFormat. Create the rendering function as follow:

#### 2. Create the rendering function as follow:

```js
function renderChart(point) {
  Highcharts.chart('hc-tooltip', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Chart inside tooltip'
    },
    series: [{
      data: point.options.eData,
      dataLabels: {
        enabled: false
      }
    }]
  });
}
```

#### 3. Then, on the tooltip event, I call the renderChart function for individual points of the main chart:

```js
Highcharts.addEvent(
  Highcharts.Tooltip,
  'refresh',
  function() {
    renderChart(this.chart.hoverPoint)
  }
)
```

#### 4. Finally, in the main chart object the tooltip.pointFormat gets the following code:

```js
 tooltip: {
   useHTML: true,
   headerFormat: '',
   pointFormat: '<div id="hc-tooltip"></div>'
 }
```

Now, you are ready to add more information to your chart using the tooltip.