function main(){try{var text=document.getElementById('input-textarea').value;var textType='json';if(text){var beans;if(textType==='json'){beans=getBeanFieldFromJson(text);}else if(textType==='sql'){alert("还没实现");}
    $(".result-list").html("");$.each(beans,function(i,v){var beanText=toBeanText(v);var textCss="";if(i!=0){textCss="small-text";}
        if(i==1){$(".result-list").append("<p class='more-class-tip'>below is the more class contain in the basic class</p>")}
        var html='<div><textarea class="result '+textCss+'" >'+beanText+'</textarea></div>';$(".result-list").append(html);})
    initCopyBtn();$(".error-tip").html("").addClass("hide");}}
catch(err){var tip="";if(err.message.indexOf("Parse error on line")!=-1){tip=err.message;}
else{tip="parse error,makesure the json is right";}
    $(".error-tip").html(tip).removeClass("hide");}}
function toBeanText(bean){var beanFields=bean.val;var className=bean.name;var importText="";var fieldText="";var setterText="";var typeSet={};var shoudImportJackson=false;var tpl=document.getElementById('getset-templ').innerHTML;for(key in beanFields){var camelKey=camelCase(key);if(camelKey!=key){fieldText+='   @JsonProperty("'+key+'")\n';shoudImportJackson=true;}
    fieldText+="   private "+beanFields[key]+" "+camelKey+";\n";var type=beanFields[key];if(type.indexOf("List<")>-1){type=beanFields[key].replace('List<',"");type=type.replace('>',"");typeSet["List"]='true';}
    typeSet[type]='true';var tplMap={a:camelKey,A:firstToUpperCase(camelKey),T:beanFields[key]};setterText+=tpl.replace(/a|A|T/g,function(matched){return tplMap[matched];});}
    for(t in typeSet){if(importMap[t]){importText+="import "+importMap[t]+";\n";}}
    if(shoudImportJackson){importText+="import org.codehaus.jackson.annotate.JsonIgnoreProperties;\nimport org.codehaus.jackson.annotate.JsonProperty;"}
    var packageName=document.getElementById('package-input').value;if(packageName){importText="package "+packageName+";\n"+importText;}
    return importText+"\n\n   \npublic class "+className+" {\n\n"+fieldText+setterText+"\n}";}
function getBeanFieldFromJson(text){var jsonObject=null;text=trimStr(text);jsonlint.parse(text);if(text[0]==="["&&text[text.length-1]==="]"){text='{ "list": '+text+'}';jsonObject=JSON.parse(text).list[0];}else{jsonObject=JSON.parse(text);}
    var bean={};var attrClassAry=[];for(key in jsonObject){var val=jsonObject[key];bean[key]=getTypeFromJsonVal(val,key,attrClassAry);}
    var className=document.getElementById("class-input").value;if(!className){className="A";}
    else{className=camelCaseWithFirstCharUpper(className);}
    bean={name:className,val:bean};return $.merge([bean],attrClassAry);}
function getTypeFromJsonVal(val,key,attrClassAry){if(val&&val.replace){val=val.replace(/ /g,"");}
    var typeofStr=typeof(val);if(typeofStr==='number'){if(isInt(val)){return"int";}else{return"double";}}else if(typeofStr==='boolean'){return typeofStr;}else if(isDate(val)){return"Date";}else if(!val){return"String";}
    else if(typeofStr==='string'){return"String";}else{if(isArray(val)){var type=getTypeFromJsonVal(val[0],key,attrClassAry);return"List<"+type+">";}else{var typeName=camelCaseWithFirstCharUpper(key);var bean={};for(key in val){var fieldValue=val[key];bean[key]=getTypeFromJsonVal(fieldValue,key,attrClassAry);}
        attrClassAry.push({name:typeName,val:bean});return typeName;}}}
function initCopyBtn(){$(".copy-button").each(function(i,v){var client=new ZeroClipboard(v);client.on("copy",function(event){var clipboard=event.clipboardData;var data=$(v).siblings("textarea").val();clipboard.setData("text/plain",data);alert("copy success")});})}
var importMap={'Date':'java.util.Date','List':'java.util.List'}
document.addEventListener("DOMContentLoaded",function(event){var area=document.getElementById('input-textarea');area.innerHTML=document.getElementById('input-example').innerHTML;main();$("#input-textarea,.config input").live("change keyup paste",function(){main();});})
