"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5787],{16913:function(W,l,n){n.r(l);var r=n(57027),s=n(56373),u=n(85893);l.default=function(){return(0,u.jsx)(r.Z,{onClick:function(){s.Z.success("task status")},children:"Success"})}},17906:function(W,l,n){n.r(l);var r=n(57027),s=n(56373),u=n(86250),a=n(85893);l.default=function(){return(0,a.jsxs)(u.Z,{align:"center",justify:"center",gap:16,children:[(0,a.jsx)(r.Z,{onClick:function(){s.Z.success("success")},children:"Success"}),(0,a.jsx)(r.Z,{onClick:function(){s.Z.info({content:"info"})},children:"info"}),(0,a.jsx)(r.Z,{onClick:function(){s.Z.warning("warning")},children:"warning"}),(0,a.jsx)(r.Z,{onClick:function(){s.Z.error({content:"error"})},children:"error"}),(0,a.jsx)(r.Z,{onClick:function(){s.Z.loading("loading")},children:"loading"})]})}},48746:function(W,l,n){n.r(l);var r=n(57027),s=n(56373),u=n(86250),a=n(85893);l.default=function(){return(0,a.jsx)(u.Z,{align:"center",justify:"center",gap:20,children:(0,a.jsx)(r.Z,{onClick:function(){s.Z.success({content:(0,a.jsxs)(u.Z,{gap:8,children:[(0,a.jsx)("span",{children:"task status"}),(0,a.jsx)("span",{onClick:function(){return alert("click view")},style:{fontWeight:"bold",cursor:"pointer",color:"var(--sps-color-info)"},children:"view"})]})})},children:"Click"})})}},57027:function(W,l,n){var r=n(97857),s=n.n(r),u=n(52677),a=n.n(u),g=n(13769),t=n.n(g),T=n(40443),x=n(9361),O=n(83622),j=n(55839),C=n(93967),p=n.n(C),P=n(67294),A=n(38654),m=n(33369),c=n(85893),D=["iconSize","loading"],o=(0,P.forwardRef)(function(v,e){var E=x.Z.useToken(),f=v.iconSize,i=v.loading,_=t()(v,D),M=P.useMemo(function(){return _.type==="primaryLess"?"primary":_.type==="textCompact"?"link":_.type},[_.type]),d=(0,P.useMemo)(function(){if(i){if(typeof i=="boolean")return{icon:(0,c.jsx)(T.Z,{spin:!0})};if(a()(i)==="object")return s()({icon:(0,c.jsx)(T.Z,{spin:!0})},i)}return i},[i]),b=P.useMemo(function(){return i&&a()(i)==="object"&&i.icon?i==null?void 0:i.icon:_.iconType?(0,c.jsx)(A.Z,{type:_.iconType,size:f!=null?f:_.size}):_.icon?P.cloneElement(_.icon,{size:f!=null?f:_.size}):null},[_.iconType,_.icon]),U=(0,c.jsx)(O.ZP,s()(s()({},_),{},{loading:d,ref:e,type:M,icon:b,style:s()({fontWeight:500,lineHeight:1},_.style),className:p()(_.className,"spark-button")}));return _.type==="primaryLess"?(0,c.jsx)(j.ZP,{theme:{token:{colorPrimary:E.token.colorText,colorPrimaryHover:E.token.colorTextSecondary,colorPrimaryActive:E.token.colorTextBase}},children:(0,c.jsx)(m.Z,{title:_.tooltipContent,children:U})}):_.type==="textCompact"?(0,c.jsx)(m.Z,{title:_.tooltipContent,children:(0,c.jsx)(O.ZP,s()(s()({},_),{},{ref:e,icon:b,color:"default",variant:"link",style:s()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},_.style),className:p()(_.className,"spark-button")}))}):(0,c.jsx)(m.Z,{title:_.tooltipContent,children:U})});l.Z=o},21773:function(W,l,n){n.d(l,{X:function(){return g}});var r=n(68400),s=n.n(r),u=n(3067),a,g=(0,u.Z)(a||(a=s()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix})},38654:function(W,l,n){n.d(l,{Z:function(){return D}});var r=n(9783),s=n.n(r),u=n(97857),a=n.n(u),g=n(13769),t=n.n(g),T=n(93865),x=n(27356),O=n(93967),j=n.n(O),C=n(67294),p=n(21773),P=n(85893),A=["type","className","isCursorPointer","spin","size"],m;function c(o){return m||(m=(0,x.Z)({scriptUrl:o})),m}function D(o){var v=o.type,e=o.className,E=e===void 0?"":e,f=o.isCursorPointer,i=f===void 0?!1:f,_=o.spin,M=o.size,d=t()(o,A),b=(0,T.getCommonConfig)(),U=b.sparkPrefix,y=b.iconfont,L=(0,p.X)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(L,{}),C.createElement(c(y),a()({type:v,style:a()({fontSize:M},o.style),className:j()(i&&"".concat(U,"-cursor-pointer"),E,"".concat(U,"-icon"),s()({},"".concat(U,"-icon-spin"),_))},d))]})}},56373:function(W,l,n){var r=n(5574),s=n.n(r),u=n(13769),a=n.n(u),g=n(97857),t=n.n(g),T=n(33495),x=n(52565),O=n(55595),j=n(96406),C=n(45360),p=n(85893),P=["content"],A={success:{type:"success",icon:(0,p.jsx)(T.Z,{})},warning:{type:"warning",icon:(0,p.jsx)(x.Z,{})},error:{type:"error",icon:(0,p.jsx)(O.Z,{})},info:{type:"info",icon:(0,p.jsx)(j.Z,{})}},m=function(o,v){var e,E;typeof v=="string"?E={content:v}:E=t()({},v);var f=E,i=f.content,_=a()(f,P);C.ZP.open(t()({type:o,content:i,icon:o==="loading"||(e=A[o])===null||e===void 0?void 0:e.icon},_))},c=function(o){var v=C.ZP.useMessage(o),e=s()(v,2),E=e[0],f=e[1],i=function(d,b){var U,y;typeof b=="string"?y={content:b,type:d}:y=t()(t()({},b),{},{type:d}),E[d](t()(t()({},y),{},{icon:(U=A[d])===null||U===void 0?void 0:U.icon}))},_=t()(t()({},E),{},{success:function(d){return i("success",d)},warning:function(d){return i("warning",d)},error:function(d){return i("error",d)},info:function(d){return i("info",d)},loading:function(d){return i("loading",d)}});return[_,f]};l.Z=t()(t()({},C.ZP),{},{success:function(o){return m("success",o)},warning:function(o){return m("warning",o)},error:function(o){return m("error",o)},info:function(o){return m("info",o)},loading:function(o){return m("loading",o)},useMessage:c})},33369:function(W,l,n){n.d(l,{Z:function(){return v}});var r=n(97857),s=n.n(r),u=n(13769),a=n.n(u),g=n(93865),t=n(35872),T=n(83062),x=n(93967),O=n.n(x),j=n(67294),C=n(68400),p=n.n(C),P=n(3067),A,m=(0,P.Z)(A||(A=p()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),c=n(85893),D=["mode","arrow","overlayClassName","getPopupContainer","align"],o=(0,j.forwardRef)(function(e,E){var f=m(),i=e.mode,_=i===void 0?"dark":i,M=e.arrow,d=e.overlayClassName,b=e.getPopupContainer,U=e.align,y=a()(e,D),L=(0,g.getCommonConfig)(),h=L.sparkPrefix,B=L.antPrefix;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{}),(0,c.jsx)(T.Z,s()(s()({},y),{},{arrow:M!=null?M:!1,overlayClassName:O()(d,_==="light"&&"".concat(h,"-tooltip-light")),getPopupContainer:b||function(I){return(0,t.Q)(I,".".concat(B,"-app"))},ref:E}))]})}),v=o},35872:function(W,l,n){n.d(l,{Q:function(){return x},t:function(){return T}});var r=n(97857),s=n.n(r),u=n(27856),a=n.n(u),g=a()(window),t={ADD_ATTR:["target"]};function T(O){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return g.sanitize(O||"",s()(s()({},t),j))}var x=function(j,C){var p=j.closest(C);return p||document.querySelector(C)}}}]);
