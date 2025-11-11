"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[7711,5737],{4716:function(k,l,n){n.r(l);var p=n(76311),d=n(93359),h=n(8102),D=n(57415),b=n(83286),o=n(10294),C=n(96057),U=n(68322),x=n(27738),f=n(45769),v=n(53818),t=n(24617),m=n(99317),g=n(99974),e=n(17987),s=n(67294),a=n(53239),_=n(85893);function r(){return(0,_.jsx)(g.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(e.Z,{}),children:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{title:"Select",desc:"Dropdown Selector"}),(0,_.jsx)(g.Dl,{demo:{id:"src-components-common-components-select-demo-demo1"},previewerProps:{center:!0,title:"Example",filename:"src/components/commonComponents/Select/demo/demo1.tsx"}}),(0,_.jsx)(m.Z,{children:a.texts[0].value}),(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h4",{id:"select-examples",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#select-examples",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Select Examples"]}),(0,_.jsx)("p",{children:a.texts[1].value})]}),(0,_.jsx)(g.Dl,{demo:{id:"src-components-common-components-select-demo-demo2"},previewerProps:{center:!0,title:"Multiple Selection",filename:"src/components/commonComponents/Select/demo/demo2.tsx"}}),(0,_.jsx)("div",{className:"markdown",children:(0,_.jsxs)("h4",{id:"faqs",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faqs",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"FAQs"]})}),(0,_.jsx)(x.Z,{url:"https://ant.design/components/select/#api"})]})})})}l.default=r},28299:function(k,l,n){n.d(l,{Z:function(){return g}});var p=n(97857),d=n.n(p),h=n(93865),D=n(97634),b=n(85418),o=n(67294),C=n(68400),U=n.n(C),x=n(3067),f,v=(0,x.Z)(f||(f=U()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),t=n(85893),m=function(s){var a,_,r=(0,h.getCommonConfig)(),u=r.antPrefix,E=(0,o.useMemo)(function(){var c;if(!((c=s.menu)!==null&&c!==void 0&&c.selectable)||!s.menu){var M;return((M=s.menu)===null||M===void 0?void 0:M.items)||[]}return s.menu.items.map(function(P){var i={},O=P.label;return O&&(i.label=(0,t.jsxs)("div",{className:"".concat(u,"-dropdown-check-wrapper"),children:[O,(0,t.jsx)("span",{className:"".concat(u,"-dropdown-check-icon"),children:(0,t.jsx)(D.Z,{})})]})),d()(d()({},P),i)})},[(a=s.menu)===null||a===void 0?void 0:a.items,(_=s.menu)===null||_===void 0?void 0:_.selectable]),j=v();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{}),(0,t.jsx)(b.Z,d()(d()({},s),{},{menu:d()(d()({},s.menu),{},{items:E}),overlayStyle:d()({},s.overlayStyle)}))]})},g=m},56373:function(k,l,n){var p=n(5574),d=n.n(p),h=n(13769),D=n.n(h),b=n(97857),o=n.n(b),C=n(33495),U=n(52565),x=n(55595),f=n(96406),v=n(45360),t=n(85893),m=["content"],g={success:{type:"success",icon:(0,t.jsx)(C.Z,{})},warning:{type:"warning",icon:(0,t.jsx)(U.Z,{})},error:{type:"error",icon:(0,t.jsx)(x.Z,{})},info:{type:"info",icon:(0,t.jsx)(f.Z,{})}},e=function(_,r){var u,E;typeof r=="string"?E={content:r}:E=o()({},r);var j=E,c=j.content,M=D()(j,m);v.ZP.open(o()({type:_,content:c,icon:_==="loading"||(u=g[_])===null||u===void 0?void 0:u.icon},M))},s=function(_){var r=v.ZP.useMessage(_),u=d()(r,2),E=u[0],j=u[1],c=function(i,O){var A,I;typeof O=="string"?I={content:O,type:i}:I=o()(o()({},O),{},{type:i}),E[i](o()(o()({},I),{},{icon:(A=g[i])===null||A===void 0?void 0:A.icon}))},M=o()(o()({},E),{},{success:function(i){return c("success",i)},warning:function(i){return c("warning",i)},error:function(i){return c("error",i)},info:function(i){return c("info",i)},loading:function(i){return c("loading",i)}});return[M,j]};l.Z=o()(o()({},v.ZP),{},{success:function(_){return e("success",_)},warning:function(_){return e("warning",_)},error:function(_){return e("error",_)},info:function(_){return e("info",_)},loading:function(_){return e("loading",_)},useMessage:s})},6881:function(k,l,n){n.d(l,{DI:function(){return C},G6:function(){return t},JG:function(){return x},kK:function(){return v},qp:function(){return g},rb:function(){return f}});var p=n(97857),d=n.n(p),h=n(13769),D=n.n(h),b=n(67294),o=["maxWidth","maxHeight"];function C(){var e;return((e=window.g_config)===null||e===void 0?void 0:e.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var x=function(s){if(navigator.clipboard)navigator.clipboard.writeText(s);else{var a=document.createElement("textarea");document.body.appendChild(a),a.style.position="fixed",a.style.clip="rect(0 0 0 0)",a.style.top="10px",a.value=s,a.select(),document.execCommand("copy",!0),document.body.removeChild(a)}},f=function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=a.maxWidth,r=a.maxHeight,u=D()(a,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:r||150,overflowY:"auto",padding:"6px 12px"},title:s,arrow:!1},u)};function v(e){return b.isValidElement(e)}function t(e){var s=e||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(s)}var m=function(s){return s>=10?s:"0".concat(s)},g=function(s){if(s<60){var a=Math.ceil(s);return"0:".concat(m(a))}var _=Math.floor(s/60),r=Math.ceil(s%60);return"".concat(m(_),":").concat(m(r))}},53239:function(k,l,n){n.r(l),n.d(l,{texts:function(){return p}});const p=[{value:"import { Select } from '@agentscope-ai/design'",paraId:0},{value:"Below are examples and variants of this component",paraId:1,tocIndex:1}]}}]);
