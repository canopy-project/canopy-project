var items = [
    {
        "type" : "chapter",
        "title" : "Chapter 1: Getting Started",
        "link" : null
    }, {
        "type" : "section",
        "title" : "1.1 About Cloud-Enabled Devices",
        "link" : "c1_1.html"
    }, {
        "type" : "section",
        "title" : "1.2 About Canopy",
        "link" : "c1_2.html"
    }, {
        "type" : "section",
        "title" : "1.3 Canopy Basics",
        "link" : "c1_3.html"
    }, {
        "type" : "section",
        "title" : "1.4 Using Canopy",
        "link" : "using_canopy.html"
    }, {
        "type" : "section",
        "title" : "1.5 Javascript Application Setup",
        "link" : "app_js_install.html"
    }, {
        "type" : "section",
        "title" : "1.6 Selecting Cloud Server",
        "link" : "using_hosted_server.html"
    }, {
        "type" : "chapter",
        "title" : "Chapter 2: Cloud Variables",
        "link" : null
    }, {
        "type" : "section",
        "title" : "2.1 About Cloud Variables",
        "link" : "cloudvars_about.html"
    }, {
        "type" : "section",
        "title" : "2.2 Cloud Variables with libcanopy",
        "link" : "cloudvars_embedded_basics.html"
    }, {
        "type" : "section",
        "title" : "2.3 libcanopy: Compiling and Running",
        "link" : "cloudvars_compiling_and_running.html"
    }, {
        "type" : "section",
        "title" : "2.4 Cloud Variables with Device REST API",
        "link" : "cloudvars_device_rest_api.html"
    }, {
        "type" : "chapter",
        "title" : "Chapter 3: Cloud Notifications",
        "link" : null
    }, {
        "type" : "section",
        "title" : "3.1 About Cloud Notifications",
        "link" : "notify_about.html"
    }
];

function RenderHead() {
    document.write("\
<head>\
    <title>Canopy - Developer Zone</title>\
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>\
    <link href='../../canopy_base.css' rel='stylesheet' type='text/css'>\
    <link href='../../canopy_project.css' rel='stylesheet' type='text/css'>\
    <link href='../../canopy_project_resp.css' rel='stylesheet' type='text/css'>\
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,700|ABeeZee|Titillium+Web:200,300,400,700' rel='stylesheet' type='text/css'>\
    <script type='text/javascript' src='../../3rdparty/shjs/sh_main.min.js'></script>\
    <link type='text/css' rel='stylesheet' href='../../3rdparty/shjs/sh_style_greg.css'>\
    <link href='../../canopy_project.css' rel='stylesheet' type='text/css'>\
</head>\
    ");
}

function RenderBodyStart() {
    var item = GetTocItem(BOOK_SECTION_LINK);
    document.write("\
<body onload=\"sh_highlightDocument('../../3rdparty/shjs/', '.min.js');\">\
<div class=main-outer>\
    <div class='bg-white centered'>\
        <script> \
            var RELATIVE_PATH = '../../';\
            RenderTopbar('devzone');\
        </script>\
    </div>\
    <div class='bg-darkblue banner-thin centered' >\
        <a href=../index.html>Developer Zone</a> &rarr; <span class=ml>Mastering Canopy (Online)</span> &rarr; " + item.title + "\
    </div>\
\
    <div class='book'>\
        <table width=100%>\
            <tr>\
                <td width=1 valign=top nowrap style='padding-right:20px'>\
                    <div class=toc>\
                        <script>RenderToc('using_canopy.html');</script>\
                    </div>\
                </td>\
                <td valign=top>\
\
        <div class='book-content'>\
    ");
}

function GetTocItem(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == BOOK_SECTION_LINK) {
            return item;
        } 
    }
    return null;
}

function RenderToc(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == BOOK_SECTION_LINK) {
            document.write("<div class='toc-selected toc-" + item.type + "'><a href='" + item.link + "'>" + item.title + "</a></div>");
        } 
        else if (item.link != null) {
            document.write("<div class=toc-" + item.type + "><a href='" + item.link + "'>" + item.title + "</a></div>");
        }
        else {
            document.write("<div class=toc-" + item.type + ">" + item.title + "</div>");
        }
    }
}

function RenderNextPrevButtons(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == BOOK_SECTION_LINK) {
            if (i > 1) {
                var j = (items[i-1].link == null) ? i-2 : i-1;
                document.write("<a class='w400' href='" + items[j].link + "'>Prev</a> | ");
            }
            if (i < items.length - 1) {
                var j = (items[i+1].link == null) ? i+2 : i+1;
                document.write("<a class='w400' href='" + items[j].link + "'>Next</a>");
            }
        } 
    }
}

var gUUID = undefined;
function RenderUUID() {
    if (gUUID == undefined)
    {
        gUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            function(c) { var r = Math.random()*16|0, v = c == 'x'
            ? r : (r&0x3|0x8); return v.toString(16); });
    }
    document.write(gUUID);
}
var gSecretKey = undefined;
function RenderSecretKey() {
    if (gSecretKey == undefined)
    {
        gSecretKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g,
            function(c) { var r = Math.random()*16|0, v = r; return v.toString(16); });

    }
    document.write(gSecretKey);
}

function RenderBodyFooter() {

    RenderNextPrevButtons(BOOK_SECTION_LINK);
    document.write("\
\
<div class=disqussion id=disqus_thread></div>\
<script type='text/javascript'>\
var disqus_shortname = 'canopyiot';\
\
(function() {\
 var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\
 dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\
 })();\
</script>\
<noscript>Please enable JavaScript to view the <a href='http://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>\
            \
\
\
                </td>\
            </tr>\
        </table>\
    </div>\
</div>\
\
    ");
    RenderFooter();
    document.write("\
</div>\
</body>\
    ");
}
