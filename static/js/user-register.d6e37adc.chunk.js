(this["webpackJsonpsmartnative-organization-frontend"]=this["webpackJsonpsmartnative-organization-frontend"]||[]).push([[20],{109:function(e,s,a){"use strict";var t=a(1),c=(a(5),a(252)),r=a(154),n=a(17);s.a=Object(r.c)((function(e){return Object(n.jsx)(c.a,Object(t.a)({},e))}),{withRef:!1})},114:function(e,s,a){"use strict";a.d(s,"a",(function(){return n})),a.d(s,"b",(function(){return i}));var t=a(1),c=(a(5),a(204)),r=a(17),n=function(e){return Object(r.jsx)(c.a,Object(t.a)(Object(t.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){var s=e.className;return Object(r.jsx)("div",{className:"separator ".concat(s)})}},648:function(e,s,a){"use strict";a.r(s);var t=a(111),c=a(5),r=a(205),n=a(206),i=a(207),l=a(139),o=a(149),j=a(263),b=a(113),d=a(151),u=a(29),m=a(2),h=a(109),O=a(114),x=a(145),p=a(17),f=function(e){var s;return e?e.length<4&&(s="Value must be longer than 3 characters"):s="Please enter your password",s},N=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Please enter your email address",s},v=function(e){var s;return e?/^\d{10}$/.test(e)&&(s="Invalid Phone Number"):s="Please enter your phone number",s};s.default=Object(u.b)((function(e){var s=e.authUser;return{loading:s.loading,error:s.error}}),{registerUserAction:m.K})((function(e){var s=e.history,a=e.loading,u=e.error,m=e.registerUserAction,g=Object(c.useState)(""),w=Object(t.a)(g,1)[0],k=Object(c.useState)(""),y=Object(t.a)(k,1)[0],A=Object(c.useState)(""),I=Object(t.a)(A,1)[0];Object(c.useEffect)((function(){u&&x.b.warning(u,"Registration Error",3e3,null,null,"")}),[a,u]);var S={email:w,password:y,phone:I};return Object(p.jsx)(r.a,{className:"h-100",children:Object(p.jsx)(O.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(p.jsxs)(n.a,{className:"auth-card",children:[Object(p.jsxs)("div",{className:"position-relative image-side ",children:[Object(p.jsx)("p",{className:"text-white h2",children:"MAGIC IS IN THE DETAILS"}),Object(p.jsxs)("p",{className:"white mb-0",children:["Please use this form to register. ",Object(p.jsx)("br",{}),"If you are a member, please"," ",Object(p.jsx)(b.b,{to:"/user/login",className:"white",children:"login"}),"."]})]}),Object(p.jsxs)("div",{className:"form-side",children:[Object(p.jsx)(b.b,{to:"/",className:"white",children:Object(p.jsx)("span",{className:"logo-single"})}),Object(p.jsx)(i.a,{className:"mb-4",children:Object(p.jsx)(h.a,{id:"user.register"})}),Object(p.jsx)(d.c,{initialValues:S,onSubmit:function(e){""!==e.email&&""!==e.password&&""!==e.phone&&m(e,s)},children:function(e){var s=e.errors,t=e.touched;return Object(p.jsxs)(d.b,{children:[Object(p.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(p.jsx)(o.a,{children:Object(p.jsx)(h.a,{id:"user.email"})}),Object(p.jsx)(d.a,{className:"form-control",name:"email",validate:N}),s.email&&t.email&&Object(p.jsx)("div",{className:"invalid-feedback d-block",children:s.email})]}),Object(p.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(p.jsx)(o.a,{children:Object(p.jsx)(h.a,{id:"user.phone-number"})}),Object(p.jsx)(d.a,{className:"form-control",name:"phone",validate:v}),s.phone&&t.phone&&Object(p.jsx)("div",{className:"invalid-feedback d-block",children:s.phone})]}),Object(p.jsxs)(l.a,{className:"form-group has-float-label",children:[Object(p.jsx)(o.a,{children:Object(p.jsx)(h.a,{id:"user.password"})}),Object(p.jsx)(d.a,{className:"form-control",type:"password",name:"password",validate:f}),s.password&&t.password&&Object(p.jsx)("div",{className:"invalid-feedback d-block",children:s.password})]}),Object(p.jsx)("div",{className:"d-flex justify-content-end align-items-center",children:Object(p.jsxs)(j.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(a?"show-spinner":""),size:"lg",children:[Object(p.jsxs)("span",{className:"spinner d-inline-block",children:[Object(p.jsx)("span",{className:"bounce1"}),Object(p.jsx)("span",{className:"bounce2"}),Object(p.jsx)("span",{className:"bounce3"})]}),Object(p.jsx)("span",{className:"label",children:Object(p.jsx)(h.a,{id:"user.register-button"})})]})})]})}})]})]})})})}))}}]);
//# sourceMappingURL=user-register.d6e37adc.chunk.js.map