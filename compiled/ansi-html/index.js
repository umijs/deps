module.exports=(()=>{"use strict";var r={137:r=>{r.exports=ansiHTML;var t=/(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;var e={reset:["fff","000"],black:"000",red:"ff0000",green:"209805",yellow:"e8bf03",blue:"0000ff",magenta:"ff00ff",cyan:"00ffee",lightgrey:"f0f0f0",darkgrey:"888"};var n={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"lightgrey"};var a={1:"font-weight:bold",2:"opacity:0.5",3:"<i>",4:"<u>",8:"display:none",9:"<del>"};var i={23:"</i>",24:"</u>",29:"</del>"};[0,21,22,27,28,39,49].forEach(function(r){i[r]="</span>"});function ansiHTML(r){if(!t.test(r)){return r}var e=[];var n=r.replace(/\033\[(\d+)*m/g,function(r,t){var n=a[t];if(n){if(!!~e.indexOf(t)){e.pop();return"</span>"}e.push(t);return n[0]==="<"?n:'<span style="'+n+';">'}var s=i[t];if(s){e.pop();return s}return""});var s=e.length;s>0&&(n+=Array(s+1).join("</span>"));return n}ansiHTML.setColors=function(r){if(typeof r!=="object"){throw new Error("`colors` parameter must be an Object.")}var t={};for(var n in e){var a=r.hasOwnProperty(n)?r[n]:null;if(!a){t[n]=e[n];continue}if("reset"===n){if(typeof a==="string"){a=[a]}if(!Array.isArray(a)||a.length===0||a.some(function(r){return typeof r!=="string"})){throw new Error("The value of `"+n+"` property must be an Array and each item could only be a hex string, e.g.: FF0000")}var i=e[n];if(!a[0]){a[0]=i[0]}if(a.length===1||!a[1]){a=[a[0]];a.push(i[1])}a=a.slice(0,2)}else if(typeof a!=="string"){throw new Error("The value of `"+n+"` property must be a hex string, e.g.: FF0000")}t[n]=a}_setTags(t)};ansiHTML.reset=function(){_setTags(e)};ansiHTML.tags={};if(Object.defineProperty){Object.defineProperty(ansiHTML.tags,"open",{get:function(){return a}});Object.defineProperty(ansiHTML.tags,"close",{get:function(){return i}})}else{ansiHTML.tags.open=a;ansiHTML.tags.close=i}function _setTags(r){a["0"]="font-weight:normal;opacity:1;color:#"+r.reset[0]+";background:#"+r.reset[1];a["7"]="color:#"+r.reset[1]+";background:#"+r.reset[0];a["90"]="color:#"+r.darkgrey;for(var t in n){var e=n[t];var i=r[e]||"000";a[t]="color:#"+i;t=parseInt(t);a[(t+10).toString()]="background:#"+i}}ansiHTML.reset()}};var t={};function __nccwpck_require__(e){if(t[e]){return t[e].exports}var n=t[e]={exports:{}};var a=true;try{r[e](n,n.exports,__nccwpck_require__);a=false}finally{if(a)delete t[e]}return n.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(137)})();