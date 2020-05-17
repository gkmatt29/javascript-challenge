// from data.js
var tableData = data;

// YOUR CODE HERE!
var table = d3.select("table");
table.attr("class", "table table-striped");
var tbody = d3.select("tbody");
tableData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filterData = tableData.filter(y => y.datetime === inputValue);
    console.log(filterData)
    var tbody = d3.select("tbody");
    tbody.html("")
    filterData.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  });
  



