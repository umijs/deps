module.exports=(()=>{var r={391:(r,e,a)=>{var n=a(188);var t={};for(var o in n){if(n.hasOwnProperty(o)){t[n[o]]=o}}var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i){if(i.hasOwnProperty(l)){if(!("channels"in i[l])){throw new Error("missing channels property: "+l)}if(!("labels"in i[l])){throw new Error("missing channel labels property: "+l)}if(i[l].labels.length!==i[l].channels){throw new Error("channel and label counts mismatch: "+l)}var s=i[l].channels;var u=i[l].labels;delete i[l].channels;delete i[l].labels;Object.defineProperty(i[l],"channels",{value:s});Object.defineProperty(i[l],"labels",{value:u})}}i.rgb.hsl=function(r){var e=r[0]/255;var a=r[1]/255;var n=r[2]/255;var t=Math.min(e,a,n);var o=Math.max(e,a,n);var i=o-t;var l;var s;var u;if(o===t){l=0}else if(e===o){l=(a-n)/i}else if(a===o){l=2+(n-e)/i}else if(n===o){l=4+(e-a)/i}l=Math.min(l*60,360);if(l<0){l+=360}u=(t+o)/2;if(o===t){s=0}else if(u<=.5){s=i/(o+t)}else{s=i/(2-o-t)}return[l,s*100,u*100]};i.rgb.hsv=function(r){var e;var a;var n;var t;var o;var i=r[0]/255;var l=r[1]/255;var s=r[2]/255;var u=Math.max(i,l,s);var v=u-Math.min(i,l,s);var h=function(r){return(u-r)/6/v+1/2};if(v===0){t=o=0}else{o=v/u;e=h(i);a=h(l);n=h(s);if(i===u){t=n-a}else if(l===u){t=1/3+e-n}else if(s===u){t=2/3+a-e}if(t<0){t+=1}else if(t>1){t-=1}}return[t*360,o*100,u*100]};i.rgb.hwb=function(r){var e=r[0];var a=r[1];var n=r[2];var t=i.rgb.hsl(r)[0];var o=1/255*Math.min(e,Math.min(a,n));n=1-1/255*Math.max(e,Math.max(a,n));return[t,o*100,n*100]};i.rgb.cmyk=function(r){var e=r[0]/255;var a=r[1]/255;var n=r[2]/255;var t;var o;var i;var l;l=Math.min(1-e,1-a,1-n);t=(1-e-l)/(1-l)||0;o=(1-a-l)/(1-l)||0;i=(1-n-l)/(1-l)||0;return[t*100,o*100,i*100,l*100]};function comparativeDistance(r,e){return Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2)}i.rgb.keyword=function(r){var e=t[r];if(e){return e}var a=Infinity;var o;for(var i in n){if(n.hasOwnProperty(i)){var l=n[i];var s=comparativeDistance(r,l);if(s<a){a=s;o=i}}}return o};i.keyword.rgb=function(r){return n[r]};i.rgb.xyz=function(r){var e=r[0]/255;var a=r[1]/255;var n=r[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;var t=e*.4124+a*.3576+n*.1805;var o=e*.2126+a*.7152+n*.0722;var i=e*.0193+a*.1192+n*.9505;return[t*100,o*100,i*100]};i.rgb.lab=function(r){var e=i.rgb.xyz(r);var a=e[0];var n=e[1];var t=e[2];var o;var l;var s;a/=95.047;n/=100;t/=108.883;a=a>.008856?Math.pow(a,1/3):7.787*a+16/116;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;o=116*n-16;l=500*(a-n);s=200*(n-t);return[o,l,s]};i.hsl.rgb=function(r){var e=r[0]/360;var a=r[1]/100;var n=r[2]/100;var t;var o;var i;var l;var s;if(a===0){s=n*255;return[s,s,s]}if(n<.5){o=n*(1+a)}else{o=n+a-n*a}t=2*n-o;l=[0,0,0];for(var u=0;u<3;u++){i=e+1/3*-(u-1);if(i<0){i++}if(i>1){i--}if(6*i<1){s=t+(o-t)*6*i}else if(2*i<1){s=o}else if(3*i<2){s=t+(o-t)*(2/3-i)*6}else{s=t}l[u]=s*255}return l};i.hsl.hsv=function(r){var e=r[0];var a=r[1]/100;var n=r[2]/100;var t=a;var o=Math.max(n,.01);var i;var l;n*=2;a*=n<=1?n:2-n;t*=o<=1?o:2-o;l=(n+a)/2;i=n===0?2*t/(o+t):2*a/(n+a);return[e,i*100,l*100]};i.hsv.rgb=function(r){var e=r[0]/60;var a=r[1]/100;var n=r[2]/100;var t=Math.floor(e)%6;var o=e-Math.floor(e);var i=255*n*(1-a);var l=255*n*(1-a*o);var s=255*n*(1-a*(1-o));n*=255;switch(t){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}};i.hsv.hsl=function(r){var e=r[0];var a=r[1]/100;var n=r[2]/100;var t=Math.max(n,.01);var o;var i;var l;l=(2-a)*n;o=(2-a)*t;i=a*t;i/=o<=1?o:2-o;i=i||0;l/=2;return[e,i*100,l*100]};i.hwb.rgb=function(r){var e=r[0]/360;var a=r[1]/100;var n=r[2]/100;var t=a+n;var o;var i;var l;var s;if(t>1){a/=t;n/=t}o=Math.floor(6*e);i=1-n;l=6*e-o;if((o&1)!==0){l=1-l}s=a+l*(i-a);var u;var v;var h;switch(o){default:case 6:case 0:u=i;v=s;h=a;break;case 1:u=s;v=i;h=a;break;case 2:u=a;v=i;h=s;break;case 3:u=a;v=s;h=i;break;case 4:u=s;v=a;h=i;break;case 5:u=i;v=a;h=s;break}return[u*255,v*255,h*255]};i.cmyk.rgb=function(r){var e=r[0]/100;var a=r[1]/100;var n=r[2]/100;var t=r[3]/100;var o;var i;var l;o=1-Math.min(1,e*(1-t)+t);i=1-Math.min(1,a*(1-t)+t);l=1-Math.min(1,n*(1-t)+t);return[o*255,i*255,l*255]};i.xyz.rgb=function(r){var e=r[0]/100;var a=r[1]/100;var n=r[2]/100;var t;var o;var i;t=e*3.2406+a*-1.5372+n*-.4986;o=e*-.9689+a*1.8758+n*.0415;i=e*.0557+a*-.204+n*1.057;t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*12.92;o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92;i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92;t=Math.min(Math.max(0,t),1);o=Math.min(Math.max(0,o),1);i=Math.min(Math.max(0,i),1);return[t*255,o*255,i*255]};i.xyz.lab=function(r){var e=r[0];var a=r[1];var n=r[2];var t;var o;var i;e/=95.047;a/=100;n/=108.883;e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;a=a>.008856?Math.pow(a,1/3):7.787*a+16/116;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=116*a-16;o=500*(e-a);i=200*(a-n);return[t,o,i]};i.lab.xyz=function(r){var e=r[0];var a=r[1];var n=r[2];var t;var o;var i;o=(e+16)/116;t=a/500+o;i=o-n/200;var l=Math.pow(o,3);var s=Math.pow(t,3);var u=Math.pow(i,3);o=l>.008856?l:(o-16/116)/7.787;t=s>.008856?s:(t-16/116)/7.787;i=u>.008856?u:(i-16/116)/7.787;t*=95.047;o*=100;i*=108.883;return[t,o,i]};i.lab.lch=function(r){var e=r[0];var a=r[1];var n=r[2];var t;var o;var i;t=Math.atan2(n,a);o=t*360/2/Math.PI;if(o<0){o+=360}i=Math.sqrt(a*a+n*n);return[e,i,o]};i.lch.lab=function(r){var e=r[0];var a=r[1];var n=r[2];var t;var o;var i;i=n/360*2*Math.PI;t=a*Math.cos(i);o=a*Math.sin(i);return[e,t,o]};i.rgb.ansi16=function(r){var e=r[0];var a=r[1];var n=r[2];var t=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];t=Math.round(t/50);if(t===0){return 30}var o=30+(Math.round(n/255)<<2|Math.round(a/255)<<1|Math.round(e/255));if(t===2){o+=60}return o};i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])};i.rgb.ansi256=function(r){var e=r[0];var a=r[1];var n=r[2];if(e===a&&a===n){if(e<8){return 16}if(e>248){return 231}return Math.round((e-8)/247*24)+232}var t=16+36*Math.round(e/255*5)+6*Math.round(a/255*5)+Math.round(n/255*5);return t};i.ansi16.rgb=function(r){var e=r%10;if(e===0||e===7){if(r>50){e+=3.5}e=e/10.5*255;return[e,e,e]}var a=(~~(r>50)+1)*.5;var n=(e&1)*a*255;var t=(e>>1&1)*a*255;var o=(e>>2&1)*a*255;return[n,t,o]};i.ansi256.rgb=function(r){if(r>=232){var e=(r-232)*10+8;return[e,e,e]}r-=16;var a;var n=Math.floor(r/36)/5*255;var t=Math.floor((a=r%36)/6)/5*255;var o=a%6/5*255;return[n,t,o]};i.rgb.hex=function(r){var e=((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255);var a=e.toString(16).toUpperCase();return"000000".substring(a.length)+a};i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e){return[0,0,0]}var a=e[0];if(e[0].length===3){a=a.split("").map(function(r){return r+r}).join("")}var n=parseInt(a,16);var t=n>>16&255;var o=n>>8&255;var i=n&255;return[t,o,i]};i.rgb.hcg=function(r){var e=r[0]/255;var a=r[1]/255;var n=r[2]/255;var t=Math.max(Math.max(e,a),n);var o=Math.min(Math.min(e,a),n);var i=t-o;var l;var s;if(i<1){l=o/(1-i)}else{l=0}if(i<=0){s=0}else if(t===e){s=(a-n)/i%6}else if(t===a){s=2+(n-e)/i}else{s=4+(e-a)/i+4}s/=6;s%=1;return[s*360,i*100,l*100]};i.hsl.hcg=function(r){var e=r[1]/100;var a=r[2]/100;var n=1;var t=0;if(a<.5){n=2*e*a}else{n=2*e*(1-a)}if(n<1){t=(a-.5*n)/(1-n)}return[r[0],n*100,t*100]};i.hsv.hcg=function(r){var e=r[1]/100;var a=r[2]/100;var n=e*a;var t=0;if(n<1){t=(a-n)/(1-n)}return[r[0],n*100,t*100]};i.hcg.rgb=function(r){var e=r[0]/360;var a=r[1]/100;var n=r[2]/100;if(a===0){return[n*255,n*255,n*255]}var t=[0,0,0];var o=e%1*6;var i=o%1;var l=1-i;var s=0;switch(Math.floor(o)){case 0:t[0]=1;t[1]=i;t[2]=0;break;case 1:t[0]=l;t[1]=1;t[2]=0;break;case 2:t[0]=0;t[1]=1;t[2]=i;break;case 3:t[0]=0;t[1]=l;t[2]=1;break;case 4:t[0]=i;t[1]=0;t[2]=1;break;default:t[0]=1;t[1]=0;t[2]=l}s=(1-a)*n;return[(a*t[0]+s)*255,(a*t[1]+s)*255,(a*t[2]+s)*255]};i.hcg.hsv=function(r){var e=r[1]/100;var a=r[2]/100;var n=e+a*(1-e);var t=0;if(n>0){t=e/n}return[r[0],t*100,n*100]};i.hcg.hsl=function(r){var e=r[1]/100;var a=r[2]/100;var n=a*(1-e)+.5*e;var t=0;if(n>0&&n<.5){t=e/(2*n)}else if(n>=.5&&n<1){t=e/(2*(1-n))}return[r[0],t*100,n*100]};i.hcg.hwb=function(r){var e=r[1]/100;var a=r[2]/100;var n=e+a*(1-e);return[r[0],(n-e)*100,(1-n)*100]};i.hwb.hcg=function(r){var e=r[1]/100;var a=r[2]/100;var n=1-a;var t=n-e;var o=0;if(t<1){o=(n-t)/(1-t)}return[r[0],t*100,o*100]};i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]};i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]};i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]};i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]};i.gray.hwb=function(r){return[0,100,r[0]]};i.gray.cmyk=function(r){return[0,0,0,r[0]]};i.gray.lab=function(r){return[r[0],0,0]};i.gray.hex=function(r){var e=Math.round(r[0]/100*255)&255;var a=(e<<16)+(e<<8)+e;var n=a.toString(16).toUpperCase();return"000000".substring(n.length)+n};i.rgb.gray=function(r){var e=(r[0]+r[1]+r[2])/3;return[e/255*100]}},931:(r,e,a)=>{var n=a(391);var t=a(880);var o={};var i=Object.keys(n);function wrapRaw(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}return r(e)};if("conversion"in r){e.conversion=r.conversion}return e}function wrapRounded(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}var a=r(e);if(typeof a==="object"){for(var n=a.length,t=0;t<n;t++){a[t]=Math.round(a[t])}}return a};if("conversion"in r){e.conversion=r.conversion}return e}i.forEach(function(r){o[r]={};Object.defineProperty(o[r],"channels",{value:n[r].channels});Object.defineProperty(o[r],"labels",{value:n[r].labels});var e=t(r);var a=Object.keys(e);a.forEach(function(a){var n=e[a];o[r][a]=wrapRounded(n);o[r][a].raw=wrapRaw(n)})});r.exports=o},188:r=>{"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},880:(r,e,a)=>{var n=a(391);function buildGraph(){var r={};var e=Object.keys(n);for(var a=e.length,t=0;t<a;t++){r[e[t]]={distance:-1,parent:null}}return r}function deriveBFS(r){var e=buildGraph();var a=[r];e[r].distance=0;while(a.length){var t=a.pop();var o=Object.keys(n[t]);for(var i=o.length,l=0;l<i;l++){var s=o[l];var u=e[s];if(u.distance===-1){u.distance=e[t].distance+1;u.parent=t;a.unshift(s)}}}return e}function link(r,e){return function(a){return e(r(a))}}function wrapConversion(r,e){var a=[e[r].parent,r];var t=n[e[r].parent][r];var o=e[r].parent;while(e[o].parent){a.unshift(e[o].parent);t=link(n[e[o].parent][o],t);o=e[o].parent}t.conversion=a;return t}r.exports=function(r){var e=deriveBFS(r);var a={};var n=Object.keys(e);for(var t=n.length,o=0;o<t;o++){var i=n[o];var l=e[i];if(l.parent===null){continue}a[i]=wrapConversion(i,e)}return a}},510:r=>{"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},69:(r,e,a)=>{var n=a(510);var t=a(679);var o={};for(var i in n){if(n.hasOwnProperty(i)){o[n[i]]=i}}var l=r.exports={to:{},get:{}};l.get=function(r){var e=r.substring(0,3).toLowerCase();var a;var n;switch(e){case"hsl":a=l.get.hsl(r);n="hsl";break;case"hwb":a=l.get.hwb(r);n="hwb";break;default:a=l.get.rgb(r);n="rgb";break}if(!a){return null}return{model:n,value:a}};l.get.rgb=function(r){if(!r){return null}var e=/^#([a-f0-9]{3,4})$/i;var a=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i;var t=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var i=/(\D+)/;var l=[0,0,0,1];var s;var u;var v;if(s=r.match(a)){v=s[2];s=s[1];for(u=0;u<3;u++){var h=u*2;l[u]=parseInt(s.slice(h,h+2),16)}if(v){l[3]=parseInt(v,16)/255}}else if(s=r.match(e)){s=s[1];v=s[3];for(u=0;u<3;u++){l[u]=parseInt(s[u]+s[u],16)}if(v){l[3]=parseInt(v+v,16)/255}}else if(s=r.match(t)){for(u=0;u<3;u++){l[u]=parseInt(s[u+1],0)}if(s[4]){l[3]=parseFloat(s[4])}}else if(s=r.match(o)){for(u=0;u<3;u++){l[u]=Math.round(parseFloat(s[u+1])*2.55)}if(s[4]){l[3]=parseFloat(s[4])}}else if(s=r.match(i)){if(s[1]==="transparent"){return[0,0,0,0]}l=n[s[1]];if(!l){return null}l[3]=1;return l}else{return null}for(u=0;u<3;u++){l[u]=clamp(l[u],0,255)}l[3]=clamp(l[3],0,1);return l};l.get.hsl=function(r){if(!r){return null}var e=/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var a=r.match(e);if(a){var n=parseFloat(a[4]);var t=(parseFloat(a[1])+360)%360;var o=clamp(parseFloat(a[2]),0,100);var i=clamp(parseFloat(a[3]),0,100);var l=clamp(isNaN(n)?1:n,0,1);return[t,o,i,l]}return null};l.get.hwb=function(r){if(!r){return null}var e=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var a=r.match(e);if(a){var n=parseFloat(a[4]);var t=(parseFloat(a[1])%360+360)%360;var o=clamp(parseFloat(a[2]),0,100);var i=clamp(parseFloat(a[3]),0,100);var l=clamp(isNaN(n)?1:n,0,1);return[t,o,i,l]}return null};l.to.hex=function(){var r=t(arguments);return"#"+hexDouble(r[0])+hexDouble(r[1])+hexDouble(r[2])+(r[3]<1?hexDouble(Math.round(r[3]*255)):"")};l.to.rgb=function(){var r=t(arguments);return r.length<4||r[3]===1?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"};l.to.rgb.percent=function(){var r=t(arguments);var e=Math.round(r[0]/255*100);var a=Math.round(r[1]/255*100);var n=Math.round(r[2]/255*100);return r.length<4||r[3]===1?"rgb("+e+"%, "+a+"%, "+n+"%)":"rgba("+e+"%, "+a+"%, "+n+"%, "+r[3]+")"};l.to.hsl=function(){var r=t(arguments);return r.length<4||r[3]===1?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"};l.to.hwb=function(){var r=t(arguments);var e="";if(r.length>=4&&r[3]!==1){e=", "+r[3]}return"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"};l.to.keyword=function(r){return o[r.slice(0,3)]};function clamp(r,e,a){return Math.min(Math.max(e,r),a)}function hexDouble(r){var e=r.toString(16).toUpperCase();return e.length<2?"0"+e:e}},177:(r,e,a)=>{"use strict";var n=a(69);var t=a(931);var o=[].slice;var i=["keyword","gray","hex"];var l={};Object.keys(t).forEach(function(r){l[o.call(t[r].labels).sort().join("")]=r});var s={};function Color(r,e){if(!(this instanceof Color)){return new Color(r,e)}if(e&&e in i){e=null}if(e&&!(e in t)){throw new Error("Unknown model: "+e)}var a;var u;if(r==null){this.model="rgb";this.color=[0,0,0];this.valpha=1}else if(r instanceof Color){this.model=r.model;this.color=r.color.slice();this.valpha=r.valpha}else if(typeof r==="string"){var v=n.get(r);if(v===null){throw new Error("Unable to parse color from string: "+r)}this.model=v.model;u=t[this.model].channels;this.color=v.value.slice(0,u);this.valpha=typeof v.value[u]==="number"?v.value[u]:1}else if(r.length){this.model=e||"rgb";u=t[this.model].channels;var h=o.call(r,0,u);this.color=zeroArray(h,u);this.valpha=typeof r[u]==="number"?r[u]:1}else if(typeof r==="number"){r&=16777215;this.model="rgb";this.color=[r>>16&255,r>>8&255,r&255];this.valpha=1}else{this.valpha=1;var c=Object.keys(r);if("alpha"in r){c.splice(c.indexOf("alpha"),1);this.valpha=typeof r.alpha==="number"?r.alpha:0}var f=c.sort().join("");if(!(f in l)){throw new Error("Unable to parse color from object: "+JSON.stringify(r))}this.model=l[f];var g=t[this.model].labels;var d=[];for(a=0;a<g.length;a++){d.push(r[g[a]])}this.color=zeroArray(d)}if(s[this.model]){u=t[this.model].channels;for(a=0;a<u;a++){var p=s[this.model][a];if(p){this.color[a]=p(this.color[a])}}}this.valpha=Math.max(0,Math.min(1,this.valpha));if(Object.freeze){Object.freeze(this)}}Color.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in n.to?this:this.rgb();e=e.round(typeof r==="number"?r:1);var a=e.valpha===1?e.color:e.color.concat(this.valpha);return n.to[e.model](a)},percentString:function(r){var e=this.rgb().round(typeof r==="number"?r:1);var a=e.valpha===1?e.color:e.color.concat(this.valpha);return n.to.rgb.percent(a)},array:function(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object:function(){var r={};var e=t[this.model].channels;var a=t[this.model].labels;for(var n=0;n<e;n++){r[a[n]]=this.color[n]}if(this.valpha!==1){r.alpha=this.valpha}return r},unitArray:function(){var r=this.rgb().color;r[0]/=255;r[1]/=255;r[2]/=255;if(this.valpha!==1){r.push(this.valpha)}return r},unitObject:function(){var r=this.rgb().object();r.r/=255;r.g/=255;r.b/=255;if(this.valpha!==1){r.alpha=this.valpha}return r},round:function(r){r=Math.max(r||0,0);return new Color(this.color.map(roundToPlace(r)).concat(this.valpha),this.model)},alpha:function(r){if(arguments.length){return new Color(this.color.concat(Math.max(0,Math.min(1,r))),this.model)}return this.valpha},red:getset("rgb",0,maxfn(255)),green:getset("rgb",1,maxfn(255)),blue:getset("rgb",2,maxfn(255)),hue:getset(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:getset("hsl",1,maxfn(100)),lightness:getset("hsl",2,maxfn(100)),saturationv:getset("hsv",1,maxfn(100)),value:getset("hsv",2,maxfn(100)),chroma:getset("hcg",1,maxfn(100)),gray:getset("hcg",2,maxfn(100)),white:getset("hwb",1,maxfn(100)),wblack:getset("hwb",2,maxfn(100)),cyan:getset("cmyk",0,maxfn(100)),magenta:getset("cmyk",1,maxfn(100)),yellow:getset("cmyk",2,maxfn(100)),black:getset("cmyk",3,maxfn(100)),x:getset("xyz",0,maxfn(100)),y:getset("xyz",1,maxfn(100)),z:getset("xyz",2,maxfn(100)),l:getset("lab",0,maxfn(100)),a:getset("lab",1),b:getset("lab",2),keyword:function(r){if(arguments.length){return new Color(r)}return t[this.model].keyword(this.color)},hex:function(r){if(arguments.length){return new Color(r)}return n.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(r[0]&255)<<16|(r[1]&255)<<8|r[2]&255},luminosity:function(){var r=this.rgb().color;var e=[];for(var a=0;a<r.length;a++){var n=r[a]/255;e[a]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity();var a=r.luminosity();if(e>a){return(e+.05)/(a+.05)}return(a+.05)/(e+.05)},level:function(r){var e=this.contrast(r);if(e>=7.1){return"AAA"}return e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;var e=(r[0]*299+r[1]*587+r[2]*114)/1e3;return e<128},isLight:function(){return!this.isDark()},negate:function(){var r=this.rgb();for(var e=0;e<3;e++){r.color[e]=255-r.color[e]}return r},lighten:function(r){var e=this.hsl();e.color[2]+=e.color[2]*r;return e},darken:function(r){var e=this.hsl();e.color[2]-=e.color[2]*r;return e},saturate:function(r){var e=this.hsl();e.color[1]+=e.color[1]*r;return e},desaturate:function(r){var e=this.hsl();e.color[1]-=e.color[1]*r;return e},whiten:function(r){var e=this.hwb();e.color[1]+=e.color[1]*r;return e},blacken:function(r){var e=this.hwb();e.color[2]+=e.color[2]*r;return e},grayscale:function(){var r=this.rgb().color;var e=r[0]*.3+r[1]*.59+r[2]*.11;return Color.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl();var a=e.color[0];a=(a+r)%360;a=a<0?360+a:a;e.color[0]=a;return e},mix:function(r,e){if(!r||!r.rgb){throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r)}var a=r.rgb();var n=this.rgb();var t=e===undefined?.5:e;var o=2*t-1;var i=a.alpha()-n.alpha();var l=((o*i===-1?o:(o+i)/(1+o*i))+1)/2;var s=1-l;return Color.rgb(l*a.red()+s*n.red(),l*a.green()+s*n.green(),l*a.blue()+s*n.blue(),a.alpha()*t+n.alpha()*(1-t))}};Object.keys(t).forEach(function(r){if(i.indexOf(r)!==-1){return}var e=t[r].channels;Color.prototype[r]=function(){if(this.model===r){return new Color(this)}if(arguments.length){return new Color(arguments,r)}var a=typeof arguments[e]==="number"?e:this.valpha;return new Color(assertArray(t[this.model][r].raw(this.color)).concat(a),r)};Color[r]=function(a){if(typeof a==="number"){a=zeroArray(o.call(arguments),e)}return new Color(a,r)}});function roundTo(r,e){return Number(r.toFixed(e))}function roundToPlace(r){return function(e){return roundTo(e,r)}}function getset(r,e,a){r=Array.isArray(r)?r:[r];r.forEach(function(r){(s[r]||(s[r]=[]))[e]=a});r=r[0];return function(n){var t;if(arguments.length){if(a){n=a(n)}t=this[r]();t.color[e]=n;return t}t=this[r]().color[e];if(a){t=a(t)}return t}}function maxfn(r){return function(e){return Math.max(0,Math.min(r,e))}}function assertArray(r){return Array.isArray(r)?r:[r]}function zeroArray(r,e){for(var a=0;a<e;a++){if(typeof r[a]!=="number"){r[a]=0}}return r}r.exports=Color},679:(r,e,a)=>{"use strict";var n=a(542);var t=Array.prototype.concat;var o=Array.prototype.slice;var i=r.exports=function swizzle(r){var e=[];for(var a=0,i=r.length;a<i;a++){var l=r[a];if(n(l)){e=t.call(e,o.call(l))}else{e.push(l)}}return e};i.wrap=function(r){return function(){return r(i(arguments))}}},542:r=>{r.exports=function isArrayish(r){if(!r||typeof r==="string"){return false}return r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&r.constructor.name!=="String")}}};var e={};function __nccwpck_require__(a){if(e[a]){return e[a].exports}var n=e[a]={exports:{}};var t=true;try{r[a](n,n.exports,__nccwpck_require__);t=false}finally{if(t)delete e[a]}return n.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(177)})();