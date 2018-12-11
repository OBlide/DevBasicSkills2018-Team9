// Calculates permutation

function permutationFunction()
{   
    var q = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var s = (q - r);
    var checkBox = document.getElementById("selectReplacement");

    if ( q == 0 )
    {
        alert("Please enter a value for your elements.")
    }

    else
    {   
        if (checkBox.checked == true)
        {
            if ( r == 0 )
            {
                alert("Please enter a size for your subset.")
            }

            else
            {
                var result1 = Math.pow(q,r);
                document.getElementById("result1").innerHTML = "Permutations with replacement: " + result1;
            }
        }

        else    
        {
            if ( r == 0 )
            {
                r == 1
            }

            for (i = q - 1; i > 0; i--) 
            {
                q = (q * i);
            }

            for (i = s - 1; i > 0; i--) 
            {
                s = (s * i);
            }

            var result2 = (q / s);
            document.getElementById("result2").innerHTML = "Permutations: " + result2;
        }
    }

}
