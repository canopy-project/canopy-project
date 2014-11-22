function RenderToc(page) {
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
            "title" : "1.2: Foobar",
            "link" : "c1_2.html"
        }
    ];
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
