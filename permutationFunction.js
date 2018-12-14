// Calculates permutation

function permutationFunction()
{   
    var q = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var s = (q - r);
    var checkBox = document.getElementById("selectReplacement");
    var result1 = Math.pow(q,r);
    var result2 = (q / s);

    if ( q == 0 ) // Checks if a size is given to the elements
    {
        alert("Please enter a size for the elements.");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else if (r == 0) // Checks if a size is given to the subset
    {
        alert("Please enter a size for the subset.");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else if ( r > q > 0) // Checks that the size of the elements is larger than the size of the subsets
    {
        alert("Please input correct values. (The size of elements have to be larger than the size of subset.)");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else
    {   
        if (checkBox.checked == true) // Permutations with replacement
        {
                var result1 = Math.pow(q,r);
                document.getElementById("result1").innerHTML = "Permutations with replacement: " + result1;
        }

        else // Permutations without replacement
        {
            if (q == r) // If the the elements is the same size as the subset
            {
                for (i = q - 1; i > 0; i--) 
                {
                    q = (q * i);
                }

                result2 = q
            }

            else
            {
                for (i = q - 1; i > 0; i--) 
                {
                    q = (q * i);
                } // Loop to calculate "!elements"

                for (i = s - 1; i > 0; i--) 
                {
                    s = (s * i);
                } // Loop to calculate "!subsets"
            }

            if(isNaN(result2) == true) // If the result is not a number
            {
                alert("Please input correct values.")
                document.getElementById("result1").innerHTML = "";        
                document.getElementById("result2").innerHTML = "";
            }

            else // Prints the result
            {
                document.getElementById("result2").innerHTML = "Permutations: " + result2;
            }
        }
    }

}
