"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[3518],{75194:function(o,n,e){var t;e.r(n),e.d(n,{demos:function(){return d}});var _=e(15009),l=e.n(_),i=e(99289),u=e.n(i),a=e(67294),d={"useglobalstyle-demo-demo":{component:a.memo(a.lazy(function(){return e.e(236).then(e.bind(e,74331))})),asset:{type:"BLOCK",id:"useglobalstyle-demo-demo",refAtomIds:["useGlobalStyle"],dependencies:{"index.tsx":{type:"FILE",value:e(27782).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var m=u()(l()().mark(function g(){var r,p=arguments;return l()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(7335).then(e.bind(e,37335));case 2:return s.abrupt("return",(r=s.sent).default.apply(r,p));case 3:case"end":return s.stop()}},g)}));function c(){return m.apply(this,arguments)}return c}()}}}},29790:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},27782:function(o,n){n.Z=`import { Button, useGlobalStyle } from '@agentscope-ai/design';
import { useState } from 'react';
const antPrefix = 'bl-ant';
export default () => {
  const [color, setColor] = useState(\`var(--\${antPrefix}-color-primary)\`);
  useGlobalStyle({ globalStyle: \`#useGlobalStyleDemo {color: \${color}}\` });
  // \u91CD\u590D\u7684style\uFF0Chead\u4E2D\u5E94\u8BE5\u53EA\u6709\u4E00\u4E2Adom
  useGlobalStyle({ globalStyle: \`#useGlobalStyleDemo {color: \${color}}\` });
  return (
    <div>
      <div id="useGlobalStyleDemo">\u68C0\u67E5\u6587\u6848\u989C\u8272</div>
      <Button
        className="primary-btn"
        onClick={() => setColor(\`var(--\${antPrefix}-color-primary)\`)}
      >
        \u4E3B\u9898\u8272
      </Button>
      <Button
        className="warning-btn"
        onClick={() => setColor(\`var(--\${antPrefix}-color-warning)\`)}
      >
        \u8B66\u544A\u8272
      </Button>
      <Button onClick={() => setColor('#000')}>\u9ED1\u8272</Button>
    </div>
  );
};
`}}]);
