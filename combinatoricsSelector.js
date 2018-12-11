// Change site/tab on the combinatorics page

function changeCalc(evt, siteName) 
{
    var i, calcbox, calclink;
    calcbox = document.getElementsByClassName("calcbox");

        for (i = 0; i < calcbox.length; i++) 
        {
            calcbox[i].style.display = "none";
        }

        // If tab isn't selected it changes the display to none

    calclink = document.getElementsByClassName("calclink");

        for (i = 0; i < calclink.length; i++) 
        {
            calclink[i].className = calclink[i].className.replace("active", "");
        }

        // If tab is selected it changes the display to active --> flex

    document.getElementById(siteName).style.display = "flex";
    evt.currentTarget.className += "active";
}