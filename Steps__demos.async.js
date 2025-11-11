"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4248],{28114:function(h,r,e){e.r(r);var c=e(5574),i=e.n(c),f=e(89806),l=e(67294),a=e(85893),d=function(){var p=(0,l.useState)(0),s=i()(p,2),o=s[0],g=s[1],t=function(u){console.log("onChange:",u),g(u)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(f.Z,{current:o,onChange:t,items:[{title:"A Step"},{title:"B Step"}]})})};r.default=d},95699:function(h,r,e){e.r(r);var c=e(5574),i=e.n(c),f=e(89806),l=e(67294),a=e(85893),d=function(){var p=(0,l.useState)(0),s=i()(p,2),o=s[0],g=s[1],t=function(n){console.log("onChange:",n),g(n)},m="This is a description.";return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(f.Z,{current:o,onChange:t,items:[{title:"A Step",description:m},{title:"B Step",description:m}]})})};r.default=d},68785:function(h,r,e){e.r(r);var c=e(5574),i=e.n(c),f=e(89806),l=e(67294),a=e(85893),d=function(){var p=(0,l.useState)(0),s=i()(p,2),o=s[0],g=s[1],t=function(u){console.log("onChange:",u),g(u)};return(0,a.jsx)("div",{style:{width:"50%"},children:(0,a.jsx)(f.Z,{current:o,onChange:t,direction:"vertical",items:[{title:"A Step"},{title:"B Step"}]})})};r.default=d},89806:function(h,r,e){e.d(r,{Z:function(){return u}});var c=e(97857),i=e.n(c),f=e(93865),l=e(97634),a=e(42119),d=e(67294),P=e(68400),p=e.n(P),s=e(3067),o,g=(0,s.Z)(o||(o=p()([`
.`,`-steps {
  .`,`-steps-item-container {
    display: flex;
    flex-direction: row;
  }
  
  .`,"-steps-item:not(.","-steps-item-active):not(.",`-steps-item-process) {
    .`,`-steps-item-container {
      &:hover {
        .`,`-steps-item-icon {
          border-color: transparent !important;
        }
      }
    }
  }
  
  .`,`-steps-item-icon {
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--`,`-color-border-secondary);
  }
  
  .`,`-steps-item-finish {
    .`,`-steps-item-icon {
      height: 20px !important;
    }
    
    .`,`-steps-icon {
      max-width: 20px;
      max-height: 20px;
      font-size: 16px !important;
      line-height: 20px !important;
      top: -0.5px !important;
      
      .`,`-finish-icon {
        background-color: var(--`,`-color-primary-bg);
        border-radius: 50%;
        font-size: 16px !important;
        width: 20px;
        height: 20px;
        color: var(--`,`-color-primary);
      }
    }
  }
  
  .`,`-steps-item-title {
    padding-inline-end: 8px;
    line-height: 20px;
    color: var(--`,`-color-text) !important;
    font-size: 14px;
    font-weight: 500;
    
    &::after {
      background-color: var(--`,`-color-border-secondary) !important;
      height: 1px;
      background: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-steps-item-description {
    font-size: 12px;
    line-height: 20px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-steps-item-wait {
    .`,`-steps-item-icon {
      background-color: var(--`,`-color-primary-bg);
    }
  }
  
  &.`,"-steps-horizontal:not(.",`-steps-label-vertical) {
    .`,`-steps-item {
      padding-inline-start: 8px;
    }
  }
}

.`,`-steps-vertical {
  display: flex;
  min-height: 182px;
  align-items: center;
  justify-content: center;
  
  .`,`-steps-item {
    .`,`-steps-item-icon {
      margin-inline-end: 9px !important;
    }
  }
  
  .`,`-steps-item-tail::after {
    width: 1px !important;
    background-color: var(--`,`-color-border-secondary) !important;
  }
}
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),t=e(85893),m=function(_){var j=(0,f.getCommonConfig)(),E=j.sparkPrefix,M=g(),O=(0,d.useMemo)(function(){if(_.items)return _.items.map(function(v,C){var x=v.status;return!x&&_.current!==void 0&&(C<_.current?x="finish":C===_.current?x="process":x="wait"),x==="finish"?i()(i()({},v),{},{icon:(0,t.jsx)(l.Z,{className:"".concat(E,"-finish-icon")})}):v})},[_.items,_.current]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M,{}),(0,t.jsx)(a.Z,i()(i()({},_),{},{items:O,className:"".concat(E,"-steps")}))]})},u=m}}]);
