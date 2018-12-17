// Calculates permutation

function permutationFunction()
{   
    var q = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var checkBox = document.getElementById("selectReplacement");
    var s = (q - r);

    if (q == 0) // Checks if a size is given to the elements
    {
        alert("Please enter a size for the elements.");
        document.getElementById("result1").innerHTML = "Permutations: ";        
        document.getElementById("result2").innerHTML = "Permutations with replacement: ";
    }

    if (r == 0) // Checks if a size is given to the subset
    {
        alert("Please enter a size for the subset.");
        document.getElementById("result1").innerHTML = "Permutations: ";        
        document.getElementById("result2").innerHTML = "Permutations with replacement: ";
    }

    if (+r > +q) // Checks that the size of the elements is larger than the size of the subsets
    {
        alert("Please input correct values. (The size of elements have to be larger than the size of subset.)");
        document.getElementById("result1").innerHTML = "Permutations: ";        
        document.getElementById("result2").innerHTML = "Permutations with replacement: ";
    }

    else
    {   
        if (checkBox.checked == true) // Permutations with replacement
        {
            var result2 = Math.pow(q,r);    

            if (+result2 > 999999999999999999999) // Checks if the number is too big
            {
                alert("Please input smaller values.")
                document.getElementById("result1").innerHTML = "Permutations: ";        
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";
            }

            else
            {
                document.getElementById("result1").innerHTML = "Permutations: ";  
                document.getElementById("result2").innerHTML = "Permutations with replacement: " +result2 ;
            }
        }

        else // Permutations without replacement
        {
            var result1 = (q / s);

            if (q == r) // If the the elements is the same size as the subset
            {
                for (i = q - 1; i > 0; i--) 
                {
                    q = (q * i);
                }

                result1 = q
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

            if (isNaN(result1) == true) // If the result is not a number
            {
                alert("Please input correct values.")
                document.getElementById("result1").innerHTML = "Permutations: ";        
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";
            }

            
            if (+result1 > 9999999999999999999999) // Checks if the number is too big
            {
                alert("Please input smaller values.")
                document.getElementById("result1").innerHTML = "Permutations: ";        
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";
            }

            else // Prints the result
            {
                document.getElementById("result1").innerHTML = "Permutations: " +result1 ;
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";        
            }
        }
    }

}
