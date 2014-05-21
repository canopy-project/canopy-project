$(document).ready(function() {
    $("#hex1").hover(function() {
        $("#hexdetails").addClass("hexdetailsbg");
        $("#hexdetails").html("\
            We believe the Internet of Things, like the World Wide Web itself, should be\
            built upon open standards and open source software.  That's why we're\
            making <span class=logo-in-text>canopy</span> a completely open\
            source project with royalty-free formats and protocols.\
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
            class=logo-in-text>canopy</span> is the only IoT platform that\
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
            <span class=logo-in-text>canopy-enabled</span> devices, and why we\
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
            implement <span class=logo-in-text>canopy's</span> server-side components using golang and cassadra because of\
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
            to make your device <span class=logo-in-text>canopy-enabled</span>,\
            enabling it to be controlled and monitored from the Internet.  Our\
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
            We're building <span class=logo-in-text>canopy</span> to be a\
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
