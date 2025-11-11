"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[1356,5737],{76768:function(k,g,e){e.r(g);var x=e(76311),t=e(93359),M=e(8102),b=e(57415),h=e(83286),r=e(10294),D=e(96057),U=e(68322),C=e(27738),E=e(45769),c=e(53818),o=e(24617),m=e(99317),p=e(99974),n=e(17987),a=e(67294),_=e(85893);function s(){return(0,_.jsx)(p.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u5B9A\u4E49",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B9A\u4E49",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B9A\u4E49"]}),(0,_.jsxs)("h3",{id:"waitforoptions",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#waitforoptions",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"WaitForOptions"]})]})})})})}g.default=s},28299:function(k,g,e){e.d(g,{Z:function(){return p}});var x=e(97857),t=e.n(x),M=e(93865),b=e(97634),h=e(85418),r=e(67294),D=e(68400),U=e.n(D),C=e(3067),E,c=(0,C.Z)(E||(E=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),o=e(85893),m=function(a){var _,s,d=(0,M.getCommonConfig)(),u=d.antPrefix,f=(0,r.useMemo)(function(){var l;if(!((l=a.menu)!==null&&l!==void 0&&l.selectable)||!a.menu){var P;return((P=a.menu)===null||P===void 0?void 0:P.items)||[]}return a.menu.items.map(function(v){var i={},j=v.label;return j&&(i.label=(0,o.jsxs)("div",{className:"".concat(u,"-dropdown-check-wrapper"),children:[j,(0,o.jsx)("span",{className:"".concat(u,"-dropdown-check-icon"),children:(0,o.jsx)(b.Z,{})})]})),t()(t()({},v),i)})},[(_=a.menu)===null||_===void 0?void 0:_.items,(s=a.menu)===null||s===void 0?void 0:s.selectable]),O=c();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{}),(0,o.jsx)(h.Z,t()(t()({},a),{},{menu:t()(t()({},a.menu),{},{items:f}),overlayStyle:t()({},a.overlayStyle)}))]})},p=m},56373:function(k,g,e){var x=e(5574),t=e.n(x),M=e(13769),b=e.n(M),h=e(97857),r=e.n(h),D=e(33495),U=e(52565),C=e(55595),E=e(96406),c=e(45360),o=e(85893),m=["content"],p={success:{type:"success",icon:(0,o.jsx)(D.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(U.Z,{})},error:{type:"error",icon:(0,o.jsx)(C.Z,{})},info:{type:"info",icon:(0,o.jsx)(E.Z,{})}},n=function(s,d){var u,f;typeof d=="string"?f={content:d}:f=r()({},d);var O=f,l=O.content,P=b()(O,m);c.ZP.open(r()({type:s,content:l,icon:s==="loading"||(u=p[s])===null||u===void 0?void 0:u.icon},P))},a=function(s){var d=c.ZP.useMessage(s),u=t()(d,2),f=u[0],O=u[1],l=function(i,j){var A,T;typeof j=="string"?T={content:j,type:i}:T=r()(r()({},j),{},{type:i}),f[i](r()(r()({},T),{},{icon:(A=p[i])===null||A===void 0?void 0:A.icon}))},P=r()(r()({},f),{},{success:function(i){return l("success",i)},warning:function(i){return l("warning",i)},error:function(i){return l("error",i)},info:function(i){return l("info",i)},loading:function(i){return l("loading",i)}});return[P,O]};g.Z=r()(r()({},c.ZP),{},{success:function(s){return n("success",s)},warning:function(s){return n("warning",s)},error:function(s){return n("error",s)},info:function(s){return n("info",s)},loading:function(s){return n("loading",s)},useMessage:a})},6881:function(k,g,e){e.d(g,{DI:function(){return D},G6:function(){return o},JG:function(){return C},kK:function(){return c},qp:function(){return p},rb:function(){return E}});var x=e(97857),t=e.n(x),M=e(13769),b=e.n(M),h=e(67294),r=["maxWidth","maxHeight"];function D(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var C=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var _=document.createElement("textarea");document.body.appendChild(_),_.style.position="fixed",_.style.clip="rect(0 0 0 0)",_.style.top="10px",_.value=a,_.select(),document.execCommand("copy",!0),document.body.removeChild(_)}},E=function(a){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=_.maxWidth,d=_.maxHeight,u=b()(_,r);return t()({overlayInnerStyle:{maxWidth:s||326,maxHeight:d||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},u)};function c(n){return h.isValidElement(n)}function o(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var m=function(a){return a>=10?a:"0".concat(a)},p=function(a){if(a<60){var _=Math.ceil(a);return"0:".concat(m(_))}var s=Math.floor(a/60),d=Math.ceil(a%60);return"".concat(m(s),":").concat(m(d))}}}]);
