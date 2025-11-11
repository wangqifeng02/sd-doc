"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8300],{10411:function(i,e,_){_.r(e);var s=_(76311),r=_(93359),u=_(61788),m=_(57415),p=_(71741),d=_(27725),c=_(96057),E=_(68322),t=_(53683),o=_(80936),l=_(67294),a=_(236),n=_(85893);function g(){return(0,n.jsx)(t.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5FEB\u901F\u4F7F\u7528",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4F7F\u7528",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4F7F\u7528"]}),(0,n.jsx)("p",{children:a.texts[0].value}),(0,n.jsx)(d.Z,{lang:"tsx",children:a.texts[1].value})]})})})})}e.default=g},236:function(i,e,_){_.r(e),_.d(e,{texts:function(){return s}});const s=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
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
