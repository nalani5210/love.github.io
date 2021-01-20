function alertSuccess(e) {
    $("#successModal").modal("hide");
    var t = e.con ? e.con : "成功",
        n = e.title ? e.title : "温馨提示",
        i = e.btnTitle ? e.btnTitle : "关闭",
        o =
            '<div class="modal fade" id="successModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-green">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' +
            n + "</h4>\n" + "</div>\n" + '<div class="modal-body">\n' + '<p class="success-title font-16">' + t + "</p>\n" +
            "</div>\n" + '<div class="modal-footer" style="border-top:0">\n' +
            '<button type="button" class="btn btn-default" data-dismiss="modal">' + i + "</button>\n" + "</div>\n" +
            "</div>\n" + "</div>\n" + "</div>";
    $("body").append(o), $("#successModal").modal("toggle", "center")
}

function alertError(e) {
    $("#errorModal").modal("hide");
    var t = e.con ? e.con : "失败",
        n = e.title ? e.title : "温馨提示",
        i = e.btnTitle ? e.btnTitle : "关闭",
        o =
            '<div class="modal fade" id="errorModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-red">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' +
            n + "</h4>\n" + "</div>\n" + '<div class="modal-body">\n' + '<p class="error-title font-16">' + t + "</p>\n" +
            "</div>\n" + '<div class="modal-footer" style="border-top:0">\n' +
            '<button type="button" class="btn btn-default" data-dismiss="modal">' + i + "</button>\n" + "</div>\n" +
            "</div>\n" + "</div>\n" + "</div>";
    $("body").append(o), $("#errorModal").modal("toggle", "center")
}

function alertConfirm(e, t, n, i, o) {
    $("#confirmModal").modal("hide"), $("body").off("click", "#confirmModal .sure"), $("body").off("click",
        "#confirmModal .cancle");
    var e = e ? e : "确定?",
        t = t ? t : "温馨提示",
        n = n ? n : ["取消", "确定"],
        r =
            '<div class="modal fade" id="confirmModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' +
            t + "</h4>\n" + "</div>\n" + '<div class="modal-body">\n' + '<p class="confirm-title font-16">' + e + "</p>\n" +
            "</div>\n" + '<div class="modal-footer" style="border-top:0">\n' +
            '<button type="button" class="btn btn-default cancle">' + n[0] + "</button>\n" +
            '<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n" + "</div>\n" + "</div>\n" +
            "</div>\n" + "</div>";
    $("body").append(r), $("#confirmModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmModal .cancle", function () {
        o ? (o(), $("#confirmModal").modal("hide", "fit")) : $("#confirmModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmModal .sure", function () {
        i ? (i(), $("#confirmModal").modal("hide", "fit")) : $("#confirmModal").modal("hide", "fit")
    })
}

function confirmInput(e) {
    $("#confirmInputModal").modal("hide"), $("body").off("click", "#confirmInputModal .sure"), $("body").off("click",
        "#confirmInputModal .cancle"), e.con ? e.con : "";
    var t = e.title ? e.title : "请输入",
        n = e.btnTitle ? e.btnTitle : ["取消", "确定"],
        i = e.value ? e.value : "",
        o =
            '<div class="modal fade" id="confirmInputModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' +
            t + "</h4>\n" + "</div>\n" + '<div class="modal-body">\n' + '<div class="input-control">\n' +
            '<input type="text" class="form-control" placeholder="请输入" value="' + i + '">\n' + "</div>\n" + "</div>\n" +
            '<div class="modal-footer" style="border-top:0">\n' + '<button type="button" class="btn btn-default cancle">' +
            n[0] + "</button>\n" + '<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n" +
            "</div>\n" + "</div>\n" + "</div>\n" + "</div>";
    $("body").append(o), $("#confirmInputModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmInputModal .cancle", function () {
        var t = $("#confirmInputModal .form-control").val();
        e.error ? e.error(t) : $("#confirmInputModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmInputModal .sure", function () {
        var t = $("#confirmInputModal .form-control").val();
        e.success ? e.success(t) : $("#confirmInputModal").modal("hide", "fit")
    })
}

function confirmArea(e) {
    $("#confirmAreaModal").modal("hide"), $("body").off("click", "#confirmAreaModal .sure"), $("body").off("click",
        "#confirmAreaModal .cancle"), e.con ? e.con : "";
    var t = e.title ? e.title : "请输入",
        n = e.btnTitle ? e.btnTitle : ["取消", "确定"],
        i = e.value ? e.value : "",
        o = e.placeholder ? e.placeholder.toString() : "请输入...",
        r =
            '<div class="modal fade" id="confirmAreaModal">\n<div class="modal-dialog modal-sm">\n<div class="modal-content">\n<div class="modal-header bg-primary">\n<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>\n<h4 class="modal-title" style="font-weight:normal">' +
            t + "</h4>\n" + "</div>\n" + '<div class="modal-body">\n' + '<div class="input-control">\n' +
            '<textarea placeholder="' + o + '" value="' + i + '" rows="8"></textarea>\n' + "</div>\n" + "</div>\n" +
            '<div class="modal-footer" style="border-top:0">\n' + '<button type="button" class="btn btn-default cancle">' +
            n[0] + "</button>\n" + '<button type="button" class="btn btn-primary sure">' + n[1] + "</button>\n" +
            "</div>\n" + "</div>\n" + "</div>\n" + "</div>";
    $("body").append(r), $("#confirmAreaModal").modal({
        keyboard: !1,
        show: !0,
        position: "fit",
        backdrop: "static"
    }), $("body").on("click", "#confirmAreaModal .cancle", function () {
        var t = $("#confirmAreaModal textarea").val();
        e.error ? e.error(t) : $("#confirmAreaModal").modal("hide", "fit")
    }), $("body").on("click", "#confirmAreaModal .sure", function () {
        var t = $("#confirmAreaModal textarea").val();
        e.success ? e.success(t) : $("#confirmAreaModal").modal("hide", "fit")
    })
}

function msgError(e) {
    new $.zui.Messager(e, {
        type: "danger",
        placement: "center",
        icon: "warning-sign"
    }).show()
}

function msgSuccess(e) {
    new $.zui.Messager(e, {
        type: "success",
        placement: "center",
        icon: "check-circle"
    }).show()
}

function isChinese(e) {
    return /[\u4e00-\u9fa5]/.test(e)
}

function ch2Unicdoe(e) {
    if (e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            t += isChinese(i) ? "\\u" + i.charCodeAt(0).toString(16) : i
        }
        return t
    }
}

function unicode2Ch(e) {
    if (e) {
        for (var t = 1, n = "", i = 0; i < e.length; i += t) {
            t = 1;
            var o = e.charAt(i);
            if ("\\" == o)
                if ("u" == e.charAt(i + 1)) {
                    var r = e.substr(i + 2, 4);
                    n += String.fromCharCode(parseInt(r, 16).toString(10)), t = 6
                } else n += o;
            else n += o
        }
        return n
    }
}

function parseParam(e, t) {
    var n = "";
    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e || null === e || void 0 === e) n += "&" +
        t + "=" + e;
    else if (e instanceof Array) $.each(e, function (i, o) {
        var r = null == t ? i : t + (e instanceof Array ? "[" + i + "]" : "." + i);
        n += "&" + parseParam(o, r)
    });
    else if (e instanceof Object)
        for (var i in e) {
            var o = null == t ? i : t + (e instanceof Array ? "[" + i + "]" : "." + i);
            n += "&" + parseParam(e[i], o)
        }
    return n.substr(1)
}

function paramParse(e) {
    var t = e.replace(/&/g, '","').replace(/=/g, '":"');
    return t = '{"' + t + '"}'
}

function _addFavorite() {
    var e = window.location,
        t = document.title,
        n = navigator.userAgent.toLowerCase();
    if (n.indexOf("360se") > -1) alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    else if (n.indexOf("msie 8") > -1) window.external.AddToFavoritesBar(e, t);
    else if (document.all) try {
        window.external.addFavorite(e, t)
    } catch (i) {
        alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
    } else if (window.sidebar) try {
        window.sidebar.addPanel(t, e, "")
    } catch (i) {
        alert("由于浏览器不支持，请按 Ctrl+D 手动收藏！")
    } else alert("您的浏览器不支持,请按 Ctrl+D 手动收藏!")
}

function recordRecentUse(e, t) {
    var n, i = {
        name: e,
        url: t
    };
    if ($.zui ? n = $.zui.store.get("recent_arr") : (n = localStorage.getItem("recent_arr"), n = JSON.parse(n)), n && n
        .length) {
        for (var o = !1, r = 0; r < n.length; r++) n[r].name === e && (o = !0);
        o || n.unshift(i), n.length > 4 && n.pop()
    } else n = [], n.unshift(i);
    $.zui ? $.zui.store.set("recent_arr", n) : localStorage.setItem("recent_arr", JSON.stringify(n))
}

function recentUseList() {
    var e = $.zui.store.get("recent_arr");
    if (e && e.length)
        for (var t = 0; t < e.length; t++) $("#recentUse").append('<a class="btn btn-sm" href="' + e[t].url + '">' + e[
            t].name + "</a>")
}

function goTop() {
    var e = "#goTop";
    if (document.getElementById("goTop")) {
        var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        t > 100 ? $(e).show() : $(e).hide();
        var n = $("#write").outerHeight(),
            i = $(window).outerHeight() - 300;
        t > 178 && n > i ? n + 178 - $("body").scrollTop() > i ? ($(".md-toc").addClass("md-toc-fixed"), $(".md-toc").css(
            "top", "")) : ($(".md-toc").removeClass("md-toc-fixed"), n > i && $(".md-toc").css("top", n - i - 33 >
        0 ? n - i - 33 + "px" : "")) : $(".md-toc").removeClass("md-toc-fixed"), window.onscroll = function () {
            var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            t > 100 ? $(e).fadeIn(200) : $(e).fadeOut(200), t > 178 && n > i ? n + 178 - t > i ? ($(".md-toc").addClass(
                "md-toc-fixed"), $(".md-toc").css("top", "")) : ($(".md-toc").removeClass("md-toc-fixed"), n >
            i && $(".md-toc").css("top", n - i - 33 > 0 ? n - i - 33 + "px" : "")) : $(".md-toc").removeClass(
                "md-toc-fixed")
        }, $(e).click(function () {
            return $("body,html").animate({
                scrollTop: 0
            }, 500), !1
        })
    }
}

function clearActiveAfter() {
    $(".custom-tab li") && $(".custom-tab .active").prev().find("a").eq(0).addClass("clear-after");
    var e = 0,
        t = 0;
    $(".custom-tab li").each(function (n, i) {
        $(i).attr("data-target") || (e += $(i).outerWidth(), t = n)
    }), 1160 >= e ? $(".custom-tab li").eq(t).find("a").eq(0).addClass("clear-after") : (e = 0, $(".custom-tab li")
        .each(function (t, n) {
            e += $(n).outerWidth(), !$(n).attr("data-target") && e > 1080 && ($(".custom-tab .dropdown").show(),
                $(".custom-tab .dropdown-menu").append($(n)))
        })), $(".custom-tab").css("width", "100%")
}

function doPost(e, t, n, i, o) {
    $.ajax({
        type: "POST",
        url: e,
        data: t,
        dataType: o ? o : "json",
        timeout: 3e4,
        success: function (e) {
            n(e)
        },
        error: function (e) {
            try {
                i(e)
            } catch (t) {}
        }
    })
}

function doGet(e, t, n, i, o) {
    $.ajax({
        type: "GET",
        url: e,
        data: t,
        dataType: o ? o : "json",
        timeout: 3e4,
        success: function (e) {
            n(e)
        },
        error: function (e) {
            try {
                i(e)
            } catch (t) {}
        }
    })
}

function isEmail(e) {
    var t = e.find("input").eq(0).val(),
        n = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    return t ? n.test(t) ? (e.addClass("has-success"), !0) : (e.addClass("has-error"), !1) : (e.addClass("has-error"),
        !1)
}

function isNickname(e) {
    var t = e.find("input").eq(0).val();
    return t ? (e.addClass("has-success"), !0) : (e.addClass("has-error"), !1)
}

function isNumber(e) {
    var t = /^[0-9]+.?[0-9]*$/;
    return t.test(e)
}

function isBoolean(e) {
    return e = e.toLowerCase(), "true" == e || "false" == e
}

function isNumberOrBoolean(e) {
    return isNumber(e) || isBoolean(e)
}

function myBrowser() {
    var e = navigator.userAgent;
    return e.indexOf("OPR") > -1 ? "Opera" : e.indexOf("Firefox") > -1 ? "FF" : e.indexOf("Trident") > -1 ? "IE" : e.indexOf(
        "Edge") > -1 ? "Edge" : e.indexOf("Chrome") > -1 ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : void 0
}

function convertBase64UrlToBlob(e) {
    for (var t = e.split(";base64,"), n = t[0].split(":")[1], i = window.atob(t[1]), o = i.length, r = new Uint8Array(o),
             a = 0; o > a; a++) r[a] = i.charCodeAt(a);
    return new Blob([r], {
        type: n
    })
}

function convertUrlToBase64(e) {
    return new Promise(function (t) {
        var n = new Image;
        n.crossOrigin = "Anonymous", n.src = e, n.onload = function () {
            var e = document.createElement("canvas");
            e.width = n.width, e.height = n.height;
            var i = e.getContext("2d");
            i.drawImage(n, 0, 0, n.width, n.height);
            var o = n.src.substring(n.src.lastIndexOf(".") + 1).toLowerCase(),
                r = e.toDataURL("image/" + o),
                a = {
                    dataURL: r,
                    type: "image/" + o,
                    ext: o
                };
            t(a)
        }
    })
}

function base64ToBolbAndDownload(e, t) {
    var n = convertBase64UrlToBlob(e);
    if ("IE" === myBrowser()) window.navigator.msSaveBlob(n, t);
    else {
        var i = document.createElement("a");
        i.download = t, i.href = URL.createObjectURL(n), i.click()
    }
}

function createQQlist() {
    doPost(bejsonHost + "Bejson/Api/LanguageGroup/getGroupList", {
        site_id: parseInt($("body").attr("data-siteid"))
    }, function (e) {
        if (200 === e.code || "200" === e.code) {
            var t = e.data.list;
            $.each(t, function (e, t) {
                var n, i, o = [],
                    r = t.icon;
                $(t.groups).each(function (e, n) {
                    var i = "",
                        a = "",
                        s = "";
                    "hot" === n.group_status && (i = "hot", a = "满", s = "disabled"), "new" ===
                    n.group_status && (i = "new", a = "新");
                    var l = '<div class="group-info"> <div class="title-bg">' + t.name +
                        "</div>" + '<div class="is-full ' + i + '" data-full="' + n.group_status +
                        '">' + a + "</div>" + '<div class="group-detail"> ' + "<div>" + n.name +
                        "</div>" + ' <p>群号：<span class="qq-num">' + n.group_number +
                        '</span>  <span class="copy-qqnumber">复制群号</span></p>' + "</div>" +
                        '<div class="group-apply" >' + '<img src="' + r +
                        '" alt="bjson-q.png">' +
                        '<a href="https://shang.qq.com/wpa/qunwpa?idkey=' + n.group_key +
                        '" target="_blank" class="group-btn-apply btn btn-primary ' + s +
                        '" data-state="' + n.group_key + '" >申请入群</a>' + "</div>" +
                        '<div class="group-shadow"></div>' + "</div>";
                    o.push(l)
                }), n = o.join(""), i =
                    '<div class="modal-nav-qq" id="modal--qq"><h3 class="group-title">' + t.name +
                    "</h3> " + n + "</div>", $("#modalQQ").append(i)
            })
        }
    }, function () {}), new ClipboardJS(".copy-qqnumber", {
        text: function (e) {
            var t = $(e).prev().text();
            return t ? (msgSuccess("复制成功"), t) : !1
        }
    })
}

function getChildren(e) {
    for (var t = [], n = e.getElementsByTagName("*"), i = 0, o = n.length; o > i; ++i)
        if (1 == n[i].nodeType) {
            var r = n[i].parentNode;
            1 == r.nodeType ? r == e && (t[t.length] = n[i]) : r.parentNode == e && (t[t.length] = n[i])
        } else console.log(n[i].nodeType);
    return t
}

function getChildrens(e) {
    for (var t = e.getElementsByTagName("*"), n = [], t = e.getElementsByTagName("*"), i = 0, o = t.length; o > i; ++i)
        if (1 == t[i].nodeType) {
            var r = t[i].parentNode;
            1 == r.nodeType ? r == e && (n[n.length] = t[i]) : r.parentNode == e && (n[n.length] = t[i])
        } var a = Math.random() * n.length;
    return a = Math.floor(a), n[a]
}

function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        n = t.length,
        o = "";
    for (i = 0; e > i; i++) o += t.charAt(Math.floor(Math.random() * n));
    return o
}

function dynamicCss(e) {
    var t = document.createElement("style");
    t.type = "text/css";
    try {
        t.appendChild(document.createTextNode(e + "{\n" + "  position: absolute;\n" + "  top: 99px;\n" +
            "  left: 50%;\n" + "  margin-left: -580px;\n" + "  width: 1160px;\n" + "  z-index: 99;\n" + "}\n" +
            e + ":after{\n" + "  content: '';\n" + "  display: block;\n" + "  clear: both;\n" +
            "  position: absolute;\n" + "  height:40px;\n" + "  width:1160px;\n" +
            "  background-color:#f6f6f6;\n" + "  border: 1px solid #eee;\n" + "  top: 50%;\n" + "  left: 0;\n" +
            "  margin-top: -20px;\n" + "}\n" + e + " *{\n" + "  color: #666666;\n" + "  position: relative;\n" +
            "  z-index:9;\n" + "  font-size: 12px;\n" + "  line-height: 40px;\n" + "  padding: 0px;\n" +
            "  display: inline-block;\n" + "  margin: 0px 0px 0 10px;\n" + "  width: auto;\n" +
            "  cursor: pointer;\n" + "}"))
    } catch (n) {
        t.styleSheet.cssText = e + "{\n" + "  position: absolute;\n" + "  top: 99px;\n" + "  left: 50%;\n" +
            "  margin-left: -580px;\n" + "  width: 1160px;\n" + "  z-index: 99;\n" + "}\n" + e + ":after{\n" +
            "  content: '';\n" + "  display: block;\n" + "  clear: both;\n" + "  position: absolute;\n" +
            "  height:40px;\n" + "  width:1160px;\n" + "  background-color:#f6f6f6;\n" + "  border: 1px solid #eee;\n" +
            "  top: 50%;\n" + "  left: 0;\n" + "  margin-top: -20px;\n" + "}\n" + e + " *{\n" + "  color: #666666;\n" +
            "  position: relative;\n" + "  z-index:9;\n" + "  font-size: 12px;\n" + "  line-height: 40px;\n" +
            "  padding: 0px;\n" + "  display: inline-block;\n" + "  margin: 0px 0px 0 10px;\n" + "  width: auto;\n" +
            "  cursor: pointer;\n" + "}"
    }
    var i = document.getElementsByTagName("head")[0];
    i.appendChild(t)
}

function yasuo(e) {
    var t = editor.getValue();
    if (1 === e || 3 === e) {
        t = t.split("\n").join(" ");
        for (var n = [], i = !1, o = 0, r = t.length; r > o; o++) {
            var a = t.charAt(o);
            i && a === i ? "\\" !== t.charAt(o - 1) && (i = !1) : i || '"' !== a && "'" !== a ? i || " " !== a && "	" !==
                a || (a = "") : i = a, n.push(a)
        }
        t = n.join("")
    }(2 === e || 3 === e) && (t = t.replace(/\\/g, "\\\\").replace(/\"/g, '\\"')), 4 === e && (t = t.replace(/\\\\/g,
        "\\").replace(/\\\"/g, '"')), editor.setValue(t)
}

function indexFormat() {
    var e, t = editor.getValue();
    t = t.trim(), (t.startWith("'{") && t.endWith("}'") || t.startWith("'\\[") && t.endWith("]'") || t.startWith('"\\[') &&
        t.endWith(']"') || t.startWith('"{') && t.endWith('}"')) && (e = window.confirm(
        "您发的JSON是一个字符串,而不是对象,您需要转成JSON对象么?"), 1 == e && (t = t.substr(1, t.length - 2), t = t.replace(/\\\\/g,
        "\\").replace(/\\\"/g, '"'))), editor.setValue(t);
    var n = editor.lineCount();
    editor.autoFormatRange({
        line: 0,
        ch: 0
    }, {
        line: n
    });
    try {
        var i = jsonlint.parse(t);
        i && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass(
            "alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass(
            "icon-info-sign icon-remove-sign"))
    } catch (o) {
        document.getElementById("jsonlintResult").innerHTML = o, $("#jsonlintBox").addClass("alert-danger alert").removeClass(
            "alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass(
            "icon-info-sign icon-ok-sign")
    }
    localStorage.setItem("lastJsonData", editor.getValue())
}

function isArray(e) {
    return "object" == typeof e && e instanceof Array
}

function convert_formated_hex_to_bytes(e) {
    var t, n, i, o = 0,
        r = [];
    if ("" == e.trim()) return [];
    if (/[^0-9a-fA-F\s]/.test(e)) return !1;
    for (t = e.split(/([0-9a-fA-F]+)/g), n = t.length, i = 0; n > i; ++i) "" != t[i].trim() && (r[o++] = parseInt(t[i],
        16));
    return r
}

function convert_to_formated_hex(e) {
    var t, n, i, o = "";
    if (!isArray(e)) return !1;
    for (n = e.length, t = 0; n > t; ++t) e[t] < 0 && (e[t] = e[t] + 256), void 0 === e[t] && (alert("Boom " + t), e[t] =
        0), i = e[t].toString(16), 1 == i.length && (i = "0" + i), i += 0 === (t + 1) % 16 ? "\n" : " ", o += i;
    return o.trim()
}

function getAndShowPictures() {
    var e = navigator.userAgent;
    this.imgCount = 0, this.uploadImgArr = [], this.add = function (t) {
        var n = $(t),
            i = $(t)[0],
            o = $(t).parents("form").find(".pic-div").eq(0),
            r = i.files;
        if (1 == $(t)[0].files.length) {
            if (r[0].size > 2097152) return msgError("图片的大小不能大于2M"), void 0;
            var a = "<div class='imageDiv' > <img id='img" + r[0].name + "replay" +
                "' /> <div class='cover' data-id='" + ++this.imgCount + "'><i class='delbtn'>删除</i></div></div>";
            o.prepend(a);
            var s = document.getElementById("img" + r[0].name + "replay");
            if (r && r[0])
                if (s.onload = function () {
                    s.width > s.height ? s.style.height = "100%" : s.style.width = "100%"
                }, -1 == e.indexOf("MSIE")) s.src = window.URL.createObjectURL(i.files[0]);
                else if (-1 != i.value.indexOf(",")) {
                    var l = i.value.split(",");
                    s.src = l[0]
                } else s.src = i.value;
            this.uploadImgArr.push(i.files[0]), 5 === this.imgCount && (msgError("最多只能上传5张图片"), n.parents("form").find(
                ".addImages").hide())
        } else
            for (var c = 0; c < $(t)[0].files.length; c++)
                if (i.files[c].size > 2097152) msgError("图片的大小不能大于2M");
                else {
                    var a = "<div class='imageDiv' > <img id='img" + r[c].name + "replay" +
                        "' /> <div class='cover' data-id='" + ++this.imgCount +
                        "'><i class='delbtn'>删除</i></div></div>";
                    o.prepend(a);
                    var s = document.getElementById("img" + r[c].name + "replay");
                    if (r && r[c])
                        if (function (e) {
                            e.onload = function () {
                                e.width > e.height ? e.style.height = "100%" : e.style.width = "100%"
                            }
                        }(s), -1 == e.indexOf("MSIE")) s.src = window.URL.createObjectURL(i.files[c]);
                        else if (-1 != i.value.indexOf(",")) {
                            var l = i.value.split(",");
                            s.src = l[c]
                        } else s.src = i.value;
                    if (this.uploadImgArr.push(i.files[c]), 5 === this.imgCount) {
                        msgError("最多只能上传5张图片"), n.parents("form").find(".addImages").hide();
                        break
                    }
                } $(t).val("")
    }, this.cancel = function (e) {
        this.imgCount = this.imgCount - 1;
        var t = this.imgCount,
            n = $(e),
            i = n.parents(".pic-div"),
            o = parseInt(n.attr("data-id"));
        this.uploadImgArr.splice(o - 1, 1), n.parents(".imageDiv").remove(), i.find(".imageDiv .cover").each(
            function (e, n) {
                $(n).attr("data-id", t - e)
            })
    }
}

function resizeCodemirror(e, t, n, i) {
    var o;
    $(e).each(function (e, r) {
        $(r) && $(r).draggable({
            container: t[e],
            move: !1,
            before: function () {
                o = $(t[e]).innerHeight()
            },
            drag: function (e) {
                $(t).each(function (t, r) {
                    $(r) && (i ? $(r + " " + i).height(e.offset.y + o > n ? e.offset.y + o :
                        n) : $(r + " .CodeMirror").height(e.offset.y + o > n ? e.offset
                        .y + o : n))
                })
            },
            finish: function () {}
        })
    })
}

function downloadZip() {
    var e = $("#packageName").val(),
        t = new JSZip,
        n = t.folder(e.replace(/\./g, "/"));
    $(".result").each(function () {
        n.file($(this).attr("class_name") + ".java", $(this).val())
    });
    var i = t.generate({
        type: "blob"
    });
    saveAs(i, "bejson_gen_beans.zip")
}

function gen() {
    try {
        $("#jsonBeanCon").html(""), $("#downloadJavaBean").hide();
        var e = jsonlint.parse(editor.getValue());
        e && ($("#jsonlintResult").html("Correct JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass(
            "alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass(
            "icon-info-sign icon-remove-sign"));
        var t = $("#className").val(),
            n = $("#packageName").val(),
            i = editor.getValue(),
            o = $("#selectedType").val();
        if (i) {
            var r;
            if ("json" === o) r = getBeanFieldFromJson(i, t);
            else if ("sql" === o) return alert("Not realized yet"), void 0;
            $.each(r, function (e, t) {
                var i = toBeanText(t, n),
                    o = "";
                0 != e && (o = "small-text"), i = i.replace("<int>", "<Integer>").replace("<long>", "<Long>");
                var r = '<div class="t-big-margin">\n        <h4 class="text-green">Class：' + t.name + "</h4>\n" +
                    '<textarea class_name="' + t.name + '" style="height: 300px" class="form-control result ' + o +
                    '" onmouseover="this.focus();this.select()">' + i + "</textarea></div>";
                $("#jsonBeanCon").append(r)
            }), $("#downloadJavaBean").show(), $("#jsonlintResult").html("Successfully generated JavaBean")
        }
    } catch (a) {
        document.getElementById("jsonlintResult").innerHTML = a, $("#jsonlintBox").addClass("alert-danger alert").removeClass(
            "alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass(
            "icon-info-sign icon-ok-sign"), $("#download_btn").hide()
    }
}

function chechJavaWords() {
    var e = e = editor.getValue().split("\n").join("").replace(/\s/g, "");
    e = e.split("\n").join(" ");
    for (var t = javawordsStr.split(","), n = 0; n < t.length; n++) {
        var i = t[n],
            o = '"' + i + '":',
            r = "'" + i + "':";
        if (-1 != e.indexOf(o) || -1 != e.indexOf(r)) return alertError({
            con: "要转换的JSON字符中出现了Java关键字:" + i
        }), !1
    }
    return !0
}

function genJson(e) {
    return "" == editor.getValue().trim() ? (msgError("请填写JSON"), !1) : (e.button("loading"), doPost(bejsonHost +
        "Bejson/Api/JsonToJavapojo/", {
            json: editor.getValue(),
            "package": $("#package").val(),
            fillEnable: document.getElementById("fillEnableChk").checked ? "1" : "0"
        },
        function (t) {
            200 === t.code || "200" === t.code ? ($("#resData").html(t.data), $("#myModal").modal("show", "fit")) :
                alertError({
                    con: t.msg
                }), e.button("reset")
        },
        function (t) {
            $("#resData").html(t.data), $("#myModal").modal("show", "fit"), e.button("reset")
        }), void 0)
}

function testCase() {
    document.getElementById("jsonlintBox") && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass(
        "alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass(
        "icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")), editor.setValue(
        '{\r\n	"animals":{\r\n	"dog":[\r\n		{"name":"Rufus","breed":"labrador","count":1,"twoFeet":false},\r\n		{"name":"Marty","breed":"whippet","count":1,"twoFeet":false}\r\n	],\r\n	"cat":{"name":"Matilda"}\r\n}\r\n}'
    )
}

function downloadZip2(e, t, n) {
    var i = e,
        o = t,
        r = $("#resData").html();
    $("#package") && $("#package").val() && (i = $("#package").val()), $("#saveName") && $("#saveName").val() && (o = $(
        "#saveName").val());
    var a = new JSZip,
        s = a.folder(i.replace(/\./g, "/"));
    s.file(o + n, r);
    var l = a.generate({
        type: "blob"
    });
    saveAs(l, o + ".zip")
}

function josnToCsharp() {
    if ("" == editor.getValue().trim()) return msgError("请填写JSON"), !1;
    var e = JSON.parse(editor.getValue()),
        t = JSON2CSharp.convert(e);
    t = t.replace(/<br\/>/g, "\n"), $("#cBox").removeClass("prettyprinted").html("//如果好用，请收藏地址，帮忙分享。\n" + t), $(
        "#resData").html("//如果好用，请收藏地址，帮忙分享。\n" + t), prettyPrint()
}

function downloadZip3(e, t, n) {
    var i = window.prompt("文件另存为");
    if (null != i) {
        i && -1 === i.indexOf(".") ? i += e : (i = n, i.split(".").pop().toLowerCase() === t || (i = i.split(".")[0] +
            e));
        var o = new Blob([$("#resData").html()], {
            type: ""
        });
        saveAs(o, i)
    }
}

function repalceFh(e) {
    return e.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"')
}

function downloadZip4(e, t, n, i, o) {
    var r;
    if (r = o ? o : window.prompt("文件另存为"), null != r) {
        r && -1 === r.indexOf(".") ? r += e : (r = n, r.split(".").pop().toLowerCase() === t || (r = r.split(".")[0] +
            e));
        var a = new Blob([i], {
            type: ""
        });
        saveAs(a, r)
    }
}

function jsonToYaml() {
    var e = editor.getValue();
    if (e) try {
        var t = jsonlint.parse(editor.getValue());
        if (t) {
            var n = JSON.parse(e);
            editor2.setValue("# 如果觉得好用，请收藏或则分享本站\n" + jsyaml.dump(n)), $("#jsonlintBox").removeClass(
                "alert-success alert alert-warning alert-danger")
        }
    } catch (i) {
        document.getElementById("jsonlintResult").innerHTML = i, $("#jsonlintBox").addClass("alert-danger alert").removeClass(
            "alert-warning alert-success"), $("#jsonlintIcon").addClass("icon-remove-sign").removeClass(
            "icon-info-sign icon-ok-sign")
    }
}

function yamlToJson() {
    var e = editor2.getValue();
    if (e) try {
        var t = JSON.stringify(jsyaml.load(e), null, 2);
        editor.setValue(t), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger")
    } catch (n) {
        document.getElementById("jsonlintResult").innerHTML = "yaml错误:\n" + n, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}

function aesdesEncrypt() {
    var e = editor.getValue();
    if (!e) return msgError("请输入要加密的内容"), void 0;
    var t = $("#pwd").val();
    switch ($("#enctype").val()) {
        case "aes":
            $("#ctype").val(CryptoJS.AES.encrypt(e, t)), editor2.setValue($("#ctype").val());
            break;
        case "des":
            $("#ctype").val(CryptoJS.DES.encrypt(e, t)), editor2.setValue($("#ctype").val());
            break;
        case "rabbit":
            $("#ctype").val(CryptoJS.Rabbit.encrypt(e, t)), editor2.setValue($("#ctype").val());
            break;
        case "rc4":
            $("#ctype").val(CryptoJS.RC4.encrypt(e, t)), editor2.setValue($("#ctype").val());
            break;
        case "tripledes":
            $("#ctype").val(CryptoJS.TripleDES.encrypt(e, t)), editor2.setValue($("#ctype").val())
    }
}

function aesdesDecrypt() {
    var e = editor.getValue(),
        t = $("#pwd").val();
    switch ($("#enctype").val()) {
        case "aes":
            var n = CryptoJS.AES.decrypt(e, t).toString(CryptoJS.enc.Utf8);
            if (!n) return msgError("解密失败"), void 0;
            editor2.setValue(n);
            break;
        case "des":
            var n = CryptoJS.DES.decrypt(e, t).toString(CryptoJS.enc.Utf8);
            if (!n) return msgError("解密失败"), void 0;
            editor2.setValue(n);
            break;
        case "rabbit":
            var n = CryptoJS.Rabbit.decrypt(e, t).toString(CryptoJS.enc.Utf8);
            if (!n) return msgError("解密失败"), void 0;
            editor2.setValue(n);
            break;
        case "rc4":
            var n = CryptoJS.RC4.decrypt(e, t).toString(CryptoJS.enc.Utf8);
            if (!n) return msgError("解密失败"), void 0;
            editor2.setValue(n);
            break;
        case "tripledes":
            var n = CryptoJS.TripleDES.decrypt(e, t).toString(CryptoJS.enc.Utf8);
            if (!n) return msgError("解密失败"), void 0;
            editor2.setValue(n)
    }
}

function rsaConvert() {
    var e = $("#rsaCmd .active").attr("data-cmd"),
        t = $("#rsatype").val(),
        n = editor.getValue();
    n = n.replace(/\n/g, "\r\n");
    var i = editor5.getValue();
    if ("" === n || "" === i) return msgError("请输入相关数据"), void 0;
    var o = bejsonHost + "Bejson/Api/Rsa/pubEncrypt",
        r = {};
    switch (e) {
        case "buildRSADecryptByPrivateKey":
        case "buildRSAEncryptByPrivateKey":
            o = bejsonHost + "Bejson/Api/Rsa/prvDecrypt", r = {
                privateKey: n,
                decSign: i,
                etype: t
            };
            break;
        case "buildRSAEncryptByPublicKey":
        case "buildRSADecryptByPublicKey":
            r = {
                publicKey: n,
                encStr: i,
                etype: t
            };
            break;
        case "buildRSAverifyByPublicKey":
            r = {
                rsaType: t
            }
    }
    $("body").toggleClass("loading"), doPost(o, r, function (e) {
        200 === e.code || "200" === e.code ? editor2.setValue(e.data) : alertError({
            con: e.msg
        }), $("body").toggleClass("loading")
    }, function () {
        alertError({
            con: "解密失败，请稍候重试"
        }), $("body").toggleClass("loading")
    })
}

function shaHash(e) {
    switch (e) {
        case "sha1":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA1(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha3":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA3(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha224":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA224(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha256":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA256(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha384":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA384(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "sha512":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.SHA512(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "md5":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").addClass("display-none"), $("#shaValueExchange").val(CryptoJS.MD5(
                editor.getValue())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha1":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA1(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha3":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA3(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha224":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA224(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha256":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA256(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha384":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA384(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacsha512":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacSHA512(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "hmacmd5":
            $("#shaPbkdfBox").hide(), $("#shapwdBox").removeClass("display-none"), $("#shaValueExchange").val(CryptoJS.HmacMD5(
                editor.getValue(), $("#shapwd").val())), editor2.setValue($("#shaValueExchange").val());
            break;
        case "pbkdf2":
            $("#shaPbkdfBox").show(), $("#shapwdBox").addClass("display-none");
            var t = /^[0-9]+$/,
                n = $("#shaPbkdfIteration").val();
            if (n || "0" === n)
                if (t.test(parseFloat(n))) {
                    var i = CryptoJS.enc.Utf8.parse($("#shaPbkdfSalt").val()),
                        o = CryptoJS.PBKDF2(editor.getValue(), i, {
                            keySize: parseInt($("#shaPbkdfKey").val()),
                            iterations: parseInt($("#shaPbkdfIteration").val())
                        });
                    $("#shaValueExchange").val(o), editor2.setValue($("#shaValueExchange").val())
                } else msgError("迭代次数必须为正整数"), $("#shaPbkdfSalt").val("");
            else msgError("迭代次数必须为正整数"), $("#shaPbkdfSalt").val("")
    }
}

function evalEncode() {
    var e = editor.getValue();
    if (e) {
        e = e.replace(/[\r\n]+/g, ""), e = e.replace(/'/g, "\\'");
        var t = e.match(/\b(\w+)\b/g);
        t.sort();
        for (var n, i = [], o = "", n = 0; n < t.length; n++) t[n] != o && i.push(o = t[n]);
        var r, a = i.length;
        for (n = 0; a > n; n++) r = evalNum(n), e = e.replace(new RegExp("\\b" + i[n] + "\\b", "g"), r), r == i[n] && (
            i[n] = "");
        $("#evalHidden").val(
            "eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('" +
            e + "'," + evalA + "," + a + ",'" + i.join("|") + "'.split('|'),0,{}))"), editor2.setValue($(
            "#evalHidden").val())
    }
}

function evalNum(e) {
    return (evalA > e ? "" : evalNum(parseInt(e / evalA))) + ((e %= evalA) > 35 ? String.fromCharCode(e + 29) : e.toString(
        36))
}

function evalRun() {
    eval(editor.getValue())
}

function evalDecode() {
    var code = editor.getValue();
    code && (code = code.replace(/^eval/, ""), $("#evalHidden").val(eval(code)), editor2.setValue($("#evalHidden").val()))
}

function goFormat() {
    $.zui.store.set("evalpackageCon", editor.getValue()), window.location.href = "/jshtml_format/"
}

function onMatch() {
    if (!isValidFields()) return !1;
    $("#cBox").removeClass("prettyprinted").html("");
    var e = buildRegex(),
        t = editor.getValue(),
        n = t.match(e);
    if (null == n || 0 == n.length) return $("#cBox").html("（没有匹配）"), prettyPrint(), !1;
    if (document.getElementById("optionGlobal").checked) {
        for (var i = "共找到 " + n.length + " 处匹配：\r\n", o = 0; o < n.length; ++o) i = i + n[o] + "\r\n";
        $("#cBox").text(i), prettyPrint()
    } else $("#cBox").text("匹配位置：" + e.lastIndex + "\r\n匹配结果：" + n[0]), prettyPrint();
    return !0
}

function buildRegex() {
    var e = "";
    return document.getElementById("optionGlobal").checked && (e = "g"), document.getElementById("optionIgnoreCase").checked &&
    (e += "i"), new RegExp(document.getElementById("textPattern").value, e)
}

function isValidFields() {
    var e = editor.getValue();
    if (null == e || "" == e) return msgError("请输入待匹配文本"), !1;
    var t = $("#textPattern").val();
    return null == t || "" == t ? ($("#textPattern").focus(), msgError("请输入正则表达式"), !1) : !0
}

function onReplace() {
    if (!isValidFields()) return !1;
    var e = editor.getValue(),
        t = buildRegex(),
        n = $("#replaceText").val();
    $("#cBox2").removeClass("prettyprinted").text(e.replace(t, n)), prettyPrint()
}

function xpathOnMatch() {
    var e = $("#textPattern").val(),
        t = editor.getValue();
    if (!t) return msgError("编辑器内容不能为空"), void 0;
    if (!e) return msgError("正则表达式内容不能为空"), void 0;
    try {
        var n = new DOMParser;
        xmldom = n.parseFromString(t, "text/xml");
        var i = xmldom.evaluate(e, xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITETATOR_TYPE, null);
        if (null !== i)
            for (var o = i.iterateNext(); o;) $("#cBox").removeClass("prettyprinted").text(o.innerHTML), prettyPrint(),
                o = i.iterateNext()
    } catch (r) {
        throw msgError("该浏览器不支持此转换，请切换浏览器"), new Error(r)
    }
}

function xpathShowDemo() {
    editor.setValue(
        '<webinfo>\n	<site dig="1">\n		<domain><![CDATA[http://fly.layui.com/]]></domain>\n		<title>LayUI前端社区</title>\n	</site>\n	<site >\n		<domain><![CDATA[http://www.bejson.com/]]></domain>\n		<title>JSON在线解析工具</title>\n	</site>\n</webinfo>'
    ), $("#textPattern").val("/webinfo//site[@dig=1]")
}

function find(e) {
    var t = editor1.getValue(),
        n = "img";
    switch (e) {
        case 1:
            n = "img", $("#findImgRes").html("");
            break;
        case 2:
            n = $("#xpath").val();
            break;
        case 3:
            n = "a"
    }
    var i = "";
    $(t).find(n).each(function () {
        switch (e) {
            case 1:
                $("#showImg").is(":checked") && $("#findImgRes").append("<img src='" + $(this).attr("src") +
                    "' style='margin-left:2px'> "), i += $(this).attr("src") + "\r\n\r\n";
                break;
            case 2:
                i += $(this).html() + "\r\n\r\n";
                break;
            case 3:
                $(this).attr("href").indexOf("http://") >= 0 && (i += $(this).attr("href") + "\r\n\r\n")
        }
    }), "" == i && (i += "没有匹配到数据"), editor2.setValue(i)
}

function removeDuplicate() {
    var e, t, n = [],
        i = editor.getValue().split("\n");
    for (var o in i) {
        e = i[o], t = !1;
        for (var r in n)
            if (e === n[r]) {
                t = !0;
                break
            } t === !1 && n.push(e)
    }
    editor2.setValue(n.join("\n"))
}

function getCaptcha() {
    doPost(bejsonHost + "Utils/Captcha/gen", {}, function (e) {
        200 === e.code || "200" === e.code ? ($("#captcha").prop("src", e.data.img), createLognCaptcha = e.data
            .captcha) : alertError({
            con: e.msg
        })
    }, function () {
        msgError("获取验证码失败")
    })
}

function createlogoQiniuUploader(e, t) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (n) {
        if (200 === n.code || "200" === n.code) {
            var i = qiniu.bucket(n.data.domain, {
                    putToken: n.data.token
                }),
                o = 1e17 * Math.random(),
                r = "upload/" + o + "." + extname(e.name);
            i.putFile(r, e, {
                before: function () {
                    $(t).attr("data-status", "uploading"), $(t + " .actions .file-status").attr(
                        "data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(t + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(t +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (e) {
                if (e) $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), $(t).attr(
                    "data-status", "failed"), $(t + " .actions .file-status").attr(
                    "data-original-title", "失败"), $(t + " .actions .file-status .text").html("失败"),
                    msgError("上传失败，请稍候重试"), getCaptcha();
                else {
                    var n = "/Bejson/Api/ImageHandle/imgZip?logo=/" + r + "&vercode=" + $(
                        "#logoCaptcha").val() + "&captcha=" + encodeURIComponent(createLognCaptcha);
                    createLogo(n), getCaptcha(), $("#uploadLogoBtn").button("reset"), $("#createLogo").button(
                        "reset"), $(t).attr("data-status", "sucess"), $(t +
                        " .actions .file-status").attr("data-original-title", "成功"), $(t +
                        " .actions .file-status .text").html("成功")
                }
            })
        } else alertError({
            con: n.msg
        }), $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"), getCaptcha()
    }, function () {
        msgError("获取失败，请稍候重试"), $("#uploadLogoBtn").button("reset"), $("#createLogo").button("reset"),
            getCaptcha()
    })
}

function createLogo(e) {
    var t = e,
        n = window.open("", "_blank");
    n.location = t
}

function ocrQiniuUploader(e, t, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(t.name);
            window.img2SvgFilename = t.name, o.putFile(a, t, {
                before: function (e, t) {
                    window.img2SvgKeystr = t, $(n).attr("data-status", "uploading"), $(n +
                        " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(n + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(n +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (o) {
                if (o) e.button("reset"), $(n).attr("data-status", "failed"), $(n +
                    " .actions .file-status").attr("data-original-title", "失败"), $(n +
                    " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试");
                else {
                    $(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr(
                        "data-original-title", "成功"), $(n + " .actions .file-status .text").html(
                        "成功");
                    var a = i.data.domain + "/upload/" + r + "." + extname(t.name);
                    doPost(bejsonHost + "Bejson/Api/DistinguishString/ocrFromPicture", {
                        path: a,
                        language: $("#orcLanguage").val()
                    }, function (e) {
                        200 === e.code || "200" === e.code ? ($("#ocrRes").addClass("alert"), $(
                            "#ocrRes").text(e.data.join(","))) : alertError({
                            cod: e.msg
                        }), $("#ocrUploadeImg").button("reset")
                    }, function () {
                        $("#ocrUploadeImg").button("reset"), msgError("链接错误，请稍候重试")
                    })
                }
            })
        } else alertError({
            con: i.msg
        }), e.button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), e.button("reset")
    })
}

function htmlStringDemo() {
    editor.setValue(
        '<div id="app" class="body-container">\n    <div class="spinner">\n      <div class="spinner-container container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container3">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n    </div>\n  </div>'
    )
}

function html2string(e, t) {
    var n = e.split("\n"),
        i = "",
        o = "+=",
        r = "str";
    switch (t) {
        case "java":
            i = "String " + r;
            break;
        case "js":
            i = "var " + r;
            break;
        case "php":
            i = "$" + r, r = "$" + r, o = ".=";
            break;
        case "net":
            i = "string " + r;
            break;
        case "py":
            return e = r + "= '''\n" + e + "\n'''"
    }
    e = i + ' = "";\n';
    for (var a = 0; a < n.length; a++) {
        var s = n[a];
        e += r + " " + o + ' "' + s.replace(/"/g, '\\"') + '";\n'
    }
    return e
}

function js2html(text) {
    var txt = eval("(" + text + ")");
    return txt
}

function htmlStringConvert2() {
    for (var e = editor.getValue().split("\n"), t = new Array, n = 0; n < e.length; n++) {
        var i = e[n];
        t.push(i)
    }
    var o = JSON.stringify(t);
    o = o.replace(/,/g, ",\n"), editor2.setValue(o)
}

function htmlStringConvert(e) {
    var t = $("#content").val(),
        n = $(e).attr("lang");
    t = html2string(t, n), $("#result").val(t)
}

function htmlJsHtml2js(e) {
    var t = e.split("\n");
    e = 'var text = "";\n';
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        e += 'text += "' + i.replace(/"/g, '\\"') + '";\n'
    }
    return e
}

function htmlJsJs2html(text) {
    for (var split1 = text.split("\n"), ret = "", i = 0; i < split1.length; i++) {
        var txt = eval("" + split1[i]);
        txt && (ret = ret + txt + "\n")
    }
    return ret
}

function htmlJsConvert2() {
    for (var e = editor.getValue().split("\n"), t = new Array, n = 0; n < e.length; n++) {
        var i = e[n];
        t.push(i)
    }
    var o = JSON.stringify(t);
    o = o.replace(/,/g, ",\n"), editor2.setValue(o)
}

function htmlJsConvert() {
    var e = "";
    e = 1 == htmlJsType ? htmlJsHtml2js(editor.getValue()) : htmlJsJs2html(editor.getValue()), editor2.setValue(e)
}

function deserializeDeser(e) {
    var t = "\\{(.+?)\\}";
    doPost(bejsonHost + "Bejson/Api/Deserialize/deserialization", {
        data: editor.getValue()
    }, function (n) {
        if (200 === n.code || "200" === n.code) {
            if ("false" === n.data.json) return msgError("输入代码格式有误"), e.button("reset"), void 0;
            if (!n.data.php) return msgError("输入代码格式有误"), e.button("reset"), void 0;
            editor2.setValue(n.data.json), editor5.setValue("array(" + JSON.stringify(n.data.php).match(t)[1] +
                ")")
        } else alertError({
            con: n.msg
        });
        e.button("reset")
    }, function () {
        msgError("连接错误，请稍候重试"), e.button("reset")
    })
}

function extname(e) {
    if (!e || "string" != typeof e) return !1;
    var t = e.split("").reverse().join("");
    return t.substring(0, t.search(/\./)).split("").reverse().join("")
}

function qiniuUploader(e, t, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(t.name);
            window.img2SvgFilename = t.name, o.putFile(a, t, {
                before: function (e, t) {
                    window.img2SvgKeystr = t, $(n).attr("data-status", "uploading"), $(n +
                        " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(n + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(n +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (i) {
                i ? (e.button("reset"), $(n).attr("data-status", "failed"), $(n +
                    " .actions .file-status").attr("data-original-title", "失败"), $(n +
                    " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试")) : ($(n).attr(
                    "data-status", "sucess"), $(n + " .actions .file-status").attr(
                    "data-original-title", "成功"), $(n + " .actions .file-status .text").html(
                    "成功"), doPost(bejsonHost + "Bejson/Api/ImageHandle/image2svg", {
                    filename: window.img2SvgKeystr
                }, function (n) {
                    if (200 === n.code || "200" === n.code) {
                        var i =
                            '<li>\n                <div class="svgimg-txtbox">\n                    <textarea rows="10">' +
                            n.data + "</textarea>\n" +
                            '                    <div class="svgimg-btnbox">\n' +
                            '                        <p class="display-i-block">' + t.name +
                            "</p>\n" +
                            '                        <button type="button" class="btn btn-primary btn-sm svg-copy">复制svg</button>\n' +
                            "                    </div>\n" + "                </div>\n" +
                            "            </li>";
                        $("#svgList").append(i)
                    }
                    e.button("reset")
                }, function () {
                    msgError("转换失败，请稍候重试"), e.button("reset")
                }))
            })
        } else alertError({
            con: i.msg
        }), e.button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), e.button("reset")
    })
}

function ox2strDemo() {
    editor.setValue("e6aca2e8bf8ee69da5e588b062656a736f6e2e636f6d21")
}

function ox2strCheckInput() {
    var e = editor.getValue();
    return $("#charlength").text(e.length), e.length > 10240 ? (msgError("数据不可以超过10M，否则会被屏蔽使用", function () {}), !1) :
        !0
}

function ox2strHexandchar(e, t) {
    var n = editor.getValue();
    if (n.length > 10240) return msgError("数据不可以超过10M，否则会被屏蔽使用", function () {}), void 0;
    if (n = n.replace(/[\\|%]\S/gi, "").replace(/\s/g, ""), "" == n) return msgError("内容不能为空"), void 0;
    t.button("loading");
    var i = bejsonHost + "Bejson/Api/HexToString/toWord";
    "d" === e && (i = bejsonHost + "Bejson/Api/hexToString/toHexadecimal"), doPost(i, {
        input: n
    }, function (e) {
        if (t.button("reset"), 200 === e.code || "200" === e.code) {
            var n = Util.charset,
                i = n.Base64.decode(e.data, "utf8");
            i ? editor2.setValue(i) : msgError("解密的文本有误，请检查后重试")
        } else alertError({
            con: e.msg
        })
    }, function () {
        t.button("reset"), msgError("转换失败，请稍候再试")
    })
}

function decodeJsEncodeWithHex() {
    var txt1 = editor.getValue(),
        pre = "",
        other = "";
    if (txt1 = txt1.replace('window["\\x65\\x76\\x61\\x6c"]', "eval"), "(" != txt1.substring(0, 1)) {
        var index1 = txt1.indexOf("(");
        pre = txt1.substring(0, index1), txt1 = txt1.substring(index1, txt1.length)
    }
    editor2.setValue(pre + eval("(" + txt1 + ")"))
}

function hex2String() {
    var e = editor.getValue(),
        t = e.length;
    if (0 == t % 2) {
        for (var n = "", i = 0; t > i; i += 2) {
            var o = e.substr(i, 2),
                r = parseInt(o, 16);
            n += String.fromCharCode(r)
        }
        editor2.setValue(n)
    }
}

function GiveRGB(Hex) {
    return Value = "A" == Hex ? 10 : "B" == Hex ? 11 : "C" == Hex ? 12 : "D" == Hex ? 13 : "E" == Hex ? 14 : "F" == Hex ?
        15 : eval(Hex)
}

function GiveHex(e) {
    return Value = 10 == e ? "A" : 11 == e ? "B" : 12 == e ? "C" : 13 == e ? "D" : 14 == e ? "E" : 15 == e ? "F" : "" +
        e
}

function HexToRGB(t) {
    return t = t.toUpperCase(), a = GiveRGB(t.substring(0, 1)), b = GiveRGB(t.substring(1, 2)), c = GiveRGB(t.substring(
        2, 3)), d = GiveRGB(t.substring(3, 4)), e = GiveRGB(t.substring(4, 5)), f = GiveRGB(t.substring(5, 6)), x =
        16 * a + b, y = 16 * c + d, z = 16 * e + f, (x ? x + "," : "") + (y ? y + "," : "") + (z ? z : "")
}

function RGBToHex(t) {
    return Red = t[0], Green = t[1], Blue = t[2], a = GiveHex(Math.floor(Red / 16)), b = GiveHex(Red % 16), c = GiveHex(
        Math.floor(Green / 16)), d = GiveHex(Green % 16), e = GiveHex(Math.floor(Blue / 16)), f = GiveHex(Blue % 16),
    "NaN" === a && (a = ""), "NaN" === b && (b = ""), "NaN" === c && (c = ""), "NaN" === d && (d = ""), "NaN" ===
    e && (e = ""), "NaN" === f && (f = ""), z = a + b + c + d + e + f
}

function renderLogo(e, t, n) {
    var i = new Image,
        o = e.getContext("2d"),
        r = 80;
    return t ? (i.onload = function () {
        n && n.button("reset"), $(e).data("logo", t);
        var a, s, l = i.width,
            c = i.height;
        e.width = r, e.height = r, o.fillStyle = "rgb(255, 255, 255)", o.fillRect(0, 0, r, r), a = Math.max(l,
            c), a > r && (s = r / a, l *= s, c *= s), o.drawImage(i, (r - l) / 2, (r - c) / 2, l, c)
    }, i.onerror = function () {
        n && n.button("reset"), msgError("图片加载失败")
    }, i.src = t, void 0) : (o.fillStyle = "rgb(255, 255, 255)", o.fillRect(0, 0, r, r), void 0)
}

function setSize(e, t, n, i, o, r) {
    $("#bitTxt").val(e), $("#bytesTxt").val(t), $("#kbTxt").val(n), $("#mbTxt").val(i), $("#gbTxt").val(o), $("#tbTxt")
        .val(r)
}

function htm2ubb(e) {
    return e = e.replace(/<br[^>]*>/gi, "\n"), e = e.replace(/<p[^>\/]*\/>/gi, "\n"), e = e.replace(
        /\son[\w]{3,16}\s?=\s*([\'\"]).+?\1/gi, ""), e = e.replace(/<hr[^>]*>/gi, "[hr]"), e = e.replace(
        /<(sub|sup|u|strike|b|i|pre)>/gi, "[$1]"), e = e.replace(/<\/(sub|sup|u|strike|b|i|pre)>/gi, "[/$1]"), e =
        e.replace(/<(\/)?strong>/gi, "[$1b]"), e = e.replace(/<(\/)?em>/gi, "[$1i]"), e = e.replace(
        /<(\/)?blockquote([^>]*)>/gi, "[$1blockquote]"), e = e.replace(/<img[^>]*smile=\"(\d+)\"[^>]*>/gi, "[s:$1]"),
        e = e.replace(/<img[^>]*src=[\'\"\s]*([^\s\'\"]+)[^>]*>/gi, "[img]$1[/img]"), e = e.replace(
        /<a[^>]*href=[\'\"\s]*([^\s\'\"]*)[^>]*>(.+?)<\/a>/gi, "[url=$1]$2[/url]"), e = e.replace(/<[^>]*?>/gi, ""),
        e = e.replace(/&amp;/gi, "&"), e = e.replace(/&lt;/gi, "<"), e = e.replace(/&gt;/gi, ">"), e = e.replace(
        /&quot;/gi, '"')
}

function ubb2html(e) {
    return e = e.replace(/</gi, "&lt;"), e = e.replace(/>/gi, "&gt;"), e = e.replace(/\n/gi, "<br />"), e = e.replace(
        /\[code\](.+?)\[\/code\]/gi,
        function (e, t) {
            return phpcode(t)
        }), e = e.replace(/\[hr\]/gi, "<hr />"), e = e.replace(/\[\/(size|color|font|backcolor)\]/gi, "</font>"), e =
        e.replace(/\[(sub|sup|u|i|strike|b|blockquote|li)\]/gi, "<$1>"), e = e.replace(
        /\[\/(sub|sup|u|i|strike|b|blockquote|li)\]/gi, "</$1>"), e = e.replace(/\[\/align\]/gi, "</p>"), e = e.replace(
        /\[(\/)?h([1-6])\]/gi, "<$1h$2>"), e = e.replace(/\[align=(left|center|right|justify)\]/gi,
        '<p align="$1">'), e = e.replace(/\[size=(\d+?)\]/gi, '<font size="$1">'), e = e.replace(
        /\[color=([^\[\<]+?)\]/gi, '<font color="$1">'), e = e.replace(/\[backcolor=([^\[\<]+?)\]/gi,
        '<font style="background-color:$1">'), e = e.replace(/\[font=([^\[\<]+?)\]/gi, '<font face="$1">'), e = e.replace(
        /\[list=(a|A|1)\](.+?)\[\/list\]/gi, '<ol type="$1">$2</ol>'), e = e.replace(/\[(\/)?list\]/gi, "<$1ul>"),
        e = e.replace(/\[s:(\d+)\]/gi, function (e, t) {
            return smilepath(t)
        }), e = e.replace(/\[img\]([^\[]*)\[\/img\]/gi, '<img src="$1" border="0" />'), e = e.replace(
        /\[url=([^\]]+)\]([^\[]+)\[\/url\]/gi, '<a href="http://www.bejson.com/$1">$2</a>'), e = e.replace(
        /\[url\]([^\[]+)\[\/url\]/gi, '<a href="http://www.bejson.com/$1">$1</a>')
}

function htmltoubb() {
    editor2.setValue(htm2ubb(editor.getValue()))
}

function ubbtohtml() {
    editor2.setValue(ubb2html(editor.getValue()))
}

function ToFull() {
    for (var e = editor.getValue(), t = "", n = e.length, i = 0; n > i; i++) {
        var o = e.charCodeAt(i);
        o = o >= 33 && 126 >= o ? o + 65248 : o, o = 32 == o ? 12288 : o, t += String.fromCharCode(o)
    }
    t = t.replace(/\．/g, "。"), editor2.setValue(t)
}

function ToHalf() {
    for (var e = editor.getValue(), t = "", n = e.length, i = 0; n > i; i++) {
        var o = e.charCodeAt(i);
        o = o >= 65281 && 65374 >= o ? o - 65248 : o, o = 12288 == o ? 32 : o, t += String.fromCharCode(o)
    }
    t = t.replace(/\。/g, "."), editor2.setValue(t)
}

function html_2_md() {
    editor2.setValue(toMarkdown(editor.getValue()))
}

function md_2_html() {
    var e = markdown.toHTML(editor.getValue());
    editor2.setValue(e)
}

function lineToHump(e) {
    var t = e.replace(/\_(\w)/g, function (e, t) {
        return t.toUpperCase()
    });
    editor2.setValue(t)
}

function humpToLine(e) {
    var t = e.replace(/([A-Z])/g, "_$1").toLowerCase();
    editor2.setValue(t)
}

function imgHandlerQiniuUploader(e, t, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(t.name);
            window.imghandlerFilename = t.name, o.putFile(a, t, {
                before: function () {
                    $(n).attr("data-status", "uploading"), $(n + " .actions .file-status").attr(
                        "data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(n + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(n +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (o) {
                if (o) e.button("reset"), $(n).attr("data-status", "failed"), $(n +
                    " .actions .file-status").attr("data-original-title", "失败"), $(n +
                    " .actions .file-status .text").html("失败"), msgError("上传失败，请稍候重试");
                else {
                    $(n).attr("data-status", "sucess"), $(n + " .actions .file-status").attr(
                        "data-original-title", "成功"), $(n + " .actions .file-status .text").html(
                        "成功");
                    var s =
                        '<div class="image-handler-box">\n                <div class="image-handler-item">\n                    <div class="image-handler-head">\n                        <div class="imghandler-size-radio">\n                            <div class="display-i-block">尺寸：</div>\n                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler16' + n +
                        '" data-size="16,16" checked="true"><label for="imgHandler16' + n +
                        '">16*16</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler32' + n + '" data-size="32,32"><label for="imgHandler32' +
                        n + '">32*32</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler64' + n + '" data-size="64,64"><label for="imgHandler64' +
                        n + '">64*64</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler80' + n + '" data-size="80,80"><label for="imgHandler80' +
                        n + '">80*80</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler100' + n +
                        '" data-size="100,100"><label for="imgHandler100' + n +
                        '">100*100</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler120' + n +
                        '" data-size="120,120"><label for="imgHandler120' + n +
                        '">120*120</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler128' + n +
                        '" data-size="128,128"><label for="imgHandler128' + n +
                        '">128*128</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler256' + n +
                        '" data-size="256,256"><label for="imgHandler256' + n +
                        '">256*256</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler512' + n +
                        '" data-size="512,512"><label for="imgHandler512' + n +
                        '">512*512</label></div>\n' +
                        '                            <div class="radio-primary display-i-block"><input type="radio" name="imgHandlerSize' +
                        n + '" id="imgHandler0' + n + '" data-size="0,0"><label for="imgHandler0' + n +
                        '">原大小</label></div>\n' + "                        </div>\n" +
                        '                        <div class="t-big-margin imghandler-format-radio">\n' +
                        '                            <div class="display-i-block">格式：</div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' +
                        n + '" id="imgHandlerJpg' + n +
                        '" data-format="jpg" checked="true"><label for="imgHandlerJpg' + n +
                        '">JPG</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' +
                        n + '" id="imgHandlerPng' + n + '" data-format="png"><label for="imgHandlerPng' +
                        n + '">PNG</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' +
                        n + '" id="imgHandlerGif' + n + '" data-format="gif"><label for="imgHandlerGif' +
                        n + '">GIF</label></div>\n' +
                        '                            <div class="radio-primary display-i-block r-big-margin"><input type="radio" name="imgHandlerFormat' +
                        n + '" id="imgHandlerWebp' + n +
                        '" data-format="webp"><label for="imgHandlerWebp' + n +
                        '">WEBP</label></div>\n' + "                        </div>\n" +
                        '                        <button type="button" class="btn btn-success l-mini-margin image-handler-start">开始处理</button>\n' +
                        "                    </div>\n" +
                        '                    <div class="image-handler-con">\n' +
                        '                        <div class="relative display-none image-handler-con-div">\n' +
                        '                            <a href="' + a + '" target="_blank">' + a +
                        "</a>\n" + '                            <span class="copy">复制链接</span>\n' +
                        "                        </div>\n" + '                        <img src="' + i.data
                            .domain + "/upload/" + r + "." + extname(t.name) + '">\n' +
                        "                    </div>\n" + "                </div>\n" +
                        "            </div>";
                    $("#imageHandlerList").prepend(s), e.button("reset")
                }
            })
        } else alertError({
            con: i.msg
        }), e.button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), e.button("reset")
    })
}

function icomakerQiniuUploader(e, t) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (n) {
        if (200 === n.code || "200" === n.code) {
            var i = qiniu.bucket(n.data.domain, {
                    putToken: n.data.token
                }),
                o = 1e17 * Math.random(),
                r = "upload/" + o + "." + extname(e.name);
            i.putFile(r, e, {
                before: function () {
                    $(t).attr("data-status", "uploading"), $(t + " .actions .file-status").attr(
                        "data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(t + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(t +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (i) {
                if (i) $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset"), $(t).attr(
                    "data-status", "failed"), $(t + " .actions .file-status").attr(
                    "data-original-title", "失败"), $(t + " .actions .file-status .text").html("失败"),
                    msgError("上传失败，请稍候重试");
                else {
                    var r = n.data.domain + "/upload/" + o + "." + extname(e.name);
                    if (r) {
                        -1 != r.indexOf("?") && (r = r.substring(0, r.indexOf("?")));
                        var a = e.name.substring(0, e.name.lastIndexOf(".")),
                            s = r + "?imageView2/" + "1";
                        globalIcoSrc = s, $("#createFavicon").attr("data-id", t), createIcon(s, a)
                    } else msgError("请上传图片");
                    $(t).attr("data-status", "sucess"), $(t + " .actions .file-status").attr(
                        "data-original-title", "成功"), $(t + " .actions .file-status .text").html(
                        "成功"), $("#uploadIconBtn").button("reset"), $("#createFavicon").button(
                        "reset")
                }
            })
        } else alertError({
            con: n.msg
        }), $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), $("#uploadIconBtn").button("reset"), $("#createFavicon").button("reset")
    })
}

function createIcon(e, t) {
    $($("#iconmakerType input[type=radio]")).each(function (t, n) {
        if ($(n).prop("checked")) {
            var i = $(n).attr("data-size").split(",")[0],
                o = $(n).attr("data-size").split(",")[1];
            e += "/w/" + i + "/h/" + o
        }
    });
    var n = "ico";
    e += "/format/" + n + "/q/100";
    var i = e + "&attname=" + t + "." + n,
        o = document.createElement("a"),
        r = new MouseEvent("click");
    o.download = t || "favico.icon", o.href = i, o.dispatchEvent(r)
}

function img2base64Reset() {
    var e = [],
        t = $(".waterfall li").outerWidth(!0);
    colCount = parseInt($(".waterfall").width() / t);
    for (var n = 0; colCount > n; n++) e[n] = 0;
    $(".waterfall li").each(function () {
        for (var n = e[0], i = 0, o = 0; colCount > o; o++) e[o] < n && (n = e[o], i = o);
        $(this).css({
            left: i * t,
            top: n
        }), e[i] += $(this).outerHeight(!0)
    });
    var i = e[0];
    $(e).each(function (e, t) {
        t > i && (i = t)
    }), $("#img2base54Area").height(i)
}

function shorturlChange() {
    var e = $("#shorturlContent").val();
    $("#shorturlContent").val($("#shorturlResult").val()), $("#shorturlResult").val(e)
}

function shorturlEncode() {
    doPost(bejsonHost + "Bejson/Api/ShortUrl/getShortUrl", {
        url: $("#shorturlContent").val()
    }, function (e) {
        200 === e.code || "200" === e.code ? $("#shorturlResult").val(e.data.short_url) : msgError(e.msg), $(
            "#shorturlEncode").button("reset")
    }, function (e) {
        $("#shorturlEncode").button("reset"), msgError("获取失败，请稍候重试"), console.log(e)
    })
}

function shorturlDecode() {
    doPost(bejsonHost + "Bejson/Api/ShortUrl/restoreShortUrl", {
        url: $("#shorturlContent").val()
    }, function (e) {
        200 === e.code || "200" === e.code ? $("#shorturlResult").val(e.data.long_url) : msgError(e.msg), $(
            "#shorturlDecode").button("reset")
    }, function (e) {
        $("#shorturlDecode").button("reset"), msgError("获取失败，请稍候重试"), console.log(e)
    })
}

function v10toX(e, t) {
    if (t = String(t).replace(/ /gi, ""), "" == t) return "";
    if (parseInt(t) != t) return jinzhiM("请输入整数！"), "";
    for (var n = "", i = jinzhiSs.substr(0, e); 0 != t;) {
        var o = t % e;
        n = i.charAt(o) + n, t = (t - o) / e
    }
    return n
}

function vXto10(n, m) {
    if (m = String(m).replace(/ /gi, ""), "" == m) return "";
    var a = jinzhiSs.substr(0, n);
    if ("" != eval("m.replace(/[" + a + "]/gi,'')")) return jinzhiM("请输入" + n + "进制数！"), "";
    for (var t = 0, c = 1, x = m.length - 1; x > -1; x--) t += c * a.indexOf(m.charAt(x)), c *= n;
    return t
}

function vXtoY(e, t, n) {
    return a = vXto10(1 * e, t), "" == a ? "" : a = v10toX(n, a)
}

function jinzhiM(e) {
    0 == alert_msg_count && (msgError(e), alert_msg_count++)
}

function jinzhiConvert(e, t, n, i) {
    var o = document.getElementById(t).value,
        r = document.getElementById(i),
        a = document.getElementById(e).value,
        s = document.getElementById(n).value;
    r.value = vXtoY(a, o, s)
}

function jinzhiConvertC(e, t, n, i) {
    var o = document.getElementById(t).value,
        r = document.getElementById(i);
    r.value = vXtoY(e, o, n)
}

function jingzhiChange() {
    var e = $("#input_value").val();
    if (e = e.toLowerCase(), "" != e) {
        var t = $("input:radio:checked").val();
        $("input[id^=base_]").each(function () {
            var n = $(this).attr("id"),
                i = n.replace("base_", ""),
                o = vXtoY(t, e, i);
            $(this).val(o)
        }), alert_msg_count = 0
    }
}

function jinzhiPx() {
    jinzhiConvertC($("#input_num").val(), "input_value", $("#output_num").val(), "output_value")
}

function jinzhiEmpty() {
    document.getElementById("str").value = "", document.getElementById("estr").value = "", document.getElementById(
        "str").select()
}

function uplowercase(e) {
    var t = editor.getValue();
    editor2.setValue(e ? t.toLowerCase() : t.toUpperCase())
}

function qiniuFile2PdfUploader(e, t, n) {
    doPost(bejsonHost + "Bejson/Api/ImageHandle/upToken", {}, function (i) {
        if (200 === i.code || "200" === i.code) {
            var o = qiniu.bucket(i.data.domain, {
                    putToken: i.data.token
                }),
                r = 1e17 * Math.random(),
                a = "upload/" + r + "." + extname(t.name);
            window.img2SvgFilename = t.name, o.putFile(a, t, {
                before: function (e, t) {
                    window.img2SvgKeystr = t, $(n).attr("data-status", "uploading"), $(n +
                        " .actions .file-status").attr("data-original-title", "正在上传")
                },
                progress: function (e) {
                    $(n + " .file-progress-bar").css("width", e.toFixed(2) + "%"), $(n +
                        " .actions .file-status .text").html(e.toFixed(2) + "%")
                }
            }, function (i, o) {
                console.log(o), i ? (e.button("reset"), $(n).attr("data-status", "failed"), $(n +
                    " .actions .file-status").attr("data-original-title", "失败"), $(n +
                    " .actions .file-status .text").html("失败"), msgError("转换失败，请稍候重试")) : ($(n).attr(
                    "data-status", "sucess"), $(n + " .actions .file-status").attr(
                    "data-original-title", "成功"), $(n + " .actions .file-status .text").html(
                    "成功"), file2PdfCheckStatus(o.persistentId, o.name, e, t))
            })
        } else alertError({
            con: i.msg
        }), e.button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), e.button("reset")
    })
}

function file2PdfCheckStatus(e, t, n, i) {
    var o = window.setInterval(function () {
        $.getJSON("http://www.bejson.com/api/qiniuajax.php?id=" + e, function (e) {
            if (0 == e.code) {
                n.button("reset"), window.clearInterval(o);
                var t = i.name.lastIndexOf("."),
                    r = i.name.slice(0, t) + ".pdf",
                    a = "<li><p>" + r +
                        '</p><a class="btn btn-primary" href="http://7xkmrw.com1.z0.glb.clouddn.com/" target="_blank">预览</a><a class="btn btn-success" href="http://7xkmrw.com1.z0.glb.clouddn.com/?attname=.pdf" download target="_blank">下载</a></li>';
                $("#file2PdfList").append(a)
            }
        }, function () {
            window.clearInterval(o), msgError("转换失败，请稍候重试"), n.button("reset")
        }).error(function () {
            window.clearInterval(o), msgError("转换失败，请稍候重试"), n.button("reset")
        })
    }, 2e3)
}

function num2hzChange(e) {
    var t = $("#num2hzStr").val();
    if (e) {
        var n = /[^\d^\.]+/;
        if (n.test(t)) return msgError("输入格式有误"), void 0;
        for (var i = "", o = 0; o < t.length; o++) {
            var r = t.charAt(o);
            i += "." == r ? "点" : hzf.charAt(parseInt(r))
        }
        $("#num2hzEstr").val(i), $("#num2hzRmb").show(), $("#num2hzEstr2").val(changeNumMoneyToChinese(t))
    } else {
        for (var a = "", s = t.length, o = 0; s > o; o++) {
            var l = t.charAt(o),
                r = hzf.indexOf(l); - 1 != r ? (t = t.replace(l, r), a += r) : ("元" == l || "圆" == l || "点" == l) && (a +=
                ".")
        }
        $("#num2hzRmb").hide(), $("#num2hzEstr").val(a)
    }
}

function changeNumMoneyToChinese(e) {
    var t, n, i, o = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"),
        r = new Array("", "拾", "佰", "仟"),
        a = new Array("", "万", "亿", "兆"),
        s = new Array("角", "分", "毫", "厘"),
        l = "整",
        c = "圆",
        d = 1e15,
        u = "";
    if ("" == e) return "";
    if (e = parseFloat(e), e >= d) return msgError("超出最大处理数字"), "";
    if (0 == e) return u = o[0] + c + l;
    if (e = e.toString(), -1 == e.indexOf(".") ? (t = e, n = "") : (i = e.split("."), t = i[0], n = i[1].substr(0, 4)),
    parseInt(t, 10) > 0) {
        for (var p = 0, h = t.length, f = 0; h > f; f++) {
            var g = t.substr(f, 1),
                m = h - f - 1,
                v = m / 4,
                y = m % 4;
            "0" == g ? p++ : (p > 0 && (u += o[0]), p = 0, u += o[parseInt(g)] + r[y]), 0 == y && 4 > p && (u += a[v])
        }
        u += c
    }
    if ("" != n)
        for (var b = n.length, f = 0; b > f; f++) {
            var g = n.substr(f, 1);
            "0" != g && (u += o[Number(g)] + s[f])
        }
    return "" == u ? u += o[0] + c + l : "" == n && (u += l), u
}

function native2ascii() {
    for (var e = editor.getValue().split(""), t = "", n = 0; n < e.length; n++) {
        var i = Number(e[n].charCodeAt(0));
        if (!document.getElementById("ignoreLetter").checked || i > 127) {
            var o = i.toString(16);
            o = new String("0000").substring(o.length, 4) + o, t += "\\u" + o
        } else t += e[n]
    }
    editor2.setValue(t)
}

function ascii2native() {
    for (var e = editor2.getValue().split("\\u"), t = e[0], n = 1; n < e.length; n++) {
        var i = e[n];
        t += String.fromCharCode(parseInt("0x" + i.substring(0, 4))), i.length > 4 && (t += i.substring(4, i.length))
    }
    editor.setValue(t)
}

function toPyConvert() {
    var e = $("#hidesel").val(),
        t = $("#sym").prop("checked"),
        n = $("#sym1").prop("checked"),
        i = $("#sym2").prop("checked"),
        o = toPinyin({
            str: editor.getValue(),
            dz: e,
            sym: t,
            sym1: n,
            sym2: i
        });
    editor2.setValue(o)
}

function J2Fconvert(e) {
    0 == e ? editor2.setValue(jtgo(editor.getValue())) : 2 == e ? editor2.setValue(qqgo(editor.getValue())) : editor2.setValue(
        ftgo(editor.getValue()))
}

function softParse(e) {
    for (var n = "", i = 0; i < e.length; i++) {
        t = e[i];
        var o = "";
        if ("" != t[0]) {
            for (var r = 0; r < t[2].length; r++) o += softRooturl + t[2][r] + ",";
            for (var a = "", r = 0; r < t[1].length; r++) {
                var s = t[1][r],
                    l = "" == s.name ? "下载" : s.name,
                    c = -1 != s.url.indexOf("http://") || -1 != s.url.indexOf("https://") ? s.url : softRooturl + s.url;
                a += '<a class="btn-success btn btn-sm l-big-margin" href="' + c + "\" shotimg='" + o +
                    "' class='downa' target='_blank'>" + l + "</a>"
            }
            n += '<span class="list-group-item">' + t[0] + a + "</span>"
        }
    }
    return n
}

function sql2pojoGen(e, t, n, i) {
    var o = "",
        r = "";
    "1" === i && (r = "bejson.com");
    var a = e;
    if (a) {
        var s = getBeanFieldFromJson(a, o, t, n),
            l = "";
        $.each(s, function (e, t) {
            var n = toBeanText(t, r),
                i = "";
            0 != e && (i = "small-text"), n = n.replace("<int>", "<Integer>").replace("<long>", "<Long>"), l +=
                n
        }), editor2.setValue(l)
    }
}

function sql2pojoChechJavaWords(e) {
    var t = e.split("\n").join("").replace(/\s/g, "");
    t = t.split("\n").join(" ");
    for (var n = javawordsStr.split(","), i = 0; i < n.length; i++) {
        var o = n[i],
            r = '"' + o + '":',
            a = "'" + o + "':";
        if (-1 != t.indexOf(r) || -1 != t.indexOf(a)) return alertError("转换失败"), !1
    }
    return !0
}

function sql2pojo() {
    return editor.getValue() ? ($("#sql2pojoSubmit").button("loading"), doPost(bejsonHost +
        "Bejson/Api/SqlToC/getSqlToC", {
            sql: editor.getValue().replace(/\n/g, ""),
            toCamel: $("#pojoType").val(),
            lowcase: $("#pojoLowcasedv").val(),
            useWrapper: $("#pojoPackage").val(),
            appendDefaultValue: document.getElementById("appendDefaultValue").checked ? 0 : 1,
            needStaticFiled: document.getElementById("needStaticFiled").checked
        },
        function (e) {
            200 === e.code || "200" === e.code ? sql2pojoChechJavaWords(e.data) && sql2pojoGen(e.data, $(
                "#pojoType").val(), $("#pojoLowcasedv").val(), $("#pojoPackage").val()) : alertError({
                con: e.msg
            }), $("#sql2pojoSubmit").button("reset")
        },
        function () {
            msgError("请求错误"), $("#sql2pojoSubmit").button("reset")
        }), void 0) : (msgError("请输入sql语句"), void 0)
}

function sql2pojoOgetType(e) {
    return e = e.toLowerCase(), -1 != e.indexOf("varchar") ? "String" : -1 != e.indexOf("number") || -1 != e.indexOf(
        "int") ? "int" : -1 != e.indexOf("blob") ? "InputStream" : -1 != e.indexOf("long") ? "long" : -1 != e.indexOf(
        "decimal") || -1 != e.indexOf("numeric") ? "double" : e
}

function sql2pojoOchange() {
    var e = editor.getValue();
    sql = e.replace(/\n/gi, ""), sql = sql.replace(/create table ([^\\(]+)+\((.*)\)/gi, "$1##$2"), sql = sql.split("##"),
        sql[0].trim(), sql = sql[1];
    var t = sql.split(",");
    new Array(t.length);
    var n = "";
    $(t).each(function () {
        if ("" != this.toString().trim()) {
            var e = this.toString().trim().split(/\s+/g);
            field = e[0], type = e[1], n += "private " + sql2pojoOgetType(type) + " " + field + ";\r\n"
        }
    }), editor2.setValue(n)
}

function sqlviewConvert() {
    return editor.getValue() ? ($("#sqlviewVtable").html(""), doPost(bejsonHost + "Bejson/Api/SqlView/formatSql", {
        formatSql: editor.getValue()
    }, function (e) {
        if (200 === e.code || "200" === e.code) {
            var t = e.data;
            for (var n in t) $("#sqlviewVtable").append("<tr><td>" + n + "</td><td>" + t[n] + "</td></tr>")
        } else alertError({
            con: e.msg
        });
        $("#sqlviewCreate").button("reset")
    }, function () {
        msgError("请求错误"), $("#sqlviewCreate").button("reset")
    }), void 0) : (msgError("请贴入sql代码"), void 0)
}

function properties2yamlConvert() {
    doPost(bejsonHost + "Bejson/Api/Proyaml/Prop2yaml", {
        oldStr: editor.getValue()
    }, function (e) {
        200 === e.code || "200" === e.code ? editor2.setValue(e.data.replace(/↵/g, "\n")) : alertError({
            con: e.msg
        }), $("#properties2yamlConvert").button("reset")
    }, function () {
        msgError("请求失败"), $("#properties2yamlConvert").button("reset")
    })
}

function getIpinfo() {
    doPost(bejsonHost + "Bejson/Api/Ip/getIp", {
        ip: $("#queryIp").val()
    }, function (e) {
        if (200 === e.code || "200" === e.code) {
            var t = e.data;
            $("#country").text(t.country), $("#country_id").text(t.country_id), $("#area").text(t.location), $(
                "#area_id").text(t.area_id), $("#region").text(t.region), $("#region_id").text(t.region_id),
                $("#city").text(t.city), $("#city_id").text(t.city_id), $("#county").text(t.county), $(
                "#county_id").text(t.county_id), $("#isp").text(t.isp), $("#isp_id").text(t.isp_id)
        } else msgError(e.msg);
        $("#checkIp").button("reset"), $("#queryipBox").removeClass("loading")
    }, function () {
        msgError("获取失败，请稍候再试"), $("#checkIp").button("reset"), $("#queryipBox").removeClass("loading")
    })
}

function detectOS() {
    var e = navigator.userAgent,
        t = "Win32" === navigator.platform || "Windows" === navigator.platform,
        n = "Mac68K" === navigator.platform || "MacPPC" === navigator.platform || "Macintosh" === navigator.platform ||
            "MacIntel" === navigator.platform;
    if (n) return "Mac";
    var i = "X11" === navigator.platform && !t && !n;
    if (i) return "Unix";
    var o = String(navigator.platform).indexOf("Linux") > -1;
    if (o) return "Linux";
    if (t) {
        var r = e.indexOf("Windows NT 5.0") > -1 || e.indexOf("Windows 2000") > -1;
        if (r) return "Win2000";
        var a = e.indexOf("Windows NT 5.1") > -1 || e.indexOf("Windows XP") > -1;
        if (a) return "WinXP";
        var s = e.indexOf("Windows NT 5.2") > -1 || e.indexOf("Windows 2003") > -1;
        if (s) return "Win2003";
        var l = e.indexOf("Windows NT 6.0") > -1 || e.indexOf("Windows Vista") > -1;
        if (l) return "WinVista";
        var c = e.indexOf("Windows NT 6.1") > -1 || e.indexOf("Windows 7") > -1;
        if (c) return "Win7";
        var d = e.indexOf("Windows NT 8") > -1 || e.indexOf("Windows 8") > -1;
        if (d) return "Win8";
        var u = e.indexOf("Windows NT 10") > -1 || e.indexOf("Windows 10") > -1;
        if (u) return "Win10"
    }
    return "other"
}

function userAgentParseHtml(e, t) {
    for (var n = "", i = 0; i < t.length; i++) {
        var o = t[i];
        n += "<tr>", n += "<td>" + o[0] + '</td><td class="copy-agent-con">' + o[1] +
            '<td><button type="button" class="btn copy-agent">复制</button></td></td>', n += "</tr>"
    }
    $("#" + e).append(n)
}

function ip2int() {
    var e = $("#ip2intStr").val(),
        t = /^[1-9]([0-9\.]+\d)?$/;
    return e ? t.test(e) ? (e = e.split("."), 4 !== e.length ? (msgError("IP格式错误"), void 0) : (num = 256 * 256 * 256 *
        Number(e[0]) + 256 * 256 * Number(e[1]) + 256 * Number(e[2]) + Number(e[3]), num >>>= 0, document.getElementById(
        "ip2intRstr").value = num, void 0)) : (msgError("IP格式错误"), void 0) : (msgError("请输入IP"), void 0)
}

function int2ip() {
    var e = $("#ip2intStr").val(),
        t = /^\+?[1-9][0-9]*$/;
    if (!e) return msgError("请输入数字"), void 0;
    if (!t.test(e)) return msgError("请输入正整数"), void 0;
    var n = new Array;
    n[0] = e >>> 24 >>> 0, n[1] = e << 8 >>> 24 >>> 0, n[2] = e << 16 >>> 24, n[3] = e << 24 >>> 24, str = String(n[0]) +
        "." + String(n[1]) + "." + String(n[2]) + "." + String(n[3]), document.getElementById("ip2intRstr").value = str
}

function doJsBeautify() {
    var e = editor.getValue().replace(/^\s+/, "");
    if (!e) return msgError("格式化的代码不能为空"), void 0;
    var t = document.getElementById("tabsize").value,
        n = " ";
    return 1 == t && (n = "	"), e && "<" === e.charAt(0) ? editor.setValue(style_html(e, t, n, 80)) : editor.setValue(
        js_beautify(e, t, n)), !1
}

function jshtmlFormatPackJs(e) {
    var t = editor.getValue().replace(/^\s+|\s+$/g, "");
    if ("" == t) return msgError("请输入需要压缩的内容!"), void 0;
    var n = new Packer;
    if (e) var i = n.pack(t, 1, 0);
    else var i = n.pack(t, 0, 0);
    editor.setValue(i)
}

function jshtmlFormatRechange() {
    editor.setValue(editor.getValue().replace(/document.writeln\("/g, "").replace(/"\);/g, "").replace(/\\\"/g, '"').replace(
        /\\\'/g, "'").replace(/\\\//g, "/").replace(/\\\\/g, "\\"))
}

function jshtmlFormatChangeIt() {
    editor.setValue('document.writeln("' + editor.getValue().replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g,
        "\\'").replace(/\"/g, '\\"').split("\n").join('");\ndocument.writeln("') + '");')
}

function jshtmlFormatChange() {
    jshtmlFormatIschange ? jshtmlFormatRechange() : jshtmlFormatChangeIt(), jshtmlFormatIschange = !
        jshtmlFormatIschange
}

function doJsCssBeautify() {
    document.getElementById("cssBeautify").disabled = !0;
    var e = editor.getValue().replace(/^\s+/, ""),
        t = document.getElementById("cssTableSize").value,
        n = " ";
    return 1 == t && (n = "	"), e && "<" === e.charAt(0) ? editor.setValue(style_html(e, t, n, 80)) : editor.setValue(
        lCSSCoder.format(e)), document.getElementById("cssBeautify").disabled = !1, !1
}

function cssPackJs(e) {
    var t = editor.getValue().replace(/^\s+|\s+$/g, "");
    if ("" == t) return alert("请输入需要压缩的内容!"), void 0;
    var n = new Packer;
    if (e) var i = n.pack(t, 1, 0);
    else var i = n.pack(t, 0, 0);
    editor.setValue(i)
}

function formatCss(e) {
    editor.setValue(lCSSCoder[e](editor.getValue()))
}

function doSql2csharppojo() {
    return editor.getValue() ? (doPost(bejsonHost + "Bejson/Api/SqlToC/getSqlToC", {
        sql: editor.getValue().replace(/\n/g, "")
    }, function (e) {
        if (200 === e.code || "200" === e.code) {
            var t = JSON2CSharp.convert(JSON.parse(e.data));
            t = t.replace(/<br\/>/g, "\n"), $("#res").html(t), editor2.setValue($("#res").text())
        } else alertError({
            con: e.msg
        });
        $("#sql2charpCreate").button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), $("#sql2charpCreate").button("reset")
    }), void 0) : (msgError("请贴入sql代码"), void 0)
}! function (e, t) {
    function n(e) {
        var t = e.length,
            n = dt.type(e);
        return dt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t ||
            "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e) {
        var t = kt[e] = {};
        return dt.each(e.match(pt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o(e, n, i, o) {
        if (dt.acceptData(e)) {
            var r, a, s = dt.expando,
                l = e.nodeType,
                c = l ? dt.cache : e,
                d = l ? e[s] : e[s] && s;
            if (d && c[d] && (o || c[d].data) || i !== t || "string" != typeof n) return d || (d = l ? e[s] = tt.pop() ||
                dt.guid++ : s), c[d] || (c[d] = l ? {} : {
                toJSON: dt.noop
            }), ("object" == typeof n || "function" == typeof n) && (o ? c[d] = dt.extend(c[d], n) : c[d].data =
                dt.extend(c[d].data, n)), a = c[d], o || (a.data || (a.data = {}), a = a.data), i !== t && (a[
                dt.camelCase(n)] = i), "string" == typeof n ? (r = a[n], null == r && (r = a[dt.camelCase(n)])) :
                r = a, r
        }
    }

    function r(e, t, n) {
        if (dt.acceptData(e)) {
            var i, o, r = e.nodeType,
                a = r ? dt.cache : e,
                l = r ? e[dt.expando] : dt.expando;
            if (a[l]) {
                if (t && (i = n ? a[l] : a[l].data)) {
                    dt.isArray(t) ? t = t.concat(dt.map(t, dt.camelCase)) : t in i ? t = [t] : (t = dt.camelCase(t), t =
                        t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !s(i) : !dt.isEmptyObject(i)) return
                }(n || (delete a[l].data, s(a[l]))) && (r ? dt.cleanData([e], !0) : dt.support.deleteExpando || a != a.window ?
                    delete a[l] : a[l] = null)
            }
        }
    }

    function a(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var o = "data-" + n.replace(Tt, "-$1").toLowerCase();
            if (i = e.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Et.test(i) ?
                        dt.parseJSON(i) : i
                } catch (r) {}
                dt.data(e, n, i)
            } else i = t
        }
        return i
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !dt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function d() {
        try {
            return X.activeElement
        } catch (e) {}
    }

    function u(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function p(e, t, n) {
        if (dt.isFunction(t)) return dt.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return dt.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ft.test(t)) return dt.filter(t, e, n);
            t = dt.filter(t, e)
        }
        return dt.grep(e, function (e) {
            return dt.inArray(e, t) >= 0 !== n
        })
    }

    function h(e) {
        var t = Ut.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return dt.nodeName(e, "table") && dt.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName(
            "tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function g(e) {
        return e.type = (null !== dt.find.attr(e, "type")) + "/" + e.type, e
    }

    function m(e) {
        var t = rn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) dt._data(n, "globalEval", !t || dt._data(t[i], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && dt.hasData(e)) {
            var n, i, o, r = dt._data(e),
                a = dt._data(t, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; o > i; i++) dt.event.add(t, n, s[n][i])
            }
            a.data && (a.data = dt.extend({}, a.data))
        }
    }

    function b(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !dt.support.noCloneEvent && t[dt.expando]) {
                o = dt._data(t);
                for (i in o.events) dt.removeEvent(t, i, o.handle);
                t.removeAttribute(dt.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML =
                e.outerHTML), dt.support.html5Clone && e.innerHTML && !dt.trim(t.innerHTML) && (t.innerHTML = e
                .innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !==
            e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected :
                ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, n) {
        var i, o, r = 0,
            a = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !==
            G ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], i = e.childNodes || e; null != (o = i[r]); r++) !n || dt.nodeName(o, n) ? a.push(o) : dt.merge(
                a, x(o, n));
        return n === t || n && dt.nodeName(e, n) ? dt.merge([e], a) : a
    }

    function $(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = kn.length; o--;)
            if (t = kn[o] + n, t in e) return t;
        return i
    }

    function _(e, t) {
        return e = t || e, "none" === dt.css(e, "display") || !dt.contains(e.ownerDocument, e)
    }

    function C(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = dt._data(i,
            "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style
            .display && _(i) && (r[a] = dt._data(i, "olddisplay", S(i.nodeName)))) : r[a] || (o = _(i), (n &&
            "none" !== n || !o) && dt._data(i, "olddisplay", o ? n : dt.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style
            .display = t ? r[a] || "" : "none"));
        return e
    }

    function k(e, t, n) {
        var i = yn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function E(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" ===
        n && (a += dt.css(e, n + Cn[r], !0, o)), i ? ("content" === n && (a -= dt.css(e, "padding" + Cn[r], !0, o)),
        "margin" !== n && (a -= dt.css(e, "border" + Cn[r] + "Width", !0, o))) : (a += dt.css(e, "padding" + Cn[
            r], !0, o), "padding" !== n && (a += dt.css(e, "border" + Cn[r] + "Width", !0, o)));
        return a
    }

    function T(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = un(e),
            a = dt.support.boxSizing && "border-box" === dt.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = pn(e, t, r), (0 > o || null == o) && (o = e.style[t]), bn.test(o)) return o;
            i = a && (dt.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + E(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function S(e) {
        var t = X,
            n = $n[e];
        return n || (n = j(e, t), "none" !== n && n || (dn = (dn || dt("<iframe frameborder='0' width='0' height='0'/>")
            .css("cssText", "display:block !important")).appendTo(t.documentElement), t = (dn[0].contentWindow ||
            dn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t),
            dn.detach()), $n[e] = n), n
    }

    function j(e, t) {
        var n = dt(t.createElement(e)).appendTo(t.body),
            i = dt.css(n[0], "display");
        return n.remove(), i
    }

    function A(e, t, n, i) {
        var o;
        if (dt.isArray(t)) dt.each(t, function (t, o) {
            n || Tn.test(e) ? i(e, o) : A(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== dt.type(t)) i(e, t);
        else
            for (o in t) A(e + "[" + o + "]", t[o], n, i)
    }

    function M(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(pt) || [];
            if (dt.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] =
                    e[i] || []).push(n)
        }
    }

    function I(e, n, i, o) {
        function r(l) {
            var c;
            return a[l] = !0, dt.each(e[l] || [], function (e, l) {
                var d = l(n, i, o);
                return "string" != typeof d || s || a[d] ? s ? !(c = d) : t : (n.dataTypes.unshift(d), r(d), !1)
            }), c
        }
        var a = {},
            s = e === qn;
        return r(n.dataTypes[0]) || !a["*"] && r("*")
    }

    function N(e, n) {
        var i, o, r = dt.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== t && ((r[o] ? e : i || (i = {}))[o] = n[o]);
        return i && dt.extend(!0, e, i), e
    }

    function D(e, n, i) {
        for (var o, r, a, s, l = e.contents, c = e.dataTypes;
             "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
            for (s in l)
                if (l[s] && l[s].test(r)) {
                    c.unshift(s);
                    break
                } if (c[0] in i) a = c[0];
        else {
            for (s in i) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        return a ? (a !== c[0] && c.unshift(a), i[a]) : t
    }

    function L(e, t, n, i) {
        var o, r, a, s, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = d.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                l = r, r = d.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (a = c[l + " " + r] || c["* " + r], !a)
                        for (o in c)
                            if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], d.unshift(s[1]));
                                break
                            } if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch (u) {
                            return {
                                state: "parsererror",
                                error: a ? u : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function B() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function H() {
        return setTimeout(function () {
            Zn = t
        }), Zn = dt.now()
    }

    function O(e, t, n) {
        for (var i, o = (ri[t] || []).concat(ri["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function V(e, t, n) {
        var i, o, r = 0,
            a = oi.length,
            s = dt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Zn || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 -
                    i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: dt.extend({}, t),
                opts: dt.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || H(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = dt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (z(d, c.opts.specialEasing); a > r; r++)
            if (i = oi[r].call(c, e, d, c.opts)) return i;
        return dt.map(d, O, c), dt.isFunction(c.opts.start) && c.opts.start.call(e, c), dt.fx.timer(dt.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function z(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = dt.camelCase(n), o = t[i], r = e[n], dt.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] =
                r, delete e[n]), a = dt.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function F(e, t, n) {
        var i, o, r, a, s, l, c = this,
            d = {},
            u = e.style,
            p = e.nodeType && _(e),
            h = dt._data(e, "fxshow");
        n.queue || (s = dt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire =
            function () {
                s.unqueued || l()
            }), s.unqueued++, c.always(function () {
            c.always(function () {
                s.unqueued--, dt.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [u.overflow, u.overflowX, u.overflowY],
        "inline" === dt.css(e, "display") && "none" === dt.css(e, "float") && (dt.support.inlineBlockNeedsLayout &&
        "inline" !== S(e.nodeName) ? u.zoom = 1 : u.display = "inline-block")), n.overflow && (u.overflow =
            "hidden", dt.support.shrinkWrapBlocks || c.always(function () {
            u.overflow = n.overflow[0], u.overflowX = n.overflow[1], u.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], ti.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) continue;
                d[i] = h && h[i] || dt.style(e, i)
            } if (!dt.isEmptyObject(d)) {
            h ? "hidden" in h && (p = h.hidden) : h = dt._data(e, "fxshow", {}), r && (h.hidden = !p), p ? dt(e).show() :
                c.done(function () {
                    dt(e).hide()
                }), c.done(function () {
                var t;
                dt._removeData(e, "fxshow");
                for (t in d) dt.style(e, t, d[t])
            });
            for (i in d) a = O(p ? h[i] : 0, i, c), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" ===
            i || "height" === i ? 1 : 0))
        }
    }

    function R(e, t, n, i, o) {
        return new R.prototype.init(e, t, n, i, o)
    }

    function q(e, t) {
        var n, i = {
                height: e
            },
            o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Cn[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function W(e) {
        return dt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U, J, G = typeof t,
        Q = e.location,
        X = e.document,
        K = X.documentElement,
        Y = e.jQuery,
        Z = e.$,
        et = {},
        tt = [],
        nt = "1.10.2",
        it = tt.concat,
        ot = tt.push,
        rt = tt.slice,
        at = tt.indexOf,
        st = et.toString,
        lt = et.hasOwnProperty,
        ct = nt.trim,
        dt = function (e, t) {
            return new dt.fn.init(e, t, J)
        },
        ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        pt = /\S+/g,
        ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        mt = /^[\],:{}\s]*$/,
        vt = /(?:^|:|,)(?:\s*\[)+/g,
        yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xt = /^-ms-/,
        $t = /-([\da-z])/gi,
        wt = function (e, t) {
            return t.toUpperCase()
        },
        _t = function (e) {
            (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (Ct(), dt.ready())
        },
        Ct = function () {
            X.addEventListener ? (X.removeEventListener("DOMContentLoaded", _t, !1), e.removeEventListener("load", _t,
                !1)) : (X.detachEvent("onreadystatechange", _t), e.detachEvent("onload", _t))
        };
    dt.fn = dt.prototype = {
        jquery: nt,
        constructor: dt,
        init: function (e, n, i) {
            var o, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] :
                    ft.exec(e), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n)
                    .find(e);
                if (o[1]) {
                    if (n = n instanceof dt ? n[0] : n, dt.merge(this, dt.parseHTML(o[1], n && n.nodeType ? n.ownerDocument ||
                        n : X, !0)), gt.test(o[1]) && dt.isPlainObject(n))
                        for (o in n) dt.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if (r = X.getElementById(o[2]), r && r.parentNode) {
                    if (r.id !== o[2]) return i.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = X, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : dt.isFunction(e) ? i.ready(
                e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), dt.makeArray(
                e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return rt.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = dt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return dt.each(this, e, t)
        },
        ready: function (e) {
            return dt.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(dt.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: ot,
        sort: [].sort,
        splice: [].splice
    }, dt.fn.init.prototype = dt.fn, dt.extend = dt.fn.extend = function () {
        var e, n, i, o, r, a, s = arguments[0] || {},
            l = 1,
            c = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[1] || {}, l = 2), "object" == typeof s || dt.isFunction(
            s) || (s = {}), c === l && (s = this, --l); c > l; l++)
            if (null != (r = arguments[l]))
                for (o in r) e = s[o], i = r[o], s !== i && (d && i && (dt.isPlainObject(i) || (n = dt.isArray(i))) ?
                    (n ? (n = !1, a = e && dt.isArray(e) ? e : []) : a = e && dt.isPlainObject(e) ? e : {}, s[o] =
                        dt.extend(d, a, i)) : i !== t && (s[o] = i));
        return s
    }, dt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === dt && (e.$ = Z), t && e.jQuery === dt && (e.jQuery = Y), dt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? dt.readyWait++ : dt.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--dt.readyWait : !dt.isReady) {
                if (!X.body) return setTimeout(dt.ready);
                dt.isReady = !0, e !== !0 && --dt.readyWait > 0 || (U.resolveWith(X, [dt]), dt.fn.trigger &&
                dt(X).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === dt.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === dt.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] ||
                "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || "object" !== dt.type(e) || e.nodeType || dt.isWindow(e)) return !1;
            try {
                if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype,
                    "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (dt.support.ownLast)
                for (n in e) return lt.call(e, n);
            for (n in e);
            return n === t || lt.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || X;
            var i = gt.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = dt.buildFragment([e], t, o), o && dt(o).remove(), dt.merge(
                [], i.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n =
                dt.trim(n), n && mt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ?
                Function("return " + n)() : (dt.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var i, o;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject(
                    "Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (r) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || dt.error(
                "Invalid XML: " + n), i
        },
        noop: function () {},
        globalEval: function (t) {
            t && dt.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(xt, "ms-").replace($t, wt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (s)
                for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break;
            return e
        },
        trim: ct && !ct.call("﻿ ") ? function (e) {
            return null == e ? "" : ct.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ht, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? dt.merge(i, "string" == typeof e ? [e] : e) : ot.call(i, e)),
                i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (at) return at.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var i = n.length,
                o = e.length,
                r = 0;
            if ("number" == typeof i)
                for (; i > r; r++) e[o++] = n[r];
            else
                for (; n[r] !== t;) e[o++] = n[r++];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            var i, o = [],
                r = 0,
                a = e.length;
            for (n = !!n; a > r; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
            return o
        },
        map: function (e, t, i) {
            var o, r = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > r; r++) o = t(e[r], r, i), null != o && (l[l.length] = o);
            else
                for (r in e) o = t(e[r], r, i), null != o && (l[l.length] = o);
            return it.apply([], l)
        },
        guid: 1,
        proxy: function (e, n) {
            var i, o, r;
            return "string" == typeof n && (r = e[n], n = e, e = r), dt.isFunction(e) ? (i = rt.call(
                arguments, 2), o = function () {
                return e.apply(n || this, i.concat(rt.call(arguments)))
            }, o.guid = e.guid = e.guid || dt.guid++, o) : t
        },
        access: function (e, n, i, o, r, a, s) {
            var l = 0,
                c = e.length,
                d = null == i;
            if ("object" === dt.type(i)) {
                r = !0;
                for (l in i) dt.access(e, n, l, i[l], !0, a, s)
            } else if (o !== t && (r = !0, dt.isFunction(o) || (s = !0), d && (s ? (n.call(e, o), n = null) :
                (d = n, n = function (e, t, n) {
                    return d.call(dt(e), n)
                })), n))
                for (; c > l; l++) n(e[l], i, s ? o : o.call(e[l], l, n(e[l], i)));
            return r ? e : d ? n.call(e) : c ? n(e[0], i) : a
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        }
    }), dt.ready.promise = function (t) {
        if (!U)
            if (U = dt.Deferred(), "complete" === X.readyState) setTimeout(dt.ready);
            else if (X.addEventListener) X.addEventListener("DOMContentLoaded", _t, !1), e.addEventListener("load",
                _t, !1);
            else {
                X.attachEvent("onreadystatechange", _t), e.attachEvent("onload", _t);
                var n = !1;
                try {
                    n = null == e.frameElement && X.documentElement
                } catch (i) {}
                n && n.doScroll && function o() {
                    if (!dt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        Ct(), dt.ready()
                    }
                }()
            }
        return U.promise(t)
    }, dt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }), J = dt(X),
        function (e, t) {
            function n(e, t, n, i) {
                var o, r, a, s, l, c, d, u, f, g;
                if ((t ? t.ownerDocument || t : V) !== I && M(t), t = t || I, n = n || [], !e || "string" != typeof e)
                    return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (D && !i) {
                    if (o = bt.exec(e))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && H(t, r) && r.id ===
                                a) return n.push(r), n
                        } else {
                            if (o[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && _.getElementsByClassName && t.getElementsByClassName) return et.apply(n,
                                t.getElementsByClassName(a)), n
                        } if (_.qsa && (!L || !L.test(e))) {
                        if (u = d = O, f = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = p(e), (d = t.getAttribute("id")) ? u = d.replace(wt, "\\$&") : t.setAttribute("id",
                                u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + h(c[l]);
                            f = ht.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try {
                            return et.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return $(e.replace(ct, "$1"), t, n, i)
            }

            function i() {
                function e(n, i) {
                    return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = i
                }
                var t = [];
                return e
            }

            function o(e) {
                return e[O] = !0, e
            }

            function r(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function a(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function d(e) {
                return o(function (t) {
                    return t = +t, o(function (n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !
                            (i[o] = n[o]))
                    })
                })
            }

            function u() {}

            function p(e, t) {
                var i, o, r, a, s, l, c, d = q[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (s = e, l = [], c = k.preFilter; s;) {
                    (!i || (o = ut.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = pt
                        .exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ct, " ")
                    }), s = s.slice(i.length));
                    for (a in k.filter) !(o = vt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return t ? s.length : s ? n.error(e) : q(e, l).slice(0)
            }

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = F++;
                return t.first ? function (t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function (t, n, a) {
                    var s, l, c, d = z + " " + r;
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o)
                                if (c = t[O] || (t[O] = {}), (l = c[i]) && l[0] === d) {
                                    if ((s = l[1]) === !0 || s === C) return s === !0
                                } else if (l = c[i] = [d], l[1] = e(t, n, a) || C, l[1] === !0) return !0
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) &&
                (a.push(r), c && t.push(s));
                return a
            }

            function v(e, t, n, i, r, a) {
                return i && !i[O] && (i = v(i)), r && !r[O] && (r = v(r, a)), o(function (o, a, s, l) {
                    var c, d, u, p = [],
                        h = [],
                        f = a.length,
                        g = o || x(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !o && t ? g : m(g, p, e, s, l),
                        y = n ? r || (o ? e : f || i) ? [] : a : v;
                    if (n && n(v, y, s, l), i)
                        for (c = m(y, h), i(c, [], s, l), d = c.length; d--;)(u = c[d]) && (y[h[d]] = !(v[h[d]] =
                            u));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (c = [], d = y.length; d--;)(u = y[d]) && c.push(v[d] = u);
                                r(null, y = [], c, l)
                            }
                            for (d = y.length; d--;)(u = y[d]) && (c = r ? nt.call(o, u) : p[d]) > -1 && (o[c] = !
                                (a[c] = u))
                        }
                    } else y = m(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : et.apply(a, y)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, r = k.relative[e[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l =
                    f(function (e) {
                        return e === t
                    }, a, !0), c = f(function (e) {
                    return nt.call(t, e) > -1
                }, a, !0), d = [function (e, n, i) {
                    return !r && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; o > s; s++)
                    if (n = k.relative[e[s].type]) d = [f(g(d), n)];
                    else {
                        if (n = k.filter[e[s].type].apply(null, e[s].matches), n[O]) {
                            for (i = ++s; o > i && !k.relative[e[i].type]; i++);
                            return v(s > 1 && g(d), s > 1 && h(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ct, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o >
                                i && h(e))
                        }
                        d.push(n)
                    } return g(d)
            }

            function b(e, t) {
                var i = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function (o, s, l, c, d) {
                        var u, p, h, f = [],
                            g = 0,
                            v = "0",
                            y = o && [],
                            b = null != d,
                            x = j,
                            $ = o || a && k.find.TAG("*", d && s.parentNode || s),
                            w = z += null == x ? 1 : Math.random() || .1;
                        for (b && (j = s !== I && s, C = i); null != (u = $[v]); v++) {
                            if (a && u) {
                                for (p = 0; h = e[p++];)
                                    if (h(u, s, l)) {
                                        c.push(u);
                                        break
                                    } b && (z = w, C = ++i)
                            }
                            r && ((u = !h && u) && g--, o && y.push(u))
                        }
                        if (g += v, r && v !== g) {
                            for (p = 0; h = t[p++];) h(y, f, s, l);
                            if (o) {
                                if (g > 0)
                                    for (; v--;) y[v] || f[v] || (f[v] = Y.call(c));
                                f = m(f)
                            }
                            et.apply(c, f), b && !o && f.length > 0 && g + t.length > 1 && n.uniqueSort(c)
                        }
                        return b && (z = w, j = x), y
                    };
                return r ? o(s) : s
            }

            function x(e, t, i) {
                for (var o = 0, r = t.length; r > o; o++) n(e, t[o], i);
                return i
            }

            function $(e, t, n, i) {
                var o, r, a, s, l, c = p(e);
                if (!i && 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && _.getById && 9 === t.nodeType &&
                    D && k.relative[r[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(_t, Ct), t) || [])[0], !t) return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = vt.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (i = l(a.matches[0].replace(_t, Ct), ht.test(r[0].type) && t.parentNode ||
                            t))) {
                            if (r.splice(o, 1), e = i.length && h(r), !e) return et.apply(n, i), n;
                            break
                        }
                }
                return S(e, c)(i, t, !D, n, ht.test(e)), n
            }
            var w, _, C, k, E, T, S, j, A, M, I, N, D, L, B, P, H, O = "sizzle" + -new Date,
                V = e.document,
                z = 0,
                F = 0,
                R = i(),
                q = i(),
                W = i(),
                U = !1,
                J = function (e, t) {
                    return e === t ? (U = !0, 0) : 0
                },
                G = typeof t,
                Q = 1 << 31,
                X = {}.hasOwnProperty,
                K = [],
                Y = K.pop,
                Z = K.push,
                et = K.push,
                tt = K.slice,
                nt = K.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                it =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ot = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = rt.replace("w", "w#"),
                st = "\\[" + ot + "*(" + rt + ")" + ot + "*(?:([*^$|!~]?=)" + ot +
                    "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + ot + "*\\]",
                lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) +
                    ")*)|.*)\\)|)",
                ct = RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
                ut = RegExp("^" + ot + "*," + ot + "*"),
                pt = RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
                ht = RegExp(ot + "*[+~]"),
                ft = RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
                gt = RegExp(lt),
                mt = RegExp("^" + at + "$"),
                vt = {
                    ID: RegExp("^#(" + rt + ")"),
                    CLASS: RegExp("^\\.(" + rt + ")"),
                    TAG: RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + st),
                    PSEUDO: RegExp("^" + lt),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)",
                        "i"),
                    bool: RegExp("^(?:" + it + ")$", "i"),
                    needsContext: RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot +
                        "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
                },
                yt = /^[^{]+\{\s*\[native \w/,
                bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xt = /^(?:input|select|textarea|button)$/i,
                $t = /^h\d$/i,
                wt = /'|\\/g,
                _t = RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
                Ct = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >>
                        10, 56320 | 1023 & i)
                };
            try {
                et.apply(K = tt.call(V.childNodes), V.childNodes), K[V.childNodes.length].nodeType
            } catch (kt) {
                et = {
                    apply: K.length ? function (e, t) {
                        Z.apply(e, tt.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            T = n.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, _ = n.support = {}, M = n.setDocument = function (e) {
                var n = e ? e.ownerDocument || e : V,
                    i = n.defaultView;
                return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, N = n.documentElement, D = !T(n),
                i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                    M()
                }), _.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = r(function (e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = r(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className =
                        "i", 2 === e.getElementsByClassName("i").length
                }), _.getById = r(function (e) {
                    return N.appendChild(e).id = O, !n.getElementsByName || !n.getElementsByName(O).length
                }), _.getById ? (k.find.ID = function (e, t) {
                    if (typeof t.getElementById !== G && D) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function (e) {
                    var t = e.replace(_t, Ct);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function (e) {
                    var t = e.replace(_t, Ct);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), k.find.TAG = _.getElementsByTagName ? function (e, n) {
                    return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(e) : t
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.CLASS = _.getElementsByClassName && function (e, n) {
                    return typeof n.getElementsByClassName !== G && D ? n.getElementsByClassName(e) : t
                }, B = [], L = [], (_.qsa = yt.test(n.querySelectorAll)) && (r(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll(
                        "[selected]").length || L.push("\\[" + ot + "*(?:value|" + it + ")"), e
                        .querySelectorAll(":checked").length || L.push(":checked")
                }), r(function (e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll(
                        "[t^='']").length && L.push("[*^$]=" + ot + "*(?:''|\"\")"), e.querySelectorAll(
                        ":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll(
                        "*,:x"), L.push(",.*:")
                })), (_.matchesSelector = yt.test(P = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector ||
                    N.msMatchesSelector)) && r(function (e) {
                    _.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), B.push("!=", lt)
                }), L = L.length && RegExp(L.join("|")), B = B.length && RegExp(B.join("|")), H = yt.test(N
                    .contains) || N.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition &&
                        16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, J = N.compareDocumentPosition ? function (e, t) {
                    if (e === t) return U = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(
                        t);
                    return i ? 1 & i || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === n ||
                    H(V, e) ? -1 : t === n || H(V, t) ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0 : 4 &
                    i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var i, o = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return U = !0, 0;
                    if (!r || !a) return e === n ? -1 : t === n ? 1 : r ? -1 : a ? 1 : A ? nt.call(A, e) -
                        nt.call(A, t) : 0;
                    if (r === a) return s(e, t);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (i = t; i = i.parentNode;) c.unshift(i);
                    for (; l[o] === c[o];) o++;
                    return o ? s(l[o], c[o]) : l[o] === V ? -1 : c[o] === V ? 1 : 0
                }, n) : I
            }, n.matches = function (e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== I && M(e), t = t.replace(ft, "='$1']"), !(!_.matchesSelector || !D ||
                    B && B.test(t) || L && L.test(t))) try {
                    var i = P.call(e, t);
                    if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (o) {}
                return n(t, I, null, [e]).length > 0
            }, n.contains = function (e, t) {
                return (e.ownerDocument || e) !== I && M(e), H(e, t)
            }, n.attr = function (e, n) {
                (e.ownerDocument || e) !== I && M(e);
                var i = k.attrHandle[n.toLowerCase()],
                    o = i && X.call(k.attrHandle, n.toLowerCase()) ? i(e, n, !D) : t;
                return o === t ? _.attributes || !D ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ?
                    o.value : null : o
            }, n.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (U = !_.detectDuplicates, A = !_.sortStable && e.slice(0), e.sort(J), U) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return e
            }, E = n.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i]; i++) n += E(t);
                return n
            }, k = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(_t, Ct), e[3] = (e[4] || e[5] || "").replace(_t, Ct), "~=" ===
                        e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var n, i = !e[5] && e[2];
                        return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && gt.test(i) &&
                            (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0]
                                .slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(_t, Ct).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = R[e + " "];
                        return t || (t = RegExp("(^|" + ot + ")" + e + "(" + ot + "|$)")) && R(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !==
                                G && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, i) {
                        return function (o) {
                            var r = n.attr(o, e);
                            return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === i : "!=" === t ?
                                r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(
                                    i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ?
                                    (" " + r + " ").indexOf(i) > -1 : "|=" === t ? r === i || r.slice(0, i.length +
                                        1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, d, u, p, h, f, g = r !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (u = t; u = u[g];)
                                            if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                                                return !1;
                                        f = g = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (d = m[O] || (m[O] = {}), c = d[e] || [], h = c[0] === z && c[1], p =
                                        c[0] === z && c[2], u = h && m.childNodes[h]; u = ++h && u && u[g] ||
                                        (p = h = 0) || f.pop();)
                                        if (1 === u.nodeType && ++p && u === t) {
                                            d[e] = [z, h, p];
                                            break
                                        }
                                } else if (y && (c = (t[O] || (t[O] = {}))[e]) && c[0] === z) p = c[1];
                                else
                                    for (;
                                        (u = ++h && u && u[g] || (p = h = 0) || f.pop()) && ((s ? u.nodeName
                                            .toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && (
                                            (u[O] || (u[O] = {}))[e] = [z, p]), u !== t)););
                                return p -= o, p === i || 0 === p % i && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var i, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error(
                            "unsupported pseudo: " + e);
                        return r[O] ? r(t) : r.length > 1 ? (i = [e, e, "", t], k.setFilters.hasOwnProperty(e.toLowerCase()) ?
                            o(function (e, n) {
                                for (var i, o = r(e, t), a = o.length; a--;) i = nt.call(e, o[a]), e[i] = !
                                    (n[i] = o[a])
                            }) : function (e) {
                                return r(e, 0, i)
                            }) : r
                    }
                },
                pseudos: {
                    not: o(function (e) {
                        var t = [],
                            n = [],
                            i = S(e.replace(ct, "$1"));
                        return i[O] ? o(function (e, t, n, o) {
                            for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[
                                s] = !(t[s] = r))
                        }) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), !n.pop()
                        }
                    }),
                    has: o(function (e) {
                        return function (t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: o(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                    }),
                    lang: o(function (e) {
                        return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(_t, Ct)
                            .toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute(
                                        "lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(
                                        e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === N
                    },
                    focus: function (e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href ||
                            ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function (e) {
                        return $t.test(e.nodeName)
                    },
                    input: function (e) {
                        return xt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute(
                            "type")) || t.toLowerCase() === e.type)
                    },
                    first: d(function () {
                        return [0]
                    }),
                    last: d(function (e, t) {
                        return [t - 1]
                    }),
                    eq: d(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: d(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: d(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: d(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: d(function (e, t, n) {
                        for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[w] = l(w);
            for (w in {
                submit: !0,
                reset: !0
            }) k.pseudos[w] = c(w);
            u.prototype = k.filters = k.pseudos, k.setFilters = new u, S = n.compile = function (e, t) {
                var n, i = [],
                    o = [],
                    r = W[e + " "];
                if (!r) {
                    for (t || (t = p(e)), n = t.length; n--;) r = y(t[n]), r[O] ? i.push(r) : o.push(r);
                    r = W(e, b(o, i))
                }
                return r
            }, _.sortStable = O.split("").sort(J).join("") === O, _.detectDuplicates = U, M(), _.sortDetached = r(
                function (e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"))
                }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function (e, n, i) {
                return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), _.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute(
                    "value")
            }) || a("value", function (e, n, i) {
                return i || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || a(it, function (e, n, i) {
                var o;
                return i ? t : (o = e.getAttributeNode(n)) && o.specified ? o.value : e[n] === !0 ? n.toLowerCase() :
                    null
            }), dt.find = n, dt.expr = n.selectors, dt.expr[":"] = dt.expr.pseudos, dt.unique = n.uniqueSort, dt.text =
                n.getText, dt.isXMLDoc = n.isXML, dt.contains = n.contains
        }(e);
    var kt = {};
    dt.Callbacks = function (e) {
        e = "string" == typeof e ? kt[e] || i(e) : dt.extend({}, e);
        var n, o, r, a, s, l, c = [],
            d = !e.once && [],
            u = function (t) {
                for (o = e.memory && t, r = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                    if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        o = !1;
                        break
                    } n = !1, c && (d ? d.length && u(d.shift()) : o ? c = [] : p.disable())
            },
            p = {
                add: function () {
                    if (c) {
                        var t = c.length;
                        ! function i(t) {
                            dt.each(t, function (t, n) {
                                var o = dt.type(n);
                                "function" === o ? e.unique && p.has(n) || c.push(n) : n && n.length &&
                                    "string" !== o && i(n)
                            })
                        }(arguments), n ? a = c.length : o && (l = t, u(o))
                    }
                    return this
                },
                remove: function () {
                    return c && dt.each(arguments, function (e, t) {
                        for (var i;
                             (i = dt.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (a >= i && a--, s >=
                        i && s--)
                    }), this
                },
                has: function (e) {
                    return e ? dt.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], a = 0, this
                },
                disable: function () {
                    return c = d = o = t, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return d = t, o || p.disable(), this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (e, t) {
                    return !c || r && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? d.push(t) : u(t)),
                        this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return p
    }, dt.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", dt.Callbacks("once memory"), "resolved"], ["reject", "fail", dt.Callbacks(
                "once memory"), "rejected"], ["notify", "progress", dt.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return dt.Deferred(function (n) {
                            dt.each(t, function (t, r) {
                                var a = r[0],
                                    s = dt.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && dt.isFunction(e.promise) ? e.promise()
                                        .done(n.resolve).fail(n.reject).progress(
                                            n.notify) : n[a + "With"](this ===
                                    i ? n.promise() : this, s ? [e] :
                                        arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? dt.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, dt.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                r = rt.call(arguments),
                a = r.length,
                s = 1 !== a || e && dt.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : dt.Deferred(),
                c = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? rt.call(arguments) : o, i === t ? l.notifyWith(
                            n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), i = Array(a); a > o; o++) r[o] && dt.isFunction(r[o].promise) ?
                    r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    }), dt.support = function (t) {
        var n, i, o, r, a, s, l, c, d, u = X.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = u.getElementsByTagName("*") ||
            [], i = u.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
        r = X.createElement("select"), s = r.appendChild(X.createElement("option")), o = u.getElementsByTagName(
            "input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== u.className,
            t.leadingWhitespace = 3 === u.firstChild.nodeType, t.tbody = !u.getElementsByTagName("tbody").length, t
            .htmlSerialize = !!u.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")),
            t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !
            !i.style.cssFloat, t.checkOn = !!o.value, t.optSelected = s.selected, t.enctype = !!X.createElement(
            "form").enctype, t.html5Clone = "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML,
            t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !
            0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(
            !0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete u.test
        } catch (p) {
            t.deleteExpando = !1
        }
        o = X.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value =
            "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o
            .setAttribute("name", "t"), a = X.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked,
            t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent(
            "onclick",
            function () {
                t.noCloneEvent = !1
            }), u.cloneNode(!0).click());
        for (d in {
            submit: !0,
            change: !0,
            focusin: !0
        }) u.setAttribute(l = "on" + d, "t"), t[d + "Bubbles"] = l in e || u.attributes[l].expando === !1;
        u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle =
            "content-box" === u.style.backgroundClip;
        for (d in dt(t)) break;
        return t.ownLast = "0" !== d, dt(function () {
            var n, i, o, r =
                    "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = X.getElementsByTagName("body")[0];
            a && (n = X.createElement("div"), n.style.cssText =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(
                n).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o =
                u.getElementsByTagName("td"), o[0].style.cssText =
                "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display =
                "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight,
                u.innerHTML = "", u.style.cssText =
                "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                dt.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function () {
                    t.boxSizing = 4 === u.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(u, null) || {})
                .top, t.boxSizingReliable = "4px" === (e.getComputedStyle(u, null) || {
                width: "4px"
            }).width, i = u.appendChild(X.createElement("div")), i.style.cssText = u.style.cssText =
                r, i.style.marginRight = i.style.width = "0", u.style.width = "1px", t.reliableMarginRight = !
                parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof u.style.zoom !==
            G && (u.innerHTML = "", u.style.cssText = r +
                "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === u.offsetWidth,
                u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width =
                "5px", t.shrinkWrapBlocks = 3 !== u.offsetWidth, t.inlineBlockNeedsLayout && (a.style
                .zoom = 1)), a.removeChild(n), n = u = o = i = null)
        }), n = r = a = s = i = o = null, t
    }({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Tt = /([A-Z])/g;
    dt.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? dt.cache[e[dt.expando]] : e[dt.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return o(e, t, n)
        },
        removeData: function (e, t) {
            return r(e, t)
        },
        _data: function (e, t, n) {
            return o(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return r(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && dt.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), dt.fn.extend({
        data: function (e, n) {
            var i, o, r = null,
                s = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (r = dt.data(l), 1 === l.nodeType && !dt._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; i.length > s; s++) o = i[s].name, 0 === o.indexOf("data-") && (o =
                        dt.camelCase(o.slice(5)), a(l, o, r[o]));
                    dt._data(l, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                dt.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                dt.data(this, e, n)
            }) : l ? a(l, e, dt.data(l, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                dt.removeData(this, e)
            })
        }
    }), dt.extend({
        queue: function (e, n, i) {
            var o;
            return e ? (n = (n || "fx") + "queue", o = dt._data(e, n), i && (!o || dt.isArray(i) ? o = dt._data(
                e, n, dt.makeArray(i)) : o.push(i)), o || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = dt.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = dt._queueHooks(e, t),
                a = function () {
                    dt.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r
                .stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return dt._data(e, n) || dt._data(e, n, {
                empty: dt.Callbacks("once memory").add(function () {
                    dt._removeData(e, t + "queue"), dt._removeData(e, n)
                })
            })
        }
    }), dt.fn.extend({
        queue: function (e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? dt.queue(this[0],
                e) : n === t ? this : this.each(function () {
                var t = dt.queue(this, e, n);
                dt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && dt.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                dt.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var i, o = 1,
                r = dt.Deferred(),
                a = this,
                s = this.length,
                l = function () {
                    --o || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = dt._data(a[s], e +
                "queueHooks"), i && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var St, jt, At = /[\t\r\n\f]/g,
        Mt = /\r/g,
        It = /^(?:input|select|textarea|button|object)$/i,
        Nt = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected)$/i,
        Lt = dt.support.getSetAttribute,
        Bt = dt.support.input;
    dt.fn.extend({
        attr: function (e, t) {
            return dt.access(this, dt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                dt.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return dt.access(this, dt.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = dt.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, i, o, r, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (dt.isFunction(e)) return this.each(function (t) {
                dt(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(
                        At, " ") : " ")) {
                        for (r = 0; o = t[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        n.className = dt.trim(i)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (dt.isFunction(e)) return this.each(function (t) {
                dt(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(pt) || []; s > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(
                        At, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = e ? dt.trim(i) : ""
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) :
                dt.isFunction(e) ? this.each(function (n) {
                    dt(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)
                        for (var t, i = 0, o = dt(this), r = e.match(pt) || []; t = r[i++];) o.hasClass(
                            t) ? o.removeClass(t) : o.addClass(t);
                    else(n === G || "boolean" === n) && (this.className && dt._data(this,
                        "__className__", this.className), this.className = this.className || e ===
                    !1 ? "" : dt._data(this, "__className__") || "")
                })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >=
                    0) return !0;
            return !1
        },
        val: function (e) {
            var n, i, o, r = this[0];
            return arguments.length ? (o = dt.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = o ? e.call(this, n, dt(this).val()) : e, null == r ?
                    r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(
                        r,
                        function (e) {
                            return null == e ? "" : e + ""
                        })), i = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()],
                i && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
            })) : r ? (i = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], i && "get" in
            i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(
                Mt, "") : null == n ? "" : n)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = dt.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o,
                             a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (dt.support.optDisabled ? n.disabled :
                            null !== n.getAttribute("disabled")) || n.parentNode.disabled && dt.nodeName(
                            n.parentNode, "optgroup"))) {
                            if (t = dt(n).val(), r) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = dt.makeArray(t), a = o.length; a--;) i = o[a], (i.selected =
                        dt.inArray(dt(i).val(), r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        },
        attr: function (e, n, i) {
            var o, r, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === G ? dt.prop(e, n, i) : (1 ===
                a && dt.isXMLDoc(e) || (n = n.toLowerCase(), o = dt.attrHooks[n] || (dt.expr.match.bool
                    .test(n) ? jt : St)), i === t ? o && "get" in o && null !== (r = o.get(e, n)) ? r :
                (r = dt.find.attr(e, n), null == r ? t : r) : null !== i ? o && "set" in o && (r = o.set(
                e, i, n)) !== t ? r : (e.setAttribute(n, i + ""), i) : (dt.removeAttr(e, n), t)) :
                void 0
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(pt);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = dt.propFix[n] || n, dt.expr.match.bool.test(n) ? Bt && Lt || !Dt.test(
                    n) ? e[i] = !1 : e[dt.camelCase("default-" + n)] = e[i] = !1 : dt.attr(e, n, ""), e
                    .removeAttribute(Lt ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!dt.support.radioValue && "radio" === t && dt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, i) {
            var o, r, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !dt.isXMLDoc(e), a && (n = dt.propFix[
                n] || n, r = dt.propHooks[n]), i !== t ? r && "set" in r && (o = r.set(e, i, n)) !==
            t ? o : e[n] = i : r && "get" in r && null !== (o = r.get(e, n)) ? o : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = dt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : It.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 :
                        -1
                }
            }
        }
    }), jt = {
        set: function (e, t, n) {
            return t === !1 ? dt.removeAttr(e, n) : Bt && Lt || !Dt.test(n) ? e.setAttribute(!Lt && dt.propFix[
                n] || n, n) : e[dt.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var i = dt.expr.attrHandle[n] || dt.find.attr;
        dt.expr.attrHandle[n] = Bt && Lt || !Dt.test(n) ? function (e, n, o) {
            var r = dt.expr.attrHandle[n],
                a = o ? t : (dt.expr.attrHandle[n] = t) != i(e, n, o) ? n.toLowerCase() : null;
            return dt.expr.attrHandle[n] = r, a
        } : function (e, n, i) {
            return i ? t : e[dt.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Bt && Lt || (dt.attrHooks.value = {
        set: function (e, n, i) {
            return dt.nodeName(e, "input") ? (e.defaultValue = n, t) : St && St.set(e, n, i)
        }
    }), Lt || (St = {
        set: function (e, n, i) {
            var o = e.getAttributeNode(i);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)), o.value = n += "",
                "value" === i || n === e.getAttribute(i) ? n : t
        }
    }, dt.expr.attrHandle.id = dt.expr.attrHandle.name = dt.expr.attrHandle.coords = function (e, n, i) {
        var o;
        return i ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
    }, dt.valHooks.button = {
        get: function (e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        },
        set: St.set
    }, dt.attrHooks.contenteditable = {
        set: function (e, t, n) {
            St.set(e, "" === t ? !1 : t, n)
        }
    }, dt.each(["width", "height"], function (e, n) {
        dt.attrHooks[n] = {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(n, "auto"), i) : t
            }
        }
    })), dt.support.hrefNormalized || dt.each(["href", "src"], function (e, t) {
        dt.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), dt.support.style || (dt.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), dt.support.optSelected || (dt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap",
        "frameBorder", "contentEditable"], function () {
        dt.propFix[this.toLowerCase()] = this
    }), dt.support.enctype || (dt.propFix.enctype = "encoding"), dt.each(["radio", "checkbox"], function () {
        dt.valHooks[this] = {
            set: function (e, n) {
                return dt.isArray(n) ? e.checked = dt.inArray(dt(e).val(), n) >= 0 : t
            }
        }, dt.support.checkOn || (dt.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Pt = /^(?:input|select|textarea)$/i,
        Ht = /^key/,
        Ot = /^(?:mouse|contextmenu)|click/,
        Vt = /^(?:focusinfocus|focusoutblur)$/,
        zt = /^([^.]*)(?:\.(.+)|)$/;
    dt.event = {
        global: {},
        add: function (e, n, i, o, r) {
            var a, s, l, c, d, u, p, h, f, g, m, v = dt._data(e);
            if (v) {
                for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = dt.guid++), (s =
                    v.events) || (s = v.events = {}), (u = v.handle) || (u = v.handle = function (e) {
                    return typeof dt === G || e && dt.event.triggered === e.type ? t : dt.event.dispatch
                        .apply(u.elem, arguments)
                }, u.elem = e), n = (n || "").match(pt) || [""], l = n.length; l--;) a = zt.exec(n[l]) || [],
                    f = m = a[1], g = (a[2] || "").split(".").sort(), f && (d = dt.event.special[f] || {}, f =
                    (r ? d.delegateType : d.bindType) || f, d = dt.event.special[f] || {}, p = dt.extend({
                    type: f,
                    origType: m,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && dt.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, c), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, d.setup && d.setup.call(e, o,
                    g, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent &&
                    e.attachEvent("on" + f, u))), d.add && (d.add.call(e, p), p.handler.guid || (p.handler
                    .guid = i.guid)), r ? h.splice(h.delegateCount++, 0, p) : h.push(p), dt.event.global[
                    f] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, o) {
            var r, a, s, l, c, d, u, p, h, f, g, m = dt.hasData(e) && dt._data(e);
            if (m && (d = m.events)) {
                for (t = (t || "").match(pt) || [""], c = t.length; c--;)
                    if (s = zt.exec(t[c]) || [], h = g = s[1], f = (s[2] || "").split(".").sort(), h) {
                        for (u = dt.event.special[h] || {}, h = (i ? u.delegateType : u.bindType) || h, p = d[h] ||
                            [], s = s[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;
                        ) a = p[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) ||
                        i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector &&
                        p.delegateCount--, u.remove && u.remove.call(e, a));
                        l && !p.length && (u.teardown && u.teardown.call(e, f, m.handle) !== !1 || dt.removeEvent(
                            e, h, m.handle), delete d[h])
                    } else
                        for (h in d) dt.event.remove(e, h + t[c], n, i, !0);
                dt.isEmptyObject(d) && (delete m.handle, dt._removeData(e, "events"))
            }
        },
        trigger: function (n, i, o, r) {
            var a, s, l, c, d, u, p, h = [o || X],
                f = lt.call(n, "type") ? n.type : n,
                g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = u = o = o || X, 3 !== o.nodeType && 8 !== o.nodeType && !Vt.test(f + dt.event.triggered) &&
            (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), s = 0 > f.indexOf(":") &&
                "on" + f, n = n[dt.expando] ? n : new dt.Event(f, "object" == typeof n && n), n.isTrigger =
                r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join(
                "\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i =
                null == i ? [n] : dt.makeArray(i, [n]), d = dt.event.special[f] || {}, r || !d.trigger || d
                .trigger.apply(o, i) !== !1)) {
                if (!r && !d.noBubble && !dt.isWindow(o)) {
                    for (c = d.delegateType || f, Vt.test(c + f) || (l = l.parentNode); l; l = l.parentNode) h.push(
                        l), u = l;
                    u === (o.ownerDocument || X) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (p = 0;
                     (l = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? c : d.bindType || f, a = (dt._data(
                    l, "events") || {})[n.type] && dt._data(l, "handle"), a && a.apply(l, i), a = s && l[s],
                a && dt.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                if (n.type = f, !r && !n.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), i) ===
                    !1) && dt.acceptData(o) && s && o[f] && !dt.isWindow(o)) {
                    u = o[s], u && (o[s] = null), dt.event.triggered = f;
                    try {
                        o[f]()
                    } catch (m) {}
                    dt.event.triggered = t, u && (o[s] = u)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = dt.event.fix(e);
            var n, i, o, r, a, s = [],
                l = rt.call(arguments),
                c = (dt._data(this, "events") || {})[e.type] || [],
                d = dt.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = dt.event.handlers.call(this, e, c), n = 0;
                     (r = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, a = 0;
                         (o = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re
                        .test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((dt.event.special[o.origType] ||
                        {}).handle || o.handler).apply(r.elem, l), i !== t && (e.result = i) === !1 &&
                    (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var i, o, r, a, s = [],
                l = n.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], a = 0; l > a; a++) o = n[a], i = o.selector + " ", r[i] === t && (r[i] = o
                            .needsContext ? dt(i, this).index(c) >= 0 : dt.find(i, this, null, [c]).length),
                        r[i] && r.push(o);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    } return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function (e) {
            if (e[dt.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Ot.test(o) ? this.mouseHooks : Ht.test(o) ? this.keyHooks : {}),
                     i = a.props ? this.props.concat(a.props) : this.props, e = new dt.Event(r), t = i.length; t--;)
                n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
            .split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                .split(" "),
            filter: function (e, n) {
                var i, o, r, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || X, r = o.documentElement,
                    i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r &&
                    r.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop ||
                    i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget &&
                s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which =
                    1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== d() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === d() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return dt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : t
                },
                _default: function (e) {
                    return dt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = dt.extend(new dt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? dt.event.trigger(o, null, t) : dt.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, dt.removeEvent = X.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === G && (e[i] = null), e.detachEvent(i, n))
    }, dt.Event = function (e, n) {
        return this instanceof dt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented =
            e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l :
                c) : this.type = e, n && dt.extend(this, n), this.timeStamp = e && e.timeStamp || dt.now(),
            this[dt.expando] = !0, t) : new dt.Event(e, n)
    }, dt.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        dt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !dt.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(
                    this, arguments), e.type = t), n
            }
        }
    }), dt.support.submitBubbles || (dt.event.special.submit = {
        setup: function () {
            return dt.nodeName(this, "form") ? !1 : (dt.event.add(this, "click._submit keypress._submit",
                function (e) {
                    var n = e.target,
                        i = dt.nodeName(n, "input") || dt.nodeName(n, "button") ? n.form : t;
                    i && !dt._data(i, "submitBubbles") && (dt.event.add(i, "submit._submit",
                        function (e) {
                            e._submit_bubble = !0
                        }), dt._data(i, "submitBubbles", !0))
                }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && dt.event.simulate(
                "submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return dt.nodeName(this, "form") ? !1 : (dt.event.remove(this, "._submit"), t)
        }
    }), dt.support.changeBubbles || (dt.event.special.change = {
        setup: function () {
            return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (dt.event
                .add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), dt.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), dt.event.simulate(
                    "change", this, e, !0)
            })), !1) : (dt.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Pt.test(t.nodeName) && !dt._data(t, "changeBubbles") && (dt.event.add(t,
                    "change._change",
                    function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || dt.event.simulate(
                            "change", this.parentNode, e, !0)
                    }), dt._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ?
                e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return dt.event.remove(this, "._change"), !Pt.test(this.nodeName)
        }
    }), dt.support.focusinBubbles || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            i = function (e) {
                dt.event.simulate(t, e.target, dt.event.fix(e), !0)
            };
        dt.event.special[t] = {
            setup: function () {
                0 === n++ && X.addEventListener(e, i, !0)
            },
            teardown: function () {
                0 === --n && X.removeEventListener(e, i, !0)
            }
        }
    }), dt.fn.extend({
        on: function (e, n, i, o, r) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (a in e) this.on(a, n, i, e[a], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i,
                i = t) : (o = i, i = n, n = t)), o === !1) o = c;
            else if (!o) return this;
            return 1 === r && (s = o, o = function (e) {
                return dt().off(e), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = dt.guid++)), this.each(function () {
                dt.event.add(this, e, o, i, n)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, n, i) {
            var o, r;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, dt(e.delegateTarget).off(o.namespace ?
                o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, n, e[r]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = c), this.each(
                function () {
                    dt.event.remove(this, e, i, n)
                })
        },
        trigger: function (e, t) {
            return this.each(function () {
                dt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var i = this[0];
            return i ? dt.event.trigger(e, n, i, !0) : t
        }
    });
    var Ft = /^.[^:#\[\.,]*$/,
        Rt = /^(?:parents|prev(?:Until|All))/,
        qt = dt.expr.match.needsContext,
        Wt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    dt.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(dt(e).filter(function () {
                for (t = 0; o > t; t++)
                    if (dt.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) dt.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? dt.unique(n) : n), n.selector = this.selector ? this.selector +
                " " + e : e, n
        },
        has: function (e) {
            var t, n = dt(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (dt.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(p(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(p(this, e || [], !1))
        },
        is: function (e) {
            return !!p(this, "string" == typeof e && qt.test(e) ? dt(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], a = qt.test(e) || "string" != typeof e ? dt(e, t ||
                this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(
                        n, e))) {
                        n = r.push(n);
                        break
                    } return this.pushStack(r.length > 1 ? dt.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? dt.inArray(this[0], dt(e)) : dt.inArray(e.jquery ? e[0] : e,
                this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? dt(e, t) : dt.makeArray(e && e.nodeType ? [e] : e),
                i = dt.merge(this.get(), n);
            return this.pushStack(dt.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), dt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return dt.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return dt.dir(e, "parentNode", n)
        },
        next: function (e) {
            return u(e, "nextSibling")
        },
        prev: function (e) {
            return u(e, "previousSibling")
        },
        nextAll: function (e) {
            return dt.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return dt.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return dt.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return dt.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return dt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return dt.sibling(e.firstChild)
        },
        contents: function (e) {
            return dt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : dt.merge([],
                e.childNodes)
        }
    }, function (e, t) {
        dt.fn[e] = function (n, i) {
            var o = dt.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = dt.filter(i, o)),
            this.length > 1 && (Wt[e] || (o = dt.unique(o)), Rt.test(e) && (o = o.reverse())), this.pushStack(
                o)
        }
    }), dt.extend({
        filter: function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? dt.find.matchesSelector(
                i, e) ? [i] : [] : dt.find.matches(e, dt.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, i) {
            for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !dt(r).is(i));)
                1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Jt = / jQuery\d+="(?:null|\d+)"/g,
        Gt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Qt = /^\s+/,
        Xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Kt = /<([\w:]+)/,
        Yt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        on = /^$|\/(?:java|ecma)script/i,
        rn = /^true\/(.*)/,
        an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sn = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: dt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ln = h(X),
        cn = ln.appendChild(X.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, dt.fn.extend({
        text: function (e) {
            return dt.access(this, function (e) {
                return e === t ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument ||
                    X).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? dt.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType ||
            dt.cleanData(x(n)), n.parentNode && (t && dt.contains(n.ownerDocument, n) && v(x(n,
                "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && dt.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && dt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return dt.clone(this, e, t)
            })
        },
        html: function (e) {
            return dt.access(this, function (e) {
                var n = this[0] || {},
                    i = 0,
                    o = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Jt, "") : t;
                if (!("string" != typeof e || en.test(e) || !dt.support.htmlSerialize && Gt.test(e) ||
                    !dt.support.leadingWhitespace && Qt.test(e) || sn[(Kt.exec(e) || ["", ""])[
                        1].toLowerCase()])) {
                    e = e.replace(Xt, "<$1></$2>");
                    try {
                        for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (dt.cleanData(x(n,
                            !1)), n.innerHTML = e);
                        n = 0
                    } catch (r) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = dt.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var i = e[t++],
                    o = e[t++];
                o && (i && i.parentNode !== o && (i = this.nextSibling), dt(this).remove(), o.insertBefore(
                    n, i))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = it.apply([], e);
            var i, o, r, a, s, l, c = 0,
                d = this.length,
                u = this,
                p = d - 1,
                h = e[0],
                f = dt.isFunction(h);
            if (f || !(1 >= d || "string" != typeof h || dt.support.checkClone) && nn.test(h)) return this.each(
                function (i) {
                    var o = u.eq(i);
                    f && (e[0] = h.call(this, i, o.html())), o.domManip(e, t, n)
                });
            if (d && (l = dt.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 ===
            l.childNodes.length && (l = i), i)) {
                for (a = dt.map(x(l, "script"), g), r = a.length; d > c; c++) o = l, c !== p && (o = dt.clone(
                    o, !0, !0), r && dt.merge(a, x(o, "script"))), t.call(this[c], o, c);
                if (r)
                    for (s = a[a.length - 1].ownerDocument, dt.map(a, m), c = 0; r > c; c++) o = a[c], on.test(
                        o.type || "") && !dt._data(o, "globalEval") && dt.contains(s, o) && (o.src ? dt
                        ._evalUrl(o.src) : dt.globalEval((o.text || o.textContent || o.innerHTML || "")
                        .replace(an, "")));
                l = i = null
            }
            return this
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        dt.fn[e] = function (e) {
            for (var n, i = 0, o = [], r = dt(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(
                !0), dt(r[i])[t](n), ot.apply(o, n.get());
            return this.pushStack(o)
        }
    }), dt.extend({
        clone: function (e, t, n) {
            var i, o, r, a, s, l = dt.contains(e.ownerDocument, e);
            if (dt.support.html5Clone || dt.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? r = e.cloneNode(
                !0) : (cn.innerHTML = e.outerHTML, cn.removeChild(r = cn.firstChild)), !(dt.support.noCloneEvent &&
                dt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || dt.isXMLDoc(e)))
                for (i = x(r), s = x(e), a = 0; null != (o = s[a]); ++a) i[a] && b(o, i[a]);
            if (t)
                if (n)
                    for (s = s || x(e), i = i || x(r), a = 0; null != (o = s[a]); a++) y(o, i[a]);
                else y(e, r);
            return i = x(r, "script"), i.length > 0 && v(i, !l && x(e, "script")), i = s = o = null, r
        },
        buildFragment: function (e, t, n, i) {
            for (var o, r, a, s, l, c, d, u = e.length, p = h(t), f = [], g = 0; u > g; g++)
                if (r = e[g], r || 0 === r)
                    if ("object" === dt.type(r)) dt.merge(f, r.nodeType ? [r] : r);
                    else if (Zt.test(r)) {
                        for (s = s || p.appendChild(t.createElement("div")), l = (Kt.exec(r) || ["", ""])[1].toLowerCase(),
                                 d = sn[l] || sn._default, s.innerHTML = d[1] + r.replace(Xt, "<$1></$2>") + d[2], o = d[
                            0]; o--;) s = s.lastChild;
                        if (!dt.support.leadingWhitespace && Qt.test(r) && f.push(t.createTextNode(Qt.exec(r)[0])),
                            !dt.support.tbody)
                            for (r = "table" !== l || Yt.test(r) ? "<table>" !== d[1] || Yt.test(r) ? 0 : s : s.firstChild,
                                     o = r && r.childNodes.length; o--;) dt.nodeName(c = r.childNodes[o], "tbody") && !c
                                .childNodes.length && r.removeChild(c);
                        for (dt.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = p.lastChild
                    } else f.push(t.createTextNode(r));
            for (s && p.removeChild(s), dt.support.appendChecked || dt.grep(x(f, "input"), $), g = 0; r = f[
                g++];)
                if ((!i || -1 === dt.inArray(r, i)) && (a = dt.contains(r.ownerDocument, r), s = x(p.appendChild(
                    r), "script"), a && v(s), n))
                    for (o = 0; r = s[o++];) on.test(r.type || "") && n.push(r);
            return s = null, p
        },
        cleanData: function (e, t) {
            for (var n, i, o, r, a = 0, s = dt.expando, l = dt.cache, c = dt.support.deleteExpando, d = dt.event
                .special; null != (n = e[a]); a++)
                if ((t || dt.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) d[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== G ? n.removeAttribute(
                        s) : n[s] = null, tt.push(o))
                }
        },
        _evalUrl: function (e) {
            return dt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), dt.fn.extend({
        wrapAll: function (e) {
            if (dt.isFunction(e)) return this.each(function (t) {
                dt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = dt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return dt.isFunction(e) ? this.each(function (t) {
                dt(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = dt(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = dt.isFunction(e);
            return this.each(function (n) {
                dt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var dn, un, pn, hn = /alpha\([^)]*\)/i,
        fn = /opacity\s*=\s*([^)]*)/,
        gn = /^(top|right|bottom|left)$/,
        mn = /^(none|table(?!-c[ea]).+)/,
        vn = /^margin/,
        yn = RegExp("^(" + ut + ")(.*)$", "i"),
        bn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
        xn = RegExp("^([+-])=(" + ut + ")", "i"),
        $n = {
            BODY: "block"
        },
        wn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        _n = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Cn = ["Top", "Right", "Bottom", "Left"],
        kn = ["Webkit", "O", "Moz", "ms"];
    dt.fn.extend({
        css: function (e, n) {
            return dt.access(this, function (e, n, i) {
                var o, r, a = {},
                    s = 0;
                if (dt.isArray(n)) {
                    for (r = un(e), o = n.length; o > s; s++) a[n[s]] = dt.css(e, n[s], !1, r);
                    return a
                }
                return i !== t ? dt.style(e, n, i) : dt.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return C(this, !0)
        },
        hide: function () {
            return C(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                _(this) ? dt(this).show() : dt(this).hide()
            })
        }
    }), dt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, i, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, l = dt.camelCase(n),
                    c = e.style;
                if (n = dt.cssProps[l] || (dt.cssProps[l] = w(c, l)), s = dt.cssHooks[n] || dt.cssHooks[l],
                i === t) return s && "get" in s && (r = s.get(e, !1, o)) !== t ? r : c[n];
                if (a = typeof i, "string" === a && (r = xn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(
                    dt.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || (
                    "number" !== a || dt.cssNumber[l] || (i += "px"), dt.support.clearCloneStyle ||
                    "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in
                    s && (i = s.set(e, i, o)) === t))) try {
                    c[n] = i
                } catch (d) {}
            }
        },
        css: function (e, n, i, o) {
            var r, a, s, l = dt.camelCase(n);
            return n = dt.cssProps[l] || (dt.cssProps[l] = w(e.style, l)), s = dt.cssHooks[n] || dt.cssHooks[
                l], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = pn(e, n, o)), "normal" ===
            a && n in _n && (a = _n[n]), "" === i || i ? (r = parseFloat(a), i === !0 || dt.isNumeric(r) ?
                r || 0 : a) : a
        }
    }), e.getComputedStyle ? (un = function (t) {
        return e.getComputedStyle(t, null)
    }, pn = function (e, n, i) {
        var o, r, a, s = i || un(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            c = e.style;
        return s && ("" !== l || dt.contains(e.ownerDocument, e) || (l = dt.style(e, n)), bn.test(l) && vn.test(
            n) && (o = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l,
            l = s.width, c.width = o, c.minWidth = r, c.maxWidth = a)), l
    }) : X.documentElement.currentStyle && (un = function (e) {
        return e.currentStyle
    }, pn = function (e, n, i) {
        var o, r, a, s = i || un(e),
            l = s ? s[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), bn.test(l) && !gn.test(n) && (o = c.left, r = e.runtimeStyle,
            a = r && r.left, a && (r.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l =
            c.pixelLeft + "px", c.left = o, a && (r.left = a)), "" === l ? "auto" : l
    }), dt.each(["height", "width"], function (e, n) {
        dt.cssHooks[n] = {
            get: function (e, i, o) {
                return i ? 0 === e.offsetWidth && mn.test(dt.css(e, "display")) ? dt.swap(e, wn,
                    function () {
                        return T(e, n, o)
                    }) : T(e, n, o) : t
            },
            set: function (e, t, i) {
                var o = i && un(e);
                return k(e, t, i ? E(e, n, i, dt.support.boxSizing && "border-box" === dt.css(e,
                    "boxSizing", !1, o), o) : 0)
            }
        }
    }), dt.support.opacity || (dt.cssHooks.opacity = {
        get: function (e, t) {
            return fn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 *
                parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = dt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === dt.trim(r.replace(hn, "")) && n.removeAttribute && (
                n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = hn.test(r) ? r.replace(
                hn, o) : r + " " + o)
        }
    }), dt(function () {
        dt.support.reliableMarginRight || (dt.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? dt.swap(e, {
                    display: "inline-block"
                }, pn, [e, "marginRight"]) : t
            }
        }), !dt.support.pixelPosition && dt.fn.position && dt.each(["top", "left"], function (e, n) {
            dt.cssHooks[n] = {
                get: function (e, i) {
                    return i ? (i = pn(e, n), bn.test(i) ? dt(e).position()[n] + "px" : i) : t
                }
            }
        })
    }), dt.expr && dt.expr.filters && (dt.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !dt.support.reliableHiddenOffsets && "none" === (e.style &&
            e.style.display || dt.css(e, "display"))
    }, dt.expr.filters.visible = function (e) {
        return !dt.expr.filters.hidden(e)
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        dt.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e +
                Cn[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, vn.test(e) || (dt.cssHooks[e + t].set = k)
    });
    var En = /%20/g,
        Tn = /\[\]$/,
        Sn = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    dt.fn.extend({
        serialize: function () {
            return dt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = dt.prop(this, "elements");
                return e ? dt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !dt(this).is(":disabled") && An.test(this.nodeName) && !jn.test(
                    e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Sn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Sn, "\r\n")
                }
            }).get()
        }
    }), dt.param = function (e, n) {
        var i, o = [],
            r = function (e, t) {
                t = dt.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" +
                    encodeURIComponent(t)
            };
        if (n === t && (n = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(e) || e.jquery && !dt.isPlainObject(
            e)) dt.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (i in e) A(i, e[i], n, r);
        return o.join("&").replace(En, "+")
    }, dt.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "),
        function (e, t) {
            dt.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), dt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn, In, Nn = dt.now(),
        Dn = /\?/,
        Ln = /#.*$/,
        Bn = /([?&])_=[^&]*/,
        Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        On = /^(?:GET|HEAD)$/,
        Vn = /^\/\//,
        zn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Fn = dt.fn.load,
        Rn = {},
        qn = {},
        Wn = "*/".concat("*");
    try {
        In = Q.href
    } catch (Un) {
        In = X.createElement("a"), In.href = "", In = In.href
    }
    Mn = zn.exec(In.toLowerCase()) || [], dt.fn.load = function (e, n, i) {
        if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
        var o, r, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), dt.isFunction(n) ? (i = n, n = t) : n &&
            "object" == typeof n && (a = "POST"), s.length > 0 && dt.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            r = arguments, s.html(o ? dt("<div>").append(dt.parseHTML(e)).find(o) : e)
        }).complete(i && function (e, t) {
            s.each(i, r || [e.responseText, t, e])
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        dt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: In,
            type: "GET",
            isLocal: Hn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": dt.parseJSON,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? N(N(e, dt.ajaxSettings), t) : N(dt.ajaxSettings, e)
        },
        ajaxPrefilter: M(Rn),
        ajaxTransport: M(qn),
        ajax: function (e, n) {
            function i(e, n, i, o) {
                var r, u, y, b, $, _ = n;
                2 !== x && (x = 2, l && clearTimeout(l), d = t, s = o || "", w.readyState = e > 0 ? 4 : 0,
                    r = e >= 200 && 300 > e || 304 === e, i && (b = D(p, w, i)), b = L(p, b, w, r), r ?
                    (p.ifModified && ($ = w.getResponseHeader("Last-Modified"), $ && (dt.lastModified[a] =
                        $), $ = w.getResponseHeader("etag"), $ && (dt.etag[a] = $)), 204 === e ||
                    "HEAD" === p.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = b.state,
                        u = b.data, y = b.error, r = !y)) : (y = _, (e || !_) && (_ = "error", 0 >
                    e && (e = 0))), w.status = e, w.statusText = (n || _) + "", r ? g.resolveWith(h,
                    [u, _, w]) : g.rejectWith(h, [w, _, y]), w.statusCode(v), v = t, c && f.trigger(
                    r ? "ajaxSuccess" : "ajaxError", [w, p, r ? u : y]), m.fireWith(h, [w, _]), c &&
                (f.trigger("ajaxComplete", [w, p]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var o, r, a, s, l, c, d, u, p = dt.ajaxSetup({}, n),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? dt(h) : dt.event,
                g = dt.Deferred(),
                m = dt.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                x = 0,
                $ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!u)
                                for (u = {}; t = Pn.exec(s);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || $;
                        return d && d.abort(t), i(0, t), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url ||
                In) + "").replace(Ln, "").replace(Vn, Mn[1] + "//"), p.type = n.method || n.type || p.method ||
                p.type, p.dataTypes = dt.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p
                .crossDomain && (o = zn.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === Mn[1] &&
                o[2] === Mn[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Mn[3] || (
                    "http:" === Mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p
                .data && (p.data = dt.param(p.data, p.traditional)), I(Rn, p, n, w), 2 === x) return w;
            c = p.global, c && 0 === dt.active++ && dt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(),
                p.hasContent = !On.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Dn.test(
                a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Bn.test(a) ? a
                .replace(Bn, "$1_=" + Nn++) : a + (Dn.test(a) ? "&" : "?") + "_=" + Nn++)), p.ifModified &&
            (dt.lastModified[a] && w.setRequestHeader("If-Modified-Since", dt.lastModified[a]), dt.etag[
                a] && w.setRequestHeader("If-None-Match", dt.etag[a])), (p.data && p.hasContent && p.contentType !==
                !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader(
                "Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (
                    "*" !== p.dataTypes[0] ? ", " + Wn + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers) w.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (p.beforeSend.call(h, w, p) === !1 || 2 === x)) return w.abort();
            $ = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) w[r](p[r]);
            if (d = I(qn, p, n, w)) {
                w.readyState = 1, c && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l =
                    setTimeout(function () {
                        w.abort("timeout")
                    }, p.timeout));
                try {
                    x = 1, d.send(y, i)
                } catch (_) {
                    if (!(2 > x)) throw _;
                    i(-1, _)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return dt.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return dt.get(e, t, n, "script")
        }
    }), dt.each(["get", "post"], function (e, n) {
        dt[n] = function (e, i, o, r) {
            return dt.isFunction(i) && (r = r || o, o = i, i = t), dt.ajax({
                url: e,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return dt.globalEval(e), e
            }
        }
    }), dt.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), dt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = X.head || dt("head")[0] || X.documentElement;
            return {
                send: function (t, o) {
                    n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset),
                        n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange =
                            null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200,
                            "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Jn = [],
        Gn = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Jn.pop() || dt.expando + "_" + Nn++;
            return this[e] = !0, e
        }
    }), dt.ajaxPrefilter("json jsonp", function (n, i, o) {
        var r, a, s, l = n.jsonp !== !1 && (Gn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType ||
            "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = dt.isFunction(n.jsonpCallback) ? n.jsonpCallback() :
            n.jsonpCallback, l ? n[l] = n[l].replace(Gn, "$1" + r) : n.jsonp !== !1 && (n.url += (Dn.test(n
            .url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function () {
            return s || dt.error(r + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[r], e[r] = function () {
            s = arguments
        }, o.always(function () {
            e[r] = a, n[r] && (n.jsonpCallback = i.jsonpCallback, Jn.push(r)), s && dt.isFunction(a) &&
            a(s[0]), s = a = t
        }), "script") : t
    });
    var Qn, Xn, Kn = 0,
        Yn = e.ActiveXObject && function () {
            var e;
            for (e in Qn) Qn[e](t, !0)
        };
    dt.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && B() || P()
    } : B, Xn = dt.ajaxSettings.xhr(), dt.support.cors = !!Xn && "withCredentials" in Xn, Xn = dt.support.ajax = !!
        Xn, Xn && dt.ajaxTransport(function (n) {
        if (!n.crossDomain || dt.support.cors) {
            var i;
            return {
                send: function (o, r) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type,
                        n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o[
                        "X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null), i = function (e, o) {
                        var s, c, d, u;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = t, a && (l.onreadystatechange = dt.noop, Yn && delete Qn[a]), o)
                                    4 !== l.readyState && l.abort();
                                else {
                                    u = {}, s = l.status, c = l.getAllResponseHeaders(), "string" ==
                                    typeof l.responseText && (u.text = l.responseText);
                                    try {
                                        d = l.statusText
                                    } catch (p) {
                                        d = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = u.text ?
                                        200 : 404
                                }
                        } catch (h) {
                            o || r(-1, h)
                        }
                        u && r(s, d, u, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Kn, Yn && (Qn || (Qn = {},
                        dt(e).unload(Yn)), Qn[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function () {
                    i && i(t, !0)
                }
            }
        }
    });
    var Zn, ei, ti = /^(?:toggle|show|hide)$/,
        ni = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        oi = [F],
        ri = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = ni.exec(t),
                    r = o && o[3] || (dt.cssNumber[e] ? "" : "px"),
                    a = (dt.cssNumber[e] || "px" !== r && +i) && ni.exec(dt.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== r) {
                    r = r || a[3], o = o || [], a = +i || 1;
                    do s = s || ".5", a /= s, dt.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !==
                    s && --l)
                }
                return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[
                    2]), n
            }]
        };
    dt.Animation = dt.extend(V, {
        tweener: function (e, t) {
            dt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i], ri[n] = ri[n] || [], ri[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? oi.unshift(e) : oi.push(e)
        }
    }), dt.Tween = R, R.prototype = {
        constructor: R,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now =
                this.cur(), this.end = i, this.unit = r || (dt.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = R.propHooks[this.prop];
            return this.pos = t = this.options.duration ? dt.easing[this.easing](e, this.options.duration * e,
                0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this
                .options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) :
                R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = dt.css(e.elem,
                    e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                dt.fx.step[e.prop] ? dt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[dt.cssProps[
                    e.prop]] || dt.cssHooks[e.prop]) ? dt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] =
                    e.now
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, dt.each(["toggle", "show", "hide"], function (e, t) {
        var n = dt.fn[t];
        dt.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e,
                i, o)
        }
    }), dt.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(_).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = dt.isEmptyObject(e),
                r = dt.speed(t, n, i),
                a = function () {
                    var t = V(this, dt.extend({}, e), r);
                    (o || dt._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function (e, n, i) {
            var o = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []),
                this.each(function () {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        r = dt.timers,
                        a = dt._data(this);
                    if (n) a[n] && a[n].stop && o(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && ii.test(n) && o(a[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[
                        n].anim.stop(i), t = !1, r.splice(n, 1));
                    (t || !i) && dt.dequeue(this, e)
                })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = dt._data(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = dt.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, dt.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t =
                    r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), dt.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        dt.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), dt.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? dt.extend({}, e) : {
            complete: n || !n && t || dt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !dt.isFunction(t) && t
        };
        return i.duration = dt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ?
            dt.fx.speeds[i.duration] : dt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue =
            "fx"), i.old = i.complete, i.complete = function () {
            dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
        }, i
    }, dt.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, dt.timers = [], dt.fx = R.prototype.init, dt.fx.tick = function () {
        var e, n = dt.timers,
            i = 0;
        for (Zn = dt.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || dt.fx.stop(), Zn = t
    }, dt.fx.timer = function (e) {
        e() && dt.timers.push(e) && dt.fx.start()
    }, dt.fx.interval = 13, dt.fx.start = function () {
        ei || (ei = setInterval(dt.fx.tick, dt.fx.interval))
    }, dt.fx.stop = function () {
        clearInterval(ei), ei = null
    }, dt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, dt.fx.step = {}, dt.expr && dt.expr.filters && (dt.expr.filters.animated = function (e) {
        return dt.grep(dt.timers, function (t) {
            return e === t.elem
        }).length
    }), dt.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            dt.offset.setOffset(this, e, t)
        });
        var n, i, o = {
                top: 0,
                left: 0
            },
            r = this[0],
            a = r && r.ownerDocument;
        return a ? (n = a.documentElement, dt.contains(n, r) ? (typeof r.getBoundingClientRect !== G && (o = r.getBoundingClientRect()),
            i = W(a), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    }, dt.offset = {
        setOffset: function (e, t, n) {
            var i = dt.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var o, r, a = dt(e),
                s = a.offset(),
                l = dt.css(e, "top"),
                c = dt.css(e, "left"),
                d = ("absolute" === i || "fixed" === i) && dt.inArray("auto", [l, c]) > -1,
                u = {},
                p = {};
            d ? (p = a.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0),
            dt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (u.top = t.top - s.top + o), null !=
            t.left && (u.left = t.left - s.left + r), "using" in t ? t.using.call(e, u) : a.css(u)
        }
    }, dt.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === dt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(), dt.nodeName(e[0], "html") || (n = e.offset()), n.top += dt.css(e[
                    0], "borderTopWidth", !0), n.left += dt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - dt.css(i, "marginTop", !0),
                    left: t.left - n.left - dt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || K; e && !dt.nodeName(e, "html") && "static" ===
                dt.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var i = /Y/.test(n);
        dt.fn[e] = function (o) {
            return dt.access(this, function (e, o, r) {
                var a = W(e);
                return r === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : (a ? a.scrollTo(
                    i ? dt(a).scrollLeft() : r, i ? r : dt(a).scrollTop()) : e[o] = r, t)
            }, e, o, arguments.length, null)
        }
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        dt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (i, o) {
            dt.fn[o] = function (o, r) {
                var a = arguments.length && (i || "boolean" != typeof o),
                    s = i || (o === !0 || r === !0 ? "margin" : "border");
                return dt.access(this, function (n, i, o) {
                    var r;
                    return dt.isWindow(n) ? n.document.documentElement["client" + e] : 9 ===
                    n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e],
                        r["scroll" + e], n.body["offset" + e], r["offset" + e], r[
                        "client" + e])) : o === t ? dt.css(n, i, s) : dt.style(n, i,
                        o, s)
                }, n, a ? o : t, a, null)
            }
        })
    }), dt.fn.size = function () {
        return this.length
    }, dt.fn.andSelf = dt.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ?
        module.exports = dt : (e.jQuery = e.$ = dt, "function" == typeof define && define.amd && define("jquery", [],
            function () {
                return dt
            }))
}(window),
    function (e, t, n) {
        "use strict";
        if ("undefined" == typeof e) throw new Error("ZUI requires jQuery");
        e.zui || (e.zui = function (t) {
            e.isPlainObject(t) && e.extend(e.zui, t)
        });
        var i = {
                all: -1,
                left: 0,
                middle: 1,
                right: 2
            },
            o = 0;
        e.zui({
            uuid: function (e) {
                var t = 1e3 * (new Date).getTime() + o++ % 1e3;
                return e ? t : t.toString(36)
            },
            callEvent: function (t, i, o) {
                if (e.isFunction(t)) {
                    o !== n && (t = e.proxy(t, o));
                    var r = t(i);
                    return i && (i.result = r), !(r !== n && !r)
                }
                return 1
            },
            clientLang: function () {
                var n, i = t.config;
                if ("undefined" != typeof i && i.clientLang && (n = i.clientLang), !n) {
                    var o = e("html").attr("lang");
                    n = o ? o : navigator.userLanguage || navigator.userLanguage || "zh_cn"
                }
                return n.replace("-", "_").toLowerCase()
            },
            strCode: function (e) {
                var t = 0;
                if (e && e.length)
                    for (var n = 0; n < e.length; ++n) t += n * e.charCodeAt(n);
                return t
            },
            getMouseButtonCode: function (e) {
                return "number" != typeof e && (e = i[e]), (e === n || null === e) && (e = -1), e
            }
        }), e.fn.callEvent = function (t, i, o) {
            var r = e(this),
                a = t.indexOf(".zui."),
                s = 0 > a ? t : t.substring(0, a),
                l = e.Event(s, i);
            if (o === n && a > 0 && (o = r.data(t.substring(a + 1))), o && o.options) {
                var c = o.options[s];
                e.isFunction(c) && (l.result = e.zui.callEvent(c, l, o))
            }
            return r.trigger(l), l
        }, e.fn.callComEvent = function (t, i, o) {
            o === n || e.isArray(o) || (o = [o]);
            var r = this,
                a = r.triggerHandler(i, o),
                s = t.options[i];
            return s && (a = s.apply(t, o)), a
        }
    }(jQuery, window, void 0),
    function (e) {
        "use strict";
        e.fn.fixOlPd = function (t) {
            return t = t || 10, this.each(function () {
                var n = e(this);
                n.css("paddingLeft", Math.ceil(Math.log10(n.children().length)) * t + 10)
            })
        }, e(function () {
            e(".ol-pd-fix,.article ol").fixOlPd()
        })
    }(jQuery), + function (e) {
    "use strict";
    var t = function (n, i) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function (t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", r.resetText || i.data("resetText", i[o]()), i[o](r[t] || this.options[t]), setTimeout(e.proxy(
            function () {
                "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (
                    this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
    }, t.prototype.toggle = function () {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(
                ".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger(
                "change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var i = e(this),
                o = i.data("zui.button"),
                r = "object" == typeof n && n;
            o || i.data("zui.button", o = new t(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
        return e.fn.button = n, this
    }, e(document).on("click.zui.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery), + function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = "zui.alert",
        i = function (n) {
            e(n).on("click", t, this.close)
        };
    i.prototype.close = function (t) {
        function i() {
            a.trigger("closed." + n).remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e(r);
        t && t.preventDefault(), a.length || (a = o.hasClass("alert") ? o : o.parent()), a.trigger(t = e.Event(
            "close." + n)), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass(
            "fade") ? a.one(e.support.transition.end, i).emulateTransitionEnd(150) : i())
    };
    var o = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var o = e(this),
                r = o.data(n);
            r || o.data(n, r = new i(this)), "string" == typeof t && r[t].call(o)
        })
    }, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function () {
        return e.fn.alert = o, this
    }, e(document).on("click." + n + ".data-api", t, i.prototype.close)
}(window.jQuery),
    function (e, t) {
        "use strict";
        var n = "zui.pager",
            i = {
                page: 1,
                recTotal: 0,
                recPerPage: 10
            },
            o = {
                zh_cn: {
                    pageOfText: "第 {0} 页",
                    prev: "上一页",
                    next: "下一页",
                    first: "第一页",
                    last: "最后一页",
                    "goto": "跳转",
                    pageOf: "第 <strong>{page}</strong> 页",
                    totalPage: "共 <strong>{totalPage}</strong> 页",
                    totalCount: "共 <strong>{recTotal}</strong> 项",
                    pageSize: "每页 <strong>{recPerPage}</strong> 项",
                    itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 项",
                    pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页"
                },
                zh_tw: {
                    pageOfText: "第 {0} 頁",
                    prev: "上一頁",
                    next: "下一頁",
                    first: "第一頁",
                    last: "最後一頁",
                    "goto": "跳轉",
                    pageOf: "第 <strong>{page}</strong> 頁",
                    totalPage: "共 <strong>{totalPage}</strong> 頁",
                    totalCount: "共 <strong>{recTotal}</strong> 項",
                    pageSize: "每頁 <strong>{recPerPage}</strong> 項",
                    itemsRange: "第 <strong>{start}</strong> ~ <strong>{end}</strong> 項",
                    pageOfTotal: "第 <strong>{page}</strong>/<strong>{totalPage}</strong> 頁"
                },
                en: {
                    pageOfText: "Page {0}",
                    prev: "Prev",
                    next: "Next",
                    first: "First",
                    last: "Last",
                    "goto": "Goto",
                    pageOf: "Page <strong>{page}</strong>",
                    totalPage: "<strong>{totalPage}</strong> pages",
                    totalCount: "<strong>{recTotal}</strong> in total",
                    pageSize: "<strong>{recPerPage}</strong> per page",
                    itemsRange: "From <strong>{start}</strong> to <strong>{end}</strong>",
                    pageOfTotal: "Page <strong>{page}</strong> of <strong>{totalPage}</strong>"
                }
            },
            r = function (t, i) {
                var a = this;
                a.name = n, a.$ = e(t), i = a.options = e.extend({}, r.DEFAULTS, this.$.data(), i);
                var s = i.lang || e.zui.clientLang();
                a.lang = e.isPlainObject(s) ? e.extend(!0, {}, o[s.lang || e.zui.clientLang()], s) : o[s], a.state = {}, a.set(
                    i.page, i.recTotal, i.recPerPage, !0), a.$.on("click", ".pager-goto-btn", function () {
                    var t = e(this).closest(".pager-goto"),
                        n = parseInt(t.find(".pager-goto-input").val());
                    0 / 0 !== n && a.set(n)
                }).on("click", ".pager-item", function () {
                    var t = e(this).data("page");
                    "number" == typeof t && t > 0 && a.set(t)
                }).on("click", ".pager-size-menu [data-size]", function () {
                    var t = e(this).data("size");
                    "number" == typeof t && t > 0 && a.set(-1, -1, t)
                })
            };
        r.prototype.set = function (t, n, o, r) {
            var a = this;
            "object" == typeof t && null !== t && (o = t.recPerPage, n = t.recTotal, t = t.page);
            var s = a.state;
            s || (s = e.extend({}, i));
            var l = e.extend({}, s);
            return "number" == typeof o && o > 0 && (s.recPerPage = o), "number" == typeof n && n >= 0 && (s.recTotal =
                n), "number" == typeof t && t >= 0 && (s.page = t), s.totalPage = s.recTotal && s.recPerPage ? Math
                .ceil(s.recTotal / s.recPerPage) : 1, s.page = Math.max(0, Math.min(s.page, s.totalPage)), s.pageRecCount =
                s.recTotal, s.page && s.recTotal && (s.page < s.totalPage ? s.pageRecCount = s.recPerPage : s.page > 1 &&
                (s.pageRecCount = s.recTotal - s.recPerPage * (s.page - 1))), s.skip = s.page > 1 ? (s.page - 1) *
                s.recPerPage : 0, s.start = s.skip + 1, s.end = s.skip + s.pageRecCount, s.prev = s.page > 1 ? s.page -
                1 : 0, s.next = s.page < s.totalPage ? s.page + 1 : 0, a.state = s, r || l.page === s.page && l.recTotal ===
            s.recTotal && l.recPerPage === s.recPerPage || a.$.callComEvent(a, "onPageChange", [s, l]), a.render()
        }, r.prototype.createLinkItem = function (n, i, o) {
            var r = this;
            i === t && (i = n);
            var a = e('<a title="' + r.lang.pageOfText.format(n) + '" class="pager-item" data-page="' + n + '"/>').attr(
                "href", n ? r.createLink(n, r.state) : "###").html(i);
            return o || (a = e("<li />").append(a).toggleClass("active", n === r.state.page).toggleClass("disabled", !n ||
                n === r.state.page)), a
        }, r.prototype.createNavItems = function (e) {
            var n = this,
                i = n.$,
                o = n.state,
                r = o.totalPage,
                a = o.page,
                s = function (e, o) {
                    if (e === !1) return i.append(n.createLinkItem(0, o || n.options.navEllipsisItem)), void 0;
                    o === t && (o = e);
                    for (var r = e; o >= r; ++r) i.append(n.createLinkItem(r))
                };
            e === t && (e = n.options.maxNavCount || 10), s(1), r > 1 && (e >= r ? s(2, r) : e - 2 > a ? (s(2, e - 2),
                s(!1), s(r)) : a > r - e + 2 ? (s(!1), s(r - e + 2, r)) : (s(!1), s(a - Math.ceil((e - 4) / 2),
                a + Math.floor((e - 4) / 2)), s(!1), s(r)))
        }, r.prototype.createGoto = function () {
            var t = this,
                n = this.state,
                i = e('<div class="input-group pager-goto" style="width: ' + (35 + 9 * (n.page + "").length + 25 + 12 *
                    t.lang.goto.length) + 'px"><input value="' + n.page + '" type="number" min="1" max="' + n.totalPage +
                    '" placeholder="' + n.page +
                    '" class="form-control pager-goto-input"><span class="input-group-btn"><button class="btn pager-goto-btn" type="button">' +
                    t.lang.goto + "</button></span></div>");
            return i
        }, r.prototype.createSizeMenu = function () {
            var t = this,
                n = this.state,
                i = e('<ul class="dropdown-menu"></ul>'),
                o = t.options.pageSizeOptions;
            "string" == typeof o && (o = o.split(","));
            for (var r = 0; r < o.length; ++r) {
                var a = o[r];
                "string" == typeof a && (a = parseInt(a));
                var s = e('<li><a href="###" data-size="' + a + '">' + a + "</a></li>").toggleClass("active", a === n.recPerPage);
                i.append(s)
            }
            return e(
                '<div class="btn-group pager-size-menu"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown">' +
                t.lang.pageSize.format(n) + ' <span class="caret"></span></button></div>').addClass(t.options.menuDirection)
                .append(i)
        }, r.prototype.createElement = function (t, n, i) {
            var o = this,
                r = e.proxy(o.createLinkItem, o),
                a = o.lang;
            switch (t) {
                case "prev":
                    return r(i.prev, a.prev);
                case "prev_icon":
                    return r(i.prev, '<i class="icon ' + o.options.prevIcon + '"></i>');
                case "next":
                    return r(i.next, a.next);
                case "next_icon":
                    return r(i.next, '<i class="icon ' + o.options.nextIcon + '"></i>');
                case "first":
                    return r(1, a.first);
                case "first_icon":
                    return r(1, '<i class="icon ' + o.options.firstIcon + '"></i>');
                case "last":
                    return r(i.totalPage, a.last);
                case "last_icon":
                    return r(i.totalPage, '<i class="icon ' + o.options.lastIcon + '"></i>');
                case "space":
                case "|":
                    return e('<li class="space" />');
                case "nav":
                case "pages":
                    return o.createNavItems(), void 0;
                case "total_text":
                    return e(('<div class="pager-label">' + a.totalCount + "</div>").format(i));
                case "page_text":
                    return e(('<div class="pager-label">' + a.pageOf + "</div>").format(i));
                case "total_page_text":
                    return e(('<div class="pager-label">' + a.totalPage + "</div>").format(i));
                case "page_of_total_text":
                    return e(('<div class="pager-label">' + a.pageOfTotal + "</div>").format(i));
                case "page_size_text":
                    return e(('<div class="pager-label">' + a.pageSize + "</div>").format(i));
                case "items_range_text":
                    return e(('<div class="pager-label">' + a.itemsRange + "</div>").format(i));
                case "goto":
                    return o.createGoto();
                case "size_menu":
                    return o.createSizeMenu();
                default:
                    return e("<li/>").html(t.format(i))
            }
        }, r.prototype.createLink = function (n, i) {
            n === t && (n = this.state.page), i === t && (i = this.state);
            var o = this.options.linkCreator;
            return "string" == typeof o ? o.format(e.extend({}, i, {
                page: n
            })) : e.isFunction(o) ? o(n, i) : "#page=" + n
        }, r.prototype.render = function (t) {
            var n = this,
                i = n.state,
                o = n.options.elementCreator || n.createElement,
                r = e.isPlainObject(o);
            t = t || n.elements || n.options.elements, "string" == typeof t && (t = t.split(",")), n.elements = t, n.$.empty();
            for (var a = 0; a < t.length; ++a) {
                var s = e.trim(t[a]),
                    l = r ? o[s] || o : o,
                    c = l.call(n, s, n.$, i);
                c === !1 && (c = n.createElement(s, n.$, i)), c instanceof e && ("LI" !== c[0].tagName && (c = e(
                    "<li/>").append(c)), n.$.append(c))
            }
            var d = null;
            return n.$.children("li").each(function () {
                var t = e(this),
                    n = !!t.children(".pager-item").length;
                d ? d.toggleClass("pager-item-right", !n) : n && t.addClass("pager-item-left"), d = n ? t :
                    null
            }), d && d.addClass("pager-item-right"), n.$.callComEvent(n, "onRender", [i]), n
        }, r.DEFAULTS = e.extend({
            elements: ["first_icon", "prev_icon", "pages", "next_icon", "last_icon", "page_of_total_text",
                "items_range_text", "total_text"],
            prevIcon: "icon-double-angle-left",
            nextIcon: "icon-double-angle-right",
            firstIcon: "icon-step-backward",
            lastIcon: "icon-step-forward",
            navEllipsisItem: '<i class="icon icon-ellipsis-h"></i>',
            maxNavCount: 10,
            menuDirection: "dropdown",
            pageSizeOptions: [10, 20, 30, 50, 100]
        }, i), e.fn.pager = function (t) {
            return this.each(function () {
                var i = e(this),
                    o = i.data(n),
                    a = "object" == typeof t && t;
                o || i.data(n, o = new r(this, a)), "string" == typeof t && o[t]()
            })
        }, r.NAME = n, e.fn.pager.Constructor = r, e(function () {
            e('[data-ride="pager"]').pager()
        })
    }(jQuery, void 0), + function (e) {
    "use strict";
    var t = "zui.tab",
        n = function (t) {
            this.element = e(t)
        };
    n.prototype.show = function () {
        var n = this.element,
            i = n.closest("ul:not(.dropdown-menu)"),
            o = n.attr("data-target") || n.attr("data-tab");
        if (o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !n.parent("li").hasClass("active")) {
            var r = i.find(".active:last a")[0],
                a = e.Event("show." + t, {
                    relatedTarget: r
                });
            if (n.trigger(a), !a.isDefaultPrevented()) {
                var s = e(o);
                this.activate(n.parent("li"), i), this.activate(s, s.parent(), function () {
                    n.trigger({
                        type: "shown." + t,
                        relatedTarget: r
                    })
                })
            }
        }
    }, n.prototype.activate = function (t, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"),
                a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest(
                "li.dropdown").addClass("active"), i && i()
        }
        var r = n.find("> .active"),
            a = i && e.support.transition && r.hasClass("fade");
        a ? r.one(e.support.transition.end, o).emulateTransitionEnd(150) : o(), r.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = function (i) {
        return this.each(function () {
            var o = e(this),
                r = o.data(t);
            r || o.data(t, r = new n(this)), "string" == typeof i && r[i]()
        })
    }, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
        return e.fn.tab = i, this
    }, e(document).on("click.zui.tab.data-api", '[data-toggle="tab"], [data-tab]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), + function (e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function (t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (e) {
    "use strict";
    var t = "zui.collapse",
        n = function (t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent &&
            (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
    n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, n.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = e.Event("show." + t);
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.$parent && this.$parent.find(".in");
                if (i && i.length) {
                    var o = i.data(t);
                    if (o && o.transitioning) return;
                    i.collapse("hide"), o || i.data(t, null)
                }
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                var a = function () {
                    this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0,
                        this.$element.trigger("shown." + t)
                };
                if (!e.support.transition) return a.call(this);
                var s = e.camelCase(["scroll", r].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(a, this)).emulateTransitionEnd(350)[r](this.$element[
                    0][s])
            }
        }
    }, n.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = e.Event("hide." + t);
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass(
                    "collapse").removeClass("in"), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.trigger("hidden." + t).removeClass("collapsing").addClass(
                        "collapse")
                };
                return e.support.transition ? (this.$element[i](0).one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(
                    350), void 0) : o.call(this)
            }
        }
    }, n.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var i = e.fn.collapse;
    e.fn.collapse = function (i) {
        return this.each(function () {
            var o = e(this),
                r = o.data(t),
                a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof i && i);
            r || o.data(t, r = new n(this, a)), "string" == typeof i && r[i]()
        })
    }, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = i, this
    }, e(document).on("click." + t + ".data-api", "[data-toggle=collapse]", function (n) {
        var i, o = e(this),
            r = o.attr("data-target") || n.preventDefault() || (i = o.attr("href")) && i.replace(
                /.*(?=#[^\s]+$)/, ""),
            a = e(r),
            s = a.data(t),
            l = s ? "toggle" : o.data(),
            c = o.attr("data-parent"),
            d = c && e(c);
        s && s.transitioning || (d && d.find('[data-toggle=collapse][data-parent="' + c + '"]').not(o).addClass(
            "collapsed"), o[a.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), a.collapse(l)
    })
}(window.jQuery),
    function (e, t) {
        "use strict";
        var n = 1200,
            i = 992,
            o = 768,
            r = t(e),
            a = function () {
                var e = r.width();
                t("html").toggleClass("screen-desktop", e >= i && n > e).toggleClass("screen-desktop-wide", e >= n).toggleClass(
                    "screen-tablet", e >= o && i > e).toggleClass("screen-phone", o > e).toggleClass("device-mobile", i >
                    e).toggleClass("device-desktop", e >= i)
            },
            s = "",
            l = navigator.userAgent;
        l.match(/(iPad|iPhone|iPod)/i) ? s += " os-ios" : l.match(/android/i) ? s += " os-android" : l.match(/Win/i) ? s +=
            " os-windows" : l.match(/Mac/i) ? s += " os-mac" : l.match(/Linux/i) ? s += " os-linux" : l.match(/X11/i) && (s +=
            " os-unix"), "ontouchstart" in document.documentElement && (s += " is-touchable"), t("html").addClass(s), r
            .resize(a), a()
    }(window, jQuery),
    function (e) {
        "use strict";
        var t = {
                zh_cn: '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
                zh_tw: '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
                en: 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
            },
            n = function () {
                var e = this.isIE() || this.isIE10() || !1;
                if (e)
                    for (var t = 10; t > 5; t--)
                        if (this.isIE(t)) {
                            e = t;
                            break
                        } this.ie = e, this.cssHelper()
            };
        n.prototype.cssHelper = function () {
            var t = this.ie,
                n = e("html");
            n.toggleClass("ie", t).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"), t && n.addClass("ie-" + t).toggleClass(
                "gt-ie-7 gte-ie-8 support-ie", t >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", 8 > t).toggleClass(
                "gt-ie-8 gte-ie-9", t >= 9).toggleClass("lte-ie-8 lt-ie-9", 9 > t).toggleClass("gt-ie-9 gte-ie-10",
                t >= 10).toggleClass("lte-ie-9 lt-ie-10", 10 > t)
        }, n.prototype.tip = function (n) {
            var i = e("#browseHappyTip");
            i.length || (i = e(
                '<div id="browseHappyTip" class="alert alert-dismissable alert-danger-inverse alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>'
            ), i.prependTo("body")), i.find(".content").html(n || this.browseHappyTip || t[e.zui.clientLang() ||
            "zh_cn"])
        }, n.prototype.isIE = function (e) {
            if (10 === e) return this.isIE10();
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + (e || "") + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i")
                .length
        }, n.prototype.isIE10 = function () {
            return !1
        }, e.zui({
            browser: new n
        }), e(function () {
            e("body").hasClass("disabled-browser-tip") || e.zui.browser.ie && e.zui.browser.ie < 8 && e.zui.browser
                .tip()
        })
    }(jQuery),
    function () {
        "use strict";
        Date.ONEDAY_TICKS = 864e5, Date.prototype.format || (Date.prototype.format = function (e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            /(y+)/i.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ?
                t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e
        }), Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function (e) {
            return this.setTime(this.getTime() + e), this
        }), Date.prototype.addDays || (Date.prototype.addDays = function (e) {
            return this.addMilliseconds(e * Date.ONEDAY_TICKS), this
        }), Date.prototype.clone || (Date.prototype.clone = function () {
            var e = new Date;
            return e.setTime(this.getTime()), e
        }), Date.isLeapYear || (Date.isLeapYear = function (e) {
            return 0 === e % 4 && 0 !== e % 100 || 0 === e % 400
        }), Date.getDaysInMonth || (Date.getDaysInMonth = function (e, t) {
            return [31, Date.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
        }), Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function () {
            return Date.isLeapYear(this.getFullYear())
        }), Date.prototype.clearTime || (Date.prototype.clearTime = function () {
            return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
        }), Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function () {
            return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
        }), Date.prototype.addMonths || (Date.prototype.addMonths = function (e) {
            var t = this.getDate();
            return this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(t, this.getDaysInMonth())),
                this
        }), Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function (e) {
            e = e || 1;
            for (var t = this.clone(); t.getDay() != e;) t.addDays(-1);
            return t.clearTime(), t
        }), Date.prototype.isSameDay || (Date.prototype.isSameDay = function (e) {
            return e.toDateString() === this.toDateString()
        }), Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function (e) {
            var t = this.getLastWeekday(),
                n = t.clone().addDays(7);
            return e >= t && n > e
        }), Date.prototype.isSameYear || (Date.prototype.isSameYear = function (e) {
            return this.getFullYear() === e.getFullYear()
        }), Date.create || (Date.create = function (e) {
            return e instanceof Date || ("number" == typeof e && 1e10 > e && (e *= 1e3), e = new Date(e)), e
        }), Date.timestamp || (Date.timestamp = function (e) {
            return "number" == typeof e ? 1e10 > e && (e *= 1e3) : e = Date.create(e).getTime(), e
        })
    }(),
    function () {
        "use strict";
        String.prototype.format || (String.prototype.format = function (e) {
            var t = this;
            if (arguments.length > 0) {
                var n;
                if (arguments.length <= 2 && "object" == typeof e)
                    for (var i in e) void 0 !== e[i] && (n = new RegExp("(" + (arguments[1] ? arguments[1].replace(
                        "0", i) : "{" + i + "}") + ")", "g"), t = t.replace(n, e[i]));
                else
                    for (var o = 0; o < arguments.length; o++) void 0 !== arguments[o] && (n = new RegExp("({[" + o +
                        "]})", "g"), t = t.replace(n, arguments[o]))
            }
            return t
        }), String.prototype.isNum || (String.prototype.isNum = function (e) {
            if (null !== e) {
                var t, n;
                return n = /\d*/i, t = e.match(n), t == e ? !0 : !1
            }
            return !1
        }), String.prototype.endsWith || (String.prototype.endsWith = function (e, t) {
            var n = this.toString();
            (void 0 === t || t > n.length) && (t = n.length), t -= e.length;
            var i = n.indexOf(e, t);
            return -1 !== i && i === t
        }), String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
            return t = t || 0, this.lastIndexOf(e, t) === t
        }), String.prototype.includes || (String.prototype.includes = function () {
            return -1 !== String.prototype.indexOf.apply(this, arguments)
        })
    }(),
    function (e, t, n) {
        "$:nomunge";

        function i() {
            o = t[s](function () {
                r.each(function () {
                    var t = e(this),
                        n = t.width(),
                        i = t.height(),
                        o = e.data(this, c);
                    (n !== o.w || i !== o.h) && t.trigger(l, [o.w = n, o.h = i])
                }), i()
            }, a[d])
        }
        var o, r = e([]),
            a = e.resize = e.extend(e.resize, {}),
            s = "setTimeout",
            l = "resize",
            c = l + "-special-event",
            d = "delay",
            u = "throttleWindow";
        a[d] = 250, a[u] = !0, e.event.special[l] = {
            setup: function () {
                if (!a[u] && this[s]) return !1;
                var t = e(this);
                r = r.add(t), e.data(this, c, {
                    w: t.width(),
                    h: t.height()
                }), 1 === r.length && i()
            },
            teardown: function () {
                if (!a[u] && this[s]) return !1;
                var t = e(this);
                r = r.not(t), t.removeData(c), r.length || clearTimeout(o)
            },
            add: function (t) {
                function i(t, i, r) {
                    var a = e(this),
                        s = e.data(this, c) || {};
                    s.w = i !== n ? i : a.width(), s.h = r !== n ? r : a.height(), o.apply(this, arguments)
                }
                if (!a[u] && this[s]) return !1;
                var o;
                return e.isFunction(t) ? (o = t, i) : (o = t.handler, t.handler = i, void 0)
            }
        }
    }(jQuery, this), + function (e) {
    "use strict";

    function t(i, o) {
        var r, a = e.proxy(this.process, this);
        this.$element = e(i).is("body") ? e(window) : e(i), this.$body = e("body"), this.$scrollElement = this.$element
            .on("scroll." + n + ".data-api", a), this.options = e.extend({}, t.DEFAULTS, o), this.selector || (this.selector =
            (this.options.target || (r = e(i).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") +
            " .nav li > a"), this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(),
            this.process()
    }
    var n = "zui.scrollspy";
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function () {
            var i = e(this),
                o = i.data("target") || i.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [[r[t]().top + (!e.isWindow(n.$scrollElement.get(0)) &&
                n.$scrollElement.scrollTop()), o]] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            i = n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (t >= i) return a != (e = r.last()[0]) && this.activate(e);
        if (a && t <= o[0]) return a != (e = r[0]) && this.activate(e);
        for (e = o.length; e--;) a != r[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function (t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            o = e(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger(
            "activate." + n)
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = function (i) {
        return this.each(function () {
            var o = e(this),
                r = o.data(n),
                a = "object" == typeof i && i;
            r || o.data(n, r = new t(this, a)), "string" == typeof i && r[i]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = i, this
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery),
    function (e, t) {
        "use strict";
        var n, i, o = "localStorage",
            r = "page_" + e.location.pathname + e.location.search,
            a = function () {
                this.slience = !0;
                try {
                    o in e && e[o] && e[o].setItem && (this.enable = !0, n = e[o])
                } catch (a) {}
                this.enable || (i = {}, n = {
                    getLength: function () {
                        var e = 0;
                        return t.each(i, function () {
                            e++
                        }), e
                    },
                    key: function (e) {
                        var n, o = 0;
                        return t.each(i, function (t) {
                            return o === e ? (n = t, !1) : (o++, void 0)
                        }), n
                    },
                    removeItem: function (e) {
                        delete i[e]
                    },
                    getItem: function (e) {
                        return i[e]
                    },
                    setItem: function (e, t) {
                        i[e] = t
                    },
                    clear: function () {
                        i = {}
                    }
                }), this.storage = n, this.page = this.get(r, {})
            };
        a.prototype.pageSave = function () {
            if (t.isEmptyObject(this.page)) this.remove(r);
            else {
                var e, n = [];
                for (e in this.page) {
                    var i = this.page[e];
                    null === i && n.push(e)
                }
                for (e = n.length - 1; e >= 0; e--) delete this.page[n[e]];
                this.set(r, this.page)
            }
        }, a.prototype.pageRemove = function (e) {
            "undefined" != typeof this.page[e] && (this.page[e] = null, this.pageSave())
        }, a.prototype.pageClear = function () {
            this.page = {}, this.pageSave()
        }, a.prototype.pageGet = function (e, t) {
            var n = this.page[e];
            return void 0 === t || null !== n && void 0 !== n ? n : t
        }, a.prototype.pageSet = function (e, n) {
            t.isPlainObject(e) ? t.extend(!0, this.page, e) : this.page[this.serialize(e)] = n, this.pageSave()
        }, a.prototype.check = function () {
            if (!this.enable && !this.slience) throw new Error(
                "Browser not support localStorage or enable status been set true.");
            return this.enable
        }, a.prototype.length = function () {
            return this.check() ? n.getLength ? n.getLength() : n.length : 0
        }, a.prototype.removeItem = function (e) {
            return n.removeItem(e), this
        }, a.prototype.remove = function (e) {
            return this.removeItem(e)
        }, a.prototype.getItem = function (e) {
            return n.getItem(e)
        }, a.prototype.get = function (e, t) {
            var n = this.deserialize(this.getItem(e));
            return "undefined" != typeof n && null !== n || "undefined" == typeof t ? n : t
        }, a.prototype.key = function (e) {
            return n.key(e)
        }, a.prototype.setItem = function (e, t) {
            return n.setItem(e, t), this
        }, a.prototype.set = function (e, t) {
            return void 0 === t ? this.remove(e) : (this.setItem(e, this.serialize(t)), this)
        }, a.prototype.clear = function () {
            return n.clear(), this
        }, a.prototype.forEach = function (e) {
            for (var t = this.length(), i = t - 1; i >= 0; i--) {
                var o = n.key(i);
                e(o, this.get(o))
            }
            return this
        }, a.prototype.getAll = function () {
            var e = {};
            return this.forEach(function (t, n) {
                e[t] = n
            }), e
        }, a.prototype.serialize = function (e) {
            return "string" == typeof e ? e : JSON.stringify(e)
        }, a.prototype.deserialize = function (e) {
            if ("string" != typeof e) return void 0;
            try {
                return JSON.parse(e)
            } catch (t) {
                return e || void 0
            }
        }, t.zui({
            store: new a
        })
    }(window, jQuery),
    function (e) {
        "use strict";
        var t = "zui.searchBox",
            n = function (t, i) {
                var o = this;
                o.name = name, o.$ = e(t), o.options = i = e.extend({}, n.DEFAULTS, o.$.data(), i);
                var r = o.$.is(i.inputSelector) ? o.$ : o.$.find(i.inputSelector);
                if (r.length) {
                    var a = function () {
                            o.changeTimer && (clearTimeout(o.changeTimer), o.changeTimer = null)
                        },
                        s = function () {
                            a();
                            var e = o.getSearch();
                            if (e !== o.lastValue) {
                                var t = "" === e;
                                r.toggleClass("empty", t), o.$.callComEvent(o, "onSearchChange", [e, t]), o.lastValue = e
                            }
                        };
                    o.$input = r = r.first(), r.on(i.listenEvent, function () {
                        o.changeTimer = setTimeout(function () {
                            s()
                        }, i.changeDelay)
                    }).on("focus", function (e) {
                        r.addClass("focus"), o.$.callComEvent(o, "onFocus", [e])
                    }).on("blur", function (e) {
                        r.removeClass("focus"), o.$.callComEvent(o, "onBlur", [e])
                    }).on("keydown", function (e) {
                        var t = 0,
                            n = e.which;
                        27 === n && i.escToClear ? (this.setSearch("", !0), s(), t = 1) : 13 === n && i.onPressEnter &&
                            (s(), o.$.callComEvent(o, "onPressEnter", [e]));
                        var r = o.$.callComEvent(o, "onKeyDown", [e]);
                        r === !1 && (t = 1), t && e.preventDefault()
                    }), o.$.on("click", ".search-clear-btn", function (e) {
                        o.setSearch("", !0), s(), o.focus(), e.preventDefault()
                    }), s()
                } else console.error("ZUI: search box init error, cannot find search box input element.")
            };
        n.DEFAULTS = {
            inputSelector: 'input[type="search"],input[type="text"]',
            listenEvent: "change input paste",
            changeDelay: 500
        }, n.prototype.getSearch = function () {
            return this.$input && e.trim(this.$input.val())
        }, n.prototype.setSearch = function (e, t) {
            var n = this.$input;
            n && (n.val(e), t || n.trigger("change"))
        }, n.prototype.focus = function () {
            this.$input && this.$input.focus()
        }, e.fn.searchBox = function (i) {
            return this.each(function () {
                var o = e(this),
                    r = o.data(t),
                    a = "object" == typeof i && i;
                r || o.data(t, r = new n(this, a)), "string" == typeof i && r[i]()
            })
        }, n.NAME = t, e.fn.searchBox.Constructor = n
    }(jQuery),
    function (e, t) {
        "use strict";
        var n = "zui.draggable",
            i = {
                container: "body",
                move: !0
            },
            o = 0,
            r = function (t, n) {
                var r = this;
                r.$ = e(t), r.id = o++, r.options = e.extend({}, i, r.$.data(), n), r.init()
            };
        r.DEFAULTS = i, r.NAME = n, r.prototype.init = function () {
            var i, o, r, a, s, l = this,
                c = l.$,
                d = "before",
                u = "drag",
                p = "finish",
                h = "." + n + "." + l.id,
                f = "mousedown" + h,
                g = "mouseup" + h,
                m = "mousemove" + h,
                v = l.options,
                y = v.selector,
                b = v.handle,
                x = c,
                $ = e.isFunction(v.move),
                w = function (e) {
                    var t = e.pageX,
                        n = e.pageY;
                    s = !0;
                    var o = {
                        left: t - r.x,
                        top: n - r.y
                    };
                    x.removeClass("drag-ready").addClass("dragging"), v.move && ($ ? v.move(o, x) : x.css(o)), v[u] &&
                    v[u]({
                        event: e,
                        element: x,
                        startOffset: r,
                        pos: o,
                        offset: {
                            x: t - i.x,
                            y: n - i.y
                        },
                        smallOffset: {
                            x: t - a.x,
                            y: n - a.y
                        }
                    }), a.x = t, a.y = n, v.stopPropagation && e.stopPropagation()
                },
                _ = function (n) {
                    if (e(t).off(h), !s) return x.removeClass("drag-ready"), void 0;
                    var o = {
                        left: n.pageX - r.x,
                        top: n.pageY - r.y
                    };
                    x.removeClass("drag-ready dragging"), v.move && ($ ? v.move(o, x) : x.css(o)), v[p] && v[p]({
                        event: n,
                        element: x,
                        startOffset: r,
                        pos: o,
                        offset: {
                            x: n.pageX - i.x,
                            y: n.pageY - i.y
                        },
                        smallOffset: {
                            x: n.pageX - a.x,
                            y: n.pageY - a.y
                        }
                    }), n.preventDefault(), v.stopPropagation && n.stopPropagation()
                },
                C = function (n) {
                    var l = e.zui.getMouseButtonCode(v.mouseButton);
                    if (!(l > -1 && n.button !== l)) {
                        var c = e(this);
                        if (y && (x = b ? c.closest(y) : c), v[d]) {
                            var u = v[d]({
                                event: n,
                                element: x
                            });
                            if (u === !1) return
                        }
                        var p = e(v.container),
                            h = x.offset();
                        o = p.offset(), i = {
                            x: n.pageX,
                            y: n.pageY
                        }, r = {
                            x: n.pageX - h.left + o.left,
                            y: n.pageY - h.top + o.top
                        }, a = e.extend({}, i), s = !1, x.addClass("drag-ready"), n.preventDefault(), v.stopPropagation &&
                        n.stopPropagation(), e(t).on(m, w).on(g, _)
                    }
                };
            b ? c.on(f, b, C) : y ? c.on(f, y, C) : c.on(f, C)
        }, r.prototype.destroy = function () {
            var i = "." + n + "." + this.id;
            this.$.off(i), e(t).off(i), this.$.data(n, null)
        }, e.fn.draggable = function (t) {
            return this.each(function () {
                var i = e(this),
                    o = i.data(n),
                    a = "object" == typeof t && t;
                o || i.data(n, o = new r(this, a)), "string" == typeof t && o[t]()
            })
        }, e.fn.draggable.Constructor = r
    }(jQuery, document),
    function (e, t, n) {
        "use strict";
        var i = "zui.droppable",
            o = {
                target: ".droppable-target",
                deviation: 5,
                sensorOffsetX: 0,
                sensorOffsetY: 0,
                dropToClass: "drop-to"
            },
            r = 0,
            a = function (t, n) {
                var i = this;
                i.id = r++, i.$ = e(t), i.options = e.extend({}, o, i.$.data(), n), i.init()
            };
        a.DEFAULTS = o, a.NAME = i, a.prototype.trigger = function (t, n) {
            return e.zui.callEvent(this.options[t], n, this)
        }, a.prototype.init = function () {
            var o, r, a, s, l, c, d, u, p, h, f, g, m, v = this,
                y = v.$,
                b = v.options,
                x = b.deviation,
                $ = "." + i + "." + v.id,
                w = "mousedown" + $,
                _ = "mouseup" + $,
                C = "mousemove" + $,
                k = b.selector,
                E = b.handle,
                T = b.flex,
                S = b.container,
                j = b.canMoveHere,
                A = b.dropToClass,
                M = y,
                I = !1,
                N = S ? e(b.container).first() : k ? y : e("body"),
                D = function (t) {
                    if (I && (f = {
                        left: t.pageX,
                        top: t.pageY
                    }, !(n.abs(f.left - u.left) < x && n.abs(f.top - u.top) < x))) {
                        if (null === a) {
                            var i = N.css("position");
                            "absolute" != i && "relative" != i && "fixed" != i && (c = i, N.css("position", "relative")),
                                a = M.clone().removeClass("drag-from").addClass("drag-shadow").css({
                                    position: "absolute",
                                    width: M.outerWidth(),
                                    transition: "none"
                                }).appendTo(N), M.addClass("dragging"), v.trigger("start", {
                                event: t,
                                element: M,
                                targets: o
                            })
                        }
                        var d = {
                                left: f.left - h.left,
                                top: f.top - h.top
                            },
                            m = {
                                left: d.left - p.left,
                                top: d.top - p.top
                            };
                        a.css(m), e.extend(g, f);
                        var y = !1;
                        s = !1, T || o.removeClass(A);
                        var $ = null;
                        if (o.each(function () {
                            var t = e(this),
                                n = t.offset(),
                                i = t.outerWidth(),
                                o = t.outerHeight(),
                                r = n.left + b.sensorOffsetX,
                                a = n.top + b.sensorOffsetY;
                            return f.left > r && f.top > a && f.left < r + i && f.top < a + o && ($ && $.removeClass(
                                A), $ = t, !b.nested) ? !1 : void 0
                        }), $) {
                            s = !0;
                            var w = $.data("id");
                            M.data("id") != w && (l = !1), (null === r || r.data("id") !== w && !l) && (y = !0), r = $,
                            T && o.removeClass(A), r.addClass(A)
                        }
                        T ? null !== r && r.length && (s = !0) : (M.toggleClass("drop-in", s), a.toggleClass("drop-in",
                            s)), j && j(M, r) === !1 || v.trigger("drag", {
                            event: t,
                            isIn: s,
                            target: r,
                            element: M,
                            isNew: y,
                            selfTarget: l,
                            clickOffset: h,
                            offset: d,
                            position: {
                                left: d.left - p.left,
                                top: d.top - p.top
                            },
                            mouseOffset: f
                        }), t.preventDefault()
                    }
                },
                L = function (n) {
                    if (e(t).off($), clearTimeout(m), I) {
                        if (I = !1, c && N.css("position", c), null === a) return M.removeClass("drag-from"), v.trigger(
                            "always", {
                                event: n,
                                cancel: !0
                            }), void 0;
                        s || (r = null);
                        var i = !0;
                        f = n ? {
                            left: n.pageX,
                            top: n.pageY
                        } : g;
                        var d = {
                                left: f.left - h.left,
                                top: f.top - h.top
                            },
                            u = {
                                left: f.left - g.left,
                                top: f.top - g.top
                            };
                        g.left = f.left, g.top = f.top;
                        var y = {
                            event: n,
                            isIn: s,
                            target: r,
                            element: M,
                            isNew: !l && null !== r,
                            selfTarget: l,
                            offset: d,
                            mouseOffset: f,
                            position: {
                                left: d.left - p.left,
                                top: d.top - p.top
                            },
                            lastMouseOffset: g,
                            moveOffset: u
                        };
                        i = v.trigger("beforeDrop", y), i && s && v.trigger("drop", y), o.removeClass(A), M.removeClass(
                            "dragging").removeClass("drag-from"), a.remove(), a = null, v.trigger("finish", y), v.trigger(
                            "always", y), n && n.preventDefault()
                    }
                },
                B = function (n) {
                    var i = e.zui.getMouseButtonCode(b.mouseButton);
                    if (!(i > -1 && n.button !== i)) {
                        var f = e(this);
                        k && (M = E ? f.closest(k) : f), M.hasClass("drag-shadow") || b.before && b.before({
                            event: n,
                            element: M
                        }) === !1 || (I = !0, o = e.isFunction(b.target) ? b.target(M, y) : N.find(b.target), r =
                            null, a = null, s = !1, l = !0, c = null, d = M.offset(), p = N.offset(), p.top = p.top -
                            N.scrollTop(), p.left = p.left - N.scrollLeft(), u = {
                            left: n.pageX,
                            top: n.pageY
                        }, g = e.extend({}, u), h = {
                            left: u.left - d.left,
                            top: u.top - d.top
                        }, M.addClass("drag-from"), e(t).on(C, D).on(_, L), m = setTimeout(function () {
                            e(t).on(w, L)
                        }, 10), n.preventDefault(), b.stopPropagation && n.stopPropagation())
                    }
                };
            E ? y.on(w, E, B) : k ? y.on(w, k, B) : y.on(w, B)
        }, a.prototype.destroy = function () {
            var n = "." + i + "." + this.id;
            this.$.off(n), e(t).off(n), this.$.data(i, null)
        }, a.prototype.reset = function () {
            this.destroy(), this.init()
        }, e.fn.droppable = function (t) {
            return this.each(function () {
                var n = e(this),
                    o = n.data(i),
                    r = "object" == typeof t && t;
                o || n.data(i, o = new a(this, r)), "string" == typeof t && o[t]()
            })
        }, e.fn.droppable.Constructor = a
    }(jQuery, document, Math), + function (e, t) {
    "use strict";

    function n(t, n, r) {
        return this.each(function () {
            var a = e(this),
                s = a.data(i),
                l = e.extend({}, o.DEFAULTS, a.data(), "object" == typeof t && t);
            s || a.data(i, s = new o(this, l)), "string" == typeof t ? s[t](n, r) : l.show && s.show(n, r)
        })
    }
    var i = "zui.modal",
        o = function (n, o) {
            var r = this;
            r.options = o, r.$body = e(document.body), r.$element = e(n), r.$backdrop = r.isShown = null, r.scrollbarWidth =
                0, o.moveable === t && (r.options.moveable = r.$element.hasClass("modal-moveable")), o.remote && r.$element
                .find(".modal-content").load(o.remote, function () {
                    r.$element.trigger("loaded." + i)
                })
        };
    o.VERSION = "3.2.0", o.TRANSITION_DURATION = 300, o.BACKDROP_TRANSITION_DURATION = 150, o.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
        position: "fit"
    };
    var r = function (t, n) {
        var i = e(window);
        n.left = Math.max(0, Math.min(n.left, i.width() - t.outerWidth())), n.top = Math.max(0, Math.min(n.top, i.height() -
            t.outerHeight())), t.css(n)
    };
    o.prototype.toggle = function (e, t) {
        return this.isShown ? this.hide() : this.show(e, t)
    }, o.prototype.ajustPosition = function (n) {
        var o = this,
            a = o.options;
        if (n === t && (n = a.position), n !== t && null !== n) {
            e.isFunction(n) && (n = n(o));
            var s = o.$element.find(".modal-dialog"),
                l = e(window).height(),
                c = {
                    maxHeight: "initial",
                    overflow: "visible"
                },
                d = s.find(".modal-body").css(c);
            if (a.scrollInside) {
                var u = a.headerHeight;
                "number" != typeof u ? u = s.find(".modal-header").height() : e.isFunction(u) && (u = u($header)),
                    c.maxHeight = l - u, d.outerHeight() > c.maxHeight && (c.overflow = "auto")
            }
            d.css(c);
            var p = Math.max(0, (l - s.outerHeight()) / 2);
            if ("fit" === n ? n = {
                top: p > 50 ? Math.floor(2 * p / 3) : p
            } : "center" === n ? n = {
                top: p
            } : e.isPlainObject(n) || (n = {
                top: n
            }), s.hasClass("modal-moveable")) {
                var h = null,
                    f = a.rememberPos;
                f && (f === !0 ? h = o.$element.data("modal-pos") : e.zui.store && (h = e.zui.store.pageGet(i +
                    ".rememberPos." + f))), n = e.extend(n, {
                    left: Math.max(0, (e(window).width() - s.outerWidth()) / 2)
                }, h), "inside" === a.moveable ? r(s, n) : s.css(n)
            } else s.css(n)
        }
    }, o.prototype.setMoveale = function () {
        e.fn.draggable || console.error("Moveable modal requires draggable.js.");
        var t = this,
            n = t.options,
            o = t.$element.find(".modal-dialog").removeClass("modal-dragged");
        o.toggleClass("modal-moveable", !!n.moveable), t.$element.data("modal-moveable-setup") || o.draggable({
            container: t.$element,
            handle: ".modal-header",
            before: function () {
                var e = o.css("margin-top");
                e && "0px" !== e && o.css("top", e).css("margin-top", "").addClass("modal-dragged")
            },
            finish: function (o) {
                var r = n.rememberPos;
                r && (t.$element.data("modal-pos", o.pos), e.zui.store && r !== !0 && e.zui.store.pageSet(
                    i + ".rememberPos." + r, o.pos))
            },
            move: "inside" === n.moveable ? function (e) {
                r(o, e)
            } : !0
        })
    }, o.prototype.show = function (t, n) {
        var r = this,
            a = e.Event("show." + i, {
                relatedTarget: t
            });
        r.$element.trigger(a), r.$element.toggleClass("modal-scroll-inside", !!r.options.scrollInside), r.isShown ||
        a.isDefaultPrevented() || (r.isShown = !0, r.options.moveable && r.setMoveale(), r.checkScrollbar(), r.options
            .backdrop !== !1 && (r.$body.addClass("modal-open"), r.setScrollbar()), r.escape(), r.$element.on(
            "click.dismiss." + i, '[data-dismiss="modal"]',
            function (e) {
                r.hide(), e.stopPropagation()
            }), r.backdrop(function () {
            var a = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0),
            a && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.ajustPosition(
                n), r.enforceFocus();
            var s = e.Event("shown." + i, {
                relatedTarget: t
            });
            a ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(o.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(s)
        }))
    }, o.prototype.hide = function (t) {
        t && t.preventDefault && t.preventDefault();
        var n = this;
        t = e.Event("hide." + i), n.$element.trigger(t), n.isShown && !t.isDefaultPrevented() && (n.isShown = !1, n
                .options.backdrop !== !1 && (n.$body.removeClass("modal-open"), n.resetScrollbar()), n.escape(), e(
                document).off("focusin." + i), n.$element.removeClass("in").attr("aria-hidden", !0).off(
                "click.dismiss." + i), e.support.transition && n.$element.hasClass("fade") ? n.$element.one(
                "bsTransitionEnd", e.proxy(n.hideModal, n)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.hideModal()
        )
    }, o.prototype.enforceFocus = function () {
        e(document).off("focusin." + i).on("focusin." + i, e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger(
                "focus")
        }, this))
    }, o.prototype.escape = function () {
        this.isShown && this.options.keyboard ? e(document).on("keydown.dismiss." + i, e.proxy(function (n) {
            if (27 == n.which) {
                var o = e.Event("escaping." + i),
                    r = this.$element.triggerHandler(o, "esc");
                if (r != t && !r) return;
                this.hide()
            }
        }, this)) : this.isShown || e(document).off("keydown.dismiss." + i)
    }, o.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$element.trigger("hidden." + i)
        })
    }, o.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, o.prototype.backdrop = function (t) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = e.support.transition && r;
            if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on(
                "mousedown.dismiss." + i, e.proxy(function (e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus
                        .call(this.$element[0]) : this.hide.call(this))
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            a ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                n.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(
                o.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, o.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, o.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, o.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, o.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var a = e.fn.modal;
    e.fn.modal = n, e.fn.modal.Constructor = o, e.fn.modal.noConflict = function () {
        return e.fn.modal = a, this
    }, e(document).on("click." + i + ".data-api", '[data-toggle="modal"]', function (t) {
        var o = e(this),
            r = o.attr("href"),
            a = null;
        try {
            a = e(o.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
        } catch (s) {
            return
        }
        if (a.length) {
            var l = a.data(i) ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, a.data(), o.data());
            o.is("a") && t.preventDefault(), a.one("show." + i, function (e) {
                e.isDefaultPrevented() || a.one("hidden." + i, function () {
                    o.is(":visible") && o.trigger("focus")
                })
            }), n.call(a, l, this, o.data("position"))
        }
    })
}(jQuery, void 0),
    function (e, t, n) {
        "use strict";
        if (!e.fn.modal) throw new Error("Modal trigger requires modal.js");
        var i = "zui.modaltrigger",
            o = "ajax",
            r = ".zui.modal",
            a = "string",
            s = function (t, n) {
                t = e.extend({}, s.DEFAULTS, e.ModalTriggerDefaults, n ? n.data() : null, t), this.isShown, this.$trigger =
                    n, this.options = t, this.id = e.zui.uuid()
            };
        s.DEFAULTS = {
            type: "custom",
            height: "auto",
            name: "triggerModal",
            fade: !0,
            position: "fit",
            showHeader: !0,
            delay: 0,
            backdrop: !0,
            keyboard: !0,
            waittime: 0,
            loadingIcon: "icon-spinner-indicator",
            scrollInside: !1
        }, s.prototype.init = function (n) {
            var s = this;
            if (n.url && (!n.type || n.type != o && "iframe" != n.type) && (n.type = o), n.remote) n.type = o, typeof n
                .remote === a && (n.url = n.remote);
            else if (n.iframe) n.type = "iframe", typeof n.iframe === a && (n.url = n.iframe);
            else if (n.custom && (n.type = "custom", typeof n.custom === a)) {
                var l;
                try {
                    l = e(n.custom)
                } catch (c) {}
                l && l.length ? n.custom = l : e.isFunction(t[n.custom]) && (n.custom = t[n.custom])
            }
            var d = e("#" + n.name);
            d.length && (s.isShown || d.off(r), d.remove()), d = e('<div id="' + n.name +
                '" class="modal modal-trigger ' + (n.className || "") + '">' + ("string" == typeof n.loadingIcon &&
                0 === n.loadingIcon.indexOf("icon-") ? '<div class="icon icon-spin loader ' + n.loadingIcon +
                    '"></div>' : n.loadingIcon) +
                '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>'
            ).appendTo("body").data(i, s);
            var u = function (t, i) {
                var o = n[t];
                e.isFunction(o) && d.on(i + r, o)
            };
            u("onShow", "show"), u("shown", "shown"), u("onHide", "hide"), u("hidden", "hidden"), u("loaded", "loaded"),
                d.on("shown" + r, function () {
                    s.isShown = !0
                }).on("hidden" + r, function () {
                    s.isShown = !1
                }), this.$modal = d, this.$dialog = d.find(".modal-dialog"), n.mergeOptions && (this.options = n)
        }, s.prototype.show = function (n) {
            var r = e.extend({}, this.options, {
                url: this.$trigger ? this.$trigger.attr("href") || this.$trigger.attr("data-url") || this.$trigger
                    .data("url") : this.options.url
            }, n);
            this.init(r);
            var s = this,
                l = this.$modal,
                c = this.$dialog,
                d = r.custom,
                u = c.find(".modal-body").css("padding", ""),
                p = c.find(".modal-header"),
                h = c.find(".modal-content");
            l.toggleClass("fade", r.fade).addClass(r.className).toggleClass("modal-loading", !this.isShown).toggleClass(
                "modal-scroll-inside", !!r.scrollInside), c.toggleClass("modal-md", "md" === r.size).toggleClass(
                "modal-sm", "sm" === r.size).toggleClass("modal-lg", "lg" === r.size).toggleClass(
                "modal-fullscreen", "fullscreen" === r.size), p.toggle(r.showHeader), p.find(".modal-icon").attr(
                "class", "modal-icon icon-" + r.icon), p.find(".modal-title-name").text(r.title || ""), r.size &&
            "fullscreen" === r.size && (r.width = "", r.height = "");
            var f = function () {
                    clearTimeout(this.resizeTask), this.resizeTask = setTimeout(function () {
                        s.ajustPosition(r.position)
                    }, 100)
                },
                g = function (e, t) {
                    return "undefined" == typeof e && (e = r.delay), setTimeout(function () {
                        c = l.find(".modal-dialog"), r.width && "auto" != r.width && c.css("width", r.width), r
                            .height && "auto" != r.height && (c.css("height", r.height), "iframe" === r.type &&
                        u.css("height", c.height() - p.outerHeight())), s.ajustPosition(r.position), l.removeClass(
                            "modal-loading"), "iframe" != r.type && c.off("resize." + i).on("resize." + i,
                            f), t && t()
                    }, e)
                };
            if ("custom" === r.type && d)
                if (e.isFunction(d)) {
                    var m = d({
                        modal: l,
                        options: r,
                        modalTrigger: s,
                        ready: g
                    });
                    typeof m === a && (u.html(m), g())
                } else d instanceof e ? (u.html(e("<div>").append(d.clone()).html()), g()) : (u.html(d), g());
            else if (r.url) {
                var v = function () {
                    var e = l.callComEvent(s, "broken");
                    e && (u.html(e), g())
                };
                if (l.attr("ref", r.url), "iframe" === r.type) {
                    l.addClass("modal-iframe"), this.firstLoad = !0;
                    var y = "iframe-" + r.name;
                    p.detach(), u.detach(), h.empty().append(p).append(u), u.css("padding", 0).html('<iframe id="' + y +
                        '" name="' + y + '" src="' + r.url +
                        '" frameborder="no"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>'
                    ), r.waittime > 0 && (s.waitTimeout = g(r.waittime, v));
                    var b = document.getElementById(y);
                    b.onload = b.onreadystatechange = function () {
                        var n = !!r.scrollInside;
                        if (s.firstLoad && l.addClass("modal-loading"), !this.readyState || "complete" == this.readyState) {
                            s.firstLoad = !1, r.waittime > 0 && clearTimeout(s.waitTimeout);
                            try {
                                l.attr("ref", b.contentWindow.location.href);
                                var o = t.frames[y].$;
                                if (o && "auto" === r.height && "fullscreen" != r.size) {
                                    var a = o("body").addClass("body-modal").toggleClass("body-modal-scroll-inside",
                                        n);
                                    r.iframeBodyClass && a.addClass(r.iframeBodyClass);
                                    var c = [],
                                        d = function (i) {
                                            l.removeClass("fade");
                                            var o = a.outerHeight();
                                            if (i === !0 && r.onlyIncreaseHeight && (o = Math.max(o, u.data(
                                                "minModalHeight") || 0), u.data("minModalHeight", o)), n) {
                                                var s = r.headerHeight;
                                                "number" != typeof s ? s = p.height() : e.isFunction(s) && (s = s(p));
                                                var d = e(t).height();
                                                o = Math.min(o, d - s)
                                            }
                                            for (c.length > 1 && o === c[0] && (o = Math.max(o, c[1])), c.push(o); c
                                                .length > 2;) c.shift();
                                            u.css("height", o), r.fade && l.addClass("fade"), g()
                                        };
                                    l.callComEvent(s, "loaded", {
                                        modalType: "iframe",
                                        jQuery: o
                                    }), setTimeout(d, 100), a.off("resize." + i).on("resize." + i, d), n && e(t)
                                        .off("resize." + i).on("resize." + i, d)
                                } else g()
                            } catch (h) {
                                g()
                            }
                        }
                    }
                } else e.ajax(e.extend({
                    url: r.url,
                    success: function (n) {
                        try {
                            var i = e(n);
                            i.filter(".modal-dialog").length ? c.replaceWith(i) : i.filter(
                                ".modal-content").length ? c.find(".modal-content").replaceWith(i) :
                                u.wrapInner(i)
                        } catch (r) {
                            t.console && t.console.warn && console.warn(
                                "ZUI: Cannot recogernize remote content.", {
                                    error: r,
                                    data: n
                                }), l.html(n)
                        }
                        l.callComEvent(s, "loaded", {
                            modalType: o
                        }), g()
                    },
                    error: v
                }, r.ajaxOptions))
            }
            l.modal({
                show: "show",
                backdrop: r.backdrop,
                moveable: r.moveable,
                rememberPos: r.rememberPos,
                keyboard: r.keyboard,
                scrollInside: r.scrollInside
            })
        }, s.prototype.close = function (n, i) {
            var o = this;
            (n || i) && o.$modal.on("hidden" + r, function () {
                e.isFunction(n) && n(), typeof i === a && i.length && !o.$modal.data("cancel-reload") && (
                    "this" === i ? t.location.reload() : t.location = i)
            }), o.$modal.modal("hide")
        }, s.prototype.toggle = function (e) {
            this.isShown ? this.close() : this.show(e)
        }, s.prototype.ajustPosition = function (t) {
            t = t === n ? this.options.position : t, e.isFunction(t) && (t = t(this)), this.$modal.modal(
                "ajustPosition", t)
        }, e.zui({
            ModalTrigger: s,
            modalTrigger: new s
        }), e.fn.modalTrigger = function (t, n) {
            return e(this).each(function () {
                var o = e(this),
                    r = o.data(i),
                    l = e.extend({
                        title: o.attr("title") || o.text(),
                        url: o.attr("href"),
                        type: o.hasClass("iframe") ? "iframe" : ""
                    }, o.data(), e.isPlainObject(t) && t);
                r || o.data(i, r = new s(l, o)), typeof t == a ? r[t](n) : l.show && r.show(n), o.on((l.trigger ||
                    "click") + ".toggle." + i, function (t) {
                    l = e.extend(l, {
                        url: o.attr("href") || o.attr("data-url") || o.data("url") || l.url
                    }), r.toggle(l), o.is("a") && t.preventDefault()
                })
            })
        };
        var l = e.fn.modal;
        e.fn.modal = function (t, n) {
            return e(this).each(function () {
                var i = e(this);
                i.hasClass("modal") ? l.call(i, t, n) : i.modalTrigger(t, n)
            })
        }, e.fn.modal.bs = l;
        var c = function (t) {
                return t = t ? e(t) : e(".modal.modal-trigger"), t && t instanceof e ? t : null
            },
            d = function (n, o, r) {
                var a = n;
                if (e.isFunction(n)) {
                    var s = r;
                    r = o, o = n, n = s
                }
                n = c(n), n && n.length ? n.each(function () {
                    e(this).data(i).close(o, r)
                }) : e("body").hasClass("modal-open") || e(".modal.in").length || e("body").hasClass("body-modal") && t
                    .parent.$.zui.closeModal(a, o, r)
            },
            u = function (e, t) {
                t = c(t), t && t.length && t.modal("ajustPosition", e)
            };
        e.zui({
            closeModal: d,
            ajustModalPosition: u
        }), e(document).on("click." + i + ".data-api", '[data-toggle="modal"]', function (t) {
            var n = e(this),
                o = n.attr("href"),
                r = null;
            try {
                r = e(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""))
            } catch (a) {}
            r && r.length || (n.data(i) ? n.trigger(".toggle." + i) : n.modalTrigger({
                show: !0
            })), n.is("a") && t.preventDefault()
        }).on("click." + i + ".data-api", '[data-dismiss="modal"]', function () {
            e.zui.closeModal()
        })
    }(window.jQuery, window, void 0), + function (e) {
    "use strict";
    var t = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null,
            this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.prototype.init = function (t, n, i) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i);
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle,
                this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focus",
                    l = "hover" == a ? "mouseleave" : "blur";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element
                    .on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }, t.prototype.getOptions = function (t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay &&
        (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function () {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function (e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, t.prototype.enter = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data(
            "zui." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? (n.timeout =
            setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show), void 0) : n.show()
    }, t.prototype.leave = function (t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data(
            "zui." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? (n.timeout =
            setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide), void 0) : n.hide()
    }, t.prototype.show = function (t) {
        var n = e.Event("show.zui." + this.type);
        if ((t || this.hasContent()) && this.enabled) {
            var i = this;
            if (i.$element.trigger(n), n.isDefaultPrevented()) return;
            var o = i.tip();
            i.setContent(t), i.options.animation && o.addClass("fade");
            var r = "function" == typeof i.options.placement ? i.options.placement.call(i, o[0], i.$element[0]) : i
                    .options.placement,
                a = /\s?auto?\s?/i,
                s = a.test(r);
            s && (r = r.replace(a, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r), i.options.container ? o.appendTo(i.options.container) : o.insertAfter(i.$element);
            var l = i.getPosition(),
                c = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (s) {
                var u = i.$element.parent(),
                    p = r,
                    h = document.documentElement.scrollTop || document.body.scrollTop,
                    f = "body" == i.options.container ? window.innerWidth : u.outerWidth(),
                    g = "body" == i.options.container ? window.innerHeight : u.outerHeight(),
                    m = "body" == i.options.container ? 0 : u.offset().left;
                r = "bottom" == r && l.top + l.height + d - h > g ? "top" : "top" == r && l.top - h - d < 0 ?
                    "bottom" : "right" == r && l.right + c > f ? "left" : "left" == r && l.left - c < m ? "right" :
                        r, o.removeClass(p).addClass(r)
            }
            var v = i.getCalculatedOffset(r, l, c, d);
            i.applyPlacement(v, r);
            var y = function () {
                var e = i.hoverState;
                i.$element.trigger("shown.zui." + i.type), i.hoverState = null, "out" == e && i.leave(i)
            };
            e.support.transition && i.$tip.hasClass("fade") ? o.one("bsTransitionEnd", y).emulateTransitionEnd(150) :
                y()
        }
    }, t.prototype.applyPlacement = function (e, t) {
        var n, i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, i.offset(e).addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        if ("top" == t && c != r && (n = !0, e.top = e.top + r - c), /bottom|top/.test(t)) {
            var d = 0;
            e.left < 0 && (d = -2 * e.left, e.left = 0, i.offset(e), l = i[0].offsetWidth, c = i[0].offsetHeight),
                this.replaceArrow(d - o + l, l, "left")
        } else this.replaceArrow(c - r, c, "top");
        n && i.offset(e)
    }, t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function (e) {
        var t = this.tip(),
            n = e || this.getTitle();
        this.options.tipId && t.attr("id", this.options.tipId), this.options.tipClass && t.addClass(this.options.tipClass),
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](n), t.removeClass(
            "fade in top bottom left right")
    }, t.prototype.hide = function () {
        function t() {
            "in" != n.hoverState && i.detach()
        }
        var n = this,
            i = this.tip(),
            o = e.Event("hide.zui." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), e.support.transition &&
        this.$tip.hasClass("fade") ? i.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(),
            this.$element.trigger("hidden.zui." + this.type), this)
    }, t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr(
            "title") || "").attr("title", "")
    }, t.prototype.hasContent = function () {
        return this.getTitle()
    }, t.prototype.getPosition = function () {
        var t = this.$element[0];
        return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
            width: t.offsetWidth,
            height: t.offsetHeight
        }, this.$element.offset())
    }, t.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, t.prototype.getTitle = function () {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function () {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function () {
        this.enabled = !0
    }, t.prototype.disable = function () {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function (t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("zui." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n, i) {
        return this.each(function () {
            var o = e(this),
                r = o.data("zui.tooltip"),
                a = "object" == typeof n && n;
            r || o.data("zui.tooltip", r = new t(this, a)), "string" == typeof n && r[n](i)
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), + function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults =
        function () {
            return t.DEFAULTS
        }, t.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTarget();
        if (t) return t.find(".arrow").length < 1 && e.addClass("no-arrow"), e.html(t.html()), void 0;
        var n = this.getTitle(),
            i = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](n), e.find(".popover-content")[this.options.html ?
            "html" : "text"](i), e.removeClass("fade top bottom left right in"), this.options.tipId && e.attr(
            "id", this.options.tipId), this.options.tipClass && e.addClass(this.options.tipClass), e.find(
            ".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function () {
        return this.getTarget() || this.getTitle() || this.getContent()
    }, t.prototype.getContent = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.getTarget = function () {
        var t = this.$element,
            n = this.options,
            i = t.attr("data-target") || ("function" == typeof n.target ? n.target.call(t[0]) : n.target);
        return i ? "$next" == i ? t.next(".popover") : e(i) : !1
    }, t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function () {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var i = e(this),
                o = i.data("zui.popover"),
                r = "object" == typeof n && n;
            o || i.data("zui.popover", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
    }
}(window.jQuery), + function (e) {
    "use strict";

    function t() {
        e(r).remove(), e(a).each(function (t) {
            var n = i(e(this));
            n.hasClass("open") && (n.trigger(t = e.Event("hide." + o)), t.isDefaultPrevented() || n.removeClass(
                "open").trigger("hidden." + o))
        })
    }

    function n() {
        e(r).remove(), e(a).each(function (t) {
            var n = i(e(this));
            n.hasClass("mouseopen") && (n.trigger(t = e.Event("hide." + o)), t.isDefaultPrevented() || n.removeClass(
                "mouseopen").trigger("hidden." + o))
        })
    }

    function i(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i;
        try {
            i = n && e(n)
        } catch (o) {}
        return i && i.length ? i : t.parent()
    }
    var o = "zui.dropdown",
        r = ".dropdown-backdrop",
        a = "[data-toggle=dropdown]",
        s = function (t) {
            e(t).on("click." + o, this.toggle)
        };
    s.prototype.toggle = function (r) {
        var a = e(this),
            s = r.type;
        if (!a.is(".disabled, :disabled")) {
            var l = i(a),
                c = l.hasClass("open");
            if ("click" === s ? (c = l.hasClass("open"), t()) : (c = "mouseenter" === s ? !1 : !0, n()), !c) {
                if ("ontouchstart" in document.documentElement && !l.closest(".navbar-nav").length && e(
                    '<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t), l.trigger(r = e.Event(
                    "show." + o)), r.isDefaultPrevented()) return;
                "click" === s ? l.toggleClass("open").trigger("shown." + o) : l.toggleClass("mouseopen").trigger(
                    "shown." + o), a.focus()
            }
            return !1
        }
    }, s.prototype.keydown = function (t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var n = e(this);
            if (t.preventDefault(), t.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = i(n),
                    r = o.hasClass("open");
                if (!r || r && 27 == t.keyCode) return 27 == t.which && o.find(a).focus(), n.click();
                var s = e("[role=menu] li:not(.divider):visible a", o);
                if (s.length) {
                    var l = s.index(s.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(
                        l).focus()
                }
            }
        }
    };
    var l = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this),
                i = n.data("dropdown");
            i || n.data("dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
        })
    }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = l, this
    };
    var c = o + ".data-api";
    e(document).on("click." + c, t).on("click." + c, ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click." + c, a, s.prototype.toggle).on("keydown." + c, a + ", [role=menu]", s.prototype.keydown).on(
        "mouseenter", ".dropdown", s.prototype.toggle).on("mouseleave", ".dropdown", s.prototype.toggle)
}(window.jQuery),
    function (e, t) {
        "use strict";
        var n = "zui.contextmenu",
            i = {
                duration: 200
            },
            o = !1,
            r = {},
            a = "zui-contextmenu-" + e.zui.uuid(),
            s = 0,
            l = 0,
            c = function () {
                return e(document).off("mousemove." + n).on("mousemove." + n, function (e) {
                    s = e.clientX, l = e.clientY
                }), r
            },
            d = function (t, n) {
                if ("string" == typeof t && (t = "seperator" === t || "divider" === t || "-" === t || "|" === t ? {
                    type: "seperator"
                } : {
                    label: t,
                    id: n
                }), "seperator" === t.type || "divider" === t.type) return e('<li class="divider"></li>');
                var i = e("<a/>").attr({
                    href: t.url || "###",
                    "class": t.className,
                    style: t.style
                }).data("item", t);
                return t.html ? i.html(t.html === !0 ? t.label || t.text : t.html) : i.text(t.label || t.text), t.onClick &&
                i.on("click", t.onClick), e("<li />").toggleClass("disabled", t.disabled === !0).append(i)
            },
            u = null,
            p = function (t, n) {
                "function" == typeof t && (n = t, t = null), u && (clearTimeout(u), u = null);
                var i = e("#" + a);
                if (i.length) {
                    var o = i.data("options");
                    if (!t || o.id === t) {
                        var s = function () {
                            i.hide(), o.onHidden && o.onHidden(), n && n()
                        };
                        o.onHide && o.onHide();
                        var l = o.animation;
                        i.removeClass("in"), l ? u = setTimeout(s, o.duration) : s()
                    }
                }
                return r
            },
            h = function (c, h, f) {
                e.isPlainObject(c) && (f = h, h = c, c = h.items), o = !0, h = e.extend({}, i, h);
                var g = h.x,
                    m = h.y;
                g === t && (g = (h.event || h).clientX), g === t && (g = s), m === t && (m = (h.event || h).clientY), m ===
                t && (m = l);
                var v = e("#" + a);
                v.length || (v = e('<div style="display: none; position: fixed; z-index: 2000;" class="contextmenu" id="' +
                    a + '"><ul class="dropdown-menu contextmenu-menu"></ul></div>').appendTo("body"));
                var y = v.find(".contextmenu-menu").off("click." + n).on("click." + n, "a", function (t) {
                    var n = e(this),
                        i = h.onClickItem && h.onClickItem(n.data("item"), n, t);
                    i !== !1 && p()
                }).empty();
                v.hide().attr("class", "contextmenu");
                var b = h.itemCreator || d,
                    x = typeof c;
                "string" === x ? c = c.split(",") : "function" === x && (c = c(h)), e.each(c, function (e, t) {
                    y.append(b(t, e, h))
                });
                var $ = h.animation,
                    w = h.duration;
                $ === !0 && (h.animation = $ = "fade"), u && (clearTimeout(u), u = null);
                var _ = function () {
                    v.addClass("in"), h.onShown && h.onShown(), f && f()
                };
                h.onShow && h.onShow(), v.data("options", {
                    animation: $,
                    onHide: h.onHide,
                    onHidden: h.onHidden,
                    id: h.id,
                    duration: w
                });
                var C = e(window);
                return g = Math.max(0, Math.min(g, C.width() - y.outerWidth())), m = Math.max(0, Math.min(m, C.height() - y
                    .outerHeight())), v.css({
                    left: g,
                    top: m
                }), $ ? (v.addClass("open").addClass($).show(), u = setTimeout(function () {
                    _(), o = !1
                }, h.duration)) : (v.addClass("open").show(), _(), u = setTimeout(function () {
                    o = !1
                }, 200)), r
            };
        e(document).on("click", function (t) {
            o || e(t.target).closest(".contextmenu").length || p()
        }), e.extend(r, {
            NAME: n,
            DEFAULTS: i,
            show: h,
            hide: p,
            listenMouse: c
        }), e.zui({
            ContextMenu: r
        });
        var f = function (t, i) {
            var o = this;
            o.name = n, o.$ = e(t), i = o.options = e.extend({
                trigger: "contextmenu"
            }, r.DEFAULTS, this.$.data(), i);
            var a = i.trigger;
            o.id = e.zui.uuid();
            var s = function (e) {
                    if ("mousedown" !== e.type || 2 === e.button) {
                        var t = {
                            x: e.clientX,
                            y: e.clientY,
                            event: e
                        };
                        return i.itemsCreator && (t.items = i.itemsCreator.call(this, e)), o.show(t), e.preventDefault(),
                            e.returnValue = !1, !1
                    }
                },
                l = a + "." + n;
            i.selector ? o.$.on(l, i.selector, s) : o.$.on(l, s)
        };
        f.prototype.destory = function () {
            that.$.off("." + n)
        }, f.prototype.hide = function (e) {
            r.hide(this.id, e)
        }, f.prototype.show = function (t, n) {
            t = e.extend({}, this.options, t), r.show(t, n)
        }, e.fn.contextmenu = function (t) {
            return this.each(function () {
                var i = e(this),
                    o = i.data(n),
                    r = "object" == typeof t && t;
                o || i.data(n, o = new f(this, r)), "string" == typeof t && o[t]()
            })
        }, e.fn.contextmenu.Constructor = f
    }(jQuery, void 0), + function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this
            .paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause &&
        this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        touchable: !0
    }, t.prototype.touchable = function () {
        function t(t) {
            var t = t || window.event;
            t.originalEvent && (t = t.originalEvent);
            var r = e(this);
            switch (t.type) {
                case "touchstart":
                    i = t.touches[0].pageX, o = t.touches[0].pageY;
                    break;
                case "touchend":
                    var a = t.changedTouches[0].pageX - i,
                        s = t.changedTouches[0].pageY - o;
                    if (Math.abs(a) > Math.abs(s)) n(r, a), Math.abs(a) > 10 && t.preventDefault();
                    else {
                        var l = e(window);
                        e("body,html").animate({
                            scrollTop: l.scrollTop() - s
                        }, 400)
                    }
            }
        }

        function n(e, t) {
            t > 10 ? r.prev() : -10 > t && r.next()
        }
        if (this.options.touchable) {
            this.$element.on("touchstart touchmove touchend", t);
            var i, o, r = this
        }
    }, t.prototype.cycle = function (t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !
            this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(),
            this.$items.index(this.$active)
    }, t.prototype.to = function (t) {
        var n = this,
            i = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid", function () {
            n.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function (t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (
            this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(
            this.interval), this
    }, t.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function (t, n) {
        var i = this.$element.find(".item.active"),
            o = n || i[t](),
            r = this.interval,
            a = "next" == t ? "left" : "right",
            s = "next" == t ? "first" : "last",
            l = this;
        if (!o.length) {
            if (!this.options.wrap) return;
            o = this.$element.find(".item")[s]()
        }
        this.sliding = !0, r && this.pause();
        var c = e.Event("slide.zui.carousel", {
            relatedTarget: o[0],
            direction: a
        });
        if (!o.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one(
                "slid",
                function () {
                    var t = e(l.$indicators.children()[l.getActiveIndex()]);
                    t && t.addClass("active")
                })), e.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                o.addClass(t), o[0].offsetWidth, i.addClass(a), o.addClass(a), i.one(e.support.transition.end,
                    function () {
                        o.removeClass([t, a].join(" ")).addClass("active"), i.removeClass(["active", a].join(
                            " ")), l.sliding = !1, setTimeout(function () {
                            l.$element.trigger("slid")
                        }, 0)
                    }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return r && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var i = e(this),
                o = i.data("zui.carousel"),
                r = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n),
                a = "string" == typeof n ? n : r.slide;
            o || i.data("zui.carousel", o = new t(this, r)), "number" == typeof n ? o.to(n) : a ? o[a]() :
                r.interval && o.pause().cycle(), r.touchable && o.touchable()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = n, this
    }, e(document).on("click.zui.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n, i = e(this),
            o = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = e.extend({}, o.data(), i.data()),
            a = i.attr("data-slide-to");
        a && (r.interval = !1), o.carousel(r), (a = i.attr("data-slide-to")) && o.data("zui.carousel").to(a), t
            .preventDefault()
    }), e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(window.jQuery),
    function (e) {
        "use strict";
        e.zui.imgReady = function () {
            var e = [],
                t = null,
                n = function () {
                    for (var t = 0; t < e.length; t++) e[t].end ? e.splice(t--, 1) : e[t]();
                    !e.length && i()
                },
                i = function () {
                    clearInterval(t), t = null
                };
            return function (i, o, r, a) {
                var s, l, c, d, u, p = new Image;
                return p.src = i, p.complete ? (o.call(p), r && r.call(p), void 0) : (l = p.width, c = p.height, p.onerror =
                    function () {
                        a && a.call(p), s.end = !0, p = p.onload = p.onerror = null
                    }, s = function () {
                    d = p.width, u = p.height, (d !== l || u !== c || d * u > 1024) && (o.call(p), s.end = !
                        0)
                }, s(), p.onload = function () {
                    !s.end && s(), r && r.call(p), p = p.onload = p.onerror = null
                }, s.end || (e.push(s), null === t && (t = setInterval(n, 40))), void 0)
            }
        }()
    }(jQuery),
    function (e, t, n) {
        "use strict";
        if (!e.fn.modalTrigger) throw new Error("modal & modalTrigger requires for lightbox");
        if (!e.zui.imgReady) throw new Error("imgReady requires for lightbox");
        var i = function (t, n) {
            this.$ = e(t), this.options = this.getOptions(n), this.init()
        };
        i.DEFAULTS = {
            modalTeamplate: '<div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img class="lightbox-img" src="{image}" alt="" data-dismiss="modal" /><div class="caption"><div class="content">{caption}<div></div></div>'
        }, i.prototype.getOptions = function (t) {
            var n = "image";
            return t = e.extend({}, i.DEFAULTS, this.$.data(), t), t[n] || (t[n] = this.$.attr("src") || this.$.attr(
                "href") || this.$.find("img").attr("src"), this.$.data(n, t[n])), t
        }, i.prototype.init = function () {
            this.bindEvents()
        }, i.prototype.initGroups = function () {
            var t = this.$.data("groups");
            t || (t = e('[data-toggle="lightbox"][data-group="' + this.options.group + '"], [data-lightbox-group="' +
                this.options.group + '"]'), this.$.data("groups", t), t.each(function (t) {
                e(this).attr("data-group-index", t)
            })), this.groups = t, this.groupIndex = parseInt(this.$.data("group-index"))
        }, i.prototype.setImage = function (e, t) {
            void 0 !== e && (this.options.image = e), void 0 !== t && (this.options.caption = t)
        }, i.prototype.show = function (e, t) {
            this.setImage(e, t), this.$.triggerHandler("click")
        }, i.prototype.bindEvents = function () {
            var i = this.$,
                o = this,
                r = this.options;
            return r.image ? (i.modalTrigger({
                type: "custom",
                name: "lightboxModal",
                position: "center",
                custom: function (i) {
                    o.initGroups();
                    var a = i.modal,
                        s = o.groups,
                        l = o.groupIndex;
                    a.addClass("modal-lightbox").html(r.modalTeamplate.format(r)).toggleClass(
                        "lightbox-with-caption", "string" == typeof r.caption).removeClass(
                        "lightbox-full").data("group-index", l);
                    var c = a.find(".modal-dialog"),
                        d = e(t).width();
                    e.zui.imgReady(r.image, function () {
                        c.css({
                            width: n.min(d, this.width)
                        }), d < this.width + 30 && a.addClass("lightbox-full"), i.ready(200)
                    }), a.find(".prev").toggleClass("show", s.filter('[data-group-index="' + (l - 1) +
                        '"]').length > 0), a.find(".next").toggleClass("show", s.filter(
                        '[data-group-index="' + (l + 1) + '"]').length > 0), a.find(".controller").click(
                        function () {
                            var o = e(this),
                                r = a.data("group-index") + (o.hasClass("prev") ? -1 : 1),
                                l = s.filter('[data-group-index="' + r + '"]');
                            if (l.length) {
                                var u = l.data("image"),
                                    p = l.data("caption");
                                a.addClass("modal-loading").data("group-index", r).toggleClass(
                                    "lightbox-with-caption", "string" == typeof p).removeClass(
                                    "lightbox-full"), a.find(".lightbox-img").attr("src", u), a
                                    .find(".caption > .content").text(p), d = e(t).width(), e.zui.imgReady(
                                    u,
                                    function () {
                                        c.css({
                                            width: n.min(d, this.width)
                                        }), d < this.width + 30 && a.addClass(
                                            "lightbox-full"), i.ready()
                                    })
                            }
                            return a.find(".prev").toggleClass("show", s.filter(
                                '[data-group-index="' + (r - 1) + '"]').length > 0), a.find(
                                ".next").toggleClass("show", s.filter('[data-group-index="' + (
                                r + 1) + '"]').length > 0), !1
                        })
                }
            }), void 0) : !1
        }, e.fn.lightbox = function (t) {
            var n = "group" + (new Date).getTime();
            return this.each(function () {
                var o = e(this),
                    r = "object" == typeof t && t;
                "object" == typeof r && r.group ? o.attr("data-lightbox-group", r.group) : o.data("group") ? o.attr(
                    "data-lightbox-group", o.data("group")) : o.attr("data-lightbox-group", n), o.data(
                    "group", o.data("lightbox-group"));
                var a = o.data("zui.lightbox");
                a || o.data("zui.lightbox", a = new i(this, r)), "string" == typeof t && a[t]()
            })
        }, e.fn.lightbox.Constructor = i, e(function () {
            e('[data-toggle="lightbox"]').lightbox()
        })
    }(jQuery, window, Math),
    function (e, t, n) {
        "use strict";
        var i = 0,
            o =
                '<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>',
            r = {
                type: "default",
                placement: "top",
                time: 4e3,
                parent: "body",
                icon: null,
                close: !0,
                fade: !0,
                scale: !0
            },
            a = {},
            s = function (t, s) {
                e.isPlainObject(t) && (s = t, t = s.message);
                var l = this;
                s = l.options = e.extend({}, r, s), l.id = s.id || i++;
                var c = a[l.id];
                c && c.destroy(), a[l.id] = l, l.message = (s.icon ? '<i class="icon-' + s.icon + ' icon"></i> ' : "") + t,
                    l.$ = e(o.format(s)).toggleClass("fade", s.fade).toggleClass("scale", s.scale).attr("id", "messager-" +
                        l.id), s.cssClass && l.$.addClass(s.cssClass);
                var d = !1,
                    u = l.$.find(".messager-actions"),
                    p = function (t) {
                        var i = e('<button type="button" class="action action-' + t.name + '"/>');
                        "close" === t.name && i.addClass("close"), t.html !== n && i.html(t.html), t.icon !== n && i.append(
                            '<i class="action-icon icon-' + t.icon + '"/>'), t.text !== n && i.append(
                            '<span class="action-text">' + t.text + "</span>"), t.tooltip !== n && i.attr("title", t.tooltip)
                            .tooltip(), i.data("action", t), u.append(i)
                    };
                s.actions && e.each(s.actions, function (e, t) {
                    t.name === n && (t.name = e), "close" == t.name && (d = !0), p(t)
                }), !d && s.close && p({
                    name: "close",
                    html: "&times;"
                }), l.$.on("click", ".action", function (t) {
                    var n, i = e(this).data("action");
                    s.onAction && (n = s.onAction.call(this, i.name, i, l), n === !1) || e.isFunction(i.action) &&
                    (n = i.action.call(this, l), n === !1) || (l.hide(), t.stopPropagation())
                }), l.$.on("click", function () {
                    if (s.onAction) {
                        var e = s.onAction.call(this, "content", null, l);
                        e === !0 && l.hide()
                    }
                });
                var h = l.$.find(".messager-content").html(l.message);
                s.contentClass && h.addClass(s.contentClass), l.$.data("zui.messager", l), s.show && l.message !== n && l.show()
            };
        s.prototype.update = function (t, n) {
            var i = this,
                o = i.options;
            i.$.removeClass("messager-" + o.type), n && (o = e.extend(o, n)), i.$.addClass("messager-" + o.type), t &&
            (i.message = (o.icon ? '<i class="icon-' + o.icon + ' icon"></i> ' : "") + t, i.$.find(
                ".messager-content").html(i.message))
        }, s.prototype.show = function (i, o) {
            var r = this,
                a = this.options;
            if (e.isFunction(i)) {
                var s = o;
                o = i, s !== n && (i = s)
            }
            if (r.isShow) return r.hide(function () {
                r.show(i, o)
            }), void 0;
            r.hiding && (clearTimeout(r.hiding), r.hiding = null), r.update(i);
            var l = a.placement,
                c = e(a.parent),
                d = c.children(".messagers-holder." + l);
            if (d.length || (d = e("<div/>").attr("class", "messagers-holder " + l).appendTo(c)), d.append(r.$),
            "center" === l) {
                var u = e(t).height() - d.height();
                d.css("top", Math.max(-u, u / 2))
            }
            return r.$.show().addClass("in"), a.time && (r.hiding = setTimeout(function () {
                r.hide()
            }, a.time)), r.isShow = !0, o && o(), r
        }, s.prototype.hide = function (e, t) {
            e === !0 && (t = !0, e = null);
            var n = this;
            if (n.$.hasClass("in")) {
                n.$.removeClass("in");
                var i = function () {
                    var t = n.$.parent();
                    n.$.detach(), t.children().length || t.remove(), e && e(!0)
                };
                t ? i() : setTimeout(i, 200)
            } else e && e(!1);
            n.isShow = !1
        }, s.prototype.destroy = function () {
            var e = this;
            e.hide(function () {
                e.$.remove(), e.$ = null
            }, !0), delete a[e.id]
        }, s.all = a, s.DEFAULTS = r;
        var l = function () {
                e(".messager").each(function () {
                    var t = e(this).data("zui.messager");
                    t && t.hide && t.hide(!0)
                })
            },
            c = function (t, i) {
                "string" == typeof i && (i = {
                    type: i
                }), i = e.extend({}, i), i.id === n && l();
                var o = a[i.id] || new s(t, i);
                return o.show(), o
            },
            d = function (e) {
                return "string" == typeof e ? {
                    placement: e
                } : e
            },
            u = {
                show: c,
                hide: l
            };
        e.each({
            primary: 0,
            success: "ok-sign",
            info: "info-sign",
            warning: "warning-sign",
            danger: "exclamation-sign",
            important: 0,
            special: 0
        }, function (t, n) {
            u[t] = function (i, o) {
                return c(i, e.extend({
                    type: t,
                    icon: n || null
                }, d(o)))
            }
        }), e.zui({
            Messager: s,
            showMessager: c,
            messager: u
        })
    }(jQuery, window, void 0),
    function (e, t, n, i) {
        "use strict";

        function o(e) {
            if (e = e.toLowerCase(), e && d.test(e)) {
                var t;
                if (4 === e.length) {
                    var n = "#";
                    for (t = 1; 4 > t; t += 1) n += e.slice(t, t + 1).concat(e.slice(t, t + 1));
                    e = n
                }
                var i = [];
                for (t = 1; 7 > t; t += 2) i.push(b("0x" + e.slice(t, t + 2)));
                return {
                    r: i[0],
                    g: i[1],
                    b: i[2],
                    a: 1
                }
            }
            throw new Error("Wrong hex string! (hex: " + e + ")")
        }

        function r(t) {
            return typeof t === f && ("transparent" === t.toLowerCase() || m[t.toLowerCase()] || d.test(e.trim(t.toLowerCase())))
        }

        function a(e) {
            function t(e) {
                return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 1 > 6 * e ? s + 6 * (a - s) * e : 1 > 2 * e ? a : 2 > 3 * e ?
                    s + 6 * (a - s) * (2 / 3 - e) : s
            }
            var n = e.h,
                i = e.s,
                o = e.l,
                r = e.a;
            n = c(n) % p / p, i = l(c(i)), o = l(c(o)), r = l(c(r));
            var a = .5 >= o ? o * (i + 1) : o + i - o * i,
                s = 2 * o - a,
                d = {
                    r: t(n + 1 / 3) * u,
                    g: t(n) * u,
                    b: t(n - 1 / 3) * u,
                    a: r
                };
            return d
        }

        function s(e, n, i) {
            return v(i) && (i = 0), v(n) && (n = u), t.min(t.max(e, i), n)
        }

        function l(e, t) {
            return s(e, t)
        }

        function c(e) {
            return "number" == typeof e ? e : parseFloat(e)
        }
        var d = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
            u = 255,
            p = 360,
            h = 100,
            f = "string",
            g = "object",
            m = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            v = function (e) {
                return e === i
            },
            y = function (e) {
                return !v(e)
            },
            b = function (e) {
                return parseInt(e)
            },
            x = function (e) {
                return b(l(c(e), u))
            },
            $ = function (e, t, n, i) {
                var r = this;
                if (r.r = r.g = r.b = 0, r.a = 1, y(i) && (r.a = l(c(i), 1)), y(e) && y(t) && y(n)) r.r = x(e), r.g = x(t),
                    r.b = x(n);
                else if (y(e)) {
                    var s = typeof e;
                    if (s == f)
                        if (e = e.toLowerCase(), "transparent" === e) r.a = 0;
                        else if (m[e]) r.rgb(o(m[e]));
                        else if (0 === e.indexOf("rgb")) {
                            var d = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(",", 4);
                            r.rgb({
                                r: d[0],
                                g: d[1],
                                b: d[2],
                                a: d[3]
                            })
                        } else r.rgb(o(e));
                    else if ("number" == s && v(t)) r.r = r.g = r.b = x(e);
                    else if (s == g && y(e.r)) r.r = x(e.r), y(e.g) && (r.g = x(e.g)), y(e.b) && (r.b = x(e.b)), y(e.a) &&
                    (r.a = l(c(e.a), 1));
                    else if (s == g && y(e.h)) {
                        var u = {
                            h: l(c(e.h), p),
                            s: 1,
                            l: 1,
                            a: 1
                        };
                        y(e.s) && (u.s = l(c(e.s), 1)), y(e.l) && (u.l = l(c(e.l), 1)), y(e.a) && (u.a = l(c(e.a), 1)), r.rgb(
                            a(u))
                    }
                }
            };
        $.prototype.rgb = function (e) {
            var t = this;
            if (y(e)) {
                if (typeof e == g) y(e.r) && (t.r = x(e.r)), y(e.g) && (t.g = x(e.g)), y(e.b) && (t.b = x(e.b)), y(e.a) &&
                (t.a = l(c(e.a), 1));
                else {
                    var n = b(c(e));
                    t.r = n, t.g = n, t.b = n
                }
                return t
            }
            return {
                r: t.r,
                g: t.g,
                b: t.b,
                a: t.a
            }
        }, $.prototype.hue = function (e) {
            var t = this,
                n = t.toHsl();
            return v(e) ? n.h : (n.h = l(c(e), p), t.rgb(a(n)), t)
        }, $.prototype.darken = function (e) {
            var t = this,
                n = t.toHsl();
            return n.l -= e / h, n.l = l(n.l, 1), t.rgb(a(n)), t
        }, $.prototype.clone = function () {
            var e = this;
            return new $(e.r, e.g, e.b, e.a)
        }, $.prototype.lighten = function (e) {
            return this.darken(-e)
        }, $.prototype.fade = function (e) {
            return this.a = l(e / h, 1), this
        }, $.prototype.spin = function (e) {
            var t = this.toHsl(),
                n = (t.h + e) % p;
            return t.h = 0 > n ? p + n : n, this.rgb(a(t))
        }, $.prototype.toHsl = function () {
            var e, n, i = this,
                o = i.r / u,
                r = i.g / u,
                a = i.b / u,
                s = i.a,
                l = t.max(o, r, a),
                c = t.min(o, r, a),
                d = (l + c) / 2,
                h = l - c;
            if (l === c) e = n = 0;
            else {
                switch (n = d > .5 ? h / (2 - l - c) : h / (l + c), l) {
                    case o:
                        e = (r - a) / h + (a > r ? 6 : 0);
                        break;
                    case r:
                        e = (a - o) / h + 2;
                        break;
                    case a:
                        e = (o - r) / h + 4
                }
                e /= 6
            }
            return {
                h: e * p,
                s: n,
                l: d,
                a: s
            }
        }, $.prototype.luma = function () {
            var e = this.r / u,
                n = this.g / u,
                i = this.b / u;
            return e = .03928 >= e ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4), n = .03928 >= n ? n / 12.92 : t.pow((n +
                .055) / 1.055, 2.4), i = .03928 >= i ? i / 12.92 : t.pow((i + .055) / 1.055, 2.4), .2126 * e +
            .7152 * n + .0722 * i
        }, $.prototype.saturate = function (e) {
            var t = this.toHsl();
            return t.s += e / h, t.s = l(t.s), this.rgb(a(t))
        }, $.prototype.desaturate = function (e) {
            return this.saturate(-e)
        }, $.prototype.contrast = function (e, t, n) {
            if (t = v(t) ? new $(u, u, u, 1) : new $(t), e = v(e) ? new $(0, 0, 0, 1) : new $(e), e.luma() > t.luma()) {
                var i = t;
                t = e, e = i
            }
            return this.a < .5 ? e : (n = v(n) ? .43 : c(n), this.luma() < n ? t : e)
        }, $.prototype.hexStr = function () {
            var e = this.r.toString(16),
                t = this.g.toString(16),
                n = this.b.toString(16);
            return 1 == e.length && (e = "0" + e), 1 == t.length && (t = "0" + t), 1 == n.length && (n = "0" + n), "#" +
            e + t + n
        }, $.prototype.toCssStr = function () {
            var e = this;
            return e.a > 0 ? e.a < 1 ? "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")" : e.hexStr() :
                "transparent"
        }, $.isColor = r, $.names = m, $.get = function (e) {
            return new $(e)
        }, e.zui({
            Color: $
        })
    }(jQuery, Math, window, void 0),
    function (e) {
        "use strict";

        function t(t, n) {
            if (t === !1) return t;
            if (!t) return n;
            t === !0 ? t = {
                add: !0,
                "delete": !0,
                edit: !0,
                sort: !0
            } : "string" == typeof t && (t = t.split(","));
            var i;
            return e.isArray(t) && (i = {}, e.each(t, function (t, n) {
                e.isPlainObject(n) ? i[n.action] = n : i[n] = !0
            }), t = i), e.isPlainObject(t) && (i = {}, e.each(t, function (t, n) {
                i[t] = n ? e.extend({
                    type: t
                }, a[t], e.isPlainObject(n) ? n : null) : !1
            }), t = i), n ? e.extend(!0, {}, n, t) : t
        }

        function n(t, n, i) {
            return n = n || t.type, e(i || t.template).addClass("tree-action").attr(e.extend({
                "data-type": n,
                title: t.title || ""
            }, t.attr)).data("action", t)
        }
        var i = "zui.tree",
            o = 0,
            r = function (t, n) {
                this.name = i, this.$ = e(t), this.getOptions(n), this._init()
            },
            a = {
                sort: {
                    template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'
                },
                add: {
                    template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'
                },
                edit: {
                    template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'
                },
                "delete": {
                    template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'
                }
            };
        r.DEFAULTS = {
            animate: null,
            initialState: "normal",
            toggleTemplate: '<i class="list-toggle icon"></i>'
        }, r.prototype.add = function (t, n, i, o, r) {
            var a, s = e(t),
                l = this.options;
            if (s.is("li") ? (a = s.children("ul"), a.length || (a = e("<ul/>"), s.append(a), this._initList(a, s))) :
                a = s, a) {
                var c = this;
                e.isArray(n) || (n = [n]), e.each(n, function (t, n) {
                    var i = e("<li/>").data(n).appendTo(a);
                    void 0 !== n.id && i.attr("data-id", n.id);
                    var o = l.itemWrapper ? e(l.itemWrapper === !0 ? '<div class="tree-item-wrapper"/>' : l.itemWrapper)
                        .appendTo(i) : i;
                    if (n.html) o.html(n.html);
                    else if (e.isFunction(c.options.itemCreator)) {
                        var r = c.options.itemCreator(i, n);
                        r !== !0 && r !== !1 && o.html(r)
                    } else n.url ? o.append(e("<a/>", {
                        href: n.url
                    }).text(n.title || n.name)) : o.append(e("<span/>").text(n.title || n.name));
                    c._initItem(i, n.idx || t, a, n), n.children && n.children.length && c.add(i, n.children)
                }), this._initList(a), i && !a.hasClass("tree") && c.expand(a.parent("li"), o, r)
            }
        }, r.prototype.reload = function (t) {
            var n = this;
            t && (n.$.empty(), n.add(n.$, t)), n.isPreserve && n.store.time && n.$.find("li:not(.tree-action-item)").each(
                function () {
                    var t = e(this);
                    n[n.store[t.data("id")] ? "expand" : "collapse"](t, !0, !0)
                })
        }, r.prototype._initList = function (i, o, r, a) {
            var s = this;
            i.hasClass("tree") ? (r = 0, o = null) : (o = (o || i.closest("li")).addClass("has-list"), o.find(
                ".list-toggle").length || o.prepend(this.options.toggleTemplate), r = r || o.data("idx")), i.removeClass(
                "has-active-item");
            var l = i.attr("data-idx", r || 0).children("li:not(.tree-action-item)").each(function (t) {
                s._initItem(e(this), t + 1, i)
            });
            1 !== l.length || l.find("ul").length || l.addClass("tree-single-item"), a = a || (o ? o.data() : null);
            var c = t(a ? a.actions : null, this.actions);
            if (c) {
                if (c.add && c.add.templateInList !== !1) {
                    var d = i.children("li.tree-action-item");
                    d.length ? d.detach().appendTo(i) : e('<li class="tree-action-item"/>').append(n(c.add, "add", c.add
                        .templateInList)).appendTo(i)
                }
                c.sort && i.sortable(e.extend({
                    dragCssClass: "tree-drag-holder",
                    trigger: ".sort-handler",
                    selector: "li:not(.tree-action-item)",
                    finish: function (e) {
                        s.callEvent("action", {
                            action: c.sort,
                            $list: i,
                            target: e.target,
                            item: a
                        })
                    }
                }, c.sort.options, e.isPlainObject(this.options.sortable) ? this.options.sortable : null))
            }
            o && (o.hasClass("open") || a && a.open) && o.addClass("open in")
        }, r.prototype._initItem = function (i, o, r, a) {
            if (void 0 === o) {
                var s = i.prev("li");
                o = s.length ? s.data("idx") + 1 : 1
            }
            if (r = r || i.closest("ul"), i.attr("data-idx", o).removeClass("tree-single-item"), !i.data("id")) {
                var l = o;
                r.hasClass("tree") || (l = r.parent("li").data("id") + "-" + l), i.attr("data-id", l)
            }
            i.hasClass("active") && r.parent("li").addClass("has-active-item"), a = a || i.data();
            var c = t(a.actions, this.actions);
            if (c) {
                var d = i.find(".tree-actions");
                d.length || (d = e('<div class="tree-actions"/>').appendTo(this.options.itemWrapper ? i.find(
                    ".tree-item-wrapper") : i), e.each(c, function (e, t) {
                    t && d.append(n(t, e))
                }))
            }
            var u = i.children("ul");
            u.length && this._initList(u, i, o, a)
        }, r.prototype._init = function () {
            var n = this.options,
                r = this;
            this.actions = t(n.actions), this.$.addClass("tree"), n.animate && this.$.addClass("tree-animate"), this._initList(
                this.$);
            var a = n.initialState,
                s = e.zui && e.zui.store && e.zui.store.enable;
            s && (this.selector = i + "::" + (n.name || "") + "#" + (this.$.attr("id") || o++), this.store = e.zui.store[
                n.name ? "get" : "pageGet"](this.selector, {})), "preserve" === a && (s ? this.isPreserve = !0 :
                this.options.initialState = a = "normal"), this.reload(n.data), s && (this.isPreserve = !0),
                "expand" === a ? this.expand() : "collapse" === a && this.collapse(), this.$.on("click",
                '.list-toggle,a[href="#"],.tree-toggle',
                function (t) {
                    var n = e(this),
                        i = n.parent("li");
                    r.callEvent("hit", {
                        target: i,
                        item: i.data()
                    }), r.toggle(i), n.is("a") && t.preventDefault()
                }).on("click", ".tree-action", function () {
                var t = e(this),
                    n = t.data();
                if (n.action && (n = n.action), "sort" !== n.type) {
                    var i = t.closest("li:not(.tree-action-item)");
                    r.callEvent("action", {
                        action: n,
                        target: this,
                        $item: i,
                        item: i.data()
                    })
                }
            })
        }, r.prototype.preserve = function (t, n, i) {
            if (this.isPreserve)
                if (t) n = n || t.data("id"), i = void 0 === i ? t.hasClass("open") : !1, i ? this.store[n] = i :
                    delete this.store[n], this.store.time = (new Date).getTime(), e.zui.store[this.options.name ? "set" :
                    "pageSet"](this.selector, this.store);
                else {
                    var o = this;
                    this.store = {}, this.$.find("li").each(function () {
                        o.preserve(e(this))
                    })
                }
        }, r.prototype.expand = function (e, t, n) {
            e ? (e.addClass("open"), !t && this.options.animate ? setTimeout(function () {
                e.addClass("in")
            }, 10) : e.addClass("in")) : e = this.$.find("li.has-list").addClass("open in"), n || this.preserve(e),
                this.callEvent("expand", e, this)
        }, r.prototype.show = function (t, n, i) {
            var o = this;
            t.each(function () {
                var t = e(this);
                if (o.expand(t, n, i), t)
                    for (var r = t.parent("ul"); r && r.length && !r.hasClass("tree");) {
                        var a = r.parent("li");
                        a.length ? (o.expand(a, n, i), r = a.parent("ul")) : r = !1
                    }
            })
        }, r.prototype.collapse = function (e, t, n) {
            e ? !t && this.options.animate ? (e.removeClass("in"), setTimeout(function () {
                e.removeClass("open")
            }, 300)) : e.removeClass("open in") : e = this.$.find("li.has-list").removeClass("open in"), n || this.preserve(
                e), this.callEvent("collapse", e, this)
        }, r.prototype.toggle = function (e) {
            var t = e && e.hasClass("open") || e === !1 || void 0 === e && this.$.find("li.has-list.open").length;
            this[t ? "collapse" : "expand"](e)
        }, r.prototype.getOptions = function (t) {
            this.options = e.extend({}, r.DEFAULTS, this.$.data(), t), null === this.options.animate && this.$.hasClass(
                "tree-animate") && (this.options.animate = !0)
        }, r.prototype.toData = function (t, n) {
            e.isFunction(t) && (n = t, t = null), t = t || this.$;
            var i = this;
            return t.children("li:not(.tree-action-item)").map(function () {
                var t = e(this),
                    o = t.data();
                delete o["zui.droppable"];
                var r = t.children("ul");
                return r.length && (o.children = i.toData(r)), e.isFunction(n) ? n(o, t) : o
            }).get()
        }, r.prototype.callEvent = function (t, n) {
            var i;
            return e.isFunction(this.options[t]) && (i = this.options[t](n, this)), this.$.trigger(e.Event(t + "." +
                this.name, n)), i
        }, e.fn.tree = function (t, n) {
            return this.each(function () {
                var o = e(this),
                    a = o.data(i),
                    s = "object" == typeof t && t;
                a || o.data(i, a = new r(this, s)), "string" == typeof t && a[t](n)
            })
        }, e.fn.tree.Constructor = r, e(function () {
            e('[data-ride="tree"]').tree()
        })
    }(jQuery), ! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define &&
    define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function () {
    return function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: i
            })
        }, t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function (e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
                for (var o in e) t.d(i, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function (e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = "data-clipboard-" + e;
            return t.hasAttribute(n) ? t.getAttribute(n) : void 0
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                    "symbol" : typeof e
            },
            a = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !
                            0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = i(n(1)),
            l = i(n(3)),
            c = i(n(4)),
            d = function () {
                function e(t, n) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function (e, t) {
                        if (!e) throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                    return i.resolveOptions(n), i.listenClick(t), i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError(
                        "Super expression must either be null or a function, not " + typeof t
                    );
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ =
                        t)
                }(e, l.default), a(e, [{
                    key: "resolveOptions",
                    value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ?
                            arguments[0] : {};
                        this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                            this.target = "function" == typeof e.target ? e.target :
                                this.defaultTarget, this.text = "function" == typeof e.text ?
                            e.text : this.defaultText, this.container = "object" === r(
                            e.container) ? e.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function (e) {
                        var t = this;
                        this.listener = c.default(e, "click", function (e) {
                            return t.onClick(e)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function (e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction =
                            new s.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                    }
                }, {
                    key: "defaultAction",
                    value: function (e) {
                        return o("action", e)
                    }
                }, {
                    key: "defaultTarget",
                    value: function (e) {
                        var t = o("target", e);
                        return t ? document.querySelector(t) : void 0
                    }
                }, {
                    key: "defaultText",
                    value: function (e) {
                        return o("text", e)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction
                            .destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported",
                    value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ?
                            arguments[0] : ["copy", "cut"],
                            t = "string" == typeof e ? [e] : e,
                            n = !!document.queryCommandSupported;
                        return t.forEach(function (e) {
                            n = n && !!document.queryCommandSupported(e)
                        }), n
                    }
                }]), e
            }();
        e.exports = d
    }, function (e, t, n) {
        "use strict";
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ?
                    "symbol" : typeof e
            },
            r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !
                            0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(2),
            s = (i = a) && i.__esModule ? i : {
                "default": i
            },
            l = function () {
                function e(t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.resolveOptions(t), this.initSelection()
                }
                return r(e, [{
                    key: "resolveOptions",
                    value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ?
                            arguments[0] : {};
                        this.action = e.action, this.container = e.container, this.emitter =
                            e.emitter, this.target = e.target, this.text = e.text, this
                            .trigger = e.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection",
                    value: function () {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake",
                    value: function () {
                        var e = this,
                            t = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function () {
                            return e.removeFake()
                        }, this.fakeHandler = this.container.addEventListener(
                            "click", this.fakeHandlerCallback) || !0, this.fakeElem =
                            document.createElement("textarea"), this.fakeElem.style.fontSize =
                            "12pt", this.fakeElem.style.border = "0", this.fakeElem.style
                            .padding = "0", this.fakeElem.style.margin = "0", this.fakeElem
                            .style.position = "absolute", this.fakeElem.style[t ?
                            "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute(
                            "readonly", ""), this.fakeElem.value = this.text, this.container
                            .appendChild(this.fakeElem), this.selectedText = s.default(
                            this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake",
                    value: function () {
                        this.fakeHandler && (this.container.removeEventListener("click",
                            this.fakeHandlerCallback), this.fakeHandler = null,
                            this.fakeHandlerCallback = null), this.fakeElem && (
                            this.container.removeChild(this.fakeElem), this.fakeElem =
                                null)
                    }
                }, {
                    key: "selectTarget",
                    value: function () {
                        this.selectedText = s.default(this.target), this.copyText()
                    }
                }, {
                    key: "copyText",
                    value: function () {
                        var e = void 0;
                        try {
                            e = document.execCommand(this.action)
                        } catch (t) {
                            e = !1
                        }
                        this.handleResult(e)
                    }
                }, {
                    key: "handleResult",
                    value: function (e) {
                        this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection",
                    value: function () {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.removeFake()
                    }
                }, {
                    key: "action",
                    set: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ?
                            arguments[0] : "copy";
                        if (this._action = e, "copy" !== this._action && "cut" !== this
                            ._action) throw new Error(
                            'Invalid "action" value, use either "copy" or "cut"'
                        )
                    },
                    get: function () {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function (e) {
                        if (void 0 !== e) {
                            if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) ||
                                1 !== e.nodeType) throw new Error(
                                'Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && e.hasAttribute("disabled"))
                                throw new Error(
                                    'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                );
                            if ("cut" === this.action && (e.hasAttribute("readonly") ||
                                e.hasAttribute("disabled"))) throw new Error(
                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                            );
                            this._target = e
                        }
                    },
                    get: function () {
                        return this._target
                    }
                }]), e
            }();
        e.exports = l
    }, function (e) {
        e.exports = function (e) {
            var t;
            if ("SELECT" === e.nodeName) e.focus(), t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length),
                n || e.removeAttribute("readonly"), t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var i = window.getSelection(),
                    o = document.createRange();
                o.selectNodeContents(e), i.removeAllRanges(), i.addRange(o), t = i.toString()
            }
            return t
        }
    }, function (e) {
        function t() {}
        t.prototype = {
            on: function (e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function (e, t, n) {
                function i() {
                    o.off(e, i), t.apply(n, arguments)
                }
                var o = this;
                return i._ = t, this.on(e, i, n)
            },
            emit: function (e) {
                for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] ||
                    []).slice(), i = 0, o = n.length; o > i; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function (e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    o = [];
                if (i && t)
                    for (var r = 0, a = i.length; a > r; r++) i[r].fn !== t && i[r].fn._ !== t &&
                    o.push(i[r]);
                return o.length ? n[e] = o : delete n[e], this
            }
        }, e.exports = t
    }, function (e, t, n) {
        var i = n(5),
            o = n(6);
        e.exports = function (e, t, n) {
            if (!e && !t && !n) throw new Error("Missing required arguments");
            if (!i.string(t)) throw new TypeError("Second argument must be a String");
            if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
            if (i.node(e)) return p = t, h = n, (u = e).addEventListener(p, h), {
                destroy: function () {
                    u.removeEventListener(p, h)
                }
            };
            if (i.nodeList(e)) return l = e, c = t, d = n, Array.prototype.forEach.call(l, function (
                e) {
                e.addEventListener(c, d)
            }), {
                destroy: function () {
                    Array.prototype.forEach.call(l, function (e) {
                        e.removeEventListener(c, d)
                    })
                }
            };
            if (i.string(e)) return r = e, a = t, s = n, o(document.body, r, a, s);
            throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var r, a, s, l, c, d, u, p, h
        }
    }, function (e, t) {
        t.node = function (e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }, t.nodeList = function (e) {
            var n = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) &&
                "length" in e && (0 === e.length || t.node(e[0]))
        }, t.string = function (e) {
            return "string" == typeof e || e instanceof String
        }, t.fn = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }, function (e, t, n) {
        function i(e, t, n, i, r) {
            var a = function (e, t, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
                }
            }.apply(this, arguments);
            return e.addEventListener(n, a, r), {
                destroy: function () {
                    e.removeEventListener(n, a, r)
                }
            }
        }
        var o = n(7);
        e.exports = function (e, t, n, o, r) {
            return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" ==
            typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e &&
            (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
                return i(e, t, n, o, r)
            }))
        }
    }, function (e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var t = Element.prototype;
            t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector ||
                t.webkitMatchesSelector
        }
        e.exports = function (e, t) {
            for (; e && 9 !== e.nodeType;) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode
            }
        }
    }])
}),
    function () {
        var e, t, n, i, o, r = {}.hasOwnProperty,
            a = function (e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) r.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            s = {
                zh_cn: {
                    no_results_text: "没有找到"
                },
                zh_tw: {
                    no_results_text: "沒有找到"
                },
                en: {
                    no_results_text: "No results match"
                }
            };
        i = function () {
            function t() {
                this.options_index = 0, this.parsed = []
            }
            return t.prototype.add_node = function (e) {
                return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
            }, t.prototype.add_group = function (t) {
                var n, i, o, r, a, s;
                for (n = this.parsed.length, this.parsed.push({
                    array_index: n,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    children: 0,
                    disabled: t.disabled,
                    title: t.title,
                    search_keys: e.trim(t.getAttribute("data-keys") || "").replace(/,/g, " ")
                }), a = t.childNodes, s = [], o = 0, r = a.length; r > o; o++) i = a[o], s.push(this.add_option(
                    i, n, t.disabled));
                return s
            }, t.prototype.add_option = function (t, n, i) {
                return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != n && (this.parsed[n].children +=
                    1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    title: t.title,
                    html: t.innerHTML,
                    selected: t.selected,
                    disabled: i === !0 ? i : t.disabled,
                    group_array_index: n,
                    classes: t.className,
                    style: t.style.cssText,
                    data: t.getAttribute("data-data"),
                    search_keys: (e.trim(t.getAttribute("data-keys") || "") + t.value).replace(/,/,
                        " ")
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, t.prototype.escapeExpression = function (e) {
                var t, n;
                return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function (e) {
                    return t[e] || "&amp;"
                })) : e
            }, t
        }(), i.select_to_array = function (e) {
            var t, n, o, r, a;
            for (n = new i, a = e.childNodes, o = 0, r = a.length; r > o; o++) t = a[o], n.add_node(t);
            return n.parsed
        }, t = function () {
            function t(n, i) {
                this.form_field = n, this.options = null != i ? i : {}, t.browser_is_supported() && (this.lang = s[this
                    .options.lang || (e.zui.clientLang ? e.zui.clientLang() : "zh_cn")], this.is_multiple =
                    this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(),
                    this.set_up_html(), this.register_observers())
            }
            return t.prototype.set_default_values = function () {
                var e = this;
                this.click_test_action = function (t) {
                    return e.test_active_click(t)
                }, this.activate_action = function (t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted =
                    null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field
                    .options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect,
                    this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search =
                    this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search ||
                    this.options.enable_split_word_search, this.group_search = null == this.options.group_search ||
                    this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete =
                    null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options =
                    this.options.max_selected_options || 1 / 0, this.drop_direction = this.options.drop_direction ||
                    "auto", this.middle_highlight = this.options.middle_highlight, this.compact_search = this.options
                    .compact_search || !1, this.inherit_select_classes = this.options.inherit_select_classes || !1,
                    this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options;
                var t = this.options.max_drop_width;
                return "string" == typeof t && t.indexOf("px") === t.length - 2 && (t = parseInt(t.substring(0, t.length -
                    2))), this.max_drop_width = t, this.display_disabled_options = null == this.options.display_disabled_options ||
                    this.options.display_disabled_options
            }, t.prototype.set_default_text = function () {
                return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute(
                    "data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options
                    .placeholder_text || t.default_multiple_text : this.options.placeholder_text_single || this.options
                    .placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute(
                    "data-no_results_text") || this.options.no_results_text || this.lang.no_results_text || t.default_no_result_text
            }, t.prototype.mouse_enter = function () {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function () {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function () {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function () {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function () {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                    return e.blur_test()
                }, 100))
            }, t.prototype.results_option_build = function (e) {
                var t, n, i, o, r;
                for (t = "", r = this.results_data, i = 0, o = r.length; o > i; i++) n = r[i], t += n.group ? this.result_add_group(
                    n) : this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ?
                        this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text)
                );
                return t
            }, t.prototype.result_add_option = function (e) {
                var t, n;
                return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected &&
                this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple ||
                t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index &&
                t.push("group-option"), "" !== e.classes && t.push(e.classes), n = document.createElement(
                    "li"), n.className = t.join(" "), n.style.cssText = e.style, n.title = e.title, n.setAttribute(
                    "data-option-array-index", e.array_index), n.setAttribute("data-data", e.data), n.innerHTML =
                    e.search_text, this.outerHTML(n)) : ""
            }, t.prototype.result_add_group = function (e) {
                var t;
                return (e.search_match || e.group_match) && e.active_options > 0 ? (t = document.createElement("li"),
                    t.className = "group-result", t.title = e.title, t.innerHTML = e.search_text, this.outerHTML(
                    t)) : ""
            }, t.prototype.results_update_field = function () {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(),
                    this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, t.prototype.reset_single_select_options = function () {
                var e, t, n, i, o;
                for (i = this.results_data, o = [], t = 0, n = i.length; n > t; t++) e = i[t], e.selected ? o.push(
                    e.selected = !1) : o.push(void 0);
                return o
            }, t.prototype.results_toggle = function () {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function () {
                return this.results_showing ? this.winnow_results(1) : this.results_show()
            }, t.prototype.winnow_results = function (e) {
                var t, n, i, o, r, a, s, l, c, d, u, p, h;
                for (this.no_results_clear(), r = 0, s = this.get_search_text(), t = s.replace(
                    /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), o = this.search_contains ? "" : "^", i = new RegExp(o +
                    t, "i"), d = new RegExp(t, "i"), h = this.results_data, u = 0, p = h.length; p > u; u++) n =
                    h[u], n.search_match = !1, a = null, this.include_option_in_results(n) && (n.group && (n.group_match = !
                    1, n.active_options = 0), null != n.group_array_index && this.results_data[n.group_array_index] &&
                (a = this.results_data[n.group_array_index], 0 === a.active_options && a.search_match && (r +=
                    1), a.active_options += 1), n.group && !this.group_search || (n.search_text = n.group ?
                    n.label : n.html, n.search_keys_match = this.search_string_match(n.search_keys, i), n.search_text_match =
                    this.search_string_match(n.search_text, i), n.search_match = n.search_text_match || n.search_keys_match,
                n.search_match && !n.group && (r += 1), n.search_match ? (n.search_text_match && n.search_text
                    .length ? (l = n.search_text.search(d), c = n.search_text.substr(0, l + s.length) +
                    "</em>" + n.search_text.substr(l + s.length), n.search_text = c.substr(0, l) +
                    "<em>" + c.substr(l)) : n.search_keys_match && n.search_keys.length && (l = n.search_keys
                    .search(d), c = n.search_keys.substr(0, l + s.length) + "</em>" + n.search_keys
                    .substr(l + s.length), n.search_text += '&nbsp; <small style="opacity: 0.7">' +
                    c.substr(0, l) + "<em>" + c.substr(l) + "</small>"), null != a && (a.group_match = !
                    0)) : null != n.group_array_index && this.results_data[n.group_array_index].search_match &&
                    (n.search_match = !0)));
                return this.result_clear_highlight(), 1 > r && s.length ? (this.update_results_content(""), this.no_results(
                    s)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight(
                    e))
            }, t.prototype.search_string_match = function (e, t) {
                var n, i, o, r;
                if (t.test(e)) return !0;
                if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(
                    /\[|\]/g, "").split(" "), i.length))
                    for (o = 0, r = i.length; r > o; o++)
                        if (n = i[o], t.test(n)) return !0
            }, t.prototype.choices_count = function () {
                var e, t, n, i;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; n > t; t++) e =
                    i[t], e.selected && "" != e.value && (this.selected_option_count += 1);
                return this.selected_option_count
            }, t.prototype.choices_click = function (e) {
                return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, t.prototype.keyup_checker = function (e) {
                var t, n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this
                            .keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (e.preventDefault(), this.results_showing) return this.result_select(e);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, t.prototype.clipboard_event_checker = function () {
                var e = this;
                return setTimeout(function () {
                    return e.results_search()
                }, 50)
            }, t.prototype.container_width = function () {
                return null != this.options.width ? this.options.width : this.form_field && this.form_field.classList &&
                this.form_field.classList.contains("form-control") ? "100%" : "" + this.form_field.offsetWidth +
                    "px"
            }, t.prototype.include_option_in_results = function (e) {
                return !(this.is_multiple && !this.display_selected_options && e.selected || !this.display_disabled_options &&
                    e.disabled || e.empty)
            }, t.prototype.search_results_touchstart = function (e) {
                return this.touch_started = !0, this.search_results_mouseover(e)
            }, t.prototype.search_results_touchmove = function (e) {
                return this.touch_started = !1, this.search_results_mouseout(e)
            }, t.prototype.search_results_touchend = function (e) {
                return this.touch_started ? this.search_results_mouseup(e) : void 0
            }, t.prototype.outerHTML = function (e) {
                var t;
                return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
            }, t.browser_is_supported = function () {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(
                    /iP(od|hone)/i.test(window.navigator.userAgent) || /Android/i.test(window.navigator.userAgent) &&
                    /Mobile/i.test(window.navigator.userAgent))
            }, t.default_multiple_text = "", t.default_single_text = "", t.default_no_result_text =
                "No results match", t
        }(), e = jQuery, e.fn.extend({
            chosen: function (i) {
                return t.browser_is_supported() ? this.each(function () {
                    var t, o;
                    t = e(this), o = t.data("chosen"), "destroy" === i && o ? o.destroy() : o || t.data(
                        "chosen", new n(this, i))
                }) : this
            }
        }), n = function (t) {
            function n() {
                return o = n.__super__.constructor.apply(this, arguments)
            }
            return a(n, t), n.prototype.setup = function () {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex,
                    this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, n.prototype.set_up_html = function () {
                var t, n;
                t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")),
                this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className),
                this.is_rtl && t.push("chosen-rtl");
                var i = this.form_field.getAttribute("data-css-class");
                return i && t.push(i), n = {
                    "class": t.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
                    this.container = e("<div />", n), this.is_multiple ? this.container.html(
                    '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text +
                    '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'
                ) : (this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text +
                    '</span><div><b></b></div><div class="chosen-search"><input type="text" autocomplete="off" /></div></a><div class="chosen-drop"><ul class="chosen-results"></ul></div>'
                ), this.compact_search ? this.container.addClass("chosen-compact").find(".chosen-search").appendTo(
                    this.container.find(".chosen-single")) : this.container.find(".chosen-search").prependTo(
                    this.container.find(".chosen-drop")), this.options.highlight_selected !== !1 && this.container
                    .addClass("chosen-highlight-selected")), this.form_field_jq.hide().after(this.container),
                    this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container
                    .find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(),
                    this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(),
                    this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(),
                        this.search_container = this.container.find("li.search-field").first()) : (this.search_container =
                        this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(
                        ".chosen-single").first()), this.options.drop_width && this.dropdown.css("width", this.options
                    .drop_width).addClass("chosen-drop-size-limited"), this.max_drop_width && this.dropdown.addClass(
                    "chosen-auto-max-width"), this.results_build(), this.set_tab_index(), this.set_label_behavior(),
                    this.form_field_jq.trigger("chosen:ready", {
                        chosen: this
                    })
            }, n.prototype.register_observers = function () {
                var e = this;
                return this.container.bind("mousedown.chosen", function (t) {
                    e.container_mousedown(t)
                }), this.container.bind("mouseup.chosen", function (t) {
                    e.container_mouseup(t)
                }), this.container.bind("mouseenter.chosen", function (t) {
                    e.mouse_enter(t)
                }), this.container.bind("mouseleave.chosen", function (t) {
                    e.mouse_leave(t)
                }), this.search_results.bind("mouseup.chosen", function (t) {
                    e.search_results_mouseup(t)
                }), this.search_results.bind("mouseover.chosen", function (t) {
                    e.search_results_mouseover(t)
                }), this.search_results.bind("mouseout.chosen", function (t) {
                    e.search_results_mouseout(t)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (t) {
                    e.search_results_mousewheel(t)
                }), this.search_results.bind("touchstart.chosen", function (t) {
                    e.search_results_touchstart(t)
                }), this.search_results.bind("touchmove.chosen", function (t) {
                    e.search_results_touchmove(t)
                }), this.search_results.bind("touchend.chosen", function (t) {
                    e.search_results_touchend(t)
                }), this.form_field_jq.bind("chosen:updated.chosen", function (t) {
                    e.results_update_field(t)
                }), this.form_field_jq.bind("chosen:activate.chosen", function (t) {
                    e.activate_field(t)
                }), this.form_field_jq.bind("chosen:open.chosen", function (t) {
                    e.container_mousedown(t)
                }), this.form_field_jq.bind("chosen:close.chosen", function (t) {
                    e.input_blur(t)
                }), this.search_field.bind("blur.chosen", function (t) {
                    e.input_blur(t)
                }), this.search_field.bind("keyup.chosen", function (t) {
                    e.keyup_checker(t)
                }), this.search_field.bind("input.chosen", function (t) {
                    e.keyup_checker(t)
                }), this.search_field.bind("keydown.chosen", function (t) {
                    e.keydown_checker(t)
                }), this.search_field.bind("focus.chosen", function (t) {
                    e.input_focus(t)
                }), this.search_field.bind("cut.chosen", function (t) {
                    e.clipboard_event_checker(t)
                }), this.search_field.bind("paste.chosen", function (t) {
                    e.clipboard_event_checker(t)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function (t) {
                    e.choices_click(t)
                }) : this.container.bind("click.chosen", function (e) {
                    e.preventDefault()
                })
            }, n.prototype.destroy = function () {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[
                    0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container
                    .remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, n.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass(
                    "chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item
                    .unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass(
                    "chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 :
                    this.selected_item.bind("focus.chosen", this.activate_action))
            }, n.prototype.container_mousedown = function (t) {
                return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(),
                null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ?
                    this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents(
                    "a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple &&
                    this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this
                        .click_test_action), this.results_show()), this.activate_field())
            }, n.prototype.container_mouseup = function (e) {
                return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
            }, n.prototype.search_results_mousewheel = function (e) {
                var t;
                return e.originalEvent && (t = -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t ?
                    (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(
                        t + this.search_results.scrollTop())) : void 0
            }, n.prototype.blur_test = function () {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() :
                    void 0
            }, n.prototype.close_field = function () {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !
                    1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(),
                    this.show_search_field_default(), this.search_field_scale()
            }, n.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field
                    .val(this.search_field.val()), this.search_field.focus()
            }, n.prototype.test_active_click = function (t) {
                var n;
                return n = e(t.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field = !
                    0 : this.close_field()
            }, n.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(
                    this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() :
                    this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options
                        .length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container
                        .addClass("chosen-container-single-nosearch"), this.container.removeClass(
                    "chosen-with-search")) : (this.search_field[0].readOnly = !1, this.container.removeClass(
                    "chosen-container-single-nosearch"), this.container.addClass("chosen-with-search"))),
                    this.update_results_content(this.results_option_build({
                        first: !0
                    })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(),
                    this.parsing = !1
            }, n.prototype.result_do_highlight = function (e, t) {
                var n, i, o, r, a, s, l = -1;
                e.length && (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass(
                    "highlighted"), o = parseInt(this.search_results.css("maxHeight"), 10), s = this.result_highlight
                    .outerHeight(), a = this.search_results.scrollTop(), r = o + a, i = this.result_highlight.position()
                    .top + this.search_results.scrollTop(), n = i + s, this.middle_highlight && (t || "always" ===
                    this.middle_highlight) ? l = Math.min(i - s, Math.max(0, i - (o - s) / 2)) : n >= r ? l =
                    n - o > 0 ? n - o : 0 : a > i && (l = i), l > -1 ? this.search_results.scrollTop(l) : this.result_highlight
                    .scrollIntoView && this.result_highlight.scrollIntoView())
            }, n.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight =
                    null
            }, n.prototype.results_show = function () {
                var t = this;
                if (t.is_multiple && t.max_selected_options <= t.choices_count()) return t.form_field_jq.trigger(
                    "chosen:maxselected", {
                        chosen: this
                    }), !1;
                t.results_showing = !0, t.search_field.focus(), t.search_field.val(t.search_field.val());
                var n = t.drop_direction;
                if (e.isFunction(n) && (n = n.call(this)), "auto" === n)
                    if (t.drop_directionFixed) n = t.drop_directionFixed;
                    else {
                        var i = t.container.find(".chosen-drop"),
                            o = t.container.offset();
                        o.top + i.outerHeight() + 30 > e(window).height() + e(window).scrollTop() && (n = "up"), t.drop_directionFixed =
                            n
                    } t.container.toggleClass("chosen-up", "up" === n).addClass("chosen-with-drop"), t.winnow_results(
                    1);
                var r = t.max_drop_width;
                if (r) {
                    var i = t.container.find(".chosen-drop").removeClass("in"),
                        a = 0;
                    i.find(".chosen-results>li").each(function () {
                        a = Math.max(a, e(this).outerWidth())
                    }), i.css("width", Math.min(a + 2, r)), t.fixDropWidthTimer = setTimeout(function () {
                        t.fixDropWidthTimer = null, i.addClass("in")
                    }, 50)
                }
                return t.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: t
                })
            }, n.prototype.update_results_content = function (e) {
                return this.search_results.html(e)
            }, n.prototype.results_hide = function () {
                var e = this;
                return e.fixDropWidthTimer && (clearTimeout(e.fixDropWidthTimer), e.fixDropWidthTimer = null), e.results_showing &&
                (e.result_clear_highlight(), e.container.removeClass("chosen-with-drop"), e.form_field_jq.trigger(
                    "chosen:hiding_dropdown", {
                        chosen: e
                    }), e.drop_directionFixed = 0), e.results_showing = !1
            }, n.prototype.set_tab_index = function () {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1,
                    this.search_field[0].tabIndex = e) : void 0
            }, n.prototype.set_label_behavior = function () {
                var t = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length &&
                this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id +
                    "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen",
                    function (e) {
                        return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                    }) : void 0
            }, n.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(
                    this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""),
                    this.search_field.removeClass("default"))
            }, n.prototype.search_results_mouseup = function (t) {
                var n;
                return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(
                    ".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(t),
                    this.search_field.focus()) : void 0
            }, n.prototype.search_results_mouseover = function (t) {
                var n;
                return (n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(
                    ".active-result").first()) ? this.result_do_highlight(n) : void 0
            }, n.prototype.search_results_mouseout = function (t) {
                return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, n.prototype.choice_build = function (t) {
                var n, i, o = this;
                return n = e("<li />", {
                    "class": "search-choice"
                }).html("<span title='" + t.html + "'>" + t.html + "</span>"), t.disabled ? n.addClass(
                    "search-choice-disabled") : (i = e("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": t.array_index
                }), i.bind("click.chosen", function (e) {
                    return o.choice_destroy_link_click(e)
                }), n.append(i)), this.search_container.before(n)
            }, n.prototype.choice_destroy_link_click = function (t) {
                return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t
                    .target))
            }, n.prototype.choice_destroy = function (e) {
                return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(),
                this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(),
                    e.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, n.prototype.results_reset = function () {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(),
                    this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger(
                    "change"), this.active_field ? this.results_hide() : void 0
            }, n.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, n.prototype.result_select = function (e) {
                var t, n;
                return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple &&
                this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger(
                    "chosen:maxselected", {
                        chosen: this
                    }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(),
                        n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0,
                        this.form_field.options[n.options_index].selected = !0, this.selected_option_count =
                        null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text),
                    (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(
                        ""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) &&
                    this.form_field_jq.trigger("change", {
                        selected: this.form_field.options[n.options_index].value
                    }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale()
                )) : void 0
            }, n.prototype.single_set_selected_text = function (e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass(
                    "chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass(
                    "chosen-default")), this.compact_search && this.search_field.attr("placeholder", e), this.selected_item
                    .find("span").attr("title", e).text(e)
            }, n.prototype.result_deselect = function (e) {
                var t;
                return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !
                    1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count =
                    null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq
                    .trigger("change", {
                        deselected: this.form_field.options[t.options_index].value
                    }), this.search_field_scale(), !0)
            }, n.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find(
                    "span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass(
                    "chosen-single-with-deselect")) : void 0
            }, n.prototype.get_search_text = function () {
                return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field
                    .val())).html()
            }, n.prototype.winnow_results_set_highlight = function (e) {
                var t, n;
                return n = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t =
                    n.length ? n.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(
                    t, e) : void 0
            }, n.prototype.no_results = function (t) {
                var n;
                return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find(
                    "span").first().html(t), this.search_results.append(n), this.form_field_jq.trigger(
                    "chosen:no_results", {
                        chosen: this
                    })
            }, n.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, n.prototype.keydown_arrow = function () {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll(
                    "li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
            }, n.prototype.keyup_arrow = function () {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight
                    .prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() >
                0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, n.prototype.keydown_backstroke = function () {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()),
                    this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(),
                    e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ?
                        this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) :
                        void 0)
            }, n.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke =
                    null
            }, n.prototype.keydown_checker = function (e) {
                var t, n;
                switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke &&
                this.clear_backstroke(), t) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !
                            1;
                        break;
                    case 13:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        e.preventDefault(), this.keydown_arrow()
                }
            }, n.prototype.search_field_scale = function () {
                var t, n, i, o, r, a, s, l, c;
                if (this.is_multiple) {
                    for (i = 0, s = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", a = [
                        "font-size", "font-style", "font-weight", "font-family", "line-height",
                        "text-transform", "letter-spacing"], l = 0, c = a.length; c > l; l++) o = a[l], r += o +
                        ":" + this.search_field.css(o) + ";";
                    return t = e("<div />", {
                        style: r
                    }), t.text(this.search_field.val()), e("body").append(t), s = t.width() + 25, t.remove(), n =
                        this.container.outerWidth(), s > n - 10 && (s = n - 10), this.search_field.css({
                        width: s + "px"
                    })
                }
            }, n
        }(t)
    }.call(this);
var bejsonHost = "//api.bejson.com/",
    clipboard = new ClipboardJS(".copy-btn");
clipboard.on("success", function () {
    new $.zui.Messager("复制成功", {
        type: "success",
        icon: "ok",
        placement: "center"
    }).show()
}), clipboard.on("error", function () {
    new $.zui.Messager("复制失败,请手动复制", {
        type: "error",
        placement: "center"
    }).show()
}), $("body").on("mouseenter", ".footer-nav-tabs li", function () {
    var e = $(this).index();
    $(this).parent().find("li").each(function (e, t) {
        $(t).removeClass("active")
    }), $(this).addClass("active"), $(this).parents(".footer-nav").find(".footer-nav-con").each(function (t,
                                                                                                          n) {
        $(n).removeClass("active"), $(n).index() === e && $(n).addClass("active")
    })
}), $("body").on("click", "#showMoreFeaturesInfo", function () {
    "收起" === $(this).text() ? ($(this).find("span").text("更多"), $(this).parents(".alert").css("height", "208px")) :
        ($(this).find("span").text("收起"), $(this).parents(".alert").css("height", "auto")), $(this).find("i").toggleClass(
        "icon-chevron-up").toggleClass("icon-chevron-down")
}), $(document).ready(function () {
    clearActiveAfter(), goTop();
    var e = $(window).outerHeight(),
        t = $("body").outerHeight();
    e > t + 40 && document.getElementsByClassName("html-footer3").length && ($(".html-footer3").addClass(
        "fixed bottom-0 left-0"), $(".html-footer3").css("position", "fixed"), $("body").css(
        "padding-bottom", "50px"))
}), $("#showQrcode").hover(function () {
    $("#wxQrcode").show()
}, function () {
    $("#wxQrcode").hide()
}), $("select.chosen-select") && ($("select.chosen-select").chosen({
    no_results_text: "没有找到",
    search_contains: !0,
    disable_search_threshold: 10
}), $("select.chosen-select").on("change", function (e, t) {
    window.location.href = t.selected
})), String.prototype.MD5PRO = function (e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }

    function n(e, t) {
        var n, i, o, r, a;
        return o = 2147483648 & e, r = 2147483648 & t, n = 1073741824 & e, i = 1073741824 & t, a = (1073741823 & e) +
            (1073741823 & t), n & i ? 2147483648 ^ a ^ o ^ r : n | i ? 1073741824 & a ? 3221225472 ^ a ^ o ^ r :
            1073741824 ^ a ^ o ^ r : a ^ o ^ r
    }

    function i(e, t, n) {
        return e & t | ~e & n
    }

    function o(e, t, n) {
        return e & n | t & ~n
    }

    function r(e, t, n) {
        return e ^ t ^ n
    }

    function a(e, t, n) {
        return t ^ (e | ~n)
    }

    function s(e, o, r, a, s, l, c) {
        return e = n(e, n(n(i(o, r, a), s), c)), n(t(e, l), o)
    }

    function l(e, i, r, a, s, l, c) {
        return e = n(e, n(n(o(i, r, a), s), c)), n(t(e, l), i)
    }

    function c(e, i, o, a, s, l, c) {
        return e = n(e, n(n(r(i, o, a), s), c)), n(t(e, l), i)
    }

    function d(e, i, o, r, s, l, c) {
        return e = n(e, n(n(a(i, o, r), s), c)), n(t(e, l), i)
    }

    function u(e) {
        for (var t, n = e.length, i = n + 8, o = (i - i % 64) / 64, r = 16 * (o + 1), a = Array(r - 1), s = 0, l =
            0; n > l;) t = (l - l % 4) / 4, s = 8 * (l % 4), a[t] = a[t] | e.charCodeAt(l) << s, l++;
        return t = (l - l % 4) / 4, s = 8 * (l % 4), a[t] = a[t] | 128 << s, a[r - 2] = n << 3, a[r - 1] = n >>> 29,
            a
    }

    function p(e) {
        var t, n, i = "",
            o = "";
        for (n = 0; 3 >= n; n++) t = 255 & e >>> 8 * n, o = "0" + t.toString(16), i += o.substr(o.length - 2, 2);
        return i
    }
    var h, f, g, m, v, y, b, x, $, w = this,
        _ = Array(),
        C = 7,
        k = 12,
        E = 17,
        T = 22,
        S = 5,
        j = 9,
        A = 14,
        M = 20,
        I = 4,
        N = 11,
        D = 16,
        L = 23,
        B = 6,
        P = 10,
        H = 15,
        O = 21;
    for (_ = u(w), y = 1732584193, b = 4023233417, x = 2562383102, $ = 271733878, h = 0; h < _.length; h += 16) f =
        y, g = b, m = x, v = $, y = s(y, b, x, $, _[h + 0], C, 3614090360), $ = s($, y, b, x, _[h + 1], k,
        3905402710), x = s(x, $, y, b, _[h + 2], E, 606105819), b = s(b, x, $, y, _[h + 3], T, 3250441966), y =
        s(y, b, x, $, _[h + 4], C, 4118548399), $ = s($, y, b, x, _[h + 5], k, 1200080426), x = s(x, $, y, b, _[h +
    6], E, 2821735955), b = s(b, x, $, y, _[h + 7], T, 4249261313), y = s(y, b, x, $, _[h + 8], C,
        1770035416), $ = s($, y, b, x, _[h + 9], k, 2336552879), x = s(x, $, y, b, _[h + 10], E, 4294925233), b =
        s(b, x, $, y, _[h + 11], T, 2304563134), y = s(y, b, x, $, _[h + 12], C, 1804603682), $ = s($, y, b, x, _[h +
    13], k, 4254626195), x = s(x, $, y, b, _[h + 14], E, 2792965006), b = s(b, x, $, y, _[h + 15], T,
        1236535329), y = l(y, b, x, $, _[h + 1], S, 4129170786), $ = l($, y, b, x, _[h + 6], j, 3225465664), x =
        l(x, $, y, b, _[h + 11], A, 643717713), b = l(b, x, $, y, _[h + 0], M, 3921069994), y = l(y, b, x, $, _[h +
    5], S, 3593408605), $ = l($, y, b, x, _[h + 10], j, 38016083), x = l(x, $, y, b, _[h + 15], A,
        3634488961), b = l(b, x, $, y, _[h + 4], M, 3889429448), y = l(y, b, x, $, _[h + 9], S, 568446438), $ =
        l($, y, b, x, _[h + 14], j, 3275163606), x = l(x, $, y, b, _[h + 3], A, 4107603335), b = l(b, x, $, y, _[h +
    8], M, 1163531501), y = l(y, b, x, $, _[h + 13], S, 2850285829), $ = l($, y, b, x, _[h + 2], j,
        4243563512), x = l(x, $, y, b, _[h + 7], A, 1735328473), b = l(b, x, $, y, _[h + 12], M, 2368359562), y =
        c(y, b, x, $, _[h + 5], I, 4294588738), $ = c($, y, b, x, _[h + 8], N, 2272392833), x = c(x, $, y, b, _[h +
    11], D, 1839030562), b = c(b, x, $, y, _[h + 14], L, 4259657740), y = c(y, b, x, $, _[h + 1], I,
        2763975236), $ = c($, y, b, x, _[h + 4], N, 1272893353), x = c(x, $, y, b, _[h + 7], D, 4139469664), b =
        c(b, x, $, y, _[h + 10], L, 3200236656), y = c(y, b, x, $, _[h + 13], I, 681279174), $ = c($, y, b, x, _[h +
    0], N, 3936430074), x = c(x, $, y, b, _[h + 3], D, 3572445317), b = c(b, x, $, y, _[h + 6], L, 76029189),
        y = c(y, b, x, $, _[h + 9], I, 3654602809), $ = c($, y, b, x, _[h + 12], N, 3873151461), x = c(x, $, y, b,
        _[h + 15], D, 530742520), b = c(b, x, $, y, _[h + 2], L, 3299628645), y = d(y, b, x, $, _[h + 0], B,
        4096336452), $ = d($, y, b, x, _[h + 7], P, 1126891415), x = d(x, $, y, b, _[h + 14], H, 2878612391), b =
        d(b, x, $, y, _[h + 5], O, 4237533241), y = d(y, b, x, $, _[h + 12], B, 1700485571), $ = d($, y, b, x, _[h +
    3], P, 2399980690), x = d(x, $, y, b, _[h + 10], H, 4293915773), b = d(b, x, $, y, _[h + 1], O,
        2240044497), y = d(y, b, x, $, _[h + 8], B, 1873313359), $ = d($, y, b, x, _[h + 15], P, 4264355552), x =
        d(x, $, y, b, _[h + 6], H, 2734768916), b = d(b, x, $, y, _[h + 13], O, 1309151649), y = d(y, b, x, $, _[h +
    4], B, 4149444226), $ = d($, y, b, x, _[h + 11], P, 3174756917), x = d(x, $, y, b, _[h + 2], H,
        718787259), b = d(b, x, $, y, _[h + 9], O, 3951481745), y = n(y, f), b = n(b, g), x = n(x, m), $ = n($,
        v);
    return 32 == e ? p(y) + p(b) + p(x) + p($) : p(b) + p(x)
}, $(".uploader") && "IE" === myBrowser() && ($(".uploader").children("*").css("position", "relative").css(
    "z-index", "99"), $(".uploader").addClass("progress-0")), $(window).ready(function () {
    var e = $(window).outerHeight();
    $(".md-toc").height(e - 300)
}), $("#formatCheck").click(function () {
    indexFormat()
}), document.getElementById("formatCheck") && (document.onkeydown = function (e) {
    var t = e.keyCode || e.which || e.charCode,
        n = e.ctrlKey || e.metaKey;
    n && 76 == t && (indexFormat(), e.preventDefault())
}), $("#compressZipJson").click(function () {
    yasuo(1), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
}), $("#escapeJson").click(function () {
    yasuo(2), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
}), $("#restoreJson").click(function () {
    yasuo(4), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
}), $("#unicode2ch").click(function () {
    var e = editor.getValue(),
        t = unicode2Ch(e);
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
}), $("#ch2unicode").click(function () {
    var e = editor.getValue(),
        t = ch2Unicdoe(e);
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
}), $("#json2get").click(function () {
    var e = JSON.parse(editor.getValue()),
        t = parseParam(e);
    editor.setValue(t), $(this).attr("data-html") && "index" === $(this).attr("data-html") && localStorage.setItem(
        "lastJsonData", editor.getValue())
});
var my_lzma;
String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/, "")
}), $("body").on("click", "#saveData", function () {
    var e = editor.getValue();
    if (e) {
        var t;
        e = "object" == typeof e ? JSON.stringify(e) : e.toString(), confirmInput({
            title: "请为当前的数据命名",
            success: function (n) {
                n && ($("#daveDataList").removeClass("empty-list"), my_lzma || (my_lzma = new LZMA(
                    "/static/bejson/js/lzma_worker.js")), my_lzma.compress(e, 1, function (
                    e) {
                    if (e === !1) return msgError(
                        "An error occurred during LZMA compression."), void 0;
                    t = convert_to_formated_hex(e);
                    var i = {
                            name: n,
                            data: t,
                            time: (new Date).toLocaleDateString().replace(
                                /[\u4e00-\u9fa5|,]+/g, "/")
                        },
                        o = $.zui.store.get("saved_json");
                    o && o.length ? o.unshift(i) : (o = [], o.unshift(i)), $.zui.store.set(
                        "saved_json", o);
                    var r = document.createDocumentFragment();
                    $(o).each(function (e, t) {
                        var n = document.createElement("li");
                        n.className = "border-bottom-d-color", n.innerHTML =
                            '<p class="line-h-2-4 display-block clear-both no-margin-b cursor-pointer">\n<span class="save-title float-left text-ellipsis">' +
                            t.name + "</span>\n" +
                            '<span class="text-info-9 float-right font-12">' +
                            t.time + "</span>\n" +
                            '<span class="display-none data">' + t.data +
                            "</span>\n" + "</p>", r.appendChild(n)
                    }), $("#daveDataList").html(""), document.getElementById(
                        "daveDataList").appendChild(r), $("#confirmInputModal").modal(
                        "hide", "fit")
                }, function () {}))
            }
        })
    } else msgError("请输入数据")
}), $("#loadChecked").change(function () {
    var e = $("#loadChecked").is(":checked");
    e ? $.zui.store.set("lastLoadChecked", "yes") : $.zui.store.set("lastLoadChecked", "no")
}), $("body").on("click", "#removeData", function () {
    $("#daveDataList").addClass("empty-list"), $.zui.store.remove("saved_json"), $("#daveDataList").html("")
}), $("body").on("click", "#daveDataList li", function () {
    my_lzma || (my_lzma = new LZMA("/static/bejson/js/lzma_worker.js"));
    var e = $(this).find(".data").eq(0).html(),
        t = convert_formated_hex_to_bytes(e);
    return 0 == t ? (msgError("invalid compressed input"), !1) : (my_lzma.decompress(t, function (e) {
        return e === !1 ? (msgError("An error occurred during decompression."), void 0) : (editor.setValue(
            e), localStorage.setItem("lastJsonData", editor.getValue()), void 0)
    }, function () {}), void 0)
});
var replayForm =
    '<div class="reply-form t-small-margin">\n								<a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>\n								<form class="form">\n									<div class="form-group">\n										<div class="form-text">\n											<textarea class="form-control new-comment-text" name="text" rows="2" placeholder="撰写回复..."></textarea>\n										</div>\n									</div>\n									<div class="form-emoji-group">\n										<ul>\n											<li data-title="[疑问]"><img src="static/img/emoji/icon_question.gif"></li>\n											<li data-title="[调皮]"><img src="static/img/emoji/icon_razz.gif"></li>\n											<li data-title="[难过]"><img src="static/img/emoji/icon_sad.gif"></li>\n											<li data-title="[抠鼻]"><img src="static/img/emoji/icon_evil.gif"></li>\n											<li data-title="[吓]"><img src="static/img/emoji/icon_exclaim.gif"></li>\n											<li data-title="[微笑]"><img src="static/img/emoji/icon_smile.gif"></li>\n											<li data-title="[憨笑]"><img src="static/img/emoji/icon_redface.gif"></li>\n											<li data-title="[坏笑]"><img src="static/img/emoji/icon_biggrin.gif"></li>\n											<li data-title="[惊]"><img src="static/img/emoji/icon_surprised.gif"></li>\n											<li data-title="[发呆]"><img src="static/img/emoji/icon_eek.gif"></li>\n											<li data-title="[撇嘴]"><img src="static/img/emoji/icon_confused.gif"></li>\n											<li data-title="[大兵]"><img src="static/img/emoji/icon_cool.gif"></li>\n											<li data-title="[偷笑]"><img src="static/img/emoji/icon_lol.gif"></li>\n											<li data-title="[咒骂]"><img src="static/img/emoji/icon_mad.gif"></li>\n											<li data-title="[发怒]"><img src="static/img/emoji/icon_twisted.gif"></li>\n											<li data-title="[白眼]"><img src="static/img/emoji/icon_rolleyes.gif"></li>\n											<li data-title="[鼓掌]"><img src="static/img/emoji/icon_wink.gif"></li>\n											<li data-title="[酷]"><img src="static/img/emoji/icon_idea.gif"></li>\n											<li data-title="[擦汗]"><img src="static/img/emoji/icon_arrow.gif"></li>\n											<li data-title="[亲亲]"><img src="static/img/emoji/icon_neutral.gif"></li>\n											<li data-title="[大哭]"><img src="static/img/emoji/icon_cry.gif"></li>\n											<li data-title="[呲牙]"><img src="static/img/emoji/icon_mrgreen.gif"></li>\n										</ul>\n									</div>\n									<div class="pic-div"></div>\n									<div class="form-group comment-user">\n										<div class="form-add">\n											<div class="form-emoji">\n												<i class="icon icon-smile"></i>\n											</div>\n											<div class="form-pic">\n												<i class="icon icon-picture"></i>\n												<div class="addImages">\n													<input type="file" class="replay-file" multiple="multiple" name="img-files" accept="image/*">\n												</div>\n											</div>\n										</div>\n										<div class="row">\n											<div class="col-md-10 float-left">\n												<div class="input-group">\n													<span class="input-group-addon">昵称<span class="text-danger">*</span></span>\n													<div class="nickname">\n														<input type="text" class="form-control" value="" placeholder="" name="nick-name">\n													</div>\n													<span class="input-group-addon fix-border">邮箱<span class="text-danger">*</span></span>\n													<div class="email">\n														<input type="text" class="form-control" value="" placeholder="" name="email">\n													</div>\n													<span class="input-group-addon fix-border">网址</span>\n													<div class="website">\n														<input type="text" class="form-control website" value="" placeholder="" name="website">\n													</div>\n												</div>\n											</div>\n											<div class="col-md-2 float-right row">\n												<div class="col-md-6 no-padding-r">\n													<div class="btn btn-block replay-cancel">取消</div>\n												</div>\n												<div class="col-md-6 no-padding-r">\n													<div class="btn btn-block btn-primary replay-btn">回复</div>\n												</div>\n\n											</div>\n										</div>\n									</div>\n\n								</form>\n							</div>';
$("body").on("click", ".form-emoji", function () {
    $(this).parents("form").find(".form-emoji-group").eq(0).toggle()
}), $("body").on("click", ".form-emoji-group li", function () {
    var e = $(this).attr("data-title"),
        t = $(this).parents("form").find("textarea").eq(0).val();
    t ? t += e : t = e, $(this).parents("form").find("textarea").eq(0).val(t)
});
var submitGetAndShow = new getAndShowPictures;
$("#file").change(function () {
    submitGetAndShow.add(this)
}), $("#commentReplyForm2").on("click", ".cover", function () {
    submitGetAndShow.cancel(this)
});
var replayGetAndShow = new getAndShowPictures;
$("body").on("change", ".replay-file", function () {
    replayGetAndShow.add(this)
}), $("#commentsList").on("click", ".cover", function () {
    replayGetAndShow.cancel(this)
}), $("body").on("click", ".icon-picture", function () {
    msgError("最多只能上传5张图片")
}), $("#commentSubmit").click(function () {
    var e = $("#commentValue").val(),
        t = isNickname($(this).parents(".row").find(".nickname").eq(0)),
        n = isEmail($(this).parents(".row").find(".email").eq(0));
    if (!t) return msgError("请输入昵称"), void 0;
    if (!n) return msgError("请输入正确的邮箱"), void 0;
    if (e) {
        $("#commentsBox").toggleClass("loading");
        var i = $(this).parents("form")[0],
            o = new FormData(i);
        o.append("img-files", submitGetAndShow.uploadImgArr), doPost("http://www.bejson.com", o, function () {},
            function () {
                alertError({
                    con: "提交失败，请稍候重试"
                }), $("#commentsBox").toggleClass("loading")
            })
    } else msgError("评论内容不能为空")
}), $("body").on("click", "#commentsList .replayBtn", function () {
    replayGetAndShow.imgCount = 0, replayGetAndShow.uploadImgArr = [], $("#commentsList .reply-form").remove(),
        $(this).parent(".actions").append(replayForm)
}), $("body").on("click", "#commentsList .replay-cancel", function () {
    replayGetAndShow.imgCount = 0, replayGetAndShow.uploadImgArr = [], $("#commentsList .reply-form").remove()
}), $("body").on("click", "#commentsList .replay-btn", function () {
    var e = $(this).parents("form").find("textarea").eq(0).val(),
        t = isNickname($(this).parents(".row").find(".nickname").eq(0)),
        n = isEmail($(this).parents(".row").find(".email").eq(0));
    if (!t) return msgError("请输入昵称"), void 0;
    if (!n) return msgError("请输入正确的邮箱"), void 0;
    if (e) {
        $("#commentsBox").toggleClass("loading");
        var i = $(this).parents("form")[0],
            o = new FormData(i);
        o.append("img-files", replayGetAndShow.uploadImgArr), doPost("http://www.bejson.com", o, function () {},
            function () {
                alertError({
                    con: "提交失败，请稍候重试"
                }), $("#commentsBox").toggleClass("loading")
            })
    } else msgError("评论内容不能为空")
}), new ClipboardJS("#copyJson", {
    text: function () {
        return editor.getValue() ? (msgSuccess("复制成功"), editor.getValue()) : !1
    }
}), resizeCodemirror(["#resizePre"], ["#codeBox"], 168, "pre"), resizeCodemirror(["#resizePre1"], ["#codeBox1"],
    168, "pre"), resizeCodemirror(["#resizePre2"], ["#codeBox2"], 168, "pre"), resizeCodemirror(["#resizePre3"], [
    "#codeBox3"], 168, "pre"), resizeCodemirror(["#resize"], ["#editor"], 360), resizeCodemirror(["#resize1"], [
    "#editor1"], 360), resizeCodemirror(["#resize2"], ["#editor2"], 360), resizeCodemirror(["#resize3"], [
    "#editor3"], 360), resizeCodemirror(["#resize4"], ["#editor4"], 200), resizeCodemirror(["#resize5"], [
    "#editor5"], 130), resizeCodemirror(["#resize6", "#resize7"], ["#editor6", "#editor7"], 200), $("#eT").dblclick(
    function () {
        jsonVal = jsl.format.formatJson($("#eT").val()), $("#eT").val(jsonVal)
    }), $("#compressEscapeJson").click(function () {
    var e = editor.getValue(),
        t = e.replace(/\ +/g, "").replace(/[\r\n]/g, ""),
        n = t.replace(/(\")/g, "\\$1");
    editor.setValue(n)
}), $("#chSignToEn").click(function () {
    var e = editor.getValue();
    e = e.replace(/，/g, ",").replace(/。/gi, ".").replace(/“/gi, '"').replace(/；/gi, ";").replace(/”/gi, '"').replace(
        /【/gi, "[").replace(/】/gi, "]"), e = e.replace(/\’|\‘/g, "'").replace(/\“|\”/g, '"'), e = e.replace(
        /\【/g, "[").replace(/\】/g, "]").replace(/\｛/g, "{").replace(/\｝/g, "}"), e = e.replace(/，/g, ",").replace(
        /：/g, ":"), editor.setValue(e)
}), $("#downloadJavaBean").click(function () {
    downloadZip()
});
var javawordsStr =
    "abstract,assert,boolean,break,byte,case,catch,char,class,const,continue,default,do,double,else,enum,extends,final,finally,float,for,goto,if,implements,import,instanceof,int,interface,long,native,new,package,private,protected,public,return,strictfp,short,static,super,switch,synchronized,this,throw,throws,transient,try,void,volatile,while";
$("#getJavaBean").click(function () {
    chechJavaWords() && gen()
}), $("#javaBeanEditor").keyup(function () {
    chechJavaWords() && gen()
}), String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "")
}, $("#javaBeanOldEditor").keyup(function () {
    try {
        var e = jsonlint.parse(editor.getValue());
        e && ($("#jsonlintResult").html("正确的JSON!"), $("#jsonlintBox").addClass("alert-success alert").removeClass(
            "alert-warning alert-danger"), $("#jsonlintIcon").addClass("icon-ok-sign").removeClass(
            "icon-info-sign icon-remove-sign"))
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#comeJson").click(function () {
    testCase()
}), $("#getJavaBean2").click(function () {
    genJson($(this))
}), new ClipboardJS("#copyJavaBean", {
    text: function () {
        return $("#resData").text() ? (msgSuccess("复制成功"), $("#resData").text()) : (msgError("复制失败"), !1)
    }
}), $("#downloadJavaZip").click(function () {
    var e = $("#resData").text();
    if (!e) return msgError("暂无数据保存"), void 0;
    var t = $("#saveName").val();
    downloadZip4(".java", "java", "bejson.java", e, t)
}), $("#getCsharp").click(function () {
    josnToCsharp()
}), $("#clearCode").click(function () {
    editor.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").hide()
}), $("#clearCodeD").click(function () {
    editor.setValue(""), editor2.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").hide()
}), $("#downloadCZip").click(function () {
    $("#resData").html() ? downloadZip3(".c", "c", "c++.c") : msgError("未生成c++")
}), $("#compressionJson").click(function () {
    Process()
}), $("#TabSize").change(function () {
    TabSizeChanged()
}), $("#QuoteKeys").change(function () {
    QuoteKeysClicked()
}), $("#unicodeToCode").change(function () {
    unicodeToCodeClicked()
}), $("#CollapsibleView").change(function () {
    CollapsibleViewClicked()
}), $("#CollapsibleViewDetail button,#CollapsibleViewDetail svg").click(function () {
    var e = $(this).attr("data-index");
    "0" === e ? ExpandAllClicked() : "1" === e ? CollapseAllClicked() : CollapseLevel(parseInt(e))
});
var resultPreHeight;
$("#resizeFmt").draggable({
    container: "#resultPre",
    move: !1,
    before: function () {
        resultPreHeight = $("#resultPre").innerHeight()
    },
    drag: function (e) {
        $("#resultPre .Canvas").height(e.offset.y + resultPreHeight > 200 ? e.offset.y + resultPreHeight :
            200)
    },
    finish: function () {}
}), $("#xml2json").click(function () {
    var e = new XML.ObjTree,
        t = new JKL.Dumper,
        n = editor2.getValue();
    $("#escapeCoding").prop("checked") && (n = repalceFh(n));
    var i = e.parseXML(n);
    i && editor.setValue(t.dump(i))
}), $("#json2xml").click(function (e) {
    try {
        var result = jsonlint.parse(editor.getValue());
        if (result) {
            var xotree = new XML.ObjTree,
                json = eval("(" + editor.getValue() + ")");
            editor2.setValue(formatXml(xotree.writeXML(json))), $("#jsonlintResult").html("正确的JSON!"), $(
                "#jsonlintBox").addClass("alert-success alert").removeClass("alert-warning alert-danger"),
                $("#jsonlintIcon").addClass("icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")
        }
    } catch (e) {
        document.getElementById("jsonlintResult").innerHTML = e, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#resetCode").click(function () {
    editor.setValue(""), editor2.setValue(""), document.getElementById("jsonlintBox") && $("#jsonlintBox").removeClass(
        "alert-success alert alert-danger")
}), $("#downloadEditor").click(function () {
    var e = $(this).attr("data-suffix");
    editor.getValue() ? e ? downloadZip4("." + e, e, e + "." + e, editor.getValue()) : downloadZip4(".json",
        "json", "json.json", editor.getValue()) : msgError("暂无数据可以保存")
}), $("#downloadEditor2").click(function () {
    var e = $(this).attr("data-suffix");
    editor2.getValue() ? e ? downloadZip4("." + e, e, e + "." + e, editor2.getValue()) : downloadZip4(".xml",
        "xml", "xml.xml", editor2.getValue()) : msgError("暂无数据可以保存")
}), $("#downloadPre").click(function () {
    var e = $(this).attr("data-suffix");
    $("#storeEncode").html() ? e ? downloadZip4("." + e, e, e + "." + e, $("#storeEncode").html()) :
        downloadZip4(".js", "js", "js.js", $("#storeEncode").html()) : msgError("暂无数据可以保存")
}), $("#downloadTextarea").click(function () {
    var e = $(this).attr("data-suffix");
    $("#storeEncode").val() ? e ? downloadZip4("." + e, e, e + "." + e, $("#storeEncode").val()) : downloadZip4(
        ".js", "js", "js.js", $("#storeEncode").val()) : msgError("暂无数据可以保存")
}), new ClipboardJS("#copyEditor", {
    text: function () {
        return editor.getValue() ? (msgSuccess("复制成功"), editor.getValue()) : !1
    }
}), new ClipboardJS("#copyEditor2", {
    text: function () {
        return editor2.getValue() ? (msgSuccess("复制成功"), editor2.getValue()) : !1
    }
}), new ClipboardJS("#copyEditor3", {
    text: function () {
        return editor3.getValue() ? (msgSuccess("复制成功"), editor3.getValue()) : !1
    }
}), new ClipboardJS("#copyPre", {
    text: function () {
        return $("#storeEncode").html() ? (msgSuccess("复制成功"), $("#storeEncode").html()) : !1
    }
}), new ClipboardJS("#copyTextarea", {
    text: function () {
        return $("#storeEncode").val() ? (msgSuccess("复制成功"), $("#storeEncode").val()) : !1
    }
}), $("#content").bind("change1", function () {
    var e = $("#ctype").val(),
        t = "";
    "0" == e && (t = ctype0())
}), $("#colToJsonBtn").click(function () {
    ctyperow(!0)
}), $("#colTestCase").click(function () {
    editor.setValue(
        "name	payment	url	asdf\naaa中文测试	999	http://www.bejson.com	asdf\nbbb	888	http://www.bejson.com	asdf\nccc中文测试	777	http://www.bejson.com	asdf\nddd	666	http://www.bejson.com	asdf\neee中文测试	555	http://www.bejson.com	asdf\nfff	444	http://www.bejson.com	asdf"
    )
}), $("#selectedColType").change(function () {
    var e = $("#selectedColType").val();
    $("#ctype").val(e)
}), $("#json2getDouble").click(function () {
    try {
        var e = jsonlint.parse(editor.getValue());
        if (e) {
            var t = JSON.parse(editor.getValue()),
                n = parseParam(t);
            editor2.setValue(n), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger")
        }
    } catch (i) {
        document.getElementById("jsonlintResult").innerHTML = i, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#get2jsonDouble").click(function () {
    var e = editor2.getValue(),
        t = paramParse(e);
    editor.setValue(t)
}), $("#excelTestCase").click(function () {
    editor.setValue(
        '[\n	{"id":"1","title":"BeJSON","url":"www.bejson.com"},\n	{"id":"2","title":"layui","url":"www.layui.com"}\n]'
    )
}), $("#jsonToColBtn").click(function () {
    try {
        var e = jsonlint.parse(editor.getValue());
        e && (ctyperow(!0), $("#jsonlintBox").removeClass("alert-success alert alert-warning alert-danger"))
    } catch (t) {
        document.getElementById("jsonlintResult").innerHTML = t, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    }
}), $("#downloadCsv").click(function () {
    var e = editor2.getValue(),
        t = new Blob([e], {
            type: "text/plain;charset=utf-8"
        });
    saveAs(t, "content.csv")
}), $("#json2yamlDouble").click(function () {
    jsonToYaml()
}), $("#yaml2jsonDouble").click(function () {
    yamlToJson()
}), $("#comAyamlDeom").click(function () {
    editor.setValue(
        '{"json":["rigid","better for data interchange"],"yaml":["slim and flexible","better for configuration"],"object":{"key":"value","array":[{"null_value":null},{"boolean":true},{"integer":1}]},"paragraph":"Blank lines denote\\nparagraph breaks\\n","content":"Or we\\ncan auto\\nconvert line breaks\\nto save space"}'
    )
}), $("#yamlEditor").keyup(function () {
    var e = editor.getValue();
    if (e) try {
        var t = JSON.stringify(jsyaml.load(e), null, 2);
        editor2.setValue(t), $("#jsonlintResult").html("正确的yaml!"), $("#jsonlintBox").addClass(
            "alert-success alert").removeClass("alert-warning alert-danger"), $("#jsonlintIcon").addClass(
            "icon-ok-sign").removeClass("icon-info-sign icon-remove-sign")
    } catch (n) {
        document.getElementById("jsonlintResult").innerHTML = n, $("#jsonlintBox").addClass(
            "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
            "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
    } else document.getElementById("jsonlintResult").innerHTML = "yamld代码不能为空", $("#jsonlintBox").addClass(
        "alert-danger alert").removeClass("alert-warning alert-success"), $("#jsonlintIcon").addClass(
        "icon-remove-sign").removeClass("icon-info-sign icon-ok-sign")
}), $("#lockBase64").click(function () {
    var e = Util.charset,
        t = $("#selectedCodeType").val(),
        n = "";
    n = "utf-8" === t ? e.Base64.encode(editor.getValue(), "utf8") : "gbk" === t ? e.Base64.encode(editor.getValue(),
        "gbk") : e.Base64.encode(editor.getValue(), "utf8", !0), n ? editor2.setValue(n) : msgError(
        "加密的文本有误，请检查后重试")
}), $("#unlockBase64").click(function () {
    var e = Util.charset,
        t = $("#selectedCodeType").val(),
        n = "";
    n = "utf-8" === t ? e.Base64.decode(editor.getValue(), "utf8") : "gbk" === t ? e.Base64.decode(editor.getValue(),
        "gbk") : e.Base64.decode(editor.getValue(), "utf8", !0), n ? editor2.setValue(n) : msgError(
        "解密的文本有误，请检查后重试")
}), $("#exchangeCon").click(function () {
    var e = editor.getValue(),
        t = editor2.getValue();
    editor.setValue(t), editor2.setValue(e)
}), $("#md5Encryption").click(function () {
    var e = editor.getValue();
    if (e) {
        var t = e.MD5PRO(16),
            n = e.MD5PRO(32);
        $(".md5-result input").each(function (e, i) {
            0 === e ? $(i).val(n.toUpperCase()) : 1 === e ? $(i).val(n.toLowerCase()) : 2 === e ? $(i).val(
                t.toUpperCase()) : $(i).val(t.toLowerCase())
        })
    } else msgError("要加密的内容能不能为空")
}), $("#clearCodeMd5").click(function () {
    editor.setValue(""), $(".md5-result input").val("")
}), new ClipboardJS("#md5Result .copy", {
    text: function (e) {
        var t = $(e).parent().find("input").eq(0).val();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#lockAesdes").click(function () {
    aesdesEncrypt()
}), $("#unlockAesdes").click(function () {
    aesdesDecrypt()
}), $("#rsaCmd li").click(function () {
    var e = $(this).attr("data-cmd");
    switch (e) {
        case "buildRSADecryptByPrivateKey":
            $("#rsaCon1").html("请输入私钥"), $("#rsaCon2").html("请输入要解密的签名"), $("#rsaCreate").hide(), $("#rsaEncry")
                .removeClass("height-0");
            break;
        case "buildRSAEncryptByPrivateKey":
            $("#rsaCon1").html("请输入私钥"), $("#rsaCon2").html("请输入要加密的字符串"), $("#rsaCreate").hide(), $(
                "#rsaEncry").removeClass("height-0");
            break;
        case "buildRSAEncryptByPublicKey":
            $("#rsaCon1").html("请输入公钥"), $("#rsaCon2").html("请输入要加密的字符串"), $("#rsaCreate").hide(), $(
                "#rsaEncry").removeClass("height-0");
            break;
        case "buildRSADecryptByPublicKey":
            $("#rsaCon1").html("请输入公钥"), $("#rsaCon2").html("请输入要解密的签名"), $("#rsaCreate").hide(), $("#rsaEncry")
                .removeClass("height-0");
            break;
        case "buildRSAverifyByPublicKey":
            $("#rsaCon1").html("请输入签名"), $("#rsaCon2").html("请输入公钥"), $("#rsaCreate").hide(), $("#rsaEncry").removeClass(
                "height-0");
            break;
        case "0":
            $("#rsaCreate").show(), $("#rsaEncry").addClass("height-0")
    }
}), new ClipboardJS("#rsaCopyPublic", {
    text: function () {
        var e = $("#rsaPublic").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), new ClipboardJS("#rsaCopyPrivate", {
    text: function () {
        var e = $("#rsaPrivate").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), $("#rsaCreateBtn").click(function () {
    var e = $("#rsaLength").val(),
        t = $("#rsaFormat").val(),
        n = $("#rsaPrivatePass").val(),
        i = bejsonHost + "Bejson/Api/Rsa/getRsaKey",
        o = {
            rsaLength: e,
            rsaFormat: t,
            rsaPass: n
        };
    console.log(o), $("body").toggleClass("loading"), doPost(i, o, function (e) {
        200 === e.code || "200" === e.code ? ($("#rsaPublic").val(e.data.public), $("#rsaPrivate").val(
            e.data.private)) : alertError({
            con: e.msg
        }), $("body").toggleClass("loading")
    }, function () {
        alertError({
            con: "生成失败，请稍候重试"
        }), $("body").toggleClass("loading")
    })
}), $("#doRsaEncry").click(function () {
    rsaConvert()
}), $("#clearCodeT").click(function () {
    editor.setValue(""), editor2.setValue(""), editor5.setValue("")
}), $("#shaBtn .shabtn").click(function () {
    var e = $(this).attr("data-sha");
    shaHash(e)
}), $("#lockEscape").click(function () {
    editor2.setValue(escape(editor.getValue()))
}), $("#unlockEscape").click(function () {
    editor2.setValue(unescape(editor.getValue()))
}), $("#lockUrl").click(function () {
    editor2.setValue(encodeURI(editor.getValue())), $("#editor7").show(), $("#editor6").addClass("left-editor"),
        editor3.setValue(encodeURIComponent(editor.getValue()))
}), $("#unlockUrl").click(function () {
    try {
        editor2.setValue(decodeURIComponent(editor.getValue()))
    } catch (e) {
        msgError(e)
    }
    $("#editor7").hide(), $("#editor6").removeClass("left-editor")
}), $("#clearCodeT2").click(function () {
    editor.setValue(""), editor2.setValue(""), editor3.setValue("")
});
var evalA = 62;
$("#lockJavascript").click(function () {
    evalEncode()
}), $("#unlockJavascript").click(function () {
    evalDecode()
}), $("#goFormat").click(function () {
    goFormat()
}), $("#lockMorse").click(function () {
    editor2.setValue(xmorse.encode(editor.getValue()))
}), $("#unlockMorse").click(function () {
    editor2.setValue(xmorse.decode(editor.getValue()))
}), $("#fuck2js").click(function () {
    editor2.setValue(hieroglyphy.hieroglyphyScript(editor.getValue().trim()))
}), $("#fuck2string").click(function () {
    editor2.setValue(hieroglyphy.hieroglyphyString(editor.getValue().trim()))
}), $("#fuck2number").click(function () {
    editor2.setValue(hieroglyphy.hieroglyphyNumber(+editor.getValue().trim()))
}), $("#jjencode").click(function () {
    var e, t = editor.getValue(),
        n = $("#className").val() || "$",
        i = $("#palindrome").prop("checked");
    e = jjencode(n, t), i && (e = e.replace(/[,;]$/, ""), e = '"\'\\"+\'+",' + e + ",'," + e.split("").reverse()
        .join("") + ',"+\'+"\\\'"'), editor2.setValue(e)
}), $("#aaencode").click(function () {
    var e, t = editor.getValue();
    e = aaencode(t), editor2.setValue(e)
}), $("#regexUl").change(function () {
    $("#textPattern").val($(this).val())
}), $("#regexBtn").click(function () {
    onMatch()
}), $("#replaceBtn").click(function () {
    onReplace()
}), $("#xpathClear").click(function () {
    $("#textPattern").val(""), editor.setValue(""), $("#cBox").removeClass("prettyprinted").html(""),
        prettyPrint()
}), $("#xpathTestCase").click(function () {
    xpathShowDemo()
}), $("#xpathRegexBtn").click(function () {
    xpathOnMatch()
}), $("#barcodeGenBtn").click(function () {
    var e = $("#codeText").val(),
        t = $("#codeText").val(),
        n = $("#bar-width").val(),
        i = $("#bar-height").val(),
        o = $("#bg-color").val(),
        r = $("#bar-color").val(),
        a = $("#fontsize").val(),
        s = $("#textMargin").val(),
        l = $("#barcodeShowtext").prop("checked"),
        c = "left";
    $("#textleft").prop("checked") ? c = "left" : $("#textcenter").prop("checked") ? c = "center" : $(
        "#textright").prop("checked") && (c = "right"), l || (t = ""), JsBarcode("#barcode1", e, {
        textPosition: "bottom",
        font: "cursive",
        fontOptions: "bold",
        background: o,
        lineColor: r,
        textAlign: c,
        height: i,
        fontSize: a,
        width: n,
        textMargin: s,
        text: t
    })
}), $("#barcodeShowtext").change(function () {
    var e = $(this).prop("checked");
    e ? $(".showtextview").show() : $(".showtextview").hide()
}), $("#keycodesCodeText").keydown(function (e) {
    $("#keycodesCodeText").val("");
    var t = e.keyCode;
    $("#res").text(t)
}), $("#fanyi").click(function () {
    if (!editor.getValue()) return msgError("请输入要翻译的文本"), void 0;
    var e = bejsonHost + "Bejson/Api/Zh2en/toEnglish",
        t = {
            word: editor.getValue()
        };
    "zh" === $("#language").val() && (e = bejsonHost + "Bejson/Api/Zh2en/toChinese", t = {
        eng_word: editor.getValue()
    }), $("body").toggleClass("loading"), doPost(e, t, function (e) {
        "200" === e.code || 200 === e.code ? editor2.setValue(e.data.target_text) : msgError(e.msg), $(
            "body").toggleClass("loading")
    }, function () {
        alertError({
            con: "翻译失败，请稍候重试"
        }), $("body").toggleClass("loading")
    })
}), $("#findDemoBtn").click(function () {
    editor1.setValue(
        '<ul class="Mid1L_img"><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713635.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602041231419605.jpg" alt="这点钱如何养活后宫佳丽？想想就心累的动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">这点钱如何养后宫？</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/713080.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602031208408737.jpg" alt="你绝对挡不住女人前进的步伐 午间内涵动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">你挡不住女人的步伐</div></a></li><li><a target="_blank" href="http://www.gamersky.com/ent/201602/712632.shtml"><img src="http://imgs.gamersky.com/upimg/2016/201602021155155249.jpg" alt="你看人家的女友怎么玩 感觉心好痛的午间动态图" width="120" height="85" class="pe_u_thumb" border="0"><div class="border"></div><div class="mask"></div><div class="txt">看人家的女友怎么玩</div></a></li></ul>'
    )
}), $("#findImgBtn").click(function () {
    find(1)
}), $("#findLinkBtn").click(function () {
    find(3)
}), $("#findPatternBtn").click(function () {
    find(2)
}), $("#findClearBtn").click(function () {
    editor2.setValue(""), editor1.setValue(""), $("#xpath").val("")
}), new ClipboardJS(".regex-create-copy", {
    text: function (e) {
        var t = $(e).parent().find("pre").text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
});
var regexCreateCodes = {
    js: 'var pattern = /{<0>}/;\nvar str = "{<1>}";\nconsole.log(pattern.test(str));',
    php: "$str = \"{<1>}\";\n$isMatched = preg_match('/{<0>}/', $str, $matches);\nvar_dump($isMatched, $matches);",
    go: 'package main\n\nimport (\n	"fmt"\n	"regexp"\n)\n\nfunc main() {\n	str := "{<1>}"\n	matched, err := regexp.MatchString("{<0>}", str)\n	fmt.Println(matched, err)\n}',
    rb: "pattern = /{<0>}/\nstr = '{<1>}'\np pattern.match(str)",
    py: "import re\npattern = re.compile(ur'{<0>}')\nstr = u'{<1>}'\nprint(pattern.search(str))",
    java: 'import java.util.regex.Matcher;\nimport java.util.regex.Pattern;\n\npublic class RegexMatches {\n	\n	public static void main(String args []) {\n		String str = "{<1>}";\n		String pattern = "{<0>}";\n\n		Pattern r = Pattern.compile(pattern);\n		Matcher m = r.matcher(str);\n		System.out.println(m.matches());\n	}\n\n}'
};
$("#userfullreg button").click(function () {
    $("#codeText").val($(this).data("code")), $("#regdemo").val($(this).data("demo"))
}), $("#regexCreateClearBtn").click(function () {
    $("#codeText").val(""), $("#codes").html("")
}), $("#regexCreateGenBtn").click(function () {
    var e = $("#codeText").val();
    if (null != e && "" != e) {
        for (var t = Object.keys(regexCreateCodes), n = Object.values(regexCreateCodes), i = "", o = 0; o < t.length; o++) {
            var r = n[o].replace("{<0>}", $("#codeText").val());
            r = r.replace("{<1>}", $("#regdemo").val()), i +=
                '<div class="thumbnail relative"><div class="caption"><h3>' + t[o] +
                '</h3><pre class="  linenums">' + r +
                '</pre></div><button class="btn btn-sm regex-create-copy">复制</button></div> '
        }
        $("#codes").html(i)
    }
}), $("#removeDuplicateBtn").click(function () {
    removeDuplicate()
}), $("#removeDuplicateDemo").click(function () {
    editor.setValue("Hello Word\nhello word\nHello Word")
}), $("#sortWordsBtn").click(function () {
    var e = editor.getValue();
    if (!e) return msgError("请输入要排序的字符串"), void 0;
    e = e.replace(/\n/g, ""), e = e.replace(/，/g, ","), e = e.replace(/\t/g, ","), e = e.replace(/\s+/g, ",");
    var t = $(this);
    t.button("loading"), doPost(bejsonHost + "Bejson/Api/Sortwords/sortChinese", {
        word: e
    }, function (e) {
        var n = "",
            i = e.data,
            o = /[a-zA-Z]/;
        if (200 === e.code || "200" === e.code) {
            for (var r in i)
                if (o.test(r)) {
                    var a = i[r];
                    n += "[" + r + "] ";
                    for (var s = 0; s < a.length; s++) n += a[s].area_name, n += a.length > 1 && s < a.length -
                    1 ? "，" : "    "
                } editor2.setValue(n)
        } else alertError({
            con: e.msg
        });
        t.button("reset")
    }, function () {
        t.button("reset"), msgError("排序失败，请稍候再试")
    })
}), $("#sortWordsDemoBtn").click(function () {
    editor.setValue(
        "王,李,张,刘,陈,杨,黄,吴,赵,周,,徐,孙,马,朱,胡,林,郭,何,高,罗,,郑,梁,谢,宋,唐,许,邓,A,冯,韩,曹,,曾,彭,C,萧,蔡,F,潘,田,董,袁,于,余,,叶,蒋,杜,苏,魏,程,吕,丁,沈,任，白，卞 "
    )
});
var createLognCaptcha = "";
document.getElementById("uploaderLogo") && getCaptcha(), $("#captcha").click(function () {
    getCaptcha()
}), $("#createLogo").click(function () {
    if (!$("#logoCaptcha").val()) return msgError("请输入验证码"), void 0;
    if (uploaderLogo.getFiles().length) {
        $("#uploadLogoBtn").button("loading"), $("#createLogo").button("loading");
        var e = uploaderLogo.getFiles()[uploaderLogo.getFiles().length - 1].getNative(),
            t = "#file-" + uploaderLogo.getFiles()[uploaderLogo.getFiles().length - 1].id;
        createlogoQiniuUploader(e, t)
    } else msgError("请上传图片")
}), $("#uploaderLogo").on("click", ".btn-reset-file", function () {
    if (!$("#logoCaptcha").val()) return msgError("请输入验证码"), void 0;
    var e = $(this).parents(".file").attr("id");
    $("#uploadLogoBtn").button("loading"), $("#createLogo").button("loading"), $(uploaderLogo.getFiles()).each(
        function (t, n) {
            if ("file-" + n.id === e) {
                var i = n.getNative();
                createlogoQiniuUploader(i, "#" + e)
            }
        })
}), $("#ocrUploadeImg").click(function () {
    if (uploaderOcr.getFiles().length > 0) {
        var e = $(this);
        e.button("loading"), ocrQiniuUploader(e, uploaderOcr.getFiles()[0].getNative(), "#file-" + uploaderOcr.getFiles()[
            0].id)
    } else msgError("请上传本地图片")
}), $("#uploaderOcr").on("click", ".btn-reset-file", function () {
    var e = $(this).parents(".file").attr("id"),
        t = $(".uploader-btn-browse");
    t.button("loading"), $(uploaderImg2Svg.getFiles()).each(function (n, i) {
        "file-" + i.id === e && ocrQiniuUploader(t, i, "#" + e)
    })
}), $("#removeOcrFile").click(function () {
    uploaderOcr.getFiles()[0] && uploaderOcr.removeFile(uploaderOcr.getFiles()[0])
}), $("#ocrSelectWebUrl").click(function () {
    confirmInput({
        title: "请输入图片网址",
        btnTitle: ["取消", "生成"],
        success: function (e) {
            e ? ($("#confirmInputModal").modal("hide", "fit"), $("#ocrUploadeImg").button("loading"),
                $("body").toggleClass("loading"), doPost(bejsonHost +
                "Bejson/Api/DistinguishString/ocrFromPicture", {
                    path: e,
                    language: $("#orcLanguage").val()
                },
                function (e) {
                    200 === e.code || "200" === e.code ? ($("#ocrRes").addClass("alert"), $(
                        "#ocrRes").text(e.data.join(","))) : alertError({
                        cod: e.msg
                    }), $("#ocrUploadeImg").button("reset"), $("body").toggleClass(
                        "loading")
                },
                function () {
                    $("#ocrUploadeImg").button("reset"), $("body").toggleClass("loading"),
                        msgError("链接错误，请稍候重试")
                })) : msgError("请输入图片网址")
        }
    })
}), $("#wordpressCheck").click(function () {
    $("#res").html("");
    var e = $("#codeText").val();
    if (!e) return msgError("请输入博客网址"), void 0;
    $("#res").html('<div class="alert" role="alert">查询中....请稍等</div>');
    var t = $(this);
    t.button("loading"), doPost(bejsonHost + "Bejson/Api/WordpressTheme/getThemInfo", {
        url: e
    }, function (e) {
        if (200 === e.code || "200" === e.code) {
            var n = "";
            n = -1 == e.data.screenshot.indexOf("http") ?
                '<a class="card col-sm-6 col-md-4" href="u">\n  <img src="http://' + e.data.screenshot +
                '" alt="">\n' + '  <div class="card-heading"><strong>解析结果</strong></div>\n' +
                '  <div class="card-content text-muted">' + e.data.desc + "</div>\n" + "</a>" :
                '<a class="card" href="u">\n  <img src="' + e.data.screenshot + '" alt="">\n' +
                '  <div class="card-heading"><strong>解析结果</strong></div>\n' +
                '  <div class="card-content text-muted">' + e.data.desc + "</div>\n" + "</a>", $("#res")
                .html(n)
        } else $("#res").html('<div class="alert alert-danger" role="alert">' + e.msg + "</div>");
        t.button("reset")
    }, function () {
        t.button("reset"), msgError("获取失败，请稍候重试")
    })
}), $("#wordpressClear").click(function () {
    $("#codeText").val("")
}), $("#pic2WeiboCheck").click(function () {
    if (!$("#codeText").val()) return msgError("微博图片地址不能为空"), void 0;
    var e = $(this);
    e.button("loading"), doPost(bejsonHost + "Bejson/Api/PicToWeibo/toWeibo", {
        url: $("#codeText").val()
    }, function (t) {
        200 === t.code || "200" === t.code ? $("#res").html('<a href="' + t.data +
            '" target="_blank">图片出处:' + t.data + "</a>") : alertError({
            con: t.msg
        }), e.button("reset")
    }, function () {
        msgError("获取失败，请稍候重试"), e.button("reset")
    })
}), $("#pic2WeiboClear").click(function () {
    $("#codeText").val("")
}), new ClipboardJS(".interface-copy", {
    text: function (e) {
        var t = $(e).parents("li").find("pre").text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
});
var htmlStringSuffix = "text";
$("#htmlStringJava").click(function () {
    var e = editor.getValue(),
        t = html2string(e, "java");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringPhp").click(function () {
    var e = editor.getValue(),
        t = html2string(e, "php");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringPython").click(function () {
    var e = editor.getValue(),
        t = html2string(e, "py");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringJs").click(function () {
    var e = editor.getValue(),
        t = html2string(e, "js");
    editor2.setValue(t), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringHtml2json").click(function () {
    htmlStringConvert2(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlStringDemo").click(function () {
    htmlStringDemo()
});
var type = 1,
    htmlJsType = 1;
$("#htmlJsHtml2json").click(function () {
    htmlJsConvert2(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlJsHtml2Js").click(function () {
    htmlJsType = 1, htmlJsConvert(), $("#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix"))
}), $("#htmlJsJs2html").click(function () {
    htmlJsType = 2, -1 == editor.getValue().indexOf("var") ? msgError("转换值不是js代码!") : (htmlJsConvert(), $(
        "#downloadEditor2").attr("data-suffix", $(this).attr("data-suffix")))
}), $("#htmlJsDemo").click(function () {
    var e =
        '<div id="app" class="body-container">\n    <div class="spinner">\n      <div class="spinner-container container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n      <div class="spinner-container container3">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n      </div>\n    </div>\n  </div>';
    editor.setValue(e)
}), $("#deserializeDemoBtn").click(function () {
    editor.setValue('a:3:{s:4:"name";s:6:"huqian";s:3:"sex";s:3:"男";s:3:"age";i:27;}')
}), $("#deserializeRegexBtn").click(function () {
    if (!editor.getValue()) return msgError("请贴入要反序列化的代码"), void 0;
    var e = $(this);
    e.button("loading"), deserializeDeser(e)
}), $("#uploaderImg2Svg").on("click", ".btn-reset-file", function () {
    var e = $(this).parents(".file").attr("id"),
        t = $(".uploader-btn-browse");
    t.button("loading"), $(uploaderImg2Svg.getFiles()).each(function (n, i) {
        "file-" + i.id === e && qiniuUploader(t, i, "#" + e)
    })
}), window.img2SvgFilename = "", window.img2SvgKeystr = "", new ClipboardJS(".svg-copy", {
    text: function (e) {
        var t = $(e).parents(".svgimg-txtbox").find("textarea").val();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $(".peinput").keyup(function () {
    var e = $(this).attr("d"),
        t = $("#baseInput").val(),
        n = $(this).val();
    if (isNaN(t)) return alert("基数必须是数字"), void 0;
    if (isNaN(n)) return alert("请填写数字"), $(this).focus(), void 0;
    if ("px" == e) {
        var i = n / t;
        i = parseFloat(i.toFixed(2)), $("#pxOutput").val(i)
    } else {
        var i = n * t;
        i = i.toFixed(0), $("#emOutput").val(i)
    }
}), $("#ox2strHexandcharC").click(function () {
    ox2strHexandchar("c", $(this))
}), $("#ox2strHexandcharD").click(function () {
    ox2strHexandchar("d", $(this))
}), $("#ox2strDemo").click(function () {
    ox2strDemo()
}), $("#hexInp").keyup(function () {
    var e = $(this).val().trim();
    if (e.startWith("#") && (e = e.substr(1, e.length)), 3 == e.length) {
        var t = e.split("");
        _a1 = t[0], _a2 = t[1], _a3 = t[2], e = _a1 + _a1 + _a2 + _a2 + _a3 + _a3
    }
    var n = HexToRGB(e);
    appendRgb.checked && (n = "rgb(" + n + ")"), $("#outRgb").val(n), appendRgb.checked ? $(".hexspan").css({
        background: n
    }) : $(".hexspan").css({
        background: "rgb(" + n + ")"
    })
}), $("#appendRgb").click(function () {
    var e = $("#outRgb").val().trim();
    "" != e && (e = $(this).is(":checked") ? "rgb(" + e + ")" : e.replace("rgb(", "").replace(")", ""), $(
        "#outRgb").val(e))
}), $("#rgbInp").keyup(function () {
    var e = $(this).val();
    e = e.toUpperCase(), e.startsWith("RGB") && (e = e.replace("RGB(", "").replace(")", ""));
    var t = ""; - 1 != e.indexOf(",") ? t = e.split(",") : -1 != e.indexOf(" ") && (t = e.split(" ")), $(
        ".rgbspan").css({
        background: "#" + RGBToHex(t)
    }), $("#outHex").val("#" + RGBToHex(t))
}), String.prototype.startWith = function (e) {
    var t = new RegExp("^" + e);
    return t.test(this)
}, new ClipboardJS(".copy-input", {
    text: function (e) {
        var t = $(e).parents(".input-group").find("input").val();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#encodeLoadUrlImg").on("click", function () {
    var e = $(this);
    e.button("loading");
    var t = $("#encode-logo").val(),
        n = $("#logo-canvas")[0];
    n.getContext("2d").clearRect(0, 0, n.width, n.height), $("#uploadQrcodeLogo").val(""), document.getElementById(
        "uploadFile").value = "", t ? ($(n).data("logo", ""), renderLogo(n, t, e)) : (msgError("网络图片地址不能为空"),
        e.button("reset"))
}), $("#encodeCreateQrcode").on("click", function () {
    var e = $(this);
    $(this).button("loading");
    var t = {},
        n = $("#encode-canvas");
    return t.text = $("#encode-text").val(), t.render = $("#encode-render").val(), t.bgColor = $(
        "#encode-bgcolor").val(), t.moduleColor = $("#encode-mcolor").val(), t.moduleSize = $(
        "#encode-msize").val(), t.mode = Number($("#encode-mode").val()), t.ECLevel = Number($(
        "#encode-eclevel").val()), t.margin = Number($("#encode-margin").val()), t.logo = $("#logo-canvas")
        .data("logo"), t.error = function (t) {
        throw n.html(""), msgError("生成二维码错误，请检查您的设置"), e.button("reset"), $("#downloadQrcode").hide(), t
    }, t.text ? (n.QREncode(t), $(this).button("reset"), "canvas" === $("#encode-render").val() ? $(
        "#downloadQrcode").show() : $("#downloadQrcode").hide(), void 0) : (msgError("请输入文本"), $(this).button(
        "reset"), void 0)
}), $("#downloadQrcode").click(function () {
    var e = document.getElementById("encode-canvas").querySelector("canvas");
    base64ToBolbAndDownload(e.toDataURL("image/png", 1), "qrcode.png")
}), $("#decode-file").on("change", function (e) {
    var t = $("#decode-canvas")[0],
        n = t.getContext("2d"),
        i = e.target.files[0],
        o = new FileReader;
    o.onload = function (e) {
        var i = new Image;
        i.onload = function () {
            t.width = i.width, t.height = i.height, n.drawImage(i, 0, 0)
        }, i.src = e.target.result
    }, i && o.readAsDataURL(i)
}), $("#decodeQrcodeBtn").on("click", function () {
    $("#decode-text"), result = $("#decode-canvas").QRDecode(function (e) {
        throw $("#decoderes").val(""), msgError("生成二维码失败，请检查二维码是否变形或有额外水印"), e
    }), result && ($("#decode-text").show(), $("#decoderes").val(result))
}), $("#uploadQrcodeLogo").change(function (e) {
    document.getElementById("uploadFile").value = this.value;
    var t = $("#logo-canvas")[0],
        n = e.target.files[0],
        i = new FileReader;
    i.onload = function (e) {
        $(t).data("logo", e.target.result), renderLogo(t, e.target.result)
    }, n && i.readAsDataURL(n)
}), $("#uploadQrcodeLogod").change(function (e) {
    document.getElementById("uploadFileDecode").value = this.value;
    var t = $("#decode-canvas")[0],
        n = t.getContext("2d"),
        i = e.target.files[0],
        o = new FileReader;
    o.onload = function (e) {
        var i = new Image;
        i.onload = function () {
            t.width = i.width, t.height = i.height, n.drawImage(i, 0, 0)
        }, i.src = e.target.result
    }, i && o.readAsDataURL(i)
}), $("#bitTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = e,
            n = e / 8,
            i = e / 8 / 1024,
            o = e / 8 / 1024 / 1024,
            r = e / 8 / 1024 / 1024 / 1024,
            a = e / 8 / 1024 / 1024 / 1024 / 1024;
        setSize(t, n, i, o, r, a)
    }
}), $("#bytesTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = 8 * e,
            n = e,
            i = e / 1024,
            o = e / 1024 / 1024,
            r = e / 1024 / 1024 / 1024,
            a = e / 1024 / 1024 / 1024 / 1024;
        setSize(t, n, i, o, r, a)
    }
}), $("#kbTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = 1024 * 8 * e,
            n = 1024 * e,
            i = e,
            o = e / 1024,
            r = e / 1024 / 1024,
            a = e / 1024 / 1024 / 1024;
        setSize(t, n, i, o, r, a)
    }
}), $("#mbTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = 1024 * 1024 * 8 * e,
            n = 1024 * 1024 * e,
            i = 1024 * e,
            o = e,
            r = e / 1024,
            a = e / 1024 / 1024;
        setSize(t, n, i, o, r, a)
    }
}), $("#gbTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = 1024 * 1024 * 1024 * 8 * e,
            n = 1024 * 1024 * 1024 * e,
            i = 1024 * 1024 * e,
            o = 1024 * e,
            r = e,
            a = e / 1024;
        setSize(t, n, i, o, r, a)
    }
}), $("#tbTxt").keyup(function () {
    var e = $(this).val();
    if ("" != e) {
        e = parseFloat(e);
        var t = 1024 * 1024 * 1024 * 1024 * 8 * e,
            n = 1024 * 1024 * 1024 * 1024 * e,
            i = 1024 * 1024 * 1024 * e,
            o = 1024 * 1024 * e,
            r = 1024 * e,
            a = e;
        setSize(t, n, i, o, r, a)
    }
}), $("#ubbtohtml").click(function () {
    ubbtohtml()
}), $("#htmltoubb").click(function () {
    htmltoubb()
}), $("#ToFull").click(function () {
    ToFull()
}), $("#ToHalf").click(function () {
    ToHalf()
}), $("#html_2_md").click(function () {
    html_2_md()
}), $("#md_2_html").click(function () {
    md_2_html(1)
}), $("#html2markdownDemoBtn").click(function () {
    var e =
        "# MarkDown示例\n### Header 3\n> This is a blockquote.\n>\n > This is the second paragraph in the blockquote.\n>\n> ## This is an H2 in a blockquote";
    editor.setValue(e)
}), $("#tuo2line").click(function () {
    humpToLine(editor.getValue())
}), $("#line2tuo").click(function () {
    lineToHump(editor.getValue())
}), $("#camelUnDemo").click(function () {
    var e = "private String out_trade_no;\nprivate String auth_code;\nprivate double total_amount;";
    editor.setValue(e)
}), $("#imangeHandler").on("click", ".btn-reset-file", function () {
    var e = $(this).parents(".file").attr("id"),
        t = $(".uploader-btn-browse");
    t.button("loading"), $(uploaderImg2Svg.getFiles()).each(function (n, i) {
        "file-" + i.id === e && imgHandlerQiniuUploader(t, i, "#" + e)
    })
}), window.imghandlerFilename = "", $("body").on("click", ".image-handler-start", function () {
    var e = $(this).parents(".image-handler-item").find(".image-handler-con img").eq(0),
        t = $(this).parents(".image-handler-item").find(".image-handler-con a").eq(0),
        n = $(this).parents(".image-handler-item"),
        i = e.attr("src");
    if (i) {
        -1 != i.indexOf("?") && (i = i.substring(0, i.indexOf("?"))), i.substring(i.lastIndexOf(".") + 1);
        var o = window.imghandlerFilename.substring(0, window.imghandlerFilename.lastIndexOf(".")),
            r = i + "?imageView2/" + "0";
        $(n.find(".imghandler-size-radio input[type=radio]")).each(function (e, t) {
            if ($(t).prop("checked")) {
                var n = $(t).attr("data-size").split(",")[0],
                    i = $(t).attr("data-size").split(",")[1];
                r += "/w/" + n + "/h/" + i
            }
        }), $(n.find(".imghandler-format-radio input[type=radio]")).each(function (n, i) {
            if ($(i).prop("checked")) {
                var a = $(i).attr("data-format");
                r += "/format/" + a, t.attr("href", r + "&attname=" + o + "." + a), t.text(r), e.attr(
                    "src", r)
            }
        }), n.find(".image-handler-con-div").show()
    } else msgError("请上传图片")
}), new ClipboardJS("#imageHandlerList .copy", {
    text: function (e) {
        var t = $(e).parent().find("a").eq(0).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
});
var globalIcoSrc = "";
$("#createFavicon").click(function () {
    if (uploaderIcon.getFiles().length) {
        $("#uploadIconBtn").button("loading"), $("#createFavicon").button("loading");
        var e = uploaderIcon.getFiles()[uploaderIcon.getFiles().length - 1].getNative(),
            t = "#file-" + uploaderIcon.getFiles()[uploaderIcon.getFiles().length - 1].id;
        if ($(this).attr("data-id") === t) {
            var n = e.name.substring(0, e.name.lastIndexOf("."));
            return createIcon(globalIcoSrc, n), $("#uploadIconBtn").button("reset"), $("#createFavicon").button(
                "reset"), void 0
        }
        icomakerQiniuUploader(e, t)
    } else msgError("请上传图片")
}), $("#imangeHandler").on("click", ".btn-reset-file", function () {
    var e = $(this).parents(".file").attr("id");
    $("#uploadIconBtn").button("loading"), $("#createFavicon").button("loading"), $(uploaderIcon.getFiles()).each(
        function (t, n) {
            "file-" + n.id === e && icomakerQiniuUploader(n, "#" + e)
        })
}), new ClipboardJS("#img2base54Area button", {
    text: function (e) {
        var t = $(e).parent().find("textarea").eq(0).val();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#shorturlClearBtn").click(function () {
    document.getElementById("shorturlContent").value = "", document.getElementById("shorturlResult").value = "",
        document.getElementById("shorturlContent").select()
}), $("#shorturlEncode").click(function () {
    shorturlEncode(), $("#shorturlEncode").button("loading")
}), $("#shorturlDecode").click(function () {
    shorturlDecode(), $("#shorturlDecode").button("loading")
}), $("#shorturlChange").click(function () {
    shorturlChange()
}), new ClipboardJS("#shorturlCopy", {
    text: function () {
        var e = $("#shorturlResult").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), jinzhiSs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@", $("#jingzhiChangeBtn").click(
    function () {
        jingzhiChange()
    });
var alert_msg_count = 0;
new ClipboardJS(".copy-jinzhi", {
    text: function (e) {
        var t = $(e).parents("tr").find("input").eq(0).val();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#uplowercaseC").click(function () {
    uplowercase(!1)
}), $("#uplowercaseD").click(function () {
    uplowercase(!0)
}), $("#uploaderFile2Pdf").on("click", ".btn-reset-file", function () {
    var e = $(this).parents(".file").attr("id"),
        t = $(".uploader-btn-browse");
    t.button("loading"), $(uploaderFile2Pdf.getFiles()).each(function (n, i) {
        "file-" + i.id === e && qiniuFile2PdfUploader(t, i, "#" + e)
    })
}), $("#num2hzClearBtn").click(function () {
    document.getElementById("num2hzStr").value = "", document.getElementById("num2hzEstr").value = "", document
        .getElementById("num2hzEstr2").value = "", document.getElementById("num2hzStr").select()
}), $("#num2hzEncode").click(function () {
    num2hzChange(!0)
}), $("#num2hzDecode").click(function () {
    num2hzChange(!1)
}), new ClipboardJS("#num2hzCopyBtn", {
    text: function () {
        var e = $("#num2hzEstr").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
});
var hzf = "零壹贰叁肆伍陆柒捌玖";
$("#native2ascii").click(function () {
    native2ascii()
}), $("#ascii2native").click(function () {
    ascii2native()
}), $("#toPyConvert").click(function () {
    toPyConvert()
}), $("#J2Fconvert0").click(function () {
    J2Fconvert(0)
}), $("#J2Fconvert1").click(function () {
    J2Fconvert(1)
}), $("#J2Fconvert2").click(function () {
    J2Fconvert(2)
});
var softRooturl = "",
    softJavatools = [["java反编译器", [{
        name: "",
        url: "//" + window.location.host + "/softs/javafanbianyi.zip"
    }], ["/java/fanbianyi/QQ截图20160426144145.png"]], ["cron表达式生成器", [{
        name: "",
        url: "//" + window.location.host + "/softs/CronExpressionGenerator.zip"
    }], ["/java/cronCreate/QQ截图20160426222855.png"]]],
    softDevtools = [["微信WEB开发者工具", [{
        name: "Windows 64位版本",
        url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=x64"
    }, {
        name: "Windows 32位版本",
        url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=x86"
    }, {
        name: "Mac版本",
        url: "https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=darwin"
    }], ["http://qn.bejson.com/wx1.png", "http://qn.bejson.com/QQ%E6%88%AA%E5%9B%BE20160830111217.png"]], [
        "支付宝提供的RSA加密工具", [{
            name: "",
            url: "https://docs.open.alipay.com/291/105971/"
        }], [""]]],
    softNettoolsstr = [["SecureCRT+SecureFX 7.0.0.326 整合版", [{
        name: "64位",
        url: "//" + window.location.host + "/softs/SecureCRTSecureFX_x64_7.0.0.326.rar"
    }, {
        name: "32位",
        url: "//" + window.location.host + "/softs/SecureCRTSecureFX_x86_7.0.0.326.rar"
    }], ["/connect/SecureCRT/gui.png", "/connect/SecureCRT/shell.png"]], ["Socket、UDP等协议服务端客户端工具", [{
        name: "",
        url: "//" + window.location.host + "/softs/SocketTest-master.zip"
    }], ["/nettools/socket/QQ截图20160425113038.png"]]],
    softUitools = [["取色器", [{
        name: "",
        url: "//" + window.location.host + "/softs/TakeColor.exe"
    }], ["/uitool/colorfix/QQ截图20160426164656.png"]]],
    softOthertools = [["星号查看器", [{
        name: "",
        url: "//" + window.location.host + "/softs/星号密码查看器.zip"
    }], ["/other/xinghao/QQ图片20160425113817.png"]], ["事件自动处理器", [{
        name: "",
        url: "//" + window.location.host + "/softs/事件自动处理器.zip"
    }], ["/other/eventhandler/QQ截图20160426224502.png"]], ["TPC/UDP抓包", [{
        name: "",
        url: "https://docs.microsoft.com/zh-cn/sysinternals/downloads/tcpview"
    }], [""]]],
    softSysenv = [["JDK", [{
        name: "JDK6",
        url: "http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html"
    }, {
        name: "JDK11(LTS)",
        url: "https://www.oracle.com/java/technologies/javase-downloads.html#JDK11"
    }, {
        name: "JDK14",
        url: "https://www.oracle.com/java/technologies/javase-downloads.html#JDK14"
    }], [""]], ["Tomcat3-9全版本下载", [{
        name: "",
        url: "http://archive.apache.org/dist/tomcat/"
    }], [""]], ["nginx+php+mysql 一键安装包", [{
        name: "查看",
        url: "http://www.lanmps.com/"
    }], [""]]];
$("#softJavatools1").append(softParse(softJavatools)), $("#softDevtools").append(softParse(softDevtools)), $(
    "#softNettools1").append(softParse(softNettoolsstr)), $("#softUitools1").append(softParse(softUitools)), $(
    "#softOthertools1").append(softParse(softOthertools)), $("#softSysenv1").append(softParse(softSysenv));
for (var blogs = [{
    title: "经典模块化前端 UI 框架",
    user: "layui",
    url: "https://www.layui.com/",
    desc: "采用自身模块规范编写的前端 UI 框架",
    tag: "前端,UI,框架"
}, {
    title: "色魔科技",
    user: "色魔",
    url: "http://maniac.vip/",
    desc: "猥琐的白帽子，座右铭:人若无名，便可专心练贱",
    tag: "白帽子,黑客,网络安全"
}, {
    title: "青石坞",
    user: "青石",
    url: "http://www.qs5.org/",
    desc: "纯屌丝，爱瞎折腾。生活不止三言两语..",
    tag: "php,js,易语言,瞎几巴折腾"
}, {
    title: "一个PHP码农的自述",
    user: "花花",
    url: "https://blog.yinghualuo.cn",
    desc: "php开发经验记录、Linux服务器运维等，还有老司机资源，你懂的^_^",
    tag: "PHP,运维,电脑维修"
}, {
    title: "",
    user: "",
    url: "",
    desc: "",
    tag: ""
}, {
    title: "WebYang.NET",
    user: "阳明",
    url: "http://webyang.net/",
    desc: "WebYang.NET是一个专注于互联网技术，拥有大量php、web前端、linux、iOS、缓存等系列文章的原创IT技术博客。",
    tag: "php,linux,iOS,写作"
}, {
    title: "赵华伟自媒体博客",
    user: "赵华伟",
    url: "http://www.chinacion.cn",
    desc: "互联网创业者，全栈开发工程师，互联网项目合作、投融资渠道、技术变现。",
    tag: "百度工程师,互联网创业者,项目合作,技术变现"
}, {
    title: "罗分明网络博客",
    user: "罗分明",
    url: "http://www.luofenming.com/",
    desc: "本站记录个人，工作和学习笔记、及问题解决方案。",
    tag: "C#,.Net Core,Web前端"
}, {
    title: "Choba·乔巴博客",
    user: "乔巴",
    url: "https://szdblog.com",
    desc: "步伐虽小，密而不止",
    tag: "PHP,Linux,MySQL,摄影"
}], blogHtml = "", i = 0; i < blogs.length; i++) {
    var blog = blogs[i];
    if ("" != blog.title) {
        var tag = blog.tag,
            tagh = "";
        if (-1 != tag.indexOf(","))
            for (var tags = tag.split(","), j = 0; j < tags.length; j++) tagh +=
                '<span class="btn btn-sm l-big-margin">' + tags[j] + "</span>";
        else tagh = '<span class="color5">' + blog.tag + "</span>";
        blogHtml += '<a href="' + blog.url +
            '"  target="_blank" class="list-group-item"><div class="tt b-small-margin text-primary">' + blog.title +
            tagh + '</div><span class="desc">' + blog.desc + "</span></a>"
    }
}
if (document.getElementById("blogsDiv") && $("#blogsDiv").html(blogHtml), $("select.chzn-select").chosen({
    no_results_text: "没有找到",
    search_contains: !0,
    disable_search_threshold: 10
}), $("select.chzn-select").on("change", function (e, t) {
    $(".swatches").hide(), $("#" + t.selected).show()
}), $("#safecolor .color").hover(function () {
    $(this).find(".safecolor-copy").show()
}, function () {
    $(this).find(".safecolor-copy").hide()
}), new ClipboardJS(".safecolor-copy-html", {
    text: function (e) {
        var t = $(e).parents(".color").find("h3 .html").eq(0).text();
        return t = t.trim().slice(4), t ? (msgSuccess("复制成功"), t) : !1
    }
}), new ClipboardJS(".safecolor-copy-rgb", {
    text: function (e) {
        var t = $(e).parents(".color").find("h3 .rgb").eq(0).text().trim().slice(3);
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("select.ace-select").chosen({
    no_results_text: "没有找到",
    search_contains: !0,
    disable_search_threshold: 10
}), $("select.ace-select").on("change", function (e, t) {
    aceEditor.session.setMode(t.selected)
}), $("#aceEditorExpand").click(function () {
    $("body").addClass("overflow-hidden"), $("#aceEditor").addClass("aceFullEditor"), $("#aceEditorCollapse").show(),
        $("#aceEditorCopy").show(), aceEditor.resize()
}), $("#aceEditorCollapse").click(function () {
    $("body").removeClass("overflow-hidden"), $("#aceEditor").removeClass("aceFullEditor"), $("#aceEditorCopy")
        .hide(), $("#aceEditorCollapse").hide(), aceEditor.resize()
}), new ClipboardJS(".ace-editor-copy", {
    text: function () {
        var e = aceEditor.getValue();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), new ClipboardJS(".font-copy-class a", {
    text: function (e) {
        var t = $(e).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), new ClipboardJS(".font-copy-unicode a", {
    text: function (e) {
        var t = $(e).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#fs2 tr").hover(function () {
    $(this).find("i").eq(0).css("transform", "scale(2)"), $(this).find("i").eq(0).css("-webkit-transform",
        "scale(2)"), $(this).find("i").eq(0).css("-o-transform", "scale(2)"), $(this).find("i").eq(0).css(
        "-ms-transform", "scale(2)")
}, function () {
    $(this).find("i").eq(0).css("transform", "scale(1)"), $(this).find("i").eq(0).css("-webkit-transform",
        "scale(1)"), $(this).find("i").eq(0).css("-o-transform", "scale(1)"), $(this).find("i").eq(0).css(
        "-ms-transform", "scale(1)")
}), new ClipboardJS(".color-copy-name", {
    text: function (e) {
        var t = $(e).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), new ClipboardJS(".color-copy-hex", {
    text: function (e) {
        var t = $(e).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#getColorBox td").click(function () {
    var e = $(this).attr("data-color").replace(";", "");
    $("#getColorHex").val(e), $("#getColorAddon").css("background-color", e)
}), new ClipboardJS("#getColorCopy", {
    text: function () {
        var e = $("#getColorHex").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), document.getElementById("libcdnBootlist")) {
    for (var libcdnUrls = [{
        title: "BootCDN",
        url: "http://www.bootcdn.cn/",
        desc: "附带搜索，编辑好格式可以直接复制"
    }, {
        title: "百度静态资源公共库",
        url: "http://cdn.code.baidu.com/",
        desc: "百度的，支持搜索，不支持直接复制"
    }, {
        title: "新浪js库",
        url: "http://lib.sinaapp.com/",
        desc: "不算很方便"
    }, {
        title: "七牛云存储开放静态文件",
        url: "http://www.staticfile.org/",
        desc: "国内知名云存储"
    }, {
        title: "Google资源库",
        url: "https://developers.google.com/speed/libraries/",
        desc: "国外访问很快，国内被墙了，慎用"
    }, {
        title: "微软资源库",
        url: "http://www.asp.net/ajax/cdn",
        desc: "支持的不多"
    }, {
        title: "待添加",
        url: "javascript:;",
        desc: ""
    }, {
        title: "",
        url: "",
        desc: ""
    }], libcdnHtml = "", i = 0; i < libcdnUrls.length; i++) {
        var u = libcdnUrls[i];
        "" != u.title && (libcdnHtml += " <tr><td><a href='" + u.url + '\' target="_blank">' + u.title +
            '</a></td>><td><span class="desc">' + u.desc + "</span></td>></tr>")
    }
    $("#libcdnBootlist").html(libcdnHtml)
}
$("#pojoType").change(function () {
    var e = parseInt($(this).val());
    2 === e ? $("#pojoLowcasedv").show() : $("#pojoLowcasedv").hide()
}), $("#sql2pojoTest").click(function () {
    editor.setValue(
        "CREATE TABLE `poets` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '作者姓名',\n  `created_at` datetime DEFAULT NULL COMMENT '创建日期',\n  `updated_at` datetime DEFAULT NULL COMMENT '修改日期',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2529 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n"
    )
}), $("#sql2pojoSubmit").click(function () {
    sql2pojo()
}), $("#sql2pojoChangeBtn").click(function () {
    return editor.getValue() ? (sql2pojoOchange(), void 0) : (msgError("请输入sql语句"), void 0)
}), $("#sql2pojoDemoBtn").click(function () {
    editor.setValue(
        "create table QRTZ_TRIGGERS\n(\n	  SCHED_NAME     VARCHAR2(120) not null,\n	  TRIGGER_NAME   VARCHAR2(200) not null,\n	  TRIGGER_GROUP  VARCHAR2(200) not null,\n	  JOB_NAME       VARCHAR2(200) not null,\n	  JOB_GROUP      VARCHAR2(200) not null,\n	  DESCRIPTION    VARCHAR2(250),\n	  NEXT_FIRE_TIME NUMBER(13),\n	  PREV_FIRE_TIME NUMBER(13),\n	  PRIORITY       NUMBER(13),\n	  TRIGGER_STATE  VARCHAR2(16) not null,\n	  TRIGGER_TYPE   VARCHAR2(8) not null,\n	  START_TIME     NUMBER(13) not null,\n	  END_TIME       NUMBER(13),\n	  CALENDAR_NAME  VARCHAR2(200),\n	  MISFIRE_INSTR  NUMBER(2),\n	  JOB_DATA       BLOB\n)"
    )
}), $("#sqlviewCreate").click(function () {
    return editor.getValue() ? ($("#sqlviewCreate").button("loading"), sqlviewConvert(), void 0) : (msgError(
        "请输入sql语句"), void 0)
}), $("#sqlviewDemo").click(function () {
    editor.setValue(
        "INSERT INTO `test_table` (`series`, `tenant_num_id`, `data_sign`, `mg_unit_num_id`, `own_num_id`, `cort_num_id`, `cort_id`, `cort_name`, `en_cort_name`, `sim_cort_name`, `en_sim_cort_name`, `cuy_num_id`, `type_num_id`, `orn_num_id`, `orn_sub_num_id`, `prv_num_id`, `city_num_id`, `city_area_num_id`, `town_num_id`, `registered_name`, `en_registered_name`, `tax_account`, `bank_account`, `status_num_id`, `headquarters_adr`, `en_headquarters_adr`, `legal_behf`, `en_legal_behf`, `behf_postcode`, `behf_telephone`, `behf_fax`, `behf_adr`, `en_behf_adr`, `behf_mail`, `behf_city`, `cont_empe1`, `en_cont_empe1`, `cont_empe1_postcode`, `cont_empe1_telephone`, `cont_empe1_fax`, `cont_empe1_adr`, `en_cont_empe1_adr`, `cont_empe1_mail`, `cont_empe1_city`, `cont_empe2`, `en_cont_empe2`, `cont_empe2_postcode`, `cont_empe2_telephone`, `cont_empe2_fax`, `cont_empe2_adr`, `en_cont_empe2_adr`, `cont_empe2_mail`, `cont_empe2_city`, `en_cont_im1`, `en_cont_im2`, `org_code`, `bank_name`, `chain_num_id`, `chain_sub_num_id`, `identity_id`, `invoice_adr`, `create_dtme`, `last_updtme`, `create_user_id`, `last_update_user_id`, `cancelsign`, `insertdata`, `updatedata`, `senddata`, `alreadysend`, `bank_prv_num_id`, `bank_city_num_id`, `billing_bank`, `billing_bank_account`, `super_cort_num_id`, `trading_certificates`, `taxpayer_type`) VALUES ('719013100601', '0', '0', NULL, '1901310400', '0', ' ', 'BeJSON火星店', 'Bejson', 'BeJSON', 'BJ', '0', '1', '1', '60', '640000', '640100', '640105', '640105002', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', '1', '18518185678', '18518185678', '尼古拉斯凯奇的山景房', ' ', '1', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', ' ', '0', '0', ' ', ' ', '2019-01-31 10:46:09', '2019-01-31 10:46:09', '1', '1', 'N', 'Y', 'N', 'N', '0', '0', '0', NULL, NULL, '0', '', NULL);"
    )
}), $("#properties2yamlDemo").click(function () {
    var e =
        "dubbo.registry.address=zookeeper://10.0.65.3:2181\ndubbo.admin.root.password=root\ndubbo.admin.guest.password=guest";
    editor.setValue(e)
}), $("#properties2yamlConvert").click(function () {
    return editor.getValue() ? ($("#properties2yamlConvert").button("loading"), properties2yamlConvert(), void 0) :
        (msgError("请输入properties代码"), void 0)
}), new ClipboardJS("#copyIp", {
    text: function () {
        var e = $("#getIpStr").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), new ClipboardJS("#copyIpv6", {
    text: function () {
        var e = $("#getIpIpv6").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), $("#checkIp").click(function () {
    return $("#queryIp").val() ? ($(this).button("loading"), $("#queryipBox").addClass("loading"), getIpinfo($(
        "#queryIp").val()), void 0) : (msgError("请输入IP"), void 0)
}), new ClipboardJS(".copy-queryip", {
    text: function (e) {
        var t = $(e).parents("tr").find(".copy-con").eq(0).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#ip2addrStart").click(function () {
    return "" === $("#ip2addrIp").val() ? (msgError("请填写IP"), void 0) : ($("#ip2addrStart").button("loading"),
        doPost(bejsonHost + "Bejson/Api/LocationByIP/getLocByIP", {
            ip: $("#ip2addrIp").val()
        }, function (e) {
            var t = e;
            if (200 === e.code || "200" === e.code)
                if (1 === t.data.status || "1" === t.data.status) {
                    for (var n = t.data.data, i = n.country + " " + n.province + " " + n.city + " " + n
                        .district + " 大概位置:" + n.pos, o = n.poi_list, r = "", a = 0; a < o.length; a++) {
                        r += " <tr>";
                        var s = o[a];
                        r += "<td>【" + s.name + '】</td><td class="address-con">' + s.address +
                            '</td><td class="ip2addr-btn"><button class="btn" type="button">复制地址</button></td>',
                            r += "</tr>"
                    }
                    $("#addr").text(i), $("#addrs").html(r)
                } else msgError(t.msg);
            else alertError({
                con: e.msg
            });
            $("#ip2addrStart").button("reset")
        }, function () {
            alertError({
                con: "获取失败，请稍候重试"
            }), $("#ip2addrStart").button("reset")
        }), void 0)
}), new ClipboardJS(".ip2addr-btn button", {
    text: function (e) {
        var t = $(e).parents("tr").find(".address-con").eq(0).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), $("#useragentCua").val(navigator.userAgent);
var userAgentPcj = [["safari 5.1 – MAC",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50"
    ], ["safari 5.1 – Windows",
        "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-us) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50"
    ], ["IE 9.0", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0;"], ["IE 8.0",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)"], ["IE 7.0",
        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"], ["IE 6.0",
        " Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"], ["Firefox 4.0.1 – MAC",
        " Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv,2.0.1) Gecko/20100101 Firefox/4.0.1"], [
        "Firefox 4.0.1 – Windows", "Mozilla/5.0 (Windows NT 6.1; rv,2.0.1) Gecko/20100101 Firefox/4.0.1"], [
        "Opera 11.11 – MAC", "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11"],
        ["Opera 11.11 – Windows", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.8.131 Version/11.11"], [
            "Chrome 17.0 – MAC",
            " Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11"
        ], ["傲游（Maxthon）", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Maxthon 2.0)"], ["腾讯TT",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; TencentTraveler 4.0)"], ["世界之窗（The World） 2.x",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"], ["世界之窗（The World） 3.x",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; The World)"], ["搜狗浏览器 1.x",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SE 2.X MetaSr 1.0; SE 2.X MetaSr 1.0; .NET CLR 2.0.50727; SE 2.X MetaSr 1.0)"
        ], ["360浏览器", " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)"], ["Avant",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Avant Browser)"], ["Green Browser",
            " Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"]],
    userAgentMbj = [["safari iOS 4.33 – iPhone",
        "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"
    ], ["safari iOS 4.33 – iPod Touch",
        "Mozilla/5.0 (iPod; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"
    ], ["safari iOS 4.33 – iPad",
        "Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5"
    ], ["Android N1",
        " Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
    ], ["Android QQ浏览器 For android",
        " MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
    ], ["Android Opera Mobile",
        " Opera/9.80 (Android 2.3.4; Linux; Opera Mobi/build-1107180945; U; en-GB) Presto/2.8.149 Version/11.10"],
        ["Android Pad Moto Xoom",
            " Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13"
        ], ["BlackBerry",
            " Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+"
        ], ["WebOS HP Touchpad",
            " Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0"
        ], ["Nokia N97",
            " Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaN97-1/20.0.019; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/525 (KHTML, like Gecko) BrowserNG/7.1.18124"
        ], ["Windows Phone Mango",
            " Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; HTC; Titan)"], ["UC无",
            " UCWEB7.0.2.37/28/999"], ["UC标准", " NOKIA5700/ UCWEB7.0.2.37/28/999"], ["UCOpenwave",
            " Openwave/ UCWEB7.0.2.37/28/999"], ["UC Opera",
            " Mozilla/4.0 (compatible; MSIE 6.0; ) Opera/UCWEB7.0.2.37/28/999"]],
    useragentWxInAndroid = [["小米在WIFI",
        "Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"
    ], ["锤子OD103型号 4G",
        "Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN"
    ], ["锤子SM919型号 WIFI",
        "Mozilla/5.0 (Linux; Android 6.0.1; SM919 Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"
    ], ["VIVO X6S WIFI",
        "Mozilla/5.0 (Linux; Android 5.1.1; vivo X6S A Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"
    ], ["HUAWEI TAG-AL00 4G",
        "Mozilla/5.0 (Linux; Android 5.1; HUAWEI TAG-AL00 Build/HUAWEITAG-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043622 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN"
    ], ["小程序",
        "Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram"
    ]],
    useragentWxInIos = [["iphone手机OS 9_3_2版本 4G",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.6.1 NetType/4G Language/zh_CN"
    ], ["iphone手机OS 11_2_2版本 4G",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 MicroMessenger/6.6.1 NetType/4G Language/zh_CN"
    ], ["iphone手机OS OS 11_1_1版本 WIFI",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Mobile/15B150 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN"
    ], ["iphoneX WIFI",
        "Mozilla/5.0 (iphone x Build/MXB48T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043632 Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/WIFI Language/zh_CN"
    ]];
document.getElementById("useragentCua") && (userAgentParseHtml("pcd", userAgentPcj), userAgentParseHtml("mbd",
    userAgentMbj), userAgentParseHtml("wxInAndroid", useragentWxInAndroid), userAgentParseHtml("wxInIos",
    useragentWxInIos), new ClipboardJS(".copy-agent", {
    text: function (e) {
        var t = $(e).parents("tr").find(".copy-agent-con").eq(0).text();
        return t ? (msgSuccess("复制成功"), t) : !1
    }
}), new ClipboardJS(".copy-cua", {
    text: function () {
        var e = $("#useragentCua").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
})), $("#ip2intDemo").click(function () {
    $("#ip2intStr").val("192.168.1.1")
}), $("#ip2intIp2int").click(function () {
    ip2int()
}), $("#ip2intInt2ip").click(function () {
    int2ip()
}), $("#ip2intClear").click(function () {
    document.getElementById("ip2intStr").value = "", document.getElementById("ip2intRstr").value = ""
}), new ClipboardJS("#in2intCopy", {
    text: function () {
        var e = $("#ip2intRstr").val();
        return e ? (msgSuccess("复制成功"), e) : !1
    }
}), $("#jshtmlFormatTab a").click(function () {
    var e = $(this).attr("data-tab");
    $("#tabsize").val(e), $("#sels").text(e + "个空格缩进");
    var t = this;
    setTimeout(function () {
        $(t).parent().removeClass("active")
    }, 100)
});
var jshtmlFormatIschange = !1;
$("#jshtmlFormatBeautify").on("click", function () {
    doJsBeautify()
}), $("#hshtmlFormat").on("click", function () {
    jshtmlFormatPackJs(0)
}), $("#jshtmlCopty").on("click", function () {
    jshtmlFormatPackJs(1)
}), $("#hshtmlHjs").on("click", function () {
    jshtmlFormatChange()
}), $("#cssFullFormat").on("click", function () {
    formatCss("packAdv")
}), $("#cssHshtmlFormat").on("click", function () {
    formatCss("pack")
}), $("#cssBeautify").on("click", function () {
    doJsCssBeautify()
});
var lCSSCoder = {
    format: function (e) {
        return e = e.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), e = e.replace(/;\s*;/g, ";"), e = e.replace(
            /\,[\s\.\#\d]*{/g, "{"), e = e.replace(/([^\s])\{([^\s])/g, "$1 {\n	$2"), e = e.replace(
            /([^\s])\}([^\n]*)/g, "$1\n}\n$2"), e = e.replace(/([^\s]);([^\s\}])/g, "$1;\n	$2")
    },
    packAdv: function (e) {
        return e = e.replace(/\/\*(.|\n)*?\*\//g, ""), e = e.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), e = e.replace(
            /\,[\s\.\#\d]*\{/g, "{"), e = e.replace(/;\s*;/g, ";"), e = e.match(/^\s*(\S+(\s+\S+)*)\s*$/),
            null == e ? "" : e[1]
    },
    pack: function (e) {
        return e = e.replace(/\/\*(.|\n)*?\*\//g, ""), e = e.replace(/\s*([\{\}\:\;\,])\s*/g, "$1"), e = e.replace(
            /\,[\s\.\#\d]*\{/g, "{"), e = e.replace(/;\s*;/g, ";"), e = e.replace(/;\s*}/g, "}"), e = e.replace(
            /([^\s])\{([^\s])/g, "$1{$2"), e = e.replace(/([^\s])\}([^\n]s*)/g, "$1}\n$2")
    }
};
$("#xmlsortSort").click(function () {
    if (!editor.getValue()) return msgError("请贴入xml代码"), void 0;
    var e = $(this);
    e.button("loading"), doPost(bejsonHost + "Bejson/Api/Xml/xmlsort", {
        xml: editor.getValue()
    }, function (t) {
        200 === t.code || "200" === t.code ? editor.setValue(t.data.replace(/↵/g, "\n")) : alertError({
            con: t.msg
        }), e.button("reset")
    }, function () {
        msgError("排序失败，请稍候重试"), e.button("reset")
    })
}), $("#xmlsortFormat").click(function () {
    editor.setValue($.format(editor.getValue(), {
        method: "xml"
    }))
}), $("#xmlsortCompress").on("click", function () {
    editor.setValue($.format(editor.getValue(), {
        method: "xmlmin"
    }))
}), $("#xmlsortDemo").click(function () {
    editor.setValue(
        '<#xml version="1.0" encoding="UTF-8"?><PARAM><DBID>35</DBID><SEQUENCE>atgtca</SEQUENCE><MAXNS>10</MAXNS><MINIDENTITIES>90</MINIDENTITIES><MAXEVALUE>10</MAXEVALUE><USERNAME>admin</USERNAME><PASSWORD>111111</PASSWORD><TYPE>P</TYPE><RETURN_TYPE>2</RETURN_TYPE></PARAM>'
            .replace("#xml", "?xml"))
}), $("#formatSqlFormat").click(function () {
    return editor.getValue() ? (editor.setValue(sqlFormatter.format(editor.getValue(), {
        language: $("#formatSqlType").val()
    })), void 0) : (msgError("请贴入sql代码"), void 0)
}), $("#formatSqlCompress").on("click", function () {
    editor.setValue(editor.getValue().split("\n").join(" ").replace(/\s+/g, " "))
}), $("#formatSqlDemo").click(function () {
    editor.setValue(
        "SELECT d.deptno,d.dname,d.loc,COUNT(e.empno) mycount,NVL(AVG(e.sal),0) myavg FROM dept d,emp e WHERE d.deptno=e.deptno(+) GROUP BY d.deptno,d.dname,d.loc HAVING AVG(sal)>2000"
    )
}), $("#sql2charpDemo").click(function () {
    editor.setValue(
        "CREATE TABLE `poets` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '作者姓名',\n  `created_at` datetime DEFAULT NULL COMMENT '创建日期',\n  `updated_at` datetime DEFAULT NULL COMMENT '修改日期',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=2529 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;\n"
    )
}), $("#sql2charpCreate").click(function () {
    return editor.getValue() ? ($(this).button("loading"), doSql2csharppojo(), void 0) : (msgError("请贴入sql代码"),
        void 0)
});
