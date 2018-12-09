
//Clear button
function clearNumberTable() {
    var numbertable = document.getElementById("numberSystemsTable");
    if (numbertable.style.display === "none") {
        numbertable.style.display = "block";
    } else {
        numbertable.style.display = "none";
    }
  }

//The table
function numberSystemsTable() 
{
    var table_element = document.getElementById("numberSystemsTable");

    var table_content = "<tr><th>Decimal</th><th>Binary</th><th>Octal</th><th>Hexadecimal</th></tr>" ;

    var i = 0;

for (let i = 0; i < 51; i++){
        var hex = (100).toString(16);     // "64"
        var oct = (100).toString(8);      // "144"
        var bin = (100).toString(2);      // "1100100"


    table_content += "<tr><td>" + i + "</td><td>" + bin + "</td><td>" + oct + "</td><td>" + hex + "</td></tr>" ;
}

table_element.innerHTML = table_content;

}