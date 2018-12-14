// Clear button
function clearNumberTable() {
    var numbertable = document.getElementById("numberSystemsTable");
    var buttonInfo = document.getElementById("buttonChange");
    if (numbertable.style.display !== "none") {
        numbertable.style.display = "none";
        buttonInfo.value = "Show Table";
    } else {
        numbertable.style.display = "block";
        buttonInfo.value = "Remove Table";
    }
  }

// The table
function numberSystemsTable() 
{
    var table_element = document.getElementById("numberSystemsTable");

    var table_content = "<tr><th>Decimal</th><th>Binary</th><th>Octal</th><th>Hexadecimal</th></tr>" ;

    var i = 0;

for (let i = 0; i < 51; i++){
        var hex = i.toString(16).toUpperCase();   // Hexidecimal
        var oct = i.toString(8);                  // Octal
        var bin = i.toString(2);                  // Binary


    table_content += "<tr><td>" + i + "</td><td>" + bin + "</td><td>" + oct + "</td><td>" + hex + "</td></tr>" ;
}

table_element.innerHTML = table_content;

}