function RenderTopbar(page) {
    function writeLink(link, name, selected) {
        if (selected) {
            return "<div class='topbar_button w400'><a href=" + link + ">" + name + "</a></div>";
        }
        else {
            return "<div class='topbar_button'><a href=" + link + ">" + name + "</a></div>";
        }
    }
    document.write("<div style='min-width:1004px'>\
    <div class='topbar-outer'>\
        <div class=center_channel>\
            <span class=logo-topbar>Canopy</span>\
            <div style='float:right'>"
                + writeLink("index.html", "Home", (page == "home"))
                + writeLink("developer_zone.html", "Developer Zone", (page == "devzone"))
                + writeLink("support_us.html", "Support Us", (page == "supportus")) + "\
                <a href=http://app.canopy.link><div class='button_link'>LOGIN</div></a>\
            </div>\
        </div>\
    </div>\
</div>");
}

function RenderDevZoneMenu(page) {
    function writeLink(link, name, selected) {
        if (selected) {
            return "<div class='topbar_button w400'><a href=" + link + ">" + name + "</a></div>";
        }
        else {
            return "<div class='topbar_button'><a href=" + link + ">" + name + "</a></div>";
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
