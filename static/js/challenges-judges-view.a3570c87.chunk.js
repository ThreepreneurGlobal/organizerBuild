(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[17],{118:function(e,t,c){"use strict";c(6);var a=c(125),n=c(126),s=c(114),i=c(111),r=c(7),l=c(19),j=function(e){return"/".concat(e)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(e)})},o=function(e,t){return e.split(t)[0]+t},d=function(e){var t=e.match.path.substr(1),c=t.split("/").filter(Boolean);return c[c.length-1].indexOf(":")>-1&&(c=c.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:c.map((function(e,a){return Object(l.jsx)(n.a,{active:c.length===a+1,children:c.length!==a+1?Object(l.jsx)(s.b,{to:"/".concat(o(t,e)),children:j(e)}):j(e)},a)}))})})};t.a=function(e){var t=e.heading,c=e.match;return Object(l.jsxs)(l.Fragment,{children:[t&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:t})}),c?Object(l.jsx)(d,{match:c}):null]})}},122:function(e,t,c){"use strict";var a=c(113),n=c(6),s=c(275),i=c(142),r=c(143),l=c(108),j=c.n(l),o=c(19);t.a=function(e){var t=e.id,c=e.className,l=e.color,d=e.size,u=e.children,b=e.onClick,x=e.next,h=e.successNext,O=Object(n.useState)("default"),m=Object(a.a)(O,2),p=m[0],f=m[1],g=Object(n.useState)(""),v=Object(a.a)(g,2),N=v[0],k=v[1],y=Object(n.useState)(!1),w=Object(a.a)(y,2),_=w[0],C=w[1];return Object(o.jsx)("span",{children:Object(o.jsxs)(s.a,{id:t,className:"btn-multiple-state  ".concat(c,"  ").concat(j()({"show-spinner":"processing"===p,"show-success":"success"===p,"show-fail":"fail"===p})),size:d,color:l,onClick:function(){f("processing"),b().then((function(e){k(e),f("success"),h&&h()})).catch((function(e){k(e),f("fail")})).finally((function(){C(!0),setTimeout((function(){f("default"),C(!1),x&&x()}),3e3)}))},disabled:"default"!==p,children:[Object(o.jsx)(i.a,{placement:"top",isOpen:_,target:t,children:Object(o.jsx)(r.a,{children:N})}),Object(o.jsxs)("span",{className:"spinner d-inline-block",children:[Object(o.jsx)("span",{className:"bounce1"}),Object(o.jsx)("span",{className:"bounce2"}),Object(o.jsx)("span",{className:"bounce3"})]}),Object(o.jsx)("span",{className:"icon success",children:Object(o.jsx)("i",{className:"simple-icon-check"})}),Object(o.jsx)("span",{className:"icon fail",children:Object(o.jsx)("i",{className:"simple-icon-exclamation"})}),Object(o.jsx)("span",{className:"label",children:u})]})})}},606:function(e,t,c){"use strict";c.r(t);var a=c(113),n=c(6),s=c(217),i=c(218),r=c(407),l=c(275),j=c(152),o=c(180),d=c(128),u=c(124),b=c(3),x=c.n(b),h=c(11),O=c(30),m=c(1),p=c(29),f=c(172),g=c(173),v=c(132),N=c(625),k=c(171),y=c(201),w=c(12),_=c(111),C=c(0),F=c(122),z=c(19),T=Object(p.b)((function(e){return{accessToken:e.authUser.accessToken}}),{getJudgeAction:C.mb})((function(e){var t=e.setOpenAddModal,c=e.id,s=e.accessToken;console.log(c);var i=Object(n.useState)({hackathon_id:c,name:"",job_title:"",company:"",profile_url:null,about:""}),r=Object(a.a)(i,2),o=r[0],u=r[1],b=new FormData,p=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];u(Object(m.a)(Object(m.a)({},o),{},Object(O.a)({},t,c?e:e.target.value)))},C=function(){var e=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.append("hackathon_id",c),b.append("name",o.name),b.append("job_title",o.job_title),b.append("company",o.company),b.append("about",o.about),b.append("profile_url",o.profile_url),e.abrupt("return",new Promise((function(e,c){(function(){var a=Object(h.a)(x.a.mark((function a(){var n;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,console.log(t),""!==t.name&&""!==t.job_title&&""!==t.company&&""!==t.about){a.next=6;break}c("Please enter valid details!"),a.next=11;break;case 6:return a.next=8,Object(w.a)({method:"POST",url:"/addJudges",headers:{Authorization:"Bearer ".concat(s),"Content-Type":"multipart/form-data"},data:b,timeout:1e5});case 8:n=a.sent,n.data.success?(u(Object(m.a)(Object(m.a)({},o),t)),e("Judge added successfully!")):c("Failed to add judge!");case 11:a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0),c("Failed to add judge!");case 17:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(){return a.apply(this,arguments)}})()()})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(f.a,{children:Object(z.jsx)("h2",{className:"lead",children:Object(z.jsx)(_.a,{id:"challenges.modal.application-add-judge-title"})})}),Object(z.jsxs)(g.a,{children:[Object(z.jsxs)(d.a,{children:[Object(z.jsx)(v.a,{children:Object(z.jsx)(_.a,{id:"challenges.modal.judge"})}),Object(z.jsx)(N.a,{type:"text",value:o.name,onChange:function(e){return p(e,"name")}})]}),Object(z.jsxs)(d.a,{children:[Object(z.jsx)(v.a,{children:Object(z.jsx)(_.a,{id:"challenges.modal.judge-title"})}),Object(z.jsx)(N.a,{type:"text",value:o.job_title,onChange:function(e){return p(e,"job_title")}})]}),Object(z.jsxs)(d.a,{children:[Object(z.jsx)(v.a,{children:Object(z.jsx)(_.a,{id:"challenges.modal.judge-company"})}),Object(z.jsx)(N.a,{type:"text",value:o.company,onChange:function(e){return p(e,"company")}})]}),Object(z.jsxs)(d.a,{children:[Object(z.jsx)(v.a,{children:Object(z.jsx)(_.a,{id:"challenges.modal.judge-description"})}),Object(z.jsx)(N.a,{type:"textarea",rows:"4",value:o.about,onChange:function(e){return p(e,"about")}})]}),Object(z.jsxs)(d.a,{children:[Object(z.jsx)(v.a,{children:Object(z.jsx)(_.a,{id:"challenges.modal.judge-upload-image"})}),Object(z.jsx)(k.a,{children:Object(z.jsx)(j.a,{type:"file",id:"profile_url",name:"customFile",accept:"image/jpeg, image/jpg, image/png",onChange:function(e){u(Object(m.a)(Object(m.a)({},o),{},Object(O.a)({},e.target.id,e.target.files[0]))),b.delete(e.target.id),b.append("".concat(e.target.id),o[e.target.id])}})})]})]}),Object(z.jsxs)(y.a,{children:[Object(z.jsx)(F.a,{id:"add-judge-button",color:"secondary",onClick:function(){return C(o)},successNext:function(){return window.location.reload()},children:Object(z.jsx)(_.a,{id:"challenges.modal.application-add"})}),Object(z.jsx)(l.a,{color:"danger",onClick:function(){return t(!1)},children:Object(z.jsx)(_.a,{id:"challenges.modal.application-cancel"})})]})]})})),J=c(116),A=c(7),S=c(118),P=c(31),D=c(220),B=c(295),M=c(114),U=function(e){var t=e.data,c=!1;return null!==t.profile_url.match(/\.(jpeg|jpg|gif|png)$/)&&(c=!0),Object(z.jsxs)(i.a,{className:"d-flex flex-row mb-4",children:[Object(z.jsx)(M.b,{to:t.profile_url,className:"d-flex",children:Object(z.jsx)("img",{src:c?t.profile_url:"/assets/img/profiles/l-2.jpg",alt:"Not Found",width:"100px",className:"m-4"})}),Object(z.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(z.jsx)(r.a,{className:" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(z.jsxs)("div",{className:"min-width-zero",children:[Object(z.jsx)(M.b,{to:t.profile_url,children:Object(z.jsx)(D.a,{className:"truncate mb-1",children:t.name})}),Object(z.jsx)(B.a,{className:"text-muted text-small mb-2",children:t.job_title})]})})})]})},E=Object(p.b)((function(e){var t=e.authUser,c=e.applicationData;return{accessToken:t.accessToken,judges:c.judges,loading:c.loading,error:c.error}}),{getJudgeAction:C.mb})((function(e){var t=e.id,c=e.getJudgeAction,a=e.accessToken,s=e.judges,l=e.loading,j=e.error;if(Object(n.useEffect)((function(){c(a,t)}),[]),j)throw new P.a(j);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(i.a,{className:"mb-4",children:Object(z.jsx)(r.a,{children:Object(z.jsx)("h3",{className:"h3",children:Object(z.jsx)(_.a,{id:"challenges.added-judges"})})})}),l?Object(z.jsx)("div",{className:"d-flex justify-content-center m-4",children:Object(z.jsx)("div",{className:"loading",role:"status",children:Object(z.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(z.jsx)(z.Fragment,{children:s.map((function(e){return Object(z.jsx)(U,{data:e},e.id)}))})]})}));t.default=function(e){var t=e.match,c=t.params.id;if(!c)throw new P.a("Please provide a Hackathon ID");var b=Object(u.g)(),x=Object(n.useState)(!1),h=Object(a.a)(x,2),O=h[0],m=h[1];return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(s.a,{children:Object(z.jsxs)(J.a,{xxs:"12",children:[Object(z.jsx)(S.a,{heading:"menu.judges",match:t}),Object(z.jsx)(J.b,{className:"mb-5"})]})}),Object(z.jsxs)(s.a,{className:"justify-content-center",children:[Object(z.jsx)(J.a,{xxs:"12",md:"6",children:Object(z.jsx)(E,{id:c})}),Object(z.jsx)(J.a,{xxs:"12",md:"6",children:Object(z.jsx)(i.a,{children:Object(z.jsxs)(r.a,{children:[Object(z.jsx)(s.a,{className:"justify-content-center m-2",children:Object(z.jsx)(l.a,{onClick:function(){return m(!0)},children:Object(z.jsx)(_.a,{id:"challenges.add-judge-button"})})}),Object(z.jsx)(s.a,{className:"justify-content-center m-2",children:Object(z.jsx)(j.a,{type:"checkbox",label:Object(z.jsx)(_.a,{id:"challenges.add-judge-checkbox"})})}),Object(z.jsx)(o.a,{isOpen:O,toggle:function(){return m(!O)},children:Object(z.jsx)(T,{setOpenAddModal:m,id:c})})]})})})]}),Object(z.jsx)(s.a,{children:Object(z.jsx)(J.a,{children:Object(z.jsxs)(d.a,{className:"text-center",children:[Object(z.jsx)(l.a,{color:"primary",className:"m-3",onClick:function(){return b.push("".concat(A.b,"/challenges/prizes/").concat(c))},children:Object(z.jsx)(_.a,{id:"forms.previous"})}),Object(z.jsx)(l.a,{color:"primary",className:"m-3",onClick:function(){return b.push("".concat(A.b,"/challenges/sponsors/").concat(c))},children:Object(z.jsx)(_.a,{id:"forms.next"})})]})})})]})}}}]);
//# sourceMappingURL=challenges-judges-view.a3570c87.chunk.js.map