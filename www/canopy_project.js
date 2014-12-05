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
                    <div class='logo' style='padding-left:30px;font-size:28px'>Canopy</div>\
                </div>\
                <div class='topbar-middle-part'>"
                    + writeLink("index.html", "Home", (page == "home"))
                    + writeLink("devzone/index.html", "Developer Zone", (page == "devzone"))
                    + writeLink("services.html", "Services", (page == "services")) + "\
                </div>\
                <div class='topbar-right-part'>\
                    <div class='topbar-login'>Login</div>\
                </div>\
            </div>\
        </div>\
        <div style='height:38px;'>&nbsp;</div>\
        ");
}

function RenderFooter() {
    document.write("\
    <div class='bg-darkgray footer centered'>\
        <div class='footer-inner'>\
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
\
            <br>\
            Copyright 2014 SimpleThings, Inc.\
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
