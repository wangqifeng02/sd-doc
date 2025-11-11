"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2359],{84574:function(d,a,n){n.r(a);var s=n(76311),g=n(93359),u=n(8102),p=n(57415),m=n(73137),i=n(10294),h=n(96057),c=n(68322),x=n(27738),k=n(52522),f=n(53818),E=n(24617),v=n(99317),r=n(99974),o=n(17987),t=n(67294),_=n(7957),e=n(85893);function l(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(t.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"built-in-themes",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-themes",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Built-in themes"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#615CED"}}),_.texts[1].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#5551CC"}}),_.texts[2].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"rgba(26, 26, 29, 1)"}}),_.texts[3].value]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{style:{display:"inline-block",width:"12px",height:"12px",backgroundColor:"#676767"}}),_.texts[4].value]}),(0,e.jsxs)("h3",{id:"example-usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#example-usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Example Usage"]}),(0,e.jsx)(i.Z,{lang:"tsx",children:_.texts[5].value}),(0,e.jsxs)("h2",{id:"generate-your-own-theme-from-antd-token",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#generate-your-own-theme-from-antd-token",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Generate your own theme from Antd token"]}),(0,e.jsx)("p",{children:_.texts[6].value}),(0,e.jsx)(i.Z,{lang:"tsx",children:_.texts[7].value}),(0,e.jsxs)("p",{children:[_.texts[8].value,(0,e.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]})]})})})})}a.default=l},7957:function(d,a,n){n.r(a),n.d(a,{texts:function(){return s}});const s=[{value:"Alibaba Cloud Spark Design provides four built-in themes:",paraId:0,tocIndex:0},{value:" purpleTheme",paraId:1},{value:" purpleDarkTheme (for dark mode)",paraId:1},{value:" carbonTheme",paraId:1},{value:" carbonDarkTheme (for dark mode)",paraId:1},{value:`import { ConfigProvider, purpleTheme } from '@agentscope-ai/design';

const App = () => {
  return <ConfigProvider {...purpleTheme}>Hello Spark Design!</ConfigProvider>;
};

export default App;
`,paraId:2,tocIndex:1},{value:"If you've already had an Antd theme, you can still generate a spark-style theme by using generateThemeByToken",paraId:3,tocIndex:2},{value:`import { ConfigProvider, generateThemeByToken } from '@agentscope-ai/design';
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
  // ... you can find full version of tokens in the next doc: Tokens and Css Variables
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
`,paraId:4,tocIndex:2},{value:"Still, you can modify the generated theme: ",paraId:5,tocIndex:2},{value:"yourThemeWithSparkStyle",paraId:5,tocIndex:2},{value:", which is not recommended. We suggest you to keep the original theme for the best experience of Spark Design.",paraId:5,tocIndex:2}]}}]);
