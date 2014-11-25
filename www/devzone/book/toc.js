var items = [
    {
        "type" : "chapter",
        "title" : "Chapter 1: Getting Started",
        "link" : null
    }, {
        "type" : "section",
        "title" : "1.1: About Cloud-Enabled Devices",
        "link" : "c1_1.html"
    }, {
        "type" : "section",
        "title" : "1.2: About Canopy",
        "link" : "c1_2.html"
    }, {
        "type" : "section",
        "title" : "1.3: Canopy Basics",
        "link" : "c1_3.html"
    }, {
        "type" : "section",
        "title" : "1.4: Using Canopy",
        "link" : "using_canopy.html"
    }, {
        "type" : "section",
        "title" : "1.5: Embedded Installation",
        "link" : "embedded_install.html"
    }, {
        "type" : "section",
        "title" : "1.6: Server (Cloud) Installation",
        "link" : "cloud_install.html"
    }, {
        "type" : "chapter",
        "title" : "Chapter 2: Cloud Variables",
        "link" : null
    }, {
        "type" : "section",
        "title" : "2.1: What Are They?",
        "link" : "c2_1.html"
    }
];

function RenderToc(page) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.link == page) {
            document.write("<div class=toc-" + item.type + "><b><a href='" + item.link + "'>" + item.title + "</a></b></div>");
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
        if (item.link == page) {
            if (i > 1) {
                document.write("<a href='" + items[i-1].link + "'>Prev</a> | ");
            }
            if (i < items.length - 1) {
                document.write("<a href='" + items[i+1].link + "'>Next</a>");
            }
        } 
    }
}
