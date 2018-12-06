function combinatoricsCalc(source, valNum) 
{
    var inputElements = document.getElementById("inputElements");
    var inputSubset = document.getElementById("inputSubset");
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
                alert("Only binary numbers (0,1), please!")
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
                alert("Only decimal numbers (0-9), please!")
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
                alert("Only octal numbers (0-7), please!")
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
                alert("Only hexadecimal numbers (0-F), please!")
                document.getElementById("inputHexadecimal").value="";
            }
        }   

        else
        {
            return
        }
    }
}