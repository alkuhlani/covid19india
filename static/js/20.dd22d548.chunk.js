(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[20,28],{163:function(e,t,a){"use strict";var r=a(0),i=a(89),n=function(){};t.a=function(e,t,a){if(!i.a)return[t,n,n];if(!e)throw new Error("useLocalStorage key may not be falsy");var c=a?a.raw?function(e){return e}:a.deserializer:JSON.parse,s=Object(r.useState)((function(){try{var r=a?a.raw?String:a.serializer:JSON.stringify,i=localStorage.getItem(e);return null!==i?c(i):(t&&localStorage.setItem(e,r(t)),t)}catch(s){return t}})),o=s[0],l=s[1],d=Object(r.useCallback)((function(t){try{var r="function"===typeof t?t(o):t;if("undefined"===typeof r)return;var i=void 0;i=a?a.raw?"string"===typeof r?r:JSON.stringify(r):a.serializer?a.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,i),l(c(i))}catch(s){}}),[e,l]),u=Object(r.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(s){}}),[e,l]);return[o,d,u]}},197:function(e,t,a){"use strict";a.r(t);var r=a(109),i=a(81),n=a(0),c=a.n(n),s=a(95),o=function(){var e=window.innerWidth,t=e>769?480:e;return c.a.createElement(s.a,{viewBox:"0 0 ".concat(t," ").concat(800),height:800,width:t,speed:2},c.a.createElement("circle",{cx:.4*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.5*t,cy:400,r:"5"}),c.a.createElement("circle",{cx:.6*t,cy:400,r:"5"}))},l=a(7),d=a(102),u=a(31),m=a(88),b=a(82),f=a.n(b),O=a(61),h=a(62),g=a(4),p=a(2),j=a(1);function y(e,t){Object(j.a)(2,arguments);var a=Object(p.a)(e),r=Object(g.a)(t);if(isNaN(r))return new Date(NaN);if(!r)return a;var i=a.getDate(),n=new Date(a.getTime());n.setMonth(a.getMonth()+r+1,0);var c=n.getDate();return i>=c?n:(a.setFullYear(n.getFullYear(),n.getMonth(),i),a)}function v(e,t){Object(j.a)(2,arguments);var a=Object(g.a)(t);return y(e,-a)}function N(e,t){if(Object(j.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(g.a)(t.years):0,r="months"in t?Object(g.a)(t.months):0,i="weeks"in t?Object(g.a)(t.weeks):0,n="days"in t?Object(g.a)(t.days):0,c="hours"in t?Object(g.a)(t.hours):0,s="minutes"in t?Object(g.a)(t.minutes):0,o="seconds"in t?Object(g.a)(t.seconds):0,l=v(Object(p.a)(e),r+12*a),d=Object(h.a)(l,n+7*i),u=s+60*c,m=o+60*u,b=1e3*m,f=new Date(d.getTime()-b);return f}var E=a(85),C=a.n(E),k=a(251),w=a(163),x=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(4),a.e(27)]).then(a.bind(null,243))}));t.default=c.a.memo((function(e){var t=this,a=e.stateCode,s=e.timeseries,b=e.date,h=e.regionHighlighted,g=e.setRegionHighlighted,p=e.anchor,j=e.setAnchor,y=e.expandTable,v=Object(k.a)().t,E=Object(w.a)("timeseriesLookback",l.z.MONTH),C=Object(i.a)(E,2),S=C[0],T=C[1],M=Object(w.a)("chartType","total"),z=Object(i.a)(M,2),H=z[0],J=z[1],I=Object(w.a)("isUniform",!0),P=Object(i.a)(I,2),R=P[0],U=P[1],D=Object(w.a)("isLog",!1),L=Object(i.a)(D,2),F=L[0],B=L[1],G=Object(n.useRef)(),q=Object(d.a)(G,{once:!0}),K=Object(n.useMemo)((function(){var e;return(null===s||void 0===s||null===(e=s[h.stateCode])||void 0===e?void 0:e.districts)?{stateCode:h.stateCode,districtName:h.districtName}:{stateCode:h.stateCode,districtName:null}}),[s,h.stateCode,h.districtName]),Y=Object(n.useMemo)((function(){var e,t,a,r;return K.districtName?null===s||void 0===s||null===(e=s[K.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(a=t[K.districtName])||void 0===a?void 0:a.dates:null===s||void 0===s||null===(r=s[K.stateCode])||void 0===r?void 0:r.dates}),[s,K.stateCode,K.districtName]),A=Object(n.useMemo)((function(){var e=Object.keys(s||{}).filter((function(e){return e!==a})).sort((function(e,t){return l.s[e].localeCompare(l.s[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(s||{}).reduce((function(e,t){var a;return[].concat(Object(r.a)(e),Object(r.a)(Object.keys((null===s||void 0===s||null===(a=s[t])||void 0===a?void 0:a.districts)||{}).reduce((function(e,a){return[].concat(Object(r.a)(e),[{stateCode:t,districtName:a}])}),[])))}),[]);return[{stateCode:a,districtName:null}].concat(Object(r.a)(e),Object(r.a)(t))}),[s,a]),W=Object(n.useMemo)((function(){return A.find((function(e){return e.stateCode===h.stateCode&&e.districtName===h.districtName}))?A:[].concat(Object(r.a)(A),[{stateCode:h.stateCode,districtName:h.districtName}])}),[h.stateCode,h.districtName,A]),X=Object(n.useMemo)((function(){var e,t=b||Object(u.g)(),a=Object.keys(Y||{}).filter((function(e){return e<=t})),r=a[a.length-1];return S===l.z.BEGINNING?a:(S===l.z.MONTH?e=Object(O.a)(N(Object(u.k)(r),{months:1}),{representation:"date"}):S===l.z.THREE_MONTHS&&(e=Object(O.a)(N(Object(u.k)(r),{months:3}),{representation:"date"})),a.filter((function(t){return t>=e})))}),[Y,b,S]),_=Object(n.useCallback)((function(e){var t=e.target;g(JSON.parse(t.value))}),[g]),Q=Object(n.useCallback)((function(){g({stateCode:a,districtName:null})}),[a,g]);return c.a.createElement("div",{className:f()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===p},{expanded:y}),style:{display:"mapexplorer"===p?"none":""},ref:G},c.a.createElement("div",{className:"timeseries-header"},c.a.createElement("div",{className:f()("anchor",{stickied:"timeseries"===p}),onClick:j&&j.bind(this,"timeseries"===p?null:"timeseries")},c.a.createElement(m.m,null)),c.a.createElement("h1",null,v("Spread Trends")),c.a.createElement("div",{className:"tabs"},Object.entries(l.y).map((function(e,a){var r=Object(i.a)(e,2),n=r[0],s=r[1];return c.a.createElement("div",{className:"tab ".concat(H===n?"focused":""),key:n,onClick:J.bind(t,n)},c.a.createElement("h4",null,v(s)))}))),c.a.createElement("div",{className:"scale-modes"},c.a.createElement("label",{className:"main"},v("Scale Modes")),c.a.createElement("div",{className:"timeseries-mode"},c.a.createElement("label",{htmlFor:"timeseries-mode"},v("Uniform")),c.a.createElement("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:R,"aria-label":v("Checked by default to scale uniformly."),onChange:U.bind(this,!R)})),c.a.createElement("div",{className:"timeseries-logmode ".concat("total"!==H?"disabled":"")},c.a.createElement("label",{htmlFor:"timeseries-logmode"},v("Logarithmic")),c.a.createElement("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===H&&F,className:"switch",disabled:"total"!==H,onChange:B.bind(this,!F)})))),W&&c.a.createElement("div",{className:"state-selection"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("select",{value:JSON.stringify(K),onChange:_},W.filter((function(e){return l.s[e.stateCode]!==e.districtName})).map((function(e){return c.a.createElement("option",{value:JSON.stringify(e),key:"".concat(e.stateCode,"-").concat(e.districtName)},e.districtName?v(e.districtName):v(l.s[e.stateCode]))})))),c.a.createElement("div",{className:"reset-icon",onClick:Q},c.a.createElement(m.o,null))),q&&c.a.createElement(n.Suspense,{fallback:c.a.createElement(o,null)},c.a.createElement(x,Object.assign({timeseries:Y,regionHighlighted:K},{dates:X,chartType:H,isUniform:R,isLog:F}))),!q&&c.a.createElement("div",{style:{height:"50rem"}}),c.a.createElement("div",{className:"pills"},Object.values(l.z).map((function(e){return c.a.createElement("button",{key:e,type:"button",className:f()({selected:S===e}),onClick:function(){return T(e)}},v(e))}))),c.a.createElement("div",{className:"alert"},c.a.createElement(m.k,{size:24}),c.a.createElement("div",{className:"alert-right"},v("Tested chart is independent of uniform scaling"))))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!C()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!C()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!C()(t.date,e.date)&&(!!C()(t.anchor,e.anchor)&&!!C()(t.expandTable,e.expandTable))))))}))},95:function(e,t,a){"use strict";var r=a(0),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,a=e.backgroundColor,n=e.backgroundOpacity,c=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,m=e.interval,b=e.rtl,f=e.speed,O=e.style,h=e.title,g=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),p=u||Math.random().toString(36).substring(6),j=p+"-diff",y=p+"-animated-diff",v=p+"-aria",N=b?{transform:"scaleX(-1)"}:null,E="0; "+m+"; 1",C=f+"s";return Object(r.createElement)("svg",i({"aria-labelledby":v,role:"img",style:i(i({},O),N)},g),h?Object(r.createElement)("title",{id:v},h):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+j+")",style:{fill:"url("+c+"#"+y+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:j},s),Object(r.createElement)("linearGradient",{id:y},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:E,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:E,dur:C,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:E,dur:C,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(n,i({},e)):Object(r.createElement)(s,i({},e))},s=function(e){return Object(r.createElement)(c,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=c}}]);
//# sourceMappingURL=20.dd22d548.chunk.js.map