
function generate_table() 
{
var table_element = document.getElementById("table_id");

var table_content = "<tr><th>A</th><th>B</th><th>¬A</th><th>A^B</th><th>AvB</th><th>A->B</th><th>A<->B></th><th>A⊕B></th></tr>" ;

//Table
for (let i = 0; i < 4; i++) {
        var a = 1;   
        var b = 0;                  
                           


    table_content += "<tr><td>" + b + "</td><td>" + b + "</td><td>" + a + "</td><td>" + c + "</td><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + ab + "</td></tr>" 
    "<tr><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + a + "</td><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + ab + "</td></tr>" 
    "<tr><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + a + "</td><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + ab + "</td></tr>" 
    "<tr><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + a + "</td><td>" + a + "</td><td>" + b + "</td><td>" + b + "</td><td>" + ab + "</td></tr>" ;
    
}

table_element.innerHTML = table_content;

}