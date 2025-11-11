"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[31],{74744:function(T,l,e){e.r(l);var d=e(33369),t=e(57027),g=e(67294),r=e(85893),s=function(){return(0,r.jsx)(d.Z,{title:"This is a tooltip",children:(0,r.jsx)(t.Z,{children:"Hover here"})})};l.default=s},42628:function(T,l,e){e.r(l);var d=e(33369),t=e(57027),g=e(86250),r=e(67294),s=e(85893),a=function(){return(0,s.jsx)(d.Z,{title:(0,s.jsxs)(g.Z,{align:"center",gap:8,children:[(0,s.jsx)("span",{children:"This is a tooltip"}),(0,s.jsx)(t.Z,{type:"link",style:{height:20,lineHeight:"20px",padding:0},children:"Operation"})]}),children:(0,s.jsx)(t.Z,{children:"Hover here"})})};l.default=a},57027:function(T,l,e){var d=e(97857),t=e.n(d),g=e(52677),r=e.n(g),s=e(13769),a=e.n(s),p=e(40443),O=e(9361),f=e(83622),E=e(55839),D=e(93967),P=e.n(D),c=e(67294),U=e(38654),v=e(33369),i=e(85893),h=["iconSize","loading"],u=(0,c.forwardRef)(function(M,n){var C=O.Z.useToken(),m=M.iconSize,o=M.loading,_=a()(M,h),j=c.useMemo(function(){return _.type==="primaryLess"?"primary":_.type==="textCompact"?"link":_.type},[_.type]),y=(0,c.useMemo)(function(){if(o){if(typeof o=="boolean")return{icon:(0,i.jsx)(p.Z,{spin:!0})};if(r()(o)==="object")return t()({icon:(0,i.jsx)(p.Z,{spin:!0})},o)}return o},[o]),b=c.useMemo(function(){return o&&r()(o)==="object"&&o.icon?o==null?void 0:o.icon:_.iconType?(0,i.jsx)(U.Z,{type:_.iconType,size:m!=null?m:_.size}):_.icon?c.cloneElement(_.icon,{size:m!=null?m:_.size}):null},[_.iconType,_.icon]),x=(0,i.jsx)(f.ZP,t()(t()({},_),{},{loading:y,ref:n,type:j,icon:b,style:t()({fontWeight:500,lineHeight:1},_.style),className:P()(_.className,"spark-button")}));return _.type==="primaryLess"?(0,i.jsx)(E.ZP,{theme:{token:{colorPrimary:C.token.colorText,colorPrimaryHover:C.token.colorTextSecondary,colorPrimaryActive:C.token.colorTextBase}},children:(0,i.jsx)(v.Z,{title:_.tooltipContent,children:x})}):_.type==="textCompact"?(0,i.jsx)(v.Z,{title:_.tooltipContent,children:(0,i.jsx)(f.ZP,t()(t()({},_),{},{ref:n,icon:b,color:"default",variant:"link",style:t()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},_.style),className:P()(_.className,"spark-button")}))}):(0,i.jsx)(v.Z,{title:_.tooltipContent,children:x})});l.Z=u},21773:function(T,l,e){e.d(l,{X:function(){return s}});var d=e(68400),t=e.n(d),g=e(3067),r,s=(0,g.Z)(r||(r=t()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix})},38654:function(T,l,e){e.d(l,{Z:function(){return h}});var d=e(9783),t=e.n(d),g=e(97857),r=e.n(g),s=e(13769),a=e.n(s),p=e(93865),O=e(27356),f=e(93967),E=e.n(f),D=e(67294),P=e(21773),c=e(85893),U=["type","className","isCursorPointer","spin","size"],v;function i(u){return v||(v=(0,O.Z)({scriptUrl:u})),v}function h(u){var M=u.type,n=u.className,C=n===void 0?"":n,m=u.isCursorPointer,o=m===void 0?!1:m,_=u.spin,j=u.size,y=a()(u,U),b=(0,p.getCommonConfig)(),x=b.sparkPrefix,L=b.iconfont,A=(0,P.X)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{}),D.createElement(i(L),r()({type:M,style:r()({fontSize:j},u.style),className:E()(o&&"".concat(x,"-cursor-pointer"),C,"".concat(x,"-icon"),t()({},"".concat(x,"-icon-spin"),_))},y))]})}},33369:function(T,l,e){e.d(l,{Z:function(){return M}});var d=e(97857),t=e.n(d),g=e(13769),r=e.n(g),s=e(93865),a=e(35872),p=e(83062),O=e(93967),f=e.n(O),E=e(67294),D=e(68400),P=e.n(D),c=e(3067),U,v=(0,c.Z)(U||(U=P()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),i=e(85893),h=["mode","arrow","overlayClassName","getPopupContainer","align"],u=(0,E.forwardRef)(function(n,C){var m=v(),o=n.mode,_=o===void 0?"dark":o,j=n.arrow,y=n.overlayClassName,b=n.getPopupContainer,x=n.align,L=r()(n,h),A=(0,s.getCommonConfig)(),W=A.sparkPrefix,B=A.antPrefix;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{}),(0,i.jsx)(p.Z,t()(t()({},L),{},{arrow:j!=null?j:!1,overlayClassName:f()(y,_==="light"&&"".concat(W,"-tooltip-light")),getPopupContainer:b||function(I){return(0,a.Q)(I,".".concat(B,"-app"))},ref:C}))]})}),M=u},35872:function(T,l,e){e.d(l,{Q:function(){return O},t:function(){return p}});var d=e(97857),t=e.n(d),g=e(27856),r=e.n(g),s=r()(window),a={ADD_ATTR:["target"]};function p(f){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s.sanitize(f||"",t()(t()({},a),E))}var O=function(E,D){var P=E.closest(D);return P||document.querySelector(D)}}}]);
