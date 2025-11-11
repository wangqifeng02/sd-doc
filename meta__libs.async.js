"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1433],{8697:function(t,e,n){var a;n.r(e),n.d(e,{demos:function(){return p}});var o=n(15009),d=n.n(o),c=n(99289),l=n.n(c),s=n(67294),I=n(21513),p={"src-libs-fetcher-demo-demo":{component:s.memo(s.lazy(function(){return Promise.all([n.e(9227),n.e(9153),n.e(1470),n.e(2433)]).then(n.bind(n,62641))})),asset:{type:"BLOCK",id:"src-libs-fetcher-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(83368).Z},antd:{type:"NPM",value:"5.24.9"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:I,react:a||(a=n.t(s,2))},renderOpts:{compile:function(){var i=l()(d()().mark(function x(){var u,m=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7335).then(n.bind(n,37335));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,m));case 3:case"end":return r.stop()}},x)}));function v(){return i.apply(this,arguments)}return v}()}}}},88636:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(67294),o={}},19294:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(67294),o={}},58837:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(67294),o={}},92718:function(t,e,n){n.r(e),n.d(e,{demos:function(){return o}});var a=n(67294),o={}},31440:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},35911:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u901A\u8FC7 fetch \u8BF7\u6C42\u963F\u91CC\u4E91 pop \u7F51\u5173",paraId:0,tocIndex:0},{value:`import {
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
`,paraId:2,tocIndex:1},{value:"\u5C5E\u6027",paraId:3,tocIndex:2},{value:"\u683C\u5F0F",paraId:3,tocIndex:2},{value:"\u89E3\u91CA",paraId:3,tocIndex:2},{value:"options",paraId:3,tocIndex:2},{value:"RequestOptions \u5BF9\u8C61",paraId:3,tocIndex:2},{value:"\u8BF7\u6C42\u914D\u7F6E",paraId:3,tocIndex:2},{value:"data",paraId:3,tocIndex:2},{value:"Record<string, any>",paraId:3,tocIndex:2},{value:"\u8BF7\u6C42 body \u53C2\u6570\uFF0C\u653E\u5165 params \u4E2D",paraId:3,tocIndex:2},{value:"extraParams",paraId:3,tocIndex:2},{value:"Record<string, any",paraId:3,tocIndex:2},{value:'\u8BF7\u6C42\u5176\u4ED6\u53C2\u6570\uFF0C\u5982{content: "xxx"} roa \u98CE\u683C\u53EF\u7528',paraId:3,tocIndex:2},{value:"\u57FA\u672C\u5C5E\u6027\u5982\u4E0B\uFF0C\u540C\u65F6\u652F\u6301 RequestInit \u7684\u53C2\u6570\uFF0C\u5177\u4F53\u81EA\u884C\u4E86\u89E3",paraId:4,tocIndex:3},{value:"RequestInit",paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:3},{value:"\u683C\u5F0F",paraId:5,tocIndex:3},{value:"\u89E3\u91CA",paraId:5,tocIndex:3},{value:"action",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u8BF7\u6C42 action",paraId:5,tocIndex:3},{value:"product",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"QuanMiaoLightApp",paraId:5,tocIndex:3},{value:"region",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u533A\u57DF\u5982 cn-hangzhou",paraId:5,tocIndex:3},{value:"url",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u8BF7\u6C42\u5730\u5740\uFF0C \u9ED8\u8BA4/data/api.json",paraId:5,tocIndex:3},{value:"version",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u7248\u672C\u53F7",paraId:5,tocIndex:3}]},4765:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u901A\u8FC7 fetch \u8BF7\u6C42\u963F\u91CC\u4E91 pop sse",paraId:0,tocIndex:0},{value:`import { requestPopSse, type SseOptions } from '@agentscope-ai/design';

interface MarketingInformationExtractResponse {
  header: Record<string, any>;
  payload: {
    output: any;
    usage: any;
  };
}
async function testRequestPopSse() {
  const options: SseOptions<MarketingInformationExtractResponse> = {
    action: 'RunMarketingInformationExtract',
    product: 'QuanMiaoLightApp',
    region: 'cn-hangzhou',
    version: '2024-08-01',
    params: { workspaceId: 'llm-2setzb9xb8mx6vrc' },
    body: {
      modelId: 'qwen-plus',
      customPrompt:
        '\u4F60\u662F\u4E00\u4F4D\u5546\u54C1\u5E7F\u544A\u8BBE\u8BA1\u5E08\uFF0C\u6839\u636E\u4E0B\u9762\u7684\u4EA7\u54C1\u4ECB\u7ECD\uFF0C\u751F\u6210\u4E00\u53E5\u8BDD\u6765\u63CF\u8FF0\u8BE5\u4EA7\u54C1\u7684\u5356\u70B9\u3002',
      sourceMaterials: ['30\u5C81\u7A7F\u642D\uFF5C\u6781\u7B80\u9AD8\u7EA7\u611F\uFF5C\u4E0D\u91CD\u6837\u7ECF\u5178\u9ED1\u767D\u914D\u7A7F\u642D'],
      extractType: 'point',
    },
    onMessage: (data) => {
      console.log(data);
    },
    onClose: () => {
      console.log('close');
    },
    onError: (error) => {
      console.log(error);
    },
  };
  const result = await requestPopSse(options);
  console.log(result);
}

testRequestPopSse();
`,paraId:1,tocIndex:0},{value:`requestPopSse(options: SseOptions): Promise<SseResponse>:
`,paraId:2,tocIndex:1},{value:"SseOptions \u7EE7\u627F AliyunPopOptions\uFF08Omit<AliyunPopOptions, 'url'>\uFF09\uFF0C\u589E\u52A0\u5C5E\u6027\u5982\u4E0B\uFF0CAliyunPopOptions \u53EF\u70B9\u51FB",paraId:3,tocIndex:2},{value:"\u6B64\u5904",paraId:4,tocIndex:2},{value:"\u67E5\u770B",paraId:3,tocIndex:2},{value:"\u5C5E\u6027",paraId:5,tocIndex:2},{value:"\u683C\u5F0F",paraId:5,tocIndex:2},{value:"\u89E3\u91CA",paraId:5,tocIndex:2},{value:"body",paraId:5,tocIndex:2},{value:"any",paraId:5,tocIndex:2},{value:"sse \u8BF7\u6C42\u53C2\u6570",paraId:5,tocIndex:2},{value:"params",paraId:5,tocIndex:2},{value:"Record<string, any>",paraId:5,tocIndex:2},{value:"\u8BF7\u6C42 token \u7684\u65F6\u5019\u7684 param \u53C2\u6570",paraId:5,tocIndex:2},{value:"timeout",paraId:5,tocIndex:2},{value:"number",paraId:5,tocIndex:2},{value:"\u8D85\u65F6\u65F6\u957F",paraId:5,tocIndex:2},{value:"onError",paraId:5,tocIndex:2},{value:"error => void",paraId:5,tocIndex:2},{value:"\u5F53\u51FA\u9519\u65F6\u56DE\u8C03",paraId:5,tocIndex:2},{value:"onMessage",paraId:5,tocIndex:2},{value:"data => void",paraId:5,tocIndex:2},{value:"\u5F53\u63A5\u6536\u5230\u6570\u636E\u65F6\u56DE\u8C03",paraId:5,tocIndex:2},{value:"onClose",paraId:5,tocIndex:2},{value:"() => void",paraId:5,tocIndex:2},{value:"\u5173\u95ED\u65F6\u5019\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:2},{value:`export interface SseResponse {
  /**
   * \u53D6\u6D88sse\u8BF7\u6C42
   */
  dispose: () => void;
}
`,paraId:6,tocIndex:3}]},89449:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u4ECE",paraId:0,tocIndex:0},{value:"@microsoft/fetch-event-source",paraId:0,tocIndex:0},{value:"\u62F7\u8D1D\u8FC7\u6765\uFF0C\u6539\u52A8\u70B9\u5982\u4E0B",paraId:0,tocIndex:0},{value:"\u8BF7\u6C42\u5931\u8D25\u4E14\u53D6\u6D88\u8BF7\u6C42\u540E\uFF0C\u907F\u514D\u81EA\u52A8\u53D1\u8D77\u65B0\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"\u589E\u52A0\u53C2\u6570\u63A7\u5236\u8BF7\u6C42\u5931\u8D25\u540E\u662F\u5426\u81EA\u52A8\u53D1\u8D77\u65B0\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"\u589E\u52A0 autoRetryTime \u7528\u4E8E\u63A7\u5236\u5931\u8D25\u662F\u5426\u81EA\u52A8\u53D1\u8D77\u8BF7\u6C42\uFF0C\u9ED8\u8BA4 false",paraId:1,tocIndex:0},{value:`import { requestSse } from '@agentscope-ai/design';

await requestSse('/api/sse', {
  onmessage(ev) {
    console.log(ev.data);
  },
});
`,paraId:2,tocIndex:0},{value:"requestSse(api, options)",paraId:3,tocIndex:1},{value:"\u5C5E\u6027",paraId:4,tocIndex:2},{value:"\u683C\u5F0F",paraId:4,tocIndex:2},{value:"\u89E3\u91CA",paraId:4,tocIndex:2},{value:"method",paraId:4,tocIndex:2},{value:"string",paraId:4,tocIndex:2},{value:"\u8BF7\u6C42\u65B9\u6CD5",paraId:4,tocIndex:2},{value:"headers",paraId:4,tocIndex:2},{value:"{[key: string]: string }",paraId:4,tocIndex:2},{value:"\u8BF7\u6C42\u8868\u5934",paraId:4,tocIndex:2},{value:"body",paraId:4,tocIndex:2},{value:"string",paraId:4,tocIndex:2},{value:"\u8BF7\u6C42\u4F53\u6570\u636E",paraId:4,tocIndex:2},{value:"onopen",paraId:4,tocIndex:2},{value:"() => void",paraId:4,tocIndex:2},{value:"\u5F53\u63A5\u6536\u5F00\u59CB\u65F6\u56DE\u8C03",paraId:4,tocIndex:2},{value:"onmessage",paraId:4,tocIndex:2},{value:"event => void",paraId:4,tocIndex:2},{value:"\u5F53\u63A5\u6536\u5230\u6570\u636E\u65F6\u56DE\u8C03",paraId:4,tocIndex:2},{value:"onerror",paraId:4,tocIndex:2},{value:"error => void",paraId:4,tocIndex:2},{value:"\u5F53\u51FA\u9519\u65F6\u56DE\u8C03",paraId:4,tocIndex:2},{value:"autoRetryTime",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"\u81EA\u52A8\u91CD\u8BD5\u6B21\u6570",paraId:4,tocIndex:2},{value:"timeout",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D ms\uFF0C\u9ED8\u8BA4 60*1000ms, \u5F53\u4E3A 0 \u65F6\u8868\u793A\u524D\u7AEF\u4E0D\u52A0\u8D85\u65F6\u9650\u5236 \uFF080.1.1 \u7248\u672C\u6DFB\u52A0)",paraId:4,tocIndex:2},{value:"signal",paraId:4,tocIndex:2},{value:"AbortController.signal",paraId:4,tocIndex:2},{value:"\u53D6\u6D88\u8BF7\u6C42\u63A7\u5236",paraId:4,tocIndex:2},{value:"debug",paraId:4,tocIndex:2},{value:"boolean",paraId:4,tocIndex:2},{value:"\u8C03\u8BD5\u53C2\u6570\uFF0C\u65E5\u5FD7\u4E2D\u8F93\u51FA\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F",paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u901A\u8FC7",paraId:5,tocIndex:2},{value:"AbortController",paraId:5,tocIndex:2},{value:"\u624B\u52A8\u53D6\u6D88\u8BF7\u6C42",paraId:5,tocIndex:2},{value:`const ctrl = new AbortController();
requestSSE('/api/sse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    foo: 'bar',
  }),
  signal: ctrl.signal,
});
`,paraId:6,tocIndex:2},{value:"\u4E8B\u4EF6\u5904\u7406",paraId:7,tocIndex:2},{value:`class RetriableError extends Error {}
class FatalError extends Error {}
requestSSE('/api/sse', {
  async onopen(response) {
    if (
      response.ok &&
      response.headers.get('content-type') === EventStreamContentType
    ) {
      return; // everything's good
    } else if (
      response.status >= 400 &&
      response.status < 500 &&
      response.status !== 429
    ) {
      // client-side errors are usually non-retriable:
      throw new FatalError();
    } else {
      throw new RetriableError();
    }
  },
  onmessage(msg) {
    // if the server emits an error message, throw an exception
    // so it gets handled by the onerror callback below:
    if (msg.event === 'FatalError') {
      throw new FatalError(msg.data);
    }
  },
  onclose() {
    // if the server closes the connection unexpectedly, retry:
    throw new RetriableError();
  },
  onerror(err) {
    if (err instanceof FatalError) {
      throw err; // rethrow to stop the operation
    } else {
      // do nothing to automatically retry. You can also
      // return a specific retry interval here.
    }
  },
});
`,paraId:8,tocIndex:2}]},10779:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[]},83368:function(t,e){e.Z=`import { BLErrorMessage, fetcherIo } from '@agentscope-ai/design';
import { Button, message, Modal, Space } from 'antd';
import React from 'react';

const App: React.FC = () => {
  function execRequest() {
    const url = '/api/v1/test';
    const params = {
      keywords: 'xx',
      type: 'test',
    };
    const options = {};
    return fetcherIo(url, params, options);
  }

  function showErrorWithoutDetails() {
    message.error(
      <BLErrorMessage
        msg="\u8BF7\u6C42\u5931\u8D25"
        code="10044704"
        requestId="487D6FA4-3E39-16C8-AA6F-72AB2D61A409"
      />,
    );
  }

  function showErrorWithDetails() {
    Modal.error({
      width: 600,
      content: (
        <BLErrorMessage
          msg="\u8BF7\u6C42\u5931\u8D25"
          code="10044704"
          requestId="487D6FA4-3E39-16C8-AA6F-72AB2D61A409"
          details={[
            "sts\\n\u6D4B\u8BD5\\\\n\u6362\u884C\\r\u6362\\t\u884C2<br>\u6362\u884C3a href='http://www.baidu.com'>\u767E\u5EA62</a>",
            "sts\\n\u6D4B\u8BD5\\\\n\u6362\u884C\\r\u6362\\t\u884C2<br>\u6362\u884C3a href='http://www.baidu.com'>\u767E\u5EA63</a>",
          ]}
        />
      ),
    });
  }

  return (
    <>
      <Space wrap>
        <Button onClick={execRequest}>\u53D1\u8D77\u8BF7\u6C42</Button>
        <Button onClick={showErrorWithoutDetails}>\u6CA1\u6709\u9519\u8BEF\u8BE6\u60C5\u7684\u63D0\u793A</Button>
        <Button onClick={showErrorWithDetails}>\u9519\u8BEF\u8BE6\u60C5\u7684\u63D0\u793A</Button>
      </Space>
    </>
  );
};

export default App;
`}}]);
