(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[12],{119:function(e,a,t){"use strict";t(6);var c=t(124),s=t(125),n=t(114),l=t(111),i=t(7),r=t(19),o=function(e){return"/".concat(e)===i.b?Object(r.jsx)(l.a,{id:"menu.home"}):Object(r.jsx)(l.a,{id:"menu.".concat(e)})},j=function(e,a){return e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/").filter(Boolean);return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:t.map((function(e,c){return Object(r.jsx)(s.a,{active:t.length===c+1,children:t.length!==c+1?Object(r.jsx)(n.c,{to:"/".concat(j(a,e)),children:o(e)}):o(e)},c)}))})})};a.a=function(e){var a=e.heading,t=e.match;return Object(r.jsxs)(r.Fragment,{children:[a&&Object(r.jsx)("h1",{children:Object(r.jsx)(l.a,{id:a})}),t?Object(r.jsx)(d,{match:t}):null]})}},129:function(e,a,t){"use strict";var c=t(13),s=t(17),n=t(6),l=t.n(n),i=t(22),r=t.n(i),o=t(108),j=t.n(o),d=t(109),b={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:d.q,className:r.a.string,cssModule:r.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.row,i=e.disabled,r=e.check,o=e.inline,b=e.tag,m=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.m)(j()(a,!!n&&"row",r?"form-check":"form-group",!(!r||!o)&&"form-check-inline",!(!r||!i)&&"disabled"),t);return"fieldset"===b&&(m.disabled=i),l.a.createElement(b,Object(c.a)({},m,{className:h}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},131:function(e,a,t){"use strict";var c=t(13),s=t(17),n=t(6),l=t.n(n),i=t(22),r=t.n(i),o=t(108),j=t.n(o),d=t(109),b=r.a.oneOfType([r.a.number,r.a.string]),m=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:b,order:b,offset:b})]),h={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:d.q,className:r.a.string,cssModule:r.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:r.a.array},x={tag:"label",widths:["xs","sm","md","lg","xl"]},u=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,n=e.hidden,i=e.widths,r=e.tag,o=e.check,b=e.size,m=e.for,h=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),x=[];i.forEach((function(a,c){var s=e[a];if(delete h[a],s||""===s){var n,l=!c;if(Object(d.k)(s)){var i,r=l?"-":"-"+a+"-";n=u(l,a,s.size),x.push(Object(d.m)(j()(((i={})[n]=s.size||""===s.size,i["order"+r+s.order]=s.order||0===s.order,i["offset"+r+s.offset]=s.offset||0===s.offset,i))),t)}else n=u(l,a,s),x.push(n)}}));var O=Object(d.m)(j()(a,!!n&&"sr-only",!!o&&"form-check-label",!!b&&"col-form-label-"+b,x,!!x.length&&"col-form-label"),t);return l.a.createElement(r,Object(c.a)({htmlFor:m},h,{className:O}))};O.propTypes=h,O.defaultProps=x,a.a=O},174:function(e,a,t){"use strict";var c=t(3),s=t.n(c),n=t(11),l=t(113),i=t(6),r=t(22),o=t.n(r),j=t(12),d=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data",t=Object(i.useState)(!0),c=Object(l.a)(t,2),r=c[0],o=c[1],d=Object(i.useState)(""),b=Object(l.a)(d,2),m=b[0],h=b[1],x=Object(i.useState)(!1),u=Object(l.a)(x,3),O=u[0],f=u[1],g=u[2];return Object(i.useEffect)((function(){e?function(){var t=Object(n.a)(s.a.mark((function t(){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.a)({method:"GET",url:e});case 3:(c=t.sent).data.success?f(c.data[a]):h(c.data.message),o(!1),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),h(t.t0.message),o(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()():h("Please Provide a Uri!")}),[]),{loading:r,data:O,error:m,remove:g}};a.a=d,d.propTypes={url:o.a.string.isRequired,key:o.a.string.isRequired,refresh:o.a.bool}},259:function(e,a,t){"use strict";t(6);var c=t(219),s=t(295),n=t(631),l=t(19);a.a=function(e){var a=e.index,t=e.setShowIndex,i=e.showingIndex,r=e.item;return Object(l.jsxs)(c.a,{className:"d-flex mb-2",children:[Object(l.jsx)("div",{className:"d-flex flex-grow-1 min-width-zero",children:Object(l.jsx)(s.a,{color:"link",className:"card-body btn-empty btn-link list-item-heading text-left text-one",onClick:function(){return t(a)},"aria-expanded":i===a,children:r.question})}),Object(l.jsx)(n.a,{isOpen:i===a,children:Object(l.jsx)("div",{className:"card-body accordion-content pt-0",dangerouslySetInnerHTML:{__html:r.answer}})})]})}},260:function(e,a,t){"use strict";t(6);var c=t(219),s=t(410),n=t(187),l=t(188),i=t(114),r=t(19);a.a=function(e){var a=e.data,t=!1;return null!==a.profile_url.match(/\.(jpeg|jpg|gif|png)$/)&&(t=!0),Object(r.jsxs)(c.a,{className:"d-flex flex-row mb-4",children:[Object(r.jsx)(i.c,{to:a.profile_url,className:"d-flex",children:Object(r.jsx)("img",{src:t?a.profile_url:"/assets/img/profiles/l-2.jpg",alt:"Not Found",width:"100px",className:"m-4"})}),Object(r.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(r.jsx)(s.a,{className:" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(r.jsxs)("div",{className:"min-width-zero",children:[Object(r.jsx)(i.c,{to:a.profile_url,children:Object(r.jsx)(n.a,{className:"truncate mb-1",children:a.name})}),Object(r.jsx)(l.a,{className:"text-muted text-small mb-2",children:a.job_title})]})})})]})}},261:function(e,a,t){"use strict";t(6);var c=t(219),s=t(410),n=t(187),l=t(114),i=t(19);a.a=function(e){var a=e.data,t=!1;return null!==a.logo.match(/\.(jpeg|jpg|gif|png)$/)&&(t=!0),Object(i.jsxs)(c.a,{className:"d-flex flex-row mb-4",children:[Object(i.jsx)(l.c,{to:a.logo,className:"d-flex",children:Object(i.jsx)("img",{src:t?a.logo:"/assets/img/profiles/l-2.jpg",alt:"Not Found",width:"100px",className:"m-4"})}),Object(i.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(i.jsx)(s.a,{className:" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(i.jsx)("div",{className:"min-width-zero",children:Object(i.jsx)(l.c,{to:a.logo,children:Object(i.jsx)(n.a,{className:"truncate mb-1",children:a.name})})})})})]})}},262:function(e,a,t){"use strict";t(6);var c=t(219),s=t(410),n=t(187),l=t(188),i=t(114),r=t(164),o=t(19);a.a=function(e){var a,t=e.data,j=!1,d="https://";return null!==(null===t||void 0===t||null===(a=t.profile_photo)||void 0===a?void 0:a.match(/\.(jpeg|jpg|gif|png)$/))&&(j=!0),Object(o.jsxs)(c.a,{className:"d-flex flex-row mb-4",children:[Object(o.jsx)(i.c,{to:{pathname:d+t.url},className:"d-flex",children:Object(o.jsx)("img",{src:j?t.profile_photo:r.a,alt:"Not Found",width:"100px",className:"m-4"})}),Object(o.jsx)("div",{className:" d-flex flex-grow-1 min-width-zero",children:Object(o.jsxs)(s.a,{className:" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:[Object(o.jsxs)("div",{className:"min-width-zero",children:[Object(o.jsx)(i.c,{to:{pathname:d+t.url},target:"_blank",children:Object(o.jsx)(n.a,{className:"truncate mb-1",children:t.full_name})}),Object(o.jsx)(l.a,{className:"text-muted text-small mb-2",children:t.contact_no}),Object(o.jsx)(l.a,{className:"theme-color-blueyale mb-2",children:Object(o.jsx)(i.b,{to:{pathname:d+t.url},rel:"noreferrer",target:"_blank",className:"theme-color-bluenavy",children:"Solution Link"})}),Object(o.jsx)(l.a,{className:" mb-2",children:Object(o.jsx)(i.b,{to:{pathname:d+t.video_file},rel:"noreferrer",target:"_blank",className:"theme-color-bluenavy",children:"Solution video File"})})]}),Object(o.jsx)(l.a,{className:"text-muted text-small mb-2",children:t.created_at.substring(0,9)})]})})]})}},602:function(e,a,t){"use strict";t.r(a);var c=t(113),s=t(6),n=t.n(s),l=t(218),i=t(295),r=t(219),o=t(13),j=t(17),d=t(22),b=t.n(d),m=t(108),h=t.n(m),x=t(109),u={tag:x.q,className:b.a.string,cssModule:b.a.object},O=function(e){var a=e.className,t=e.cssModule,c=e.tag,s=Object(j.a)(e,["className","cssModule","tag"]),l=Object(x.m)(h()(a,"card-header"),t);return n.a.createElement(c,Object(o.a)({},s,{className:l}))};O.propTypes=u,O.defaultProps={tag:"div"};var f=O,g=t(116),p=t(119),v=t(30),N=t(111),k=t(629),w=t(630),I=t(411),_=t(19),y=function(e){var a=e.activeTab,t=e.setActiveTab;return Object(_.jsxs)(k.a,{tabs:!0,className:"card-header-tabs",children:[Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"basics"===a,"nav-link":!0}),onClick:function(){return t("basics")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.basics"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"links"===a,"nav-link":!0}),onClick:function(){return t("links")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.links"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"dates"===a,"nav-link":!0}),onClick:function(){return t("dates")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.dates"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"prizes"===a,"nav-link":!0}),onClick:function(){return t("prizes")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.prizes"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"judges"===a,"nav-link":!0}),onClick:function(){return t("judges")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.judges"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"sponsors"===a,"nav-link":!0}),onClick:function(){return t("sponsors")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.sponsors"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"faq"===a,"nav-link":!0}),onClick:function(){return t("faq")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.faq"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"submission"===a,"nav-link":!0}),onClick:function(){return t("submission")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"Submission"})})}),Object(_.jsx)(w.a,{children:Object(_.jsx)(I.a,{className:h()({active:"feedback"===a,"nav-link":!0}),onClick:function(){return t("feedback")},to:"#",location:{},children:Object(_.jsx)(N.a,{id:"menu.feedback"})})})]})},T=t(118),z=n.a.createContext({}),q={tag:x.q,activeTab:b.a.any,className:b.a.string,cssModule:b.a.object},C=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(T.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.tag,s=Object(x.n)(this.props,Object.keys(q)),l=Object(x.m)(h()("tab-content",a),t);return n.a.createElement(z.Provider,{value:{activeTabId:this.state.activeTab}},n.a.createElement(c,Object(o.a)({},s,{className:l})))},a}(s.Component),S=C;C.propTypes=q,C.defaultProps={tag:"div"};var M={tag:x.q,className:b.a.string,cssModule:b.a.object,tabId:b.a.any};function F(e){var a=e.className,t=e.cssModule,c=e.tabId,s=e.tag,l=Object(j.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(x.m)(h()("tab-pane",a,{active:c===e}),t)};return n.a.createElement(z.Consumer,null,(function(e){var a=e.activeTabId;return n.a.createElement(s,Object(o.a)({},l,{className:i(a)}))}))}F.propTypes=M,F.defaultProps={tag:"div"};var P=t(410),E=t(297),R=t(259),$=t(260),A=t(261),D=t(129),H=t(131),J=t(625),L=function(e){var a=e.messageId,t=e.name,c=e.value,s=e.intputType,n=void 0===s?"text":s;return Object(_.jsxs)(D.a,{className:"mb-2 mt-4",children:[Object(_.jsx)(H.a,{className:"lead",children:Object(_.jsx)(N.a,{id:a})}),Object(_.jsx)(J.a,{type:n,className:"form-control",name:t,value:c,disabled:!0})]})};L.proptype={messageId:b.a.string.isRequired,name:b.a.string.isRequired,value:b.a.any.isRequired,intputType:b.a.string};var B=L,G=t(262),U=function(e){var a=e.submission;return Object(_.jsx)(F,{tabId:"submission",children:Object(_.jsx)(g.a,{xxs:"12",className:"mt-4",children:Object(_.jsxs)(P.a,{className:"",children:[Object(_.jsx)(D.a,{children:Object(_.jsx)(H.a,{className:"h5",children:"Your Submissions "})}),a.map((function(e){return Object(_.jsx)(G.a,{data:e},e.id)}))]})})})},Y=t(187),K=t(188),Q=function(e){var a=e.item;return Object(_.jsx)(P.a,{className:"pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:Object(_.jsxs)("div",{className:"min-width-zero",children:[Object(_.jsx)(Y.a,{className:"truncate mb-1",children:a.comment}),Object(_.jsxs)(K.a,{className:"text-muted text-small mb-2",children:[a.star," star"]})]})})},V=function(e){var a=e.activeTab,t=e.hackInfo,n=Object(s.useState)(0),i=Object(c.a)(n,2),r=i[0],o=i[1],j=t.hackathon,d=t.sponsors,b=t.prizes,m=t.judges,h=t.Faq,x=t.feedback;return Object(_.jsxs)(S,{activeTab:a,children:[Object(_.jsx)(F,{tabId:"basics",children:Object(_.jsxs)(P.a,{children:[Object(_.jsx)(B,{messageId:"challenges.hackathon-name",name:"hackathon-name",value:j.name}),Object(_.jsx)(B,{messageId:"challenges.hackathon-tagline",name:"hackathon-tagline",value:j.tagline}),Object(_.jsx)(B,{messageId:"challenges.about",name:"hackathon-about",value:j.about,intputType:"textarea"}),Object(_.jsx)(B,{messageId:"challenges.aproximate-participants",name:"aproximate-participants",value:j.aproximate_participants}),Object(_.jsx)(B,{messageId:"challenges.max-team-size",name:"max-team-size",value:j.max_team_size})]})}),Object(_.jsx)(F,{tabId:"links",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsxs)(P.a,{children:[Object(_.jsx)(B,{messageId:"challenges.hackathon-website",name:"hackathon-website",value:j.hackathon_website}),Object(_.jsx)(B,{messageId:"challenges.contact-email",name:"contact-email",value:j.contact_email}),Object(_.jsx)(B,{messageId:"challenges.link-to-code-of-control",name:"link-to-code-of-control",value:j.link_to_code_of_control}),Object(_.jsx)(B,{messageId:"challenges.facebook",name:"facebook",value:j.facebook}),Object(_.jsx)(B,{messageId:"challenges.twitter",name:"twitter",value:j.twitter}),Object(_.jsx)(B,{messageId:"challenges.instagram",name:"instagram",value:j.instagram}),Object(_.jsx)(B,{messageId:"challenges.linkedin",name:"linkedin",value:j.linkedin})]})})})}),Object(_.jsx)(F,{tabId:"brands",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsx)(P.a,{children:Object(_.jsx)(B,{messageId:"challenges.theme-title",name:"theme-color-code",value:j.theme_color_code})})})})}),Object(_.jsx)(F,{tabId:"dates",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsxs)(P.a,{children:[Object(_.jsx)(B,{messageId:"challenges.hackthon-application-begins",name:"application-start",value:j.application_start}),Object(_.jsx)(B,{messageId:"challenges.hackthon-application-ends",name:"application-ends",value:j.application_end}),Object(_.jsx)(B,{messageId:"challenges.hackthon-hackathon-begins",name:"hackathon-starts",value:j.hackathon_start}),Object(_.jsx)(B,{messageId:"challenges.hackthon-hackathon-ends",name:"hackathon-ends",value:j.hackathon_date}),Object(_.jsx)(B,{messageId:"challenges.announcement-results",name:"accouncement-date",value:j.results_date})]})})})}),Object(_.jsx)(F,{tabId:"prizes",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsx)(P.a,{children:b.map((function(e){return Object(_.jsx)(E.a,{color:"outline-primary",pill:!0,className:"m-2",children:Object(_.jsx)(N.a,{id:e.name})},e.id)}))})})})}),Object(_.jsx)(F,{tabId:"sponsors",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsx)(P.a,{children:d.map((function(e){return Object(_.jsx)(A.a,{data:e},e.id)}))})})})}),Object(_.jsx)(F,{tabId:"judges",children:Object(_.jsx)(l.a,{children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsx)(P.a,{children:m.map((function(e){return Object(_.jsx)($.a,{data:e},e.id)}))})})})}),Object(_.jsx)(F,{tabId:"faq",children:Object(_.jsx)(g.a,{xxs:"12",className:"mt-4",children:h.map((function(e,a){return Object(_.jsx)(R.a,{item:e,index:a,showingIndex:r,setShowIndex:o},"faqItem_".concat(a))}))})}),Object(_.jsx)(U,{tabId:"submission",submission:t.hackathon_submission}),Object(_.jsx)(F,{tabId:"feedback",children:Object(_.jsx)(g.a,{sm:"12",children:Object(_.jsx)(P.a,{children:x.map((function(e){return Object(_.jsx)(Q,{item:e,hackathon:j},e.id)}))})})})]})},W=t(7),X=t(174),Z=t(220),ee=t(114),ae=function(e){var a=e.data,t=e.match;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(r.a,{className:"mb-4",children:Object(_.jsx)(P.a,{children:Object(_.jsx)(Z.a,{className:"h1 mb-0 ",children:Object(_.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(_.jsx)(N.a,{id:"challenges.participants"}),a.length?Object(_.jsxs)(_.Fragment,{children:["  (".concat(a.length,")"),Object(_.jsxs)(ee.c,{to:"".concat(t.url,"/participants"),className:"p-0 m-0",children:["See all ",Object(_.jsx)("i",{className:"simple-icon-arrow-right-circle m-2"})]})]}):null]})})})}),a.length?null:Object(_.jsx)(r.a,{className:"mb-4",children:Object(_.jsx)(P.a,{children:Object(_.jsx)(Z.a,{className:"h1 mb-0",children:"Currently No Participants"})})})]})},te=t(325),ce=t(164),se=function(e){var a=e.thumb,t=e.className,n=e.large,l=Object(s.useState)(!1),i=Object(c.a)(l,2),r=i[0],o=i[1],j=!1;return null!==a&&(j=!0),console.log(a),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ee.c,{to:"#",location:{},onClick:function(){return o(!0)},children:Object(_.jsx)("img",{alt:"Not Found",src:j?a:ce.a,className:t,width:"500"})}),r&&Object(_.jsx)(te.a,{mainSrc:n,onCloseRequest:function(){return o(!1)}})]})},ne=function(e){var a=e.hackInfo.hackathon;return Object(_.jsx)(r.a,{className:"mb-4",children:Object(_.jsxs)(P.a,{children:[Object(_.jsx)("div",{className:"text-center pt-4",children:Object(_.jsx)("p",{className:"list-item-heading pt-2",children:a.name})}),Object(_.jsx)("p",{className:"mb-3",children:a.about}),Object(_.jsx)("p",{className:"text-muted text-small mb-2",children:"Tagline"}),Object(_.jsx)("p",{className:"mb-3",children:a.tagline}),Object(_.jsx)("p",{className:"text-muted text-small mb-2",children:Object(_.jsx)(N.a,{id:"menu.contact"})}),Object(_.jsx)("div",{className:"social-icons",children:Object(_.jsxs)("ul",{className:"list-unstyled list-inline",children:[Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)(I.a,{href:a.facebook,target:"_blank",children:Object(_.jsx)("i",{className:"simple-icon-social-facebook"})})}),Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)(I.a,{href:a.twitter,target:"_blank",children:Object(_.jsx)("i",{className:"simple-icon-social-twitter"})})}),Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)(I.a,{href:a.instagram,target:"_blank",children:Object(_.jsx)("i",{className:"simple-icon-social-instagram"})})}),Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)(I.a,{href:a.linkedin,target:"_blank",children:Object(_.jsx)("i",{className:"simple-icon-social-linkedin"})})}),Object(_.jsx)("li",{className:"list-inline-item",children:Object(_.jsx)(I.a,{href:a.hackathon_website,target:"_blank",children:Object(_.jsx)("i",{className:"simple-icon-link"})})})]})})]})})};a.default=function(e){var a=e.match,t=a.params.id;if(!t)throw new v.a("Please Provide Hackathon ID");var n=Object(s.useState)("basics"),o=Object(c.a)(n,2),j=o[0],d=o[1],b=Object(X.a)("/getdetails/".concat(t),"getdetails"),m=b.loading,h=b.data,x=b.error;if(m)return Object(_.jsx)("div",{className:"loading"});if(x)throw new v.a(x);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(l.a,{children:[Object(_.jsx)(g.a,{xxs:"10",children:Object(_.jsx)(p.a,{heading:"menu.details",match:a})}),Object(_.jsx)(g.a,{xxs:"2",children:Object(_.jsx)(i.a,{size:"sm",href:"".concat(W.b,"/challenges/basics/").concat(t),children:Object(_.jsx)(N.a,{id:"challenges.edit-hackathon"})})})]}),Object(_.jsx)(g.b,{className:"mb-5"}),Object(_.jsxs)(l.a,{children:[Object(_.jsx)(g.a,{xxs:"12",className:"mb-5",children:Object(_.jsx)(r.a,{children:Object(_.jsx)(se,{thumb:h.hackathon.hackathon_cover_img,large:h.hackathon.hackathon_cover_img,className:"social-header card-img"})})}),Object(_.jsxs)(g.a,{xxs:"12",sm:"5",className:"mb-4 col-left",children:[Object(_.jsx)(se,{thumb:h.hackathon.hackathon_logo,large:h.hackathon.hackathon_logo,className:"img-thumbnail card-img social-profile-img"}),!m&&Object(_.jsx)(ne,{hackInfo:h}),!m&&Object(_.jsx)(ae,{id:t,data:h.Participant,match:a})]}),Object(_.jsx)(g.a,{xxs:"12",sm:"7",className:"mb-4 col-right",children:Object(_.jsx)(r.a,{className:"mb-4",children:Object(_.jsxs)(f,{children:[Object(_.jsx)(y,{activeTab:j,setActiveTab:d}),Object(_.jsx)(V,{activeTab:j,hackInfo:h})]})})})]})]})}}}]);
//# sourceMappingURL=challenges-default-details-view.00056d0d.chunk.js.map