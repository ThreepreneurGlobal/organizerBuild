(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[10],{119:function(e,t,c){"use strict";c(6);var a=c(124),n=c(125),s=c(114),i=c(111),r=c(7),o=c(19),l=function(e){return"/".concat(e)===r.b?Object(o.jsx)(i.a,{id:"menu.home"}):Object(o.jsx)(i.a,{id:"menu.".concat(e)})},d=function(e,t){return e.split(t)[0]+t},j=function(e){var t=e.match.path.substr(1),c=t.split("/").filter(Boolean);return c[c.length-1].indexOf(":")>-1&&(c=c.filter((function(e){return-1===e.indexOf(":")}))),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:c.map((function(e,a){return Object(o.jsx)(n.a,{active:c.length===a+1,children:c.length!==a+1?Object(o.jsx)(s.c,{to:"/".concat(d(t,e)),children:l(e)}):l(e)},a)}))})})};t.a=function(e){var t=e.heading,c=e.match;return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)("h1",{children:Object(o.jsx)(i.a,{id:t})}),c?Object(o.jsx)(j,{match:c}):null]})}},122:function(e,t,c){"use strict";var a=c(113),n=c(6),s=c(295),i=c(140),r=c(141),o=c(108),l=c.n(o),d=c(19);t.a=function(e){var t=e.id,c=e.className,o=e.color,j=e.size,h=e.children,u=e.onClick,b=e.next,m=e.successNext,O=Object(n.useState)("default"),p=Object(a.a)(O,2),x=p[0],g=p[1],f=Object(n.useState)(""),k=Object(a.a)(f,2),v=k[0],N=k[1],w=Object(n.useState)(!1),y=Object(a.a)(w,2),_=y[0],C=y[1];return Object(d.jsx)("span",{children:Object(d.jsxs)(s.a,{id:t,className:"btn-multiple-state  ".concat(c,"  ").concat(l()({"show-spinner":"processing"===x,"show-success":"success"===x,"show-fail":"fail"===x})),size:j,color:o,onClick:function(){g("processing"),u().then((function(e){N(e),g("success"),m&&m()})).catch((function(e){N(e),g("fail")})).finally((function(){C(!0),setTimeout((function(){g("default"),C(!1),b&&b()}),3e3)}))},disabled:"default"!==x,children:[Object(d.jsx)(i.a,{placement:"top",isOpen:_,target:t,children:Object(d.jsx)(r.a,{children:v})}),Object(d.jsxs)("span",{className:"spinner d-inline-block",children:[Object(d.jsx)("span",{className:"bounce1"}),Object(d.jsx)("span",{className:"bounce2"}),Object(d.jsx)("span",{className:"bounce3"})]}),Object(d.jsx)("span",{className:"icon success",children:Object(d.jsx)("i",{className:"simple-icon-check"})}),Object(d.jsx)("span",{className:"icon fail",children:Object(d.jsx)("i",{className:"simple-icon-exclamation"})}),Object(d.jsx)("span",{className:"label",children:h})]})})}},479:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(11),i=c(31),r=c(1),o=c(113),l=c(6),d=c(601),j=c(218),h=c(219),u=c(410),b=c(220),m=c(129),O=c(625),p=c(173),x=c(152),g=c(267),f=c(295),k=c(123),v=c(116),N=c(7),w=c(119),y=c(30),_=c(9),C=c(111),T=c(12),S=c(122),I=c(19),H=!1,F=!1;t.default=function(e){var t=e.match,c=!1,a=!1,P=t.params.id;if(!P)throw new y.a("Please provide a Hackathon ID");var B=Object(k.g)(),z=Object(l.useState)([]),E=Object(o.a)(z,2),L=E[0],D=E[1];Object(l.useEffect)((function(){fetch("http://api.smart-natives.de/index.php/api/getdetails/".concat(P)).then((function(e){return e.json()})).then((function(e){console.log(e.getdetails.hackathon),D(e.getdetails.hackathon)}))}),[]),console.log(L);var J=Object(l.useState)({id:P,theme:null,hackathon_logo:null,hackathon_cover_img:null}),M=Object(o.a)(J,2),q=M[0],A=M[1],G=q.theme,K=Object(l.useState)("#000000"),Q=Object(o.a)(K,2),R=Q[0],U=Q[1],V=new FormData;V.append("id",P);var W=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.delete(t.target.id),V.append("".concat(t.target.id),q[t.target.id]),e.next=4,Object(T.a)({url:"/updateHackathon",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:V,timeout:1e5});case 4:c=!0,console.log(c,H),H&&(document.getElementById("check").innerHTML="Image uploaded successfully."),window.location.reload(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.delete(t.target.id),V.append("".concat(t.target.id),q[t.target.id]),e.next=4,Object(T.a)({url:"/updateHackathon",method:"POST",headers:{"Content-Type":"multipart/form-data"},data:V,timeout:1e5});case 4:a=!0,console.log(a,F),F&&(document.getElementById("check2").innerHTML="Image uploaded successfully."),window.location.reload(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(q),e.abrupt("return",new Promise((function(e,t){(function(){var c=Object(s.a)(n.a.mark((function c(){var a;return n.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(T.a)({method:"POST",url:"/updateHackathon",headers:{"Content-Type":"multipart/form-data"},data:V,timeout:2e5});case 3:return a=c.sent,c.next=6,Object(T.a)({method:"POST",url:"/updateHackathon",data:{id:P,theme_color_code:G},timeout:2e5});case 6:a.data.success,e("Hackathon updated successfully!"),Object(_.n)(1200,(function(){B.push("".concat(N.b,"/challenges/dates/").concat(P))})),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),t("Failed to update hackathon!");case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}})()()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(j.a,{children:Object(I.jsxs)(v.a,{xxs:"12",children:[Object(I.jsx)(w.a,{heading:"menu.brands",match:t}),Object(I.jsx)(v.b,{className:"mb-5"})]})}),Object(I.jsx)(j.a,{className:"justify-content-center",children:Object(I.jsxs)(v.a,{xxs:"12",md:"10",className:"mb-4",children:[Object(I.jsx)(h.a,{className:"mb-4",children:Object(I.jsxs)(u.a,{children:[Object(I.jsx)(b.a,{children:Object(I.jsx)("div",{className:"lead h4",children:Object(I.jsx)(C.a,{id:"challenges.theme-title"})})}),Object(I.jsx)(m.a,{className:"mb-6",children:Object(I.jsx)(O.a,{value:R,disabled:!0})}),Object(I.jsx)(m.a,{className:"mb-6 p-2",children:Object(I.jsx)(d.a,{width:"100%",color:R,onChange:function(e){U(e.hex),function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];A(Object(r.a)(Object(r.a)({},q),{},{theme:c?e:e.target.value}))}(e.hex,"theme_color_code",!0)}})})]})}),Object(I.jsx)(h.a,{className:"mb-4",children:Object(I.jsxs)(u.a,{children:[Object(I.jsx)(b.a,{children:Object(I.jsx)("div",{className:"lead h4",children:Object(I.jsx)(C.a,{id:"challenges.hackthon-logo-title"})})}),Object(I.jsxs)("div",{className:"form-group mb-6",children:[Object(I.jsx)("img",{className:"mb-2",id:"checkImg",src:c?q.hackathon_logo:L.hackathon_logo,alt:"BigCo Inc. logo",width:"70",height:"60"}),Object(I.jsxs)(p.a,{children:[Object(I.jsx)(x.a,{type:"file",id:"hackathon_logo",name:"customFile",accept:"image/jpeg, image/jpg, image/png",onChange:function(e){A(Object(r.a)(Object(r.a)({},q),{},Object(i.a)({},e.target.id,e.target.files[0]))),H=!0,console.log(H)}}),Object(I.jsx)(g.a,{addonType:"append",children:Object(I.jsx)(f.a,{outline:!0,color:"secondary",onClick:W,id:"hackathon_logo",children:Object(I.jsx)(C.a,{id:"challenges.upload-button"})})})]}),Object(I.jsx)("p",{id:"check",children:" "})]})]})}),Object(I.jsx)(h.a,{className:"mb-4",children:Object(I.jsxs)(u.a,{children:[Object(I.jsx)(b.a,{children:Object(I.jsx)("div",{className:"lead h4",children:Object(I.jsx)(C.a,{id:"challenges.hackthon-cover-image-title"})})}),Object(I.jsxs)("div",{className:"form-group mb-6",children:[Object(I.jsx)("div",{children:Object(I.jsx)("img",{className:"mb-2",id:"check2Img",src:a?q.hackathon_cover_img:L.hackathon_cover_img,alt:"BigCo Inc. logo",width:"70",height:"60"})}),Object(I.jsxs)(p.a,{children:[Object(I.jsx)(x.a,{type:"file",id:"hackathon_cover_img",name:"customFile",accept:"image/jpeg, image/jpg, image/png",onChange:function(e){A(Object(r.a)(Object(r.a)({},q),{},Object(i.a)({},e.target.id,e.target.files[0]))),F=!0}}),Object(I.jsx)(g.a,{addonType:"append",children:Object(I.jsx)(f.a,{outline:!0,color:"secondary",id:"hackathon_cover_img",onClick:X,children:Object(I.jsx)(C.a,{id:"challenges.upload-button"})})})]}),Object(I.jsx)("p",{id:"check2",children:" "})]})]})}),Object(I.jsx)(m.a,{className:"text-center mb-4",children:Object(I.jsx)(S.a,{id:"submitLinks",color:"primary",type:"submit",onClick:function(){return Y(q)},children:Object(I.jsx)(C.a,{id:"forms.update"})})})]})})]})}}}]);
//# sourceMappingURL=challenges-brands-view.a2747d59.chunk.js.map