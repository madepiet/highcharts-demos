# Working with Highcharts JavaScript Syntax in R 📈

R can be used for a lot of different things - it's widely used in data science so you can create a variety of different types of documents and reports or any sort of analysis with R and its various packages and useful utilities. R is also great as an interface or an intermediary language between other languages. If you've ever done anything with it or if you have worked with Rstudio (the IDE for R) there is a lot of other languages that go into our development and that it works closely with for either reproducible analyses, creating good documents, or just improving speed and automate tasks. So R interfaces very well with C, C++, Python, and also JavaScript libraries come into play when you export to HTML documents. So that here we will look at exactly this case of using the [Highcharts](https://www.highcharts.com/) and [Highcharter](https://jkunst.com/highcharter/) (Higcharts R wrapper) to create beautiful interactive charts as an output of our data.

When it comes to the possibilities offered by Highcharts/Highcharter, it is best to read the documentation on the [official website](https://jkunst.com/highcharter/articles/highcharter.html) and [API](https://api.highcharts.com/highcharts/), but since Highcharts is a frontend library created in JavaScript languages, it will often be necessary to adjust some options by writing our own functions to get some better customizations and adjust charts to a specific needs.

### Let's take this demo made in pure Highcharts/JavaScript as an example:
https://jsfiddle.net/BlackLabel/e5k2j7up/

We can see there an example of chart customization that includes the need to use events and methods such as [render()](https://api.highcharts.com/highcharts/chart.events.render) and [dataLabels.formatter function](https://api.highcharts.com/highcharts/plotOptions.series.dataLabels.formatter) that enable dynamic changes and interaction with the chart.

### Now here we can see an example of the implementation of this chart in the R script:
We get exactly the same functionalities in R but we also have to use JavaScript code for this.

https://github.com/madepiet/highcharts-js-syntax-in-r/blob/master/chart.R

So to recap R shines in actually doing data analysis and then visualizing that data but you can interface with a variety of languages as shown in our example. There are a lot of supported language engines in our markdown and then our markdown itself can render to a variety of formats. You can learn more about it in the official [documentation for R](https://www.r-project.org/other-docs.html). You can have basically anything custom - your own workflow, your package development, or your actual document templates! 

