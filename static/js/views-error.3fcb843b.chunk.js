(this["webpackJsonpsmartnative-user-frontend"]=this["webpackJsonpsmartnative-user-frontend"]||[]).push([[18],{106:function(e,t,n){"use strict";n.d(t,"p",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return l})),n.d(t,"s",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"r",(function(){return j})),n.d(t,"q",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return y})),n.d(t,"l",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return N})),n.d(t,"k",(function(){return E})),n.d(t,"j",(function(){return A})),n.d(t,"h",(function(){return k}));var r,o=n(20),a=n.n(o);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function l(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var m="object"===typeof window&&window.Element||function(){};function p(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var j=a.a.oneOfType([a.a.string,a.a.func,p,a.a.shape({current:a.a.any})]),g=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],N=!("undefined"===typeof window||!window.document||!window.document.createElement);function w(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function E(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function T(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!E(e))return!1;var t=w(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&N){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function M(e){return null!==e&&(Array.isArray(e)||N&&"number"===typeof e.length)}function A(e,t){var n=T(e);return t?M(n)?n:null===n?[]:[n]:M(n)?n[0]:n}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},109:function(e,t,n){"use strict";var r=n(2),o=(n(5),n(209)),a=n(142),s=n(17);t.a=Object(a.c)((function(e){return Object(s.jsx)(o.a,Object(r.a)({},e))}),{withRef:!1})},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var r=n(2),o=(n(5),n(184)),a=n(17),s=function(e){return Object(a.jsx)(o.a,Object(r.a)(Object(r.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var t=e.className;return Object(a.jsx)("div",{className:"separator ".concat(t)})}},184:function(e,t,n){"use strict";var r=n(11),o=n(14),a=n(5),s=n.n(a),c=n(20),i=n.n(c),u=n(105),d=n.n(u),l=n(106),f=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),m={tag:l.q,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete i[t],o||""===o){var a=!r;if(Object(l.k)(o)){var s,c=a?"-":"-"+t+"-",f=j(a,t,o.size);u.push(Object(l.m)(d()(((s={})[f]=o.size||""===o.size,s["order"+c+o.order]=o.order||0===o.order,s["offset"+c+o.offset]=o.offset||0===o.offset,s)),n))}else{var b=j(a,t,o);u.push(b)}}})),u.length||u.push("col");var f=Object(l.m)(d()(t,u),n);return s.a.createElement(c,Object(r.a)({},i,{className:f}))};g.propTypes=m,g.defaultProps=p,t.a=g},185:function(e,t,n){"use strict";var r=n(11),o=n(14),a=n(5),s=n.n(a),c=n(20),i=n.n(c),u=n(105),d=n.n(u),l=n(106),f=i.a.oneOfType([i.a.number,i.a.string]),b={tag:l.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,i=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;b.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(l.m)(d()(t,a?"no-gutters":null,i?"form-row":"row",b),n);return s.a.createElement(c,Object(r.a)({},f,{className:m}))};p.propTypes=b,p.defaultProps=m,t.a=p},186:function(e,t,n){"use strict";var r=n(11),o=n(14),a=n(5),s=n.n(a),c=n(20),i=n.n(c),u=n(105),d=n.n(u),l=n(106),f={tag:l.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.body,i=e.inverse,u=e.outline,f=e.tag,b=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(l.m)(d()(t,"card",!!i&&"text-white",!!c&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return s.a.createElement(f,Object(r.a)({},m,{className:p,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},187:function(e,t,n){"use strict";var r=n(11),o=n(14),a=n(5),s=n.n(a),c=n(20),i=n.n(c),u=n(105),d=n.n(u),l=n(106),f={tag:l.q,className:i.a.string,cssModule:i.a.object},b=function(e){var t=e.className,n=e.cssModule,a=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(l.m)(d()(t,"card-title"),n);return s.a.createElement(a,Object(r.a)({},c,{className:i}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},209:function(e,t,n){"use strict";var r=n(130),o=n(5),a=n(142),s=n(120);function c(e){var t=function(){var e=o.useContext(a.a);return Object(s.c)(e),e}(),n=t.formatMessage,c=t.textComponent,i=void 0===c?o.Fragment:c,u=e.id,d=e.description,l=e.defaultMessage,f=e.values,b=e.children,m=e.tagName,p=void 0===m?i:m,j=n({id:u,description:d,defaultMessage:l},f,{ignoreTag:e.ignoreTag});return Array.isArray(j)||(j=[j]),"function"===typeof b?b(j):p?o.createElement.apply(o,Object(r.d)([p,null],j)):o.createElement(o.Fragment,null,j)}c.displayName="FormattedMessage";var i=o.memo(c,(function(e,t){var n=e.values,o=Object(r.c)(e,["values"]),a=t.values,c=Object(r.c)(t,["values"]);return Object(s.d)(a,n)&&Object(s.d)(o,c)}));i.displayName="MemoizedFormattedMessage";t.a=i},571:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n(185),a=n(186),s=n(187),c=n(113),i=n(111),u=n(109),d=n(7),l=n(17);t.default=function(e){var t=e.message,n=void 0===t?"None":t;return Object(r.useEffect)((function(){return document.body.classList.add("background"),document.body.classList.add("no-footer"),function(){document.body.classList.remove("background"),document.body.classList.remove("no-footer")}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"fixed-background"}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(o.a,{className:"h-100",children:Object(l.jsx)(i.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(l.jsxs)(a.a,{className:"auth-card",children:[Object(l.jsxs)("div",{className:"position-relative image-side ",children:[Object(l.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(l.jsx)("p",{className:"white mb-0",children:"Yes, it is indeed!"})]}),Object(l.jsxs)("div",{className:"form-side",children:[Object(l.jsx)(c.b,{to:"/",className:"white",children:Object(l.jsx)("span",{className:"logo-single"})}),Object(l.jsx)(s.a,{className:"mb-4",children:Object(l.jsx)(u.a,{id:"pages.error-title"})}),n,Object(l.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:Object(l.jsx)(u.a,{id:"pages.error-code"})}),Object(l.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"404"}),Object(l.jsx)(c.b,{to:d.b,className:"btn btn-primary btn-shadow btn-lg",children:Object(l.jsx)(u.a,{id:"pages.go-back-home"})})]})]})})})})})]})}}}]);
//# sourceMappingURL=views-error.3fcb843b.chunk.js.map