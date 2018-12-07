function permutationFunction()
{   
    var n = document.getElementById("inputElements").value;
    var r = document.getElementById("inputSubset").value;
    var checkBox = document.getElementById("selectReplacement");

    if (checkBox.checked == true)
    {
        for (i = n - 1; i > 0; i--) 
        {
            n = n * i;
        }

        var result2 = n;
        document.getElementById("result2").innerHTML = "Permutations with replacement:" + result2;
        
    }

    else    
    {
        for (i = n - 1; i > 0; i--) 
        {
            n = n * i;
        }

        var result2 = n;
        document.getElementById("result2").innerHTML = "Permutations:" + result2;
    }

}
