// Calculates combination

function combinationFunction()
{   
    var x = document.getElementById("inputCombElements").value;
    var y = document.getElementById("inputCombSubset").value;
    var z = (x - y);

    for (i = x - 1; i > 0; i--) 
    {
        x = (x * i);
    }

    for (i = y - 1; i > 0; i--) 
    {
         y = (y * i);
    }

    for (i = z - 1; i > 0; i--) 
    {
        z = (z * i);
    }

    var result3 = (x / (y * z));
    
    if (result3 == Infinity)
    {
        result3 = 1
    }

    if (isNaN(result3) == true || x == 0)
    {
        alert("Please input correct values.")
    }
    
    else
    {
        document.getElementById("result3").innerHTML = "Combinations: " + result3;
    } 

}
