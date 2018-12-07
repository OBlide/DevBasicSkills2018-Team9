
function generate_table() 
{
var table_element = document.getElementById("table_id");

var table_content = "<tr><th>JOO</th><th>YES</th><th>Result</th></tr>" ;

var multiplicant= 3;

for ( var multiplier = 1;
    multiplier <= 10;
    multiplier ++ )
{
    var result = multiplier * multiplicant;

    table_content += "<tr><td>" + multiplier + "</td><td>" + multiplicant + "</td><td>" + result + "</td></tr>" ;
}

table_element.innerHTML = table_content;

}