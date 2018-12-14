//Looping twice in the beginning and then we put in the right value the rest of the table.
var truthtables = "";
truthtables = "<tr><th> P </th>" + "<th> Q </th>" + "<th> ¬P </th>" + "<th> ¬P^Q </th>" + "<th> ¬PvQ </th>" + "<th> P<->Q </th>" + "<th> P⊕Q </th>" + "</tr>";
 for( var i = 0 ; i < 2 ; i++){
    for( var j = 0 ; j < 2 ; j++){
        if( i != 0 && j == 1){
            truthtables = truthtables + "<td>"+ i + "</td>" + "<td>" + j + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 1 + "</td>" + "<td>" + 0 + "</td>";
        }
        if(i == 1 && j == 0){
            truthtables = truthtables + "<td>"+ i + "</td>" + "<td>" + j + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 1 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 1 + "</td>" + "<tr>";
        }
        if(i == 0 && j == 1){
            truthtables = truthtables + "<td>"+ i + "</td>" + "<td>" + j + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + 1 + "</td>" + "<td>" + 1 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 1 + "</td>" + "<tr>";
        }
        if(i == 0 && j == 0){
            truthtables = truthtables + "<td>"+ i + "</td>" + "<td>" + j + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 0 + "</td>" + "<td>" + 1 + "</td>" + "<td>" + 0 + "</td>" + "<tr>"; 
        }
    }
}
//Print out
document.write(truthtables);