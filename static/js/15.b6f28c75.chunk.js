(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{101:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return r})),a.d(t,"i",(function(){return l})),a.d(t,"j",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"h",(function(){return m}));var n={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},l={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},c={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},u={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},d={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},m={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},126:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},150:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(81),i=(a(150),function(){window.location.replace("https://blog.covid19india.org")}),o=a(101),r=a(126),l=a(0),c=a.n(l),s=a(208),u=a(209),d=a(210),m=a(211),b=a(212),p=a(251),h=a(38),v=a(84),f=a(207),g=a(242);function E(e){var t=this,a=e.pages,n=e.setExpand,i=e.darkMode,o=e.windowSize,r=Object(l.useRef)(null),s=Object(p.a)().t,u=Object(l.useCallback)((function(){o.width>768&&n(!1)}),[n,o.width]);return c.a.createElement("div",{className:"expand",ref:r,onMouseLeave:u},a.map((function(e,a){return!0===e.showInNavbar?c.a.createElement(h.b,Object.assign({to:e.pageLink,key:a},o.width<769&&{onClick:n.bind(t,!1)}),c.a.createElement("span",k(e.pageLink,e.animationDelayForNavbar),s(e.displayName))):null})),o.width<768&&c.a.createElement(j,{darkMode:i}),c.a.createElement("div",{className:"expand-bottom"},c.a.createElement("h5",null,s("A crowdsourced initiative."))))}var w=function(e){var t,a=e.pages,i=e.darkMode,m=e.showLanguageSwitcher,b=e.setShowLanguageSwitcher,w=Object(p.a)(),k=w.i18n,O=w.t,N=Object.keys(r).includes(null===k||void 0===k?void 0:k.language)?null===k||void 0===k?void 0:k.language:null===k||void 0===k||null===(t=k.options)||void 0===t?void 0:t.fallbackLng[0],S=Object(l.useState)(!1),x=Object(n.a)(S,2),L=x[0],z=x[1];Object(f.a)(L);var C=Object(g.a)(),I=Object(v.c)((function(){return{opacity:0}})),M=Object(n.a)(I,3),T=M[0],A=M[1],B=M[2];A({opacity:1}),B();var J=Object(v.f)(L,null,{from:C.width<769?o.d:o.c,enter:C.width<769?o.f:o.e,leave:C.width<769?o.d:o.c,config:{mass:1,tension:210,friction:26}}),P=Object(l.useCallback)((function(){C.width>769&&z(!0)}),[C.width]),F=Object(l.useCallback)((function(){L&&z(!1),b(!m)}),[L,m,z,b]);return c.a.createElement(v.a.div,{className:"Navbar",style:T},c.a.createElement("div",{className:"navbar-left",onClick:F.bind(this)},r[N]),c.a.createElement("div",{className:"navbar-middle"},c.a.createElement(h.b,{to:"/",onClick:z.bind(this,!1)},"Covid19",c.a.createElement("span",null,"India"))),c.a.createElement("div",Object.assign({className:"navbar-right",onMouseEnter:P},C.width<769&&{onClick:z.bind(this,!L)}),C.width<769&&c.a.createElement("span",null,O(L?"Close":"Menu")),C.width>769&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.b,{to:"/"},c.a.createElement("span",null,c.a.createElement(s.a,y("/")))),c.a.createElement(h.b,{to:"/blog"},c.a.createElement("span",null,c.a.createElement(u.a,y("/blog")))),c.a.createElement(h.b,{to:"/about"},c.a.createElement("span",null,c.a.createElement(d.a,y("/about")))),c.a.createElement("span",null,c.a.createElement(j,{darkMode:i})))),J.map((function(e){var t=e.item,n=e.key,o=e.props;return t?c.a.createElement(v.a.div,{key:n,style:o},c.a.createElement(E,{pages:a,setExpand:z,darkMode:i,windowSize:C})):c.a.createElement(v.a.div,{key:n,style:o})})))},k=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},y=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},j=function(e){var t=e.darkMode;return c.a.createElement("div",{className:"SunMoon",onClick:t.toggle},c.a.createElement("div",null,t.value?c.a.createElement(m.a,{color:"#ffc107"}):c.a.createElement(b.a,null)))},O=a(5),N=a(158),S=Object(l.lazy)((function(){return Promise.all([a.e(3),a.e(5),a.e(16)]).then(a.bind(null,249))})),x=Object(l.lazy)((function(){return Promise.all([a.e(3),a.e(18)]).then(a.bind(null,214))})),L=Object(l.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(5),a.e(12)]).then(a.bind(null,236))})),z=Object(l.lazy)((function(){return a.e(19).then(a.bind(null,250))}));t.default=function(){var e=Object(N.a)(!1),t=Object(l.useState)(!1),a=Object(n.a)(t,2),o=a[0],r=a[1],s=Object(O.h)(),u=[{pageLink:"/",view:S,displayName:"Home",showInNavbar:!0},{pageLink:"/blog",view:i,displayName:"Blog",showInNavbar:!0},{pageLink:"/about",view:x,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:L,displayName:"State",showInNavbar:!1}];return Object(l.useEffect)((function(){o&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[o]),c.a.createElement("div",{className:"App"},c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(z,{showLanguageSwitcher:o,setShowLanguageSwitcher:r})),c.a.createElement(w,Object.assign({pages:u},{darkMode:e},{showLanguageSwitcher:o,setShowLanguageSwitcher:r})),c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null)},c.a.createElement(O.d,{location:s},u.map((function(e,t){return c.a.createElement(O.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return c.a.createElement(e.view,null)},key:t})})),c.a.createElement(O.a,{to:"/"}))))}}}]);
//# sourceMappingURL=15.b6f28c75.chunk.js.map