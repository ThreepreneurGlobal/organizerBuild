(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[7],{119:function(a,e,t){"use strict";t(6);var c=t(124),n=t(125),s=t(114),i=t(111),r=t(7),l=t(19),o=function(a){return"/".concat(a)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(a)})},b=function(a,e){return a.split(e)[0]+e},u=function(a){var e=a.match.path.substr(1),t=e.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(a){return-1===a.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(a,c){return Object(l.jsx)(n.a,{active:t.length===c+1,children:t.length!==c+1?Object(l.jsx)(s.b,{to:"/".concat(b(e,a)),children:o(a)}):o(a)},c)}))})})};e.a=function(a){var e=a.heading,t=a.match;return Object(l.jsxs)(l.Fragment,{children:[e&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:e})}),t?Object(l.jsx)(u,{match:t}):null]})}},124:function(a,e,t){"use strict";var c=t(13),n=t(17),s=t(6),i=t.n(s),r=t(22),l=t.n(r),o=t(108),b=t.n(o),u=t(109),d={tag:u.q,listTag:u.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},j=function(a){var e=a.className,t=a.listClassName,s=a.cssModule,r=a.children,l=a.tag,o=a.listTag,d=a["aria-label"],j=Object(n.a)(a,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(u.m)(b()(e),s),h=Object(u.m)(b()("breadcrumb",t),s);return i.a.createElement(l,Object(c.a)({},j,{className:m,"aria-label":d}),i.a.createElement(o,{className:h},r))};j.propTypes=d,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=j},125:function(a,e,t){"use strict";var c=t(13),n=t(17),s=t(6),i=t.n(s),r=t(22),l=t.n(r),o=t(108),b=t.n(o),u=t(109),d={tag:u.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},j=function(a){var e=a.className,t=a.cssModule,s=a.active,r=a.tag,l=Object(n.a)(a,["className","cssModule","active","tag"]),o=Object(u.m)(b()(e,!!s&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(c.a)({},l,{className:o,"aria-current":s?"page":void 0}))};j.propTypes=d,j.defaultProps={tag:"li"},e.a=j},129:function(a,e,t){"use strict";var c=t(13),n=t(17),s=t(6),i=t.n(s),r=t(22),l=t.n(r),o=t(108),b=t.n(o),u=t(109),d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.q,className:l.a.string,cssModule:l.a.object},j=function(a){var e=a.className,t=a.cssModule,s=a.row,r=a.disabled,l=a.check,o=a.inline,d=a.tag,j=Object(n.a)(a,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(u.m)(b()(e,!!s&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!r)&&"disabled"),t);return"fieldset"===d&&(j.disabled=r),i.a.createElement(d,Object(c.a)({},j,{className:m}))};j.propTypes=d,j.defaultProps={tag:"div"},e.a=j},476:function(a,e,t){"use strict";t.r(e);var c=t(1),n=t(113),s=t(6),i=t.n(s),r=t(216),l=t(129),o=t(294),b=t(123),u=t(29),d=t(116),j=t(119),m=t(111),h=t(7),O=t(0),g=t(19),p=i.a.lazy((function(){return t.e(6).then(t.bind(null,607))}));e.default=Object(u.b)((function(a){var e=a.authUser,t=a.hackathonData;return{accessToken:e.accessToken,hackathonDetails:t.hackathonDetails,loading:t.loading,error:t.error}}),{updateAction:O.ub,getDetailsAction:O.lb})((function(a){var e=a.match,t=a.accessToken,i=a.updateAction,u=a.getDetailsAction,f=a.loading,x=a.hackathonDetails,v=Object(b.g)(),N=e.params.id;N||v.goBack(),Object(s.useEffect)((function(){i(N),u(t,N)}),[]);var k=Object(O.lb)(t,N).application,T=Object(s.useState)({id:N,application:k}),M=Object(n.a)(T,2),D=M[0],y=M[1];return Object(s.useEffect)((function(){y(Object(c.a)(Object(c.a)({},D),{},{application:x.application})),console.log("UPDATED",x.application)}),[x]),f?Object(g.jsx)("div",{className:"loading"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r.a,{children:Object(g.jsxs)(d.a,{xxs:"12",children:[Object(g.jsx)(j.a,{heading:"menu.application",match:e}),Object(g.jsx)(d.b,{className:"mb-5"})]})}),Object(g.jsx)(r.a,{className:"justify-content-center",children:Object(g.jsx)(d.a,{xxs:"12",md:"8",children:Object(g.jsx)(p,{id:N,formValues:D,setFormValues:y,accessToken:t})})}),Object(g.jsx)(r.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(l.a,{className:"text-center",children:[Object(g.jsx)(o.a,{color:"primary",className:"m-3",onClick:function(){return v.push("".concat(h.b,"/challenges/sponsors/").concat(N))},children:Object(g.jsx)(m.a,{id:"forms.previous"})}),Object(g.jsx)(o.a,{color:"primary",className:"m-3",onClick:function(){return v.push("".concat(h.b,"/challenges/faq/").concat(N))},children:Object(g.jsx)(m.a,{id:"forms.next"})})]})})})]})}))}}]);
//# sourceMappingURL=challenges-applicaiton-view.f705e9f4.chunk.js.map