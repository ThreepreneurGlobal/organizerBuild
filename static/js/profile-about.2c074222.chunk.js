(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[22],{118:function(e,a,t){"use strict";t(6);var s=t(125),c=t(126),n=t(114),i=t(111),r=t(7),l=t(19),o=function(e){return"/".concat(e)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(e)})},b=function(e,a){return e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,s){return Object(l.jsx)(c.a,{active:t.length===s+1,children:t.length!==s+1?Object(l.jsx)(n.b,{to:"/".concat(b(a,e)),children:o(e)}):o(e)},s)}))})})};a.a=function(e){var a=e.heading,t=e.match;return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:a})}),t?Object(l.jsx)(d,{match:t}):null]})}},122:function(e,a,t){"use strict";var s=t(113),c=t(6),n=t(275),i=t(142),r=t(143),l=t(108),o=t.n(l),b=t(19);a.a=function(e){var a=e.id,t=e.className,l=e.color,d=e.size,j=e.children,u=e.onClick,m=e.next,O=e.successNext,h=Object(c.useState)("default"),p=Object(s.a)(h,2),f=p[0],x=p[1],g=Object(c.useState)(""),N=Object(s.a)(g,2),v=N[0],y=N[1],k=Object(c.useState)(!1),w=Object(s.a)(k,2),C=w[0],z=w[1];return Object(b.jsx)("span",{children:Object(b.jsxs)(n.a,{id:a,className:"btn-multiple-state  ".concat(t,"  ").concat(o()({"show-spinner":"processing"===f,"show-success":"success"===f,"show-fail":"fail"===f})),size:d,color:l,onClick:function(){x("processing"),u().then((function(e){y(e),x("success"),O&&O()})).catch((function(e){y(e),x("fail")})).finally((function(){z(!0),setTimeout((function(){x("default"),z(!1),m&&m()}),3e3)}))},disabled:"default"!==f,children:[Object(b.jsx)(i.a,{placement:"top",isOpen:C,target:a,children:Object(b.jsx)(r.a,{children:v})}),Object(b.jsxs)("span",{className:"spinner d-inline-block",children:[Object(b.jsx)("span",{className:"bounce1"}),Object(b.jsx)("span",{className:"bounce2"}),Object(b.jsx)("span",{className:"bounce3"})]}),Object(b.jsx)("span",{className:"icon success",children:Object(b.jsx)("i",{className:"simple-icon-check"})}),Object(b.jsx)("span",{className:"icon fail",children:Object(b.jsx)("i",{className:"simple-icon-exclamation"})}),Object(b.jsx)("span",{className:"label",children:j})]})})}},125:function(e,a,t){"use strict";var s=t(13),c=t(17),n=t(6),i=t.n(n),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,listTag:d.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},u=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,l=e.tag,o=e.listTag,j=e["aria-label"],u=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.m)(b()(a),n),O=Object(d.m)(b()("breadcrumb",t),n);return i.a.createElement(l,Object(s.a)({},u,{className:m,"aria-label":j}),i.a.createElement(o,{className:O},r))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},126:function(e,a,t){"use strict";var s=t(13),c=t(17),n=t(6),i=t.n(n),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(d.m)(b()(a,!!n&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(s.a)({},l,{className:o,"aria-current":n?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},a.a=u},128:function(e,a,t){"use strict";var s=t(13),c=t(17),n=t(6),i=t.n(n),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.q,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,n=e.row,r=e.disabled,l=e.check,o=e.inline,j=e.tag,u=Object(c.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.m)(b()(a,!!n&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!r)&&"disabled"),t);return"fieldset"===j&&(u.disabled=r),i.a.createElement(j,Object(s.a)({},u,{className:m}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},132:function(e,a,t){"use strict";var s=t(13),c=t(17),n=t(6),i=t.n(n),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j=l.a.oneOfType([l.a.number,l.a.string]),u=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:j,order:j,offset:j})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.q,className:l.a.string,cssModule:l.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:l.a.array},O={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,n=e.hidden,r=e.widths,l=e.tag,o=e.check,j=e.size,u=e.for,m=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),O=[];r.forEach((function(a,s){var c=e[a];if(delete m[a],c||""===c){var n,i=!s;if(Object(d.k)(c)){var r,l=i?"-":"-"+a+"-";n=h(i,a,c.size),O.push(Object(d.m)(b()(((r={})[n]=c.size||""===c.size,r["order"+l+c.order]=c.order||0===c.order,r["offset"+l+c.offset]=c.offset||0===c.offset,r))),t)}else n=h(i,a,c),O.push(n)}}));var p=Object(d.m)(b()(a,!!n&&"sr-only",!!o&&"form-check-label",!!j&&"col-form-label-"+j,O,!!O.length&&"col-form-label"),t);return i.a.createElement(l,Object(s.a)({htmlFor:u},m,{className:p}))};p.propTypes=m,p.defaultProps=O,a.a=p},142:function(e,a,t){"use strict";var s=t(13),c=t(6),n=t.n(c),i=t(108),r=t.n(i),l=t(137),o=function(e){var a=r()("popover","show",e.popperClassName),t=r()("popover-inner",e.innerClassName);return n.a.createElement(l.a,Object(s.a)({},e,{popperClassName:a,innerClassName:t}))};o.propTypes=l.b,o.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},a.a=o},143:function(e,a,t){"use strict";var s=t(13),c=t(17),n=t(6),i=t.n(n),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),l=Object(d.m)(b()(a,"popover-body"),t);return i.a.createElement(n,Object(s.a)({},r,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},422:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t.n(s),n=t(11),i=t(30),r=t(1),l=t(113),o=t(6),b=t(29),d=t(217),j=t(218),u=t(275),m=t(408),O=t(219),h=t(128),p=t(132),f=t(627),x=t(111),g=t(116),N=t(118),v=t(7),y=t(122),k=t(9),w=t(0),C=t(12),z=t(19),P={updateProfileAction:w.vb};a.default=Object(b.b)((function(e){var a=e.history,t=e.authUser;return{currentUser:t.currentUser,profileData:t.profileData,history:a}}),P)((function(e){var a=e.match,t=e.currentUser.email,s=Object(k.f)(),b=s.user_id,w=s.id,P=s.instagram,M=s.organization_name,T=s.representative_name,_=s.linkedin,E=s.contact_no,U=s.address,S=s.bio,q=s.websiteUrl,A=s.country;console.log(w);var F=Object(o.useState)(!1),I=Object(l.a)(F,2),B=I[0],R=I[1],D=Object(o.useState)({organization_name:M,representative_name:T,instagram:P,linkedin:_,contact_no:E,address:U,bio:S,websiteUrl:q,country:A}),J=Object(l.a)(D,2),L=J[0],W=J[1],Y=function(e,a){W(Object(r.a)(Object(r.a)({},L),{},Object(i.a)({},a,e.target.value)))},G=function(){var e=Object(n.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)({method:"POST",url:"/updateProfile",data:Object(r.a)({user_id:b,id:w},a)});case 2:if(t=e.sent,!t.data.success){e.next=7;break}return Object(k.m)(Object(r.a)(Object(r.a)({},s),a)),e.abrupt("return",new Promise((function(e){e("Profile updated successfully!")})));case 7:return e.abrupt("return",new Promise((function(){console.log("failed!")})));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(d.a,{children:Object(z.jsxs)(g.a,{xxs:"12",children:[Object(z.jsx)(N.a,{heading:"menu.about",match:a}),Object(z.jsx)(g.b,{className:"mb-5"})]})}),Object(z.jsx)(d.a,{className:"justify-content-center",children:Object(z.jsx)(g.a,{xxs:"12",md:"8",children:Object(z.jsxs)(j.a,{className:"mb-4",children:[Object(z.jsx)("div",{className:"position-absolute card-top-buttons",children:Object(z.jsx)(u.a,{outline:!0,color:"primary",onClick:function(){R(!B)},className:"icon-button",children:Object(z.jsx)("i",{className:"simple-icon-pencil"})})}),Object(z.jsxs)(m.a,{children:[Object(z.jsx)(O.a,{children:Object(z.jsx)("h2",{className:"lead",children:Object(z.jsx)(x.a,{id:"user.update-about"})})}),Object(z.jsx)(g.b,{className:"mb-3"}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Name | College | Institute | Company"})}),Object(z.jsx)(f.a,{type:"text",name:"Organization Name | College | Institute | Company",value:L.organization_name,onChange:function(e){Y(e,"organization_name")},disabled:!B})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Email"})}),Object(z.jsx)(f.a,{type:"text",name:"email",value:t,disabled:!0})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Representative Name"})}),Object(z.jsx)(f.a,{type:"text",name:"Representative_Name",value:L.representative_name,onChange:function(e){Y(e,"representative_name")},disabled:!B})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Country"})}),Object(z.jsx)(f.a,{type:"text",name:"country",value:L.country,onChange:function(e){Y(e,"country")},disabled:!B})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Address"})}),Object(z.jsx)(f.a,{type:"text",name:"address",value:L.address,onChange:function(e){Y(e,"address")},disabled:!B})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Bio"})}),Object(z.jsx)(f.a,{type:"textarea",name:"bio",rows:"6",placeholder:"About Yourself",value:L.bio,onChange:function(e){Y(e,"bio")},disabled:!B})]}),Object(z.jsxs)(h.a,{className:"mb-3",children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(x.a,{id:"Organization Social Profile"})}),Object(z.jsx)(f.a,{type:"text",name:"linkedin",placeholder:"Linkedin Profile",value:L.linkedin,onChange:function(e){Y(e,"linkedin")},disabled:!B}),Object(z.jsx)("br",{}),Object(z.jsx)(f.a,{type:"text",name:"Instagram",placeholder:"Instagram Profile",value:L.instagram,onChange:function(e){Y(e,"instagram")},disabled:!B}),Object(z.jsx)("br",{}),Object(z.jsx)(f.a,{type:"text",name:"website",placeholder:"Website URL",value:L.websiteUrl,onChange:function(e){Y(e,"websiteUrl")},disabled:!B})]}),B&&Object(z.jsx)(h.a,{className:"text-center",children:Object(z.jsx)(y.a,{id:"submitAndNextButton",color:"primary",onClick:function(){return G(L)},next:function(){R(!1)},children:Object(z.jsx)(x.a,{id:"forms.submit"})})})]})]})})}),Object(z.jsx)(d.a,{children:Object(z.jsx)(g.a,{children:Object(z.jsx)(h.a,{className:"text-center",children:Object(z.jsx)(u.a,{color:"primary",disabled:B,className:"m-3",href:"".concat(v.b,"/profile/education"),children:Object(z.jsx)(x.a,{id:"forms.next"})})})})})]})}))}}]);
//# sourceMappingURL=profile-about.2c074222.chunk.js.map