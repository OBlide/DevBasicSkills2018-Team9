function changeCalc(evt, siteName) 
{
    var i, calcbox, calclink;
    calcbox = document.getElementsByClassName("calcbox");

        for (i = 0; i < calcbox.length; i++) 
        {
            calcbox[i].style.display = "none";
        }

    calclink = document.getElementsByClassName("calclink");

        for (i = 0; i < calclink.length; i++) 
        {
            calclink[i].className = calclink[i].className.replace(" active", "");
        }

    document.getElementById(siteName).style.display = "flex";
    evt.currentTarget.className += " active";
}; 

// This javascript will change the tabs on the same page.