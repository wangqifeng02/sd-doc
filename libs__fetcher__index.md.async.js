"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[2370,5737],{8288:function(k,c,e){e.r(c);var x=e(76311),t=e(93359),h=e(8102),M=e(57415),b=e(83286),r=e(10294),D=e(96057),U=e(68322),C=e(27738),E=e(45769),m=e(53818),o=e(24617),f=e(99317),g=e(99974),n=e(17987),s=e(67294),_=e(85893);function a(){return(0,_.jsx)(g.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"fetcher-\u8BF7\u6C42",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#fetcher-\u8BF7\u6C42",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"fetcher \u8BF7\u6C42"]}),(0,_.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,_.jsx)(g.Dl,{demo:{id:"src-libs-fetcher-demo-demo"},previewerProps:{filename:"src/libs/fetcher/demo/demo.tsx"}})]})})})}c.default=a},28299:function(k,c,e){e.d(c,{Z:function(){return g}});var x=e(97857),t=e.n(x),h=e(93865),M=e(97634),b=e(85418),r=e(67294),D=e(68400),U=e.n(D),C=e(3067),E,m=(0,C.Z)(E||(E=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),o=e(85893),f=function(s){var _,a,d=(0,h.getCommonConfig)(),u=d.antPrefix,p=(0,r.useMemo)(function(){var l;if(!((l=s.menu)!==null&&l!==void 0&&l.selectable)||!s.menu){var P;return((P=s.menu)===null||P===void 0?void 0:P.items)||[]}return s.menu.items.map(function(v){var i={},j=v.label;return j&&(i.label=(0,o.jsxs)("div",{className:"".concat(u,"-dropdown-check-wrapper"),children:[j,(0,o.jsx)("span",{className:"".concat(u,"-dropdown-check-icon"),children:(0,o.jsx)(M.Z,{})})]})),t()(t()({},v),i)})},[(_=s.menu)===null||_===void 0?void 0:_.items,(a=s.menu)===null||a===void 0?void 0:a.selectable]),O=m();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{}),(0,o.jsx)(b.Z,t()(t()({},s),{},{menu:t()(t()({},s.menu),{},{items:p}),overlayStyle:t()({},s.overlayStyle)}))]})},g=f},56373:function(k,c,e){var x=e(5574),t=e.n(x),h=e(13769),M=e.n(h),b=e(97857),r=e.n(b),D=e(33495),U=e(52565),C=e(55595),E=e(96406),m=e(45360),o=e(85893),f=["content"],g={success:{type:"success",icon:(0,o.jsx)(D.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(U.Z,{})},error:{type:"error",icon:(0,o.jsx)(C.Z,{})},info:{type:"info",icon:(0,o.jsx)(E.Z,{})}},n=function(a,d){var u,p;typeof d=="string"?p={content:d}:p=r()({},d);var O=p,l=O.content,P=M()(O,f);m.ZP.open(r()({type:a,content:l,icon:a==="loading"||(u=g[a])===null||u===void 0?void 0:u.icon},P))},s=function(a){var d=m.ZP.useMessage(a),u=t()(d,2),p=u[0],O=u[1],l=function(i,j){var A,T;typeof j=="string"?T={content:j,type:i}:T=r()(r()({},j),{},{type:i}),p[i](r()(r()({},T),{},{icon:(A=g[i])===null||A===void 0?void 0:A.icon}))},P=r()(r()({},p),{},{success:function(i){return l("success",i)},warning:function(i){return l("warning",i)},error:function(i){return l("error",i)},info:function(i){return l("info",i)},loading:function(i){return l("loading",i)}});return[P,O]};c.Z=r()(r()({},m.ZP),{},{success:function(a){return n("success",a)},warning:function(a){return n("warning",a)},error:function(a){return n("error",a)},info:function(a){return n("info",a)},loading:function(a){return n("loading",a)},useMessage:s})},6881:function(k,c,e){e.d(c,{DI:function(){return D},G6:function(){return o},JG:function(){return C},kK:function(){return m},qp:function(){return g},rb:function(){return E}});var x=e(97857),t=e.n(x),h=e(13769),M=e.n(h),b=e(67294),r=["maxWidth","maxHeight"];function D(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var C=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var _=document.createElement("textarea");document.body.appendChild(_),_.style.position="fixed",_.style.clip="rect(0 0 0 0)",_.style.top="10px",_.value=s,_.select(),document.execCommand("copy",!0),document.body.removeChild(_)}},E=function(s){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=_.maxWidth,d=_.maxHeight,u=M()(_,r);return t()({overlayInnerStyle:{maxWidth:a||326,maxHeight:d||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},u)};function m(n){return b.isValidElement(n)}function o(n){var s=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var f=function(s){return s>=10?s:"0".concat(s)},g=function(s){if(s<60){var _=Math.ceil(s);return"0:".concat(f(_))}var a=Math.floor(s/60),d=Math.ceil(s%60);return"".concat(f(a),":").concat(f(d))}}}]);
