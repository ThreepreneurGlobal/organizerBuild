(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[17],{164:function(e,t,o){"use strict";var r=o(105),a=o(3),l=o(108),c=o(101),n=o(175),i=o(344),s=o(318),d=o(319),h=o(359),m=o(267),b=o(268),u=o(352),j=o(320),C=o(24),g=o.n(C),O=o(8),p=o(103),f=o(16);t.a=Object(l.h)((function(e){var t=e.className,o=(e.actionSet,Object(a.useState)([])),C=Object(r.a)(o,2);C[0],C[1];Object(a.useEffect)((function(){}),[]);var x=Object(a.useState)(!1),v=Object(r.a)(x,2),y=v[0],_=v[1],w=Object(a.useState)(null),k=Object(r.a)(w,2),S=k[0],N=k[1],P=Object(a.useState)(null),V=Object(r.a)(P,2),z=V[0],E=V[1],R=Object(a.useState)(!1),W=Object(r.a)(R,2),D=W[0],L=W[1],A=Object(a.useState)(null),T=Object(r.a)(A,2),H=T[0],I=T[1],J=function(){var t=JSON.parse(window.localStorage.getItem("sn_user"));console.log("user Id",t);var o={name:S,organizer_id:t.id,hackathon_type_id:z};g.a.post(O.c+"/createHackathon",o).then((function(t){var o=t.data;!0===o.success?(window.localStorage.setItem("current_hack_id",o.details.id),L(!0),e.actionSet()):I(o.message)}))},F=function(){return _(!y)};Object(l.g)();return console.log(z,S),Object(f.jsxs)("div",{children:[Object(f.jsx)(n.a,{color:"primary",onClick:F,children:"Organize Hackathon"}),Object(f.jsxs)(i.a,{isOpen:y,toggle:F,className:t,children:[Object(f.jsxs)(s.a,{toggle:F,children:[Object(f.jsx)("h6",{children:"Great Decision"}),Object(f.jsx)("h1",{children:"Lets get you started"})]}),Object(f.jsx)(d.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(m.a,{children:[Object(f.jsx)(b.a,{for:"OrganizerName",children:"Name"}),Object(f.jsx)(u.a,{type:"text",name:"Name",id:"organizerName",placeholder:"Enter Your Name",onChange:function(e){!function(e){var t=e.target.value;N(t)}(e),I(null)}}),null!=H&&H]}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(b.a,{for:"Hackathon",children:"Hackathon"}),Object(f.jsxs)("select",{value:z,onChange:function(e){E(e.target.value)},style:{width:"100%",height:"35px"},children:[Object(f.jsx)("option",{value:"0",children:"Select Hackathon Type"}),Object(f.jsx)("option",{value:"1",children:"Online"}),Object(f.jsx)("option",{value:"2",children:"Blenders"}),Object(f.jsx)("option",{value:"3",children:"Offline"})]})]})]})}),Object(f.jsx)(j.a,{children:D?Object(f.jsx)(c.a,{children:Object(f.jsx)(n.a,{color:"primary",className:"m-3",onClick:J,href:"".concat(O.b,"/Challenges/add-challenges"),children:Object(f.jsx)(p.a,{id:"forms.next"})})}):Object(f.jsxs)(c.a,{children:[Object(f.jsx)(n.a,{color:"primary",className:"m-3",onClick:J,children:Object(f.jsx)(p.a,{id:"forms.begin"})}),Object(f.jsx)(n.a,{color:"secondary",onClick:F,children:"Cancel"})," "]})})]})]})}))},368:function(e,t,o){"use strict";o.r(t);var r=o(1),a=o(105),l=o(3),c=o(340),n=o(16),i={display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",transition:"border .3s ease-in-out"},s={borderColor:"#2196f3"},d={borderColor:"#00e676"},h={borderColor:"#ff1744"};t.default=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),o=t[0],m=t[1],b=Object(l.useCallback)((function(e){m(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}),[]),u=Object(c.a)({onDrop:b,accept:"image/jpeg, image/png",size:"300px*200px"}),j=u.getRootProps,C=u.getInputProps,g=u.isDragActive,O=u.isDragAccept,p=u.isDragReject,f=Object(l.useMemo)((function(){return Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},i),g?s:{}),O?d:{}),p?h:{})}),[g,p,O]),x=o.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e.preview,alt:e.name})},e.name)}));return Object(l.useEffect)((function(){return function(){o.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[o]),Object(n.jsxs)("section",{children:[Object(n.jsxs)("div",Object(r.a)(Object(r.a)({},j({style:f})),{},{children:[Object(n.jsx)("input",Object(r.a)({},C())),Object(n.jsx)("div",{children:"Drag and drop or click to choose"})]})),Object(n.jsx)("aside",{children:x})]})}},375:function(e,t,o){"use strict";o.r(t);var r=o(3),a=o.n(r),l=o(153),c=o(104),n=o(125),i=o(105),s=function(){var e=getComputedStyle(document.body);return{themeColor1:e.getPropertyValue("--theme-color-1").trim(),themeColor2:e.getPropertyValue("--theme-color-2").trim(),themeColor3:e.getPropertyValue("--theme-color-3").trim(),themeColor4:e.getPropertyValue("--theme-color-4").trim(),themeColor5:e.getPropertyValue("--theme-color-5").trim(),themeColor6:e.getPropertyValue("--theme-color-6").trim(),themeColor1_10:e.getPropertyValue("--theme-color-1-10").trim(),themeColor2_10:e.getPropertyValue("--theme-color-2-10").trim(),themeColor3_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor4_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor5_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor6_10:e.getPropertyValue("--theme-color-3-10").trim(),primaryColor:e.getPropertyValue("--primary-color").trim(),foregroundColor:e.getPropertyValue("--foreground-color").trim(),separatorColor:e.getPropertyValue("--separator-color").trim()}},d=s(),h=(d.themeColor1,d.foregroundColor,d.themeColor1,d.themeColor1,d.foregroundColor,d.themeColor1,d.themeColor2,d.themeColor3,d.themeColor1_10,d.themeColor2_10,d.themeColor3_10,d.themeColor1,d.foregroundColor,d.themeColor1,d.themeColor1,d.foregroundColor,d.themeColor1_10,d.themeColor1,d.themeColor1_10,d.themeColor2,d.themeColor2_10,{labels:["January","February","March","April","May","June"],datasets:[{label:"Cakes",borderColor:d.themeColor1,backgroundColor:d.themeColor1_10,data:[456,479,324,569,702,600],borderWidth:2},{label:"Desserts",borderColor:d.themeColor2,backgroundColor:d.themeColor2_10,data:[364,504,605,400,345,320],borderWidth:2}]}),m=(d.themeColor1,d.themeColor1,d.themeColor1_10,d.themeColor2,d.themeColor2,d.themeColor2_10,d.themeColor1,d.themeColor2,d.themeColor3,d.themeColor1_10,d.themeColor2_10,d.themeColor3_10,d.themeColor3,d.themeColor2,d.themeColor1,d.themeColor3_10,d.themeColor2_10,d.themeColor1_10,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor1,d.themeColor2,d.foregroundColor,d.themeColor2,d.themeColor2,d.foregroundColor,d.themeColor2_10,{backgroundColor:s().foregroundColor,titleFontColor:s().primaryColor,borderColor:s().separatorColor,borderWidth:.5,bodyFontColor:s().primaryColor,bodySpacing:10,xPadding:15,yPadding:15,cornerRadius:.15}),b={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:100,min:300,max:800,padding:20}}],xAxes:[{gridLines:{display:!1}}]},tooltips:m},u=o(16);function j(){}var C=function(e){var t=e.data,o=e.shadow,a=void 0!==o&&o,l=Object(r.useRef)(null),c=Object(r.useState)(null),n=Object(i.a)(c,2)[1];return Object(r.useEffect)((function(){if(l&&l.current){a&&(h.defaults.global.datasets.barWithShadow=h.defaults.global.datasets.bar,h.defaults.barWithShadow=h.defaults.bar,h.controllers.barWithShadow=h.controllers.bar.extend({draw:function(e){h.controllers.bar.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=5,t.shadowOffsetY=7,t.responsive=!0,h.controllers.bar.prototype.draw.apply(this,arguments),t.restore()}}));var e=new j(l.current.getContext("2d"),{type:a?"barWithShadow":"bar",options:b,data:t});n(e)}}),[l,t,a]),Object(u.jsx)("canvas",{ref:l})},g=(o(164),o(1)),O=(o(154),o(360),o(103),o(321)),p=o(12),f=(o(322),-1),x=-1;function v(e){var t,o,l=function(){clearTimeout(f),f=setTimeout((function(){o.update(),f=-1}),500)};Object(r.useEffect)((function(){return(o=new O.a(t,Object(g.a)(Object(g.a)({},e.settings),{},{direction:Object(p.d)().direction}))).mount(),o.on("resize",l),x=setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),500),function(){clearTimeout(f),clearTimeout(x),o&&o.destroy()}}),[]);return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"glide",ref:function(e){return t=e},children:[Object(u.jsx)("div",{"data-glide-el":"track",className:"glide__track",children:Object(u.jsx)("div",{className:"glide__slides",children:e.children})}),!e.settings.hideNav&&Object(u.jsxs)("div",{className:"glide__arrows slider-nav","data-glide-el":"controls",children:[Object(u.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--left left-arrow btn btn-link","data-glide-dir":"<",children:Object(u.jsx)("i",{className:"simple-icon-arrow-left"})}),Object(u.jsx)("div",{className:"glide__bullets slider-dot-container","data-glide-el":"controls[nav]",children:function(){for(var t=a.a.Children.count(e.children),o=[],r=0;r<t;r++)o.push(Object(u.jsx)("button",{type:"button",className:"glide__bullet slider-dot","data-glide-dir":"=".concat(r)},r));return o}()}),Object(u.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--right right-arrow btn btn-link","data-glide-dir":">",children:Object(u.jsx)("i",{className:"simple-icon-arrow-right"})})]})]})})}v.defaultProps={settings:{}};t.default=function(e){var t=e.match;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(c.a,{xxs:"9",children:[Object(u.jsx)(n.a,{heading:"menu.dashboard",match:t}),Object(u.jsx)(c.b,{className:"mb-5"})]}),Object(u.jsx)(c.a,{xxs:"3"})]}),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(c.a,{xxs:"8"}),Object(u.jsx)(c.a,{xxs:"4",xl:"4"})]}),Object(u.jsx)(l.a,{children:Object(u.jsx)(c.a,{xxs:8,children:Object(u.jsx)(C,{})})})]})}}}]);
//# sourceMappingURL=viwes-blank-page.dc07799b.chunk.js.map