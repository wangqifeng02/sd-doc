(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[9850],{79247:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return C}});var p=t(5574),c=t.n(p),s=t(71493),a=t(67294),d=t(85893);function C(){var B=(0,a.useState)(`# \u89D2\u8272
\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u6280\u80FD
1. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
2. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002
3. \u4F60\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002


# \u4EFB\u52A1
\u6839\u636E\u8F93\u5165\u7684Prompt\u6A21\u677F\uFF0C\u751F\u6210\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002

# \u8F93\u5165
- Prompt\u6A21\u677F\uFF1A\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684Prompt\u7F16\u5199\u5DE5\u7A0B\u5E08\uFF0C\u64C5\u957F\u7F16\u5199\u5404\u79CD\u7C7B\u578B\u7684Prompt\u3002

# \u8F93\u51FA
- Prompt\uFF1A\u7B26\u5408\u8981\u6C42\u7684Prompt\u3002`),v=c()(B,2),x=v[0],E=v[1];return(0,d.jsx)(s.Z,{tipsText:!1,value:x,onChange:E,maxLength:5e3,variables:[{code:"city"},{code:"foo"},{code:"user"}]})}},71493:function(e,o,t){"use strict";t.d(o,{Z:function(){return ut}});var p=t(9783),c=t.n(p),s=t(19632),a=t.n(s),d=t(5574),C=t.n(d),B=t(68400),v=t.n(B),x=t(15664),E=t(48825),A=t(17089),U=t(89580),Z=t(55839),z=t(9361),V=t(30122),K=t(93967),$=t.n(K),g=t(67294),H=t(12444),D=t.n(H),G=t(72004),M=t.n(G),J=t(31996),Y=t.n(J),Q=t(26037),X=t.n(Q),h=t(75533),k=function(l){Y()(n,l);var r=X()(n);function n(u){var i;return D()(this,n),i=r.call(this),i.name=u,i}return M()(n,[{key:"eq",value:function(i){return i.name==this.name}},{key:"toDOM",value:function(){var i=document.createElement("span");return i.setAttribute("aria-hidden","true"),i.className="cm-prompt-var",i.textContent="${".concat(this.name,"}"),i}},{key:"ignoreEvent",value:function(){return!1}}]),n}(h.l9),S=new h.Y1({regexp:/\$\{(\w+)\}/g,decoration:function(r){return h.p.replace({widget:new k(r[1])})}}),w=h.lg.fromClass(function(){function l(r){D()(this,l),c()(this,"placeholders",void 0),this.placeholders=S.createDeco(r)}return M()(l,[{key:"update",value:function(n){this.placeholders=S.updateDeco(n,this.placeholders)}}]),l}(),{decorations:function(r){return r.placeholders},provide:function(r){return h.tk.atomicRanges.of(function(n){var u;return((u=n.plugin(r))===null||u===void 0?void 0:u.placeholders)||h.p.none})}}),_=[w],q=t(97857),R=t.n(q),tt=t(34790);function et(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=r.onCreate,u=r.createBtnText;return(0,tt.ys)({override:[function(i){var f=i.matchBefore(/\/(\w+)?/);return!f||f&&f.from==f.to&&!i.explicit?null:{from:f==null?void 0:f.from,options:(n?[].concat(a()(l),[{label:"/NEW_VAR",boost:-99}]):l).map(function(y){return R()(R()({},y),{},{displayLabel:y.label==="/NEW_VAR"?u:y.label.slice(1),apply:function(F,P,O,b){if(P.label==="/NEW_VAR")return F.dispatch({changes:{from:O,to:b,insert:""}}),n==null?void 0:n();var j=P.label.slice(1),T="${".concat(j,"}");F.dispatch({changes:{from:O,to:b,insert:T}})}})})}}]})}var m=t(85893),N,I,nt=(0,V.kc)(function(l){var r=l.css,n=l.token;return{onCreate:r(N||(N=v()([`
    .cm-tooltip li:last-of-type {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      border-top: 1px solid `,`;
      border-radius: 0 !important;
      background-color: `,` !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .cm-tooltip ul {
      margin-bottom: 40px !important;
    }

    .cm-tooltip li:first-of-type {
      border-top: none !important;
    }
  `])),n.colorBorderSecondary,n.colorBgContainer),cm:r(I||(I=v()([`
    .cm-line {
      color: `,`;
    }
    .cm-line span {
      color: `,`;
    }

    .cm-editor {
      position: absolute !important;
      background-color: transparent !important;

      top: 0;
      left: 8px;
      right: 0;
      bottom: 30px;
    }
    .cm-focused {
      outline: none;
    }

    .cm-content {
      width: 100%;
      padding: 8px 0;
      white-space: break-spaces;
    }

    .cm-line {
      line-height: 24px;
      height: auto !important;
    }

    .cm-prompt-var {
      font-size: inherit;
      color: `,` !important;
      background-color: `,` !important;
      line-height: 1.7;
      font-weight: 500;
      margin: 0 2px;
      height: 24px;
      display: inline-flex;
      padding: 0 4px;
      border-radius: 4px;
    }

    .cm-tooltip {
      position: relative;
      background-color: `,`;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 3px 12px 0px rgba(47, 49, 51, 0.12);
    }

    .cm-tooltip ul {
      max-height: 17em !important;
      display: flex;
      flex-direction: column;
    }

    .cm-tooltip li {
      margin: 4px 8px;
      height: 32px;
      padding: 0 12px !important;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
    }

    .cm-tooltip-autocomplete ul li[aria-selected] {
      border-radius: 6px;
      font-weight: 600;
      color: `,`;
      background-color: `,`;
    }

    .cm-completionInfo-right {
      display: none;
    }

    .cm-completionIcon {
      display: none;
    }
  `])),n.colorTextSecondary,n.colorBlue,n.colorPurple,n.colorPurpleBg,n.colorBgContainer,n.colorText,n.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:n.colorBgBase,border:"1px solid ".concat(n.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:n.colorTextTertiary,backgroundColor:n.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),rt={markdown:[(0,E.JH)()]},ot=[],at=function(r){var n=nt(),u=n.styles,i=r.variables||ot,f=(0,g.useState)(!1),y=C()(f,2),L=y[0],F=y[1],P=r.onCreate,O=g.useContext(Z.ZP.ConfigContext),b=O.theme.algorithm===z.Z.darkAlgorithm,j=r.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",T=(0,g.useMemo)(function(){return b?A.Pc:A.Zp},[b]),it=(0,g.useMemo)(function(){return[].concat(a()(rt.markdown),a()(_),[et(a()(i).map(function(W){return{label:"/".concat(W.code),info:W.label}})||[],{onCreate:P,createBtnText:j})])},[i]);(0,g.useEffect)(function(){return F(!0),function(){F(!1)}},[]);var st=g.useMemo(function(){return r.tipsText===!1?(0,m.jsx)("div",{className:u.tips}):r.tipsText?r.tipsText:(0,m.jsxs)("div",{className:u.tips,children:['\u8F93\u5165"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,m.jsx)(x.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[r.tipsText]);return L?(0,m.jsxs)("div",{className:u.root,children:[(0,m.jsx)(U.ZP,{className:$()(u.cm,c()({},u.onCreate,P)),extensions:it,value:r.value,theme:T,lang:"markdown",onChange:r.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},T),(0,m.jsxs)("div",{className:u.footer,children:[st,r.maxLength?(0,m.jsxs)("div",{children:[r.value.length,"/",r.maxLength]}):null]})]}):null},ut=(0,g.memo)(at)},25098:function(e){function o(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},26037:function(e,o,t){var p=t(48374),c=t(21771),s=t(73408);function a(d){var C=c();return function(){var v=p(d),x;if(C){var E=p(this).constructor;x=Reflect.construct(v,arguments,E)}else x=v.apply(this,arguments);return s(this,x)}}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},48374:function(e){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(c){return c.__proto__||Object.getPrototypeOf(c)},e.exports.__esModule=!0,e.exports.default=e.exports,o(t)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},31996:function(e,o,t){var p=t(21314);function c(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&p(s,a)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},21771:function(e){function o(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},73408:function(e,o,t){var p=t(52677).default,c=t(25098);function s(a,d){if(d&&(p(d)==="object"||typeof d=="function"))return d;if(d!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return c(a)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},21314:function(e){function o(t,p){return e.exports=o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,a){return s.__proto__=a,s},e.exports.__esModule=!0,e.exports.default=e.exports,o(t,p)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
