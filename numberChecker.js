function checkNumber()
{
    var givenNumb = document.getElementById("inputNumber").value;
    var checkNumb = (/^[0-9/.,-]+$/.test(givenNumb));
    document.getElementById("integerAnsw").innerHTML = "";
    document.getElementById("naturalAnsw").innerHTML = "";
    document.getElementById("decimalAnsw").innerHTML = "";
    document.getElementById("squareAnsw").innerHTML = "";

    if ( checkNumb == 1 ) // If the number is correct, it starts the checking
    {
        document.getElementById("numberAnsw").innerHTML = "Your number was: "+givenNumb+"<br>It is:"

        if ( Math.floor(givenNumb) == givenNumb && Number.isInteger(+givenNumb) == true )
        {
            document.getElementById("integerAnsw").innerHTML = "An integer";
        } // Checks if the number is an integer

        if ( givenNumb >= 0.0 && Math.floor(givenNumb) == givenNumb && givenNumb !== Infinity)
        {
            document.getElementById("naturalAnsw").innerHTML = "A natural number";
        } // Checks if the number is a natural number

        if ( givenNumb - Math.floor(givenNumb) !== 0 )
        {
            document.getElementById("decimalAnsw").innerHTML = "A decimal number";
        } // Checks if the number is a decimal number

        if ( givenNumb > 0 && Math.sqrt(givenNumb) % 1 == 0)
        {
            document.getElementById("squareAnsw").innerHTML = "A square number";
        } // Checks if the number is a square number
    }
    else
    {
        alert("Please enter a number")
    }
    

}