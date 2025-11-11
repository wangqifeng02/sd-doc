"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[183,5737],{7683:function(k,u,e){e.r(u);var p=e(76311),d=e(93359),M=e(8102),D=e(57415),b=e(83286),o=e(10294),j=e(96057),U=e(68322),x=e(27738),f=e(45769),v=e(53818),r=e(24617),m=e(99317),g=e(99974),n=e(17987),s=e(67294),a=e(21202),_=e(85893);function t(){return(0,_.jsx)(g.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{title:"Anchor",desc:"Used to jump to a specified position on the page."}),(0,_.jsx)(g.Dl,{demo:{id:"anchor-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Anchor/demo/demo1.tsx"}}),(0,_.jsx)(m.Z,{children:a.texts[0].value}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h4",{id:"anchor-examples",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#anchor-examples",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Anchor Examples"]}),(0,_.jsx)("p",{children:a.texts[1].value})]}),(0,_.jsx)(g.Dl,{demo:{id:"anchor-demo-demo2"},previewerProps:{center:!0,title:"Horizontal Anchor",filename:"src/components/commonComponents/Anchor/demo/demo2.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h4",{id:"api",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,_.jsx)(x.Z,{url:"https://ant.design/components/anchor/#api"})]})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return g}});var p=e(97857),d=e.n(p),M=e(93865),D=e(97634),b=e(85418),o=e(67294),j=e(68400),U=e.n(j),x=e(3067),f,v=(0,x.Z)(f||(f=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),r=e(85893),m=function(s){var a,_,t=(0,M.getCommonConfig)(),l=t.antPrefix,E=(0,o.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var h;return((h=s.menu)===null||h===void 0?void 0:h.items)||[]}return s.menu.items.map(function(P){var i={},O=P.label;return O&&(i.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(D.Z,{})})]})),d()(d()({},P),i)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(_=s.menu)===null||_===void 0?void 0:_.selectable]),C=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:E}),overlayStyle:d()({},s.overlayStyle)}))]})},g=m},56373:function(k,u,e){var p=e(5574),d=e.n(p),M=e(13769),D=e.n(M),b=e(97857),o=e.n(b),j=e(33495),U=e(52565),x=e(55595),f=e(96406),v=e(45360),r=e(85893),m=["content"],g={success:{type:"success",icon:(0,r.jsx)(j.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(U.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(f.Z,{})}},n=function(_,t){var l,E;typeof t=="string"?E={content:t}:E=o()({},t);var C=E,c=C.content,h=D()(C,m);v.ZP.open(o()({type:_,content:c,icon:_==="loading"||(l=g[_])===null||l===void 0?void 0:l.icon},h))},s=function(_){var t=v.ZP.useMessage(_),l=d()(t,2),E=l[0],C=l[1],c=function(i,O){var A,I;typeof O=="string"?I={content:O,type:i}:I=o()(o()({},O),{},{type:i}),E[i](o()(o()({},I),{},{icon:(A=g[i])===null||A===void 0?void 0:A.icon}))},h=o()(o()({},E),{},{success:function(i){return c("success",i)},warning:function(i){return c("warning",i)},error:function(i){return c("error",i)},info:function(i){return c("info",i)},loading:function(i){return c("loading",i)}});return[h,C]};u.Z=o()(o()({},v.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:s})},6881:function(k,u,e){e.d(u,{DI:function(){return j},G6:function(){return r},JG:function(){return x},kK:function(){return v},qp:function(){return g},rb:function(){return f}});var p=e(97857),d=e.n(p),M=e(13769),D=e.n(M),b=e(67294),o=["maxWidth","maxHeight"];function j(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var x=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=s,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},f=function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=a.maxWidth,t=a.maxHeight,l=D()(a,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},l)};function v(n){return b.isValidElement(n)}function r(n){var s=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var m=function(s){return s>=10?s:"0".concat(s)},g=function(s){if(s<60){var a=Math.ceil(s);return"0:".concat(m(a))}var _=Math.floor(s/60),t=Math.ceil(s%60);return"".concat(m(_),":").concat(m(t))}},21202:function(k,u,e){e.r(u),e.d(u,{texts:function(){return p}});const p=[{value:"import { Anchor } from '@agentscope-ai/design'",paraId:0},{value:"Here are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
