function changeSite(evt, siteName) 
{
    var i, sitebox, sitelink;
    sitebox = document.getElementsByClassName("sitebox");

        for (i = 0; i < sitebox.length; i++) 
        {
            sitebox[i].style.display = "none";
        }

    sitelink = document.getElementsByClassName("sitelink");

        for (i = 0; i < sitelink.length; i++) 
        {
            sitelink[i].className = sitelink[i].className.replace(" active", "");
        }

    document.getElementById(siteName).style.display = "flex";
    evt.currentTarget.className += " active";
}; 

// This javascript will change the tabs on the same page.