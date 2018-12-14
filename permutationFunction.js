// Calculates permutation

function permutationFunction()
{   
    var q = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var s = (q - r);
    var checkBox = document.getElementById("selectReplacement");
    var result1 = Math.pow(q,r);
    var result2 = (q / s);

    if ( q == 0 )
    {
        alert("Please enter a size for the elements.");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else if (r == 0)
    {
        alert("Please enter a size for the subset.");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else if ( r > q > 0)
    {
        alert("Please input correct values. (The size of elements have to be larger than the size of subset.)");
        document.getElementById("result1").innerHTML = "";        
        document.getElementById("result2").innerHTML = "";
    }

    else
    {   
        if (checkBox.checked == true)
        {
                var result1 = Math.pow(q,r);
                document.getElementById("result1").innerHTML = "Permutations with replacement: " + result1;
        }

        else    
        {
            if (q == r)
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
                }

                for (i = s - 1; i > 0; i--) 
                {
                    s = (s * i);
                }
            }

            if(isNaN(result2) == true)
            {
                alert("Please input correct values.")
                document.getElementById("result1").innerHTML = "";        
                document.getElementById("result2").innerHTML = "";
            }

            else
            {
                document.getElementById("result2").innerHTML = "Permutations: " + result2;
            }
        }
    }

}
