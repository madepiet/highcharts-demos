library(highcharter)

hc <- highchart() %>%
  hc_chart(
    zoomType = "xy",
    events = list(render = JS("function() {
        const chart = this,
          data = chart.series[0].data;

        let pointsToProject = [];

        (chart.myCustomCircles || []).forEach(function(circle) {
          circle.destroy();
        });

        chart.myCustomCircles = [];

        pointsToProject = chart.series[0].points.filter(function(point) {
          return point.flag && point.isInside;
        });

        // Where to draw a circle
        pointsToProject.forEach(function(point) {
          const customCircle = chart.renderer.circle(
              chart.plotLeft + point.plotX,
              chart.plotSizeY + chart.plotTop,
              4
            )
            .attr({
              fill: 'red',
              zIndex: 2
            })
            .add();

          chart.myCustomCircles.push(customCircle);
        });

        // Where to render the text
        if (!chart.myCustomText) {
          chart.myCustomText = chart.renderer.text(
              '',
              chart.plotLeft,
              35
            )
            .add();
        }

        chart.myCustomText.attr({
          text: 'Number of points with max value: ' + pointsToProject.length,
        });
      }"
    ))
  ) %>%
  hc_title(
    text = "Working with JavaScript Syntax in R",
    align = 'right'
  ) %>%
  hc_legend(enabled = FALSE) %>%
  hc_plotOptions(
    series = list(
      dataLabels = list(
        enabled = TRUE,
          formatter = JS("function() {
            let visiblePoints = this.series.points.filter(function(point) {
                return point.isInside;
              }),
              max = visiblePoints.reduce(function(acc, cur) {
                return Math.max(cur.y, acc);
              }, 0);
  
            if (this.y === max) {
              this.point.flag = true;
  
              return this.y;
            } else {
              this.point.flag = false;
            }
          }"
        )
      )
    )
  ) %>%
  hc_add_series(
    data = sample(1:40, 100, replace=TRUE),
    type = "spline",
    name = "Things"
  )

hc