# Working With Data & APIS

In this article, I will show you how to grab data from a CSV file with the fetch function, and load it onto a web page, then plot it on a chart. We will do it with a custom JavaScript solution and compare that solution with options that are available in the Highcharts [data-module API](https://www.highcharts.com/docs/working-with-data/custom-preprocessing#preprocess-data-using-csv).

## Remark

In official [Highcharts documentation](https://www.highcharts.com/docs/working-with-data/data-module) and [API](https://www.highcharts.com/docs/working-with-data/custom-preprocessing#preprocess-data-using-csv) you can find many examples and solutions that allow you to start working/processing data. 

The data set that we are going to be using, comes from NASA (National Aeronautics and Space Administration) in particular from the [Goddard Institute for Space Studies](https://data.giss.nasa.gov/gistemp/). The idea is to visualize the CSV file data that includes the combined global average land surface air and sea surface water temperature from 1880 all the way to the present.

### 1. Data source

Let’s grab the [Zonal annual means CSV file](https://data.giss.nasa.gov/gistemp/tabledata_v4/ZonAnn.Ts+dSST.csv) and store it locally on a computer or a database.. The CSV file has a number of columns: Year; Glob, Nhem, northern hemisphere, etc. The columns are separated by commas. The file isn't really meant to be human readable; there are ways of viewing a CSV that's more human-readable. For example, in the final demo, you can see how that same data looks in a spreadsheet format using our [export-data module](https://www.highcharts.com/docs/export-module/export-module-overview) which we highly recommend to use for that purpose. 

### 2. Data loading

To start working with the data, we need to load it into the script. We are going to use the FetchAPI standard, and the await and async syntax, which are supported in the modern browsers. Remember to check the browser's capacity when working with the newest features of JavaScript. When you want to get support for older browsers it's best to compile your code to the older ES5 syntax. 

### 3. Data parsing

There are various JavaScript libraries, including our own solution, to parse a CSV.By parsing we mean to figure out where all the commas are, break up the data, and put it into objects to make it usable. For this data set,  it's simple enough to do the parsing manually with the split function. Btw, a piece of text in a variable in JavaScript is a string object and has a function called split. That function allows you to take any arbitrary text and split it up into different elements of an array. And that's basically what we want to do; we want to split up all the rows, and then in each row, we split up all the columns. The split function requires a single argument - a separator or otherwise known as a delimiter. And in this case, we have two kinds of delimiters. For each row, the delimiter, the thing that differentiates one row from another, is a line break. So first, let's call split with a line break. Also, we don't need this first row - the first row is really useful information for us as human beings to think about what the data is, but for that use, we want to take years as a category. 

Now it's important to know this data is clean: no empty date, no mistakes, no empty pieces. But, if the data has commas, this parsing system is going to break down. Even though there are conventions for CSV files to use quotes around the information that shouldn't be split, where there is a comma in there, you always have to check the data. You also might find that your data isn't already in CSV format, so you can use optical character recognition to turn it into data that you can work with or transcribe it manually. So this might be a lot of work that can go into parsing and cleaning data for your projects.. 


### 4. Data visualization

Now, we're ready to visualize the data using  a simple line chart with a little bit of customization (see chart below). 

* [DEMO URL](https://madepiet.github.io/highcharts-working-with-data/manual-parsing-demo/) - Manual parsing

Here, you can see the same example but using fetch and options from the data-module.

* [DEMO URL](https://madepiet.github.io/highcharts-working-with-data/data-module-demo/) - data-module solution

To recap, you have seen how to load tabular data in the form of a comma-separated values file, how to parse the file manually, and how to use the API options to visualise the data.