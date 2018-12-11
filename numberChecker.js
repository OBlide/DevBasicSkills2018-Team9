function checkNumber()
{
    var givenNumb = document.getElementById("inputNumber").value;
    var checkNumb = (/^[0-9/.,-]+$/.test(givenNumb));
    document.getElementById("integerAnsw").innerHTML = "";
    document.getElementById("naturalAnsw").innerHTML = "";
    document.getElementById("decimalAnsw").innerHTML = "";
    document.getElementById("squareAnsw").innerHTML = "";

    if ( checkNumb == 1 )
    {
        document.getElementById("numberAnsw").innerHTML = "Your number was: "+givenNumb+"<br>It is:"

        if ( Math.floor(givenNumb) == givenNumb && Number.isInteger(+givenNumb) == true )
        {
            document.getElementById("integerAnsw").innerHTML = "An integer";
        }

        if ( givenNumb >= 0.0 && Math.floor(givenNumb) == givenNumb && givenNumb !== Infinity)
        {
            document.getElementById("naturalAnsw").innerHTML = "A natural number";
        }

        if ( givenNumb - Math.floor(givenNumb) !== 0 )
        {
            document.getElementById("decimalAnsw").innerHTML = "A decimal number";
        }

        if ( givenNumb > 0 && Math.sqrt(givenNumb) % 1 == 0)
        {
            document.getElementById("squareAnsw").innerHTML = "A square number";
        }
    }
    else
    {
        alert("Please enter a number")
    }
    

}