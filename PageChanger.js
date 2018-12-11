// Changes site/tab on the same page

function changeSite(evt, siteName) 
{
    var i, sitebox, sitelink;
    sitebox = document.getElementsByClassName("sitebox");

        for (i = 0; i < sitebox.length; i++) 
        {
            sitebox[i].style.display = "none";
        }

        // If tab isn't selected it changes the display to none

    sitelink = document.getElementsByClassName("sitelink");

        for (i = 0; i < sitelink.length; i++) 
        {
            sitelink[i].className = sitelink[i].className.replace("active", "");
        }

        // If tab is selected it changes the display to active --> flex

    document.getElementById(siteName).style.display = "flex";
    evt.currentTarget.className += "active";
}
