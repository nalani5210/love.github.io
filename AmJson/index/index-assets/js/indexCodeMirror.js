! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define &&
    define.amd ? define(e) : t.CodeMirror = e()
}(this, function () {
    "use strict";

    function t(t) {
        return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
    }

    function e(t) {
        for (var e = t.childNodes.length; e > 0; --e) t.removeChild(t.firstChild);
        return t
    }

    function n(t, n) {
        return e(t).appendChild(n)
    }

    function i(t, e, n, i) {
        var o = document.createElement(t);
        if (n && (o.className = n), i && (o.style.cssText = i), "string" == typeof e) o.appendChild(document.createTextNode(
            e));
        else if (e)
            for (var r = 0; r < e.length; ++r) o.appendChild(e[r]);
        return o
    }

    function o(t, e, n, o) {
        var r = i(t, e, n, o);
        return r.setAttribute("role", "presentation"), r
    }

    function r(t, e) {
        if (3 == e.nodeType && (e = e.parentNode), t.contains) return t.contains(e);
        do
            if (11 == e.nodeType && (e = e.host), e == t) return !0; while (e = e.parentNode)
    }

    function s() {
        var t;
        try {
            t = document.activeElement
        } catch (e) {
            t = document.body || null
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
        return t
    }

    function a(e, n) {
        var i = e.className;
        t(n).test(i) || (e.className += (i ? " " : "") + n)
    }

    function l(e, n) {
        for (var i = e.split(" "), o = 0; o < i.length; o++) i[o] && !t(i[o]).test(n) && (n += " " + i[o]);
        return n
    }

    function c(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function () {
            return t.apply(null, e)
        }
    }

    function u(t, e, n) {
        e || (e = {});
        for (var i in t) !t.hasOwnProperty(i) || n === !1 && e.hasOwnProperty(i) || (e[i] = t[i]);
        return e
    }

    function d(t, e, n, i, o) {
        null == e && (e = t.search(/[^\s\u00a0]/), -1 == e && (e = t.length));
        for (var r = i || 0, s = o || 0;;) {
            var a = t.indexOf("	", r);
            if (0 > a || a >= e) return s + (e - r);
            s += a - r, s += n - s % n, r = a + 1
        }
    }

    function h(t, e) {
        for (var n = 0; n < t.length; ++n)
            if (t[n] == e) return n;
        return -1
    }

    function p(t, e, n) {
        for (var i = 0, o = 0;;) {
            var r = t.indexOf("	", i); - 1 == r && (r = t.length);
            var s = r - i;
            if (r == t.length || o + s >= e) return i + Math.min(s, e - o);
            if (o += r - i, o += n - o % n, i = r + 1, o >= e) return i
        }
    }

    function f(t) {
        for (; Ja.length <= t;) Ja.push(g(Ja) + " ");
        return Ja[t]
    }

    function g(t) {
        return t[t.length - 1]
    }

    function m(t, e) {
        for (var n = [], i = 0; i < t.length; i++) n[i] = e(t[i], i);
        return n
    }

    function v(t, e, n) {
        for (var i = 0, o = n(e); i < t.length && n(t[i]) <= o;) i++;
        t.splice(i, 0, e)
    }

    function y() {}

    function b(t, e) {
        var n;
        return Object.create ? n = Object.create(t) : (y.prototype = t, n = new y), e && u(e, n), n
    }

    function x(t) {
        return /\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || Ka.test(t))
    }

    function w(t, e) {
        return e ? e.source.indexOf("\\w") > -1 && x(t) ? !0 : e.test(t) : x(t)
    }

    function _(t) {
        for (var e in t)
            if (t.hasOwnProperty(e) && t[e]) return !1;
        return !0
    }

    function C(t) {
        return t.charCodeAt(0) >= 768 && Za.test(t)
    }

    function T(t, e, n) {
        for (;
            (0 > n ? e > 0 : e < t.length) && C(t.charAt(e));) e += n;
        return e
    }

    function k(t, e, n) {
        for (var i = e > n ? -1 : 1;;) {
            if (e == n) return e;
            var o = (e + n) / 2,
                r = 0 > i ? Math.ceil(o) : Math.floor(o);
            if (r == e) return t(r) ? e : n;
            t(r) ? n = r : e = r + i
        }
    }

    function S(t, e, n, i) {
        if (!t) return i(e, n, "ltr", 0);
        for (var o = !1, r = 0; r < t.length; ++r) {
            var s = t[r];
            (s.from < n && s.to > e || e == n && s.to == e) && (i(Math.max(s.from, e), Math.min(s.to, n), 1 == s.level ?
                "rtl" : "ltr", r), o = !0)
        }
        o || i(e, n, "ltr")
    }

    function E(t, e, n) {
        var i;
        tl = null;
        for (var o = 0; o < t.length; ++o) {
            var r = t[o];
            if (r.from < e && r.to > e) return o;
            r.to == e && (r.from != r.to && "before" == n ? i = o : tl = o), r.from == e && (r.from != r.to &&
            "before" != n ? i = o : tl = o)
        }
        return null != i ? i : tl
    }

    function $(t, e) {
        var n = t.order;
        return null == n && (n = t.order = el(t.text, e)), n
    }

    function D(t, e) {
        return t._handlers && t._handlers[e] || nl
    }

    function N(t, e, n) {
        if (t.removeEventListener) t.removeEventListener(e, n, !1);
        else if (t.detachEvent) t.detachEvent("on" + e, n);
        else {
            var i = t._handlers,
                o = i && i[e];
            if (o) {
                var r = h(o, n);
                r > -1 && (i[e] = o.slice(0, r).concat(o.slice(r + 1)))
            }
        }
    }

    function A(t, e) {
        var n = D(t, e);
        if (n.length)
            for (var i = Array.prototype.slice.call(arguments, 2), o = 0; o < n.length; ++o) n[o].apply(null, i)
    }

    function L(t, e, n) {
        return "string" == typeof e && (e = {
            type: e,
            preventDefault: function () {
                this.defaultPrevented = !0
            }
        }), A(t, n || e.type, t, e), H(e) || e.codemirrorIgnore
    }

    function j(t) {
        var e = t._handlers && t._handlers.cursorActivity;
        if (e)
            for (var n = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), i = 0; i < e.length; ++
                i) - 1 == h(n, e[i]) && n.push(e[i])
    }

    function M(t, e) {
        return D(t, e).length > 0
    }

    function O(t) {
        t.prototype.on = function (t, e) {
            il(this, t, e)
        }, t.prototype.off = function (t, e) {
            N(this, t, e)
        }
    }

    function P(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function I(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    }

    function H(t) {
        return null != t.defaultPrevented ? t.defaultPrevented : 0 == t.returnValue
    }

    function z(t) {
        P(t), I(t)
    }

    function F(t) {
        return t.target || t.srcElement
    }

    function W(t) {
        var e = t.which;
        return null == e && (1 & t.button ? e = 1 : 2 & t.button ? e = 3 : 4 & t.button && (e = 2)), Ma && t.ctrlKey &&
        1 == e && (e = 3), e
    }

    function R(t) {
        if (null == Ba) {
            var e = i("span", "​");
            n(t, i("span", [e, document.createTextNode("x")])), 0 != t.firstChild.offsetHeight && (Ba = e.offsetWidth <=
                1 && e.offsetHeight > 2 && !(_a && 8 > Ca))
        }
        var o = Ba ? i("span", "​") : i("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return o.setAttribute("cm-text", ""), o
    }

    function q(t) {
        if (null != Ua) return Ua;
        var i = n(t, document.createTextNode("AخA")),
            o = Ha(i, 0, 1).getBoundingClientRect(),
            r = Ha(i, 1, 2).getBoundingClientRect();
        return e(t), o && o.left != o.right ? Ua = r.right - o.right < 3 : !1
    }

    function B(t) {
        if (null != ll) return ll;
        var e = n(t, i("span", "x")),
            o = e.getBoundingClientRect(),
            r = Ha(e, 0, 1).getBoundingClientRect();
        return ll = Math.abs(o.left - r.left) > 1
    }

    function U(t, e) {
        arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)), cl[t] = e
    }

    function X(t, e) {
        ul[t] = e
    }

    function Y(t) {
        if ("string" == typeof t && ul.hasOwnProperty(t)) t = ul[t];
        else if (t && "string" == typeof t.name && ul.hasOwnProperty(t.name)) {
            var e = ul[t.name];
            "string" == typeof e && (e = {
                name: e
            }), t = b(e, t), t.name = e.name
        } else {
            if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return Y("application/xml");
            if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t)) return Y("application/json")
        }
        return "string" == typeof t ? {
            name: t
        } : t || {
            name: "null"
        }
    }

    function Q(t, e) {
        e = Y(e);
        var n = cl[e.name];
        if (!n) return Q(t, "text/plain");
        var i = n(t, e);
        if (dl.hasOwnProperty(e.name)) {
            var o = dl[e.name];
            for (var r in o) o.hasOwnProperty(r) && (i.hasOwnProperty(r) && (i["_" + r] = i[r]), i[r] = o[r])
        }
        if (i.name = e.name, e.helperType && (i.helperType = e.helperType), e.modeProps)
            for (var s in e.modeProps) i[s] = e.modeProps[s];
        return i
    }

    function V(t, e) {
        var n = dl.hasOwnProperty(t) ? dl[t] : dl[t] = {};
        u(e, n)
    }

    function G(t, e) {
        if (e === !0) return e;
        if (t.copyState) return t.copyState(e);
        var n = {};
        for (var i in e) {
            var o = e[i];
            o instanceof Array && (o = o.concat([])), n[i] = o
        }
        return n
    }

    function J(t, e) {
        for (var n; t.innerMode && (n = t.innerMode(e), n && n.mode != t);) e = n.state, t = n.mode;
        return n || {
            mode: t,
            state: e
        }
    }

    function K(t, e, n) {
        return t.startState ? t.startState(e, n) : !0
    }

    function Z(t, e) {
        if (e -= t.first, 0 > e || e >= t.size) throw new Error("There is no line " + (e + t.first) +
            " in the document.");
        for (var n = t; !n.lines;)
            for (var i = 0;; ++i) {
                var o = n.children[i],
                    r = o.chunkSize();
                if (r > e) {
                    n = o;
                    break
                }
                e -= r
            }
        return n.lines[e]
    }

    function te(t, e, n) {
        var i = [],
            o = e.line;
        return t.iter(e.line, n.line + 1, function (t) {
            var r = t.text;
            o == n.line && (r = r.slice(0, n.ch)), o == e.line && (r = r.slice(e.ch)), i.push(r), ++o
        }), i
    }

    function ee(t, e, n) {
        var i = [];
        return t.iter(e, n, function (t) {
            i.push(t.text)
        }), i
    }

    function ne(t, e) {
        var n = e - t.height;
        if (n)
            for (var i = t; i; i = i.parent) i.height += n
    }

    function ie(t) {
        if (null == t.parent) return null;
        for (var e = t.parent, n = h(e.lines, t), i = e.parent; i; e = i, i = i.parent)
            for (var o = 0; i.children[o] != e; ++o) n += i.children[o].chunkSize();
        return n + e.first
    }

    function oe(t, e) {
        var n = t.first;
        t: do {
            for (var i = 0; i < t.children.length; ++i) {
                var o = t.children[i],
                    r = o.height;
                if (r > e) {
                    t = o;
                    continue t
                }
                e -= r, n += o.chunkSize()
            }
            return n
        } while (!t.lines);
        for (var s = 0; s < t.lines.length; ++s) {
            var a = t.lines[s],
                l = a.height;
            if (l > e) break;
            e -= l
        }
        return n + s
    }

    function re(t, e) {
        return e >= t.first && e < t.first + t.size
    }

    function se(t, e) {
        return String(t.lineNumberFormatter(e + t.firstLineNumber))
    }

    function ae(t, e, n) {
        return void 0 === n && (n = null), this instanceof ae ? (this.line = t, this.ch = e, this.sticky = n, void 0) :
            new ae(t, e, n)
    }

    function le(t, e) {
        return t.line - e.line || t.ch - e.ch
    }

    function ce(t, e) {
        return t.sticky == e.sticky && 0 == le(t, e)
    }

    function ue(t) {
        return ae(t.line, t.ch)
    }

    function de(t, e) {
        return le(t, e) < 0 ? e : t
    }

    function he(t, e) {
        return le(t, e) < 0 ? t : e
    }

    function pe(t, e) {
        return Math.max(t.first, Math.min(e, t.first + t.size - 1))
    }

    function fe(t, e) {
        if (e.line < t.first) return ae(t.first, 0);
        var n = t.first + t.size - 1;
        return e.line > n ? ae(n, Z(t, n).text.length) : ge(e, Z(t, e.line).text.length)
    }

    function ge(t, e) {
        var n = t.ch;
        return null == n || n > e ? ae(t.line, e) : 0 > n ? ae(t.line, 0) : t
    }

    function me(t, e) {
        for (var n = [], i = 0; i < e.length; i++) n[i] = fe(t, e[i]);
        return n
    }

    function ve(t, e, n, i) {
        var o = [t.state.modeGen],
            r = {};
        ke(t, e.text, t.doc.mode, n, function (t, e) {
            return o.push(t, e)
        }, r, i);
        for (var s = n.state, a = function (i) {
            n.baseTokens = o;
            var a = t.state.overlays[i],
                l = 1,
                c = 0;
            n.state = !0, ke(t, e.text, a.mode, n, function (t, e) {
                for (var n = l; t > c;) {
                    var i = o[l];
                    i > t && o.splice(l, 1, t, o[l + 1], i), l += 2, c = Math.min(t, i)
                }
                if (e)
                    if (a.opaque) o.splice(n, l - n, t, "overlay " + e), l = n + 2;
                    else
                        for (; l > n; n += 2) {
                            var r = o[n + 1];
                            o[n + 1] = (r ? r + " " : "") + "overlay " + e
                        }
            }, r), n.state = s, n.baseTokens = null, n.baseTokenPos = 1
        }, l = 0; l < t.state.overlays.length; ++l) a(l);
        return {
            styles: o,
            classes: r.bgClass || r.textClass ? r : null
        }
    }

    function ye(t, e, n) {
        if (!e.styles || e.styles[0] != t.state.modeGen) {
            var i = be(t, ie(e)),
                o = e.text.length > t.options.maxHighlightLength && G(t.doc.mode, i.state),
                r = ve(t, e, i);
            o && (i.state = o), e.stateAfter = i.save(!o), e.styles = r.styles, r.classes ? e.styleClasses = r.classes :
                e.styleClasses && (e.styleClasses = null), n === t.doc.highlightFrontier && (t.doc.modeFrontier =
                Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier))
        }
        return e.styles
    }

    function be(t, e, n) {
        var i = t.doc,
            o = t.display;
        if (!i.mode.startState) return new fl(i, !0, e);
        var r = Se(t, e, n),
            s = r > i.first && Z(i, r - 1).stateAfter,
            a = s ? fl.fromSaved(i, s, r) : new fl(i, K(i.mode), r);
        return i.iter(r, e, function (n) {
            xe(t, n.text, a);
            var i = a.line;
            n.stateAfter = i == e - 1 || 0 == i % 5 || i >= o.viewFrom && i < o.viewTo ? a.save() : null, a
                .nextLine()
        }), n && (i.modeFrontier = a.line), a
    }

    function xe(t, e, n, i) {
        var o = t.doc.mode,
            r = new hl(e, t.options.tabSize, n);
        for (r.start = r.pos = i || 0, "" == e && we(o, n.state); !r.eol();) _e(o, r, n.state), r.start = r.pos
    }

    function we(t, e) {
        if (t.blankLine) return t.blankLine(e);
        if (t.innerMode) {
            var n = J(t, e);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
        }
    }

    function _e(t, e, n, i) {
        for (var o = 0; 10 > o; o++) {
            i && (i[0] = J(t, n).mode);
            var r = t.token(e, n);
            if (e.pos > e.start) return r
        }
        throw new Error("Mode " + t.name + " failed to advance stream.")
    }

    function Ce(t, e, n, i) {
        var o, r = t.doc,
            s = r.mode;
        e = fe(r, e);
        var a, l = Z(r, e.line),
            c = be(t, e.line, n),
            u = new hl(l.text, t.options.tabSize, c);
        for (i && (a = []);
             (i || u.pos < e.ch) && !u.eol();) u.start = u.pos, o = _e(s, u, c.state), i && a.push(new gl(u, o, G(r.mode,
            c.state)));
        return i ? a : new gl(u, o, c.state)
    }

    function Te(t, e) {
        if (t)
            for (;;) {
                var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n) break;
                t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
                var i = n[1] ? "bgClass" : "textClass";
                null == e[i] ? e[i] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(e[i]) || (e[i] += " " +
                    n[2])
            }
        return t
    }

    function ke(t, e, n, i, o, r, s) {
        var a = n.flattenSpans;
        null == a && (a = t.options.flattenSpans);
        var l, c = 0,
            u = null,
            d = new hl(e, t.options.tabSize, i),
            h = t.options.addModeClass && [null];
        for ("" == e && Te(we(n, i.state), r); !d.eol();) {
            if (d.pos > t.options.maxHighlightLength ? (a = !1, s && xe(t, e, i, d.pos), d.pos = e.length, l = null) :
                l = Te(_e(n, d, i.state, h), r), h) {
                var p = h[0].name;
                p && (l = "m-" + (l ? p + " " + l : p))
            }
            if (!a || u != l) {
                for (; c < d.start;) c = Math.min(d.start, c + 5e3), o(c, u);
                u = l
            }
            d.start = d.pos
        }
        for (; c < d.pos;) {
            var f = Math.min(d.pos, c + 5e3);
            o(f, u), c = f
        }
    }

    function Se(t, e, n) {
        for (var i, o, r = t.doc, s = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), a = e; a > s; --a) {
            if (a <= r.first) return r.first;
            var l = Z(r, a - 1),
                c = l.stateAfter;
            if (c && (!n || a + (c instanceof pl ? c.lookAhead : 0) <= r.modeFrontier)) return a;
            var u = d(l.text, null, t.options.tabSize);
            (null == o || i > u) && (o = a - 1, i = u)
        }
        return o
    }

    function Ee(t, e) {
        if (t.modeFrontier = Math.min(t.modeFrontier, e), !(t.highlightFrontier < e - 10)) {
            for (var n = t.first, i = e - 1; i > n; i--) {
                var o = Z(t, i).stateAfter;
                if (o && (!(o instanceof pl) || i + o.lookAhead < e)) {
                    n = i + 1;
                    break
                }
            }
            t.highlightFrontier = Math.min(t.highlightFrontier, n)
        }
    }

    function $e() {
        ml = !0
    }

    function De() {
        vl = !0
    }

    function Ne(t, e, n) {
        this.marker = t, this.from = e, this.to = n
    }

    function Ae(t, e) {
        if (t)
            for (var n = 0; n < t.length; ++n) {
                var i = t[n];
                if (i.marker == e) return i
            }
    }

    function Le(t, e) {
        for (var n, i = 0; i < t.length; ++i) t[i] != e && (n || (n = [])).push(t[i]);
        return n
    }

    function je(t, e) {
        t.markedSpans = t.markedSpans ? t.markedSpans.concat([e]) : [e], e.marker.attachLine(t)
    }

    function Me(t, e, n) {
        var i;
        if (t)
            for (var o = 0; o < t.length; ++o) {
                var r = t[o],
                    s = r.marker,
                    a = null == r.from || (s.inclusiveLeft ? r.from <= e : r.from < e);
                if (a || r.from == e && "bookmark" == s.type && (!n || !r.marker.insertLeft)) {
                    var l = null == r.to || (s.inclusiveRight ? r.to >= e : r.to > e);
                    (i || (i = [])).push(new Ne(s, r.from, l ? null : r.to))
                }
            }
        return i
    }

    function Oe(t, e, n) {
        var i;
        if (t)
            for (var o = 0; o < t.length; ++o) {
                var r = t[o],
                    s = r.marker,
                    a = null == r.to || (s.inclusiveRight ? r.to >= e : r.to > e);
                if (a || r.from == e && "bookmark" == s.type && (!n || r.marker.insertLeft)) {
                    var l = null == r.from || (s.inclusiveLeft ? r.from <= e : r.from < e);
                    (i || (i = [])).push(new Ne(s, l ? null : r.from - e, null == r.to ? null : r.to - e))
                }
            }
        return i
    }

    function Pe(t, e) {
        if (e.full) return null;
        var n = re(t, e.from.line) && Z(t, e.from.line).markedSpans,
            i = re(t, e.to.line) && Z(t, e.to.line).markedSpans;
        if (!n && !i) return null;
        var o = e.from.ch,
            r = e.to.ch,
            s = 0 == le(e.from, e.to),
            a = Me(n, o, s),
            l = Oe(i, r, s),
            c = 1 == e.text.length,
            u = g(e.text).length + (c ? o : 0);
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var h = a[d];
                if (null == h.to) {
                    var p = Ae(l, h.marker);
                    p ? c && (h.to = null == p.to ? null : p.to + u) : h.to = o
                }
            }
        if (l)
            for (var f = 0; f < l.length; ++f) {
                var m = l[f];
                if (null != m.to && (m.to += u), null == m.from) {
                    var v = Ae(a, m.marker);
                    v || (m.from = u, c && (a || (a = [])).push(m))
                } else m.from += u, c && (a || (a = [])).push(m)
            }
        a && (a = Ie(a)), l && l != a && (l = Ie(l));
        var y = [a];
        if (!c) {
            var b, x = e.text.length - 2;
            if (x > 0 && a)
                for (var w = 0; w < a.length; ++w) null == a[w].to && (b || (b = [])).push(new Ne(a[w].marker, null,
                    null));
            for (var _ = 0; x > _; ++_) y.push(b);
            y.push(l)
        }
        return y
    }

    function Ie(t) {
        for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && t.splice(e--, 1)
        }
        return t.length ? t : null
    }

    function He(t, e, n) {
        var i = null;
        if (t.iter(e.line, n.line + 1, function (t) {
            if (t.markedSpans)
                for (var e = 0; e < t.markedSpans.length; ++e) {
                    var n = t.markedSpans[e].marker;
                    !n.readOnly || i && -1 != h(i, n) || (i || (i = [])).push(n)
                }
        }), !i) return null;
        for (var o = [{
            from: e,
            to: n
        }], r = 0; r < i.length; ++r)
            for (var s = i[r], a = s.find(0), l = 0; l < o.length; ++l) {
                var c = o[l];
                if (!(le(c.to, a.from) < 0 || le(c.from, a.to) > 0)) {
                    var u = [l, 1],
                        d = le(c.from, a.from),
                        p = le(c.to, a.to);
                    (0 > d || !s.inclusiveLeft && !d) && u.push({
                        from: c.from,
                        to: a.from
                    }), (p > 0 || !s.inclusiveRight && !p) && u.push({
                        from: a.to,
                        to: c.to
                    }), o.splice.apply(o, u), l += u.length - 3
                }
            }
        return o
    }

    function ze(t) {
        var e = t.markedSpans;
        if (e) {
            for (var n = 0; n < e.length; ++n) e[n].marker.detachLine(t);
            t.markedSpans = null
        }
    }

    function Fe(t, e) {
        if (e) {
            for (var n = 0; n < e.length; ++n) e[n].marker.attachLine(t);
            t.markedSpans = e
        }
    }

    function We(t) {
        return t.inclusiveLeft ? -1 : 0
    }

    function Re(t) {
        return t.inclusiveRight ? 1 : 0
    }

    function qe(t, e) {
        var n = t.lines.length - e.lines.length;
        if (0 != n) return n;
        var i = t.find(),
            o = e.find(),
            r = le(i.from, o.from) || We(t) - We(e);
        if (r) return -r;
        var s = le(i.to, o.to) || Re(t) - Re(e);
        return s ? s : e.id - t.id
    }

    function Be(t, e) {
        var n, i = vl && t.markedSpans;
        if (i)
            for (var o = void 0, r = 0; r < i.length; ++r) o = i[r], o.marker.collapsed && null == (e ? o.from : o.to) &&
            (!n || qe(n, o.marker) < 0) && (n = o.marker);
        return n
    }

    function Ue(t) {
        return Be(t, !0)
    }

    function Xe(t) {
        return Be(t, !1)
    }

    function Ye(t, e) {
        var n, i = vl && t.markedSpans;
        if (i)
            for (var o = 0; o < i.length; ++o) {
                var r = i[o];
                r.marker.collapsed && (null == r.from || r.from < e) && (null == r.to || r.to > e) && (!n || qe(n,
                    r.marker) < 0) && (n = r.marker)
            }
        return n
    }

    function Qe(t, e, n, i, o) {
        var r = Z(t, e),
            s = vl && r.markedSpans;
        if (s)
            for (var a = 0; a < s.length; ++a) {
                var l = s[a];
                if (l.marker.collapsed) {
                    var c = l.marker.find(0),
                        u = le(c.from, n) || We(l.marker) - We(o),
                        d = le(c.to, i) || Re(l.marker) - Re(o);
                    if (!(u >= 0 && 0 >= d || 0 >= u && d >= 0) && (0 >= u && (l.marker.inclusiveRight && o.inclusiveLeft ?
                        le(c.to, n) >= 0 : le(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && o.inclusiveLeft ?
                        le(c.from, i) <= 0 : le(c.from, i) < 0))) return !0
                }
            }
    }

    function Ve(t) {
        for (var e; e = Ue(t);) t = e.find(-1, !0).line;
        return t
    }

    function Ge(t) {
        for (var e; e = Xe(t);) t = e.find(1, !0).line;
        return t
    }

    function Je(t) {
        for (var e, n; e = Xe(t);) t = e.find(1, !0).line, (n || (n = [])).push(t);
        return n
    }

    function Ke(t, e) {
        var n = Z(t, e),
            i = Ve(n);
        return n == i ? e : ie(i)
    }

    function Ze(t, e) {
        if (e > t.lastLine()) return e;
        var n, i = Z(t, e);
        if (!tn(t, i)) return e;
        for (; n = Xe(i);) i = n.find(1, !0).line;
        return ie(i) + 1
    }

    function tn(t, e) {
        var n = vl && e.markedSpans;
        if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
                if (i = n[o], i.marker.collapsed) {
                    if (null == i.from) return !0;
                    if (!i.marker.widgetNode && 0 == i.from && i.marker.inclusiveLeft && en(t, e, i)) return !0
                }
    }

    function en(t, e, n) {
        if (null == n.to) {
            var i = n.marker.find(1, !0);
            return en(t, i.line, Ae(i.line.markedSpans, n.marker))
        }
        if (n.marker.inclusiveRight && n.to == e.text.length) return !0;
        for (var o = void 0, r = 0; r < e.markedSpans.length; ++r)
            if (o = e.markedSpans[r], o.marker.collapsed && !o.marker.widgetNode && o.from == n.to && (null == o.to ||
                o.to != n.from) && (o.marker.inclusiveLeft || n.marker.inclusiveRight) && en(t, e, o)) return !
                0
    }

    function nn(t) {
        t = Ve(t);
        for (var e = 0, n = t.parent, i = 0; i < n.lines.length; ++i) {
            var o = n.lines[i];
            if (o == t) break;
            e += o.height
        }
        for (var r = n.parent; r; n = r, r = n.parent)
            for (var s = 0; s < r.children.length; ++s) {
                var a = r.children[s];
                if (a == n) break;
                e += a.height
            }
        return e
    }

    function on(t) {
        if (0 == t.height) return 0;
        for (var e, n = t.text.length, i = t; e = Ue(i);) {
            var o = e.find(0, !0);
            i = o.from.line, n += o.from.ch - o.to.ch
        }
        for (i = t; e = Xe(i);) {
            var r = e.find(0, !0);
            n -= i.text.length - r.from.ch, i = r.to.line, n += i.text.length - r.to.ch
        }
        return n
    }

    function rn(t) {
        var e = t.display,
            n = t.doc;
        e.maxLine = Z(n, n.first), e.maxLineLength = on(e.maxLine), e.maxLineChanged = !0, n.iter(function (t) {
            var n = on(t);
            n > e.maxLineLength && (e.maxLineLength = n, e.maxLine = t)
        })
    }

    function sn(t, e, n, i) {
        t.text = e, t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null), null != t.order && (t.order =
            null), ze(t), Fe(t, n);
        var o = i ? i(t) : 1;
        o != t.height && ne(t, o)
    }

    function an(t) {
        t.parent = null, ze(t)
    }

    function ln(t, e) {
        if (!t || /^\s*$/.test(t)) return null;
        var n = e.addModeClass ? wl : xl;
        return n[t] || (n[t] = t.replace(/\S+/g, "cm-$&"))
    }

    function cn(t, e) {
        var n = o("span", null, null, Ta ? "padding-right: .1px" : null),
            i = {
                pre: o("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: t,
                trailingSpace: !1,
                splitSpaces: t.getOption("lineWrapping")
            };
        e.measure = {};
        for (var r = 0; r <= (e.rest ? e.rest.length : 0); r++) {
            var s = r ? e.rest[r - 1] : e.line,
                a = void 0;
            i.pos = 0, i.addToken = dn, q(t.display.measure) && (a = $(s, t.doc.direction)) && (i.addToken = pn(i.addToken,
                a)), i.map = [];
            var c = e != t.display.externalMeasured && ie(s);
            gn(s, i, ye(t, s, c)), s.styleClasses && (s.styleClasses.bgClass && (i.bgClass = l(s.styleClasses.bgClass,
                i.bgClass || "")), s.styleClasses.textClass && (i.textClass = l(s.styleClasses.textClass, i
                .textClass || ""))), 0 == i.map.length && i.map.push(0, 0, i.content.appendChild(R(t.display.measure))),
                0 == r ? (e.measure.map = i.map, e.measure.cache = {}) : ((e.measure.maps || (e.measure.maps = []))
                    .push(i.map), (e.measure.caches || (e.measure.caches = [])).push({}))
        }
        if (Ta) {
            var u = i.content.lastChild;
            (/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (i.content.className =
                "cm-tab-wrap-hack")
        }
        return A(t, "renderLine", t, e.line, i.pre), i.pre.className && (i.textClass = l(i.pre.className, i.textClass ||
            "")), i
    }

    function un(t) {
        var e = i("span", "•", "cm-invalidchar");
        return e.title = "\\u" + t.charCodeAt(0).toString(16), e.setAttribute("aria-label", e.title), e
    }

    function dn(t, e, n, o, r, s, a) {
        if (e) {
            var l, c = t.splitSpaces ? hn(e, t.trailingSpace) : e,
                u = t.cm.state.specialChars,
                d = !1;
            if (u.test(e)) {
                l = document.createDocumentFragment();
                for (var h = 0;;) {
                    u.lastIndex = h;
                    var p = u.exec(e),
                        g = p ? p.index - h : e.length - h;
                    if (g) {
                        var m = document.createTextNode(c.slice(h, h + g));
                        _a && 9 > Ca ? l.appendChild(i("span", [m])) : l.appendChild(m), t.map.push(t.pos, t.pos +
                            g, m), t.col += g, t.pos += g
                    }
                    if (!p) break;
                    h += g + 1;
                    var v = void 0;
                    if ("	" == p[0]) {
                        var y = t.cm.options.tabSize,
                            b = y - t.col % y;
                        v = l.appendChild(i("span", f(b), "cm-tab")), v.setAttribute("role", "presentation"), v.setAttribute(
                            "cm-text", "	"), t.col += b
                    } else "\r" == p[0] || "\n" == p[0] ? (v = l.appendChild(i("span", "\r" == p[0] ? "␍" : "␤",
                        "cm-invalidchar")), v.setAttribute("cm-text", p[0]), t.col += 1) : (v = t.cm.options.specialCharPlaceholder(
                        p[0]), v.setAttribute("cm-text", p[0]), _a && 9 > Ca ? l.appendChild(i("span", [v])) :
                        l.appendChild(v), t.col += 1);
                    t.map.push(t.pos, t.pos + 1, v), t.pos++
                }
            } else t.col += e.length, l = document.createTextNode(c), t.map.push(t.pos, t.pos + e.length, l), _a &&
            9 > Ca && (d = !0), t.pos += e.length;
            if (t.trailingSpace = 32 == c.charCodeAt(e.length - 1), n || o || r || d || s) {
                var x = n || "";
                o && (x += o), r && (x += r);
                var w = i("span", [l], x, s);
                if (a)
                    for (var _ in a) a.hasOwnProperty(_) && "style" != _ && "class" != _ && w.setAttribute(_, a[_]);
                return t.content.appendChild(w)
            }
            t.content.appendChild(l)
        }
    }

    function hn(t, e) {
        if (t.length > 1 && !/  /.test(t)) return t;
        for (var n = e, i = "", o = 0; o < t.length; o++) {
            var r = t.charAt(o);
            " " != r || !n || o != t.length - 1 && 32 != t.charCodeAt(o + 1) || (r = " "), i += r, n = " " == r
        }
        return i
    }

    function pn(t, e) {
        return function (n, i, o, r, s, a, l) {
            o = o ? o + " cm-force-border" : "cm-force-border";
            for (var c = n.pos, u = c + i.length;;) {
                for (var d = void 0, h = 0; h < e.length && (d = e[h], !(d.to > c && d.from <= c)); h++);
                if (d.to >= u) return t(n, i, o, r, s, a, l);
                t(n, i.slice(0, d.to - c), o, r, null, a, l), r = null, i = i.slice(d.to - c), c = d.to
            }
        }
    }

    function fn(t, e, n, i) {
        var o = !i && n.widgetNode;
        o && t.map.push(t.pos, t.pos + e, o), !i && t.cm.display.input.needsContentAttribute && (o || (o = t.content
            .appendChild(document.createElement("span"))), o.setAttribute("cm-marker", n.id)), o && (t.cm.display
            .input.setUneditable(o), t.content.appendChild(o)), t.pos += e, t.trailingSpace = !1
    }

    function gn(t, e, n) {
        var i = t.markedSpans,
            o = t.text,
            r = 0;
        if (i)
            for (var s, a, l, c, u, d, h, p = o.length, f = 0, g = 1, m = "", v = 0;;) {
                if (v == f) {
                    l = c = u = a = "", h = null, d = null, v = 1 / 0;
                    for (var y = [], b = void 0, x = 0; x < i.length; ++x) {
                        var w = i[x],
                            _ = w.marker;
                        if ("bookmark" == _.type && w.from == f && _.widgetNode) y.push(_);
                        else if (w.from <= f && (null == w.to || w.to > f || _.collapsed && w.to == f && w.from ==
                            f)) {
                            if (null != w.to && w.to != f && v > w.to && (v = w.to, c = ""), _.className && (l +=
                                " " + _.className), _.css && (a = (a ? a + ";" : "") + _.css), _.startStyle &&
                            w.from == f && (u += " " + _.startStyle), _.endStyle && w.to == v && (b || (b = []))
                                .push(_.endStyle, w.to), _.title && ((h || (h = {})).title = _.title), _.attributes
                            )
                                for (var C in _.attributes)(h || (h = {}))[C] = _.attributes[C];
                            _.collapsed && (!d || qe(d.marker, _) < 0) && (d = w)
                        } else w.from > f && v > w.from && (v = w.from)
                    }
                    if (b)
                        for (var T = 0; T < b.length; T += 2) b[T + 1] == v && (c += " " + b[T]);
                    if (!d || d.from == f)
                        for (var k = 0; k < y.length; ++k) fn(e, 0, y[k]);
                    if (d && (d.from || 0) == f) {
                        if (fn(e, (null == d.to ? p + 1 : d.to) - f, d.marker, null == d.from), null == d.to) return;
                        d.to == f && (d = !1)
                    }
                }
                if (f >= p) break;
                for (var S = Math.min(p, v);;) {
                    if (m) {
                        var E = f + m.length;
                        if (!d) {
                            var $ = E > S ? m.slice(0, S - f) : m;
                            e.addToken(e, $, s ? s + l : l, u, f + $.length == v ? c : "", a, h)
                        }
                        if (E >= S) {
                            m = m.slice(S - f), f = S;
                            break
                        }
                        f = E, u = ""
                    }
                    m = o.slice(r, r = n[g++]), s = ln(n[g++], e.cm.options)
                }
            } else
            for (var D = 1; D < n.length; D += 2) e.addToken(e, o.slice(r, r = n[D]), ln(n[D + 1], e.cm.options))
    }

    function mn(t, e, n) {
        this.line = e, this.rest = Je(e), this.size = this.rest ? ie(g(this.rest)) - n + 1 : 1, this.node = this.text =
            null, this.hidden = tn(t, e)
    }

    function vn(t, e, n) {
        for (var i, o = [], r = e; n > r; r = i) {
            var s = new mn(t.doc, Z(t.doc, r), r);
            i = r + s.size, o.push(s)
        }
        return o
    }

    function yn(t) {
        _l ? _l.ops.push(t) : t.ownsGroup = _l = {
            ops: [t],
            delayedCallbacks: []
        }
    }

    function bn(t) {
        var e = t.delayedCallbacks,
            n = 0;
        do {
            for (; n < e.length; n++) e[n].call(null);
            for (var i = 0; i < t.ops.length; i++) {
                var o = t.ops[i];
                if (o.cursorActivityHandlers)
                    for (; o.cursorActivityCalled < o.cursorActivityHandlers.length;) o.cursorActivityHandlers[o.cursorActivityCalled++]
                        .call(null, o.cm)
            }
        } while (n < e.length)
    }

    function xn(t, e) {
        var n = t.ownsGroup;
        if (n) try {
            bn(n)
        } finally {
            _l = null, e(n)
        }
    }

    function wn(t, e) {
        var n = D(t, e);
        if (n.length) {
            var i, o = Array.prototype.slice.call(arguments, 2);
            _l ? i = _l.delayedCallbacks : Cl ? i = Cl : (i = Cl = [], setTimeout(_n, 0));
            for (var r = function (t) {
                i.push(function () {
                    return n[t].apply(null, o)
                })
            }, s = 0; s < n.length; ++s) r(s)
        }
    }

    function _n() {
        var t = Cl;
        Cl = null;
        for (var e = 0; e < t.length; ++e) t[e]()
    }

    function Cn(t, e, n, i) {
        for (var o = 0; o < e.changes.length; o++) {
            var r = e.changes[o];
            "text" == r ? En(t, e) : "gutter" == r ? Dn(t, e, n, i) : "class" == r ? $n(t, e) : "widget" == r && Nn(
                t, e, i)
        }
        e.changes = null
    }

    function Tn(t) {
        return t.node == t.text && (t.node = i("div", null, null, "position: relative"), t.text.parentNode && t.text
            .parentNode.replaceChild(t.node, t.text), t.node.appendChild(t.text), _a && 8 > Ca && (t.node.style
            .zIndex = 2)), t.node
    }

    function kn(t, e) {
        var n = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), e.background) n ? e.background.className = n : (e.background.parentNode
            .removeChild(e.background), e.background = null);
        else if (n) {
            var o = Tn(e);
            e.background = o.insertBefore(i("div", null, n), o.firstChild), t.display.input.setUneditable(e.background)
        }
    }

    function Sn(t, e) {
        var n = t.display.externalMeasured;
        return n && n.line == e.line ? (t.display.externalMeasured = null, e.measure = n.measure, n.built) : cn(t,
            e)
    }

    function En(t, e) {
        var n = e.text.className,
            i = Sn(t, e);
        e.text == e.node && (e.node = i.pre), e.text.parentNode.replaceChild(i.pre, e.text), e.text = i.pre, i.bgClass !=
        e.bgClass || i.textClass != e.textClass ? (e.bgClass = i.bgClass, e.textClass = i.textClass, $n(t, e)) :
            n && (e.text.className = n)
    }

    function $n(t, e) {
        kn(t, e), e.line.wrapClass ? Tn(e).className = e.line.wrapClass : e.node != e.text && (e.node.className =
            "");
        var n = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
        e.text.className = n || ""
    }

    function Dn(t, e, n, o) {
        if (e.gutter && (e.node.removeChild(e.gutter), e.gutter = null), e.gutterBackground && (e.node.removeChild(
            e.gutterBackground), e.gutterBackground = null), e.line.gutterClass) {
            var r = Tn(e);
            e.gutterBackground = i("div", null, "CodeMirror-gutter-background " + e.line.gutterClass, "left: " + (t
                    .options.fixedGutter ? o.fixedPos : -o.gutterTotalWidth) + "px; width: " + o.gutterTotalWidth +
                "px"), t.display.input.setUneditable(e.gutterBackground), r.insertBefore(e.gutterBackground, e.text)
        }
        var s = e.line.gutterMarkers;
        if (t.options.lineNumbers || s) {
            var a = Tn(e),
                l = e.gutter = i("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? o.fixedPos :
                    -o.gutterTotalWidth) + "px");
            if (t.display.input.setUneditable(l), a.insertBefore(l, e.text), e.line.gutterClass && (l.className +=
                " " + e.line.gutterClass), !t.options.lineNumbers || s && s["CodeMirror-linenumbers"] || (e.lineNumber =
                l.appendChild(i("div", se(t.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt",
                    "left: " + o.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth +
                    "px"))), s)
                for (var c = 0; c < t.display.gutterSpecs.length; ++c) {
                    var u = t.display.gutterSpecs[c].className,
                        d = s.hasOwnProperty(u) && s[u];
                    d && l.appendChild(i("div", [d], "CodeMirror-gutter-elt", "left: " + o.gutterLeft[u] +
                        "px; width: " + o.gutterWidth[u] + "px"))
                }
        }
    }

    function Nn(e, n, i) {
        n.alignable && (n.alignable = null);
        for (var o = t("CodeMirror-linewidget"), r = n.node.firstChild, s = void 0; r; r = s) s = r.nextSibling, o.test(
            r.className) && n.node.removeChild(r);
        Ln(e, n, i)
    }

    function An(t, e, n, i) {
        var o = Sn(t, e);
        return e.text = e.node = o.pre, o.bgClass && (e.bgClass = o.bgClass), o.textClass && (e.textClass = o.textClass),
            $n(t, e), Dn(t, e, n, i), Ln(t, e, i), e.node
    }

    function Ln(t, e, n) {
        if (jn(t, e.line, e, n, !0), e.rest)
            for (var i = 0; i < e.rest.length; i++) jn(t, e.rest[i], e, n, !1)
    }

    function jn(t, e, n, o, r) {
        if (e.widgets)
            for (var s = Tn(n), a = 0, l = e.widgets; a < l.length; ++a) {
                var c = l[a],
                    u = i("div", [c.node], "CodeMirror-linewidget" + (c.className ? " " + c.className : ""));
                c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Mn(c, u, n, o), t.display.input.setUneditable(
                    u), r && c.above ? s.insertBefore(u, n.gutter || n.text) : s.appendChild(u), wn(c, "redraw")
            }
    }

    function Mn(t, e, n, i) {
        if (t.noHScroll) {
            (n.alignable || (n.alignable = [])).push(e);
            var o = i.wrapperWidth;
            e.style.left = i.fixedPos + "px", t.coverGutter || (o -= i.gutterTotalWidth, e.style.paddingLeft = i.gutterTotalWidth +
                "px"), e.style.width = o + "px"
        }
        t.coverGutter && (e.style.zIndex = 5, e.style.position = "relative", t.noHScroll || (e.style.marginLeft = -
            i.gutterTotalWidth + "px"))
    }

    function On(t) {
        if (null != t.height) return t.height;
        var e = t.doc.cm;
        if (!e) return 0;
        if (!r(document.body, t.node)) {
            var o = "position: relative;";
            t.coverGutter && (o += "margin-left: -" + e.display.gutters.offsetWidth + "px;"), t.noHScroll && (o +=
                "width: " + e.display.wrapper.clientWidth + "px;"), n(e.display.measure, i("div", [t.node],
                null, o))
        }
        return t.height = t.node.parentNode.offsetHeight
    }

    function Pn(t, e) {
        for (var n = F(e); n != t.wrapper; n = n.parentNode)
            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == t.sizer &&
                n != t.mover) return !0
    }

    function In(t) {
        return t.lineSpace.offsetTop
    }

    function Hn(t) {
        return t.mover.offsetHeight - t.lineSpace.offsetHeight
    }

    function zn(t) {
        if (t.cachedPaddingH) return t.cachedPaddingH;
        var e = n(t.measure, i("pre", "x", "CodeMirror-line-like")),
            o = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
            r = {
                left: parseInt(o.paddingLeft),
                right: parseInt(o.paddingRight)
            };
        return isNaN(r.left) || isNaN(r.right) || (t.cachedPaddingH = r), r
    }

    function Fn(t) {
        return Xa - t.display.nativeBarWidth
    }

    function Wn(t) {
        return t.display.scroller.clientWidth - Fn(t) - t.display.barWidth
    }

    function Rn(t) {
        return t.display.scroller.clientHeight - Fn(t) - t.display.barHeight
    }

    function qn(t, e, n) {
        var i = t.options.lineWrapping,
            o = i && Wn(t);
        if (!e.measure.heights || i && e.measure.width != o) {
            var r = e.measure.heights = [];
            if (i) {
                e.measure.width = o;
                for (var s = e.text.firstChild.getClientRects(), a = 0; a < s.length - 1; a++) {
                    var l = s[a],
                        c = s[a + 1];
                    Math.abs(l.bottom - c.bottom) > 2 && r.push((l.bottom + c.top) / 2 - n.top)
                }
            }
            r.push(n.bottom - n.top)
        }
    }

    function Bn(t, e, n) {
        if (t.line == e) return {
            map: t.measure.map,
            cache: t.measure.cache
        };
        for (var i = 0; i < t.rest.length; i++)
            if (t.rest[i] == e) return {
                map: t.measure.maps[i],
                cache: t.measure.caches[i]
            };
        for (var o = 0; o < t.rest.length; o++)
            if (ie(t.rest[o]) > n) return {
                map: t.measure.maps[o],
                cache: t.measure.caches[o],
                before: !0
            }
    }

    function Un(t, e) {
        e = Ve(e);
        var i = ie(e),
            o = t.display.externalMeasured = new mn(t.doc, e, i);
        o.lineN = i;
        var r = o.built = cn(t, o);
        return o.text = r.pre, n(t.display.lineMeasure, r.pre), o
    }

    function Xn(t, e, n, i) {
        return Vn(t, Qn(t, e), n, i)
    }

    function Yn(t, e) {
        if (e >= t.display.viewFrom && e < t.display.viewTo) return t.display.view[Si(t, e)];
        var n = t.display.externalMeasured;
        return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0
    }

    function Qn(t, e) {
        var n = ie(e),
            i = Yn(t, n);
        i && !i.text ? i = null : i && i.changes && (Cn(t, i, n, wi(t)), t.curOp.forceUpdate = !0), i || (i = Un(t,
            e));
        var o = Bn(i, e, n);
        return {
            line: e,
            view: i,
            rect: null,
            map: o.map,
            cache: o.cache,
            before: o.before,
            hasHeights: !1
        }
    }

    function Vn(t, e, n, i, o) {
        e.before && (n = -1);
        var r, s = n + (i || "");
        return e.cache.hasOwnProperty(s) ? r = e.cache[s] : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
        e.hasHeights || (qn(t, e.view, e.rect), e.hasHeights = !0), r = Kn(t, e, n, i), r.bogus || (e.cache[
            s] = r)), {
            left: r.left,
            right: r.right,
            top: o ? r.rtop : r.top,
            bottom: o ? r.rbottom : r.bottom
        }
    }

    function Gn(t, e, n) {
        for (var i, o, r, s, a, l, c = 0; c < t.length; c += 3)
            if (a = t[c], l = t[c + 1], a > e ? (o = 0, r = 1, s = "left") : l > e ? (o = e - a, r = o + 1) : (c ==
                t.length - 3 || e == l && t[c + 3] > e) && (r = l - a, o = r - 1, e >= l && (s = "right")),
            null != o) {
                if (i = t[c + 2], a == l && n == (i.insertLeft ? "left" : "right") && (s = n), "left" == n && 0 ==
                o)
                    for (; c && t[c - 2] == t[c - 3] && t[c - 1].insertLeft;) i = t[(c -= 3) + 2], s = "left";
                if ("right" == n && o == l - a)
                    for (; c < t.length - 3 && t[c + 3] == t[c + 4] && !t[c + 5].insertLeft;) i = t[(c += 3) + 2],
                        s = "right";
                break
            } return {
            node: i,
            start: o,
            end: r,
            collapse: s,
            coverStart: a,
            coverEnd: l
        }
    }

    function Jn(t, e) {
        var n = Tl;
        if ("left" == e)
            for (var i = 0; i < t.length && (n = t[i]).left == n.right; i++);
        else
            for (var o = t.length - 1; o >= 0 && (n = t[o]).left == n.right; o--);
        return n
    }

    function Kn(t, e, n, i) {
        var o, r = Gn(e.map, n, i),
            s = r.node,
            a = r.start,
            l = r.end,
            c = r.collapse;
        if (3 == s.nodeType) {
            for (var u = 0; 4 > u; u++) {
                for (; a && C(e.line.text.charAt(r.coverStart + a));) --a;
                for (; r.coverStart + l < r.coverEnd && C(e.line.text.charAt(r.coverStart + l));) ++l;
                if (o = _a && 9 > Ca && 0 == a && l == r.coverEnd - r.coverStart ? s.parentNode.getBoundingClientRect() :
                    Jn(Ha(s, a, l).getClientRects(), i), o.left || o.right || 0 == a) break;
                l = a, a -= 1, c = "right"
            }
            _a && 11 > Ca && (o = Zn(t.display.measure, o))
        } else {
            a > 0 && (c = i = "right");
            var d;
            o = t.options.lineWrapping && (d = s.getClientRects()).length > 1 ? d["right" == i ? d.length - 1 : 0] :
                s.getBoundingClientRect()
        }
        if (_a && 9 > Ca && !a && (!o || !o.left && !o.right)) {
            var h = s.parentNode.getClientRects()[0];
            o = h ? {
                left: h.left,
                right: h.left + xi(t.display),
                top: h.top,
                bottom: h.bottom
            } : Tl
        }
        for (var p = o.top - e.rect.top, f = o.bottom - e.rect.top, g = (p + f) / 2, m = e.view.measure.heights, v =
            0; v < m.length - 1 && !(g < m[v]); v++);
        var y = v ? m[v - 1] : 0,
            b = m[v],
            x = {
                left: ("right" == c ? o.right : o.left) - e.rect.left,
                right: ("left" == c ? o.left : o.right) - e.rect.left,
                top: y,
                bottom: b
            };
        return o.left || o.right || (x.bogus = !0), t.options.singleCursorHeightPerLine || (x.rtop = p, x.rbottom =
            f), x
    }

    function Zn(t, e) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !B(t)) return e;
        var n = screen.logicalXDPI / screen.deviceXDPI,
            i = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: e.left * n,
            right: e.right * n,
            top: e.top * i,
            bottom: e.bottom * i
        }
    }

    function ti(t) {
        if (t.measure && (t.measure.cache = {}, t.measure.heights = null, t.rest))
            for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {}
    }

    function ei(t) {
        t.display.externalMeasure = null, e(t.display.lineMeasure);
        for (var n = 0; n < t.display.view.length; n++) ti(t.display.view[n])
    }

    function ni(t) {
        ei(t), t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null, t.options.lineWrapping ||
        (t.display.maxLineChanged = !0), t.display.lineNumChars = null
    }

    function ii() {
        return Sa && La ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) :
            window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function oi() {
        return Sa && La ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) :
            window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function ri(t) {
        var e = 0;
        if (t.widgets)
            for (var n = 0; n < t.widgets.length; ++n) t.widgets[n].above && (e += On(t.widgets[n]));
        return e
    }

    function si(t, e, n, i, o) {
        if (!o) {
            var r = ri(e);
            n.top += r, n.bottom += r
        }
        if ("line" == i) return n;
        i || (i = "local");
        var s = nn(e);
        if ("local" == i ? s += In(t.display) : s -= t.display.viewOffset, "page" == i || "window" == i) {
            var a = t.display.lineSpace.getBoundingClientRect();
            s += a.top + ("window" == i ? 0 : oi());
            var l = a.left + ("window" == i ? 0 : ii());
            n.left += l, n.right += l
        }
        return n.top += s, n.bottom += s, n
    }

    function ai(t, e, n) {
        if ("div" == n) return e;
        var i = e.left,
            o = e.top;
        if ("page" == n) i -= ii(), o -= oi();
        else if ("local" == n || !n) {
            var r = t.display.sizer.getBoundingClientRect();
            i += r.left, o += r.top
        }
        var s = t.display.lineSpace.getBoundingClientRect();
        return {
            left: i - s.left,
            top: o - s.top
        }
    }

    function li(t, e, n, i, o) {
        return i || (i = Z(t.doc, e.line)), si(t, i, Xn(t, i, e.ch, o), n)
    }

    function ci(t, e, n, i, o, r) {
        function s(e, s) {
            var a = Vn(t, o, e, s ? "right" : "left", r);
            return s ? a.left = a.right : a.right = a.left, si(t, i, a, n)
        }

        function a(t, e, n) {
            var i = l[e],
                o = 1 == i.level;
            return s(n ? t - 1 : t, o != n)
        }
        i = i || Z(t.doc, e.line), o || (o = Qn(t, i));
        var l = $(i, t.doc.direction),
            c = e.ch,
            u = e.sticky;
        if (c >= i.text.length ? (c = i.text.length, u = "before") : 0 >= c && (c = 0, u = "after"), !l) return s(
            "before" == u ? c - 1 : c, "before" == u);
        var d = E(l, c, u),
            h = tl,
            p = a(c, d, "before" == u);
        return null != h && (p.other = a(c, h, "before" != u)), p
    }

    function ui(t, e) {
        var n = 0;
        e = fe(t.doc, e), t.options.lineWrapping || (n = xi(t.display) * e.ch);
        var i = Z(t.doc, e.line),
            o = nn(i) + In(t.display);
        return {
            left: n,
            right: n,
            top: o,
            bottom: o + i.height
        }
    }

    function di(t, e, n, i, o) {
        var r = ae(t, e, n);
        return r.xRel = o, i && (r.outside = i), r
    }

    function hi(t, e, n) {
        var i = t.doc;
        if (n += t.display.viewOffset, 0 > n) return di(i.first, 0, null, -1, -1);
        var o = oe(i, n),
            r = i.first + i.size - 1;
        if (o > r) return di(i.first + i.size - 1, Z(i, r).text.length, null, 1, 1);
        0 > e && (e = 0);
        for (var s = Z(i, o);;) {
            var a = mi(t, s, o, e, n),
                l = Ye(s, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
            if (!l) return a;
            var c = l.find(1);
            if (c.line == o) return c;
            s = Z(i, o = c.line)
        }
    }

    function pi(t, e, n, i) {
        i -= ri(e);
        var o = e.text.length,
            r = k(function (e) {
                return Vn(t, n, e - 1).bottom <= i
            }, o, 0);
        return o = k(function (e) {
            return Vn(t, n, e).top > i
        }, r, o), {
            begin: r,
            end: o
        }
    }

    function fi(t, e, n, i) {
        n || (n = Qn(t, e));
        var o = si(t, e, Vn(t, n, i), "line").top;
        return pi(t, e, n, o)
    }

    function gi(t, e, n, i) {
        return t.bottom <= n ? !1 : t.top > n ? !0 : (i ? t.left : t.right) > e
    }

    function mi(t, e, n, i, o) {
        o -= nn(e);
        var r = Qn(t, e),
            s = ri(e),
            a = 0,
            l = e.text.length,
            c = !0,
            u = $(e, t.doc.direction);
        if (u) {
            var d = (t.options.lineWrapping ? yi : vi)(t, e, n, r, u, i, o);
            c = 1 != d.level, a = c ? d.from : d.to - 1, l = c ? d.to : d.from - 1
        }
        var h, p, f = null,
            g = null,
            m = k(function (e) {
                var n = Vn(t, r, e);
                return n.top += s, n.bottom += s, gi(n, i, o, !1) ? (n.top <= o && n.left <= i && (f = e, g = n),
                    !0) : !1
            }, a, l),
            v = !1;
        if (g) {
            var y = i - g.left < g.right - i,
                b = y == c;
            m = f + (b ? 0 : 1), p = b ? "after" : "before", h = y ? g.left : g.right
        } else {
            c || m != l && m != a || m++, p = 0 == m ? "after" : m == e.text.length ? "before" : Vn(t, r, m - (c ?
                1 : 0)).bottom + s <= o == c ? "after" : "before";
            var x = ci(t, ae(n, m, p), "line", e, r);
            h = x.left, v = o < x.top ? -1 : o >= x.bottom ? 1 : 0
        }
        return m = T(e.text, m, 1), di(n, m, p, v, i - h)
    }

    function vi(t, e, n, i, o, r, s) {
        var a = k(function (a) {
                var l = o[a],
                    c = 1 != l.level;
                return gi(ci(t, ae(n, c ? l.to : l.from, c ? "before" : "after"), "line", e, i), r, s, !0)
            }, 0, o.length - 1),
            l = o[a];
        if (a > 0) {
            var c = 1 != l.level,
                u = ci(t, ae(n, c ? l.from : l.to, c ? "after" : "before"), "line", e, i);
            gi(u, r, s, !0) && u.top > s && (l = o[a - 1])
        }
        return l
    }

    function yi(t, e, n, i, o, r, s) {
        var a = pi(t, e, i, s),
            l = a.begin,
            c = a.end;
        /\s/.test(e.text.charAt(c - 1)) && c--;
        for (var u = null, d = null, h = 0; h < o.length; h++) {
            var p = o[h];
            if (!(p.from >= c || p.to <= l)) {
                var f = 1 != p.level,
                    g = Vn(t, i, f ? Math.min(c, p.to) - 1 : Math.max(l, p.from)).right,
                    m = r > g ? r - g + 1e9 : g - r;
                (!u || d > m) && (u = p, d = m)
            }
        }
        return u || (u = o[o.length - 1]), u.from < l && (u = {
            from: l,
            to: u.to,
            level: u.level
        }), u.to > c && (u = {
            from: u.from,
            to: c,
            level: u.level
        }), u
    }

    function bi(t) {
        if (null != t.cachedTextHeight) return t.cachedTextHeight;
        if (null == bl) {
            bl = i("pre", null, "CodeMirror-line-like");
            for (var o = 0; 49 > o; ++o) bl.appendChild(document.createTextNode("x")), bl.appendChild(i("br"));
            bl.appendChild(document.createTextNode("x"))
        }
        n(t.measure, bl);
        var r = bl.offsetHeight / 50;
        return r > 3 && (t.cachedTextHeight = r), e(t.measure), r || 1
    }

    function xi(t) {
        if (null != t.cachedCharWidth) return t.cachedCharWidth;
        var e = i("span", "xxxxxxxxxx"),
            o = i("pre", [e], "CodeMirror-line-like");
        n(t.measure, o);
        var r = e.getBoundingClientRect(),
            s = (r.right - r.left) / 10;
        return s > 2 && (t.cachedCharWidth = s), s || 10
    }

    function wi(t) {
        for (var e = t.display, n = {}, i = {}, o = e.gutters.clientLeft, r = e.gutters.firstChild, s = 0; r; r = r
            .nextSibling, ++s) {
            var a = t.display.gutterSpecs[s].className;
            n[a] = r.offsetLeft + r.clientLeft + o, i[a] = r.clientWidth
        }
        return {
            fixedPos: _i(e),
            gutterTotalWidth: e.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: i,
            wrapperWidth: e.wrapper.clientWidth
        }
    }

    function _i(t) {
        return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left
    }

    function Ci(t) {
        var e = bi(t.display),
            n = t.options.lineWrapping,
            i = n && Math.max(5, t.display.scroller.clientWidth / xi(t.display) - 3);
        return function (o) {
            if (tn(t.doc, o)) return 0;
            var r = 0;
            if (o.widgets)
                for (var s = 0; s < o.widgets.length; s++) o.widgets[s].height && (r += o.widgets[s].height);
            return n ? r + (Math.ceil(o.text.length / i) || 1) * e : r + e
        }
    }

    function Ti(t) {
        var e = t.doc,
            n = Ci(t);
        e.iter(function (t) {
            var e = n(t);
            e != t.height && ne(t, e)
        })
    }

    function ki(t, e, n, i) {
        var o = t.display;
        if (!n && "true" == F(e).getAttribute("cm-not-content")) return null;
        var r, s, a = o.lineSpace.getBoundingClientRect();
        try {
            r = e.clientX - a.left, s = e.clientY - a.top
        } catch (e) {
            return null
        }
        var l, c = hi(t, r, s);
        if (i && c.xRel > 0 && (l = Z(t.doc, c.line).text).length == c.ch) {
            var u = d(l, l.length, t.options.tabSize) - l.length;
            c = ae(c.line, Math.max(0, Math.round((r - zn(t.display).left) / xi(t.display)) - u))
        }
        return c
    }

    function Si(t, e) {
        if (e >= t.display.viewTo) return null;
        if (e -= t.display.viewFrom, 0 > e) return null;
        for (var n = t.display.view, i = 0; i < n.length; i++)
            if (e -= n[i].size, 0 > e) return i
    }

    function Ei(t, e, n, i) {
        null == e && (e = t.doc.first), null == n && (n = t.doc.first + t.doc.size), i || (i = 0);
        var o = t.display;
        if (i && n < o.viewTo && (null == o.updateLineNumbers || o.updateLineNumbers > e) && (o.updateLineNumbers =
            e), t.curOp.viewChanged = !0, e >= o.viewTo) vl && Ke(t.doc, e) < o.viewTo && Di(t);
        else if (n <= o.viewFrom) vl && Ze(t.doc, n + i) > o.viewFrom ? Di(t) : (o.viewFrom += i, o.viewTo += i);
        else if (e <= o.viewFrom && n >= o.viewTo) Di(t);
        else if (e <= o.viewFrom) {
            var r = Ni(t, n, n + i, 1);
            r ? (o.view = o.view.slice(r.index), o.viewFrom = r.lineN, o.viewTo += i) : Di(t)
        } else if (n >= o.viewTo) {
            var s = Ni(t, e, e, -1);
            s ? (o.view = o.view.slice(0, s.index), o.viewTo = s.lineN) : Di(t)
        } else {
            var a = Ni(t, e, e, -1),
                l = Ni(t, n, n + i, 1);
            a && l ? (o.view = o.view.slice(0, a.index).concat(vn(t, a.lineN, l.lineN)).concat(o.view.slice(l.index)),
                o.viewTo += i) : Di(t)
        }
        var c = o.externalMeasured;
        c && (n < c.lineN ? c.lineN += i : e < c.lineN + c.size && (o.externalMeasured = null))
    }

    function $i(t, e, n) {
        t.curOp.viewChanged = !0;
        var i = t.display,
            o = t.display.externalMeasured;
        if (o && e >= o.lineN && e < o.lineN + o.size && (i.externalMeasured = null), !(e < i.viewFrom || e >= i.viewTo)) {
            var r = i.view[Si(t, e)];
            if (null != r.node) {
                var s = r.changes || (r.changes = []); - 1 == h(s, n) && s.push(n)
            }
        }
    }

    function Di(t) {
        t.display.viewFrom = t.display.viewTo = t.doc.first, t.display.view = [], t.display.viewOffset = 0
    }

    function Ni(t, e, n, i) {
        var o, r = Si(t, e),
            s = t.display.view;
        if (!vl || n == t.doc.first + t.doc.size) return {
            index: r,
            lineN: n
        };
        for (var a = t.display.viewFrom, l = 0; r > l; l++) a += s[l].size;
        if (a != e) {
            if (i > 0) {
                if (r == s.length - 1) return null;
                o = a + s[r].size - e, r++
            } else o = a - e;
            e += o, n += o
        }
        for (; Ke(t.doc, n) != n;) {
            if (r == (0 > i ? 0 : s.length - 1)) return null;
            n += i * s[r - (0 > i ? 1 : 0)].size, r += i
        }
        return {
            index: r,
            lineN: n
        }
    }

    function Ai(t, e, n) {
        var i = t.display,
            o = i.view;
        0 == o.length || e >= i.viewTo || n <= i.viewFrom ? (i.view = vn(t, e, n), i.viewFrom = e) : (i.viewFrom >
        e ? i.view = vn(t, e, i.viewFrom).concat(i.view) : i.viewFrom < e && (i.view = i.view.slice(Si(t, e))),
            i.viewFrom = e, i.viewTo < n ? i.view = i.view.concat(vn(t, i.viewTo, n)) : i.viewTo > n && (i.view =
            i.view.slice(0, Si(t, n)))), i.viewTo = n
    }

    function Li(t) {
        for (var e = t.display.view, n = 0, i = 0; i < e.length; i++) {
            var o = e[i];
            o.hidden || o.node && !o.changes || ++n
        }
        return n
    }

    function ji(t) {
        t.display.input.showSelection(t.display.input.prepareSelection())
    }

    function Mi(t, e) {
        void 0 === e && (e = !0);
        for (var n = t.doc, i = {}, o = i.cursors = document.createDocumentFragment(), r = i.selection = document.createDocumentFragment(),
                 s = 0; s < n.sel.ranges.length; s++)
            if (e || s != n.sel.primIndex) {
                var a = n.sel.ranges[s];
                if (!(a.from().line >= t.display.viewTo || a.to().line < t.display.viewFrom)) {
                    var l = a.empty();
                    (l || t.options.showCursorWhenSelecting) && Oi(t, a.head, o), l || Ii(t, a, r)
                }
            } return i
    }

    function Oi(t, e, n) {
        var o = ci(t, e, "div", null, null, !t.options.singleCursorHeightPerLine),
            r = n.appendChild(i("div", " ", "CodeMirror-cursor"));
        if (r.style.left = o.left + "px", r.style.top = o.top + "px", r.style.height = Math.max(0, o.bottom - o.top) *
            t.options.cursorHeight + "px", o.other) {
            var s = n.appendChild(i("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            s.style.display = "", s.style.left = o.other.left + "px", s.style.top = o.other.top + "px", s.style.height =
                .85 * (o.other.bottom - o.other.top) + "px"
        }
    }

    function Pi(t, e) {
        return t.top - e.top || t.left - e.left
    }

    function Ii(t, e, n) {
        function o(t, e, n, o) {
            0 > e && (e = 0), e = Math.round(e), o = Math.round(o), l.appendChild(i("div", null,
                "CodeMirror-selected", "position: absolute; left: " + t +
                "px;\n                             top: " + e + "px; width: " + (null == n ? d - t : n) +
                "px;\n                             height: " + (o - e) + "px"))
        }

        function r(e, n, i) {
            function r(n, i) {
                return li(t, ae(e, n), "div", p, i)
            }

            function s(e, n, i) {
                var o = fi(t, p, null, e),
                    s = "ltr" == n == ("after" == i) ? "left" : "right",
                    a = "after" == i ? o.begin : o.end - (/\s/.test(p.text.charAt(o.end - 1)) ? 2 : 1);
                return r(a, s)[s]
            }
            var l, c, p = Z(a, e),
                f = p.text.length,
                g = $(p, a.direction);
            return S(g, n || 0, null == i ? f : i, function (t, e, a, p) {
                var m = "ltr" == a,
                    v = r(t, m ? "left" : "right"),
                    y = r(e - 1, m ? "right" : "left"),
                    b = null == n && 0 == t,
                    x = null == i && e == f,
                    w = 0 == p,
                    _ = !g || p == g.length - 1;
                if (y.top - v.top <= 3) {
                    var C = (h ? b : x) && w,
                        T = (h ? x : b) && _,
                        k = C ? u : (m ? v : y).left,
                        S = T ? d : (m ? y : v).right;
                    o(k, v.top, S - k, v.bottom)
                } else {
                    var E, $, D, N;
                    m ? (E = h && b && w ? u : v.left, $ = h ? d : s(t, a, "before"), D = h ? u : s(e, a,
                        "after"), N = h && x && _ ? d : y.right) : (E = h ? s(t, a, "before") : u, $ = !
                        h && b && w ? d : v.right, D = !h && x && _ ? u : y.left, N = h ? s(e, a,
                        "after") : d), o(E, v.top, $ - E, v.bottom), v.bottom < y.top && o(u, v.bottom,
                        null, y.top), o(D, y.top, N - D, y.bottom)
                }(!l || Pi(v, l) < 0) && (l = v), Pi(y, l) < 0 && (l = y), (!c || Pi(v, c) < 0) && (c = v),
                Pi(y, c) < 0 && (c = y)
            }), {
                start: l,
                end: c
            }
        }
        var s = t.display,
            a = t.doc,
            l = document.createDocumentFragment(),
            c = zn(t.display),
            u = c.left,
            d = Math.max(s.sizerWidth, Wn(t) - s.sizer.offsetLeft) - c.right,
            h = "ltr" == a.direction,
            p = e.from(),
            f = e.to();
        if (p.line == f.line) r(p.line, p.ch, f.ch);
        else {
            var g = Z(a, p.line),
                m = Z(a, f.line),
                v = Ve(g) == Ve(m),
                y = r(p.line, p.ch, v ? g.text.length + 1 : null).end,
                b = r(f.line, v ? 0 : null, f.ch).start;
            v && (y.top < b.top - 2 ? (o(y.right, y.top, null, y.bottom), o(u, b.top, b.left, b.bottom)) : o(y.right,
                y.top, b.left - y.right, y.bottom)), y.bottom < b.top && o(u, y.bottom, null, b.top)
        }
        n.appendChild(l)
    }

    function Hi(t) {
        if (t.state.focused) {
            var e = t.display;
            clearInterval(e.blinker);
            var n = !0;
            e.cursorDiv.style.visibility = "", t.options.cursorBlinkRate > 0 ? e.blinker = setInterval(function () {
                return e.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
            }, t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility =
                "hidden")
        }
    }

    function zi(t) {
        t.state.focused || (t.display.input.focus(), Wi(t))
    }

    function Fi(t) {
        t.state.delayingBlurEvent = !0, setTimeout(function () {
            t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1, Ri(t))
        }, 100)
    }

    function Wi(t, e) {
        t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1), "nocursor" != t.options.readOnly && (t.state
            .focused || (A(t, "focus", t, e), t.state.focused = !0, a(t.display.wrapper, "CodeMirror-focused"),
        t.curOp || t.display.selForContextMenu == t.doc.sel || (t.display.input.reset(), Ta &&
        setTimeout(function () {
            return t.display.input.reset(!0)
        }, 20)), t.display.input.receivedFocus()), Hi(t))
    }

    function Ri(t, e) {
        t.state.delayingBlurEvent || (t.state.focused && (A(t, "blur", t, e), t.state.focused = !1, Wa(t.display.wrapper,
            "CodeMirror-focused")), clearInterval(t.display.blinker), setTimeout(function () {
            t.state.focused || (t.display.shift = !1)
        }, 150))
    }

    function qi(t) {
        for (var e = t.display, n = e.lineDiv.offsetTop, i = 0; i < e.view.length; i++) {
            var o = e.view[i],
                r = t.options.lineWrapping,
                s = void 0,
                a = 0;
            if (!o.hidden) {
                if (_a && 8 > Ca) {
                    var l = o.node.offsetTop + o.node.offsetHeight;
                    s = l - n, n = l
                } else {
                    var c = o.node.getBoundingClientRect();
                    s = c.bottom - c.top, !r && o.text.firstChild && (a = o.text.firstChild.getBoundingClientRect()
                        .right - c.left - 1)
                }
                var u = o.line.height - s;
                if ((u > .005 || -.005 > u) && (ne(o.line, s), Bi(o.line), o.rest))
                    for (var d = 0; d < o.rest.length; d++) Bi(o.rest[d]);
                if (a > t.display.sizerWidth) {
                    var h = Math.ceil(a / xi(t.display));
                    h > t.display.maxLineLength && (t.display.maxLineLength = h, t.display.maxLine = o.line, t.display
                        .maxLineChanged = !0)
                }
            }
        }
    }

    function Bi(t) {
        if (t.widgets)
            for (var e = 0; e < t.widgets.length; ++e) {
                var n = t.widgets[e],
                    i = n.node.parentNode;
                i && (n.height = i.offsetHeight)
            }
    }

    function Ui(t, e, n) {
        var i = n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
        i = Math.floor(i - In(t));
        var o = n && null != n.bottom ? n.bottom : i + t.wrapper.clientHeight,
            r = oe(e, i),
            s = oe(e, o);
        if (n && n.ensure) {
            var a = n.ensure.from.line,
                l = n.ensure.to.line;
            r > a ? (r = a, s = oe(e, nn(Z(e, a)) + t.wrapper.clientHeight)) : Math.min(l, e.lastLine()) >= s && (r =
                oe(e, nn(Z(e, l)) - t.wrapper.clientHeight), s = l)
        }
        return {
            from: r,
            to: Math.max(s, r + 1)
        }
    }

    function Xi(t, e) {
        if (!L(t, "scrollCursorIntoView")) {
            var n = t.display,
                o = n.sizer.getBoundingClientRect(),
                r = null;
            if (e.top + o.top < 0 ? r = !0 : e.bottom + o.top > (window.innerHeight || document.documentElement.clientHeight) &&
                (r = !1), null != r && !Na) {
                var s = i("div", "​", null, "position: absolute;\n                         top: " + (e.top - n.viewOffset -
                    In(t.display)) + "px;\n                         height: " + (e.bottom - e.top + Fn(t) +
                    n.barHeight) + "px;\n                         left: " + e.left + "px; width: " + Math.max(
                    2, e.right - e.left) + "px;");
                t.display.lineSpace.appendChild(s), s.scrollIntoView(r), t.display.lineSpace.removeChild(s)
            }
        }
    }

    function Yi(t, e, n, i) {
        null == i && (i = 0);
        var o;
        t.options.lineWrapping || e != n || (e = e.ch ? ae(e.line, "before" == e.sticky ? e.ch - 1 : e.ch, "after") :
            e, n = "before" == e.sticky ? ae(e.line, e.ch + 1, "before") : e);
        for (var r = 0; 5 > r; r++) {
            var s = !1,
                a = ci(t, e),
                l = n && n != e ? ci(t, n) : a;
            o = {
                left: Math.min(a.left, l.left),
                top: Math.min(a.top, l.top) - i,
                right: Math.max(a.left, l.left),
                bottom: Math.max(a.bottom, l.bottom) + i
            };
            var c = Vi(t, o),
                u = t.doc.scrollTop,
                d = t.doc.scrollLeft;
            if (null != c.scrollTop && (no(t, c.scrollTop), Math.abs(t.doc.scrollTop - u) > 1 && (s = !0)), null !=
            c.scrollLeft && (oo(t, c.scrollLeft), Math.abs(t.doc.scrollLeft - d) > 1 && (s = !0)), !s) break
        }
        return o
    }

    function Qi(t, e) {
        var n = Vi(t, e);
        null != n.scrollTop && no(t, n.scrollTop), null != n.scrollLeft && oo(t, n.scrollLeft)
    }

    function Vi(t, e) {
        var n = t.display,
            i = bi(t.display);
        e.top < 0 && (e.top = 0);
        var o = t.curOp && null != t.curOp.scrollTop ? t.curOp.scrollTop : n.scroller.scrollTop,
            r = Rn(t),
            s = {};
        e.bottom - e.top > r && (e.bottom = e.top + r);
        var a = t.doc.height + Hn(n),
            l = e.top < i,
            c = e.bottom > a - i;
        if (e.top < o) s.scrollTop = l ? 0 : e.top;
        else if (e.bottom > o + r) {
            var u = Math.min(e.top, (c ? a : e.bottom) - r);
            u != o && (s.scrollTop = u)
        }
        var d = t.curOp && null != t.curOp.scrollLeft ? t.curOp.scrollLeft : n.scroller.scrollLeft,
            h = Wn(t) - (t.options.fixedGutter ? n.gutters.offsetWidth : 0),
            p = e.right - e.left > h;
        return p && (e.right = e.left + h), e.left < 10 ? s.scrollLeft = 0 : e.left < d ? s.scrollLeft = Math.max(0,
            e.left - (p ? 0 : 10)) : e.right > h + d - 3 && (s.scrollLeft = e.right + (p ? 0 : 10) - h), s
    }

    function Gi(t, e) {
        null != e && (to(t), t.curOp.scrollTop = (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) +
            e)
    }

    function Ji(t) {
        to(t);
        var e = t.getCursor();
        t.curOp.scrollToPos = {
            from: e,
            to: e,
            margin: t.options.cursorScrollMargin
        }
    }

    function Ki(t, e, n) {
        (null != e || null != n) && to(t), null != e && (t.curOp.scrollLeft = e), null != n && (t.curOp.scrollTop =
            n)
    }

    function Zi(t, e) {
        to(t), t.curOp.scrollToPos = e
    }

    function to(t) {
        var e = t.curOp.scrollToPos;
        if (e) {
            t.curOp.scrollToPos = null;
            var n = ui(t, e.from),
                i = ui(t, e.to);
            eo(t, n, i, e.margin)
        }
    }

    function eo(t, e, n, i) {
        var o = Vi(t, {
            left: Math.min(e.left, n.left),
            top: Math.min(e.top, n.top) - i,
            right: Math.max(e.right, n.right),
            bottom: Math.max(e.bottom, n.bottom) + i
        });
        Ki(t, o.scrollLeft, o.scrollTop)
    }

    function no(t, e) {
        Math.abs(t.doc.scrollTop - e) < 2 || (ya || Do(t, {
            top: e
        }), io(t, e, !0), ya && Do(t), _o(t, 100))
    }

    function io(t, e, n) {
        e = Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e), (t.display.scroller.scrollTop !=
            e || n) && (t.doc.scrollTop = e, t.display.scrollbars.setScrollTop(e), t.display.scroller.scrollTop !=
        e && (t.display.scroller.scrollTop = e))
    }

    function oo(t, e, n, i) {
        e = Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth), (!(n ? e == t.doc.scrollLeft :
            Math.abs(t.doc.scrollLeft - e) < 2) || i) && (t.doc.scrollLeft = e, jo(t), t.display.scroller.scrollLeft !=
        e && (t.display.scroller.scrollLeft = e), t.display.scrollbars.setScrollLeft(e))
    }

    function ro(t) {
        var e = t.display,
            n = e.gutters.offsetWidth,
            i = Math.round(t.doc.height + Hn(t.display));
        return {
            clientHeight: e.scroller.clientHeight,
            viewHeight: e.wrapper.clientHeight,
            scrollWidth: e.scroller.scrollWidth,
            clientWidth: e.scroller.clientWidth,
            viewWidth: e.wrapper.clientWidth,
            barLeft: t.options.fixedGutter ? n : 0,
            docHeight: i,
            scrollHeight: i + Fn(t) + e.barHeight,
            nativeBarWidth: e.nativeBarWidth,
            gutterWidth: n
        }
    }

    function so(t, e) {
        e || (e = ro(t));
        var n = t.display.barWidth,
            i = t.display.barHeight;
        ao(t, e);
        for (var o = 0; 4 > o && n != t.display.barWidth || i != t.display.barHeight; o++) n != t.display.barWidth &&
        t.options.lineWrapping && qi(t), ao(t, ro(t)), n = t.display.barWidth, i = t.display.barHeight
    }

    function ao(t, e) {
        var n = t.display,
            i = n.scrollbars.update(e);
        n.sizer.style.paddingRight = (n.barWidth = i.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = i.bottom) +
            "px", n.heightForcer.style.borderBottom = i.bottom + "px solid transparent", i.right && i.bottom ? (n.scrollbarFiller
            .style.display = "block", n.scrollbarFiller.style.height = i.bottom + "px", n.scrollbarFiller.style
            .width = i.right + "px") : n.scrollbarFiller.style.display = "", i.bottom && t.options.coverGutterNextToScrollbar &&
        t.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = i.bottom +
            "px", n.gutterFiller.style.width = e.gutterWidth + "px") : n.gutterFiller.style.display = ""
    }

    function lo(t) {
        t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Wa(t.display.wrapper,
            t.display.scrollbars.addClass)), t.display.scrollbars = new El[t.options.scrollbarStyle](function (
            e) {
            t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), il(e, "mousedown", function () {
                t.state.focused && setTimeout(function () {
                    return t.display.input.focus()
                }, 0)
            }), e.setAttribute("cm-not-content", "true")
        }, function (e, n) {
            "horizontal" == n ? oo(t, e) : no(t, e)
        }, t), t.display.scrollbars.addClass && a(t.display.wrapper, t.display.scrollbars.addClass)
    }

    function co(t) {
        t.curOp = {
            cm: t,
            viewChanged: !1,
            startHeight: t.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++$l
        }, yn(t.curOp)
    }

    function uo(t) {
        var e = t.curOp;
        e && xn(e, function (t) {
            for (var e = 0; e < t.ops.length; e++) t.ops[e].cm.curOp = null;
            ho(t)
        })
    }

    function ho(t) {
        for (var e = t.ops, n = 0; n < e.length; n++) po(e[n]);
        for (var i = 0; i < e.length; i++) fo(e[i]);
        for (var o = 0; o < e.length; o++) go(e[o]);
        for (var r = 0; r < e.length; r++) mo(e[r]);
        for (var s = 0; s < e.length; s++) vo(e[s])
    }

    function po(t) {
        var e = t.cm,
            n = e.display;
        To(e), t.updateMaxLine && rn(e), t.mustUpdate = t.viewChanged || t.forceUpdate || null != t.scrollTop || t.scrollToPos &&
            (t.scrollToPos.from.line < n.viewFrom || t.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && e.options
                .lineWrapping, t.update = t.mustUpdate && new Dl(e, t.mustUpdate && {
            top: t.scrollTop,
            ensure: t.scrollToPos
        }, t.forceUpdate)
    }

    function fo(t) {
        t.updatedDisplay = t.mustUpdate && Eo(t.cm, t.update)
    }

    function go(t) {
        var e = t.cm,
            n = e.display;
        t.updatedDisplay && qi(e), t.barMeasure = ro(e), n.maxLineChanged && !e.options.lineWrapping && (t.adjustWidthTo =
            Xn(e, n.maxLine, n.maxLine.text.length).left + 3, e.display.sizerWidth = t.adjustWidthTo, t.barMeasure
            .scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + t.adjustWidthTo + Fn(e) + e.display
            .barWidth), t.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + t.adjustWidthTo - Wn(e))), (t.updatedDisplay ||
            t.selectionChanged) && (t.preparedSelection = n.input.prepareSelection())
    }

    function mo(t) {
        var e = t.cm;
        null != t.adjustWidthTo && (e.display.sizer.style.minWidth = t.adjustWidthTo + "px", t.maxScrollLeft < e.doc
            .scrollLeft && oo(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0), e.display.maxLineChanged = !
            1);
        var n = t.focus && t.focus == s();
        t.preparedSelection && e.display.input.showSelection(t.preparedSelection, n), (t.updatedDisplay || t.startHeight !=
            e.doc.height) && so(e, t.barMeasure), t.updatedDisplay && Lo(e, t.barMeasure), t.selectionChanged &&
        Hi(e), e.state.focused && t.updateInput && e.display.input.reset(t.typing), n && zi(t.cm)
    }

    function vo(t) {
        var e = t.cm,
            n = e.display,
            i = e.doc;
        if (t.updatedDisplay && $o(e, t.update), null == n.wheelStartX || null == t.scrollTop && null == t.scrollLeft &&
        !t.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != t.scrollTop && io(e, t.scrollTop, t.forceScroll),
        null != t.scrollLeft && oo(e, t.scrollLeft, !0, !0), t.scrollToPos) {
            var o = Yi(e, fe(i, t.scrollToPos.from), fe(i, t.scrollToPos.to), t.scrollToPos.margin);
            Xi(e, o)
        }
        var r = t.maybeHiddenMarkers,
            s = t.maybeUnhiddenMarkers;
        if (r)
            for (var a = 0; a < r.length; ++a) r[a].lines.length || A(r[a], "hide");
        if (s)
            for (var l = 0; l < s.length; ++l) s[l].lines.length && A(s[l], "unhide");
        n.wrapper.offsetHeight && (i.scrollTop = e.display.scroller.scrollTop), t.changeObjs && A(e, "changes", e,
            t.changeObjs), t.update && t.update.finish()
    }

    function yo(t, e) {
        if (t.curOp) return e();
        co(t);
        try {
            return e()
        } finally {
            uo(t)
        }
    }

    function bo(t, e) {
        return function () {
            if (t.curOp) return e.apply(t, arguments);
            co(t);
            try {
                return e.apply(t, arguments)
            } finally {
                uo(t)
            }
        }
    }

    function xo(t) {
        return function () {
            if (this.curOp) return t.apply(this, arguments);
            co(this);
            try {
                return t.apply(this, arguments)
            } finally {
                uo(this)
            }
        }
    }

    function wo(t) {
        return function () {
            var e = this.cm;
            if (!e || e.curOp) return t.apply(this, arguments);
            co(e);
            try {
                return t.apply(this, arguments)
            } finally {
                uo(e)
            }
        }
    }

    function _o(t, e) {
        t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, c(Co, t))
    }

    function Co(t) {
        var e = t.doc;
        if (!(e.highlightFrontier >= t.display.viewTo)) {
            var n = +new Date + t.options.workTime,
                i = be(t, e.highlightFrontier),
                o = [];
            e.iter(i.line, Math.min(e.first + e.size, t.display.viewTo + 500), function (r) {
                if (i.line >= t.display.viewFrom) {
                    var s = r.styles,
                        a = r.text.length > t.options.maxHighlightLength ? G(e.mode, i.state) : null,
                        l = ve(t, r, i, !0);
                    a && (i.state = a), r.styles = l.styles;
                    var c = r.styleClasses,
                        u = l.classes;
                    u ? r.styleClasses = u : c && (r.styleClasses = null);
                    for (var d = !s || s.length != r.styles.length || c != u && (!c || !u || c.bgClass != u
                        .bgClass || c.textClass != u.textClass), h = 0; !d && h < s.length; ++h) d = s[
                        h] != r.styles[h];
                    d && o.push(i.line), r.stateAfter = i.save(), i.nextLine()
                } else r.text.length <= t.options.maxHighlightLength && xe(t, r.text, i), r.stateAfter = 0 ==
                i.line % 5 ? i.save() : null, i.nextLine();
                return +new Date > n ? (_o(t, t.options.workDelay), !0) : void 0
            }), e.highlightFrontier = i.line, e.modeFrontier = Math.max(e.modeFrontier, i.line), o.length && yo(
                t,
                function () {
                    for (var e = 0; e < o.length; e++) $i(t, o[e], "text")
                })
        }
    }

    function To(t) {
        var e = t.display;
        !e.scrollbarsClipped && e.scroller.offsetWidth && (e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth,
            e.heightForcer.style.height = Fn(t) + "px", e.sizer.style.marginBottom = -e.nativeBarWidth + "px",
            e.sizer.style.borderRightWidth = Fn(t) + "px", e.scrollbarsClipped = !0)
    }

    function ko(t) {
        if (t.hasFocus()) return null;
        var e = s();
        if (!e || !r(t.display.lineDiv, e)) return null;
        var n = {
            activeElt: e
        };
        if (window.getSelection) {
            var i = window.getSelection();
            i.anchorNode && i.extend && r(t.display.lineDiv, i.anchorNode) && (n.anchorNode = i.anchorNode, n.anchorOffset =
                i.anchorOffset, n.focusNode = i.focusNode, n.focusOffset = i.focusOffset)
        }
        return n
    }

    function So(t) {
        if (t && t.activeElt && t.activeElt != s() && (t.activeElt.focus(), t.anchorNode && r(document.body, t.anchorNode) &&
        r(document.body, t.focusNode))) {
            var e = window.getSelection(),
                n = document.createRange();
            n.setEnd(t.anchorNode, t.anchorOffset), n.collapse(!1), e.removeAllRanges(), e.addRange(n), e.extend(t.focusNode,
                t.focusOffset)
        }
    }

    function Eo(t, n) {
        var i = t.display,
            o = t.doc;
        if (n.editorIsHidden) return Di(t), !1;
        if (!n.force && n.visible.from >= i.viewFrom && n.visible.to <= i.viewTo && (null == i.updateLineNumbers ||
            i.updateLineNumbers >= i.viewTo) && i.renderedView == i.view && 0 == Li(t)) return !1;
        Mo(t) && (Di(t), n.dims = wi(t));
        var r = o.first + o.size,
            s = Math.max(n.visible.from - t.options.viewportMargin, o.first),
            a = Math.min(r, n.visible.to + t.options.viewportMargin);
        i.viewFrom < s && s - i.viewFrom < 20 && (s = Math.max(o.first, i.viewFrom)), i.viewTo > a && i.viewTo - a <
        20 && (a = Math.min(r, i.viewTo)), vl && (s = Ke(t.doc, s), a = Ze(t.doc, a));
        var l = s != i.viewFrom || a != i.viewTo || i.lastWrapHeight != n.wrapperHeight || i.lastWrapWidth != n.wrapperWidth;
        Ai(t, s, a), i.viewOffset = nn(Z(t.doc, i.viewFrom)), t.display.mover.style.top = i.viewOffset + "px";
        var c = Li(t);
        if (!l && 0 == c && !n.force && i.renderedView == i.view && (null == i.updateLineNumbers || i.updateLineNumbers >=
            i.viewTo)) return !1;
        var u = ko(t);
        return c > 4 && (i.lineDiv.style.display = "none"), No(t, i.updateLineNumbers, n.dims), c > 4 && (i.lineDiv
            .style.display = ""), i.renderedView = i.view, So(u), e(i.cursorDiv), e(i.selectionDiv), i.gutters.style
            .height = i.sizer.style.minHeight = 0, l && (i.lastWrapHeight = n.wrapperHeight, i.lastWrapWidth = n.wrapperWidth,
            _o(t, 400)), i.updateLineNumbers = null, !0
    }

    function $o(t, e) {
        for (var n = e.viewport, i = !0;
             (i && t.options.lineWrapping && e.oldDisplayWidth != Wn(t) || (n && null != n.top && (n = {
                 top: Math.min(t.doc.height + Hn(t.display) - Rn(t), n.top)
             }), e.visible = Ui(t.display, t.doc, n), !(e.visible.from >= t.display.viewFrom && e.visible.to <=
                 t.display.viewTo))) && Eo(t, e); i = !1) {
            qi(t);
            var o = ro(t);
            ji(t), so(t, o), Lo(t, o), e.force = !1
        }
        e.signal(t, "update", t), (t.display.viewFrom != t.display.reportedViewFrom || t.display.viewTo != t.display
            .reportedViewTo) && (e.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo), t.display
            .reportedViewFrom = t.display.viewFrom, t.display.reportedViewTo = t.display.viewTo)
    }

    function Do(t, e) {
        var n = new Dl(t, e);
        if (Eo(t, n)) {
            qi(t), $o(t, n);
            var i = ro(t);
            ji(t), so(t, i), Lo(t, i), n.finish()
        }
    }

    function No(t, n, i) {
        function o(e) {
            var n = e.nextSibling;
            return Ta && Ma && t.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(
                e), n
        }
        for (var r = t.display, s = t.options.lineNumbers, a = r.lineDiv, l = a.firstChild, c = r.view, u = r.viewFrom,
                 d = 0; d < c.length; d++) {
            var p = c[d];
            if (p.hidden);
            else if (p.node && p.node.parentNode == a) {
                for (; l != p.node;) l = o(l);
                var f = s && null != n && u >= n && p.lineNumber;
                p.changes && (h(p.changes, "gutter") > -1 && (f = !1), Cn(t, p, u, i)), f && (e(p.lineNumber), p.lineNumber
                    .appendChild(document.createTextNode(se(t.options, u)))), l = p.node.nextSibling
            } else {
                var g = An(t, p, u, i);
                a.insertBefore(g, l)
            }
            u += p.size
        }
        for (; l;) l = o(l)
    }

    function Ao(t) {
        var e = t.gutters.offsetWidth;
        t.sizer.style.marginLeft = e + "px"
    }

    function Lo(t, e) {
        t.display.sizer.style.minHeight = e.docHeight + "px", t.display.heightForcer.style.top = e.docHeight + "px",
            t.display.gutters.style.height = e.docHeight + t.display.barHeight + Fn(t) + "px"
    }

    function jo(t) {
        var e = t.display,
            n = e.view;
        if (e.alignWidgets || e.gutters.firstChild && t.options.fixedGutter) {
            for (var i = _i(e) - e.scroller.scrollLeft + t.doc.scrollLeft, o = e.gutters.offsetWidth, r = i + "px",
                     s = 0; s < n.length; s++)
                if (!n[s].hidden) {
                    t.options.fixedGutter && (n[s].gutter && (n[s].gutter.style.left = r), n[s].gutterBackground &&
                    (n[s].gutterBackground.style.left = r));
                    var a = n[s].alignable;
                    if (a)
                        for (var l = 0; l < a.length; l++) a[l].style.left = r
                } t.options.fixedGutter && (e.gutters.style.left = i + o + "px")
        }
    }

    function Mo(t) {
        if (!t.options.lineNumbers) return !1;
        var e = t.doc,
            n = se(t.options, e.first + e.size - 1),
            o = t.display;
        if (n.length != o.lineNumChars) {
            var r = o.measure.appendChild(i("div", [i("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                s = r.firstChild.offsetWidth,
                a = r.offsetWidth - s;
            return o.lineGutter.style.width = "", o.lineNumInnerWidth = Math.max(s, o.lineGutter.offsetWidth - a) +
                1, o.lineNumWidth = o.lineNumInnerWidth + a, o.lineNumChars = o.lineNumInnerWidth ? n.length : -1,
                o.lineGutter.style.width = o.lineNumWidth + "px", Ao(t.display), !0
        }
        return !1
    }

    function Oo(t, e) {
        for (var n = [], i = !1, o = 0; o < t.length; o++) {
            var r = t[o],
                s = null;
            if ("string" != typeof r && (s = r.style, r = r.className), "CodeMirror-linenumbers" == r) {
                if (!e) continue;
                i = !0
            }
            n.push({
                className: r,
                style: s
            })
        }
        return e && !i && n.push({
            className: "CodeMirror-linenumbers",
            style: null
        }), n
    }

    function Po(t) {
        var n = t.gutters,
            o = t.gutterSpecs;
        e(n), t.lineGutter = null;
        for (var r = 0; r < o.length; ++r) {
            var s = o[r],
                a = s.className,
                l = s.style,
                c = n.appendChild(i("div", null, "CodeMirror-gutter " + a));
            l && (c.style.cssText = l), "CodeMirror-linenumbers" == a && (t.lineGutter = c, c.style.width = (t.lineNumWidth ||
                1) + "px")
        }
        n.style.display = o.length ? "" : "none", Ao(t)
    }

    function Io(t) {
        Po(t.display), Ei(t), jo(t)
    }

    function Ho(t, e, n, r) {
        var s = this;
        this.input = n, s.scrollbarFiller = i("div", null, "CodeMirror-scrollbar-filler"), s.scrollbarFiller.setAttribute(
            "cm-not-content", "true"), s.gutterFiller = i("div", null, "CodeMirror-gutter-filler"), s.gutterFiller
            .setAttribute("cm-not-content", "true"), s.lineDiv = o("div", null, "CodeMirror-code"), s.selectionDiv =
            i("div", null, null, "position: relative; z-index: 1"), s.cursorDiv = i("div", null,
            "CodeMirror-cursors"), s.measure = i("div", null, "CodeMirror-measure"), s.lineMeasure = i("div",
            null, "CodeMirror-measure"), s.lineSpace = o("div", [s.measure, s.lineMeasure, s.selectionDiv, s.cursorDiv,
            s.lineDiv], null, "position: relative; outline: none");
        var a = o("div", [s.lineSpace], "CodeMirror-lines");
        s.mover = i("div", [a], null, "position: relative"), s.sizer = i("div", [s.mover], "CodeMirror-sizer"), s.sizerWidth =
            null, s.heightForcer = i("div", null, null, "position: absolute; height: " + Xa + "px; width: 1px;"), s
            .gutters = i("div", null, "CodeMirror-gutters"), s.lineGutter = null, s.scroller = i("div", [s.sizer, s
            .heightForcer, s.gutters], "CodeMirror-scroll"), s.scroller.setAttribute("tabIndex", "-1"), s.wrapper =
            i("div", [s.scrollbarFiller, s.gutterFiller, s.scroller], "CodeMirror"), _a && 8 > Ca && (s.gutters.style
            .zIndex = -1, s.scroller.style.paddingRight = 0), Ta || ya && ja || (s.scroller.draggable = !0), t &&
        (t.appendChild ? t.appendChild(s.wrapper) : t(s.wrapper)), s.viewFrom = s.viewTo = e.first, s.reportedViewFrom =
            s.reportedViewTo = e.first, s.view = [], s.renderedView = null, s.externalMeasured = null, s.viewOffset =
            0, s.lastWrapHeight = s.lastWrapWidth = 0, s.updateLineNumbers = null, s.nativeBarWidth = s.barHeight =
            s.barWidth = 0, s.scrollbarsClipped = !1, s.lineNumWidth = s.lineNumInnerWidth = s.lineNumChars = null,
            s.alignWidgets = !1, s.cachedCharWidth = s.cachedTextHeight = s.cachedPaddingH = null, s.maxLine = null,
            s.maxLineLength = 0, s.maxLineChanged = !1, s.wheelDX = s.wheelDY = s.wheelStartX = s.wheelStartY =
            null, s.shift = !1, s.selForContextMenu = null, s.activeTouch = null, s.gutterSpecs = Oo(r.gutters, r.lineNumbers),
            Po(s), n.init(s)
    }

    function zo(t) {
        var e = t.wheelDeltaX,
            n = t.wheelDeltaY;
        return null == e && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail), null == n && t.detail && t.axis ==
        t.VERTICAL_AXIS ? n = t.detail : null == n && (n = t.wheelDelta), {
            x: e,
            y: n
        }
    }

    function Fo(t) {
        var e = zo(t);
        return e.x *= Al, e.y *= Al, e
    }

    function Wo(t, e) {
        var n = zo(e),
            i = n.x,
            o = n.y,
            r = t.display,
            s = r.scroller,
            a = s.scrollWidth > s.clientWidth,
            l = s.scrollHeight > s.clientHeight;
        if (i && a || o && l) {
            if (o && Ma && Ta) t: for (var c = e.target, u = r.view; c != s; c = c.parentNode)
                for (var d = 0; d < u.length; d++)
                    if (u[d].node == c) {
                        t.display.currentWheelTarget = c;
                        break t
                    } if (i && !ya && !Ea && null != Al) return o && l && no(t, Math.max(0, s.scrollTop + o * Al)),
                oo(t, Math.max(0, s.scrollLeft + i * Al)), (!o || o && l) && P(e), r.wheelStartX = null, void 0;
            if (o && null != Al) {
                var h = o * Al,
                    p = t.doc.scrollTop,
                    f = p + r.wrapper.clientHeight;
                0 > h ? p = Math.max(0, p + h - 50) : f = Math.min(t.doc.height, f + h + 50), Do(t, {
                    top: p,
                    bottom: f
                })
            }
            20 > Nl && (null == r.wheelStartX ? (r.wheelStartX = s.scrollLeft, r.wheelStartY = s.scrollTop, r.wheelDX =
                i, r.wheelDY = o, setTimeout(function () {
                if (null != r.wheelStartX) {
                    var t = s.scrollLeft - r.wheelStartX,
                        e = s.scrollTop - r.wheelStartY,
                        n = e && r.wheelDY && e / r.wheelDY || t && r.wheelDX && t / r.wheelDX;
                    r.wheelStartX = r.wheelStartY = null, n && (Al = (Al * Nl + n) / (Nl + 1), ++Nl)
                }
            }, 200)) : (r.wheelDX += i, r.wheelDY += o))
        }
    }

    function Ro(t, e, n) {
        var i = t && t.options.selectionsMayTouch,
            o = e[n];
        e.sort(function (t, e) {
            return le(t.from(), e.from())
        }), n = h(e, o);
        for (var r = 1; r < e.length; r++) {
            var s = e[r],
                a = e[r - 1],
                l = le(a.to(), s.from());
            if (i && !s.empty() ? l > 0 : l >= 0) {
                var c = he(a.from(), s.from()),
                    u = de(a.to(), s.to()),
                    d = a.empty() ? s.from() == s.head : a.from() == a.head;
                n >= r && --n, e.splice(--r, 2, new jl(d ? u : c, d ? c : u))
            }
        }
        return new Ll(e, n)
    }

    function qo(t, e) {
        return new Ll([new jl(t, e || t)], 0)
    }

    function Bo(t) {
        return t.text ? ae(t.from.line + t.text.length - 1, g(t.text).length + (1 == t.text.length ? t.from.ch : 0)) :
            t.to
    }

    function Uo(t, e) {
        if (le(t, e.from) < 0) return t;
        if (le(t, e.to) <= 0) return Bo(e);
        var n = t.line + e.text.length - (e.to.line - e.from.line) - 1,
            i = t.ch;
        return t.line == e.to.line && (i += Bo(e).ch - e.to.ch), ae(n, i)
    }

    function Xo(t, e) {
        for (var n = [], i = 0; i < t.sel.ranges.length; i++) {
            var o = t.sel.ranges[i];
            n.push(new jl(Uo(o.anchor, e), Uo(o.head, e)))
        }
        return Ro(t.cm, n, t.sel.primIndex)
    }

    function Yo(t, e, n) {
        return t.line == e.line ? ae(n.line, t.ch - e.ch + n.ch) : ae(n.line + (t.line - e.line), t.ch)
    }

    function Qo(t, e, n) {
        for (var i = [], o = ae(t.first, 0), r = o, s = 0; s < e.length; s++) {
            var a = e[s],
                l = Yo(a.from, o, r),
                c = Yo(Bo(a), o, r);
            if (o = a.to, r = c, "around" == n) {
                var u = t.sel.ranges[s],
                    d = le(u.head, u.anchor) < 0;
                i[s] = new jl(d ? c : l, d ? l : c)
            } else i[s] = new jl(l, l)
        }
        return new Ll(i, t.sel.primIndex)
    }

    function Vo(t) {
        t.doc.mode = Q(t.options, t.doc.modeOption), Go(t)
    }

    function Go(t) {
        t.doc.iter(function (t) {
            t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null)
        }), t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first, _o(t, 100), t.state.modeGen++, t.curOp &&
        Ei(t)
    }

    function Jo(t, e) {
        return 0 == e.from.ch && 0 == e.to.ch && "" == g(e.text) && (!t.cm || t.cm.options.wholeLineUpdateBefore)
    }

    function Ko(t, e, n, i) {
        function o(t) {
            return n ? n[t] : null
        }

        function r(t, n, o) {
            sn(t, n, o, i), wn(t, "change", t, e)
        }

        function s(t, e) {
            for (var n = [], r = t; e > r; ++r) n.push(new yl(c[r], o(r), i));
            return n
        }
        var a = e.from,
            l = e.to,
            c = e.text,
            u = Z(t, a.line),
            d = Z(t, l.line),
            h = g(c),
            p = o(c.length - 1),
            f = l.line - a.line;
        if (e.full) t.insert(0, s(0, c.length)), t.remove(c.length, t.size - c.length);
        else if (Jo(t, e)) {
            var m = s(0, c.length - 1);
            r(d, d.text, p), f && t.remove(a.line, f), m.length && t.insert(a.line, m)
        } else if (u == d)
            if (1 == c.length) r(u, u.text.slice(0, a.ch) + h + u.text.slice(l.ch), p);
            else {
                var v = s(1, c.length - 1);
                v.push(new yl(h + u.text.slice(l.ch), p, i)), r(u, u.text.slice(0, a.ch) + c[0], o(0)), t.insert(a.line +
                    1, v)
            }
        else if (1 == c.length) r(u, u.text.slice(0, a.ch) + c[0] + d.text.slice(l.ch), o(0)), t.remove(a.line + 1,
            f);
        else {
            r(u, u.text.slice(0, a.ch) + c[0], o(0)), r(d, h + d.text.slice(l.ch), p);
            var y = s(1, c.length - 1);
            f > 1 && t.remove(a.line + 1, f - 1), t.insert(a.line + 1, y)
        }
        wn(t, "change", t, e)
    }

    function Zo(t, e, n) {
        function i(t, o, r) {
            if (t.linked)
                for (var s = 0; s < t.linked.length; ++s) {
                    var a = t.linked[s];
                    if (a.doc != o) {
                        var l = r && a.sharedHist;
                        (!n || l) && (e(a.doc, l), i(a.doc, t, l))
                    }
                }
        }
        i(t, null, !0)
    }

    function tr(t, e) {
        if (e.cm) throw new Error("This document is already in use.");
        t.doc = e, e.cm = t, Ti(t), Vo(t), er(t), t.options.lineWrapping || rn(t), t.options.mode = e.modeOption,
            Ei(t)
    }

    function er(t) {
        ("rtl" == t.doc.direction ? a : Wa)(t.display.lineDiv, "CodeMirror-rtl")
    }

    function nr(t) {
        yo(t, function () {
            er(t), Ei(t)
        })
    }

    function ir(t) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp =
            this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration =
            t || 1
    }

    function or(t, e) {
        var n = {
            from: ue(e.from),
            to: Bo(e),
            text: te(t, e.from, e.to)
        };
        return dr(t, n, e.from.line, e.to.line + 1), Zo(t, function (t) {
            return dr(t, n, e.from.line, e.to.line + 1)
        }, !0), n
    }

    function rr(t) {
        for (; t.length;) {
            var e = g(t);
            if (!e.ranges) break;
            t.pop()
        }
    }

    function sr(t, e) {
        return e ? (rr(t.done), g(t.done)) : t.done.length && !g(t.done).ranges ? g(t.done) : t.done.length > 1 &&
        !t.done[t.done.length - 2].ranges ? (t.done.pop(), g(t.done)) : void 0
    }

    function ar(t, e, n, i) {
        var o = t.history;
        o.undone.length = 0;
        var r, s, a = +new Date;
        if ((o.lastOp == i || o.lastOrigin == e.origin && e.origin && ("+" == e.origin.charAt(0) && o.lastModTime >
            a - (t.cm ? t.cm.options.historyEventDelay : 500) || "*" == e.origin.charAt(0))) && (r = sr(o, o.lastOp ==
            i))) s = g(r.changes), 0 == le(e.from, e.to) && 0 == le(e.from, s.to) ? s.to = Bo(e) : r.changes.push(
            or(t, e));
        else {
            var l = g(o.done);
            for (l && l.ranges || ur(t.sel, o.done), r = {
                changes: [or(t, e)],
                generation: o.generation
            }, o.done.push(r); o.done.length > o.undoDepth;) o.done.shift(), o.done[0].ranges || o.done.shift()
        }
        o.done.push(n), o.generation = ++o.maxGeneration, o.lastModTime = o.lastSelTime = a, o.lastOp = o.lastSelOp =
            i, o.lastOrigin = o.lastSelOrigin = e.origin, s || A(t, "historyAdded")
    }

    function lr(t, e, n, i) {
        var o = e.charAt(0);
        return "*" == o || "+" == o && n.ranges.length == i.ranges.length && n.somethingSelected() == i.somethingSelected() &&
            new Date - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500)
    }

    function cr(t, e, n, i) {
        var o = t.history,
            r = i && i.origin;
        n == o.lastSelOp || r && o.lastSelOrigin == r && (o.lastModTime == o.lastSelTime && o.lastOrigin == r || lr(
            t, r, g(o.done), e)) ? o.done[o.done.length - 1] = e : ur(e, o.done), o.lastSelTime = +new Date, o.lastSelOrigin =
            r, o.lastSelOp = n, i && i.clearRedo !== !1 && rr(o.undone)
    }

    function ur(t, e) {
        var n = g(e);
        n && n.ranges && n.equals(t) || e.push(t)
    }

    function dr(t, e, n, i) {
        var o = e["spans_" + t.id],
            r = 0;
        t.iter(Math.max(t.first, n), Math.min(t.first + t.size, i), function (n) {
            n.markedSpans && ((o || (o = e["spans_" + t.id] = {}))[r] = n.markedSpans), ++r
        })
    }

    function hr(t) {
        if (!t) return null;
        for (var e, n = 0; n < t.length; ++n) t[n].marker.explicitlyCleared ? e || (e = t.slice(0, n)) : e && e.push(
            t[n]);
        return e ? e.length ? e : null : t
    }

    function pr(t, e) {
        var n = e["spans_" + t.id];
        if (!n) return null;
        for (var i = [], o = 0; o < e.text.length; ++o) i.push(hr(n[o]));
        return i
    }

    function fr(t, e) {
        var n = pr(t, e),
            i = Pe(t, e);
        if (!n) return i;
        if (!i) return n;
        for (var o = 0; o < n.length; ++o) {
            var r = n[o],
                s = i[o];
            if (r && s) t: for (var a = 0; a < s.length; ++a) {
                for (var l = s[a], c = 0; c < r.length; ++c)
                    if (r[c].marker == l.marker) continue t;
                r.push(l)
            } else s && (n[o] = s)
        }
        return n
    }

    function gr(t, e, n) {
        for (var i = [], o = 0; o < t.length; ++o) {
            var r = t[o];
            if (r.ranges) i.push(n ? Ll.prototype.deepCopy.call(r) : r);
            else {
                var s = r.changes,
                    a = [];
                i.push({
                    changes: a
                });
                for (var l = 0; l < s.length; ++l) {
                    var c = s[l],
                        u = void 0;
                    if (a.push({
                        from: c.from,
                        to: c.to,
                        text: c.text
                    }), e)
                        for (var d in c)(u = d.match(/^spans_(\d+)$/)) && h(e, Number(u[1])) > -1 && (g(a)[d] = c[d],
                            delete c[d])
                }
            }
        }
        return i
    }

    function mr(t, e, n, i) {
        if (i) {
            var o = t.anchor;
            if (n) {
                var r = le(e, o) < 0;
                r != le(n, o) < 0 ? (o = e, e = n) : r != le(e, n) < 0 && (e = n)
            }
            return new jl(o, e)
        }
        return new jl(n || e, e)
    }

    function vr(t, e, n, i, o) {
        null == o && (o = t.cm && (t.cm.display.shift || t.extend)), Cr(t, new Ll([mr(t.sel.primary(), e, n, o)], 0),
            i)
    }

    function yr(t, e, n) {
        for (var i = [], o = t.cm && (t.cm.display.shift || t.extend), r = 0; r < t.sel.ranges.length; r++) i[r] =
            mr(t.sel.ranges[r], e[r], null, o);
        var s = Ro(t.cm, i, t.sel.primIndex);
        Cr(t, s, n)
    }

    function br(t, e, n, i) {
        var o = t.sel.ranges.slice(0);
        o[e] = n, Cr(t, Ro(t.cm, o, t.sel.primIndex), i)
    }

    function xr(t, e, n, i) {
        Cr(t, qo(e, n), i)
    }

    function wr(t, e, n) {
        var i = {
            ranges: e.ranges,
            update: function (e) {
                var n = this;
                this.ranges = [];
                for (var i = 0; i < e.length; i++) n.ranges[i] = new jl(fe(t, e[i].anchor), fe(t, e[i].head))
            },
            origin: n && n.origin
        };
        return A(t, "beforeSelectionChange", t, i), t.cm && A(t.cm, "beforeSelectionChange", t.cm, i), i.ranges !=
        e.ranges ? Ro(t.cm, i.ranges, i.ranges.length - 1) : e
    }

    function _r(t, e, n) {
        var i = t.history.done,
            o = g(i);
        o && o.ranges ? (i[i.length - 1] = e, Tr(t, e, n)) : Cr(t, e, n)
    }

    function Cr(t, e, n) {
        Tr(t, e, n), cr(t, t.sel, t.cm ? t.cm.curOp.id : 0 / 0, n)
    }

    function Tr(t, e, n) {
        (M(t, "beforeSelectionChange") || t.cm && M(t.cm, "beforeSelectionChange")) && (e = wr(t, e, n));
        var i = n && n.bias || (le(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
        kr(t, Er(t, e, i, !0)), n && n.scroll === !1 || !t.cm || Ji(t.cm)
    }

    function kr(t, e) {
        e.equals(t.sel) || (t.sel = e, t.cm && (t.cm.curOp.updateInput = 1, t.cm.curOp.selectionChanged = !0, j(t.cm)),
            wn(t, "cursorActivity", t))
    }

    function Sr(t) {
        kr(t, Er(t, t.sel, null, !1))
    }

    function Er(t, e, n, i) {
        for (var o, r = 0; r < e.ranges.length; r++) {
            var s = e.ranges[r],
                a = e.ranges.length == t.sel.ranges.length && t.sel.ranges[r],
                l = Dr(t, s.anchor, a && a.anchor, n, i),
                c = Dr(t, s.head, a && a.head, n, i);
            (o || l != s.anchor || c != s.head) && (o || (o = e.ranges.slice(0, r)), o[r] = new jl(l, c))
        }
        return o ? Ro(t.cm, o, e.primIndex) : e
    }

    function $r(t, e, n, i, o) {
        var r = Z(t, e.line);
        if (r.markedSpans)
            for (var s = 0; s < r.markedSpans.length; ++s) {
                var a = r.markedSpans[s],
                    l = a.marker,
                    c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
                    u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;
                if ((null == a.from || (c ? a.from <= e.ch : a.from < e.ch)) && (null == a.to || (u ? a.to >= e.ch :
                    a.to > e.ch))) {
                    if (o && (A(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                        if (r.markedSpans) {
                            --s;
                            continue
                        }
                        break
                    }
                    if (!l.atomic) continue;
                    if (n) {
                        var d = l.find(0 > i ? 1 : -1),
                            h = void 0;
                        if ((0 > i ? u : c) && (d = Nr(t, d, -i, d && d.line == e.line ? r : null)), d && d.line ==
                        e.line && (h = le(d, n)) && (0 > i ? 0 > h : h > 0)) return $r(t, d, e, i, o)
                    }
                    var p = l.find(0 > i ? -1 : 1);
                    return (0 > i ? c : u) && (p = Nr(t, p, i, p.line == e.line ? r : null)), p ? $r(t, p, e, i, o) :
                        null
                }
            }
        return e
    }

    function Dr(t, e, n, i, o) {
        var r = i || 1,
            s = $r(t, e, n, r, o) || !o && $r(t, e, n, r, !0) || $r(t, e, n, -r, o) || !o && $r(t, e, n, -r, !0);
        return s ? s : (t.cantEdit = !0, ae(t.first, 0))
    }

    function Nr(t, e, n, i) {
        return 0 > n && 0 == e.ch ? e.line > t.first ? fe(t, ae(e.line - 1)) : null : n > 0 && e.ch == (i || Z(t, e
            .line)).text.length ? e.line < t.first + t.size - 1 ? ae(e.line + 1, 0) : null : new ae(e.line, e.ch +
            n)
    }

    function Ar(t) {
        t.setSelection(ae(t.firstLine(), 0), ae(t.lastLine()), Qa)
    }

    function Lr(t, e, n) {
        var i = {
            canceled: !1,
            from: e.from,
            to: e.to,
            text: e.text,
            origin: e.origin,
            cancel: function () {
                return i.canceled = !0
            }
        };
        return n && (i.update = function (e, n, o, r) {
            e && (i.from = fe(t, e)), n && (i.to = fe(t, n)), o && (i.text = o), void 0 !== r && (i.origin =
                r)
        }), A(t, "beforeChange", t, i), t.cm && A(t.cm, "beforeChange", t.cm, i), i.canceled ? (t.cm && (t.cm.curOp
            .updateInput = 2), null) : {
            from: i.from,
            to: i.to,
            text: i.text,
            origin: i.origin
        }
    }

    function jr(t, e, n) {
        if (t.cm) {
            if (!t.cm.curOp) return bo(t.cm, jr)(t, e, n);
            if (t.cm.state.suppressEdits) return
        }
        if (!(M(t, "beforeChange") || t.cm && M(t.cm, "beforeChange")) || (e = Lr(t, e, !0))) {
            var i = ml && !n && He(t, e.from, e.to);
            if (i)
                for (var o = i.length - 1; o >= 0; --o) Mr(t, {
                    from: i[o].from,
                    to: i[o].to,
                    text: o ? [""] : e.text,
                    origin: e.origin
                });
            else Mr(t, e)
        }
    }

    function Mr(t, e) {
        if (1 != e.text.length || "" != e.text[0] || 0 != le(e.from, e.to)) {
            var n = Xo(t, e);
            ar(t, e, n, t.cm ? t.cm.curOp.id : 0 / 0), Ir(t, e, n, Pe(t, e));
            var i = [];
            Zo(t, function (t, n) {
                n || -1 != h(i, t.history) || (Rr(t.history, e), i.push(t.history)), Ir(t, e, null, Pe(t, e))
            })
        }
    }

    function Or(t, e, n) {
        var i = t.cm && t.cm.state.suppressEdits;
        if (!i || n) {
            for (var o, r = t.history, s = t.sel, a = "undo" == e ? r.done : r.undone, l = "undo" == e ? r.undone :
                r.done, c = 0; c < a.length && (o = a[c], n ? !o.ranges || o.equals(t.sel) : o.ranges); c++);
            if (c != a.length) {
                for (r.lastOrigin = r.lastSelOrigin = null;;) {
                    if (o = a.pop(), !o.ranges) {
                        if (i) return a.push(o), void 0;
                        break
                    }
                    if (ur(o, l), n && !o.equals(t.sel)) return Cr(t, o, {
                        clearRedo: !1
                    }), void 0;
                    s = o
                }
                var u = [];
                ur(s, l), l.push({
                    changes: u,
                    generation: r.generation
                }), r.generation = o.generation || ++r.maxGeneration;
                for (var d = M(t, "beforeChange") || t.cm && M(t.cm, "beforeChange"), p = function (n) {
                    var i = o.changes[n];
                    if (i.origin = e, d && !Lr(t, i, !1)) return a.length = 0, {};
                    u.push(or(t, i));
                    var r = n ? Xo(t, i) : g(a);
                    Ir(t, i, r, fr(t, i)), !n && t.cm && t.cm.scrollIntoView({
                        from: i.from,
                        to: Bo(i)
                    });
                    var s = [];
                    Zo(t, function (t, e) {
                        e || -1 != h(s, t.history) || (Rr(t.history, i), s.push(t.history)), Ir(t,
                            i, null, fr(t, i))
                    })
                }, f = o.changes.length - 1; f >= 0; --f) {
                    var m = p(f);
                    if (m) return m.v
                }
            }
        }
    }

    function Pr(t, e) {
        if (0 != e && (t.first += e, t.sel = new Ll(m(t.sel.ranges, function (t) {
            return new jl(ae(t.anchor.line + e, t.anchor.ch), ae(t.head.line + e, t.head.ch))
        }), t.sel.primIndex), t.cm)) {
            Ei(t.cm, t.first, t.first - e, e);
            for (var n = t.cm.display, i = n.viewFrom; i < n.viewTo; i++) $i(t.cm, i, "gutter")
        }
    }

    function Ir(t, e, n, i) {
        if (t.cm && !t.cm.curOp) return bo(t.cm, Ir)(t, e, n, i);
        if (e.to.line < t.first) return Pr(t, e.text.length - 1 - (e.to.line - e.from.line)), void 0;
        if (!(e.from.line > t.lastLine())) {
            if (e.from.line < t.first) {
                var o = e.text.length - 1 - (t.first - e.from.line);
                Pr(t, o), e = {
                    from: ae(t.first, 0),
                    to: ae(e.to.line + o, e.to.ch),
                    text: [g(e.text)],
                    origin: e.origin
                }
            }
            var r = t.lastLine();
            e.to.line > r && (e = {
                from: e.from,
                to: ae(r, Z(t, r).text.length),
                text: [e.text[0]],
                origin: e.origin
            }), e.removed = te(t, e.from, e.to), n || (n = Xo(t, e)), t.cm ? Hr(t.cm, e, i) : Ko(t, e, i), Tr(t,
                n, Qa), t.cantEdit && Dr(t, ae(t.firstLine(), 0)) && (t.cantEdit = !1)
        }
    }

    function Hr(t, e, n) {
        var i = t.doc,
            o = t.display,
            r = e.from,
            s = e.to,
            a = !1,
            l = r.line;
        t.options.lineWrapping || (l = ie(Ve(Z(i, r.line))), i.iter(l, s.line + 1, function (t) {
            return t == o.maxLine ? (a = !0, !0) : void 0
        })), i.sel.contains(e.from, e.to) > -1 && j(t), Ko(i, e, n, Ci(t)), t.options.lineWrapping || (i.iter(l,
            r.line + e.text.length,
            function (t) {
                var e = on(t);
                e > o.maxLineLength && (o.maxLine = t, o.maxLineLength = e, o.maxLineChanged = !0, a = !1)
            }), a && (t.curOp.updateMaxLine = !0)), Ee(i, r.line), _o(t, 400);
        var c = e.text.length - (s.line - r.line) - 1;
        e.full ? Ei(t) : r.line != s.line || 1 != e.text.length || Jo(t.doc, e) ? Ei(t, r.line, s.line + 1, c) : $i(
            t, r.line, "text");
        var u = M(t, "changes"),
            d = M(t, "change");
        if (d || u) {
            var h = {
                from: r,
                to: s,
                text: e.text,
                removed: e.removed,
                origin: e.origin
            };
            d && wn(t, "change", t, h), u && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(h)
        }
        t.display.selForContextMenu = null
    }

    function zr(t, e, n, i, o) {
        var r;
        i || (i = n), le(i, n) < 0 && (r = [i, n], n = r[0], i = r[1]), "string" == typeof e && (e = t.splitLines(e)),
            jr(t, {
                from: n,
                to: i,
                text: e,
                origin: o
            })
    }

    function Fr(t, e, n, i) {
        n < t.line ? t.line += i : e < t.line && (t.line = e, t.ch = 0)
    }

    function Wr(t, e, n, i) {
        for (var o = 0; o < t.length; ++o) {
            var r = t[o],
                s = !0;
            if (r.ranges) {
                r.copied || (r = t[o] = r.deepCopy(), r.copied = !0);
                for (var a = 0; a < r.ranges.length; a++) Fr(r.ranges[a].anchor, e, n, i), Fr(r.ranges[a].head, e,
                    n, i)
            } else {
                for (var l = 0; l < r.changes.length; ++l) {
                    var c = r.changes[l];
                    if (n < c.from.line) c.from = ae(c.from.line + i, c.from.ch), c.to = ae(c.to.line + i, c.to.ch);
                    else if (e <= c.to.line) {
                        s = !1;
                        break
                    }
                }
                s || (t.splice(0, o + 1), o = 0)
            }
        }
    }

    function Rr(t, e) {
        var n = e.from.line,
            i = e.to.line,
            o = e.text.length - (i - n) - 1;
        Wr(t.done, n, i, o), Wr(t.undone, n, i, o)
    }

    function qr(t, e, n, i) {
        var o = e,
            r = e;
        return "number" == typeof e ? r = Z(t, pe(t, e)) : o = ie(e), null == o ? null : (i(r, o) && t.cm && $i(t.cm,
            o, n), r)
    }

    function Br(t) {
        var e = this;
        this.lines = t, this.parent = null;
        for (var n = 0, i = 0; i < t.length; ++i) t[i].parent = e, n += t[i].height;
        this.height = n
    }

    function Ur(t) {
        var e = this;
        this.children = t;
        for (var n = 0, i = 0, o = 0; o < t.length; ++o) {
            var r = t[o];
            n += r.chunkSize(), i += r.height, r.parent = e
        }
        this.size = n, this.height = i, this.parent = null
    }

    function Xr(t, e, n) {
        nn(e) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && Gi(t, n)
    }

    function Yr(t, e, n, i) {
        var o = new Ml(t, n, i),
            r = t.cm;
        return r && o.noHScroll && (r.display.alignWidgets = !0), qr(t, e, "widget", function (e) {
            var n = e.widgets || (e.widgets = []);
            if (null == o.insertAt ? n.push(o) : n.splice(Math.min(n.length - 1, Math.max(0, o.insertAt)),
                0, o), o.line = e, r && !tn(t, e)) {
                var i = nn(e) < t.scrollTop;
                ne(e, e.height + On(o)), i && Gi(r, o.height), r.curOp.forceUpdate = !0
            }
            return !0
        }), r && wn(r, "lineWidgetAdded", r, o, "number" == typeof e ? e : ie(e)), o
    }

    function Qr(t, e, n, i, r) {
        if (i && i.shared) return Vr(t, e, n, i, r);
        if (t.cm && !t.cm.curOp) return bo(t.cm, Qr)(t, e, n, i, r);
        var s = new Pl(t, r),
            a = le(e, n);
        if (i && u(i, s, !1), a > 0 || 0 == a && s.clearWhenEmpty !== !1) return s;
        if (s.replacedWith && (s.collapsed = !0, s.widgetNode = o("span", [s.replacedWith], "CodeMirror-widget"), i
            .handleMouseEvents || s.widgetNode.setAttribute("cm-ignore-events", "true"), i.insertLeft && (s.widgetNode
            .insertLeft = !0)), s.collapsed) {
            if (Qe(t, e.line, e, n, s) || e.line != n.line && Qe(t, n.line, e, n, s)) throw new Error(
                "Inserting collapsed marker partially overlapping an existing one");
            De()
        }
        s.addToHistory && ar(t, {
            from: e,
            to: n,
            origin: "markText"
        }, t.sel, 0 / 0);
        var l, c = e.line,
            d = t.cm;
        if (t.iter(c, n.line + 1, function (t) {
            d && s.collapsed && !d.options.lineWrapping && Ve(t) == d.display.maxLine && (l = !0), s.collapsed &&
            c != e.line && ne(t, 0), je(t, new Ne(s, c == e.line ? e.ch : null, c == n.line ? n.ch :
                null)), ++c
        }), s.collapsed && t.iter(e.line, n.line + 1, function (e) {
            tn(t, e) && ne(e, 0)
        }), s.clearOnEnter && il(s, "beforeCursorEnter", function () {
            return s.clear()
        }), s.readOnly && ($e(), (t.history.done.length || t.history.undone.length) && t.clearHistory()), s.collapsed &&
        (s.id = ++Ol, s.atomic = !0), d) {
            if (l && (d.curOp.updateMaxLine = !0), s.collapsed) Ei(d, e.line, n.line + 1);
            else if (s.className || s.startStyle || s.endStyle || s.css || s.attributes || s.title)
                for (var h = e.line; h <= n.line; h++) $i(d, h, "text");
            s.atomic && Sr(d.doc), wn(d, "markerAdded", d, s)
        }
        return s
    }

    function Vr(t, e, n, i, o) {
        i = u(i), i.shared = !1;
        var r = [Qr(t, e, n, i, o)],
            s = r[0],
            a = i.widgetNode;
        return Zo(t, function (t) {
            a && (i.widgetNode = a.cloneNode(!0)), r.push(Qr(t, fe(t, e), fe(t, n), i, o));
            for (var l = 0; l < t.linked.length; ++l)
                if (t.linked[l].isParent) return;
            s = g(r)
        }), new Il(r, s)
    }

    function Gr(t) {
        return t.findMarks(ae(t.first, 0), t.clipPos(ae(t.lastLine())), function (t) {
            return t.parent
        })
    }

    function Jr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                o = i.find(),
                r = t.clipPos(o.from),
                s = t.clipPos(o.to);
            if (le(r, s)) {
                var a = Qr(t, r, s, i.primary, i.primary.type);
                i.markers.push(a), a.parent = i
            }
        }
    }

    function Kr(t) {
        for (var e = function (e) {
            var n = t[e],
                i = [n.primary.doc];
            Zo(n.primary.doc, function (t) {
                return i.push(t)
            });
            for (var o = 0; o < n.markers.length; o++) {
                var r = n.markers[o]; - 1 == h(i, r.doc) && (r.parent = null, n.markers.splice(o--, 1))
            }
        }, n = 0; n < t.length; n++) e(n)
    }

    function Zr(t) {
        var e = this;
        if (ns(e), !L(e, t) && !Pn(e.display, t)) {
            P(t), _a && (Fl = +new Date);
            var n = ki(e, t, !0),
                i = t.dataTransfer.files;
            if (n && !e.isReadOnly())
                if (i && i.length && window.FileReader && window.File)
                    for (var o = i.length, r = Array(o), s = 0, a = function (t, i) {
                        if (!e.options.allowDropFileTypes || -1 != h(e.options.allowDropFileTypes, t.type)) {
                            var a = new FileReader;
                            a.onload = bo(e, function () {
                                var t = a.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(t) && (t = ""), r[i] = t, ++s ==
                                o) {
                                    n = fe(e.doc, n);
                                    var l = {
                                        from: n,
                                        to: n,
                                        text: e.doc.splitLines(r.join(e.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    jr(e.doc, l), _r(e.doc, qo(n, Bo(l)))
                                }
                            }), a.readAsText(t)
                        }
                    }, l = 0; o > l; ++l) a(i[l], l);
                else {
                    if (e.state.draggingText && e.doc.sel.contains(n) > -1) return e.state.draggingText(t),
                        setTimeout(function () {
                            return e.display.input.focus()
                        }, 20), void 0;
                    try {
                        var c = t.dataTransfer.getData("Text");
                        if (c) {
                            var u;
                            if (e.state.draggingText && !e.state.draggingText.copy && (u = e.listSelections()), Tr(
                                e.doc, qo(n, n)), u)
                                for (var d = 0; d < u.length; ++d) zr(e.doc, "", u[d].anchor, u[d].head, "drag");
                            e.replaceSelection(c, "around", "paste"), e.display.input.focus()
                        }
                    } catch (t) {}
                }
        }
    }

    function ts(t, e) {
        if (_a && (!t.state.draggingText || +new Date - Fl < 100)) return z(e), void 0;
        if (!L(t, e) && !Pn(t.display, e) && (e.dataTransfer.setData("Text", t.getSelection()), e.dataTransfer.effectAllowed =
            "copyMove", e.dataTransfer.setDragImage && !$a)) {
            var n = i("img", null, null, "position: fixed; left: 0; top: 0;");
            n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Ea && (n.width =
                n.height = 1, t.display.wrapper.appendChild(n), n._top = n.offsetTop), e.dataTransfer.setDragImage(
                n, 0, 0), Ea && n.parentNode.removeChild(n)
        }
    }

    function es(t, e) {
        var o = ki(t, e);
        if (o) {
            var r = document.createDocumentFragment();
            Oi(t, o, r), t.display.dragCursor || (t.display.dragCursor = i("div", null,
                "CodeMirror-cursors CodeMirror-dragcursors"), t.display.lineSpace.insertBefore(t.display.dragCursor,
                t.display.cursorDiv)), n(t.display.dragCursor, r)
        }
    }

    function ns(t) {
        t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor), t.display.dragCursor = null)
    }

    function is(t) {
        if (document.getElementsByClassName) {
            for (var e = document.getElementsByClassName("CodeMirror"), n = [], i = 0; i < e.length; i++) {
                var o = e[i].CodeMirror;
                o && n.push(o)
            }
            n.length && n[0].operation(function () {
                for (var e = 0; e < n.length; e++) t(n[e])
            })
        }
    }

    function os() {
        Wl || (rs(), Wl = !0)
    }

    function rs() {
        var t;
        il(window, "resize", function () {
            null == t && (t = setTimeout(function () {
                t = null, is(ss)
            }, 100))
        }), il(window, "blur", function () {
            return is(Ri)
        })
    }

    function ss(t) {
        var e = t.display;
        e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null, e.scrollbarsClipped = !1, t.setSize()
    }

    function as(t) {
        var e = t.split(/-(?!$)/);
        t = e[e.length - 1];
        for (var n, i, o, r, s = 0; s < e.length - 1; s++) {
            var a = e[s];
            if (/^(cmd|meta|m)$/i.test(a)) r = !0;
            else if (/^a(lt)?$/i.test(a)) n = !0;
            else if (/^(c|ctrl|control)$/i.test(a)) i = !0;
            else {
                if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
                o = !0
            }
        }
        return n && (t = "Alt-" + t), i && (t = "Ctrl-" + t), r && (t = "Cmd-" + t), o && (t = "Shift-" + t), t
    }

    function ls(t) {
        var e = {};
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var i = t[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                if ("..." == i) {
                    delete t[n];
                    continue
                }
                for (var o = m(n.split(" "), as), r = 0; r < o.length; r++) {
                    var s = void 0,
                        a = void 0;
                    r == o.length - 1 ? (a = o.join(" "), s = i) : (a = o.slice(0, r + 1).join(" "), s = "...");
                    var l = e[a];
                    if (l) {
                        if (l != s) throw new Error("Inconsistent bindings for " + a)
                    } else e[a] = s
                }
                delete t[n]
            } for (var c in e) t[c] = e[c];
        return t
    }

    function cs(t, e, n, i) {
        e = ps(e);
        var o = e.call ? e.call(t, i) : e[t];
        if (o === !1) return "nothing";
        if ("..." === o) return "multi";
        if (null != o && n(o)) return "handled";
        if (e.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(e.fallthrough)) return cs(t, e.fallthrough, n, i);
            for (var r = 0; r < e.fallthrough.length; r++) {
                var s = cs(t, e.fallthrough[r], n, i);
                if (s) return s
            }
        }
    }

    function us(t) {
        var e = "string" == typeof t ? t : Rl[t.keyCode];
        return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e
    }

    function ds(t, e, n) {
        var i = t;
        return e.altKey && "Alt" != i && (t = "Alt-" + t), (za ? e.metaKey : e.ctrlKey) && "Ctrl" != i && (t =
            "Ctrl-" + t), (za ? e.ctrlKey : e.metaKey) && "Cmd" != i && (t = "Cmd-" + t), !n && e.shiftKey &&
        "Shift" != i && (t = "Shift-" + t), t
    }

    function hs(t, e) {
        if (Ea && 34 == t.keyCode && t["char"]) return !1;
        var n = Rl[t.keyCode];
        return null == n || t.altGraphKey ? !1 : (3 == t.keyCode && t.code && (n = t.code), ds(n, t, e))
    }

    function ps(t) {
        return "string" == typeof t ? Xl[t] : t
    }

    function fs(t, e) {
        for (var n = t.doc.sel.ranges, i = [], o = 0; o < n.length; o++) {
            for (var r = e(n[o]); i.length && le(r.from, g(i).to) <= 0;) {
                var s = i.pop();
                if (le(s.from, r.from) < 0) {
                    r.from = s.from;
                    break
                }
            }
            i.push(r)
        }
        yo(t, function () {
            for (var e = i.length - 1; e >= 0; e--) zr(t.doc, "", i[e].from, i[e].to, "+delete");
            Ji(t)
        })
    }

    function gs(t, e, n) {
        var i = T(t.text, e + n, n);
        return 0 > i || i > t.text.length ? null : i
    }

    function ms(t, e, n) {
        var i = gs(t, e.ch, n);
        return null == i ? null : new ae(e.line, i, 0 > n ? "after" : "before")
    }

    function vs(t, e, n, i, o) {
        if (t) {
            var r = $(n, e.doc.direction);
            if (r) {
                var s, a = 0 > o ? g(r) : r[0],
                    l = 0 > o == (1 == a.level),
                    c = l ? "after" : "before";
                if (a.level > 0 || "rtl" == e.doc.direction) {
                    var u = Qn(e, n);
                    s = 0 > o ? n.text.length - 1 : 0;
                    var d = Vn(e, u, s).top;
                    s = k(function (t) {
                        return Vn(e, u, t).top == d
                    }, 0 > o == (1 == a.level) ? a.from : a.to - 1, s), "before" == c && (s = gs(n, s, 1))
                } else s = 0 > o ? a.to : a.from;
                return new ae(i, s, c)
            }
        }
        return new ae(i, 0 > o ? n.text.length : 0, 0 > o ? "before" : "after")
    }

    function ys(t, e, n, i) {
        var o = $(e, t.doc.direction);
        if (!o) return ms(e, n, i);
        n.ch >= e.text.length ? (n.ch = e.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky =
            "after");
        var r = E(o, n.ch, n.sticky),
            s = o[r];
        if ("ltr" == t.doc.direction && 0 == s.level % 2 && (i > 0 ? s.to > n.ch : s.from < n.ch)) return ms(e, n,
            i);
        var a, l = function (t, n) {
                return gs(e, t instanceof ae ? t.ch : t, n)
            },
            c = function (n) {
                return t.options.lineWrapping ? (a = a || Qn(t, e), fi(t, e, a, n)) : {
                    begin: 0,
                    end: e.text.length
                }
            },
            u = c("before" == n.sticky ? l(n, -1) : n.ch);
        if ("rtl" == t.doc.direction || 1 == s.level) {
            var d = 1 == s.level == 0 > i,
                h = l(n, d ? 1 : -1);
            if (null != h && (d ? h <= s.to && h <= u.end : h >= s.from && h >= u.begin)) {
                var p = d ? "before" : "after";
                return new ae(n.line, h, p)
            }
        }
        var f = function (t, e, i) {
                for (var r = function (t, e) {
                    return e ? new ae(n.line, l(t, 1), "before") : new ae(n.line, t, "after")
                }; t >= 0 && t < o.length; t += e) {
                    var s = o[t],
                        a = e > 0 == (1 != s.level),
                        c = a ? i.begin : l(i.end, -1);
                    if (s.from <= c && c < s.to) return r(c, a);
                    if (c = a ? s.from : l(s.to, -1), i.begin <= c && c < i.end) return r(c, a)
                }
            },
            g = f(r + i, i, u);
        if (g) return g;
        var m = i > 0 ? u.end : l(u.begin, -1);
        return null == m || i > 0 && m == e.text.length || !(g = f(i > 0 ? 0 : o.length - 1, i, c(m))) ? null : g
    }

    function bs(t, e) {
        var n = Z(t.doc, e),
            i = Ve(n);
        return i != n && (e = ie(i)), vs(!0, t, i, e, 1)
    }

    function xs(t, e) {
        var n = Z(t.doc, e),
            i = Ge(n);
        return i != n && (e = ie(i)), vs(!0, t, n, e, -1)
    }

    function ws(t, e) {
        var n = bs(t, e.line),
            i = Z(t.doc, n.line),
            o = $(i, t.doc.direction);
        if (!o || 0 == o[0].level) {
            var r = Math.max(0, i.text.search(/\S/)),
                s = e.line == n.line && e.ch <= r && e.ch;
            return ae(n.line, s ? 0 : r, n.sticky)
        }
        return n
    }

    function _s(t, e, n) {
        if ("string" == typeof e && (e = Yl[e], !e)) return !1;
        t.display.input.ensurePolled();
        var i = t.display.shift,
            o = !1;
        try {
            t.isReadOnly() && (t.state.suppressEdits = !0), n && (t.display.shift = !1), o = e(t) != Ya
        } finally {
            t.display.shift = i, t.state.suppressEdits = !1
        }
        return o
    }

    function Cs(t, e, n) {
        for (var i = 0; i < t.state.keyMaps.length; i++) {
            var o = cs(e, t.state.keyMaps[i], n, t);
            if (o) return o
        }
        return t.options.extraKeys && cs(e, t.options.extraKeys, n, t) || cs(e, t.options.keyMap, n, t)
    }

    function Ts(t, e, n, i) {
        var o = t.state.keySeq;
        if (o) {
            if (us(e)) return "handled";
            if (/\'$/.test(e) ? t.state.keySeq = null : Ql.set(50, function () {
                t.state.keySeq == o && (t.state.keySeq = null, t.display.input.reset())
            }), ks(t, o + " " + e, n, i)) return !0
        }
        return ks(t, e, n, i)
    }

    function ks(t, e, n, i) {
        var o = Cs(t, e, i);
        return "multi" == o && (t.state.keySeq = e), "handled" == o && wn(t, "keyHandled", t, e, n), ("handled" ==
            o || "multi" == o) && (P(n), Hi(t)), !!o
    }

    function Ss(t, e) {
        var n = hs(e, !0);
        return n ? e.shiftKey && !t.state.keySeq ? Ts(t, "Shift-" + n, e, function (e) {
            return _s(t, e, !0)
        }) || Ts(t, n, e, function (e) {
            return ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion) ? _s(t, e) : void 0
        }) : Ts(t, n, e, function (e) {
            return _s(t, e)
        }) : !1
    }

    function Es(t, e, n) {
        return Ts(t, "'" + n + "'", e, function (e) {
            return _s(t, e, !0)
        })
    }

    function $s(t) {
        var e = this;
        if (e.curOp.focus = s(), !L(e, t)) {
            _a && 11 > Ca && 27 == t.keyCode && (t.returnValue = !1);
            var n = t.keyCode;
            e.display.shift = 16 == n || t.shiftKey;
            var i = Ss(e, t);
            Ea && (Vl = i ? n : null, !i && 88 == n && !al && (Ma ? t.metaKey : t.ctrlKey) && e.replaceSelection("",
                null, "cut")), ya && !Ma && !i && 46 == n && t.shiftKey && !t.ctrlKey && document.execCommand &&
            document.execCommand("cut"), 18 != n || /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) ||
            Ds(e)
        }
    }

    function Ds(t) {
        function e(t) {
            18 != t.keyCode && t.altKey || (Wa(n, "CodeMirror-crosshair"), N(document, "keyup", e), N(document,
                "mouseover", e))
        }
        var n = t.display.lineDiv;
        a(n, "CodeMirror-crosshair"), il(document, "keyup", e), il(document, "mouseover", e)
    }

    function Ns(t) {
        16 == t.keyCode && (this.doc.sel.shift = !1), L(this, t)
    }

    function As(t) {
        var e = this;
        if (!(Pn(e.display, t) || L(e, t) || t.ctrlKey && !t.altKey || Ma && t.metaKey)) {
            var n = t.keyCode,
                i = t.charCode;
            if (Ea && n == Vl) return Vl = null, P(t), void 0;
            if (!Ea || t.which && !(t.which < 10) || !Ss(e, t)) {
                var o = String.fromCharCode(null == i ? n : i);
                "\b" != o && (Es(e, t, o) || e.display.input.onKeyPress(t))
            }
        }
    }

    function Ls(t, e) {
        var n = +new Date;
        return Zl && Zl.compare(n, t, e) ? (Kl = Zl = null, "triple") : Kl && Kl.compare(n, t, e) ? (Zl = new Jl(n,
            t, e), Kl = null, "double") : (Kl = new Jl(n, t, e), Zl = null, "single")
    }

    function js(t) {
        var e = this,
            n = e.display;
        if (!(L(e, t) || n.activeTouch && n.input.supportsTouch())) {
            if (n.input.ensurePolled(), n.shift = t.shiftKey, Pn(n, t)) return Ta || (n.scroller.draggable = !1,
                setTimeout(function () {
                    return n.scroller.draggable = !0
                }, 100)), void 0;
            if (!Rs(e, t)) {
                var i = ki(e, t),
                    o = W(t),
                    r = i ? Ls(i, o) : "single";
                window.focus(), 1 == o && e.state.selectingText && e.state.selectingText(t), i && Ms(e, o, i, r, t) ||
                (1 == o ? i ? Ps(e, i, r, t) : F(t) == n.scroller && P(t) : 2 == o ? (i && vr(e.doc, i),
                    setTimeout(function () {
                        return n.input.focus()
                    }, 20)) : 3 == o && (Fa ? e.display.input.onContextMenu(t) : Fi(e)))
            }
        }
    }

    function Ms(t, e, n, i, o) {
        var r = "Click";
        return "double" == i ? r = "Double" + r : "triple" == i && (r = "Triple" + r), r = (1 == e ? "Left" : 2 ==
        e ? "Middle" : "Right") + r, Ts(t, ds(r, o), o, function (e) {
            if ("string" == typeof e && (e = Yl[e]), !e) return !1;
            var i = !1;
            try {
                t.isReadOnly() && (t.state.suppressEdits = !0), i = e(t, n) != Ya
            } finally {
                t.state.suppressEdits = !1
            }
            return i
        })
    }

    function Os(t, e, n) {
        var i = t.getOption("configureMouse"),
            o = i ? i(t, e, n) : {};
        if (null == o.unit) {
            var r = Oa ? n.shiftKey && n.metaKey : n.altKey;
            o.unit = r ? "rectangle" : "single" == e ? "char" : "double" == e ? "word" : "line"
        }
        return (null == o.extend || t.doc.extend) && (o.extend = t.doc.extend || n.shiftKey), null == o.addNew && (
            o.addNew = Ma ? n.metaKey : n.ctrlKey), null == o.moveOnDrag && (o.moveOnDrag = !(Ma ? n.altKey : n
            .ctrlKey)), o
    }

    function Ps(t, e, n, i) {
        _a ? setTimeout(c(zi, t), 0) : t.curOp.focus = s();
        var o, r = Os(t, n, i),
            a = t.doc.sel;
        t.options.dragDrop && ol && !t.isReadOnly() && "single" == n && (o = a.contains(e)) > -1 && (le((o = a.ranges[
            o]).from(), e) < 0 || e.xRel > 0) && (le(o.to(), e) > 0 || e.xRel < 0) ? Is(t, i, e, r) : zs(t, i,
            e, r)
    }

    function Is(t, e, n, i) {
        var o = t.display,
            r = !1,
            s = bo(t, function (e) {
                Ta && (o.scroller.draggable = !1), t.state.draggingText = !1, N(o.wrapper.ownerDocument,
                    "mouseup", s), N(o.wrapper.ownerDocument, "mousemove", a), N(o.scroller, "dragstart", l),
                    N(o.scroller, "drop", s), r || (P(e), i.addNew || vr(t.doc, n, null, null, i.extend), Ta ||
                _a && 9 == Ca ? setTimeout(function () {
                    o.wrapper.ownerDocument.body.focus(), o.input.focus()
                }, 20) : o.input.focus())
            }),
            a = function (t) {
                r = r || Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) >= 10
            },
            l = function () {
                return r = !0
            };
        Ta && (o.scroller.draggable = !0), t.state.draggingText = s, s.copy = !i.moveOnDrag, o.scroller.dragDrop &&
        o.scroller.dragDrop(), il(o.wrapper.ownerDocument, "mouseup", s), il(o.wrapper.ownerDocument,
            "mousemove", a), il(o.scroller, "dragstart", l), il(o.scroller, "drop", s), Fi(t), setTimeout(
            function () {
                return o.input.focus()
            }, 20)
    }

    function Hs(t, e, n) {
        if ("char" == n) return new jl(e, e);
        if ("word" == n) return t.findWordAt(e);
        if ("line" == n) return new jl(ae(e.line, 0), fe(t.doc, ae(e.line + 1, 0)));
        var i = n(t, e);
        return new jl(i.from, i.to)
    }

    function zs(t, e, n, i) {
        function o(e) {
            if (0 != le(v, e))
                if (v = e, "rectangle" == i.unit) {
                    for (var o = [], r = t.options.tabSize, s = d(Z(c, n.line).text, n.ch, r), a = d(Z(c, e.line).text,
                        e.ch, r), l = Math.min(s, a), g = Math.max(s, a), m = Math.min(n.line, e.line), y =
                        Math.min(t.lastLine(), Math.max(n.line, e.line)); y >= m; m++) {
                        var b = Z(c, m).text,
                            x = p(b, l, r);
                        l == g ? o.push(new jl(ae(m, x), ae(m, x))) : b.length > x && o.push(new jl(ae(m, x), ae(m,
                            p(b, g, r))))
                    }
                    o.length || o.push(new jl(n, n)), Cr(c, Ro(t, f.ranges.slice(0, h).concat(o), h), {
                        origin: "*mouse",
                        scroll: !1
                    }), t.scrollIntoView(e)
                } else {
                    var w, _ = u,
                        C = Hs(t, e, i.unit),
                        T = _.anchor;
                    le(C.anchor, T) > 0 ? (w = C.head, T = he(_.from(), C.anchor)) : (w = C.anchor, T = de(_.to(),
                        C.head));
                    var k = f.ranges.slice(0);
                    k[h] = Fs(t, new jl(fe(c, T), w)), Cr(c, Ro(t, k, h), Va)
                }
        }

        function r(e) {
            var n = ++b,
                a = ki(t, e, !0, "rectangle" == i.unit);
            if (a)
                if (0 != le(a, v)) {
                    t.curOp.focus = s(), o(a);
                    var u = Ui(l, c);
                    (a.line >= u.to || a.line < u.from) && setTimeout(bo(t, function () {
                        b == n && r(e)
                    }), 150)
                } else {
                    var d = e.clientY < y.top ? -20 : e.clientY > y.bottom ? 20 : 0;
                    d && setTimeout(bo(t, function () {
                        b == n && (l.scroller.scrollTop += d, r(e))
                    }), 50)
                }
        }

        function a(e) {
            t.state.selectingText = !1, b = 1 / 0, e && (P(e), l.input.focus()), N(l.wrapper.ownerDocument,
                "mousemove", x), N(l.wrapper.ownerDocument, "mouseup", w), c.history.lastSelOrigin = null
        }
        var l = t.display,
            c = t.doc;
        P(e);
        var u, h, f = c.sel,
            g = f.ranges;
        if (i.addNew && !i.extend ? (h = c.sel.contains(n), u = h > -1 ? g[h] : new jl(n, n)) : (u = c.sel.primary(),
            h = c.sel.primIndex), "rectangle" == i.unit) i.addNew || (u = new jl(n, n)), n = ki(t, e, !0, !0),
            h = -1;
        else {
            var m = Hs(t, n, i.unit);
            u = i.extend ? mr(u, m.anchor, m.head, i.extend) : m
        }
        i.addNew ? -1 == h ? (h = g.length, Cr(c, Ro(t, g.concat([u]), h), {
            scroll: !1,
            origin: "*mouse"
        })) : g.length > 1 && g[h].empty() && "char" == i.unit && !i.extend ? (Cr(c, Ro(t, g.slice(0, h).concat(
            g.slice(h + 1)), 0), {
            scroll: !1,
            origin: "*mouse"
        }), f = c.sel) : br(c, h, u, Va) : (h = 0, Cr(c, new Ll([u], 0), Va), f = c.sel);
        var v = n,
            y = l.wrapper.getBoundingClientRect(),
            b = 0,
            x = bo(t, function (t) {
                0 !== t.buttons && W(t) ? r(t) : a(t)
            }),
            w = bo(t, a);
        t.state.selectingText = w, il(l.wrapper.ownerDocument, "mousemove", x), il(l.wrapper.ownerDocument,
            "mouseup", w)
    }

    function Fs(t, e) {
        var n = e.anchor,
            i = e.head,
            o = Z(t.doc, n.line);
        if (0 == le(n, i) && n.sticky == i.sticky) return e;
        var r = $(o);
        if (!r) return e;
        var s = E(r, n.ch, n.sticky),
            a = r[s];
        if (a.from != n.ch && a.to != n.ch) return e;
        var l = s + (a.from == n.ch == (1 != a.level) ? 0 : 1);
        if (0 == l || l == r.length) return e;
        var c;
        if (i.line != n.line) c = (i.line - n.line) * ("ltr" == t.doc.direction ? 1 : -1) > 0;
        else {
            var u = E(r, i.ch, i.sticky),
                d = u - s || (i.ch - n.ch) * (1 == a.level ? -1 : 1);
            c = u == l - 1 || u == l ? 0 > d : d > 0
        }
        var h = r[l + (c ? -1 : 0)],
            p = c == (1 == h.level),
            f = p ? h.from : h.to,
            g = p ? "after" : "before";
        return n.ch == f && n.sticky == g ? e : new jl(new ae(n.line, f, g), i)
    }

    function Ws(t, e, n, i) {
        var o, r;
        if (e.touches) o = e.touches[0].clientX, r = e.touches[0].clientY;
        else try {
            o = e.clientX, r = e.clientY
        } catch (e) {
            return !1
        }
        if (o >= Math.floor(t.display.gutters.getBoundingClientRect().right)) return !1;
        i && P(e);
        var s = t.display,
            a = s.lineDiv.getBoundingClientRect();
        if (r > a.bottom || !M(t, n)) return H(e);
        r -= a.top - s.viewOffset;
        for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
            var c = s.gutters.childNodes[l];
            if (c && c.getBoundingClientRect().right >= o) {
                var u = oe(t.doc, r),
                    d = t.display.gutterSpecs[l];
                return A(t, n, t, u, d.className, e), H(e)
            }
        }
    }

    function Rs(t, e) {
        return Ws(t, e, "gutterClick", !0)
    }

    function qs(t, e) {
        Pn(t.display, e) || Bs(t, e) || L(t, e, "contextmenu") || Fa || t.display.input.onContextMenu(e)
    }

    function Bs(t, e) {
        return M(t, "gutterContextMenu") ? Ws(t, e, "gutterContextMenu", !1) : !1
    }

    function Us(t) {
        t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(
            /(^|\s)\s*/g, " cm-s-"), ni(t)
    }

    function Xs(t) {
        function e(e, i, o, r) {
            t.defaults[e] = i, o && (n[e] = r ? function (t, e, n) {
                n != tc && o(t, e, n)
            } : o)
        }
        var n = t.optionHandlers;
        t.defineOption = e, t.Init = tc, e("value", "", function (t, e) {
            return t.setValue(e)
        }, !0), e("mode", null, function (t, e) {
            t.doc.modeOption = e, Vo(t)
        }, !0), e("indentUnit", 2, Vo, !0), e("indentWithTabs", !1), e("smartIndent", !0), e("tabSize", 4,
            function (t) {
                Go(t), ni(t), Ei(t)
            }, !0), e("lineSeparator", null, function (t, e) {
            if (t.doc.lineSep = e, e) {
                var n = [],
                    i = t.doc.first;
                t.doc.iter(function (t) {
                    for (var o = 0;;) {
                        var r = t.text.indexOf(e, o);
                        if (-1 == r) break;
                        o = r + e.length, n.push(ae(i, r))
                    }
                    i++
                });
                for (var o = n.length - 1; o >= 0; o--) zr(t.doc, e, n[o], ae(n[o].line, n[o].ch + e.length))
            }
        }), e("specialChars",
            /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
            function (t, e, n) {
                t.state.specialChars = new RegExp(e.source + (e.test("	") ? "" : "|	"), "g"), n != tc && t.refresh()
            }), e("specialCharPlaceholder", un, function (t) {
            return t.refresh()
        }, !0), e("electricChars", !0), e("inputStyle", ja ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor")
        }, !0), e("spellcheck", !1, function (t, e) {
            return t.getInputField().spellcheck = e
        }, !0), e("autocorrect", !1, function (t, e) {
            return t.getInputField().autocorrect = e
        }, !0), e("autocapitalize", !1, function (t, e) {
            return t.getInputField().autocapitalize = e
        }, !0), e("rtlMoveVisually", !Pa), e("wholeLineUpdateBefore", !0), e("theme", "default", function (t) {
            Us(t), Io(t)
        }, !0), e("keyMap", "default", function (t, e, n) {
            var i = ps(e),
                o = n != tc && ps(n);
            o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null)
        }), e("extraKeys", null), e("configureMouse", null), e("lineWrapping", !1, Qs, !0), e("gutters", [],
            function (t, e) {
                t.display.gutterSpecs = Oo(e, t.options.lineNumbers), Io(t)
            }, !0), e("fixedGutter", !0, function (t, e) {
            t.display.gutters.style.left = e ? _i(t.display) + "px" : "0", t.refresh()
        }, !0), e("coverGutterNextToScrollbar", !1, function (t) {
            return so(t)
        }, !0), e("scrollbarStyle", "native", function (t) {
            lo(t), so(t), t.display.scrollbars.setScrollTop(t.doc.scrollTop), t.display.scrollbars.setScrollLeft(
                t.doc.scrollLeft)
        }, !0), e("lineNumbers", !1, function (t, e) {
            t.display.gutterSpecs = Oo(t.options.gutters, e), Io(t)
        }, !0), e("firstLineNumber", 1, Io, !0), e("lineNumberFormatter", function (t) {
            return t
        }, Io, !0), e("showCursorWhenSelecting", !1, ji, !0), e("resetSelectionOnContextMenu", !0), e(
            "lineWiseCopyCut", !0), e("pasteLinesPerSelection", !0), e("selectionsMayTouch", !1), e("readOnly",
            !1,
            function (t, e) {
                "nocursor" == e && (Ri(t), t.display.input.blur()), t.display.input.readOnlyChanged(e)
            }), e("disableInput", !1, function (t, e) {
            e || t.display.input.reset()
        }, !0), e("dragDrop", !0, Ys), e("allowDropFileTypes", null), e("cursorBlinkRate", 530), e(
            "cursorScrollMargin", 0), e("cursorHeight", 1, ji, !0), e("singleCursorHeightPerLine", !0, ji, !0),
            e("workTime", 100), e("workDelay", 100), e("flattenSpans", !0, Go, !0), e("addModeClass", !1, Go, !0),
            e("pollInterval", 100), e("undoDepth", 200, function (t, e) {
            return t.doc.history.undoDepth = e
        }), e("historyEventDelay", 1250), e("viewportMargin", 10, function (t) {
            return t.refresh()
        }, !0), e("maxHighlightLength", 1e4, Go, !0), e("moveInputWithCursor", !0, function (t, e) {
            e || t.display.input.resetPosition()
        }), e("tabindex", null, function (t, e) {
            return t.display.input.getField().tabIndex = e || ""
        }), e("autofocus", null), e("direction", "ltr", function (t, e) {
            return t.doc.setDirection(e)
        }, !0), e("phrases", null)
    }

    function Ys(t, e, n) {
        var i = n && n != tc;
        if (!e != !i) {
            var o = t.display.dragFunctions,
                r = e ? il : N;
            r(t.display.scroller, "dragstart", o.start), r(t.display.scroller, "dragenter", o.enter), r(t.display.scroller,
                "dragover", o.over), r(t.display.scroller, "dragleave", o.leave), r(t.display.scroller, "drop",
                o.drop)
        }
    }

    function Qs(t) {
        t.options.lineWrapping ? (a(t.display.wrapper, "CodeMirror-wrap"), t.display.sizer.style.minWidth = "", t.display
            .sizerWidth = null) : (Wa(t.display.wrapper, "CodeMirror-wrap"), rn(t)), Ti(t), Ei(t), ni(t),
            setTimeout(function () {
                return so(t)
            }, 100)
    }

    function Vs(t, e) {
        var n = this;
        if (!(this instanceof Vs)) return new Vs(t, e);
        this.options = e = e ? u(e) : {}, u(ec, e, !1);
        var i = e.value;
        "string" == typeof i ? i = new zl(i, e.mode, null, e.lineSeparator, e.direction) : e.mode && (i.modeOption =
            e.mode), this.doc = i;
        var o = new Vs.inputStyles[e.inputStyle](this),
            r = this.display = new Ho(t, i, o, e);
        r.wrapper.CodeMirror = this, Us(this), e.lineWrapping && (this.display.wrapper.className +=
            " CodeMirror-wrap"), lo(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new qa,
            keySeq: null,
            specialChars: null
        }, e.autofocus && !ja && r.input.focus(), _a && 11 > Ca && setTimeout(function () {
            return n.display.input.reset(!0)
        }, 20), Gs(this), os(), co(this), this.curOp.forceUpdate = !0, tr(this, i), e.autofocus && !ja || this.hasFocus() ?
            setTimeout(c(Wi, this), 20) : Ri(this);
        for (var s in nc) nc.hasOwnProperty(s) && nc[s](n, e[s], tc);
        Mo(this), e.finishInit && e.finishInit(this);
        for (var a = 0; a < ic.length; ++a) ic[a](n);
        uo(this), Ta && e.lineWrapping && "optimizelegibility" == getComputedStyle(r.lineDiv).textRendering && (r.lineDiv
            .style.textRendering = "auto")
    }

    function Gs(t) {
        function e() {
            o.activeTouch && (r = setTimeout(function () {
                return o.activeTouch = null
            }, 1e3), s = o.activeTouch, s.end = +new Date)
        }

        function n(t) {
            if (1 != t.touches.length) return !1;
            var e = t.touches[0];
            return e.radiusX <= 1 && e.radiusY <= 1
        }

        function i(t, e) {
            if (null == e.left) return !0;
            var n = e.left - t.left,
                i = e.top - t.top;
            return n * n + i * i > 400
        }
        var o = t.display;
        il(o.scroller, "mousedown", bo(t, js)), _a && 11 > Ca ? il(o.scroller, "dblclick", bo(t, function (e) {
            if (!L(t, e)) {
                var n = ki(t, e);
                if (n && !Rs(t, e) && !Pn(t.display, e)) {
                    P(e);
                    var i = t.findWordAt(n);
                    vr(t.doc, i.anchor, i.head)
                }
            }
        })) : il(o.scroller, "dblclick", function (e) {
            return L(t, e) || P(e)
        }), il(o.scroller, "contextmenu", function (e) {
            return qs(t, e)
        });
        var r, s = {
            end: 0
        };
        il(o.scroller, "touchstart", function (e) {
            if (!L(t, e) && !n(e) && !Rs(t, e)) {
                o.input.ensurePolled(), clearTimeout(r);
                var i = +new Date;
                o.activeTouch = {
                    start: i,
                    moved: !1,
                    prev: i - s.end <= 300 ? s : null
                }, 1 == e.touches.length && (o.activeTouch.left = e.touches[0].pageX, o.activeTouch.top =
                    e.touches[0].pageY)
            }
        }), il(o.scroller, "touchmove", function () {
            o.activeTouch && (o.activeTouch.moved = !0)
        }), il(o.scroller, "touchend", function (n) {
            var r = o.activeTouch;
            if (r && !Pn(o, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                var s, a = t.coordsChar(o.activeTouch, "page");
                s = !r.prev || i(r, r.prev) ? new jl(a, a) : !r.prev.prev || i(r, r.prev.prev) ? t.findWordAt(
                    a) : new jl(ae(a.line, 0), fe(t.doc, ae(a.line + 1, 0))), t.setSelection(s.anchor,
                    s.head), t.focus(), P(n)
            }
            e()
        }), il(o.scroller, "touchcancel", e), il(o.scroller, "scroll", function () {
            o.scroller.clientHeight && (no(t, o.scroller.scrollTop), oo(t, o.scroller.scrollLeft, !0), A(t,
                "scroll", t))
        }), il(o.scroller, "mousewheel", function (e) {
            return Wo(t, e)
        }), il(o.scroller, "DOMMouseScroll", function (e) {
            return Wo(t, e)
        }), il(o.wrapper, "scroll", function () {
            return o.wrapper.scrollTop = o.wrapper.scrollLeft = 0
        }), o.dragFunctions = {
            enter: function (e) {
                L(t, e) || z(e)
            },
            over: function (e) {
                L(t, e) || (es(t, e), z(e))
            },
            start: function (e) {
                return ts(t, e)
            },
            drop: bo(t, Zr),
            leave: function (e) {
                L(t, e) || ns(t)
            }
        };
        var a = o.input.getField();
        il(a, "keyup", function (e) {
            return Ns.call(t, e)
        }), il(a, "keydown", bo(t, $s)), il(a, "keypress", bo(t, As)), il(a, "focus", function (e) {
            return Wi(t, e)
        }), il(a, "blur", function (e) {
            return Ri(t, e)
        })
    }

    function Js(t, e, n, i) {
        var o, r = t.doc;
        null == n && (n = "add"), "smart" == n && (r.mode.indent ? o = be(t, e).state : n = "prev");
        var s = t.options.tabSize,
            a = Z(r, e),
            l = d(a.text, null, s);
        a.stateAfter && (a.stateAfter = null);
        var c, u = a.text.match(/^\s*/)[0];
        if (i || /\S/.test(a.text)) {
            if ("smart" == n && (c = r.mode.indent(o, a.text.slice(u.length), a.text), c == Ya || c > 150)) {
                if (!i) return;
                n = "prev"
            }
        } else c = 0, n = "not";
        "prev" == n ? c = e > r.first ? d(Z(r, e - 1).text, null, s) : 0 : "add" == n ? c = l + t.options.indentUnit :
            "subtract" == n ? c = l - t.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
        var h = "",
            p = 0;
        if (t.options.indentWithTabs)
            for (var g = Math.floor(c / s); g; --g) p += s, h += "	";
        if (c > p && (h += f(c - p)), h != u) return zr(r, h, ae(e, 0), ae(e, u.length), "+input"), a.stateAfter =
            null, !0;
        for (var m = 0; m < r.sel.ranges.length; m++) {
            var v = r.sel.ranges[m];
            if (v.head.line == e && v.head.ch < u.length) {
                var y = ae(e, u.length);
                br(r, m, new jl(y, y));
                break
            }
        }
    }

    function Ks(t) {
        oc = t
    }

    function Zs(t, e, n, i, o) {
        var r = t.doc;
        t.display.shift = !1, i || (i = r.sel);
        var s = +new Date - 200,
            a = "paste" == o || t.state.pasteIncoming > s,
            l = rl(e),
            c = null;
        if (a && i.ranges.length > 1)
            if (oc && oc.text.join("\n") == e) {
                if (0 == i.ranges.length % oc.text.length) {
                    c = [];
                    for (var u = 0; u < oc.text.length; u++) c.push(r.splitLines(oc.text[u]))
                }
            } else l.length == i.ranges.length && t.options.pasteLinesPerSelection && (c = m(l, function (t) {
                return [t]
            }));
        for (var d = t.curOp.updateInput, h = i.ranges.length - 1; h >= 0; h--) {
            var p = i.ranges[h],
                f = p.from(),
                v = p.to();
            p.empty() && (n && n > 0 ? f = ae(f.line, f.ch - n) : t.state.overwrite && !a ? v = ae(v.line, Math.min(
                Z(r, v.line).text.length, v.ch + g(l).length)) : a && oc && oc.lineWise && oc.text.join(
                "\n") == e && (f = v = ae(f.line, 0)));
            var y = {
                from: f,
                to: v,
                text: c ? c[h % c.length] : l,
                origin: o || (a ? "paste" : t.state.cutIncoming > s ? "cut" : "+input")
            };
            jr(t.doc, y), wn(t, "inputRead", t, y)
        }
        e && !a && ea(t, e), Ji(t), t.curOp.updateInput < 2 && (t.curOp.updateInput = d), t.curOp.typing = !0, t.state
            .pasteIncoming = t.state.cutIncoming = -1
    }

    function ta(t, e) {
        var n = t.clipboardData && t.clipboardData.getData("Text");
        return n ? (t.preventDefault(), e.isReadOnly() || e.options.disableInput || yo(e, function () {
            return Zs(e, n, 0, null, "paste")
        }), !0) : void 0
    }

    function ea(t, e) {
        if (t.options.electricChars && t.options.smartIndent)
            for (var n = t.doc.sel, i = n.ranges.length - 1; i >= 0; i--) {
                var o = n.ranges[i];
                if (!(o.head.ch > 100 || i && n.ranges[i - 1].head.line == o.head.line)) {
                    var r = t.getModeAt(o.head),
                        s = !1;
                    if (r.electricChars) {
                        for (var a = 0; a < r.electricChars.length; a++)
                            if (e.indexOf(r.electricChars.charAt(a)) > -1) {
                                s = Js(t, o.head.line, "smart");
                                break
                            }
                    } else r.electricInput && r.electricInput.test(Z(t.doc, o.head.line).text.slice(0, o.head.ch)) &&
                    (s = Js(t, o.head.line, "smart"));
                    s && wn(t, "electricInput", t, o.head.line)
                }
            }
    }

    function na(t) {
        for (var e = [], n = [], i = 0; i < t.doc.sel.ranges.length; i++) {
            var o = t.doc.sel.ranges[i].head.line,
                r = {
                    anchor: ae(o, 0),
                    head: ae(o + 1, 0)
                };
            n.push(r), e.push(t.getRange(r.anchor, r.head))
        }
        return {
            text: e,
            ranges: n
        }
    }

    function ia(t, e, n, i) {
        t.setAttribute("autocorrect", n ? "" : "off"), t.setAttribute("autocapitalize", i ? "" : "off"), t.setAttribute(
            "spellcheck", !!e)
    }

    function oa() {
        var t = i("textarea", null, null,
            "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
            e = i("div", [t], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return Ta ? t.style.width = "1000px" : t.setAttribute("wrap", "off"), Aa && (t.style.border =
            "1px solid black"), ia(t), e
    }

    function ra(t) {
        var e = t.optionHandlers,
            n = t.helpers = {};
        t.prototype = {
            constructor: t,
            focus: function () {
                window.focus(), this.display.input.focus()
            },
            setOption: function (t, n) {
                var i = this.options,
                    o = i[t];
                (i[t] != n || "mode" == t) && (i[t] = n, e.hasOwnProperty(t) && bo(this, e[t])(this, n, o),
                    A(this, "optionChange", this, t))
            },
            getOption: function (t) {
                return this.options[t]
            },
            getDoc: function () {
                return this.doc
            },
            addKeyMap: function (t, e) {
                this.state.keyMaps[e ? "push" : "unshift"](ps(t))
            },
            removeKeyMap: function (t) {
                for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                    if (e[n] == t || e[n].name == t) return e.splice(n, 1), !0
            },
            addOverlay: xo(function (e, n) {
                var i = e.token ? e : t.getMode(this.options, e);
                if (i.startState) throw new Error("Overlays may not be stateful.");
                v(this.state.overlays, {
                    mode: i,
                    modeSpec: e,
                    opaque: n && n.opaque,
                    priority: n && n.priority || 0
                }, function (t) {
                    return t.priority
                }), this.state.modeGen++, Ei(this)
            }),
            removeOverlay: xo(function (t) {
                for (var e = this, n = this.state.overlays, i = 0; i < n.length; ++i) {
                    var o = n[i].modeSpec;
                    if (o == t || "string" == typeof t && o.name == t) return n.splice(i, 1), e.state.modeGen++,
                        Ei(e), void 0
                }
            }),
            indentLine: xo(function (t, e, n) {
                "string" != typeof e && "number" != typeof e && (e = null == e ? this.options.smartIndent ?
                    "smart" : "prev" : e ? "add" : "subtract"), re(this.doc, t) && Js(this, t, e, n)
            }),
            indentSelection: xo(function (t) {
                for (var e = this, n = this.doc.sel.ranges, i = -1, o = 0; o < n.length; o++) {
                    var r = n[o];
                    if (r.empty()) r.head.line > i && (Js(e, r.head.line, t, !0), i = r.head.line, o ==
                    e.doc.sel.primIndex && Ji(e));
                    else {
                        var s = r.from(),
                            a = r.to(),
                            l = Math.max(i, s.line);
                        i = Math.min(e.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                        for (var c = l; i > c; ++c) Js(e, c, t);
                        var u = e.doc.sel.ranges;
                        0 == s.ch && n.length == u.length && u[o].from().ch > 0 && br(e.doc, o, new jl(
                            s, u[o].to()), Qa)
                    }
                }
            }),
            getTokenAt: function (t, e) {
                return Ce(this, t, e)
            },
            getLineTokens: function (t, e) {
                return Ce(this, ae(t), e, !0)
            },
            getTokenTypeAt: function (t) {
                t = fe(this.doc, t);
                var e, n = ye(this, Z(this.doc, t.line)),
                    i = 0,
                    o = (n.length - 1) / 2,
                    r = t.ch;
                if (0 == r) e = n[2];
                else
                    for (;;) {
                        var s = i + o >> 1;
                        if ((s ? n[2 * s - 1] : 0) >= r) o = s;
                        else {
                            if (!(n[2 * s + 1] < r)) {
                                e = n[2 * s + 2];
                                break
                            }
                            i = s + 1
                        }
                    }
                var a = e ? e.indexOf("overlay ") : -1;
                return 0 > a ? e : 0 == a ? null : e.slice(0, a - 1)
            },
            getModeAt: function (e) {
                var n = this.doc.mode;
                return n.innerMode ? t.innerMode(n, this.getTokenAt(e).state).mode : n
            },
            getHelper: function (t, e) {
                return this.getHelpers(t, e)[0]
            },
            getHelpers: function (t, e) {
                var i = this,
                    o = [];
                if (!n.hasOwnProperty(e)) return o;
                var r = n[e],
                    s = this.getModeAt(t);
                if ("string" == typeof s[e]) r[s[e]] && o.push(r[s[e]]);
                else if (s[e])
                    for (var a = 0; a < s[e].length; a++) {
                        var l = r[s[e][a]];
                        l && o.push(l)
                    } else s.helperType && r[s.helperType] ? o.push(r[s.helperType]) : r[s.name] && o.push(
                        r[s.name]);
                for (var c = 0; c < r._global.length; c++) {
                    var u = r._global[c];
                    u.pred(s, i) && -1 == h(o, u.val) && o.push(u.val)
                }
                return o
            },
            getStateAfter: function (t, e) {
                var n = this.doc;
                return t = pe(n, null == t ? n.first + n.size - 1 : t), be(this, t + 1, e).state
            },
            cursorCoords: function (t, e) {
                var n, i = this.doc.sel.primary();
                return n = null == t ? i.head : "object" == typeof t ? fe(this.doc, t) : t ? i.from() : i.to(),
                    ci(this, n, e || "page")
            },
            charCoords: function (t, e) {
                return li(this, fe(this.doc, t), e || "page")
            },
            coordsChar: function (t, e) {
                return t = ai(this, t, e || "page"), hi(this, t.left, t.top)
            },
            lineAtHeight: function (t, e) {
                return t = ai(this, {
                    top: t,
                    left: 0
                }, e || "page").top, oe(this.doc, t + this.display.viewOffset)
            },
            heightAtLine: function (t, e, n) {
                var i, o = !1;
                if ("number" == typeof t) {
                    var r = this.doc.first + this.doc.size - 1;
                    t < this.doc.first ? t = this.doc.first : t > r && (t = r, o = !0), i = Z(this.doc, t)
                } else i = t;
                return si(this, i, {
                    top: 0,
                    left: 0
                }, e || "page", n || o).top + (o ? this.doc.height - nn(i) : 0)
            },
            defaultTextHeight: function () {
                return bi(this.display)
            },
            defaultCharWidth: function () {
                return xi(this.display)
            },
            getViewport: function () {
                return {
                    from: this.display.viewFrom,
                    to: this.display.viewTo
                }
            },
            addWidget: function (t, e, n, i, o) {
                var r = this.display;
                t = ci(this, fe(this.doc, t));
                var s = t.bottom,
                    a = t.left;
                if (e.style.position = "absolute", e.setAttribute("cm-ignore-events", "true"), this.display
                    .input.setUneditable(e), r.sizer.appendChild(e), "over" == i) s = t.top;
                else if ("above" == i || "near" == i) {
                    var l = Math.max(r.wrapper.clientHeight, this.doc.height),
                        c = Math.max(r.sizer.clientWidth, r.lineSpace.clientWidth);
                    ("above" == i || t.bottom + e.offsetHeight > l) && t.top > e.offsetHeight ? s = t.top -
                        e.offsetHeight : t.bottom + e.offsetHeight <= l && (s = t.bottom), a + e.offsetWidth >
                    c && (a = c - e.offsetWidth)
                }
                e.style.top = s + "px", e.style.left = e.style.right = "", "right" == o ? (a = r.sizer.clientWidth -
                    e.offsetWidth, e.style.right = "0px") : ("left" == o ? a = 0 : "middle" == o && (a =
                    (r.sizer.clientWidth - e.offsetWidth) / 2), e.style.left = a + "px"), n && Qi(this, {
                    left: a,
                    top: s,
                    right: a + e.offsetWidth,
                    bottom: s + e.offsetHeight
                })
            },
            triggerOnKeyDown: xo($s),
            triggerOnKeyPress: xo(As),
            triggerOnKeyUp: Ns,
            triggerOnMouseDown: xo(js),
            execCommand: function (t) {
                return Yl.hasOwnProperty(t) ? Yl[t].call(null, this) : void 0
            },
            triggerElectric: xo(function (t) {
                ea(this, t)
            }),
            findPosH: function (t, e, n, i) {
                var o = this,
                    r = 1;
                0 > e && (r = -1, e = -e);
                for (var s = fe(this.doc, t), a = 0; e > a && (s = sa(o.doc, s, r, n, i), !s.hitSide); ++a)
                    ;
                return s
            },
            moveH: xo(function (t, e) {
                var n = this;
                this.extendSelectionsBy(function (i) {
                    return n.display.shift || n.doc.extend || i.empty() ? sa(n.doc, i.head, t,
                        e, n.options.rtlMoveVisually) : 0 > t ? i.from() : i.to()
                }, Ga)
            }),
            deleteH: xo(function (t, e) {
                var n = this.doc.sel,
                    i = this.doc;
                n.somethingSelected() ? i.replaceSelection("", null, "+delete") : fs(this, function (n) {
                    var o = sa(i, n.head, t, e, !1);
                    return 0 > t ? {
                        from: o,
                        to: n.head
                    } : {
                        from: n.head,
                        to: o
                    }
                })
            }),
            findPosV: function (t, e, n, i) {
                var o = this,
                    r = 1,
                    s = i;
                0 > e && (r = -1, e = -e);
                for (var a = fe(this.doc, t), l = 0; e > l; ++l) {
                    var c = ci(o, a, "div");
                    if (null == s ? s = c.left : c.left = s, a = aa(o, c, r, n), a.hitSide) break
                }
                return a
            },
            moveV: xo(function (t, e) {
                var n = this,
                    i = this.doc,
                    o = [],
                    r = !this.display.shift && !i.extend && i.sel.somethingSelected();
                if (i.extendSelectionsBy(function (s) {
                    if (r) return 0 > t ? s.from() : s.to();
                    var a = ci(n, s.head, "div");
                    null != s.goalColumn && (a.left = s.goalColumn), o.push(a.left);
                    var l = aa(n, a, t, e);
                    return "page" == e && s == i.sel.primary() && Gi(n, li(n, l, "div").top - a
                        .top), l
                }, Ga), o.length)
                    for (var s = 0; s < i.sel.ranges.length; s++) i.sel.ranges[s].goalColumn = o[s]
            }),
            findWordAt: function (t) {
                var e = this.doc,
                    n = Z(e, t.line).text,
                    i = t.ch,
                    o = t.ch;
                if (n) {
                    var r = this.getHelper(t, "wordChars");
                    "before" != t.sticky && o != n.length || !i ? ++o : --i;
                    for (var s = n.charAt(i), a = w(s, r) ? function (t) {
                        return w(t, r)
                    } : /\s/.test(s) ? function (t) {
                        return /\s/.test(t)
                    } : function (t) {
                        return !/\s/.test(t) && !w(t)
                    }; i > 0 && a(n.charAt(i - 1));) --i;
                    for (; o < n.length && a(n.charAt(o));) ++o
                }
                return new jl(ae(t.line, i), ae(t.line, o))
            },
            toggleOverwrite: function (t) {
                (null == t || t != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ?
                    a(this.display.cursorDiv, "CodeMirror-overwrite") : Wa(this.display.cursorDiv,
                        "CodeMirror-overwrite"), A(this, "overwriteToggle", this, this.state.overwrite))
            },
            hasFocus: function () {
                return this.display.input.getField() == s()
            },
            isReadOnly: function () {
                return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: xo(function (t, e) {
                Ki(this, t, e)
            }),
            getScrollInfo: function () {
                var t = this.display.scroller;
                return {
                    left: t.scrollLeft,
                    top: t.scrollTop,
                    height: t.scrollHeight - Fn(this) - this.display.barHeight,
                    width: t.scrollWidth - Fn(this) - this.display.barWidth,
                    clientHeight: Rn(this),
                    clientWidth: Wn(this)
                }
            },
            scrollIntoView: xo(function (t, e) {
                null == t ? (t = {
                    from: this.doc.sel.primary().head,
                    to: null
                }, null == e && (e = this.options.cursorScrollMargin)) : "number" == typeof t ? t = {
                    from: ae(t, 0),
                    to: null
                } : null == t.from && (t = {
                    from: t,
                    to: null
                }), t.to || (t.to = t.from), t.margin = e || 0, null != t.from.line ? Zi(this, t) :
                    eo(this, t.from, t.to, t.margin)
            }),
            setSize: xo(function (t, e) {
                var n = this,
                    i = function (t) {
                        return "number" == typeof t || /^\d+$/.test(String(t)) ? t + "px" : t
                    };
                null != t && (this.display.wrapper.style.width = i(t)), null != e && (this.display.wrapper
                    .style.height = i(e)), this.options.lineWrapping && ei(this);
                var o = this.display.viewFrom;
                this.doc.iter(o, this.display.viewTo, function (t) {
                    if (t.widgets)
                        for (var e = 0; e < t.widgets.length; e++)
                            if (t.widgets[e].noHScroll) {
                                $i(n, o, "widget");
                                break
                            }++ o
                }), this.curOp.forceUpdate = !0, A(this, "refresh", this)
            }),
            operation: function (t) {
                return yo(this, t)
            },
            startOperation: function () {
                return co(this)
            },
            endOperation: function () {
                return uo(this)
            },
            refresh: xo(function () {
                var t = this.display.cachedTextHeight;
                Ei(this), this.curOp.forceUpdate = !0, ni(this), Ki(this, this.doc.scrollLeft, this.doc
                    .scrollTop), Ao(this.display), (null == t || Math.abs(t - bi(this.display)) >
                    .5) && Ti(this), A(this, "refresh", this)
            }),
            swapDoc: xo(function (t) {
                var e = this.doc;
                return e.cm = null, this.state.selectingText && this.state.selectingText(), tr(this, t),
                    ni(this), this.display.input.reset(), Ki(this, t.scrollLeft, t.scrollTop), this.curOp
                    .forceScroll = !0, wn(this, "swapDoc", this, e), e
            }),
            phrase: function (t) {
                var e = this.options.phrases;
                return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t
            },
            getInputField: function () {
                return this.display.input.getField()
            },
            getWrapperElement: function () {
                return this.display.wrapper
            },
            getScrollerElement: function () {
                return this.display.scroller
            },
            getGutterElement: function () {
                return this.display.gutters
            }
        }, O(t), t.registerHelper = function (e, i, o) {
            n.hasOwnProperty(e) || (n[e] = t[e] = {
                _global: []
            }), n[e][i] = o
        }, t.registerGlobalHelper = function (e, i, o, r) {
            t.registerHelper(e, i, r), n[e]._global.push({
                pred: o,
                val: r
            })
        }
    }

    function sa(t, e, n, i, o) {
        function r() {
            var i = e.line + n;
            return i < t.first || i >= t.first + t.size ? !1 : (e = new ae(i, e.ch, e.sticky), c = Z(t, i))
        }

        function s(i) {
            var s;
            if (s = o ? ys(t.cm, c, e, n) : ms(c, e, n), null == s) {
                if (i || !r()) return !1;
                e = vs(o, t.cm, c, e.line, n)
            } else e = s;
            return !0
        }
        var a = e,
            l = n,
            c = Z(t, e.line);
        if ("char" == i) s();
        else if ("column" == i) s(!0);
        else if ("word" == i || "group" == i)
            for (var u = null, d = "group" == i, h = t.cm && t.cm.getHelper(e, "wordChars"), p = !0; !(0 > n) || s(
                !p); p = !1) {
                var f = c.text.charAt(e.ch) || "\n",
                    g = w(f, h) ? "w" : d && "\n" == f ? "n" : !d || /\s/.test(f) ? null : "p";
                if (!d || p || g || (g = "s"), u && u != g) {
                    0 > n && (n = 1, s(), e.sticky = "after");
                    break
                }
                if (g && (u = g), n > 0 && !s(!p)) break
            }
        var m = Dr(t, e, a, l, !0);
        return ce(a, m) && (m.hitSide = !0), m
    }

    function aa(t, e, n, i) {
        var o, r = t.doc,
            s = e.left;
        if ("page" == i) {
            var a = Math.min(t.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                l = Math.max(a - .5 * bi(t.display), 3);
            o = (n > 0 ? e.bottom : e.top) + n * l
        } else "line" == i && (o = n > 0 ? e.bottom + 3 : e.top - 3);
        for (var c; c = hi(t, s, o), c.outside;) {
            if (0 > n ? 0 >= o : o >= r.height) {
                c.hitSide = !0;
                break
            }
            o += 5 * n
        }
        return c
    }

    function la(t, e) {
        var n = Yn(t, e.line);
        if (!n || n.hidden) return null;
        var i = Z(t.doc, e.line),
            o = Bn(n, i, e.line),
            r = $(i, t.doc.direction),
            s = "left";
        if (r) {
            var a = E(r, e.ch);
            s = a % 2 ? "right" : "left"
        }
        var l = Gn(o.map, e.ch, s);
        return l.offset = "right" == l.collapse ? l.end : l.start, l
    }

    function ca(t) {
        for (var e = t; e; e = e.parentNode)
            if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0;
        return !1
    }

    function ua(t, e) {
        return e && (t.bad = !0), t
    }

    function da(t, e, n, i, o) {
        function r(t) {
            return function (e) {
                return e.id == t
            }
        }

        function s() {
            u && (c += d, h && (c += d), u = h = !1)
        }

        function a(t) {
            t && (s(), c += t)
        }

        function l(e) {
            if (1 == e.nodeType) {
                var n = e.getAttribute("cm-text");
                if (n) return a(n), void 0;
                var c, p = e.getAttribute("cm-marker");
                if (p) {
                    var f = t.findMarks(ae(i, 0), ae(o + 1, 0), r(+p));
                    return f.length && (c = f[0].find(0)) && a(te(t.doc, c.from, c.to).join(d)), void 0
                }
                if ("false" == e.getAttribute("contenteditable")) return;
                var g = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length) return;
                g && s();
                for (var m = 0; m < e.childNodes.length; m++) l(e.childNodes[m]);
                /^(pre|p)$/i.test(e.nodeName) && (h = !0), g && (u = !0)
            } else 3 == e.nodeType && a(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
        }
        for (var c = "", u = !1, d = t.doc.lineSeparator(), h = !1; l(e), e != n;) e = e.nextSibling, h = !1;
        return c
    }

    function ha(t, e, n) {
        var i;
        if (e == t.display.lineDiv) {
            if (i = t.display.lineDiv.childNodes[n], !i) return ua(t.clipPos(ae(t.display.viewTo - 1)), !0);
            e = null, n = 0
        } else
            for (i = e;; i = i.parentNode) {
                if (!i || i == t.display.lineDiv) return null;
                if (i.parentNode && i.parentNode == t.display.lineDiv) break
            }
        for (var o = 0; o < t.display.view.length; o++) {
            var r = t.display.view[o];
            if (r.node == i) return pa(r, e, n)
        }
    }

    function pa(t, e, n) {
        function i(e, n, i) {
            for (var o = -1; o < (d ? d.length : 0); o++)
                for (var r = 0 > o ? u.map : d[o], s = 0; s < r.length; s += 3) {
                    var a = r[s + 2];
                    if (a == e || a == n) {
                        var l = ie(0 > o ? t.line : t.rest[o]),
                            c = r[s] + i;
                        return (0 > i || a != e) && (c = r[s + (i ? 1 : 0)]), ae(l, c)
                    }
                }
        }
        var o = t.text.firstChild,
            s = !1;
        if (!e || !r(o, e)) return ua(ae(ie(t.line), 0), !0);
        if (e == o && (s = !0, e = o.childNodes[n], n = 0, !e)) {
            var a = t.rest ? g(t.rest) : t.line;
            return ua(ae(ie(a), a.text.length), s)
        }
        var l = 3 == e.nodeType ? e : null,
            c = e;
        for (l || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (l = e.firstChild, n && (n = l.nodeValue
            .length)); c.parentNode != o;) c = c.parentNode;
        var u = t.measure,
            d = u.maps,
            h = i(l, c, n);
        if (h) return ua(h, s);
        for (var p = c.nextSibling, f = l ? l.nodeValue.length - n : 0; p; p = p.nextSibling) {
            if (h = i(p, p.firstChild, 0)) return ua(ae(h.line, h.ch - f), s);
            f += p.textContent.length
        }
        for (var m = c.previousSibling, v = n; m; m = m.previousSibling) {
            if (h = i(m, m.firstChild, -1)) return ua(ae(h.line, h.ch + v), s);
            v += m.textContent.length
        }
    }

    function fa(t, e) {
        function n() {
            t.value = c.getValue()
        }
        if (e = e ? u(e) : {}, e.value = t.value, !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex), !e.placeholder &&
        t.placeholder && (e.placeholder = t.placeholder), null == e.autofocus) {
            var i = s();
            e.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body
        }
        var o;
        if (t.form && (il(t.form, "submit", n), !e.leaveSubmitMethodAlone)) {
            var r = t.form;
            o = r.submit;
            try {
                var a = r.submit = function () {
                    n(), r.submit = o, r.submit(), r.submit = a
                }
            } catch (l) {}
        }
        e.finishInit = function (i) {
            i.save = n, i.getTextArea = function () {
                return t
            }, i.toTextArea = function () {
                i.toTextArea = isNaN, n(), t.parentNode.removeChild(i.getWrapperElement()), t.style.display =
                    "", t.form && (N(t.form, "submit", n), e.leaveSubmitMethodAlone || "function" != typeof t
                    .form.submit || (t.form.submit = o))
            }
        }, t.style.display = "none";
        var c = Vs(function (e) {
            return t.parentNode.insertBefore(e, t.nextSibling)
        }, e);
        return c
    }

    function ga(t) {
        t.off = N, t.on = il, t.wheelEventPixels = Fo, t.Doc = zl, t.splitLines = rl, t.countColumn = d, t.findColumn =
            p, t.isWordChar = x, t.Pass = Ya, t.signal = A, t.Line = yl, t.changeEnd = Bo, t.scrollbarModel = El, t
            .Pos = ae, t.cmpPos = le, t.modes = cl, t.mimeModes = ul, t.resolveMode = Y, t.getMode = Q, t.modeExtensions =
            dl, t.extendMode = V, t.copyState = G, t.startState = K, t.innerMode = J, t.commands = Yl, t.keyMap =
            Xl, t.keyName = hs, t.isModifierKey = us, t.lookupKey = cs, t.normalizeKeyMap = ls, t.StringStream = hl,
            t.SharedTextMarker = Il, t.TextMarker = Pl, t.LineWidget = Ml, t.e_preventDefault = P, t.e_stopPropagation =
            I, t.e_stop = z, t.addClass = a, t.contains = r, t.rmClass = Wa, t.keyNames = Rl
    }
    var ma = navigator.userAgent,
        va = navigator.platform,
        ya = /gecko\/\d/i.test(ma),
        ba = /MSIE \d/.test(ma),
        xa = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ma),
        wa = /Edge\/(\d+)/.exec(ma),
        _a = ba || xa || wa,
        Ca = _a && (ba ? document.documentMode || 6 : +(wa || xa)[1]),
        Ta = !wa && /WebKit\//.test(ma),
        ka = Ta && /Qt\/\d+\.\d+/.test(ma),
        Sa = !wa && /Chrome\//.test(ma),
        Ea = /Opera\//.test(ma),
        $a = /Apple Computer/.test(navigator.vendor),
        Da = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ma),
        Na = /PhantomJS/.test(ma),
        Aa = !wa && /AppleWebKit/.test(ma) && /Mobile\/\w+/.test(ma),
        La = /Android/.test(ma),
        ja = Aa || La || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ma),
        Ma = Aa || /Mac/.test(va),
        Oa = /\bCrOS\b/.test(ma),
        Pa = /win/i.test(va),
        Ia = Ea && ma.match(/Version\/(\d*\.\d*)/);
    Ia && (Ia = Number(Ia[1])), Ia && Ia >= 15 && (Ea = !1, Ta = !0);
    var Ha, za = Ma && (ka || Ea && (null == Ia || 12.11 > Ia)),
        Fa = ya || _a && Ca >= 9,
        Wa = function (e, n) {
            var i = e.className,
                o = t(n).exec(i);
            if (o) {
                var r = i.slice(o.index + o[0].length);
                e.className = i.slice(0, o.index) + (r ? o[1] + r : "")
            }
        };
    Ha = document.createRange ? function (t, e, n, i) {
        var o = document.createRange();
        return o.setEnd(i || t, n), o.setStart(t, e), o
    } : function (t, e, n) {
        var i = document.body.createTextRange();
        try {
            i.moveToElementText(t.parentNode)
        } catch (o) {
            return i
        }
        return i.collapse(!0), i.moveEnd("character", n), i.moveStart("character", e), i
    };
    var Ra = function (t) {
        t.select()
    };
    Aa ? Ra = function (t) {
        t.selectionStart = 0, t.selectionEnd = t.value.length
    } : _a && (Ra = function (t) {
        try {
            t.select()
        } catch (e) {}
    });
    var qa = function () {
        this.id = null, this.f = null, this.time = 0, this.handler = c(this.onTimeout, this)
    };
    qa.prototype.onTimeout = function (t) {
        t.id = 0, t.time <= +new Date ? t.f() : setTimeout(t.handler, t.time - +new Date)
    }, qa.prototype.set = function (t, e) {
        this.f = e;
        var n = +new Date + t;
        (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, t), this.time =
            n)
    };
    var Ba, Ua, Xa = 30,
        Ya = {
            toString: function () {
                return "CodeMirror.Pass"
            }
        },
        Qa = {
            scroll: !1
        },
        Va = {
            origin: "*mouse"
        },
        Ga = {
            origin: "+move"
        },
        Ja = [""],
        Ka =
            /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
        Za =
            /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
        tl = null,
        el = function () {
            function t(t) {
                return 247 >= t ? n.charAt(t) : t >= 1424 && 1524 >= t ? "R" : t >= 1536 && 1785 >= t ? i.charAt(t -
                    1536) : t >= 1774 && 2220 >= t ? "r" : t >= 8192 && 8203 >= t ? "w" : 8204 == t ? "b" : "L"
            }

            function e(t, e, n) {
                this.level = t, this.from = e, this.to = n
            }
            var n =
                    "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                i =
                    "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
                o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                r = /[stwN]/,
                s = /[LRr]/,
                a = /[Lb1n]/,
                l = /[1n]/;
            return function (n, i) {
                var c = "ltr" == i ? "L" : "R";
                if (0 == n.length || "ltr" == i && !o.test(n)) return !1;
                for (var u = n.length, d = [], h = 0; u > h; ++h) d.push(t(n.charCodeAt(h)));
                for (var p = 0, f = c; u > p; ++p) {
                    var m = d[p];
                    "m" == m ? d[p] = f : f = m
                }
                for (var v = 0, y = c; u > v; ++v) {
                    var b = d[v];
                    "1" == b && "r" == y ? d[v] = "n" : s.test(b) && (y = b, "r" == b && (d[v] = "R"))
                }
                for (var x = 1, w = d[0]; u - 1 > x; ++x) {
                    var _ = d[x];
                    "+" == _ && "1" == w && "1" == d[x + 1] ? d[x] = "1" : "," != _ || w != d[x + 1] || "1" !=
                        w && "n" != w || (d[x] = w), w = _
                }
                for (var C = 0; u > C; ++C) {
                    var T = d[C];
                    if ("," == T) d[C] = "N";
                    else if ("%" == T) {
                        var k = void 0;
                        for (k = C + 1; u > k && "%" == d[k]; ++k);
                        for (var S = C && "!" == d[C - 1] || u > k && "1" == d[k] ? "1" : "N", E = C; k > E; ++
                            E) d[E] = S;
                        C = k - 1
                    }
                }
                for (var $ = 0, D = c; u > $; ++$) {
                    var N = d[$];
                    "L" == D && "1" == N ? d[$] = "L" : s.test(N) && (D = N)
                }
                for (var A = 0; u > A; ++A)
                    if (r.test(d[A])) {
                        var L = void 0;
                        for (L = A + 1; u > L && r.test(d[L]); ++L);
                        for (var j = "L" == (A ? d[A - 1] : c), M = "L" == (u > L ? d[L] : c), O = j == M ? j ?
                            "L" : "R" : c, P = A; L > P; ++P) d[P] = O;
                        A = L - 1
                    } for (var I, H = [], z = 0; u > z;)
                    if (a.test(d[z])) {
                        var F = z;
                        for (++z; u > z && a.test(d[z]); ++z);
                        H.push(new e(0, F, z))
                    } else {
                        var W = z,
                            R = H.length;
                        for (++z; u > z && "L" != d[z]; ++z);
                        for (var q = W; z > q;)
                            if (l.test(d[q])) {
                                q > W && H.splice(R, 0, new e(1, W, q));
                                var B = q;
                                for (++q; z > q && l.test(d[q]); ++q);
                                H.splice(R, 0, new e(2, B, q)), W = q
                            } else ++q;
                        z > W && H.splice(R, 0, new e(1, W, z))
                    } return "ltr" == i && (1 == H[0].level && (I = n.match(/^\s+/)) && (H[0].from = I[0].length,
                    H.unshift(new e(0, 0, I[0].length))), 1 == g(H).level && (I = n.match(/\s+$/)) && (
                    g(H).to -= I[0].length, H.push(new e(0, u - I[0].length, u)))), "rtl" == i ? H.reverse() :
                    H
            }
        }(),
        nl = [],
        il = function (t, e, n) {
            if (t.addEventListener) t.addEventListener(e, n, !1);
            else if (t.attachEvent) t.attachEvent("on" + e, n);
            else {
                var i = t._handlers || (t._handlers = {});
                i[e] = (i[e] || nl).concat(n)
            }
        },
        ol = function () {
            if (_a && 9 > Ca) return !1;
            var t = i("div");
            return "draggable" in t || "dragDrop" in t
        }(),
        rl = 3 != "\n\nb".split(/\n/).length ? function (t) {
            for (var e = 0, n = [], i = t.length; i >= e;) {
                var o = t.indexOf("\n", e); - 1 == o && (o = t.length);
                var r = t.slice(e, "\r" == t.charAt(o - 1) ? o - 1 : o),
                    s = r.indexOf("\r"); - 1 != s ? (n.push(r.slice(0, s)), e += s + 1) : (n.push(r), e = o + 1)
            }
            return n
        } : function (t) {
            return t.split(/\r\n?|\n/)
        },
        sl = window.getSelection ? function (t) {
            try {
                return t.selectionStart != t.selectionEnd
            } catch (e) {
                return !1
            }
        } : function (t) {
            var e;
            try {
                e = t.ownerDocument.selection.createRange()
            } catch (n) {}
            return e && e.parentElement() == t ? 0 != e.compareEndPoints("StartToEnd", e) : !1
        },
        al = function () {
            var t = i("div");
            return "oncopy" in t ? !0 : (t.setAttribute("oncopy", "return;"), "function" == typeof t.oncopy)
        }(),
        ll = null,
        cl = {},
        ul = {},
        dl = {},
        hl = function (t, e, n) {
            this.pos = this.start = 0, this.string = t, this.tabSize = e || 8, this.lastColumnPos = this.lastColumnValue =
                0, this.lineStart = 0, this.lineOracle = n
        };
    hl.prototype.eol = function () {
        return this.pos >= this.string.length
    }, hl.prototype.sol = function () {
        return this.pos == this.lineStart
    }, hl.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0
    }, hl.prototype.next = function () {
        return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
    }, hl.prototype.eat = function (t) {
        var e, n = this.string.charAt(this.pos);
        return e = "string" == typeof t ? n == t : n && (t.test ? t.test(n) : t(n)), e ? (++this.pos, n) : void 0
    }, hl.prototype.eatWhile = function (t) {
        for (var e = this.pos; this.eat(t););
        return this.pos > e
    }, hl.prototype.eatSpace = function () {
        for (var t = this, e = this.pos;
             /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++t.pos;
        return this.pos > e
    }, hl.prototype.skipToEnd = function () {
        this.pos = this.string.length
    }, hl.prototype.skipTo = function (t) {
        var e = this.string.indexOf(t, this.pos);
        return e > -1 ? (this.pos = e, !0) : void 0
    }, hl.prototype.backUp = function (t) {
        this.pos -= t
    }, hl.prototype.column = function () {
        return this.lastColumnPos < this.start && (this.lastColumnValue = d(this.string, this.start, this.tabSize,
            this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue -
        (this.lineStart ? d(this.string, this.lineStart, this.tabSize) : 0)
    }, hl.prototype.indentation = function () {
        return d(this.string, null, this.tabSize) - (this.lineStart ? d(this.string, this.lineStart, this.tabSize) :
            0)
    }, hl.prototype.match = function (t, e, n) {
        if ("string" != typeof t) {
            var i = this.string.slice(this.pos).match(t);
            return i && i.index > 0 ? null : (i && e !== !1 && (this.pos += i[0].length), i)
        }
        var o = function (t) {
                return n ? t.toLowerCase() : t
            },
            r = this.string.substr(this.pos, t.length);
        return o(r) == o(t) ? (e !== !1 && (this.pos += t.length), !0) : void 0
    }, hl.prototype.current = function () {
        return this.string.slice(this.start, this.pos)
    }, hl.prototype.hideFirstChars = function (t, e) {
        this.lineStart += t;
        try {
            return e()
        } finally {
            this.lineStart -= t
        }
    }, hl.prototype.lookAhead = function (t) {
        var e = this.lineOracle;
        return e && e.lookAhead(t)
    }, hl.prototype.baseToken = function () {
        var t = this.lineOracle;
        return t && t.baseToken(this.pos)
    };
    var pl = function (t, e) {
            this.state = t, this.lookAhead = e
        },
        fl = function (t, e, n, i) {
            this.state = e, this.doc = t, this.line = n, this.maxLookAhead = i || 0, this.baseTokens = null, this.baseTokenPos =
                1
        };
    fl.prototype.lookAhead = function (t) {
        var e = this.doc.getLine(this.line + t);
        return null != e && t > this.maxLookAhead && (this.maxLookAhead = t), e
    }, fl.prototype.baseToken = function (t) {
        var e = this;
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= t;) e.baseTokenPos += 2;
        var n = this.baseTokens[this.baseTokenPos + 1];
        return {
            type: n && n.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - t
        }
    }, fl.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
    }, fl.fromSaved = function (t, e, n) {
        return e instanceof pl ? new fl(t, G(t.mode, e.state), n, e.lookAhead) : new fl(t, G(t.mode, e), n)
    }, fl.prototype.save = function (t) {
        var e = t !== !1 ? G(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new pl(e, this.maxLookAhead) : e
    };
    var gl = function (t, e, n) {
            this.start = t.start, this.end = t.pos, this.string = t.current(), this.type = e || null, this.state =
                n
        },
        ml = !1,
        vl = !1,
        yl = function (t, e, n) {
            this.text = t, Fe(this, e), this.height = n ? n(this) : 1
        };
    yl.prototype.lineNo = function () {
        return ie(this)
    }, O(yl);
    var bl, xl = {},
        wl = {},
        _l = null,
        Cl = null,
        Tl = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        kl = function (t, e, n) {
            this.cm = n;
            var o = this.vert = i("div", [i("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                r = this.horiz = i("div", [i("div", null, null, "height: 100%; min-height: 1px")],
                    "CodeMirror-hscrollbar");
            o.tabIndex = r.tabIndex = -1, t(o), t(r), il(o, "scroll", function () {
                o.clientHeight && e(o.scrollTop, "vertical")
            }), il(r, "scroll", function () {
                r.clientWidth && e(r.scrollLeft, "horizontal")
            }), this.checkedZeroWidth = !1, _a && 8 > Ca && (this.horiz.style.minHeight = this.vert.style.minWidth =
                "18px")
        };
    kl.prototype.update = function (t) {
        var e = t.scrollWidth > t.clientWidth + 1,
            n = t.scrollHeight > t.clientHeight + 1,
            i = t.nativeBarWidth;
        if (n) {
            this.vert.style.display = "block", this.vert.style.bottom = e ? i + "px" : "0";
            var o = t.viewHeight - (e ? i : 0);
            this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + o) + "px"
        } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (e) {
            this.horiz.style.display = "block", this.horiz.style.right = n ? i + "px" : "0", this.horiz.style.left =
                t.barLeft + "px";
            var r = t.viewWidth - t.barLeft - (n ? i : 0);
            this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + r) + "px"
        } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && t.clientHeight > 0 && (0 == i && this.zeroWidthHack(), this.checkedZeroWidth = !
            0), {
            right: n ? i : 0,
            bottom: e ? i : 0
        }
    }, kl.prototype.setScrollLeft = function (t) {
        this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t), this.disableHoriz && this.enableZeroWidthBar(
            this.horiz, this.disableHoriz, "horiz")
    }, kl.prototype.setScrollTop = function (t) {
        this.vert.scrollTop != t && (this.vert.scrollTop = t), this.disableVert && this.enableZeroWidthBar(this
            .vert, this.disableVert, "vert")
    }, kl.prototype.zeroWidthHack = function () {
        var t = Ma && !Da ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = t, this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
            "none", this.disableHoriz = new qa, this.disableVert = new qa
    }, kl.prototype.enableZeroWidthBar = function (t, e, n) {
        function i() {
            var o = t.getBoundingClientRect(),
                r = "vert" == n ? document.elementFromPoint(o.right - 1, (o.top + o.bottom) / 2) : document.elementFromPoint(
                    (o.right + o.left) / 2, o.bottom - 1);
            r != t ? t.style.pointerEvents = "none" : e.set(1e3, i)
        }
        t.style.pointerEvents = "auto", e.set(1e3, i)
    }, kl.prototype.clear = function () {
        var t = this.horiz.parentNode;
        t.removeChild(this.horiz), t.removeChild(this.vert)
    };
    var Sl = function () {};
    Sl.prototype.update = function () {
        return {
            bottom: 0,
            right: 0
        }
    }, Sl.prototype.setScrollLeft = function () {}, Sl.prototype.setScrollTop = function () {}, Sl.prototype.clear =
        function () {};
    var El = {
            "native": kl,
            "null": Sl
        },
        $l = 0,
        Dl = function (t, e, n) {
            var i = t.display;
            this.viewport = e, this.visible = Ui(i, t.doc, e), this.editorIsHidden = !i.wrapper.offsetWidth, this.wrapperHeight =
                i.wrapper.clientHeight, this.wrapperWidth = i.wrapper.clientWidth, this.oldDisplayWidth = Wn(t),
                this.force = n, this.dims = wi(t), this.events = []
        };
    Dl.prototype.signal = function (t, e) {
        M(t, e) && this.events.push(arguments)
    }, Dl.prototype.finish = function () {
        for (var t = this, e = 0; e < this.events.length; e++) A.apply(null, t.events[e])
    };
    var Nl = 0,
        Al = null;
    _a ? Al = -.53 : ya ? Al = 15 : Sa ? Al = -.7 : $a && (Al = -1 / 3);
    var Ll = function (t, e) {
        this.ranges = t, this.primIndex = e
    };
    Ll.prototype.primary = function () {
        return this.ranges[this.primIndex]
    }, Ll.prototype.equals = function (t) {
        var e = this;
        if (t == this) return !0;
        if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length) return !1;
        for (var n = 0; n < this.ranges.length; n++) {
            var i = e.ranges[n],
                o = t.ranges[n];
            if (!ce(i.anchor, o.anchor) || !ce(i.head, o.head)) return !1
        }
        return !0
    }, Ll.prototype.deepCopy = function () {
        for (var t = this, e = [], n = 0; n < this.ranges.length; n++) e[n] = new jl(ue(t.ranges[n].anchor), ue(
            t.ranges[n].head));
        return new Ll(e, this.primIndex)
    }, Ll.prototype.somethingSelected = function () {
        for (var t = this, e = 0; e < this.ranges.length; e++)
            if (!t.ranges[e].empty()) return !0;
        return !1
    }, Ll.prototype.contains = function (t, e) {
        var n = this;
        e || (e = t);
        for (var i = 0; i < this.ranges.length; i++) {
            var o = n.ranges[i];
            if (le(e, o.from()) >= 0 && le(t, o.to()) <= 0) return i
        }
        return -1
    };
    var jl = function (t, e) {
        this.anchor = t, this.head = e
    };
    jl.prototype.from = function () {
        return he(this.anchor, this.head)
    }, jl.prototype.to = function () {
        return de(this.anchor, this.head)
    }, jl.prototype.empty = function () {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
    }, Br.prototype = {
        chunkSize: function () {
            return this.lines.length
        },
        removeInner: function (t, e) {
            for (var n = this, i = t, o = t + e; o > i; ++i) {
                var r = n.lines[i];
                n.height -= r.height, an(r), wn(r, "delete")
            }
            this.lines.splice(t, e)
        },
        collapse: function (t) {
            t.push.apply(t, this.lines)
        },
        insertInner: function (t, e, n) {
            var i = this;
            this.height += n, this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t));
            for (var o = 0; o < e.length; ++o) e[o].parent = i
        },
        iterN: function (t, e, n) {
            for (var i = this, o = t + e; o > t; ++t)
                if (n(i.lines[t])) return !0
        }
    }, Ur.prototype = {
        chunkSize: function () {
            return this.size
        },
        removeInner: function (t, e) {
            var n = this;
            this.size -= e;
            for (var i = 0; i < this.children.length; ++i) {
                var o = n.children[i],
                    r = o.chunkSize();
                if (r > t) {
                    var s = Math.min(e, r - t),
                        a = o.height;
                    if (o.removeInner(t, s), n.height -= a - o.height, r == s && (n.children.splice(i--, 1),
                        o.parent = null), 0 == (e -= s)) break;
                    t = 0
                } else t -= r
            }
            if (this.size - e < 25 && (this.children.length > 1 || !(this.children[0] instanceof Br))) {
                var l = [];
                this.collapse(l), this.children = [new Br(l)], this.children[0].parent = this
            }
        },
        collapse: function (t) {
            for (var e = this, n = 0; n < this.children.length; ++n) e.children[n].collapse(t)
        },
        insertInner: function (t, e, n) {
            var i = this;
            this.size += e.length, this.height += n;
            for (var o = 0; o < this.children.length; ++o) {
                var r = i.children[o],
                    s = r.chunkSize();
                if (s >= t) {
                    if (r.insertInner(t, e, n), r.lines && r.lines.length > 50) {
                        for (var a = r.lines.length % 25 + 25, l = a; l < r.lines.length;) {
                            var c = new Br(r.lines.slice(l, l += 25));
                            r.height -= c.height, i.children.splice(++o, 0, c), c.parent = i
                        }
                        r.lines = r.lines.slice(0, a), i.maybeSpill()
                    }
                    break
                }
                t -= s
            }
        },
        maybeSpill: function () {
            if (!(this.children.length <= 10)) {
                var t = this;
                do {
                    var e = t.children.splice(t.children.length - 5, 5),
                        n = new Ur(e);
                    if (t.parent) {
                        t.size -= n.size, t.height -= n.height;
                        var i = h(t.parent.children, t);
                        t.parent.children.splice(i + 1, 0, n)
                    } else {
                        var o = new Ur(t.children);
                        o.parent = t, t.children = [o, n], t = o
                    }
                    n.parent = t.parent
                } while (t.children.length > 10);
                t.parent.maybeSpill()
            }
        },
        iterN: function (t, e, n) {
            for (var i = this, o = 0; o < this.children.length; ++o) {
                var r = i.children[o],
                    s = r.chunkSize();
                if (s > t) {
                    var a = Math.min(e, s - t);
                    if (r.iterN(t, a, n)) return !0;
                    if (0 == (e -= a)) break;
                    t = 0
                } else t -= s
            }
        }
    };
    var Ml = function (t, e, n) {
        var i = this;
        if (n)
            for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
        this.doc = t, this.node = e
    };
    Ml.prototype.clear = function () {
        var t = this,
            e = this.doc.cm,
            n = this.line.widgets,
            i = this.line,
            o = ie(i);
        if (null != o && n) {
            for (var r = 0; r < n.length; ++r) n[r] == t && n.splice(r--, 1);
            n.length || (i.widgets = null);
            var s = On(this);
            ne(i, Math.max(0, i.height - s)), e && (yo(e, function () {
                Xr(e, i, -s), $i(e, o, "widget")
            }), wn(e, "lineWidgetCleared", e, this, o))
        }
    }, Ml.prototype.changed = function () {
        var t = this,
            e = this.height,
            n = this.doc.cm,
            i = this.line;
        this.height = null;
        var o = On(this) - e;
        o && (tn(this.doc, i) || ne(i, i.height + o), n && yo(n, function () {
            n.curOp.forceUpdate = !0, Xr(n, i, o), wn(n, "lineWidgetChanged", n, t, ie(i))
        }))
    }, O(Ml);
    var Ol = 0,
        Pl = function (t, e) {
            this.lines = [], this.type = e, this.doc = t, this.id = ++Ol
        };
    Pl.prototype.clear = function () {
        var t = this;
        if (!this.explicitlyCleared) {
            var e = this.doc.cm,
                n = e && !e.curOp;
            if (n && co(e), M(this, "clear")) {
                var i = this.find();
                i && wn(this, "clear", i.from, i.to)
            }
            for (var o = null, r = null, s = 0; s < this.lines.length; ++s) {
                var a = t.lines[s],
                    l = Ae(a.markedSpans, t);
                e && !t.collapsed ? $i(e, ie(a), "text") : e && (null != l.to && (r = ie(a)), null != l.from &&
                (o = ie(a))), a.markedSpans = Le(a.markedSpans, l), null == l.from && t.collapsed && !
                    tn(t.doc, a) && e && ne(a, bi(e.display))
            }
            if (e && this.collapsed && !e.options.lineWrapping)
                for (var c = 0; c < this.lines.length; ++c) {
                    var u = Ve(t.lines[c]),
                        d = on(u);
                    d > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = d, e.display
                        .maxLineChanged = !0)
                }
            null != o && e && this.collapsed && Ei(e, o, r + 1), this.lines.length = 0, this.explicitlyCleared = !
                0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Sr(e.doc)), e && wn(e,
                "markerCleared", e, this, o, r), n && uo(e), this.parent && this.parent.clear()
        }
    }, Pl.prototype.find = function (t, e) {
        var n = this;
        null == t && "bookmark" == this.type && (t = 1);
        for (var i, o, r = 0; r < this.lines.length; ++r) {
            var s = n.lines[r],
                a = Ae(s.markedSpans, n);
            if (null != a.from && (i = ae(e ? s : ie(s), a.from), -1 == t)) return i;
            if (null != a.to && (o = ae(e ? s : ie(s), a.to), 1 == t)) return o
        }
        return i && {
            from: i,
            to: o
        }
    }, Pl.prototype.changed = function () {
        var t = this,
            e = this.find(-1, !0),
            n = this,
            i = this.doc.cm;
        e && i && yo(i, function () {
            var o = e.line,
                r = ie(e.line),
                s = Yn(i, r);
            if (s && (ti(s), i.curOp.selectionChanged = i.curOp.forceUpdate = !0), i.curOp.updateMaxLine = !
                0, !tn(n.doc, o) && null != n.height) {
                var a = n.height;
                n.height = null;
                var l = On(n) - a;
                l && ne(o, o.height + l)
            }
            wn(i, "markerChanged", i, t)
        })
    }, Pl.prototype.attachLine = function (t) {
        if (!this.lines.length && this.doc.cm) {
            var e = this.doc.cm.curOp;
            e.maybeHiddenMarkers && -1 != h(e.maybeHiddenMarkers, this) || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = []))
                .push(this)
        }
        this.lines.push(t)
    }, Pl.prototype.detachLine = function (t) {
        if (this.lines.splice(h(this.lines, t), 1), !this.lines.length && this.doc.cm) {
            var e = this.doc.cm.curOp;
            (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
        }
    }, O(Pl);
    var Il = function (t, e) {
        var n = this;
        this.markers = t, this.primary = e;
        for (var i = 0; i < t.length; ++i) t[i].parent = n
    };
    Il.prototype.clear = function () {
        var t = this;
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e) t.markers[e].clear();
            wn(this, "clear")
        }
    }, Il.prototype.find = function (t, e) {
        return this.primary.find(t, e)
    }, O(Il);
    var Hl = 0,
        zl = function (t, e, n, i, o) {
            if (!(this instanceof zl)) return new zl(t, e, n, i, o);
            null == n && (n = 0), Ur.call(this, [new Br([new yl("", null)])]), this.first = n, this.scrollTop =
                this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier =
                n;
            var r = ae(n, 0);
            this.sel = qo(r), this.history = new ir(null), this.id = ++Hl, this.modeOption = e, this.lineSep = i,
                this.direction = "rtl" == o ? "rtl" : "ltr", this.extend = !1, "string" == typeof t && (t = this.splitLines(
                t)), Ko(this, {
                from: r,
                to: r,
                text: t
            }), Cr(this, qo(r), Qa)
        };
    zl.prototype = b(Ur.prototype, {
        constructor: zl,
        iter: function (t, e, n) {
            n ? this.iterN(t - this.first, e - t, n) : this.iterN(this.first, this.first + this.size, t)
        },
        insert: function (t, e) {
            for (var n = 0, i = 0; i < e.length; ++i) n += e[i].height;
            this.insertInner(t - this.first, e, n)
        },
        remove: function (t, e) {
            this.removeInner(t - this.first, e)
        },
        getValue: function (t) {
            var e = ee(this, this.first, this.first + this.size);
            return t === !1 ? e : e.join(t || this.lineSeparator())
        },
        setValue: wo(function (t) {
            var e = ae(this.first, 0),
                n = this.first + this.size - 1;
            jr(this, {
                from: e,
                to: ae(n, Z(this, n).text.length),
                text: this.splitLines(t),
                origin: "setValue",
                full: !0
            }, !0), this.cm && Ki(this.cm, 0, 0), Cr(this, qo(e), Qa)
        }),
        replaceRange: function (t, e, n, i) {
            e = fe(this, e), n = n ? fe(this, n) : e, zr(this, t, e, n, i)
        },
        getRange: function (t, e, n) {
            var i = te(this, fe(this, t), fe(this, e));
            return n === !1 ? i : i.join(n || this.lineSeparator())
        },
        getLine: function (t) {
            var e = this.getLineHandle(t);
            return e && e.text
        },
        getLineHandle: function (t) {
            return re(this, t) ? Z(this, t) : void 0
        },
        getLineNumber: function (t) {
            return ie(t)
        },
        getLineHandleVisualStart: function (t) {
            return "number" == typeof t && (t = Z(this, t)), Ve(t)
        },
        lineCount: function () {
            return this.size
        },
        firstLine: function () {
            return this.first
        },
        lastLine: function () {
            return this.first + this.size - 1
        },
        clipPos: function (t) {
            return fe(this, t)
        },
        getCursor: function (t) {
            var e, n = this.sel.primary();
            return e = null == t || "head" == t ? n.head : "anchor" == t ? n.anchor : "end" == t ||
            "to" == t || t === !1 ? n.to() : n.from()
        },
        listSelections: function () {
            return this.sel.ranges
        },
        somethingSelected: function () {
            return this.sel.somethingSelected()
        },
        setCursor: wo(function (t, e, n) {
            xr(this, fe(this, "number" == typeof t ? ae(t, e || 0) : t), null, n)
        }),
        setSelection: wo(function (t, e, n) {
            xr(this, fe(this, t), fe(this, e || t), n)
        }),
        extendSelection: wo(function (t, e, n) {
            vr(this, fe(this, t), e && fe(this, e), n)
        }),
        extendSelections: wo(function (t, e) {
            yr(this, me(this, t), e)
        }),
        extendSelectionsBy: wo(function (t, e) {
            var n = m(this.sel.ranges, t);
            yr(this, me(this, n), e)
        }),
        setSelections: wo(function (t, e, n) {
            var i = this;
            if (t.length) {
                for (var o = [], r = 0; r < t.length; r++) o[r] = new jl(fe(i, t[r].anchor), fe(i,
                    t[r].head));
                null == e && (e = Math.min(t.length - 1, this.sel.primIndex)), Cr(this, Ro(this.cm,
                    o, e), n)
            }
        }),
        addSelection: wo(function (t, e, n) {
            var i = this.sel.ranges.slice(0);
            i.push(new jl(fe(this, t), fe(this, e || t))), Cr(this, Ro(this.cm, i, i.length - 1), n)
        }),
        getSelection: function (t) {
            for (var e, n = this, i = this.sel.ranges, o = 0; o < i.length; o++) {
                var r = te(n, i[o].from(), i[o].to());
                e = e ? e.concat(r) : r
            }
            return t === !1 ? e : e.join(t || this.lineSeparator())
        },
        getSelections: function (t) {
            for (var e = this, n = [], i = this.sel.ranges, o = 0; o < i.length; o++) {
                var r = te(e, i[o].from(), i[o].to());
                t !== !1 && (r = r.join(t || e.lineSeparator())), n[o] = r
            }
            return n
        },
        replaceSelection: function (t, e, n) {
            for (var i = [], o = 0; o < this.sel.ranges.length; o++) i[o] = t;
            this.replaceSelections(i, e, n || "+input")
        },
        replaceSelections: wo(function (t, e, n) {
            for (var i = this, o = [], r = this.sel, s = 0; s < r.ranges.length; s++) {
                var a = r.ranges[s];
                o[s] = {
                    from: a.from(),
                    to: a.to(),
                    text: i.splitLines(t[s]),
                    origin: n
                }
            }
            for (var l = e && "end" != e && Qo(this, o, e), c = o.length - 1; c >= 0; c--) jr(i, o[
                c]);
            l ? _r(this, l) : this.cm && Ji(this.cm)
        }),
        undo: wo(function () {
            Or(this, "undo")
        }),
        redo: wo(function () {
            Or(this, "redo")
        }),
        undoSelection: wo(function () {
            Or(this, "undo", !0)
        }),
        redoSelection: wo(function () {
            Or(this, "redo", !0)
        }),
        setExtending: function (t) {
            this.extend = t
        },
        getExtending: function () {
            return this.extend
        },
        historySize: function () {
            for (var t = this.history, e = 0, n = 0, i = 0; i < t.done.length; i++) t.done[i].ranges ||
            ++e;
            for (var o = 0; o < t.undone.length; o++) t.undone[o].ranges || ++n;
            return {
                undo: e,
                redo: n
            }
        },
        clearHistory: function () {
            this.history = new ir(this.history.maxGeneration)
        },
        markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function (t) {
            return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                this.history.generation
        },
        isClean: function (t) {
            return this.history.generation == (t || this.cleanGeneration)
        },
        getHistory: function () {
            return {
                done: gr(this.history.done),
                undone: gr(this.history.undone)
            }
        },
        setHistory: function (t) {
            var e = this.history = new ir(this.history.maxGeneration);
            e.done = gr(t.done.slice(0), null, !0), e.undone = gr(t.undone.slice(0), null, !0)
        },
        setGutterMarker: wo(function (t, e, n) {
            return qr(this, t, "gutter", function (t) {
                var i = t.gutterMarkers || (t.gutterMarkers = {});
                return i[e] = n, !n && _(i) && (t.gutterMarkers = null), !0
            })
        }),
        clearGutter: wo(function (t) {
            var e = this;
            this.iter(function (n) {
                n.gutterMarkers && n.gutterMarkers[t] && qr(e, n, "gutter", function () {
                    return n.gutterMarkers[t] = null, _(n.gutterMarkers) && (n.gutterMarkers =
                        null), !0
                })
            })
        }),
        lineInfo: function (t) {
            var e;
            if ("number" == typeof t) {
                if (!re(this, t)) return null;
                if (e = t, t = Z(this, t), !t) return null
            } else if (e = ie(t), null == e) return null;
            return {
                line: e,
                handle: t,
                text: t.text,
                gutterMarkers: t.gutterMarkers,
                textClass: t.textClass,
                bgClass: t.bgClass,
                wrapClass: t.wrapClass,
                widgets: t.widgets
            }
        },
        addLineClass: wo(function (e, n, i) {
            return qr(this, e, "gutter" == n ? "gutter" : "class", function (e) {
                var o = "text" == n ? "textClass" : "background" == n ? "bgClass" :
                    "gutter" == n ? "gutterClass" : "wrapClass";
                if (e[o]) {
                    if (t(i).test(e[o])) return !1;
                    e[o] += " " + i
                } else e[o] = i;
                return !0
            })
        }),
        removeLineClass: wo(function (e, n, i) {
            return qr(this, e, "gutter" == n ? "gutter" : "class", function (e) {
                var o = "text" == n ? "textClass" : "background" == n ? "bgClass" :
                    "gutter" == n ? "gutterClass" : "wrapClass",
                    r = e[o];
                if (!r) return !1;
                if (null == i) e[o] = null;
                else {
                    var s = r.match(t(i));
                    if (!s) return !1;
                    var a = s.index + s[0].length;
                    e[o] = r.slice(0, s.index) + (s.index && a != r.length ? " " : "") + r.slice(
                        a) || null
                }
                return !0
            })
        }),
        addLineWidget: wo(function (t, e, n) {
            return Yr(this, t, e, n)
        }),
        removeLineWidget: function (t) {
            t.clear()
        },
        markText: function (t, e, n) {
            return Qr(this, fe(this, t), fe(this, e), n, n && n.type || "range")
        },
        setBookmark: function (t, e) {
            var n = {
                replacedWith: e && (null == e.nodeType ? e.widget : e),
                insertLeft: e && e.insertLeft,
                clearWhenEmpty: !1,
                shared: e && e.shared,
                handleMouseEvents: e && e.handleMouseEvents
            };
            return t = fe(this, t), Qr(this, t, t, n, "bookmark")
        },
        findMarksAt: function (t) {
            t = fe(this, t);
            var e = [],
                n = Z(this, t.line).markedSpans;
            if (n)
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i];
                    (null == o.from || o.from <= t.ch) && (null == o.to || o.to >= t.ch) && e.push(o.marker
                        .parent || o.marker)
                }
            return e
        },
        findMarks: function (t, e, n) {
            t = fe(this, t), e = fe(this, e);
            var i = [],
                o = t.line;
            return this.iter(t.line, e.line + 1, function (r) {
                var s = r.markedSpans;
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        var l = s[a];
                        null != l.to && o == t.line && t.ch >= l.to || null == l.from && o != t
                            .line || null != l.from && o == e.line && l.from >= e.ch || n && !n(
                            l.marker) || i.push(l.marker.parent || l.marker)
                    }++o
            }), i
        },
        getAllMarks: function () {
            var t = [];
            return this.iter(function (e) {
                var n = e.markedSpans;
                if (n)
                    for (var i = 0; i < n.length; ++i) null != n[i].from && t.push(n[i].marker)
            }), t
        },
        posFromIndex: function (t) {
            var e, n = this.first,
                i = this.lineSeparator().length;
            return this.iter(function (o) {
                var r = o.text.length + i;
                return r > t ? (e = t, !0) : (t -= r, ++n, void 0)
            }), fe(this, ae(n, e))
        },
        indexFromPos: function (t) {
            t = fe(this, t);
            var e = t.ch;
            if (t.line < this.first || t.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return this.iter(this.first, t.line, function (t) {
                e += t.text.length + n
            }), e
        },
        copy: function (t) {
            var e = new zl(ee(this, this.first, this.first + this.size), this.modeOption, this.first,
                this.lineSep, this.direction);
            return e.scrollTop = this.scrollTop, e.scrollLeft = this.scrollLeft, e.sel = this.sel, e.extend = !
                1, t && (e.history.undoDepth = this.history.undoDepth, e.setHistory(this.getHistory())),
                e
        },
        linkedDoc: function (t) {
            t || (t = {});
            var e = this.first,
                n = this.first + this.size;
            null != t.from && t.from > e && (e = t.from), null != t.to && t.to < n && (n = t.to);
            var i = new zl(ee(this, e, n), t.mode || this.modeOption, e, this.lineSep, this.direction);
            return t.sharedHist && (i.history = this.history), (this.linked || (this.linked = [])).push({
                doc: i,
                sharedHist: t.sharedHist
            }), i.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: t.sharedHist
            }], Jr(i, Gr(this)), i
        },
        unlinkDoc: function (t) {
            var e = this;
            if (t instanceof Vs && (t = t.doc), this.linked)
                for (var n = 0; n < this.linked.length; ++n) {
                    var i = e.linked[n];
                    if (i.doc == t) {
                        e.linked.splice(n, 1), t.unlinkDoc(e), Kr(Gr(e));
                        break
                    }
                }
            if (t.history == this.history) {
                var o = [t.id];
                Zo(t, function (t) {
                    return o.push(t.id)
                }, !0), t.history = new ir(null), t.history.done = gr(this.history.done, o), t.history
                    .undone = gr(this.history.undone, o)
            }
        },
        iterLinkedDocs: function (t) {
            Zo(this, t)
        },
        getMode: function () {
            return this.mode
        },
        getEditor: function () {
            return this.cm
        },
        splitLines: function (t) {
            return this.lineSep ? t.split(this.lineSep) : rl(t)
        },
        lineSeparator: function () {
            return this.lineSep || "\n"
        },
        setDirection: wo(function (t) {
            "rtl" != t && (t = "ltr"), t != this.direction && (this.direction = t, this.iter(
                function (t) {
                    return t.order = null
                }), this.cm && nr(this.cm))
        })
    }), zl.prototype.eachLine = zl.prototype.iter;
    for (var Fl = 0, Wl = !1, Rl = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    }, ql = 0; 10 > ql; ql++) Rl[ql + 48] = Rl[ql + 96] = String(ql);
    for (var Bl = 65; 90 >= Bl; Bl++) Rl[Bl] = String.fromCharCode(Bl);
    for (var Ul = 1; 12 >= Ul; Ul++) Rl[Ul + 111] = Rl[Ul + 63235] = "F" + Ul;
    var Xl = {};
    Xl.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, Xl.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, Xl.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
    }, Xl.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    }, Xl["default"] = Ma ? Xl.macDefault : Xl.pcDefault;
    var Yl = {
            selectAll: Ar,
            singleSelection: function (t) {
                return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), Qa)
            },
            killLine: function (t) {
                return fs(t, function (e) {
                    if (e.empty()) {
                        var n = Z(t.doc, e.head.line).text.length;
                        return e.head.ch == n && e.head.line < t.lastLine() ? {
                            from: e.head,
                            to: ae(e.head.line + 1, 0)
                        } : {
                            from: e.head,
                            to: ae(e.head.line, n)
                        }
                    }
                    return {
                        from: e.from(),
                        to: e.to()
                    }
                })
            },
            deleteLine: function (t) {
                return fs(t, function (e) {
                    return {
                        from: ae(e.from().line, 0),
                        to: fe(t.doc, ae(e.to().line + 1, 0))
                    }
                })
            },
            delLineLeft: function (t) {
                return fs(t, function (t) {
                    return {
                        from: ae(t.from().line, 0),
                        to: t.from()
                    }
                })
            },
            delWrappedLineLeft: function (t) {
                return fs(t, function (e) {
                    var n = t.charCoords(e.head, "div").top + 5,
                        i = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                    return {
                        from: i,
                        to: e.from()
                    }
                })
            },
            delWrappedLineRight: function (t) {
                return fs(t, function (e) {
                    var n = t.charCoords(e.head, "div").top + 5,
                        i = t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div");
                    return {
                        from: e.from(),
                        to: i
                    }
                })
            },
            undo: function (t) {
                return t.undo()
            },
            redo: function (t) {
                return t.redo()
            },
            undoSelection: function (t) {
                return t.undoSelection()
            },
            redoSelection: function (t) {
                return t.redoSelection()
            },
            goDocStart: function (t) {
                return t.extendSelection(ae(t.firstLine(), 0))
            },
            goDocEnd: function (t) {
                return t.extendSelection(ae(t.lastLine()))
            },
            goLineStart: function (t) {
                return t.extendSelectionsBy(function (e) {
                    return bs(t, e.head.line)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineStartSmart: function (t) {
                return t.extendSelectionsBy(function (e) {
                    return ws(t, e.head)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineEnd: function (t) {
                return t.extendSelectionsBy(function (e) {
                    return xs(t, e.head.line)
                }, {
                    origin: "+move",
                    bias: -1
                })
            },
            goLineRight: function (t) {
                return t.extendSelectionsBy(function (e) {
                    var n = t.cursorCoords(e.head, "div").top + 5;
                    return t.coordsChar({
                        left: t.display.lineDiv.offsetWidth + 100,
                        top: n
                    }, "div")
                }, Ga)
            },
            goLineLeft: function (t) {
                return t.extendSelectionsBy(function (e) {
                    var n = t.cursorCoords(e.head, "div").top + 5;
                    return t.coordsChar({
                        left: 0,
                        top: n
                    }, "div")
                }, Ga)
            },
            goLineLeftSmart: function (t) {
                return t.extendSelectionsBy(function (e) {
                    var n = t.cursorCoords(e.head, "div").top + 5,
                        i = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                    return i.ch < t.getLine(i.line).search(/\S/) ? ws(t, e.head) : i
                }, Ga)
            },
            goLineUp: function (t) {
                return t.moveV(-1, "line")
            },
            goLineDown: function (t) {
                return t.moveV(1, "line")
            },
            goPageUp: function (t) {
                return t.moveV(-1, "page")
            },
            goPageDown: function (t) {
                return t.moveV(1, "page")
            },
            goCharLeft: function (t) {
                return t.moveH(-1, "char")
            },
            goCharRight: function (t) {
                return t.moveH(1, "char")
            },
            goColumnLeft: function (t) {
                return t.moveH(-1, "column")
            },
            goColumnRight: function (t) {
                return t.moveH(1, "column")
            },
            goWordLeft: function (t) {
                return t.moveH(-1, "word")
            },
            goGroupRight: function (t) {
                return t.moveH(1, "group")
            },
            goGroupLeft: function (t) {
                return t.moveH(-1, "group")
            },
            goWordRight: function (t) {
                return t.moveH(1, "word")
            },
            delCharBefore: function (t) {
                return t.deleteH(-1, "char")
            },
            delCharAfter: function (t) {
                return t.deleteH(1, "char")
            },
            delWordBefore: function (t) {
                return t.deleteH(-1, "word")
            },
            delWordAfter: function (t) {
                return t.deleteH(1, "word")
            },
            delGroupBefore: function (t) {
                return t.deleteH(-1, "group")
            },
            delGroupAfter: function (t) {
                return t.deleteH(1, "group")
            },
            indentAuto: function (t) {
                return t.indentSelection("smart")
            },
            indentMore: function (t) {
                return t.indentSelection("add")
            },
            indentLess: function (t) {
                return t.indentSelection("subtract")
            },
            insertTab: function (t) {
                return t.replaceSelection("	")
            },
            insertSoftTab: function (t) {
                for (var e = [], n = t.listSelections(), i = t.options.tabSize, o = 0; o < n.length; o++) {
                    var r = n[o].from(),
                        s = d(t.getLine(r.line), r.ch, i);
                    e.push(f(i - s % i))
                }
                t.replaceSelections(e)
            },
            defaultTab: function (t) {
                t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab")
            },
            transposeChars: function (t) {
                return yo(t, function () {
                    for (var e = t.listSelections(), n = [], i = 0; i < e.length; i++)
                        if (e[i].empty()) {
                            var o = e[i].head,
                                r = Z(t.doc, o.line).text;
                            if (r)
                                if (o.ch == r.length && (o = new ae(o.line, o.ch - 1)), o.ch > 0) o =
                                    new ae(o.line, o.ch + 1), t.replaceRange(r.charAt(o.ch - 1) + r.charAt(
                                    o.ch - 2), ae(o.line, o.ch - 2), o, "+transpose");
                                else if (o.line > t.doc.first) {
                                    var s = Z(t.doc, o.line - 1).text;
                                    s && (o = new ae(o.line, 1), t.replaceRange(r.charAt(0) + t.doc.lineSeparator() +
                                        s.charAt(s.length - 1), ae(o.line - 1, s.length - 1), o,
                                        "+transpose"))
                                }
                            n.push(new jl(o, o))
                        } t.setSelections(n)
                })
            },
            newlineAndIndent: function (t) {
                return yo(t, function () {
                    for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--) t.replaceRange(t.doc
                        .lineSeparator(), e[n].anchor, e[n].head, "+input");
                    e = t.listSelections();
                    for (var i = 0; i < e.length; i++) t.indentLine(e[i].from().line, null, !0);
                    Ji(t)
                })
            },
            openLine: function (t) {
                return t.replaceSelection("\n", "start")
            },
            toggleOverwrite: function (t) {
                return t.toggleOverwrite()
            }
        },
        Ql = new qa,
        Vl = null,
        Gl = 400,
        Jl = function (t, e, n) {
            this.time = t, this.pos = e, this.button = n
        };
    Jl.prototype.compare = function (t, e, n) {
        return this.time + Gl > t && 0 == le(e, this.pos) && n == this.button
    };
    var Kl, Zl, tc = {
            toString: function () {
                return "CodeMirror.Init"
            }
        },
        ec = {},
        nc = {};
    Vs.defaults = ec, Vs.optionHandlers = nc;
    var ic = [];
    Vs.defineInitHook = function (t) {
        return ic.push(t)
    };
    var oc = null,
        rc = function (t) {
            this.cm = t, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset =
                null, this.polling = new qa, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout =
                null
        };
    rc.prototype.init = function (t) {
        function e(t) {
            if (!L(o, t)) {
                if (o.somethingSelected()) Ks({
                    lineWise: !1,
                    text: o.getSelections()
                }), "cut" == t.type && o.replaceSelection("", null, "cut");
                else {
                    if (!o.options.lineWiseCopyCut) return;
                    var e = na(o);
                    Ks({
                        lineWise: !0,
                        text: e.text
                    }), "cut" == t.type && o.operation(function () {
                        o.setSelections(e.ranges, 0, Qa), o.replaceSelection("", null, "cut")
                    })
                }
                if (t.clipboardData) {
                    t.clipboardData.clearData();
                    var n = oc.text.join("\n");
                    if (t.clipboardData.setData("Text", n), t.clipboardData.getData("Text") == n) return t.preventDefault(),
                        void 0
                }
                var s = oa(),
                    a = s.firstChild;
                o.display.lineSpace.insertBefore(s, o.display.lineSpace.firstChild), a.value = oc.text.join(
                    "\n");
                var l = document.activeElement;
                Ra(a), setTimeout(function () {
                    o.display.lineSpace.removeChild(s), l.focus(), l == r && i.showPrimarySelection()
                }, 50)
            }
        }
        var n = this,
            i = this,
            o = i.cm,
            r = i.div = t.lineDiv;
        ia(r, o.options.spellcheck, o.options.autocorrect, o.options.autocapitalize), il(r, "paste", function (
            t) {
            L(o, t) || ta(t, o) || 11 >= Ca && setTimeout(bo(o, function () {
                return n.updateFromDOM()
            }), 20)
        }), il(r, "compositionstart", function (t) {
            n.composing = {
                data: t.data,
                done: !1
            }
        }), il(r, "compositionupdate", function (t) {
            n.composing || (n.composing = {
                data: t.data,
                done: !1
            })
        }), il(r, "compositionend", function (t) {
            n.composing && (t.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0)
        }), il(r, "touchstart", function () {
            return i.forceCompositionEnd()
        }), il(r, "input", function () {
            n.composing || n.readFromDOMSoon()
        }), il(r, "copy", e), il(r, "cut", e)
    }, rc.prototype.prepareSelection = function () {
        var t = Mi(this.cm, !1);
        return t.focus = this.cm.state.focused, t
    }, rc.prototype.showSelection = function (t, e) {
        t && this.cm.display.view.length && ((t.focus || e) && this.showPrimarySelection(), this.showMultipleSelections(
            t))
    }, rc.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection()
    }, rc.prototype.showPrimarySelection = function () {
        var t = this.getSelection(),
            e = this.cm,
            n = e.doc.sel.primary(),
            i = n.from(),
            o = n.to();
        if (e.display.viewTo == e.display.viewFrom || i.line >= e.display.viewTo || o.line < e.display.viewFrom)
            return t.removeAllRanges(), void 0;
        var r = ha(e, t.anchorNode, t.anchorOffset),
            s = ha(e, t.focusNode, t.focusOffset);
        if (!r || r.bad || !s || s.bad || 0 != le(he(r, s), i) || 0 != le(de(r, s), o)) {
            var a = e.display.view,
                l = i.line >= e.display.viewFrom && la(e, i) || {
                    node: a[0].measure.map[2],
                    offset: 0
                },
                c = o.line < e.display.viewTo && la(e, o);
            if (!c) {
                var u = a[a.length - 1].measure,
                    d = u.maps ? u.maps[u.maps.length - 1] : u.map;
                c = {
                    node: d[d.length - 1],
                    offset: d[d.length - 2] - d[d.length - 3]
                }
            }
            if (!l || !c) return t.removeAllRanges(), void 0;
            var h, p = t.rangeCount && t.getRangeAt(0);
            try {
                h = Ha(l.node, l.offset, c.offset, c.node)
            } catch (f) {}
            h && (!ya && e.state.focused ? (t.collapse(l.node, l.offset), h.collapsed || (t.removeAllRanges(),
                t.addRange(h))) : (t.removeAllRanges(), t.addRange(h)), p && null == t.anchorNode ? t.addRange(
                p) : ya && this.startGracePeriod()), this.rememberSelection()
        }
    }, rc.prototype.startGracePeriod = function () {
        var t = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
            t.gracePeriod = !1, t.selectionChanged() && t.cm.operation(function () {
                return t.cm.curOp.selectionChanged = !0
            })
        }, 20)
    }, rc.prototype.showMultipleSelections = function (t) {
        n(this.cm.display.cursorDiv, t.cursors), n(this.cm.display.selectionDiv, t.selection)
    }, rc.prototype.rememberSelection = function () {
        var t = this.getSelection();
        this.lastAnchorNode = t.anchorNode, this.lastAnchorOffset = t.anchorOffset, this.lastFocusNode = t.focusNode,
            this.lastFocusOffset = t.focusOffset
    }, rc.prototype.selectionInEditor = function () {
        var t = this.getSelection();
        if (!t.rangeCount) return !1;
        var e = t.getRangeAt(0).commonAncestorContainer;
        return r(this.div, e)
    }, rc.prototype.focus = function () {
        "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(),
            !0), this.div.focus())
    }, rc.prototype.blur = function () {
        this.div.blur()
    }, rc.prototype.getField = function () {
        return this.div
    }, rc.prototype.supportsTouch = function () {
        return !0
    }, rc.prototype.receivedFocus = function () {
        function t() {
            e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
        }
        var e = this;
        this.selectionInEditor() ? this.pollSelection() : yo(this.cm, function () {
            return e.cm.curOp.selectionChanged = !0
        }), this.polling.set(this.cm.options.pollInterval, t)
    }, rc.prototype.selectionChanged = function () {
        var t = this.getSelection();
        return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode !=
            this.lastFocusNode || t.focusOffset != this.lastFocusOffset
    }, rc.prototype.pollSelection = function () {
        if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var t = this.getSelection(),
                e = this.cm;
            if (La && Sa && this.cm.display.gutterSpecs.length && ca(t.anchorNode)) return this.cm.triggerOnKeyDown({
                type: "keydown",
                keyCode: 8,
                preventDefault: Math.abs
            }), this.blur(), this.focus(), void 0;
            if (!this.composing) {
                this.rememberSelection();
                var n = ha(e, t.anchorNode, t.anchorOffset),
                    i = ha(e, t.focusNode, t.focusOffset);
                n && i && yo(e, function () {
                    Cr(e.doc, qo(n, i), Qa), (n.bad || i.bad) && (e.curOp.selectionChanged = !0)
                })
            }
        }
    }, rc.prototype.pollContent = function () {
        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var t = this.cm,
            e = t.display,
            n = t.doc.sel.primary(),
            i = n.from(),
            o = n.to();
        if (0 == i.ch && i.line > t.firstLine() && (i = ae(i.line - 1, Z(t.doc, i.line - 1).length)), o.ch == Z(
            t.doc, o.line).text.length && o.line < t.lastLine() && (o = ae(o.line + 1, 0)), i.line < e.viewFrom ||
        o.line > e.viewTo - 1) return !1;
        var r, s, a;
        i.line == e.viewFrom || 0 == (r = Si(t, i.line)) ? (s = ie(e.view[0].line), a = e.view[0].node) : (s =
            ie(e.view[r].line), a = e.view[r - 1].node.nextSibling);
        var l, c, u = Si(t, o.line);
        if (u == e.view.length - 1 ? (l = e.viewTo - 1, c = e.lineDiv.lastChild) : (l = ie(e.view[u + 1].line) -
            1, c = e.view[u + 1].node.previousSibling), !a) return !1;
        for (var d = t.doc.splitLines(da(t, a, c, s, l)), h = te(t.doc, ae(s, 0), ae(l, Z(t.doc, l).text.length)); d
            .length > 1 && h.length > 1;)
            if (g(d) == g(h)) d.pop(), h.pop(), l--;
            else {
                if (d[0] != h[0]) break;
                d.shift(), h.shift(), s++
            } for (var p = 0, f = 0, m = d[0], v = h[0], y = Math.min(m.length, v.length); y > p && m.charCodeAt(
            p) == v.charCodeAt(p);) ++p;
        for (var b = g(d), x = g(h), w = Math.min(b.length - (1 == d.length ? p : 0), x.length - (1 == h.length ?
            p : 0)); w > f && b.charCodeAt(b.length - f - 1) == x.charCodeAt(x.length - f - 1);) ++f;
        if (1 == d.length && 1 == h.length && s == i.line)
            for (; p && p > i.ch && b.charCodeAt(b.length - f - 1) == x.charCodeAt(x.length - f - 1);) p--, f++;
        d[d.length - 1] = b.slice(0, b.length - f).replace(/^\u200b+/, ""), d[0] = d[0].slice(p).replace(
            /\u200b+$/, "");
        var _ = ae(s, p),
            C = ae(l, h.length ? g(h).length - f : 0);
        return d.length > 1 || d[0] || le(_, C) ? (zr(t.doc, d, _, C, "+input"), !0) : void 0
    }, rc.prototype.ensurePolled = function () {
        this.forceCompositionEnd()
    }, rc.prototype.reset = function () {
        this.forceCompositionEnd()
    }, rc.prototype.forceCompositionEnd = function () {
        this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this
            .div.blur(), this.div.focus())
    }, rc.prototype.readFromDOMSoon = function () {
        var t = this;
        null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
            if (t.readDOMTimeout = null, t.composing) {
                if (!t.composing.done) return;
                t.composing = null
            }
            t.updateFromDOM()
        }, 80))
    }, rc.prototype.updateFromDOM = function () {
        var t = this;
        (this.cm.isReadOnly() || !this.pollContent()) && yo(this.cm, function () {
            return Ei(t.cm)
        })
    }, rc.prototype.setUneditable = function (t) {
        t.contentEditable = "false"
    }, rc.prototype.onKeyPress = function (t) {
        0 == t.charCode || this.composing || (t.preventDefault(), this.cm.isReadOnly() || bo(this.cm, Zs)(this.cm,
            String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), 0))
    }, rc.prototype.readOnlyChanged = function (t) {
        this.div.contentEditable = String("nocursor" != t)
    }, rc.prototype.onContextMenu = function () {}, rc.prototype.resetPosition = function () {}, rc.prototype.needsContentAttribute = !
        0;
    var sc = function (t) {
        this.cm = t, this.prevInput = "", this.pollingFast = !1, this.polling = new qa, this.hasSelection = !1,
            this.composing = null
    };
    sc.prototype.init = function (t) {
        function e(t) {
            if (!L(o, t)) {
                if (o.somethingSelected()) Ks({
                    lineWise: !1,
                    text: o.getSelections()
                });
                else {
                    if (!o.options.lineWiseCopyCut) return;
                    var e = na(o);
                    Ks({
                        lineWise: !0,
                        text: e.text
                    }), "cut" == t.type ? o.setSelections(e.ranges, null, Qa) : (i.prevInput = "", r.value =
                        e.text.join("\n"), Ra(r))
                }
                "cut" == t.type && (o.state.cutIncoming = +new Date)
            }
        }
        var n = this,
            i = this,
            o = this.cm;
        this.createField(t);
        var r = this.textarea;
        t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild), Aa && (r.style.width = "0px"), il(r,
            "input",
            function () {
                _a && Ca >= 9 && n.hasSelection && (n.hasSelection = null), i.poll()
            }), il(r, "paste", function (t) {
            L(o, t) || ta(t, o) || (o.state.pasteIncoming = +new Date, i.fastPoll())
        }), il(r, "cut", e), il(r, "copy", e), il(t.scroller, "paste", function (e) {
            if (!Pn(t, e) && !L(o, e)) {
                if (!r.dispatchEvent) return o.state.pasteIncoming = +new Date, i.focus(), void 0;
                var n = new Event("paste");
                n.clipboardData = e.clipboardData, r.dispatchEvent(n)
            }
        }), il(t.lineSpace, "selectstart", function (e) {
            Pn(t, e) || P(e)
        }), il(r, "compositionstart", function () {
            var t = o.getCursor("from");
            i.composing && i.composing.range.clear(), i.composing = {
                start: t,
                range: o.markText(t, o.getCursor("to"), {
                    className: "CodeMirror-composing"
                })
            }
        }), il(r, "compositionend", function () {
            i.composing && (i.poll(), i.composing.range.clear(), i.composing = null)
        })
    }, sc.prototype.createField = function () {
        this.wrapper = oa(), this.textarea = this.wrapper.firstChild
    }, sc.prototype.prepareSelection = function () {
        var t = this.cm,
            e = t.display,
            n = t.doc,
            i = Mi(t);
        if (t.options.moveInputWithCursor) {
            var o = ci(t, n.sel.primary().head, "div"),
                r = e.wrapper.getBoundingClientRect(),
                s = e.lineDiv.getBoundingClientRect();
            i.teTop = Math.max(0, Math.min(e.wrapper.clientHeight - 10, o.top + s.top - r.top)), i.teLeft =
                Math.max(0, Math.min(e.wrapper.clientWidth - 10, o.left + s.left - r.left))
        }
        return i
    }, sc.prototype.showSelection = function (t) {
        var e = this.cm,
            i = e.display;
        n(i.cursorDiv, t.cursors), n(i.selectionDiv, t.selection), null != t.teTop && (this.wrapper.style.top =
            t.teTop + "px", this.wrapper.style.left = t.teLeft + "px")
    }, sc.prototype.reset = function (t) {
        if (!this.contextMenuPending && !this.composing) {
            var e = this.cm;
            if (e.somethingSelected()) {
                this.prevInput = "";
                var n = e.getSelection();
                this.textarea.value = n, e.state.focused && Ra(this.textarea), _a && Ca >= 9 && (this.hasSelection =
                    n)
            } else t || (this.prevInput = this.textarea.value = "", _a && Ca >= 9 && (this.hasSelection = null))
        }
    }, sc.prototype.getField = function () {
        return this.textarea
    }, sc.prototype.supportsTouch = function () {
        return !1
    }, sc.prototype.focus = function () {
        if ("nocursor" != this.cm.options.readOnly && (!ja || s() != this.textarea)) try {
            this.textarea.focus()
        } catch (t) {}
    }, sc.prototype.blur = function () {
        this.textarea.blur()
    }, sc.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0
    }, sc.prototype.receivedFocus = function () {
        this.slowPoll()
    }, sc.prototype.slowPoll = function () {
        var t = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
            t.poll(), t.cm.state.focused && t.slowPoll()
        })
    }, sc.prototype.fastPoll = function () {
        function t() {
            var i = n.poll();
            i || e ? (n.pollingFast = !1, n.slowPoll()) : (e = !0, n.polling.set(60, t))
        }
        var e = !1,
            n = this;
        n.pollingFast = !0, n.polling.set(20, t)
    }, sc.prototype.poll = function () {
        var t = this,
            e = this.cm,
            n = this.textarea,
            i = this.prevInput;
        if (this.contextMenuPending || !e.state.focused || sl(n) && !i && !this.composing || e.isReadOnly() ||
            e.options.disableInput || e.state.keySeq) return !1;
        var o = n.value;
        if (o == i && !e.somethingSelected()) return !1;
        if (_a && Ca >= 9 && this.hasSelection === o || Ma && /[\uf700-\uf7ff]/.test(o)) return e.display.input
            .reset(), !1;
        if (e.doc.sel == e.display.selForContextMenu) {
            var r = o.charCodeAt(0);
            if (8203 != r || i || (i = "​"), 8666 == r) return this.reset(), this.cm.execCommand("undo")
        }
        for (var s = 0, a = Math.min(i.length, o.length); a > s && i.charCodeAt(s) == o.charCodeAt(s);) ++s;
        return yo(e, function () {
            Zs(e, o.slice(s), i.length - s, null, t.composing ? "*compose" : null), o.length > 1e3 || o
                .indexOf("\n") > -1 ? n.value = t.prevInput = "" : t.prevInput = o, t.composing && (t.composing
                .range.clear(), t.composing.range = e.markText(t.composing.start, e.getCursor("to"), {
                className: "CodeMirror-composing"
            }))
        }), !0
    }, sc.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1)
    }, sc.prototype.onKeyPress = function () {
        _a && Ca >= 9 && (this.hasSelection = null), this.fastPoll()
    }, sc.prototype.onContextMenu = function (t) {
        function e() {
            if (null != s.selectionStart) {
                var t = o.somethingSelected(),
                    e = "​" + (t ? s.value : "");
                s.value = "⇚", s.value = e, i.prevInput = t ? "" : "​", s.selectionStart = 1, s.selectionEnd =
                    e.length, r.selForContextMenu = o.doc.sel
            }
        }

        function n() {
            if (i.contextMenuPending == n && (i.contextMenuPending = !1, i.wrapper.style.cssText = d, s.style.cssText =
                    u, _a && 9 > Ca && r.scrollbars.setScrollTop(r.scroller.scrollTop = l), null != s.selectionStart
            )) {
                (!_a || _a && 9 > Ca) && e();
                var t = 0,
                    a = function () {
                        r.selForContextMenu == o.doc.sel && 0 == s.selectionStart && s.selectionEnd > 0 && "​" ==
                        i.prevInput ? bo(o, Ar)(o) : t++ < 10 ? r.detectingSelectAll = setTimeout(a, 500) :
                            (r.selForContextMenu = null, r.input.reset())
                    };
                r.detectingSelectAll = setTimeout(a, 200)
            }
        }
        var i = this,
            o = i.cm,
            r = o.display,
            s = i.textarea;
        i.contextMenuPending && i.contextMenuPending();
        var a = ki(o, t),
            l = r.scroller.scrollTop;
        if (a && !Ea) {
            var c = o.options.resetSelectionOnContextMenu;
            c && -1 == o.doc.sel.contains(a) && bo(o, Cr)(o.doc, qo(a), Qa);
            var u = s.style.cssText,
                d = i.wrapper.style.cssText,
                h = i.wrapper.offsetParent.getBoundingClientRect();
            i.wrapper.style.cssText = "position: static", s.style.cssText =
                "position: absolute; width: 30px; height: 30px;\n      top: " + (t.clientY - h.top - 5) +
                "px; left: " + (t.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (_a ?
                "rgba(255, 255, 255, .05)" : "transparent") +
                ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
            var p;
            if (Ta && (p = window.scrollY), r.input.focus(), Ta && window.scrollTo(null, p), r.input.reset(), o
                .somethingSelected() || (s.value = i.prevInput = " "), i.contextMenuPending = n, r.selForContextMenu =
                o.doc.sel, clearTimeout(r.detectingSelectAll), _a && Ca >= 9 && e(), Fa) {
                z(t);
                var f = function () {
                    N(window, "mouseup", f), setTimeout(n, 20)
                };
                il(window, "mouseup", f)
            } else setTimeout(n, 50)
        }
    }, sc.prototype.readOnlyChanged = function (t) {
        t || this.reset(), this.textarea.disabled = "nocursor" == t
    }, sc.prototype.setUneditable = function () {}, sc.prototype.needsContentAttribute = !1, Xs(Vs), ra(Vs);
    var ac = "iter insert remove copy getEditor constructor".split(" ");
    for (var lc in zl.prototype) zl.prototype.hasOwnProperty(lc) && h(ac, lc) < 0 && (Vs.prototype[lc] = function (
        t) {
        return function () {
            return t.apply(this.doc, arguments)
        }
    }(zl.prototype[lc]));
    return O(zl), Vs.inputStyles = {
        textarea: sc,
        contenteditable: rc
    }, Vs.defineMode = function (t) {
        Vs.defaults.mode || "null" == t || (Vs.defaults.mode = t), U.apply(this, arguments)
    }, Vs.defineMIME = X, Vs.defineMode("null", function () {
        return {
            token: function (t) {
                return t.skipToEnd()
            }
        }
    }), Vs.defineMIME("text/plain", "null"), Vs.defineExtension = function (t, e) {
        Vs.prototype[t] = e
    }, Vs.defineDocExtension = function (t, e) {
        zl.prototype[t] = e
    }, Vs.fromTextArea = fa, ga(Vs), Vs.version = "5.50.2", Vs
}),
    function (t) {
        "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror")) : "function" == typeof define &&
        define.amd ? define(["../../lib/codemirror"], t) : t(CodeMirror)
    }(function (t) {
        "use strict";
        t.defineMode("javascript", function (e, n) {
            function i(t) {
                for (var e, n = !1, i = !1; null != (e = t.next());) {
                    if (!n) {
                        if ("/" == e && !i) return;
                        "[" == e ? i = !0 : i && "]" == e && (i = !1)
                    }
                    n = !n && "\\" == e
                }
            }

            function o(t, e, n) {
                return Fe = t, We = n, e
            }

            function r(t, e) {
                var n = t.next();
                if ('"' == n || "'" == n) return e.tokenize = s(n), e.tokenize(t, e);
                if ("." == n && t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return o("number", "number");
                if ("." == n && t.match("..")) return o("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(n)) return o(n);
                if ("=" == n && t.eat(">")) return o("=>", "operator");
                if ("0" == n && t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return o("number", "number");
                if (/\d/.test(n)) return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), o(
                    "number", "number");
                if ("/" == n) return t.eat("*") ? (e.tokenize = a, a(t, e)) : t.eat("/") ? (t.skipToEnd(), o(
                    "comment", "comment")) : ze(t, e, 1) ? (i(t), t.match(
                    /^\b(([gimyus])(?![gimyus]*\2))+\b/), o("regexp", "string-2")) : (t.eat("="), o(
                    "operator", "operator", t.current()));
                if ("`" == n) return e.tokenize = l, l(t, e);
                if ("#" == n) return t.skipToEnd(), o("error", "error");
                if ("<" == n && t.match("!--") || "-" == n && t.match("->")) return t.skipToEnd(), o("comment",
                    "comment");
                if (Ve.test(n)) return ">" == n && e.lexical && ">" == e.lexical.type || (t.eat("=") ? ("!" ==
                    n || "=" == n) && t.eat("=") : /[<>*+\-]/.test(n) && (t.eat(n), ">" == n && t.eat(
                    n))), o("operator", "operator", t.current());
                if (Ye.test(n)) {
                    t.eatWhile(Ye);
                    var r = t.current();
                    if ("." != e.lastType) {
                        if (Qe.propertyIsEnumerable(r)) {
                            var c = Qe[r];
                            return o(c.type, c.style, r)
                        }
                        if ("async" == r && t.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return o("async",
                            "keyword", r)
                    }
                    return o("variable", "variable", r)
                }
            }

            function s(t) {
                return function (e, n) {
                    var i, s = !1;
                    if (Be && "@" == e.peek() && e.match(Ge)) return n.tokenize = r, o("jsonld-keyword",
                        "meta");
                    for (; null != (i = e.next()) && (i != t || s);) s = !s && "\\" == i;
                    return s || (n.tokenize = r), o("string", "string")
                }
            }

            function a(t, e) {
                for (var n, i = !1; n = t.next();) {
                    if ("/" == n && i) {
                        e.tokenize = r;
                        break
                    }
                    i = "*" == n
                }
                return o("comment", "comment")
            }

            function l(t, e) {
                for (var n, i = !1; null != (n = t.next());) {
                    if (!i && ("`" == n || "$" == n && t.eat("{"))) {
                        e.tokenize = r;
                        break
                    }
                    i = !i && "\\" == n
                }
                return o("quasi", "string-2", t.current())
            }

            function c(t, e) {
                e.fatArrowAt && (e.fatArrowAt = null);
                var n = t.string.indexOf("=>", t.start);
                if (!(0 > n)) {
                    if (Xe) {
                        var i = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start, n));
                        i && (n = i.index)
                    }
                    for (var o = 0, r = !1, s = n - 1; s >= 0; --s) {
                        var a = t.string.charAt(s),
                            l = Je.indexOf(a);
                        if (l >= 0 && 3 > l) {
                            if (!o) {
                                ++s;
                                break
                            }
                            if (0 == --o) {
                                "(" == a && (r = !0);
                                break
                            }
                        } else if (l >= 3 && 6 > l) ++o;
                        else if (Ye.test(a)) r = !0;
                        else if (/["'\/`]/.test(a))
                            for (;; --s) {
                                if (0 == s) return;
                                var c = t.string.charAt(s - 1);
                                if (c == a && "\\" != t.string.charAt(s - 2)) {
                                    s--;
                                    break
                                }
                            } else if (r && !o) {
                            ++s;
                            break
                        }
                    }
                    r && !o && (e.fatArrowAt = s)
                }
            }

            function u(t, e, n, i, o, r) {
                this.indented = t, this.column = e, this.type = n, this.prev = o, this.info = r, null != i && (
                    this.align = i)
            }

            function d(t, e) {
                for (var n = t.localVars; n; n = n.next)
                    if (n.name == e) return !0;
                for (var i = t.context; i; i = i.prev)
                    for (var n = i.vars; n; n = n.next)
                        if (n.name == e) return !0
            }

            function h(t, e, n, i, o) {
                var r = t.cc;
                for (Ze.state = t, Ze.stream = o, Ze.marked = null, Ze.cc = r, Ze.style = e, t.lexical.hasOwnProperty(
                    "align") || (t.lexical.align = !0);;) {
                    var s = r.length ? r.pop() : Ue ? D : E;
                    if (s(n, i)) {
                        for (; r.length && r[r.length - 1].lex;) r.pop()();
                        return Ze.marked ? Ze.marked : "variable" == n && d(t, i) ? "variable-2" : e
                    }
                }
            }

            function p() {
                for (var t = arguments.length - 1; t >= 0; t--) Ze.cc.push(arguments[t])
            }

            function f() {
                return p.apply(null, arguments), !0
            }

            function g(t, e) {
                for (var n = e; n; n = n.next)
                    if (n.name == t) return !0;
                return !1
            }

            function m(t) {
                var e = Ze.state;
                if (Ze.marked = "def", e.context)
                    if ("var" == e.lexical.info && e.context && e.context.block) {
                        var i = v(t, e.context);
                        if (null != i) return e.context = i, void 0
                    } else if (!g(t, e.localVars)) return e.localVars = new x(t, e.localVars), void 0;
                n.globalVars && !g(t, e.globalVars) && (e.globalVars = new x(t, e.globalVars))
            }

            function v(t, e) {
                if (e) {
                    if (e.block) {
                        var n = v(t, e.prev);
                        return n ? n == e.prev ? e : new b(n, e.vars, !0) : null
                    }
                    return g(t, e.vars) ? e : new b(e.prev, new x(t, e.vars), !1)
                }
                return null
            }

            function y(t) {
                return "public" == t || "private" == t || "protected" == t || "abstract" == t || "readonly" ==
                    t
            }

            function b(t, e, n) {
                this.prev = t, this.vars = e, this.block = n
            }

            function x(t, e) {
                this.name = t, this.next = e
            }

            function w() {
                Ze.state.context = new b(Ze.state.context, Ze.state.localVars, !1), Ze.state.localVars = tn
            }

            function _() {
                Ze.state.context = new b(Ze.state.context, Ze.state.localVars, !0), Ze.state.localVars = null
            }

            function C() {
                Ze.state.localVars = Ze.state.context.vars, Ze.state.context = Ze.state.context.prev
            }

            function T(t, e) {
                var n = function () {
                    var n = Ze.state,
                        i = n.indented;
                    if ("stat" == n.lexical.type) i = n.lexical.indented;
                    else
                        for (var o = n.lexical; o && ")" == o.type && o.align; o = o.prev) i = o.indented;
                    n.lexical = new u(i, Ze.stream.column(), t, null, n.lexical, e)
                };
                return n.lex = !0, n
            }

            function k() {
                var t = Ze.state;
                t.lexical.prev && (")" == t.lexical.type && (t.indented = t.lexical.indented), t.lexical = t.lexical
                    .prev)
            }

            function S(t) {
                function e(n) {
                    return n == t ? f() : ";" == t || "}" == n || ")" == n || "]" == n ? p() : f(e)
                }
                return e
            }

            function E(t, e) {
                return "var" == t ? f(T("vardef", e), ce, S(";"), k) : "keyword a" == t ? f(T("form"), A, E, k) :
                    "keyword b" == t ? f(T("form"), E, k) : "keyword d" == t ? Ze.stream.match(/^\s*$/, !1) ? f() :
                        f(T("stat"), j, S(";"), k) : "debugger" == t ? f(S(";")) : "{" == t ? f(T("}"), _, G, k, C) :
                        ";" == t ? f() : "if" == t ? ("else" == Ze.state.lexical.info && Ze.state.cc[Ze.state.cc.length -
                        1] == k && Ze.state.cc.pop()(), f(T("form"), A, E, k, ge)) : "function" == t ? f(be) :
                            "for" == t ? f(T("form"), me, E, k) : "class" == t || Xe && "interface" == e ? (Ze.marked =
                                "keyword", f(T("form", "class" == t ? t : e), Te, k)) : "variable" == t ? Xe &&
                            "declare" == e ? (Ze.marked = "keyword", f(E)) : Xe && ("module" == e || "enum" == e ||
                                "type" == e) && Ze.stream.match(/^\s*\w/, !1) ? (Ze.marked = "keyword", "enum" == e ? f(
                                Pe) : "type" == e ? f(we, S("operator"), ee, S(";")) : f(T("form"), ue, S("{"), T(
                                "}"), G, k, k)) : Xe && "namespace" == e ? (Ze.marked = "keyword", f(T("form"), D, E, k)) :
                                Xe && "abstract" == e ? (Ze.marked = "keyword", f(E)) : f(T("stat"), q) : "switch" == t ? f(
                                T("form"), A, S("{"), T("}", "switch"), _, G, k, k, C) : "case" == t ? f(D, S(":")) :
                                "default" == t ? f(S(":")) : "catch" == t ? f(T("form"), w, $, E, k, C) : "export" == t ? f(
                                    T("stat"), $e, k) : "import" == t ? f(T("stat"), Ne, k) : "async" == t ? f(E) : "@" ==
                                e ? f(D, E) : p(T("stat"), D, S(";"), k)
            }

            function $(t) {
                return "(" == t ? f(_e, S(")")) : void 0
            }

            function D(t, e) {
                return L(t, e, !1)
            }

            function N(t, e) {
                return L(t, e, !0)
            }

            function A(t) {
                return "(" != t ? p() : f(T(")"), D, S(")"), k)
            }

            function L(t, e, n) {
                if (Ze.state.fatArrowAt == Ze.stream.start) {
                    var i = n ? z : H;
                    if ("(" == t) return f(w, T(")"), Q(_e, ")"), k, S("=>"), i, C);
                    if ("variable" == t) return p(w, ue, S("=>"), i, C)
                }
                var o = n ? O : M;
                return Ke.hasOwnProperty(t) ? f(o) : "function" == t ? f(be, o) : "class" == t || Xe &&
                "interface" == e ? (Ze.marked = "keyword", f(T("form"), Ce, k)) : "keyword c" == t ||
                "async" == t ? f(n ? N : D) : "(" == t ? f(T(")"), j, S(")"), k, o) : "operator" == t ||
                "spread" == t ? f(n ? N : D) : "[" == t ? f(T("]"), Oe, k, o) : "{" == t ? V(U, "}", null,
                    o) : "quasi" == t ? p(P, o) : "new" == t ? f(F(n)) : "import" == t ? f(D) : f()
            }

            function j(t) {
                return t.match(/[;\}\)\],]/) ? p() : p(D)
            }

            function M(t, e) {
                return "," == t ? f(D) : O(t, e, !1)
            }

            function O(t, e, n) {
                var i = 0 == n ? M : O,
                    o = 0 == n ? D : N;
                return "=>" == t ? f(w, n ? z : H, C) : "operator" == t ? /\+\+|--/.test(e) || Xe && "!" == e ?
                    f(i) : Xe && "<" == e && Ze.stream.match(/^([^>]|<.*?>)*>\s*\(/, !1) ? f(T(">"), Q(ee, ">"),
                        k, i) : "?" == e ? f(D, S(":"), o) : f(o) : "quasi" == t ? p(P, i) : ";" != t ? "(" ==
                    t ? V(N, ")", "call", i) : "." == t ? f(B, i) : "[" == t ? f(T("]"), j, S("]"), k, i) : Xe &&
                    "as" == e ? (Ze.marked = "keyword", f(ee, i)) : "regexp" == t ? (Ze.state.lastType = Ze.marked =
                        "operator", Ze.stream.backUp(Ze.stream.pos - Ze.stream.start - 1), f(o)) : void 0 :
                    void 0
            }

            function P(t, e) {
                return "quasi" != t ? p() : "${" != e.slice(e.length - 2) ? f(P) : f(D, I)
            }

            function I(t) {
                return "}" == t ? (Ze.marked = "string-2", Ze.state.tokenize = l, f(P)) : void 0
            }

            function H(t) {
                return c(Ze.stream, Ze.state), p("{" == t ? E : D)
            }

            function z(t) {
                return c(Ze.stream, Ze.state), p("{" == t ? E : N)
            }

            function F(t) {
                return function (e) {
                    return "." == e ? f(t ? R : W) : "variable" == e && Xe ? f(se, t ? O : M) : p(t ? N : D)
                }
            }

            function W(t, e) {
                return "target" == e ? (Ze.marked = "keyword", f(M)) : void 0
            }

            function R(t, e) {
                return "target" == e ? (Ze.marked = "keyword", f(O)) : void 0
            }

            function q(t) {
                return ":" == t ? f(k, E) : p(M, S(";"), k)
            }

            function B(t) {
                return "variable" == t ? (Ze.marked = "property", f()) : void 0
            }

            function U(t, e) {
                if ("async" == t) return Ze.marked = "property", f(U);
                if ("variable" == t || "keyword" == Ze.style) {
                    if (Ze.marked = "property", "get" == e || "set" == e) return f(X);
                    var n;
                    return Xe && Ze.state.fatArrowAt == Ze.stream.start && (n = Ze.stream.match(/^\s*:\s*/, !1)) &&
                    (Ze.state.fatArrowAt = Ze.stream.pos + n[0].length), f(Y)
                }
                return "number" == t || "string" == t ? (Ze.marked = Be ? "property" : Ze.style + " property",
                    f(Y)) : "jsonld-keyword" == t ? f(Y) : Xe && y(e) ? (Ze.marked = "keyword", f(U)) : "[" ==
                t ? f(D, J, S("]"), Y) : "spread" == t ? f(N, Y) : "*" == e ? (Ze.marked = "keyword", f(U)) :
                    ":" == t ? p(Y) : void 0
            }

            function X(t) {
                return "variable" != t ? p(Y) : (Ze.marked = "property", f(be))
            }

            function Y(t) {
                return ":" == t ? f(N) : "(" == t ? p(be) : void 0
            }

            function Q(t, e, n) {
                function i(o, r) {
                    if (n ? n.indexOf(o) > -1 : "," == o) {
                        var s = Ze.state.lexical;
                        return "call" == s.info && (s.pos = (s.pos || 0) + 1), f(function (n, i) {
                            return n == e || i == e ? p() : p(t)
                        }, i)
                    }
                    return o == e || r == e ? f() : n && n.indexOf(";") > -1 ? p(t) : f(S(e))
                }
                return function (n, o) {
                    return n == e || o == e ? f() : p(t, i)
                }
            }

            function V(t, e, n) {
                for (var i = 3; i < arguments.length; i++) Ze.cc.push(arguments[i]);
                return f(T(e, n), Q(t, e), k)
            }

            function G(t) {
                return "}" == t ? f() : p(E, G)
            }

            function J(t, e) {
                if (Xe) {
                    if (":" == t) return f(ee);
                    if ("?" == e) return f(J)
                }
            }

            function K(t, e) {
                return !Xe || ":" != t && "in" != e ? void 0 : f(ee)
            }

            function Z(t) {
                return Xe && ":" == t ? Ze.stream.match(/^\s*\w+\s+is\b/, !1) ? f(D, te, ee) : f(ee) : void 0
            }

            function te(t, e) {
                return "is" == e ? (Ze.marked = "keyword", f()) : void 0
            }

            function ee(t, e) {
                return "keyof" == e || "typeof" == e || "infer" == e ? (Ze.marked = "keyword", f("typeof" == e ?
                    N : ee)) : "variable" == t || "void" == e ? (Ze.marked = "type", f(re)) : "|" == e ||
                "&" == e ? f(ee) : "string" == t || "number" == t || "atom" == t ? f(re) : "[" == t ? f(T(
                    "]"), Q(ee, "]", ","), k, re) : "{" == t ? f(T("}"), Q(ie, "}", ",;"), k, re) : "(" ==
                t ? f(Q(oe, ")"), ne, re) : "<" == t ? f(Q(ee, ">"), ee) : void 0
            }

            function ne(t) {
                return "=>" == t ? f(ee) : void 0
            }

            function ie(t, e) {
                return "variable" == t || "keyword" == Ze.style ? (Ze.marked = "property", f(ie)) : "?" == e ||
                "number" == t || "string" == t ? f(ie) : ":" == t ? f(ee) : "[" == t ? f(S("variable"), K,
                    S("]"), ie) : "(" == t ? p(xe, ie) : void 0
            }

            function oe(t, e) {
                return "variable" == t && Ze.stream.match(/^\s*[?:]/, !1) || "?" == e ? f(oe) : ":" == t ? f(ee) :
                    "spread" == t ? f(oe) : p(ee)
            }

            function re(t, e) {
                return "<" == e ? f(T(">"), Q(ee, ">"), k, re) : "|" == e || "." == t || "&" == e ? f(ee) : "[" ==
                t ? f(ee, S("]"), re) : "extends" == e || "implements" == e ? (Ze.marked = "keyword", f(ee)) :
                    "?" == e ? f(ee, S(":"), ee) : void 0
            }

            function se(t, e) {
                return "<" == e ? f(T(">"), Q(ee, ">"), k, re) : void 0
            }

            function ae() {
                return p(ee, le)
            }

            function le(t, e) {
                return "=" == e ? f(ee) : void 0
            }

            function ce(t, e) {
                return "enum" == e ? (Ze.marked = "keyword", f(Pe)) : p(ue, J, pe, fe)
            }

            function ue(t, e) {
                return Xe && y(e) ? (Ze.marked = "keyword", f(ue)) : "variable" == t ? (m(e), f()) : "spread" ==
                t ? f(ue) : "[" == t ? V(he, "]") : "{" == t ? V(de, "}") : void 0
            }

            function de(t, e) {
                return "variable" != t || Ze.stream.match(/^\s*:/, !1) ? ("variable" == t && (Ze.marked =
                    "property"), "spread" == t ? f(ue) : "}" == t ? p() : "[" == t ? f(D, S("]"), S(":"),
                    de) : f(S(":"), ue, pe)) : (m(e), f(pe))
            }

            function he() {
                return p(ue, pe)
            }

            function pe(t, e) {
                return "=" == e ? f(N) : void 0
            }

            function fe(t) {
                return "," == t ? f(ce) : void 0
            }

            function ge(t, e) {
                return "keyword b" == t && "else" == e ? f(T("form", "else"), E, k) : void 0
            }

            function me(t, e) {
                return "await" == e ? f(me) : "(" == t ? f(T(")"), ve, k) : void 0
            }

            function ve(t) {
                return "var" == t ? f(ce, ye) : "variable" == t ? f(ye) : p(ye)
            }

            function ye(t, e) {
                return ")" == t ? f() : ";" == t ? f(ye) : "in" == e || "of" == e ? (Ze.marked = "keyword", f(D,
                    ye)) : p(D, ye)
            }

            function be(t, e) {
                return "*" == e ? (Ze.marked = "keyword", f(be)) : "variable" == t ? (m(e), f(be)) : "(" == t ?
                    f(w, T(")"), Q(_e, ")"), k, Z, E, C) : Xe && "<" == e ? f(T(">"), Q(ae, ">"), k, be) : void 0
            }

            function xe(t, e) {
                return "*" == e ? (Ze.marked = "keyword", f(xe)) : "variable" == t ? (m(e), f(xe)) : "(" == t ?
                    f(w, T(")"), Q(_e, ")"), k, Z, C) : Xe && "<" == e ? f(T(">"), Q(ae, ">"), k, xe) : void 0
            }

            function we(t, e) {
                return "keyword" == t || "variable" == t ? (Ze.marked = "type", f(we)) : "<" == e ? f(T(">"), Q(
                    ae, ">"), k) : void 0
            }

            function _e(t, e) {
                return "@" == e && f(D, _e), "spread" == t ? f(_e) : Xe && y(e) ? (Ze.marked = "keyword", f(_e)) :
                    Xe && "this" == t ? f(J, pe) : p(ue, J, pe)
            }

            function Ce(t, e) {
                return "variable" == t ? Te(t, e) : ke(t, e)
            }

            function Te(t, e) {
                return "variable" == t ? (m(e), f(ke)) : void 0
            }

            function ke(t, e) {
                return "<" == e ? f(T(">"), Q(ae, ">"), k, ke) : "extends" == e || "implements" == e || Xe &&
                "," == t ? ("implements" == e && (Ze.marked = "keyword"), f(Xe ? ee : D, ke)) : "{" == t ?
                    f(T("}"), Se, k) : void 0
            }

            function Se(t, e) {
                return "async" == t || "variable" == t && ("static" == e || "get" == e || "set" == e || Xe && y(
                    e)) && Ze.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Ze.marked = "keyword", f(Se)) :
                    "variable" == t || "keyword" == Ze.style ? (Ze.marked = "property", f(Xe ? Ee : be, Se)) :
                        "number" == t || "string" == t ? f(Xe ? Ee : be, Se) : "[" == t ? f(D, J, S("]"), Xe ? Ee :
                            be, Se) : "*" == e ? (Ze.marked = "keyword", f(Se)) : Xe && "(" == t ? p(xe, Se) : ";" ==
                        t || "," == t ? f(Se) : "}" == t ? f() : "@" == e ? f(D, Se) : void 0
            }

            function Ee(t, e) {
                if ("?" == e) return f(Ee);
                if (":" == t) return f(ee, pe);
                if ("=" == e) return f(N);
                var n = Ze.state.lexical.prev,
                    i = n && "interface" == n.info;
                return p(i ? xe : be)
            }

            function $e(t, e) {
                return "*" == e ? (Ze.marked = "keyword", f(Me, S(";"))) : "default" == e ? (Ze.marked =
                    "keyword", f(D, S(";"))) : "{" == t ? f(Q(De, "}"), Me, S(";")) : p(E)
            }

            function De(t, e) {
                return "as" == e ? (Ze.marked = "keyword", f(S("variable"))) : "variable" == t ? p(N, De) :
                    void 0
            }

            function Ne(t) {
                return "string" == t ? f() : "(" == t ? p(D) : p(Ae, Le, Me)
            }

            function Ae(t, e) {
                return "{" == t ? V(Ae, "}") : ("variable" == t && m(e), "*" == e && (Ze.marked = "keyword"), f(
                    je))
            }

            function Le(t) {
                return "," == t ? f(Ae, Le) : void 0
            }

            function je(t, e) {
                return "as" == e ? (Ze.marked = "keyword", f(Ae)) : void 0
            }

            function Me(t, e) {
                return "from" == e ? (Ze.marked = "keyword", f(D)) : void 0
            }

            function Oe(t) {
                return "]" == t ? f() : p(Q(N, "]"))
            }

            function Pe() {
                return p(T("form"), ue, S("{"), T("}"), Q(Ie, "}"), k, k)
            }

            function Ie() {
                return p(ue, pe)
            }

            function He(t, e) {
                return "operator" == t.lastType || "," == t.lastType || Ve.test(e.charAt(0)) || /[,.]/.test(e.charAt(
                    0))
            }

            function ze(t, e, n) {
                return e.tokenize == r &&
                    /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType) ||
                    "quasi" == e.lastType && /\{\s*$/.test(t.string.slice(0, t.pos - (n || 0)))
            }
            var Fe, We, Re = e.indentUnit,
                qe = n.statementIndent,
                Be = n.jsonld,
                Ue = n.json || Be,
                Xe = n.typescript,
                Ye = n.wordCharacters || /[\w$\xa1-\uffff]/,
                Qe = function () {
                    function t(t) {
                        return {
                            type: t,
                            style: "keyword"
                        }
                    }
                    var e = t("keyword a"),
                        n = t("keyword b"),
                        i = t("keyword c"),
                        o = t("keyword d"),
                        r = t("operator"),
                        s = {
                            type: "atom",
                            style: "atom"
                        };
                    return {
                        "if": t("if"),
                        "while": e,
                        "with": e,
                        "else": n,
                        "do": n,
                        "try": n,
                        "finally": n,
                        "return": o,
                        "break": o,
                        "continue": o,
                        "new": t("new"),
                        "delete": i,
                        "void": i,
                        "throw": i,
                        "debugger": t("debugger"),
                        "var": t("var"),
                        "const": t("var"),
                        let: t("var"),
                        "function": t("function"),
                        "catch": t("catch"),
                        "for": t("for"),
                        "switch": t("switch"),
                        "case": t("case"),
                        "default": t("default"),
                        "in": r,
                        "typeof": r,
                        "instanceof": r,
                        "true": s,
                        "false": s,
                        "null": s,
                        undefined: s,
                        NaN: s,
                        Infinity: s,
                        "this": t("this"),
                        "class": t("class"),
                        "super": t("atom"),
                        yield: i,
                        "export": t("export"),
                        "import": t("import"),
                        "extends": i,
                        await: i
                    }
                }(),
                Ve = /[+\-*&%=<>!?|~^@]/,
                Ge = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                Je = "([{}])",
                Ke = {
                    atom: !0,
                    number: !0,
                    variable: !0,
                    string: !0,
                    regexp: !0,
                    "this": !0,
                    "jsonld-keyword": !0
                },
                Ze = {
                    state: null,
                    column: null,
                    marked: null,
                    cc: null
                },
                tn = new x("this", new x("arguments", null));
            return C.lex = !0, k.lex = !0, {
                startState: function (t) {
                    var e = {
                        tokenize: r,
                        lastType: "sof",
                        cc: [],
                        lexical: new u((t || 0) - Re, 0, "block", !1),
                        localVars: n.localVars,
                        context: n.localVars && new b(null, null, !1),
                        indented: t || 0
                    };
                    return n.globalVars && "object" == typeof n.globalVars && (e.globalVars = n.globalVars),
                        e
                },
                token: function (t, e) {
                    if (t.sol() && (e.lexical.hasOwnProperty("align") || (e.lexical.align = !1), e.indented =
                        t.indentation(), c(t, e)), e.tokenize != a && t.eatSpace()) return null;
                    var n = e.tokenize(t, e);
                    return "comment" == Fe ? n : (e.lastType = "operator" != Fe || "++" != We && "--" !=
                    We ? Fe : "incdec", h(e, n, Fe, We, t))
                },
                indent: function (e, i) {
                    if (e.tokenize == a) return t.Pass;
                    if (e.tokenize != r) return 0;
                    var o, s = i && i.charAt(0),
                        l = e.lexical;
                    if (!/^\s*else\b/.test(i))
                        for (var c = e.cc.length - 1; c >= 0; --c) {
                            var u = e.cc[c];
                            if (u == k) l = l.prev;
                            else if (u != ge) break
                        }
                    for (; !("stat" != l.type && "form" != l.type || "}" != s && (!(o = e.cc[e.cc.length -
                    1]) || o != M && o != O || /^[,\.=+\-*:?[\(]/.test(i)));) l = l.prev;
                    qe && ")" == l.type && "stat" == l.prev.type && (l = l.prev);
                    var d = l.type,
                        h = s == d;
                    return "vardef" == d ? l.indented + ("operator" == e.lastType || "," == e.lastType ?
                        l.info.length + 1 : 0) : "form" == d && "{" == s ? l.indented : "form" == d ?
                        l.indented + Re : "stat" == d ? l.indented + (He(e, i) ? qe || Re : 0) :
                            "switch" != l.info || h || 0 == n.doubleIndentSwitch ? l.align ? l.column + (h ?
                                0 : 1) : l.indented + (h ? 0 : Re) : l.indented + (/^(?:case|default)\b/.test(
                                i) ? Re : 2 * Re)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: Ue ? null : "/*",
                blockCommentEnd: Ue ? null : "*/",
                blockCommentContinue: Ue ? null : " * ",
                lineComment: Ue ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: Ue ? "json" : "javascript",
                jsonldMode: Be,
                jsonMode: Ue,
                expressionAllowed: ze,
                skipExpression: function (t) {
                    var e = t.cc[t.cc.length - 1];
                    (e == D || e == N) && t.cc.pop()
                }
            }
        }), t.registerHelper("wordChars", "javascript", /[\w$]/), t.defineMIME("text/javascript", "javascript"), t.defineMIME(
            "text/ecmascript", "javascript"), t.defineMIME("application/javascript", "javascript"), t.defineMIME(
            "application/x-javascript", "javascript"), t.defineMIME("application/ecmascript", "javascript"), t.defineMIME(
            "application/json", {
                name: "javascript",
                json: !0
            }), t.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), t.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), t.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), t.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        })
    }),
    function (t) {
        "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror")) : "function" == typeof define &&
        define.amd ? define(["../../lib/codemirror"], t) : t(CodeMirror)
    }(function (t) {
        "use strict";

        function e(e, o, r, s) {
            function a(t) {
                var n = l(e, o);
                if (!n || n.to.line - n.from.line < c) return null;
                for (var i = e.findMarksAt(n.from), r = 0; r < i.length; ++r)
                    if (i[r].__isFold && "fold" !== s) {
                        if (!t) return null;
                        n.cleared = !0, i[r].clear()
                    } return n
            }
            if (r && r.call) {
                var l = r;
                r = null
            } else var l = i(e, r, "rangeFinder");
            "number" == typeof o && (o = t.Pos(o, 0));
            var c = i(e, r, "minFoldSize"),
                u = a(!0);
            if (i(e, r, "scanUp"))
                for (; !u && o.line > e.firstLine();) o = t.Pos(o.line - 1, 0), u = a(!1);
            if (u && !u.cleared && "unfold" !== s) {
                var d = n(e, r, u);
                t.on(d, "mousedown", function (e) {
                    h.clear(), t.e_preventDefault(e)
                });
                var h = e.markText(u.from, u.to, {
                    replacedWith: d,
                    clearOnEnter: i(e, r, "clearOnEnter"),
                    __isFold: !0
                });
                h.on("clear", function (n, i) {
                    t.signal(e, "unfold", e, n, i)
                }), t.signal(e, "fold", e, u.from, u.to)
            }
        }

        function n(t, e, n) {
            var o = i(t, e, "widget");
            if ("function" == typeof o && (o = o(n.from, n.to)), "string" == typeof o) {
                var r = document.createTextNode(o);
                o = document.createElement("span"), o.appendChild(r), o.className = "CodeMirror-foldmarker"
            } else o && (o = o.cloneNode(!0));
            return o
        }

        function i(t, e, n) {
            if (e && void 0 !== e[n]) return e[n];
            var i = t.options.foldOptions;
            return i && void 0 !== i[n] ? i[n] : o[n]
        }
        t.newFoldFunction = function (t, n) {
            return function (i, o) {
                e(i, o, {
                    rangeFinder: t,
                    widget: n
                })
            }
        }, t.defineExtension("foldCode", function (t, n, i) {
            e(this, t, n, i)
        }), t.defineExtension("isFolded", function (t) {
            for (var e = this.findMarksAt(t), n = 0; n < e.length; ++n)
                if (e[n].__isFold) return !0
        }), t.commands.toggleFold = function (t) {
            t.foldCode(t.getCursor())
        }, t.commands.fold = function (t) {
            t.foldCode(t.getCursor(), null, "fold")
        }, t.commands.unfold = function (t) {
            t.foldCode(t.getCursor(), null, "unfold")
        }, t.commands.foldAll = function (e) {
            e.operation(function () {
                for (var n = e.firstLine(), i = e.lastLine(); i >= n; n++) e.foldCode(t.Pos(n, 0), null,
                    "fold")
            })
        }, t.commands.unfoldAll = function (e) {
            e.operation(function () {
                for (var n = e.firstLine(), i = e.lastLine(); i >= n; n++) e.foldCode(t.Pos(n, 0), null,
                    "unfold")
            })
        }, t.registerHelper("fold", "combine", function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return function (e, n) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i](e, n);
                    if (o) return o
                }
            }
        }), t.registerHelper("fold", "auto", function (t, e) {
            for (var n = t.getHelpers(e, "fold"), i = 0; i < n.length; i++) {
                var o = n[i](t, e);
                if (o) return o
            }
        });
        var o = {
            rangeFinder: t.fold.auto,
            widget: "↔",
            minFoldSize: 0,
            scanUp: !1,
            clearOnEnter: !0
        };
        t.defineOption("foldOptions", null), t.defineExtension("foldOption", function (t, e) {
            return i(this, t, e)
        })
    }),
    function (t) {
        "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror"), require("./foldcode")) :
            "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./foldcode"], t) : t(CodeMirror)
    }(function (t) {
        "use strict";

        function e(t) {
            this.options = t, this.from = this.to = 0
        }

        function n(t) {
            return t === !0 && (t = {}), null == t.gutter && (t.gutter = "CodeMirror-foldgutter"), null == t.indicatorOpen &&
            (t.indicatorOpen = "CodeMirror-foldgutter-open"), null == t.indicatorFolded && (t.indicatorFolded =
                "CodeMirror-foldgutter-folded"), t
        }

        function i(t, e) {
            for (var n = t.findMarks(h(e, 0), h(e + 1, 0)), i = 0; i < n.length; ++i)
                if (n[i].__isFold) {
                    var o = n[i].find(-1);
                    if (o && o.line === e) return n[i]
                }
        }

        function o(t) {
            if ("string" == typeof t) {
                var e = document.createElement("div");
                return e.className = t + " CodeMirror-guttermarker-subtle", e
            }
            return t.cloneNode(!0)
        }

        function r(t, e, n) {
            var r = t.state.foldGutter.options,
                a = e - 1,
                l = t.foldOption(r, "minFoldSize"),
                c = t.foldOption(r, "rangeFinder"),
                u = "string" == typeof r.indicatorFolded && s(r.indicatorFolded),
                d = "string" == typeof r.indicatorOpen && s(r.indicatorOpen);
            t.eachLine(e, n, function (e) {
                ++a;
                var n = null,
                    s = e.gutterMarkers;
                if (s && (s = s[r.gutter]), i(t, a)) {
                    if (u && s && u.test(s.className)) return;
                    n = o(r.indicatorFolded)
                } else {
                    var p = h(a, 0),
                        f = c && c(t, p);
                    if (f && f.to.line - f.from.line >= l) {
                        if (d && s && d.test(s.className)) return;
                        n = o(r.indicatorOpen)
                    }
                }(n || s) && t.setGutterMarker(e, r.gutter, n)
            })
        }

        function s(t) {
            return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
        }

        function a(t) {
            var e = t.getViewport(),
                n = t.state.foldGutter;
            n && (t.operation(function () {
                r(t, e.from, e.to)
            }), n.from = e.from, n.to = e.to)
        }

        function l(t, e, n) {
            var o = t.state.foldGutter;
            if (o) {
                var r = o.options;
                if (n == r.gutter) {
                    var s = i(t, e);
                    s ? s.clear() : t.foldCode(h(e, 0), r)
                }
            }
        }

        function c(t) {
            var e = t.state.foldGutter;
            if (e) {
                var n = e.options;
                e.from = e.to = 0, clearTimeout(e.changeUpdate), e.changeUpdate = setTimeout(function () {
                    a(t)
                }, n.foldOnChangeTimeSpan || 600)
            }
        }

        function u(t) {
            var e = t.state.foldGutter;
            if (e) {
                var n = e.options;
                clearTimeout(e.changeUpdate), e.changeUpdate = setTimeout(function () {
                    var n = t.getViewport();
                    e.from == e.to || n.from - e.to > 20 || e.from - n.to > 20 ? a(t) : t.operation(function () {
                        n.from < e.from && (r(t, n.from, e.from), e.from = n.from), n.to > e.to && (r(t,
                            e.to, n.to), e.to = n.to)
                    })
                }, n.updateViewportTimeSpan || 400)
            }
        }

        function d(t, e) {
            var n = t.state.foldGutter;
            if (n) {
                var i = e.line;
                i >= n.from && i < n.to && r(t, i, i + 1)
            }
        }
        t.defineOption("foldGutter", !1, function (i, o, r) {
            r && r != t.Init && (i.clearGutter(i.state.foldGutter.options.gutter), i.state.foldGutter = null, i
                .off("gutterClick", l), i.off("changes", c), i.off("viewportChange", u), i.off("fold", d),
                i.off("unfold", d), i.off("swapDoc", c)), o && (i.state.foldGutter = new e(n(o)), a(i), i.on(
                "gutterClick", l), i.on("changes", c), i.on("viewportChange", u), i.on("fold", d), i.on(
                "unfold", d), i.on("swapDoc", c))
        });
        var h = t.Pos
    }),
    function (t) {
        "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror")) : "function" == typeof define &&
        define.amd ? define(["../../lib/codemirror"], t) : t(CodeMirror)
    }(function (t) {
        "use strict";
        t.registerHelper("fold", "brace", function (e, n) {
            function i(i) {
                for (var a = n.ch, l = 0;;) {
                    var c = 0 >= a ? -1 : s.lastIndexOf(i, a - 1);
                    if (-1 != c) {
                        if (1 == l && c < n.ch) break;
                        if (o = e.getTokenTypeAt(t.Pos(r, c + 1)), !/^(comment|string)/.test(o)) return c + 1;
                        a = c - 1
                    } else {
                        if (1 == l) break;
                        l = 1, a = s.length
                    }
                }
            }
            var o, r = n.line,
                s = e.getLine(r),
                a = "{",
                l = "}",
                c = i("{");
            if (null == c && (a = "[", l = "]", c = i("[")), null != c) {
                var u, d, h = 1,
                    p = e.lastLine();
                t: for (var f = r; p >= f; ++f)
                    for (var g = e.getLine(f), m = f == r ? c : 0;;) {
                        var v = g.indexOf(a, m),
                            y = g.indexOf(l, m);
                        if (0 > v && (v = g.length), 0 > y && (y = g.length), m = Math.min(v, y), m == g.length)
                            break;
                        if (e.getTokenTypeAt(t.Pos(f, m + 1)) == o)
                            if (m == v) ++h;
                            else if (!--h) {
                                u = f, d = m;
                                break t
                            }++m
                    }
                if (null != u && r != u) return {
                    from: t.Pos(r, c),
                    to: t.Pos(u, d)
                }
            }
        }), t.registerHelper("fold", "import", function (e, n) {
            function i(n) {
                if (n < e.firstLine() || n > e.lastLine()) return null;
                var i = e.getTokenAt(t.Pos(n, 1));
                if (/\S/.test(i.string) || (i = e.getTokenAt(t.Pos(n, i.end + 1))), "keyword" != i.type ||
                "import" != i.string) return null;
                for (var o = n, r = Math.min(e.lastLine(), n + 10); r >= o; ++o) {
                    var s = e.getLine(o),
                        a = s.indexOf(";");
                    if (-1 != a) return {
                        startCh: i.end,
                        end: t.Pos(o, a)
                    }
                }
            }
            var o, r = n.line,
                s = i(r);
            if (!s || i(r - 1) || (o = i(r - 2)) && o.end.line == r - 1) return null;
            for (var a = s.end;;) {
                var l = i(a.line + 1);
                if (null == l) break;
                a = l.end
            }
            return {
                from: e.clipPos(t.Pos(r, s.startCh + 1)),
                to: a
            }
        }), t.registerHelper("fold", "include", function (e, n) {
            function i(n) {
                if (n < e.firstLine() || n > e.lastLine()) return null;
                var i = e.getTokenAt(t.Pos(n, 1));
                return /\S/.test(i.string) || (i = e.getTokenAt(t.Pos(n, i.end + 1))), "meta" == i.type &&
                "#include" == i.string.slice(0, 8) ? i.start + 8 : void 0
            }
            var o = n.line,
                r = i(o);
            if (null == r || null != i(o - 1)) return null;
            for (var s = o;;) {
                var a = i(s + 1);
                if (null == a) break;
                ++s
            }
            return {
                from: t.Pos(o, r + 1),
                to: e.clipPos(t.Pos(s))
            }
        })
    }),
    function (t) {
        "object" == typeof exports && "object" == typeof module ? t(require("../../lib/codemirror")) : "function" == typeof define &&
        define.amd ? define(["../../lib/codemirror"], t) : t(CodeMirror)
    }(function (t) {
        "use strict";
        t.registerGlobalHelper("fold", "comment", function (t) {
            return t.blockCommentStart && t.blockCommentEnd
        }, function (e, n) {
            var i = e.getModeAt(n),
                o = i.blockCommentStart,
                r = i.blockCommentEnd;
            if (o && r) {
                for (var s, a = n.line, l = e.getLine(a), c = n.ch, u = 0;;) {
                    var d = 0 >= c ? -1 : l.lastIndexOf(o, c - 1);
                    if (-1 != d) {
                        if (1 == u && d < n.ch) return;
                        if (/comment/.test(e.getTokenTypeAt(t.Pos(a, d + 1))) && (0 == d || l.slice(d - r.length,
                            d) == r || !/comment/.test(e.getTokenTypeAt(t.Pos(a, d))))) {
                            s = d + o.length;
                            break
                        }
                        c = d - 1
                    } else {
                        if (1 == u) return;
                        u = 1, c = l.length
                    }
                }
                var h, p, f = 1,
                    g = e.lastLine();
                t: for (var m = a; g >= m; ++m)
                    for (var v = e.getLine(m), y = m == a ? s : 0;;) {
                        var b = v.indexOf(o, y),
                            x = v.indexOf(r, y);
                        if (0 > b && (b = v.length), 0 > x && (x = v.length), y = Math.min(b, x), y == v.length)
                            break;
                        if (y == b) ++f;
                        else if (!--f) {
                            h = m, p = y;
                            break t
                        }++y
                    }
                if (null != h && (a != h || p != s)) return {
                    from: t.Pos(a, s),
                    to: t.Pos(h, p)
                }
            }
        })
    }),
    function () {
        CodeMirror.extendMode("css", {
            commentStart: "/*",
            commentEnd: "*/",
            newlineAfterToken: function (t, e) {
                return /^[;{}]$/.test(e)
            }
        }), CodeMirror.extendMode("javascript", {
            commentStart: "/*",
            commentEnd: "*/",
            newlineAfterToken: function (t, e, n, i) {
                return this.jsonMode ? /^[\[,{]$/.test(e) || /^}/.test(n) : ";" == e && i.lexical && ")" == i.lexical
                    .type ? !1 : /^[;{}]$/.test(e) && !/^;/.test(n)
            }
        }), CodeMirror.extendMode("xml", {
            commentStart: "<!--",
            commentEnd: "-->",
            newlineAfterToken: function (t, e, n) {
                return "tag" == t && />$/.test(e) || /^</.test(n)
            }
        }), CodeMirror.defineExtension("commentRange", function (t, e, n) {
            var i = this,
                o = CodeMirror.innerMode(i.getMode(), i.getTokenAt(e).state).mode;
            i.operation(function () {
                if (t) i.replaceRange(o.commentEnd, n), i.replaceRange(o.commentStart, e), e.line == n.line &&
                e.ch == n.ch && i.setCursor(e.line, e.ch + o.commentStart.length);
                else {
                    var r = i.getRange(e, n),
                        s = r.indexOf(o.commentStart),
                        a = r.lastIndexOf(o.commentEnd);
                    s > -1 && a > -1 && a > s && (r = r.substr(0, s) + r.substring(s + o.commentStart.length,
                        a) + r.substr(a + o.commentEnd.length)), i.replaceRange(r, e, n)
                }
            })
        }), CodeMirror.defineExtension("autoIndentRange", function (t, e) {
            var n = this;
            this.operation(function () {
                for (var i = t.line; i <= e.line; i++) n.indentLine(i, "smart")
            })
        }), CodeMirror.defineExtension("autoFormatRange", function (t, e) {
            function n() {
                l += "\n", u = !0, ++c
            }
            for (var i = this, o = i.getMode(), r = i.getRange(t, e).split("\n"), s = CodeMirror.copyState(o, i.getTokenAt(
                t).state), a = i.getOption("tabSize"), l = "", c = 0, u = 0 == t.ch, d = 0; d < r.length; ++d) {
                for (var h = new CodeMirror.StringStream(r[d], a); !h.eol();) {
                    var p = CodeMirror.innerMode(o, s),
                        f = o.token(h, s),
                        g = h.current();
                    h.start = h.pos, (!u || /\S/.test(g)) && (l += g, u = !1), !u && p.mode.newlineAfterToken && p.mode
                        .newlineAfterToken(f, g, h.string.slice(h.pos) || r[d + 1] || "", p.state) && n()
                }!h.pos && o.blankLine && o.blankLine(s), u || n()
            }
            i.operation(function () {
                i.replaceRange(l, t, e);
                for (var n = t.line + 1, o = t.line + c; o >= n; ++n) i.indentLine(n, "smart")
            })
        })
    }();
