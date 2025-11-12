"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7570],{92561:function(m,i,n){n.r(i);var e=n(57027),s=n(86250),t=n(85893);i.default=function(){return(0,t.jsxs)(s.Z,{vertical:!0,gap:16,children:[(0,t.jsxs)(s.Z,{gap:16,children:[(0,t.jsx)(e.Z,{type:"primary",danger:!0,children:"Primary Danger"}),(0,t.jsx)(e.Z,{children:"Default"}),(0,t.jsx)(e.Z,{type:"primary",children:"Primary"})]}),(0,t.jsxs)(s.Z,{gap:16,children:[(0,t.jsx)(e.Z,{type:"primary",danger:!0,disabled:!0,children:"Primary Danger"}),(0,t.jsx)(e.Z,{disabled:!0,children:"Default"}),(0,t.jsx)(e.Z,{type:"primary",disabled:!0,children:"Primary"})]})]})}},66218:function(m,i,n){n.r(i);var e=n(57027),s=n(86250),t=n(85893);i.default=function(){return(0,t.jsxs)(s.Z,{gap:16,align:"center",children:[(0,t.jsx)(e.Z,{type:"primary",children:"Button MD"}),(0,t.jsx)(e.Z,{type:"primary",size:"small",children:"Button SM"})]})}},49554:function(m,i,n){n.r(i);var e=n(57027),s=n(86250),t=n(85893);i.default=function(){return(0,t.jsxs)(s.Z,{gap:16,align:"center",children:[(0,t.jsx)(e.Z,{children:"Button MD"}),(0,t.jsx)(e.Z,{size:"small",children:"Button SM"})]})}},73552:function(m,i,n){n.r(i);var e=n(57027),s=n(86250),t=n(85893);i.default=function(){return(0,t.jsxs)(s.Z,{gap:16,align:"center",children:[(0,t.jsx)(e.Z,{type:"text",children:"Button MD"}),(0,t.jsx)(e.Z,{type:"text",size:"small",children:"Button SM"})]})}},49306:function(m,i,n){n.r(i);var e=n(57027),s=n(86250),t=n(85893);i.default=function(){return(0,t.jsxs)(s.Z,{gap:16,align:"center",children:[(0,t.jsx)(e.Z,{type:"textCompact",children:"Button MD"}),(0,t.jsx)(e.Z,{type:"textCompact",size:"small",children:"Button SM"})]})}},32727:function(m,i,n){n.r(i);var e=n(57027),s=n(12624),t=n(86250),_=n(85893);i.default=function(){return(0,_.jsxs)(t.Z,{gap:24,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{style:{marginBottom:16},children:(0,_.jsx)(e.Z,{icon:(0,_.jsx)(s.Z,{}),type:"primary",children:"Button MD"})}),(0,_.jsx)("div",{style:{marginBottom:16},children:(0,_.jsx)(e.Z,{icon:(0,_.jsx)(s.Z,{}),children:"Button MD"})}),(0,_.jsx)("div",{style:{marginBottom:16},children:(0,_.jsx)(e.Z,{icon:(0,_.jsx)(s.Z,{}),type:"text",children:"Text"})}),(0,_.jsx)("div",{style:{marginBottom:16},children:(0,_.jsx)(e.Z,{icon:(0,_.jsx)(s.Z,{}),type:"textCompact",children:"TextCompact"})})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{style:{marginBottom:16,height:"32px",padding:"4px 0"},children:(0,_.jsx)(e.Z,{type:"primary",size:"small",iconType:"spark-plus-line",children:"Button SM"})}),(0,_.jsx)("div",{style:{marginBottom:16,height:"32px",padding:"4px 0"},children:(0,_.jsx)(e.Z,{size:"small",iconType:"spark-plus-line",children:"Button SM"})}),(0,_.jsx)("div",{style:{marginBottom:16,height:"32px",padding:"4px 0"},children:(0,_.jsx)(e.Z,{size:"small",iconType:"spark-plus-line",type:"text",children:"Text"})}),(0,_.jsx)("div",{style:{marginBottom:16,height:"32px",padding:"4px 0"},children:(0,_.jsx)(e.Z,{size:"small",iconType:"spark-plus-line",type:"textCompact",children:"TextCompact"})})]})]})}},57027:function(m,i,n){var e=n(97857),s=n.n(e),t=n(52677),_=n.n(t),p=n(13769),r=n.n(p),D=n(40443),x=n(9361),E=n(83622),f=n(55839),M=n(93967),P=n.n(M),c=n(67294),B=n(38654),v=n(33369),d=n(85893),T=["iconSize","loading"],u=(0,c.forwardRef)(function(j,a){var O=x.Z.useToken(),g=j.iconSize,l=j.loading,o=r()(j,T),C=c.useMemo(function(){return o.type==="primaryLess"?"primary":o.type==="textCompact"?"link":o.type},[o.type]),U=(0,c.useMemo)(function(){if(l){if(typeof l=="boolean")return{icon:(0,d.jsx)(D.Z,{spin:!0})};if(_()(l)==="object")return s()({icon:(0,d.jsx)(D.Z,{spin:!0})},l)}return l},[l]),y=c.useMemo(function(){return l&&_()(l)==="object"&&l.icon?l==null?void 0:l.icon:o.iconType?(0,d.jsx)(B.Z,{type:o.iconType,size:g!=null?g:o.size}):o.icon?c.cloneElement(o.icon,{size:g!=null?g:o.size}):null},[o.iconType,o.icon]),h=(0,d.jsx)(E.ZP,s()(s()({},o),{},{loading:U,ref:a,type:C,icon:y,style:s()({fontWeight:500,lineHeight:1},o.style),className:P()(o.className,"spark-button")}));return o.type==="primaryLess"?(0,d.jsx)(f.ZP,{theme:{token:{colorPrimary:O.token.colorText,colorPrimaryHover:O.token.colorTextSecondary,colorPrimaryActive:O.token.colorTextBase}},children:(0,d.jsx)(v.Z,{title:o.tooltipContent,children:h})}):o.type==="textCompact"?(0,d.jsx)(v.Z,{title:o.tooltipContent,children:(0,d.jsx)(E.ZP,s()(s()({},o),{},{ref:a,icon:y,color:"default",variant:"link",style:s()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},o.style),className:P()(o.className,"spark-button")}))}):(0,d.jsx)(v.Z,{title:o.tooltipContent,children:h})});i.Z=u},21773:function(m,i,n){n.d(i,{X:function(){return p}});var e=n(68400),s=n.n(e),t=n(3067),_,p=(0,t.Z)(_||(_=s()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix})},38654:function(m,i,n){n.d(i,{Z:function(){return T}});var e=n(9783),s=n.n(e),t=n(97857),_=n.n(t),p=n(13769),r=n.n(p),D=n(93865),x=n(27356),E=n(93967),f=n.n(E),M=n(67294),P=n(21773),c=n(85893),B=["type","className","isCursorPointer","spin","size"],v;function d(u){return v||(v=(0,x.Z)({scriptUrl:u})),v}function T(u){var j=u.type,a=u.className,O=a===void 0?"":a,g=u.isCursorPointer,l=g===void 0?!1:g,o=u.spin,C=u.size,U=r()(u,B),y=(0,D.getCommonConfig)(),h=y.sparkPrefix,W=y.iconfont,L=(0,P.X)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(L,{}),M.createElement(d(W),_()({type:j,style:_()({fontSize:C},u.style),className:f()(l&&"".concat(h,"-cursor-pointer"),O,"".concat(h,"-icon"),s()({},"".concat(h,"-icon-spin"),o))},U))]})}},33369:function(m,i,n){n.d(i,{Z:function(){return j}});var e=n(97857),s=n.n(e),t=n(13769),_=n.n(t),p=n(93865),r=n(35872),D=n(83062),x=n(93967),E=n.n(x),f=n(67294),M=n(68400),P=n.n(M),c=n(3067),B,v=(0,c.Z)(B||(B=P()([`
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
`])),function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),d=n(85893),T=["mode","arrow","overlayClassName","getPopupContainer","align"],u=(0,f.forwardRef)(function(a,O){var g=v(),l=a.mode,o=l===void 0?"dark":l,C=a.arrow,U=a.overlayClassName,y=a.getPopupContainer,h=a.align,W=_()(a,T),L=(0,p.getCommonConfig)(),A=L.sparkPrefix,I=L.antPrefix;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{}),(0,d.jsx)(D.Z,s()(s()({},W),{},{arrow:C!=null?C:!1,overlayClassName:E()(U,o==="light"&&"".concat(A,"-tooltip-light")),getPopupContainer:y||function(R){return(0,r.Q)(R,".".concat(I,"-app"))},ref:O}))]})}),j=u},35872:function(m,i,n){n.d(i,{Q:function(){return x},t:function(){return D}});var e=n(97857),s=n.n(e),t=n(27856),_=n.n(t),p=_()(window),r={ADD_ATTR:["target"]};function D(E){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return p.sanitize(E||"",s()(s()({},r),f))}var x=function(f,M){var P=f.closest(M);return P||document.querySelector(M)}}}]);
