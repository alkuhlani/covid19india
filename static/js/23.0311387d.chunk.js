(this.webpackJsonpcovid19yemen=this.webpackJsonpcovid19yemen||[]).push([[23],{136:function(t,e,n){"use strict";n.r(e);var c=n(19),a=n(81),i=n(7),o=n(82),r=n.n(o),u=n(0),s=n.n(u),f=n(45),b=n.n(f),d=n(84),l=n(146);e.default=s.a.memo((function(t){var e=t.mapStatistic,n=t.setMapStatistic,o=Object(l.a)(),f=Object(a.a)(o,2),h=f[0],m=f[1].width,p=Object(u.useState)(!1),O=Object(a.a)(p,2),v=O[0],j=O[1],w=Object(u.useState)(0),g=Object(a.a)(w,2),y=g[0],S=g[1],k=Object(d.c)((function(){return{opacity:0,background:"".concat(i.t[e].color,"20"),transform:"translateX(".concat(m*i.o.indexOf(e)*.25,"px)"),config:d.b.gentle}})),x=Object(a.a)(k,2),E=x[0],R=x[1];Object(u.useEffect)((function(){m>0&&b.a.unstable_batchedUpdates((function(){R({transform:"translateX(".concat(m*i.o.indexOf(e)*.25,"px)"),opacity:1,background:"".concat(i.t[e].color,"20"),delay:0===y?1500:0,onStart:j.bind(void 0,!0),onRest:j.bind(void 0,!1)})}))}),[y,e,R,m]);var M=Object(u.useCallback)((function(t){S((function(t){return t+1})),n(t)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:h},s.a.createElement(d.a.div,{className:"highlight",style:E}),i.o.map((function(t,e){return s.a.createElement("div",{key:e,className:r()("clickable",Object(c.a)({},"is-".concat(t),!v)),onClick:M.bind(void 0,t)})})))}),(function(t,e){return t.mapStatistic===e.mapStatistic}))},146:function(t,e,n){"use strict";var c=n(0),a="undefined"!==typeof window?c.useLayoutEffect:c.useEffect,i=n(89),o={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=i.a&&window.ResizeObserver?function(){var t=Object(c.useState)(null),e=t[0],n=t[1],i=Object(c.useState)(o),r=i[0],u=i[1],s=Object(c.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,c=e.y,a=e.width,i=e.height,o=e.top,r=e.left,s=e.bottom,f=e.right;u({x:n,y:c,width:a,height:i,top:o,left:r,bottom:s,right:f})}}))}),[]);return a((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[n,r]}:function(){return[function(){},o]}}}]);
//# sourceMappingURL=23.0311387d.chunk.js.map