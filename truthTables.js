// These are x and y for each row of the table
function generate_table(){
const initialValues = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
  ]
  
  // This holds the html table
  const table = document.getElementById('table_id')
  var tableContent = "";
  // With this loop we go through all the rows of the initial values and calculate AND, OR, NAND and NOR
  for (let i = 0; i < initialValues.length; i++) {
      console.log(i + " " + table.innerHTML)
    const x = initialValues[i][0]
    const y = initialValues[i][1]
  
    // We add this HTML to the table on every iteration
    // Use Number() to transform from true or false to 1 or 0
   
    
    tableContent += "<tr><td>" + x + "</td><td>" + y + "</td>";
  
    if (x && y) {
      tableContent += "<td>" + 1 + "</td>"
    } else {
      tableContent += "<td>" + 0 + "</td>"
    }
  
    if (x || y) {
      tableContent += "<td>" + 1 + "</td>"
    } else {
      tableContent += "<td>" + 0 + "</td>"
    }
  
    if (x && y) {
      tableContent += "<td>" + 0 + "</td>"
    } else {
      tableContent += "<td>" + 1 + "</td>"
    }
  
    if (x || y) {
      tableContent += "<td>" + 0 + "</td>"
    } else {
      tableContent += "<td>" + 1 + "</td>"
    }

    tableContent += "</tr>"
  }

  table.innerHTML += tableContent
}