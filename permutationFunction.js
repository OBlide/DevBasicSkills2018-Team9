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
        alert("Please enter a value for your elements.")
    }

    else if (r == 0)
    {
        alert("Please enter a size for your subset.")
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
            }

            else
            {
                document.getElementById("result2").innerHTML = "Permutations: " + result2;
            }
        }
    }

}
