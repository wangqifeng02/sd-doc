"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[976],{79705:function(b,d,e){e.r(d);var i=e(57027),o=e(67294),c=e(37339),_=e(85893),s=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(i.Z,{onClick:function(){return c.default.info({title:"Title here",children:"This information content passed into this AlertDialog.",centered:!0})},children:"Open AlertDialog(Info)"})})};d.default=s},3090:function(b,d,e){e.r(d);var i=e(57027),o=e(86250),c=e(67294),_=e(37339),s=e(85893),a=function(){return(0,s.jsxs)(o.Z,{vertical:!0,gap:24,children:[(0,s.jsx)(i.Z,{onClick:function(){return _.default.success({title:"Title here",children:"This information content passed into this AlertDialog.",centered:!0})},children:"Success"}),(0,s.jsx)(i.Z,{onClick:function(){return _.default.warning({title:"Title here",children:"This information content passed into this AlertDialog.",centered:!0})},children:"Warning"}),(0,s.jsx)(i.Z,{onClick:function(){return _.default.error({title:"Title here",children:"This information content passed into this AlertDialog.",centered:!0})},children:"Error"}),(0,s.jsx)(i.Z,{onClick:function(){return _.default.confirm({title:"Title here",children:"This information content passed into this AlertDialog.",centered:!0})},children:"Confirm"})]})};d.default=a},57027:function(b,d,e){var i=e(97857),o=e.n(i),c=e(52677),_=e.n(c),s=e(13769),a=e.n(s),p=e(40443),g=e(9361),E=e(83622),P=e(55839),C=e(93967),v=e.n(C),f=e(67294),x=e(38654),D=e(33369),l=e(85893),U=["iconSize","loading"],u=(0,f.forwardRef)(function(O,n){var M=g.Z.useToken(),m=O.iconSize,r=O.loading,t=a()(O,U),j=f.useMemo(function(){return t.type==="primaryLess"?"primary":t.type==="textCompact"?"link":t.type},[t.type]),A=(0,f.useMemo)(function(){if(r){if(typeof r=="boolean")return{icon:(0,l.jsx)(p.Z,{spin:!0})};if(_()(r)==="object")return o()({icon:(0,l.jsx)(p.Z,{spin:!0})},r)}return r},[r]),h=f.useMemo(function(){return r&&_()(r)==="object"&&r.icon?r==null?void 0:r.icon:t.iconType?(0,l.jsx)(x.Z,{type:t.iconType,size:m!=null?m:t.size}):t.icon?f.cloneElement(t.icon,{size:m!=null?m:t.size}):null},[t.iconType,t.icon]),T=(0,l.jsx)(E.ZP,o()(o()({},t),{},{loading:A,ref:n,type:j,icon:h,style:o()({fontWeight:500,lineHeight:1},t.style),className:v()(t.className,"spark-button")}));return t.type==="primaryLess"?(0,l.jsx)(P.ZP,{theme:{token:{colorPrimary:M.token.colorText,colorPrimaryHover:M.token.colorTextSecondary,colorPrimaryActive:M.token.colorTextBase}},children:(0,l.jsx)(D.Z,{title:t.tooltipContent,children:T})}):t.type==="textCompact"?(0,l.jsx)(D.Z,{title:t.tooltipContent,children:(0,l.jsx)(E.ZP,o()(o()({},t),{},{ref:n,icon:h,color:"default",variant:"link",style:o()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},t.style),className:v()(t.className,"spark-button")}))}):(0,l.jsx)(D.Z,{title:t.tooltipContent,children:T})});d.Z=u},21773:function(b,d,e){e.d(d,{X:function(){return s}});var i=e(68400),o=e.n(i),c=e(3067),_,s=(0,c.Z)(_||(_=o()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix})},38654:function(b,d,e){e.d(d,{Z:function(){return U}});var i=e(9783),o=e.n(i),c=e(97857),_=e.n(c),s=e(13769),a=e.n(s),p=e(93865),g=e(27356),E=e(93967),P=e.n(E),C=e(67294),v=e(21773),f=e(85893),x=["type","className","isCursorPointer","spin","size"],D;function l(u){return D||(D=(0,g.Z)({scriptUrl:u})),D}function U(u){var O=u.type,n=u.className,M=n===void 0?"":n,m=u.isCursorPointer,r=m===void 0?!1:m,t=u.spin,j=u.size,A=a()(u,x),h=(0,p.getCommonConfig)(),T=h.sparkPrefix,W=h.iconfont,y=(0,v.X)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y,{}),C.createElement(l(W),_()({type:O,style:_()({fontSize:j},u.style),className:P()(r&&"".concat(T,"-cursor-pointer"),M,"".concat(T,"-icon"),o()({},"".concat(T,"-icon-spin"),t))},A))]})}},33369:function(b,d,e){e.d(d,{Z:function(){return O}});var i=e(97857),o=e.n(i),c=e(13769),_=e.n(c),s=e(93865),a=e(35872),p=e(83062),g=e(93967),E=e.n(g),P=e(67294),C=e(68400),v=e.n(C),f=e(3067),x,D=(0,f.Z)(x||(x=v()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),l=e(85893),U=["mode","arrow","overlayClassName","getPopupContainer","align"],u=(0,P.forwardRef)(function(n,M){var m=D(),r=n.mode,t=r===void 0?"dark":r,j=n.arrow,A=n.overlayClassName,h=n.getPopupContainer,T=n.align,W=_()(n,U),y=(0,s.getCommonConfig)(),L=y.sparkPrefix,I=y.antPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{}),(0,l.jsx)(p.Z,o()(o()({},W),{},{arrow:j!=null?j:!1,overlayClassName:E()(A,t==="light"&&"".concat(L,"-tooltip-light")),getPopupContainer:h||function(B){return(0,a.Q)(B,".".concat(I,"-app"))},ref:M}))]})}),O=u},35872:function(b,d,e){e.d(d,{Q:function(){return g},t:function(){return p}});var i=e(97857),o=e.n(i),c=e(27856),_=e.n(c),s=_()(window),a={ADD_ATTR:["target"]};function p(E){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s.sanitize(E||"",o()(o()({},a),P))}var g=function(P,C){var v=P.closest(C);return v||document.querySelector(C)}}}]);
