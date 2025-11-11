"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[3965,5737],{88959:function(k,u,e){e.r(u);var p=e(76311),d=e(93359),D=e(8102),b=e(57415),C=e(83286),o=e(10294),h=e(96057),U=e(68322),x=e(27738),f=e(45769),v=e(53818),r=e(24617),c=e(99317),m=e(99974),n=e(17987),a=e(67294),s=e(43361),_=e(85893);function t(){return(0,_.jsx)(m.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{title:"Image",desc:"Previewable image"}),(0,_.jsx)(m.Dl,{demo:{id:"image-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Image/demo/demo1.tsx"}}),(0,_.jsx)(c.Z,{children:s.texts[0].value}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h4",{id:"api",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"API"]})}),(0,_.jsx)(x.Z,{url:"https://ant.design/components/image/#api"})]})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return m}});var p=e(97857),d=e.n(p),D=e(93865),b=e(97634),C=e(85418),o=e(67294),h=e(68400),U=e.n(h),x=e(3067),f,v=(0,x.Z)(f||(f=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),r=e(85893),c=function(a){var s,_,t=(0,D.getCommonConfig)(),l=t.antPrefix,P=(0,o.useMemo)(function(){var g;if(!((g=a.menu)!==null&&g!==void 0&&g.selectable)||!a.menu){var M;return((M=a.menu)===null||M===void 0?void 0:M.items)||[]}return a.menu.items.map(function(E){var i={},j=E.label;return j&&(i.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(b.Z,{})})]})),d()(d()({},E),i)})},[(s=a.menu)===null||s===void 0?void 0:s.items,(_=a.menu)===null||_===void 0?void 0:_.selectable]),O=v();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(C.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:P}),overlayStyle:d()({},a.overlayStyle)}))]})},m=c},56373:function(k,u,e){var p=e(5574),d=e.n(p),D=e(13769),b=e.n(D),C=e(97857),o=e.n(C),h=e(33495),U=e(52565),x=e(55595),f=e(96406),v=e(45360),r=e(85893),c=["content"],m={success:{type:"success",icon:(0,r.jsx)(h.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(U.Z,{})},error:{type:"error",icon:(0,r.jsx)(x.Z,{})},info:{type:"info",icon:(0,r.jsx)(f.Z,{})}},n=function(_,t){var l,P;typeof t=="string"?P={content:t}:P=o()({},t);var O=P,g=O.content,M=b()(O,c);v.ZP.open(o()({type:_,content:g,icon:_==="loading"||(l=m[_])===null||l===void 0?void 0:l.icon},M))},a=function(_){var t=v.ZP.useMessage(_),l=d()(t,2),P=l[0],O=l[1],g=function(i,j){var I,A;typeof j=="string"?A={content:j,type:i}:A=o()(o()({},j),{},{type:i}),P[i](o()(o()({},A),{},{icon:(I=m[i])===null||I===void 0?void 0:I.icon}))},M=o()(o()({},P),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[M,O]};u.Z=o()(o()({},v.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:a})},6881:function(k,u,e){e.d(u,{DI:function(){return h},G6:function(){return r},JG:function(){return x},kK:function(){return v},qp:function(){return m},rb:function(){return f}});var p=e(97857),d=e.n(p),D=e(13769),b=e.n(D),C=e(67294),o=["maxWidth","maxHeight"];function h(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var x=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=a,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},f=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=s.maxWidth,t=s.maxHeight,l=b()(s,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},l)};function v(n){return C.isValidElement(n)}function r(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var c=function(a){return a>=10?a:"0".concat(a)},m=function(a){if(a<60){var s=Math.ceil(a);return"0:".concat(c(s))}var _=Math.floor(a/60),t=Math.ceil(a%60);return"".concat(c(_),":").concat(c(t))}},43361:function(k,u,e){e.r(u),e.d(u,{texts:function(){return p}});const p=[{value:"import { Image } from '@agentscope-ai/design'",paraId:0}]}}]);
