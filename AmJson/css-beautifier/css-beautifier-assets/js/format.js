var editor,viewer,formatId;function format(){if(formatId){window.clearTimeout(formatId)}formatId=window.setTimeout(function(){var options,raw,beautified;options={indent:"    "};options.autosemicolon=true;if(typeof editor===undefined){raw=document.getElementById("raw").value}else{raw=editor.getValue()}beautified=cssbeautify(raw,options);if(typeof viewer===undefined){document.getElementById("beautified").value=beautified}else{viewer.setValue(beautified)}formatId=undefined},42)}window.onload=function(){editor=CodeMirror.fromTextArea(document.getElementById("raw"),{lineNumbers:true,matchBrackets:false,lineWrapping:true,tabSize:8,onChange:format});viewer=CodeMirror.fromTextArea(document.getElementById("beautified"),{matchBrackets:false,lineWrapping:true,readOnly:true,});format()};
