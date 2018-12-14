// Converts numbers

function numberConverter(source, valNum) 
{
    var inputBinary = document.getElementById("inputBinary");
    var inputDecimal = document.getElementById("inputDecimal");
    var inputOctal = document.getElementById("inputOctal");
    var inputHexadecimal = document.getElementById("inputHexadecimal");

    if (source=="inputBinary") // Starts calculation if input is in the binary field
    {
        if (valNum.length > 0)
        {
            var testingBin = (/^[01-]+$/.test(valNum)) // Checks that the input is in binary
        
            if (testingBin == 1)
            {
                inputDecimal.value=(parseInt(valNum, 2));                                   // Decimal
                inputOctal.value=(parseInt(valNum, 2).toString(8));                         // Octal
                inputHexadecimal.value=(parseInt(valNum, 2).toString(16).toUpperCase());    // Hexadecimal
            }

            else
            {
                alert("Only binary numbers (0,1), please!")
                document.getElementById("inputBinary").value="";
                document.getElementById("inputDecimal").value="";
                document.getElementById("inputOctal").value="";
                document.getElementById("inputHexadecimal").value="";
            }
        }

        if (valNum.length > 60) // Used to keep numbers shorter so that the numbers don't break in the fields
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }


    }

    if (source=="inputDecimal") // Starts calculation if input is in the decimal field
    {
        if (valNum.length > 0)
        {
            var testingDecimal = (/^[0-9-]+$/.test(valNum)) // Checks that the input is in decimal

            if (testingDecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 10).toString(2));                       // Binary
                inputOctal.value=(parseInt(valNum, 10).toString(8));                        // Octal
                inputHexadecimal.value=(parseInt(valNum, 10).toString(16).toUpperCase());   // Hexadecimal
            }

            else
            {
                alert("Only decimal numbers (0-9), please!")
                document.getElementById("inputBinary").value="";
                document.getElementById("inputDecimal").value="";
                document.getElementById("inputOctal").value="";
                document.getElementById("inputHexadecimal").value="";
                
            }
        }

        if (valNum.length > 50)
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }
    }

    if (source=="inputOctal") // Starts calculation if input is in the octal field
    {   
        if (valNum.length > 0)
        {
            var testingOctal = (/^[0-7-]+$/.test(valNum)) // Checks that the input is in octal

            if (testingOctal == 1)
            {
                inputBinary.value=(parseInt(valNum, 8).toString(2));                        // Binary
                inputDecimal.value=(parseInt(valNum, 8).toString(10));                      // Decimal
                inputHexadecimal.value=(parseInt(valNum, 8).toString(16).toUpperCase());    // Hexadecimal
            }

            else
            {
                alert("Only octal numbers (0-7), please!")
                document.getElementById("inputBinary").value="";
                document.getElementById("inputDecimal").value="";
                document.getElementById("inputOctal").value="";
                document.getElementById("inputHexadecimal").value="";
            }
        }

        if (valNum.length > 40)
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }
    }

    if (source=="inputHexadecimal") // Starts calculation if input is in the hexadecimal field
    {   
        if (valNum.length > 0)
        {
            var testingHexadecimal = (/^[0-9A-F]+$/i.test(valNum)) // Checks that the input is in hexadecimal

            if (testingHexadecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 16).toString(2));   // Binary
                inputDecimal.value=(parseInt(valNum, 16));              // Decimal
                inputOctal.value=(parseInt(valNum, 16).toString(8));    // Octal
            }

            else
            {
                alert("Only hexadecimal numbers (0-F), please!")
                document.getElementById("inputBinary").value="";
                document.getElementById("inputDecimal").value="";
                document.getElementById("inputOctal").value="";
                document.getElementById("inputHexadecimal").value="";
            }
        }   

        if (valNum.length > 40)
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }
    }
}
