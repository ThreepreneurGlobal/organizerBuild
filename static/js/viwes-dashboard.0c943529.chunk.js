(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[29],{116:function(e,t,r){"use strict";r(5);var o=r(126),a=r(127),l=r(114),n=r(109),c=r(7),i=r(17),s=function(e){return"/".concat(e)===c.b?Object(i.jsx)(n.a,{id:"menu.home"}):Object(i.jsx)(n.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},h=function(e){var t=e.match.path.substr(1),r=t.split("/").filter(Boolean);return r[r.length-1].indexOf(":")>-1&&(r=r.filter((function(e){return-1===e.indexOf(":")}))),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:r.map((function(e,o){return Object(i.jsx)(a.a,{active:r.length===o+1,children:r.length!==o+1?Object(i.jsx)(l.b,{to:"/".concat(d(t,e)),children:s(e)}):s(e)},o)}))})})};t.a=function(e){var t=e.heading,r=e.match;return Object(i.jsxs)(i.Fragment,{children:[t&&Object(i.jsx)("h1",{children:Object(i.jsx)(n.a,{id:t})}),Object(i.jsx)(h,{match:r})]})}},159:function(e,t,r){"use strict";var o=r(4),a=r.n(o),l=r(15),n=r(110),c=r(5),i=r(20),s=r.n(i),d=r(16),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data",r=Object(c.useState)(!0),o=Object(n.a)(r,2),i=o[0],s=o[1],h=Object(c.useState)(""),m=Object(n.a)(h,2),u=m[0],b=m[1],j=Object(c.useState)(!1),C=Object(n.a)(j,3),g=C[0],p=C[1],x=C[2];return Object(c.useEffect)((function(){e?function(){var r=Object(l.a)(a.a.mark((function r(){var o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(d.a)({method:"GET",url:e});case 3:(o=r.sent).data.success?p(o.data[t]):b(o.data.message),s(!1),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),b(r.t0.message),s(!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()():b("Please Provide a Uri!")}),[]),{loading:i,data:g,error:u,remove:x}};t.a=h,h.propTypes={url:s.a.string.isRequired,key:s.a.string.isRequired,refresh:s.a.bool}},645:function(e,t,r){"use strict";r.r(t);r(5);var o=r(207),a=r(109),l=r(113),n=r(116),c=r(17);t.default=function(e){var t=e.match;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.a,{xxs:"12",children:[Object(c.jsx)(n.a,{heading:"menu.blank-page",match:t}),Object(c.jsx)(l.b,{className:"mb-5"})]})}),Object(c.jsx)(o.a,{children:Object(c.jsx)(l.a,{xxs:"12",className:"mb-4",children:Object(c.jsx)("p",{children:Object(c.jsx)(a.a,{id:"menu.blank-page"})})})})]})}},661:function(e,t,r){"use strict";r.r(t);var o=r(5),a=r.n(o),l=r(207),n=r(208),c=r(393),i=r(113),s=r(116),d=r(110),h=r(394),m=function(){var e=getComputedStyle(document.body);return{themeColor1:e.getPropertyValue("--theme-color-1").trim(),themeColor2:e.getPropertyValue("--theme-color-2").trim(),themeColor3:e.getPropertyValue("--theme-color-3").trim(),themeColor4:e.getPropertyValue("--theme-color-4").trim(),themeColor5:e.getPropertyValue("--theme-color-5").trim(),themeColor6:e.getPropertyValue("--theme-color-6").trim(),themeColor1_10:e.getPropertyValue("--theme-color-1-10").trim(),themeColor2_10:e.getPropertyValue("--theme-color-2-10").trim(),themeColor3_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor4_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor5_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor6_10:e.getPropertyValue("--theme-color-3-10").trim(),primaryColor:e.getPropertyValue("--primary-color").trim(),foregroundColor:e.getPropertyValue("--foreground-color").trim(),separatorColor:e.getPropertyValue("--separator-color").trim()}},u={backgroundColor:m().foregroundColor,titleFontColor:m().primaryColor,borderColor:m().separatorColor,borderWidth:.5,bodyFontColor:m().primaryColor,bodySpacing:10,xPadding:15,yPadding:15,cornerRadius:.15},b={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:100,min:300,max:800,padding:20}}],xAxes:[{gridLines:{display:!1}}]},tooltips:u},j=r(17),C=function(e){var t=e.data,r=e.shadow,a=void 0!==r&&r,l=Object(o.useRef)(null),n=Object(o.useState)(null),c=Object(d.a)(n,2)[1];return Object(o.useEffect)((function(){if(l&&l.current){a&&(h.Chart.defaults.global.datasets.barWithShadow=h.Chart.defaults.global.datasets.bar,h.Chart.defaults.barWithShadow=h.Chart.defaults.bar,h.Chart.controllers.barWithShadow=h.Chart.controllers.bar.extend({draw:function(e){h.Chart.controllers.bar.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=5,t.shadowOffsetY=7,t.responsive=!0,h.Chart.controllers.bar.prototype.draw.apply(this,arguments),t.restore()}}));var e=l.current.getContext("2d"),r=new h.Chart(e,{type:a?"barWithShadow":"bar",options:b,data:t});c(r)}}),[l,t,a]),Object(j.jsx)("canvas",{ref:l})},g=r(1),p=r(109),x=function(e){var t=e.className,r=void 0===t?"mb-4":t,o=e.icon,a=e.title,l=e.value;return Object(j.jsx)("div",{className:"icon-row-item ".concat(r),children:Object(j.jsx)(n.a,{children:Object(j.jsxs)(c.a,{className:"text-center",children:[Object(j.jsx)("i",{className:o}),Object(j.jsx)("p",{className:"card-text font-weight-semibold mb-0",children:Object(j.jsx)(p.a,{id:a})}),Object(j.jsx)("p",{className:"lead text-center",children:l})]})})})},O=a.a.memo(x),f=r(396),v=r(10),y=(r(397),-1),_=-1;function w(e){var t,r,l=function(){clearTimeout(y),y=setTimeout((function(){r.update(),y=-1}),500)};Object(o.useEffect)((function(){return(r=new f.a(t,Object(g.a)(Object(g.a)({},e.settings),{},{direction:Object(v.d)().direction}))).mount(),r.on("resize",l),_=setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),500),function(){clearTimeout(y),clearTimeout(_),r&&r.destroy()}}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"glide",ref:function(e){return t=e},children:[Object(j.jsx)("div",{"data-glide-el":"track",className:"glide__track",children:Object(j.jsx)("div",{className:"glide__slides",children:e.children})}),!e.settings.hideNav&&Object(j.jsxs)("div",{className:"glide__arrows slider-nav","data-glide-el":"controls",children:[Object(j.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--left left-arrow btn btn-link","data-glide-dir":"<",children:Object(j.jsx)("i",{className:"simple-icon-arrow-left"})}),Object(j.jsx)("div",{className:"glide__bullets slider-dot-container","data-glide-el":"controls[nav]",children:function(){for(var t=a.a.Children.count(e.children),r=[],o=0;o<t;o++)r.push(Object(j.jsx)("button",{type:"button",className:"glide__bullet slider-dot","data-glide-dir":"=".concat(o)},o));return r}()}),Object(j.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--right right-arrow btn btn-link","data-glide-dir":">",children:Object(j.jsx)("i",{className:"simple-icon-arrow-right"})})]})]})})}w.defaultProps={settings:{}};var N=w,k=function(e){var t=e.className,r=void 0===t?"icon-cards-row":t,o=e.data;console.log(o);var a=[{title:"dashboards.total-hackathons",icon:"iconsminds-clock",value:o.length},{title:"dashboards.total-submissions",icon:"iconsminds-arrow-refresh",value:0},{title:"dashboards.total-created",icon:"iconsminds-basket-coins",value:0},{title:"dashboards.on-going-hackathons",icon:"iconsminds-clock",value:0}];return Object(j.jsx)("div",{className:r,children:Object(j.jsx)(N,{settings:{gap:5,perView:4,type:"carousel",breakpoints:{320:{perView:1},576:{perView:2},1600:{perView:3},1800:{perView:4}},hideNav:!0},children:a.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(O,Object(g.a)(Object(g.a)({},e),{},{className:"mb-4"}))},"icon_card_".concat(t))}))})})},P=m(),V=(P.themeColor1,P.foregroundColor,P.themeColor1,P.themeColor1,P.foregroundColor,P.themeColor1,P.themeColor2,P.themeColor3,P.themeColor1_10,P.themeColor2_10,P.themeColor3_10,P.themeColor1,P.foregroundColor,P.themeColor1,P.themeColor1,P.foregroundColor,P.themeColor1_10,P.themeColor1,P.themeColor1_10,P.themeColor2,P.themeColor2_10,{labels:["January","February","March","April","May","June"],datasets:[{label:"Cakes",borderColor:P.themeColor1,backgroundColor:P.themeColor1_10,data:[456,479,324,569,702,600],borderWidth:2},{label:"Desserts",borderColor:P.themeColor2,backgroundColor:P.themeColor2_10,data:[364,504,605,400,345,320],borderWidth:2}]}),S=(P.themeColor1,P.themeColor1,P.themeColor1_10,P.themeColor2,P.themeColor2,P.themeColor2_10,P.themeColor1,P.themeColor2,P.themeColor3,P.themeColor1_10,P.themeColor2_10,P.themeColor3_10,P.themeColor3,P.themeColor2,P.themeColor1,P.themeColor3_10,P.themeColor2_10,P.themeColor1_10,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor1,P.themeColor2,P.foregroundColor,P.themeColor2,P.themeColor2,P.foregroundColor,P.themeColor2_10,r(159)),E=r(28);t.default=function(e){var t=e.match,r=Object(v.c)().id,o=Object(S.a)("/getHackathonList/".concat(r)),a=o.loading,d=o.data,h=o.error;if(a)return Object(j.jsx)("div",{className:"loading"});if(h)throw new E.a(h);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{children:Object(j.jsxs)(i.a,{xxs:"12",children:[Object(j.jsx)(s.a,{heading:"menu.dashboard",match:t}),Object(j.jsx)(i.b,{className:"mb-5"})]})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(i.a,{xxs:"8",children:Object(j.jsx)(k,{data:d})})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(i.a,{xxs:8,children:Object(j.jsx)(n.a,{children:Object(j.jsx)(c.a,{children:Object(j.jsx)("div",{className:"chart-container",children:Object(j.jsx)(C,{data:V,shadow:!0})})})})})})]})}}}]);
//# sourceMappingURL=viwes-dashboard.0c943529.chunk.js.map