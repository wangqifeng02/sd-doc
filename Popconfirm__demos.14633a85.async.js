"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8460],{7985:function(U,d,e){e.r(d);var r=e(81930),_=e(57027),g=e(67294),i=e(85893),o=function(){return(0,i.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",children:(0,i.jsx)(_.Z,{children:"Open Popconfirm"})})};d.default=o},50411:function(U,d,e){e.r(d);var r=e(81930),_=e(57027),g=e(86250),i=e(67294),o=e(85893),s=function(){return(0,o.jsxs)(g.Z,{vertical:!0,gap:24,children:[(0,o.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",type:"info",children:(0,o.jsx)(_.Z,{children:"Info"})}),(0,o.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",type:"success",children:(0,o.jsx)(_.Z,{children:"Success"})}),(0,o.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",type:"warning",okText:"Primary Danger",children:(0,o.jsx)(_.Z,{children:"Warning"})}),(0,o.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",type:"error",okText:"Primary Danger",children:(0,o.jsx)(_.Z,{children:"Error"})}),(0,o.jsx)(r.Z,{title:"Title here",description:"Descriptive content explaining the action or outcome.",children:(0,o.jsx)(_.Z,{children:"Confirm"})})]})};d.default=s},57027:function(U,d,e){var r=e(97857),_=e.n(r),g=e(52677),i=e.n(g),o=e(13769),s=e.n(o),E=e(40443),C=e(9361),v=e(83622),D=e(55839),M=e(93967),c=e.n(M),f=e(67294),T=e(38654),p=e(33369),l=e(85893),b=["iconSize","loading"],u=(0,f.forwardRef)(function(m,n){var j=C.Z.useToken(),P=m.iconSize,a=m.loading,t=s()(m,b),x=f.useMemo(function(){return t.type==="primaryLess"?"primary":t.type==="textCompact"?"link":t.type},[t.type]),h=(0,f.useMemo)(function(){if(a){if(typeof a=="boolean")return{icon:(0,l.jsx)(E.Z,{spin:!0})};if(i()(a)==="object")return _()({icon:(0,l.jsx)(E.Z,{spin:!0})},a)}return a},[a]),O=f.useMemo(function(){return a&&i()(a)==="object"&&a.icon?a==null?void 0:a.icon:t.iconType?(0,l.jsx)(T.Z,{type:t.iconType,size:P!=null?P:t.size}):t.icon?f.cloneElement(t.icon,{size:P!=null?P:t.size}):null},[t.iconType,t.icon]),y=(0,l.jsx)(v.ZP,_()(_()({},t),{},{loading:h,ref:n,type:x,icon:O,style:_()({fontWeight:500,lineHeight:1},t.style),className:c()(t.className,"spark-button")}));return t.type==="primaryLess"?(0,l.jsx)(D.ZP,{theme:{token:{colorPrimary:j.token.colorText,colorPrimaryHover:j.token.colorTextSecondary,colorPrimaryActive:j.token.colorTextBase}},children:(0,l.jsx)(p.Z,{title:t.tooltipContent,children:y})}):t.type==="textCompact"?(0,l.jsx)(p.Z,{title:t.tooltipContent,children:(0,l.jsx)(v.ZP,_()(_()({},t),{},{ref:n,icon:O,color:"default",variant:"link",style:_()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},t.style),className:c()(t.className,"spark-button")}))}):(0,l.jsx)(p.Z,{title:t.tooltipContent,children:y})});d.Z=u},21773:function(U,d,e){e.d(d,{X:function(){return o}});var r=e(68400),_=e.n(r),g=e(3067),i,o=(0,g.Z)(i||(i=_()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix})},38654:function(U,d,e){e.d(d,{Z:function(){return b}});var r=e(9783),_=e.n(r),g=e(97857),i=e.n(g),o=e(13769),s=e.n(o),E=e(93865),C=e(27356),v=e(93967),D=e.n(v),M=e(67294),c=e(21773),f=e(85893),T=["type","className","isCursorPointer","spin","size"],p;function l(u){return p||(p=(0,C.Z)({scriptUrl:u})),p}function b(u){var m=u.type,n=u.className,j=n===void 0?"":n,P=u.isCursorPointer,a=P===void 0?!1:P,t=u.spin,x=u.size,h=s()(u,T),O=(0,E.getCommonConfig)(),y=O.sparkPrefix,W=O.iconfont,B=(0,c.X)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(B,{}),M.createElement(l(W),i()({type:m,style:i()({fontSize:x},u.style),className:D()(a&&"".concat(y,"-cursor-pointer"),j,"".concat(y,"-icon"),_()({},"".concat(y,"-icon-spin"),t))},h))]})}},81930:function(U,d,e){var r=e(97857),_=e.n(r),g=e(13769),i=e.n(g),o=e(93865),s=e(52565),E=e(96406),C=e(55595),v=e(33495),D=e(86738),M=e(67294),c=e(85893),f=["icon","type","okButtonProps"],T=M.forwardRef(function(p,l){var b=p.icon,u=p.type,m=u===void 0?"confirm":u,n=p.okButtonProps,j=i()(p,f),P=(0,o.getCommonConfig)(),a=P.antPrefix,t=function(){return b||(m==="confirm"?(0,c.jsx)(s.Z,{style:{color:"var(--".concat(a,"-color-warning)")}}):m==="info"?(0,c.jsx)(E.Z,{style:{color:"var(--".concat(a,"-color-info)")}}):m==="warning"?(0,c.jsx)(s.Z,{style:{color:"var(--".concat(a,"-color-warning)")}}):m==="error"?(0,c.jsx)(C.Z,{style:{color:"var(--".concat(a,"-color-error)")}}):m==="success"?(0,c.jsx)(v.Z,{style:{color:"var(--".concat(a,"-color-success)")}}):(0,c.jsx)(s.Z,{style:{color:"var(--".concat(a,"-color-warning)")}}))},x=function(){var O={};return["warning","error"].includes(m)&&(O.danger=!0),_()(_()({},O),n||{})};return(0,c.jsx)(D.Z,_()(_()({},j),{},{ref:l,icon:t(),okButtonProps:x()}))});d.Z=T},33369:function(U,d,e){e.d(d,{Z:function(){return m}});var r=e(97857),_=e.n(r),g=e(13769),i=e.n(g),o=e(93865),s=e(35872),E=e(83062),C=e(93967),v=e.n(C),D=e(67294),M=e(68400),c=e.n(M),f=e(3067),T,p=(0,f.Z)(T||(T=c()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),l=e(85893),b=["mode","arrow","overlayClassName","getPopupContainer","align"],u=(0,D.forwardRef)(function(n,j){var P=p(),a=n.mode,t=a===void 0?"dark":a,x=n.arrow,h=n.overlayClassName,O=n.getPopupContainer,y=n.align,W=i()(n,b),B=(0,o.getCommonConfig)(),A=B.sparkPrefix,I=B.antPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(E.Z,_()(_()({},W),{},{arrow:x!=null?x:!1,overlayClassName:v()(h,t==="light"&&"".concat(A,"-tooltip-light")),getPopupContainer:O||function(L){return(0,s.Q)(L,".".concat(I,"-app"))},ref:j}))]})}),m=u},35872:function(U,d,e){e.d(d,{Q:function(){return C},t:function(){return E}});var r=e(97857),_=e.n(r),g=e(27856),i=e.n(g),o=i()(window),s={ADD_ATTR:["target"]};function E(v){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o.sanitize(v||"",_()(_()({},s),D))}var C=function(D,M){var c=D.closest(M);return c||document.querySelector(M)}}}]);
