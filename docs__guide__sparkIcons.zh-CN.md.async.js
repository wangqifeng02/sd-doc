"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[3065,5737],{70831:function(k,u,e){e.r(u);var m=e(76311),d=e(93359),M=e(8102),D=e(57415),b=e(83286),r=e(10294),h=e(96057),U=e(68322),C=e(27738),P=e(45769),p=e(53818),o=e(24617),f=e(99317),c=e(99974),n=e(17987),s=e(67294),a=e(54340),_=e(85893);function t(){return(0,_.jsx)(c.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h1",{id:"\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]})}),(0,_.jsx)(c.Dl,{demo:{id:"docs-guide-spark-icons-demo-usage"},previewerProps:{center:!0,title:"\u57FA\u672C\u7528\u6CD5",filename:"docs/guide/icons/usage.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("p",{children:[a.texts[0].value,(0,_.jsx)("a",{href:"https://sparkdesign.agentscope.io/#/resources/icons",children:a.texts[1].value}),a.texts[2].value]})})]})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return c}});var m=e(97857),d=e.n(m),M=e(93865),D=e(97634),b=e(85418),r=e(67294),h=e(68400),U=e.n(h),C=e(3067),P,p=(0,C.Z)(P||(P=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),o=e(85893),f=function(s){var a,_,t=(0,M.getCommonConfig)(),l=t.antPrefix,v=(0,r.useMemo)(function(){var g;if(!((g=s.menu)!==null&&g!==void 0&&g.selectable)||!s.menu){var x;return((x=s.menu)===null||x===void 0?void 0:x.items)||[]}return s.menu.items.map(function(E){var i={},j=E.label;return j&&(i.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(D.Z,{})})]})),d()(d()({},E),i)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(_=s.menu)===null||_===void 0?void 0:_.selectable]),O=p();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{}),(0,o.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:v}),overlayStyle:d()({},s.overlayStyle)}))]})},c=f},56373:function(k,u,e){var m=e(5574),d=e.n(m),M=e(13769),D=e.n(M),b=e(97857),r=e.n(b),h=e(33495),U=e(52565),C=e(55595),P=e(96406),p=e(45360),o=e(85893),f=["content"],c={success:{type:"success",icon:(0,o.jsx)(h.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(U.Z,{})},error:{type:"error",icon:(0,o.jsx)(C.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},n=function(_,t){var l,v;typeof t=="string"?v={content:t}:v=r()({},t);var O=v,g=O.content,x=D()(O,f);p.ZP.open(r()({type:_,content:g,icon:_==="loading"||(l=c[_])===null||l===void 0?void 0:l.icon},x))},s=function(_){var t=p.ZP.useMessage(_),l=d()(t,2),v=l[0],O=l[1],g=function(i,j){var I,A;typeof j=="string"?A={content:j,type:i}:A=r()(r()({},j),{},{type:i}),v[i](r()(r()({},A),{},{icon:(I=c[i])===null||I===void 0?void 0:I.icon}))},x=r()(r()({},v),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[x,O]};u.Z=r()(r()({},p.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:s})},6881:function(k,u,e){e.d(u,{DI:function(){return h},G6:function(){return o},JG:function(){return C},kK:function(){return p},qp:function(){return c},rb:function(){return P}});var m=e(97857),d=e.n(m),M=e(13769),D=e.n(M),b=e(67294),r=["maxWidth","maxHeight"];function h(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var C=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=s,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},P=function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=a.maxWidth,t=a.maxHeight,l=D()(a,r);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},l)};function p(n){return b.isValidElement(n)}function o(n){var s=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var f=function(s){return s>=10?s:"0".concat(s)},c=function(s){if(s<60){var a=Math.ceil(s);return"0:".concat(f(a))}var _=Math.floor(s/60),t=Math.ceil(s%60);return"".concat(f(_),":").concat(f(t))}},54340:function(k,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"\u8BBF\u95EE ",paraId:0},{value:"Icon Library",paraId:0},{value:" \u67E5\u770B\u5168\u90E8 Icon",paraId:0}]}}]);
