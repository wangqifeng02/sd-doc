"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[8300],{10411:function(i,n,_){_.r(n);var s=_(76311),r=_(93359),u=_(8102),p=_(57415),m=_(73137),d=_(10294),E=_(96057),c=_(68322),C=_(27738),f=_(52522),P=_(53818),D=_(24617),k=_(99317),t=_(99974),o=_(17987),g=_(67294),a=_(236),e=_(85893);function l(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(g.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5FEB\u901F\u4F7F\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4F7F\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4F7F\u7528"]}),(0,e.jsx)("p",{children:a.texts[0].value}),(0,e.jsx)(d.Z,{lang:"tsx",children:a.texts[1].value})]})})})})}n.default=l},236:function(i,n,_){_.r(n),_.d(n,{texts:function(){return s}});const s=[{value:"\u5728\u9879\u76EE\u6700\u5916\u5C42\u7EC4\u4EF6\u5957\u4E00\u5C42 ConfigProvider\uFF08\u7528\u6CD5\u540C AntD \u7684 ConfigProvider\uFF09",paraId:0,tocIndex:0},{value:`import { ConfigProvider, bailianTheme, Button } from '@agentscope-ai/design';
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
