(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[11],{116:function(e,t,c){"use strict";c(5);var a=c(127),n=c(128),s=c(113),r=c(109),i=c(7),j=c(17),l=function(e){return"/".concat(e)===i.b?Object(j.jsx)(r.a,{id:"menu.home"}):Object(j.jsx)(r.a,{id:"menu.".concat(e)})},o=function(e,t){return e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),c=t.split("/").filter(Boolean);return c[c.length-1].indexOf(":")>-1&&(c=c.filter((function(e){return-1===e.indexOf(":")}))),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:c.map((function(e,a){return Object(j.jsx)(n.a,{active:c.length===a+1,children:c.length!==a+1?Object(j.jsx)(s.b,{to:"/".concat(o(t,e)),children:l(e)}):l(e)},a)}))})})};t.a=function(e){var t=e.heading,c=e.match;return Object(j.jsxs)(j.Fragment,{children:[t&&Object(j.jsx)("h1",{children:Object(j.jsx)(r.a,{id:t})}),Object(j.jsx)(d,{match:c})]})}},118:function(e,t,c){"use strict";var a=c(111),n=c(5),s=c(263),r=c(140),i=c(141),j=c(105),l=c.n(j),o=c(17);t.a=function(e){var t=e.id,c=e.className,j=e.color,d=e.size,b=e.children,u=e.onClick,h=e.next,O=Object(n.useState)("default"),x=Object(a.a)(O,2),f=x[0],m=x[1],p=Object(n.useState)(""),g=Object(a.a)(p,2),v=g[0],k=g[1],N=Object(n.useState)(!1),w=Object(a.a)(N,2),y=w[0],q=w[1];return Object(o.jsx)("span",{children:Object(o.jsxs)(s.a,{id:t,className:"btn-multiple-state  ".concat(c,"  ").concat(l()({"show-spinner":"processing"===f,"show-success":"success"===f,"show-fail":"fail"===f})),size:d,color:j,onClick:function(){m("processing"),u().then((function(e){k(e),m("success")})).catch((function(e){k(e),m("fail")})).finally((function(){q(!0),setTimeout((function(){m("default"),q(!1),h&&h()}),3e3)}))},disabled:"default"!==f,children:[Object(o.jsx)(r.a,{placement:"top",isOpen:y,target:t,children:Object(o.jsx)(i.a,{children:v})}),Object(o.jsxs)("span",{className:"spinner d-inline-block",children:[Object(o.jsx)("span",{className:"bounce1"}),Object(o.jsx)("span",{className:"bounce2"}),Object(o.jsx)("span",{className:"bounce3"})]}),Object(o.jsx)("span",{className:"icon success",children:Object(o.jsx)("i",{className:"simple-icon-check"})}),Object(o.jsx)("span",{className:"icon fail",children:Object(o.jsx)("i",{className:"simple-icon-exclamation"})}),Object(o.jsx)("span",{className:"label",children:b})]})})}},246:function(e,t,c){"use strict";c(5);var a=c(206),n=c(263),s=c(639),r=c(17);t.a=function(e){var t=e.index,c=e.setShowIndex,i=e.showingIndex,j=e.item;return Object(r.jsxs)(a.a,{className:"d-flex mb-2",children:[Object(r.jsx)("div",{className:"d-flex flex-grow-1 min-width-zero",children:Object(r.jsx)(n.a,{color:"link",className:"card-body btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return c(t)},"aria-expanded":i===t,children:j.question})}),Object(r.jsx)(s.a,{isOpen:i===t,children:Object(r.jsx)("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:j.answer}})})]})}},621:function(e,t,c){"use strict";c.r(t);var a=c(111),n=c(5),s=c(205),r=c(206),i=c(399),j=c(263),l=c(665),o=c(358),d=c(139),b=c(4),u=c.n(b),h=c(15),O=c(1),x=c(343),f=c(344),m=c(149),p=c(635),g=c(346),v=c(16),k=c(109),N=c(10),w=c(118),y=c(17),q=function(e){var t=e.setOpenAddModal,c=e.id,s=Object(n.useState)({hackathon_id:c,question:"",answer:""}),r=Object(a.a)(s,2),i=r[0],l=r[1],o=Object(N.c)().access_token,b=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l(Object(O.a)(Object(O.a)({},i),{},{[t]:c?e:e.target.value}))},q=function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){(function(){var a=Object(h.a)(u.a.mark((function a(){var n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(v.a)({method:"POST",url:"/addFaqs",data:{faqs:Object(O.a)({},t)},headers:{Authorization:"Bearer ".concat(o)}});case 3:n=a.sent,n.data.success?(l(Object(O.a)(Object(O.a)({},i),t)),e("Hackathon updated successfully!")):c("Failed to update hackathon!"),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0),c("Failed to update hackathon!");case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}})()()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(x.a,{children:Object(y.jsx)("h2",{className:"lead",children:Object(y.jsx)(k.a,{id:"challenges.modal.application-add-faq-title"})})}),Object(y.jsxs)(f.a,{children:[Object(y.jsxs)(d.a,{children:[Object(y.jsx)(m.a,{children:Object(y.jsx)(k.a,{id:"challenges.modal.faq"})}),Object(y.jsx)(p.a,{type:"text",value:i.question,onChange:function(e){return b(e,"question")}})]}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)(m.a,{children:Object(y.jsx)(k.a,{id:"challenges.modal.faq-description"})}),Object(y.jsx)(p.a,{type:"textarea",rows:"6",value:i.answer,onChange:function(e){return b(e,"answer")}})]})]}),Object(y.jsxs)(g.a,{children:[Object(y.jsx)(w.a,{id:"add-faq-button",color:"secondary",onClick:function(){return q(i)},children:Object(y.jsx)(k.a,{id:"challenges.modal.application-add"})}),Object(y.jsx)(j.a,{color:"danger",onClick:function(){return t(!1)},children:Object(y.jsx)(k.a,{id:"challenges.modal.application-cancel"})})]})]})},S=c(114),F=c(7),C=c(116),z=c(28),I=c(246),_=function(e){var t=e.id,c=void 0===t?1:t,s=Object(n.useState)(!0),j=Object(a.a)(s,2),l=j[0],o=j[1],d=Object(n.useState)([]),b=Object(a.a)(d,2),O=b[0],x=b[1],f=Object(n.useState)(""),m=Object(a.a)(f,2),p=m[0],g=m[1],w=Object(n.useState)(0),q=Object(a.a)(w,2),S=q[0],F=q[1],C=Object(N.c)().access_token,_=function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.a)({method:"GET",url:"/getFaqs/".concat(c),headers:{Authorization:"Bearer ".concat(C)}});case 3:(t=e.sent).data.success?x(t.data.faqs):g(t.data.message),o(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message),o(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){_()}),[]),p)throw new z.a(p);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(r.a,{className:"mb-4",children:Object(y.jsx)(i.a,{children:Object(y.jsx)("h3",{className:"h3",children:Object(y.jsx)(k.a,{id:"challenges.added-judges"})})})}),l?Object(y.jsx)("div",{className:"d-flex justify-content-center m-4",children:Object(y.jsx)("div",{className:"spinner-border",role:"status",children:Object(y.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(y.jsx)(y.Fragment,{children:O.map((function(e,t){return Object(y.jsx)(I.a,{item:e,index:t,showingIndex:S,setShowIndex:F},"faqItem_".concat(t))}))})]})};t.default=function(e){var t=e.match,c=t.params.id;if(!c)throw new z.a("Please provide a Hackathon ID");var b=Object(n.useState)(!1),u=Object(a.a)(b,2),h=u[0],O=u[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{children:Object(y.jsxs)(S.a,{xxs:"12",children:[Object(y.jsx)(C.a,{heading:"menu.faq",match:t}),Object(y.jsx)(S.b,{className:"mb-5"})]})}),Object(y.jsxs)(s.a,{className:"justify-content-center",children:[Object(y.jsx)(S.a,{xxs:"12",md:"6",children:Object(y.jsx)(_,{id:c})}),Object(y.jsx)(S.a,{xxs:"12",md:"6",children:Object(y.jsx)(r.a,{children:Object(y.jsxs)(i.a,{children:[Object(y.jsx)(s.a,{className:"justify-content-center m-2",children:Object(y.jsx)(j.a,{onClick:function(){return O(!0)},children:Object(y.jsx)(k.a,{id:"challenges.add-faq-button"})})}),Object(y.jsx)(s.a,{className:"justify-content-center m-2",children:Object(y.jsx)(l.a,{type:"checkbox",label:Object(y.jsx)(k.a,{id:"challenges.add-faq-checkbox"})})}),Object(y.jsx)(o.a,{isOpen:h,toggle:function(){return O(!h)},children:Object(y.jsx)(q,{setOpenAddModal:O,id:c})})]})})})]}),Object(y.jsx)(s.a,{children:Object(y.jsx)(S.a,{children:Object(y.jsx)(d.a,{className:"text-center",children:Object(y.jsx)(j.a,{color:"primary",className:"m-3",href:"".concat(F.b,"/challenges/sponsors/").concat(c),children:Object(y.jsx)(k.a,{id:"forms.previous"})})})})})]})}}}]);
//# sourceMappingURL=challenges-faq-view.db6584f8.chunk.js.map