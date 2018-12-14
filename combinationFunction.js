// Calculates combination

function combinationFunction()
{   
    var x = document.getElementById("inputCombElements").value;
    var y = document.getElementById("inputCombSubset").value;
    var z = (x - y);

    if (x == 0) // Checks if a size is given to the elements
    {
        alert("Please enter a size for the elements.")
        document.getElementById("result3").innerHTML = "" ;
    }

    else if (y == 0) // Checks if a size is given to the subset
    {
        alert("Please enter a size for the subset.")
        document.getElementById("result3").innerHTML = "" ;
    }

    else if (y > x > 0) // Checks that the size of the elements is larger than the size of the subsets
    {
        alert("Please input correct values. (The size of elements have to be larger than the size of subset.)")
        document.getElementById("result3").innerHTML = "" ;
    }
    
    else // If everything is correct, starts to calculate the combination
    {
        for (i = x - 1; i > 0; i--) 
        {
            x = (x * i);
        } // Loop to calculate "!elements"

        for (i = y - 1; i > 0; i--) 
        {
            y = (y * i);
        } // Loop to calculate "!subsets"

        for (i = z - 1; i > 0; i--) 
        {
            z = (z * i);
        } // Loop to calculate the needed numbers for the formula

        var result3 = (x / (y * z));
        
        if (result3 == Infinity)
        {
            result3 = 1
        } // On some occasions the program gets infinite value even tough it should be 1

        if (isNaN(result3) == true || x == 0 || y > x > 0) // Checks that the input is okay
        {
            alert("Please input correct values.")
            document.getElementById("result3").innerHTML = "" ;
        }

        else // Prints the results
        {
            document.getElementById("result3").innerHTML = "Combinations: " + result3;
        } 
    }
}
