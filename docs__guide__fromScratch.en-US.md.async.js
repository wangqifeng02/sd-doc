"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[5985,5737],{15918:function(k,u,e){e.r(u);var m=e(76311),d=e(93359),h=e(8102),M=e(57415),b=e(83286),r=e(10294),D=e(96057),U=e(68322),j=e(27738),P=e(45769),f=e(53818),o=e(24617),p=e(99317),c=e(99974),n=e(17987),a=e(67294),s=e(2679),_=e(85893);function t(){return(0,_.jsx)(c.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"usage-from-scratch",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage-from-scratch",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Usage from Scratch"]}),(0,_.jsxs)("h2",{id:"-install",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-install",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u{1F4E6} Install"]}),(0,_.jsx)(r.Z,{lang:"bash",children:s.texts[0].value}),(0,_.jsxs)("h2",{id:"-usage",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#-usage",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u{1F528} Usage"]})]}),(0,_.jsx)(c.Dl,{demo:{id:"docs-guide-from-scratch-demo-en-us-0"},previewerProps:{}})]})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return c}});var m=e(97857),d=e.n(m),h=e(93865),M=e(97634),b=e(85418),r=e(67294),D=e(68400),U=e.n(D),j=e(3067),P,f=(0,j.Z)(P||(P=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),o=e(85893),p=function(a){var s,_,t=(0,h.getCommonConfig)(),l=t.antPrefix,v=(0,r.useMemo)(function(){var g;if(!((g=a.menu)!==null&&g!==void 0&&g.selectable)||!a.menu){var x;return((x=a.menu)===null||x===void 0?void 0:x.items)||[]}return a.menu.items.map(function(E){var i={},O=E.label;return O&&(i.label=(0,o.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[O,(0,o.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,o.jsx)(M.Z,{})})]})),d()(d()({},E),i)})},[(s=a.menu)===null||s===void 0?void 0:s.items,(_=a.menu)===null||_===void 0?void 0:_.selectable]),C=f();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C,{}),(0,o.jsx)(b.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:v}),overlayStyle:d()({},a.overlayStyle)}))]})},c=p},56373:function(k,u,e){var m=e(5574),d=e.n(m),h=e(13769),M=e.n(h),b=e(97857),r=e.n(b),D=e(33495),U=e(52565),j=e(55595),P=e(96406),f=e(45360),o=e(85893),p=["content"],c={success:{type:"success",icon:(0,o.jsx)(D.Z,{})},warning:{type:"warning",icon:(0,o.jsx)(U.Z,{})},error:{type:"error",icon:(0,o.jsx)(j.Z,{})},info:{type:"info",icon:(0,o.jsx)(P.Z,{})}},n=function(_,t){var l,v;typeof t=="string"?v={content:t}:v=r()({},t);var C=v,g=C.content,x=M()(C,p);f.ZP.open(r()({type:_,content:g,icon:_==="loading"||(l=c[_])===null||l===void 0?void 0:l.icon},x))},a=function(_){var t=f.ZP.useMessage(_),l=d()(t,2),v=l[0],C=l[1],g=function(i,O){var I,A;typeof O=="string"?A={content:O,type:i}:A=r()(r()({},O),{},{type:i}),v[i](r()(r()({},A),{},{icon:(I=c[i])===null||I===void 0?void 0:I.icon}))},x=r()(r()({},v),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[x,C]};u.Z=r()(r()({},f.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:a})},6881:function(k,u,e){e.d(u,{DI:function(){return D},G6:function(){return o},JG:function(){return j},kK:function(){return f},qp:function(){return c},rb:function(){return P}});var m=e(97857),d=e.n(m),h=e(13769),M=e.n(h),b=e(67294),r=["maxWidth","maxHeight"];function D(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var j=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=a,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},P=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=s.maxWidth,t=s.maxHeight,l=M()(s,r);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},l)};function f(n){return b.isValidElement(n)}function o(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var p=function(a){return a>=10?a:"0".concat(a)},c=function(a){if(a<60){var s=Math.ceil(a);return"0:".concat(p(s))}var _=Math.floor(a/60),t=Math.ceil(a%60);return"".concat(p(_),":").concat(p(t))}},2679:function(k,u,e){e.r(u),e.d(u,{texts:function(){return m}});const m=[{value:`$ npm install antd @agentscope-ai/icons @agentscope-ai/design --save
`,paraId:0,tocIndex:1}]}}]);
