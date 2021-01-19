$(document).ready(function() {
    $(".am-thumbnails li").each(function(e, n) {
        var a = $(n).height();
        if (a != 0) {
            $(n).prev().css("height", a + 10);
            $(n).next().css("height", a + 10)
        }
    })
});
window.SINGLE_TAB = "  ";
window.ImgCollapsed = "Collapsed.gif";
window.ImgExpanded = "Expanded.gif";
window.QuoteKeys = true;
function $id(e) {
    return document.getElementById(e)
}
function IsArray(e) {
    return e && typeof e === "object" && typeof e.length === "number" && !e.propertyIsEnumerable("length")
}
function Process() {
    SetTab();
    var json = $id("rawJson").value;
    var html = "";
    try {
        if (json == "") {
            json = '""'
        }
        var obj = eval("[" + json + "]");
        html = ProcessObject(obj[0], 0, false, false, false);
        $id("canvas").innerHTML = "<PRE class='CodeContainer'>" + html + "</PRE>"
    } catch(e) {
        $id("canvas").innerHTML = "<PRE class='CodeContainerError'><span style='color: red'>" + e.message + " , Please check the JSON format</span></PRE>"
    }
    $("#ControlsRow").css("margin-bottom", "0")
}
function processMd5() {
    try {
        $id("canvas").innerHTML = "<PRE class='CodeContainer'>" + md5(rawJson.value)  + "</PRE>";
    } catch(e) {
        $id("canvas").innerHTML = "<PRE class='CodeContainerError'><span style='color: red'>" + e.message + " , Please check the JSON format</span></PRE>"
    }
    $("#ControlsRow").css("margin-bottom", "0")
}
window._dateObj = new Date;
window._regexpObj = new RegExp;
function ProcessObject(e, n, a, s, o) {
    var r = "";
    var t = a ? "<span class='Comma'>,</span> ": "";
    var i = typeof e;
    var l = "";
    if (IsArray(e)) {
        if (e.length == 0) {
            r += GetRow(n, "<span class='ArrayBrace'>[ ]</span>" + t, o)
        } else {
            l = window.IsCollapsible ? '<span><img src="' + window.ImgExpanded + '" onClick="ExpImgClicked(this)" /></span><span class=\'collapsible\'>': "";
            r += GetRow(n, "<span class='ArrayBrace'>[</span>" + l, o);
            for (var c = 0; c < e.length; c++) {
                r += ProcessObject(e[c], n + 1, c < e.length - 1, true, false)
            }
            l = window.IsCollapsible ? "</span>": "";
            r += GetRow(n, l + "<span class='ArrayBrace'>]</span>" + t)
        }
    } else {
        if (i == "object") {
            if (e == null) {
                r += FormatLiteral("null", "", t, n, s, "Null")
            } else {
                if (e.constructor == window._dateObj.constructor) {
                    r += FormatLiteral("new Date(" + e.getTime() + ") /*" + e.toLocaleString() + "*/", "", t, n, s, "Date")
                } else {
                    if (e.constructor == window._regexpObj.constructor) {
                        r += FormatLiteral("new RegExp(" + e + ")", "", t, n, s, "RegExp")
                    } else {
                        var d = 0;
                        for (var p in e) {
                            d++
                        }
                        if (d == 0) {
                            r += GetRow(n, "<span class='ObjectBrace'>{ }</span>" + t, o)
                        } else {
                            l = window.IsCollapsible ? '<span><img src="' + window.ImgExpanded + '" onClick="ExpImgClicked(this)" /></span><span class=\'collapsible\'>': "";
                            r += GetRow(n, "<span class='ObjectBrace'>{</span>" + l, o);
                            var w = 0;
                            for (var p in e) {
                                var u = window.QuoteKeys ? '"': "";
                                r += GetRow(n + 1, "<span class='PropertyName'>" + u + p + u + "</span>: " + ProcessObject(e[p], n + 1, ++w < d, false, true))
                            }
                            l = window.IsCollapsible ? "</span>": "";
                            r += GetRow(n, l + "<span class='ObjectBrace'>}</span>" + t)
                        }
                    }
                }
            }
        } else {
            if (i == "number") {
                r += FormatLiteral(e, "", t, n, s, "Number")
            } else {
                if (i == "boolean") {
                    r += FormatLiteral(e, "", t, n, s, "Boolean")
                } else {
                    if (i == "function") {
                        if (e.constructor == window._regexpObj.constructor) {
                            r += FormatLiteral("new RegExp(" + e + ")", "", t, n, s, "RegExp")
                        } else {
                            e = FormatFunction(n, e);
                            r += FormatLiteral(e, "", t, n, s, "Function")
                        }
                    } else {
                        if (i == "undefined") {
                            r += FormatLiteral("undefined", "", t, n, s, "Null")
                        } else {
                            r += FormatLiteral(e.toString().split("\\").join("\\\\").split('"').join('\\"'), '"', t, n, s, "String")
                        }
                    }
                }
            }
        }
    }
    return r
}
function FormatLiteral(e, n, a, s, o, r) {
    if (typeof e == "string") {
        e = e.split("<").join("&lt;").split(">").join("&gt;")
    }
    var t = "<span class='" + r + "'>" + n + e + n + a + "</span>";
    if (o) {
        t = GetRow(s, t)
    }
    return t
}
function FormatFunction(e, n) {
    var a = "";
    for (var s = 0; s < e; s++) {
        a += window.TAB
    }
    var o = n.toString().split("\n");
    var r = "";
    for (var s = 0; s < o.length; s++) {
        r += (s == 0 ? "": a) + o[s] + "\n"
    }
    return r
}
function GetRow(e, n, a) {
    var s = "";
    for (var o = 0; o < e && !a; o++) {
        s += window.TAB
    }
    if (n != null && n.length > 0 && n.charAt(n.length - 1) != "\n") {
        n = n + "\n"
    }
    return s + n
}
function QuoteKeysClicked() {
    window.QuoteKeys = $id("QuoteKeys").checked;
    Process()
}
function MakeContentVisible(e, n) {
    var a = e.previousSibling.firstChild;
    if ( !! a.tagName && a.tagName.toLowerCase() == "img") {
        e.style.display = n ? "inline": "none";
        e.previousSibling.firstChild.src = n ? window.ImgExpanded: window.ImgCollapsed
    }
}
function TraverseChildren(e, n, a) {
    for (var s = 0; s < e.childNodes.length; s++) {
        TraverseChildren(e.childNodes[s], n, a + 1)
    }
    n(e, a)
}
function ExpImgClicked(e) {
    var n = e.parentNode.nextSibling;
    if (!n) {
        return
    }
    var a = "none";
    var s = window.ImgCollapsed;
    if (n.style.display == "none") {
        a = "inline";
        s = window.ImgExpanded
    }
    n.style.display = a;
    e.src = s
}
function TabSizeChanged() {
    Process()
}
function SetTab() {
    var e = $id("TabSize");
    window.TAB = MultiplyString(parseInt(e.options[e.selectedIndex].value), window.SINGLE_TAB)
}
function EnsureIsPopulated() {
    if (!$id("canvas").innerHTML && !!$id("rawJson").value) {
        Process()
    }
}
function MultiplyString(e, n) {
    var a = [];
    for (var s = 0; s < e; s++) {
        a.push(n)
    }
    return a.join("")
}
