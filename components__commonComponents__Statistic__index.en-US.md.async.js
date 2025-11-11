"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[828,5737],{29509:function(k,u,e){e.r(u);var p=e(76311),d=e(93359),h=e(8102),D=e(57415),b=e(83286),t=e(10294),C=e(96057),U=e(68322),x=e(27738),f=e(45769),v=e(53818),o=e(24617),m=e(99317),g=e(99974),n=e(17987),s=e(67294),a=e(80446),_=e(85893);function r(){return(0,_.jsx)(g.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{title:"Statistic",desc:"Display statistic number"}),(0,_.jsx)(g.Dl,{demo:{id:"statistic-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Statistic/demo/demo1.tsx"}}),(0,_.jsx)(m.Z,{children:a.texts[0].value}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h4",{id:"statistic-example",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#statistic-example",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Statistic Example"]}),(0,_.jsx)("p",{children:a.texts[1].value})]}),(0,_.jsx)(g.Dl,{demo:{id:"statistic-demo-demo2"},previewerProps:{center:!0,title:"Add elements via prefix and suffix",filename:"src/components/commonComponents/Statistic/demo/demo2.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h4",{id:"api",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,_.jsx)(x.Z,{url:"https://ant.design/components/statistic/#api"})]})})})}u.default=r},28299:function(k,u,e){e.d(u,{Z:function(){return g}});var p=e(97857),d=e.n(p),h=e(93865),D=e(97634),b=e(85418),t=e(67294),C=e(68400),U=e.n(C),x=e(3067),f,v=(0,x.Z)(f||(f=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),o=e(85893),m=function(s){var a,_,r=(0,h.getCommonConfig)(),l=r.antPrefix,E=(0,t.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var M;return((M=s.menu)===null||M===void 0?void 0:M.items)||[]}return s.menu.items.map(function(P){var i={},O=P.label;return O&&(i.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(D.Z,{})})]})),d()(d()({},P),i)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(_=s.menu)===null||_===void 0?void 0:_.selectable]),j=v();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:E}),overlayStyle:d()({},s.overlayStyle)}))]})},g=m},56373:function(k,u,e){var p=e(5574),d=e.n(p),h=e(13769),D=e.n(h),b=e(97857),t=e.n(b),C=e(33495),U=e(52565),x=e(55595),f=e(96406),v=e(45360),o=e(85893),m=["content"],g={success:{type:"success",icon:(0,o.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(U.Z,{})},error:{type:"error",icon:(0,o.jsx)(x.Z,{})},info:{type:"info",icon:(0,o.jsx)(f.Z,{})}},n=function(_,r){var l,E;typeof r=="string"?E={content:r}:E=t()({},r);var j=E,c=j.content,M=D()(j,m);v.ZP.open(t()({type:_,content:c,icon:_==="loading"||(l=g[_])===null||l===void 0?void 0:l.icon},M))},s=function(_){var r=v.ZP.useMessage(_),l=d()(r,2),E=l[0],j=l[1],c=function(i,O){var A,I;typeof O=="string"?I={content:O,type:i}:I=t()(t()({},O),{},{type:i}),E[i](t()(t()({},I),{},{icon:(A=g[i])===null||A===void 0?void 0:A.icon}))},M=t()(t()({},E),{},{success:function(i){return c("success",i)},warning:function(i){return c("warning",i)},error:function(i){return c("error",i)},info:function(i){return c("info",i)},loading:function(i){return c("loading",i)}});return[M,j]};u.Z=t()(t()({},v.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:s})},6881:function(k,u,e){e.d(u,{DI:function(){return C},G6:function(){return o},JG:function(){return x},kK:function(){return v},qp:function(){return g},rb:function(){return f}});var p=e(97857),d=e.n(p),h=e(13769),D=e.n(h),b=e(67294),t=["maxWidth","maxHeight"];function C(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var x=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=s,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},f=function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=a.maxWidth,r=a.maxHeight,l=D()(a,t);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},l)};function v(n){return b.isValidElement(n)}function o(n){var s=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var m=function(s){return s>=10?s:"0".concat(s)},g=function(s){if(s<60){var a=Math.ceil(s);return"0:".concat(m(a))}var _=Math.floor(s/60),r=Math.ceil(s%60);return"".concat(m(_),":").concat(m(r))}},80446:function(k,u,e){e.r(u),e.d(u,{texts:function(){return p}});const p=[{value:"import { Statistic } from '@agentscope-ai/design'",paraId:0},{value:"The following are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
