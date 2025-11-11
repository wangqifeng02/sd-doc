(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[236],{74331:function(g,d,e){"use strict";e.r(d);var l=e(5574),a=e.n(l),o=e(51850),_=e(57027),i=e(67294),n=e(85893),s="bl-ant";d.default=function(){var f=(0,i.useState)("var(--".concat(s,"-color-primary)")),u=a()(f,2),c=u[0],E=u[1];return(0,o.Z)({globalStyle:"#useGlobalStyleDemo {color: ".concat(c,"}")}),(0,o.Z)({globalStyle:"#useGlobalStyleDemo {color: ".concat(c,"}")}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{id:"useGlobalStyleDemo",children:"\u68C0\u67E5\u6587\u6848\u989C\u8272"}),(0,n.jsx)(_.Z,{className:"primary-btn",onClick:function(){return E("var(--".concat(s,"-color-primary)"))},children:"\u4E3B\u9898\u8272"}),(0,n.jsx)(_.Z,{className:"warning-btn",onClick:function(){return E("var(--".concat(s,"-color-warning)"))},children:"\u8B66\u544A\u8272"}),(0,n.jsx)(_.Z,{onClick:function(){return E("#000")},children:"\u9ED1\u8272"})]})}},57027:function(g,d,e){"use strict";var l=e(97857),a=e.n(l),o=e(52677),_=e.n(o),i=e(13769),n=e.n(i),s=e(40443),f=e(9361),u=e(83622),c=e(55839),E=e(93967),m=e.n(E),p=e(67294),C=e(38654),D=e(33369),P=e(85893),j=["iconSize","loading"],b=(0,p.forwardRef)(function(M,t){var x=f.Z.useToken(),O=M.iconSize,v=M.loading,r=n()(M,j),T=p.useMemo(function(){return r.type==="primaryLess"?"primary":r.type==="textCompact"?"link":r.type},[r.type]),A=(0,p.useMemo)(function(){if(v){if(typeof v=="boolean")return{icon:(0,P.jsx)(s.Z,{spin:!0})};if(_()(v)==="object")return a()({icon:(0,P.jsx)(s.Z,{spin:!0})},v)}return v},[v]),U=p.useMemo(function(){return v&&_()(v)==="object"&&v.icon?v==null?void 0:v.icon:r.iconType?(0,P.jsx)(C.Z,{type:r.iconType,size:O!=null?O:r.size}):r.icon?p.cloneElement(r.icon,{size:O!=null?O:r.size}):null},[r.iconType,r.icon]),y=(0,P.jsx)(u.ZP,a()(a()({},r),{},{loading:A,ref:t,type:T,icon:U,style:a()({fontWeight:500,lineHeight:1},r.style),className:m()(r.className,"spark-button")}));return r.type==="primaryLess"?(0,P.jsx)(c.ZP,{theme:{token:{colorPrimary:x.token.colorText,colorPrimaryHover:x.token.colorTextSecondary,colorPrimaryActive:x.token.colorTextBase}},children:(0,P.jsx)(D.Z,{title:r.tooltipContent,children:y})}):r.type==="textCompact"?(0,P.jsx)(D.Z,{title:r.tooltipContent,children:(0,P.jsx)(u.ZP,a()(a()({},r),{},{ref:t,icon:U,color:"default",variant:"link",style:a()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},r.style),className:m()(r.className,"spark-button")}))}):(0,P.jsx)(D.Z,{title:r.tooltipContent,children:y})});d.Z=b},21773:function(g,d,e){"use strict";e.d(d,{X:function(){return i}});var l=e(68400),a=e.n(l),o=e(3067),_,i=(0,o.Z)(_||(_=a()([`
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

.`,`-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
}

.`,`-icon-spin {
  animation: spinning 1s ease-in-out infinite;
}

.`,`-cursor-pointer {
  cursor: pointer;
  color: var(--`,`-color-icon);
  
  &:hover {
    color: var(--`,`-color-icon-hover);
  }
}
`])),function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix})},38654:function(g,d,e){"use strict";e.d(d,{Z:function(){return j}});var l=e(9783),a=e.n(l),o=e(97857),_=e.n(o),i=e(13769),n=e.n(i),s=e(93865),f=e(27356),u=e(93967),c=e.n(u),E=e(67294),m=e(21773),p=e(85893),C=["type","className","isCursorPointer","spin","size"],D;function P(b){return D||(D=(0,f.Z)({scriptUrl:b})),D}function j(b){var M=b.type,t=b.className,x=t===void 0?"":t,O=b.isCursorPointer,v=O===void 0?!1:O,r=b.spin,T=b.size,A=n()(b,C),U=(0,s.getCommonConfig)(),y=U.sparkPrefix,h=U.iconfont,L=(0,m.X)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(L,{}),E.createElement(P(h),_()({type:M,style:_()({fontSize:T},b.style),className:c()(v&&"".concat(y,"-cursor-pointer"),x,"".concat(y,"-icon"),a()({},"".concat(y,"-icon-spin"),r))},A))]})}},33369:function(g,d,e){"use strict";e.d(d,{Z:function(){return M}});var l=e(97857),a=e.n(l),o=e(13769),_=e.n(o),i=e(93865),n=e(35872),s=e(83062),f=e(93967),u=e.n(f),c=e(67294),E=e(68400),m=e.n(E),p=e(3067),C,D=(0,p.Z)(C||(C=m()([`
/* \u9ED8\u8BA4\u6DF1\u8272 */
.`,`-tooltip-content {
  .`,`-tooltip-inner {
    border: 1px solid transparent;
    padding: 6px 12px;
    background: var(--`,`-color-text-base);
    color: var(--`,`-color-bg-base);
  }
}

/* \u6D45\u8272\u6A21\u5F0F */
.`,`-tooltip-light {
  .`,"-tooltip-content .",`-tooltip-inner {
    background: var(--`,`-color-bg-base);
    color: var(--`,`-color-text);
  }
  
  .`,`-tooltip-arrow {
    &::after {
      background: var(--`,`-color-bg-base);
    }
  }
}
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),P=e(85893),j=["mode","arrow","overlayClassName","getPopupContainer","align"],b=(0,c.forwardRef)(function(t,x){var O=D(),v=t.mode,r=v===void 0?"dark":v,T=t.arrow,A=t.overlayClassName,U=t.getPopupContainer,y=t.align,h=_()(t,j),L=(0,i.getCommonConfig)(),I=L.sparkPrefix,R=L.antPrefix;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(O,{}),(0,P.jsx)(s.Z,a()(a()({},h),{},{arrow:T!=null?T:!1,overlayClassName:u()(A,r==="light"&&"".concat(I,"-tooltip-light")),getPopupContainer:U||function(W){return(0,n.Q)(W,".".concat(R,"-app"))},ref:x}))]})}),M=b},93865:function(g,d,e){"use strict";e.r(d),e.d(d,{DEFAULT_ANT_PREFIX:function(){return n},DEFAULT_BL_PREFIX:function(){return s},DEFAULT_SPARK_PREFIX:function(){return f},getCommonConfig:function(){return m},setCommonConfig:function(){return E},useCommonConfig:function(){return p}});var l=e(5574),a=e.n(l),o=e(97857),_=e.n(o),i=e(67294),n="ant",s="bl",f="spark",u=[],c={antPrefix:n,blPrefix:s,sparkPrefix:f,configProviderProps:{},isDarkMode:!1};function E(C){Object.assign(c,C),requestAnimationFrame(function(){u.forEach(function(D){return D(_()({},c))})})}function m(){return c}function p(){var C=(0,i.useState)(function(){return m()}),D=a()(C,2),P=D[0],j=D[1];return(0,i.useLayoutEffect)(function(){var b=j;return u.push(b),function(){var M=u.findIndex(function(t){return t===b});M>=0&&u.splice(M,1)}},[]),P}},51850:function(g,d,e){"use strict";e.d(d,{Z:function(){return i}});var l=e(97857),a=e.n(l),o=e(67294),_=new Map;function i(n){var s=n.globalStyle,f=n.name;(0,o.useLayoutEffect)(function(){var u=_.get(s)||0;if(u)_.set(s,a()(a()({},u),{},{count:u.count+1}));else{var c=document.createElement("style"),E=Math.random().toString(36).slice(2);c.innerHTML=s,c.dataset.id=E,c.dataset.flag="bailian-ui-use-style",f&&c.setAttribute("name",f),document.head.appendChild(c),_.set(s,{count:1,id:E})}return function(){var m=_.get(s);_.set(s,a()(a()({},m),{},{count:m.count-1})),setTimeout(function(){var p=_.get(s);if((p==null?void 0:p.count)<=0){var C;_.delete(s),(C=document.head.querySelector('[data-id="'+p.id+'"]'))===null||C===void 0||C.remove()}},100)}},[s])}},3067:function(g,d,e){"use strict";e.d(d,{Z:function(){return i}});var l=e(93865),a=e(30122),o=e(67294),_=e(85893);function i(){for(var n=arguments.length,s=new Array(n),f=0;f<n;f++)s[f]=arguments[f];return function(){var u=(0,l.useCommonConfig)(),c=u.sparkPrefix,E=u.antPrefix,m=u.blPrefix,p=a.vJ.apply(void 0,s),C=(0,o.useRef)(function(){return(0,_.jsx)(p,{sparkPrefix:c,antPrefix:E,blPrefix:m})});return C.current}}},35872:function(g,d,e){"use strict";e.d(d,{Q:function(){return f},t:function(){return s}});var l=e(97857),a=e.n(l),o=e(27856),_=e.n(o),i=_()(window),n={ADD_ATTR:["target"]};function s(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i.sanitize(u||"",a()(a()({},n),c))}var f=function(c,E){var m=c.closest(E);return m||document.querySelector(E)}},13769:function(g,d,e){var l=e(48541);function a(o,_){if(o==null)return{};var i=l(o,_),n,s;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(s=0;s<f.length;s++)n=f[s],!(_.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(o,n)&&(i[n]=o[n])}return i}g.exports=a,g.exports.__esModule=!0,g.exports.default=g.exports},48541:function(g){function d(e,l){if(e==null)return{};var a={},o=Object.keys(e),_,i;for(i=0;i<o.length;i++)_=o[i],!(l.indexOf(_)>=0)&&(a[_]=e[_]);return a}g.exports=d,g.exports.__esModule=!0,g.exports.default=g.exports},68400:function(g){function d(e,l){return l||(l=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(l)}}))}g.exports=d,g.exports.__esModule=!0,g.exports.default=g.exports}}]);
