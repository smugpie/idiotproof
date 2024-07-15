/*! For license information please see application.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{_m:()=>F,sV:()=>C,Yo:()=>h,k6:()=>z,R0:()=>B,GE:()=>O,Sd:()=>P,q9:()=>v,d$:()=>_,NL:()=>N});function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var o=function(t){var e=document.getElementById("message");e.style.display=t&&t.trim().length>0?"block":"none",e.textContent=t},r=function(){localStorage.clear(),localStorage.setItem("proofingPhase","Hamburgers"),location.reload()};function a(){var t=document.body;"dark"===t.getAttribute("data-theme")?(t.removeAttribute("data-theme"),document.querySelector("#btn__mode-toggle .material-symbols-outlined").textContent="light_mode"):(t.setAttribute("data-theme","dark"),document.querySelector("#btn__mode-toggle .material-symbols-outlined").textContent="dark_mode")}var c=function(t){var e={"t__size-xxl":"140","t__size-xl":"100","t__size-l":"84","t__size-m":"56","t__size-s":"28","t__size-xs":"14"};if(e[t])return e[t];var n=t.length;return n<25?"t__size-xxl":n<50?"t__size-xl":n<95?"t__size-l":n<200?"t__size-m":n<1e3?"t__size-s":"t__size-xs"},i=function(t,e){if("undefined"!=typeof Storage)if("thisContent"!==e)localStorage.setItem(t,e);else{var n=document.getElementById(t).textContent;localStorage.setItem(t,n)}};function l(t,e){if(t){if("string"==typeof t)return s(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(){f=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var a=e&&e.prototype instanceof b?e:b,c=Object.create(a.prototype),i=new z(o||[]);return r(c,"_invoke",{value:j(t,n,i)}),c}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var m="suspendedStart",y="suspendedYield",h="executing",g="completed",v={};function b(){}function _(){}function w(){}var S={};s(S,c,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(O([])));E&&E!==n&&o.call(E,c)&&(S=E);var L=w.prototype=b.prototype=Object.create(S);function I(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(r,a,c,i){var l=p(t[r],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(l.arg)}var a;r(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return a=a?a.then(r,r):r()}})}function j(e,n,o){var r=m;return function(a,c){if(r===h)throw Error("Generator is already running");if(r===g){if("throw"===a)throw c;return{value:t,done:!0}}for(o.method=a,o.arg=c;;){var i=o.delegate;if(i){var l=A(i,o);if(l){if(l===v)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===m)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=h;var s=p(e,n,o);if("normal"===s.type){if(r=o.done?g:y,s.arg===v)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(r=g,o.method="throw",o.arg=s.arg)}}}function A(e,n){var o=n.method,r=e.iterator[o];if(r===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var a=p(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return _.prototype=w,r(L,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:_,configurable:!0}),_.displayName=s(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},I(k.prototype),s(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var c=new k(d(t,n,o,r),a);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},I(L),s(L,l,"Generator"),s(L,c,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=O,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return i.type="throw",i.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var l=o.call(c,"catchLoc"),s=o.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;F(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:O(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),v}},e}function d(t,e,n,o,r,a,c){try{var i=t[a](c),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(o,r)}var p=null,m={truetype:"ttf",opentype:"otf"},y=function(t,e,n){return new Promise((function(o,r){try{p=t,window.URL.createObjectURL(new Blob([p],{type:"application/zip"})),window.fontFamily=n,b(n),["localhost","127.0.0.1",""].includes(location.hostname)&&(localStorage.setItem("fontFamily",n),localStorage.setItem("fontFamilySource",e)),window.pendingStage?(_(window.pendingStage),window.pendingStage=null):_("Hamburgers"),o()}catch(t){r(t)}}))},h=function(t){var e=t.target.files;e.length>1?Array.from(e).forEach((function(t){return g(t).catch(console.error)})):1===e.length&&g(e[0]).catch(console.error)},g=function(t){return new Promise((function(e,n){var r=new FileReader;r.onload=function(){var r,a=(r=f().mark((function r(a){var c,i,l,s;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c=opentype.parse(a.target.result),i=c.names.postScriptName.en,l="fonts/".concat(i),r.next=6,y(c,l,i);case 6:c.file={name:t.name,lastModified:t.lastModified,size:t.size,type:t.type},c.type="user:local",s=new Uint8Array(a.target.result),document.getElementById("style__fontface").innerHTML="@font-face {font-family:'".concat(i,"'; src: url('data:;base64,").concat((u=s,btoa(String.fromCharCode.apply(null,new Uint8Array(u)))),"') format('truetype');}"),o(""),e(),r.next=19;break;case 14:r.prev=14,r.t0=r.catch(0),o(r.t0.toString()),console.error(r.t0),n(r.t0);case 19:case"end":return r.stop()}var u}),r,null,[[0,14]])})),function(){var t=this,e=arguments;return new Promise((function(n,o){var a=r.apply(t,e);function c(t){d(a,n,o,c,i,"next",t)}function i(t){d(a,n,o,c,i,"throw",t)}c(void 0)}))});return function(t){return a.apply(this,arguments)}}(),r.onerror=function(t){o(t.toString()),n(t)},r.readAsArrayBuffer(t)}))},v=function(t,e){opentype.load(t,(function(n,r){if(n)console.error("Error loading font:",n),o("Error loading font: ".concat(n));else{p=r;try{y(r,t,e),_(localStorage.getItem("proofingPhase")||"Hamburgers")}catch(t){console.error("Error in onFontLoaded:",t),o("Error processing font: ".concat(t))}}}))},b=function(t){var e,n="";for(e in p.tables){if(p.tables[e],"cmap"===e){var o=p.tables.cmap.glyphIndexMap,r=Object.keys(o).length;window.proofingPhase=r<=100?"Hamburgers":r>=400?"Diacritics":"Spacing"}var a=p.outlinesFormat;if(a=m[a],"name"!==e);else{var c="";if(p.names.designer)var i=p.names.designer.en;else i="No Designer Name :(";if(p.names.postScriptName)var l=p.names.postScriptName.en;else l="Font Name";c+='<div class="section__header-name d-flex-grow t__left" contenteditable="true" spellcheck="false">'+i+"</div>",c+='<div class="section__header-name d-flex-grow t__center" spellcheck="false">'+l+"</div>",n+='.t__importedfontfamily { font-family: "'.concat(t,'" }'),c+='<div class="section__header-name  d-flex-grow t__right">'+(new Date).toJSON().slice(0,10).replace(/-/g,"/")+"</div>",document.getElementById("section__header-names").innerHTML=c}}document.getElementById("style__fontfamily").innerHTML=n,localStorage.getItem("proofingPhase")?_(localStorage.getItem("proofingPhase")):_(window.proofingPhase)},_=function(t){var e=document.getElementById("section__article-app"),n=document.getElementById("section__header-stage-buttons");if(!p)return console.warn("Font not loaded yet. Deferring stage setting."),void(window.pendingStage=t);fetch("src/js/proof.json").then((function(t){return t.json()})).then((function(o){var r=w(o,t),a=V(o,t);e.innerHTML=r,n.innerHTML=a,document.getElementById("style__opentype-features").innerHTML="",i("proofingPhase",t)})).catch((function(t){return console.error("Error loading JSON:",t)}))},w=function(t,e){if(!t[e])return'<div class="item d-flex t__center"><div class="item__proof">No features found! :...(</div></div>';var n=p.tables.gsub.features,o=Object.values(n).filter((function(t){return"object"===u(t)&&t.tag})).map((function(t){return t.tag})).filter((function(e){return void 0!==t.Features[e]})),r="";for(var a in t[e])if("Features"!==e||o.includes(a)){var i=c(t[e][a]),l="section__proofing-".concat(a),s="item--".concat(a),f="".concat(s),d=S(f,i),m=d.fontSize,y=d.lineHeight,h=d.letterSpacing,g=d.inlineStyle,v=x(s);r+='\n        <div id="'.concat(s,'" class="item">\n          <button class="btn btn-link add-item-above chip" onclick="insertField(\'').concat(s,'\')">+ Add Proof Window</button>\n          <div class="item__container d-flex">\n            <div class="item__sliders pt-2">\n              <div class="item__sliders-wrapper">\n                ').concat(E(s,f,m,y,h),"\n                ").concat(L(s,f),"\n                ").concat(I(s),"\n                ").concat(k(s,t,o),'\n                <button class="btn btn-secondary mr-1 mb-1 mt-6" title="Apply these styles to all visible proof sheets." onclick="passStyleValue(\'').concat(s,"','idiocracy','global')\">Global Idiocracy</button>\n              </div>\n            </div>\n            <div class=\"item__proof\">\n              <button class=\"btn btn-link remove-item-this invisible\" onclick=\"removeElementsByID('").concat(s,"')\">×</button>\n              ").concat(j(e,a,t,l,g,v,i),"\n            </div>\n          </div>\n        </div>\n      ")}return r},S=function(t,e){var n=localStorage.getItem("".concat(t,"-fontSize-val"))||c(e),o=localStorage.getItem("".concat(t,"-lineHeight-val"))||"1.2",r=localStorage.getItem("".concat(t,"-letterSpacing-val"))||"0em";return{fontSize:n,lineHeight:o,letterSpacing:r,inlineStyle:"\n      font-size: ".concat(n,"pt;\n      line-height: ").concat(o,";\n      letter-spacing: ").concat(r,";\n    ")}},x=function(t){var e="";return p.tables.fvar&&(p.tables.fvar.axes.map((function(t){return t.tag})),e="font-variation-settings: "+p.tables.fvar.axes.map((function(e){var n=localStorage.getItem("".concat(t,"-slider-").concat(e.tag,"-val")),o=null!==n?n:e.defaultValue;return"'".concat(e.tag,"' ").concat(o)})).join(", ")+";"),e},E=function(t,e,n,o,r){return'\n    <label for="'.concat(e,'-fontSize">Font Size </label>\n    <span class="t__right text-small" id="').concat(e,'-fontSize-val">').concat(n,'pt</span>\n    <input id="').concat(e,'-fontSize" type="range" class="slider" min="4" max="160" step="2" value="').concat(n,'" oninput="passStyleValue(\'').concat(t,"', 'fontSize', this.value)\">\n    \n    <label for=\"").concat(e,'-lineHeight">Line Height </label>\n    <span class="t__right text-small" id="').concat(e,'-lineHeight-val">').concat(o,'</span>\n    <input id="').concat(e,'-lineHeight" type="range" class="slider" min="0.6" max="3.0" step="0.01" value="').concat(o,'" oninput="passStyleValue(\'').concat(t,"', 'lineHeight', this.value)\">\n    \n    <label for=\"").concat(e,'-letterSpacing">Letter Spacing </label>\n    <span class="t__right text-small" id="').concat(e,'-letterSpacing-val">').concat(r,'</span>\n    <input id="').concat(e,'-letterSpacing" type="range" class="slider" min="-0.4" max="0.4" step="0.01" value="').concat(r,'" oninput="passStyleValue(\'').concat(t,"', 'letterSpacing', this.value)\">\n  ")},L=function(t,e){return p.tables.fvar?p.tables.fvar.axes.map((function(n){var o=localStorage.getItem("".concat(t,"-slider-").concat(n.tag,"-val")),r=null!==o?o:n.defaultValue;return'\n        <label for="'.concat(e,"-").concat(n.tag,'">').concat(n.name.en,' </label>\n        <span class="t__right text-small" id="').concat(e,"-").concat(n.tag,'-val">').concat(r,'</span>\n        <input id="').concat(e,"-").concat(n.tag,'" type="range" class="slider" min="').concat(n.minValue,'" max="').concat(n.maxValue,'" value="').concat(r,'" oninput="passfvarValue(\'').concat(t,"', '").concat(n.tag,"', this.value, '").concat(p.tables.fvar.axes.map((function(t){return t.tag})).join(","),"')\">\n      ")})).join(""):""},I=function(t){return'\n    <div id="btn__wrapper-case">\n\t\t<label>Case</label>\n\t\t<div class="d-flex g-1 btn__wrapper">\n      \t\t<button class="btn btn-link textTransform-uppercase" title="Uppercase" onclick="passStyleValue(\''.concat(t,"','textTransform', 'uppercase')\">TT</button>\n      \t\t<button class=\"btn btn-link textTransform-capitalize\" title=\"Capitalize\" onclick=\"passStyleValue('").concat(t,"','textTransform', 'capitalize')\">Tt</button>\n      \t\t<button class=\"btn btn-link textTransform-lowercase\" title=\"Lowercase\" onclick=\"passStyleValue('").concat(t,'\',\'textTransform\', \'lowercase\')">tt</button>\n\t\t</div>\n    </div>\n    <div id="btn__wrapper-columns">\n\t\t<label>Columns</label>\n\t\t<div class="d-flex g-1 btn__wrapper">\n      \t\t<button class="btn btn-link column-count-1" title="1 column layout" onclick="passStyleValue(\'').concat(t,'\',\'column-count\', \'1\')"><span class="material-symbols-outlined">subject</span></button>\n      \t\t<button class="btn btn-link column-count-2" title="2 column layout" onclick="passStyleValue(\'').concat(t,'\',\'column-count\', \'2\')"><span class="material-symbols-outlined">view_column_2</span></button>\n      \t\t<button class="btn btn-link column-count-3" title="3 column layout" onclick="passStyleValue(\'').concat(t,"','column-count', '3')\"><span class=\"material-symbols-outlined\">view_week</span></button>\n\t\t</div>\n    </div>\n  ")},k=function(t,e,n){var o,r=function(t){if(Array.isArray(t))return s(t)}(o=new Set(n))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||l(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return'\n\t<label>Features</label>  \n\t<div class="btn__wrapper d-flex flex-column g-1">\n\t\t'.concat(r.map((function(n){var o=e.Features[n].abstract;return'\n\t\t\t<div class="btn__setfont d-flex justify-content-between">\n\t\t\t  <input id="'.concat(t,"-checkbox-").concat(n,'" type="checkbox" onclick="passfeatValue(\'').concat(t,"', '").concat(n,"', '").concat(r.join(","),"')\">\n\t\t\t  ").concat(o,'<span class="d-flex-grow text-right text-small">').concat(n,"</span>\n\t\t\t</div>\n\t\t  ")})).join(""),"\n\t  </div>\n\t")},j=function(t,e,n,o,r,a,c){if("Features"===t){var i=n[t][e].definition,l=localStorage.getItem(o)||n[t][e].sample;return'\n        <h6 class="h6" title="'.concat(i,'" contentEditable="true" onkeyup="saveData(\'').concat(o,"-title', 'thisContent')\">").concat(e,'</h6>\n        <span class="testarea-values small">').concat(A(r),'</span>\n        <div id="').concat(o,'" style="').concat(r," ").concat(a,'" class="t__importedfontfamily ').concat(c,' testarea" contenteditable="true" spellcheck="false" onkeyup="saveData(\'').concat(o,"', 'thisContent')\">\n          ").concat(l,"\n        </div>\n      ")}var s=localStorage.getItem(o)||n[t][e];return'\n        <h6 contentEditable="true" onkeyup="saveData(\''.concat(o,"-title', 'thisContent')\">").concat(e,'</h6>\n        <span class="testarea-values small">').concat(A(r),'</span>\n        <div id="').concat(o,'" style="').concat(r," ").concat(a,'" class="t__importedfontfamily ').concat(c,' testarea" contentEditable="true" spellcheck="false" onkeyup="saveData(\'').concat(o,"', 'thisContent')\">\n          ").concat(s,"\n        </div>\n      ")},A=function(t){return t.split(";").filter((function(t){return t.trim()})).map((function(t){var e,n,o=(e=t.split(":").map((function(t){return t.trim()})),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,a,c,i=[],l=!0,s=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=a.call(n)).done)&&(i.push(o.value),i.length!==e);l=!0);}catch(t){s=!0,r=t}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw r}}return i}}(e,n)||l(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],a=o[1];return'<span class="'.concat(r,'">').concat(r,": ").concat(a,"</span>")})).join(" ")},T=function(t,e,n){var o=document.querySelector("#".concat(t," .testarea-values")),r=o.querySelector(".".concat(e));if(r)r.textContent="".concat(e,": ").concat(n);else{var a=document.createElement("span");a.className=e,a.textContent="".concat(e,": ").concat(n),o.appendChild(a)}},F=function(t){var e=document.getElementById(t),n=e.cloneNode(!0);n.id="".concat(t,"-clone-").concat(Date.now()),n.querySelectorAll("[id]").forEach((function(t){t.id="".concat(t.id,"-clone-").concat(Date.now())})),n.querySelectorAll("input").forEach((function(t){t.value=""})),e.parentNode.insertBefore(n,e),n.style.height="0px",n.style.overflow="hidden",n.style.transition="height 0.6s ease",setTimeout((function(){n.style.height="".concat(n.scrollHeight,"px")}),0),setTimeout((function(){n.style.height="auto",n.style.overflow="visible"}),600)},z=function(t,e,n){var o="-".concat(e,"-val"),r=document.getElementById("".concat(t).concat(o));["fontSize","lineHeight","letterSpacing"].includes(e)?(i("".concat(t).concat(o),n),"fontSize"===e&&(n+="pt"),"letterSpacing"===e&&(n+="em"),r&&(r.textContent=n)):i(t+e,n);var a=document.querySelector("#".concat(t," .testarea"));if("idiocracy"===e){var c=a.getAttribute("style");document.querySelectorAll(".testarea").forEach((function(t){return t.setAttribute("style",c)}))}else a.style[e]=n;T(t,e,n),H(e,n)},O=function(t,e,n,o){var r=document.getElementById("".concat(t,"-slider-").concat(e,"-val"));r&&(r.textContent=n),i("".concat(t,"-slider-").concat(e,"-val"),n);var a=o.split(",").map((function(o){var r=o===e?n:document.getElementById("".concat(t,"-slider-").concat(o)).value;return"'".concat(o,"' ").concat(r)})).join(", ");document.querySelector("#".concat(t," .testarea")).style.fontVariationSettings=a,T(t,"fvar",a)},B=function(t,e,n){for(var o=n.split(","),r="",a=0;a<o.length;a++)document.getElementById("".concat(t,"-checkbox-").concat(o[a])).checked&&(r+="'".concat(o[a],"',"));r=r.replace(/,\s*$/,""),document.querySelector("#".concat(t," .testarea")).style.fontFeatureSettings=r},H=function(t,e){document.querySelectorAll(".btn.".concat(t,"-").concat(e)).forEach((function(e){e.classList.add("active");var n=e.closest(".btn__wrapper");n?n.querySelectorAll(".btn").forEach((function(t){t!==e&&t.classList.remove("active")})):document.querySelectorAll('.btn[class*="'.concat(t,'-"]')).forEach((function(t){t!==e&&t.classList.remove("active")}))}))},V=function(t,e){return Object.keys(t).map((function(t){return'\n        <div class="tab-item '.concat(t===e?"active":"",' tab__setstage" onclick="setStage(\'').concat(t,'\')">\n          <a href="#" class="stage-button">').concat(t,"</a>\n        </div>\n      ")})).join("")},C=function(){var t=document.getElementById("section__header-file-buttons");t.innerHTML="Place fonts you want to proof into <code>/fonts</code> to begin",fetch("../src/txt/fonts.txt").then((function(t){return t.text()})).then((function(e){var o,r,a=e.split("fonts/").filter((function(t){return""!==t.trim()})).map((function(t){return t.trim()})),c=(o=a.sort(),function(t){if(Array.isArray(t))return n(t)}(r=new Set(o))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=function(t){return t.map((function(t){var e=t.replace(".","-"),n=t.split(".").pop(),o=t.replace("-"," ").replace(/\.[^/.]+$/,"");return'<div class="btn__setfont chip btn d-flex justify-content-between" title="'.concat(t,'" id="btn__setfont-').concat(e,'" onclick="setFont(\'fonts/').concat(t,"', '").concat(e,"')\">").concat(o,'<span class="d-flex-grow text-small text-right">').concat(n,"</span></div>")})).join("")}(c),l=function(t){return t.map((function(t){var e=t.replace(".","-");return'@font-face { font-family: "'.concat(e,'"; src: url("fonts/').concat(t,'");}')})).join("\n")}(c);t.innerHTML=i,document.getElementById("style__fontface").innerHTML+=l;var s=localStorage.getItem("fontFamilySource")||"fonts/".concat(c[c.length-1]),u=localStorage.getItem("fontFamily")||s.replace(".","-");v(s,u)})).catch((function(t){return console.error("Error loading fonts:",t)}))},P=function(){var t=document.getElementById("section__header-file-buttons");v("fonts/gooper-VF.ttf","gooper-VF-ttf"),document.getElementById("style__fontface").innerHTML='@font-face { font-family: "gooper-VF-ttf"; src: url("fonts/gooper-VF.ttf");}',t.innerHTML='\n\t  <form class="box has-advanced-upload" method="post" action="" enctype="multipart/form-data">\n\t\t<div class="box__input">\n\t\t  <input id="fontInput" class="box__file" type="file" name="files[]" data-multiple-caption="{count} files selected" multiple />\n\t\t</div>\n\t  </form>\n\t  <div id="message"></div>\n\t  <div id="listfonts"></div>\n\t',document.getElementById("fontInput").addEventListener("change",h)},N=function(){var t=document.getElementById("section__header-file-buttons"),e=document.getElementById("section__header-stage-buttons"),n=document.getElementById("btn__view-tools-toggle"),o=document.getElementById("btn__mode-toggle"),c=document.getElementById("btn__reset-local-storage");t&&t.addEventListener("click",M),e&&e.addEventListener("click",q),n&&n.addEventListener("click",D),o&&o.addEventListener("click",a),c&&c.addEventListener("click",r)},M=function(t){t.target.classList.contains("btn__setfont")&&(t.target.classList.add("active","visited"),Array.from(t.target.parentNode.children).filter((function(e){return e!==t.target})).forEach((function(t){return t.classList.remove("active")})))},q=function(t){t.target.classList.contains("btn__setstage")&&(t.target.classList.add("active"),Array.from(t.target.parentNode.children).filter((function(e){return e!==t.target})).forEach((function(t){return t.classList.remove("active")})))},D=function(){document.body.classList.toggle("tools-visible")};window.addEventListener("unhandledrejection",(function(t){console.error("Unhandled promise rejection:",t.reason)})),window.addEventListener("error",(function(t){console.error("Uncaught error:",t.error)})),window.setFont=v,window.onReadFile=h,window.setStage=_,window.passStyleValue=z,window.passfvarValue=O,window.passfeatValue=B,window.insertField=F,window.localStorageClear=e.localStorageClear,document.addEventListener("DOMContentLoaded",(function(){try{["localhost","127.0.0.1",""].includes(location.hostname)?C():P(),N(),document.body.classList.add("loaded")}catch(t){console.error("Error during initialization:",t)}}))})();
//# sourceMappingURL=application.js.map