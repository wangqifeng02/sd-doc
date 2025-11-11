"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8568],{40212:function(M,_,n){n.r(_);var g=n(67294),a=n(28299),d=n(57027),r=n(85893),l=function(){var c=[{key:"1",label:"Menu Item"},{key:"2",label:"Menu Item"},{key:"3",label:"Menu Item"}];return(0,r.jsx)(a.Z,{menu:{items:c},children:(0,r.jsx)(d.Z,{children:"Dropdown Trigger"})})};_.default=l},71158:function(M,_,n){n.r(_);var g=n(67294),a=n(28299),d=n(57027),r=n(61574),l=n(85893),s=function(){var p=[{key:"1",label:"Menu Item",icon:(0,l.jsx)(r.Z,{style:{fontSize:20}})},{key:"2",label:"Menu Item",icon:(0,l.jsx)(r.Z,{style:{fontSize:20}})},{key:"3",label:"Menu Item",icon:(0,l.jsx)(r.Z,{style:{fontSize:20}})}];return(0,l.jsx)(a.Z,{menu:{items:p},children:(0,l.jsx)(d.Z,{children:"Dropdown Trigger"})})};_.default=s},63625:function(M,_,n){n.r(_);var g=n(67294),a=n(28299),d=n(57027),r=n(61574),l=n(50287),s=n(85893),c=function(){var P=[{key:"1",label:"Menu Item",icon:(0,s.jsx)(r.Z,{style:{fontSize:20}})},{key:"2",label:"Menu Item",icon:(0,s.jsx)(r.Z,{style:{fontSize:20}})},{key:"3",label:"Menu Item",icon:(0,s.jsx)(l.Z,{style:{fontSize:20}}),danger:!0}];return(0,s.jsx)(a.Z,{menu:{items:P},children:(0,s.jsx)(d.Z,{children:"Dropdown Trigger"})})};_.default=c},19233:function(M,_,n){n.r(_);var g=n(67294),a=n(28299),d=n(57027),r=n(85893),l=function(){var c=[{key:"1",label:"Menu Item"},{key:"2",label:"Menu Item"},{key:"3",label:"Menu Item"}];return(0,r.jsx)(a.Z,{menu:{items:c,selectable:!0,multiple:!0},children:(0,r.jsx)(d.Z,{children:"Dropdown Trigger"})})};_.default=l},91214:function(M,_,n){n.r(_);var g=n(67294),a=n(28299),d=n(57027),r=n(85893);_.default=function(){var l=[{key:"1",label:"Menu Item",children:[{key:"1-1",label:"Sub Menu Item"},{key:"1-2",label:"Sub Menu Item"}]},{key:"2",label:"Menu Item"},{key:"3",label:"Menu Item"}];return(0,r.jsx)(a.Z,{menu:{items:l},trigger:["click"],children:(0,r.jsx)(d.Z,{children:"Dropdown Trigger"})})}},57027:function(M,_,n){var g=n(97857),a=n.n(g),d=n(52677),r=n.n(d),l=n(13769),s=n.n(l),c=n(40443),p=n(9361),P=n(83622),D=n(55839),O=n(93967),m=n.n(O),E=n(67294),b=n(38654),e=n(33369),i=n(85893),j=["iconSize","loading"],f=(0,E.forwardRef)(function(y,t){var I=p.Z.useToken(),v=y.iconSize,u=y.loading,o=s()(y,j),x=E.useMemo(function(){return o.type==="primaryLess"?"primary":o.type==="textCompact"?"link":o.type},[o.type]),T=(0,E.useMemo)(function(){if(u){if(typeof u=="boolean")return{icon:(0,i.jsx)(c.Z,{spin:!0})};if(r()(u)==="object")return a()({icon:(0,i.jsx)(c.Z,{spin:!0})},u)}return u},[u]),C=E.useMemo(function(){return u&&r()(u)==="object"&&u.icon?u==null?void 0:u.icon:o.iconType?(0,i.jsx)(b.Z,{type:o.iconType,size:v!=null?v:o.size}):o.icon?E.cloneElement(o.icon,{size:v!=null?v:o.size}):null},[o.iconType,o.icon]),U=(0,i.jsx)(P.ZP,a()(a()({},o),{},{loading:T,ref:t,type:x,icon:C,style:a()({fontWeight:500,lineHeight:1},o.style),className:m()(o.className,"spark-button")}));return o.type==="primaryLess"?(0,i.jsx)(D.ZP,{theme:{token:{colorPrimary:I.token.colorText,colorPrimaryHover:I.token.colorTextSecondary,colorPrimaryActive:I.token.colorTextBase}},children:(0,i.jsx)(e.Z,{title:o.tooltipContent,children:U})}):o.type==="textCompact"?(0,i.jsx)(e.Z,{title:o.tooltipContent,children:(0,i.jsx)(P.ZP,a()(a()({},o),{},{ref:t,icon:C,color:"default",variant:"link",style:a()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},o.style),className:m()(o.className,"spark-button")}))}):(0,i.jsx)(e.Z,{title:o.tooltipContent,children:U})});_.Z=f},28299:function(M,_,n){n.d(_,{Z:function(){return b}});var g=n(97857),a=n.n(g),d=n(93865),r=n(97634),l=n(85418),s=n(67294),c=n(68400),p=n.n(c),P=n(3067),D,O=(0,P.Z)(D||(D=p()([`
.`,"-dropdown .","-dropdown-menu .",`-dropdown-menu-item-icon {
  font-size: var(--`,`-font-size-lg);
}

.`,`-dropdown-check-wrapper {
  display: flex;
  align-items: center;
  margin: 0;
  padding-inline-end: calc(var(--`,"-control-padding-horizontal) + var(--",`-font-size-sm));
}

.`,`-dropdown-check-icon {
  position: absolute;
  opacity: 0;
  font-size: 20px;
  inset-inline-end: var(--`,`-padding-xs);
}

.`,"-dropdown .","-dropdown-menu .","-dropdown-menu-item.",`-dropdown-menu-item-selected {
  background-color: transparent;
  
  .`,`-dropdown-check-icon {
    opacity: 1;
  }
}

.`,`-dropdown-menu-submenu-popup {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius-lg);
  overflow-y: auto;
}

/*
.`,"-dropdown-menu .",`-dropdown-menu-submenu {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
}
*/
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),m=n(85893),E=function(i){var j,f,y=(0,d.getCommonConfig)(),t=y.antPrefix,I=(0,s.useMemo)(function(){var u;if(!((u=i.menu)!==null&&u!==void 0&&u.selectable)||!i.menu){var o;return((o=i.menu)===null||o===void 0?void 0:o.items)||[]}return i.menu.items.map(function(x){var T={},C=x.label;return C&&(T.label=(0,m.jsxs)("div",{className:"".concat(t,"-dropdown-check-wrapper"),children:[C,(0,m.jsx)("span",{className:"".concat(t,"-dropdown-check-icon"),children:(0,m.jsx)(r.Z,{})})]})),a()(a()({},x),T)})},[(j=i.menu)===null||j===void 0?void 0:j.items,(f=i.menu)===null||f===void 0?void 0:f.selectable]),v=O();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{}),(0,m.jsx)(l.Z,a()(a()({},i),{},{menu:a()(a()({},i.menu),{},{items:I}),overlayStyle:a()({},i.overlayStyle)}))]})},b=E},21773:function(M,_,n){n.d(_,{X:function(){return l}});var g=n(68400),a=n.n(g),d=n(3067),r,l=(0,d.Z)(r||(r=a()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix})},38654:function(M,_,n){n.d(_,{Z:function(){return j}});var g=n(9783),a=n.n(g),d=n(97857),r=n.n(d),l=n(13769),s=n.n(l),c=n(93865),p=n(27356),P=n(93967),D=n.n(P),O=n(67294),m=n(21773),E=n(85893),b=["type","className","isCursorPointer","spin","size"],e;function i(f){return e||(e=(0,p.Z)({scriptUrl:f})),e}function j(f){var y=f.type,t=f.className,I=t===void 0?"":t,v=f.isCursorPointer,u=v===void 0?!1:v,o=f.spin,x=f.size,T=s()(f,b),C=(0,c.getCommonConfig)(),U=C.sparkPrefix,h=C.iconfont,L=(0,m.X)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(L,{}),O.createElement(i(h),r()({type:y,style:r()({fontSize:x},f.style),className:D()(u&&"".concat(U,"-cursor-pointer"),I,"".concat(U,"-icon"),a()({},"".concat(U,"-icon-spin"),o))},T))]})}},33369:function(M,_,n){n.d(_,{Z:function(){return y}});var g=n(97857),a=n.n(g),d=n(13769),r=n.n(d),l=n(93865),s=n(35872),c=n(83062),p=n(93967),P=n.n(p),D=n(67294),O=n(68400),m=n.n(O),E=n(3067),b,e=(0,E.Z)(b||(b=m()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),i=n(85893),j=["mode","arrow","overlayClassName","getPopupContainer","align"],f=(0,D.forwardRef)(function(t,I){var v=e(),u=t.mode,o=u===void 0?"dark":u,x=t.arrow,T=t.overlayClassName,C=t.getPopupContainer,U=t.align,h=r()(t,j),L=(0,l.getCommonConfig)(),W=L.sparkPrefix,A=L.antPrefix;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{}),(0,i.jsx)(c.Z,a()(a()({},h),{},{arrow:x!=null?x:!1,overlayClassName:P()(T,o==="light"&&"".concat(W,"-tooltip-light")),getPopupContainer:C||function(B){return(0,s.Q)(B,".".concat(A,"-app"))},ref:I}))]})}),y=f},35872:function(M,_,n){n.d(_,{Q:function(){return p},t:function(){return c}});var g=n(97857),a=n.n(g),d=n(27856),r=n.n(d),l=r()(window),s={ADD_ATTR:["target"]};function c(P){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return l.sanitize(P||"",a()(a()({},s),D))}var p=function(D,O){var m=D.closest(O);return m||document.querySelector(O)}}}]);
