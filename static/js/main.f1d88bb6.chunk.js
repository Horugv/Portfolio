(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),i=a.n(c),o=(a(91),a(1)),r=a(4),s=a.n(r),m=function(){return l.a.createElement("div",{className:"CVBlock"},l.a.createElement("div",{className:"CVBlock_slide"},l.a.createElement("img",{src:"Portfolio/media/bg-test.jpg",alt:"forest"})),l.a.createElement("div",{className:"CVBlock_hero"},l.a.createElement("img",{src:"Portfolio/media/Ihonin.jpg",alt:"Yevhenii Ihonin"})),l.a.createElement("div",{className:"CVBlock_info"},l.a.createElement("div",{className:"CVBlock_info_name"},"Ihonin Yevhenii"),l.a.createElement("div",{className:"CVBlock_info_job"},"Front-end developer"),l.a.createElement("div",{className:"CVBlock_info_social"},l.a.createElement("a",{href:"https://t.me/IgoninYevhenii",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:s()("icon","icon-telegram")})),l.a.createElement("a",{href:"https://join.skype.com/invite/CR4NdY83qkes",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:s()("icon","icon-skype")})),l.a.createElement("a",{href:"https://github.com/Horugv",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:s()("icon","icon-github")})))),l.a.createElement("div",{className:"CVBlock_bottom"},l.a.createElement("button",{className:"CVBlock_button"},"download cv"),l.a.createElement("button",{className:"CVBlock_button"},"contact me")))},d=a(3),u=a(25),v=function(e){var t=e.path,a=e.text,n=e.icon;return l.a.createElement(u.b,{to:t,exact:!0,activeClassName:"active",className:"navigation_item"},l.a.createElement("i",{className:s()("icon","".concat(n))}),l.a.createElement("span",null,a))},E=[{path:"/about",text:"about",icon:"icon-user"},{path:"/resume",text:"resume",icon:"icon-profile"},{path:"/works",text:"works",icon:"icon-terminal"},{path:"/contact",text:"contact",icon:"icon-at"}],_=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({desktop:!1,lg:!1,tablet:!1,mobile:!1}),o=Object(d.a)(i,2),r=o[0],m=o[1];Object(n.useEffect)((function(){if("undefined"!==typeof window){function e(){window.innerWidth>1199?m({desktop:!0,lg:!1,tablet:!1,mobile:!1}):window.innerWidth>991?m({desktop:!1,lg:!0,tablet:!1,mobile:!1}):window.innerWidth>767?m({desktop:!1,lg:!1,tablet:!0,mobile:!1}):m({desktop:!1,lg:!1,tablet:!1,mobile:!0})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}}),[]);var u=l.a.createElement("div",{className:"navigation_list"},E.map((function(e,t){return l.a.createElement(v,{path:e.path,text:e.text,icon:e.icon,key:t})}))),_=l.a.createElement("div",{className:"navigation__mob"},l.a.createElement("div",{className:"navigation__user"},l.a.createElement("div",{className:"navigation__img"},l.a.createElement("img",{src:"Portfolio/media/Ihonin.jpg",alt:"Ihonin Yevhenii"})),l.a.createElement("div",{className:"navigation__info"},l.a.createElement("div",{className:"navigation__hero"},"Ihonin Yevhenii"),l.a.createElement("div",{className:"navigation__desc"},"Front-end developer"))),l.a.createElement("div",{className:"navigation__burger",onClick:function(){return c(!a)}},a?l.a.createElement("i",{className:"icon icon-close"}):l.a.createElement("i",{className:"icon icon-menu"})),l.a.createElement("div",{className:s()("navigation__menu",{show:a})},l.a.createElement("div",{className:"navigation_list"},E.map((function(e,t){return l.a.createElement(v,{path:e.path,text:e.text,icon:e.icon,key:t})})))));return l.a.createElement("nav",{className:"navigation"},r.mobile?_:u)},p=a(205),h=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(d.a)(a,2),i=c[0],o=c[1];return Object(n.useEffect)((function(){o(!0)}),[]),l.a.createElement("div",{className:"right-block_wrapper"},l.a.createElement(p.a,{in:i,timeout:{enter:1e3,exit:500},mountOnEnter:!0,unmountOnExit:!0},(function(e){return l.a.createElement("div",{className:"right-block_content ".concat(e)},l.a.createElement("div",{className:"right-block_content_wrapper"},t))})))},f=function(e){var t=e.colorText,a=e.text;return l.a.createElement("div",{className:"title"},l.a.createElement("span",null,t)," ",a)},b=function(){return l.a.createElement("div",{className:"horisontal-line"})},g=function(e){var t=e.title,a=e.desc;return l.a.createElement("div",{className:"text-with-dots__item"},l.a.createElement("span",{className:"text-with-dots__title"},"".concat(t,". . . . . . . . . ")),l.a.createElement("span",{className:"text-with-dots__desc"},a))},N=function(e){var t=e.data;return l.a.createElement("div",{className:"text-with-dots__list"},t.map((function(e,t){return l.a.createElement(g,{title:e.title,desc:e.desc,key:t})})))},k=function(e){var t=e.icon,a=e.title,n=e.desc;return l.a.createElement("div",{className:"services__item"},l.a.createElement("div",{className:"services__item_icon"},l.a.createElement("span",{className:"icon ".concat(t)})),l.a.createElement("div",{className:"services__item_title"},a),l.a.createElement("div",{className:"services__item_desc"},n))},w=function(e){var t=e.data;return l.a.createElement("div",{className:"services__list"},t.map((function(e,t){return l.a.createElement(k,{icon:e.icon,title:e.title,desc:e.desc,key:t})})))},x=function(e){var t=e.desc,a=(e.img,e.name),n=e.position;return l.a.createElement("div",{className:"quote"},l.a.createElement("div",{className:"quote__desc"},t),l.a.createElement("div",{className:"quote__img"},l.a.createElement("img",{src:"Portfolio/media/Ihonin.jpg",alt:"hero"})),l.a.createElement("div",{className:"quote__name"},a),l.a.createElement("div",{className:"quote__position"},n))},y=[{title:"Age",desc:"23"},{title:"Residence",desc:"Ukrain"},{title:"Addres",desc:"Ivano-Frankivsk, Ukraine"}],C=[{icon:"icon-embed2",title:"front-end",desc:"Modern and mobile-ready website that will help you reach all of your marketing."},{icon:"icon-embed2",title:"front-end",desc:"Modern and mobile-ready website that will help you reach all of your marketing."},{icon:"icon-embed2",title:"front-end",desc:"Modern and mobile-ready website that will help you reach all of your marketing."},{icon:"icon-embed2",title:"front-end",desc:"Modern and mobile-ready website that will help you reach all of your marketing.Modern and mobile-ready website that will help you reach all of your marketing."}],S=function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about__bio right-block__section"},l.a.createElement(f,{colorText:"About",text:"Me"}),l.a.createElement(b,null),l.a.createElement("div",{className:"right-block_text about__bio_text"},"I am Ryan Adlard, web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique."),l.a.createElement("div",{className:"about__bio_info"},l.a.createElement(N,{data:y}))),l.a.createElement("div",{className:"about__services right-block__section"},l.a.createElement(f,{colorText:"My",text:"Services"}),l.a.createElement(b,null),l.a.createElement("div",{className:"about__services_list"},l.a.createElement(w,{data:C}))),l.a.createElement("div",{className:"about__quote right-block__section"},l.a.createElement(f,{colorText:"Quote",text:""}),l.a.createElement(b,null),l.a.createElement("div",{className:"about__quote_item"},l.a.createElement(x,{desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:"",name:"Yevhenii Ihonin",position:"React dev"})))))},j=function(e){var t=e.icon,a=e.title;return l.a.createElement("div",{className:"titleWithIcon"},l.a.createElement("i",{className:"icon ".concat(t)}),a)},T=function(e){var t=e.blockTitle,a=e.data,n=e.icon;return l.a.createElement("div",{className:"experience__block"},l.a.createElement(j,{icon:n,title:t}),l.a.createElement("div",{className:"experience__list"},a&&a.map((function(e,t){return l.a.createElement("div",{className:"experience__item",key:t},l.a.createElement("div",{className:s()("experience__item_date",{"experience__item_date-active":e.active})},e.date),l.a.createElement("div",{className:"experience__item_title"},e.title),l.a.createElement("div",{className:"experience__item_company"},e.company),l.a.createElement("div",{className:"experience__item_desc"},e.desc))}))))},I=function(e){var t=e.title,a=e.count,c=e.activeCount,i=Object(n.useState)([]),o=Object(d.a)(i,2),r=o[0],m=o[1];return Object(n.useEffect)((function(){for(var e=[],t=0;t<a;t++)e.push(t);m(e)}),[a]),l.a.createElement("div",{className:"skill-dots"},l.a.createElement("h6",{className:"skill-dots__title"},t),l.a.createElement("ul",{className:"skill-dots__list"},r.map((function(e,t){return l.a.createElement("li",{className:s()("skill-dots__item",{active:t<c}),key:t})}))))},F=a(51),R=(a(96),function(e){var t=e.title,a=e.percent;return l.a.createElement("div",{className:"skill-circle"},l.a.createElement(F.a,{value:a,text:"".concat(a,"%"),styles:Object(F.b)({strokeLinecap:"butt",textColor:"rgba(255, 255, 255, 0.85)",pathColor:"#78cc6d",trailColor:"#3e4148"})}),l.a.createElement("h6",{className:"skill-circle__title"},t))}),B=function(e){var t=e.data;return l.a.createElement("ul",{className:"skill-list"},t.map((function(e){return l.a.createElement("li",{className:"skill-list__item",key:Math.random()},e)})))},O=[{date:"2013 - Present",title:"Art Director",company:"Facebook Inc.",desc:"Collaborate with creative and development teams on the execution of ideas.",active:!0},{date:"2013 - Present",title:"Art Director",company:"Facebook Inc.",desc:"Collaborate with creative and development teams on the execution of ideas.",active:!1}],P=[{title:"HTML5",percent:95},{title:"CSS3",percent:85},{title:"JavaScript",percent:80},{title:"jQuery",percent:55},{title:"React",percent:70}],M=[{title:"Ukrainian",count:10,activeCount:10},{title:"Russian",count:10,activeCount:9},{title:"English",count:10,activeCount:4}],q=["HTML, CSS, JS","BEM","Pug","SCSS | Stylus | Less","Bootstrap","jQuery","React","React Hooks","React Redux","React Context","Rest API","Git","Jira","npm, yarn","Gulp","Webpack 4"],V=function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"right-block__section"},l.a.createElement(f,{colorText:"Resume",text:""}),l.a.createElement(b,null),l.a.createElement("div",{className:"resume__experience"},l.a.createElement("div",{className:"resume__experience_block"},l.a.createElement(T,{blockTitle:"experience",icon:"icon-briefcase",data:O})),l.a.createElement("div",{className:"resume__experience_block"},l.a.createElement(T,{blockTitle:"education",icon:"icon-graduate-cap",data:O})))),l.a.createElement("div",{className:"right-block__section"},l.a.createElement(f,{colorText:"My",text:"Skills"}),l.a.createElement(b,null),l.a.createElement("div",{className:"resume__skill"},l.a.createElement("div",{className:"resume__skill_row"},l.a.createElement("div",{className:"resume__skill_block"},l.a.createElement(j,{icon:"icon-embed2",title:"Coding"}),l.a.createElement("div",{className:"resume__skill_block_item resume__skill_block_item-circle"},P.map((function(e){return l.a.createElement("div",{className:"circle",key:Math.random()},l.a.createElement(R,{title:e.title,percent:e.percent}))})))),l.a.createElement("div",{className:"resume__skill_block"},l.a.createElement(j,{icon:"icon-list",title:"Knowledge"}),l.a.createElement("div",{className:"resume__skill_block_item"},l.a.createElement(B,{data:[].concat(q)})))),l.a.createElement("div",{className:"resume__skill_row"},l.a.createElement("div",{className:"resume__skill_block"},l.a.createElement(j,{icon:"icon-language",title:"Languages"}),l.a.createElement("div",{className:"resume__skill_block_item resume__skill_block_item-dots"},M.map((function(e){return l.a.createElement("div",{className:"dots",key:Math.random()},l.a.createElement(I,{title:e.title,count:e.count,activeCount:e.activeCount}))}))))))))},A=function(e){var t=e.data;return l.a.createElement("div",{className:"works"},t.map((function(e,t){return l.a.createElement("a",{href:"/works",className:"works__item",target:"_blank",rel:"noopener noreferrer",key:"".concat(null===e||void 0===e?void 0:e.title,"-").concat(t)},l.a.createElement("div",{className:"works__item_img"},l.a.createElement("img",{src:null===e||void 0===e?void 0:e.path,alt:"works img"})),l.a.createElement("div",{className:"works__item_title"},null===e||void 0===e?void 0:e.title),l.a.createElement("div",{className:"works__item_info"},l.a.createElement("span",{className:"works__item_info--title"},"Technology:"),l.a.createElement("span",{className:"works__item_info--list"},null===e||void 0===e?void 0:e.technology)))})))},L=[{title:"Forest",path:"Portfolio/media/bg-test.jpg",technology:"React, html, css"},{title:"Forest",path:"Portfolio/media/bg-test.jpg",technology:"React, html, css, React, html, css"},{title:"Forest",path:"Portfolio/media/bg-test.jpg",technology:"React, html, css, test"}],W=function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"work"},l.a.createElement("div",{className:"right-block__section"},l.a.createElement(f,{colorText:"Works"}),l.a.createElement(b,null),l.a.createElement(A,{data:L}))))},Y=a(203),z=a(206),H=a(204),J=function(){return l.a.createElement(Y.a,{className:"map",center:[49.42231354080357,26.984725986572155],zoom:14,zoomControl:!1},l.a.createElement(z.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(H.a,{position:[51.505,-.09]}))},U=a(85),G=a(80),Q=a.n(G),D=a(28),K=function(e){var t=e.loading;return console.log(t),l.a.createElement("div",{className:s()("loader",{loadingShow:t})},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))},$=D.a().shape({fullName:D.b().required("Required"),email:D.b().email("Invalid email").required("Required"),message:D.b().required("Required")}),X=function(){var e,t,a,c,i,o,r,s,m,u,v,E=Object(n.useState)(!1),_=Object(d.a)(E,2),p=_[0],h=_[1],f=Object(U.a)({initialValues:{fullName:"",email:"",message:""},validationSchema:$,onSubmit:function(e){b(e)}}),b=function(e){var t={fullName:e.fullName,email:e.email,message:e.message};h(!0),Q.a.send("service_l156ty9","template_ywciicy",t,"user_VgyadWgkodaI2BrrSTyEs").then((function(e){422===e.status&&f.setStatus({message:"Something went wrong..."}),f.resetForm()}),(function(e){f.setStatus({message:"Something went wrong..."})})).finally((function(){h(!1)}))};return l.a.createElement("div",{className:"form-contact"},l.a.createElement(K,{loading:p}),l.a.createElement("form",{onSubmit:f.handleSubmit},(null===(e=f.status)||void 0===e?void 0:e.message)&&l.a.createElement("div",{className:"form-status"},null===(t=f.status)||void 0===t?void 0:t.message),l.a.createElement("div",{className:"form-group-row"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{id:"fullName",name:"fullName",type:"text",placeholder:"Full Name",onChange:f.handleChange,onFocus:function(){return f.setFieldTouched("fullName",!1)},onBlur:function(){return f.setFieldTouched("fullName",!0)},value:f.values.fullName,disabled:p}),(null===f||void 0===f||null===(a=f.errors)||void 0===a?void 0:a.fullName)&&(null===f||void 0===f||null===(c=f.touched)||void 0===c?void 0:c.fullName)&&l.a.createElement("div",{className:"form-validation"},null===f||void 0===f||null===(i=f.errors)||void 0===i?void 0:i.fullName)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{id:"email",name:"email",type:"text",placeholder:"Email",onChange:f.handleChange,onFocus:function(){return f.setFieldTouched("email",!1)},onBlur:function(){return f.setFieldTouched("email",!0)},value:f.values.email,disabled:p}),(null===f||void 0===f||null===(o=f.errors)||void 0===o?void 0:o.email)&&(null===f||void 0===f||null===(r=f.touched)||void 0===r?void 0:r.email)&&l.a.createElement("div",{className:"form-validation"},null===f||void 0===f||null===(s=f.errors)||void 0===s?void 0:s.email))),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{id:"message",name:"message",type:"text",placeholder:"Message",rows:"6",onChange:f.handleChange,onFocus:function(){return f.setFieldTouched("message",!1)},onBlur:function(){return f.setFieldTouched("message",!0)},value:f.values.message,disabled:p}),(null===f||void 0===f||null===(m=f.errors)||void 0===m?void 0:m.message)&&(null===f||void 0===f||null===(u=f.touched)||void 0===u?void 0:u.message)&&l.a.createElement("div",{className:"form-validation"},null===f||void 0===f||null===(v=f.errors)||void 0===v?void 0:v.message)),l.a.createElement("div",{className:"form-button"},l.a.createElement("button",{type:"submit",disabled:p},"Send message ",l.a.createElement("i",{className:"icon icon-arrow-right"})))))},Z=[{title:"Address",desc:"Ivano-Frankivsk, Ukraine"},{title:"Email",desc:"Horugv16@gmail.com"},{title:"Phone",desc:"+380 97 909 3001"}],ee=function(){return l.a.createElement(h,null,l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"right-block__section"},l.a.createElement(f,{colorText:"Get",text:"in Touch"}),l.a.createElement(b,null),l.a.createElement("div",{className:"contact__map"},l.a.createElement(J,null)),l.a.createElement("div",{className:"contact__info"},l.a.createElement(N,{data:Z}))),l.a.createElement("div",{className:"right-block__section"},l.a.createElement(f,{colorText:"Contact",text:"Form"}),l.a.createElement(b,null),l.a.createElement("div",{className:"contact__form"},l.a.createElement(X,null)))))},te=(a(197),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("main",{className:"main"},l.a.createElement(_,null),l.a.createElement("div",{className:"main__block"},l.a.createElement(m,null),l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/Portfolio/about",exact:!0,component:S}),l.a.createElement(o.b,{path:"/Portfolio/resume",exact:!0,component:V}),l.a.createElement(o.b,{path:"/Portfolio/works",exact:!0,component:W}),l.a.createElement(o.b,{path:"/Portfolio/contact",exact:!0,component:ee}),l.a.createElement(o.a,{from:"/",to:"/Portfolio/about"}),l.a.createElement(o.a,{to:"/Portfolio/about"})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(u.a,null,l.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(198)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.f1d88bb6.chunk.js.map