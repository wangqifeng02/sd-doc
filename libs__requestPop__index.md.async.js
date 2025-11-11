"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[6573],{66347:function(r,a,s){s.r(a);var t=s(76311),c=s(93359),x=s(61788),p=s(57415),h=s(71741),d=s(27725),i=s(96057),g=s(68322),l=s(53683),_=s(80936),o=s(67294),n=s(35911),e=s(85893);function u(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"pop-\u8BF7\u6C42",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pop-\u8BF7\u6C42",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"POP \u8BF7\u6C42"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)(d.Z,{lang:"ts",children:n.texts[1].value}),(0,e.jsxs)("h2",{id:"\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7528\u6CD5"]}),(0,e.jsx)(d.Z,{children:n.texts[2].value}),(0,e.jsxs)("h3",{id:"\u53C2\u6570\u89E3\u91CA",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53C2\u6570\u89E3\u91CA",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u53C2\u6570\u89E3\u91CA"]}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n.texts[3].value}),(0,e.jsx)("th",{children:n.texts[4].value}),(0,e.jsx)("th",{children:n.texts[5].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[6].value}),(0,e.jsx)("td",{children:n.texts[7].value}),(0,e.jsx)("td",{children:n.texts[8].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[9].value}),(0,e.jsx)("td",{children:n.texts[10].value}),(0,e.jsx)("td",{children:n.texts[11].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[12].value}),(0,e.jsx)("td",{children:n.texts[13].value}),(0,e.jsx)("td",{children:n.texts[14].value})]})]})]}),(0,e.jsxs)("h3",{id:"requestoptions-\u89E3\u91CA",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#requestoptions-\u89E3\u91CA",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RequestOptions \u89E3\u91CA"]}),(0,e.jsxs)("p",{children:[n.texts[15].value,(0,e.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/RequestInit",children:n.texts[16].value})]}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n.texts[17].value}),(0,e.jsx)("th",{children:n.texts[18].value}),(0,e.jsx)("th",{children:n.texts[19].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[20].value}),(0,e.jsx)("td",{children:n.texts[21].value}),(0,e.jsx)("td",{children:n.texts[22].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[23].value}),(0,e.jsx)("td",{children:n.texts[24].value}),(0,e.jsx)("td",{children:n.texts[25].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[26].value}),(0,e.jsx)("td",{children:n.texts[27].value}),(0,e.jsx)("td",{children:n.texts[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[29].value}),(0,e.jsx)("td",{children:n.texts[30].value}),(0,e.jsx)("td",{children:n.texts[31].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n.texts[32].value}),(0,e.jsx)("td",{children:n.texts[33].value}),(0,e.jsx)("td",{children:n.texts[34].value})]})]})]})]})})})})}a.default=u},35911:function(r,a,s){s.r(a),s.d(a,{texts:function(){return t}});const t=[{value:"\u901A\u8FC7 fetch \u8BF7\u6C42\u963F\u91CC\u4E91 pop \u7F51\u5173",paraId:0,tocIndex:0},{value:`import {
  requestPop,
  type RequestOptions,
  type BaseResponse,
} from '@agentscope-ai/design';

interface ResponseData {
  /**
   * \u8BF7\u6C42domain\u5730\u5740
   */
  uri: string;
  /**
   * \u8BF7\u6C42\u8DEF\u5F84
   */
  path: string;
  /**
   * \u8BF7\u6C42\u65B9\u6CD5
   */
  method: string;
  /**
   * \u8BF7\u6C42query\u53C2\u6570
   */
  query: Record<string, string>;
  /**
   * \u8BF7\u6C42header\u53C2\u6570
   */
  headers: Record<string, string>;

  /**
   * \u8BF7\u6C42body\u53C2\u6570
   */
  body: string;
}

async function getSseToken(action: string, body: Record<string, any>) {
  const options: RequestOptions = {
    action,
    product: 'QuanMiaoLightApp',
    region: 'cn-hangzhou',
    url: '/tool/sse/get.json',
    version: '2024-08-01',
  };
  return requestPop<BaseResponse<ResponseData>>(
    options,
    { workspaceId: 'workspaceId' },
    {
      content: JSON.stringify(body),
    },
  );
}

async function testGetSseToken() {
  try {
    const result = await getSseToken('RunMarketingInformationExtract', {
      modelId: 'qwen-plus',
      customPrompt:
        '\u4F60\u662F\u4E00\u4F4D\u5546\u54C1\u5E7F\u544A\u8BBE\u8BA1\u5E08\uFF0C\u6839\u636E\u4E0B\u9762\u7684\u4EA7\u54C1\u4ECB\u7ECD\uFF0C\u751F\u6210\u4E00\u53E5\u8BDD\u6765\u63CF\u8FF0\u8BE5\u4EA7\u54C1\u7684\u5356\u70B9\u3002',
      sourceMaterials: ['30\u5C81\u7A7F\u642D\uFF5C\u6781\u7B80\u9AD8\u7EA7\u611F\uFF5C\u4E0D\u91CD\u6837\u7ECF\u5178\u9ED1\u767D\u914D\u7A7F\u642D'],
      extractType: 'point',
    });
    console.log(result, '\u8BF7\u6C42\u6210\u529F');
  } catch (error) {
    console.log(error, '\u8BF7\u6C42\u51FA\u9519');
  }
}

testGetSseToken();
`,paraId:1,tocIndex:0},{value:`requestPop(options: RequestOptions, data?: Record<string, any>, extraParams?: Record<string, any>)
`,paraId:2,tocIndex:1},{value:"\u5C5E\u6027",paraId:3,tocIndex:2},{value:"\u683C\u5F0F",paraId:3,tocIndex:2},{value:"\u89E3\u91CA",paraId:3,tocIndex:2},{value:"options",paraId:3,tocIndex:2},{value:"RequestOptions \u5BF9\u8C61",paraId:3,tocIndex:2},{value:"\u8BF7\u6C42\u914D\u7F6E",paraId:3,tocIndex:2},{value:"data",paraId:3,tocIndex:2},{value:"Record<string, any>",paraId:3,tocIndex:2},{value:"\u8BF7\u6C42 body \u53C2\u6570\uFF0C\u653E\u5165 params \u4E2D",paraId:3,tocIndex:2},{value:"extraParams",paraId:3,tocIndex:2},{value:"Record<string, any",paraId:3,tocIndex:2},{value:'\u8BF7\u6C42\u5176\u4ED6\u53C2\u6570\uFF0C\u5982{content: "xxx"} roa \u98CE\u683C\u53EF\u7528',paraId:3,tocIndex:2},{value:"\u57FA\u672C\u5C5E\u6027\u5982\u4E0B\uFF0C\u540C\u65F6\u652F\u6301 RequestInit \u7684\u53C2\u6570\uFF0C\u5177\u4F53\u81EA\u884C\u4E86\u89E3",paraId:4,tocIndex:3},{value:"RequestInit",paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:3},{value:"\u683C\u5F0F",paraId:5,tocIndex:3},{value:"\u89E3\u91CA",paraId:5,tocIndex:3},{value:"action",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u8BF7\u6C42 action",paraId:5,tocIndex:3},{value:"product",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"QuanMiaoLightApp",paraId:5,tocIndex:3},{value:"region",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u533A\u57DF\u5982 cn-hangzhou",paraId:5,tocIndex:3},{value:"url",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u8BF7\u6C42\u5730\u5740\uFF0C \u9ED8\u8BA4/data/api.json",paraId:5,tocIndex:3},{value:"version",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u7248\u672C\u53F7",paraId:5,tocIndex:3}]}}]);
