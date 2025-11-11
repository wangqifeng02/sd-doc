"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[8387,5737],{16848:function(k,u,e){e.r(u);var m=e(76311),d=e(93359),M=e(8102),D=e(57415),b=e(83286),o=e(10294),h=e(96057),U=e(68322),C=e(27738),P=e(45769),p=e(53818),r=e(24617),f=e(99317),c=e(99974),n=e(17987),a=e(67294),s=e(33397),_=e(85893);function t(){return(0,_.jsx)(c.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,_.jsx)("p",{children:s.texts[0].value})]}),(0,_.jsx)(c.Dl,{demo:{id:"docs-guide-iconfont-demo-en-us-0"},previewerProps:{}})]})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return c}});var m=e(97857),d=e.n(m),M=e(93865),D=e(97634),b=e(85418),o=e(67294),h=e(68400),U=e.n(h),C=e(3067),P,p=(0,C.Z)(P||(P=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),r=e(85893),f=function(a){var s,_,t=(0,M.getCommonConfig)(),l=t.antPrefix,v=(0,o.useMemo)(function(){var g;if(!((g=a.menu)!==null&&g!==void 0&&g.selectable)||!a.menu){var x;return((x=a.menu)===null||x===void 0?void 0:x.items)||[]}return a.menu.items.map(function(E){var i={},j=E.label;return j&&(i.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(D.Z,{})})]})),d()(d()({},E),i)})},[(s=a.menu)===null||s===void 0?void 0:s.items,(_=a.menu)===null||_===void 0?void 0:_.selectable]),O=p();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(b.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:v}),overlayStyle:d()({},a.overlayStyle)}))]})},c=f},56373:function(k,u,e){var m=e(5574),d=e.n(m),M=e(13769),D=e.n(M),b=e(97857),o=e.n(b),h=e(33495),U=e(52565),C=e(55595),P=e(96406),p=e(45360),r=e(85893),f=["content"],c={success:{type:"success",icon:(0,r.jsx)(h.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(U.Z,{})},error:{type:"error",icon:(0,r.jsx)(C.Z,{})},info:{type:"info",icon:(0,r.jsx)(P.Z,{})}},n=function(_,t){var l,v;typeof t=="string"?v={content:t}:v=o()({},t);var O=v,g=O.content,x=D()(O,f);p.ZP.open(o()({type:_,content:g,icon:_==="loading"||(l=c[_])===null||l===void 0?void 0:l.icon},x))},a=function(_){var t=p.ZP.useMessage(_),l=d()(t,2),v=l[0],O=l[1],g=function(i,j){var A,I;typeof j=="string"?I={content:j,type:i}:I=o()(o()({},j),{},{type:i}),v[i](o()(o()({},I),{},{icon:(A=c[i])===null||A===void 0?void 0:A.icon}))},x=o()(o()({},v),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[x,O]};u.Z=o()(o()({},p.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:a})},6881:function(k,u,e){e.d(u,{DI:function(){return h},G6:function(){return r},JG:function(){return C},kK:function(){return p},qp:function(){return c},rb:function(){return P}});var m=e(97857),d=e.n(m),M=e(13769),D=e.n(M),b=e(67294),o=["maxWidth","maxHeight"];function h(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var C=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=a,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},P=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=s.maxWidth,t=s.maxHeight,l=D()(s,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},l)};function p(n){return b.isValidElement(n)}function r(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var f=function(a){return a>=10?a:"0".concat(a)},c=function(a){if(a<60){var s=Math.ceil(a);return"0:".concat(f(s))}var _=Math.floor(a/60),t=Math.ceil(a%60);return"".concat(f(_),":").concat(f(t))}},33397:function(k,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:"If you have your own iconfont project, you can integrate your icons into Spark Design and access your icon with simply a symbol name.",paraId:0,tocIndex:0}]}}]);
