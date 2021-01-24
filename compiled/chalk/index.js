module.exports=(()=>{var e={68:(e,t,n)=>{"use strict";e=n.nmd(e);const r=(e,t)=>(...n)=>{const r=e(...n);return`[${r+t}m`};const o=(e,t)=>(...n)=>{const r=e(...n);return`[${38+t};5;${r}m`};const s=(e,t)=>(...n)=>{const r=e(...n);return`[${38+t};2;${r[0]};${r[1]};${r[2]}m`};const l=e=>e;const c=(e,t,n)=>[e,t,n];const i=(e,t,n)=>{Object.defineProperty(e,t,{get:()=>{const r=n();Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true});return r},enumerable:true,configurable:true})};let a;const u=(e,t,r,o)=>{if(a===undefined){a=n(53)}const s=o?10:0;const l={};for(const[n,o]of Object.entries(a)){const c=n==="ansi16"?"ansi":n;if(n===t){l[c]=e(r,s)}else if(typeof o==="object"){l[c]=e(o[t],s)}}return l};function assembleStyles(){const e=new Map;const t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright;t.bgColor.bgGray=t.bgColor.bgBlackBright;t.color.grey=t.color.blackBright;t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(const[n,r]of Object.entries(t)){for(const[n,o]of Object.entries(r)){t[n]={open:`[${o[0]}m`,close:`[${o[1]}m`};r[n]=t[n];e.set(o[0],o[1])}Object.defineProperty(t,n,{value:r,enumerable:false})}Object.defineProperty(t,"codes",{value:e,enumerable:false});t.color.close="[39m";t.bgColor.close="[49m";i(t.color,"ansi",()=>u(r,"ansi16",l,false));i(t.color,"ansi256",()=>u(o,"ansi256",l,false));i(t.color,"ansi16m",()=>u(s,"rgb",c,false));i(t.bgColor,"ansi",()=>u(r,"ansi16",l,true));i(t.bgColor,"ansi256",()=>u(o,"ansi256",l,true));i(t.bgColor,"ansi16m",()=>u(s,"rgb",c,true));return t}Object.defineProperty(e,"exports",{enumerable:true,get:assembleStyles})},294:(e,t,n)=>{const r=n(510);const o={};for(const e of Object.keys(r)){o[r[e]]=e}const s={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=s;for(const e of Object.keys(s)){if(!("channels"in s[e])){throw new Error("missing channels property: "+e)}if(!("labels"in s[e])){throw new Error("missing channel labels property: "+e)}if(s[e].labels.length!==s[e].channels){throw new Error("channel and label counts mismatch: "+e)}const{channels:t,labels:n}=s[e];delete s[e].channels;delete s[e].labels;Object.defineProperty(s[e],"channels",{value:t});Object.defineProperty(s[e],"labels",{value:n})}s.rgb.hsl=function(e){const t=e[0]/255;const n=e[1]/255;const r=e[2]/255;const o=Math.min(t,n,r);const s=Math.max(t,n,r);const l=s-o;let c;let i;if(s===o){c=0}else if(t===s){c=(n-r)/l}else if(n===s){c=2+(r-t)/l}else if(r===s){c=4+(t-n)/l}c=Math.min(c*60,360);if(c<0){c+=360}const a=(o+s)/2;if(s===o){i=0}else if(a<=.5){i=l/(s+o)}else{i=l/(2-s-o)}return[c,i*100,a*100]};s.rgb.hsv=function(e){let t;let n;let r;let o;let s;const l=e[0]/255;const c=e[1]/255;const i=e[2]/255;const a=Math.max(l,c,i);const u=a-Math.min(l,c,i);const f=function(e){return(a-e)/6/u+1/2};if(u===0){o=0;s=0}else{s=u/a;t=f(l);n=f(c);r=f(i);if(l===a){o=r-n}else if(c===a){o=1/3+t-r}else if(i===a){o=2/3+n-t}if(o<0){o+=1}else if(o>1){o-=1}}return[o*360,s*100,a*100]};s.rgb.hwb=function(e){const t=e[0];const n=e[1];let r=e[2];const o=s.rgb.hsl(e)[0];const l=1/255*Math.min(t,Math.min(n,r));r=1-1/255*Math.max(t,Math.max(n,r));return[o,l*100,r*100]};s.rgb.cmyk=function(e){const t=e[0]/255;const n=e[1]/255;const r=e[2]/255;const o=Math.min(1-t,1-n,1-r);const s=(1-t-o)/(1-o)||0;const l=(1-n-o)/(1-o)||0;const c=(1-r-o)/(1-o)||0;return[s*100,l*100,c*100,o*100]};function comparativeDistance(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}s.rgb.keyword=function(e){const t=o[e];if(t){return t}let n=Infinity;let s;for(const t of Object.keys(r)){const o=r[t];const l=comparativeDistance(e,o);if(l<n){n=l;s=t}}return s};s.keyword.rgb=function(e){return r[e]};s.rgb.xyz=function(e){let t=e[0]/255;let n=e[1]/255;let r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805;const s=t*.2126+n*.7152+r*.0722;const l=t*.0193+n*.1192+r*.9505;return[o*100,s*100,l*100]};s.rgb.lab=function(e){const t=s.rgb.xyz(e);let n=t[0];let r=t[1];let o=t[2];n/=95.047;r/=100;o/=108.883;n=n>.008856?n**(1/3):7.787*n+16/116;r=r>.008856?r**(1/3):7.787*r+16/116;o=o>.008856?o**(1/3):7.787*o+16/116;const l=116*r-16;const c=500*(n-r);const i=200*(r-o);return[l,c,i]};s.hsl.rgb=function(e){const t=e[0]/360;const n=e[1]/100;const r=e[2]/100;let o;let s;let l;if(n===0){l=r*255;return[l,l,l]}if(r<.5){o=r*(1+n)}else{o=r+n-r*n}const c=2*r-o;const i=[0,0,0];for(let e=0;e<3;e++){s=t+1/3*-(e-1);if(s<0){s++}if(s>1){s--}if(6*s<1){l=c+(o-c)*6*s}else if(2*s<1){l=o}else if(3*s<2){l=c+(o-c)*(2/3-s)*6}else{l=c}i[e]=l*255}return i};s.hsl.hsv=function(e){const t=e[0];let n=e[1]/100;let r=e[2]/100;let o=n;const s=Math.max(r,.01);r*=2;n*=r<=1?r:2-r;o*=s<=1?s:2-s;const l=(r+n)/2;const c=r===0?2*o/(s+o):2*n/(r+n);return[t,c*100,l*100]};s.hsv.rgb=function(e){const t=e[0]/60;const n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6;const s=t-Math.floor(t);const l=255*r*(1-n);const c=255*r*(1-n*s);const i=255*r*(1-n*(1-s));r*=255;switch(o){case 0:return[r,i,l];case 1:return[c,r,l];case 2:return[l,r,i];case 3:return[l,c,r];case 4:return[i,l,r];case 5:return[r,l,c]}};s.hsv.hsl=function(e){const t=e[0];const n=e[1]/100;const r=e[2]/100;const o=Math.max(r,.01);let s;let l;l=(2-n)*r;const c=(2-n)*o;s=n*o;s/=c<=1?c:2-c;s=s||0;l/=2;return[t,s*100,l*100]};s.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100;let r=e[2]/100;const o=n+r;let s;if(o>1){n/=o;r/=o}const l=Math.floor(6*t);const c=1-r;s=6*t-l;if((l&1)!==0){s=1-s}const i=n+s*(c-n);let a;let u;let f;switch(l){default:case 6:case 0:a=c;u=i;f=n;break;case 1:a=i;u=c;f=n;break;case 2:a=n;u=c;f=i;break;case 3:a=n;u=i;f=c;break;case 4:a=i;u=n;f=c;break;case 5:a=c;u=n;f=i;break}return[a*255,u*255,f*255]};s.cmyk.rgb=function(e){const t=e[0]/100;const n=e[1]/100;const r=e[2]/100;const o=e[3]/100;const s=1-Math.min(1,t*(1-o)+o);const l=1-Math.min(1,n*(1-o)+o);const c=1-Math.min(1,r*(1-o)+o);return[s*255,l*255,c*255]};s.xyz.rgb=function(e){const t=e[0]/100;const n=e[1]/100;const r=e[2]/100;let o;let s;let l;o=t*3.2406+n*-1.5372+r*-.4986;s=t*-.9689+n*1.8758+r*.0415;l=t*.0557+n*-.204+r*1.057;o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92;s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92;l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92;o=Math.min(Math.max(0,o),1);s=Math.min(Math.max(0,s),1);l=Math.min(Math.max(0,l),1);return[o*255,s*255,l*255]};s.xyz.lab=function(e){let t=e[0];let n=e[1];let r=e[2];t/=95.047;n/=100;r/=108.883;t=t>.008856?t**(1/3):7.787*t+16/116;n=n>.008856?n**(1/3):7.787*n+16/116;r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16;const s=500*(t-n);const l=200*(n-r);return[o,s,l]};s.lab.xyz=function(e){const t=e[0];const n=e[1];const r=e[2];let o;let s;let l;s=(t+16)/116;o=n/500+s;l=s-r/200;const c=s**3;const i=o**3;const a=l**3;s=c>.008856?c:(s-16/116)/7.787;o=i>.008856?i:(o-16/116)/7.787;l=a>.008856?a:(l-16/116)/7.787;o*=95.047;s*=100;l*=108.883;return[o,s,l]};s.lab.lch=function(e){const t=e[0];const n=e[1];const r=e[2];let o;const s=Math.atan2(r,n);o=s*360/2/Math.PI;if(o<0){o+=360}const l=Math.sqrt(n*n+r*r);return[t,l,o]};s.lch.lab=function(e){const t=e[0];const n=e[1];const r=e[2];const o=r/360*2*Math.PI;const s=n*Math.cos(o);const l=n*Math.sin(o);return[t,s,l]};s.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let l=t===null?s.rgb.hsv(e)[2]:t;l=Math.round(l/50);if(l===0){return 30}let c=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));if(l===2){c+=60}return c};s.hsv.ansi16=function(e){return s.rgb.ansi16(s.hsv.rgb(e),e[2])};s.rgb.ansi256=function(e){const t=e[0];const n=e[1];const r=e[2];if(t===n&&n===r){if(t<8){return 16}if(t>248){return 231}return Math.round((t-8)/247*24)+232}const o=16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5);return o};s.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7){if(e>50){t+=3.5}t=t/10.5*255;return[t,t,t]}const n=(~~(e>50)+1)*.5;const r=(t&1)*n*255;const o=(t>>1&1)*n*255;const s=(t>>2&1)*n*255;return[r,o,s]};s.ansi256.rgb=function(e){if(e>=232){const t=(e-232)*10+8;return[t,t,t]}e-=16;let t;const n=Math.floor(e/36)/5*255;const r=Math.floor((t=e%36)/6)/5*255;const o=t%6/5*255;return[n,r,o]};s.rgb.hex=function(e){const t=((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255);const n=t.toString(16).toUpperCase();return"000000".substring(n.length)+n};s.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t){return[0,0,0]}let n=t[0];if(t[0].length===3){n=n.split("").map(e=>{return e+e}).join("")}const r=parseInt(n,16);const o=r>>16&255;const s=r>>8&255;const l=r&255;return[o,s,l]};s.rgb.hcg=function(e){const t=e[0]/255;const n=e[1]/255;const r=e[2]/255;const o=Math.max(Math.max(t,n),r);const s=Math.min(Math.min(t,n),r);const l=o-s;let c;let i;if(l<1){c=s/(1-l)}else{c=0}if(l<=0){i=0}else if(o===t){i=(n-r)/l%6}else if(o===n){i=2+(r-t)/l}else{i=4+(t-n)/l}i/=6;i%=1;return[i*360,l*100,c*100]};s.hsl.hcg=function(e){const t=e[1]/100;const n=e[2]/100;const r=n<.5?2*t*n:2*t*(1-n);let o=0;if(r<1){o=(n-.5*r)/(1-r)}return[e[0],r*100,o*100]};s.hsv.hcg=function(e){const t=e[1]/100;const n=e[2]/100;const r=t*n;let o=0;if(r<1){o=(n-r)/(1-r)}return[e[0],r*100,o*100]};s.hcg.rgb=function(e){const t=e[0]/360;const n=e[1]/100;const r=e[2]/100;if(n===0){return[r*255,r*255,r*255]}const o=[0,0,0];const s=t%1*6;const l=s%1;const c=1-l;let i=0;switch(Math.floor(s)){case 0:o[0]=1;o[1]=l;o[2]=0;break;case 1:o[0]=c;o[1]=1;o[2]=0;break;case 2:o[0]=0;o[1]=1;o[2]=l;break;case 3:o[0]=0;o[1]=c;o[2]=1;break;case 4:o[0]=l;o[1]=0;o[2]=1;break;default:o[0]=1;o[1]=0;o[2]=c}i=(1-n)*r;return[(n*o[0]+i)*255,(n*o[1]+i)*255,(n*o[2]+i)*255]};s.hcg.hsv=function(e){const t=e[1]/100;const n=e[2]/100;const r=t+n*(1-t);let o=0;if(r>0){o=t/r}return[e[0],o*100,r*100]};s.hcg.hsl=function(e){const t=e[1]/100;const n=e[2]/100;const r=n*(1-t)+.5*t;let o=0;if(r>0&&r<.5){o=t/(2*r)}else if(r>=.5&&r<1){o=t/(2*(1-r))}return[e[0],o*100,r*100]};s.hcg.hwb=function(e){const t=e[1]/100;const n=e[2]/100;const r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};s.hwb.hcg=function(e){const t=e[1]/100;const n=e[2]/100;const r=1-n;const o=r-t;let s=0;if(o<1){s=(r-o)/(1-o)}return[e[0],o*100,s*100]};s.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};s.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};s.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};s.gray.hsl=function(e){return[0,0,e[0]]};s.gray.hsv=s.gray.hsl;s.gray.hwb=function(e){return[0,100,e[0]]};s.gray.cmyk=function(e){return[0,0,0,e[0]]};s.gray.lab=function(e){return[e[0],0,0]};s.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255;const n=(t<<16)+(t<<8)+t;const r=n.toString(16).toUpperCase();return"000000".substring(r.length)+r};s.rgb.gray=function(e){const t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},53:(e,t,n)=>{const r=n(294);const o=n(586);const s={};const l=Object.keys(r);function wrapRaw(e){const t=function(...t){const n=t[0];if(n===undefined||n===null){return n}if(n.length>1){t=n}return e(t)};if("conversion"in e){t.conversion=e.conversion}return t}function wrapRounded(e){const t=function(...t){const n=t[0];if(n===undefined||n===null){return n}if(n.length>1){t=n}const r=e(t);if(typeof r==="object"){for(let e=r.length,t=0;t<e;t++){r[t]=Math.round(r[t])}}return r};if("conversion"in e){t.conversion=e.conversion}return t}l.forEach(e=>{s[e]={};Object.defineProperty(s[e],"channels",{value:r[e].channels});Object.defineProperty(s[e],"labels",{value:r[e].labels});const t=o(e);const n=Object.keys(t);n.forEach(n=>{const r=t[n];s[e][n]=wrapRounded(r);s[e][n].raw=wrapRaw(r)})});e.exports=s},586:(e,t,n)=>{const r=n(294);function buildGraph(){const e={};const t=Object.keys(r);for(let n=t.length,r=0;r<n;r++){e[t[r]]={distance:-1,parent:null}}return e}function deriveBFS(e){const t=buildGraph();const n=[e];t[e].distance=0;while(n.length){const e=n.pop();const o=Object.keys(r[e]);for(let r=o.length,s=0;s<r;s++){const r=o[s];const l=t[r];if(l.distance===-1){l.distance=t[e].distance+1;l.parent=e;n.unshift(r)}}}return t}function link(e,t){return function(n){return t(e(n))}}function wrapConversion(e,t){const n=[t[e].parent,e];let o=r[t[e].parent][e];let s=t[e].parent;while(t[s].parent){n.unshift(t[s].parent);o=link(r[t[s].parent][s],o);s=t[s].parent}o.conversion=n;return o}e.exports=function(e){const t=deriveBFS(e);const n={};const r=Object.keys(t);for(let e=r.length,o=0;o<e;o++){const e=r[o];const s=t[e];if(s.parent===null){continue}n[e]=wrapConversion(e,t)}return n}},538:e=>{"use strict";e.exports=((e,t=process.argv)=>{const n=e.startsWith("-")?"":e.length===1?"-":"--";const r=t.indexOf(n+e);const o=t.indexOf("--");return r!==-1&&(o===-1||r<o)})},955:(e,t,n)=>{"use strict";const r=n(87);const o=n(867);const s=n(538);const{env:l}=process;let c;if(s("no-color")||s("no-colors")||s("color=false")||s("color=never")){c=0}else if(s("color")||s("colors")||s("color=true")||s("color=always")){c=1}if("FORCE_COLOR"in l){if(l.FORCE_COLOR==="true"){c=1}else if(l.FORCE_COLOR==="false"){c=0}else{c=l.FORCE_COLOR.length===0?1:Math.min(parseInt(l.FORCE_COLOR,10),3)}}function translateLevel(e){if(e===0){return false}return{level:e,hasBasic:true,has256:e>=2,has16m:e>=3}}function supportsColor(e,t){if(c===0){return 0}if(s("color=16m")||s("color=full")||s("color=truecolor")){return 3}if(s("color=256")){return 2}if(e&&!t&&c===undefined){return 0}const n=c||0;if(l.TERM==="dumb"){return n}if(process.platform==="win32"){const e=r.release().split(".");if(Number(e[0])>=10&&Number(e[2])>=10586){return Number(e[2])>=14931?3:2}return 1}if("CI"in l){if(["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(e=>e in l)||l.CI_NAME==="codeship"){return 1}return n}if("TEAMCITY_VERSION"in l){return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(l.TEAMCITY_VERSION)?1:0}if(l.COLORTERM==="truecolor"){return 3}if("TERM_PROGRAM"in l){const e=parseInt((l.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(l.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}if(/-256(color)?$/i.test(l.TERM)){return 2}if(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(l.TERM)){return 1}if("COLORTERM"in l){return 1}return n}function getSupportLevel(e){const t=supportsColor(e,e&&e.isTTY);return translateLevel(t)}e.exports={supportsColor:getSupportLevel,stdout:translateLevel(supportsColor(true,o.isatty(1))),stderr:translateLevel(supportsColor(true,o.isatty(2)))}},818:(e,t,n)=>{"use strict";const r=n(68);const{stdout:o,stderr:s}=n(955);const{stringReplaceAll:l,stringEncaseCRLFWithFirstIndex:c}=n(415);const{isArray:i}=Array;const a=["ansi","ansi","ansi256","ansi16m"];const u=Object.create(null);const f=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3)){throw new Error("The `level` option should be an integer from 0 to 3")}const n=o?o.level:0;e.level=t.level===undefined?n:t.level};class ChalkClass{constructor(e){return h(e)}}const h=e=>{const t={};f(t,e);t.template=((...e)=>w(t.template,...e));Object.setPrototypeOf(t,Chalk.prototype);Object.setPrototypeOf(t.template,t);t.template.constructor=(()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")});t.template.Instance=ChalkClass;return t.template};function Chalk(e){return h(e)}for(const[e,t]of Object.entries(r)){u[e]={get(){const n=d(this,p(t.open,t.close,this._styler),this._isEmpty);Object.defineProperty(this,e,{value:n});return n}}}u.visible={get(){const e=d(this,this._styler,true);Object.defineProperty(this,"visible",{value:e});return e}};const g=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const e of g){u[e]={get(){const{level:t}=this;return function(...n){const o=p(r.color[a[t]][e](...n),r.color.close,this._styler);return d(this,o,this._isEmpty)}}}}for(const e of g){const t="bg"+e[0].toUpperCase()+e.slice(1);u[t]={get(){const{level:t}=this;return function(...n){const o=p(r.bgColor[a[t]][e](...n),r.bgColor.close,this._styler);return d(this,o,this._isEmpty)}}}}const b=Object.defineProperties(()=>{},{...u,level:{enumerable:true,get(){return this._generator.level},set(e){this._generator.level=e}}});const p=(e,t,n)=>{let r;let o;if(n===undefined){r=e;o=t}else{r=n.openAll+e;o=t+n.closeAll}return{open:e,close:t,openAll:r,closeAll:o,parent:n}};const d=(e,t,n)=>{const r=(...e)=>{if(i(e[0])&&i(e[0].raw)){return m(r,w(r,...e))}return m(r,e.length===1?""+e[0]:e.join(" "))};Object.setPrototypeOf(r,b);r._generator=e;r._styler=t;r._isEmpty=n;return r};const m=(e,t)=>{if(e.level<=0||!t){return e._isEmpty?"":t}let n=e._styler;if(n===undefined){return t}const{openAll:r,closeAll:o}=n;if(t.indexOf("")!==-1){while(n!==undefined){t=l(t,n.close,n.open);n=n.parent}}const s=t.indexOf("\n");if(s!==-1){t=c(t,o,r,s)}return r+t+o};let y;const w=(e,...t)=>{const[r]=t;if(!i(r)||!i(r.raw)){return t.join(" ")}const o=t.slice(1);const s=[r.raw[0]];for(let e=1;e<r.length;e++){s.push(String(o[e-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[e]))}if(y===undefined){y=n(500)}return y(e,s.join(""))};Object.defineProperties(Chalk.prototype,u);const v=Chalk();v.supportsColor=o;v.stderr=Chalk({level:s?s.level:0});v.stderr.supportsColor=s;e.exports=v},500:e=>{"use strict";const t=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;const n=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;const r=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;const o=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;const s=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function unescape(e){const t=e[0]==="u";const n=e[1]==="{";if(t&&!n&&e.length===5||e[0]==="x"&&e.length===3){return String.fromCharCode(parseInt(e.slice(1),16))}if(t&&n){return String.fromCodePoint(parseInt(e.slice(2,-1),16))}return s.get(e)||e}function parseArguments(e,t){const n=[];const s=t.trim().split(/\s*,\s*/g);let l;for(const t of s){const s=Number(t);if(!Number.isNaN(s)){n.push(s)}else if(l=t.match(r)){n.push(l[2].replace(o,(e,t,n)=>t?unescape(t):n))}else{throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`)}}return n}function parseStyle(e){n.lastIndex=0;const t=[];let r;while((r=n.exec(e))!==null){const e=r[1];if(r[2]){const n=parseArguments(e,r[2]);t.push([e].concat(n))}else{t.push([e])}}return t}function buildStyle(e,t){const n={};for(const e of t){for(const t of e.styles){n[t[0]]=e.inverse?null:t.slice(1)}}let r=e;for(const[e,t]of Object.entries(n)){if(!Array.isArray(t)){continue}if(!(e in r)){throw new Error(`Unknown Chalk style: ${e}`)}r=t.length>0?r[e](...t):r[e]}return r}e.exports=((e,n)=>{const r=[];const o=[];let s=[];n.replace(t,(t,n,l,c,i,a)=>{if(n){s.push(unescape(n))}else if(c){const t=s.join("");s=[];o.push(r.length===0?t:buildStyle(e,r)(t));r.push({inverse:l,styles:parseStyle(c)})}else if(i){if(r.length===0){throw new Error("Found extraneous } in Chalk template literal")}o.push(buildStyle(e,r)(s.join("")));s=[];r.pop()}else{s.push(a)}});o.push(s.join(""));if(r.length>0){const e=`Chalk template literal is missing ${r.length} closing bracket${r.length===1?"":"s"} (\`}\`)`;throw new Error(e)}return o.join("")})},415:e=>{"use strict";const t=(e,t,n)=>{let r=e.indexOf(t);if(r===-1){return e}const o=t.length;let s=0;let l="";do{l+=e.substr(s,r-s)+t+n;s=r+o;r=e.indexOf(t,s)}while(r!==-1);l+=e.substr(s);return l};const n=(e,t,n,r)=>{let o=0;let s="";do{const l=e[r-1]==="\r";s+=e.substr(o,(l?r-1:r)-o)+t+(l?"\r\n":"\n")+n;o=r+1;r=e.indexOf("\n",o)}while(r!==-1);s+=e.substr(o);return s};e.exports={stringReplaceAll:t,stringEncaseCRLFWithFirstIndex:n}},510:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},87:e=>{"use strict";e.exports=require("os")},867:e=>{"use strict";e.exports=require("tty")}};var t={};function __nccwpck_require__(n){if(t[n]){return t[n].exports}var r=t[n]={id:n,loaded:false,exports:{}};var o=true;try{e[n](r,r.exports,__nccwpck_require__);o=false}finally{if(o)delete t[n]}r.loaded=true;return r.exports}(()=>{__nccwpck_require__.nmd=(e=>{e.paths=[];if(!e.children)e.children=[];return e})})();__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(818)})();