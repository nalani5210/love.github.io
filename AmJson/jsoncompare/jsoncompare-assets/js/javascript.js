(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("javascript",function(ab,al){var l=ab.indentUnit;var B=al.statementIndent;var aD=al.jsonld;var A=al.json||aD;var g=al.typescript;var aw=al.wordCharacters||/[\w$\xa1-\uffff]/;var au=function(){function aT(aV){return{type:aV,style:"keyword"}}var aO=aT("keyword a"),aM=aT("keyword b"),aL=aT("keyword c");var aN=aT("operator"),aR={type:"atom",style:"atom"};var aP={"if":aT("if"),"while":aO,"with":aO,"else":aM,"do":aM,"try":aM,"finally":aM,"return":aL,"break":aL,"continue":aL,"new":aT("new"),"delete":aL,"throw":aL,"debugger":aL,"var":aT("var"),"const":aT("var"),"let":aT("var"),"async":aT("async"),"function":aT("function"),"catch":aT("catch"),"for":aT("for"),"switch":aT("switch"),"case":aT("case"),"default":aT("default"),"in":aN,"typeof":aN,"instanceof":aN,"true":aR,"false":aR,"null":aR,"undefined":aR,"NaN":aR,"Infinity":aR,"this":aT("this"),"class":aT("class"),"super":aT("atom"),"await":aL,"yield":aL,"export":aT("export"),"import":aT("import"),"extends":aL};if(g){var aU={type:"variable",style:"variable-3"};var aQ={"interface":aT("interface"),"extends":aT("extends"),"constructor":aT("constructor"),"public":aT("public"),"private":aT("private"),"protected":aT("protected"),"static":aT("static"),"string":aU,"number":aU,"boolean":aU,"any":aU};for(var aS in aQ){aP[aS]=aQ[aS]}}return aP}();var Q=/[+\-*&%=<>!?|~^]/;var at=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function G(aO){var aM=false,aL,aN=false;while((aL=aO.next())!=null){if(!aM){if(aL=="/"&&!aN){return}if(aL=="["){aN=true}else{if(aN&&aL=="]"){aN=false}}}aM=!aM&&aL=="\\"}}var T,H;function M(aN,aM,aL){T=aN;H=aL;return aM}function V(aP,aN){var aL=aP.next();if(aL=='"'||aL=="'"){aN.tokenize=S(aL);return aN.tokenize(aP,aN)}else{if(aL=="."&&aP.match(/^\d+(?:[eE][+\-]?\d+)?/)){return M("number","number")}else{if(aL=="."&&aP.match("..")){return M("spread","meta")}else{if(/[\[\]{}\(\),;\:\.]/.test(aL)){return M(aL)}else{if(aL=="="&&aP.eat(">")){return M("=>","operator")}else{if(aL=="0"&&aP.eat(/x/i)){aP.eatWhile(/[\da-f]/i);return M("number","number")}else{if(aL=="0"&&aP.eat(/o/i)){aP.eatWhile(/[0-7]/i);return M("number","number")}else{if(aL=="0"&&aP.eat(/b/i)){aP.eatWhile(/[01]/i);return M("number","number")}else{if(/\d/.test(aL)){aP.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/);return M("number","number")}else{if(aL=="/"){if(aP.eat("*")){aN.tokenize=aC;return aC(aP,aN)}else{if(aP.eat("/")){aP.skipToEnd();return M("comment","comment")}else{if(aN.lastType=="operator"||aN.lastType=="keyword c"||aN.lastType=="sof"||/^[\[{}\(,;:]$/.test(aN.lastType)){G(aP);aP.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);return M("regexp","string-2")}else{aP.eatWhile(Q);return M("operator","operator",aP.current())}}}}else{if(aL=="`"){aN.tokenize=aE;return aE(aP,aN)}else{if(aL=="#"){aP.skipToEnd();return M("error","error")}else{if(Q.test(aL)){aP.eatWhile(Q);return M("operator","operator",aP.current())}else{if(aw.test(aL)){aP.eatWhile(aw);var aO=aP.current(),aM=au.propertyIsEnumerable(aO)&&au[aO];return(aM&&aN.lastType!=".")?M(aM.type,aM.style,aO):M("variable","variable",aO)}}}}}}}}}}}}}}}function S(aL){return function(aP,aN){var aO=false,aM;if(aD&&aP.peek()=="@"&&aP.match(at)){aN.tokenize=V;return M("jsonld-keyword","meta")}while((aM=aP.next())!=null){if(aM==aL&&!aO){break}aO=!aO&&aM=="\\"}if(!aO){aN.tokenize=V}return M("string","string")}}function aC(aO,aN){var aL=false,aM;while(aM=aO.next()){if(aM=="/"&&aL){aN.tokenize=V;break}aL=(aM=="*")}return M("comment","comment")}function aE(aO,aM){var aN=false,aL;while((aL=aO.next())!=null){if(!aN&&(aL=="`"||aL=="$"&&aO.eat("{"))){aM.tokenize=V;break}aN=!aN&&aL=="\\"}return M("quasi","string-2",aO.current())}var m="([{}])";function az(aR,aO){if(aO.fatArrowAt){aO.fatArrowAt=null}var aN=aR.string.indexOf("=>",aR.start);if(aN<0){return}var aQ=0,aM=false;for(var aS=aN-1;aS>=0;--aS){var aL=aR.string.charAt(aS);var aP=m.indexOf(aL);if(aP>=0&&aP<3){if(!aQ){++aS;break}if(--aQ==0){break}}else{if(aP>=3&&aP<6){++aQ}else{if(aw.test(aL)){aM=true}else{if(/["'\/]/.test(aL)){return}else{if(aM&&!aQ){++aS;break}}}}}}if(aM&&!aQ){aO.fatArrowAt=aS}}var b={"atom":true,"number":true,"variable":true,"string":true,"regexp":true,"this":true,"jsonld-keyword":true};function K(aQ,aM,aL,aP,aN,aO){this.indented=aQ;this.column=aM;this.type=aL;this.prev=aN;this.info=aO;if(aP!=null){this.align=aP}}function t(aO,aN){for(var aM=aO.localVars;aM;aM=aM.next){if(aM.name==aN){return true}}for(var aL=aO.context;aL;aL=aL.prev){for(var aM=aL.vars;aM;aM=aM.next){if(aM.name==aN){return true}}}}function f(aP,aM,aL,aO,aQ){var aR=aP.cc;E.state=aP;E.stream=aQ;E.marked=null,E.cc=aR;E.style=aM;if(!aP.lexical.hasOwnProperty("align")){aP.lexical.align=true}while(true){var aN=aR.length?aR.pop():A?ap:aJ;if(aN(aL,aO)){while(aR.length&&aR[aR.length-1].lex){aR.pop()()
}if(E.marked){return E.marked}if(aL=="variable"&&t(aP,aO)){return"variable-2"}return aM}}}var E={state:null,column:null,marked:null,cc:null};function ac(){for(var aL=arguments.length-1;aL>=0;aL--){E.cc.push(arguments[aL])}}function ah(){ac.apply(null,arguments);return true}function ay(aM){function aL(aP){for(var aO=aP;aO;aO=aO.next){if(aO.name==aM){return true}}return false}var aN=E.state;E.marked="def";if(aN.context){if(aL(aN.localVars)){return}aN.localVars={name:aM,next:aN.localVars}}else{if(aL(aN.globalVars)){return}if(al.globalVars){aN.globalVars={name:aM,next:aN.globalVars}}}}var r={name:"this",next:{name:"arguments"}};function x(){E.state.context={prev:E.state.context,vars:E.state.localVars};E.state.localVars=r}function y(){E.state.localVars=E.state.context.vars;E.state.context=E.state.context.prev}function aH(aM,aN){var aL=function(){var aQ=E.state,aO=aQ.indented;if(aQ.lexical.type=="stat"){aO=aQ.lexical.indented}else{for(var aP=aQ.lexical;aP&&aP.type==")"&&aP.align;aP=aP.prev){aO=aP.indented}}aQ.lexical=new K(aO,E.stream.column(),aM,null,aQ.lexical,aN)};aL.lex=true;return aL}function h(){var aL=E.state;if(aL.lexical.prev){if(aL.lexical.type==")"){aL.indented=aL.lexical.indented}aL.lexical=aL.lexical.prev}}h.lex=true;function s(aL){function aM(aN){if(aN==aL){return ah()}else{if(aL==";"){return ac()}else{return ah(aM)}}}return aM}function aJ(aL,aM){if(aL=="var"){return ah(aH("vardef",aM.length),d,s(";"),h)}if(aL=="keyword a"){return ah(aH("form"),ap,aJ,h)}if(aL=="keyword b"){return ah(aH("form"),aJ,h)}if(aL=="{"){return ah(aH("}"),z,h)}if(aL==";"){return ah()}if(aL=="if"){if(E.state.lexical.info=="else"&&E.state.cc[E.state.cc.length-1]==h){E.state.cc.pop()()}return ah(aH("form"),ap,aJ,h,e)}if(aL=="function"){return ah(N)}if(aL=="for"){return ah(aH("form"),v,aJ,h)}if(aL=="variable"){return ah(aH("stat"),aK)}if(aL=="switch"){return ah(aH("form"),ap,aH("}","switch"),s("{"),z,h,h)}if(aL=="case"){return ah(ap,s(":"))}if(aL=="default"){return ah(s(":"))}if(aL=="catch"){return ah(aH("form"),x,s("("),af,s(")"),aJ,h,y)}if(aL=="class"){return ah(aH("form"),X,h)}if(aL=="export"){return ah(aH("stat"),aI,h)}if(aL=="import"){return ah(aH("stat"),ai,h)}return ac(aH("stat"),ap,s(";"),h)}function ap(aL){return aa(aL,false)}function aG(aL){return aa(aL,true)}function aa(aM,aO){if(E.state.fatArrowAt==E.stream.start){var aL=aO?O:Y;if(aM=="("){return ah(x,aH(")"),av(i,")"),h,s("=>"),aL,y)}else{if(aM=="variable"){return ac(x,i,s("=>"),aL,y)}}}var aN=aO?j:ad;if(b.hasOwnProperty(aM)){return ah(aN)}if(aM=="async"){return ah(ap)}if(aM=="function"){return ah(N,aN)}if(aM=="keyword c"){return ah(aO?am:ak)}if(aM=="("){return ah(aH(")"),ak,aB,s(")"),h,aN)}if(aM=="operator"||aM=="spread"){return ah(aO?aG:ap)}if(aM=="["){return ah(aH("]"),n,h,aN)}if(aM=="{"){return aA(u,"}",null,aN)}if(aM=="quasi"){return ac(R,aN)}if(aM=="new"){return ah(I(aO))}return ah()}function ak(aL){if(aL.match(/[;\}\)\],]/)){return ac()}return ac(ap)}function am(aL){if(aL.match(/[;\}\)\],]/)){return ac()}return ac(aG)}function ad(aL,aM){if(aL==","){return ah(ap)}return j(aL,aM,false)}function j(aL,aN,aP){var aM=aP==false?ad:j;var aO=aP==false?ap:aG;if(aL=="=>"){return ah(x,aP?O:Y,y)}if(aL=="operator"){if(/\+\+|--/.test(aN)){return ah(aM)}if(aN=="?"){return ah(ap,s(":"),aO)}return ah(aO)}if(aL=="quasi"){return ac(R,aM)}if(aL==";"){return}if(aL=="("){return aA(aG,")","call",aM)}if(aL=="."){return ah(an,aM)}if(aL=="["){return ah(aH("]"),ak,s("]"),h,aM)}}function R(aL,aM){if(aL!="quasi"){return ac()}if(aM.slice(aM.length-2)!="${"){return ah(R)}return ah(ap,q)}function q(aL){if(aL=="}"){E.marked="string-2";E.state.tokenize=aE;return ah(R)}}function Y(aL){az(E.stream,E.state);return ac(aL=="{"?aJ:ap)}function O(aL){az(E.stream,E.state);return ac(aL=="{"?aJ:aG)}function I(aL){return function(aM){if(aM=="."){return ah(aL?o:W)}else{return ac(aL?aG:ap)}}}function W(aL,aM){if(aM=="target"){E.marked="keyword";return ah(ad)}}function o(aL,aM){if(aM=="target"){E.marked="keyword";return ah(j)}}function aK(aL){if(aL==":"){return ah(h,aJ)}return ac(ad,s(";"),h)}function an(aL){if(aL=="variable"){E.marked="property";return ah()}}function u(aL,aM){if(aL=="async"){return ah(u)}else{if(aL=="variable"||E.style=="keyword"){E.marked="property";if(aM=="get"||aM=="set"){return ah(J)}return ah(L)}else{if(aL=="number"||aL=="string"){E.marked=aD?"property":(E.style+" property");return ah(L)}else{if(aL=="jsonld-keyword"){return ah(L)}else{if(aL=="["){return ah(ap,s("]"),L)}}}}}}function J(aL){if(aL!="variable"){return ac(L)}E.marked="property";return ah(N)}function L(aL){if(aL==":"){return ah(aG)}if(aL=="("){return ac(N)}}function av(aN,aL){function aM(aP){if(aP==","){var aO=E.state.lexical;if(aO.info=="call"){aO.pos=(aO.pos||0)+1}return ah(aN,aM)}if(aP==aL){return ah()}return ah(s(aL))}return function(aO){if(aO==aL){return ah()}return ac(aN,aM)}}function aA(aO,aL,aN){for(var aM=3;aM<arguments.length;aM++){E.cc.push(arguments[aM])}return ah(aH(aL,aN),av(aO,aL),h)}function z(aL){if(aL=="}"){return ah()
}return ac(aJ,z)}function U(aL){if(g&&aL==":"){return ah(ag)}}function ax(aL,aM){if(aM=="="){return ah(aG)}}function ag(aL){if(aL=="variable"){E.marked="variable-3";return ah()}}function d(){return ac(i,U,ae,Z)}function i(aL,aM){if(aL=="variable"){ay(aM);return ah()}if(aL=="spread"){return ah(i)}if(aL=="["){return aA(i,"]")}if(aL=="{"){return aA(aF,"}")}}function aF(aL,aM){if(aL=="variable"&&!E.stream.match(/^\s*:/,false)){ay(aM);return ah(ae)}if(aL=="variable"){E.marked="property"}if(aL=="spread"){return ah(i)}return ah(s(":"),i,ae)}function ae(aL,aM){if(aM=="="){return ah(aG)}}function Z(aL){if(aL==","){return ah(d)}}function e(aL,aM){if(aL=="keyword b"&&aM=="else"){return ah(aH("form","else"),aJ,h)}}function v(aL){if(aL=="("){return ah(aH(")"),F,s(")"),h)}}function F(aL){if(aL=="var"){return ah(d,s(";"),D)}if(aL==";"){return ah(D)}if(aL=="variable"){return ah(w)}return ac(ap,s(";"),D)}function w(aL,aM){if(aM=="in"||aM=="of"){E.marked="keyword";return ah(ap)}return ah(ad,D)}function D(aL,aM){if(aL==";"){return ah(C)}if(aM=="in"||aM=="of"){E.marked="keyword";return ah(ap)}return ac(ap,s(";"),C)}function C(aL){if(aL!=")"){ah(ap)}}function N(aL,aM){if(aM=="*"){E.marked="keyword";return ah(N)}if(aL=="variable"){ay(aM);return ah(N)}if(aL=="("){return ah(x,aH(")"),av(af,")"),h,aJ,y)}}function af(aL){if(aL=="spread"){return ah(af)}return ac(i,U,ax)}function X(aL,aM){if(aL=="variable"){ay(aM);return ah(P)}}function P(aL,aM){if(aM=="extends"){return ah(ap,P)}if(aL=="{"){return ah(aH("}"),p,h)}}function p(aL,aM){if(aL=="variable"||E.style=="keyword"){if(aM=="static"){E.marked="keyword";return ah(p)}E.marked="property";if(aM=="get"||aM=="set"){return ah(c,N,p)}return ah(N,p)}if(aM=="*"){E.marked="keyword";return ah(p)}if(aL==";"){return ah(p)}if(aL=="}"){return ah()}}function c(aL){if(aL!="variable"){return ac()}E.marked="property";return ah()}function aI(aL,aM){if(aM=="*"){E.marked="keyword";return ah(aj,s(";"))}if(aM=="default"){E.marked="keyword";return ah(ap,s(";"))}return ac(aJ)}function ai(aL){if(aL=="string"){return ah()}return ac(ar,aj)}function ar(aL,aM){if(aL=="{"){return aA(ar,"}")}if(aL=="variable"){ay(aM)}if(aM=="*"){E.marked="keyword"}return ah(k)}function k(aL,aM){if(aM=="as"){E.marked="keyword";return ah(ar)}}function aj(aL,aM){if(aM=="from"){E.marked="keyword";return ah(ap)}}function n(aL){if(aL=="]"){return ah()}return ac(aG,ao)}function ao(aL){if(aL=="for"){return ac(aB,s("]"))}if(aL==","){return ah(av(am,"]"))}return ac(av(aG,"]"))}function aB(aL){if(aL=="for"){return ah(v,aB)}if(aL=="if"){return ah(ap,aB)}}function aq(aM,aL){return aM.lastType=="operator"||aM.lastType==","||Q.test(aL.charAt(0))||/[,.]/.test(aL.charAt(0))}return{startState:function(aM){var aL={tokenize:V,lastType:"sof",cc:[],lexical:new K((aM||0)-l,0,"block",false),localVars:al.localVars,context:al.localVars&&{vars:al.localVars},indented:0};if(al.globalVars&&typeof al.globalVars=="object"){aL.globalVars=al.globalVars}return aL},token:function(aN,aM){if(aN.sol()){if(!aM.lexical.hasOwnProperty("align")){aM.lexical.align=false}aM.indented=aN.indentation();az(aN,aM)}if(aM.tokenize!=aC&&aN.eatSpace()){return null}var aL=aM.tokenize(aN,aM);if(T=="comment"){return aL}aM.lastType=T=="operator"&&(H=="++"||H=="--")?"incdec":T;return f(aM,aL,T,H,aN)},indent:function(aR,aL){if(aR.tokenize==aC){return a.Pass}if(aR.tokenize!=V){return 0}var aQ=aL&&aL.charAt(0),aO=aR.lexical;if(!/^\s*else\b/.test(aL)){for(var aN=aR.cc.length-1;aN>=0;--aN){var aS=aR.cc[aN];if(aS==h){aO=aO.prev}else{if(aS!=e){break}}}}if(aO.type=="stat"&&aQ=="}"){aO=aO.prev}if(B&&aO.type==")"&&aO.prev.type=="stat"){aO=aO.prev}var aP=aO.type,aM=aQ==aP;if(aP=="vardef"){return aO.indented+(aR.lastType=="operator"||aR.lastType==","?aO.info+1:0)}else{if(aP=="form"&&aQ=="{"){return aO.indented}else{if(aP=="form"){return aO.indented+l}else{if(aP=="stat"){return aO.indented+(aq(aR,aL)?B||l:0)}else{if(aO.info=="switch"&&!aM&&al.doubleIndentSwitch!=false){return aO.indented+(/^(?:case|default)\b/.test(aL)?l:2*l)}else{if(aO.align){return aO.column+(aM?0:1)}else{return aO.indented+(aM?0:l)}}}}}}},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:A?null:"/*",blockCommentEnd:A?null:"*/",lineComment:A?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:A?"json":"javascript",jsonldMode:aD,jsonMode:A}});a.registerHelper("wordChars","javascript",/[\w$]/);a.defineMIME("text/javascript","javascript");a.defineMIME("text/ecmascript","javascript");a.defineMIME("application/javascript","javascript");a.defineMIME("application/x-javascript","javascript");a.defineMIME("application/ecmascript","javascript");a.defineMIME("application/json",{name:"javascript",json:true});a.defineMIME("application/x-json",{name:"javascript",json:true});a.defineMIME("application/ld+json",{name:"javascript",jsonld:true});a.defineMIME("text/typescript",{name:"javascript",typescript:true});a.defineMIME("application/typescript",{name:"javascript",typescript:true})});
