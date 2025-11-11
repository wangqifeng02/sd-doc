"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[3150],{29168:function(T,c,n){n.r(c);var a=n(57027),t=n(89887),g=n(67294),i=n(85893),_=function(){return(0,i.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content"})},children:"Open"})};c.default=_},53090:function(T,c,n){n.r(c);var a=n(57027),t=n(89887),g=n(67294),i=n(85893),_=function(){return(0,i.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",actions:(0,i.jsx)(a.Z,{onClick:function(){return alert("click next")},children:"Next"})})},children:"Open"})};c.default=_},94664:function(T,c,n){n.r(c);var a=n(57027),t=n(89887),g=n(86250),i=n(67294),_=n(85893),r=function(){return(0,_.jsxs)(g.Z,{gap:16,children:[(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",duration:0})},children:"Success"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.info({message:"title",description:"content"})},children:"Info"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.warning({message:"title",description:"content"})},children:"Warning"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.error({message:"title",description:"content"})},children:"Error"})]})};c.default=r},9800:function(T,c,n){n.r(c);var a=n(57027),t=n(89887),g=n(86250),i=n(67294),_=n(85893),r=function(){return(0,_.jsxs)(g.Z,{vertical:!0,gap:48,children:[(0,_.jsxs)(g.Z,{justify:"space-between",style:{width:320},children:[(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"topLeft"})},children:"topLeft"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"top"})},children:"top"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"topRight"})},children:"topRight"})]}),(0,_.jsxs)(g.Z,{justify:"space-between",style:{width:320},children:[(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"bottomLeft"})},children:"bottomLeft"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"bottom"})},children:"bottom"}),(0,_.jsx)(a.Z,{onClick:function(){return t.Z.success({message:"title",description:"content",placement:"bottomRight"})},children:"bottomRight"})]})]})};c.default=r},57027:function(T,c,n){var a=n(97857),t=n.n(a),g=n(52677),i=n.n(g),_=n(13769),r=n.n(_),E=n(40443),d=n(9361),x=n(83622),f=n(55839),v=n(93967),D=n.n(v),p=n(67294),O=n(38654),l=n(33369),o=n(85893),M=["iconSize","loading"],u=(0,p.forwardRef)(function(j,e){var U=d.Z.useToken(),P=j.iconSize,m=j.loading,s=r()(j,M),C=p.useMemo(function(){return s.type==="primaryLess"?"primary":s.type==="textCompact"?"link":s.type},[s.type]),A=(0,p.useMemo)(function(){if(m){if(typeof m=="boolean")return{icon:(0,o.jsx)(E.Z,{spin:!0})};if(i()(m)==="object")return t()({icon:(0,o.jsx)(E.Z,{spin:!0})},m)}return m},[m]),L=p.useMemo(function(){return m&&i()(m)==="object"&&m.icon?m==null?void 0:m.icon:s.iconType?(0,o.jsx)(O.Z,{type:s.iconType,size:P!=null?P:s.size}):s.icon?p.cloneElement(s.icon,{size:P!=null?P:s.size}):null},[s.iconType,s.icon]),b=(0,o.jsx)(x.ZP,t()(t()({},s),{},{loading:A,ref:e,type:C,icon:L,style:t()({fontWeight:500,lineHeight:1},s.style),className:D()(s.className,"spark-button")}));return s.type==="primaryLess"?(0,o.jsx)(f.ZP,{theme:{token:{colorPrimary:U.token.colorText,colorPrimaryHover:U.token.colorTextSecondary,colorPrimaryActive:U.token.colorTextBase}},children:(0,o.jsx)(l.Z,{title:s.tooltipContent,children:b})}):s.type==="textCompact"?(0,o.jsx)(l.Z,{title:s.tooltipContent,children:(0,o.jsx)(x.ZP,t()(t()({},s),{},{ref:e,icon:L,color:"default",variant:"link",style:t()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},s.style),className:D()(s.className,"spark-button")}))}):(0,o.jsx)(l.Z,{title:s.tooltipContent,children:b})});c.Z=u},21773:function(T,c,n){n.d(c,{X:function(){return _}});var a=n(68400),t=n.n(a),g=n(3067),i,_=(0,g.Z)(i||(i=t()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix})},38654:function(T,c,n){n.d(c,{Z:function(){return M}});var a=n(9783),t=n.n(a),g=n(97857),i=n.n(g),_=n(13769),r=n.n(_),E=n(93865),d=n(27356),x=n(93967),f=n.n(x),v=n(67294),D=n(21773),p=n(85893),O=["type","className","isCursorPointer","spin","size"],l;function o(u){return l||(l=(0,d.Z)({scriptUrl:u})),l}function M(u){var j=u.type,e=u.className,U=e===void 0?"":e,P=u.isCursorPointer,m=P===void 0?!1:P,s=u.spin,C=u.size,A=r()(u,O),L=(0,E.getCommonConfig)(),b=L.sparkPrefix,W=L.iconfont,h=(0,D.X)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{}),v.createElement(o(W),i()({type:j,style:i()({fontSize:C},u.style),className:f()(m&&"".concat(b,"-cursor-pointer"),U,"".concat(b,"-icon"),t()({},"".concat(b,"-icon-spin"),s))},A))]})}},89887:function(T,c,n){var a=n(5574),t=n.n(a),g=n(97857),i=n.n(g),_=n(93865),r=n(77900),E=n(29998),d=n(29368),x=n(61441),f=n(26855),v=n(85893),D=["success","warning","error","info"];function p(l,o){if(l==="success")return(0,v.jsx)(r.Z,{style:{color:"var(--".concat(o,"-color-success)"),fontSize:24}});if(l==="warning")return(0,v.jsx)(E.Z,{style:{color:"var(--".concat(o,"-color-warning)"),fontSize:24}});if(l==="info")return(0,v.jsx)(d.Z,{style:{color:"var(--".concat(o,"-color-info)"),fontSize:24}});if(l==="error")return(0,v.jsx)(x.Z,{style:{color:"var(--".concat(o,"-color-error)"),fontSize:24}})}var O={};O.destroy=f.ZP.destroy,O.open=function(l){var o=(0,_.getCommonConfig)(),M=o.sparkPrefix,u="".concat(M,"-notification");l.className&&(u+=" ".concat(l.className)),f.ZP.open(i()(i()({},l),{},{className:u}))},D.forEach(function(l){O[l]=function(o){var M=(0,_.getCommonConfig)(),u=M.sparkPrefix,j=M.antPrefix,e="".concat(u,"-notification");o.className&&(e+=" ".concat(o.className)),f.ZP[l](i()(i()({},o),{},{className:e,icon:p(l,j)}))}}),O.useNotification=function(l){var o=(0,_.getCommonConfig)(),M=o.sparkPrefix,u=o.antPrefix,j="".concat(M,"-notification"),e=f.ZP.useNotification(l),U=t()(e,2),P=U[0],m=U[1],s={};return D.forEach(function(C){s[C]=function(A){return P[C](i()(i()({},A),{},{className:j,icon:p(C,u)}))}}),s.open=function(C){f.ZP.open(i()(i()({},C),{},{className:j}))},s.destroy=P.destroy,[s,m]},c.Z=O},33369:function(T,c,n){n.d(c,{Z:function(){return j}});var a=n(97857),t=n.n(a),g=n(13769),i=n.n(g),_=n(93865),r=n(35872),E=n(83062),d=n(93967),x=n.n(d),f=n(67294),v=n(68400),D=n.n(v),p=n(3067),O,l=(0,p.Z)(O||(O=D()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),o=n(85893),M=["mode","arrow","overlayClassName","getPopupContainer","align"],u=(0,f.forwardRef)(function(e,U){var P=l(),m=e.mode,s=m===void 0?"dark":m,C=e.arrow,A=e.overlayClassName,L=e.getPopupContainer,b=e.align,W=i()(e,M),h=(0,_.getCommonConfig)(),R=h.sparkPrefix,I=h.antPrefix;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(P,{}),(0,o.jsx)(E.Z,t()(t()({},W),{},{arrow:C!=null?C:!1,overlayClassName:x()(A,s==="light"&&"".concat(R,"-tooltip-light")),getPopupContainer:L||function(B){return(0,r.Q)(B,".".concat(I,"-app"))},ref:U}))]})}),j=u},35872:function(T,c,n){n.d(c,{Q:function(){return d},t:function(){return E}});var a=n(97857),t=n.n(a),g=n(27856),i=n.n(g),_=i()(window),r={ADD_ATTR:["target"]};function E(x){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return _.sanitize(x||"",t()(t()({},r),f))}var d=function(f,v){var D=f.closest(v);return D||document.querySelector(v)}}}]);
