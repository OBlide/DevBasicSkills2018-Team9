//Number system conversions

function numberConverter(source,valNum) 
{
    valNum = parseFloat(valNum);
    var inputBinary = document.getElementById("inputBinary");
    var inputDecimal = document.getElementById("inputDecimal");
    var inputOctal = document.getElementById("inputOctal");
    var inputHexadecimal = document.getElementById("inputHexadecimal");

    if (source=="inputBinary") 
    {
      inputDecimal.value=(parseInt(valNum, 2));
      inputOctal.value=(parseInt(valNum, 2).toString(8));
      inputHexadecimal.value=(parseInt(valNum, 2).toString(16));
    }

    if (source=="inputDecimal") 
    {
        inputBinary.value=(parseInt(valNum, 10).toString(2));
        inputOctal.value=(parseInt(valNum, 10).toString(8));
        inputHexadecimal.value=(parseInt(valNum, 10).toString(16));
    }

    if (source=="inputOctal") 
    {        
        inputBinary.value=(parseInt(valNum, 8).toString(2));
        inputDecimal.value=(parseInt(valNum, 8).toString(10));
        inputHexadecimal.value=(parseInt(valNum, 8).toString(16));
    }

    if (source=="inputHexadecimal") 
    {        
        inputBinary.value=(parseInt(valNum, 16).toString(2));
        inputDecimal.value=(parseInt(valNum, 16).toString(10));
        inputOctal.value=(parseInt(valNum, 16).toString(8));
    }
}

//Number system outputs

//Combinatorics

//Truth tables

//Random values

//Our own functionality