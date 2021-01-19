(function(l) {
    l.json2xml = function(r, e) {
        c = {};
        c = l.extend(true, c, t, e || {});
        return p(r, c.rootTagName, "", 0)
    };
    var t = {
        formatOutput: true,
        formatTextNodes: false,
        indentString: "  ",
        rootTagName: "root",
        ignore: [],
        replace: [],
        nodes: [],
        exceptions: []
    };
    var c = {};
    var p = function(r, e, t, a) {
        var n = c.formatOutput ? "\r\n": "";
        var o = c.formatOutput ? m(a) : "";
        var f = o + "<" + e;
        var i = "";
        for (var v in r) {
            if (r.hasOwnProperty(v)) {
                var u = t + v;
                var s = d(t, v);
                if (l.inArray(u, c.ignore) == -1) {
                    if (l.isArray(r[v])) {
                        i += x(r[v], s, u + ".", a + 1, n)
                    } else if (typeof r[v] === "object") {
                        i += p(r[v], s, u + ".", a + 1)
                    } else {
                        if (s.indexOf("@") == -1) {
                            i += g(s, r[v], a, n)
                        } else {
                            s = s.replace("@", "");
                            f += " " + s + '="' + r[v] + '"'
                        }
                    }
                }
            }
        }
        if (i !== "") {
            f += ">" + n + i + o + "</" + e + ">" + n
        } else {
            f += "/>" + n
        }
        return f
    };
    var m = function(r) {
        var e = "";
        for (var t = 0; t < r; t++) {
            e += c.indentString
        }
        return e
    };
    var d = function(r, e) {
        var t = c.replace.length;
        var a = r + e;
        while (t--) {
            if (c.replace[t].hasOwnProperty(a)) {
                return c.replace[t][a]
            }
        }
        return e
    };
    var x = function(r, e, t, a, n) {
        var o = "";
        if (r.length > 0) {
            for (var f in r) {
                if (typeof r[f] !== "object") {
                    if (r[f] === "") {
                        o += m(a) + "<" + e + "/>" + n
                    } else {
                        var i = c.formatTextNodes ? n + m(a + 1) : "";
                        var v = c.formatTextNodes ? n + m(a) : "";
                        o += m(a) + "<" + e + ">" + i + r[f] + v + "</" + e + ">" + n
                    }
                } else {
                    o += p(r[f], e, t, a)
                }
            }
        } else {
            o += m(a) + "<" + e + "/>" + n
        }
        return o
    };
    var g = function(r, e, t, a) {
        var n = c.formatTextNodes ? a + m(t + 2) : "";
        var o = c.formatTextNodes ? a + m(t + 1) : "";
        var f = m(t + 1) + "<" + r + ">" + n + e + o + "</" + r + ">" + a;
        return f
    }
})(jQuery);

$('#html-forrmat-file').click(function() {
    $("#html-forrmat-loadfile").click();
});

$('#html-forrmat-loadfile').change(function() {
    var reader = new FileReader();
    reader.onload = function(event) {
        $("#source").val(event.target.result);
    }
    reader.readAsText(this.files[0]);
});

$('#delete').click(function() {
    $("#source").val("");
});

$(document).on('click', '#copy', function() {
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = $("#source").val();
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        $(".show").remove();
        $(".col-md-12>.form-group>.form-group").append("<div style='margin-top: 10px;' class=\"alert alert-success alert-dismissible fade show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>Copied to Clipboard.</div>");
    }
    document.body.removeChild(input);
});
