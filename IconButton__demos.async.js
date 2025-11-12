"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[9606],{71123:function(U,d,n){n.r(d);var u=n(67985),o=n(12624),l=n(87697),_=n(9229),s=n(86250),e=n(85893);d.default=function(){return(0,e.jsxs)(s.Z,{gap:16,vertical:!0,children:[(0,e.jsxs)(s.Z,{gap:16,justify:"center",align:"center",children:[(0,e.jsx)(u.Z,{icon:(0,e.jsx)(o.Z,{}),bordered:!1}),(0,e.jsx)(u.Z,{icon:(0,e.jsx)(l.Z,{}),bordered:!1}),(0,e.jsx)(u.Z,{icon:(0,e.jsx)(_.Z,{}),bordered:!1})]}),(0,e.jsxs)(s.Z,{gap:16,justify:"center",align:"center",children:[(0,e.jsx)(u.Z,{icon:(0,e.jsx)(o.Z,{}),disabled:!0,bordered:!1}),(0,e.jsx)(u.Z,{icon:(0,e.jsx)(l.Z,{}),disabled:!0,bordered:!1}),(0,e.jsx)(u.Z,{icon:(0,e.jsx)(_.Z,{}),disabled:!0,bordered:!1})]})]})}},80533:function(U,d,n){n.r(d);var u=n(67294),o=n(86250),l=n(67985),_=n(12624),s=n(85893),e=function(){return(0,s.jsxs)(o.Z,{justify:"center",align:"center",gap:16,children:[(0,s.jsx)(l.Z,{size:"large",shape:"default",icon:(0,s.jsx)(_.Z,{})}),(0,s.jsx)(l.Z,{size:"middle",shape:"default",icon:(0,s.jsx)(_.Z,{})}),(0,s.jsx)(l.Z,{size:"small",shape:"default",icon:(0,s.jsx)(_.Z,{})})]})};d.default=e},51762:function(U,d,n){n.r(d);var u=n(67294),o=n(86250),l=n(67985),_=n(12624),s=n(85893),e=function(){return(0,s.jsxs)(o.Z,{align:"center",justify:"center",gap:16,children:[(0,s.jsx)(l.Z,{size:"large",shape:"circle",icon:(0,s.jsx)(_.Z,{})}),(0,s.jsx)(l.Z,{shape:"circle",icon:(0,s.jsx)(_.Z,{})}),(0,s.jsx)(l.Z,{size:"small",shape:"circle",icon:(0,s.jsx)(_.Z,{})})]})};d.default=e},57027:function(U,d,n){var u=n(97857),o=n.n(u),l=n(52677),_=n.n(l),s=n(13769),e=n.n(s),E=n(40443),C=n(9361),P=n(83622),v=n(55839),M=n(93967),p=n.n(M),m=n(67294),x=n(38654),j=n(33369),i=n(85893),b=["iconSize","loading"],g=(0,m.forwardRef)(function(r,t){var D=C.Z.useToken(),f=r.iconSize,c=r.loading,a=e()(r,b),O=m.useMemo(function(){return a.type==="primaryLess"?"primary":a.type==="textCompact"?"link":a.type},[a.type]),L=(0,m.useMemo)(function(){if(c){if(typeof c=="boolean")return{icon:(0,i.jsx)(E.Z,{spin:!0})};if(_()(c)==="object")return o()({icon:(0,i.jsx)(E.Z,{spin:!0})},c)}return c},[c]),T=m.useMemo(function(){return c&&_()(c)==="object"&&c.icon?c==null?void 0:c.icon:a.iconType?(0,i.jsx)(x.Z,{type:a.iconType,size:f!=null?f:a.size}):a.icon?m.cloneElement(a.icon,{size:f!=null?f:a.size}):null},[a.iconType,a.icon]),y=(0,i.jsx)(P.ZP,o()(o()({},a),{},{loading:L,ref:t,type:O,icon:T,style:o()({fontWeight:500,lineHeight:1},a.style),className:p()(a.className,"spark-button")}));return a.type==="primaryLess"?(0,i.jsx)(v.ZP,{theme:{token:{colorPrimary:D.token.colorText,colorPrimaryHover:D.token.colorTextSecondary,colorPrimaryActive:D.token.colorTextBase}},children:(0,i.jsx)(j.Z,{title:a.tooltipContent,children:y})}):a.type==="textCompact"?(0,i.jsx)(j.Z,{title:a.tooltipContent,children:(0,i.jsx)(P.ZP,o()(o()({},a),{},{ref:t,icon:T,color:"default",variant:"link",style:o()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},a.style),className:p()(a.className,"spark-button")}))}):(0,i.jsx)(j.Z,{title:a.tooltipContent,children:y})});d.Z=g},67985:function(U,d,n){n.d(d,{Z:function(){return g}});var u=n(97857),o=n.n(u),l=n(13769),_=n.n(l),s=n(38654),e=n(93865),E=n(57027),C=n(93967),P=n.n(C),v=n(67294),M=n(68400),p=n.n(M),m=n(3067),x,j=(0,m.Z)(x||(x=p()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),i=n(85893),b=["className","iconType","bordered"],g=function(r){var t=r.className,D=r.iconType,f=r.bordered,c=f===void 0?!0:f,a=_()(r,b),O=(0,e.getCommonConfig)(),L=O.iconfont,T=j(),y=(0,v.useMemo)(function(){return D?(0,i.jsx)(s.Z,{type:D,size:r.size}):typeof r.icon=="string"?(0,i.jsx)(s.Z,{type:r.icon,size:r.size}):r.icon},[r.icon,D,L]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T,{}),(0,i.jsx)(E.Z,o()(o()({className:P()(t,"".concat(O.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:c?"default":"text"},a),{},{icon:y}))]})}},21773:function(U,d,n){n.d(d,{X:function(){return s}});var u=n(68400),o=n.n(u),l=n(3067),_,s=(0,l.Z)(_||(_=o()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix})},38654:function(U,d,n){n.d(d,{Z:function(){return b}});var u=n(9783),o=n.n(u),l=n(97857),_=n.n(l),s=n(13769),e=n.n(s),E=n(93865),C=n(27356),P=n(93967),v=n.n(P),M=n(67294),p=n(21773),m=n(85893),x=["type","className","isCursorPointer","spin","size"],j;function i(g){return j||(j=(0,C.Z)({scriptUrl:g})),j}function b(g){var r=g.type,t=g.className,D=t===void 0?"":t,f=g.isCursorPointer,c=f===void 0?!1:f,a=g.spin,O=g.size,L=e()(g,x),T=(0,E.getCommonConfig)(),y=T.sparkPrefix,h=T.iconfont,W=(0,p.X)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(W,{}),M.createElement(i(h),_()({type:r,style:_()({fontSize:O},g.style),className:v()(c&&"".concat(y,"-cursor-pointer"),D,"".concat(y,"-icon"),o()({},"".concat(y,"-icon-spin"),a))},L))]})}},33369:function(U,d,n){n.d(d,{Z:function(){return r}});var u=n(97857),o=n.n(u),l=n(13769),_=n.n(l),s=n(93865),e=n(35872),E=n(83062),C=n(93967),P=n.n(C),v=n(67294),M=n(68400),p=n.n(M),m=n(3067),x,j=(0,m.Z)(x||(x=p()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),i=n(85893),b=["mode","arrow","overlayClassName","getPopupContainer","align"],g=(0,v.forwardRef)(function(t,D){var f=j(),c=t.mode,a=c===void 0?"dark":c,O=t.arrow,L=t.overlayClassName,T=t.getPopupContainer,y=t.align,h=_()(t,b),W=(0,s.getCommonConfig)(),B=W.sparkPrefix,I=W.antPrefix;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(E.Z,o()(o()({},h),{},{arrow:O!=null?O:!1,overlayClassName:P()(L,a==="light"&&"".concat(B,"-tooltip-light")),getPopupContainer:T||function(A){return(0,e.Q)(A,".".concat(I,"-app"))},ref:D}))]})}),r=g},35872:function(U,d,n){n.d(d,{Q:function(){return C},t:function(){return E}});var u=n(97857),o=n.n(u),l=n(27856),_=n.n(l),s=_()(window),e={ADD_ATTR:["target"]};function E(P){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s.sanitize(P||"",o()(o()({},e),v))}var C=function(v,M){var p=v.closest(M);return p||document.querySelector(M)}}}]);
