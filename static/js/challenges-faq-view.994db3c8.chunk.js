(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[13],{116:function(e,a,t){"use strict";t(5);var n=t(126),c=t(127),s=t(114),i=t(109),r=t(7),l=t(17),o=function(e){return"/".concat(e)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(e)})},d=function(e,a){return e.split(a)[0]+a},j=function(e){var a=e.match.path.substr(1),t=a.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,n){return Object(l.jsx)(c.a,{active:t.length===n+1,children:t.length!==n+1?Object(l.jsx)(s.b,{to:"/".concat(d(a,e)),children:o(e)}):o(e)},n)}))})})};a.a=function(e){var a=e.heading,t=e.match;return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:a})}),Object(l.jsx)(j,{match:t})]})}},118:function(e,a,t){"use strict";var n=t(110),c=t(5),s=t(263),i=t(148),r=t(149),l=t(105),o=t.n(l),d=t(17);a.a=function(e){var a=e.id,t=e.className,l=e.color,j=e.size,u=e.children,b=e.onClick,h=e.next,O=Object(c.useState)("default"),m=Object(n.a)(O,2),f=m[0],x=m[1],p=Object(c.useState)(""),v=Object(n.a)(p,2),g=v[0],N=v[1],y=Object(c.useState)(!1),w=Object(n.a)(y,2),k=w[0],S=w[1];return Object(d.jsx)("span",{children:Object(d.jsxs)(s.a,{id:a,className:"btn-multiple-state  ".concat(t,"  ").concat(o()({"show-spinner":"processing"===f,"show-success":"success"===f,"show-fail":"fail"===f})),size:j,color:l,onClick:function(){x("processing"),b().then((function(e){N(e),x("success")})).catch((function(e){N(e),x("fail")})).finally((function(){S(!0),setTimeout((function(){x("default"),S(!1),h&&h()}),3e3)}))},disabled:"default"!==f,children:[Object(d.jsx)(i.a,{placement:"top",isOpen:k,target:a,children:Object(d.jsx)(r.a,{children:g})}),Object(d.jsxs)("span",{className:"spinner d-inline-block",children:[Object(d.jsx)("span",{className:"bounce1"}),Object(d.jsx)("span",{className:"bounce2"}),Object(d.jsx)("span",{className:"bounce3"})]}),Object(d.jsx)("span",{className:"icon success",children:Object(d.jsx)("i",{className:"simple-icon-check"})}),Object(d.jsx)("span",{className:"icon fail",children:Object(d.jsx)("i",{className:"simple-icon-exclamation"})}),Object(d.jsx)("span",{className:"label",children:u})]})})}},247:function(e,a,t){"use strict";t(5);var n=t(208),c=t(263),s=t(638),i=t(17);a.a=function(e){var a=e.index,t=e.setShowIndex,r=e.showingIndex,l=e.item;return Object(i.jsxs)(n.a,{className:"d-flex mb-2",children:[Object(i.jsx)("div",{className:"d-flex flex-grow-1 min-width-zero",children:Object(i.jsx)(c.a,{color:"link",className:"card-body btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return t(a)},"aria-expanded":r===a,children:l.question})}),Object(i.jsx)(s.a,{isOpen:r===a,children:Object(i.jsx)("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:l.answer}})})]})}},252:function(e,a,t){"use strict";var n=t(11),c=t(14),s=t(5),i=t.n(s),r=t(20),l=t.n(r),o=t(105),d=t.n(o),j=t(106),u=t(119),b=t(117),h={className:l.a.string,id:l.a.oneOfType([l.a.string,l.a.number]).isRequired,label:l.a.node,valid:l.a.bool,invalid:l.a.bool,bsSize:l.a.string,htmlFor:l.a.string,cssModule:l.a.object,onChange:l.a.func,children:l.a.oneOfType([l.a.node,l.a.array,l.a.func]),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},O=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={files:null},t.onChange=t.onChange.bind(Object(u.a)(t)),t}Object(b.a)(a,e);var t=a.prototype;return t.onChange=function(e){var a=e.target,t=this.props.onChange,n=this.getSelectedFiles(a);"function"===typeof t&&t.apply(void 0,arguments),this.setState({files:n})},t.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var a=e.value.split("\\");return a[a.length-1]}return e.value},t.render=function(){var e=this.props,a=e.className,t=e.label,s=e.valid,r=e.invalid,l=e.cssModule,o=e.children,u=(e.bsSize,e.innerRef),b=e.htmlFor,h=(e.type,e.onChange,e.dataBrowse),O=e.hidden,m=Object(c.a)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse","hidden"]),f=Object(j.m)(d()(a,"custom-file"),l),x=Object(j.m)(d()(r&&"is-invalid",s&&"is-valid"),l),p=b||m.id,v=this.state.files;return i.a.createElement("div",{className:f,hidden:O||!1},i.a.createElement("input",Object(n.a)({type:"file"},m,{ref:u,"aria-invalid":r,className:d()(x,Object(j.m)("custom-file-input",l)),onChange:this.onChange})),i.a.createElement("label",{className:Object(j.m)("custom-file-label",l),htmlFor:p,"data-browse":h},v||t||"Choose file"),o)},a}(i.a.Component);O.propTypes=h;var m=O,f={className:l.a.string,id:l.a.oneOfType([l.a.string,l.a.number]).isRequired,type:l.a.string.isRequired,label:l.a.node,inline:l.a.bool,valid:l.a.bool,invalid:l.a.bool,bsSize:l.a.string,htmlFor:l.a.string,cssModule:l.a.object,children:l.a.oneOfType([l.a.node,l.a.array,l.a.func]),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])};function x(e){var a=e.className,t=e.label,s=e.inline,r=e.valid,l=e.invalid,o=e.cssModule,u=e.children,b=e.bsSize,h=e.innerRef,O=e.htmlFor,f=Object(c.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),x=f.type,p=Object(j.m)(d()(a,"custom-"+x,!!b&&"custom-"+x+"-"+b),o),v=Object(j.m)(d()(l&&"is-invalid",r&&"is-valid"),o),g=O||f.id;if("select"===x){f.type;var N=Object(c.a)(f,["type"]);return i.a.createElement("select",Object(n.a)({},N,{ref:h,className:d()(v,p),"aria-invalid":l}),u)}if("file"===x)return i.a.createElement(m,e);if("checkbox"!==x&&"radio"!==x&&"switch"!==x)return i.a.createElement("input",Object(n.a)({},f,{ref:h,"aria-invalid":l,className:d()(v,p)}));var y=d()(p,Object(j.m)(d()("custom-control",{"custom-control-inline":s}),o)),w=f.hidden,k=Object(c.a)(f,["hidden"]);return i.a.createElement("div",{className:y,hidden:w||!1},i.a.createElement("input",Object(n.a)({},k,{type:"switch"===x?"checkbox":x,ref:h,"aria-invalid":l,className:d()(v,Object(j.m)("custom-control-input",o))})),i.a.createElement("label",{className:Object(j.m)("custom-control-label",o),htmlFor:g},t),u)}x.propTypes=f;a.a=x},616:function(e,a,t){"use strict";t.r(a);var n=t(110),c=t(5),s=t(207),i=t(208),r=t(393),l=t(263),o=t(252),d=t(623),j=t(147),u=t(4),b=t.n(u),h=t(15),O=t(1),m=t(585),f=t(586),x=t(166),p=t(634),v=t(652),g=t(16),N=t(109),y=t(10),w=t(118),k=t(17),S=function(e){var a=e.setOpenAddModal,t=e.id,s=Object(c.useState)({hackathon_id:t,question:"",answer:""}),i=Object(n.a)(s,2),r=i[0],o=i[1],d=Object(y.c)().access_token,u=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];o(Object(O.a)(Object(O.a)({},r),{},{[a]:t?e:e.target.value}))},S=function(){var e=Object(h.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){(function(){var n=Object(h.a)(b.a.mark((function n(){var c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(g.a)({method:"POST",url:"/addFaqs",data:{faqs:Object(O.a)({},a)},headers:{Authorization:"Bearer ".concat(d)}});case 3:c=n.sent,c.data.success?(o(Object(O.a)(Object(O.a)({},r),a)),e("Hackathon updated successfully!")):t("Failed to update hackathon!"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),t("Failed to update hackathon!");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}})()()})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.a,{children:Object(k.jsx)("h2",{className:"lead",children:Object(k.jsx)(N.a,{id:"challenges.modal.application-add-faq-title"})})}),Object(k.jsxs)(f.a,{children:[Object(k.jsxs)(j.a,{children:[Object(k.jsx)(x.a,{children:Object(k.jsx)(N.a,{id:"challenges.modal.faq"})}),Object(k.jsx)(p.a,{type:"text",value:r.question,onChange:function(e){return u(e,"question")}})]}),Object(k.jsxs)(j.a,{children:[Object(k.jsx)(x.a,{children:Object(k.jsx)(N.a,{id:"challenges.modal.faq-description"})}),Object(k.jsx)(p.a,{type:"textarea",rows:"6",value:r.answer,onChange:function(e){return u(e,"answer")}})]})]}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)(w.a,{id:"add-faq-button",color:"secondary",onClick:function(){return S(r)},next:function(){return window.location.reload()},children:Object(k.jsx)(N.a,{id:"challenges.modal.application-add"})}),Object(k.jsx)(l.a,{color:"danger",onClick:function(){return a(!1)},children:Object(k.jsx)(N.a,{id:"challenges.modal.application-cancel"})})]})]})},q=t(113),F=t(7),C=t(116),z=t(28),T=t(247),E=function(e){var a=e.id,t=void 0===a?1:a,s=Object(c.useState)(!0),l=Object(n.a)(s,2),o=l[0],d=l[1],j=Object(c.useState)([]),u=Object(n.a)(j,2),O=u[0],m=u[1],f=Object(c.useState)(""),x=Object(n.a)(f,2),p=x[0],v=x[1],w=Object(c.useState)(0),S=Object(n.a)(w,2),q=S[0],F=S[1],C=Object(y.c)().access_token,E=function(){var e=Object(h.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.a)({method:"GET",url:"/getFaqs/".concat(t),headers:{Authorization:"Bearer ".concat(C)}});case 3:(a=e.sent).data.success?m(a.data.faqs):v(a.data.message),d(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message),d(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(Object(c.useEffect)((function(){E()}),[]),p)throw new z.a(p);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(i.a,{className:"mb-4",children:Object(k.jsx)(r.a,{children:Object(k.jsx)("h3",{className:"h3",children:Object(k.jsx)(N.a,{id:"challenges.added-faqs"})})})}),o?Object(k.jsx)("div",{className:"d-flex justify-content-center m-4",children:Object(k.jsx)("div",{className:"loading",role:"status",children:Object(k.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(k.jsx)(k.Fragment,{children:O.map((function(e,a){return Object(k.jsx)(T.a,{item:e,index:a,showingIndex:q,setShowIndex:F},"faqItem_".concat(a))}))})]})};a.default=function(e){var a=e.match,t=a.params.id;if(!t)throw new z.a("Please provide a Hackathon ID");var u=Object(c.useState)(!1),b=Object(n.a)(u,2),h=b[0],O=b[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{children:Object(k.jsxs)(q.a,{xxs:"12",children:[Object(k.jsx)(C.a,{heading:"menu.faq",match:a}),Object(k.jsx)(q.b,{className:"mb-5"})]})}),Object(k.jsxs)(s.a,{className:"justify-content-center",children:[Object(k.jsx)(q.a,{xxs:"12",md:"6",children:Object(k.jsx)(E,{id:t})}),Object(k.jsx)(q.a,{xxs:"12",md:"6",children:Object(k.jsx)(i.a,{children:Object(k.jsxs)(r.a,{children:[Object(k.jsx)(s.a,{className:"justify-content-center m-2",children:Object(k.jsx)(l.a,{onClick:function(){return O(!0)},children:Object(k.jsx)(N.a,{id:"challenges.add-faq-button"})})}),Object(k.jsx)(s.a,{className:"justify-content-center m-2",children:Object(k.jsx)(o.a,{type:"checkbox",label:Object(k.jsx)(N.a,{id:"challenges.add-faq-checkbox"})})}),Object(k.jsx)(d.a,{isOpen:h,toggle:function(){return O(!h)},children:Object(k.jsx)(S,{setOpenAddModal:O,id:t})})]})})})]}),Object(k.jsx)(s.a,{children:Object(k.jsx)(q.a,{children:Object(k.jsx)(j.a,{className:"text-center",children:Object(k.jsx)(l.a,{color:"primary",className:"m-3",href:"".concat(F.b,"/challenges/sponsors/").concat(t),children:Object(k.jsx)(N.a,{id:"forms.previous"})})})})})]})}}}]);
//# sourceMappingURL=challenges-faq-view.994db3c8.chunk.js.map