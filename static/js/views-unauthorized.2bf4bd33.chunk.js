/*! For license information please see views-unauthorized.2bf4bd33.chunk.js.LICENSE.txt */
(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[12],{103:function(e,t,n){"use strict";var r=n(1),o=(n(3),n(151)),a=n(123),s=n(16);t.a=Object(a.c)((function(e){return Object(s.jsx)(o.a,Object(r.a)({},e))}),{withRef:!1})},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(1),o=(n(3),n(152)),a=n(16),s=function(e){return Object(a.jsx)(o.a,Object(r.a)(Object(r.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){var t=e.className;return Object(a.jsx)("div",{className:"separator ".concat(t)})}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),o=n(123),a=n(110);function s(){var e=r.useContext(o.a);return Object(a.c)(e),e}},151:function(e,t,n){"use strict";var r=n(106),o=n(3),a=n(115),s=n(110);function i(e){var t=Object(a.a)(),n=t.formatMessage,r=t.textComponent,s=void 0===r?o.Fragment:r,i=e.id,c=e.description,u=e.defaultMessage,d=e.values,l=e.children,f=e.tagName,b=void 0===f?s:f,m=n({id:i,description:c,defaultMessage:u},d,{ignoreTag:e.ignoreTag});return Array.isArray(m)||(m=[m]),"function"===typeof l?l(m):b?o.createElement(b,null,o.Children.toArray(m)):o.createElement(o.Fragment,null,m)}i.displayName="FormattedMessage";var c=o.memo(i,(function(e,t){var n=e.values,o=Object(r.__rest)(e,["values"]),a=t.values,i=Object(r.__rest)(t,["values"]);return Object(s.d)(a,n)&&Object(s.d)(o,i)}));c.displayName="MemoizedFormattedMessage",t.a=c},152:function(e,t,n){"use strict";var r=n(10),o=n(14),a=n(3),s=n.n(a),i=n(35),c=n.n(i),u=n(97),d=n.n(u),l=n(96),f=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:l.q,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(l.k)(o)){var s,i=a?"-":"-"+t+"-",f=g(a,t,o.size);u.push(Object(l.m)(d()(((s={})[f]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),n))}else{var b=g(a,t,o);u.push(b)}}})),u.length||u.push("col");var f=Object(l.m)(d()(t,u),n);return s.a.createElement(i,Object(r.a)({},c,{className:f}))};j.propTypes=m,j.defaultProps=p,t.a=j},153:function(e,t,n){"use strict";var r=n(10),o=n(14),a=n(3),s=n.n(a),i=n(35),c=n.n(i),u=n(97),d=n.n(u),l=n(96),f=c.a.oneOfType([c.a.number,c.a.string]),b={tag:l.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,i=e.tag,c=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;b.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(l.m)(d()(t,a?"no-gutters":null,c?"form-row":"row",b),n);return s.a.createElement(i,Object(r.a)({},f,{className:m}))};p.propTypes=b,p.defaultProps=m,t.a=p},154:function(e,t,n){"use strict";var r=n(10),o=n(14),a=n(3),s=n.n(a),i=n(35),c=n.n(i),u=n(97),d=n.n(u),l=n(96),f={tag:l.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var t=e.className,n=e.cssModule,a=e.color,i=e.body,c=e.inverse,u=e.outline,f=e.tag,b=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(l.m)(d()(t,"card",!!c&&"text-white",!!i&&"card-body",!!a&&(u?"border":"bg")+"-"+a),n);return s.a.createElement(f,Object(r.a)({},m,{className:p,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},163:function(e,t,n){"use strict";var r=n(10),o=n(14),a=n(3),s=n.n(a),i=n(35),c=n.n(i),u=n(97),d=n.n(u),l=n(96),f={tag:l.q,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,a=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(l.m)(d()(t,"card-title"),n);return s.a.createElement(a,Object(r.a)({},i,{className:c}))};b.propTypes=f,b.defaultProps={tag:"div"},t.a=b},364:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(153),a=n(154),s=n(163),i=n(101),c=n(104),u=n(103),d=n(8),l=n(16);t.default=function(){return Object(r.useEffect)((function(){return document.body.classList.add("background"),document.body.classList.add("no-footer"),function(){document.body.classList.remove("background"),document.body.classList.remove("no-footer")}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"fixed-background"}),Object(l.jsx)("main",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(o.a,{className:"h-100",children:Object(l.jsx)(c.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(l.jsxs)(a.a,{className:"auth-card",children:[Object(l.jsxs)("div",{className:"position-relative image-side ",children:[Object(l.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(l.jsx)("p",{className:"white mb-0",children:"Yes, it is indeed!"})]}),Object(l.jsxs)("div",{className:"form-side",children:[Object(l.jsx)(i.b,{to:"/",className:"white",children:Object(l.jsx)("span",{className:"logo-single"})}),Object(l.jsx)(s.a,{className:"mb-4",children:Object(l.jsx)(u.a,{id:"unauthorized.title"})}),Object(l.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:Object(l.jsx)(u.a,{id:"unauthorized.detail"})}),Object(l.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"503"}),Object(l.jsx)(i.b,{to:d.b,className:"btn btn-primary btn-shadow btn-lg",children:Object(l.jsx)(u.a,{id:"pages.go-back-home"})})]})]})})})})})]})}},96:function(e,t,n){"use strict";n.d(t,"p",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return l})),n.d(t,"s",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return j})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return y})),n.d(t,"l",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"k",(function(){return E})),n.d(t,"j",(function(){return A})),n.d(t,"h",(function(){return k}));var r,o=n(35),a=n.n(o);function s(e){document.body.style.paddingRight=e>0?e+"px":null}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&s(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function l(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var m="object"===typeof window&&window.Element||function(){};function p(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var g=a.a.oneOfType([a.a.string,a.a.func,p,a.a.shape({current:a.a.any})]),j=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},x={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],w=!("undefined"===typeof window||!window.document||!window.document.createElement);function N(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function E(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function T(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!E(e))return!1;var t=N(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&w){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function M(e){return null!==e&&(Array.isArray(e)||w&&"number"===typeof e.length)}function A(e,t){var n=T(e);return t?M(n)?n:null===n?[]:[n]:M(n)?n[0]:n}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},97:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=o.apply(null,r);s&&e.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=views-unauthorized.2bf4bd33.chunk.js.map