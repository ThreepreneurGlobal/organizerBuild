(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[22],{118:function(e,a,t){"use strict";t(6);var s=t(125),n=t(126),c=t(114),i=t(111),r=t(7),l=t(19),o=function(e){return"/".concat(e)===r.b?Object(l.jsx)(i.a,{id:"menu.home"}):Object(l.jsx)(i.a,{id:"menu.".concat(e)})},b=function(e,a){return e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,s){return Object(l.jsx)(n.a,{active:t.length===s+1,children:t.length!==s+1?Object(l.jsx)(c.b,{to:"/".concat(b(a,e)),children:o(e)}):o(e)},s)}))})})};a.a=function(e){var a=e.heading,t=e.match;return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsx)("h1",{children:Object(l.jsx)(i.a,{id:a})}),t?Object(l.jsx)(d,{match:t}):null]})}},122:function(e,a,t){"use strict";var s=t(113),n=t(6),c=t(275),i=t(142),r=t(143),l=t(108),o=t.n(l),b=t(19);a.a=function(e){var a=e.id,t=e.className,l=e.color,d=e.size,j=e.children,u=e.onClick,m=e.next,O=e.successNext,p=Object(n.useState)("default"),f=Object(s.a)(p,2),h=f[0],x=f[1],g=Object(n.useState)(""),N=Object(s.a)(g,2),v=N[0],y=N[1],k=Object(n.useState)(!1),w=Object(s.a)(k,2),C=w[0],z=w[1];return Object(b.jsx)("span",{children:Object(b.jsxs)(c.a,{id:a,className:"btn-multiple-state  ".concat(t,"  ").concat(o()({"show-spinner":"processing"===h,"show-success":"success"===h,"show-fail":"fail"===h})),size:d,color:l,onClick:function(){x("processing"),u().then((function(e){y(e),x("success"),O&&O()})).catch((function(e){y(e),x("fail")})).finally((function(){z(!0),setTimeout((function(){x("default"),z(!1),m&&m()}),3e3)}))},disabled:"default"!==h,children:[Object(b.jsx)(i.a,{placement:"top",isOpen:C,target:a,children:Object(b.jsx)(r.a,{children:v})}),Object(b.jsxs)("span",{className:"spinner d-inline-block",children:[Object(b.jsx)("span",{className:"bounce1"}),Object(b.jsx)("span",{className:"bounce2"}),Object(b.jsx)("span",{className:"bounce3"})]}),Object(b.jsx)("span",{className:"icon success",children:Object(b.jsx)("i",{className:"simple-icon-check"})}),Object(b.jsx)("span",{className:"icon fail",children:Object(b.jsx)("i",{className:"simple-icon-exclamation"})}),Object(b.jsx)("span",{className:"label",children:j})]})})}},125:function(e,a,t){"use strict";var s=t(13),n=t(17),c=t(6),i=t.n(c),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,listTag:d.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},u=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,r=e.children,l=e.tag,o=e.listTag,j=e["aria-label"],u=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.m)(b()(a),c),O=Object(d.m)(b()("breadcrumb",t),c);return i.a.createElement(l,Object(s.a)({},u,{className:m,"aria-label":j}),i.a.createElement(o,{className:O},r))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},126:function(e,a,t){"use strict";var s=t(13),n=t(17),c=t(6),i=t.n(c),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,c=e.active,r=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),o=Object(d.m)(b()(a,!!c&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(s.a)({},l,{className:o,"aria-current":c?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},a.a=u},128:function(e,a,t){"use strict";var s=t(13),n=t(17),c=t(6),i=t.n(c),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.q,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,c=e.row,r=e.disabled,l=e.check,o=e.inline,j=e.tag,u=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.m)(b()(a,!!c&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!r)&&"disabled"),t);return"fieldset"===j&&(u.disabled=r),i.a.createElement(j,Object(s.a)({},u,{className:m}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},132:function(e,a,t){"use strict";var s=t(13),n=t(17),c=t(6),i=t.n(c),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j=l.a.oneOfType([l.a.number,l.a.string]),u=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:j,order:j,offset:j})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.q,className:l.a.string,cssModule:l.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:l.a.array},O={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,c=e.hidden,r=e.widths,l=e.tag,o=e.check,j=e.size,u=e.for,m=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),O=[];r.forEach((function(a,s){var n=e[a];if(delete m[a],n||""===n){var c,i=!s;if(Object(d.k)(n)){var r,l=i?"-":"-"+a+"-";c=p(i,a,n.size),O.push(Object(d.m)(b()(((r={})[c]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r))),t)}else c=p(i,a,n),O.push(c)}}));var f=Object(d.m)(b()(a,!!c&&"sr-only",!!o&&"form-check-label",!!j&&"col-form-label-"+j,O,!!O.length&&"col-form-label"),t);return i.a.createElement(l,Object(s.a)({htmlFor:u},m,{className:f}))};f.propTypes=m,f.defaultProps=O,a.a=f},142:function(e,a,t){"use strict";var s=t(13),n=t(6),c=t.n(n),i=t(108),r=t.n(i),l=t(137),o=function(e){var a=r()("popover","show",e.popperClassName),t=r()("popover-inner",e.innerClassName);return c.a.createElement(l.a,Object(s.a)({},e,{popperClassName:a,innerClassName:t}))};o.propTypes=l.b,o.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"},a.a=o},143:function(e,a,t){"use strict";var s=t(13),n=t(17),c=t(6),i=t.n(c),r=t(22),l=t.n(r),o=t(108),b=t.n(o),d=t(109),j={tag:d.q,className:l.a.string,cssModule:l.a.object},u=function(e){var a=e.className,t=e.cssModule,c=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.m)(b()(a,"popover-body"),t);return i.a.createElement(c,Object(s.a)({},r,{className:l}))};u.propTypes=j,u.defaultProps={tag:"div"},a.a=u},420:function(e,a,t){"use strict";t.r(a);var s=t(3),n=t.n(s),c=t(11),i=t(30),r=t(1),l=t(113),o=t(6),b=t(29),d=t(217),j=t(218),u=t(275),m=t(407),O=t(219),p=t(128),f=t(132),h=t(625),x=t(111),g=t(116),N=t(118),v=t(122),y=t(9),k=t(0),w=t(12),C=t(19),z={updateProfileAction:k.vb};a.default=Object(b.b)((function(e){var a=e.history,t=e.authUser;return{currentUser:t.currentUser,profileData:t.profileData,history:a}}),z)((function(e){var a=e.match,t=e.currentUser.email,s=Object(y.f)(),b=s.user_id,k=s.id,z=s.instagram,P=s.organization_name,M=s.representative_name,T=s.linkedin,_=s.contact_no,E=s.address,U=s.bio,S=s.websiteUrl,q=s.country;console.log(k);var A=Object(o.useState)(!1),F=Object(l.a)(A,2),I=F[0],B=F[1],R=Object(o.useState)({organization_name:P,representative_name:M,instagram:z,linkedin:T,contact_no:_,address:E,bio:U,websiteUrl:S,country:q}),D=Object(l.a)(R,2),J=D[0],L=D[1],W=function(e,a){L(Object(r.a)(Object(r.a)({},J),{},Object(i.a)({},a,e.target.value)))},Y=function(){var e=Object(c.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)({method:"POST",url:"/updateProfile",data:Object(r.a)({user_id:b,id:k},a)});case 2:if(t=e.sent,!t.data.success){e.next=7;break}return Object(y.m)(Object(r.a)(Object(r.a)({},s),a)),e.abrupt("return",new Promise((function(e){e("Profile updated successfully!")})));case 7:return e.abrupt("return",new Promise((function(){console.log("failed!")})));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(d.a,{children:Object(C.jsxs)(g.a,{xxs:"12",children:[Object(C.jsx)(N.a,{heading:"menu.about",match:a}),Object(C.jsx)(g.b,{className:"mb-5"})]})}),Object(C.jsx)(d.a,{className:"justify-content-center",children:Object(C.jsx)(g.a,{xxs:"12",md:"8",children:Object(C.jsxs)(j.a,{className:"mb-4",children:[Object(C.jsx)("div",{className:"position-absolute card-top-buttons",children:Object(C.jsx)(u.a,{outline:!0,color:"primary",onClick:function(){B(!I)},className:"icon-button",children:Object(C.jsx)("i",{className:"simple-icon-pencil"})})}),Object(C.jsxs)(m.a,{children:[Object(C.jsx)(O.a,{children:Object(C.jsx)("h2",{className:"lead",children:Object(C.jsx)(x.a,{id:"user.update-about"})})}),Object(C.jsx)(g.b,{className:"mb-3"}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Name | College | Institute | Company"})}),Object(C.jsx)(h.a,{type:"text",name:"Organization Name | College | Institute | Company",value:J.organization_name,onChange:function(e){W(e,"organization_name")},disabled:!I})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Email"})}),Object(C.jsx)(h.a,{type:"text",name:"email",value:t,disabled:!0})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Representative Name"})}),Object(C.jsx)(h.a,{type:"text",name:"Representative_Name",value:J.representative_name,onChange:function(e){W(e,"representative_name")},disabled:!I})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Country"})}),Object(C.jsx)(h.a,{type:"text",name:"country",value:J.country,onChange:function(e){W(e,"country")},disabled:!I})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Address"})}),Object(C.jsx)(h.a,{type:"text",name:"address",value:J.address,onChange:function(e){W(e,"address")},disabled:!I})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Bio"})}),Object(C.jsx)(h.a,{type:"textarea",name:"bio",rows:"6",placeholder:"About Yourself",value:J.bio,onChange:function(e){W(e,"bio")},disabled:!I})]}),Object(C.jsxs)(p.a,{className:"mb-3",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{id:"Organization Social Profile"})}),Object(C.jsx)(h.a,{type:"text",name:"linkedin",placeholder:"Linkedin Profile",value:J.linkedin,onChange:function(e){W(e,"linkedin")},disabled:!I}),Object(C.jsx)("br",{}),Object(C.jsx)(h.a,{type:"text",name:"Instagram",placeholder:"Instagram Profile",value:J.instagram,onChange:function(e){W(e,"instagram")},disabled:!I}),Object(C.jsx)("br",{}),Object(C.jsx)(h.a,{type:"text",name:"website",placeholder:"Website URL",value:J.websiteUrl,onChange:function(e){W(e,"websiteUrl")},disabled:!I})]}),I&&Object(C.jsx)(p.a,{className:"text-center",children:Object(C.jsx)(v.a,{id:"submitAndNextButton",color:"primary",onClick:function(){return Y(J)},next:function(){B(!1)},children:Object(C.jsx)(x.a,{id:"forms.submit"})})})]})]})})})]})}))}}]);
//# sourceMappingURL=profile-about.afe97fe1.chunk.js.map