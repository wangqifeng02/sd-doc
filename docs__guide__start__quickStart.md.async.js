"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[8300,5737],{10411:function(k,u,e){e.r(u);var c=e(76311),d=e(93359),M=e(8102),C=e(57415),b=e(83286),o=e(10294),D=e(96057),U=e(68322),h=e(27738),E=e(45769),m=e(53818),r=e(24617),f=e(99317),p=e(99974),n=e(17987),a=e(67294),s=e(236),_=e(85893);function t(){return(0,_.jsx)(p.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(n.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u5FEB\u901F\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4F7F\u7528"]}),(0,_.jsx)("p",{children:s.texts[0].value}),(0,_.jsx)(o.Z,{lang:"tsx",children:s.texts[1].value})]})})})})}u.default=t},28299:function(k,u,e){e.d(u,{Z:function(){return p}});var c=e(97857),d=e.n(c),M=e(93865),C=e(97634),b=e(85418),o=e(67294),D=e(68400),U=e.n(D),h=e(3067),E,m=(0,h.Z)(E||(E=U()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),r=e(85893),f=function(a){var s,_,t=(0,M.getCommonConfig)(),l=t.antPrefix,v=(0,o.useMemo)(function(){var g;if(!((g=a.menu)!==null&&g!==void 0&&g.selectable)||!a.menu){var x;return((x=a.menu)===null||x===void 0?void 0:x.items)||[]}return a.menu.items.map(function(P){var i={},j=P.label;return j&&(i.label=(0,r.jsxs)("div",{className:"".concat(l,"-dropdown-check-wrapper"),children:[j,(0,r.jsx)("span",{className:"".concat(l,"-dropdown-check-icon"),children:(0,r.jsx)(C.Z,{})})]})),d()(d()({},P),i)})},[(s=a.menu)===null||s===void 0?void 0:s.items,(_=a.menu)===null||_===void 0?void 0:_.selectable]),O=m();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(b.Z,d()(d()({},a),{},{menu:d()(d()({},a.menu),{},{items:v}),overlayStyle:d()({},a.overlayStyle)}))]})},p=f},56373:function(k,u,e){var c=e(5574),d=e.n(c),M=e(13769),C=e.n(M),b=e(97857),o=e.n(b),D=e(33495),U=e(52565),h=e(55595),E=e(96406),m=e(45360),r=e(85893),f=["content"],p={success:{type:"success",icon:(0,r.jsx)(D.Z,{})},warning:{type:"warning",icon:(0,r.jsx)(U.Z,{})},error:{type:"error",icon:(0,r.jsx)(h.Z,{})},info:{type:"info",icon:(0,r.jsx)(E.Z,{})}},n=function(_,t){var l,v;typeof t=="string"?v={content:t}:v=o()({},t);var O=v,g=O.content,x=C()(O,f);m.ZP.open(o()({type:_,content:g,icon:_==="loading"||(l=p[_])===null||l===void 0?void 0:l.icon},x))},a=function(_){var t=m.ZP.useMessage(_),l=d()(t,2),v=l[0],O=l[1],g=function(i,j){var A,I;typeof j=="string"?I={content:j,type:i}:I=o()(o()({},j),{},{type:i}),v[i](o()(o()({},I),{},{icon:(A=p[i])===null||A===void 0?void 0:A.icon}))},x=o()(o()({},v),{},{success:function(i){return g("success",i)},warning:function(i){return g("warning",i)},error:function(i){return g("error",i)},info:function(i){return g("info",i)},loading:function(i){return g("loading",i)}});return[x,O]};u.Z=o()(o()({},m.ZP),{},{success:function(_){return n("success",_)},warning:function(_){return n("warning",_)},error:function(_){return n("error",_)},info:function(_){return n("info",_)},loading:function(_){return n("loading",_)},useMessage:a})},6881:function(k,u,e){e.d(u,{DI:function(){return D},G6:function(){return r},JG:function(){return h},kK:function(){return m},qp:function(){return p},rb:function(){return E}});var c=e(97857),d=e.n(c),M=e(13769),C=e.n(M),b=e(67294),o=["maxWidth","maxHeight"];function D(){var n;return((n=window.g_config)===null||n===void 0?void 0:n.isIntl)||!1}function U(){return $i18n.language==="zh-CN"}var h=function(a){if(navigator.clipboard)navigator.clipboard.writeText(a);else{var s=document.createElement("textarea");document.body.appendChild(s),s.style.position="fixed",s.style.clip="rect(0 0 0 0)",s.style.top="10px",s.value=a,s.select(),document.execCommand("copy",!0),document.body.removeChild(s)}},E=function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=s.maxWidth,t=s.maxHeight,l=C()(s,o);return d()({overlayInnerStyle:{maxWidth:_||326,maxHeight:t||150,overflowY:"auto",padding:"6px 12px"},title:a,arrow:!1},l)};function m(n){return b.isValidElement(n)}function r(n){var a=n||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(a)}var f=function(a){return a>=10?a:"0".concat(a)},p=function(a){if(a<60){var s=Math.ceil(a);return"0:".concat(f(s))}var _=Math.floor(a/60),t=Math.ceil(a%60);return"".concat(f(_),":").concat(f(t))}},236:function(k,u,e){e.r(u),e.d(u,{texts:function(){return c}});const c=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
import zhCN from 'antd/locale/zh_CN';
import { Flex } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      {...bailianTheme} // \u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u767E\u70BC\u7684\u7956\u9016\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u81EA\u5DF1\u4FEE\u6539
      prefix="your-prefix" // \u524D\u7F00
      iconfont="//at.alicdn.com/t/a/font_4807885_ugexdeaoq7.js" // iconfont\u7684\u5730\u5740\uFF08Symbol\u65B9\u6CD5\uFF09
      locale={zhCN} // \u8BED\u8A00\u5305
    >
      <Flex>
        Hello World!
        <Button>\u4F60\u597D</Button>
      </Flex>
    </ConfigProvider>
  );
};

export default App;
`,paraId:1,tocIndex:0}]}}]);
