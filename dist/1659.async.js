"use strict";(self.webpackChunk_ali_agentscope_ai_design=self.webpackChunk_ali_agentscope_ai_design||[]).push([[1659],{60218:function(Ln,J,e){e.r(J),e.d(J,{useStyle:function(){return Q}});var X=e(68400),k=e.n(X),Y=e(3067),A,Q=(0,Y.Z)(A||(A=k()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix})},37339:function(Ln,J,e){e.r(J);var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(23048),l=e(33495),z=e(52565),E=e(96406),b=e(55595),U=e(86250),W=e(85576),Z=e(93967),L=e.n(Z),G=e(93865),i=e(60218),S=e(85893),g=["children","type","danger","title","width","className"],v=function(p){var F=function(jn){var vn=jn.type,pn=jn.title,Bn=(0,G.getCommonConfig)(),Fn=Bn.antPrefix;switch(vn){case"success":return(0,S.jsxs)(U.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(l.Z,{style:{color:"var(--".concat(Fn,"-color-success)"),fontSize:18,margin:"0 3px"}}),pn]});case"warning":case"confirm":return(0,S.jsxs)(U.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(z.Z,{style:{color:"var(--".concat(Fn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),pn]});case"info":return(0,S.jsxs)(U.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(E.Z,{style:{color:"var(--".concat(Fn,"-color-info)"),fontSize:18,margin:"0 3px"}}),pn]});case"error":return(0,S.jsxs)(U.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(b.Z,{style:{color:"var(--".concat(Fn,"-color-error)"),fontSize:18,margin:"0 3px"}}),pn]});default:return Q.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},u=p.children,R=p.type,P=R===void 0?"info":R,q=p.danger,tn=q===void 0?!1:q,an=p.title,cn=p.width,O=cn===void 0?400:cn,$=p.className,un=$===void 0?"":$,En=A()(p,g);return{width:O,transitionName:"",restProps:En,closeIcon:null,title:F({type:P,title:an}),okButtonProps:{danger:P==="error"||P==="warning"||tn},destroyOnClose:!0,className:L()(un,"animate-in","".concat((0,G.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:p.content||u,children:u}},C=function(p){var F=v(p),u=(0,i.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{}),(0,S.jsx)(W.Z,k()(k()({width:F.width,transitionName:""},F.restProps),{},{closeIcon:null,title:F.title,okButtonProps:F.okButtonProps||{},destroyOnClose:F.destroyOnClose,className:F.className,children:F.content||F.children}))]})},w=["success","info","warning","error","confirm"];w.forEach(function(m){C[m]=function(p){var F=v(k()(k()({},p),{},{type:m}));function u(){var R=(0,i.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(R,{}),F.content]})}return W.Z.confirm(k()(k()(k()({},F),F.restProps),{},{content:(0,S.jsx)(u,{}),icon:null}))}}),J.default=C},15560:function(Ln,J,e){e.d(J,{Z:function(){return Z}});var X=e(97857),k=e.n(X),Y=e(36569),A=e(67294),Q=e(68400),l=e.n(Q),z=e(3067),E,b=(0,z.Z)(E||(E=l()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix}),U=e(85893),W=(0,A.forwardRef)(function(L,G){var i=b();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(i,{}),(0,U.jsx)(Y.Z,k()({},L))]})}),Z=W},34952:function(Ln,J,e){e.d(J,{Z:function(){return g}});var X=e(97857),k=e.n(X),Y=e(5574),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(68997),E=e(67294),b=e(68400),U=e.n(b),W=e(3067),Z,L=(0,W.Z)(Z||(Z=U()([`
.`,`-avatar {
  cursor: default;
}
`])),function(v){return v.antPrefix}),G=e(85893),i=["children"],S=(0,E.forwardRef)(function(v,C){var w=L(),m=v.children,p=l()(v,i),F=(0,E.useState)(v.children),u=A()(F,2),R=u[0],P=u[1];return(0,E.useEffect)(function(){if(typeof m=="string"){P(m.slice(0,1));return}P(m)},[m]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(w,{}),(0,G.jsx)(z.Z,k()(k()({ref:C},p),{},{children:R}))]})}),g=S},21004:function(Ln,J,e){e.d(J,{Z:function(){return C}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(9838),l=e(68997),z=e(85418),E=e(85673),b=e(67294),U=e(93865),W=e(68400),Z=e.n(W),L=e(3067),G,i=(0,L.Z)(G||(G=Z()([`
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
`])),function(w){return w.sparkPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.antPrefix},function(w){return w.sparkPrefix},function(w){return w.antPrefix},function(w){return w.sparkPrefix},function(w){return w.sparkPrefix},function(w){return w.sparkPrefix},function(w){return w.sparkPrefix}),S=e(85893),g=["items"],v=function(m){var p=m.items,F=p===void 0?[]:p,u=A()(m,g),R=(0,U.getCommonConfig)(),P=R.sparkPrefix,q=i(),tn=b.useMemo(function(){return F.map(function(an){var cn=an.title,O=[];return an.iconUrl&&O.push((0,S.jsx)(l.Z,{size:20,src:an.iconUrl},"avatar")),an.dropdown?O.push((0,S.jsxs)("span",{className:"".concat(P,"-breadcrumb-dropdown-title"),children:[an.title,(0,S.jsx)(Q.Z,{size:16})]},"title")):O.push((0,S.jsx)("span",{children:an.title},"title")),an.dropdown?cn=(0,S.jsx)(z.Z,{menu:{items:an.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(P,"-breadcrumb-dropdown"),children:(0,S.jsx)("span",{children:O})}):(an.iconUrl||O.length>1)&&(cn=(0,S.jsx)("span",{className:"".concat(P,"-breadcrumb-item-content"),children:O})),k()(k()({},an),{},{title:cn})})},[F]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(q,{}),(0,S.jsx)(E.Z,k()(k()({},u),{},{items:tn,className:"".concat(P,"-breadcrumb ").concat(u.className||"")}))]})},C=v},48432:function(Ln,J,e){e.d(J,{Z:function(){return S}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(4393),z=e(93967),E=e.n(z),b=e(68400),U=e.n(b),W=e(3067),Z,L=(0,W.Z)(Z||(Z=U()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.sparkPrefix},function(g){return g.antPrefix}),G=e(85893),i=["title","info","children","className"],S=function(g){var v=g.title,C=g.info,w=g.children,m=g.className,p=A()(g,i),F=L(),u=(0,Q.getCommonConfig)(),R=u.sparkPrefix;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(F,{}),(0,G.jsx)(l.Z,k()(k()({className:E()("".concat(R,"-card"),m)},p),{},{title:null,children:(0,G.jsxs)("div",{className:"".concat(R,"-card-wrapper"),children:[v&&(0,G.jsx)("div",{className:"".concat(R,"-title"),children:v}),C&&(0,G.jsx)("div",{className:"".concat(R,"-info"),children:C}),w&&(0,G.jsx)("div",{className:"".concat(R,"-content"),children:w})]})}))]})}},34304:function(Ln,J,e){e.d(J,{Z:function(){return S}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(84567),l=e(67294),z=e(93865),E=e(68400),b=e.n(E),U=e(3067),W,Z=(0,U.Z)(W||(W=b()([`
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
`])),function(g){return g.sparkPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),L=e(85893),G=["description","descriptionClassName","descriptionStyle","children"],i=function(v){var C=v.description,w=v.descriptionClassName,m=v.descriptionStyle,p=v.children,F=A()(v,G),u=(0,z.getCommonConfig)(),R=u.antPrefix,P=u.sparkPrefix,q=Z(),tn={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(R,"-color-text-tertiary)")};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(q,{}),(0,L.jsxs)("div",{className:"".concat(P,"-checkbox"),children:[(0,L.jsx)(Q.Z,k()(k()({},F),{},{children:p})),C&&(0,L.jsx)("div",{className:w,style:k()(k()({},tn),m),children:C})]})]})};i.Group=Q.Z.Group;var S=i},43158:function(Ln,J,e){e.d(J,{ZP:function(){return jn},xO:function(){return $}});var X=e(97857),k=e.n(X),Y=e(19632),A=e.n(Y),Q=e(93865),l=e(31639),z=e(48120),E=e(4997),b=e(82261),U=e(60310),W=e(122),Z=e(9155),L=e(48825),G=e(12386),i=e(33236),S=e(62391),g=e(28519),v=e(17089),C=e(89580),w=e(55839),m=e(9361),p=e(93967),F=e.n(p),u=e(93361),R=e(67294),P=e(68400),q=e.n(P),tn=e(3067),an,cn=(0,tn.Z)(an||(an=q()([`
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
`])),function(vn){return vn.sparkPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix},function(vn){return vn.antPrefix}),O=e(85893),$={javascript:[(0,W.eJ)()],jsx:[(0,W.eJ)()],python:[(0,i.Vs)()],json:[(0,Z.AV)()],java:[(0,U.C)()],yaml:[(0,S.rV)()],php:[(0,G.h)()],go:[(0,E.go)()],csharp:[(0,l.N)()],css:[(0,z.iv)()],html:[(0,b.dy)()],curl:[],markdown:[(0,L.JH)()]},un={javascript:[(0,g.Q2)()],json:[(0,g.Q2)(),(0,g.ir)((0,Z.ap)())]},En=function(){var pn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",Bn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,Fn=pn;try{Fn=JSON.stringify(JSON.parse(pn),null,Bn)}catch(Vn){}return Fn},An=function(pn){var Bn,Fn=(0,Q.getCommonConfig)(),Vn=R.useContext(w.ZP.ConfigContext),Mn=((Bn=Vn.theme)===null||Bn===void 0?void 0:Bn.algorithm)===m.Z.darkAlgorithm,Jn=Fn.sparkPrefix,kn=Fn.antPrefix,yn=cn(),hn=(0,R.useMemo)(function(){return pn.theme===void 0?Mn?v.Pc:v.Zp:pn.theme==="dark"?v.Pc:v.Zp},[Mn]),Rn=typeof pn.language=="string"?[].concat(A()($[pn.language]||[]),A()(pn.value&&pn.language in un?un[pn.language]:[])):pn.language.reduce(function(Nn,wn){return[].concat(A()(Nn),[$[wn]])},[]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(yn,{}),(0,O.jsx)("div",{className:F()("".concat(Jn,"-code-block"),pn.className),children:(0,O.jsx)(C.ZP,k()({extensions:Rn,value:pn.language==="json"?En(pn.value):pn.value,theme:hn},(0,u.Z)(pn,["language","theme","extensions","value"])))})]})},jn=An},81843:function(Ln,J,e){e.d(J,{Z:function(){return W}});var X=e(97857),k=e.n(X),Y=e(47221),A=e(68400),Q=e.n(A),l=e(3067),z,E=(0,l.Z)(z||(z=Q()([`
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
`])),function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix}),b=e(85893),U=function(L){var G=E();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(G,{}),(0,b.jsx)(Y.Z,k()({},L))]})},W=U},71615:function(Ln,J,e){e.d(J,{Z:function(){return w}});var X=e(97857),k=e.n(X),Y=e(9783),A=e.n(Y),Q=e(5574),l=e.n(Q),z=e(93865),E=e(9838),b=e(28387),U=e(93967),W=e.n(U),Z=e(67294),L=e(68400),G=e.n(L),i=e(3067),S,g=(0,i.Z)(S||(S=G()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix}),v=e(85893),C=function(p){var F,u,R,P,q,tn,an=p.collapsedHeight,cn=p.expandedHeight,O=p.title,$=O===void 0?"":O,un=p.expandOnPanelClick,En=p.extra,An=p.children,jn=p.defaultExpanded,vn=(0,Z.useState)(jn),pn=l()(vn,2),Bn=pn[0],Fn=pn[1],Vn=(0,Z.useState)(!0),Mn=l()(Vn,2),Jn=Mn[0],kn=Mn[1],yn=(0,Z.useState)(an),hn=l()(yn,2),Rn=hn[0],Nn=hn[1],wn=(0,Z.useRef)(null),_n=(0,z.getCommonConfig)(),Yn=_n.sparkPrefix,de=_n.antPrefix,ne=g();(0,Z.useEffect)(function(){wn.current&&Nn(Bn&&cn?cn:Bn?wn.current.scrollHeight:an)},[Bn,an,cn,An]);var fe=function(me){me.stopPropagation(),me.preventDefault(),Fn(function(Se){return!Se})},ge=function(me){me.stopPropagation(),me.preventDefault(),cn&&(Bn||Fn(!0))},he=function(){kn(!0)},Pe=function(){kn(!0)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ne,{}),(0,v.jsxs)("div",{className:W()("".concat(Yn,"-collapse-panel"),{collapsible:!Bn&&un},(F=p.classNames)===null||F===void 0?void 0:F.wrapper),style:(u=p.styles)===null||u===void 0?void 0:u.wrapper,onClick:un?ge:void 0,onMouseEnter:un?he:void 0,onMouseLeave:un?Pe:void 0,children:[(0,v.jsxs)("div",{className:W()("".concat(Yn,"-collapse-panel-header"),(R=p.classNames)===null||R===void 0?void 0:R.header),style:(P=p.styles)===null||P===void 0?void 0:P.header,onClick:fe,children:[(0,v.jsxs)("span",{className:"".concat(Yn,"-collapse-panel-title"),children:[$,cn&&(0,v.jsxs)("div",{className:"".concat(Yn,"-collapse-panel-icon-wrapper"),children:[!Bn&&Jn&&un&&(0,v.jsx)(E.Z,{style:{fontSize:"18px"}}),Bn&&Jn&&un&&(0,v.jsx)(b.Z,{style:{fontSize:"18px"}})]})]}),En&&(0,v.jsx)("div",{className:"".concat(Yn,"-collapse-panel-extra"),onClick:function(me){me.stopPropagation(),me.preventDefault()},children:En})]}),(0,v.jsxs)("div",{className:W()("".concat(Yn,"-collapse-panel-content"),A()({},"".concat(Yn,"-collapse-panel-expanded"),Bn),(q=p.classNames)===null||q===void 0?void 0:q.content),style:k()({height:Rn},(tn=p.styles)===null||tn===void 0?void 0:tn.content),children:[(0,v.jsx)("div",{ref:wn,className:"".concat("".concat(Yn,"-collapse-panel-contentWrapper")," ",Bn&&cn?"scrollable":""),children:An}),!Bn&&cn&&(0,v.jsx)("div",{className:"".concat(Yn,"-collapse-panel-mask")})]})]})]})},w=C},8732:function(Ln,J,e){e.d(J,{Z:function(){return F}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(95706),z=e(9361),E=e(55839),b=e(72912),U=e(93967),W=e.n(U),Z=e(67294),L=e(68400),G=e.n(L),i=e(3067),S,g=(0,i.Z)(S||(S=G()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=e(85893),C=["className","popupClassName"],w=["className","popupClassName"],m=function(R){var P=R.className,q=R.popupClassName,tn=A()(R,C),an=z.Z.useToken(),cn=an.token,O=(0,Q.getCommonConfig)(),$=O.sparkPrefix,un=g();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(un,{}),(0,v.jsx)(E.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary,paddingInline:8}}},children:(0,v.jsx)(b.default,k()({suffixIcon:(0,v.jsx)(l.Z,{style:{fontSize:"20px"}}),className:W()("".concat($,"-picker"),P),popupClassName:W()("".concat($,"-picker-dropdown"),q)},tn))})]})},p=function(R){var P=R.className,q=R.popupClassName,tn=A()(R,w),an=z.Z.useToken(),cn=an.token,O=(0,Q.getCommonConfig)(),$=O.sparkPrefix,un=g();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(un,{}),(0,v.jsx)(E.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary,paddingInline:8}}},children:(0,v.jsx)(b.default.RangePicker,k()({suffixIcon:(0,v.jsx)(l.Z,{style:{fontSize:"20px"}}),className:W()("".concat($,"-picker"),P),popupClassName:W()("".concat($,"-picker-dropdown"),q),popupStyle:{padding:0}},tn))})]})};m.RangePicker=p;var F=m},69065:function(Ln,J,e){e.d(J,{Z:function(){return w}});var X=e(9783),k=e.n(X),Y=e(97857),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(93865),E=e(9361),b=e(26412),U=e(93967),W=e.n(U),Z=e(68400),L=e.n(Z),G=e(3067),i,S=(0,G.Z)(i||(i=L()([`
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
`])),function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),g=e(85893),v=["className","layout","colon","style"],C=function(p){var F,u,R=S(),P=p.className,q=p.layout,tn=p.colon,an=tn===void 0?!1:tn,cn=p.style,O=l()(p,v),$=(0,z.getCommonConfig)(),un=$.antPrefix,En=E.Z.useToken(),An=En.token;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(R,{}),(0,g.jsx)(b.Z,A()({className:W()(P,q==="vertical"&&"".concat(un,"-descriptions-vertical")),layout:q,colon:an,style:A()(k()(k()({},"--".concat(un,"-descriptions-vertical-label-padding-bottom"),"".concat((F=An.Descriptions.verticalLabelPaddingBottom)!==null&&F!==void 0?F:4,"px")),"--".concat(un,"-descriptions-vertical-content-padding-bottom"),"".concat((u=An.Descriptions.verticalContentPaddingBottom)!==null&&u!==void 0?u:24,"px")),cn)},O))]})},w=C},28299:function(Ln,J,e){e.d(J,{Z:function(){return G}});var X=e(97857),k=e.n(X),Y=e(93865),A=e(97634),Q=e(85418),l=e(67294),z=e(68400),E=e.n(z),b=e(3067),U,W=(0,b.Z)(U||(U=E()([`
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
`])),function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),Z=e(85893),L=function(S){var g,v,C=(0,Y.getCommonConfig)(),w=C.antPrefix,m=(0,l.useMemo)(function(){var F;if(!((F=S.menu)!==null&&F!==void 0&&F.selectable)||!S.menu){var u;return((u=S.menu)===null||u===void 0?void 0:u.items)||[]}return S.menu.items.map(function(R){var P={},q=R.label;return q&&(P.label=(0,Z.jsxs)("div",{className:"".concat(w,"-dropdown-check-wrapper"),children:[q,(0,Z.jsx)("span",{className:"".concat(w,"-dropdown-check-icon"),children:(0,Z.jsx)(A.Z,{})})]})),k()(k()({},R),P)})},[(g=S.menu)===null||g===void 0?void 0:g.items,(v=S.menu)===null||v===void 0?void 0:v.selectable]),p=W();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p,{}),(0,Z.jsx)(Q.Z,k()(k()({},S),{},{menu:k()(k()({},S.menu),{},{items:m}),overlayStyle:k()({},S.overlayStyle)}))]})},G=L},21860:function(Ln,J,e){e.d(J,{Z:function(){return m}});var X=e(97857),k=e.n(X),Y=e(93865),A=e(86250),Q=e(67294),l=e(57027),z=e(68400),E=e.n(z),b=e(3067),U,W=(0,b.Z)(U||(U=E()([`
.`,`-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.`,`-empty-texture,
.`,`-empty-image {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.`,`-empty-image svg {
  margin-top: 16.875%;
  width: 108px;
  height: 108px;
}

.`,`-empty-texture svg {
  width: 320px;
  height: 320px;
}

.`,`-empty-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--`,`-color-text);
}

.`,`-empty-description {
  font-size: 12px;
  line-height: 20px;
  color: var(--`,`-color-text-secondary);
  text-align: center;
  width: 100%;
}
`])),function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix}),Z=e(5574),L=e.n(Z),G=e(29691),i=e(85893),S=document.querySelector("#empty-svg-container");function g(p){var F=(0,G.ZP)(),u=L()(F,5),R=u[4],P=p.svgUrl,q=p.tokenMap,tn=q===void 0?{}:q,an=p.className,cn=p.size,O=P.includes(".svg"),$=(0,Q.useState)(""),un=L()($,2),En=un[0],An=un[1];return(0,Q.useEffect)(function(){if(!S){var jn=document.createElement("div");jn.innerHTML="<svg></svg>",S=jn.querySelector("svg"),S.id="empty-svg-container",S.setAttribute("aria-hidden","true"),S.style.position="absolute",S.style.width="0",S.style.height="0",S.style.overflow="hidden",document.body.insertBefore(S,document.body.firstChild)}},[]),(0,Q.useEffect)(function(){S&&R!==null&&R!==void 0&&R.key&&(S.classList.forEach(function(jn){return S.classList.remove(jn)}),S.classList.add(R.key))},[R==null?void 0:R.key]),(0,Q.useEffect)(function(){if(O){var jn=btoa(P),vn='<svg><use xlink:href="#'.concat(jn,'"></use></svg>');if(An(vn),!document.getElementById(jn)){var pn='<symbol id="'.concat(jn,'"></symbol>');S.innerHTML=S.innerHTML+pn,fetch(P).then(function(Bn){return Bn.text()}).then(function(Bn){var Fn=Bn;Object.keys(tn).forEach(function(yn){Fn=Fn.replace(new RegExp(yn,"g"),tn[yn])});var Vn=Fn.match(/viewBox="([^"]*)"/),Mn=Vn?Vn[1]:"",Jn=document.getElementById(jn),kn=Fn.replace(/<svg[^>]*>/,"");kn=kn.replace(/<\/svg>/,""),Mn&&Jn.setAttribute("viewBox",Mn),Jn.innerHTML=kn})}}},[P]),O?(0,i.jsx)("div",{className:an,dangerouslySetInnerHTML:{__html:En},style:{width:cn,height:cn}}):(0,i.jsx)("img",{src:P,className:an,style:{width:cn,height:cn}})}var v={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},C={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},w=function(F){var u=F.imageStyle,R=F.title,P=F.description,q=P===void 0?"No Data":P,tn=F.children,an=F.texture,cn=an===void 0?!0:an,O=F.size,$=O===void 0?320:O,un=F.okText,En=F.okType,An=En===void 0?"primary":En,jn=F.okButtonProps,vn=F.onOk,pn=F.type||"noData",Bn=(0,Y.getCommonConfig)(),Fn=Bn.sparkPrefix,Vn=Bn.isDarkMode,Mn=Bn.antPrefix,Jn=F.image||C[pn].url,kn=(0,Q.useMemo)(function(){var Nn,wn=k()({},(Nn=C[pn])===null||Nn===void 0?void 0:Nn.tokenMap);return wn&&Object.keys(wn).forEach(function(_n){wn[_n]="var(--".concat(Mn,"-").concat(wn[_n],")")}),wn},[pn]),yn=(0,Q.useMemo)(function(){var Nn=k()({},v.tokenMap);return Object.keys(Nn).forEach(function(wn){Nn[wn]="var(--".concat(Mn,"-").concat(Nn[wn],")")}),Nn},[Vn]),hn=W(),Rn=typeof $=="string"?parseFloat($.replace(/px/i,"")):$!=null?$:0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(hn,{}),(0,i.jsxs)("div",{className:"".concat(Fn,"-empty ").concat(F.className||""),style:k()(k()({},u),{},{width:$,height:$}),children:[cn&&(0,i.jsx)(g,{size:$,svgUrl:v.url,tokenMap:yn,className:"".concat(Fn,"-empty-texture")}),(0,i.jsx)(g,{size:$,svgUrl:Jn,tokenMap:kn,className:"".concat(Fn,"-empty-image")}),(0,i.jsxs)(A.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[R&&(0,i.jsx)("div",{className:"".concat(Fn,"-empty-title"),style:{marginBottom:q?.025*Rn:0},children:R}),q&&(0,i.jsx)("div",{className:"".concat(Fn,"-empty-description"),children:q}),!!un&&(0,i.jsx)("div",{style:{marginTop:.05*Rn},children:(0,i.jsx)(l.Z,k()(k()({type:An,onClick:vn},jn),{},{children:un}))}),!!tn&&tn]})]})]})},m=w},32151:function(Ln,J,e){e.d(J,{Z:function(){return R}});var X=e(52677),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(97857),l=e.n(Q),z=e(93865),E=e(96406),b=e(45387),U=e(78210),W=e(93967),Z=e.n(W),L=e(67294),G=e(68400),i=e.n(G),S=e(3067),g,v=(0,S.Z)(g||(g=i()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),C=e(85893),w=["tooltip"],m=(0,L.forwardRef)(function(P,q){var tn=P.labelMarginRight,an=tn===void 0?void 0:tn,cn=(0,L.useRef)(null),O=(0,z.getCommonConfig)(),$=O.sparkPrefix,un=v();return(0,L.useImperativeHandle)(q,function(){return cn.current}),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(un,{}),(0,C.jsx)(b.Z,l()(l()({},P),{},{className:Z()(P.className,"".concat($,"-form"),an==="small"&&"".concat($,"-form-label-margin-small")),ref:cn,requiredMark:function(An,jn){return(0,C.jsxs)(C.Fragment,{children:[An,jn.required&&(0,C.jsx)("span",{className:"".concat($,"-required-mark"),children:"*"})]})}}))]})}),p=function(q){var tn=q.tooltip,an=A()(q,w),cn=(0,C.jsx)(E.Z,{});function O(){if(tn){var $=k()(tn)==="object"&&!L.isValidElement(tn)?l()(l()({},tn),{},{icon:tn.icon||cn}):{title:tn,icon:cn};return $}}return(0,C.jsx)(b.Z.Item,l()(l()({},an),{},{tooltip:O(),labelCol:q.labelCol||(q.layout==="vertical"?{flex:"unset"}:void 0)}))},F=p;F.useStatus=U.Z.useStatus;var u=m;u.Item=F,u.List=b.Z.List,u.ErrorList=b.Z.ErrorList,u.Provider=b.Z.Provider,u.useForm=b.Z.useForm,u.useFormInstance=b.Z.useFormInstance,u.useWatch=b.Z.useWatch;var R=u},15713:function(Ln,J,e){e.d(J,{Z:function(){return S}});var X=e(97857),k=e.n(X),Y=e(23048),A=e(93865),Q=e(43974),l=e(13811),z=e(67294),E=e(68400),b=e.n(E),U=e(3067),W,Z=(0,U.Z)(W||(W=b()([`
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
`])),function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix},function(g){return g.antPrefix}),L=e(85893),G=function(v){var C=Z(),w=(0,A.getCommonConfig)(),m=w.antPrefix,p=(0,z.useMemo)(function(){var F={transitionName:""},u=v.preview;return u===!1?!1:u===!0?F:k()(k()({mask:(0,L.jsxs)("div",{className:"".concat(m,"-image-mask-info"),children:[(0,L.jsx)(Q.Z,{className:"".concat(m,"-image-mask-info-icon")}),(0,L.jsx)("span",{className:"".concat(m,"-image-mask-info-text"),children:Y.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},u),F)},[v.preview]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(C,{}),(0,L.jsx)(l.Z,k()({preview:p},v))]})},i=G;i.PreviewGroup=l.Z.PreviewGroup;var S=i},86995:function(Ln,J,e){e.d(J,{Z:function(){return m}});var X=e(97857),k=e.n(X),Y=e(9783),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(93865),E=e(48045),b=e(93967),U=e.n(b),W=e(67294),Z=e(68400),L=e.n(Z),G=e(3067),i,S=(0,G.Z)(i||(i=L()([`
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
`])),function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),g=e(85893),v=["shape"],C=W.forwardRef(function(p,F){var u=p.shape,R=u===void 0?"default":u,P=l()(p,v),q=(0,z.getCommonConfig)(),tn=q.antPrefix,an=S();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(an,{}),(0,g.jsx)(E.Z,k()(k()({},P),{},{className:U()(p.className,A()({},"".concat(tn,"-input-round"),R==="round")),ref:F}))]})}),w=W.forwardRef(function(p,F){var u=(0,z.getCommonConfig)(),R=u.antPrefix,P=S();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(P,{}),(0,g.jsx)(E.Z.TextArea,k()(k()({},p),{},{className:U()("".concat(R,"-text-area"),p.className),ref:F}))]})});Object.assign(C,{TextArea:w,Search:E.Z.Search,Password:E.Z.Password,OTP:E.Z.OTP});var m=C},76561:function(Ln,J,e){e.d(J,{Z:function(){return w}});var X=e(97857),k=e.n(X),Y=e(9783),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(93865),E=e(24772),b=e(85576),U=e(93967),W=e.n(U),Z=e(68400),L=e.n(Z),G=e(3067),i,S=(0,G.Z)(i||(i=L()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),g=e(85893),v=["showDivider","closable"],C=function(p){var F=S(),u=(0,z.getCommonConfig)(),R=u.sparkPrefix,P=p.showDivider,q=P===void 0?!0:P,tn=p.closable,an=tn===void 0?!0:tn,cn=l()(p,v),O=function(An){return p.info?(0,g.jsxs)("div",{className:"".concat(R,"-modal-footer-wrapper"),children:[(0,g.jsx)("span",{className:"".concat(R,"-modal-footer-info"),children:p.info}),(0,g.jsx)("div",{className:"".concat(R,"-modal-footer-origin-node"),children:An})]}):An},$=an?p.closeIcon||(0,g.jsx)(E.Z,{className:"".concat(R,"-modal-title-close"),onClick:function(An){var jn;(jn=p.onCancel)===null||jn===void 0||jn.call(p,An)}}):null,un=p.footer===void 0?O:p.footer;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F,{}),(0,g.jsx)(b.Z,k()(k()({},cn),{},{closeIcon:null,title:(0,g.jsxs)("div",{className:"".concat(R,"-modal-title-wrapper"),children:[(0,g.jsx)("div",{className:"".concat(R,"-modal-title"),children:p.title}),$]}),wrapClassName:W()("".concat(R,"-modal"),A()({},"".concat(R,"-show-divider"),q),p.wrapClassName,"animate-in"),footer:un,transitionName:""}))]})};C.useModal=b.Z.useModal,C.success=b.Z.success,C.error=b.Z.error,C.warning=b.Z.warning,C.info=b.Z.info,C.confirm=b.Z.confirm,C.SMALL_WIDTH=640,C.MEDIUM_WIDTH=800,C.LARGE_WIDTH=960;var w=C},89887:function(Ln,J,e){var X=e(5574),k=e.n(X),Y=e(97857),A=e.n(Y),Q=e(93865),l=e(77900),z=e(29998),E=e(29368),b=e(61441),U=e(26855),W=e(85893),Z=["success","warning","error","info"];function L(i,S){if(i==="success")return(0,W.jsx)(l.Z,{style:{color:"var(--".concat(S,"-color-success)"),fontSize:24}});if(i==="warning")return(0,W.jsx)(z.Z,{style:{color:"var(--".concat(S,"-color-warning)"),fontSize:24}});if(i==="info")return(0,W.jsx)(E.Z,{style:{color:"var(--".concat(S,"-color-info)"),fontSize:24}});if(i==="error")return(0,W.jsx)(b.Z,{style:{color:"var(--".concat(S,"-color-error)"),fontSize:24}})}var G={};G.destroy=U.ZP.destroy,G.open=function(i){var S=(0,Q.getCommonConfig)(),g=S.sparkPrefix,v="".concat(g,"-notification");i.className&&(v+=" ".concat(i.className)),U.ZP.open(A()(A()({},i),{},{className:v}))},Z.forEach(function(i){G[i]=function(S){var g=(0,Q.getCommonConfig)(),v=g.sparkPrefix,C=g.antPrefix,w="".concat(v,"-notification");S.className&&(w+=" ".concat(S.className)),U.ZP[i](A()(A()({},S),{},{className:w,icon:L(i,C)}))}}),G.useNotification=function(i){var S=(0,Q.getCommonConfig)(),g=S.sparkPrefix,v=S.antPrefix,C="".concat(g,"-notification"),w=U.ZP.useNotification(i),m=k()(w,2),p=m[0],F=m[1],u={};return Z.forEach(function(R){u[R]=function(P){return p[R](A()(A()({},P),{},{className:C,icon:L(R,v)}))}}),u.open=function(R){U.ZP.open(A()(A()({},R),{},{className:C}))},u.destroy=p.destroy,[u,F]},J.Z=G},94476:function(Ln,J,e){e.d(J,{Z:function(){return p}});var X=e(97857),k=e.n(X),Y=e(52677),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(93865),E=e(23048),b=e(54604),U=e(53033),W=e(52861),Z=e(86250),L=e(72656),G=e(68400),i=e.n(G),S=e(3067),g,v=(0,S.Z)(g||(g=i()([`
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
`])),function(F){return F.sparkPrefix},function(F){return F.sparkPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix},function(F){return F.antPrefix}),C=e(85893),w=["hideSwitchButton"],m={options:[{label:"10 ".concat(E.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(E.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:10},{label:"20 ".concat(E.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(E.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:20},{label:"50 ".concat(E.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(E.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:50},{label:"100 ".concat(E.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(E.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:100}]},p=function(F){var u=F.hideSwitchButton,R=u===void 0?!1:u,P=l()(F,w),q=(0,z.getCommonConfig)(),tn=q.sparkPrefix,an=v(),cn=function(){var En=function(jn,vn,pn){return vn==="jump-prev"||vn==="jump-next"?(0,C.jsx)(b.Z,{className:"".concat(tn,"-jump-next-icon")}):R||F.itemRender?pn:vn==="prev"?(0,C.jsx)("a",{children:(0,C.jsxs)(Z.Z,{gap:8,children:[(0,C.jsx)(U.Z,{})," ",(0,C.jsx)("span",{children:E.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):vn==="next"?(0,C.jsx)("a",{children:(0,C.jsxs)(Z.Z,{gap:8,children:[(0,C.jsx)("span",{children:E.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,C.jsx)(W.Z,{})]})}):pn};return En},O;P.showSizeChanger!==null&&P.showSizeChanger!==void 0?O=P.showSizeChanger:O=P.total&&P.total>50;var $=function(){return F.showSizeChanger===!0?m:F.showSizeChanger===!1?!1:A()(F.showSizeChanger)==="object"&&F.showSizeChanger?F.showSizeChanger:P.total&&P.total>50?m:!1};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(an,{}),(0,C.jsx)(L.Z,k()(k()({itemRender:cn()},P),{},{showSizeChanger:$(),className:"".concat(tn,"-pagination")}))]})}},81930:function(Ln,J,e){var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(52565),z=e(96406),E=e(55595),b=e(33495),U=e(86738),W=e(67294),Z=e(85893),L=["icon","type","okButtonProps"],G=W.forwardRef(function(i,S){var g=i.icon,v=i.type,C=v===void 0?"confirm":v,w=i.okButtonProps,m=A()(i,L),p=(0,Q.getCommonConfig)(),F=p.antPrefix,u=function(){return g||(C==="confirm"?(0,Z.jsx)(l.Z,{style:{color:"var(--".concat(F,"-color-warning)")}}):C==="info"?(0,Z.jsx)(z.Z,{style:{color:"var(--".concat(F,"-color-info)")}}):C==="warning"?(0,Z.jsx)(l.Z,{style:{color:"var(--".concat(F,"-color-warning)")}}):C==="error"?(0,Z.jsx)(E.Z,{style:{color:"var(--".concat(F,"-color-error)")}}):C==="success"?(0,Z.jsx)(b.Z,{style:{color:"var(--".concat(F,"-color-success)")}}):(0,Z.jsx)(l.Z,{style:{color:"var(--".concat(F,"-color-warning)")}}))},R=function(){var q={};return["warning","error"].includes(C)&&(q.danger=!0),k()(k()({},q),w||{})};return(0,Z.jsx)(U.Z,k()(k()({},m),{},{ref:S,icon:u(),okButtonProps:R()}))});J.Z=G},14392:function(Ln,J,e){var X=e(97857),k=e.n(X),Y=e(93865),A=e(35872),Q=e(55241),l=e(67294),z=e(85893),E=l.forwardRef(function(b,U){var W=b.content===""||b.content===void 0||b.content===null,Z=b.title===""||b.title===void 0||b.title===null,L=b.open!==void 0&&b.open!==null?b.open:W&&Z?!1:void 0,G=(0,Y.getCommonConfig)(),i=G.antPrefix;return(0,z.jsx)(Q.Z,k()(k()({},b),{},{arrow:b.arrow||!1,open:L,ref:U,getPopupContainer:b.getPopupContainer||function(S){return(0,A.Q)(S,".".concat(i,"-app"))}}))});J.Z=E},71493:function(Ln,J,e){e.d(J,{Z:function(){return Jn}});var X=e(9783),k=e.n(X),Y=e(19632),A=e.n(Y),Q=e(5574),l=e.n(Q),z=e(68400),E=e.n(z),b=e(15664),U=e(48825),W=e(17089),Z=e(89580),L=e(55839),G=e(9361),i=e(30122),S=e(93967),g=e.n(S),v=e(67294),C=e(12444),w=e.n(C),m=e(72004),p=e.n(m),F=e(31996),u=e.n(F),R=e(26037),P=e.n(R),q=e(75533),tn=function(kn){u()(hn,kn);var yn=P()(hn);function hn(Rn){var Nn;return w()(this,hn),Nn=yn.call(this),Nn.name=Rn,Nn}return p()(hn,[{key:"eq",value:function(Nn){return Nn.name==this.name}},{key:"toDOM",value:function(){var Nn=document.createElement("span");return Nn.setAttribute("aria-hidden","true"),Nn.className="cm-prompt-var",Nn.textContent="${".concat(this.name,"}"),Nn}},{key:"ignoreEvent",value:function(){return!1}}]),hn}(q.l9),an=new q.Y1({regexp:/\$\{(\w+)\}/g,decoration:function(yn){return q.p.replace({widget:new tn(yn[1])})}}),cn=q.lg.fromClass(function(){function kn(yn){w()(this,kn),k()(this,"placeholders",void 0),this.placeholders=an.createDeco(yn)}return p()(kn,[{key:"update",value:function(hn){this.placeholders=an.updateDeco(hn,this.placeholders)}}]),kn}(),{decorations:function(yn){return yn.placeholders},provide:function(yn){return q.tk.atomicRanges.of(function(hn){var Rn;return((Rn=hn.plugin(yn))===null||Rn===void 0?void 0:Rn.placeholders)||q.p.none})}}),O=[cn],$=e(97857),un=e.n($),En=e(34790);function An(){var kn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],yn=arguments.length>1?arguments[1]:void 0,hn=yn.onCreate,Rn=yn.createBtnText;return(0,En.ys)({override:[function(Nn){var wn=Nn.matchBefore(/\/(\w+)?/);return!wn||wn&&wn.from==wn.to&&!Nn.explicit?null:{from:wn==null?void 0:wn.from,options:(hn?[].concat(A()(kn),[{label:"/NEW_VAR",boost:-99}]):kn).map(function(_n){return un()(un()({},_n),{},{displayLabel:_n.label==="/NEW_VAR"?Rn:_n.label.slice(1),apply:function(de,ne,fe,ge){if(ne.label==="/NEW_VAR")return de.dispatch({changes:{from:fe,to:ge,insert:""}}),hn==null?void 0:hn();var he=ne.label.slice(1),Pe="${".concat(he,"}");de.dispatch({changes:{from:fe,to:ge,insert:Pe}})}})})}}]})}var jn=e(85893),vn,pn,Bn=(0,i.kc)(function(kn){var yn=kn.css,hn=kn.token;return{onCreate:yn(vn||(vn=E()([`
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
  `])),hn.colorBorderSecondary,hn.colorBgContainer),cm:yn(pn||(pn=E()([`
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
  `])),hn.colorTextSecondary,hn.colorBlue,hn.colorPurple,hn.colorPurpleBg,hn.colorBgContainer,hn.colorText,hn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:hn.colorBgBase,border:"1px solid ".concat(hn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:hn.colorTextTertiary,backgroundColor:hn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),Fn={markdown:[(0,U.JH)()]},Vn=[],Mn=function(yn){var hn=Bn(),Rn=hn.styles,Nn=yn.variables||Vn,wn=(0,v.useState)(!1),_n=l()(wn,2),Yn=_n[0],de=_n[1],ne=yn.onCreate,fe=v.useContext(L.ZP.ConfigContext),ge=fe.theme.algorithm===G.Z.darkAlgorithm,he=yn.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",Pe=(0,v.useMemo)(function(){return ge?W.Pc:W.Zp},[ge]),be=(0,v.useMemo)(function(){return[].concat(A()(Fn.markdown),A()(O),[An(A()(Nn).map(function(Se){return{label:"/".concat(Se.code),info:Se.label}})||[],{onCreate:ne,createBtnText:he})])},[Nn]);(0,v.useEffect)(function(){return de(!0),function(){de(!1)}},[]);var me=v.useMemo(function(){return yn.tipsText===!1?(0,jn.jsx)("div",{className:Rn.tips}):yn.tipsText?yn.tipsText:(0,jn.jsxs)("div",{className:Rn.tips,children:['\u8F93\u5165"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,jn.jsx)(b.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[yn.tipsText]);return Yn?(0,jn.jsxs)("div",{className:Rn.root,children:[(0,jn.jsx)(Z.ZP,{className:g()(Rn.cm,k()({},Rn.onCreate,ne)),extensions:be,value:yn.value,theme:Pe,lang:"markdown",onChange:yn.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},Pe),(0,jn.jsxs)("div",{className:Rn.footer,children:[me,yn.maxLength?(0,jn.jsxs)("div",{children:[yn.value.length,"/",yn.maxLength]}):null]})]}):null},Jn=(0,v.memo)(Mn)},25845:function(Ln,J,e){e.r(J),e.d(J,{useStyle:function(){return Q}});var X=e(68400),k=e.n(X),Y=e(3067),A,Q=(0,Y.Z)(A||(A=k()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix})},5626:function(Ln,J,e){e.r(J);var X=e(97857),k=e.n(X),Y=e(93865),A=e(55742),Q=e(93967),l=e.n(Q),z=e(25845),E=e(85893);J.default=function(b){var U=(0,Y.getCommonConfig)(),W=U.sparkPrefix,Z=U.antPrefix,L=b.gap,G=L===void 0?12:L,i=b.bordered,S=i===void 0?!1:i,g=b.ghost,v=g===void 0?!0:g,C=(0,z.useStyle)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(C,{}),(0,E.jsx)(A.ZP.Group,k()(k()({},b),{},{className:l()(b.className,b.bordered?"".concat(W,"-radio-group-bordered"):"",v?"".concat(Z,"-radio-group-ghost"):""),optionType:"button"}))]})}},65163:function(Ln,J,e){var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(21860),l=e(85893),z=["texture"];J.Z=function(E){var b=E.texture,U=b===void 0?!1:b,W=A()(E,z);return(0,l.jsx)(Q.Z,k()(k()({},W),{},{texture:U}))}},13191:function(Ln,J,e){e.d(J,{J:function(){return F},Z:function(){return R}});var X=e(97857),k=e.n(X),Y=e(9783),A=e.n(Y),Q=e(93865),l=e(86125),z=e(93967),E=e.n(z),b=e(67294),U=e(68400),W=e.n(U),Z=e(3067),L,G=(0,Z.Z)(L||(L=W()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(P){return P.antPrefix},function(P){return P.sparkPrefix},function(P){return P.sparkPrefix}),i=e(13769),S=e.n(i),g=e(13457),v,C=(0,Z.Z)(v||(v=W()([`
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
`])),function(P){return P.sparkPrefix},function(P){return P.sparkPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),w=e(85893),m=["styles","classNames","sliderProps","inputNumberProps"];function p(P){var q,tn,an=(0,Q.getCommonConfig)(),cn=an.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",cn);var O=P.styles,$=P.classNames,un=P.sliderProps,En=P.inputNumberProps,An=S()(P,m),jn=C(),vn=P.marks||((q=P.sliderProps)===null||q===void 0?void 0:q.marks)||null,pn=vn||A()(A()({},P.min,P.min),P.max,P.max),Bn=vn&&((tn=Object.keys(vn))===null||tn===void 0?void 0:tn.length)>0,Fn=function(Mn){var Jn=typeof Mn=="string"?parseFloat(Mn):Mn;if(Jn===null||isNaN(Jn)){P.onChange(null);return}Jn<P.min?P.onChange(P.min):Jn>P.max?P.onChange(P.max):P.onChange(Jn)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(jn,{}),(0,w.jsxs)("div",{style:O==null?void 0:O.wrapper,className:E()("".concat(cn,"-slider-input"),A()({},"".concat(cn,"-slider-input-has-marks"),Bn),$==null?void 0:$.wrapper),onMouseUp:function(){var Mn;(Mn=P.onBlur)===null||Mn===void 0||Mn.call(P)},children:[(0,w.jsx)(F,k()(k()(k()({disabled:P.disabled,min:P.min,max:P.max,step:P.step,tooltip:{getPopupContainer:function(Mn){return Mn}}},An),un),{},{marks:pn,style:k()(k()(k()({},O==null?void 0:O.slider),un==null?void 0:un.style),{},{width:"100%"}),className:E()($==null?void 0:$.slider,un==null?void 0:un.className),onChange:Fn,value:P.value===null?void 0:P.value})),(0,w.jsx)(g.Z,k()(k()({controls:!1,step:P.step,min:P.min,max:P.max,disabled:P.disabled},En),{},{onBlur:function(){var Mn;(Mn=P.onBlur)===null||Mn===void 0||Mn.call(P)},value:P.value,onChange:Fn,style:k()(k()({},O==null?void 0:O.inputNumber),En==null?void 0:En.style),className:E()($==null?void 0:$.inputNumber,En==null?void 0:En.className)}))]})]})}var F=b.forwardRef(function(P,q){var tn=(0,Q.getCommonConfig)(),an=tn.sparkPrefix,cn=G();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(cn,{}),(0,w.jsx)(l.Z,k()(k()({},P),{},{className:E()("".concat(an,"-slider"),A()({},"".concat(an,"-slider-no-marks"),!Object.keys(P.marks||{}).length),P.className),ref:q}))]})}),u=F;Object.assign(u,{Input:p});var R=u},88886:function(Ln,J,e){e.d(J,{Z:function(){return G}});var X=e(9783),k=e.n(X),Y=e(93865),A=e(9361),Q=e(38703),l=e(93967),z=e.n(l),E=e(68400),b=e.n(E),U=e(3067),W,Z=(0,U.Z)(W||(W=b()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix}),L=e(85893),G=function(i){var S=i.indicator,g=i.spinning,v=g===void 0?!0:g,C=i.children,w=i.style,m=i.className,p=(0,Y.getCommonConfig)(),F=p.sparkPrefix,u=A.Z.useToken(),R=Z(),P=(0,L.jsxs)("svg",{className:"".concat(F,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,L.jsx)("defs",{children:(0,L.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,L.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,L.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,L.jsx)("g",{children:(0,L.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:u.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,L.jsx)("g",{children:(0,L.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:u.token.colorPrimary,fillOpacity:"1"})})]})]}),q=i.tip||i.showProgress&&(0,L.jsxs)("div",{children:[(0,L.jsxs)("span",{children:["loading",i.percent!==void 0&&i.percent!==null&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:i.percent}),"%"]})]}),(0,L.jsx)(Q.Z,{percent:i.percent,showInfo:!1})]})||null;return C?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(R,{}),(0,L.jsxs)("div",{className:z()("".concat(F,"-spinner-overlay"),m),style:w,children:[(0,L.jsx)("div",{className:z()("".concat(F,"-spinner-content"),k()({},"".concat(F,"-spinning"),v)),children:C}),v&&(0,L.jsxs)("div",{className:"".concat(F,"-spinner"),children:[(0,L.jsx)("div",{className:"".concat(F,"-indicator"),children:S||P}),(0,L.jsx)("div",{className:"".concat(F,"-title"),children:q})]})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(R,{}),(0,L.jsx)("div",{className:z()("".concat(F,"-spinner"),m),style:w,children:v&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"".concat(F,"-indicator"),children:S||P}),(0,L.jsx)("div",{className:"".concat(F,"-title"),children:q})]})})]})}},95542:function(Ln,J,e){e.d(J,{Z:function(){return W}});var X=e(97857),k=e.n(X),Y=e(55054),A=e(68400),Q=e.n(A),l=e(3067),z,E=(0,l.Z)(z||(z=Q()([`
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
`])),function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix},function(Z){return Z.antPrefix}),b=e(85893),U=function(L){var G=E();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(G,{}),(0,b.jsx)(Y.Z,k()({},L))]})},W=U},89806:function(Ln,J,e){e.d(J,{Z:function(){return G}});var X=e(97857),k=e.n(X),Y=e(93865),A=e(97634),Q=e(42119),l=e(67294),z=e(68400),E=e.n(z),b=e(3067),U,W=(0,b.Z)(U||(U=E()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),Z=e(85893),L=function(S){var g=(0,Y.getCommonConfig)(),v=g.sparkPrefix,C=W(),w=(0,l.useMemo)(function(){if(S.items)return S.items.map(function(m,p){var F=m.status;return!F&&S.current!==void 0&&(p<S.current?F="finish":p===S.current?F="process":F="wait"),F==="finish"?k()(k()({},m),{},{icon:(0,Z.jsx)(A.Z,{className:"".concat(v,"-finish-icon")})}):m})},[S.items,S.current]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(C,{}),(0,Z.jsx)(Q.Z,k()(k()({},S),{},{items:w,className:"".concat(v,"-steps")}))]})},G=L},59113:function(Ln,J,e){e.d(J,{Z:function(){return i}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(86250),l=e(72269),z=e(93865),E=e(68400),b=e.n(E),U=e(3067),W,Z=(0,U.Z)(W||(W=b()([`
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
`])),function(S){return S.sparkPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.sparkPrefix}),L=e(85893),G=["label","className"],i=function(S){var g=Z(),v=S.label,C=S.className,w=A()(S,G),m=(0,z.getCommonConfig)(),p=m.sparkPrefix;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(g,{}),(0,L.jsxs)(Q.Z,{align:"center",gap:8,className:C,children:[(0,L.jsx)(l.Z,k()(k()({},w),{},{className:"".concat(p,"-switch")})),v&&(0,L.jsx)("span",{className:"".concat(p,"-switch-label"),children:v})]})]})}},80731:function(Ln,J,e){e.d(J,{Z:function(){return g}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(52253),z=e(70661),E=e(93967),b=e.n(E),U=e(68400),W=e.n(U),Z=e(3067),L,G=(0,Z.Z)(L||(L=W()([`
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
`])),function(v){return v.sparkPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix},function(v){return v.antPrefix}),i=e(85893),S=["columns"];function g(v){var C,w=(0,Q.getCommonConfig)(),m=w.sparkPrefix,p=v.columns,F=A()(v,S);p=(C=p)===null||C===void 0?void 0:C.map(function(R){return k()(k()({},R),{},{sortIcon:R.sortIcon||function(){return(0,i.jsx)(l.Z,{style:{fontSize:16,marginLeft:8}})}})});var u=G();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{}),(0,i.jsx)(z.Z,k()({className:b()("".concat(m,"-table")),columns:p},F))]})}},20010:function(Ln,J,e){e.d(J,{Z:function(){return v}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(66309),z=e(93967),E=e.n(z),b=e(67294),U=e(68400),W=e.n(U),Z=e(3067),L,G=(0,Z.Z)(L||(L=W()([`
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
`])),function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.sparkPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix},function(C){return C.sparkPrefix},function(C){return C.antPrefix},function(C){return C.antPrefix}),i=e(85893),S=["children","className","bordered","color","size"],g=(0,b.forwardRef)(function(C,w){var m=C.children,p=C.className,F=C.bordered,u=F===void 0?!1:F,R=C.color,P=R===void 0?"mauve":R,q=C.size,tn=q===void 0?"middle":q,an=A()(C,S),cn=G(),O=(0,Q.getCommonConfig)(),$=O.sparkPrefix;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(cn,{}),(0,i.jsx)(l.Z,k()(k()({className:E()("".concat($,"-tag ").concat($,"-tag-").concat(P," ").concat($,"-tag-").concat(tn),p),bordered:u},an),{},{ref:w,children:m}))]})}),v=g},69298:function(Ln,J,e){e.d(J,{Z:function(){return F}});var X=e(97857),k=e.n(X),Y=e(13769),A=e.n(Y),Q=e(93865),l=e(78874),z=e(9361),E=e(55839),b=e(68351),U=e(93967),W=e.n(U),Z=e(67294),L=e(68400),G=e.n(L),i=e(3067),S,g=(0,i.Z)(S||(S=G()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),v=e(85893),C=["className","popupClassName"],w=["className","popupClassName"],m=function(R){var P=R.className,q=R.popupClassName,tn=A()(R,C),an=z.Z.useToken(),cn=an.token,O=(0,Q.getCommonConfig)(),$=O.sparkPrefix,un=g();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(un,{}),(0,v.jsx)(E.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary}}},children:(0,v.jsx)(b.Z,k()({suffixIcon:(0,v.jsx)(l.Z,{}),className:W()("".concat($,"-picker"),P),popupClassName:W()("".concat($,"-picker-dropdown"),q)},tn))})]})},p=function(R){var P=R.className,q=R.popupClassName,tn=A()(R,w),an=z.Z.useToken(),cn=an.token,O=(0,Q.getCommonConfig)(),$=O.sparkPrefix,un=g();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(un,{}),(0,v.jsx)(E.ZP,{theme:{components:{DatePicker:{activeBorderColor:cn.colorPrimary}}},children:(0,v.jsx)(b.Z.RangePicker,k()({suffixIcon:(0,v.jsx)(l.Z,{}),className:W()("".concat($,"-picker"),P),popupClassName:W()("".concat($,"-picker-dropdown"),q),popupStyle:{padding:0}},tn))})]})};m.RangePicker=p;var F=m},21618:function(Ln,J,e){e.d(J,{Z:function(){return cn}});var X=e(97857),k=e.n(X),Y=e(5574),A=e.n(Y),Q=e(13769),l=e.n(Q),z=e(67294),E=e(93967),b=e.n(E),U=e(67985),W=e(38703),Z=e(63701),L=e(62321),G=e(20399),i=e(80162),S=e(32485),g=e(93865),v=e(85893),C=function($){var un=Math.floor($/60),En=Math.floor($%60);return"".concat(un.toString().padStart(2,"0"),":").concat(En.toString().padStart(2,"0"))},w=function($){var un=$.className,En=$.isPlaying,An=$.onPlayPause,jn=$.onFullscreen,vn=$.onProgressClick,pn=$.enableAudio,Bn=pn===void 0?!1:pn,Fn=$.muted,Vn=Fn===void 0?!0:Fn,Mn=$.onMute,Jn=(0,g.getCommonConfig)(),kn=Jn.sparkPrefix,yn=(0,z.useMemo)(function(){return C($.currentTime||0)},[$.currentTime]),hn=(0,z.useMemo)(function(){return C($.duration||0)},[$.duration]),Rn=(0,z.useMemo)(function(){return Math.min(($.currentTime||0)/($.duration||.01)*100,100)},[$.currentTime,$.duration]),Nn=function(_n){if(!(!vn||!$.duration)){var Yn=_n.currentTarget.getBoundingClientRect(),de=_n.clientX-Yn.left,ne=Yn.width,fe=de/ne,ge=fe*$.duration,he=Math.max(0,Math.min(ge,$.duration));vn(he)}};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"".concat(kn,"-video-player-controller ").concat(un||""),children:[(0,v.jsx)(U.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:En?(0,v.jsx)(Z.Z,{}):(0,v.jsx)(L.Z,{}),onClick:An}),(0,v.jsx)(U.Z,{bordered:!1,size:"small",shape:"default",disabled:!Bn,icon:Bn&&Vn?(0,v.jsx)(G.Z,{}):(0,v.jsx)(i.Z,{}),onClick:Mn}),(0,v.jsx)("span",{className:"".concat(kn,"-video-time-text"),children:yn}),(0,v.jsx)("div",{className:"".concat(kn,"-video-progress-container"),onClick:Nn,children:(0,v.jsx)(W.Z,{className:"".concat(kn,"-video-progress-bar"),percent:Rn,showInfo:!1})}),(0,v.jsx)("span",{className:"".concat(kn,"-video-time-text"),children:hn}),(0,v.jsx)(U.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,v.jsx)(S.Z,{}),onClick:jn})]})})},m=w,p=e(76526),F=e(68400),u=e.n(F),R=e(3067),P,q=(0,R.Z)(P||(P=u()([`
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
`])),function(O){return O.sparkPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.sparkPrefix},function(O){return O.sparkPrefix},function(O){return O.sparkPrefix},function(O){return O.sparkPrefix},function(O){return O.sparkPrefix},function(O){return O.antPrefix},function(O){return O.sparkPrefix},function(O){return O.sparkPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix},function(O){return O.antPrefix}),tn=["controls","mouseEnterAutoPlay","children","className","style"],an=(0,z.forwardRef)(function(O,$){var un=O.controls,En=O.mouseEnterAutoPlay,An=En===void 0?!1:En,jn=O.children,vn=O.className,pn=O.style,Bn=l()(O,tn),Fn=(0,g.getCommonConfig)(),Vn=Fn.sparkPrefix,Mn=q(),Jn=(0,z.useState)(0),kn=A()(Jn,2),yn=kn[0],hn=kn[1],Rn=(0,z.useState)(0),Nn=A()(Rn,2),wn=Nn[0],_n=Nn[1],Yn=(0,z.useState)(!1),de=A()(Yn,2),ne=de[0],fe=de[1],ge=(0,p.Z)(O,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),he=A()(ge,2),Pe=he[0],be=he[1],me=(0,z.useState)(!1),Se=A()(me,2),Ue=Se[0],Ae=Se[1],Qn=(0,z.useRef)(null),Ze=(0,z.useRef)(!1),$e=function(ye){Qn.current=ye,$&&(typeof $=="function"?$(ye):$.current=ye)};(0,z.useEffect)(function(){var ce;return ne&&(ce=setInterval(function(){Qn.current&&hn(Qn.current.currentTime)},16)),function(){ce&&clearInterval(ce)}},[ne]);var Me=function(){return window.videoRef=Qn.current,Qn.current?"mozHasAudio"in Qn.current?(Ae(Qn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in Qn.current?(Ae(Qn.current.webkitAudioDecodedByteCount>0),!0):(Ae(!1),!1):!1},fn=function(){Qn.current&&_n(Qn.current.duration)},Fe=function(){Qn.current&&(ne?Qn.current.pause():Qn.current.play(),fe(!ne))},_e=function(){fe(!0)},on=function(){fe(!1)},We=function(){Qn.current&&Qn.current.requestFullscreen&&Qn.current.requestFullscreen()},nt=function(){var ye;fe(!1),hn((ye=Qn.current)===null||ye===void 0?void 0:ye.duration)},r=function(){An&&!Ze.current&&(ne||(Qn.current.play(),Ze.current=!0))},et=function(){An&&Ze.current&&(Ze.current=!1)},tt=function(ye){Qn.current&&(Qn.current.currentTime=ye,hn(ye))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Mn,{}),(0,v.jsx)("div",{className:b()("".concat(Vn,"-video-container"),vn),style:pn,children:(0,v.jsxs)("div",{className:"".concat(Vn,"-video-content"),onMouseEnter:r,onMouseLeave:et,children:[(0,v.jsx)("video",k()(k()({ref:$e},Bn),{},{muted:Pe,className:"".concat(Vn,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:fn,onCanPlayThrough:Me,onPlay:_e,onPause:on,onEnded:nt})),un&&(0,v.jsx)(m,{className:"".concat(Vn,"-video-controller-wrapper"),isPlaying:ne,currentTime:yn,duration:wn,enableAudio:Ue,muted:Pe,onMute:function(){return be(!Pe)},onPlayPause:Fe,onFullscreen:We,onProgressClick:tt}),jn]})})]})}),cn=an},51850:function(Ln,J,e){e.d(J,{Z:function(){return Q}});var X=e(97857),k=e.n(X),Y=e(67294),A=new Map;function Q(l){var z=l.globalStyle,E=l.name;(0,Y.useLayoutEffect)(function(){var b=A.get(z)||0;if(b)A.set(z,k()(k()({},b),{},{count:b.count+1}));else{var U=document.createElement("style"),W=Math.random().toString(36).slice(2);U.innerHTML=z,U.dataset.id=W,U.dataset.flag="bailian-ui-use-style",E&&U.setAttribute("name",E),document.head.appendChild(U),A.set(z,{count:1,id:W})}return function(){var Z=A.get(z);A.set(z,k()(k()({},Z),{},{count:Z.count-1})),setTimeout(function(){var L=A.get(z);if((L==null?void 0:L.count)<=0){var G;A.delete(z),(G=document.head.querySelector('[data-id="'+L.id+'"]'))===null||G===void 0||G.remove()}},100)}},[z])}},21659:function(Ln,J,e){e.r(J),e.d(J,{Alert:function(){return hn.Z},AlertDialog:function(){return fe.default},Anchor:function(){return ge.Z},Avatar:function(){return he.Z},BLActionsColumn:function(){return Pi},BLAlert:function(){return Ja},BLAppLayout:function(){return jr},BLAppLayoutWithBack:function(){return Si},BLBackIcon:function(){return Ut},BLBackTitle:function(){return oo},BLButton:function(){return Ee},BLCardSelector:function(){return lo},BLConfigProvider:function(){return Vl},BLDatasetCascader:function(){return ll},BLDrawer:function(){return uo},BLDropMenu:function(){return xo},BLDropdown:function(){return Me.Z},BLEllipsisTip:function(){return dt},BLErrorMessage:function(){return Ki.Z},BLFeeds:function(){return Bi},BLFilesInput:function(){return $r},BLForm:function(){return Eo},BLHelpIcon:function(){return ai},BLIconFont:function(){return Dn},BLIdIcon:function(){return ii},BLImgloader:function(){return Ti},BLIntroHeaderCard:function(){return kr},BLLoadingIcon:function(){return tr},BLModal:function(){return Yt},BLModelPriceComp:function(){return Tr},BLPaginitionSelect:function(){return ul},BLPopconfirm:function(){return ko},BLPopover:function(){return Xe},BLSLRModal:function(){return el},BLSearch:function(){return Io},BLSelect:function(){return or},BLSliderSelector:function(){return ci},BLTable:function(){return Jo},BLTag:function(){return vi},BLTagPreset:function(){return $n},BLTooltip:function(){return Yo},BLUpload:function(){return ti},BLVideoPlayer:function(){return Qi},Badge:function(){return Rn.Z},Breadcrumb:function(){return Pe.Z},Button:function(){return be.Z},Card:function(){return me.Z},Checkbox:function(){return Se.Z},CodeBlock:function(){return Ue.ZP},CodeBlockLangExtensionsMap:function(){return Ue.xO},Collapse:function(){return Ae.Z},CollapsePanel:function(){return Qn.Z},ConfigProvider:function(){return Ye.ZP},DEFAULT_ICON_FONT_URL:function(){return qr},DatasetGroupPublishStatus:function(){return zr},DatasetGroupType:function(){return il},DatePicker:function(){return Ze.Z},Descriptions:function(){return Ia.Z},Drawer:function(){return $e.Z},Dropdown:function(){return Me.Z},EllipsisTip:function(){return et},Empty:function(){return tt.Z},FileCard:function(){return _r.s},FileIcon:function(){return _r.Z},FilesInput:function(){return $r},FloatButton:function(){return Nn.Z},Form:function(){return ce.Z},HelpIcon:function(){return oa},IconButton:function(){return jt.Z},IconFont:function(){return ia.Z},Image:function(){return la.Z},Input:function(){return Et.Z},InputNumber:function(){return wn.Z},IntroHeaderCard:function(){return kr},MdEditor:function(){return Bt.Z},Modal:function(){return Qe.Z},ModelPriceComp:function(){return Tr},Pagination:function(){return sa.Z},Popconfirm:function(){return ua.Z},Popover:function(){return Nt.Z},Progress:function(){return _n.Z},PromptsEditor:function(){return Bt.Z},Radio:function(){return Yn.ZP},RadioButton:function(){return da.default},Result:function(){return fa.Z},Select:function(){return de.default},Skeleton:function(){return ne.Z},SlateEditor:function(){return Za},Slider:function(){return st.Z},SliderSelector:function(){return wa},Spinner:function(){return Ma.Z},Statistic:function(){return Ra.Z},Steps:function(){return ma.Z},Switch:function(){return za.Z},Table:function(){return Ua.Z},Tabs:function(){return Mt.Z},Tag:function(){return $a.Z},TimePicker:function(){return Wa.Z},Tooltip:function(){return Ve.Z},Upload:function(){return Va.Z},Video:function(){return Qa.Z},bailianDarkTheme:function(){return ea},bailianTheme:function(){return na},base64Decoder:function(){return Hl},base64Encoder:function(){return Kl},carbonDarkTheme:function(){return Jl},carbonTheme:function(){return Gl},copy:function(){return je.JG},delay:function(){return Wr},fetcherIo:function(){return Or.v},fetcherPop:function(){return hl},generateThemeByToken:function(){return Q.Z},getCommodityCodes:function(){return qe},getCommonConfig:function(){return fn.getCommonConfig},getRegionName:function(){return Fl},message:function(){return we.Z},notification:function(){return ca.Z},parseJsonSafely:function(){return Ql},purpleDarkTheme:function(){return ea},purpleTheme:function(){return na},renderTooltip:function(){return je.rb},requestPop:function(){return vt},requestPopSse:function(){return Rl},requestSse:function(){return Jr},safeHtml:function(){return fl.t},setCommonConfig:function(){return fn.setCommonConfig},staticRenderer:function(){return Te},useBailianStyle:function(){return yn},useCommonConfig:function(){return fn.useCommonConfig},useGlobalStyle:function(){return dl.Z},waitForDom:function(){return Pl},waitForFunc:function(){return Kr}});var X=e(23577),k=e(19888),Y=e(44719),A=e(57249),Q=e(68289),l=e(67294),z=e(68400),E=e.n(z),b=e(3067),U,W=(0,b.Z)(U||(U=E()([`
  .`,`-btn {
    box-shadow: none;

    &.`,`-btn-sm {
      gap: 4px;

      .`,`-btn-icon {
        line-height: 1;
        .`,`-icon {
          font-size: 14px;
        }
      }
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Z,L=(0,b.Z)(Z||(Z=E()([`
  /* drawer */
  .`,`-drawer {
    .`,`-drawer-header-title {
      position: relative;

      .`,`-drawer-close {
        position: absolute;
        right: 0;
        margin: 0;
        font-size: 20px;

        .`,`-icon {
          font-size: 20px;
        }
      }
    }

    .`,`-drawer-footer {
      padding: 16px 24px;
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),G,i=(0,b.Z)(G||(G=E()([`
  /* TODO: \u6062\u590D\u8FD9\u4E9B\u6837\u5F0F\u5982\u679C\u9700\u8981
  .@{ant-prefix}-dropdown {
    .@{ant-prefix}-dropdown-menu {
      max-height: 80vh;
      overflow: auto;
    }
  }
  */

  .`,`-dropdown-trigger {
    cursor: pointer;
  }

  .`,"-dropdown .","-dropdown-menu .",`-dropdown-menu-item {
    font-weight: 400;
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),S,g=(0,b.Z)(S||(S=E()([`
  .`,`-empty {
    .`,`-empty-image {
      background: url('https://img.alicdn.com/imgextra/i1/O1CN012XXYLZ1lmOFmxax2Q_!!6000000004861-55-tps-184-117.svg') center center no-repeat;
      background-size: contain;
      height: 100px;

      svg {
        display: none;
      }
    }
  }

  .`,`-spin-nested-loading {
    .`,`-spin-blur {
      .`,`-empty {
        opacity: 0;
      }
    }
  }

  .`,"-empty .",`-empty-description {
    color: var(--`,`-color-text-description);
    font-size: 12px;
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),v,C=(0,b.Z)(v||(v=E()([`
  /* form */
  /* \u8868\u5355\u4E2D\u9009\u62E9\u6846\u5BBD\u5EA6\u8BBE\u7F6E\u4E3A100% */
  .`,`-legacy-form,
  .`,`-form-horizontal {
    .`,`-select {
      width: 100%;
    }
  }

  .`,"-form-item:not(.",`-form-item-with-help) {
    margin-bottom: 16px;
  }

  .`,`-form-item-horizontal {
    .`,`-form-item-label > label {
      white-space: pre-wrap !important;
      height: unset;
    }
  }

  .`,`-form-item-label > label {
    margin-right: 20px;
  }

  .`,"-form-item .",`-form-item-label {
    text-align: left;
    font-weight: 400;
    color: var(--`,`-color-text-description);

    > label {
      .`,`-form-item-tooltip {
        /* label\u548Ctip\u56FE\u6807\u4E4B\u95F4\u6DFB\u52A04px\u95F4\u8DDD */
        margin-left: 4px;
        /* hover\u65F6\u9F20\u6807\u4ECE\u95EE\u53F7\u6539\u4E3A\u5C0F\u624B */
        cursor: pointer;
        color: var(--`,`-color-icon);

        &.`,`-icon {
          line-height: unset;
        }

        /* \u517C\u5BB9antd help icon */
        &.anticon {
          line-height: 22px;
          height: 22px;
        }

        &:hover {
          color: var(--`,`-color-icon-hover);
        }
      }

      line-height: 22px;
      padding: 5px 0;
      white-space: nowrap;

      /* \u53D6\u6D88\u5C55\u793A\u540E\u9762\u7684\u5192\u53F7 */
      &::after {
        content: '';
        display: none;
      }
    }
  }

  .`,`-form-item-vertical {
    .`,`-form-item-control-input {
      min-height: unset;
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),w,m=(0,b.Z)(w||(w=E()([`
  .`,`-col {
    min-height: unset;
  }
`])),function(n){return n.antPrefix}),p,F=(0,b.Z)(p||(p=E()([`
  .`,`-input-group {
    .`,`-select {
      width: auto;
    }
  }

  /* input\u60AC\u505C\u9634\u5F71\u6548\u679C */
  .`,`-form-item-control-input,
  .`,`-input-wrapper,
  .`,`-input-affix-wrapper {
    .`,`-input {
      &:hover {
        box-shadow: none;
      }
    }
  }

  /* textarea\u5B57\u6570\u663E\u793A\u9ED8\u8BA4\u5728\u8F93\u5165\u6846\u5185\u53F3\u4E0B\u89D2 */
  .`,`-input-textarea-show-count {
    position: relative;
    padding-bottom: 25px !important;

    .`,`-input-data-count {
      position: absolute;
      bottom: 4px;
      right: 12px;
      color: var(--`,`-color-text-disabled);
      margin-bottom: 0;
    }
  }

  /* \u8868\u5355\u4E2D\u7684textarea\u5E95\u90E8\u591A\u4E864px\u7684\u95F4\u8DDD */
  form textarea.`,`-input {
    margin-bottom: 0;
  }

  /* \u8F93\u5165\u6846\u7981\u7528\u65F6\uFF0C\u4E0D\u5C55\u793A\u957F\u5EA6\u63D0\u793A */
  .`,"-input-disabled + span > .",`-input-show-count-suffix {
    display: none;
  }

  .`,`-input-disabled {
    cursor: not-allowed;
  }

  /* \u8F93\u5165\u6846\u6587\u5B57\u6570\u91CF\u63D0\u793A\u7684\u95F4\u8DDD\u4FEE\u6539 */
  .`,`-input-show-count-suffix,
  .`,`-input-data-count {
    word-spacing: -2px;
  }

  /* TODO: \u4E0D\u5F3A\u5236\u5199\u9AD8\u5EA6\uFF0C\u5426\u5219\u5728\u5E26\u524D\u540E\u7F00\u7684\u65F6\u5019\u9AD8\u5EA6\u4F1A\u6BD4\u8BBE\u7F6E\u7684\u9AD8
  .@{ant-prefix}-input{
    height: 32px;
    &.@{ant-prefix}-input-sm{
      height: 24px;
    }
    &.@{ant-prefix}-input-lg{
      height: 40px;
    }
  }
  */
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),u,R=(0,b.Z)(u||(u=E()([`
  /* TODO: \u6062\u590D\u8FD9\u4E9B\u6837\u5F0F\u5982\u679C\u9700\u8981
  .@{ant-prefix}-input-number-input-wrap{
    .@{ant-prefix}-input-number-input{
      height: 100%;
    }
  }
  */

  .`,`-slider {
    user-select: none;
  }
`])),function(n){return n.antPrefix}),P,q=(0,b.Z)(P||(P=E()([`
  .`,`-layout {
    background: transparent;
  }

  .`,`-layout-sider {
    background: rgba(255, 255, 255, 50%);
    backdrop-filter: blur(12px);

    /* px-to-viewport-ignore-next */
    margin-top: -56px;
    min-height: 100vh;
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix}),tn,an=(0,b.Z)(tn||(tn=E()([`
  .`,`-modal {
    .`,`-modal-content {
      .`,`-modal-close-x {
        font-size: 20px;
      }
    }
  }

  /* \u89C6\u89C9\u8981\u6C42: Modal.info\u3001Modal.success\u3001Modal.error\u3001Modal.warning\u3001Modal.confirm \u5F39\u7A97\u4E2D\u5E95\u90E8\u6309\u94AEmargin-top\u4E3A24px */
  .`,"-modal-confirm .",`-modal-confirm-btns {
    margin-top: 24px;
  }

  /* TODO: \u4EE5\u4E0B\u6CE8\u91CA\u7684\u6837\u5F0F\u53EF\u80FD\u9700\u8981\u6839\u636E\u5B9E\u9645\u9700\u6C42\u91CD\u65B0\u6DFB\u52A0
  .@{ant-prefix}-modal {
    &:not(.@{ant-prefix}-modal-confirm-confirm) {
      .@{ant-prefix}-modal-body {
        // min-height: 242px; \u6682\u65F6\u4E0D\u8BBE\u7F6E\u6700\u5C0F\u9AD8\u5EA6\uFF0C\u9700\u8981\u6700\u5C0F\u9AD8\u5EA6\u7684\u5F39\u7A97\u81EA\u5DF1\u8BBE\u7F6E
        max-height: calc(100vh - 150px);
        overflow: auto;
      }
    }
    .@{ant-prefix}-modal-close {
      z-index: 1;
    }
    .@{ant-prefix}-modal-header {
      margin-right: 20px;
      margin-bottom: 16px;
    }
  }

  // \u5982\u679C\u9700\u8981modal\u5C3D\u91CF\u5360\u6EE1\u6574\u4E2A\u5C4F\u5E55\u9AD8\u5EA6, \u5219\u6DFB\u52A0\u5C5E\u6027wrapClassName="full-height-modal"
  .@{ant-prefix}-modal-wrap.full-height-modal {
    .@{ant-prefix}-modal-body {
      height: calc(100vh - 150px);
    }
  }
  */
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),cn,O=(0,b.Z)(cn||(cn=E()([`
  .`,"-select-outlined.","-select-multiple .",`-select-selection-item {
    background: var(--`,`-color-fill-tertiary);
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),$,un=(0,b.Z)($||($=E()([`
  /* \u6ED1\u52A8\u5DE6\u53F32\u4E2A\u70B9\u9690\u85CF */
  .`,`-slider-dot {
    &:first-of-type, &:last-of-type {
      display: none;
    }
  }

  .`,`-slider-mark-text:last-child {
    transform: translateX(-100%) !important;
  }

  .`,`-slider-mark-text-active {
    transform: translateX(0) !important;
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),En,An=(0,b.Z)(En||(En=E()([`
  /* \u8868\u683C */
  .`,`-table-wrapper {
    .`,`-table {
      /* \u7531\u4E8Eantd\u8BBE\u7F6E\u4E86table\u7EC4\u4EF6\u7684\u6EDA\u52A8\u6761\u6837\u5F0F, \u6240\u4EE5\u8FD9\u91CC\u8BBE\u7F6E\u4E3Aauto\u8FDB\u884C\u8986\u76D6, \u4F7Ftable\u7684\u6EDA\u52A8\u6761\u6837\u5F0F\u4E0E\u5176\u4ED6\u6EDA\u52A8\u6761\u4FDD\u6301\u4E00\u81F4 */
      scrollbar-color: auto;
    }
  }
  
  .`,`-table {
    .`,`-table-column-sorters {
      display: block;

      .`,`-table-column-title {
        margin-right: 8px;
        vertical-align: top;
      }

      .`,`-table-column-sorter {
        vertical-align: top;
      }
    }

    .`,`-table-filter-column {
      justify-content: unset;

      .`,`-table-column-title {
        flex: unset;
      }
    }

    /* ========================= Nest Table =========================== */
    .`,"-table-tbody > tr > td > .","-table-wrapper:only-child .",`-table,
    .`,"-table-tbody > tr > td > .","-table-expanded-row-fixed > .","-table-wrapper:only-child .",`-table {
      margin: -8px -8px -8px 40px;
    }

    /* typography */
    .`,"-typography.",`-typography-ellipsis {
      margin-bottom: 0;
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),jn,vn=(0,b.Z)(jn||(jn=E()([`
  .`,"-tabs-small > .","-tabs-nav .",`-tabs-tab {
    font-size: var(--`,`-font-size-sm);
    line-height: 20px;
    padding: 8px 0;
  }

  .`,"-tabs-large > .","-tabs-nav .",`-tabs-tab {
    font-size: var(--`,`-font-size-lg);
    line-height: 24px;
    padding: 16px 0;
  }

  .`,"-tabs .",`-tabs-tab {
    font-size: var(--`,`-font-size);
    line-height: 22px;
    padding: 12px 0;
  }

  .`,"-tabs .","-tabs-tab.","-tabs-tab-active .",`-tabs-tab-btn {
    font-weight: 500;
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),pn,Bn=(0,b.Z)(pn||(pn=E()([`
  .`,`-tooltip {
    max-width: 500px;
    
    .`,`-tooltip-inner {
      border-radius: 8px;
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix}),Fn,Vn=(0,b.Z)(Fn||(Fn=E()([`
  .`,"-upload-wrapper .",`-upload-drag {
    background-color: var(--`,`-color-bg-layout);
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Mn=function(){var t=W(),a=L(),o=i(),s=g(),c=C(),f=m(),d=F(),h=R(),j=q(),x=an(),y=O(),I=un(),B=An(),D=vn(),K=Bn(),en=Vn();return function(){return l.createElement(l.Fragment,null,l.createElement(t),l.createElement(a),l.createElement(o),l.createElement(s),l.createElement(c),l.createElement(f),l.createElement(d),l.createElement(h),l.createElement(j),l.createElement(x),l.createElement(y),l.createElement(I),l.createElement(B),l.createElement(D),l.createElement(K),l.createElement(en))}},Jn=null,kn=function(){var t=Mn();return function(){return l.createElement(t)}},yn=kn,hn=e(40056),Rn=e(40411),Nn=e(32348),wn=e(13457),_n=e(38703),Yn=e(55742),de=e(34041),ne=e(48054),fe=e(37339),ge=e(15560),he=e(34952),Pe=e(21004),be=e(57027),me=e(48432),Se=e(34304),Ue=e(43158),Ae=e(81843),Qn=e(71615),Ze=e(8732),$e=e(11765),Me=e(28299),fn=e(93865),Fe=e(21317),_e=e(93967),on=e.n(_e),We,nt=(0,b.Z)(We||(We=E()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(n){return n.sparkPrefix}),r=e(85893);function et(n){var t=n.className,a=t===void 0?"":t,o=n.style,s=o===void 0?{}:o,c=n.children,f=n.rows,d=f===void 0?1:f,h=n.tooltip,j=h||c,x=(0,fn.getCommonConfig)(),y=x.sparkPrefix,I=nt();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{}),(0,r.jsx)(Fe.Z.Paragraph,{className:on()("".concat(y,"-ellipsis-tip"),a),style:s,ellipsis:{rows:d,tooltip:j},children:c})]})}var tt=e(21860),ce=e(32151),ye=e(97857),N=e.n(ye),ta=e(29368),jt=e(67985),ra=e(21773),Ve=e(33369),St,aa=(0,b.Z)(St||(St=E()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix});function oa(n){var t=(0,ra.X)(),a=aa(),o=n.style,s=n.content,c=n.className,f=n.popoverProps,d=(0,fn.getCommonConfig)(),h=d.sparkPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(a,{}),(0,r.jsx)(Ve.Z,N()(N()({title:s,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:o},f),{},{children:(0,r.jsx)(jt.Z,{className:on()("".concat(h,"-help-icon"),c),icon:(0,r.jsx)(ta.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var ia=e(49375),la=e(15713),Et=e(86995),we=e(56373),Qe=e(76561),ca=e(89887),sa=e(94476),ua=e(81930),Nt=e(14392),Bt=e(71493),da=e(5626),fa=e(65163),ma=e(89806),va=e(5574),Un=e.n(va),Le=e(23048),Ie=e(45360),H=e(37946),rt=e(57645),Oe=e(99963),Ft,xa=(0,b.Z)(Ft||(Ft=E()([`
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
`]))),ga=e(19632),De=e.n(ga),pa=(0,l.memo)(function(n){var t=n.attributes,a=n.children;return(0,r.jsx)("div",N()(N()({},t),{},{style:{marginTop:"8px"},children:a}))}),Lt,ha=(0,b.Z)(Lt||(Lt=E()([`
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
`]))),Pa=(0,l.memo)(function(n){var t=n.attributes,a=n.renderVarLabel,o=ha();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("span",N()(N()({},t),{},{children:[n.children,(0,r.jsx)("span",{className:"spark-editor-var-tag",children:a?a(n.element.code):n.element.label})]}))]})}),ec=function(t){return Object.keys(t).map(function(a){return{label:t[a].label,desc:t[a].desc,value:a}})},ya=[{code:"s",isParagraph:!0,out:[],inner:[],name:Le.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:pa,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Le.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:Pa,isInline:!0,isVoid:!0,type:"single"}],at=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},tc=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},ba=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},ot=function n(t,a){var o="",s=a||{},c=s.tagRules,f=c===void 0?{}:c;return t.forEach(function(d,h){if(H.W_.isElement(d)){var j=f[d.type];if(!j)o+=at(d.text);else switch(j.code){case"image":o+="![".concat(d.fileName,"](").concat(d.src,")");break;case"pdf":o+="[".concat(d.fileName,"](").concat(d.src,")");break;case"s":o+="".concat(n(d.children,a)).concat(h<t.length-1?`
`:"");break;case"var":o+="${".concat(d.code,"}");default:break}}else o+=at(d.text)}),o},kt=function(t,a){if(t&&t.children.length){var o=ot(t.children,a);return o==="<s></s>"?"":ba(o)}return""},Ke=function(t){if(!t)return"";var a="",o=at(t).replace(/\$\{([^{}]+?)\}/g,function(s,c){return'<var code="'.concat(c,'" label="${').concat(c,'}" />')});return o.split(`
`).forEach(function(s){a+="<s>".concat(s,"</s>")}),"<speak>".concat(a,"</speak>")},Ca=function n(t){var a,o=[];return(t==null||(a=t.childNodes)===null||a===void 0?void 0:a.length)>0&&t.childNodes.forEach(function(s,c,f){var d=s.nodeType,h=s.nodeName;if(d===1){for(var j={},x=0;x<s.attributes.length;x++){var y=s.attributes[x],I=y.nodeName,B=y.nodeValue;j[I]=B}var D=N()({type:h},j);s.childNodes.length>0?D.children=n(s):D.children=[{text:""}],o.push(D),h!=="s"&&(c>0&&f[c-1].nodeType===1&&o.unshift({text:""}),c===f.length-1&&o.push({text:""}))}else d===3&&o.push({text:s.nodeValue||""})}),o},He=function(t){if(t){var a=new DOMParser().parseFromString(t,"text/xml");return Ca(a)}},ja=function(t){if(!t||t.includes("</speak>"))return t;var a=t;return a.includes("<s>")||(a="<s>".concat(a,"</s>")),"<speak>".concat(a,"</speak>")},Dt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a={};return[].concat(De()(t),De()(ya)).forEach(function(o){a[o.code]||(a[o.code]=o)}),a},Sa=e(15009),Xn=e.n(Sa),Ea=e(99289),Ce=e.n(Ea),Tt=function(t,a,o){if(!(!t||!a)){var s=t.selection,c=null;s&&(c=s.focus),o!=null&&o.at&&(c=o==null?void 0:o.at),c||(c={path:[0,0],offset:0});var f=c,d=f.path,h=f.offset,j=H.NB.get(t,H.y$.parent(d));if(!H.ML.isVoid(t,j)){var x=H.NB.string(H.NB.get(t,d)),y=x.substring(0,h-(o!=null&&o.deletePrefix?1:0)),I=x.substring(h,x.length);H.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:I},path:d}),t.apply({type:"insert_node",node:a,path:d}),t.apply({type:"insert_node",node:{text:y},path:d});var B=H.y$.next(H.y$.next(H.y$.next(d)));t.apply({type:"remove_node",path:B,node:H.NB.get(t,B)});var D={path:H.y$.next(H.y$.next(d)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:D,focus:D}}),Oe.F3.focus(t),t.onChange()})}}},Na=function(){var n=Ce()(Xn()().mark(function t(a,o,s){var c,f,d,h,j,x,y,I,B,D,K,en,M,T,_,ln,sn,nn,xn,Pn,mn,Sn,Kn,ee,bn,Wn,le,dn,gn,ae,oe,Cn;return Xn()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!a||!o)){rn.next=2;break}return rn.abrupt("return");case 2:if(f=a.selection,d=s||{},h=d.tip,j=d.selection,x=j===void 0?f:j,y=s==null||(c=s.rules)===null||c===void 0?void 0:c[o.type],!(x&&!H.e6.isCollapsed(x))){rn.next=45;break}if(B=H.NB.fragment(a,x),D=Ge(B),D!==""){rn.next=10;break}return rn.abrupt("return");case 10:if(K=Je(H.e6.edges(x)),en=Un()(K,2),M=en[0],T=en[1],H.ML.isVoid(a,H.NB.get(a,H.y$.parent(M.path)))&&(M.path=H.y$.next(H.y$.parent(M.path)),M.offset=0),H.ML.isVoid(a,H.NB.get(a,H.y$.parent(T.path)))&&(T.path=H.y$.previous(H.y$.parent(T.path)),T.offset=H.NB.string(H.NB.get(a,T.path)).length),H.y$.hasPrevious(T.path)&&H.NB.get(a,H.y$.parent(M.path))===H.NB.get(a,H.y$.previous(T.path))&&M.offset===0&&T.offset===0&&(_=H.y$.previous(H.y$.parent(M.path)),ln=H.NB.get(a,_),M.path=_,M.offset=ln.text.length),H.NB.parent(a,M.path)!==H.NB.parent(a,T.path)){for(sn=H.NB.get(a,M.path),nn=Ge(H.NB.fragment(a,{anchor:{path:T.path,offset:0},focus:T}));H.xv.isText(sn)&&sn.text===""&&D===nn;)M.path.splice(M.path.length-1,1,1,0),sn=H.NB.get(a,M.path);for(xn=H.NB.get(a,T.path),Pn=H.NB.string(H.NB.get(a,H.e6.edges(x)[0].path)),mn=Ge(H.NB.fragment(a,{anchor:M,focus:{path:M.path,offset:Pn.length}}));H.xv.isText(xn)&&xn.text===""&&D===mn;)Sn=T.path[T.path.length-1],T.path.splice(T.path.length-1,1,Sn-1),xn=H.NB.get(a,T.path),H.W_.isElement(xn)&&(T.path.push(xn.children.length-1),T.offset=Pn.length)}if(H.NB.parent(a,M.path)===H.NB.parent(a,T.path)){rn.next=18;break}return Ie.ZP.info(Le.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),rn.abrupt("return");case 18:Kn=H.y$.parent(M.path),ee=(y==null?void 0:y.name)||it(),bn=H.NB.get(a,Kn),Wn=s==null||(I=s.rules)===null||I===void 0?void 0:I[bn.type];case 22:if(!(y!=null&&y.out&&Kn.length>1)){rn.next=30;break}if(y.out.includes(bn.type)){rn.next=27;break}return le=(Wn==null?void 0:Wn.name)||it(),Ie.ZP.warning(Le.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:ee,tagName:le})),rn.abrupt("return");case 27:Kn=H.y$.parent(Kn),rn.next=22;break;case 30:if(!(y!=null&&y.inner&&H.NB.get(a,M.path)!==H.NB.get(a,T.path))){rn.next=42;break}dn=H.y$.next(M.path);case 32:if(H.y$.equals(dn,T.path)){rn.next=42;break}if(ae=H.NB.get(a,dn),oe=s==null||(gn=s.rules)===null||gn===void 0?void 0:gn[ae.type],!(H.W_.isElement(ae)&&!y.inner.includes(ae.type))){rn.next=39;break}return Cn=(oe==null?void 0:oe.name)||it(),Ie.ZP.warning(Le.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:ee,tagName:Cn})),rn.abrupt("return");case 39:dn=H.y$.next(dn),rn.next=32;break;case 42:H.ML.withoutNormalizing(a,function(){var ue=H.NB.parent(a,M.path),xe=H.NB.fragment(ue,{anchor:{path:[M.path[M.path.length-1]],offset:M.offset},focus:{path:[T.path[T.path.length-1]],offset:T.offset}}),zn=H.NB.string(H.NB.get(a,M.path));if(H.y$.equals(M.path,T.path))a.apply({type:"remove_text",path:M.path,offset:M.offset,text:zn.substring(M.offset,T.offset)});else{a.apply({type:"remove_text",path:M.path,offset:M.offset,text:zn.substring(M.offset,zn.length)});for(var On=H.y$.next(M.path);!H.y$.equals(On,T.path);)a.apply({type:"remove_node",path:On,node:H.NB.get(a,On)}),T.path=H.y$.previous(T.path);var Zn=H.NB.string(H.NB.get(a,T.path));a.apply({type:"remove_text",path:T.path,offset:0,text:Zn.substring(0,T.offset)})}if(!H.y$.equals(M.path,T.path)){var Hn=H.NB.get(a,T.path);a.apply({type:"remove_node",path:T.path,node:Hn});var se=H.NB.string(Hn);a.apply({type:"insert_text",path:M.path,offset:M.offset,text:se})}Tt(a,N()(N()({},o),{},{children:xe}),{at:M,rules:s==null?void 0:s.rules})}),rn.next=46;break;case 45:h&&Ie.ZP.warning(h);case 46:case"end":return rn.stop()}},t)}));return function(a,o,s){return n.apply(this,arguments)}}(),rc=function(t,a,o){if(!(!t||!a)){var s=Node.get(t,a),c=Je(s.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:s,path:a}),c.forEach(function(D){t.apply({type:"insert_node",node:D,path:a})});for(var f=Path.parent(a),d=Node.get(t,f),h=0;Node.has(d,[h+1]);)if(Text.isText(Node.get(d,[h]))&&Text.isText(Node.get(d,[h+1]))){var j=_toConsumableArray(f);j.push(h+1);var x=Node.get(t,j),y=Node.string(x);t.apply({type:"remove_node",path:j,node:x});var I=Path.previous(j),B=Node.string(Node.get(t,I));t.apply({type:"insert_text",path:Path.previous(j),offset:B.length,text:y}),d=Node.get(t,f)}else h++;o==null||o(),Path.previous(a)})}},Ba=function(t,a,o){var s=o.at;t.apply({type:"set_node",path:s,properties:a,newProperties:a}),t.onChange()},ac=function(t,a,o){t.apply({type:"remove_node",path:o,node:Node.get(t,o)}),t.apply({type:"insert_node",path:o,node:a})},Fa=function(t,a){t&&(H.ML.withoutNormalizing(t,function(){var o=Je(t.children);o.forEach(function(c){t.apply({type:"remove_node",path:[0],node:c})});var s=a?Je(a):[{type:"s",children:[{text:""}]}];s.reverse(),s.forEach(function(c){t.apply({type:"insert_node",path:[0],node:c})})}),t.onChange())},Ge=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(a,o){return a+H.NB.string(o)},"")},Je=function(t){return JSON.parse(JSON.stringify(t))},it=function(){var t="";return t},oc=function(t){var a;return(a=t[0])===null||a===void 0||(a=a.children)===null||a===void 0?void 0:a.map(function(o){return o.children.map(function(s){return s.text}).join("")}).join("")},ic=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=t%60,o=parseInt("".concat(t/60)),s=0;return o>60&&(o=o%60,s=parseInt("".concat(o/60))),"".concat(s?"".concat(lt(s),":"):"").concat(lt(o),":").concat(lt(a))},lt=function(t){return t>=10?"".concat(t):"0".concat(t)},La=function(t,a){if(!(!t||!a))return Oe.F3.findPath(t,a)},ka=function(t){t&&H.ML.withoutNormalizing(t,function(){var a=H.ML.end(t,[]);H.YR.select(t,a),Oe.F3.focus(t),t.onChange()})},Da=function(t,a,o){var s=t.isInline,c=t.isVoid,f=t.insertText,d=t.insertBreak,h=t.apply;t.isInline=function(x){var y;return((y=o[x.type])===null||y===void 0?void 0:y.isInline)||s(x)},t.isVoid=function(x){var y;return((y=o[x.type])===null||y===void 0?void 0:y.isVoid)||c(x)};var j=function(y){var I=parseInt(t.maxLength||a||"1000"),B=kt(t,{tagRules:o}),D=B.length;if(D+y.length>I?(f(y.substring(0,I-D)),rt.MO.withoutSaving(t,function(){f(y.substring(I-D,y.length))})):f(y),t.selection&&D+y.length>I){var K=t.selection.focus,en=K.path,M=K.offset,T=M-(D+y.length-I),_=y.substring(I-D,y.length),ln=Le.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:I});rt.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:en,offset:T,text:_})}),Ie.ZP.warning(ln)}};return t.insertText=j,t.insertFragment=function(x){var y=Ge(x);j(y)},t.insertBreak=function(){var x=t.selection;if(x){var y=Array.from(H.ML.nodes(t,{at:x,match:function(K){return!H.ML.isEditor(K)&&H.W_.isElement(K)&&K.type!=="s"}})),I=Un()(y,1),B=I[0];if(B)return;d()}},t.apply=function(x){x.type==="set_selection"&&ct||h(x)},t},Ta=(0,l.forwardRef)(function(n,t){var a=xa(),o=n.value,s=n.wordLimit,c=s===void 0?1e3:s,f=n.disabled,d=n.onChange,h=n.variables,j=(0,l.useRef)(!1),x=(0,l.useRef)(Dt(n.tagRules)),y=(0,l.useMemo)(function(){return Da((0,Oe.BU)((0,rt.VC)((0,H.Jh)())),c,x.current)},[]),I=(0,l.useRef)(y.selection),B=(0,l.useRef)(h);(0,l.useEffect)(function(){x.current=Dt(n.tagRules)},[n.tagRules]),(0,l.useEffect)(function(){B.current=h},[h]),(0,l.useEffect)(function(){var Cn;if(!j.current){j.current=!0;return}y.maxLength=c;var V=mn();bn(((Cn=He(Ke(V==null?void 0:V.slice(0,c))))===null||Cn===void 0||(Cn=Cn[0])===null||Cn===void 0?void 0:Cn.children)||[{type:"s",children:[{text:""}]}])},[c]),(0,l.useImperativeHandle)(t,function(){return{editor:y,getEditorValue:mn,_insertNodes:Kn,_setNodes:Sn,_setEditorContent:bn,_findNodePath:le,_wrapNodes:ee,_serialize:dn,_generateTextBySelection:gn,_insertFragment:ae,_setEditorContentByStr:Wn}});var D=(0,l.useMemo)(function(){var Cn=He(ja(Ke(o))),V;return Cn&&(Cn[0].type==="speak"?V=Cn[0].children:V=Cn),{initValue:V}},[o]),K=D.initValue,en=(0,l.useState)(K||[{type:"s",children:[{text:""}]}]),M=Un()(en,2),T=M[0],_=M[1],ln=function(V){JSON.stringify((y==null?void 0:y.selection)||"")!==JSON.stringify(I.current||"")&&(I.current=y==null?void 0:y.selection);var rn=mn();o!==rn&&(d==null||d(mn()),_(V))},sn=function(V){var rn=V.element,ue=rn.type,xe=x.current[ue].render;return xe?(0,r.jsx)(xe,N()(N()({},V),{},{renderVarLabel:n.renderVarLabel})):(0,r.jsx)(r.Fragment,{})},nn=(0,l.useCallback)(function(Cn){var V=Cn.attributes,rn=Cn.children,ue=Cn.leaf;return(0,r.jsx)("span",N()(N()({},V),{},{style:{paddingLeft:ue.text===""?"3px":void 0},children:rn}))},[]),xn=function(){ct=!0},Pn=function(){ct=!1},mn=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt(y,N()(N()({},V),{},{tagRules:x.current}))},Sn=function(V,rn){Ba(y,V,rn)},Kn=function(V){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Tt(y,V,N()(N()({},rn),{},{rules:x.current}))},ee=function(V){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Na(y,V,N()(N()({},rn),{},{rules:x.current}))},bn=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Fa(y,V)},Wn=function(){var V,rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";bn(((V=He(Ke(rn==null?void 0:rn.slice(0,c))))===null||V===void 0||(V=V[0])===null||V===void 0?void 0:V.children)||[{type:"s",children:[{text:""}]}])},le=function(V){return La(y,V)},dn=function(V){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ot(V,N()(N()({},rn),{},{tagRules:x.current}))},gn=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!y.selection)return null;var rn=H.NB.fragment(y,y.selection);return ot(rn,N()(N()({},V),{},{tagRules:x.current}))},ae=function(V){var rn,ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,xe=mn();if(xe.length>=c){Ie.ZP.warning(Le.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!y.selection||ue)&&ka(y);var zn=xe.endsWith("/n");ue&&xe&&!zn&&y.insertBreak();var On=V.slice(0,c-xe.length),Zn=He(Ke(On))||[];(rn=Zn[0])===null||rn===void 0||rn.children.forEach(function(Hn,se){var Be;se!==0&&y.insertBreak(),(Be=Hn.children)===null||Be===void 0||Be.forEach(function(ze){ze.text?y.insertText(ze.text):Kn(ze)})})};(0,l.useEffect)(function(){var Cn=mn();o!==Cn&&(d==null||d(mn()))},[]);var oe=function(V){var rn=V.clipboardData.getData("text/plain");ae(rn,!1),V.preventDefault()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)("div",{id:"text-editor",className:on()("text-editor",n.className),children:(0,r.jsx)(Oe.mH,{editor:y,value:T,onChange:ln,children:(0,r.jsx)(Oe.CX,{onKeyDown:n.onKeyDown,placeholder:n.placeholder||Le.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:n.onBlur,onFocus:n.onFocus,className:on()("text-editor-content",n.contentClassName),readOnly:f,renderElement:sn,renderLeaf:nn,onCompositionStart:xn,onCompositionEnd:Pn,onPaste:oe,maxLength:n.wordLimit,onCopy:function(V){var rn=gn()||"";V.clipboardData.setData("text/plain",rn),V.preventDefault()}})})})]})}),Za=Ta,ct=!1,st=e(13191),Ma=e(88886),Ia=e(69065),Oa=e(9783),ve=e.n(Oa),Zt,Aa=(0,b.Z)(Zt||(Zt=E()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix});function wa(n){var t=(0,fn.getCommonConfig)(),a=t.sparkPrefix,o=Aa(),s=function(f){var d=typeof f=="string"?parseFloat(f):f;if(d===null||isNaN(d)){n.onChange(null);return}d<n.min?n.onChange(n.min):d>n.max?n.onChange(n.max):n.onChange(d)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{onMouseUp:function(){var f;return(f=n.onBlur)===null||f===void 0?void 0:f.call(n)},className:on()("".concat(a,"-slider-selector"),n.className),children:[(0,r.jsx)(st.Z,{disabled:n.disabled,onChange:s,value:n.value===null?void 0:n.value,min:n.min,max:n.max,step:n.step,marks:n.marks||ve()(ve()({},n.min,n.min),n.max,n.max),tooltip:{getPopupContainer:function(f){return f}}}),(0,r.jsx)("div",{style:N()({width:"48px"},n.inputNumberWrapperStyle),children:(0,r.jsx)(wn.Z,{disabled:n.disabled,controls:!1,min:n.min,max:n.max,onBlur:function(){var f;return(f=n.onBlur)===null||f===void 0?void 0:f.call(n)},step:n.step,value:n.value,onChange:s,precision:n.precision})})]})]})}var Ra=e(95542),za=e(59113),Ua=e(80731),Mt=e(91268),$a=e(20010),Wa=e(69298),Va=e(20946),Qa=e(21618),Ka=e(13769),qn=e.n(Ka),It,Ha=(0,b.Z)(It||(It=E()([`
  .`,`-alertWrapper {
    .`,`-ant-alert-message {
      line-height: 22px;
    }
    
    .`,`-iconFont {
      width: 16px;
      height: 22px;
    }
    
    .`,`-messageWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .`,`-info {
        align-self: flex-start;
        margin-right: 16px;
        flex: 1;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),lc=null,Ga=["type"];function Ja(n){var t=n.type,a=t===void 0?n.banner?"warning":"info":t,o=qn()(n,Ga),s=(0,fn.getCommonConfig)(),c=s.blPrefix,f=Ha();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(hn.Z,N()(N()({},o),{},{type:n.type||a,className:on()("".concat(c,"-alertWrapper"),o.className),action:n.action||n.button}))]})}function Ot(n,t){return Array.isArray(n)?Promise.all(n.map(function(a){return Ot(a,t)})):n?new Promise(function(a){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.onload=a,o.onerror=a,o.href=Xa(n,".css"),Ya(o,t)}):Promise.resolve()}function Xa(n,t){var a=n.includes(t)?n:"".concat(n).concat(t);return a}function Ya(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.head,o=a===void 0?!1:a;if(o==="after"){var s=document.body.firstChild||document.body.childNodes[0];document.body.insertBefore(n,s)}else o?document.head.appendChild(n):document.body.appendChild(n)}var qa=e(26910),ut=e(12801),_a=["type","className","isCursorPointer","spin"],At=!1,no=function(t){At||(At=!0,Ot(t,{head:!0}))};function Dn(n){var t=n.type,a=n.className,o=a===void 0?"":a,s=n.isCursorPointer,c=s===void 0?!1:s,f=n.spin,d=qn()(n,_a),h=(0,fn.getCommonConfig)(),j=h.blPrefix,x=(0,ut.X)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)("i",N()({style:n.styles,className:on()("bl-iconfont",(0,qa.Z)(t,"icon-")?"bl-".concat(t):t,c&&"".concat(j,"-cursor-pointer"),o,"".concat(j,"-icon"),ve()({},"".concat(j,"-icon-spin"),f))},d))]})}var Xe=function(n){var t=n.content===""||n.content===void 0||n.content===null,a=n.title===""||n.title===void 0||n.title===null,o=n.open!==void 0&&n.open!==null?n.open:t&&a?!1:void 0;return(0,r.jsx)(Nt.Z,N()(N()({},n),{},{open:o}))},wt,eo=(0,b.Z)(wt||(wt=E()([`
  .`,`-btn {
    height: 32px;
    padding: 0 16px;
    
    .`,`-btn-icon {
      line-height: 1;
    }
    
    &.`,`-large {
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
    }

    &.`,`-small {
      height: 24px;
      padding: 0 8px;
      font-size: 12px;
      gap: 4px;
      
      .`,`-btn-icon {
        .`,`-icon {
          font-size: 14px;
        }
      }
    }
    
    .`,`-icon {
      color: inherit;
    }
    
    /* no padding of link */
    &.`,"-btn-link.",`-link {
      padding: 0;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),cc=null,to=["className","disabled","tooltipContent","size","children","icon","iconType","onClick"];function Ee(n){var t=n.className,a=n.disabled,o=n.tooltipContent,s=n.size,c=s===void 0?"default":s,f=n.children,d=n.icon,h=n.iconType,j=n.onClick,x=qn()(n,to),y=eo(),I=(0,fn.getCommonConfig)(),B=I.blPrefix,D=on()("".concat(B,"-btn"),t,ve()(ve()({},"".concat(B,"-").concat(c),c),"".concat(B,"-link"),n.type==="link"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)(Xe,{content:o,children:(0,r.jsx)(be.Z,N()(N()({className:D,disabled:a,onClick:function(en){a||j==null||j(en)},icon:h?(0,r.jsx)(Dn,{className:"".concat(B,"-icon"),type:h}):d?(0,r.jsx)("span",{className:"".concat(B,"-iconWrap"),children:d}):null},x),{},{children:f}))})]})}var Rt=e(71681),zt,ro=(0,b.Z)(zt||(zt=E()([`
  .`,`-back-icon-wrapper {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    padding: 0;
    
    .`,`-back-icon {
      font-size: 24px;
    }
    
    &:hover {
      background-color: #EDEDF1;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix}),sc=null;function Ut(n){var t=n.onClick,a=(0,fn.getCommonConfig)(),o=a.blPrefix,s=ro();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(Ee,{type:"text",className:on()("".concat(o,"-back-icon-wrapper"),n.className),onClick:t,children:(0,r.jsx)(Rt.Z,{className:"".concat(o,"-back-icon")})})]})}var $t,ao=(0,b.Z)($t||($t=E()([`
  .`,`-back {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0;

    .`,`-title {
      font-size: 20px;
      font-weight: 500;
      height: 32px;
      line-height: 32px;
      color: var(--`,`-color-text-base);
    }

    .`,`-backTitle-back-icon {
      margin-right: 8px;
    }
  }

  .`,`-bizBreadCrumb {
    li .`,`-breadcrumb-link a {
      color: #686682;

      &:hover {
        color: #624aff;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),uc=null;function oo(n){var t=(0,fn.getCommonConfig)(),a=t.blPrefix,o=ao(),s=function(f){n.onBack?n.onBack(f):history.back()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{className:on()("".concat(a,"-back"),n.className),children:[(0,r.jsx)(Ut,{onClick:s,className:"".concat(a,"-backTitle-back-icon")}),(0,r.jsx)("div",{className:"".concat(a,"-title"),children:n.backTitle}),n.children]})]})}var Re=e(86250),Wt=e(84567),Vt,io=(0,b.Z)(Vt||(Vt=E()([`
  .`,`-card-selector {
    display: flex;
    gap: 16px;
    width: 100%;
    align-items: flex-start;
  }

  .`,`-card-selector-item {
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    width: calc((100% - 16px) / 2);

    .`,`-card-selector-desc {
      color: var(--`,`-color-text-description);
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 20px;
    }

    &:hover:not(.disabled) {
      border-color: #d8d9e6;
      box-shadow: 0 1px 6px 0 rgba(38, 36, 76, 12%);
    }

    &.disabled {
      cursor: not-allowed;
      
      .`,`-card-selector-title,
      .`,`-card-selector-desc {
        color: var(--`,`-color-text-disabled);
      }
    }

    &.active {
      border-color: #624aff;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),dc=null;function lo(n){var t=io(),a=n.options,o=n.value,s=n.type,c=s===void 0?"radio":s,f=(0,fn.getCommonConfig)(),d=f.blPrefix,h=function(y){switch(c){case"radio":n.onSelect(y);break;case"check":n.onSelect([].concat(De()(o||[]),[y]));break}},j=function(y){switch(c){case"radio":break;case"check":n.onSelect((o||[]).filter(function(I){return I!==y}));break}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)("div",{className:on()("".concat(d,"-card-selector"),n.className),children:a.map(function(x){var y=typeof x.disabled=="boolean"?x.disabled:n.getItemDisableStatus?n.getItemDisableStatus(x):!1,I=c==="radio"?o===x.value:o==null?void 0:o.includes(x.value);return(0,r.jsxs)("div",{onClick:function(){y||(I?j(x.value):h(x.value))},className:on()("".concat(d,"-card-selector-item"),ve()(ve()({},"active",I),"disabled",y)),children:[(0,r.jsxs)(Re.Z,{gap:"center",justify:"space-between",children:[(0,r.jsxs)(Re.Z,{gap:8,align:"center",children:[(0,r.jsx)("span",{className:"".concat(d,"-card-selector-title"),children:x.label}),n.actionElement]}),c==="radio"?(0,r.jsx)(Yn.ZP,{checked:I}):(0,r.jsx)(Wt.Z,{checked:I})]}),(0,r.jsx)(Fe.Z.Paragraph,{className:"".concat(d,"-card-selector-desc"),ellipsis:{tooltip:x.desc,rows:2},children:x.desc})]},x.value)})})]})}var Tn=e(7808),Qt,co=(0,b.Z)(Qt||(Qt=E()([`
  .`,`-drawer {
    .`,`-drawer-body {
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    
    .`,`-content {
      flex: 1;
      overflow: auto;
      padding: 24px;
    }

    .`,`-footer {
      flex-shrink: 0;
      padding: 0 24px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row-reverse;
      border-top: 1px solid #dedede;
      gap: 8px;

      .`,`-btn {
        button {
          padding: 0 16px;
        }
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),fc=null,so=["className","children","cancelText","okBtnClk","okText","footer","hiddenOk","hiddenCancel","disabledOk","hiddenFooter"];function uo(n){var t=n.className,a=n.children,o=n.cancelText,s=n.okBtnClk,c=n.okText,f=n.footer,d=n.hiddenOk,h=d===void 0?!1:d,j=n.hiddenCancel,x=j===void 0?!1:j,y=n.disabledOk,I=y===void 0?!1:y,B=n.hiddenFooter,D=B===void 0?!1:B,K=qn()(n,so),en=(0,fn.getCommonConfig)(),M=en.blPrefix,T=co();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{}),(0,r.jsxs)($e.Z,N()(N()({className:on()("".concat(M,"-drawer"),t),footer:f},K),{},{children:[(0,r.jsx)("div",{className:"".concat(M,"-content"),children:a}),!n.footer&&!D&&(0,r.jsxs)("div",{className:"".concat(M,"-footer"),children:[!x&&(0,r.jsx)(Ee,{onClick:n.onClose,className:"".concat(M,"-btn"),children:o||Tn.Z.get({id:"pages.uiComponents.BizDrawer.Cancel",dm:"\u53D6\u6D88"})}),!h&&(0,r.jsx)(Ee,{disabled:I,onClick:s,className:"".concat(M,"-btn"),type:"primary",children:c||Tn.Z.get({id:"pages.uiComponents.BizDrawer.Ok",dm:"\u786E\u5B9A"})})]})]}))]})}var fo=e(33309),Kt,mo=(0,b.Z)(Kt||(Kt=E()([`
  .`,`-moreIcon {
    color: var(--`,`-color-text-description);
    cursor: pointer;
    font-size: 20px;
    transform: rotate(90deg);
    width: 24px;
    height: 24px;
    line-height: 24px;

    &:hover {
      background-color: #f1f1f5;
      border-radius: 4px;
    }
  }

  /* Global dropdown styles */
  .`,`-dropdown-menu,
  .`,`-dropdown-menu-item {
    border-radius: 8px !important;
  }

  .`,`-dropdown-menu {
    padding: 10px 12px;
    border: 1px solid #e3e4e6;
    box-shadow: 0 4px 8px 0 rgba(39, 38, 77, 16%);
  }

  .`,`-dropdown-menu-item {
    padding: 0 !important;
    color: #26244c;
  }

  .`,`-dropdown-menu-item:hover {
    background: #f6f5ff !important;
    color: #624aff;
  }

  /* TODO: Uncomment if needed
  .`,`-menuItem {
    padding: 8px 24px;
  }
  */

  .`,`-disabled {
    cursor: not-allowed;

    * {
      opacity: 0.65;
    }

    a {
      opacity: 1;
      margin-left: 8px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),mc=null,vo=["items","overlayClassName"];function xo(n){var t=n.items,a=n.overlayClassName,o=qn()(n,vo),s=(0,fn.getCommonConfig)(),c=s.blPrefix,f=mo(),d=function(j){return j.map(function(x){return{key:x.key,className:x.isDanger?"danger-operation":"",label:(0,r.jsxs)("div",{onClick:function(){var I;x.disabled||(I=x.onClick)===null||I===void 0||I.call(x,x.key)},className:on()("".concat(c,"-menuItem"),ve()({},"".concat(c,"-disabled"),x.disabled)),children:[(0,r.jsx)("span",{children:x.label}),x.extraAction]})}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(Me.Z,N()(N()({menu:{items:d(t)},trigger:["click"],overlayClassName:on()("".concat(c,"-overlay"),a),placement:"bottomRight"},o),{},{children:n.children||(0,r.jsx)(fo.Z,{className:"".concat(c,"-moreIcon")})}))]})}var Ht,go=(0,b.Z)(Ht||(Ht=E()([`
  div.`,`-ellipsis-tip {
    margin-bottom: 0;
    color: unset;
    line-height: 1.5;
    font-size: unset;
  }
`])),function(n){return n.blPrefix}),vc=null;function dt(n){var t=n.className,a=t===void 0?"":t,o=n.style,s=o===void 0?{}:o,c=n.children,f=n.rows,d=f===void 0?1:f,h=n.tooltip,j=h||c,x=(0,fn.getCommonConfig)(),y=x.blPrefix,I=go();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{}),(0,r.jsx)(Fe.Z.Paragraph,{className:on()("".concat(y,"-ellipsis-tip"),a),style:s,ellipsis:{rows:d,tooltip:j},children:c})]})}var po=e(52677),ho=e.n(po),Po=e(63349),Ne=e(45387),yo=e(78210),Gt,bo=(0,b.Z)(Gt||(Gt=E()([`
  .`,`-form {
    .`,`-required-mark {
      color: var(--`,`-color-error);
      margin-left: 4px;
      line-height: 1;
      margin-top: 6px;
    }
    
    .`,"-form-item .",`-form-item-label {
      text-align: left;
    }
  }

  .`,`-form-label-margin-small {
    .`,`-form-item-label > label {
      margin-right: 8px;
    }
  }

  .`,`-col {
    min-height: unset;
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),xc=null,Co=["tooltip"],jo=(0,l.forwardRef)(function(n,t){var a=n.labelMarginRight,o=a===void 0?void 0:a,s=(0,l.useRef)(null),c=(0,fn.getCommonConfig)(),f=c.blPrefix,d=bo();return(0,l.useImperativeHandle)(t,function(){return s.current}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(Ne.Z,N()(N()({},n),{},{className:on()(n.className,"".concat(f,"-form"),o==="small"&&"".concat(f,"-form-label-margin-small")),ref:s,requiredMark:function(j,x){return(0,r.jsxs)(r.Fragment,{children:[j,x.required&&(0,r.jsx)("span",{className:"".concat(f,"-required-mark"),children:"*"})]})}}))]})}),So=function(t){var a=t.tooltip,o=qn()(t,Co),s=(0,r.jsx)(Po.Z,{});function c(){if(a){var f=ho()(a)==="object"&&!l.isValidElement(a)?N()(N()({},a),{},{icon:a.icon||s}):{title:a,icon:s};return f}}return(0,r.jsx)(Ne.Z.Item,N()(N()({},o),{},{tooltip:c(),labelCol:t.labelCol||(t.layout==="vertical"?{flex:"unset"}:void 0)}))},Jt=So;Jt.useStatus=yo.Z.useStatus;var ke=jo;ke.Item=Jt,ke.List=Ne.Z.List,ke.ErrorList=Ne.Z.ErrorList,ke.Provider=Ne.Z.Provider,ke.useForm=Ne.Z.useForm,ke.useFormInstance=Ne.Z.useFormInstance,ke.useWatch=Ne.Z.useWatch;var Eo=ke,Xt,No=(0,b.Z)(Xt||(Xt=E()([`
  .`,`-modalCon {
    .`,`-modal-header {
      border-bottom: 0;
    }
  }

  .`,`-hiddenFooter {
    .`,`-modal-body {
      padding-bottom: 24px !important;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),gc=null,Bo=["footer","children","okText","hiddenCancel","hiddenOk","className","cancelText","okBtnProps","cancelBtnProps","hiddenFooter"];function Yt(n){var t=No(),a=n.footer,o=n.children,s=n.okText,c=s===void 0?Tn.Z.get({id:"pages.uiComponents.BizModal.Ok",dm:"\u786E\u5B9A"}):s,f=n.hiddenCancel,d=n.hiddenOk,h=n.className,j=n.cancelText,x=j===void 0?Tn.Z.get({id:"pages.uiComponents.BizModal.Cancel",dm:"\u53D6\u6D88"}):j,y=n.okBtnProps,I=y===void 0?{}:y,B=n.cancelBtnProps,D=B===void 0?{}:B,K=n.hiddenFooter,en=K===void 0?!1:K,M=qn()(n,Bo),T=(0,fn.getCommonConfig)(),_=T.blPrefix,ln=function(){if(en)return null;var nn=(0,r.jsxs)(r.Fragment,{children:[!f&&(0,r.jsx)(Ee,N()(N()({},D),{},{onClick:n.onCancel,children:x})),!d&&(0,r.jsx)(Ee,N()(N()({},I),{},{type:"primary",onClick:n.onOk,children:c}))]});return nn};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(Qe.Z,N()(N()({className:on()("".concat(_,"-modalCon"),h,ve()({},"".concat(_,"-hiddenFooter"),n.hiddenFooter))},M),{},{footer:a||ln(),children:(0,r.jsx)("div",{className:"".concat(_,"-content"),children:o})}))]})}var qt=e(86738),_t,Fo=(0,b.Z)(_t||(_t=E()([`
  .`,`-popconfirm {
    .`,"-popover-content .",`-popover-inner {
      padding: 12px 16px;
    }
  }

  .`,`-popconfirm-no-title {
    .`,`-popconfirm-message {
      .`,`-popconfirm-description {
        margin-top: 0;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),pc=null,Lo=["cancelText","okText","className","title"];function ko(n){var t=Fo(),a=n.cancelText,o=a===void 0?Tn.Z.get({id:"pages.uiComponents.BizPopConfirm.Cancel",dm:"\u53D6\u6D88"}):a,s=n.okText,c=s===void 0?Tn.Z.get({id:"pages.uiComponents.BizPopConfirm.Ok",dm:"\u786E\u5B9A"}):s,f=n.className,d=n.title,h=qn()(n,Lo),j=(0,fn.getCommonConfig)(),x=j.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(qt.Z,N()(N()({title:d,overlayClassName:on()("".concat(x,"-popconfirm"),f,ve()({},"".concat(x,"-popconfirm-no-title"),!n.title)),cancelText:o,okText:c,okButtonProps:{style:{width:"initial",fontSize:12}},cancelButtonProps:{style:{width:"initial",fontSize:12}}},h),{},{children:n.children}))]})}var Ye=e(57568),Do=e(63397),nr,To=(0,b.Z)(nr||(nr=E()([`
  .`,`-search {
    .`,`-input-prefix {
      color: var(--`,`-color-text-tertiary);
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),hc=null,Zo=["onSearch","value","onChange","className"],Mo=13;function Io(n){var t=n.onSearch,a=n.value,o=n.onChange,s=n.className,c=qn()(n,Zo),f=(0,fn.getCommonConfig)(),d=f.blPrefix,h=Object.prototype.hasOwnProperty.call(n,"value"),j=(0,l.useRef)(),x=To();function y(){var B=h?a:j.current.input.value;t==null||t(B||"")}function I(B){var D=window.event?B.keyCode:B.which;switch(D){case Mo:B.shiftKey||(y(),B.cancelable=!0,B.preventDefault(),B.stopPropagation());break;default:break}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(Ye.ZP,{theme:{components:{Input:{paddingInline:8,paddingBlock:4}}},children:(0,r.jsx)(Et.Z,N()({ref:j,value:a,className:on()(s,"".concat(d,"-search")),onChange:o,prefix:(0,r.jsx)(Do.Z,{}),onPressEnter:I},c))})]})}var Oo=e(75949),Ao=e(37193),wo=e(90127),er,Ro=(0,b.Z)(er||(er=E()([`
  .`,`-loading-icon {
    padding: 0 4px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`])),function(n){return n.blPrefix}),Pc=null,tr=function(n){var t=(0,fn.getCommonConfig)(),a=t.blPrefix,o=Ro();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(wo.Z,{className:on()(n.className,"".concat(a,"-loading-icon"))})]})},rr,zo=(0,b.Z)(rr||(rr=E()([`
  .`,`-select {
    &.`,"-select-outlined:not(.","-select-customize-input) .",`-select-selector {
      border-color: var(--`,`-color-border-secondary);
    }
    
    .`,`-icon {
      color: var(--`,`-color-text);
      transition: transform .15s ease;
      
      &.`,`-iconOpen {
        transform: rotate(180deg);
      }
    }
    
    &:not(.`,`-select-multiple) {
      .`,"-select-selector .",`-select-selection-search {
        padding: 0 calc(var(--`,`-padding-sm) - 1px);
        inset-inline-end: 32px;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),yc=null,Uo=["open","onDropdownVisibleChange"],ar=function(t){var a=t.open,o=t.onDropdownVisibleChange,s=qn()(t,Uo),c=(0,l.useState)(a),f=Un()(c,2),d=f[0],h=f[1],j=(0,l.useState)(!1),x=Un()(j,2),y=x[0],I=x[1],B=(0,fn.getCommonConfig)(),D=B.blPrefix,K=zo();(0,l.useEffect)(function(){h(a)},[a]);var en=function(_){if(o){o(_);return}h(_)},M=(0,l.useMemo)(function(){return t.loading?(0,r.jsx)(tr,{}):t.showSearch&&y?(0,r.jsx)(Oo.Z,{className:on()("".concat(D,"-icon"))}):(0,r.jsx)(Ao.Z,{className:on()("".concat(D,"-icon"),ve()({},"".concat(D,"-iconOpen"),d))})},[d,y,t.showSearch,t.loading]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{}),(0,r.jsx)(de.default,N()(N()({},s),{},{onDropdownVisibleChange:en,open:d,className:on()(t.className,"".concat(D,"-select")),suffixIcon:M,placeholder:t.placeholder||"select",onFocus:function(){return I(!0)},onBlur:function(){return I(!1)}}))]})};ar.Option=de.default.Option;var or=ar,$o=e(64572),Wo=e(78401),Vo=e(18412),Qo=e(61939),Ko=e(70661),ir,Ho=(0,b.Z)(ir||(ir=E()([`
  .`,`-table {
    .`,`-filter-icon {
      font-size: 14px;
      color: var(--`,`-color-text-placeholder);
    }

    .`,`-sort-icon {
      font-size: 14px;
      color: var(--`,`-color-text-placeholder);
    }

    .`,`-table-filter-trigger.active {
      .`,`-filter-icon {
        color: var(--`,`-color-primary);
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),bc=null,Go=["className","columns"];function Jo(n){var t=n.className,a=t===void 0?"":t,o=n.columns,s=qn()(n,Go),c=(0,fn.getCommonConfig)(),f=c.blPrefix,d=Ho(),h=(o||[]).map(function(j){return N()(N()({},j),{},{filterIcon:j.filterIcon||(0,r.jsx)($o.Z,{className:"".concat(f,"-filter-icon")}),sortIcon:j.sortIcon||function(x){var y=x.sortOrder,I=y==="ascend"?Wo.Z:y==="descend"?Vo.Z:Qo.Z;return(0,r.jsx)(I,{className:"".concat(f,"-sort-icon")})}})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(Ko.Z,N()(N()({className:on()("".concat(f,"-table"),a)},s),{},{columns:h}))]})}var Xo=["mode"],Yo=function(n){var t=n.mode,a=t===void 0?"light":t,o=qn()(n,Xo);return(0,r.jsx)(Ve.Z,N()({mode:a},o))},qo=e(8610),lr=e(82484),cr,_o=(0,b.Z)(cr||(cr=E()([`
  .`,`-uploader {
    display: block;
    margin-top: 12px !important;
    width: 532px !important;
    background-color: #fff;
    
    .`,"-upload.",`-upload-btn {
      padding-top: 24px;
    }
    
    .`,`-upload_text {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0;
      color: #26244C;
      margin-bottom: 4px;
      margin-top: 20px;
    }
    
    .`,`-upload_hint {
      font-size: 12px;
      font-weight: normal;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0;
      color: var(--`,`-color-text-description);
      margin-bottom: 0;
    }
  }

  .`,`-upload_drag_icon {
    margin-bottom: 8px !important;
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Cc=null,ni=["className","uploadHints","fileSizeLimit"],ei=function(t){var a=_o(),o=(0,fn.getCommonConfig)(),s=o.blPrefix,c=t.className,f=t.uploadHints,d=t.fileSizeLimit,h=qn()(t,ni);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsxs)(lr.Z.Dragger,N()(N()({},h),{},{withCredentials:!0,id:"upload_dragger",name:"files",listType:"text",className:on()("".concat(s,"-uploader"),c),fileList:[],beforeUpload:function(){var j=Ce()(Xn()().mark(function x(y,I){var B,D,K,en,M;return Xn()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(!(y.size>(d||100)*1024*1024)){_.next=7;break}return K=d||100,we.Z.warning(Tn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheSizeOfASingle",dm:"\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7{tmpText}M"},{tmpText:K})),(D=t.beforeUpload)===null||D===void 0||D.call(t,y,I,!1),_.abrupt("return",Promise.reject());case 7:if(y.size!==0){_.next=11;break}return we.Z.warning(Tn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheFileSizeCannotBe",dm:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u4E3A0"})),(en=t.beforeUpload)===null||en===void 0||en.call(t,y,I,!1),_.abrupt("return",Promise.reject());case 11:if(y.name.split(".")[0].trim().length!==0){_.next=15;break}return we.Z.warning(Tn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheFileNameCannotBe",dm:"\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"})),(M=t.beforeUpload)===null||M===void 0||M.call(t,y,I,!1),_.abrupt("return",Promise.reject());case 15:return _.abrupt("return",(B=t.beforeUpload)===null||B===void 0?void 0:B.call(t,y,I,!0));case 16:case"end":return _.stop()}},x)}));return function(x,y){return j.apply(this,arguments)}}(),children:[(0,r.jsxs)("p",{className:on()("".concat(s,"-upload_drag_icon")),children:[(0,r.jsx)(qo.Z,{style:{fontSize:20,opacity:t.disabled?.4:1}}),(0,r.jsx)("p",{className:"".concat(s,"-upload_text"),children:Tn.Z.get({id:"components.BLCompatibleComponents.BLUpload.ClickOrDragToUpload",dm:"\u70B9\u51FB\u6216\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6"})})]}),f==null?void 0:f.map(function(j,x){return(0,r.jsx)("p",{className:"".concat(s,"-upload_hint"),children:j},x)})]}))]})},sr=function(t){var a=t.children;return(0,r.jsx)(lr.Z,N()(N()({},t),{},{children:a}))};sr.Dragger=ei;var ti=sr,ur,ri=(0,b.Z)(ur||(ur=E()([`
  .`,`-info-icon {
    color: var(--`,`-color-icon);
    margin-left: var(--`,`-margin-xxs);
    font-size: 14px;

    &.`,`-info-icon-no-margin {
      margin: 0;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),jc=null;function ai(n){var t;(0,ut.X)();var a=ri(),o=n.content,s=n.children,c=n.className,f=n.iconFontProps,d=n.noMargin,h=n.popoverProps,j=(0,fn.getCommonConfig)(),x=j.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)(Xe,N()(N()({content:o,overlayInnerStyle:{maxWidth:376},trigger:"hover"},h),{},{children:s||(0,r.jsx)(Dn,N()({className:on()("".concat(x,"-info-icon"),ve()({},"".concat(x,"-info-icon-no-margin"),d),"".concat(x,"-cursor-pointer"),c),type:(t=f==null?void 0:f.type)!==null&&t!==void 0?t:"bl-icon-helpCircle-line"},f))}))]})}var je=e(6881),dr,oi=(0,b.Z)(dr||(dr=E()([`
  .`,`-copyBtn {
    color: #878AAB;
    cursor: pointer;
    margin-left: 6px;

    &:hover {
      color: var(--`,`-color-primary);
    }
  }

  .`,`-idIcon {
    cursor: pointer;
    color: var(--`,`-color-icon);
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Sc=null,ii=function(n){var t=n.id,a=n.iconStyle,o=n.iconClassName,s=(0,fn.getCommonConfig)(),c=s.blPrefix,f=oi();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(Xe,{content:(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(Dn,{onClick:function(){(0,je.JG)(t),we.Z.success(Tn.Z.get({id:"components.bailian.BLIdIcon.CopySuccessfully",dm:"\u590D\u5236\u6210\u529F\uFF01"}))},className:"".concat(c,"-copyBtn"),type:"icon-copy-line",isCursorPointer:!0})]}),trigger:["click","hover"],children:(0,r.jsx)(Dn,{className:on()("".concat(c,"-idIcon"),o),type:"icon-ID-line",style:a})})]})},fr,li=(0,b.Z)(fr||(fr=E()([`
  .`,`-slider-selector {
    display: flex;
    gap: 24px;
    min-width: 240px;
    
    .`,`-slider {
      flex: 1;
    }

    .`,`-input-number {
      flex-shrink: 0;
      height: 100%;
    }

    .`,"-input-number .",`-input-number-outlined {
      margin-top: 16px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ec=null;function ci(n){var t=(0,fn.getCommonConfig)(),a=t.blPrefix,o=li();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{onMouseUp:function(){var c;return(c=n.onBlur)===null||c===void 0?void 0:c.call(n)},className:on()("".concat(a,"-slider-selector"),n.className),children:[(0,r.jsx)(st.Z,{disabled:n.disabled,onChange:n.onChange,value:n.value===null?void 0:n.value,min:n.min,max:n.max,step:n.step,marks:n.marks||ve()(ve()({},n.min,n.min),n.max,n.max),tooltip:{getPopupContainer:function(c){return c}}}),(0,r.jsx)(wn.Z,{disabled:n.disabled,controls:!1,min:n.min,max:n.max,onBlur:function(){var c;return(c=n.onBlur)===null||c===void 0?void 0:c.call(n)},step:n.step,value:n.value,onChange:n.onChange,precision:n.precision})]})]})}var mr=e(66309),vr,xr=(0,b.Z)(vr||(vr=E()([`
  .`,`-Tag {
    display: inline-flex;
    align-items: center;
    line-height: 20px;
    
    &.`,`-secondary {
      background-color: var(--`,`-color-fill-tertiary);
      border-color: transparent;
    }
    
    &.`,`-disabled {
      cursor: not-allowed;
      background: var(--`,`-color-bg-container-disabled);
      color: var(--`,`-color-text-disabled);
    }
    
    &.`,`-large {
      padding: 4px 12px;
      line-height: 22px;
    }
    
    &.`,`-Tag-fill {
      background: transparent;
      border: none;
    }

    &>.bl-iconfont+span {
      margin-left: 4px;
    }
    
    &.`,`-Default-fill {
      color: var(--`,`-color-text-description);
    }
    
    &.`,`-Processing-fill {
      color: var(--`,`-color-text-description);
    }
  }

  .`,"-Tag.",`-tag-processing {
    color: var(--`,`-color-info);
  }

  /*
   * checkable
   */
  .`,"-Tag.",`-tag-checkable {
    background-color: transparent;

    &:hover {
      color: var(--`,`-color-primary);
      background-color: var(--`,`-control-item-bg-hover);
    }
    
    &.`,`-tag-checkable-checked {
      color: var(--`,`-color-primary);
      background-color: var(--`,`-control-item-bg-active);
    }
    
    &.`,`-disabled {
      background-color: transparent !important;
      color: var(--`,`-color-text-disabled) !important;
      cursor: not-allowed;
    }
    
    /* secondary */
    &.`,`-secondary {
      background-color: var(--`,`-color-fill-tertiary);
      border-color: transparent;
      
      &.`,`-tag-checkable-checked {
        background-color: var(--`,`-color-primary);
        color: var(--`,`-color-text-light-solid);
      }
      
      &.`,`-disabled {
        background-color: var(--`,`-color-bg-container-disabled) !important;
        color: var(--`,`-color-text-disabled) !important;
        cursor: not-allowed;
      }
    }
    
    /* withicon */
    &.`,`-with-icon {
      &.`,`-disabled {
        background-color: var(--`,`-color-bg-container-disabled) !important;
        
        .`,`-tag-checkable-icon {
          opacity: 0.5;
        }
      }
      
      .`,`-tag-checkable-icon {
        margin-right: 4px;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),Nc=null,si=["fill","type","size","noIcon","noBorder","noBackground","disabled","preset","color"],ui=["className","type","size","disabled"],di=["default-fill","error-fill","processing-fill","success-fill","warning-fill","docx","pdf","doc","txt","csv","xlsx","xls","pptx","ppt","md","jpg","jpeg","bmp","gif","png","html"],$n=function(n){return n.Default="default",n.Error="error",n.Processing="processing",n.Success="success",n.Warning="warning",n.DefaultFill="default-fill",n.ErrorFill="error-fill",n.ProcessingFill="processing-fill",n.SuccessFill="success-fill",n.WarningFill="warning-fill",n.docx="docx",n.doc="doc",n.pdf="pdf",n.txt="txt",n.csv="csv",n.xls="xls",n.xlsx="xlsx",n.ppt="ppt",n.pptx="pptx",n.md="md",n.jpg="jpg",n.jpeg="jpeg",n.bmp="bmp",n.gif="gif",n.png="png",n.html="html",n}({}),fi=function(t,a){switch(t){case $n.Default:return(0,r.jsx)(Dn,{type:"bl-icon-infoCircle-line"});case $n.Error:return(0,r.jsx)(Dn,{type:"icon-errorCircle-line"});case $n.Processing:return(0,r.jsx)(Dn,{type:"icon-loadingCircle-line",style:{color:"var(--".concat(a,"-color-info)")},spin:!0});case $n.Success:return(0,r.jsx)(Dn,{type:"icon-checkCircle-line"});case $n.Warning:return(0,r.jsx)(Dn,{type:"icon-warningCircle-line"});case $n.DefaultFill:return(0,r.jsx)(Dn,{type:"icon-minusCircle-fill",style:{color:"var(--".concat(a,"-color-text-description)")}});case $n.ErrorFill:return(0,r.jsx)(Dn,{type:"icon-errorCircle-fill",style:{color:"var(--".concat(a,"-color-error)")}});case $n.ProcessingFill:return(0,r.jsx)(Dn,{type:"icon-loadingCircle-line",style:{color:"var(--".concat(a,"-color-info)")},spin:!0});case $n.SuccessFill:return(0,r.jsx)(Dn,{type:"icon-checkCircle-fill",style:{color:"var(--".concat(a,"-color-success)")}});case $n.WarningFill:return(0,r.jsx)(Dn,{type:"icon-warningCircle-fill",style:{color:"var(--".concat(a,"-color-warning)")}});case $n.docx:return(0,r.jsx)(Dn,{type:"icon-fileWord-line",style:{color:"#0B83F1"}});case $n.pdf:return(0,r.jsx)(Dn,{type:"icon-filePDF-line",style:{color:"#FF5C5C"}});case $n.doc:return(0,r.jsx)(Dn,{type:"icon-fileWord-line",style:{color:"#0B83F1"}});case $n.txt:return(0,r.jsx)(Dn,{type:"icon-fileTXT-line",style:{color:"#7C73FF"}});case $n.csv:case $n.xls:case $n.xlsx:return(0,r.jsx)(Dn,{type:"icon-fileExcel-line",style:{color:"rgb(0, 168, 115)"}});case $n.ppt:case $n.pptx:return(0,r.jsx)(Dn,{type:"icon-filePPT-line",style:{color:"rgb(235, 102, 108)"}});case $n.md:return(0,r.jsx)(Dn,{type:"icon-fileMD-line",style:{color:"rgb(234, 145, 66)"}});case $n.jpg:return(0,r.jsx)(Dn,{type:"icon-fileJPG-line",style:{color:"rgb(234, 145, 66)"}});case $n.jpeg:return(0,r.jsx)(Dn,{type:"icon-fileJPG-line",style:{color:"#8AB305"}});case $n.bmp:return(0,r.jsx)(Dn,{type:"icon-fileBMP-line",style:{color:"#52C41A"}});case $n.gif:return(0,r.jsx)(Dn,{type:"icon-fileGIF-line",style:{color:"#20C591"}});case $n.png:return(0,r.jsx)(Dn,{type:"icon-filePNG-line",style:{color:"#00CEC9"}});case $n.html:return(0,r.jsx)(Dn,{type:"bl-icon-fileHTML-line",style:{color:"#878AAB"}});default:return}},gr=function(n){return n.Default="default",n.Error="error",n.Processing="processing",n.Success="success",n.Warning="warning",n}(gr||{});function pr(n){var t=n.fill,a=n.type,o=n.size,s=n.noIcon,c=n.noBorder,f=n.noBackground,d=n.disabled,h=n.preset,j=n.color,x=qn()(n,si),y=xr(),I=(0,fn.getCommonConfig)(),B=I.antPrefix,D=I.blPrefix,K=function(){if(!s){if(n.icon)return n.icon;if(h)return fi(h.toLowerCase(),B)}},en=function(){var T=N()({},n.style);switch(j){case"White":{T.color="var(--".concat(B,"-color-text-label)"),T.backgroundColor="var(--".concat(B,"-color-fill-alter)"),T.borderColor="var(--".concat(B,"-color-border)");break}case"Grey":{T.color="var(--".concat(B,"-color-text-description)"),T.backgroundColor="var(--".concat(B,"-color-fill-quaternary)"),T.borderColor="var(--".concat(B,"-color-border)");break}case"Blue":{T.color="var(--".concat(B,"-color-info)"),T.backgroundColor="#EFFAFF",T.borderColor="#A9DEFF";break}case"LakeCyan":{T.color="#00CEC9",T.backgroundColor="#E6FFFA",T.borderColor="#80F7E3";break}case"GeekBlue":{T.color="#1C54E3",T.backgroundColor="#EBF4FF",T.borderColor="#AACBFF";break}case"Green":{T.color="#52C41A",T.backgroundColor="#F6FFED",T.borderColor="#C0F19A";break}case"Lime":{T.color="#8AB305",T.backgroundColor="#FEFFE6",T.borderColor="#E5F178";break}case"Orange":{T.color="#FA8125",T.backgroundColor="#FFF9F0",T.borderColor="#FFD3A1";break}case"BluePurple":{T.color="#624AFF",T.backgroundColor="#F6F5FF",T.borderColor="#CBC8FF";break}case"LakeBlue":{T.color="#2EB6DF",T.backgroundColor="#F0FEFF",T.borderColor="#A5F2FF";break}case"Purple":{T.color="#7347FF",T.backgroundColor="#F6F0FF",T.borderColor="#DBCAFF";break}}return c&&(T.borderColor="transparent"),f&&(T.backgroundColor="transparent"),T};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)(mr.Z,N()(N()({},x),{},{icon:K(),className:on()("".concat(D,"-Tag"),(di.includes((h||"").toLowerCase())||t)&&"".concat(D,"-Tag-fill"),n.type&&"".concat(D,"-").concat(a),n.size&&"".concat(D,"-").concat(o),h&&"".concat(D,"-").concat(h),d&&"".concat(D,"-disabled"),n.className),style:en(),color:n.color||(h?gr[h]:void 0),onClick:function(T){var _;d||(_=n.onClick)===null||_===void 0||_.call(n,T)}}))]})}function mi(n){var t=n.className,a=n.type,o=n.size,s=n.disabled,c=qn()(n,ui),f=(0,fn.getCommonConfig)(),d=f.blPrefix,h=xr();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)(mr.Z.CheckableTag,N()(N()({},c),{},{className:on()("".concat(d,"-Tag"),"".concat(d,"-").concat(a),"".concat(d,"-").concat(o),s&&"".concat(d,"-disabled"),n.icon&&"".concat(d,"-with-icon"),t),onClick:function(x){var y;if(s){x.preventDefault();return}(y=n.onClick)===null||y===void 0||y.call(n,x)},onChange:function(x){var y;s||(y=n.onChange)===null||y===void 0||y.call(n,x)},children:[n.icon&&(0,r.jsx)("span",{className:"".concat(d,"-tag-checkable-icon"),children:n.icon}),n.children]}))]})}pr.CheckableTag=mi;var vi=pr,xi=e(42075),gi=e(96074),hr=e(13445),pi=e(29732),Pr=e(92344),yr,hi=(0,b.Z)(yr||(yr=E()([`
  .`,`-actions-column {
    .`,`-more-btn-dropdown {
      .`,`-more-btn-text,
      .`,`-more-btn-arrow-icon {
        color: var(--`,`-color-link);
      }

      &:hover {
        .`,`-more-btn-text,
        .`,`-more-btn-arrow-icon {
          color: var(--`,`-color-link-hover);
        }
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Bc=null,br=4;function Pi(n){var t=n.className,a=t===void 0?"":t,o=n.items,s=(0,fn.getCommonConfig)(),c=s.blPrefix,f=hi(),d=(0,hr.Z)((0,pi.Z)(o),function(B){return!B.isHide});function h(){var B=d.length<=br?d.length:br-1,D=d.slice(0,B),K=d.slice(B);return(0,r.jsxs)(r.Fragment,{children:[j(D),x(K)]})}function j(B){return(0,r.jsx)(r.Fragment,{children:B.map(function(D){return(0,r.jsx)(l.Fragment,{children:y(D,{isAddOnClick:!D.popconfirmProps,isShowTooltip:!0})},D.key)})})}function x(B){if(B.length===0)return;var D=B.map(function(M){return{label:y(M,{isShowTooltip:!1}),key:M.key,disabled:M.disabled||I(M),title:M.disabled?M.disabledTooltip:void 0}}),K=(0,Pr.Z)(B,function(M,T){return M[T.key]=T,M},{});return(0,r.jsx)(Me.Z,{className:"".concat(c,"-more-btn-dropdown"),menu:{items:D,onClick:en},children:(0,r.jsx)("span",{className:"".concat(c,"-more-btn-text"),children:Tn.Z.get({id:"bailianUi.components.BLActions.More",dm:"\u66F4\u591A"})})});function en(M){var T=M.key,_=K[T],ln=_.popconfirmProps,sn=_.onClick;ln||sn()}}function y(B){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},K=D.isAddOnClick,en=K===void 0?!1:K,M=D.isShowTooltip,T=M===void 0?!1:M,_=(0,r.jsx)(Fe.Z.Link,{className:B.className,disabled:B.disabled||I(B),onClick:en?B.onClick:void 0,children:B.label}),ln=T?(0,r.jsx)(Ve.Z,{title:B.disabled&&B.disabledTooltip,children:_},B.key):_,sn=B.popconfirmProps?(0,r.jsx)(qt.Z,N()(N()({},B.popconfirmProps),{},{onConfirm:B.onClick,children:ln}),B.key):ln;return sn}function I(B){var D,K=((D=window.ALIYUN_CONSOLE_CONFIG)===null||D===void 0||(D=D.FEATURE_STATUS)===null||D===void 0?void 0:D.disableDangerOperation)&&B.isDangerOperation;return K}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(xi.Z,{className:on()("".concat(c,"-actions-column"),a),split:(0,r.jsx)(gi.Z,{type:"vertical"}),size:0,wrap:!0,children:h()})]})}var yi=e(92783),bi=e(30291),Cr,Ci=(0,b.Z)(Cr||(Cr=E()([`
  .`,`-app-layout {
    height: 100%;
  }

  .`,`-app-layout-header {
    flex-shrink: 0;
  }

  .`,`-app-layout-content {
    padding: 0 64px 24px;
    flex: 1;
    overflow-y: auto;
  }

  .`,`-app-layout-tab-bar {
    padding: 16px 0;

    .`,`-segmented {
      transition: all 0.05s;
      background: transparent;
      color: var(--`,`-color-text-description);
      
      .`,`-segmented-item-label {
        min-height: 34px;
        line-height: 34px;
        padding: 0 24px;
      }
      
      .`,`-segmented-item-selected {
        box-shadow: 0 4px 12px 0 rgba(39, 38, 77, 20%);
        color: var(--`,`-color-primary);
      }
      
      .`,`-segmented-item {
        &:not(.`,`-segmented-item-selected):hover {
          color: var(--`,`-color-primary);

          &::after {
            background-color: transparent;
          }
        }
      }
    }
  }

  .`,`-app-layout-tab {
    height: calc(100% - 70px);
    overflow-y: auto;
    
    .`,`-tabs-content-holder {
      height: 100%;

      .`,`-tabs-content {
        height: 100%;

        .`,`-tabs-tabpane {
          height: 100%;
        }
      }
    }
  }

  .header {
    background: #fff;
    padding: 16px 16px 14px;

    .logo {
      width: 48px;
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
    }

    .backBtn {
      font-size: 32px;
      cursor: pointer;
      margin-top: 4px;
    }

    .copyBtn {
      font-size: 14px;
      color: var(--`,`-color-text-description);
    }

    a {
      font-size: 12px;
    }
  }

  .`,`-app-layout-pro {
    background: #f8f9fc;
    height: 100%;
    overflow-y: auto;

    .`,`-app-layout-pro-header {
      background: #fff;
      padding: 16px 16px 14px;
    }

    .`,`-app-layout {
      display: block;
    }

    .`,`-app-layout-content {
      padding: 0;
      overflow: initial;
      min-height: calc(100% - 82px);
    }

    .`,`-app-layout-pro-back-btn {
      font-size: 32px;
      cursor: pointer;
      margin-top: 4px;
      color: var(--`,`-color-icon);
      
      &:hover {
        color: var(--`,`-color-icon-hover);
      }
    }

    .`,`-app-layout-pro-logo {
      width: 48px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Fc=null,ji=["header","logo","onBack"];function jr(n){var t=n.header,a=n.tabProps,o=a===void 0?{}:a,s=n.tabLeft,c=n.tabRight,f=n.segmentedProps,d=f===void 0?{}:f,h=n.tabs,j=n.activeKey,x=n.onChangeActiveKey,y=(0,ut.X)(),I=Ci(),B=(0,fn.getCommonConfig)(),D=B.blPrefix,K="".concat(D,"-app-layout"),en=(0,l.useMemo)(function(){return Object.assign({},{options:h.map(function(T){return{label:T.label,value:T.key}})},d)},[d,h]),M=(0,l.useMemo)(function(){return Object.assign({},{items:h},o)},[o,h]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)(I,{}),(0,r.jsxs)(Re.Z,{vertical:!0,className:K,children:[(0,r.jsx)("div",{className:"".concat(K,"-header"),children:t}),(0,r.jsxs)("div",{className:"".concat(K,"-content"),children:[(0,r.jsxs)(Re.Z,{gap:16,justify:"space-between",className:"".concat(K,"-tab-bar"),children:[s||(0,r.jsx)("span",{className:"".concat(K,"-tab-right-placeholder")}),(0,r.jsx)(yi.Z,N()({onChange:x,value:j},en)),c||(0,r.jsx)("span",{className:"".concat(K,"-tab-left-placeholder")})]}),(0,r.jsx)(Mt.Z,N()({activeKey:j,className:"".concat(K,"-tab"),renderTabBar:function(){return(0,r.jsx)(r.Fragment,{})},animated:!0},M))]})]})]})}function Si(n){var t=n.header,a=n.logo,o=n.onBack,s=qn()(n,ji),c=(0,fn.getCommonConfig)(),f=c.blPrefix,d=(0,l.useRef)(null),h="".concat(f,"-app-layout-pro"),j=function(){location.hash="#/app-market"};return(0,r.jsx)("div",{ref:d,className:h,children:(0,r.jsx)(jr,N()({header:(0,r.jsx)(bi.Z,{target:function(){return d.current},offsetTop:0,children:(0,r.jsxs)(Re.Z,{className:"".concat(h,"-header"),gap:16,children:[(0,r.jsx)(Rt.Z,{size:32,className:"".concat(h,"-back-btn ").concat(f,"-cursor-pointer"),onClick:o||j}),(0,r.jsx)("img",{className:"".concat(h,"-logo"),src:a,alt:""}),t]})})},s))})}var Sr,Ei=(0,b.Z)(Sr||(Sr=E()([`
  .`,`-commonFeeds {
    display: grid;
    
    .`,`-feedsItem {
      min-height: 10px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix}),Lc=null,Ni=function(t){var a=(0,fn.getCommonConfig)(),o=a.blPrefix,s=Ei(),c=t.columns,f=c===void 0?4:c,d=t.gap,h=d===void 0?16:d,j=t.dataSource,x=j===void 0?[]:j,y=t.itemRender,I=t.autoRows,B=I===void 0?4:I;return x.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:on()("".concat(o,"-commonFeeds")),style:{gridTemplateColumns:"repeat(".concat(f,", 1fr)"),gridColumnGap:"".concat(h,"px"),gridAutoRows:"".concat(B,"px")},children:x.map(function(D,K){return(0,r.jsx)("div",{className:"".concat(o,"-feedsItem"),style:{gridRowEnd:"span ".concat(Math.ceil((D.height||D.data.height)/B)+h/B)},children:(0,r.jsx)("div",{style:{height:"".concat(D.height||D.data.height,"px")},children:y(D,K)})},"".concat(K,"-").concat(D.height||D.data.height))})})]}):null},Bi=Ni,Fi=e(19474),Er,Li=(0,b.Z)(Er||(Er=E()([`
  .`,`-imgLoader {
    width: 100%;
    overflow: hidden;
    position: relative;

    .loaderImg {
      width: 100%;
      display: block;
    }

    .imgCou {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: all 0.3s;
      z-index: 1;

      .`,`-skeleton {
        display: block;
        height: 100%;

        .`,`-skeleton-image {
          width: 100%;
          height: 100%;

          span[role='img'] {
            display: none;
          }
        }

        .`,`-skeleton-image::after {
          background: linear-gradient(
            90deg,
            rgba(175, 177, 196, 15%) 20%,
            rgba(175, 177, 196, 32%) 45%,
            rgba(175, 177, 196, 15%) 60%
          );
        }
      }
    }

    .imgCou.slideIn {
      z-index: 2;
      opacity: 1;
    }

    .imgCou.slideOut {
      z-index: 1;
      opacity: 0;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),kc=null,ki=["src","width","height","vagueUrl","imageStyle","onLoad"],Di=function(t){var a=(0,fn.getCommonConfig)(),o=a.blPrefix,s=Li(),c=t.src,f=t.width,d=f===void 0?"100%":f,h=t.height,j=h===void 0?100:h,x=t.vagueUrl,y=t.imageStyle,I=y===void 0?{}:y,B=t.onLoad,D=qn()(t,ki),K=(0,l.useState)(!0),en=Un()(K,2),M=en[0],T=en[1],_=(0,l.useState)(!1),ln=Un()(_,2),sn=ln[0],nn=ln[1],xn=(0,l.useState)(!1),Pn=Un()(xn,2),mn=Pn[0],Sn=Pn[1],Kn=(0,l.useRef)(!1),ee=(0,l.useRef)(null),bn=(0,Fi.Z)(ee),Wn=Un()(bn,1),le=Wn[0],dn=N()({width:d,height:j},I);return(0,l.useEffect)(function(){if(mn){if(c){var gn=new Image;gn.src=c,x&&setTimeout(function(){nn(!0)},500),gn.onload=function(){T(!1),nn(!1),B==null||B(!0)}}return function(){T(!0),nn(!1)}}},[c,mn]),(0,l.useEffect)(function(){if(le){if(Kn.current)return;Kn.current=!0,Sn(!0)}},[le]),c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsxs)("div",N()(N()({className:"".concat(o,"-imgLoader"),id:"img-loader",style:{height:j,borderRadius:"".concat(dn.borderRadius||0,"px")},ref:ee},D),{},{children:[(0,r.jsx)("div",{className:on()("imgCou",{slideIn:M,slideOut:!M}),style:{height:j},children:(0,r.jsx)(ne.Z.Node,{active:!0})}),mn?(0,r.jsxs)(r.Fragment,{children:[x?(0,r.jsx)("div",{className:on()("imgCou",{slideIn:M&&sn,slideOut:!sn}),children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:x,type:"image/webp"}),(0,r.jsx)("img",{src:x,alt:"",className:"loaderImg",style:dn})]})}):null,(0,r.jsx)("div",{className:on()("imgCou",{slideIn:!M,slideOut:M}),children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:c,type:"image/webp"}),(0,r.jsx)("img",{src:c,alt:"",className:"loaderImg",style:dn})]})})]}):null]}))]}):null},Ti=Di,Zi=e(27417),Mi=e(94125),Ii=e(39747),Oi=e(36482),Ai=e(86125),Nr,wi=(0,b.Z)(Nr||(Nr=E()([`
  .`,`-customSlider {
    .`,`-slider {
      .`,`-slider-rail {
        background: #e1e0ee;
      }

      .`,`-slider-handle {
        width: 16px;
        height: 16px;
        border: none;
        box-shadow: 0 0 4px 0 rgba(163, 146, 238, 30%);
        background-color: #fff;
        margin-top: -3px;
        border-radius: 100px;
      }

      .`,`-slider-handle::before {
        width: 16px;
        height: 16px;
      }

      .`,`-slider-handle::after {
        content: none;
        box-shadow: none;
        width: 14px;
        height: 14px;
        top: -2px;
      }
    }

    .`,`-slider:hover {
      .`,`-slider-rail {
        background: #e1e0ee;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Dc=null,Ri=function(t){var a=(0,fn.getCommonConfig)(),o=a.blPrefix,s=wi();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:on()("".concat(o,"-customSlider")),children:(0,r.jsx)(Ai.Z,N()(N()({},t),{},{tooltip:{open:!1}}))})]})},zi=Ri,Br,Ui=(0,b.Z)(Br||(Br=E()([`
  .`,`-videoCou {
    position: relative;

    .vjs-poster {
      > img {
        object-fit: cover;
      }
    }

    /* TODO?: \u52A0\u4E2A\u8499\u5C42\uFF0C\u5728chrome\u79FB\u52A8\u7AEF\u8C03\u8BD5\u4E0B\uFF0Cmac\u89E6\u6478\u677F\u8F7B\u89E6\u65E0\u6CD5\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6 */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }

    &:hover {
      .controlLine.controlLineHover {
        opacity: 1;
        visibility: visible;
        transition-delay: 0s, 0s; /* \u60AC\u505C\u65F6\u7ACB\u5373\u663E\u793A */
      }
    }

    .skeleton {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;

      .`,`-skeleton {
        display: block;
        height: 100%;

        .`,`-skeleton-image {
          width: 100%;
          height: 100%;

          span[role='img'] {
            display: none;
          }
        }

        .`,`-skeleton-image::after {
          background: linear-gradient(
            90deg,
            rgba(175, 177, 196, 15%) 20%,
            rgba(175, 177, 196, 32%) 45%,
            rgba(175, 177, 196, 15%) 60%
          );
        }
      }
    }

    .controlLine {
      background: rgba(0, 0, 0, 40%);
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      border-radius: 12px;
      padding: 6px 22px;

      .icon {
        font-size: 24px;
        color: #fff;
        cursor: pointer;
      }

      .playIcon {
        margin-right: 14px;
      }

      .timeCou {
        display: flex;
        align-items: center;
        margin-right: 21px;

        .time {
          font-size: 13px;
          color: #fff;
          margin-top: 2px;
          width: 29px;
        }

        .line {
          font-size: 13px;
          color: #fff;
          margin: 0 5px;
          margin-top: 2px;
        }
      }

      .slide {
        width: 132px;
        margin-right: 10px;

        .`,`-slider-rail {
          background: rgba(0, 0, 0, 40%) !important;
        }

        .`,"-slider .",`-slider-track {
          background: #fff;
        }
      }

      .videoIcon {
        margin-right: 16px;
        width: 24px;
      }
    }

    .controlLine.controlLineHover {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease-in-out, visibility 0.5s; /* visibility \u5EF6\u8FDF3\u79D2 */
    }
  }

  .`,`-videoCou.fullScreen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0);
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Tc=null,$i="https://img.alicdn.com/imgextra/i2/O1CN01ATn56X1MUCB0UBrp0_!!6000000001437-55-tps-200-200.svg",Wi="https://img.alicdn.com/imgextra/i3/O1CN01XYowFw1vV7WpkBcPN_!!6000000006177-55-tps-200-200.svg",Fr=function(){return{duration:0,currentTime:0,isPlaying:!1,isMuted:!1,isFullScreen:!1}},Vi=(0,l.forwardRef)(function(n,t){var a=Ui(),o=(0,fn.getCommonConfig)(),s=o.blPrefix,c=n.videoUrl,f=n.width,d=f===void 0?"100%":f,h=n.height,j=h===void 0?100:h,x=n.controls,y=x===void 0?!0:x,I=n.controlsTools,B=I===void 0?{playBtn:!0,time:!0,slider:!0,voiceBtn:!0,expandBtn:!0}:I,D=n.videoProps,K=D===void 0?{}:D,en=n.skeleton,M=en===void 0?!0:en,T=n.className,_=n.style,ln=n.clickEvent,sn=n.videoClickable,nn=sn===void 0?!1:sn,xn=n.viewportLoad,Pn=xn===void 0?!1:xn,mn=n.notViewportAutoPause,Sn=mn===void 0?!1:mn,Kn=n.viewportAutoPlay,ee=Kn===void 0?!1:Kn;K.controls=!1;var bn=(0,l.useRef)(null),Wn=(0,l.useState)(Fr()),le=Un()(Wn,2),dn=le[0],gn=le[1],ae=(0,l.useState)(!1),oe=Un()(ae,2),Cn=oe[0],V=oe[1];(0,l.useEffect)(function(){if(c)return requestAnimationFrame(function(){rn()}),function(){var zn;(zn=bn.current)===null||zn===void 0||zn.pause(),bn.current=null,V(!1)}},[c]),(0,l.useEffect)(function(){var zn=function(Zn){var Hn=Zn.keyCode;if(Hn===27){if(!dn.isFullScreen)return;gn(function(se){return N()(N()({},se),{},{isFullScreen:!1})})}};return document.body.addEventListener("keydown",zn),function(){document.body.removeEventListener("keydown",zn)}},[dn.isFullScreen]);var rn=function(){var On;bn.current&&(gn(Fr()),bn.current.addEventListener("loadedmetadata",function(){var Zn,Hn=(Zn=bn.current)===null||Zn===void 0?void 0:Zn.duration;gn(function(se){return N()(N()({},se),{},{duration:Hn})}),(0,je.G6)()&&(bn.current.currentTime=1)}),bn.current.addEventListener("canplay",function(){V(!0)}),bn.current.addEventListener("play",function(){gn(function(Zn){return N()(N()({},Zn),{},{isPlaying:!0})})}),bn.current.addEventListener("playing",function(){gn(function(Zn){return N()(N()({},Zn),{},{isPlaying:!0})})}),(On=bn.current)===null||On===void 0||On.addEventListener("pause",function(){gn(function(Zn){return N()(N()({},Zn),{},{isPlaying:!1})})}),bn.current.addEventListener("timeupdate",function(){var Zn,Hn=((Zn=bn.current)===null||Zn===void 0?void 0:Zn.currentTime)||0;gn(function(se){return Hn>=se.duration&&(se.isPlaying=!1),N()(N()({},se),{},{currentTime:Hn})})}),bn.current.addEventListener("ended",function(){gn(function(Zn){var Hn;return N()(N()({},Zn),{},{isPlaying:!1,currentTime:((Hn=bn.current)===null||Hn===void 0?void 0:Hn.currentTime)||0})})}))},ue=function(){if(dn.isPlaying){var On;(On=bn.current)===null||On===void 0||On.pause()}else{var Zn;(Zn=bn.current)===null||Zn===void 0||Zn.play()}};(0,l.useImperativeHandle)(t,function(){return{video:bn.current,videoInfo:dn}}),(0,l.useEffect)(function(){if(K.preload==="none"&&c&&!document.head.querySelector('link[href="'.concat(c,'"]'))){var zn=document.createElement("link");zn.rel="preload",zn.href=c,zn.as="video",document.head.appendChild(zn)}},[K.preload,c]),(0,l.useEffect)(function(){if(!(!Sn&&!ee&&!Pn)){var zn=new IntersectionObserver(function(On){On.forEach(function(Zn){if(Zn.isIntersecting){var Hn,se;Pn&&((Hn=bn.current)===null||Hn===void 0||Hn.load()),ee&&((se=bn.current)===null||se===void 0||se.play())}else{var Be;Sn&&((Be=bn.current)===null||Be===void 0||Be.pause())}})},{root:null,rootMargin:"0px",threshold:.1});return zn.observe(bn.current),function(){zn.disconnect()}}},[Sn,ee]);var xe=(0,l.useMemo)(function(){return!B.playBtn&&!B.time&&!B.slider&&!B.voiceBtn&&!B.expandBtn},[B]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsxs)("div",{className:on()("".concat(s,"-videoCou"),{fullScreen:dn.isFullScreen},T),style:_,onClick:function(){nn&&ue(),ln==null||ln()},children:[(0,r.jsx)("video",N()(N()({ref:bn},K),{},{style:{width:dn.isFullScreen?"100vw":d,height:dn.isFullScreen?"100vh":j,objectFit:dn.isFullScreen?"contain":"cover"},width:dn.isFullScreen?"100vw":d,height:dn.isFullScreen?"100vh":j,children:(0,r.jsx)("source",{src:c,type:"video/mp4"})})),M&&!Cn&&(0,r.jsx)("div",{className:"skeleton",style:{height:j},children:(0,r.jsx)(ne.Z.Node,{active:!0})}),y&&!xe?(0,r.jsxs)("div",{className:on()("controlLine",{controlLineHover:y==="auto"&&dn.isPlaying}),onClick:function(On){return On.stopPropagation()},children:[B.playBtn?(0,r.jsx)("div",{className:on()("playIcon","icon"),onClick:function(){if(dn.isPlaying){var On;(On=bn.current)===null||On===void 0||On.pause()}else{var Zn;(Zn=bn.current)===null||Zn===void 0||Zn.play()}gn(function(Hn){return N()(N()({},Hn),{},{isPlaying:!dn.isPlaying})})},children:dn.isPlaying?(0,r.jsx)(Zi.Z,{}):(0,r.jsx)(Mi.Z,{})}):null,B.time?(0,r.jsxs)("div",{className:"timeCou",children:[(0,r.jsx)("div",{className:"time",children:(0,je.qp)(dn.currentTime)}),(0,r.jsx)("div",{className:"line",children:"/"}),(0,r.jsx)("div",{className:"time",children:(0,je.qp)(dn.duration)})]}):null,B.slider?(0,r.jsx)("div",{className:"slide",children:(0,r.jsx)(zi,{max:Math.floor(dn.duration),min:0,step:1,value:Math.floor(dn.currentTime),onChange:function(On){gn(function(Zn){return N()(N()({},Zn),{},{currentTime:On})}),bn.current.currentTime=On},className:on()("slider")})}):null,B.voiceBtn?(0,r.jsx)("img",{onClick:function(){bn.current.muted=!dn.isMuted,gn(function(On){return N()(N()({},On),{},{isMuted:!dn.isMuted})})},src:dn.isMuted?Wi:$i,alt:"",className:on()("videoIcon","icon")}):null,B.expandBtn?(0,r.jsx)("div",{className:on()("fullIcon","icon"),onClick:function(){gn(function(On){return N()(N()({},On),{},{isFullScreen:!dn.isFullScreen})})},children:dn.isFullScreen?(0,r.jsx)(Ii.Z,{}):(0,r.jsx)(Oi.Z,{})}):null]}):null]})]})}),Qi=Vi,Ki=e(90612),Lr,Hi=(0,b.Z)(Lr||(Lr=E()([`
  .`,`-container {
    width: 100%;
    background: var(--`,`-color-bg-base);
    /* height: 108px; */
    flex-shrink: 0;
    border-radius: 8px;
    position: relative;
    gap: 20px;
    max-height: 500px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    dd, dt, dl {
      margin: 0;
    }
  }

  .`,`-upper-background {
    width: 1184px; /* \u56FA\u5B9A\u5BBD\u5EA6 */
    height: 109px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  .`,`-upper-area {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 24px;
    position: relative;
    z-index: 1;

    .`,`-logoIcon-wrapper {
      position: absolute;
      left: 24px;
      top: 24px;
      
      .`,`-logoIcon {
        width: 48px;
      }
    }

    dl {
      margin-left: 76px;
      width: calc(100% - 92px);
      position: relative;
      z-index: 1;
    }

    /* 
    img {
      width: 68px;
      height: 68px;
      object-fit: contain;
      margin-right: 20px;
    }
    */

    dt {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--`,`-color-text-base);
      display: flex;
      align-items: center;
      gap: 8px;
      /* justify-content: space-between; */
    }

    .`,`-desc {
      color: var(--`,`-color-text-description);
      font-size: 12px;
      margin: 0;
      line-height: 20px;
    }
  }

  .`,`-lower-area {
    width: 100%;
    padding: 0 20px 20px;
    
    .`,`-steps-wrapper {
      display: flex;
      width: 100%;
      padding: 16px;
      flex-shrink: 0;
      align-items: flex-start;
      position: relative;
      gap: 16px;
      border-radius: 8px;
      margin-top: 8px;
      background: #f9fafd;
      
      .`,`-step {
        display: flex;
        
        .`,`-index {
          width: 24px;
          height: 24px;
          border-radius: 12px;
          border: rgba(0, 0, 0, 15%) solid 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba(0, 0, 0, 25%);
        }
        
        .`,`-content {
          margin-left: 16px;
          flex: 1;
          
          .`,`-title {
            margin-bottom: 8px;
            color: var(--`,`-color-text-base);
            line-height: 26px;
            font-size: 12px;
            font-weight: 500;
          }
          
          .`,`-desc {
            color: var(--`,`-color-text-description);
            font-size: 12px;
            margin: 0;
          }
        }
      }
    }
  }

  .`,`-expand-btn {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 24px;
    height: 24px;
    z-index: 2;

    &:hover {
      color: #624aff;
    }
  }

  .`,`-check-list-trigger {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 56px;
    z-index: 2;
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),Zc=null;function kr(n){var t,a,o,s=(0,l.useState)(!1),c=Un()(s,2),f=c[0],d=c[1],h=(0,l.useState)(0),j=Un()(h,2),x=j[0],y=j[1],I=(0,l.useRef)(null),B=(0,fn.getCommonConfig)(),D=B.blPrefix,K=Hi(),en=function(sn){if(sn!=null&&sn.length)return(0,r.jsx)("div",{className:"".concat(D,"-steps-wrapper"),children:sn.map(function(nn,xn){return(0,r.jsxs)("div",{className:"".concat(D,"-step"),children:[(0,r.jsx)("div",{className:"".concat(D,"-index"),children:xn+1}),(0,r.jsxs)("div",{className:"".concat(D,"-content"),children:[(0,r.jsx)("p",{className:"".concat(D,"-title"),children:nn.title}),(0,r.jsx)(Fe.Z.Paragraph,{className:"".concat(D,"-desc"),ellipsis:{rows:4,tooltip:(0,je.rb)(nn.desc||"")},children:nn.desc}),nn.action]})]},xn)})})};function M(){if(I.current){var ln=Array.from(I.current.querySelectorAll(".".concat(D,"-upper-area, .").concat(D,"-lower-area"))).reduce(function(sn,nn){return sn+nn.offsetHeight},0);I.current.style.height="".concat(ln,"px")}}var T=function(sn){return sn.steps?en(sn.steps):sn.children},_=function(){return!n.tabs||!f?null:n.tabs.length===1?(0,r.jsx)("div",{className:on()("".concat(D,"-lower-area"),n.lowerCls),style:n.lowerStyle,children:n.tabs[0].steps?en(n.tabs[0].steps):n.tabs[0].children}):(0,r.jsxs)("div",{className:on()("".concat(D,"-lower-area"),n.lowerCls),style:n.lowerStyle,children:[(0,r.jsx)(Yn.ZP.Group,{optionType:"button",options:n.tabs.map(function(sn,nn){return{label:sn.title,value:nn}}),onChange:function(nn){var xn=nn.target.value;y(xn)},value:x,size:"small"}),T(n.tabs[x])]})};return(0,l.useLayoutEffect)(function(){var ln=new MutationObserver(M);return I.current&&ln.observe(I.current,{childList:!0,subtree:!0}),function(){ln&&ln.disconnect()}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(K,{}),(0,r.jsxs)("div",{className:on()("".concat(D,"-container"),n.className),style:n.style,ref:I,children:[(0,r.jsx)("div",{className:on()("".concat(D,"-upper-background")),style:{background:n.upperBackground}}),(0,r.jsxs)("div",{className:on()("".concat(D,"-upper-area"),n.upperCls),style:n.upperStyle,children:[(0,r.jsx)("div",{className:"".concat(D,"-logoIcon-wrapper"),children:n.logo||(0,r.jsx)("img",{className:"".concat(D,"-logoIcon"),src:n.logoIcon,alt:""})}),(0,r.jsxs)("dl",{style:{flex:1},children:[(0,r.jsx)("dt",{children:n.title}),(0,r.jsx)(Fe.Z.Paragraph,{className:"".concat(D,"-desc"),style:{},ellipsis:{rows:2,tooltip:(0,je.rb)(n.desc||"")},children:n.desc})]})]}),_(),n.checkListTrigger&&(0,r.jsx)("div",{className:"".concat(D,"-check-list-trigger"),children:(0,je.kK)(n.checkListTrigger)?n.checkListTrigger:(0,r.jsx)(Ee,{iconType:"icon-tips-line",size:"small",type:"text",onClick:(t=n.checkListTrigger)===null||t===void 0?void 0:t.onClick,children:(a=n.checkListTrigger)===null||a===void 0?void 0:a.text})}),((o=n.tabs)===null||o===void 0?void 0:o.length)&&(0,r.jsx)(Dn,{onClick:function(){return d(function(sn){return!sn})},className:"".concat(D,"-expand-btn"),type:f?"icon-collapse-line":"icon-expand-line"})]})]})}var Gi={sfm_training_public:"sfm_training_public_cn",sfm_deployment_public:"sfm_deployment_public_cn",sfm_inference_public:"sfm_inference_public_cn"},Ji={sfm_training_public:"sfm_trainingglobal_public_intl",sfm_deployment_public:"sfm_deploymentglobal_public_intl",sfm_inference_public:"sfm_inferenceglobal_public_intl"},qe=function(t){return(0,je.DI)()?Ji[t]:Gi[t]},Dr,Xi=(0,b.Z)(Dr||(Dr=E()([`
  .`,`-model-price-con {
    padding: 12px 16px;
    border-radius: 8px;
    background: rgba(246, 245, 255, 60%);

    .`,`-feeCon {
      margin-right: 2px;
    }

    a {
      margin-left: 4px;
    }

    > div:not(:last-child) {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
    }

    .`,`-price {
      margin-left: 12px;
      font-size: 12px;
      color: var(--`,`-color-text-description);

      .`,`-count {
        font-size: 14px;
        font-weight: 500;
        color: #fa8c25;
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Mc=null;function Tr(n){var t,a=n.serviceList,o=n.data,s=Xi(),c=(0,fn.getCommonConfig)(),f=c.blPrefix,d=(0,l.useState)({inference:!0,ft:!0,deploy:!0}),h=Un()(d,2),j=h[0],x=h[1],y=(0,l.useMemo)(function(){var B={};return a.forEach(function(D){switch(D.code){case qe("sfm_training_public"):B.buyModelFt=D.isBuy;break;case qe("sfm_deployment_public"):B.buyModelDeploy=D.isBuy;break;case qe("sfm_inference_public"):B.buyModelInterface=D.isBuy;break}}),B},[a]);(0,l.useEffect)(function(){var B=N()({},j);B.inference=o.supportInference,B.ft=o.supportFt,B.deploy=o.supportIndependentDeploy,x(B)},[o,y]);var I=function(D,K){return String(D)===""||String(D)==="0"?(0,r.jsx)("span",{className:"".concat(f,"-size"),children:Tn.Z.get({id:"pages.components.ModelDetailDrawer.LimitedTimeFree",dm:"\u9650\u65F6\u514D\u8D39"})}):D===void 0?(0,r.jsx)("span",{children:Tn.Z.get({id:"pages.components.ModelDetailDrawer.Updating",dm:"\u66F4\u65B0\u4E2D"})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"".concat(f,"-count"),children:D}),(0,r.jsxs)("span",{className:"".concat(f,"-size"),children:["/",K]})]})};return!j.inference&&!j.ft&&!j.deploy?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsxs)("div",{className:"".concat(f,"-model-price-con"),children:[j.inference&&(0,r.jsxs)(r.Fragment,{children:[o.inferenceInputTokenPriceDigits===void 0?null:(0,r.jsxs)("div",{children:[(0,r.jsx)(Dn,{className:"".concat(f,"-feeCon"),type:"icon-tag-line"}),Tn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCallInput",dm:"\u6A21\u578B\u8C03\u7528-\u8F93\u5165"}),(0,r.jsx)("span",{className:"".concat(f,"-price"),children:I(o.inferenceInputTokenPriceDigits,o.inferenceInputTokenPriceUnit)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Dn,{className:"".concat(f,"-feeCon"),type:"icon-tag-line"}),o.inferenceInputTokenPriceDigits===void 0||o.inferenceOutputTokenPriceDigits===void 0?Tn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCall",dm:"\u6A21\u578B\u8C03\u7528"}):Tn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCallOutput",dm:"\u6A21\u578B\u8C03\u7528-\u8F93\u51FA"}),(t=o.modelExt)!==null&&t!==void 0&&t.priceUrl?(0,r.jsx)("a",{href:o.modelExt.priceUrl,target:"_blank",rel:"noreferrer",children:Tn.Z.get({id:"pages.components.ModelDetailDrawer.ViewDetails",dm:"\u67E5\u770B\u8BE6\u60C5"})}):(0,r.jsx)("span",{className:"".concat(f,"-price"),children:I(o.inferenceOutputTokenPriceDigits,o.inferenceOutputTokenPriceUnit)})]})]}),j.ft&&(0,r.jsxs)("div",{children:[(0,r.jsx)(Dn,{className:"".concat(f,"-feeCon"),type:"icon-tag-line"}),Tn.Z.get({id:"pages.components.ModelDetailDrawer.ModelTraining",dm:"\u6A21\u578B\u8BAD\u7EC3"}),(0,r.jsx)("span",{className:"".concat(f,"-price"),children:I(o.trainPriceDigits,o.trainPriceUnit)})]}),j.deploy&&(0,r.jsxs)("div",{children:[(0,r.jsx)(Dn,{className:"".concat(f,"-feeCon"),type:"icon-tag-line"}),Tn.Z.get({id:"pages.components.ModelDetailDrawer.ModelDeploymentPayAsYou",dm:"\u6A21\u578B\u90E8\u7F72-\u540E\u4ED8\u8D39"}),(0,r.jsxs)("span",{className:"".concat(f,"-price"),children:[(0,r.jsx)("span",{className:"".concat(f,"-count"),children:Tn.Z.get({id:"pages.components.ModelDetailDrawer.Yuan.1",dm:"20\u5143"})}),(0,r.jsx)("span",{className:"".concat(f,"-size"),children:Tn.Z.get({id:"pages.components.ModelDetailDrawer.CalculationForceUnitHour",dm:"/\u7B97\u529B\u5355\u5143/\u5C0F\u65F6"})}),"\uFF08",o.postDeployPriceDigits?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"".concat(f,"-count"),children:o.postDeployPriceDigits}),(0,r.jsx)("span",{className:"".concat(f,"-size"),children:o.postDeployPriceUnit})]}):Tn.Z.get({id:"pages.components.ModelDetailDrawer.TheRequiredCalculationForceUnit",dm:"\u6240\u9700\u7B97\u529B\u5355\u5143\u4EE5\u6587\u6863\u4E3A\u51C6"}),"\uFF09"]})]})]})]})}var Yi=e(20745),Te={show:function(t,a){var o=(0,fn.getCommonConfig)(),s=o.prefix,c=o.antPrefix,f=o.configProviderProps,d=document.querySelector("div[role=".concat(s,"-static").concat(a?"-".concat(a):"","]"));d&&d.parentElement.removeChild(d);var h=document.createElement("div");h.setAttribute("role","".concat(s,"-static").concat(a?"-".concat(a):""));var j=document.querySelector(".spark")||document.body;j.appendChild(h);var x=Yi.createRoot(h);x.render((0,r.jsx)(Ye.ZP,N()(N()({prefix:s,prefixCls:c},f),{},{children:t}))),h.root=x},hide:function(t){var a=(0,fn.getCommonConfig)(),o=a.prefix,s=o===void 0?"":o,c=document.querySelector("div[role=".concat(s,"-static").concat(t?"-".concat(t):"","]"));if(c){var f=c.root;f&&f.unmount(),c.parentElement.removeChild(c)}}},qi=e(96638),Zr,_i=(0,b.Z)(Zr||(Zr=E()([`
  .`,`-buy-loading-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 56px 0 44px;

    .`,`-title {
      margin: 16px 0;
      font-size: 16px;
      font-weight: 500;
    }

    img {
      width: 120px;
    }

    .`,`-progress {
      width: 222px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),Ic=null,nl=function(n){var t=_i(),a=(0,fn.getCommonConfig)(),o=a.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(Yt,N()(N()({open:!0,width:462,hiddenFooter:!0,closeIcon:(0,r.jsx)(r.Fragment,{}),maskClosable:!1},n),{},{children:(0,r.jsxs)("div",{className:"".concat(o,"-buy-loading-modal-content"),children:[(0,r.jsx)("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN011LoItR1oCc8YALC6M_!!6000000005189-54-tps-264-264.apng",alt:""}),(0,r.jsx)("div",{className:"".concat(o,"-title"),children:n.title}),(0,r.jsx)(_n.Z,{strokeColor:"#624AFF",trailColor:"#E7E8EE",showInfo:!1,className:"".concat(o,"-progress"),percent:n.percent})]})}))]})},Mr,Ir=(0,b.Z)(Mr||(Mr=E()([`
  .`,`-modal {
    .`,`-modal-content {
      .`,`-role-policy {
        border-radius: 8px;
        padding: 9px 16px;
        gap: 12px;

        /* \u4E3B\u54C1\u724C\u8272\u5E8F\u5217/color-6 */
        background: var(--`,`-color-primary-bg);
        border: 1px solid #fff;
        margin: 16px 0;
      }

      .`,`-auth-modal-footer {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        margin-top: 12px;
        
        .`,`-auth-modal-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .`,`-auth-modal-service {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          
          &.`,`-auth-modal-alert {
            color: #fe5967;
            
            .`,`-checkbox-wrapper {
              color: #fe5967;
            }
          }

          > span {
            line-height: 1;
          }
        }
      }
    }
  }

  .`,`-auth-modal-tips {
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;

    /* \u7070\u8272\u5E8F\u5217/\u4E8C\u7EA7\u6587\u672C */
    color: #878AAB;
  }

  .`,`-auth-failed-modal-title {
    display: flex;
    
    .bl-iconfont {
      color: #FAAD14 !important;
      font-size: 18px;
    }
    
    /* Global styles for anticon */
    .anticon {
      color: #FAAD14 !important;
      font-size: 20px;
      margin-right: 18px;
    }
  }

  .`,`-auth-failed-modal-title-text {
    margin-left: 18px;
  }

  .`,`-auth-failed-modal-content {
    margin-left: 38px;

    .rolePolicy {
      color: #27264D;
    }
  }
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix}),Oc=null,el={show:function(t){Te.show((0,r.jsx)(al,{handleOk:t.handleOk,onSuccess:t.onSuccess,onClose:function(){Te.hide(t.id)},id:t.id,serviceName:t.serviceName,roleName:t.roleName,policyName:t.policyName,desc:t.desc,tips:t.tips,checkBox:t.checkBox,title:t.title}),t.id)},hide:function(t){Te.hide(t.id)}},tl={show:function(t){var a=t.authFailedMsg,o=t.id;Te.show((0,r.jsx)(rl,{onClose:function(){Te.hide(o)},authFailedMsg:a,id:t.id,serviceName:t.serviceName,roleName:t.roleName}),o)},hide:function(t){var a=t.id;Te.hide(a)}},rl=function(t){var a,o=Ir(),s=(0,fn.getCommonConfig)(),c=s.prefix,f=s.sparkPrefix,d=f===void 0?"":f,h=t.onClose,j=t.authFailedMsg,x=t.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(Qe.Z,{zIndex:1e4,onCancel:function(){return h()},open:!0,title:(0,r.jsxs)("div",{className:"".concat(d,"-auth-failed-modal-title"),children:[(0,r.jsx)(Dn,{type:"icon-warningCircle-fill"}),(0,r.jsx)("span",{className:"".concat(d,"-auth-failed-modal-title-text"),children:Tn.Z.get({id:"components.bailian.BLSLRModal.AuthorizationFailed",dm:"\u6388\u6743\u5931\u8D25"})})]}),width:690,getContainer:function(){return document.querySelector("div[role=".concat(c,"-static").concat(x?"-".concat(x):"","]"))||void 0},children:(0,r.jsxs)("div",{className:"".concat(d,"-auth-failed-modal-content"),children:[(0,r.jsx)("div",{className:"".concat(d,"-auth-modal-tips"),children:j||Tn.Z.get({id:"components.bailian.BLSLRModal.TheUserDoesNotHave",dm:"\u7528\u6237\u6CA1\u6709\u521B\u5EFA\u670D\u52A1\u5173\u8054\u89D2\u8272\u7684\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u4E3B\u8D26\u53F7\u6216\u6743\u9650\u7BA1\u7406\u5458\u6388\u6743\u5F53\u524D\u7528\u6237\u6216\u521B\u5EFA\u670D\u52A1\u5173\u8054\u89D2\u8272\u7684\u81EA\u5B9A\u4E49\u6743\u9650\u7B56\u7565\u3002\u81EA\u5B9A\u4E49\u6743\u9650\u4FA7\u7684\u76F8\u5173\u4FE1\u606F\u53C2\u8003\u5982\u4E0B\uFF1A"})}),!!((a=t.serviceName)!==null&&a!==void 0&&a.length)&&(0,r.jsxs)("div",{className:"".concat(d,"-role-policy"),children:[(0,r.jsxs)("div",{children:["Service Name:",t.serviceName]}),(0,r.jsx)("div",{children:Tn.Z.get({id:"components.bailian.BLSLRModal.ServiceAssociatedRoleNameParamsrolename",dm:"\u670D\u52A1\u5173\u8054\u89D2\u8272\u540D\u79F0\uFF1A{paramsRoleName}"},{paramsRoleName:t.roleName})}),(0,r.jsx)("div",{children:Tn.Z.get({id:"components.bailian.BLSLRModal.UserPermissionsRequiredToPerform",dm:"\u6267\u884C\u8BE5\u64CD\u4F5C\u6240\u9700\u7684\u7528\u6237\u6743\u9650\uFF1Aram:CreateServiceLinkedRole"})})]})]})})]})},al=function(t){var a=Ir(),o=t.id,s=t.serviceName,c=t.roleName,f=t.desc,d=t.policyName,h=t.tips,j=t.checkBox,x=(0,fn.getCommonConfig)(),y=x.sparkPrefix,I=y===void 0?"":y,B=x.prefix,D=B===void 0?"":B,K=(0,qi.Z)({checked:!t.checkBox,showAlert:!1,percent:10,loading:!1,failed:!1}),en=Un()(K,2),M=en[0],T=en[1],_=(0,l.useRef)(null),ln=function(){_.current&&(clearTimeout(_.current),_.current=null)},sn=function(){T(function(mn){return N()(N()({},mn),{},{percent:mn.percent<90?mn.percent+10:mn.percent})})},nn=function(){var mn;if(!M.checked){T({showAlert:!0});return}T({loading:!0}),_.current=setInterval(function(){sn()},500),(mn=t.handleOk)===null||mn===void 0||mn.call(t).then(function(){var Sn;ln(),T({percent:100}),t.onClose(),(Sn=t.onSuccess)===null||Sn===void 0||Sn.call(t)}).catch(function(Sn){t.onClose(),ln(),tl.show({authFailedMsg:Sn==null?void 0:Sn.errorMsg,id:o,serviceName:s,roleName:c}),T({loading:!1,failed:!0})})},xn=(0,l.useMemo)(function(){return(0,r.jsxs)("div",{className:"".concat(I,"-auth-modal-footer"),children:[(0,r.jsx)("div",{className:on()("".concat(I,"-auth-modal-service"),M.showAlert&&"".concat(I,"-auth-modal-alert")),children:j&&(0,r.jsx)(Wt.Z,{value:M.checked,onChange:function(mn){T({checked:mn.target.checked})},children:j})}),(0,r.jsxs)("div",{className:"".concat(I,"-auth-modal-actions"),children:[(0,r.jsx)(Ee,{onClick:t.onClose,children:Tn.Z.get({id:"pages.components.OSSAuthModal.Cancel",dm:"\u53D6\u6D88"})}),(0,r.jsx)(Ee,{onClick:nn,type:"primary",children:Tn.Z.get({id:"pages.components.OSSAuthModal.ConfirmAuthorization",dm:"\u786E\u8BA4\u6388\u6743"})})]})]})},[M]);return M.percent===100||M.failed?null:M.loading?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)(nl,{percent:M.percent,title:Tn.Z.get({id:"pages.components.OSSAuthModal.AuthorizationIsInProgressPlease",dm:"\u6B63\u5728\u6388\u6743\u4E2D\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B..."}),getContainer:function(){return document.querySelector("div[role=".concat(D,"-static").concat(o?"-".concat(o):"","]"))||void 0}})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsxs)(Qe.Z,{zIndex:1e4,onCancel:t.onClose,footer:xn,open:!0,title:t.title,getContainer:function(){return document.querySelector("div[role=".concat(D,"-static").concat(o?"-".concat(o):"","]"))||void 0},width:690,children:[!!f&&(0,r.jsx)("div",{className:"".concat(I,"-auth-modal-tips"),children:f}),(!!(c!=null&&c.length)||!!(d!=null&&d.length))&&(0,r.jsxs)("div",{className:"".concat(I,"-role-policy"),children:[!!(c!=null&&c.length)&&(0,r.jsx)("div",{children:Tn.Z.get({id:"components.bailian.BLSLRModal.RoleNameRolename",dm:"\u89D2\u8272\u540D\u79F0\uFF1A{roleName}"},{roleName:c})}),!!(d!=null&&d.length)&&(0,r.jsx)("div",{children:Tn.Z.get({id:"components.bailian.BLSLRModal.RolePermissionPolicyPolicyname",dm:"\u89D2\u8272\u6743\u9650\u7B56\u7565\uFF1A{policyName}"},{policyName:d})})]}),!!h&&(0,r.jsx)("div",{className:"".concat(I,"-auth-modal-tips"),children:h})]})]})},Or=e(96981),ft=e(57381),Ar=e(3303),wr=e(36409),Rr,ol=(0,b.Z)(Rr||(Rr=E()([`
  .`,`-cascader-popup {
    .`,`-cascader-menu:first-child {
      flex: 3;
      width: 0;
    }

    .`,`-cascader-menu:not(:first-child) {
      flex: 2;
      width: 0;
    }

    .`,`-cascader-menu-item-content {
      width: 100%;

      .`,`-item-content {
        display: flex;

        .`,`-count {
          flex: 1;
          width: 0;
          color: var(--`,`-color-text-description);
        }
      }
    }
  }

  .`,`-dataset-cascader {
    .`,`-select-selection-overflow {
      .`,`-select-selection-overflow-item {
        margin: 0 !important;

        .`,`-select-selection-item {
          font-size: 14px;
          background: var(--`,`-color-primary-bg);
          border-radius: 100px;

          .`,`-select-selection-item-remove {
            .anticon-close {
              color: var(--`,`-color-text-base);
            }
          }
        }
      }
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ac=null,il=function(n){return n[n.sftTG=0]="sftTG",n[n.testTG=2]="testTG",n[n.application=3]="application",n[n.sftIU=4]="sftIU",n[n.dopTG=5]="dopTG",n}({}),zr=function(n){return n[n.draft=0]="draft",n[n.publishing=1]="publishing",n[n.published=2]="published",n[n.publishFailed=3]="publishFailed",n}({});function ll(n){var t=(0,fn.getCommonConfig)(),a=t.blPrefix,o=Ne.Z.useFormInstance(),s=ol(),c=n.className,f=c===void 0?"":c,d=n.style,h=n.group,j=n.releaseStatus,x=j===void 0?zr.published:j,y=n.handleSelect,I=n.singleSelect,B=I===void 0?!1:I,D=n.formName,K=n.corpusItems,en=n.defaultValue,M=n.queryFn,T=M===void 0?Yl:M,_=(0,l.useRef)(),ln=(0,l.useState)([]),sn=Un()(ln,2),nn=sn[0],xn=sn[1],Pn=(0,l.useState)({releaseStatus:x,datasetGroupType:h,datasetGroupPageSize:10,datasetGroupPageNo:1,name:void 0}),mn=Un()(Pn,2),Sn=mn[0],Kn=mn[1],ee=(0,l.useState)([]),bn=Un()(ee,2),Wn=bn[0],le=bn[1],dn=(0,l.useState)(!1),gn=Un()(dn,2),ae=gn[0],oe=gn[1],Cn=(0,l.useState)(!1),V=Un()(Cn,2),rn=V[0],ue=V[1],xe=(0,l.useRef)(!0);(0,l.useEffect)(function(){(!K||!K.length)&&xn([])},[K]),(0,l.useEffect)(function(){h!=null&&h.length&&Kn(N()(N()({},Sn),{},{datasetGroupType:h}))},[h]),(0,l.useEffect)(function(){h!=null&&h.length&&Zn(Sn)},[Sn]),(0,l.useEffect)(function(){On()},[en]);var zn=function(){if(!rn){var re=document.querySelector("#menu-cou-scroll > div");if(re){var In=re.children[0];In.addEventListener("scroll",ze),ue(!0)}}};function On(){var te=o.getFieldsValue(!0),re=en||te[D]||[];if(re.length){var In=re.map(function(Gn){return[Gn.fatherId,Gn.value]});xn(In)}}function Zn(te){oe(!0),T(te).then(function(re){oe(!1);var In=ql(re),Gn=(0,hr.Z)(In,function(pe){return(pe.children||[]).length>0}),ie=te.datasetGroupPageNo===1?Gn:[].concat(De()(Wn),De()(Gn));le(ie),On(),xe.current=!!In.length}).catch(function(){oe(!1)})}var Hn=(0,wr.Z)(function(te){Kn(N()(N()({},Sn),{},{name:te,datasetGroupPageNo:1}))},500),se=function(re){var In=[];Wn.forEach(function(Gn){var ie;Gn!=null&&(ie=Gn.children)!==null&&ie!==void 0&&ie.length&&Gn.children.forEach(function(pe){re&&re.some(function(nc){return nc.includes(pe.datasetId)})&&In.push(pe)})}),xn(function(){return re}),y(In)},Be=function(re,In){var Gn=In.filter(function(ie){return!!ie});return Gn.length?Gn.map(function(ie,pe){return!ie||ie!=null&&ie.children?null:(0,r.jsxs)("div",{children:[ie.fatherName,">",ie.datasetVersionName]},pe)}):(xn([]),null)},ze=function(re){var In=re.target;xe.current&&In.scrollHeight-In.clientHeight-In.scrollTop<=5&&Kn(function(Gn){return N()(N()({},Gn),{},{datasetGroupPageNo:Gn.datasetGroupPageNo+1})})},Xl=function(re){var In;return(0,r.jsx)(ft.Z,{spinning:ae,children:(0,r.jsx)("div",{id:"menu-cou-scroll",style:{width:(In=_.current)===null||In===void 0||(In=In.nativeElement)===null||In===void 0?void 0:In.clientWidth},children:re})})};function Yl(te){return Ct.apply(this,arguments)}function Ct(){return Ct=Ce()(Xn()().mark(function te(re){var In,Gn;return Xn()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,(0,Or.v)("zeldaEasy.broadscope-platform.datasetGroup.queryNonEmpty",{input:re});case 2:return In=pe.sent,Gn=In.records||[],pe.abrupt("return",Gn);case 5:case"end":return pe.stop()}},te)})),Ct.apply(this,arguments)}function ql(te){var re=(te||[]).map(function(In){return N()(N()({},In),{},{originLabel:In.name,label:(0,r.jsx)(dt,{children:In.name}),value:In.datasetGroupId,children:(In.datasets||[]).map(function(Gn){var ie=N()(N()({},Gn),{},{originLabel:Gn.datasetVersionName,value:Gn.datasetId,fatherId:In.datasetGroupId,fatherName:In.name});return ie.label=_l(ie),ie})})});return re}function _l(te){return(0,r.jsxs)("div",{className:"".concat(a,"-item-content"),children:[te.originLabel,(0,r.jsx)("span",{className:"".concat(a,"-count"),children:(0,r.jsx)(dt,{children:Tn.Z.get({id:"components.proComponents.BLDatasetCascader.DataVolumeChilddatacount",dm:"\uFF08\u6570\u636E\u91CF\uFF1A{childDataCount}\uFF09"},{childDataCount:te.dataCount})})})]})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(Ar.Z,{ref:_,className:on()("".concat(a,"-dataset-cascader"),f),style:d,popupClassName:"".concat(a,"-cascader-popup"),options:Wn,value:nn,onChange:se,placeholder:Tn.Z.get({id:"bailianUi.bizComponents.BLDatasetCascader.Placeholder",dm:"\u8BF7\u9009\u62E9"}),showCheckedStrategy:Ar.Z.SHOW_CHILD,multiple:!B,dropdownRender:Xl,loading:ae,displayRender:Be,onFocus:zn,showSearch:{filter:function(){return!0}},onSearch:Hn,expandTrigger:"hover"})]})}var cl=e(35301),Ur,sl=(0,b.Z)(Ur||(Ur=E()([`
  .`,`-files-input {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 8%);
    border-radius: 8px;
    padding: 10px 12px;
    
    &.`,`-files-input-focus {
      border-color: var(--`,`-color-primary);
      box-shadow: 0 0 0 2px rgba(98, 74, 255, 10%);
    }

    &:hover {
      border-color: var(--`,`-color-primary-hover);
    }
    
    .`,`-files-input-image {
      width: 80px;
      height: 80px;
      flex: 0 0 80px;
      margin-right: 8px;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 8%);

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .`,`-files-input-image-loading {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .`,`-files-input-image-delete-mask {
        width: 80px;
        height: 80px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        cursor: pointer;
        background: rgba(44, 44, 115, 50.2%);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .`,`-files-input-image-delete-icon {
        font-size: 16px;
        color: var(--`,`-color-text-light-solid);
      }
    }
    
    .`,`-input {
      overflow: auto;
      resize: none;
      border: none !important;
      box-shadow: none !important;
      padding: 0;
      padding-right: 11px;

      &::-webkit-scrollbar-thumb {
        background: #d8d9e6;
        border-radius: 4px;
        box-shadow: none;
        height: 4px;
        width: 4px;
      }

      &::-webkit-scrollbar {
        height: 4px;
        width: 4px;
      }
    }
    
    .`,`-files-input-send-area {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-left: 4px;
    }
    
    .`,`-files-input-send-icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),wc=null,$r=function(n){var t=(0,fn.getCommonConfig)(),a=t.blPrefix,o=n.imageStatus,s=n.sendArea,c=n.onSend,f=n.hideSendArea,d=n.imageUrl,h=n.textAreaProps,j=sl(),x=(0,l.useState)(!1),y=Un()(x,2),I=y[0],B=y[1],D=(0,l.useState)(!1),K=Un()(D,2),en=K[0],M=K[1],T=(0,l.useState)(""),_=Un()(T,2),ln=_[0],sn=_[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsxs)("div",{className:on()(n.wrapperClassName,"".concat(a,"-files-input"),I&&"".concat(a,"-files-input-focus")),children:[(o==="success"||o==="uploading")&&(0,r.jsxs)("div",{className:on()("".concat(a,"-files-input-image")),onMouseEnter:function(){return M(!0)},onMouseLeave:function(){return M(!1)},children:[!!(d!=null&&d.length)&&o==="success"&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",{src:d})}),o==="uploading"&&(0,r.jsx)("div",{className:on()("".concat(a,"-files-input-image-loading")),children:(0,r.jsx)(ft.Z,{})}),en&&(0,r.jsx)("div",{className:"".concat(a,"-files-input-image-delete-mask"),children:(0,r.jsx)(Dn,{type:"icon-delete-line",className:"".concat(a,"-files-input-image-delete-icon"),onClick:function(){var xn;(xn=n.onDeleteImage)===null||xn===void 0||xn.call(n)}})})]}),(0,r.jsx)(cl.Z,N()(N()({},h),{},{className:on()("".concat(a,"-input"),h.className),onFocus:function(xn){var Pn;B(!0),(Pn=h.onFocus)===null||Pn===void 0||Pn.call(h,xn)},onBlur:function(xn){var Pn;B(!1),(Pn=h.onBlur)===null||Pn===void 0||Pn.call(h,xn)},onChange:function(xn){var Pn;sn(xn.target.value),(Pn=h.onChange)===null||Pn===void 0||Pn.call(h,xn)},value:h.value===void 0?ln:h.value})),!f&&(s||(0,r.jsx)("div",{className:on()("".concat(a,"-files-input-send-area")),children:(0,r.jsx)(Dn,{type:"icon-upperrightArrow-line",className:on()("".concat(a,"-files-input-send-icon")),onClick:function(){c==null||c(ln)}})}))]})]})},ul=(0,l.forwardRef)(function(n,t){var a=n.fetchOptions,o=n.debounceTimeout,s=n.options,c=n.onOptionsChange,f=n.initializingContent,d=n.errorContent,h=n.paginitionType,j=h===void 0?"pageNo":h,x=n.autoFetch,y=(0,fn.getCommonConfig)(),I=y.antPrefix,B=(0,l.useState)(!1),D=Un()(B,2),K=D[0],en=D[1],M=(0,l.useState)(""),T=Un()(M,2),_=T[0],ln=T[1],sn=(0,l.useRef)(""),nn=(0,l.useRef)(1),xn=(0,l.useRef)(void 0),Pn=(0,l.useRef)(!0),mn=(0,l.useRef)(0),Sn=(0,l.useState)(!1),Kn=Un()(Sn,2),ee=Kn[0],bn=Kn[1];(0,l.useEffect)(function(){x&&Wn("refresh")},[]);var Wn=(0,l.useMemo)(function(){var dn=function(ae){if(Pn.current){mn.current+=1;var oe=mn.current;ae==="refresh"&&(c([]),nn.current=1,xn.current=void 0),bn(!0);var Cn={searchValue:sn.current,pageNo:nn.current,nextMarker:xn.current};a(Cn).then(function(V){if(en(!0),oe===mn.current&&V){bn(!1),nn.current+=1;var rn=ae==="refresh"?V.options||[]:[].concat(De()(s||[]),De()(V.options||[]));if(c(rn),j==="nextMarker")xn.current=V.nextMarker,Pn.current=!!xn.current;else{var ue;(ue=V.options)!==null&&ue!==void 0&&ue.length?Pn.current=!0:Pn.current=!1}}})}};return(0,wr.Z)(dn,o)},[a,o,s]),le=(0,l.useCallback)(function(dn){var gn=dn.target;gn&&!ee&&gn.clientHeight-(gn.scrollHeight-gn.scrollTop)>=-5&&Wn("incremental")},[Wn,ee]);return(0,l.useImperativeHandle)(t,function(){return{debounceFetcher:Wn,searchValue:_}},[Wn,_]),x&&!K?f:s===null?d:(0,r.jsx)(or,N()(N()({},n),{},{onPopupScroll:le,searchValue:_,onSearch:function(gn){sn.current=gn,ln(gn),nn.current=1,xn.current=void 0,Pn.current=!0,Wn("refresh")},onDropdownVisibleChange:function(gn){gn&&!K&&Wn("refresh")},placeholder:Tn.Z.get({id:"components.proComponents.BLPaginitionSelect.YouCanSearchByPrefix",dm:"\u53EF\u6309\u7167\u524D\u7F00\u5339\u914D\u641C\u7D22\u6216\u76F4\u63A5\u9009\u62E9"}),virtual:!1,dropdownRender:function(gn){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(ft.Z,{spinning:ee,children:[gn,!Pn.current&&!!s.length&&(0,r.jsx)("div",{style:{color:"var(--".concat(I,"-color-text-description)"),fontSize:12,lineHeight:"32px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Tn.Z.get({id:"components.proComponents.BLPaginitionSelect.ItSOver",dm:"\u5DF2\u7ECF\u5230\u5E95\u4E86"})})]})})}}))}),dl=e(51850);function Wr(){return mt.apply(this,arguments)}function mt(){return mt=Ce()(Xn()().mark(function n(){var t,a=arguments;return Xn()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,s.abrupt("return",new Promise(function(c){setTimeout(c,t)}));case 2:case"end":return s.stop()}},n)})),mt.apply(this,arguments)}var fl=e(35872),ml=e(93361),Vr=e(79697),vl=e(37514),Qr=e(38018),xl=["product","action","url","version","region","headers"],gl=function(){var n=Ce()(Xn()().mark(function a(o,s,c){var f,d,h,j,x,y,I,B,D,K,en,M,T,_,ln;return Xn()().wrap(function(nn){for(;;)switch(nn.prev=nn.next){case 0:return d=o.product,h=o.action,j=o.url,x=o.version,y=o.region,I=o.headers,B=I===void 0?{}:I,D=qn()(o,xl),K="".concat(j||"/data/api.json","?action=").concat(h,"&product=").concat(d),x&&(K+="&version=".concat(x)),en={sec_token:((f=window.ALIYUN_CONSOLE_CONFIG)===null||f===void 0?void 0:f.SEC_TOKEN)||"",region:y},s&&(en.params=JSON.stringify(s)),c&&Object.assign(en,c),M=N()({method:"post",credentials:"same-origin",headers:N()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},B)},D),T=Object.assign({},M),T.body=(0,Qr.stringify)(en),nn.next=11,fetch(K,T);case 11:return _=nn.sent,nn.next=14,_.json();case 14:if(ln=nn.sent,!(ln.code!=="200"&&!ln.successResponse)){nn.next=17;break}return nn.abrupt("return",Promise.reject(ln));case 17:return nn.abrupt("return",ln);case 18:case"end":return nn.stop()}},a)}));function t(a,o,s){return n.apply(this,arguments)}return t}(),vt=gl,xt=e(1259),pl=["withDefaultCornerstoneParam","cornerstoneParam","origin","autoMsg","ignoreCodes","region"];function hl(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.withDefaultCornerstoneParam,c=s===void 0?!0:s,f=n.cornerstoneParam,d=f===void 0?{}:f,h=n.origin,j=h===void 0?!1:h,x=n.autoMsg,y=x===void 0?!0:x,I=n.ignoreCodes,B=I===void 0?[]:I,D=n.region,K=qn()(n,pl),en=N()(N()({},K),{},{region:D||((t=window.g_config)===null||t===void 0?void 0:t.ramRegion)}),M=N()(N()(N()({},c?(0,xt.kF)(xt.Ii.pop):{}),d),o.cornerstoneParam),T=(0,ml.Z)(o,"cornerstoneParam"),_=N()({},T);(0,Vr.Z)(M)||(_.cornerstoneParam=M);var ln={};return(0,Vr.Z)(_)||(ln.content=JSON.stringify(_)),vt(en,a,ln).then(function(sn){var nn;if((nn=sn.data)!==null&&nn!==void 0&&nn.success){var xn=sn.data,Pn=xn==null?void 0:xn.data;return!(0,vl.Z)(Pn)&&!j?{result:Pn}:Pn}var mn=sn.data;if(mn!=null&&mn.message||mn.errorMsg)return Promise.reject(mn);var Sn=mn==null?void 0:mn.data;return Sn!=null&&Sn.ErrorMsg?(Sn.code||(Sn.code=Sn.ErrorCode),Sn.message||(Sn.message=Sn.ErrorMsg),Promise.reject(Sn)):Promise.reject(mn||sn)}).catch(function(sn){var nn=sn||{};return console.group("pop REQUEST FAILED"),console.log("[options]",n),console.log("[data]",a),console.log("[extraParams]",o),console.log("[result]",nn),console.groupEnd(),nn.errorMsg&&(nn.message=nn.errorMsg),nn.errorCode&&(nn.code=nn.errorCode),(0,xt.S3)(nn,{autoMsg:y,ignoreCodes:B})})}function Kr(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.timeout,o=a===void 0?5e3:a,s=t.intervalTime,c=s===void 0?100:s,f=Date.now();return new Promise(function(d,h){var j=setInterval(function(){var x=n();x?(clearInterval(j),d(x)):Date.now()-f>o&&(h("timeout"),clearInterval(j))},c)})}function Pl(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Kr(function(){return document.querySelector(n)},t)}var yl=e(89046),bl=[{value:"cn-qingdao",label:"\u534E\u53171\uFF08\u9752\u5C9B\uFF09",labelEn:"China (Qingdao)"},{value:"cn-beijing",label:"\u534E\u53172\uFF08\u5317\u4EAC\uFF09",labelEn:"China (Beijing)"},{value:"cn-zhangjiakou",label:"\u534E\u53173\uFF08\u5F20\u5BB6\u53E3\uFF09",labelEn:"China (Zhangjiakou)"},{value:"cn-huhehaote",label:"\u534E\u53175\uFF08\u547C\u548C\u6D69\u7279\uFF09",labelEn:"China (Hohhot)"},{value:"cn-wulanchabu",label:"\u534E\u53176\uFF08\u4E4C\u5170\u5BDF\u5E03\uFF09",labelEn:"China (Ulanqab)"},{value:"cn-hangzhou",label:"\u534E\u4E1C1\uFF08\u676D\u5DDE\uFF09",labelEn:"China (Hangzhou)"},{value:"cn-shanghai",label:"\u534E\u4E1C2\uFF08\u4E0A\u6D77\uFF09",labelEn:"China (Shanghai)"},{value:"cn-nanjing",label:"\u534E\u4E1C5\uFF08\u5357\u4EAC-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Nanjing - Local Region)"},{value:"cn-fuzhou",label:"\u534E\u4E1C6\uFF08\u798F\u5DDE-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Fuzhou - Local Region)"},{value:"cn-shenzhen",label:"\u534E\u53571\uFF08\u6DF1\u5733\uFF09",labelEn:"China (Shenzhen)"},{value:"cn-heyuan",label:"\u534E\u53572\uFF08\u6CB3\u6E90\uFF09",labelEn:"China (Heyuan)"},{value:"cn-guangzhou",label:"\u534E\u53573\uFF08\u5E7F\u5DDE\uFF09",labelEn:"China (Guangzhou)"},{value:"cn-wuhan-lr",label:"\u534E\u4E2D1\uFF08\u6B66\u6C49-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Wuhan - Local Region)"},{value:"cn-chengdu",label:"\u897F\u53571\uFF08\u6210\u90FD\uFF09",labelEn:"China (Chengdu)"},{value:"cn-hongkong",label:"\u4E2D\u56FD\u9999\u6E2F",labelEn:"China (Hong Kong)"}],Cl=[{value:"ap-southeast-2",label:"\u6FB3\u5927\u5229\u4E9A\uFF08\u6089\u5C3C\uFF09\u5DF2\u5173\u505C",labelEn:"Australia (Sydney) Closed"},{value:"ap-southeast-6",label:"\u83F2\u5F8B\u5BBE\uFF08\u9A6C\u5C3C\u62C9\uFF09",labelEn:"Philippines (Manila)"},{value:"ap-northeast-2",label:"\u97E9\u56FD\uFF08\u9996\u5C14\uFF09",labelEn:"South Korea (Seoul)"},{value:"ap-southeast-3",label:"\u9A6C\u6765\u897F\u4E9A\uFF08\u5409\u9686\u5761\uFF09",labelEn:"Malaysia (Kuala Lumpur)"},{value:"ap-northeast-1",label:"\u65E5\u672C\uFF08\u4E1C\u4EAC\uFF09",labelEn:"Japan (Tokyo)"},{value:"ap-southeast-7",label:"\u6CF0\u56FD\uFF08\u66FC\u8C37\uFF09",labelEn:"Thailand (Bangkok)"},{value:"ap-southeast-1",label:"\u65B0\u52A0\u5761",labelEn:"Singapore"},{value:"ap-southeast-5",label:"\u5370\u5EA6\u5C3C\u897F\u4E9A\uFF08\u96C5\u52A0\u8FBE\uFF09",labelEn:"Indonesia (Jakarta)"}],jl=[{value:"eu-central-1",label:"\u5FB7\u56FD\uFF08\u6CD5\u5170\u514B\u798F\uFF09",labelEn:"Germany (Frankfurt)"},{value:"us-east-1",label:"\u7F8E\u56FD\uFF08\u5F17\u5409\u5C3C\u4E9A\uFF09",labelEn:"US (Virginia)"},{value:"us-west-1",label:"\u7F8E\u56FD\uFF08\u7845\u8C37\uFF09",labelEn:"US (Silicon Valley)"},{value:"eu-west-1",label:"\u82F1\u56FD\uFF08\u4F26\u6566\uFF09",labelEn:"UK (London)"}],Sl=[{value:"me-east-1",label:"\u963F\u8054\u914B\uFF08\u8FEA\u62DC\uFF09",labelEn:"UAE (Dubai)"},{value:"me-central-1",label:"\u6C99\u7279\uFF08\u5229\u96C5\u5F97\uFF09",labelEn:"Saudi Arabia (Riyadh)"}],El=[{value:"cn-beijing-finance-1",label:"\u534E\u53172 \u91D1\u878D\u4E91\uFF08\u9080\u6D4B\uFF09",labelEn:"China North 2 Finance (Preview)"},{value:"cn-hangzhou-finance",label:"\u534E\u4E1C1 \u91D1\u878D\u4E91",labelEn:"China East 1 Finance"},{value:"cn-shanghai-finance-1",label:"\u534E\u4E1C2 \u91D1\u878D\u4E91",labelEn:"China East 2 Finance"},{value:"cn-shenzhen-finance-1",label:"\u534E\u53571 \u91D1\u878D\u4E91",labelEn:"China South 1 Finance"}],Nl=[].concat(bl,Cl,jl,Sl,El),Bl=(0,Pr.Z)(Nl,function(n,t){return n[t.value]=t,n},{});function Fl(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(0,yl.V)(),o=N()(N()({},Bl),(t=window.ALIYUN_CONSOLE_GLOBAL)===null||t===void 0?void 0:t.regionIdItemMap),s=o[n],c=a==="zh-CN"?"label":"labelEn";return(s==null?void 0:s[c])||""}function Ll(n,t){return gt.apply(this,arguments)}function gt(){return gt=Ce()(Xn()().mark(function n(t,a){var o,s,c;return Xn()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:s=t==null||(o=t.getReader)===null||o===void 0?void 0:o.call(t),s||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return d.next=4,s.read();case 4:if((c=d.sent).done){d.next=8;break}try{a(c.value)}catch(h){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",h)}d.next=2;break;case 8:case"end":return d.stop()}},n)})),gt.apply(this,arguments)}function kl(n){var t,a,o,s=!1;return function(f){t===void 0?(t=f,a=0,o=-1):t=Tl(t,f);for(var d=t.length,h=0;a<d;){s&&(t[a]===10&&(h=++a),s=!1);for(var j=-1;a<d&&j===-1;++a)switch(t[a]){case 58:o===-1&&(o=a-h);break;case 13:s=!0;case 10:j=a;break}if(j===-1)break;n(t.subarray(h,j),o),h=a,o=-1}h===d?t=void 0:h!==0&&(t=t.subarray(h),a-=h)}}function Dl(n,t,a){var o=Hr(),s=new TextDecoder;return function(f,d){if(f.length===0)a==null||a(o),o=Hr();else if(d>0){var h=s.decode(f.subarray(0,d)),j=d+(f[d+1]===32?2:1),x=s.decode(f.subarray(j));switch(h){case"data":o.data=o.data?"".concat(o.data,`
`).concat(x):x;break;case"event":o.event=x;break;case"id":n(o.id=x);break;case"retry":var y=parseInt(x,10);isNaN(y)||t(o.retry=y);break}}}}function Tl(n,t){var a=new Uint8Array(n.length+t.length);return a.set(n),a.set(t,n.length),a}function Hr(){return{data:"",event:"",id:"",retry:void 0}}var Zl=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],pt="text/event-stream",Ml=1e3,Gr="last-event-id";function Jr(n,t){return ht.apply(this,arguments)}function ht(){return ht=Ce()(Xn()().mark(function n(t,a){var o,s,c,f,d,h,j,x,y,I,B,D,K;return Xn()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return o=a.signal,s=a.headers,c=a.onopen,f=a.onmessage,d=a.onclose,h=a.onerror,j=a.fetch,x=a.autoRetryTime,y=a.timeout,I=a.debug,B=I===void 0?!1:I,D=qn()(a,Zl),K=0,M.abrupt("return",new Promise(function(T,_){var ln=N()({},s);ln.accept||(ln.accept=pt);var sn=Ml,nn=0,xn=0,Pn=new AbortController;function mn(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(B&&console.log("[sse] dispose"),window.clearTimeout(nn),window.clearTimeout(xn),!le){var dn,gn;(dn=Pn)===null||dn===void 0||(gn=dn.abort)===null||gn===void 0||gn.call(dn)}}function Sn(){window.clearTimeout(xn),y!==0&&(xn=window.setTimeout(function(){B&&console.log("[sse] timeout"),_(new Error("timeout")),h==null||h(new Error("timeout")),mn()},y||60*1e3))}o==null||o.addEventListener("abort",function(){mn(),T()});var Kn=j!=null?j:window.fetch,ee=c!=null?c:Il;function bn(){return Wn.apply(this,arguments)}function Wn(){return Wn=Ce()(Xn()().mark(function le(){var dn,gn,ae,oe;return Xn()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.prev=0,Sn(),V.next=4,Kn(t,N()(N()({},D),{},{headers:ln,signal:(dn=Pn)===null||dn===void 0?void 0:dn.signal}));case 4:return gn=V.sent,V.next=7,ee(gn);case 7:if(gn.body){V.next=11;break}return B&&console.log("[sse]no body, delay 100ms"),V.next=11,Wr(100);case 11:return B&&console.log("[sse]response.body",gn.body),V.next=14,Ll(gn.body,kl(Dl(function(rn){rn?ln[Gr]=rn:delete ln[Gr]},function(rn){sn=rn},function(rn){Sn(),f==null||f(rn)})));case 14:Pn=null,d==null||d(),mn(),T(),V.next=43;break;case 20:if(V.prev=20,V.t0=V.catch(0),V.t0&&console.error("[sse]err",V.t0),!(!(o!=null&&o.aborted)&&x&&K<x)){V.next=39;break}return V.prev=24,K+=1,oe=(ae=h==null?void 0:h(V.t0))!==null&&ae!==void 0?ae:sn,window.clearTimeout(nn),typeof oe=="number"&&(B&&console.log("[sse] retry "+K),nn=window.setTimeout(bn,oe)),V.abrupt("return",Promise.resolve());case 32:V.prev=32,V.t1=V.catch(24),B&&console.log("[sse] reject innerErr ",V.t1),mn(),_(V.t1);case 37:V.next=43;break;case 39:B&&console.log("[sse] reject finally"),mn(V.t0 instanceof Response||V.t0 instanceof DOMException&&V.t0.name==="AbortError"),h==null||h(V.t0),_(V.t0);case 43:case"end":return V.stop()}},le,null,[[0,20],[24,32]])})),Wn.apply(this,arguments)}bn()}));case 3:case"end":return M.stop()}},n)})),ht.apply(this,arguments)}function Il(n){var t=n.headers.get("content-type");if(!(t!=null&&t.startsWith(pt)))throw new Error("Expected content-type to be ".concat(pt,", Actual: ").concat(t))}function Ol(n){return Pt.apply(this,arguments)}function Pt(){return Pt=Ce()(Xn()().mark(function n(t){var a,o,s,c,f,d,h;return Xn()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return a=t.action,o=t.body,s=t.product,c=t.version,f=t.region,d=t.params,h={action:a,product:s,region:f,url:"/tool/sse/get.json",version:c},x.abrupt("return",vt(h,d,{content:JSON.stringify(o)}));case 3:case"end":return x.stop()}},n)})),Pt.apply(this,arguments)}function Al(n,t,a,o){var s=t.onMessage,c=t.onClose,f=t.onError,d=t.timeout,h=n.body,j=n.uri,x=n.headers,y=n.query,I=n.path,B=x["Content-Type"],D="".concat(j.replace(/\/$/,"")).concat(I);y&&Object.keys(y).length&&(D="".concat(D,"?").concat((0,Qr.stringify)(y)));try{o.value=!1,Jr(D,{method:"POST",body:B==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(h)):h,signal:a.signal,timeout:d,headers:x,onopen:function(en){return en.status!==200?Promise.reject(en):Promise.resolve()},onmessage:function(en){try{var M=en.data,T=M===void 0?"{}":M,_=JSON.parse(T);s==null||s(_)}catch(ln){f==null||f(ln)}},onclose:function(){o.value=!0,c==null||c()},onerror:function(en){o.value=!0,c==null||c(),!(en instanceof DOMException&&en.name==="AbortError")&&(f==null||f(en))}})}catch(K){o.value=!0,f==null||f(K),c==null||c()}}function wl(n,t,a){return yt.apply(this,arguments)}function yt(){return yt=Ce()(Xn()().mark(function n(t,a,o){var s,c,f,d;return Xn()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return s=t.onClose,c=t.onError,j.prev=1,j.next=4,Ol(t);case 4:f=j.sent,d=f.data,Al(d,t,a,o),j.next=13;break;case 9:j.prev=9,j.t0=j.catch(1),s==null||s(),c==null||c(j.t0);case 13:case"end":return j.stop()}},n,null,[[1,9]])})),yt.apply(this,arguments)}function Rl(n){return bt.apply(this,arguments)}function bt(){return bt=Ce()(Xn()().mark(function n(t){var a,o;return Xn()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return a=new AbortController,o={value:!0},c.next=4,wl(t,a,o);case 4:return c.abrupt("return",{dispose:function(){o.value&&a.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return c.stop()}},n)})),bt.apply(this,arguments)}var Xr=e(47453),zl=e(44959),Ul=["prefix","prefixCls","theme","iconFontUrl","children","className","style"],Yr=(0,Q.Z)(k),qr="https://at.alicdn.com/t/a/font_4647901_lhuy923i2.css",$l={button:{autoInsertSpace:!1},drawer:{closeIcon:(0,r.jsx)(Xr.Z,{})},modal:{closeIcon:(0,r.jsx)(Xr.Z,{})}};function Wl(){return yn(),null}function Vl(n){var t=n.prefix,a=t===void 0?"":t,o=n.prefixCls,s=o===void 0?"":o,c=n.theme,f=c===void 0?{}:c,d=n.iconFontUrl,h=d===void 0?qr:d,j=n.children,x=j===void 0?void 0:j,y=n.className,I=n.style,B=qn()(n,Ul),D=(0,zl.Z)(Yr.theme,f,{components:{Table:{cellPaddingInline:20}}}),K=(0,l.useState)(!1),en=Un()(K,2),M=en[0],T=en[1],_=(0,fn.getCommonConfig)(),ln=_.antPrefix,sn=s||ln||(a?"".concat(a,"-").concat(fn.DEFAULT_ANT_PREFIX):fn.DEFAULT_ANT_PREFIX);return(0,l.useLayoutEffect)(function(){h&&no(h);var nn={antPrefix:sn};a.length&&(nn=N()(N()({},nn),{},{blPrefix:"".concat(a,"-").concat(fn.DEFAULT_BL_PREFIX),prefix:a})),(0,fn.setCommonConfig)(nn),T(!0)},[]),(0,r.jsxs)(Ye.ZP,N()(N()(N()(N()({},$l),B),Yr),{},{prefixCls:sn,theme:D,className:y,style:I,children:[(0,r.jsx)(Wl,{}),M?x:null]}))}function Ql(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof n!="string")return a||console.warn(n,"is not valid json"),t?n:null;try{return JSON.parse(n)}catch(o){return a||console.warn(n,"is not valid json"),t?n:null}}function Kl(n){for(var t=new TextEncoder,a=t.encode(n),o="",s=0;s<a.length;s++)o+=String.fromCharCode(a[s]);var c=btoa(o);return c}function Hl(n){for(var t=atob(n),a=new Uint8Array(t.length),o=0;o<t.length;o++)a[o]=t.charCodeAt(o);var s=new TextDecoder("utf-8"),c=s.decode(a);return c}var _r=e(4767),na=(0,Q.Z)(k),ea=(0,Q.Z)(X,!0),Gl=(0,Q.Z)(A),Jl=(0,Q.Z)(Y,!0)}}]);
