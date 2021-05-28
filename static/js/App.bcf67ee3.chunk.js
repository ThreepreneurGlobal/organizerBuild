(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[3],{145:function(e,t,a){"use strict";a.d(t,"a",(function(){return N})),a.d(t,"b",(function(){return E}));var n=a(30),o=a(136),s=a(31),i=a(32),r=a(5),l=a.n(r),c=a(666),u=a(662),d=a(105),m=a.n(d),h=a(17),g=function(e){var t=e.title,a=e.type,n=e.message,o=e.customClassName,s=e.timeOut,i=e.onClick,l=e.onRequestHide,c=function(){l&&l()};Object(r.useEffect)((function(){var e=null;return 0!==s&&(e=setTimeout(c,s)),function(){e&&clearTimeout(e)}}),[]);var u=function(){i&&i(),c()},d=m()(["notification","notification-".concat(a),o]),g=t?Object(h.jsx)("h4",{className:"title",children:t}):null;return Object(h.jsx)("div",{className:d,onClick:function(){return u()},children:Object(h.jsxs)("div",{className:"notification-message",role:"alert",children:[g,Object(h.jsx)("div",{className:"message",children:n})]})})};g.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var p=g,b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleRequestHide=function(t){return function(){var a=e.props.onRequestHide;a&&a(t)}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.notifications,n=t.enterTimeout,o=t.leaveTimeout,s=m()("notification-container",{"notification-container-empty":0===a.length});return Object(h.jsx)("div",{className:s,children:Object(h.jsx)(c.a,{children:a.map((function(t){var a=t.id||(new Date).getTime();return Object(h.jsx)(u.a,{classNames:"notification",timeout:{exit:o,enter:n},children:Object(h.jsx)(p,{type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName},a)},a)}))})})}}]),a}(l.a.Component);b.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var f=b,k=a(367),j="change",y="primary",x="secondary",O="info",v="success",C="warning",w="error",E=new(function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).listNotify=[],e}return Object(o.a)(a,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,a,n,o,s){this.create({type:y,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"secondary",value:function(e,t,a,n,o,s){this.create({type:x,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"info",value:function(e,t,a,n,o,s){this.create({type:O,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"success",value:function(e,t,a,n,o,s){this.create({type:v,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"warning",value:function(e,t,a,n,o,s){this.create({type:C,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"error",value:function(e,t,a,n,o,s){this.create({type:w,message:e,title:t,timeOut:a,onClick:n,priority:o,customClassName:s})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter((function(t){return e.id!==t.id})),this.emitChange()}},{key:"emitChange",value:function(){this.emit(j,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(j,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(j,e)}}]),a}(k.EventEmitter)),S=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).componentWillUnmount=function(){E.removeChangeListener(o.handleStoreChange)},o.handleStoreChange=function(e){o.setState({notifications:e})},o.handleRequestHide=function(e){E.remove(e)},E.addChangeListener(o.handleStoreChange),o.state={notifications:[]},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,a=t.enterTimeout,n=t.leaveTimeout;return Object(h.jsx)(f,{enterTimeout:a,leaveTimeout:n,notifications:e,onRequestHide:this.handleRequestHide})}}]),a}(l.a.Component);S.defaultProps={enterTimeout:400,leaveTimeout:400};var N=S},257:function(e,t){e.exports={"general.copyright":"Smart Natives \xa9 2021 All Rights Reserved.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Login","user.register":"Register","user.forgot-password":"Forgot Password","user.reset-password":"Reset Password","user.verify-otp":"Enter OTP","user.otp":"OTP","user.email":"E-mail","user.password":"Password","user.phone-number":"Phone Number","user.forgot-password-question":"Forget password?","user.fullname":"Full Name","user.fullname-desc":"Please Enter your Full Name","user.rank-skills":"Rank your top 5 tech skills!","user.rank-skills-desc":"You can update or edit your skills!","user.login-button":"LOGIN","user.register-button":"REGISTER","user.next-button":"NEXT","user.edit-profile":"Edit Profile","user.previous-button":"PREVIOUS","user.verify-otp-button":"VERIFY OTP","user.reset-password-button":"RESET","user.buy":"BUY","user.username":"Username","user.update-about":"Update About","user.update-education":"Update Education","user.update-experience":"Update Experience","user.update-links":"Update Links","user.update-education-desc":"The information you provide here helps us in performing analytics.","update-links-desc":"Add links to your website, blog, GitHub ,LinkedIn, Stack Overflow, Dribble, Kaggle or anywhere where your work stand out.","user.update-contact":"Update Contact","user.update-contact-desc":"How can we get in touch with you?","user.update-emergeny-contact":"Update Emergency Contact","user.update-emergeny-contact-desc":"In case of something goes wrong.","user.upload-resume":"Upload Resume","user.dashboard.card-1.title":"Find Your Next Adventure.","user.dashboard.card-2.title":"Set Up Your Profile.","user.dashboard.card-3.title":"Show Your Skills To World.","user.dashboard.card-1.button":"Explore Hackathon.","user.dashboard.card-2.button":"Go to your dashboard.","user.dashboard.card-3.button":"Earn your Badges.","user.dashboard.card-1.desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","user.dashboard.card-2.desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","user.dashboard.card-3.desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","menu.home":"Home","menu.dashboard":"Dashboard","menu.start":"Start","menu.profile":"Profile","menu.search":"Search","menu.blank-page":"Blank Page","menu.challenges":"Challenges","menu.badges":"Badges","menu.project":"Projects","menu.about":"About","menu.education":"Education","menu.experience":"Experiences","menu.links":"Links","menu.contact":"Contact","menu.add-challenges":"Add challenges","menu.basics":"Basics","menu.faq":"FAQ","menu.application":"Application","menu.brands":"Brands","menu.dates":"Dates","menu.prizes":"Prizes","menu.judges":"Judges","menu.sponsors":"Sponsors","menu.view-all":"Hackathons","menu.mentor":"Mentor","menu.feedback":"Feedback","menu.details":"Details","pages.error-title":"Ooops... looks like an error occurred!","pages.error-code":"Error code","pages.go-back-home":"GO BACK HOME","pages.responsibilities":"Responsibilities","pages.location":"Location","forms.begin":"Begin","forms.full-name":"Full Name","forms.email":"Email","forms.phone":"Mobile Number","forms.gender":"Gender","forms.t-shirt-size":"T-Shirt","forms.bio":"Bio","forms.next":"Next","forms.previous":"Previous","forms.submit":"Submit","forms.submit-and-next":"Submit & Next","forms.work-experience":"Work Experience","forms.employer":"Employer","forms.role":"Role","forms.from":"Frome","forms.to":"To","forms.description":"Description","forms.city":"City","form-components.applicationDate":"Application Form Date","form-components.hackathonDate":"Hackathon Date","form-components.resultdate":"Results Date","forms.upload-button":"Upload","forms.degree-type":"Degree Type","forms.field-of-study":"Field of Study","forms.year-of-graduation":"Year of Graduation","forms.month-of-graduation":"Month of Graduation","forms.select-institution":"Select Institution","forms.upload-resume":"Choose a file to upload.","hackcard.starts":"Starts","hackcard.ends":"Ends","hackcard.edit-button":"Edit","hackcard.view-details-button":"View Details","hackcard.hackthon":"Hackthon","hackcard.application":"Application","challenges.create-hackathon":"Create Hackathon","challenges.edit-hackathon":"Edit Hackathon","challenges.modal.modal-title":"Let's get you started","challenges.modal.modal-sub-title":"Great decision!","challenges.modal.name":"Name","challenges.modal.hackathon-type":"Hackathon Type","challenges.modal.create-button":"Create Hackthon","challenges.modal.cancel-button":"Cancel","challenges.hackathon-name":"Name","challenges.about":"About","challenges.hackathon-tagline":"Tagline","challenges.participants":"Participants","challenges.submission-date":"Submission Date","challenges.aproximate-participants":"Aproximate participants","challenges.max-team-size":"Max. team size allowed","challenges.hackathon-website":"Hackathon Website","challenges.portfolio-url":"Portfolio Url","challenges.contact-email":"Contact Email","challenges.add-question-title":"Add Custom Question","challenges.link-to-code-of-control":"Link to Code of Control","challenges.facebook":"Facebook","challenges.twitter":"Twitter","challenges.linkedin":"Linkedin","challenges.instagram":"Instagram","challenges.about-title":"About","challenges.about.first-and-last-name":"First and Last Name","challenges.about.bio":"Bio","challenges.about.dob":"Date of Birth","challenges.about.gender":"Gender","challenges.about.tshirt-size":"T-Shirt Size","challenges.education-title":"Education","challenges.education.education-details":"All Education Details","challenges.experience-title":"Experience","challenges.experience.domain-expertise":"Domain Expertise","challenges.experience.skills":"Skills","challenges.experience.resume":"Resume","challenges.experience.work-experience":"Work Experience","challenges.online-profiles-title":"Online Profiles","challenges.online-profiles.github":"GitHub","challenges.online-profiles.dribble":"Dribble","challenges.online-profiles.behance":"Behance","challenges.online-profiles.stack-overflow":"Stack Overflow","challenges.online-profiles.linkedin":"Linkedin","challenges.online-profiles.facebook":"Facebook","challenges.online-profiles.twitter":"Twitter","challenges.contact-title":"Contact","challenges.contact.phone-number":"Phone Number","challenges.contact.email":"Email","challenges.contact.city":"City","challenges.contact.emergency-contact":"Emergency Contact","challenges.theme-title":"Theme","challenges.hackthon-logo-title":"Upload Logo","challenges.application-details":"Application Details","challenges.timezone":"Timezone","challenges.prizes":"Prizes","challenges.sponsors":"Sponsors","challenges.judges":"Judges","challenges.custom-questions":"Custom Questions","challenges.modal.application-add-question-title":"Add Custom Question","challenges.add-custom-question":"Add new Question","challenges.modal.question":"Enter Question","challenges.modal.is-sponsor-prize":"Sponsor Prize","challenges.modal.application-add":"Add","challenges.modal.application-cancel":"Cancel","challenges.hackthon-cover-image-title":"Upload Cover Image","challenges.submit-application":"Submit Application","challenges.hackthon-application-begins":"Application Begins","challenges.hackthon-application-ends":"Application Ends","challenges.hackthon-hackathon-begins":"Hackathon Begins","challenges.hackthon-hackathon-ends":"Hackathon Ends","challenges.announcement-results":"Announcement Result","challenges.added-prizes":"Added Prizes","challenges.added-judges":"Added Judges","challenges.added-sponsors":"Added Sponsors","challenges.add-prize-button":"Begin Adding a Prize!","challenges.add-prize-checkbox":"I will add Prize later.","challenges.modal.application-add-prize-title":"Add a new Prize!","challenges.modal.prize":"Prize Name","challenges.modal.prize-description":"Prize Description","challenges.add-judge-button":"Begin Adding a Judge!","challenges.add-judge-checkbox":"I will add Judge later.","challenges.modal.application-add-judge-title":"Add a new Judge!","challenges.modal.judge":"Judge Name","challenges.modal.judge-description":"Judge Description","challenges.modal.judge-social-links":"Social Link","challenges.add-sponsor-button":"Begin Adding a Sponsor!","challenges.add-sponsor-checkbox":"I will add Sponsor later.","challenges.modal.application-add-sponsor-title":"Add a new Sponsor!","challenges.modal.sponsor":"Sponsor Name","challenges.modal.sponsor-description":"Sponsor Description","challenges.add-faq-button":"Begin Adding a FAQ!","challenges.add-faq-checkbox":"I will add FAQ later.","challenges.modal.application-add-faq-title":"Add a new FAQ!","challenges.modal.faq":"FAQ Question","challenges.modal.faq-description":"FAQ Description"}},365:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 Todos los derechos reservados.","unauthorized.title":"Unauthorized Access Attempt","unauthorized.detail":"You are not authorized to view the page you are trying to access.","user.login-title":"Iniciar sesi\xf3n","user.register":"Registro","user.forgot-password":"Se te olvid\xf3 tu contrase\xf1a","user.email":"Email","user.password":"Contrase\xf1a","user.forgot-password-question":"\xbfContrase\xf1a olvidada?","user.fullname":"Nombre completo","user.login-button":"INICIAR SESI\xd3N","user.register-button":"REGISTRO","user.reset-password-button":"REINICIAR","user.buy":"COMPRAR","user.username":"Nombre de Usuario","menu.home":"Inicio","menu.app":"Inicio","menu.dashboards":"Tableros","menu.gogo":"Gogo","menu.start":"Comienzo","menu.second-menu":"Segundo men\xfa","menu.second":"Segundo","menu.ui":"IU","menu.charts":"Gr\xe1ficos","menu.chat":"Chatea","menu.survey":"Encuesta","menu.todo":"Notas","menu.search":"B\xfasqueda","menu.docs":"Docs","menu.blank-page":"Blank Page","layouts.error-title":"Vaya, parece que ha ocurrido un error!","layouts.error-code":"C\xf3digo de error","layouts.go-back-home":"REGRESAR A INICIO"}},366:function(e,t){e.exports={"general.copyright":"Smart Natives \xa9 2021Alle Rechte vorbehalten.","unauthorized.title":"Nicht autorisierter Zugriffsversuch","unauthorized.detail":"Sie sind nicht berechtigt, die Seite anzuzeigen, auf die Sie zugreifen m\xf6chten.","user.login-title":"Anmeldung","user.register":"Registrieren","user.forgot-password":"Passwort vergessen","user.reset-password":"Passwort zur\xfccksetzen","user.verify-otp":"OTP eingeben","user.otp":"OTP","user.email":"E-Mail","user.password":"Passwort","user.phone-number":"Phone Number","user.forgot-password-question":"Passwort vergessen?","user.fullname":"Vollst\xe4ndiger Name","user.login-button":"LOGIN","user.register-button":"REGISTER","user.reset-password-button":"RESET","user.verify-otp-button":"OTP \xdcBERPR\xdcFEN","user.buy":"KAUFEN","user.username":"Username","menu.home":"Home","menu.app":"Home","menu.dashboard":"Dashboard","menu.Mentor":"Mentor","menu.challenges":"Challenges","menu.Feedback":"Feedback","menu.gogo":"Home","menu.start":"Start","menu.profile":"Profile","menu.second":"Second","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Umfrage","menu.todo":"Todo","menu.search":"Suche","menu.docs":"Docs","menu.blank-page":"Leere Seite","pages.error-title":"Ups ... sieht aus, als w\xe4re ein Fehler aufgetreten!","pages.error-code":"Fehlercode","pages.go-back-home":"GEHE ZUR\xdcCK NACH HAUSE"}},661:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(30),s=a(136),i=a(31),r=a(32),l=a(5),c=a.n(l),u=a(29),d=a(113),m=a(120),h=a(660),g=a(257),p=a.n(g),b={messages:Object(n.a)({},p.a),locale:"en-US"},f=a(365),k=a.n(f),j={messages:Object(n.a)({},k.a),locale:"es-ES"},y={messages:Object(n.a)({},p.a),locale:"en-US"},x=a(366),O=a.n(x),v={en:b,es:j,enrtl:y,de:{messages:Object(n.a)({},O.a),locale:"de-DE"}},C=a(145),w=a(7),E=a(10),S=a(624),N=a(17),A=function(e){var t=e.component,a=e.roles,o=void 0===a?void 0:a,s=Object(S.a)(e,["component","roles"]);return Object(N.jsx)(m.b,Object(n.a)(Object(n.a)({},s),{},{render:function(e){if(w.l){var a=Object(E.c)();return a?o?o.includes(a.role)?Object(N.jsx)(t,Object(n.a)({},e)):Object(N.jsx)(m.a,{to:{pathname:"/unauthorized",state:{from:e.location}}}):Object(N.jsx)(t,Object(n.a)({},e)):Object(N.jsx)(m.a,{to:{pathname:"/user/login",state:{from:e.location}}})}return Object(N.jsx)(t,Object(n.a)({},e))}}))},z=c.a.lazy((function(){return Promise.all([a.e(32),a.e(22)]).then(a.bind(null,658))})),R=c.a.lazy((function(){return a.e(25).then(a.bind(null,663))})),P=c.a.lazy((function(){return a.e(23).then(a.bind(null,641))})),T=c.a.lazy((function(){return a.e(24).then(a.bind(null,642))})),U=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),n=t.call(this,e),Object(E.d)().isRtl?(document.body.classList.add("rtl"),document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.body.classList.remove("rtl")),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.body.classList.add("rounded")}},{key:"render",value:function(){var e=this.props.locale,t=v[e];return Object(N.jsx)("div",{className:"h-100",children:Object(N.jsx)(h.a,{locale:t.locale,messages:t.messages,children:Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(C.a,{}),Object(N.jsx)(l.Suspense,{fallback:Object(N.jsx)("div",{className:"loading"}),children:Object(N.jsx)(d.a,{children:Object(N.jsxs)(m.d,{children:[Object(N.jsx)(m.a,{exact:!0,from:"/",to:w.b}),Object(N.jsx)(A,{path:w.b,component:z,roles:[w.a.Organization,w.a.User]}),Object(N.jsx)(m.b,{path:"/user",render:function(e){return Object(N.jsx)(R,Object(n.a)({},e))}}),Object(N.jsx)(m.b,{exact:!0,path:"/error",render:function(e){return Object(N.jsx)(P,Object(n.a)({},e))}}),Object(N.jsx)(m.b,{exact:!0,path:"/unauthorized",render:function(e){return Object(N.jsx)(T,Object(n.a)({},e))}}),Object(N.jsx)(m.a,{to:"/error"})]})})})]})})})}}]),a}(c.a.Component);t.default=Object(u.b)((function(e){var t=e.authUser,a=e.settings;return{currentUser:t.currentUser,locale:a.locale}}),{})(U)}}]);
//# sourceMappingURL=App.bcf67ee3.chunk.js.map