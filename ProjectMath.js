//Number system conversions

function numberConverter(source,valNum) 
{
    var inputBinary = document.getElementById("inputBinary");
    var inputDecimal = document.getElementById("inputDecimal");
    var inputOctal = document.getElementById("inputOctal");
    var inputHexadecimal = document.getElementById("inputHexadecimal");

    if (source=="inputBinary") 
    {
        if (inputBinary.value > 0)
        {
            var testingBin = (/^[01-]+$/.test(valNum))
        
            if (testingBin == 1)
            {
            inputDecimal.value=(parseInt(valNum, 2));
            inputOctal.value=(parseInt(valNum, 2).toString(8));
            inputHexadecimal.value=(parseInt(valNum, 2).toString(16).toUpperCase());
            }

            else
            {
                alert("ONLY BINARY NUMBERS PLEASE")
                document.getElementById("inputBinary").value="";
            }
        }

        else
        {
            return
        }
    }

    if (source=="inputDecimal") 
    {
        if (inputDecimal.value > 0)
        {

            var testingDecimal = (/^[0123456789-]+$/.test(valNum))

            if (testingDecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 10).toString(2));
                inputOctal.value=(parseInt(valNum, 10).toString(8));
                inputHexadecimal.value=(parseInt(valNum, 10).toString(16).toUpperCase());
            }

            else
            {
                alert("ONLY DECIMAL NUMBERS PLEASE")
                document.getElementById("inputDecimal").value="";
            }
        }

        else
        {
            return
        }
    }

    if (source=="inputOctal") 
    {   
        if (inputOctal.value > 0)
        {
            var testingOctal = (/^[01234567-]+$/.test(valNum))

            if (testingOctal == 1)
            {
                inputBinary.value=(parseInt(valNum, 8).toString(2));
                inputDecimal.value=(parseInt(valNum, 8).toString(10));
                inputHexadecimal.value=(parseInt(valNum, 8).toString(16).toUpperCase());
            }

            else
            {
                alert("ONLY OCTAL NUMBERS PLEASE")
                document.getElementById("inputOctal").value="";
            }
        }

        else
        {
            return
        }
    }

    if (source=="inputHexadecimal") 
    {   
        var HexTest = inputHexadecimal.toString();

        if (HexTest.length > 0)
        {
            var testingHexadecimal = (/^[0123456789ABCDEFabcdef-]+$/.test(valNum))

            if (testingHexadecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 16).toString(2));
                inputDecimal.value=(parseInt(valNum, 16));
                inputOctal.value=(parseInt(valNum, 16).toString(8));
            }

            else
            {
                alert("ONLY HEXADECIMAL NUMBERS PLEASE")
                document.getElementById("inputHexadecimal").value="";
            }
        }   

        else
        {
            return
        }
    }
}


//Number system outputs

//Combinatorics

//Truth tables

//Random values

//Our own functionality