var undoStack=[];function mkUndo(t){var e="#"+t+"-submit-undo",a="#"+t+"-text";$(e).click(function(t){t.preventDefault();var n=undoStack.pop();$(a).val(n),0==undoStack.length&&$(e).hide()})}function mkTool(t,e,a){a=a||{};var n="#"+t+"-submit-undo",o="#"+t+"-text";$("#"+t+"-submit").click(function(){var t=$(o).val();if(a.allowEmptyText||t.length){$("#action-error").hide();try{if(a.asyncResultFn)e(t,a.asyncResultFn);else{var r=e(t,a.asyncResultFn);$(o).val(r)}}catch(t){return void(a.exceptionFn&&a.exceptionFn(t))}undoStack.push(t),$(n).show()}}),mkUndo(t)}function mkImageConvertTool(t,e,a,n){if(0!=$("#tool-"+t).length){var o;$("#file-select").on("change",function(t){$("#action-error").hide();var a=t.target.files[0];if(a.type!=e.inputMime)return $("#action-error").show(),void $("#action-error").text("Selected file is not a "+e.inputHumanFormat);o=a,$("#submit").attr("disabled",!1)}),$("#drag-and-drop").on("dragover",function(t){t.preventDefault(),t.stopPropagation(),$("#drag-and-drop").addClass("hover")}),$("#drag-and-drop").on("dragenter",function(t){t.preventDefault(),t.stopPropagation(),$("#drag-and-drop").addClass("hover")}),$("#drag-and-drop").on("dragleave",function(t){t.preventDefault(),t.stopPropagation(),$("#drag-and-drop").removeClass("hover")}),$("#drag-and-drop").on("dragend",function(t){t.preventDefault(),t.stopPropagation(),$("#drag-and-drop").removeClass("hover")}),$("#drag-and-drop").on("drop",function(t){t.preventDefault(),t.stopPropagation(),$("#drag-and-drop").removeClass("hover"),$("#action-error").hide(),t.dataTransfer=t.originalEvent.dataTransfer;var a=t.dataTransfer.files[0];if(a.type!=e.inputMime)return $("#action-error").show(),void $("#action-error").text("Selected file is not a "+e.inputHumanFormat);$("#drag-and-drop-selected").text("Selected "+a.name),o=a,$("#submit").attr("disabled",!1)}),$("#submit").click(function(){var t=new FileReader;t.onload=function(){var e=new Image;e.onload=function(){var t=$("<canvas>")[0];t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toBlob(function(t){var e=o.name.lastIndexOf(".");if(-1!=e)var n=o.name.substring(0,e)+"."+a.outputExt;else n=o.name+"."+optputOpts.outputExt;saveAs(t,n)},a.outputMime)},e.src=t.result},t.readAsDataURL(o)})}}$(function(){$("#copy-to-clipboard").click(function(t){t.preventDefault(),$("#tool-implementation textarea").select(),document.execCommand("copy")})});
