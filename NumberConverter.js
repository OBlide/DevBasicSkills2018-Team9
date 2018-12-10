// Converts numbers

function numberConverter(source, valNum) 
{
    var inputBinary = document.getElementById("inputBinary");
    var inputDecimal = document.getElementById("inputDecimal");
    var inputOctal = document.getElementById("inputOctal");
    var inputHexadecimal = document.getElementById("inputHexadecimal");

    if (source=="inputBinary") 
    {
        if (valNum.length > 0)
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

    if (source=="inputDecimal") 
    {
        if (valNum.length > 0)
        {
            var testingDecimal = (/^[0-9-]+$/.test(valNum))

            if (testingDecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 10).toString(2));
                inputOctal.value=(parseInt(valNum, 10).toString(8));
                inputHexadecimal.value=(parseInt(valNum, 10).toString(16).toUpperCase());
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

    if (source=="inputOctal") 
    {   
        if (valNum.length > 0)
        {
            var testingOctal = (/^[0-7-]+$/.test(valNum))

            if (testingOctal == 1)
            {
                inputBinary.value=(parseInt(valNum, 8).toString(2));
                inputDecimal.value=(parseInt(valNum, 8).toString(10));
                inputHexadecimal.value=(parseInt(valNum, 8).toString(16).toUpperCase());
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

        if (valNum.length > 50)
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }
    }

    if (source=="inputHexadecimal") 
    {   
        if (valNum.length > 0)
        {
            var testingHexadecimal = (/^[0-9A-F]+$/i.test(valNum))

            if (testingHexadecimal == 1)
            {
                inputBinary.value=(parseInt(valNum, 16).toString(2));
                inputDecimal.value=(parseInt(valNum, 16));
                inputOctal.value=(parseInt(valNum, 16).toString(8));
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

        if (valNum.length > 50)
        {
            alert("Your number is too big.")
            document.getElementById("inputBinary").value="";
            document.getElementById("inputDecimal").value="";
            document.getElementById("inputOctal").value="";
            document.getElementById("inputHexadecimal").value="";
        }
    }
}
