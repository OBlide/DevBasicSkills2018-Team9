// Calculates permutation

function permutationFunction()
{   
    var q = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var checkBox = document.getElementById("selectReplacement");
    var s = q - r;
    var result2 = Math.pow(+q,+r);

    if (q == 0) // Checks if a size is given to the elements
    {
        alert("Please enter a size for the elements.");
    }

    else if (r == 0) // Checks if a size is given to the subset
    {
        alert("Please enter a size for the subset.");
    }

    else if (+r > +q) // Checks that the size of the elements is larger than the size of the subsets
    {
        alert("Please input correct values. (The size of elements have to be larger than the size of subset.)");
    }

    else
    {   
        if (checkBox.checked == true) // Permutations with replacement
        {  
            if (+result2 > 999999999999999999999) // Checks if the number is too big
            {
                alert("Please input smaller values.");
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
            var result1 = q / s;

            if (q == r) // If the the elements is the same size as the subset
            {
                for (i = q - 1; i > 0; i--) 
                {
                    q = (q * i);
                }

                result1 = q
                document.getElementById("result1").innerHTML = "Permutations: " +result1 ;
                document.getElementById("result2").innerHTML = "Permutations with replacement: "; 
            }

            else if (isNaN(result1) == true) // If the result is not a number
            {
                alert("Please input correct values.")
                document.getElementById("result1").innerHTML = "Permutations: ";        
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";
            }

            
            else if (+result1 > 9999999999999999999999) // Checks if the number is too big
            {
                alert("Please input smaller values.")
                document.getElementById("result1").innerHTML = "Permutations: ";        
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";
            }

            else
            {
                for (i = q - 1; i > 0; i--) 
                {
                    q = q * i;
                } // Loop to calculate "!elements"

                for (i = s - 1; i > 0; i--) 
                {
                    s = s * i;
                } // Loop to calculate a negation of the elements and subsets

                var result1 = q / s;

                document.getElementById("result1").innerHTML = "Permutations: " +result1 ;
                document.getElementById("result2").innerHTML = "Permutations with replacement: ";   

            }


        }
    }

}
