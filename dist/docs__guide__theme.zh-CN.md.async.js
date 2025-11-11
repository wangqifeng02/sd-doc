"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5172],{45974:function(i,s,n){n.r(s);var _=n(76311),u=n(93359),g=n(61788),p=n(57415),c=n(71741),d=n(27725),x=n(96057),h=n(68322),r=n(53683),o=n(80936),t=n(67294),a=n(19340),e=n(85893);function l(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(t.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5185\u7F6E\u4E3B\u9898",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u7F6E\u4E3B\u9898",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5185\u7F6E\u4E3B\u9898"]}),(0,e.jsx)("p",{children:a.texts[0].value}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#615CED"}}),a.texts[1].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#5551CC"}}),a.texts[2].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"rgba(26, 26, 29, 1)"}}),a.texts[3].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#676767"}}),a.texts[4].value]}),(0,e.jsxs)("h3",{id:"\u793A\u4F8B\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u793A\u4F8B\u7528\u6CD5"]}),(0,e.jsx)(d.Z,{lang:"tsx",children:a.texts[5].value}),(0,e.jsxs)("h2",{id:"\u4ECE-antd-token-\u751F\u6210\u60A8\u81EA\u5DF1\u7684\u4E3B\u9898",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4ECE-antd-token-\u751F\u6210\u60A8\u81EA\u5DF1\u7684\u4E3B\u9898",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4ECE Antd token \u751F\u6210\u60A8\u81EA\u5DF1\u7684\u4E3B\u9898"]}),(0,e.jsx)("p",{children:a.texts[6].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:a.texts[7].value}),(0,e.jsxs)("p",{children:[a.texts[8].value,(0,e.jsx)("code",{children:a.texts[9].value}),a.texts[10].value]})]})})})})}s.default=l},19340:function(i,s,n){n.r(s),n.d(s,{texts:function(){return _}});const _=[{value:"Alibaba Cloud Spark Design \u63D0\u4F9B\u56DB\u79CD\u5185\u7F6E\u4E3B\u9898\uFF1A",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme\uFF08\u6697\u8272\u6A21\u5F0F\uFF09",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

const App = () => {
  return <ConfigProvider {...purpleTheme}>Hello Spark Design!</ConfigProvider>;
};

export default App;
`,paraId:2,tocIndex:1},{value:"\u5982\u679C\u60A8\u5DF2\u7ECF\u6709\u4E86 Antd \u4E3B\u9898\uFF0C\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528 generateThemeByToken \u751F\u6210 spark \u98CE\u683C\u7684\u4E3B\u9898",paraId:3,tocIndex:2},{value:`import { ConfigProvider, generateThemeByToken } from '@agentscope-ai/design';
const yourToken = {
  borderRadiusXS: 2,
  borderRadiusSM: 4,
  borderRadius: 6,
  borderRadiusLG: 8,
  borderRadiusXL: 12,
  borderRadiusFull: 999,
  wireframe: false,
  colorPrimaryBg: '#F2F0FF',
  colorPrimaryBgHover: '#F2F0FF',
  colorPrimaryBorder: '#E2DEFF',
  colorPrimaryBorderHover: '#BCB5FF',
  // ... \u60A8\u53EF\u4EE5\u5728\u4E0B\u4E00\u4E2A\u6587\u6863\u4E2D\u627E\u5230\u5B8C\u6574\u7248\u672C\u7684 tokens\uFF1ATokens \u548C CSS \u53D8\u91CF
};
const darkMode = false;
const yourThemeWithSparkStyle = generateThemeByToken(yourToken, darkMode);
const App = () => {
  return (
    <ConfigProvider {...yourThemeWithSparkStyle}>
      Hello Spark Design!
    </ConfigProvider>
  );
};

export default App;
`,paraId:4,tocIndex:2},{value:"\u60A8\u4ECD\u7136\u53EF\u4EE5\u4FEE\u6539\u751F\u6210\u7684\u4E3B\u9898\uFF1A",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:"\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u505A\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4FDD\u6301\u539F\u59CB\u4E3B\u9898\u4EE5\u83B7\u5F97 Spark Design \u7684\u6700\u4F73\u4F53\u9A8C\u3002",paraId:5,tocIndex:2}]}}]);
