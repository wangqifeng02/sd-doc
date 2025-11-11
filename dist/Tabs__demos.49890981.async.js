"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[2066],{24505:function(x,a,e){e.r(a);var r=e(91268),s=e(67294),t=e(85893),i=function(u){console.log(u)},d=[{key:"1",label:"Tab 1",children:""},{key:"2",label:"Tab 2",children:""}],c=function(){return(0,t.jsx)(r.Z,{defaultActiveKey:"1",items:d,onChange:i,type:"segmented"})};a.default=c},56713:function(x,a,e){e.r(a);var r=e(91268),s=e(67294),t=e(85893),i=function(v){console.log(v)},d=[{key:"1",label:"Tab LG",children:""},{key:"2",label:"Tab LG",children:""}],c=[{key:"1",label:"Tab MD",children:""},{key:"2",label:"Tab MD",children:""}],f=function(){return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"32px"},children:[(0,t.jsx)(r.Z,{defaultActiveKey:"1",items:d,onChange:i,type:"segmented",centered:!0,size:"large"}),(0,t.jsx)(r.Z,{defaultActiveKey:"1",items:c,onChange:i,type:"segmented",centered:!0,size:"middle"})]})};a.default=f},60005:function(x,a,e){e.r(a);var r=e(91268),s=e(67294),t=e(85893),i=function(v){console.log(v)},d=[{key:"1",label:"Tab LG",children:""},{key:"2",label:"Tab LG",children:""}],c=[{key:"1",label:"Tab MD",children:""},{key:"2",label:"Tab MD",children:""}],f=function(){return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"32px",alignItems:"center"},children:[(0,t.jsx)(r.Z,{defaultActiveKey:"1",items:d,onChange:i,size:"large",type:"line"}),(0,t.jsx)(r.Z,{defaultActiveKey:"1",items:c,onChange:i,size:"middle",type:"line"})]})};a.default=f},91268:function(x,a,e){e.d(a,{Z:function(){return R}});var r=e(97857),s=e.n(r),t=e(9783),i=e.n(t),d=e(5574),c=e.n(d),f=e(13769),u=e.n(f),v=e(93865),p=e(27848),P=e(44254),K=e(92783),O=e(93967),L=e.n(O),Z=e(68400),B=e.n(Z),W=e(3067),C,I=(0,W.Z)(C||(C=B()([`
.`,`-tabs {
  .`,"-tabs-tab.","-tabs-tab-active .",`-tabs-tab-btn {
    color: var(--`,`-color-text);
    font-weight: 500;
  }
  
  .`,"-tabs-tab .",`-tabs-tab-btn {
    color: var(--`,`-color-text);
    font-weight: 400;
  }
  
  .`,`-tabs-ink-bar {
    background: var(--`,`-color-primary);
  }
}

.`,`-tabs-nav::before {
  display: none !important;
}

.`,`-segmented-item {
  &::after {
    background: none !important;
    opacity: 1 !important;
  }
  
  .`,`-segmented-item-label {
    font-weight: 500;
    color: var(--`,`-color-text);
  }
}

.`,`-segmented-tab-bar {
  margin-bottom: 16px;
  background: var(--`,`-color-fill-tertiary);
  align-self: baseline;
  
  &.`,`-segmented-tab-bar-centered {
    align-self: center;
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix}),l=e(85893),S=["type","centered"],T=function(o){var E=o.type,U=o.centered,g=u()(o,S),z=(0,v.getCommonConfig)(),M=z.sparkPrefix,G=(0,p.Z)(function(){var m;return(m=g.items[0])===null||m===void 0?void 0:m.key},{value:g.activeKey,defaultValue:g.defaultActiveKey}),A=c()(G,2),$=A[0],F=A[1],D=I();return E==="segmented"?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{}),(0,l.jsx)(P.Z,s()(s()({animated:!1},g),{},{activeKey:$,renderTabBar:function(N){var b,V=((b=o.items)===null||b===void 0?void 0:b.map(function(y){return{label:y.label,value:y.key,disabled:y.disabled}}))||[];return(0,l.jsx)(K.Z,{options:V,onChange:function(j){var h;F(j),(h=o.onChange)===null||h===void 0||h.call(o,j)},className:L()("".concat(M,"-segmented-tab-bar"),i()({},"".concat(M,"-segmented-tab-bar-centered"),U)),value:N.activeKey,size:o.size})}}))]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{}),(0,l.jsx)(P.Z,s()(s()({},o),{},{type:E}))]})};T.TabPane=P.Z.TabPane;var R=T}}]);
