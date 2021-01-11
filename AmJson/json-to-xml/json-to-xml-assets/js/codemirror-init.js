var the={use_codemirror:!window.location.href.match(/without-codemirror/),beautify_in_progress:false,editor:null};function run_tests(){var e=new SanityTest;run_javascript_tests(e,Urlencoded,js_beautify,html_beautify,css_beautify);run_css_tests(e,Urlencoded,js_beautify,html_beautify,css_beautify);run_html_tests(e,Urlencoded,js_beautify,html_beautify,css_beautify);JavascriptObfuscator.run_tests(e);P_A_C_K_E_R.run_tests(e);Urlencoded.run_tests(e);MyObfuscate.run_tests(e);var t=e.results_raw().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").replace(/\r/g,"·").replace(/\n/g,"<br>");$("#testresults").html(t).show()}function any(e,t){return e||t}function read_settings_from_cookie(){$("#tabsize").val(any($.cookie("tabsize"),"4"));$("#brace-style").val(any($.cookie("brace-style"),"collapse"));$("#detect-packers").prop("checked",$.cookie("detect-packers")!=="off");$("#max-preserve-newlines").val(any($.cookie("max-preserve-newlines"),"5"));$("#keep-array-indentation").prop("checked",$.cookie("keep-array-indentation")==="on");$("#break-chained-methods").prop("checked",$.cookie("break-chained-methods")==="on");$("#indent-scripts").val(any($.cookie("indent-scripts"),"normal"));$("#space-before-conditional").prop("checked",$.cookie("space-before-conditional")!=="off");$("#wrap-line-length").val(any($.cookie("wrap-line-length"),"0"));$("#unescape-strings").prop("checked",$.cookie("unescape-strings")==="on");$("#jslint-happy").prop("checked",$.cookie("jslint-happy")==="on");$("#end-with-newline").prop("checked",$.cookie("end-with-newline")==="on");$("#indent-inner-html").prop("checked",$.cookie("indent-inner-html")==="on");$("#comma-first").prop("checked",$.cookie("comma-first")==="on");$("#e4x").prop("checked",$.cookie("e4x")==="on")}function store_settings_to_cookie(){var e={expires:360};$.cookie("tabsize",$("#tabsize").val(),e);$.cookie("brace-style",$("#brace-style").val(),e);$.cookie("detect-packers",$("#detect-packers").prop("checked")?"on":"off",e);$.cookie("max-preserve-newlines",$("#max-preserve-newlines").val(),e);$.cookie("keep-array-indentation",$("#keep-array-indentation").prop("checked")?"on":"off",e);$.cookie("break-chained-methods",$("#break-chained-methods").prop("checked")?"on":"off",e);$.cookie("space-before-conditional",$("#space-before-conditional").prop("checked")?"on":"off",e);$.cookie("unescape-strings",$("#unescape-strings").prop("checked")?"on":"off",e);$.cookie("jslint-happy",$("#jslint-happy").prop("checked")?"on":"off",e);$.cookie("end-with-newline",$("#end-with-newline").prop("checked")?"on":"off",e);$.cookie("wrap-line-length",$("#wrap-line-length").val(),e);$.cookie("indent-scripts",$("#indent-scripts").val(),e);$.cookie("indent-inner-html",$("#indent-inner-html").prop("checked")?"on":"off",e);$.cookie("comma-first",$("#comma-first").prop("checked")?"on":"off",e);$.cookie("e4x",$("#e4x").prop("checked")?"on":"off",e)}function unpacker_filter(e){var t="",n="",o="",i=false;do{i=false;if(/^\s*\/\*/.test(e)){i=true;n=e.substr(0,e.indexOf("*/")+2);e=e.substr(n.length).replace(/^\s+/,"");t+=n+"\n"}else if(/^\s*\/\//.test(e)){i=true;n=e.match(/^\s*\/\/.*/)[0];e=e.substr(n.length).replace(/^\s+/,"");t+=n+"\n"}}while(i);var r=[P_A_C_K_E_R,Urlencoded,JavascriptObfuscator];for(var c=0;c<r.length;c++){if(r[c].detect(e)){o=r[c].unpack(e);if(o!=e){e=unpacker_filter(o)}}}return t+e}function beautify(){if(the.beautify_in_progress)return;store_settings_to_cookie();the.beautify_in_progress=true;var e=the.editor?the.editor.getValue():$("#source").val(),t,n={};n.indent_size=$("#tabsize").val();n.indent_char=n.indent_size==1?"\t":" ";n.max_preserve_newlines=$("#max-preserve-newlines").val();n.preserve_newlines=n.max_preserve_newlines!=="-1";n.keep_array_indentation=$("#keep-array-indentation").prop("checked");n.break_chained_methods=$("#break-chained-methods").prop("checked");n.indent_scripts=$("#indent-scripts").val();n.brace_style=$("#brace-style").val()+($("#brace-preserve-inline").prop("checked")?",preserve-inline":"");n.space_before_conditional=$("#space-before-conditional").prop("checked");n.unescape_strings=$("#unescape-strings").prop("checked");n.jslint_happy=$("#jslint-happy").prop("checked");n.end_with_newline=$("#end-with-newline").prop("checked");n.wrap_line_length=$("#wrap-line-length").val();n.indent_inner_html=$("#indent-inner-html").prop("checked");n.comma_first=$("#comma-first").prop("checked");n.e4x=$("#e4x").prop("checked");if(looks_like_html(e)){t=html_beautify(e,n)}else{if($("#detect-packers").prop("checked")){e=unpacker_filter(e)}t=js_beautify(e,n)}if(the.editor){the.editor.setValue(t)}else{$("#source").val(t)}the.beautify_in_progress=false}function looks_like_html(e){var t=e.replace(/^[ \t\n\r]+/,"");return t&&t.substring(0,1)==="<"}try{$(function(){read_settings_from_cookie();var e="\n\n";var t=$("#source")[0];e+=$("#hidden_default_text").text();if(the.use_codemirror&&typeof CodeMirror!=="undefined"){the.editor=CodeMirror.fromTextArea(t,{theme:"default",matchBrackets:true,styleActiveLine:true,lineNumbers:true,extraKeys:{"Alt-F":"findPersistent"}});the.editor.focus();the.editor.setValue(e);$(".CodeMirror").click(function(){if(the.editor.getValue()==e){the.editor.setValue("")}})}else{$("#source").val(e).bind("click focus",function(){if($(this).val()==e){$(this).val("")}}).bind("blur",function(){if(!$(this).val()){$(this).val(e)}})}$(window).bind("keydown",function(e){if(e.ctrlKey&&e.keyCode==13){beautify()}});$(".submit").click(beautify);var n=the.editor;var o=document.getElementById("select_theme");o.onchange=()=>{var e=o.options[o.selectedIndex].textContent;n.setOption("theme",e);location.hash="#"+e};var i=location.hash&&location.hash.slice(1)||document.location.search&&decodeURIComponent(document.location.search.slice(1));if(i){o.value=i;n.setOption("theme",i)}CodeMirror.on(window,"hashchange",function(){var e=location.hash.slice(1);if(e){o.value=e}});var r=$("#hidden_syntax").val();if(r!==""){n.setOption("mode",r)}var c=document.getElementById("btn_compress");if(c){c.onclick=()=>{var e=n.getValue();if(e==""){e=n.toTextArea()}try{var t="";if($("#btn_compress").data("json")){e=e.replace("/* This is just a sample demo. Paste your real code here. */","");t=compressJSON(e)}else{t=e.split("\n").join(" ").replace(/\s+/g," ")}n.setValue(t)}catch(e){console.log(e)}}}var a=document.getElementById("btn_format_sql");if(a){a.onclick=()=>{n.setValue(n.getValue().split("\n").join(" ").replace(/\s+/g," "))}}var s=document.getElementById("btn_xml_parser");if(s){s.onclick=()=>{try{var e='<?xml version="1.0" encoding="UTF-8"?>\n';n.setValue(e+$.json2xml(JSON.parse(n.getValue().replace("/* This is just a sample demo. Paste your real code here. */",""))))}catch(e){}}}n.on("change",function(e,t){$("#origin_content").val(n.getValue())})})}catch(e){console.log(e)}
