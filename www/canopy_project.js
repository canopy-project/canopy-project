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
                <div class='topbar-middle-part'>"
                    + writeLink("index.html", "Home", (page == "home"))
                    + writeLink("devzone/index.html", "Developer Zone", (page == "devzone"))
                    + writeLink("support_us.html", "Services", (page == "supportus")) + "\
                </div>\
                <div class='topbar-right-part'>\
                    <div class='topbar-login'>LOGIN</div>\
                </div>\
            </div>\
        </div>");
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

$(document).ready(function() {
});
