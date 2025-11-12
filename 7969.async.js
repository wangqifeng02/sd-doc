"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7969],{60218:function(on,Z,n){n.r(Z),n.d(Z,{useStyle:function(){return M}});var W=n(68400),v=n.n(W),k=n(3067),b,M=(0,k.Z)(b||(b=v()([`
.`,`-alert-dialog {
  .`,`-modal-body {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-content {
    padding: 0 0 12px 32px;
    font-size: 14px;
    color: var(--`,`-color-text-secondary);
  }

  .`,`-modal-confirm-paragraph {
    max-width: 100%;
  }
}
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix})},37339:function(on,Z,n){n.r(Z);var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(23048),l=n(33495),C=n(52565),S=n(96406),P=n(55595),B=n(86250),T=n(85576),p=n(93967),x=n.n(p),F=n(93865),r=n(60218),f=n(85893),d=["children","type","danger","title","width","className"],u=function(m){var h=function(sn){var _=sn.type,en=sn.title,mn=(0,F.getCommonConfig)(),xn=mn.antPrefix;switch(_){case"success":return(0,f.jsxs)(B.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,f.jsx)(l.Z,{style:{color:"var(--".concat(xn,"-color-success)"),fontSize:18,margin:"0 3px"}}),en]});case"warning":case"confirm":return(0,f.jsxs)(B.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,f.jsx)(C.Z,{style:{color:"var(--".concat(xn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),en]});case"info":return(0,f.jsxs)(B.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,f.jsx)(S.Z,{style:{color:"var(--".concat(xn,"-color-info)"),fontSize:18,margin:"0 3px"}}),en]});case"error":return(0,f.jsxs)(B.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,f.jsx)(P.Z,{style:{color:"var(--".concat(xn,"-color-error)"),fontSize:18,margin:"0 3px"}}),en]});default:return M.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},t=m.children,N=m.type,a=N===void 0?"info":N,O=m.danger,K=O===void 0?!1:O,V=m.title,G=m.width,E=G===void 0?400:G,R=m.className,X=R===void 0?"":R,ln=b()(m,d);return{width:E,transitionName:"",restProps:ln,closeIcon:null,title:h({type:a,title:V}),okButtonProps:{danger:a==="error"||a==="warning"||K},destroyOnClose:!0,className:x()(X,"animate-in","".concat((0,F.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:m.content||t,children:t}},s=function(m){var h=u(m),t=(0,r.useStyle)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t,{}),(0,f.jsx)(T.Z,v()(v()({width:h.width,transitionName:""},h.restProps),{},{closeIcon:null,title:h.title,okButtonProps:h.okButtonProps||{},destroyOnClose:h.destroyOnClose,className:h.className,children:h.content||h.children}))]})},y=["success","info","warning","error","confirm"];y.forEach(function(c){s[c]=function(m){var h=u(v()(v()({},m),{},{type:c}));function t(){var N=(0,r.useStyle)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(N,{}),h.content]})}return T.Z.confirm(v()(v()(v()({},h),h.restProps),{},{content:(0,f.jsx)(t,{}),icon:null}))}}),Z.default=s},15560:function(on,Z,n){n.d(Z,{Z:function(){return p}});var W=n(97857),v=n.n(W),k=n(36569),b=n(67294),M=n(68400),l=n.n(M),C=n(3067),S,P=(0,C.Z)(S||(S=l()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),B=n(85893),T=(0,b.forwardRef)(function(x,F){var r=P();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(r,{}),(0,B.jsx)(k.Z,v()({},x))]})}),p=T},34952:function(on,Z,n){n.d(Z,{Z:function(){return d}});var W=n(97857),v=n.n(W),k=n(5574),b=n.n(k),M=n(13769),l=n.n(M),C=n(68997),S=n(67294),P=n(68400),B=n.n(P),T=n(3067),p,x=(0,T.Z)(p||(p=B()([`
.`,`-avatar {
  cursor: default;
}
`])),function(u){return u.antPrefix}),F=n(85893),r=["children"],f=(0,S.forwardRef)(function(u,s){var y=x(),c=u.children,m=l()(u,r),h=(0,S.useState)(u.children),t=b()(h,2),N=t[0],a=t[1];return(0,S.useEffect)(function(){if(typeof c=="string"){a(c.slice(0,1));return}a(c)},[c]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(y,{}),(0,F.jsx)(C.Z,v()(v()({ref:s},m),{},{children:N}))]})}),d=f},21004:function(on,Z,n){n.d(Z,{Z:function(){return s}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(9838),l=n(68997),C=n(85418),S=n(85673),P=n(67294),B=n(93865),T=n(68400),p=n.n(T),x=n(3067),F,r=(0,x.Z)(F||(F=p()([`
.`,`-breadcrumb {
  cursor: default;
  
  .`,`-breadcrumb-link {
    cursor: pointer;
  }
  
  li:last-child {
    .`,`-breadcrumb-link {
      color: var(--`,`-color-text);
      display: flex;
      align-items: center;
    }
  }
  
  a {
    color: var(--`,`-color-text-secondary);
    height: auto;
    
    &:hover {
      background-color: transparent;
    }
  }
  
  .`,`-breadcrumb-separator {
    color: var(--`,`-color-text);
  }
  
  .`,`-breadcrumb-overlay-link {
    display: flex;
    align-items: center;
  }
  
  .`,`-breadcrumb-dropdown {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .`,`-avatar > img {
      width: 20px;
      height: 20px;
    }
  }
  
  .`,`-breadcrumb-item-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .`,`-breadcrumb-dropdown-title {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 100%;
    
    .`,`-breadcrumb-dropdown-icon {
      font-size: 16px !important;
    }
  }
  
  .`,`-breadcrumb-dropdown-overlay {
    display: flex;
    justify-content: center;
  }
}
`])),function(y){return y.sparkPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.antPrefix},function(y){return y.sparkPrefix},function(y){return y.antPrefix},function(y){return y.sparkPrefix},function(y){return y.sparkPrefix},function(y){return y.sparkPrefix},function(y){return y.sparkPrefix}),f=n(85893),d=["items"],u=function(c){var m=c.items,h=m===void 0?[]:m,t=b()(c,d),N=(0,B.getCommonConfig)(),a=N.sparkPrefix,O=r(),K=P.useMemo(function(){return h.map(function(V){var G=V.title,E=[];return V.iconUrl&&E.push((0,f.jsx)(l.Z,{size:20,src:V.iconUrl},"avatar")),V.dropdown?E.push((0,f.jsxs)("span",{className:"".concat(a,"-breadcrumb-dropdown-title"),children:[V.title,(0,f.jsx)(M.Z,{size:16})]},"title")):E.push((0,f.jsx)("span",{children:V.title},"title")),V.dropdown?G=(0,f.jsx)(C.Z,{menu:{items:V.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(a,"-breadcrumb-dropdown"),children:(0,f.jsx)("span",{children:E})}):(V.iconUrl||E.length>1)&&(G=(0,f.jsx)("span",{className:"".concat(a,"-breadcrumb-item-content"),children:E})),v()(v()({},V),{},{title:G})})},[h]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O,{}),(0,f.jsx)(S.Z,v()(v()({},t),{},{items:K,className:"".concat(a,"-breadcrumb ").concat(t.className||"")}))]})},s=u},48432:function(on,Z,n){n.d(Z,{Z:function(){return f}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(4393),C=n(93967),S=n.n(C),P=n(68400),B=n.n(P),T=n(3067),p,x=(0,T.Z)(p||(p=B()([`
.`,`-card {
  border-radius: 6px;
  background-color: var(--`,`-color-bg-base);
  border: 1px solid var(--`,`-color-border-secondary);
}

.`,`-card {
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  
  .`,`-card-body {
    padding: 0;
  }
  
  &:hover {
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  }
}

.`,`-card-wrapper {
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  gap: 4px;
  
  > *:only-child {
    gap: 0;
  }
  
  .`,`-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    /* \u4E2D\u6027\u8272/color-text */
    color: var(--`,`-color-text);
  }
  
  .`,`-info {
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color: var(--`,`-color-text-tertiary);
  }
}
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix}),F=n(85893),r=["title","info","children","className"],f=function(d){var u=d.title,s=d.info,y=d.children,c=d.className,m=b()(d,r),h=x(),t=(0,M.getCommonConfig)(),N=t.sparkPrefix;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h,{}),(0,F.jsx)(l.Z,v()(v()({className:S()("".concat(N,"-card"),c)},m),{},{title:null,children:(0,F.jsxs)("div",{className:"".concat(N,"-card-wrapper"),children:[u&&(0,F.jsx)("div",{className:"".concat(N,"-title"),children:u}),s&&(0,F.jsx)("div",{className:"".concat(N,"-info"),children:s}),y&&(0,F.jsx)("div",{className:"".concat(N,"-content"),children:y})]})}))]})}},34304:function(on,Z,n){n.d(Z,{Z:function(){return f}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(84567),l=n(67294),C=n(93865),S=n(68400),P=n.n(S),B=n(3067),T,p=(0,B.Z)(T||(T=P()([`
.`,`-checkbox {
  .`,`-checkbox-wrapper-disabled {
    .`,`-checkbox-label {
      color: var(--`,`-color-text);
    }
  }
  
  .`,`-checkbox-inner {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-checkbox-wrapper:hover {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-border-secondary);
    }
  }
  
  .`,`-checkbox-checked {
    .`,`-checkbox-inner {
      border-color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary);
    }
  }
  
  .`,"-checkbox-checked.",`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-disable);
      border-color: var(--`,`-color-fill-disable);
      
      &::after {
        border-color: var(--`,`-color-text-white);
      }
    }
  }
  
  .`,`-checkbox-disabled {
    .`,`-checkbox-inner {
      background-color: var(--`,`-color-fill-secondary);
      border-color: var(--`,`-color-fill-secondary);
    }
  }
}
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),x=n(85893),F=["description","descriptionClassName","descriptionStyle","children"],r=function(u){var s=u.description,y=u.descriptionClassName,c=u.descriptionStyle,m=u.children,h=b()(u,F),t=(0,C.getCommonConfig)(),N=t.antPrefix,a=t.sparkPrefix,O=p(),K={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(N,"-color-text-tertiary)")};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(O,{}),(0,x.jsxs)("div",{className:"".concat(a,"-checkbox"),children:[(0,x.jsx)(M.Z,v()(v()({},h),{},{children:m})),s&&(0,x.jsx)("div",{className:y,style:v()(v()({},K),c),children:s})]})]})};r.Group=M.Z.Group;var f=r},43158:function(on,Z,n){n.d(Z,{ZP:function(){return sn},xO:function(){return R}});var W=n(97857),v=n.n(W),k=n(19632),b=n.n(k),M=n(93865),l=n(31639),C=n(48120),S=n(4997),P=n(82261),B=n(60310),T=n(122),p=n(9155),x=n(48825),F=n(12386),r=n(33236),f=n(62391),d=n(28519),u=n(17089),s=n(89580),y=n(55839),c=n(9361),m=n(93967),h=n.n(m),t=n(16295),N=n(67294),a=n(68400),O=n.n(a),K=n(3067),V,G=(0,K.Z)(V||(V=O()([`
.`,`-code-block {
  width: 100%;
}

.cm-theme {
  border: none !important;
  border-radius: 0 !important;
}

.cm-gutters {
  border-right: none !important;
  background-color: var(--`,`-color-bg-base) !important;
}

.cm-editor {
  background-color: var(--`,`-color-bg-base) !important;
}

.cm-gutterElement:not(:first-child) {
  color: var(--`,`-color-text-tertiary);
  height: 24px !important;
  line-height: 24px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span:not([title*="Unfold line"]) {
    height: 30px !important;
  }
}

.cm-line {
  height: 24px !important;
  line-height: 24px !important;
}

.cm-lineNumbers .cm-gutterElement {
  padding: 0px 4px 0px 12px !important;
}

.cm-activeLine,
.cm-activeLineGutter {
  background-color: var(--`,`-color-fill-secondary) !important;
}

.cm-button {
  background-image: none !important;
  background: var(--`,`-color-bg-base) !important;
  border: 1px solid var(--`,`-color-border-secondary) !important;
  border-radius: 4px !important;
  
  &:hover {
    color: var(--`,`-color-text-secondary);
    cursor: pointer;
  }
}

.cm-search {
  background: var(--`,`-color-fill-secondary) !important;
}

.cm-panel.cm-search label {
  display: inline-flex;
  align-items: center;
}

.cm-panel.cm-search [name=close] {
  right: 8px !important;
  background: none !important;
  font-size: 16px !important;
  color: var(--`,`-color-text-tertiary) !important;
}

.cm-textfield {
  border-radius: 4px;
}

.cm-panel.cm-search input[type=checkbox] {
  border: 1px solid var(--`,`-color-border-secondary) !important;
}

.cm-focused {
  outline: none !important;
}
`])),function(_){return _.sparkPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix}),E=n(85893),R={javascript:[(0,T.eJ)()],jsx:[(0,T.eJ)()],python:[(0,r.Vs)()],json:[(0,p.AV)()],java:[(0,B.C)()],yaml:[(0,f.rV)()],php:[(0,F.h)()],go:[(0,S.go)()],csharp:[(0,l.N)()],css:[(0,C.iv)()],html:[(0,P.dy)()],curl:[],markdown:[(0,x.JH)()]},X={javascript:[(0,d.Q2)()],json:[(0,d.Q2)(),(0,d.ir)((0,p.ap)())]},ln=function(){var en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",mn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,xn=en;try{xn=JSON.stringify(JSON.parse(en),null,mn)}catch(jn){}return xn},dn=function(en){var mn,xn=(0,M.getCommonConfig)(),jn=N.useContext(y.ZP.ConfigContext),vn=((mn=jn.theme)===null||mn===void 0?void 0:mn.algorithm)===c.Z.darkAlgorithm,Nn=xn.sparkPrefix,pn=xn.antPrefix,rn=G(),tn=(0,N.useMemo)(function(){return en.theme===void 0?vn?u.Pc:u.Zp:en.theme==="dark"?u.Pc:u.Zp},[vn]),Cn=typeof en.language=="string"?[].concat(b()(R[en.language]||[]),b()(en.value&&en.language in X?X[en.language]:[])):en.language.reduce(function(yn,bn){return[].concat(b()(yn),[R[bn]])},[]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(rn,{}),(0,E.jsx)("div",{className:h()("".concat(Nn,"-code-block"),en.className),children:(0,E.jsx)(s.ZP,v()({extensions:Cn,value:en.language==="json"?ln(en.value):en.value,theme:tn},(0,t.Z)(en,["language","theme","extensions","value"])))})]})},sn=dn},81843:function(on,Z,n){n.d(Z,{Z:function(){return T}});var W=n(97857),v=n.n(W),k=n(47221),b=n(68400),M=n.n(b),l=n(3067),C,S=(0,l.Z)(C||(C=M()([`
.`,`-collapse {
  background-color: var(--`,`-color-fill-tertiary);
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius);
  
  .`,`-collapse-content {
    color: var(--`,`-color-text);
    background-color: var(--`,`-color-bg-base);
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
  
  & > .`,`-collapse-item {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
    
    & > .`,`-collapse-header {
      color: var(--`,`-color-text);
      font-weight: 500;
      line-height: 24px;
      align-items: center;
      
      .`,`-collapse-expand-icon {
        width: 32px;
        height: 32px;
        padding: 0;
        justify-content: center;
        margin-right: 8px;
      }
      
      .`,`-collapse-arrow {
        font-size: 15px;
      }
      
      .`,`-collapse-extra {
        height: 32px;
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
    }
  }
}
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),P=n(85893),B=function(x){var F=S();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{}),(0,P.jsx)(k.Z,v()({},x))]})},T=B},71615:function(on,Z,n){n.d(Z,{Z:function(){return y}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(5574),l=n.n(M),C=n(93865),S=n(9838),P=n(28387),B=n(93967),T=n.n(B),p=n(67294),x=n(68400),F=n.n(x),r=n(3067),f,d=(0,r.Z)(f||(f=F()([`
.`,`-collapse-panel {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--`,`-color-border-secondary);
  transition: all 0.3s ease;
  background-color: var(--`,`-color-bg-base);
  
  &.collapsible:not(.expanded) {
    cursor: pointer;
  }
  
  .`,`-collapse-panel-header {
    display: flex;
    justify-content: space-between;
    background: var(--`,`-color-fill-secondary);
    height: 32px;
    line-height: 32px;
    border-radius: 7px 7px 0 0;
    align-items: center;
    user-select: none;
    position: relative;
    cursor: pointer;
    padding: 0 12px;
    
    .collapsible:hover & {
      background: #f0f2f3;
    }
  }
  
  .`,`-collapse-panel-extra {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    float: right;
  }
  
  .`,`-collapse-panel-title {
    color: var(--`,`-color-text);
    font-size: 14px;
    display: flex;
  }
  
  .`,`-collapse-panel-icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
  }
  
  .`,`-collapse-panel-icon {
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  .`,`-collapse-panel-content {
    position: relative;
    border-radius: 0 0 6px 6px;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  .`,`-collapse-panel-contentWrapper {
    &.scrollable {
      height: 100%;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--`,`-color-fill) transparent;
      
      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: var(--`,`-color-fill);
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background-color: var(--`,`-color-fill);
      }
    }
  }
  
  .`,`-collapse-panel-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      var(--`,`-color-bg-base) 100%
    );
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  .`,`-collapse-panel-expanded {
    .`,`-collapse-panel-mask {
      opacity: 0;
    }
  }
}
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix}),u=n(85893),s=function(m){var h,t,N,a,O,K,V=m.collapsedHeight,G=m.expandedHeight,E=m.title,R=E===void 0?"":E,X=m.expandOnPanelClick,ln=m.extra,dn=m.children,sn=m.defaultExpanded,_=(0,p.useState)(sn),en=l()(_,2),mn=en[0],xn=en[1],jn=(0,p.useState)(!0),vn=l()(jn,2),Nn=vn[0],pn=vn[1],rn=(0,p.useState)(V),tn=l()(rn,2),Cn=tn[0],yn=tn[1],bn=(0,p.useRef)(null),Wn=(0,C.getCommonConfig)(),Dn=Wn.sparkPrefix,Mn=Wn.antPrefix,w=d();(0,p.useEffect)(function(){bn.current&&yn(mn&&G?G:mn?bn.current.scrollHeight:V)},[mn,V,G,dn]);var Un=function(Y){Y.stopPropagation(),Y.preventDefault(),xn(function(Yn){return!Yn})},gn=function(Y){Y.stopPropagation(),Y.preventDefault(),G&&(mn||xn(!0))},hn=function(){pn(!0)},zn=function(){pn(!0)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,{}),(0,u.jsxs)("div",{className:T()("".concat(Dn,"-collapse-panel"),{collapsible:!mn&&X},(h=m.classNames)===null||h===void 0?void 0:h.wrapper),style:(t=m.styles)===null||t===void 0?void 0:t.wrapper,onClick:X?gn:void 0,onMouseEnter:X?hn:void 0,onMouseLeave:X?zn:void 0,children:[(0,u.jsxs)("div",{className:T()("".concat(Dn,"-collapse-panel-header"),(N=m.classNames)===null||N===void 0?void 0:N.header),style:(a=m.styles)===null||a===void 0?void 0:a.header,onClick:Un,children:[(0,u.jsxs)("span",{className:"".concat(Dn,"-collapse-panel-title"),children:[R,G&&(0,u.jsxs)("div",{className:"".concat(Dn,"-collapse-panel-icon-wrapper"),children:[!mn&&Nn&&X&&(0,u.jsx)(S.Z,{style:{fontSize:"18px"}}),mn&&Nn&&X&&(0,u.jsx)(P.Z,{style:{fontSize:"18px"}})]})]}),ln&&(0,u.jsx)("div",{className:"".concat(Dn,"-collapse-panel-extra"),onClick:function(Y){Y.stopPropagation(),Y.preventDefault()},children:ln})]}),(0,u.jsxs)("div",{className:T()("".concat(Dn,"-collapse-panel-content"),b()({},"".concat(Dn,"-collapse-panel-expanded"),mn),(O=m.classNames)===null||O===void 0?void 0:O.content),style:v()({height:Cn},(K=m.styles)===null||K===void 0?void 0:K.content),children:[(0,u.jsx)("div",{ref:bn,className:"".concat("".concat(Dn,"-collapse-panel-contentWrapper")," ",mn&&G?"scrollable":""),children:dn}),!mn&&G&&(0,u.jsx)("div",{className:"".concat(Dn,"-collapse-panel-mask")})]})]})]})},y=s},8732:function(on,Z,n){n.d(Z,{Z:function(){return h}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(95706),C=n(9361),S=n(55839),P=n(72912),B=n(93967),T=n.n(B),p=n(67294),x=n(68400),F=n.n(x),r=n(3067),f,d=(0,r.Z)(f||(f=F()([`
.`,`-picker {
  border-color: var(--`,`-color-border-secondary);
  background-color: var(--`,`-color-bg-base);
  
  &.`,`-picker-disabled {
    color: var(--`,`-color-text-quaternary);
    border-color: var(--`,`-color-border-secondary) !important;
    background-color: var(--`,`-color-fill-tertiary) !important;
    cursor: not-allowed;
    
    .`,`-picker-suffix {
      color: var(--`,`-color-text-quaternary) !important;
    }
  }
  
  .`,`-picker-suffix {
    margin-left: 8px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-picker-clear {
    margin-right: 3px;
  }
  
  .`,`-picker-range-separator {
    display: flex;
    
    .`,`-picker-separator {
      width: 8px;
      height: 1px;
      background: var(--`,`-color-text-tertiary);
      
      .anticon {
        display: none;
      }
    }
  }
}

.`,`-picker-dropdown {
  .`,`-picker-panel-container {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-picker-range-arrow {
    display: none !important;
  }
  
  .`,"-picker-time-panel-column > li.",`-picker-time-panel-cell-selected {
    .`,`-picker-time-panel-cell-inner {
      background: var(--`,`-color-primary-bg);
    }
  }
  
  .`,`-picker-now-btn {
    color: var(--`,`-color-primary);
  }
}

.`,`-picker-selection-item {
  border-radius: 4px;
  background-color: var(--`,`-color-mauve-bg) !important;
}

.`,`-picker-selection-item-content {
  color: var(--`,`-color-mauve);
}

.`,`-picker-selection-item-remove {
  .anticon-close {
    font-size: 14px;
    color: var(--`,`-color-mauve);
  }
}
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),u=n(85893),s=["className","popupClassName"],y=["className","popupClassName"],c=function(N){var a=N.className,O=N.popupClassName,K=b()(N,s),V=C.Z.useToken(),G=V.token,E=(0,M.getCommonConfig)(),R=E.sparkPrefix,X=d();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary,paddingInline:8}}},children:(0,u.jsx)(P.default,v()({suffixIcon:(0,u.jsx)(l.Z,{style:{fontSize:"20px"}}),className:T()("".concat(R,"-picker"),a),popupClassName:T()("".concat(R,"-picker-dropdown"),O)},K))})]})},m=function(N){var a=N.className,O=N.popupClassName,K=b()(N,y),V=C.Z.useToken(),G=V.token,E=(0,M.getCommonConfig)(),R=E.sparkPrefix,X=d();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary,paddingInline:8}}},children:(0,u.jsx)(P.default.RangePicker,v()({suffixIcon:(0,u.jsx)(l.Z,{style:{fontSize:"20px"}}),className:T()("".concat(R,"-picker"),a),popupClassName:T()("".concat(R,"-picker-dropdown"),O),popupStyle:{padding:0}},K))})]})};c.RangePicker=m;var h=c},69065:function(on,Z,n){n.d(Z,{Z:function(){return y}});var W=n(9783),v=n.n(W),k=n(97857),b=n.n(k),M=n(13769),l=n.n(M),C=n(93865),S=n(9361),P=n(26412),B=n(93967),T=n.n(B),p=n(68400),x=n.n(p),F=n(3067),r,f=(0,F.Z)(r||(r=x()([`
.`,`-descriptions {
  .`,`-descriptions-item-label {
    color: var(--`,`-color-text-tertiary);
  }
  
  .`,`-descriptions-item-content {
    color: var(--`,`-color-text);
  }
  
  .`,`-descriptions-item-label,
  .`,`-descriptions-item-content {
    line-height: 24px;
  }
}

.`,`-descriptions-vertical {
  .`,"-descriptions-item:has(.",`-descriptions-item-label) {
    padding-bottom: var(--`,`-descriptions-vertical-label-padding-bottom);
  }
  
  .`,"-descriptions-item:has(.",`-descriptions-item-content) {
    padding-bottom: var(--`,`-descriptions-vertical-content-padding-bottom);
  }
}
`])),function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),d=n(85893),u=["className","layout","colon","style"],s=function(m){var h,t,N=f(),a=m.className,O=m.layout,K=m.colon,V=K===void 0?!1:K,G=m.style,E=l()(m,u),R=(0,C.getCommonConfig)(),X=R.antPrefix,ln=S.Z.useToken(),dn=ln.token;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{}),(0,d.jsx)(P.Z,b()({className:T()(a,O==="vertical"&&"".concat(X,"-descriptions-vertical")),layout:O,colon:V,style:b()(v()(v()({},"--".concat(X,"-descriptions-vertical-label-padding-bottom"),"".concat((h=dn.Descriptions.verticalLabelPaddingBottom)!==null&&h!==void 0?h:4,"px")),"--".concat(X,"-descriptions-vertical-content-padding-bottom"),"".concat((t=dn.Descriptions.verticalContentPaddingBottom)!==null&&t!==void 0?t:24,"px")),G)},E))]})},y=s},11765:function(on,Z,n){n.d(Z,{Z:function(){return N}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(13769),l=n.n(M),C=n(93865),S=n(89102),P=n(85265),B=n(93967),T=n.n(B),p=n(57027),x=n(67294),F=n(68400),r=n.n(F),f=n(3067),d,u=(0,f.Z)(d||(d=r()([`
.`,`-drawer {
  .`,`-drawer-header {
    padding: 16px 20px;
    border-bottom: none;
    
    .`,`-drawer-header-title {
      display: flex;
      flex-direction: row-reverse;
      
      .`,`-drawer-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        color: var(--`,`-color-text);
      }
      
      .`,`-drawer-close {
        width: 32px;
        height: 32px;
      }
    }
  }
  
  .`,`-drawer-body {
    --`,`-padding-lg: 20px;
  }
  
  .`,`-drawer-footer {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: none;
    
    .`,`-drawer-footer-info {
      font-size: 14px;
      line-height: 24px;
      color: var(--`,`-color-text-tertiary);
    }
    
    .`,`-drawer-footer-buttons {
      display: flex;
      gap: 12px;
    }
  }
  
  .`,`-drawer-close {
    color: var(--`,`-color-text);
    margin: 0;
  }
}

.`,"-drawer.",`-show-divider {
  .`,`-drawer-header {
    border-bottom: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-drawer-footer {
    border-top: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),s=n(85893),y=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],c=function(O){var K=O.onOk,V=O.onCancel,G=O.okText,E=G===void 0?"\u786E\u5B9A":G,R=O.okButtonProps,X=O.cancelText,ln=X===void 0?"\u53D6\u6D88":X,dn=O.cancelButtonProps,sn=O.info,_=O.footer,en=l()(O,y),mn=u(),xn=(0,C.getCommonConfig)(),jn=xn.antPrefix,vn=function(pn){if(V)V();else{var rn;(rn=en.onClose)===null||rn===void 0||rn.call(en,pn)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(mn,{}),(0,s.jsx)(N,v()(v()({},en),{},{footer:_||(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"".concat(jn,"-drawer-footer-info"),children:sn}),(0,s.jsxs)("div",{className:"".concat(jn,"-drawer-footer-buttons"),children:[(0,s.jsx)(p.Z,v()(v()({onClick:vn},dn),{},{children:ln})),(0,s.jsx)(p.Z,v()(v()({type:"primary",onClick:K},R),{},{children:E}))]})]})}))]})},m=c,h=["children","className","style","showDivider"],t=function(O){var K=O.children,V=O.className,G=O.style,E=O.showDivider,R=E===void 0?!0:E,X=l()(O,h),ln=u(),dn=(0,C.getCommonConfig)(),sn=dn.sparkPrefix,_=dn.antPrefix;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ln,{}),(0,s.jsx)(P.Z,v()(v()({closeIcon:(0,s.jsx)(S.Z,{size:24}),className:T()("".concat(sn,"-drawer"),V,b()({},"".concat(_,"-show-divider"),R)),style:v()({},G)},X),{},{children:K}))]})};Object.assign(t,{Confirm:m});var N=t},28299:function(on,Z,n){n.d(Z,{Z:function(){return F}});var W=n(97857),v=n.n(W),k=n(93865),b=n(97634),M=n(85418),l=n(67294),C=n(68400),S=n.n(C),P=n(3067),B,T=(0,P.Z)(B||(B=S()([`
.`,"-dropdown .","-dropdown-menu .",`-dropdown-menu-item-icon {
  font-size: var(--`,`-font-size-lg);
}

.`,`-dropdown-check-wrapper {
  display: flex;
  align-items: center;
  margin: 0;
  padding-inline-end: calc(var(--`,"-control-padding-horizontal) + var(--",`-font-size-sm));
}

.`,`-dropdown-check-icon {
  position: absolute;
  opacity: 0;
  font-size: 20px;
  inset-inline-end: var(--`,`-padding-xs);
}

.`,"-dropdown .","-dropdown-menu .","-dropdown-menu-item.",`-dropdown-menu-item-selected {
  background-color: transparent;
  
  .`,`-dropdown-check-icon {
    opacity: 1;
  }
}

.`,`-dropdown-menu-submenu-popup {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
  border-radius: var(--`,`-border-radius-lg);
  overflow-y: auto;
}

/*
.`,"-dropdown-menu .",`-dropdown-menu-submenu {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
}
*/
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),p=n(85893),x=function(f){var d,u,s=(0,k.getCommonConfig)(),y=s.antPrefix,c=(0,l.useMemo)(function(){var h;if(!((h=f.menu)!==null&&h!==void 0&&h.selectable)||!f.menu){var t;return((t=f.menu)===null||t===void 0?void 0:t.items)||[]}return f.menu.items.map(function(N){var a={},O=N.label;return O&&(a.label=(0,p.jsxs)("div",{className:"".concat(y,"-dropdown-check-wrapper"),children:[O,(0,p.jsx)("span",{className:"".concat(y,"-dropdown-check-icon"),children:(0,p.jsx)(b.Z,{})})]})),v()(v()({},N),a)})},[(d=f.menu)===null||d===void 0?void 0:d.items,(u=f.menu)===null||u===void 0?void 0:u.selectable]),m=T();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m,{}),(0,p.jsx)(M.Z,v()(v()({},f),{},{menu:v()(v()({},f.menu),{},{items:c}),overlayStyle:v()({},f.overlayStyle)}))]})},F=x},32151:function(on,Z,n){n.d(Z,{Z:function(){return N}});var W=n(52677),v=n.n(W),k=n(13769),b=n.n(k),M=n(97857),l=n.n(M),C=n(93865),S=n(96406),P=n(45387),B=n(78210),T=n(93967),p=n.n(T),x=n(67294),F=n(68400),r=n.n(F),f=n(3067),d,u=(0,f.Z)(d||(d=r()([`
.`,`-form {
  .`,`-required-mark {
    color: var(--`,`-color-error);
    line-height: 1;
    margin-top: 0;
    font-size: 16px;
  }
  
  .`,"-form-item .",`-form-item-label {
    text-align: left;
  }
}

.`,"-form-item .",`-form-item-label > label {
  font-weight: 500;
  white-space: normal;
  font-size: 13px;
  line-height: 20px;
  color: var(--`,`-color-text);
  gap: 4px;
}

.`,`-form-label-margin-small {
  .`,`-form-item-label > label {
    margin-right: 8px;
  }
}

.`,`-col {
  min-height: unset;
}
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),s=n(85893),y=["tooltip"],c=(0,x.forwardRef)(function(a,O){var K=a.labelMarginRight,V=K===void 0?void 0:K,G=(0,x.useRef)(null),E=(0,C.getCommonConfig)(),R=E.sparkPrefix,X=u();return(0,x.useImperativeHandle)(O,function(){return G.current}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(X,{}),(0,s.jsx)(P.Z,l()(l()({},a),{},{className:p()(a.className,"".concat(R,"-form"),V==="small"&&"".concat(R,"-form-label-margin-small")),ref:G,requiredMark:function(dn,sn){return(0,s.jsxs)(s.Fragment,{children:[dn,sn.required&&(0,s.jsx)("span",{className:"".concat(R,"-required-mark"),children:"*"})]})}}))]})}),m=function(O){var K=O.tooltip,V=b()(O,y),G=(0,s.jsx)(S.Z,{});function E(){if(K){var R=v()(K)==="object"&&!x.isValidElement(K)?l()(l()({},K),{},{icon:K.icon||G}):{title:K,icon:G};return R}}return(0,s.jsx)(P.Z.Item,l()(l()({},V),{},{tooltip:E(),labelCol:O.labelCol||(O.layout==="vertical"?{flex:"unset"}:void 0)}))},h=m;h.useStatus=B.Z.useStatus;var t=c;t.Item=h,t.List=P.Z.List,t.ErrorList=P.Z.ErrorList,t.Provider=P.Z.Provider,t.useForm=P.Z.useForm,t.useFormInstance=P.Z.useFormInstance,t.useWatch=P.Z.useWatch;var N=t},67985:function(on,Z,n){n.d(Z,{Z:function(){return u}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(38654),l=n(93865),C=n(57027),S=n(93967),P=n.n(S),B=n(67294),T=n(68400),p=n.n(T),x=n(3067),F,r=(0,x.Z)(F||(F=p()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),f=n(85893),d=["className","iconType","bordered"],u=function(s){var y=s.className,c=s.iconType,m=s.bordered,h=m===void 0?!0:m,t=b()(s,d),N=(0,l.getCommonConfig)(),a=N.iconfont,O=r(),K=(0,B.useMemo)(function(){return c?(0,f.jsx)(M.Z,{type:c,size:s.size}):typeof s.icon=="string"?(0,f.jsx)(M.Z,{type:s.icon,size:s.size}):s.icon},[s.icon,c,a]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O,{}),(0,f.jsx)(C.Z,v()(v()({className:P()(y,"".concat(N.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:h?"default":"text"},t),{},{icon:K}))]})}},15713:function(on,Z,n){n.d(Z,{Z:function(){return f}});var W=n(97857),v=n.n(W),k=n(23048),b=n(93865),M=n(43974),l=n(13811),C=n(67294),S=n(68400),P=n.n(S),B=n(3067),T,p=(0,B.Z)(T||(T=P()([`
.`,`-image {
  border-radius: var(--`,`-border-radius);
  overflow: hidden;
  
  .`,`-image-mask {
    background-color: var(--`,`-color-bg-mask);
    
    .`,`-image-mask-info {
      display: flex;
      align-items: center;
    }
    
    .`,`-image-mask-info-text {
      font-weight: 500;
      line-height: 24px;
    }
  }
}
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),x=n(85893),F=function(u){var s=p(),y=(0,b.getCommonConfig)(),c=y.antPrefix,m=(0,C.useMemo)(function(){var h={transitionName:""},t=u.preview;return t===!1?!1:t===!0?h:v()(v()({mask:(0,x.jsxs)("div",{className:"".concat(c,"-image-mask-info"),children:[(0,x.jsx)(M.Z,{className:"".concat(c,"-image-mask-info-icon")}),(0,x.jsx)("span",{className:"".concat(c,"-image-mask-info-text"),children:k.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},t),h)},[u.preview]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{}),(0,x.jsx)(l.Z,v()({preview:m},u))]})},r=F;r.PreviewGroup=l.Z.PreviewGroup;var f=r},86995:function(on,Z,n){n.d(Z,{Z:function(){return c}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(13769),l=n.n(M),C=n(93865),S=n(48045),P=n(93967),B=n.n(P),T=n(67294),p=n(68400),x=n.n(p),F=n(3067),r,f=(0,F.Z)(r||(r=x()([`
.`,`-input-outlined,
.`,"-input-outlined.",`-input-disabled,
.`,`-input-outlined[disabled] {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-outlined {
  background-color: var(--`,`-color-bg-base);
}

.`,`-input {
  font-weight: 400;
  border-radius: 6px;
  
  .`,`-input-show-count-suffix,
  .`,`-input-data-count-suffix {
    color: var(--`,`-color-text-tertiary);
  }
  
  &::placeholder {
    color: var(--`,`-color-text-tertiary);
  }
}

/* prefix\u95F4\u8DDD */
.`,`-input-affix-wrapper {
  .`,`-input-prefix {
    margin-inline-end: 8px;
    color: var(--`,`-color-text-tertiary);
  }
}

.`,"-input-affix-wrapper .",`-input-clear-icon {
  font-size: 15px;
}

.`,`-input-round {
  border-radius: 999px;
}

.`,`-text-area {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-sm {
  height: 24px;
  font-size: 12px;
}
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),d=n(85893),u=["shape"],s=T.forwardRef(function(m,h){var t=m.shape,N=t===void 0?"default":t,a=l()(m,u),O=(0,C.getCommonConfig)(),K=O.antPrefix,V=f();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(V,{}),(0,d.jsx)(S.Z,v()(v()({},a),{},{className:B()(m.className,b()({},"".concat(K,"-input-round"),N==="round")),ref:h}))]})}),y=T.forwardRef(function(m,h){var t=(0,C.getCommonConfig)(),N=t.antPrefix,a=f();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{}),(0,d.jsx)(S.Z.TextArea,v()(v()({},m),{},{className:B()("".concat(N,"-text-area"),m.className),ref:h}))]})});Object.assign(s,{TextArea:y,Search:S.Z.Search,Password:S.Z.Password,OTP:S.Z.OTP});var c=s},76561:function(on,Z,n){n.d(Z,{Z:function(){return y}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(13769),l=n.n(M),C=n(93865),S=n(24772),P=n(85576),B=n(93967),T=n.n(B),p=n(68400),x=n.n(p),F=n(3067),r,f=(0,F.Z)(r||(r=x()([`
.`,`-modal {
  .`,`-modal-title {
    min-height: 24px;
  }
  
  .`,`-modal-content {
    padding: 0;
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-modal-header {
      padding: 18px 20px;
      margin-bottom: 0;
      
      .`,`-modal-title {
        line-height: 28px;
        
        .`,`-modal-title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          
          .`,`-modal-title {
            flex: 1;
          }
          
          .`,`-modal-title-close {
            cursor: pointer;
          }
        }
      }
    }
    
    .`,`-modal-body {
      padding: 20px;
      color: var(--`,`-color-text-secondary);
    }
    
    .`,`-modal-footer {
      padding: 16px 20px;
      margin-top: 0;
      
      .`,`-modal-footer-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .`,`-modal-footer-info {
          font-size: 14px;
          font-weight: normal;
          line-height: 24px;
          color: var(--`,`-color-text-tertiary);
        }
        
        .`,`-modal-footer-origin-node {
          display: flex;
          gap: 12px;
        }
      }
    }
    
    .`,`-modal-close {
      width: 32px;
      height: 32px;
      top: 16px;
      right: 16px;
      
      .`,`-modal-close-icon {
        color: var(--`,`-color-text);
      }
      
      &:hover {
        background: none;
      }
    }
  }
}

.`,`-show-divider {
  .`,`-modal-content {
    .`,`-modal-header {
      border-bottom: 1px solid var(--`,`-color-border-secondary);
    }
    
    .`,`-modal-footer {
      border-top: 1px solid var(--`,`-color-border-secondary);
    }
  }
}
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),d=n(85893),u=["showDivider","closable"],s=function(m){var h=f(),t=(0,C.getCommonConfig)(),N=t.sparkPrefix,a=m.showDivider,O=a===void 0?!0:a,K=m.closable,V=K===void 0?!0:K,G=l()(m,u),E=function(dn){return m.info?(0,d.jsxs)("div",{className:"".concat(N,"-modal-footer-wrapper"),children:[(0,d.jsx)("span",{className:"".concat(N,"-modal-footer-info"),children:m.info}),(0,d.jsx)("div",{className:"".concat(N,"-modal-footer-origin-node"),children:dn})]}):dn},R=V?m.closeIcon||(0,d.jsx)(S.Z,{className:"".concat(N,"-modal-title-close"),onClick:function(dn){var sn;(sn=m.onCancel)===null||sn===void 0||sn.call(m,dn)}}):null,X=m.footer===void 0?E:m.footer;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(P.Z,v()(v()({},G),{},{closeIcon:null,title:(0,d.jsxs)("div",{className:"".concat(N,"-modal-title-wrapper"),children:[(0,d.jsx)("div",{className:"".concat(N,"-modal-title"),children:m.title}),R]}),wrapClassName:T()("".concat(N,"-modal"),b()({},"".concat(N,"-show-divider"),O),m.wrapClassName,"animate-in"),footer:X,transitionName:""}))]})};s.useModal=P.Z.useModal,s.success=P.Z.success,s.error=P.Z.error,s.warning=P.Z.warning,s.info=P.Z.info,s.confirm=P.Z.confirm,s.SMALL_WIDTH=640,s.MEDIUM_WIDTH=800,s.LARGE_WIDTH=960;var y=s},89887:function(on,Z,n){var W=n(5574),v=n.n(W),k=n(97857),b=n.n(k),M=n(93865),l=n(77900),C=n(29998),S=n(29368),P=n(61441),B=n(26855),T=n(85893),p=["success","warning","error","info"];function x(r,f){if(r==="success")return(0,T.jsx)(l.Z,{style:{color:"var(--".concat(f,"-color-success)"),fontSize:24}});if(r==="warning")return(0,T.jsx)(C.Z,{style:{color:"var(--".concat(f,"-color-warning)"),fontSize:24}});if(r==="info")return(0,T.jsx)(S.Z,{style:{color:"var(--".concat(f,"-color-info)"),fontSize:24}});if(r==="error")return(0,T.jsx)(P.Z,{style:{color:"var(--".concat(f,"-color-error)"),fontSize:24}})}var F={};F.destroy=B.ZP.destroy,F.open=function(r){var f=(0,M.getCommonConfig)(),d=f.sparkPrefix,u="".concat(d,"-notification");r.className&&(u+=" ".concat(r.className)),B.ZP.open(b()(b()({},r),{},{className:u}))},p.forEach(function(r){F[r]=function(f){var d=(0,M.getCommonConfig)(),u=d.sparkPrefix,s=d.antPrefix,y="".concat(u,"-notification");f.className&&(y+=" ".concat(f.className)),B.ZP[r](b()(b()({},f),{},{className:y,icon:x(r,s)}))}}),F.useNotification=function(r){var f=(0,M.getCommonConfig)(),d=f.sparkPrefix,u=f.antPrefix,s="".concat(d,"-notification"),y=B.ZP.useNotification(r),c=v()(y,2),m=c[0],h=c[1],t={};return p.forEach(function(N){t[N]=function(a){return m[N](b()(b()({},a),{},{className:s,icon:x(N,u)}))}}),t.open=function(N){B.ZP.open(b()(b()({},N),{},{className:s}))},t.destroy=m.destroy,[t,h]},Z.Z=F},94476:function(on,Z,n){n.d(Z,{Z:function(){return m}});var W=n(97857),v=n.n(W),k=n(52677),b=n.n(k),M=n(13769),l=n.n(M),C=n(93865),S=n(23048),P=n(54604),B=n(53033),T=n(52861),p=n(86250),x=n(72656),F=n(68400),r=n.n(F),f=n(3067),d,u=(0,f.Z)(d||(d=r()([`
.`,`-pagination {
  color: var(--`,`-color-text) !important;
  
  .`,`-pagination-total-text {
    font-weight: 500;
  }
  
  .`,`-select-selection-item {
    font-weight: 500;
  }
  
  .`,"-pagination-item-active.",`-pagination-item {
    border-color: var(--`,`-color-border-secondary);
    border-radius: 8px;
    
    a {
      color: var(--`,`-color-text) !important;
    }
  }
  
  a {
    color: var(--`,`-color-text) !important;
  }
  
  .`,`-pagination-jump-next {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .`,`-pagination-jump-prev {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`])),function(h){return h.sparkPrefix},function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),s=n(85893),y=["hideSwitchButton"],c={options:[{label:"10 ".concat(S.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:10},{label:"20 ".concat(S.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:20},{label:"50 ".concat(S.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:50},{label:"100 ".concat(S.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:100}]},m=function(h){var t=h.hideSwitchButton,N=t===void 0?!1:t,a=l()(h,y),O=(0,C.getCommonConfig)(),K=O.sparkPrefix,V=u(),G=function(){var ln=function(sn,_,en){return _==="jump-prev"||_==="jump-next"?(0,s.jsx)(P.Z,{className:"".concat(K,"-jump-next-icon")}):N||h.itemRender?en:_==="prev"?(0,s.jsx)("a",{children:(0,s.jsxs)(p.Z,{gap:8,children:[(0,s.jsx)(B.Z,{})," ",(0,s.jsx)("span",{children:S.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):_==="next"?(0,s.jsx)("a",{children:(0,s.jsxs)(p.Z,{gap:8,children:[(0,s.jsx)("span",{children:S.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,s.jsx)(T.Z,{})]})}):en};return ln},E;a.showSizeChanger!==null&&a.showSizeChanger!==void 0?E=a.showSizeChanger:E=a.total&&a.total>50;var R=function(){return h.showSizeChanger===!0?c:h.showSizeChanger===!1?!1:b()(h.showSizeChanger)==="object"&&h.showSizeChanger?h.showSizeChanger:a.total&&a.total>50?c:!1};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(V,{}),(0,s.jsx)(x.Z,v()(v()({itemRender:G()},a),{},{showSizeChanger:R(),className:"".concat(K,"-pagination")}))]})}},81930:function(on,Z,n){var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(52565),C=n(96406),S=n(55595),P=n(33495),B=n(86738),T=n(67294),p=n(85893),x=["icon","type","okButtonProps"],F=T.forwardRef(function(r,f){var d=r.icon,u=r.type,s=u===void 0?"confirm":u,y=r.okButtonProps,c=b()(r,x),m=(0,M.getCommonConfig)(),h=m.antPrefix,t=function(){return d||(s==="confirm"?(0,p.jsx)(l.Z,{style:{color:"var(--".concat(h,"-color-warning)")}}):s==="info"?(0,p.jsx)(C.Z,{style:{color:"var(--".concat(h,"-color-info)")}}):s==="warning"?(0,p.jsx)(l.Z,{style:{color:"var(--".concat(h,"-color-warning)")}}):s==="error"?(0,p.jsx)(S.Z,{style:{color:"var(--".concat(h,"-color-error)")}}):s==="success"?(0,p.jsx)(P.Z,{style:{color:"var(--".concat(h,"-color-success)")}}):(0,p.jsx)(l.Z,{style:{color:"var(--".concat(h,"-color-warning)")}}))},N=function(){var O={};return["warning","error"].includes(s)&&(O.danger=!0),v()(v()({},O),y||{})};return(0,p.jsx)(B.Z,v()(v()({},c),{},{ref:f,icon:t(),okButtonProps:N()}))});Z.Z=F},14392:function(on,Z,n){var W=n(97857),v=n.n(W),k=n(93865),b=n(35872),M=n(55241),l=n(67294),C=n(85893),S=l.forwardRef(function(P,B){var T=P.content===""||P.content===void 0||P.content===null,p=P.title===""||P.title===void 0||P.title===null,x=P.open!==void 0&&P.open!==null?P.open:T&&p?!1:void 0,F=(0,k.getCommonConfig)(),r=F.antPrefix;return(0,C.jsx)(M.Z,v()(v()({},P),{},{arrow:P.arrow||!1,open:x,ref:B,getPopupContainer:P.getPopupContainer||function(f){return(0,b.Q)(f,".".concat(r,"-app"))}}))});Z.Z=S},71493:function(on,Z,n){n.d(Z,{Z:function(){return Nn}});var W=n(9783),v=n.n(W),k=n(19632),b=n.n(k),M=n(5574),l=n.n(M),C=n(68400),S=n.n(C),P=n(15664),B=n(48825),T=n(17089),p=n(89580),x=n(55839),F=n(9361),r=n(30122),f=n(93967),d=n.n(f),u=n(67294),s=n(12444),y=n.n(s),c=n(72004),m=n.n(c),h=n(31996),t=n.n(h),N=n(26037),a=n.n(N),O=n(75533),K=function(pn){t()(tn,pn);var rn=a()(tn);function tn(Cn){var yn;return y()(this,tn),yn=rn.call(this),yn.name=Cn,yn}return m()(tn,[{key:"eq",value:function(yn){return yn.name==this.name}},{key:"toDOM",value:function(){var yn=document.createElement("span");return yn.setAttribute("aria-hidden","true"),yn.className="cm-prompt-var",yn.textContent="${".concat(this.name,"}"),yn}},{key:"ignoreEvent",value:function(){return!1}}]),tn}(O.l9),V=new O.Y1({regexp:/\$\{(\w+)\}/g,decoration:function(rn){return O.p.replace({widget:new K(rn[1])})}}),G=O.lg.fromClass(function(){function pn(rn){y()(this,pn),v()(this,"placeholders",void 0),this.placeholders=V.createDeco(rn)}return m()(pn,[{key:"update",value:function(tn){this.placeholders=V.updateDeco(tn,this.placeholders)}}]),pn}(),{decorations:function(rn){return rn.placeholders},provide:function(rn){return O.tk.atomicRanges.of(function(tn){var Cn;return((Cn=tn.plugin(rn))===null||Cn===void 0?void 0:Cn.placeholders)||O.p.none})}}),E=[G],R=n(97857),X=n.n(R),ln=n(34790);function dn(){var pn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],rn=arguments.length>1?arguments[1]:void 0,tn=rn.onCreate,Cn=rn.createBtnText;return(0,ln.ys)({override:[function(yn){var bn=yn.matchBefore(/\/(\w+)?/);return!bn||bn&&bn.from==bn.to&&!yn.explicit?null:{from:bn==null?void 0:bn.from,options:(tn?[].concat(b()(pn),[{label:"/NEW_VAR",boost:-99}]):pn).map(function(Wn){return X()(X()({},Wn),{},{displayLabel:Wn.label==="/NEW_VAR"?Cn:Wn.label.slice(1),apply:function(Mn,w,Un,gn){if(w.label==="/NEW_VAR")return Mn.dispatch({changes:{from:Un,to:gn,insert:""}}),tn==null?void 0:tn();var hn=w.label.slice(1),zn="${".concat(hn,"}");Mn.dispatch({changes:{from:Un,to:gn,insert:zn}})}})})}}]})}var sn=n(85893),_,en,mn=(0,r.kc)(function(pn){var rn=pn.css,tn=pn.token;return{onCreate:rn(_||(_=S()([`
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
  `])),tn.colorBorderSecondary,tn.colorBgContainer),cm:rn(en||(en=S()([`
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
  `])),tn.colorTextSecondary,tn.colorBlue,tn.colorPurple,tn.colorPurpleBg,tn.colorBgContainer,tn.colorText,tn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:tn.colorBgBase,border:"1px solid ".concat(tn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:tn.colorTextTertiary,backgroundColor:tn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),xn={markdown:[(0,B.JH)()]},jn=[],vn=function(rn){var tn=mn(),Cn=tn.styles,yn=rn.variables||jn,bn=(0,u.useState)(!1),Wn=l()(bn,2),Dn=Wn[0],Mn=Wn[1],w=rn.onCreate,Un=u.useContext(x.ZP.ConfigContext),gn=Un.theme.algorithm===F.Z.darkAlgorithm,hn=rn.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",zn=(0,u.useMemo)(function(){return gn?T.Pc:T.Zp},[gn]),wn=(0,u.useMemo)(function(){return[].concat(b()(xn.markdown),b()(E),[dn(b()(yn).map(function(Yn){return{label:"/".concat(Yn.code),info:Yn.label}})||[],{onCreate:w,createBtnText:hn})])},[yn]);(0,u.useEffect)(function(){return Mn(!0),function(){Mn(!1)}},[]);var Y=u.useMemo(function(){return rn.tipsText===!1?(0,sn.jsx)("div",{className:Cn.tips}):rn.tipsText?rn.tipsText:(0,sn.jsxs)("div",{className:Cn.tips,children:['\u8F93\u5165"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,sn.jsx)(P.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[rn.tipsText]);return Dn?(0,sn.jsxs)("div",{className:Cn.root,children:[(0,sn.jsx)(p.ZP,{className:d()(Cn.cm,v()({},Cn.onCreate,w)),extensions:wn,value:rn.value,theme:zn,lang:"markdown",onChange:rn.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},zn),(0,sn.jsxs)("div",{className:Cn.footer,children:[Y,rn.maxLength?(0,sn.jsxs)("div",{children:[rn.value.length,"/",rn.maxLength]}):null]})]}):null},Nn=(0,u.memo)(vn)},25845:function(on,Z,n){n.r(Z),n.d(Z,{useStyle:function(){return M}});var W=n(68400),v=n.n(W),k=n(3067),b,M=(0,k.Z)(b||(b=v()([`
.`,`-radio-button-wrapper {
  border: none;
  background-color: transparent;
  border-radius: 6px;
  
  &:first-child {
    border-inline-start: initial;
  }
  
  &::before {
    display: none !important;
  }
  
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.`,`-radio-group-ghost {
  .`,`-radio-button-wrapper-checked {
    &:not(.`,`-radio-button-wrapper-disabled) {
      color: var(--`,`-color-primary);
      background-color: var(--`,`-color-primary-bg);
      
      .`,`-radio-button-wrapper-checked {
        background-color: var(--`,`-color-primary-bg);
      }
    }
    
    &.`,`-radio-button-wrapper-disabled {
      &:hover {
        background-color: var(--`,`-color-fill-tertiary);
      }
    }
  }
}

.`,`-radio-group-bordered {
  .`,`-radio-button-wrapper {
    border: var(--`,"-line-width) var(--","-line-type) var(--",`-color-border);
    
    &:not(:first-child) {
      border-inline-start-width: 1px;
    }
  }
}

.`,`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: transparent;
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: transparent;
  }
}

.`,"-radio-button-wrapper-checked.",`-radio-button-wrapper-disabled {
  color: var(--`,`-color-text-tertiary);
  background-color: var(--`,`-color-fill-tertiary);
  
  &:hover {
    color: var(--`,`-color-text-tertiary);
    background-color: var(--`,`-color-fill-tertiary);
  }
}
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix})},5626:function(on,Z,n){n.r(Z);var W=n(97857),v=n.n(W),k=n(93865),b=n(55742),M=n(93967),l=n.n(M),C=n(25845),S=n(85893);Z.default=function(P){var B=(0,k.getCommonConfig)(),T=B.sparkPrefix,p=B.antPrefix,x=P.gap,F=x===void 0?12:x,r=P.bordered,f=r===void 0?!1:r,d=P.ghost,u=d===void 0?!0:d,s=(0,C.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s,{}),(0,S.jsx)(b.ZP.Group,v()(v()({},P),{},{className:l()(P.className,P.bordered?"".concat(T,"-radio-group-bordered"):"",u?"".concat(p,"-radio-group-ghost"):""),optionType:"button"}))]})}},65163:function(on,Z,n){var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(21860),l=n(85893),C=["texture"];Z.Z=function(S){var P=S.texture,B=P===void 0?!1:P,T=b()(S,C);return(0,l.jsx)(M.Z,v()(v()({},T),{},{texture:B}))}},13191:function(on,Z,n){n.d(Z,{J:function(){return h},Z:function(){return N}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(93865),l=n(86125),C=n(93967),S=n.n(C),P=n(67294),B=n(68400),T=n.n(B),p=n(3067),x,F=(0,p.Z)(x||(x=T()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix}),r=n(13769),f=n.n(r),d=n(13457),u,s=(0,p.Z)(u||(u=T()([`
.`,`-slider-input {
  display: flex;
  gap: 16px;
  height: 32px;
  box-sizing: content-box;
  align-items: center;
  &.`,`-slider-input-has-marks {
    padding: 12px;
  }
  .`,`-slider {
    flex: 1;
    
    &.`,"-slider-horizontal.",`-slider-with-marks {
      margin: 0;
    }
  }
  
  .`,`-input-number {
    height: 100%;
  }
  
  .`,"-input-number .",`-input-number-outlined {
    margin-top: 16px;
  }
  
  .`,`-slider-dot {
    opacity: 0;
  }
}
`])),function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),y=n(85893),c=["styles","classNames","sliderProps","inputNumberProps"];function m(a){var O,K,V=(0,M.getCommonConfig)(),G=V.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",G);var E=a.styles,R=a.classNames,X=a.sliderProps,ln=a.inputNumberProps,dn=f()(a,c),sn=s(),_=a.marks||((O=a.sliderProps)===null||O===void 0?void 0:O.marks)||null,en=_||b()(b()({},a.min,a.min),a.max,a.max),mn=_&&((K=Object.keys(_))===null||K===void 0?void 0:K.length)>0,xn=function(vn){var Nn=typeof vn=="string"?parseFloat(vn):vn;if(Nn===null||isNaN(Nn)){a.onChange(null);return}Nn<a.min?a.onChange(a.min):Nn>a.max?a.onChange(a.max):a.onChange(Nn)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(sn,{}),(0,y.jsxs)("div",{style:E==null?void 0:E.wrapper,className:S()("".concat(G,"-slider-input"),b()({},"".concat(G,"-slider-input-has-marks"),mn),R==null?void 0:R.wrapper),onMouseUp:function(){var vn;(vn=a.onBlur)===null||vn===void 0||vn.call(a)},children:[(0,y.jsx)(h,v()(v()(v()({disabled:a.disabled,min:a.min,max:a.max,step:a.step,tooltip:{getPopupContainer:function(vn){return vn}}},dn),X),{},{marks:en,style:v()(v()(v()({},E==null?void 0:E.slider),X==null?void 0:X.style),{},{width:"100%"}),className:S()(R==null?void 0:R.slider,X==null?void 0:X.className),onChange:xn,value:a.value===null?void 0:a.value})),(0,y.jsx)(d.Z,v()(v()({controls:!1,step:a.step,min:a.min,max:a.max,disabled:a.disabled},ln),{},{onBlur:function(){var vn;(vn=a.onBlur)===null||vn===void 0||vn.call(a)},value:a.value,onChange:xn,style:v()(v()({},E==null?void 0:E.inputNumber),ln==null?void 0:ln.style),className:S()(R==null?void 0:R.inputNumber,ln==null?void 0:ln.className)}))]})]})}var h=P.forwardRef(function(a,O){var K=(0,M.getCommonConfig)(),V=K.sparkPrefix,G=F();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(G,{}),(0,y.jsx)(l.Z,v()(v()({},a),{},{className:S()("".concat(V,"-slider"),b()({},"".concat(V,"-slider-no-marks"),!Object.keys(a.marks||{}).length),a.className),ref:O}))]})}),t=h;Object.assign(t,{Input:m});var N=t},88886:function(on,Z,n){n.d(Z,{Z:function(){return F}});var W=n(9783),v=n.n(W),k=n(93865),b=n(9361),M=n(38703),l=n(93967),C=n.n(l),S=n(68400),P=n.n(S),B=n(3067),T,p=(0,B.Z)(T||(T=P()([`
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.`,`-spinner {
  display: inline-block;
  
  .`,`-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    
    .`,`-default-indicator {
      width: 40px;
      height: 40px;
      animation: loading 1s linear infinite;
    }
  }
  
  .`,`-title {
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    color: var(--`,`-color-text);
  }
}

.`,`-spinner-overlay {
  position: relative;
  display: inline-block;
  
  .`,"-spinner-content.",`-spinning {
    position: relative;
    opacity: 0.3;
  }
  
  .`,`-spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 4;
  }
}

/* 
.`,`-spinner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
}

.`,`-indicator {
  margin-bottom: 8px;
}

.`,`-title {
  color: var(--`,`-color-text);
}
*/
`])),function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix}),x=n(85893),F=function(r){var f=r.indicator,d=r.spinning,u=d===void 0?!0:d,s=r.children,y=r.style,c=r.className,m=(0,k.getCommonConfig)(),h=m.sparkPrefix,t=b.Z.useToken(),N=p(),a=(0,x.jsxs)("svg",{className:"".concat(h,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,x.jsx)("defs",{children:(0,x.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,x.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,x.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,x.jsx)("g",{children:(0,x.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:t.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,x.jsx)("g",{children:(0,x.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:t.token.colorPrimary,fillOpacity:"1"})})]})]}),O=r.tip||r.showProgress&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("span",{children:["loading",r.percent!==void 0&&r.percent!==null&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:r.percent}),"%"]})]}),(0,x.jsx)(M.Z,{percent:r.percent,showInfo:!1})]})||null;return s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsxs)("div",{className:C()("".concat(h,"-spinner-overlay"),c),style:y,children:[(0,x.jsx)("div",{className:C()("".concat(h,"-spinner-content"),v()({},"".concat(h,"-spinning"),u)),children:s}),u&&(0,x.jsxs)("div",{className:"".concat(h,"-spinner"),children:[(0,x.jsx)("div",{className:"".concat(h,"-indicator"),children:f||a}),(0,x.jsx)("div",{className:"".concat(h,"-title"),children:O})]})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsx)("div",{className:C()("".concat(h,"-spinner"),c),style:y,children:u&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(h,"-indicator"),children:f||a}),(0,x.jsx)("div",{className:"".concat(h,"-title"),children:O})]})})]})}},95542:function(on,Z,n){n.d(Z,{Z:function(){return T}});var W=n(97857),v=n.n(W),k=n(55054),b=n(68400),M=n.n(b),l=n(3067),C,S=(0,l.Z)(C||(C=M()([`
.`,`-statistic {
  .`,`-statistic-title {
    color: var(--`,`-color-text-tertiary);
    line-height: 24px;
    margin-bottom: 0;
  }
  
  .`,`-statistic-content {
    color: var(--`,`-color-text);
    line-height: 36px;
  }
}
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),P=n(85893),B=function(x){var F=S();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{}),(0,P.jsx)(k.Z,v()({},x))]})},T=B},89806:function(on,Z,n){n.d(Z,{Z:function(){return F}});var W=n(97857),v=n.n(W),k=n(93865),b=n(97634),M=n(42119),l=n(67294),C=n(68400),S=n.n(C),P=n(3067),B,T=(0,P.Z)(B||(B=S()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),p=n(85893),x=function(f){var d=(0,k.getCommonConfig)(),u=d.sparkPrefix,s=T(),y=(0,l.useMemo)(function(){if(f.items)return f.items.map(function(c,m){var h=c.status;return!h&&f.current!==void 0&&(m<f.current?h="finish":m===f.current?h="process":h="wait"),h==="finish"?v()(v()({},c),{},{icon:(0,p.jsx)(b.Z,{className:"".concat(u,"-finish-icon")})}):c})},[f.items,f.current]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{}),(0,p.jsx)(M.Z,v()(v()({},f),{},{items:y,className:"".concat(u,"-steps")}))]})},F=x},59113:function(on,Z,n){n.d(Z,{Z:function(){return r}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(86250),l=n(72269),C=n(93865),S=n(68400),P=n.n(S),B=n(3067),T,p=(0,B.Z)(T||(T=P()([`
.`,`-switch {
  background: var(--`,`-color-primary-bg);
  background-image: none !important;
  
  &.`,`-switch-checked {
    background: var(--`,`-color-primary);
  }
  
  &.`,`-switch-disabled {
    opacity: 1;
    background: var(--`,`-color-fill-disable);
    
    &.`,`-switch-checked {
      background: var(--`,`-color-primary-border-hover);
    }
  }
}

.`,`-switch-label {
  font-size: 14px;
  font-weight: 500;
}
`])),function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix}),x=n(85893),F=["label","className"],r=function(f){var d=p(),u=f.label,s=f.className,y=b()(f,F),c=(0,C.getCommonConfig)(),m=c.sparkPrefix;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d,{}),(0,x.jsxs)(M.Z,{align:"center",gap:8,className:s,children:[(0,x.jsx)(l.Z,v()(v()({},y),{},{className:"".concat(m,"-switch")})),u&&(0,x.jsx)("span",{className:"".concat(m,"-switch-label"),children:u})]})]})}},80731:function(on,Z,n){n.d(Z,{Z:function(){return d}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(52253),C=n(70661),S=n(93967),P=n.n(S),B=n(68400),T=n.n(B),p=n(3067),x,F=(0,p.Z)(x||(x=T()([`
.`,`-table {
  &.`,`-table-wrapper {
    .`,`-table-container {
      .`,`-table-thead > tr > th {
        padding: 8px 20px;
        font-weight: 400;
        color: var(--`,`-color-text-secondary);
      }
      
      table > thead > tr:first-child > *:first-child {
        border-start-start-radius: 0;
      }
      
      table > thead > tr:first-child > *:last-child {
        border-start-end-radius: 0;
      }
      
      .`,"-table-thead > tr > th:not(:last-child):not(.","-table-selection-column):not(.",`-table-row-expand-icon-cell):not([colspan])::before {
            display: none;
          }
    
      .`,`-table-tbody > tr > td {
        padding: 16px 20px;
      }
      
      .`,`-table-tbody > tr {
        & > td:not(.`,`-table-selection-column):first-child,
        & > td.`,`-table-selection-column + td:not(
        .`,`-table-selection-column) {
          font-weight: 500;
        }
      }
    }
      
    .`,`-table-small {
      .`,`-table-tbody > tr > td {
        padding: 8px 20px;
      }
    }
  }
}
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),r=n(85893),f=["columns"];function d(u){var s,y=(0,M.getCommonConfig)(),c=y.sparkPrefix,m=u.columns,h=b()(u,f);m=(s=m)===null||s===void 0?void 0:s.map(function(N){return v()(v()({},N),{},{sortIcon:N.sortIcon||function(){return(0,r.jsx)(l.Z,{style:{fontSize:16,marginLeft:8}})}})});var t=F();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(C.Z,v()({className:P()("".concat(c,"-table")),columns:m},h))]})}},91268:function(on,Z,n){n.d(Z,{Z:function(){return h}});var W=n(97857),v=n.n(W),k=n(9783),b=n.n(k),M=n(5574),l=n.n(M),C=n(13769),S=n.n(C),P=n(93865),B=n(27848),T=n(44254),p=n(92783),x=n(93967),F=n.n(x),r=n(68400),f=n.n(r),d=n(3067),u,s=(0,d.Z)(u||(u=f()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix}),y=n(85893),c=["type","centered"],m=function(N){var a=N.type,O=N.centered,K=S()(N,c),V=(0,P.getCommonConfig)(),G=V.sparkPrefix,E=(0,B.Z)(function(){var sn;return(sn=K.items[0])===null||sn===void 0?void 0:sn.key},{value:K.activeKey,defaultValue:K.defaultActiveKey}),R=l()(E,2),X=R[0],ln=R[1],dn=s();return a==="segmented"?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(dn,{}),(0,y.jsx)(T.Z,v()(v()({animated:!1},K),{},{activeKey:X,renderTabBar:function(_){var en,mn=((en=N.items)===null||en===void 0?void 0:en.map(function(xn){return{label:xn.label,value:xn.key,disabled:xn.disabled}}))||[];return(0,y.jsx)(p.Z,{options:mn,onChange:function(jn){var vn;ln(jn),(vn=N.onChange)===null||vn===void 0||vn.call(N,jn)},className:F()("".concat(G,"-segmented-tab-bar"),b()({},"".concat(G,"-segmented-tab-bar-centered"),O)),value:_.activeKey,size:N.size})}}))]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(dn,{}),(0,y.jsx)(T.Z,v()(v()({},N),{},{type:a}))]})};m.TabPane=T.Z.TabPane;var h=m},20010:function(on,Z,n){n.d(Z,{Z:function(){return u}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(66309),C=n(93967),S=n.n(C),P=n(67294),B=n(68400),T=n.n(B),p=n(3067),x,F=(0,p.Z)(x||(x=T()([`
.`,`-tag {
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  .`,`-tag-close-icon {
    margin-left: 0;
  }
}

.`,`-tag-small {
  height: 20px;
  font-size: 12px;
  padding: 0 4px;
}

.`,`-tag-middle {
  height: 24px;
  font-size: 14px;
  padding: 0 6px;
}

.`,`-tag-purple {
  color: var(--`,`-color-purple);
  background: var(--`,`-color-purple-bg);
}

.`,`-tag-pink {
  color: var(--`,`-color-pink);
  background: var(--`,`-color-pink-bg);
}

.`,`-tag-yellow {
  color: var(--`,`-color-yellow);
  background: var(--`,`-color-yellow-bg);
}

.`,`-tag-teal {
  color: var(--`,`-color-teal);
  background: var(--`,`-color-teal-bg);
}

.`,`-tag-blue {
  color: var(--`,`-color-blue);
  background: var(--`,`-color-blue-bg);
}

.`,`-tag-mauve {
  color: var(--`,`-color-mauve);
  background: var(--`,`-color-mauve-bg);
}

.`,`-tag-transparent {
  color: var(--`,`-color-text-tertiary);
  background: transparent;
  border-color: var(--`,`-color-border-secondary);
}
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),r=n(85893),f=["children","className","bordered","color","size"],d=(0,P.forwardRef)(function(s,y){var c=s.children,m=s.className,h=s.bordered,t=h===void 0?!1:h,N=s.color,a=N===void 0?"mauve":N,O=s.size,K=O===void 0?"middle":O,V=b()(s,f),G=F(),E=(0,M.getCommonConfig)(),R=E.sparkPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G,{}),(0,r.jsx)(l.Z,v()(v()({className:S()("".concat(R,"-tag ").concat(R,"-tag-").concat(a," ").concat(R,"-tag-").concat(K),m),bordered:t},V),{},{ref:y,children:c}))]})}),u=d},69298:function(on,Z,n){n.d(Z,{Z:function(){return h}});var W=n(97857),v=n.n(W),k=n(13769),b=n.n(k),M=n(93865),l=n(78874),C=n(9361),S=n(55839),P=n(68351),B=n(93967),T=n.n(B),p=n(67294),x=n(68400),F=n.n(x),r=n(3067),f,d=(0,r.Z)(f||(f=F()([`
.`,`-picker {
  border-color: var(--`,`-color-border-secondary);
  background-color: var(--`,`-color-bg-base);
  
  &.`,`-picker-disabled {
    color: var(--`,`-color-text-quaternary);
    border-color: var(--`,`-color-border-secondary) !important;
    background-color: var(--`,`-color-fill-tertiary) !important;
    
    .`,`-picker-suffix {
      color: var(--`,`-color-text-quaternary) !important;
    }
  }
  
  .`,`-picker-suffix {
    margin-left: 8px;
    color: var(--`,`-color-text-tertiary) !important;
  }
  
  .`,`-picker-clear {
    margin-right: 3px;
  }
  
  .`,`-picker-range-separator {
    display: flex;
    
    .`,`-picker-separator {
      width: 8px;
      height: 1px;
      background: var(--`,`-color-text-tertiary);
      
      .anticon {
        display: none;
      }
    }
  }
}

.`,`-picker-dropdown {
  .`,`-picker-panel-container {
    border: 1px solid var(--`,`-color-border-secondary);
  }
  
  .`,`-picker-range-arrow {
    display: none !important;
  }
  
  .`,"-picker-time-panel-column > li.",`-picker-time-panel-cell-selected {
    .`,`-picker-time-panel-cell-inner {
      background: var(--`,`-color-primary-bg);
    }
  }
  
  .`,`-picker-now-btn {
    color: var(--`,`-color-primary);
  }
}
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),u=n(85893),s=["className","popupClassName"],y=["className","popupClassName"],c=function(N){var a=N.className,O=N.popupClassName,K=b()(N,s),V=C.Z.useToken(),G=V.token,E=(0,M.getCommonConfig)(),R=E.sparkPrefix,X=d();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary}}},children:(0,u.jsx)(P.Z,v()({suffixIcon:(0,u.jsx)(l.Z,{}),className:T()("".concat(R,"-picker"),a),popupClassName:T()("".concat(R,"-picker-dropdown"),O)},K))})]})},m=function(N){var a=N.className,O=N.popupClassName,K=b()(N,y),V=C.Z.useToken(),G=V.token,E=(0,M.getCommonConfig)(),R=E.sparkPrefix,X=d();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:G.colorPrimary}}},children:(0,u.jsx)(P.Z.RangePicker,v()({suffixIcon:(0,u.jsx)(l.Z,{}),className:T()("".concat(R,"-picker"),a),popupClassName:T()("".concat(R,"-picker-dropdown"),O),popupStyle:{padding:0}},K))})]})};c.RangePicker=m;var h=c},21618:function(on,Z,n){n.d(Z,{Z:function(){return G}});var W=n(97857),v=n.n(W),k=n(5574),b=n.n(k),M=n(13769),l=n.n(M),C=n(67294),S=n(93967),P=n.n(S),B=n(67985),T=n(38703),p=n(63701),x=n(62321),F=n(20399),r=n(80162),f=n(32485),d=n(93865),u=n(85893),s=function(R){var X=Math.floor(R/60),ln=Math.floor(R%60);return"".concat(X.toString().padStart(2,"0"),":").concat(ln.toString().padStart(2,"0"))},y=function(R){var X=R.className,ln=R.isPlaying,dn=R.onPlayPause,sn=R.onFullscreen,_=R.onProgressClick,en=R.enableAudio,mn=en===void 0?!1:en,xn=R.muted,jn=xn===void 0?!0:xn,vn=R.onMute,Nn=(0,d.getCommonConfig)(),pn=Nn.sparkPrefix,rn=(0,C.useMemo)(function(){return s(R.currentTime||0)},[R.currentTime]),tn=(0,C.useMemo)(function(){return s(R.duration||0)},[R.duration]),Cn=(0,C.useMemo)(function(){return Math.min((R.currentTime||0)/(R.duration||.01)*100,100)},[R.currentTime,R.duration]),yn=function(Wn){if(!(!_||!R.duration)){var Dn=Wn.currentTarget.getBoundingClientRect(),Mn=Wn.clientX-Dn.left,w=Dn.width,Un=Mn/w,gn=Un*R.duration,hn=Math.max(0,Math.min(gn,R.duration));_(hn)}};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"".concat(pn,"-video-player-controller ").concat(X||""),children:[(0,u.jsx)(B.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:ln?(0,u.jsx)(p.Z,{}):(0,u.jsx)(x.Z,{}),onClick:dn}),(0,u.jsx)(B.Z,{bordered:!1,size:"small",shape:"default",disabled:!mn,icon:mn&&jn?(0,u.jsx)(F.Z,{}):(0,u.jsx)(r.Z,{}),onClick:vn}),(0,u.jsx)("span",{className:"".concat(pn,"-video-time-text"),children:rn}),(0,u.jsx)("div",{className:"".concat(pn,"-video-progress-container"),onClick:yn,children:(0,u.jsx)(T.Z,{className:"".concat(pn,"-video-progress-bar"),percent:Cn,showInfo:!1})}),(0,u.jsx)("span",{className:"".concat(pn,"-video-time-text"),children:tn}),(0,u.jsx)(B.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,u.jsx)(f.Z,{}),onClick:sn})]})})},c=y,m=n(35106),h=n(68400),t=n.n(h),N=n(3067),a,O=(0,N.Z)(a||(a=t()([`
// Video \u4E3B\u5BB9\u5668\u6837\u5F0F
.`,`-video-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;

  button {
    --`,`-color-text-disabled: rgba(231, 231, 237, 0.25) !important;
    --`,`-button-text-text-color: rgba(231, 231, 237, 0.88) !important;
    --`,`-button-text-text-hover-color: rgba(231, 231, 237, 0.88) !important;
    --`,`-button-text-hover-bg: rgba(231, 231, 237, 0.08) !important;
  }
}

.`,`-video-content {
  width: 100%;
  height: 100%;
}

.`,`-video-element {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.`,`-video-controller-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, #000000 2%, rgba(0, 0, 0, 0) 94%);
  transition: opacity 0.3s;
}

// VideoPlayerController \u7EC4\u4EF6\u5185\u90E8\u6837\u5F0F
.`,`-video-player-controller {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  width: 100%;
  height: 40px;
  overflow: hidden;
}

// \u65F6\u95F4\u6587\u672C\u6837\u5F0F
.`,`-video-time-text {
  flex-grow: 0;
  font-size: 12px;
  line-height: 20px;
  color: var(--`,`-color-text-white);
}

// \u8FDB\u5EA6\u6761\u5BB9\u5668\u6837\u5F0F
.`,`-video-progress-container {
  flex-grow: 1;
  cursor: pointer;
}

// \u8FDB\u5EA6\u6761\u6837\u5F0F
.`,`-video-progress-bar {
  width: 100%;

  .`,`-progress-inner {
    --`,"-progress-remaining-color: var(--",`-color-fill);
  }
  
  .`,`-progress-bg {
    background: var(--`,`-color-text-white) !important;
    transition-duration: 0s;
  }
}
`])),function(E){return E.sparkPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.sparkPrefix},function(E){return E.sparkPrefix},function(E){return E.sparkPrefix},function(E){return E.sparkPrefix},function(E){return E.sparkPrefix},function(E){return E.antPrefix},function(E){return E.sparkPrefix},function(E){return E.sparkPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix},function(E){return E.antPrefix}),K=["controls","mouseEnterAutoPlay","children","className","style"],V=(0,C.forwardRef)(function(E,R){var X=E.controls,ln=E.mouseEnterAutoPlay,dn=ln===void 0?!1:ln,sn=E.children,_=E.className,en=E.style,mn=l()(E,K),xn=(0,d.getCommonConfig)(),jn=xn.sparkPrefix,vn=O(),Nn=(0,C.useState)(0),pn=b()(Nn,2),rn=pn[0],tn=pn[1],Cn=(0,C.useState)(0),yn=b()(Cn,2),bn=yn[0],Wn=yn[1],Dn=(0,C.useState)(!1),Mn=b()(Dn,2),w=Mn[0],Un=Mn[1],gn=(0,m.Z)(E,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),hn=b()(gn,2),zn=hn[0],wn=hn[1],Y=(0,C.useState)(!1),Yn=b()(Y,2),be=Yn[0],se=Yn[1],En=(0,C.useRef)(null),te=(0,C.useRef)(!1),Ce=function(Kn){En.current=Kn,R&&(typeof R=="function"?R(Kn):R.current=Kn)};(0,C.useEffect)(function(){var In;return w&&(In=setInterval(function(){En.current&&tn(En.current.currentTime)},16)),function(){In&&clearInterval(In)}},[w]);var fe=function(){return window.videoRef=En.current,En.current?"mozHasAudio"in En.current?(se(En.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in En.current?(se(En.current.webkitAudioDecodedByteCount>0),!0):(se(!1),!1):!1},me=function(){En.current&&Wn(En.current.duration)},Se=function(){En.current&&(w?En.current.pause():En.current.play(),Un(!w))},je=function(){Un(!0)},Ee=function(){Un(!1)},Be=function(){En.current&&En.current.requestFullscreen&&En.current.requestFullscreen()},Te=function(){var Kn;Un(!1),tn((Kn=En.current)===null||Kn===void 0?void 0:Kn.duration)},Ne=function(){dn&&!te.current&&(w||(En.current.play(),te.current=!0))},Fe=function(){dn&&te.current&&(te.current=!1)},De=function(Kn){En.current&&(En.current.currentTime=Kn,tn(Kn))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(vn,{}),(0,u.jsx)("div",{className:P()("".concat(jn,"-video-container"),_),style:en,children:(0,u.jsxs)("div",{className:"".concat(jn,"-video-content"),onMouseEnter:Ne,onMouseLeave:Fe,children:[(0,u.jsx)("video",v()(v()({ref:Ce},mn),{},{muted:zn,className:"".concat(jn,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:me,onCanPlayThrough:fe,onPlay:je,onPause:Ee,onEnded:Te})),X&&(0,u.jsx)(c,{className:"".concat(jn,"-video-controller-wrapper"),isPlaying:w,currentTime:rn,duration:bn,enableAudio:be,muted:zn,onMute:function(){return wn(!zn)},onPlayPause:Se,onFullscreen:Be,onProgressClick:De}),sn]})})]})}),G=V},93865:function(on,Z,n){n.r(Z),n.d(Z,{DEFAULT_ANT_PREFIX:function(){return l},DEFAULT_BL_PREFIX:function(){return C},DEFAULT_SPARK_PREFIX:function(){return S},getCommonConfig:function(){return p},setCommonConfig:function(){return T},useCommonConfig:function(){return x}});var W=n(5574),v=n.n(W),k=n(97857),b=n.n(k),M=n(67294),l="ant",C="bl",S="spark",P=[],B={antPrefix:l,blPrefix:C,sparkPrefix:S,configProviderProps:{},isDarkMode:!1};function T(F){Object.assign(B,F),requestAnimationFrame(function(){P.forEach(function(r){return r(b()({},B))})})}function p(){return B}function x(){var F=(0,M.useState)(function(){return p()}),r=v()(F,2),f=r[0],d=r[1];return(0,M.useLayoutEffect)(function(){var u=d;return P.push(u),function(){var s=P.findIndex(function(y){return y===u});s>=0&&P.splice(s,1)}},[]),f}},51850:function(on,Z,n){n.d(Z,{Z:function(){return M}});var W=n(97857),v=n.n(W),k=n(67294),b=new Map;function M(l){var C=l.globalStyle,S=l.name;(0,k.useLayoutEffect)(function(){var P=b.get(C)||0;if(P)b.set(C,v()(v()({},P),{},{count:P.count+1}));else{var B=document.createElement("style"),T=Math.random().toString(36).slice(2);B.innerHTML=C,B.dataset.id=T,B.dataset.flag="bailian-ui-use-style",S&&B.setAttribute("name",S),document.head.appendChild(B),b.set(C,{count:1,id:T})}return function(){var p=b.get(C);b.set(C,v()(v()({},p),{},{count:p.count-1})),setTimeout(function(){var x=b.get(C);if((x==null?void 0:x.count)<=0){var F;b.delete(C),(F=document.head.querySelector('[data-id="'+x.id+'"]'))===null||F===void 0||F.remove()}},100)}},[C])}},23048:function(on,Z,n){n.d(Z,{Z:function(){return r}});var W=n(52677),v=n.n(W),k=n(27484),b=n.n(k),M=n(97857),l=n.n(M),C=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"Prompt","components.commonComponents.Pagination.PreviousPage":"Previous Page","components.commonComponents.Pagination.Items":"Items","components.commonComponents.Pagination.Page":"Page","components.commonComponents.Pagination.NextPage":"Next page","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"The number of words cannot exceed {wordLimit}.","components.commonComponents.SlateEditor.EnterHere":"Enter here","components.SlateEditor.utils.constant.Paragraph":"Paragraph","components.SlateEditor.utils.constant.Variable":"Variable","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"The selection range is incorrect.","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"[{wrapTagName}] cannot be placed in [{tagName}]","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"[{wrapTagName}] cannot be nested in [{tagName}]]","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"You can enter a maximum of {maxLen} characters.","components.commonComponents.Image.Preview":"Preview"}'),S=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"\u63D0\u793A","components.commonComponents.Pagination.PreviousPage":"\u4E0A\u4E00\u9875","components.commonComponents.Pagination.Items":"\u6761","components.commonComponents.Pagination.Page":"\u9875","components.commonComponents.Pagination.NextPage":"\u4E0B\u4E00\u9875","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57","components.commonComponents.SlateEditor.EnterHere":"\u5728\u8FD9\u91CC\u8F93\u5165","components.SlateEditor.utils.constant.Paragraph":"\u6BB5\u843D","components.SlateEditor.utils.constant.Variable":"\u53D8\u91CF","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"\u5212\u9009\u8303\u56F4\u6709\u8BEF","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57","components.commonComponents.Image.Preview":"\u9884\u89C8"}'),P={"en-US":l()({},C),"zh-CN":l()({},S)},B="zh-cn",T;function p(f){B=f,b().locale(B||"zh-cn")}var x=function(d,u){var s=B==="zh-cn"?"zh-CN":"en-US",y=P[s][d.id]||d.defaultString||"",c=y.replace(/\{(\w+)\}/g,function(m,h){return u[h]||m});return c};function F(f,d){return T||p(B),typeof f=="string"?x({id:f},d):(v()(f)==="object"&&f.dm&&(f.defaultMessage=f.dm),x({id:f.id,defaultString:f.dm},d))}var r={intl:T,get:F,updateLocale:p,language:B}},17969:function(on,Z,n){n.r(Z),n.d(Z,{Alert:function(){return K.Z},AlertDialog:function(){return sn.default},Anchor:function(){return _.Z},Avatar:function(){return en.Z},Badge:function(){return V.Z},Breadcrumb:function(){return mn.Z},Button:function(){return xn.Z},Card:function(){return jn.Z},Checkbox:function(){return vn.Z},CodeBlock:function(){return Nn.ZP},CodeBlockLangExtensionsMap:function(){return Nn.xO},Collapse:function(){return pn.Z},CollapsePanel:function(){return rn.Z},ConfigProvider:function(){return oo},DatePicker:function(){return tn.Z},Descriptions:function(){return at.Z},Drawer:function(){return Cn.Z},Dropdown:function(){return yn.Z},EllipsisTip:function(){return Yn},Empty:function(){return be.Z},FileCard:function(){return Mr.s},FileIcon:function(){return Mr.Z},FloatButton:function(){return G.Z},Form:function(){return se.Z},HelpIcon:function(){return je},IconButton:function(){return te.Z},IconFont:function(){return Ee.Z},Image:function(){return Be.Z},Input:function(){return Te.Z},InputNumber:function(){return E.Z},MdEditor:function(){return Je.Z},Modal:function(){return Fe.Z},Pagination:function(){return In.Z},Popconfirm:function(){return Kn.Z},Popover:function(){return Lr.Z},Progress:function(){return R.Z},PromptsEditor:function(){return Je.Z},Radio:function(){return X.ZP},RadioButton:function(){return Ar.default},Result:function(){return Ir.Z},Select:function(){return ln.default},Skeleton:function(){return dn.Z},SlateEditor:function(){return tt},Slider:function(){return rr.Z},SliderSelector:function(){return st},Spinner:function(){return ot.Z},Statistic:function(){return ct.Z},Steps:function(){return Rr.Z},Switch:function(){return ut.Z},Table:function(){return dt.Z},Tabs:function(){return ft.Z},Tag:function(){return mt.Z},TimePicker:function(){return vt.Z},Tooltip:function(){return fe.Z},Upload:function(){return gt.Z},Video:function(){return xt.Z},bailianDarkTheme:function(){return Or},bailianTheme:function(){return Zr},base64Decoder:function(){return lo},base64Encoder:function(){return io},carbonDarkTheme:function(){return co},carbonTheme:function(){return so},copy:function(){return bt},delay:function(){return ar},generateThemeByToken:function(){return O},getCommonConfig:function(){return bn.getCommonConfig},message:function(){return Ne.Z},notification:function(){return De.Z},parseJsonSafely:function(){return ao},purpleDarkTheme:function(){return Or},purpleTheme:function(){return Zr},renderTooltip:function(){return Ct},requestPop:function(){return sr},requestPopSse:function(){return It},requestSse:function(){return dr},safeHtml:function(){return ht.t},setCommonConfig:function(){return bn.setCommonConfig},useCommonConfig:function(){return bn.useCommonConfig},useGlobalStyle:function(){return pt.Z},waitForDom:function(){return St},waitForFunc:function(){return ir}});var W=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#202041","colorPrimaryBgHover":"#202041","colorPrimaryBorder":"#2B2A55","colorPrimaryBorderHover":"#373476","colorPrimaryHover":"#857DE3","colorPrimary":"#5551CC","colorPrimaryActive":"#4643A1","colorPrimaryTextHover":"#857DE3","colorPrimaryText":"#5551CC","colorPrimaryTextActive":"#4643A1","colorTextBase":"#E7E7ED","colorBgBase":"#000000","colorText":"rgba(231, 231, 237, 0.88)","colorTextSecondary":"rgba(231, 231, 237, 0.65)","colorTextTertiary":"rgba(231, 231, 237, 0.45)","colorTextQuaternary":"rgba(231, 231, 237, 0.25)","colorBorder":"rgba(71, 71, 97, 0.8)","colorBorderSecondary":"rgba(56, 56, 76, 0.8)","colorFill":"rgba(231, 231, 237, 0.18)","colorFillSecondary":"rgba(231, 231, 237, 0.12)","colorFillTertiary":"rgba(231, 231, 237, 0.08)","colorFillQuaternary":"rgba(231, 231, 237, 0.04)","colorBgContainer":"#0F0F14","colorBgElevated":"#0F0F14","colorBgLayout":"#0F0F14","colorBgSpotlight":"rgba(71, 71, 97, 0.85)","colorBgMask":"rgba(5, 5, 8, 0.8)","colorInfo":"#0B83F1","colorInfoHover":"rgba(42, 114, 165, 1)","colorInfoBorder":"rgba(135, 209, 255, 0.2)","colorInfoText":"#0B83F1","colorInfoBg":"rgba(27, 73, 115, 0.25)","colorInfoBgHover":"rgba(27, 73, 115, 0.32)","colorInfoBorderHover":"rgba(94, 188, 255, 0.2)","colorSuccess":"#5BB98B","colorSuccessHover":"rgba(87, 141, 112, 1)","colorSuccessBg":"rgba(0, 50, 26, 0.25)","colorSuccessBgHover":"rgba(0, 50, 26, 0.32)","colorSuccessBorder":"rgba(211, 224, 217, 0.2)","colorSuccessBorderHover":"rgba(171, 212, 190, 0.2)","colorWarning":"#FAAD14","colorWarningHover":"rgba(170, 136, 43, 1)","colorWarningBg":"rgba(129, 116, 49, 0.25)","colorWarningBgHover":"rgba(129, 116, 49, 0.32)","colorWarningBorder":"rgba(255, 229, 143, 0.2)","colorWarningBorderHover":"rgba(255, 214, 102, 0.2)","colorError":"#FF4D4F","colorErrorHover":"rgba(165, 50, 48, 1)","colorErrorBg":"rgba(129, 46, 46, 0.25)","colorErrorBgHover":"rgba(129, 46, 46, 0.32)","colorErrorBorder":"rgba(255, 204, 199, 0.2)","colorErrorBorderHover":"rgba(255, 163, 158, 0.2)","colorLink":"#5551CC","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","colorTextWhite":"#fff","colorFillDisable":"#8D8C98","colorPurple":"#5551CC","colorPurpleHover":"#8383F0","colorPurpleBg":"rgba(226, 222, 255, 0.2)","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"rgba(251, 220, 239, 0.2)","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"rgba(255, 250, 184, 0.2)","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"rgba(255, 232, 201, 0.2)","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"rgba(200, 244, 233, 0.2)","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"rgba(194, 229, 255, 0.2)","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"rgba(239, 240, 243, 0.2)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}'),v=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#F2F0FF","colorPrimaryBgHover":"#F2F0FF","colorPrimaryBorder":"#E2DEFF","colorPrimaryBorderHover":"#BCB5FF","colorPrimaryHover":"#9189FA","colorPrimary":"#615CED","colorPrimaryActive":"#4444C7","colorPrimaryTextHover":"#9189FA","colorPrimaryText":"#615CED","colorPrimaryTextActive":"#4444C7","colorTextBase":"#26244c","colorBgBase":"#FFFFFF","colorText":"rgba(38, 36, 76, 0.88)","colorTextSecondary":"rgba(38, 36, 76, 0.65)","colorTextTertiary":"rgba(38, 36, 76, 0.45)","colorTextQuaternary":"rgba(38, 36, 76, 0.25)","colorBorder":"#cdd0dc","colorBorderSecondary":"#e6e8ee","colorFill":"#cdd0dc5c","colorFillSecondary":"#cdd0dc33","colorFillTertiary":"#cdd0dc26","colorFillQuaternary":"#cdd0dc1a","colorBgContainer":"#FFFFFF","colorBgElevated":"#FFFFFF","colorBgLayout":"#f9fafd","colorBgSpotlight":"rgba(38, 36, 76, 0.85)","colorBgMask":"rgba(20, 19, 39, 0.45)","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#87D1FF","colorInfoText":"#0B83F1","colorInfoBg":"#E6F7FF","colorInfoBgHover":"#B0E3FF","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#ABD4BE","colorSuccessBg":"#EBFAF0","colorSuccessBgHover":"#DFEDE4","colorSuccessBorder":"#D3E0D9","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FFD666","colorWarningBg":"#FFFBE6","colorWarningBgHover":"#FFF1B8","colorWarningBorder":"#FFE58F","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#FF7875","colorErrorBg":"#FFF2F0","colorErrorBgHover":"#FFF1F0","colorErrorBorder":"#FFCCC7","colorErrorBorderHover":"#FFA39E","colorLink":"#615CED","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#fff","colorFillDisable":"#DBDAE7","colorPurple":"#615CED","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"#EC4899","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"#EAB308","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"#FA8125","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"#14B8A6","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"#0090FF","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"#8E8C99","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),k=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#181818","colorPrimaryBgHover":"#2E2E2E","colorPrimaryBorder":"#323232","colorPrimaryBorderHover":"#2C2C2C","colorPrimaryHover":"#DFDFDF","colorPrimary":"#E4E4E4","colorPrimaryActive":"#7E7E7E","colorPrimaryTextHover":"#909090","colorPrimaryText":"#676767","colorPrimaryTextActive":"#959595","colorTextBase":"#E7E7ED","colorBgBase":"#0A0A0B","colorText":"#E7E7EDC7","colorTextSecondary":"#E7E7EDA6","colorTextTertiary":"#E7E7ED73","colorTextQuaternary":"#E7E7ED40","colorBorder":"#5B5B5BCC","colorBorderSecondary":"#323232CC","colorFill":"#E7E7ED2E","colorFillSecondary":"#E7E7ED1F","colorFillTertiary":"#E7E7ED14","colorFillQuaternary":"#E7E7ED0A","colorBgContainer":"#121212","colorBgElevated":"#212121","colorBgLayout":"#141414","colorBgSpotlight":"#525252D9","colorBgMask":"#050508CC","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#3990C9","colorInfoText":"#0B83F1","colorInfoBg":"#112233","colorInfoBgHover":"#264866","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#74A47C","colorSuccessBg":"#293631","colorSuccessBgHover":"#3F5147","colorSuccessBorder":"#73A377","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FF8C28","colorWarningBg":"#2D231A","colorWarningBgHover":"#4D3B23","colorWarningBorder":"#FFA628","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#EE654E","colorErrorBg":"#2B0B08","colorErrorBgHover":"#4A2A28","colorErrorBorder":"#EE5B4E","colorErrorBorderHover":"#FFA39E","colorLink":"#4D7DFF","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextWhite":"#FFFFFF","colorFillDisable":"#898989","colorPurple":"#615CED","colorPurpleHover":"#8383F0","colorPurpleBg":"#6964877A","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"#53424D7A","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"#9585527A","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"#6F58417A","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"#4658547A","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"#5E76897A","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"#5859647A","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextBlack":"#000000"}'),b=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(244, 244, 247, 1)","colorPrimaryBgHover":"rgba(239, 239, 244, 1)","colorPrimaryBorder":"rgba(62, 63, 66, 1)","colorPrimaryBorderHover":"rgba(130, 132, 137, 1)","colorPrimaryHover":"rgba(38, 38, 41, 1)","colorPrimary":"rgba(26, 26, 29, 1)","colorPrimaryActive":"rgba(0, 0, 0, 1)","colorPrimaryTextHover":"rgba(38, 38, 41, 1)","colorPrimaryText":"rgba(26, 26, 29, 1)","colorPrimaryTextActive":"rgba(0, 0, 0, 1)","colorTextBase":"rgba(26, 26, 29, 1)","colorBgBase":"rgba(255, 255, 255, 1)","colorText":"rgba(26, 26, 29, 0.88)","colorTextSecondary":"rgba(26, 26, 29, 0.65)","colorTextTertiary":"rgba(26, 26, 29, 0.45)","colorTextQuaternary":"rgba(26, 26, 29, 0.25)","colorBorder":"rgba(187, 187, 193, 1)","colorBorderSecondary":"rgba(234, 234, 234, 1)","colorFill":"rgba(0, 0, 43, 0.06)","colorFillSecondary":"rgba(0, 0, 85, 0.03)","colorFillTertiary":"rgba(205, 208, 220, 0.15)","colorFillQuaternary":"rgba(205, 208, 220, 0.1)","colorBgContainer":"rgba(255, 255, 255, 1)","colorBgElevated":"rgba(255, 255, 255, 1)","colorBgLayout":"rgba(250, 250, 251, 1)","colorBgSpotlight":"rgba(26, 26, 29, 0.85)","colorBgMask":"rgba(0, 0, 0, 0.45)","colorInfo":"rgba(11, 131, 241, 1)","colorInfoHover":"rgba(94, 188, 255, 1)","colorInfoBorder":"rgba(135, 209, 255, 1)","colorInfoText":"rgba(11, 131, 241, 1)","colorInfoBg":"rgba(230, 247, 255, 1)","colorInfoBgHover":"rgba(176, 227, 255, 1)","colorInfoBorderHover":"rgba(94, 188, 255, 1)","colorSuccess":"rgba(91, 185, 139, 1)","colorSuccessHover":"rgba(171, 212, 190, 1)","colorSuccessBg":"rgba(235, 250, 240, 1)","colorSuccessBgHover":"rgba(223, 237, 228, 1)","colorSuccessBorder":"rgba(211, 224, 217, 1)","colorSuccessBorderHover":"rgba(171, 212, 190, 1)","colorWarning":"rgba(250, 173, 20, 1)","colorWarningHover":"rgba(255, 214, 102, 1)","colorWarningBg":"rgba(255, 251, 230, 1)","colorWarningBgHover":"rgba(255, 241, 184, 1)","colorWarningBorder":"rgba(255, 229, 143, 1)","colorWarningBorderHover":"rgba(255, 214, 102, 1)","colorError":"rgba(255, 77, 79, 1)","colorErrorHover":"rgba(255, 120, 117, 1)","colorErrorBg":"rgba(255, 242, 240, 1)","colorErrorBgHover":"rgba(255, 241, 240, 1)","colorErrorBorder":"rgba(255, 204, 199, 1)","colorErrorBorderHover":"rgba(255, 163, 158, 1)","colorLink":"rgba(0, 77, 255, 1)","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"rgba(255, 255, 255, 1)","colorFillDisable":"rgba(232, 232, 235, 1)","colorPurple":"rgba(97, 92, 237, 1)","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"rgba(236, 72, 153, 1)","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"rgba(234, 179, 8, 1)","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"rgba(250, 129, 37, 1)","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"rgba(20, 184, 166, 1)","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"rgba(0, 144, 255, 1)","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"rgba(142, 140, 153, 1)","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),M=n(97857),l=n.n(M),C="rgba(0,0,0,0)",S=2,P=4,B=6,T=8,p=12,x=999,F="normal 12px/20px inherit",r="500 12px/20px inherit",f="normal 12px/20px Menlo, monospace",d="500 13px/20px inherit",u="normal 14px/24px inherit",s="500 14px/24px inherit",y="normal 14px/24px Menlo, monospace",c="normal 16px/28px inherit",m="500 16px/28px inherit",h="500 18px/32px inherit",t="500 20px/36px inherit",N="500 24px/44px inherit",a="500 32px/48px inherit";function O(e,o){return{theme:{cssVar:!0,hashed:!1,darkMode:o,token:l()({borderRadiusXS:S,borderRadiusSM:P,borderRadius:B,borderRadiusLG:T,borderRadiusXL:p,borderRadiusFull:x,footnoteRegular:F,footnoteMedium:r,footnoteSystemMonospace:f,bodyFormTitle:d,bodyRegular:u,bodyMedium:s,bodyCode:y,h5Regular:c,h5Medium:m,h4Medium:h,h3Medium:t,h2Medium:N,h1Medium:a},e),components:{Alert:{colorErrorBorder:C,colorInfoBorder:C,colorSuccessBorder:C,colorWarningBorder:C,colorInfoBg:e.colorInfoBg,borderRadiusLG:0,defaultPadding:"8px 20px",fontSize:12,lineHeight:"20px"},Badge:{colorError:e.colorPrimary,indicatorHeight:16,textFontSize:10},Breadcrumb:{separatorMargin:4,lastItemColor:e.colorText},Button:{contentFontSizeSM:12,defaultHoverBg:e.colorFillSecondary,defaultHoverBorderColor:e.colorBorderSecondary,defaultHoverColor:e.colorText,defaultActiveBg:e.colorFillSecondary,defaultActiveBorderColor:e.colorBorderSecondary,defaultActiveColor:e.colorText,defaultGhostColor:e.colorText,defaultGhostBorderColor:"transparent",dangerShadow:"none",defaultShadow:"none",primaryShadow:"none"},DatePicker:{paddingInline:8,colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Dropdown:{paddingBlock:4,controlPaddingHorizontal:8,controlItemBgHover:e.colorFillTertiary},Progress:{remainingColor:e.colorPrimaryBg,defaultColor:e.colorPrimary},Input:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},InputNumber:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Select:{colorBgBase:e.colorBgBase,selectorBg:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Skeleton:{paragraphLiHeight:24,paragraphMarginTop:16,blockRadius:8},Slider:{railBg:e.colorPrimaryBg,railHoverBg:e.colorPrimaryBgHover,trackBg:e.colorPrimary,trackHoverBg:e.colorPrimary,handleColor:e.colorPrimary,railSize:8,handleSize:12,handleSizeHover:12},Segmented:{itemSelectedBg:e.colorBgBase,trackPadding:4,controlHeight:40,controlHeightLG:42,itemHoverBg:"unset"},Steps:{iconSize:20,iconFontSize:12,titleLineHeight:20},Modal:{headerBg:e.colorBgBase,contentBg:e.colorBgBase,titleFontSize:16,controlHeight:20},Tooltip:{sizePopupArrow:0},Popover:{sizePopupArrow:0},Table:{cellPaddingInline:20},Form:{itemMarginBottom:20},Collapse:{contentPadding:"8px 12px",headerPadding:"4px 12px"},Descriptions:{colonMarginRight:10,verticalLabelPaddingBottom:4,verticalContentPaddingBottom:24},Switch:{handleBg:e.colorBgContainer,trackHeight:24,handleSize:20,trackHeightSM:20,handleSizeSM:16,trackMinWidth:44,trackMinWidthSM:32}}},checkbox:{style:{fontWeight:"500"}},radio:{style:{fontWeight:"500"}}}}var K=n(40056),V=n(40411),G=n(32348),E=n(13457),R=n(38703),X=n(55742),ln=n(34041),dn=n(48054),sn=n(37339),_=n(15560),en=n(34952),mn=n(21004),xn=n(57027),jn=n(48432),vn=n(34304),Nn=n(43158),pn=n(81843),rn=n(71615),tn=n(8732),Cn=n(11765),yn=n(28299),bn=n(93865),Wn=n(21317),Dn=n(93967),Mn=n.n(Dn),w=n(67294),Un=n(68400),gn=n.n(Un),hn=n(3067),zn,wn=(0,hn.Z)(zn||(zn=gn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),Y=n(85893);function Yn(e){var o=e.className,i=o===void 0?"":o,g=e.style,j=g===void 0?{}:g,D=e.children,H=e.rows,L=H===void 0?1:H,$=e.tooltip,Q=$||D,z=(0,bn.getCommonConfig)(),I=z.sparkPrefix,an=wn();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(an,{}),(0,Y.jsx)(Wn.Z.Paragraph,{className:Mn()("".concat(I,"-ellipsis-tip"),i),style:j,ellipsis:{rows:L,tooltip:Q},children:D})]})}var be=n(21860),se=n(32151),En=n(29368),te=n(67985),Ce=n(21773),fe=n(33369),me,Se=(0,hn.Z)(me||(me=gn()([`
.`,`-help-icon {
  color: var(--`,`-color-text-tertiary);
}

.`,`-info-icon {
  color: var(--`,`-color-icon);
  margin-left: var(--`,`-margin-xxs);
  font-size: 14px;
  
  &.`,`-info-icon-no-margin {
    margin: 0;
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function je(e){var o=(0,Ce.X)(),i=Se(),g=e.style,j=e.content,D=e.className,H=e.popoverProps,L=(0,bn.getCommonConfig)(),$=L.sparkPrefix;return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(o,{}),(0,Y.jsx)(i,{}),(0,Y.jsx)(fe.Z,l()(l()({title:j,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:g},H),{},{children:(0,Y.jsx)(te.Z,{className:Mn()("".concat($,"-help-icon"),D),icon:(0,Y.jsx)(En.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Ee=n(38654),Be=n(15713),Te=n(86995),Ne=n(56373),Fe=n(76561),De=n(89887),In=n(94476),Kn=n(81930),Lr=n(14392),Je=n(71493),Ar=n(5626),Ir=n(65163),Rr=n(89806),Wr=n(5574),ce=n.n(Wr),qn=n(23048),oe=n(45360),A=n(37946),Me=n(57645),ie=n(99963),Xe,kr=(0,hn.Z)(Xe||(Xe=gn()([`
.text-editor {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  
  &-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .text-editor-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    div[data-slate-node="element"] {
      margin: 0px !important;
    }
  }
}

/* \u6587\u672C\u65E0\u6CD5\u9009\u4E2D\u7684\u6837\u5F0F */
.text-editor-user-select-none {
  user-select: none;
}
`]))),Hr=n(19632),Ye=n.n(Hr),Ur=(0,w.memo)(function(e){var o=e.attributes,i=e.children;return(0,Y.jsx)("div",l()(l()({},o),{},{style:{marginTop:"8px"},children:i}))}),qe,zr=(0,hn.Z)(qe||(qe=gn()([`
.spark-editor-var-tag {
  padding: 0 6px;
  line-height: 24px;
  font-size: 12px;
  margin: 0 2px;
  background: rgba(205, 208, 220, 0.2);
  border-radius: 6px;
  height: 24px;
  display: inline-block;
}
`]))),$r=(0,w.memo)(function(e){var o=e.attributes,i=e.renderVarLabel,g=zr();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(g,{}),(0,Y.jsxs)("span",l()(l()({},o),{},{children:[e.children,(0,Y.jsx)("span",{className:"spark-editor-var-tag",children:i?i(e.element.code):e.element.label})]}))]})}),uo=function(o){return Object.keys(o).map(function(i){return{label:o[i].label,desc:o[i].desc,value:i}})},Kr=[{code:"s",isParagraph:!0,out:[],inner:[],name:qn.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:Ur,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:qn.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:$r,isInline:!0,isVoid:!0,type:"single"}],Ze=function(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},fo=function(o){return o.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},Qr=function(o){return o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Oe=function e(o,i){var g="",j=i||{},D=j.tagRules,H=D===void 0?{}:D;return o.forEach(function(L,$){if(A.W_.isElement(L)){var Q=H[L.type];if(!Q)g+=Ze(L.text);else switch(Q.code){case"image":g+="![".concat(L.fileName,"](").concat(L.src,")");break;case"pdf":g+="[".concat(L.fileName,"](").concat(L.src,")");break;case"s":g+="".concat(e(L.children,i)).concat($<o.length-1?`
`:"");break;case"var":g+="${".concat(L.code,"}");default:break}}else g+=Ze(L.text)}),g},_e=function(o,i){if(o&&o.children.length){var g=Oe(o.children,i);return g==="<s></s>"?"":Qr(g)}return""},ve=function(o){if(!o)return"";var i="",g=Ze(o).replace(/\$\{([^{}]+?)\}/g,function(j,D){return'<var code="'.concat(D,'" label="${').concat(D,'}" />')});return g.split(`
`).forEach(function(j){i+="<s>".concat(j,"</s>")}),"<speak>".concat(i,"</speak>")},Vr=function e(o){var i,g=[];return(o==null||(i=o.childNodes)===null||i===void 0?void 0:i.length)>0&&o.childNodes.forEach(function(j,D,H){var L=j.nodeType,$=j.nodeName;if(L===1){for(var Q={},z=0;z<j.attributes.length;z++){var I=j.attributes[z],an=I.nodeName,fn=I.nodeValue;Q[an]=fn}var cn=l()({type:$},Q);j.childNodes.length>0?cn.children=e(j):cn.children=[{text:""}],g.push(cn),$!=="s"&&(D>0&&H[D-1].nodeType===1&&g.unshift({text:""}),D===H.length-1&&g.push({text:""}))}else L===3&&g.push({text:j.nodeValue||""})}),g},ge=function(o){if(o){var i=new DOMParser().parseFromString(o,"text/xml");return Vr(i)}},wr=function(o){if(!o||o.includes("</speak>"))return o;var i=o;return i.includes("<s>")||(i="<s>".concat(i,"</s>")),"<speak>".concat(i,"</speak>")},nr=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i={};return[].concat(Ye()(o),Ye()(Kr)).forEach(function(g){i[g.code]||(i[g.code]=g)}),i},Gr=n(15009),On=n.n(Gr),Jr=n(99289),_n=n.n(Jr),er=function(o,i,g){if(!(!o||!i)){var j=o.selection,D=null;j&&(D=j.focus),g!=null&&g.at&&(D=g==null?void 0:g.at),D||(D={path:[0,0],offset:0});var H=D,L=H.path,$=H.offset,Q=A.NB.get(o,A.y$.parent(L));if(!A.ML.isVoid(o,Q)){var z=A.NB.string(A.NB.get(o,L)),I=z.substring(0,$-(g!=null&&g.deletePrefix?1:0)),an=z.substring($,z.length);A.ML.withoutNormalizing(o,function(){o.apply({type:"insert_node",node:{text:an},path:L}),o.apply({type:"insert_node",node:i,path:L}),o.apply({type:"insert_node",node:{text:I},path:L});var fn=A.y$.next(A.y$.next(A.y$.next(L)));o.apply({type:"remove_node",path:fn,node:A.NB.get(o,fn)});var cn={path:A.y$.next(A.y$.next(L)),offset:0};o.apply({type:"set_selection",properties:null,newProperties:{anchor:cn,focus:cn}}),ie.F3.focus(o),o.onChange()})}}},Xr=function(){var e=_n()(On()().mark(function o(i,g,j){var D,H,L,$,Q,z,I,an,fn,cn,Pn,Sn,J,nn,Ln,Bn,Qn,Tn,Zn,$n,Fn,An,Rn,ae,Gn,Jn,ee,kn,Hn,Vn,Xn,un;return On()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(!(!i||!g)){q.next=2;break}return q.abrupt("return");case 2:if(H=i.selection,L=j||{},$=L.tip,Q=L.selection,z=Q===void 0?H:Q,I=j==null||(D=j.rules)===null||D===void 0?void 0:D[g.type],!(z&&!A.e6.isCollapsed(z))){q.next=45;break}if(fn=A.NB.fragment(i,z),cn=xe(fn),cn!==""){q.next=10;break}return q.abrupt("return");case 10:if(Pn=pe(A.e6.edges(z)),Sn=ce()(Pn,2),J=Sn[0],nn=Sn[1],A.ML.isVoid(i,A.NB.get(i,A.y$.parent(J.path)))&&(J.path=A.y$.next(A.y$.parent(J.path)),J.offset=0),A.ML.isVoid(i,A.NB.get(i,A.y$.parent(nn.path)))&&(nn.path=A.y$.previous(A.y$.parent(nn.path)),nn.offset=A.NB.string(A.NB.get(i,nn.path)).length),A.y$.hasPrevious(nn.path)&&A.NB.get(i,A.y$.parent(J.path))===A.NB.get(i,A.y$.previous(nn.path))&&J.offset===0&&nn.offset===0&&(Ln=A.y$.previous(A.y$.parent(J.path)),Bn=A.NB.get(i,Ln),J.path=Ln,J.offset=Bn.text.length),A.NB.parent(i,J.path)!==A.NB.parent(i,nn.path)){for(Qn=A.NB.get(i,J.path),Tn=xe(A.NB.fragment(i,{anchor:{path:nn.path,offset:0},focus:nn}));A.xv.isText(Qn)&&Qn.text===""&&cn===Tn;)J.path.splice(J.path.length-1,1,1,0),Qn=A.NB.get(i,J.path);for(Zn=A.NB.get(i,nn.path),$n=A.NB.string(A.NB.get(i,A.e6.edges(z)[0].path)),Fn=xe(A.NB.fragment(i,{anchor:J,focus:{path:J.path,offset:$n.length}}));A.xv.isText(Zn)&&Zn.text===""&&cn===Fn;)An=nn.path[nn.path.length-1],nn.path.splice(nn.path.length-1,1,An-1),Zn=A.NB.get(i,nn.path),A.W_.isElement(Zn)&&(nn.path.push(Zn.children.length-1),nn.offset=$n.length)}if(A.NB.parent(i,J.path)===A.NB.parent(i,nn.path)){q.next=18;break}return oe.ZP.info(qn.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),q.abrupt("return");case 18:Rn=A.y$.parent(J.path),ae=(I==null?void 0:I.name)||Le(),Gn=A.NB.get(i,Rn),Jn=j==null||(an=j.rules)===null||an===void 0?void 0:an[Gn.type];case 22:if(!(I!=null&&I.out&&Rn.length>1)){q.next=30;break}if(I.out.includes(Gn.type)){q.next=27;break}return ee=(Jn==null?void 0:Jn.name)||Le(),oe.ZP.warning(qn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ae,tagName:ee})),q.abrupt("return");case 27:Rn=A.y$.parent(Rn),q.next=22;break;case 30:if(!(I!=null&&I.inner&&A.NB.get(i,J.path)!==A.NB.get(i,nn.path))){q.next=42;break}kn=A.y$.next(J.path);case 32:if(A.y$.equals(kn,nn.path)){q.next=42;break}if(Vn=A.NB.get(i,kn),Xn=j==null||(Hn=j.rules)===null||Hn===void 0?void 0:Hn[Vn.type],!(A.W_.isElement(Vn)&&!I.inner.includes(Vn.type))){q.next=39;break}return un=(Xn==null?void 0:Xn.name)||Le(),oe.ZP.warning(qn.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ae,tagName:un})),q.abrupt("return");case 39:kn=A.y$.next(kn),q.next=32;break;case 42:A.ML.withoutNormalizing(i,function(){var re=A.NB.parent(i,J.path),ne=A.NB.fragment(re,{anchor:{path:[J.path[J.path.length-1]],offset:J.offset},focus:{path:[nn.path[nn.path.length-1]],offset:nn.offset}}),ue=A.NB.string(A.NB.get(i,J.path));if(A.y$.equals(J.path,nn.path))i.apply({type:"remove_text",path:J.path,offset:J.offset,text:ue.substring(J.offset,nn.offset)});else{i.apply({type:"remove_text",path:J.path,offset:J.offset,text:ue.substring(J.offset,ue.length)});for(var de=A.y$.next(J.path);!A.y$.equals(de,nn.path);)i.apply({type:"remove_node",path:de,node:A.NB.get(i,de)}),nn.path=A.y$.previous(nn.path);var Qe=A.NB.string(A.NB.get(i,nn.path));i.apply({type:"remove_text",path:nn.path,offset:0,text:Qe.substring(0,nn.offset)})}if(!A.y$.equals(J.path,nn.path)){var ye=A.NB.get(i,nn.path);i.apply({type:"remove_node",path:nn.path,node:ye});var Ve=A.NB.string(ye);i.apply({type:"insert_text",path:J.path,offset:J.offset,text:Ve})}er(i,l()(l()({},g),{},{children:ne}),{at:J,rules:j==null?void 0:j.rules})}),q.next=46;break;case 45:$&&oe.ZP.warning($);case 46:case"end":return q.stop()}},o)}));return function(i,g,j){return e.apply(this,arguments)}}(),mo=function(o,i,g){if(!(!o||!i)){var j=Node.get(o,i),D=pe(j.children).reverse();Editor.withoutNormalizing(o,function(){o.apply({type:"remove_node",node:j,path:i}),D.forEach(function(cn){o.apply({type:"insert_node",node:cn,path:i})});for(var H=Path.parent(i),L=Node.get(o,H),$=0;Node.has(L,[$+1]);)if(Text.isText(Node.get(L,[$]))&&Text.isText(Node.get(L,[$+1]))){var Q=_toConsumableArray(H);Q.push($+1);var z=Node.get(o,Q),I=Node.string(z);o.apply({type:"remove_node",path:Q,node:z});var an=Path.previous(Q),fn=Node.string(Node.get(o,an));o.apply({type:"insert_text",path:Path.previous(Q),offset:fn.length,text:I}),L=Node.get(o,H)}else $++;g==null||g(),Path.previous(i)})}},Yr=function(o,i,g){var j=g.at;o.apply({type:"set_node",path:j,properties:i,newProperties:i}),o.onChange()},vo=function(o,i,g){o.apply({type:"remove_node",path:g,node:Node.get(o,g)}),o.apply({type:"insert_node",path:g,node:i})},qr=function(o,i){o&&(A.ML.withoutNormalizing(o,function(){var g=pe(o.children);g.forEach(function(D){o.apply({type:"remove_node",path:[0],node:D})});var j=i?pe(i):[{type:"s",children:[{text:""}]}];j.reverse(),j.forEach(function(D){o.apply({type:"insert_node",path:[0],node:D})})}),o.onChange())},xe=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return o.reduce(function(i,g){return i+A.NB.string(g)},"")},pe=function(o){return JSON.parse(JSON.stringify(o))},Le=function(){var o="";return o},go=function(o){var i;return(i=o[0])===null||i===void 0||(i=i.children)===null||i===void 0?void 0:i.map(function(g){return g.children.map(function(j){return j.text}).join("")}).join("")},xo=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,i=o%60,g=parseInt("".concat(o/60)),j=0;return g>60&&(g=g%60,j=parseInt("".concat(g/60))),"".concat(j?"".concat(Ae(j),":"):"").concat(Ae(g),":").concat(Ae(i))},Ae=function(o){return o>=10?"".concat(o):"0".concat(o)},_r=function(o,i){if(!(!o||!i))return ie.F3.findPath(o,i)},nt=function(o){o&&A.ML.withoutNormalizing(o,function(){var i=A.ML.end(o,[]);A.YR.select(o,i),ie.F3.focus(o),o.onChange()})},et=function(o,i,g){var j=o.isInline,D=o.isVoid,H=o.insertText,L=o.insertBreak,$=o.apply;o.isInline=function(z){var I;return((I=g[z.type])===null||I===void 0?void 0:I.isInline)||j(z)},o.isVoid=function(z){var I;return((I=g[z.type])===null||I===void 0?void 0:I.isVoid)||D(z)};var Q=function(I){var an=parseInt(o.maxLength||i||"1000"),fn=_e(o,{tagRules:g}),cn=fn.length;if(cn+I.length>an?(H(I.substring(0,an-cn)),Me.MO.withoutSaving(o,function(){H(I.substring(an-cn,I.length))})):H(I),o.selection&&cn+I.length>an){var Pn=o.selection.focus,Sn=Pn.path,J=Pn.offset,nn=J-(cn+I.length-an),Ln=I.substring(an-cn,I.length),Bn=qn.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:an});Me.MO.withoutSaving(o,function(){o.apply({type:"remove_text",path:Sn,offset:nn,text:Ln})}),oe.ZP.warning(Bn)}};return o.insertText=Q,o.insertFragment=function(z){var I=xe(z);Q(I)},o.insertBreak=function(){var z=o.selection;if(z){var I=Array.from(A.ML.nodes(o,{at:z,match:function(Pn){return!A.ML.isEditor(Pn)&&A.W_.isElement(Pn)&&Pn.type!=="s"}})),an=ce()(I,1),fn=an[0];if(fn)return;L()}},o.apply=function(z){z.type==="set_selection"&&Ie||$(z)},o},rt=(0,w.forwardRef)(function(e,o){var i=kr(),g=e.value,j=e.wordLimit,D=j===void 0?1e3:j,H=e.disabled,L=e.onChange,$=e.variables,Q=(0,w.useRef)(!1),z=(0,w.useRef)(nr(e.tagRules)),I=(0,w.useMemo)(function(){return et((0,ie.BU)((0,Me.VC)((0,A.Jh)())),D,z.current)},[]),an=(0,w.useRef)(I.selection),fn=(0,w.useRef)($);(0,w.useEffect)(function(){z.current=nr(e.tagRules)},[e.tagRules]),(0,w.useEffect)(function(){fn.current=$},[$]),(0,w.useEffect)(function(){var un;if(!Q.current){Q.current=!0;return}I.maxLength=D;var U=Fn();Gn(((un=ge(ve(U==null?void 0:U.slice(0,D))))===null||un===void 0||(un=un[0])===null||un===void 0?void 0:un.children)||[{type:"s",children:[{text:""}]}])},[D]),(0,w.useImperativeHandle)(o,function(){return{editor:I,getEditorValue:Fn,_insertNodes:Rn,_setNodes:An,_setEditorContent:Gn,_findNodePath:ee,_wrapNodes:ae,_serialize:kn,_generateTextBySelection:Hn,_insertFragment:Vn,_setEditorContentByStr:Jn}});var cn=(0,w.useMemo)(function(){var un=ge(wr(ve(g))),U;return un&&(un[0].type==="speak"?U=un[0].children:U=un),{initValue:U}},[g]),Pn=cn.initValue,Sn=(0,w.useState)(Pn||[{type:"s",children:[{text:""}]}]),J=ce()(Sn,2),nn=J[0],Ln=J[1],Bn=function(U){JSON.stringify((I==null?void 0:I.selection)||"")!==JSON.stringify(an.current||"")&&(an.current=I==null?void 0:I.selection);var q=Fn();g!==q&&(L==null||L(Fn()),Ln(U))},Qn=function(U){var q=U.element,re=q.type,ne=z.current[re].render;return ne?(0,Y.jsx)(ne,l()(l()({},U),{},{renderVarLabel:e.renderVarLabel})):(0,Y.jsx)(Y.Fragment,{})},Tn=(0,w.useCallback)(function(un){var U=un.attributes,q=un.children,re=un.leaf;return(0,Y.jsx)("span",l()(l()({},U),{},{style:{paddingLeft:re.text===""?"3px":void 0},children:q}))},[]),Zn=function(){Ie=!0},$n=function(){Ie=!1},Fn=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _e(I,l()(l()({},U),{},{tagRules:z.current}))},An=function(U,q){Yr(I,U,q)},Rn=function(U){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};er(I,U,l()(l()({},q),{},{rules:z.current}))},ae=function(U){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Xr(I,U,l()(l()({},q),{},{rules:z.current}))},Gn=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];qr(I,U)},Jn=function(){var U,q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Gn(((U=ge(ve(q==null?void 0:q.slice(0,D))))===null||U===void 0||(U=U[0])===null||U===void 0?void 0:U.children)||[{type:"s",children:[{text:""}]}])},ee=function(U){return _r(I,U)},kn=function(U){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Oe(U,l()(l()({},q),{},{tagRules:z.current}))},Hn=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!I.selection)return null;var q=A.NB.fragment(I,I.selection);return Oe(q,l()(l()({},U),{},{tagRules:z.current}))},Vn=function(U){var q,re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ne=Fn();if(ne.length>=D){oe.ZP.warning(qn.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!I.selection||re)&&nt(I);var ue=ne.endsWith("/n");re&&ne&&!ue&&I.insertBreak();var de=U.slice(0,D-ne.length),Qe=ge(ve(de))||[];(q=Qe[0])===null||q===void 0||q.children.forEach(function(ye,Ve){var we;Ve!==0&&I.insertBreak(),(we=ye.children)===null||we===void 0||we.forEach(function(Ge){Ge.text?I.insertText(Ge.text):Rn(Ge)})})};(0,w.useEffect)(function(){var un=Fn();g!==un&&(L==null||L(Fn()))},[]);var Xn=function(U){var q=U.clipboardData.getData("text/plain");Vn(q,!1),U.preventDefault()};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(i,{}),(0,Y.jsx)("div",{id:"text-editor",className:Mn()("text-editor",e.className),children:(0,Y.jsx)(ie.mH,{editor:I,value:nn,onChange:Bn,children:(0,Y.jsx)(ie.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||qn.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:Mn()("text-editor-content",e.contentClassName),readOnly:H,renderElement:Qn,renderLeaf:Tn,onCompositionStart:Zn,onCompositionEnd:$n,onPaste:Xn,maxLength:e.wordLimit,onCopy:function(U){var q=Hn()||"";U.clipboardData.setData("text/plain",q),U.preventDefault()}})})})]})}),tt=rt,Ie=!1,rr=n(13191),ot=n(88886),at=n(69065),it=n(9783),tr=n.n(it),or,lt=(0,hn.Z)(or||(or=gn()([`
.`,`-slider-selector {
  display: flex;
  gap: 16px;
  height: 32px;
  margin: 12px;
  
  .`,`-slider {
    flex: 1;
    
    &.`,"-slider-horizontal.",`-slider-with-marks {
      margin: 0;
    }
  }
  
  .`,`-input-number {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  
  .`,"-input-number .",`-input-number-outlined {
    margin-top: 16px;
  }
  
  .`,`-slider-dot {
    opacity: 0;
  }
}
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function st(e){var o=(0,bn.getCommonConfig)(),i=o.sparkPrefix,g=lt(),j=function(H){var L=typeof H=="string"?parseFloat(H):H;if(L===null||isNaN(L)){e.onChange(null);return}L<e.min?e.onChange(e.min):L>e.max?e.onChange(e.max):e.onChange(L)};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(g,{}),(0,Y.jsxs)("div",{onMouseUp:function(){var H;return(H=e.onBlur)===null||H===void 0?void 0:H.call(e)},className:Mn()("".concat(i,"-slider-selector"),e.className),children:[(0,Y.jsx)(rr.Z,{disabled:e.disabled,onChange:j,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||tr()(tr()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(H){return H}}}),(0,Y.jsx)("div",{style:l()({width:"48px"},e.inputNumberWrapperStyle),children:(0,Y.jsx)(E.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var H;return(H=e.onBlur)===null||H===void 0?void 0:H.call(e)},step:e.step,value:e.value,onChange:j,precision:e.precision})})]})]})}var ct=n(95542),ut=n(59113),dt=n(80731),ft=n(91268),mt=n(20010),vt=n(69298),gt=n(20946),xt=n(21618),pt=n(51850);function ar(){return Re.apply(this,arguments)}function Re(){return Re=_n()(On()().mark(function e(){var o,i=arguments;return On()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return o=i.length>0&&i[0]!==void 0?i[0]:100,j.abrupt("return",new Promise(function(D){setTimeout(D,o)}));case 2:case"end":return j.stop()}},e)})),Re.apply(this,arguments)}var ht=n(35872),Pt=n(13769),he=n.n(Pt),yt=["maxWidth","maxHeight"];function po(){var e;return((e=window.g_config)===null||e===void 0?void 0:e.isIntl)||!1}var bt=function(o){if(navigator.clipboard)navigator.clipboard.writeText(o);else{var i=document.createElement("textarea");document.body.appendChild(i),i.style.position="fixed",i.style.clip="rect(0 0 0 0)",i.style.top="10px",i.value=o,i.select(),document.execCommand("copy",!0),document.body.removeChild(i)}},Ct=function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=i.maxWidth,j=i.maxHeight,D=he()(i,yt);return l()({overlayInnerStyle:{maxWidth:g||326,maxHeight:j||150,overflowY:"auto",padding:"6px 12px"},title:o,arrow:!1},D)};function ho(e){return React.isValidElement(e)}function Po(e){var o=e||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(o)}var We=function(o){return o>=10?o:"0".concat(o)},yo=function(o){if(o<60){var i=Math.ceil(o);return"0:".concat(We(i))}var g=Math.floor(o/60),j=Math.ceil(o%60);return"".concat(We(g),":").concat(We(j))};function ir(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=o.timeout,g=i===void 0?5e3:i,j=o.intervalTime,D=j===void 0?100:j,H=Date.now();return new Promise(function(L,$){var Q=setInterval(function(){var z=e();z?(clearInterval(Q),L(z)):Date.now()-H>g&&($("timeout"),clearInterval(Q))},D)})}function St(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ir(function(){return document.querySelector(e)},o)}var lr=n(38018),jt=["product","action","url","version","region","headers"],Et=function(){var e=_n()(On()().mark(function i(g,j,D){var H,L,$,Q,z,I,an,fn,cn,Pn,Sn,J,nn,Ln,Bn;return On()().wrap(function(Tn){for(;;)switch(Tn.prev=Tn.next){case 0:return L=g.product,$=g.action,Q=g.url,z=g.version,I=g.region,an=g.headers,fn=an===void 0?{}:an,cn=he()(g,jt),Pn="".concat(Q||"/data/api.json","?action=").concat($,"&product=").concat(L),z&&(Pn+="&version=".concat(z)),Sn={sec_token:((H=window.ALIYUN_CONSOLE_CONFIG)===null||H===void 0?void 0:H.SEC_TOKEN)||"",region:I},j&&(Sn.params=JSON.stringify(j)),D&&Object.assign(Sn,D),J=l()({method:"post",credentials:"same-origin",headers:l()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},fn)},cn),nn=Object.assign({},J),nn.body=(0,lr.stringify)(Sn),Tn.next=11,fetch(Pn,nn);case 11:return Ln=Tn.sent,Tn.next=14,Ln.json();case 14:if(Bn=Tn.sent,!(Bn.code!=="200"&&!Bn.successResponse)){Tn.next=17;break}return Tn.abrupt("return",Promise.reject(Bn));case 17:return Tn.abrupt("return",Bn);case 18:case"end":return Tn.stop()}},i)}));function o(i,g,j){return e.apply(this,arguments)}return o}(),sr=Et;function Bt(e,o){return ke.apply(this,arguments)}function ke(){return ke=_n()(On()().mark(function e(o,i){var g,j,D;return On()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:j=o==null||(g=o.getReader)===null||g===void 0?void 0:g.call(o),j||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",o));case 2:return L.next=4,j.read();case 4:if((D=L.sent).done){L.next=8;break}try{i(D.value)}catch($){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",$)}L.next=2;break;case 8:case"end":return L.stop()}},e)})),ke.apply(this,arguments)}function Tt(e){var o,i,g,j=!1;return function(H){o===void 0?(o=H,i=0,g=-1):o=Ft(o,H);for(var L=o.length,$=0;i<L;){j&&(o[i]===10&&($=++i),j=!1);for(var Q=-1;i<L&&Q===-1;++i)switch(o[i]){case 58:g===-1&&(g=i-$);break;case 13:j=!0;case 10:Q=i;break}if(Q===-1)break;e(o.subarray($,Q),g),$=i,g=-1}$===L?o=void 0:$!==0&&(o=o.subarray($),i-=$)}}function Nt(e,o,i){var g=cr(),j=new TextDecoder;return function(H,L){if(H.length===0)i==null||i(g),g=cr();else if(L>0){var $=j.decode(H.subarray(0,L)),Q=L+(H[L+1]===32?2:1),z=j.decode(H.subarray(Q));switch($){case"data":g.data=g.data?"".concat(g.data,`
`).concat(z):z;break;case"event":g.event=z;break;case"id":e(g.id=z);break;case"retry":var I=parseInt(z,10);isNaN(I)||o(g.retry=I);break}}}}function Ft(e,o){var i=new Uint8Array(e.length+o.length);return i.set(e),i.set(o,e.length),i}function cr(){return{data:"",event:"",id:"",retry:void 0}}var Dt=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],He="text/event-stream",Mt=1e3,ur="last-event-id";function dr(e,o){return Ue.apply(this,arguments)}function Ue(){return Ue=_n()(On()().mark(function e(o,i){var g,j,D,H,L,$,Q,z,I,an,fn,cn,Pn;return On()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return g=i.signal,j=i.headers,D=i.onopen,H=i.onmessage,L=i.onclose,$=i.onerror,Q=i.fetch,z=i.autoRetryTime,I=i.timeout,an=i.debug,fn=an===void 0?!1:an,cn=he()(i,Dt),Pn=0,J.abrupt("return",new Promise(function(nn,Ln){var Bn=l()({},j);Bn.accept||(Bn.accept=He);var Qn=Mt,Tn=0,Zn=0,$n=new AbortController;function Fn(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(fn&&console.log("[sse] dispose"),window.clearTimeout(Tn),window.clearTimeout(Zn),!ee){var kn,Hn;(kn=$n)===null||kn===void 0||(Hn=kn.abort)===null||Hn===void 0||Hn.call(kn)}}function An(){window.clearTimeout(Zn),I!==0&&(Zn=window.setTimeout(function(){fn&&console.log("[sse] timeout"),Ln(new Error("timeout")),$==null||$(new Error("timeout")),Fn()},I||60*1e3))}g==null||g.addEventListener("abort",function(){Fn(),nn()});var Rn=Q!=null?Q:window.fetch,ae=D!=null?D:Zt;function Gn(){return Jn.apply(this,arguments)}function Jn(){return Jn=_n()(On()().mark(function ee(){var kn,Hn,Vn,Xn;return On()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.prev=0,An(),U.next=4,Rn(o,l()(l()({},cn),{},{headers:Bn,signal:(kn=$n)===null||kn===void 0?void 0:kn.signal}));case 4:return Hn=U.sent,U.next=7,ae(Hn);case 7:if(Hn.body){U.next=11;break}return fn&&console.log("[sse]no body, delay 100ms"),U.next=11,ar(100);case 11:return fn&&console.log("[sse]response.body",Hn.body),U.next=14,Bt(Hn.body,Tt(Nt(function(q){q?Bn[ur]=q:delete Bn[ur]},function(q){Qn=q},function(q){An(),H==null||H(q)})));case 14:$n=null,L==null||L(),Fn(),nn(),U.next=43;break;case 20:if(U.prev=20,U.t0=U.catch(0),U.t0&&console.error("[sse]err",U.t0),!(!(g!=null&&g.aborted)&&z&&Pn<z)){U.next=39;break}return U.prev=24,Pn+=1,Xn=(Vn=$==null?void 0:$(U.t0))!==null&&Vn!==void 0?Vn:Qn,window.clearTimeout(Tn),typeof Xn=="number"&&(fn&&console.log("[sse] retry "+Pn),Tn=window.setTimeout(Gn,Xn)),U.abrupt("return",Promise.resolve());case 32:U.prev=32,U.t1=U.catch(24),fn&&console.log("[sse] reject innerErr ",U.t1),Fn(),Ln(U.t1);case 37:U.next=43;break;case 39:fn&&console.log("[sse] reject finally"),Fn(U.t0 instanceof Response||U.t0 instanceof DOMException&&U.t0.name==="AbortError"),$==null||$(U.t0),Ln(U.t0);case 43:case"end":return U.stop()}},ee,null,[[0,20],[24,32]])})),Jn.apply(this,arguments)}Gn()}));case 3:case"end":return J.stop()}},e)})),Ue.apply(this,arguments)}function Zt(e){var o=e.headers.get("content-type");if(!(o!=null&&o.startsWith(He)))throw new Error("Expected content-type to be ".concat(He,", Actual: ").concat(o))}function Ot(e){return ze.apply(this,arguments)}function ze(){return ze=_n()(On()().mark(function e(o){var i,g,j,D,H,L,$;return On()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return i=o.action,g=o.body,j=o.product,D=o.version,H=o.region,L=o.params,$={action:i,product:j,region:H,url:"/tool/sse/get.json",version:D},z.abrupt("return",sr($,L,{content:JSON.stringify(g)}));case 3:case"end":return z.stop()}},e)})),ze.apply(this,arguments)}function Lt(e,o,i,g){var j=o.onMessage,D=o.onClose,H=o.onError,L=o.timeout,$=e.body,Q=e.uri,z=e.headers,I=e.query,an=e.path,fn=z["Content-Type"],cn="".concat(Q.replace(/\/$/,"")).concat(an);I&&Object.keys(I).length&&(cn="".concat(cn,"?").concat((0,lr.stringify)(I)));try{g.value=!1,dr(cn,{method:"POST",body:fn==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse($)):$,signal:i.signal,timeout:L,headers:z,onopen:function(Sn){return Sn.status!==200?Promise.reject(Sn):Promise.resolve()},onmessage:function(Sn){try{var J=Sn.data,nn=J===void 0?"{}":J,Ln=JSON.parse(nn);j==null||j(Ln)}catch(Bn){H==null||H(Bn)}},onclose:function(){g.value=!0,D==null||D()},onerror:function(Sn){g.value=!0,D==null||D(),!(Sn instanceof DOMException&&Sn.name==="AbortError")&&(H==null||H(Sn))}})}catch(Pn){g.value=!0,H==null||H(Pn),D==null||D()}}function At(e,o,i){return $e.apply(this,arguments)}function $e(){return $e=_n()(On()().mark(function e(o,i,g){var j,D,H,L;return On()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return j=o.onClose,D=o.onError,Q.prev=1,Q.next=4,Ot(o);case 4:H=Q.sent,L=H.data,Lt(L,o,i,g),Q.next=13;break;case 9:Q.prev=9,Q.t0=Q.catch(1),j==null||j(),D==null||D(Q.t0);case 13:case"end":return Q.stop()}},e,null,[[1,9]])})),$e.apply(this,arguments)}function It(e){return Ke.apply(this,arguments)}function Ke(){return Ke=_n()(On()().mark(function e(o){var i,g;return On()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return i=new AbortController,g={value:!0},D.next=4,At(o,i,g);case 4:return D.abrupt("return",{dispose:function(){g.value&&i.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return D.stop()}},e)})),Ke.apply(this,arguments)}var fr,Rt=(0,hn.Z)(fr||(fr=gn()([`
.`,`-alert {
  .`,`-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--`,`-color-text);
    }
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),bo=null,mr,Wt=(0,hn.Z)(mr||(mr=gn()([`
.`,`-breadcrumb {
  .`,`-breadcrumb-link {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--`,`-color-text-secondary);
  }
  
  li:last-child {
    color: var(--`,`-color-text);
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Co=null,vr,kt=(0,hn.Z)(vr||(vr=gn()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
button[type="button"].`,`-btn {
  font-weight: 500;
  padding-inline: 11px;
  
  span[data-spark-icon] {
    /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
    font-size: 20px;
  }
  
  &.`,`-btn-sm {
    padding-inline: 7px;
    
    span[data-spark-icon] {
      /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
      font-size: 16px;
    }
  }
  
  &.`,`-btn-lg {
    span[data-spark-icon] {
      /* @agentscope-ai/icons\u7684\u7279\u6B8A\u903B\u8F91 */
      font-size: 24px;
    }
  }
}

.`,`-btn-default {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-btn-textCompact:hover {
  color: var(--`,`-color-text-tertiary) !important;
}

.`,"-btn.","-btn-default.","-btn-dangerous:not(:disabled):not(.",`-btn-disabled) {
  border-color: transparent;
  background-color: var(--`,`-color-error-bg);
  color: var(--`,`-color-error);
  
  &:hover {
    background-color: var(--`,`-color-error-bg-hover);
    border-color: transparent;
    color: var(--`,`-color-error-hover);
  }
}

.`,"-btn-color-dangerous.",`-btn-variant-solid:disabled,
.`,"-btn-color-dangerous.","-btn-variant-solid.",`-btn-disabled {
  border-color: transparent;
  background-color: var(--`,`-color-fill-disable);
  color: var(--`,`-color-text-white);
}

.`,`-btn-primary:disabled {
  background: var(--`,`-color-fill-disable);
  color: var(--`,`-color-text-white);
  border-color: transparent;
}

.`,`-btn-default:disabled {
  background: var(--`,`-color-bg-base);
  color: var(--`,`-color-text-tertiary);
  border-color: var(--`,`-color-border-secondary);
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),So=null,gr,Ht=(0,hn.Z)(gr||(gr=gn()([`
.`,"-dropdown .",`-dropdown-menu {
  box-shadow: var(--`,`-box-shadow);
  border: 1px solid var(--`,`-color-border-secondary);
  
  .`,"-dropdown-menu-item.","-dropdown-menu-item-active.","-dropdown-menu-item-danger:not(.",`-dropdown-menu-item-disabled) {
    color: var(--`,`-color-error);
    background-color: var(--`,`-color-error-bg-hover);
  }
  
  .`,`-dropdown-menu-title-content {
    text-align: left;
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),jo=null,xr,Ut=(0,hn.Z)(xr||(xr=gn()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
.`,`-float-btn {
  box-shadow: var(--`,`-box-shadow);
  
  &.`,`-float-btn-default {
    border: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Eo=null,pr,zt=(0,hn.Z)(pr||(pr=gn()([`
.`,`-input-number {
  background-color: var(--`,`-color-bg-base);
}

.`,`-input-number-disabled {
  background-color: var(--`,`-color-fill-tertiary) !important;
}

.`,`-input-number-outlined,
.`,"-input-number-outlined.",`-input-number-disabled {
  border-color: var(--`,`-color-border-secondary);
}

.`,`-input-number-sm {
  font-size: 12px;
  height: 24px;
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Bo=null,hr,$t=(0,hn.Z)(hr||(hr=gn()([`
.`,`-message-notice-content {
  border: 1px solid var(--`,`-color-border-secondary);
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix}),To=null,Pr,Kt=(0,hn.Z)(Pr||(Pr=gn()([`
.`,`-notification {
  .`,`-notification-notice-wrapper {
    box-shadow: var(--`,`-box-shadow-secondary);
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-notification {
      .`,`-notification-notice-message {
        font-size: 16px;
        font-weight: 500;
      }
      
      .`,`-notification-notice-description {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        color: var(--`,`-color-text-secondary);
        margin-left: 32px;
      }
      
      .`,`-notification-notice-with-icon {
        .`,`-notification-notice-icon {
          display: flex;
          align-items: center;
          height: 24px;
        }
        
        .`,`-notification-notice-message {
          margin-inline-start: 32px;
        }
      }
      
      .`,`-notification-notice-close {
        color: var(--`,`-color-text);
      }
    }
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),No=null,yr,Qt=(0,hn.Z)(yr||(yr=gn()([`
.`,`-popover {
  .`,`-popover-inner {
    max-width: 500px;
    padding: 12px 16px;
    box-shadow: var(--`,`-box-shadow);
    border: 1px solid var(--`,`-color-border-secondary);
    
    .`,`-popover-title {
      margin-bottom: 4px;
    }
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Fo=null,br,Vt=(0,hn.Z)(br||(br=gn()([`
.`,`-radio-button-wrapper {
  .`,`-wave {
    display: none !important;
  }
}

.`,`-radio-wrapper {
  .`,`-radio-inner {
    border-color: var(--`,`-color-border-secondary);
  }
  
  .`,`-radio-disabled {
    .`,`-radio-inner {
      border-color: var(--`,`-color-border-secondary);
    }
    
    &.`,`-radio-checked {
      .`,`-radio-inner {
        background-color: var(--`,`-color-border-secondary);
        
        &::after {
          background-color: var(--`,`-color-bg-base);
        }
      }
    }
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Do=null,Cr,wt=(0,hn.Z)(Cr||(Cr=gn()([`
.`,`-segmented {
  .`,`-segmented-item-selected {
    box-shadow: none;
  }
  
  .`,`-segmented-thumb {
    box-shadow: none !important;
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Mo=null,Sr,Gt=(0,hn.Z)(Sr||(Sr=gn()([`
.`,`-select-dropdown {
  border: 1px solid var(--`,`-color-border-secondary);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  border-radius: var(--`,`-border-radius);
}

.`,"-select-outlined:not(.","-select-customize-input) .",`-select-selector {
  border-color: var(--`,`-color-border-secondary);
}

.`,"-select .",`-select-arrow {
  color: var(--`,`-color-text-secondary);
}

.`,"-select-outlined.",`-select-multiple {
  .`,`-select-selection-item {
    border-radius: 4px;
    background-color: var(--`,`-color-mauve-bg);
  }
}

.`,`-select-selection-overflow {
  color: var(--`,`-color-mauve);
  
  .`,`-select-selection-item-remove {
    .anticon-close {
      font-size: 14px;
      color: var(--`,`-color-mauve);
    }
  }
}

.`,"-select-disabled.","-select-multiple .","-select-selection-overflow .",`-select-selection-item {
  color: var(--`,`-color-mauve);
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Zo=null,jr,Jt=(0,hn.Z)(jr||(jr=gn()([`
.`,`-slider {
  .`,`-slider-rail {
    border-radius: 8px;
  }
  
  .`,`-slider-track {
    border-radius: 8px;
  }
}

.`,`-slider-tooltip {
  .`,`-tooltip-inner {
    background: var(--`,`-color-bg-spotlight);
  }
}

/* \u5DE6\u53F3\u4E24\u4FA7\u7684mark\u5BF9\u9F50 */
.`,`-slider-mark-text {
  &:first-child {
    transform: translateX(0%) !important;
  }
  
  &:last-child {
    transform: translateX(-100%) !important;
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Oo=null,Er,Xt=(0,hn.Z)(Er||(Er=gn()([`
.`,`-table-cell {
  border-radius: 0;
}
`])),function(e){return e.antPrefix}),Lo=null,Br,Yt=(0,hn.Z)(Br||(Br=gn()([`
.`,`-tooltip {
  .`,`-tooltip-inner {
    border: 1px solid var(--`,`-color-border-secondary);
    box-shadow: var(--`,`-box-shadow);
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ao=null,Tr,qt=(0,hn.Z)(Tr||(Tr=gn()([`
  /* \u5B9A\u4E49\u52A8\u753B\u5173\u952E\u5E27 */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(32px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* animate-in \u52A8\u753B\u7C7B */
  .animate-in {
    opacity: 0;
    transform: translateY(32px);
    animation: fadeInUp 0.4s ease forwards;
  }
`]))),_t=function(){var o=qt(),i=Rt(),g=Wt(),j=kt(),D=Ht(),H=Ut(),L=zt(),$=$t(),Q=Kt(),z=Qt(),I=Vt(),an=wt(),fn=Gt(),cn=Jt(),Pn=Xt(),Sn=Yt();return function(){return w.createElement(w.Fragment,null,w.createElement(o),w.createElement(i),w.createElement(g),w.createElement(j),w.createElement(D),w.createElement(H),w.createElement(L),w.createElement($),w.createElement(Q),w.createElement(z),w.createElement(I),w.createElement(an),w.createElement(fn),w.createElement(cn),w.createElement(Pn),w.createElement(Sn))}},Io=null,Nr=n(9361),le=n(55839),Fr=n(36447),no=n(53124),eo=n(66115),ro=["prefix","prefixCls","iconfont","children"];function to(){var e=_t();return(0,Y.jsx)(e,{})}var Dr={};function Pe(e){var o,i=e.prefix,g=i===void 0?"":i,j=e.prefixCls,D=j===void 0?"":j,H=e.iconfont,L=H===void 0?"https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js":H,$=e.children,Q=$===void 0?void 0:$,z=he()(e,ro),I=(0,w.useState)(!1),an=ce()(I,2),fn=an[0],cn=an[1],Pn=(0,w.useState)(((o=e.locale)===null||o===void 0?void 0:o.locale)||"defaultKey"),Sn=ce()(Pn,2),J=Sn[0],nn=Sn[1],Ln=(0,bn.getCommonConfig)(),Bn=Ln.antPrefix,Qn=(0,w.useContext)(no.E_),Tn=Qn.theme,Zn=(0,w.useMemo)(function(){return D||(g?"".concat(g,"-ant"):Bn)},[D,g]),$n=(0,eo.Z)(e.theme||Dr,Tn||Dr,{prefixCls:Zn}),Fn=(0,w.useMemo)(function(){var An=l()(l()({},$n),{},{algorithm:$n.darkMode?Nr.Z.darkAlgorithm:void 0});return An},[$n]);return(0,w.useLayoutEffect)(function(){var An={antPrefix:Zn,configProviderProps:l()(l()({},z),{},{prefixCls:Zn}),iconfont:L};g.length&&(An=l()(l()({},An),{},{sparkPrefix:"".concat(g,"-").concat(bn.DEFAULT_SPARK_PREFIX),prefix:g}),console.log("debug","".concat(g,"-").concat(bn.DEFAULT_SPARK_PREFIX))),(0,bn.setCommonConfig)(l()(l()({},An),{},{isDarkMode:function(){try{return(z.theme.algorithm||Fn.algorithm)===Nr.Z.darkAlgorithm}catch(Rn){return!1}}()})),cn(!0),oe.ZP.config({top:24})},[]),(0,w.useLayoutEffect)(function(){le.ZP.config({holderRender:function(Rn){return(0,Y.jsx)(le.ZP,l()(l()({},z),{},{prefixCls:Zn,theme:Fn,wave:{disabled:!0},children:(0,Y.jsx)(Fr.Z,{className:Mn()("spark"),style:l()({},e.style),children:Rn},J)}))}})},[z,Zn,fn]),(0,w.useLayoutEffect)(function(){var An,Rn;qn.Z.updateLocale(((An=e.locale)===null||An===void 0?void 0:An.locale)||"zh-cn"),nn(((Rn=e.locale)===null||Rn===void 0?void 0:Rn.locale)||"defaultKey")},[e.locale]),(0,Y.jsx)(le.ZP,l()(l()({},z),{},{theme:Fn,prefixCls:Zn,wave:{disabled:!0},children:(0,Y.jsx)(Fr.Z,{className:Mn()("spark",e.className),style:l()({},e.style),children:fn?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(to,{}),Q]}):null},J)}))}Pe.ConfigContext=le.ZP.ConfigContext,Pe.config=function(e){le.ZP.config(e)},Pe.useConfig=le.ZP.useConfig;var oo=Pe;function ao(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return i||console.warn(e,"is not valid json"),o?e:null;try{return JSON.parse(e)}catch(g){return i||console.warn(e,"is not valid json"),o?e:null}}function io(e){for(var o=new TextEncoder,i=o.encode(e),g="",j=0;j<i.length;j++)g+=String.fromCharCode(i[j]);var D=btoa(g);return D}function lo(e){for(var o=atob(e),i=new Uint8Array(o.length),g=0;g<o.length;g++)i[g]=o.charCodeAt(g);var j=new TextDecoder("utf-8"),D=j.decode(i);return D}var Mr=n(4767),Zr=O(v),Or=O(W,!0),so=O(b),co=O(k,!0)},3067:function(on,Z,n){n.d(Z,{Z:function(){return M}});var W=n(93865),v=n(30122),k=n(67294),b=n(85893);function M(){for(var l=arguments.length,C=new Array(l),S=0;S<l;S++)C[S]=arguments[S];return function(){var P=(0,W.useCommonConfig)(),B=P.sparkPrefix,T=P.antPrefix,p=P.blPrefix,x=v.vJ.apply(void 0,C),F=(0,k.useRef)(function(){return(0,b.jsx)(x,{sparkPrefix:B,antPrefix:T,blPrefix:p})});return F.current}}}}]);
