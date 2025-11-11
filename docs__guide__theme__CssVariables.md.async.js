"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[2905,5737],{14110:function(k,u,e){e.r(u);var c=e(76311),d=e(93359),C=e(8102),M=e(57415),D=e(83286),r=e(10294),b=e(96057),U=e(68322),h=e(27738),P=e(45769),m=e(53818),t=e(24617),p=e(99317),f=e(99974),n=e(17987),a=e(67294),s=e(65762),_=e(85893);function o(){return(0,_.jsx)(f.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u9ED8\u8BA4\u767E\u70BC\u4E3B\u9898\u98CE\u683C\u53D8\u91CF"]}),(0,_.jsx)("p",{children:s.texts[0].value}),(0,_.jsx)(r.Z,{lang:"ts",children:s.texts[1].value})]})})})})}u.default=o},28299:function(k,u,e){e.d(u,{Z:function(){return f}});var c=e(97857),d=e.n(c),C=e(93865),M=e(97634),D=e(85418),r=e(67294),b=e(68400),U=e.n(b),h=e(3067),P,m=(0,h.Z)(P||(P=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),t=e(85893),p=function(a){var s,_,o=(0,C.getCommonConfig)(),l=o.antPrefix,v=(0,r.useMemo)(function(){var g;if(!((g=a.menu)!==null&&g!==void 0&&g.selectable)||!a.menu){var x;return((x=a.menu)===null||x===void 0?void 0:x.items)||[]}return a.menu.items.map(function(E){var i={},j=E.label;return j&&(i.label=(0,t.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,t.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,t.jsx)(M.Z,{})})]})),d()(d()({},E),i)})},[(s=a.menu)===null||s===void 0?void 0:s.items,(_=a.menu)===null||_===void 0?void 0:_.selectable]),O=m();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{}),(0,t.jsx)(D.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:v}),overlayStyle:d()({},a.overlayStyle)}))]})},f=p},56373:function(k,u,e){var c=e(5574),d=e.n(c),C=e(13769),M=e.n(C),D=e(97857),r=e.n(D),b=e(33495),U=e(52565),h=e(55595),P=e(96406),m=e(45360),t=e(85893),p=["content"],f={success:{type:"success",icon:(0,t.jsx)(b.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(U.Z,{})},error:{type:"error",icon:(0,t.jsx)(h.Z,{})},info:{type:"info",icon:(0,t.jsx)(P.Z,{})}},n=function(_,o){var l,v;typeof o=="string"?v={content:o}:v=r()({},o);var O=v,g=O.content,x=M()(O,p);m.ZP.open(r()({type:_,content:g,icon:_==="loading"||(l=f[_])===null||l===void 0?void 0:l.icon},x))},a=function(_){var o=m.ZP.useMessage(_),l=d()(o,2),v=l[0],O=l[1],g=function(i,j){var A,I;typeof j=="string"?I={content:j,type:i}:I=r()(r()({},j),{},{type:i}),v[i](r()(r()({},I),{},{icon:(A=f[i])===null||A===void 0?void 0:A.icon}))},x=r()(r()({},v),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[x,O]};u.Z=r()(r()({},m.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:a})},6881:function(k,u,e){e.d(u,{DI:function(){return b},G6:function(){return t},JG:function(){return h},kK:function(){return m},qp:function(){return f},rb:function(){return P}});var c=e(97857),d=e.n(c),C=e(13769),M=e.n(C),D=e(67294),r=["maxWidth","maxHeight"];function b(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var h=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=a,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},P=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=s.maxWidth,o=s.maxHeight,l=M()(s,r);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:o||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},l)};function m(n){return D.isValidElement(n)}function t(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var p=function(a){return a>=10?a:"0".concat(a)},f=function(a){if(a<60){var s=Math.ceil(a);return"0:".concat(p(s))}var _=Math.floor(a/60),o=Math.ceil(a%60);return"".concat(p(_),":").concat(p(o))}},65762:function(k,u,e){e.r(u),e.d(u,{texts:function(){return c}});const c=[{value:"\u5F15\u5165 BLConfigProvider \u540E\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u518C\u5982\u4E0B css \u53D8\u91CF, \u5176\u4E2D\u6570\u5B57\u7C7B\u578B\u53D8\u91CF\u4F1A\u81EA\u52A8\u589E\u52A0 px \u5355\u4F4D\uFF1A",paraId:0,tocIndex:0},{value:`Code snippet path not found: ../../../src/antd/bailianCssVariables.ts
`,paraId:1,tocIndex:0}]}}]);
