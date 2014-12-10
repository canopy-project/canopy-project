
function RenderTopbar(page) {
    function writeLink(link, name, selected) {
        var _RELATIVE_PATH = (typeof RELATIVE_PATH == "undefined") ? "" : RELATIVE_PATH;
        if (selected) {
            return "<div class='topbar-button w400'><a href=" + _RELATIVE_PATH + link + ">" + name + "</a></div>";
        }
        else {
            return "<div class='topbar-button'><a href=" + _RELATIVE_PATH + link + ">" + name + "</a></div>";
        }
    }
    document.write(
        "<div class='topbar'>\
            <div class='topbar-inner'>\
                <div class='topbar-left-part'>\
                    <div class='topbar-logo'>Canopy</div>\
                </div>\
                <div class='topbar-middle-part'>"
                    + writeLink("index.html", "Home", (page == "home"))
                    + writeLink("devzone/index.html", "Developer Zone", (page == "devzone"))
                    + writeLink("services.html", "Services", (page == "services")) + "\
                </div>\
                <div class='topbar-right-part'>\
                    <a target='_blank' href='http://app.canopy.link'><div class='topbar-login'>Login</div></a>\
                </div>\
            </div>\
        </div>\
        <div style='height:58px;'>&nbsp;</div>\
        ");
}

function RenderFooter() {
    document.write("\
    <div class='bg-darkgray footer centered'>\
        <div style='display:inline-block; text-align:left'>\
            <table cellpadding=0 cellspacing=0>\
                <tr>\
                    <td class=footer-item>Twitter</td>\
                    <td align=left>\
                        <a target=_blank href='http://twitter.com/CanopyIoT'>\
                            @CanopyIoT\
                        </a>\
                    </td>\
                </tr>\
                <tr>\
                    <td class=footer-item>Email</td>\
                    <td align=left>\
                        <a target=_blank href='mailto:info@canopy.link'>\
                            info@canopy.link\
                        </a>\
                    </td>\
                </tr>\
                <tr>\
                    <td class=footer-item>Github</td>\
                    <td align=left>\
                        <a target=_blank href='http://github.com/canopy-project'>\
                            http://github.com/canopy-project</a>\
                        </a>\
                    </td>\
                </tr>\
                <tr>\
                    <td class=footer-item>Forum</td>\
                    <td align=left>\
                        <a target=_blank href='http://canopy.lefora.com'>\
                            http://canopy.lefora.com</a>\
                        </a>\
                    </td>\
                </tr>\
            </table>\
        </div><br>\
\
        <div class='footer-inner'>\
            <br>\
            Copyright 2014 SimpleThings, Inc.<br><br>\
\
            <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'><img alt='Creative Commons License' style='border-width:0' src='https://i.creativecommons.org/l/by/4.0/88x31.png' /></a><br />Except where otherwise noted, this site is licensed under a <a rel='license' href='http://creativecommons.org/licenses/by/4.0/'><u>Creative Commons Attribution 4.0 International License</u></a>.\
        </div>\
    </div>\
    ");
}

function RenderDevZoneMenu(page) {
    function writeLink(link, name, selected) {
        var _RELATIVE_PATH = (typeof RELATIVE_PATH == "undefined") ? "" : RELATIVE_PATH;
        if (selected) {
            return "<div class='topbar_button w400'><a href=" + _RELATIVE_PATH + link + ">" + name + "</a></div>";
        }
        else {
            return "<div class='topbar_button'><a href=" + _RELATIVE_PATH + link + ">" + name + "</a></div>";
        }
    }
    document.write("<div style='min-width:1004px'>\
    <div class='topbar-outer'>\
        <div class=center_channel>"
            + writeLink("developer_zone.html", "SDDL", (page == "sddl"))
            + writeLink("dz_embedded.html", "Embedded", (page == "embedded"))
            + writeLink("dz_application.html", "Application", (page == "application"))
            + writeLink("dz_cloud.html", "Cloud", (page == "cloud"))
            + writeLink("dz_contribute.html", "Contribute", (page == "contribute")) + "\
        </div>\
    </div>\
</div>");
}

// Google anayltics stuff
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57521830-1', 'auto');
ga('send', 'pageview');
