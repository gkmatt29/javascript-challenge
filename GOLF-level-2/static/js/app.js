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

var input = d3.select("input");
var button = d3.selectAll(".filter");
newDict = {};

button.on("change", searchItems)

function searchItems(){  
  d3.event.preventDefault();
    var inputElement = d3.select(this).select("input");
    var inputValue = inputElement.property("value");
    var inputId = inputElement.attr("id");
    newDict[inputId] = inputValue;
    newTable()
}
function newTable(){
    var newData = tableData
    Object.entries(newDict).forEach(function([key,value]){
      newData = newData.filter(d => d[key] === value);
      console.log(newData);
  });
    var tbody = d3.select("tbody");
    tbody.html("")
    newData.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}



