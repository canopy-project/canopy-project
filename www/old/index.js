var gPage = "";

function RenderTopbar($target, page) {
    function extraClass(p) {
        if (p == page)
            return "title_menu_item_selected";
        return "";
    }

    $target.html("\
    <table width=100% border=0 cellpadding=0 cellspacing=0>\
        <tr>\
            <td valign=bottom style='padding:8px' width=1>\
                <img src=canopy_logo.jpg border=0 width=100 style='position:relative; top:5px'>\
            </td>\
            <td>\
                <div class=title_menu>\
                    <div class='title_menu_item' style='margin-left:0px'>\
                        <a href=index_new.html><img align=top src=http://c.dryicons.com/images/icon_sets/stickers_icon_set/png/32x32/home.png></a>\
                    </div>\
                    <div class='title_menu_item " + extraClass("features") + "'><a href=new_features.html>Features</a></div>\
                    <div class='title_menu_item " + extraClass("download") + "'><a href=downloads.html>Download</a></div>\
                    <div class='title_menu_item'><a target=_blank href=api_docs>Documentation</a></div>\
                    <div class='title_menu_item'><a target=_blank href=http://github.com/canopy-project>Source</a></div>\
                    <div class='title_menu_item " + extraClass("faq") + "'><a href=faq.html>FAQ</a></div>\
                    <div class='title_menu_item " + extraClass("contact") + "'><a href='contact'>Contact</a></div>\
                </div>\
            </td>\
            <td width=1 nowrap style='padding:8px;padding-right:16px' >\
                <a class=button_link href=go.php>login</a>\
            </td>\
        </tr>\
    </table>");
}

$(document).ready(function() {
    RenderTopbar($("#topbar"), gPage);

    $("#hex1").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            We believe the Internet of Things, like the World Wide Web itself, should be\
            built upon open standards and open source software.  That's why we're\
            making <span class=logo-in-text>Canopy</span> a completely open\
            source project with royalty-free file formats and protocols.\
            \
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex2").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            With the Internet of Things becoming a big part of our lives,\
            security and privacy are primary concerns.  We've made security a\
            top priority, using technologies such as SSL and OAuth 2.0 to keep\
            intruders out.  As for privacy: <span\
            class=logo-in-text>Canopy</span> is the only IoT platform that\
            empowers the end user, allowing them to decide who can monitor and\
            control their devices.\
            \
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex3").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            We like things to be fast.  We're a bit obsessive about it,\
            actually.  That's why we use low-latency websockets to talk to\
            <span class=logo-in-text>Canopy-enabled</span> devices, and why we\
            built our own high-performance message-passing system, which we call\
            \"pigeon\".  Our architecture allows control instructions to travel from\
            your smartphone, to the cloud, to your device in just milliseconds.\
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex4").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            The <span class=logo-in-text>Canopy Cloud Service</span> is\
            light-weight and designed to scale to a support a massive numbers of devices.  Early on, we decided to\
            implement <span class=logo-in-text>Canopy's</span> server-side components using golang and cassadra because of\
            their great scaling properties.  To support more devices, just add\
            more servers to your <span class=logo-in-text>Canopy Cloud</span> deployment.\
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex5").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            It takes just a few lines of embedded code\
            to make your product <span class=logo-in-text>Canopy-enabled</span>,\
            which allows it to be controlled and monitored from the Internet.  Our\
            hosted <span class=logo-in-text>Canopy Cloud Service</span> will\
            get you up-and-running in no time.\
            For application developers,\
            our REST API is simple and intuitive, yet generic enough to \
            address a wide range of\
            use-cases.\
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex6").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            The <span class=logo-in-text>Canopy Cloud Service</span> is more\
            than just a translation layer.  It records every device interaction\
            and status update in detail, and gives you access to this data for\
            later analysis and monitoring.  Moreover, we've got an exciting feature\
            roadmap including schedules, rules, smart notifications, and\
            direct M2M connections to make everyday <i>things</i> smarter than ever.\
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
    $("#hex7").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            Many problem domains, including smart home\
            automation, solar and smart-grid montoring, factory automation,\
            farm automation, environmental monitoring, and parking management, \
            have a common need for foundational IoT infrastructure.\
            We're building <span class=logo-in-text>Canopy</span> to be a\
            powerful platform that can be leveraged by anyone in the IoT space.\
            \
            ");
    },
    function() {
        $("#hexdetails").removeClass("hexdetailsbg");
        $("#hexdetails").html("");
    }
    );
});
