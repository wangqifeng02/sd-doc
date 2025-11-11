"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[425],{39738:function(x,d,e){e.r(d);var u=e(14392),t=e(57027),g=e(86250),l=e(67294),i=e(85893),o=function(){var p=(0,i.jsx)(g.Z,{justify:"center",align:"center",style:{width:200,height:120,backgroundColor:"rgba(205, 208, 220, 0.15)"},children:(0,i.jsx)("p",{children:"Content"})});return(0,i.jsx)(u.Z,{content:p,title:"Title",children:(0,i.jsx)(t.Z,{children:"Hover me"})})};d.default=o},57027:function(x,d,e){var u=e(97857),t=e.n(u),g=e(52677),l=e.n(g),i=e(13769),o=e.n(i),f=e(40443),p=e(9361),a=e(83622),E=e(55839),D=e(93967),P=e.n(D),c=e(67294),M=e(38654),v=e(33369),s=e(85893),y=["iconSize","loading"],m=(0,c.forwardRef)(function(O,n){var j=p.Z.useToken(),C=O.iconSize,r=O.loading,_=o()(O,y),b=c.useMemo(function(){return _.type==="primaryLess"?"primary":_.type==="textCompact"?"link":_.type},[_.type]),L=(0,c.useMemo)(function(){if(r){if(typeof r=="boolean")return{icon:(0,s.jsx)(f.Z,{spin:!0})};if(l()(r)==="object")return t()({icon:(0,s.jsx)(f.Z,{spin:!0})},r)}return r},[r]),U=c.useMemo(function(){return r&&l()(r)==="object"&&r.icon?r==null?void 0:r.icon:_.iconType?(0,s.jsx)(M.Z,{type:_.iconType,size:C!=null?C:_.size}):_.icon?c.cloneElement(_.icon,{size:C!=null?C:_.size}):null},[_.iconType,_.icon]),T=(0,s.jsx)(a.ZP,t()(t()({},_),{},{loading:L,ref:n,type:b,icon:U,style:t()({fontWeight:500,lineHeight:1},_.style),className:P()(_.className,"spark-button")}));return _.type==="primaryLess"?(0,s.jsx)(E.ZP,{theme:{token:{colorPrimary:j.token.colorText,colorPrimaryHover:j.token.colorTextSecondary,colorPrimaryActive:j.token.colorTextBase}},children:(0,s.jsx)(v.Z,{title:_.tooltipContent,children:T})}):_.type==="textCompact"?(0,s.jsx)(v.Z,{title:_.tooltipContent,children:(0,s.jsx)(a.ZP,t()(t()({},_),{},{ref:n,icon:U,color:"default",variant:"link",style:t()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},_.style),className:P()(_.className,"spark-button")}))}):(0,s.jsx)(v.Z,{title:_.tooltipContent,children:T})});d.Z=m},21773:function(x,d,e){e.d(d,{X:function(){return i}});var u=e(68400),t=e.n(u),g=e(3067),l,i=(0,g.Z)(l||(l=t()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix})},38654:function(x,d,e){e.d(d,{Z:function(){return y}});var u=e(9783),t=e.n(u),g=e(97857),l=e.n(g),i=e(13769),o=e.n(i),f=e(93865),p=e(27356),a=e(93967),E=e.n(a),D=e(67294),P=e(21773),c=e(85893),M=["type","className","isCursorPointer","spin","size"],v;function s(m){return v||(v=(0,p.Z)({scriptUrl:m})),v}function y(m){var O=m.type,n=m.className,j=n===void 0?"":n,C=m.isCursorPointer,r=C===void 0?!1:C,_=m.spin,b=m.size,L=o()(m,M),U=(0,f.getCommonConfig)(),T=U.sparkPrefix,A=U.iconfont,W=(0,P.X)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(W,{}),D.createElement(s(A),l()({type:O,style:l()({fontSize:b},m.style),className:E()(r&&"".concat(T,"-cursor-pointer"),j,"".concat(T,"-icon"),t()({},"".concat(T,"-icon-spin"),_))},L))]})}},14392:function(x,d,e){var u=e(97857),t=e.n(u),g=e(93865),l=e(35872),i=e(55241),o=e(67294),f=e(85893),p=o.forwardRef(function(a,E){var D=a.content===""||a.content===void 0||a.content===null,P=a.title===""||a.title===void 0||a.title===null,c=a.open!==void 0&&a.open!==null?a.open:D&&P?!1:void 0,M=(0,g.getCommonConfig)(),v=M.antPrefix;return(0,f.jsx)(i.Z,t()(t()({},a),{},{arrow:a.arrow||!1,open:c,ref:E,getPopupContainer:a.getPopupContainer||function(s){return(0,l.Q)(s,".".concat(v,"-app"))}}))});d.Z=p},33369:function(x,d,e){e.d(d,{Z:function(){return O}});var u=e(97857),t=e.n(u),g=e(13769),l=e.n(g),i=e(93865),o=e(35872),f=e(83062),p=e(93967),a=e.n(p),E=e(67294),D=e(68400),P=e.n(D),c=e(3067),M,v=(0,c.Z)(M||(M=P()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),s=e(85893),y=["mode","arrow","overlayClassName","getPopupContainer","align"],m=(0,E.forwardRef)(function(n,j){var C=v(),r=n.mode,_=r===void 0?"dark":r,b=n.arrow,L=n.overlayClassName,U=n.getPopupContainer,T=n.align,A=l()(n,y),W=(0,i.getCommonConfig)(),h=W.sparkPrefix,B=W.antPrefix;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C,{}),(0,s.jsx)(f.Z,t()(t()({},A),{},{arrow:b!=null?b:!1,overlayClassName:a()(L,_==="light"&&"".concat(h,"-tooltip-light")),getPopupContainer:U||function(I){return(0,o.Q)(I,".".concat(B,"-app"))},ref:j}))]})}),O=m},35872:function(x,d,e){e.d(d,{Q:function(){return p},t:function(){return f}});var u=e(97857),t=e.n(u),g=e(27856),l=e.n(g),i=l()(window),o={ADD_ATTR:["target"]};function f(a){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i.sanitize(a||"",t()(t()({},o),E))}var p=function(E,D){var P=E.closest(D);return P||document.querySelector(D)}}}]);
