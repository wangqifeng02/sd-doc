"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[6379,5737],{86823:function(U,u,e){e.r(u);var p=e(76311),d=e(93359),D=e(8102),b=e(57415),h=e(83286),o=e(10294),C=e(96057),k=e(68322),x=e(27738),f=e(45769),v=e(53818),t=e(24617),c=e(99317),m=e(99974),n=e(17987),s=e(67294),a=e(54703),_=e(85893);function r(){return(0,_.jsx)(m.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{title:"Skeleton",desc:"Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet."}),(0,_.jsx)(m.Dl,{demo:{id:"src-components-common-components-skeleton-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Skeleton/demo/demo1.tsx"}}),(0,_.jsx)(c.Z,{children:a.texts[0].value}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h4",{id:"api",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,_.jsx)(x.Z,{url:"https://ant.design/components/skeleton/#api"})]})})})}u.default=r},28299:function(U,u,e){e.d(u,{Z:function(){return m}});var p=e(97857),d=e.n(p),D=e(93865),b=e(97634),h=e(85418),o=e(67294),C=e(68400),k=e.n(C),x=e(3067),f,v=(0,x.Z)(f||(f=k()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),t=e(85893),c=function(s){var a,_,r=(0,D.getCommonConfig)(),l=r.antPrefix,P=(0,o.useMemo)(function(){var g;if(!((g=s.menu)!==null&&g!==void 0&&g.selectable)||!s.menu){var M;return((M=s.menu)===null||M===void 0?void 0:M.items)||[]}return s.menu.items.map(function(E){var i={},j=E.label;return j&&(i.label=(0,t.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,t.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,t.jsx)(b.Z,{})})]})),d()(d()({},E),i)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(_=s.menu)===null||_===void 0?void 0:_.selectable]),O=v();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),(0,t.jsx)(h.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:P}),overlayStyle:d()({},s.overlayStyle)}))]})},m=c},56373:function(U,u,e){var p=e(5574),d=e.n(p),D=e(13769),b=e.n(D),h=e(97857),o=e.n(h),C=e(33495),k=e(52565),x=e(55595),f=e(96406),v=e(45360),t=e(85893),c=["content"],m={success:{type:"success",icon:(0,t.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(k.Z,{})},error:{type:"error",icon:(0,t.jsx)(x.Z,{})},info:{type:"info",icon:(0,t.jsx)(f.Z,{})}},n=function(_,r){var l,P;typeof r=="string"?P={content:r}:P=o()({},r);var O=P,g=O.content,M=b()(O,c);v.ZP.open(o()({type:_,content:g,icon:_==="loading"||(l=m[_])===null||l===void 0?void 0:l.icon},M))},s=function(_){var r=v.ZP.useMessage(_),l=d()(r,2),P=l[0],O=l[1],g=function(i,j){var A,I;typeof j=="string"?I={content:j,type:i}:I=o()(o()({},j),{},{type:i}),P[i](o()(o()({},I),{},{icon:(A=m[i])===null||A===void 0?void 0:A.icon}))},M=o()(o()({},P),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[M,O]};u.Z=o()(o()({},v.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:s})},6881:function(U,u,e){e.d(u,{DI:function(){return C},G6:function(){return t},JG:function(){return x},kK:function(){return v},qp:function(){return m},rb:function(){return f}});var p=e(97857),d=e.n(p),D=e(13769),b=e.n(D),h=e(67294),o=["maxWidth","maxHeight"];function C(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function k(){return $i18n.language==="zh-CN"}var x=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=s,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},f=function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=a.maxWidth,r=a.maxHeight,l=b()(a,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},l)};function v(n){return h.isValidElement(n)}function t(n){var s=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var c=function(s){return s>=10?s:"0".concat(s)},m=function(s){if(s<60){var a=Math.ceil(s);return"0:".concat(c(a))}var _=Math.floor(s/60),r=Math.ceil(s%60);return"".concat(c(_),":").concat(c(r))}},54703:function(U,u,e){e.r(u),e.d(u,{texts:function(){return p}});const p=[{value:"import { Skeleton } from '@agentscope-ai/design'",paraId:0}]}}]);
