"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[5996],{60218:function(Sn,Y,e){e.r(Y),e.d(Y,{useStyle:function(){return J}});var q=e(68400),E=e.n(q),_=e(3067),w,J=(0,_.Z)(w||(w=E()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix})},37339:function(Sn,Y,e){e.r(Y);var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(23048),a=e(33495),R=e(52565),z=e(96406),O=e(55595),$=e(86250),U=e(85576),L=e(93967),N=e.n(L),V=e(93865),l=e(60218),S=e(85893),h=["children","type","danger","title","width","className"],p=function(j){var I=function(Bn){var xn=Bn.type,pn=Bn.title,kn=(0,V.getCommonConfig)(),In=kn.antPrefix;switch(xn){case"success":return(0,S.jsxs)($.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(a.Z,{style:{color:"var(--".concat(In,"-color-success)"),fontSize:18,margin:"0 3px"}}),pn]});case"warning":case"confirm":return(0,S.jsxs)($.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(R.Z,{style:{color:"var(--".concat(In,"-color-warning)"),fontSize:18,margin:"0 3px"}}),pn]});case"info":return(0,S.jsxs)($.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(z.Z,{style:{color:"var(--".concat(In,"-color-info)"),fontSize:18,margin:"0 3px"}}),pn]});case"error":return(0,S.jsxs)($.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,S.jsx)(O.Z,{style:{color:"var(--".concat(In,"-color-error)"),fontSize:18,margin:"0 3px"}}),pn]});default:return J.Z.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},c=j.children,W=j.type,d=W===void 0?"info":W,K=j.danger,f=K===void 0?!1:K,an=j.title,D=j.width,b=D===void 0?400:D,X=j.className,un=X===void 0?"":X,jn=w()(j,h);return{width:b,transitionName:"",restProps:jn,closeIcon:null,title:I({type:d,title:an}),okButtonProps:{danger:d==="error"||d==="warning"||f},destroyOnClose:!0,className:N()(un,"animate-in","".concat((0,V.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:j.content||c,children:c}},m=function(j){var I=p(j),c=(0,l.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c,{}),(0,S.jsx)(U.Z,E()(E()({width:I.width,transitionName:""},I.restProps),{},{closeIcon:null,title:I.title,okButtonProps:I.okButtonProps||{},destroyOnClose:I.destroyOnClose,className:I.className,children:I.content||I.children}))]})},A=["success","info","warning","error","confirm"];A.forEach(function(x){m[x]=function(j){var I=p(E()(E()({},j),{},{type:x}));function c(){var W=(0,l.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(W,{}),I.content]})}return U.Z.confirm(E()(E()(E()({},I),I.restProps),{},{content:(0,S.jsx)(c,{}),icon:null}))}}),Y.default=m},15560:function(Sn,Y,e){e.d(Y,{Z:function(){return L}});var q=e(97857),E=e.n(q),_=e(36569),w=e(67294),J=e(68400),a=e.n(J),R=e(3067),z,O=(0,R.Z)(z||(z=a()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(N){return N.antPrefix},function(N){return N.antPrefix},function(N){return N.antPrefix},function(N){return N.antPrefix},function(N){return N.antPrefix},function(N){return N.antPrefix},function(N){return N.antPrefix}),$=e(85893),U=(0,w.forwardRef)(function(N,V){var l=O();return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(l,{}),(0,$.jsx)(_.Z,E()({},N))]})}),L=U},34952:function(Sn,Y,e){e.d(Y,{Z:function(){return h}});var q=e(97857),E=e.n(q),_=e(5574),w=e.n(_),J=e(13769),a=e.n(J),R=e(68997),z=e(67294),O=e(68400),$=e.n(O),U=e(3067),L,N=(0,U.Z)(L||(L=$()([`
.`,`-avatar {
  cursor: default;
}
`])),function(p){return p.antPrefix}),V=e(85893),l=["children"],S=(0,z.forwardRef)(function(p,m){var A=N(),x=p.children,j=a()(p,l),I=(0,z.useState)(p.children),c=w()(I,2),W=c[0],d=c[1];return(0,z.useEffect)(function(){if(typeof x=="string"){d(x.slice(0,1));return}d(x)},[x]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(A,{}),(0,V.jsx)(R.Z,E()(E()({ref:m},j),{},{children:W}))]})}),h=S},21004:function(Sn,Y,e){e.d(Y,{Z:function(){return m}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(9838),a=e(68997),R=e(85418),z=e(85673),O=e(67294),$=e(93865),U=e(68400),L=e.n(U),N=e(3067),V,l=(0,N.Z)(V||(V=L()([`
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
`])),function(A){return A.sparkPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.sparkPrefix},function(A){return A.antPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix}),S=e(85893),h=["items"],p=function(x){var j=x.items,I=j===void 0?[]:j,c=w()(x,h),W=(0,$.getCommonConfig)(),d=W.sparkPrefix,K=l(),f=O.useMemo(function(){return I.map(function(an){var D=an.title,b=[];return an.iconUrl&&b.push((0,S.jsx)(a.Z,{size:20,src:an.iconUrl},"avatar")),an.dropdown?b.push((0,S.jsxs)("span",{className:"".concat(d,"-breadcrumb-dropdown-title"),children:[an.title,(0,S.jsx)(J.Z,{size:16})]},"title")):b.push((0,S.jsx)("span",{children:an.title},"title")),an.dropdown?D=(0,S.jsx)(R.Z,{menu:{items:an.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(d,"-breadcrumb-dropdown"),children:(0,S.jsx)("span",{children:b})}):(an.iconUrl||b.length>1)&&(D=(0,S.jsx)("span",{className:"".concat(d,"-breadcrumb-item-content"),children:b})),E()(E()({},an),{},{title:D})})},[I]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(K,{}),(0,S.jsx)(z.Z,E()(E()({},c),{},{items:f,className:"".concat(d,"-breadcrumb ").concat(c.className||"")}))]})},m=p},48432:function(Sn,Y,e){e.d(Y,{Z:function(){return S}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(4393),R=e(93967),z=e.n(R),O=e(68400),$=e.n(O),U=e(3067),L,N=(0,U.Z)(L||(L=$()([`
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
`])),function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.sparkPrefix},function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.sparkPrefix},function(h){return h.antPrefix}),V=e(85893),l=["title","info","children","className"],S=function(h){var p=h.title,m=h.info,A=h.children,x=h.className,j=w()(h,l),I=N(),c=(0,J.getCommonConfig)(),W=c.sparkPrefix;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I,{}),(0,V.jsx)(a.Z,E()(E()({className:z()("".concat(W,"-card"),x)},j),{},{title:null,children:(0,V.jsxs)("div",{className:"".concat(W,"-card-wrapper"),children:[p&&(0,V.jsx)("div",{className:"".concat(W,"-title"),children:p}),m&&(0,V.jsx)("div",{className:"".concat(W,"-info"),children:m}),A&&(0,V.jsx)("div",{className:"".concat(W,"-content"),children:A})]})}))]})}},34304:function(Sn,Y,e){e.d(Y,{Z:function(){return S}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(84567),a=e(67294),R=e(93865),z=e(68400),O=e.n(z),$=e(3067),U,L=(0,$.Z)(U||(U=O()([`
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
`])),function(h){return h.sparkPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),N=e(85893),V=["description","descriptionClassName","descriptionStyle","children"],l=function(p){var m=p.description,A=p.descriptionClassName,x=p.descriptionStyle,j=p.children,I=w()(p,V),c=(0,R.getCommonConfig)(),W=c.antPrefix,d=c.sparkPrefix,K=L(),f={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(W,"-color-text-tertiary)")};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(K,{}),(0,N.jsxs)("div",{className:"".concat(d,"-checkbox"),children:[(0,N.jsx)(J.Z,E()(E()({},I),{},{children:j})),m&&(0,N.jsx)("div",{className:A,style:E()(E()({},f),x),children:m})]})]})};l.Group=J.Z.Group;var S=l},43158:function(Sn,Y,e){e.d(Y,{ZP:function(){return Bn},xO:function(){return X}});var q=e(97857),E=e.n(q),_=e(19632),w=e.n(_),J=e(93865),a=e(31639),R=e(48120),z=e(4997),O=e(82261),$=e(60310),U=e(122),L=e(9155),N=e(48825),V=e(12386),l=e(33236),S=e(62391),h=e(28519),p=e(17089),m=e(89580),A=e(55839),x=e(9361),j=e(93967),I=e.n(j),c=e(93361),W=e(67294),d=e(68400),K=e.n(d),f=e(3067),an,D=(0,f.Z)(an||(an=K()([`
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
`])),function(xn){return xn.sparkPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix},function(xn){return xn.antPrefix}),b=e(85893),X={javascript:[(0,U.eJ)()],jsx:[(0,U.eJ)()],python:[(0,l.Vs)()],json:[(0,L.AV)()],java:[(0,$.C)()],yaml:[(0,S.rV)()],php:[(0,V.h)()],go:[(0,z.go)()],csharp:[(0,a.N)()],css:[(0,R.iv)()],html:[(0,O.dy)()],curl:[],markdown:[(0,N.JH)()]},un={javascript:[(0,h.Q2)()],json:[(0,h.Q2)(),(0,h.ir)((0,L.ap)())]},jn=function(){var pn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",kn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,In=pn;try{In=JSON.stringify(JSON.parse(pn),null,kn)}catch(Un){}return In},Nn=function(pn){var kn,In=(0,J.getCommonConfig)(),Un=W.useContext(A.ZP.ConfigContext),Ln=((kn=Un.theme)===null||kn===void 0?void 0:kn.algorithm)===x.Z.darkAlgorithm,_n=In.sparkPrefix,Dn=In.antPrefix,bn=D(),yn=(0,W.useMemo)(function(){return pn.theme===void 0?Ln?p.Pc:p.Zp:pn.theme==="dark"?p.Pc:p.Zp},[Ln]),zn=typeof pn.language=="string"?[].concat(w()(X[pn.language]||[]),w()(pn.value&&pn.language in un?un[pn.language]:[])):pn.language.reduce(function(On,Jn){return[].concat(w()(On),[X[Jn]])},[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(bn,{}),(0,b.jsx)("div",{className:I()("".concat(_n,"-code-block"),pn.className),children:(0,b.jsx)(m.ZP,E()({extensions:zn,value:pn.language==="json"?jn(pn.value):pn.value,theme:yn},(0,c.Z)(pn,["language","theme","extensions","value"])))})]})},Bn=Nn},81843:function(Sn,Y,e){e.d(Y,{Z:function(){return U}});var q=e(97857),E=e.n(q),_=e(47221),w=e(68400),J=e.n(w),a=e(3067),R,z=(0,a.Z)(R||(R=J()([`
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
`])),function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix}),O=e(85893),$=function(N){var V=z();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(V,{}),(0,O.jsx)(_.Z,E()({},N))]})},U=$},71615:function(Sn,Y,e){e.d(Y,{Z:function(){return A}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(5574),a=e.n(J),R=e(93865),z=e(9838),O=e(28387),$=e(93967),U=e.n($),L=e(67294),N=e(68400),V=e.n(N),l=e(3067),S,h=(0,l.Z)(S||(S=V()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix}),p=e(85893),m=function(j){var I,c,W,d,K,f,an=j.collapsedHeight,D=j.expandedHeight,b=j.title,X=b===void 0?"":b,un=j.expandOnPanelClick,jn=j.extra,Nn=j.children,Bn=j.defaultExpanded,xn=(0,L.useState)(Bn),pn=a()(xn,2),kn=pn[0],In=pn[1],Un=(0,L.useState)(!0),Ln=a()(Un,2),_n=Ln[0],Dn=Ln[1],bn=(0,L.useState)(an),yn=a()(bn,2),zn=yn[0],On=yn[1],Jn=(0,L.useRef)(null),ie=(0,R.getCommonConfig)(),ne=ie.sparkPrefix,de=ie.antPrefix,oe=h();(0,L.useEffect)(function(){Jn.current&&On(kn&&D?D:kn?Jn.current.scrollHeight:an)},[kn,an,D,Nn]);var se=function(fe){fe.stopPropagation(),fe.preventDefault(),In(function(Ce){return!Ce})},ve=function(fe){fe.stopPropagation(),fe.preventDefault(),D&&(kn||In(!0))},ge=function(){Dn(!0)},he=function(){Dn(!0)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(oe,{}),(0,p.jsxs)("div",{className:U()("".concat(ne,"-collapse-panel"),{collapsible:!kn&&un},(I=j.classNames)===null||I===void 0?void 0:I.wrapper),style:(c=j.styles)===null||c===void 0?void 0:c.wrapper,onClick:un?ve:void 0,onMouseEnter:un?ge:void 0,onMouseLeave:un?he:void 0,children:[(0,p.jsxs)("div",{className:U()("".concat(ne,"-collapse-panel-header"),(W=j.classNames)===null||W===void 0?void 0:W.header),style:(d=j.styles)===null||d===void 0?void 0:d.header,onClick:se,children:[(0,p.jsxs)("span",{className:"".concat(ne,"-collapse-panel-title"),children:[X,D&&(0,p.jsxs)("div",{className:"".concat(ne,"-collapse-panel-icon-wrapper"),children:[!kn&&_n&&un&&(0,p.jsx)(z.Z,{style:{fontSize:"18px"}}),kn&&_n&&un&&(0,p.jsx)(O.Z,{style:{fontSize:"18px"}})]})]}),jn&&(0,p.jsx)("div",{className:"".concat(ne,"-collapse-panel-extra"),onClick:function(fe){fe.stopPropagation(),fe.preventDefault()},children:jn})]}),(0,p.jsxs)("div",{className:U()("".concat(ne,"-collapse-panel-content"),w()({},"".concat(ne,"-collapse-panel-expanded"),kn),(K=j.classNames)===null||K===void 0?void 0:K.content),style:E()({height:zn},(f=j.styles)===null||f===void 0?void 0:f.content),children:[(0,p.jsx)("div",{ref:Jn,className:"".concat("".concat(ne,"-collapse-panel-contentWrapper")," ",kn&&D?"scrollable":""),children:Nn}),!kn&&D&&(0,p.jsx)("div",{className:"".concat(ne,"-collapse-panel-mask")})]})]})]})},A=m},8732:function(Sn,Y,e){e.d(Y,{Z:function(){return I}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(95706),R=e(9361),z=e(55839),O=e(72912),$=e(93967),U=e.n($),L=e(67294),N=e(68400),V=e.n(N),l=e(3067),S,h=(0,l.Z)(S||(S=V()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),p=e(85893),m=["className","popupClassName"],A=["className","popupClassName"],x=function(W){var d=W.className,K=W.popupClassName,f=w()(W,m),an=R.Z.useToken(),D=an.token,b=(0,J.getCommonConfig)(),X=b.sparkPrefix,un=h();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(un,{}),(0,p.jsx)(z.ZP,{theme:{components:{DatePicker:{activeBorderColor:D.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(O.default,E()({suffixIcon:(0,p.jsx)(a.Z,{style:{fontSize:"20px"}}),className:U()("".concat(X,"-picker"),d),popupClassName:U()("".concat(X,"-picker-dropdown"),K)},f))})]})},j=function(W){var d=W.className,K=W.popupClassName,f=w()(W,A),an=R.Z.useToken(),D=an.token,b=(0,J.getCommonConfig)(),X=b.sparkPrefix,un=h();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(un,{}),(0,p.jsx)(z.ZP,{theme:{components:{DatePicker:{activeBorderColor:D.colorPrimary,paddingInline:8}}},children:(0,p.jsx)(O.default.RangePicker,E()({suffixIcon:(0,p.jsx)(a.Z,{style:{fontSize:"20px"}}),className:U()("".concat(X,"-picker"),d),popupClassName:U()("".concat(X,"-picker-dropdown"),K),popupStyle:{padding:0}},f))})]})};x.RangePicker=j;var I=x},69065:function(Sn,Y,e){e.d(Y,{Z:function(){return A}});var q=e(9783),E=e.n(q),_=e(97857),w=e.n(_),J=e(13769),a=e.n(J),R=e(93865),z=e(9361),O=e(26412),$=e(93967),U=e.n($),L=e(68400),N=e.n(L),V=e(3067),l,S=(0,V.Z)(l||(l=N()([`
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
`])),function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),h=e(85893),p=["className","layout","colon","style"],m=function(j){var I,c,W=S(),d=j.className,K=j.layout,f=j.colon,an=f===void 0?!1:f,D=j.style,b=a()(j,p),X=(0,R.getCommonConfig)(),un=X.antPrefix,jn=z.Z.useToken(),Nn=jn.token;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(W,{}),(0,h.jsx)(O.Z,w()({className:U()(d,K==="vertical"&&"".concat(un,"-descriptions-vertical")),layout:K,colon:an,style:w()(E()(E()({},"--".concat(un,"-descriptions-vertical-label-padding-bottom"),"".concat((I=Nn.Descriptions.verticalLabelPaddingBottom)!==null&&I!==void 0?I:4,"px")),"--".concat(un,"-descriptions-vertical-content-padding-bottom"),"".concat((c=Nn.Descriptions.verticalContentPaddingBottom)!==null&&c!==void 0?c:24,"px")),D)},b))]})},A=m},11765:function(Sn,Y,e){e.d(Y,{Z:function(){return W}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(13769),a=e.n(J),R=e(93865),z=e(89102),O=e(85265),$=e(93967),U=e.n($),L=e(57027),N=e(67294),V=e(68400),l=e.n(V),S=e(3067),h,p=(0,S.Z)(h||(h=l()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),m=e(85893),A=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],x=function(K){var f=K.onOk,an=K.onCancel,D=K.okText,b=D===void 0?"\u786E\u5B9A":D,X=K.okButtonProps,un=K.cancelText,jn=un===void 0?"\u53D6\u6D88":un,Nn=K.cancelButtonProps,Bn=K.info,xn=K.footer,pn=a()(K,A),kn=p(),In=(0,R.getCommonConfig)(),Un=In.antPrefix,Ln=function(Dn){if(an)an();else{var bn;(bn=pn.onClose)===null||bn===void 0||bn.call(pn,Dn)}};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(kn,{}),(0,m.jsx)(W,E()(E()({},pn),{},{footer:xn||(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"".concat(Un,"-drawer-footer-info"),children:Bn}),(0,m.jsxs)("div",{className:"".concat(Un,"-drawer-footer-buttons"),children:[(0,m.jsx)(L.Z,E()(E()({onClick:Ln},Nn),{},{children:jn})),(0,m.jsx)(L.Z,E()(E()({type:"primary",onClick:f},X),{},{children:b}))]})]})}))]})},j=x,I=["children","className","style","showDivider"],c=function(K){var f=K.children,an=K.className,D=K.style,b=K.showDivider,X=b===void 0?!0:b,un=a()(K,I),jn=p(),Nn=(0,R.getCommonConfig)(),Bn=Nn.sparkPrefix,xn=Nn.antPrefix;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(jn,{}),(0,m.jsx)(O.Z,E()(E()({closeIcon:(0,m.jsx)(z.Z,{size:24}),className:U()("".concat(Bn,"-drawer"),an,w()({},"".concat(xn,"-show-divider"),X)),style:E()({},D)},un),{},{children:f}))]})};Object.assign(c,{Confirm:j});var W=c},28299:function(Sn,Y,e){e.d(Y,{Z:function(){return V}});var q=e(97857),E=e.n(q),_=e(93865),w=e(97634),J=e(85418),a=e(67294),R=e(68400),z=e.n(R),O=e(3067),$,U=(0,O.Z)($||($=z()([`
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
`])),function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),L=e(85893),N=function(S){var h,p,m=(0,_.getCommonConfig)(),A=m.antPrefix,x=(0,a.useMemo)(function(){var I;if(!((I=S.menu)!==null&&I!==void 0&&I.selectable)||!S.menu){var c;return((c=S.menu)===null||c===void 0?void 0:c.items)||[]}return S.menu.items.map(function(W){var d={},K=W.label;return K&&(d.label=(0,L.jsxs)("div",{className:"".concat(A,"-dropdown-check-wrapper"),children:[K,(0,L.jsx)("span",{className:"".concat(A,"-dropdown-check-icon"),children:(0,L.jsx)(w.Z,{})})]})),E()(E()({},W),d)})},[(h=S.menu)===null||h===void 0?void 0:h.items,(p=S.menu)===null||p===void 0?void 0:p.selectable]),j=U();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(j,{}),(0,L.jsx)(J.Z,E()(E()({},S),{},{menu:E()(E()({},S.menu),{},{items:x}),overlayStyle:E()({},S.overlayStyle)}))]})},V=N},32151:function(Sn,Y,e){e.d(Y,{Z:function(){return W}});var q=e(52677),E=e.n(q),_=e(13769),w=e.n(_),J=e(97857),a=e.n(J),R=e(93865),z=e(96406),O=e(45387),$=e(78210),U=e(93967),L=e.n(U),N=e(67294),V=e(68400),l=e.n(V),S=e(3067),h,p=(0,S.Z)(h||(h=l()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),m=e(85893),A=["tooltip"],x=(0,N.forwardRef)(function(d,K){var f=d.labelMarginRight,an=f===void 0?void 0:f,D=(0,N.useRef)(null),b=(0,R.getCommonConfig)(),X=b.sparkPrefix,un=p();return(0,N.useImperativeHandle)(K,function(){return D.current}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(un,{}),(0,m.jsx)(O.Z,a()(a()({},d),{},{className:L()(d.className,"".concat(X,"-form"),an==="small"&&"".concat(X,"-form-label-margin-small")),ref:D,requiredMark:function(Nn,Bn){return(0,m.jsxs)(m.Fragment,{children:[Nn,Bn.required&&(0,m.jsx)("span",{className:"".concat(X,"-required-mark"),children:"*"})]})}}))]})}),j=function(K){var f=K.tooltip,an=w()(K,A),D=(0,m.jsx)(z.Z,{});function b(){if(f){var X=E()(f)==="object"&&!N.isValidElement(f)?a()(a()({},f),{},{icon:f.icon||D}):{title:f,icon:D};return X}}return(0,m.jsx)(O.Z.Item,a()(a()({},an),{},{tooltip:b(),labelCol:K.labelCol||(K.layout==="vertical"?{flex:"unset"}:void 0)}))},I=j;I.useStatus=$.Z.useStatus;var c=x;c.Item=I,c.List=O.Z.List,c.ErrorList=O.Z.ErrorList,c.Provider=O.Z.Provider,c.useForm=O.Z.useForm,c.useFormInstance=O.Z.useFormInstance,c.useWatch=O.Z.useWatch;var W=c},67985:function(Sn,Y,e){e.d(Y,{Z:function(){return p}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(38654),a=e(93865),R=e(57027),z=e(93967),O=e.n(z),$=e(67294),U=e(68400),L=e.n(U),N=e(3067),V,l=(0,N.Z)(V||(V=L()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),S=e(85893),h=["className","iconType","bordered"],p=function(m){var A=m.className,x=m.iconType,j=m.bordered,I=j===void 0?!0:j,c=w()(m,h),W=(0,a.getCommonConfig)(),d=W.iconfont,K=l(),f=(0,$.useMemo)(function(){return x?(0,S.jsx)(J.Z,{type:x,size:m.size}):typeof m.icon=="string"?(0,S.jsx)(J.Z,{type:m.icon,size:m.size}):m.icon},[m.icon,x,d]);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(K,{}),(0,S.jsx)(R.Z,E()(E()({className:O()(A,"".concat(W.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:I?"default":"text"},c),{},{icon:f}))]})}},15713:function(Sn,Y,e){e.d(Y,{Z:function(){return S}});var q=e(97857),E=e.n(q),_=e(23048),w=e(93865),J=e(43974),a=e(13811),R=e(67294),z=e(68400),O=e.n(z),$=e(3067),U,L=(0,$.Z)(U||(U=O()([`
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
`])),function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix},function(h){return h.antPrefix}),N=e(85893),V=function(p){var m=L(),A=(0,w.getCommonConfig)(),x=A.antPrefix,j=(0,R.useMemo)(function(){var I={transitionName:""},c=p.preview;return c===!1?!1:c===!0?I:E()(E()({mask:(0,N.jsxs)("div",{className:"".concat(x,"-image-mask-info"),children:[(0,N.jsx)(J.Z,{className:"".concat(x,"-image-mask-info-icon")}),(0,N.jsx)("span",{className:"".concat(x,"-image-mask-info-text"),children:_.Z.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},c),I)},[p.preview]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(m,{}),(0,N.jsx)(a.Z,E()({preview:j},p))]})},l=V;l.PreviewGroup=a.Z.PreviewGroup;var S=l},86995:function(Sn,Y,e){e.d(Y,{Z:function(){return x}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(13769),a=e.n(J),R=e(93865),z=e(48045),O=e(93967),$=e.n(O),U=e(67294),L=e(68400),N=e.n(L),V=e(3067),l,S=(0,V.Z)(l||(l=N()([`
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
`])),function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix},function(j){return j.antPrefix}),h=e(85893),p=["shape"],m=U.forwardRef(function(j,I){var c=j.shape,W=c===void 0?"default":c,d=a()(j,p),K=(0,R.getCommonConfig)(),f=K.antPrefix,an=S();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(an,{}),(0,h.jsx)(z.Z,E()(E()({},d),{},{className:$()(j.className,w()({},"".concat(f,"-input-round"),W==="round")),ref:I}))]})}),A=U.forwardRef(function(j,I){var c=(0,R.getCommonConfig)(),W=c.antPrefix,d=S();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{}),(0,h.jsx)(z.Z.TextArea,E()(E()({},j),{},{className:$()("".concat(W,"-text-area"),j.className),ref:I}))]})});Object.assign(m,{TextArea:A,Search:z.Z.Search,Password:z.Z.Password,OTP:z.Z.OTP});var x=m},76561:function(Sn,Y,e){e.d(Y,{Z:function(){return A}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(13769),a=e.n(J),R=e(93865),z=e(24772),O=e(85576),$=e(93967),U=e.n($),L=e(68400),N=e.n(L),V=e(3067),l,S=(0,V.Z)(l||(l=N()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),h=e(85893),p=["showDivider","closable"],m=function(j){var I=S(),c=(0,R.getCommonConfig)(),W=c.sparkPrefix,d=j.showDivider,K=d===void 0?!0:d,f=j.closable,an=f===void 0?!0:f,D=a()(j,p),b=function(Nn){return j.info?(0,h.jsxs)("div",{className:"".concat(W,"-modal-footer-wrapper"),children:[(0,h.jsx)("span",{className:"".concat(W,"-modal-footer-info"),children:j.info}),(0,h.jsx)("div",{className:"".concat(W,"-modal-footer-origin-node"),children:Nn})]}):Nn},X=an?j.closeIcon||(0,h.jsx)(z.Z,{className:"".concat(W,"-modal-title-close"),onClick:function(Nn){var Bn;(Bn=j.onCancel)===null||Bn===void 0||Bn.call(j,Nn)}}):null,un=j.footer===void 0?b:j.footer;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(I,{}),(0,h.jsx)(O.Z,E()(E()({},D),{},{closeIcon:null,title:(0,h.jsxs)("div",{className:"".concat(W,"-modal-title-wrapper"),children:[(0,h.jsx)("div",{className:"".concat(W,"-modal-title"),children:j.title}),X]}),wrapClassName:U()("".concat(W,"-modal"),w()({},"".concat(W,"-show-divider"),K),j.wrapClassName,"animate-in"),footer:un,transitionName:""}))]})};m.useModal=O.Z.useModal,m.success=O.Z.success,m.error=O.Z.error,m.warning=O.Z.warning,m.info=O.Z.info,m.confirm=O.Z.confirm,m.SMALL_WIDTH=640,m.MEDIUM_WIDTH=800,m.LARGE_WIDTH=960;var A=m},89887:function(Sn,Y,e){var q=e(5574),E=e.n(q),_=e(97857),w=e.n(_),J=e(93865),a=e(77900),R=e(29998),z=e(29368),O=e(61441),$=e(26855),U=e(85893),L=["success","warning","error","info"];function N(l,S){if(l==="success")return(0,U.jsx)(a.Z,{style:{color:"var(--".concat(S,"-color-success)"),fontSize:24}});if(l==="warning")return(0,U.jsx)(R.Z,{style:{color:"var(--".concat(S,"-color-warning)"),fontSize:24}});if(l==="info")return(0,U.jsx)(z.Z,{style:{color:"var(--".concat(S,"-color-info)"),fontSize:24}});if(l==="error")return(0,U.jsx)(O.Z,{style:{color:"var(--".concat(S,"-color-error)"),fontSize:24}})}var V={};V.destroy=$.ZP.destroy,V.open=function(l){var S=(0,J.getCommonConfig)(),h=S.sparkPrefix,p="".concat(h,"-notification");l.className&&(p+=" ".concat(l.className)),$.ZP.open(w()(w()({},l),{},{className:p}))},L.forEach(function(l){V[l]=function(S){var h=(0,J.getCommonConfig)(),p=h.sparkPrefix,m=h.antPrefix,A="".concat(p,"-notification");S.className&&(A+=" ".concat(S.className)),$.ZP[l](w()(w()({},S),{},{className:A,icon:N(l,m)}))}}),V.useNotification=function(l){var S=(0,J.getCommonConfig)(),h=S.sparkPrefix,p=S.antPrefix,m="".concat(h,"-notification"),A=$.ZP.useNotification(l),x=E()(A,2),j=x[0],I=x[1],c={};return L.forEach(function(W){c[W]=function(d){return j[W](w()(w()({},d),{},{className:m,icon:N(W,p)}))}}),c.open=function(W){$.ZP.open(w()(w()({},W),{},{className:m}))},c.destroy=j.destroy,[c,I]},Y.Z=V},94476:function(Sn,Y,e){e.d(Y,{Z:function(){return j}});var q=e(97857),E=e.n(q),_=e(52677),w=e.n(_),J=e(13769),a=e.n(J),R=e(93865),z=e(23048),O=e(54604),$=e(53033),U=e(52861),L=e(86250),N=e(72656),V=e(68400),l=e.n(V),S=e(3067),h,p=(0,S.Z)(h||(h=l()([`
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
`])),function(I){return I.sparkPrefix},function(I){return I.sparkPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix},function(I){return I.antPrefix}),m=e(85893),A=["hideSwitchButton"],x={options:[{label:"10 ".concat(z.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(z.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:10},{label:"20 ".concat(z.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(z.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:20},{label:"50 ".concat(z.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(z.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:50},{label:"100 ".concat(z.Z.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(z.Z.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:100}]},j=function(I){var c=I.hideSwitchButton,W=c===void 0?!1:c,d=a()(I,A),K=(0,R.getCommonConfig)(),f=K.sparkPrefix,an=p(),D=function(){var jn=function(Bn,xn,pn){return xn==="jump-prev"||xn==="jump-next"?(0,m.jsx)(O.Z,{className:"".concat(f,"-jump-next-icon")}):W||I.itemRender?pn:xn==="prev"?(0,m.jsx)("a",{children:(0,m.jsxs)(L.Z,{gap:8,children:[(0,m.jsx)($.Z,{})," ",(0,m.jsx)("span",{children:z.Z.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):xn==="next"?(0,m.jsx)("a",{children:(0,m.jsxs)(L.Z,{gap:8,children:[(0,m.jsx)("span",{children:z.Z.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,m.jsx)(U.Z,{})]})}):pn};return jn},b;d.showSizeChanger!==null&&d.showSizeChanger!==void 0?b=d.showSizeChanger:b=d.total&&d.total>50;var X=function(){return I.showSizeChanger===!0?x:I.showSizeChanger===!1?!1:w()(I.showSizeChanger)==="object"&&I.showSizeChanger?I.showSizeChanger:d.total&&d.total>50?x:!1};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(an,{}),(0,m.jsx)(N.Z,E()(E()({itemRender:D()},d),{},{showSizeChanger:X(),className:"".concat(f,"-pagination")}))]})}},81930:function(Sn,Y,e){var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(52565),R=e(96406),z=e(55595),O=e(33495),$=e(86738),U=e(67294),L=e(85893),N=["icon","type","okButtonProps"],V=U.forwardRef(function(l,S){var h=l.icon,p=l.type,m=p===void 0?"confirm":p,A=l.okButtonProps,x=w()(l,N),j=(0,J.getCommonConfig)(),I=j.antPrefix,c=function(){return h||(m==="confirm"?(0,L.jsx)(a.Z,{style:{color:"var(--".concat(I,"-color-warning)")}}):m==="info"?(0,L.jsx)(R.Z,{style:{color:"var(--".concat(I,"-color-info)")}}):m==="warning"?(0,L.jsx)(a.Z,{style:{color:"var(--".concat(I,"-color-warning)")}}):m==="error"?(0,L.jsx)(z.Z,{style:{color:"var(--".concat(I,"-color-error)")}}):m==="success"?(0,L.jsx)(O.Z,{style:{color:"var(--".concat(I,"-color-success)")}}):(0,L.jsx)(a.Z,{style:{color:"var(--".concat(I,"-color-warning)")}}))},W=function(){var K={};return["warning","error"].includes(m)&&(K.danger=!0),E()(E()({},K),A||{})};return(0,L.jsx)($.Z,E()(E()({},x),{},{ref:S,icon:c(),okButtonProps:W()}))});Y.Z=V},14392:function(Sn,Y,e){var q=e(97857),E=e.n(q),_=e(93865),w=e(35872),J=e(55241),a=e(67294),R=e(85893),z=a.forwardRef(function(O,$){var U=O.content===""||O.content===void 0||O.content===null,L=O.title===""||O.title===void 0||O.title===null,N=O.open!==void 0&&O.open!==null?O.open:U&&L?!1:void 0,V=(0,_.getCommonConfig)(),l=V.antPrefix;return(0,R.jsx)(J.Z,E()(E()({},O),{},{arrow:O.arrow||!1,open:N,ref:$,getPopupContainer:O.getPopupContainer||function(S){return(0,w.Q)(S,".".concat(l,"-app"))}}))});Y.Z=z},71493:function(Sn,Y,e){e.d(Y,{Z:function(){return _n}});var q=e(9783),E=e.n(q),_=e(19632),w=e.n(_),J=e(5574),a=e.n(J),R=e(68400),z=e.n(R),O=e(15664),$=e(48825),U=e(17089),L=e(89580),N=e(55839),V=e(9361),l=e(30122),S=e(93967),h=e.n(S),p=e(67294),m=e(12444),A=e.n(m),x=e(72004),j=e.n(x),I=e(31996),c=e.n(I),W=e(26037),d=e.n(W),K=e(75533),f=function(Dn){c()(yn,Dn);var bn=d()(yn);function yn(zn){var On;return A()(this,yn),On=bn.call(this),On.name=zn,On}return j()(yn,[{key:"eq",value:function(On){return On.name==this.name}},{key:"toDOM",value:function(){var On=document.createElement("span");return On.setAttribute("aria-hidden","true"),On.className="cm-prompt-var",On.textContent="${".concat(this.name,"}"),On}},{key:"ignoreEvent",value:function(){return!1}}]),yn}(K.l9),an=new K.Y1({regexp:/\$\{(\w+)\}/g,decoration:function(bn){return K.p.replace({widget:new f(bn[1])})}}),D=K.lg.fromClass(function(){function Dn(bn){A()(this,Dn),E()(this,"placeholders",void 0),this.placeholders=an.createDeco(bn)}return j()(Dn,[{key:"update",value:function(yn){this.placeholders=an.updateDeco(yn,this.placeholders)}}]),Dn}(),{decorations:function(bn){return bn.placeholders},provide:function(bn){return K.tk.atomicRanges.of(function(yn){var zn;return((zn=yn.plugin(bn))===null||zn===void 0?void 0:zn.placeholders)||K.p.none})}}),b=[D],X=e(97857),un=e.n(X),jn=e(34790);function Nn(){var Dn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],bn=arguments.length>1?arguments[1]:void 0,yn=bn.onCreate,zn=bn.createBtnText;return(0,jn.ys)({override:[function(On){var Jn=On.matchBefore(/\/(\w+)?/);return!Jn||Jn&&Jn.from==Jn.to&&!On.explicit?null:{from:Jn==null?void 0:Jn.from,options:(yn?[].concat(w()(Dn),[{label:"/NEW_VAR",boost:-99}]):Dn).map(function(ie){return un()(un()({},ie),{},{displayLabel:ie.label==="/NEW_VAR"?zn:ie.label.slice(1),apply:function(de,oe,se,ve){if(oe.label==="/NEW_VAR")return de.dispatch({changes:{from:se,to:ve,insert:""}}),yn==null?void 0:yn();var ge=oe.label.slice(1),he="${".concat(ge,"}");de.dispatch({changes:{from:se,to:ve,insert:he}})}})})}}]})}var Bn=e(85893),xn,pn,kn=(0,l.kc)(function(Dn){var bn=Dn.css,yn=Dn.token;return{onCreate:bn(xn||(xn=z()([`
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
  `])),yn.colorBorderSecondary,yn.colorBgContainer),cm:bn(pn||(pn=z()([`
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
  `])),yn.colorTextSecondary,yn.colorBlue,yn.colorPurple,yn.colorPurpleBg,yn.colorBgContainer,yn.colorText,yn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:yn.colorBgBase,border:"1px solid ".concat(yn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:yn.colorTextTertiary,backgroundColor:yn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),In={markdown:[(0,$.JH)()]},Un=[],Ln=function(bn){var yn=kn(),zn=yn.styles,On=bn.variables||Un,Jn=(0,p.useState)(!1),ie=a()(Jn,2),ne=ie[0],de=ie[1],oe=bn.onCreate,se=p.useContext(N.ZP.ConfigContext),ve=se.theme.algorithm===V.Z.darkAlgorithm,ge=bn.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",he=(0,p.useMemo)(function(){return ve?U.Pc:U.Zp},[ve]),ye=(0,p.useMemo)(function(){return[].concat(w()(In.markdown),w()(b),[Nn(w()(On).map(function(Ce){return{label:"/".concat(Ce.code),info:Ce.label}})||[],{onCreate:oe,createBtnText:ge})])},[On]);(0,p.useEffect)(function(){return de(!0),function(){de(!1)}},[]);var fe=p.useMemo(function(){return bn.tipsText===!1?(0,Bn.jsx)("div",{className:zn.tips}):bn.tipsText?bn.tipsText:(0,Bn.jsxs)("div",{className:zn.tips,children:['\u8F93\u5165"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,Bn.jsx)(O.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[bn.tipsText]);return ne?(0,Bn.jsxs)("div",{className:zn.root,children:[(0,Bn.jsx)(L.ZP,{className:h()(zn.cm,E()({},zn.onCreate,oe)),extensions:ye,value:bn.value,theme:he,lang:"markdown",onChange:bn.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},he),(0,Bn.jsxs)("div",{className:zn.footer,children:[fe,bn.maxLength?(0,Bn.jsxs)("div",{children:[bn.value.length,"/",bn.maxLength]}):null]})]}):null},_n=(0,p.memo)(Ln)},25845:function(Sn,Y,e){e.r(Y),e.d(Y,{useStyle:function(){return J}});var q=e(68400),E=e.n(q),_=e(3067),w,J=(0,_.Z)(w||(w=E()([`
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
`])),function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix})},5626:function(Sn,Y,e){e.r(Y);var q=e(97857),E=e.n(q),_=e(93865),w=e(55742),J=e(93967),a=e.n(J),R=e(25845),z=e(85893);Y.default=function(O){var $=(0,_.getCommonConfig)(),U=$.sparkPrefix,L=$.antPrefix,N=O.gap,V=N===void 0?12:N,l=O.bordered,S=l===void 0?!1:l,h=O.ghost,p=h===void 0?!0:h,m=(0,R.useStyle)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(m,{}),(0,z.jsx)(w.ZP.Group,E()(E()({},O),{},{className:a()(O.className,O.bordered?"".concat(U,"-radio-group-bordered"):"",p?"".concat(L,"-radio-group-ghost"):""),optionType:"button"}))]})}},65163:function(Sn,Y,e){var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(21860),a=e(85893),R=["texture"];Y.Z=function(z){var O=z.texture,$=O===void 0?!1:O,U=w()(z,R);return(0,a.jsx)(J.Z,E()(E()({},U),{},{texture:$}))}},13191:function(Sn,Y,e){e.d(Y,{J:function(){return I},Z:function(){return W}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(93865),a=e(86125),R=e(93967),z=e.n(R),O=e(67294),$=e(68400),U=e.n($),L=e(3067),N,V=(0,L.Z)(N||(N=U()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix}),l=e(13769),S=e.n(l),h=e(13457),p,m=(0,L.Z)(p||(p=U()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),A=e(85893),x=["styles","classNames","sliderProps","inputNumberProps"];function j(d){var K,f,an=(0,J.getCommonConfig)(),D=an.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",D);var b=d.styles,X=d.classNames,un=d.sliderProps,jn=d.inputNumberProps,Nn=S()(d,x),Bn=m(),xn=d.marks||((K=d.sliderProps)===null||K===void 0?void 0:K.marks)||null,pn=xn||w()(w()({},d.min,d.min),d.max,d.max),kn=xn&&((f=Object.keys(xn))===null||f===void 0?void 0:f.length)>0,In=function(Ln){var _n=typeof Ln=="string"?parseFloat(Ln):Ln;if(_n===null||isNaN(_n)){d.onChange(null);return}_n<d.min?d.onChange(d.min):_n>d.max?d.onChange(d.max):d.onChange(_n)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Bn,{}),(0,A.jsxs)("div",{style:b==null?void 0:b.wrapper,className:z()("".concat(D,"-slider-input"),w()({},"".concat(D,"-slider-input-has-marks"),kn),X==null?void 0:X.wrapper),onMouseUp:function(){var Ln;(Ln=d.onBlur)===null||Ln===void 0||Ln.call(d)},children:[(0,A.jsx)(I,E()(E()(E()({disabled:d.disabled,min:d.min,max:d.max,step:d.step,tooltip:{getPopupContainer:function(Ln){return Ln}}},Nn),un),{},{marks:pn,style:E()(E()(E()({},b==null?void 0:b.slider),un==null?void 0:un.style),{},{width:"100%"}),className:z()(X==null?void 0:X.slider,un==null?void 0:un.className),onChange:In,value:d.value===null?void 0:d.value})),(0,A.jsx)(h.Z,E()(E()({controls:!1,step:d.step,min:d.min,max:d.max,disabled:d.disabled},jn),{},{onBlur:function(){var Ln;(Ln=d.onBlur)===null||Ln===void 0||Ln.call(d)},value:d.value,onChange:In,style:E()(E()({},b==null?void 0:b.inputNumber),jn==null?void 0:jn.style),className:z()(X==null?void 0:X.inputNumber,jn==null?void 0:jn.className)}))]})]})}var I=O.forwardRef(function(d,K){var f=(0,J.getCommonConfig)(),an=f.sparkPrefix,D=V();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(D,{}),(0,A.jsx)(a.Z,E()(E()({},d),{},{className:z()("".concat(an,"-slider"),w()({},"".concat(an,"-slider-no-marks"),!Object.keys(d.marks||{}).length),d.className),ref:K}))]})}),c=I;Object.assign(c,{Input:j});var W=c},88886:function(Sn,Y,e){e.d(Y,{Z:function(){return V}});var q=e(9783),E=e.n(q),_=e(93865),w=e(9361),J=e(38703),a=e(93967),R=e.n(a),z=e(68400),O=e.n(z),$=e(3067),U,L=(0,$.Z)(U||(U=O()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix}),N=e(85893),V=function(l){var S=l.indicator,h=l.spinning,p=h===void 0?!0:h,m=l.children,A=l.style,x=l.className,j=(0,_.getCommonConfig)(),I=j.sparkPrefix,c=w.Z.useToken(),W=L(),d=(0,N.jsxs)("svg",{className:"".concat(I,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,N.jsx)("defs",{children:(0,N.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,N.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,N.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,N.jsx)("g",{children:(0,N.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:c.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,N.jsx)("g",{children:(0,N.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:c.token.colorPrimary,fillOpacity:"1"})})]})]}),K=l.tip||l.showProgress&&(0,N.jsxs)("div",{children:[(0,N.jsxs)("span",{children:["loading",l.percent!==void 0&&l.percent!==null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:l.percent}),"%"]})]}),(0,N.jsx)(J.Z,{percent:l.percent,showInfo:!1})]})||null;return m?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(W,{}),(0,N.jsxs)("div",{className:R()("".concat(I,"-spinner-overlay"),x),style:A,children:[(0,N.jsx)("div",{className:R()("".concat(I,"-spinner-content"),E()({},"".concat(I,"-spinning"),p)),children:m}),p&&(0,N.jsxs)("div",{className:"".concat(I,"-spinner"),children:[(0,N.jsx)("div",{className:"".concat(I,"-indicator"),children:S||d}),(0,N.jsx)("div",{className:"".concat(I,"-title"),children:K})]})]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(W,{}),(0,N.jsx)("div",{className:R()("".concat(I,"-spinner"),x),style:A,children:p&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"".concat(I,"-indicator"),children:S||d}),(0,N.jsx)("div",{className:"".concat(I,"-title"),children:K})]})})]})}},95542:function(Sn,Y,e){e.d(Y,{Z:function(){return U}});var q=e(97857),E=e.n(q),_=e(55054),w=e(68400),J=e.n(w),a=e(3067),R,z=(0,a.Z)(R||(R=J()([`
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
`])),function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix},function(L){return L.antPrefix}),O=e(85893),$=function(N){var V=z();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(V,{}),(0,O.jsx)(_.Z,E()({},N))]})},U=$},89806:function(Sn,Y,e){e.d(Y,{Z:function(){return V}});var q=e(97857),E=e.n(q),_=e(93865),w=e(97634),J=e(42119),a=e(67294),R=e(68400),z=e.n(R),O=e(3067),$,U=(0,O.Z)($||($=z()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix}),L=e(85893),N=function(S){var h=(0,_.getCommonConfig)(),p=h.sparkPrefix,m=U(),A=(0,a.useMemo)(function(){if(S.items)return S.items.map(function(x,j){var I=x.status;return!I&&S.current!==void 0&&(j<S.current?I="finish":j===S.current?I="process":I="wait"),I==="finish"?E()(E()({},x),{},{icon:(0,L.jsx)(w.Z,{className:"".concat(p,"-finish-icon")})}):x})},[S.items,S.current]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(m,{}),(0,L.jsx)(J.Z,E()(E()({},S),{},{items:A,className:"".concat(p,"-steps")}))]})},V=N},59113:function(Sn,Y,e){e.d(Y,{Z:function(){return l}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(86250),a=e(72269),R=e(93865),z=e(68400),O=e.n(z),$=e(3067),U,L=(0,$.Z)(U||(U=O()([`
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
`])),function(S){return S.sparkPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.antPrefix},function(S){return S.sparkPrefix}),N=e(85893),V=["label","className"],l=function(S){var h=L(),p=S.label,m=S.className,A=w()(S,V),x=(0,R.getCommonConfig)(),j=x.sparkPrefix;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{}),(0,N.jsxs)(J.Z,{align:"center",gap:8,className:m,children:[(0,N.jsx)(a.Z,E()(E()({},A),{},{className:"".concat(j,"-switch")})),p&&(0,N.jsx)("span",{className:"".concat(j,"-switch-label"),children:p})]})]})}},80731:function(Sn,Y,e){e.d(Y,{Z:function(){return h}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(52253),R=e(70661),z=e(93967),O=e.n(z),$=e(68400),U=e.n($),L=e(3067),N,V=(0,L.Z)(N||(N=U()([`
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
`])),function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix}),l=e(85893),S=["columns"];function h(p){var m,A=(0,J.getCommonConfig)(),x=A.sparkPrefix,j=p.columns,I=w()(p,S);j=(m=j)===null||m===void 0?void 0:m.map(function(W){return E()(E()({},W),{},{sortIcon:W.sortIcon||function(){return(0,l.jsx)(a.Z,{style:{fontSize:16,marginLeft:8}})}})});var c=V();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(R.Z,E()({className:O()("".concat(x,"-table")),columns:j},I))]})}},91268:function(Sn,Y,e){e.d(Y,{Z:function(){return I}});var q=e(97857),E=e.n(q),_=e(9783),w=e.n(_),J=e(5574),a=e.n(J),R=e(13769),z=e.n(R),O=e(93865),$=e(27848),U=e(44254),L=e(92783),N=e(93967),V=e.n(N),l=e(68400),S=e.n(l),h=e(3067),p,m=(0,h.Z)(p||(p=S()([`
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
`])),function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix}),A=e(85893),x=["type","centered"],j=function(W){var d=W.type,K=W.centered,f=z()(W,x),an=(0,O.getCommonConfig)(),D=an.sparkPrefix,b=(0,$.Z)(function(){var Bn;return(Bn=f.items[0])===null||Bn===void 0?void 0:Bn.key},{value:f.activeKey,defaultValue:f.defaultActiveKey}),X=a()(b,2),un=X[0],jn=X[1],Nn=m();return d==="segmented"?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Nn,{}),(0,A.jsx)(U.Z,E()(E()({animated:!1},f),{},{activeKey:un,renderTabBar:function(xn){var pn,kn=((pn=W.items)===null||pn===void 0?void 0:pn.map(function(In){return{label:In.label,value:In.key,disabled:In.disabled}}))||[];return(0,A.jsx)(L.Z,{options:kn,onChange:function(Un){var Ln;jn(Un),(Ln=W.onChange)===null||Ln===void 0||Ln.call(W,Un)},className:V()("".concat(D,"-segmented-tab-bar"),w()({},"".concat(D,"-segmented-tab-bar-centered"),K)),value:xn.activeKey,size:W.size})}}))]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Nn,{}),(0,A.jsx)(U.Z,E()(E()({},W),{},{type:d}))]})};j.TabPane=U.Z.TabPane;var I=j},20010:function(Sn,Y,e){e.d(Y,{Z:function(){return p}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(66309),R=e(93967),z=e.n(R),O=e(67294),$=e(68400),U=e.n($),L=e(3067),N,V=(0,L.Z)(N||(N=U()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix}),l=e(85893),S=["children","className","bordered","color","size"],h=(0,O.forwardRef)(function(m,A){var x=m.children,j=m.className,I=m.bordered,c=I===void 0?!1:I,W=m.color,d=W===void 0?"mauve":W,K=m.size,f=K===void 0?"middle":K,an=w()(m,S),D=V(),b=(0,J.getCommonConfig)(),X=b.sparkPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{}),(0,l.jsx)(a.Z,E()(E()({className:z()("".concat(X,"-tag ").concat(X,"-tag-").concat(d," ").concat(X,"-tag-").concat(f),j),bordered:c},an),{},{ref:A,children:x}))]})}),p=h},69298:function(Sn,Y,e){e.d(Y,{Z:function(){return I}});var q=e(97857),E=e.n(q),_=e(13769),w=e.n(_),J=e(93865),a=e(78874),R=e(9361),z=e(55839),O=e(68351),$=e(93967),U=e.n($),L=e(67294),N=e(68400),V=e.n(N),l=e(3067),S,h=(0,l.Z)(S||(S=V()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),p=e(85893),m=["className","popupClassName"],A=["className","popupClassName"],x=function(W){var d=W.className,K=W.popupClassName,f=w()(W,m),an=R.Z.useToken(),D=an.token,b=(0,J.getCommonConfig)(),X=b.sparkPrefix,un=h();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(un,{}),(0,p.jsx)(z.ZP,{theme:{components:{DatePicker:{activeBorderColor:D.colorPrimary}}},children:(0,p.jsx)(O.Z,E()({suffixIcon:(0,p.jsx)(a.Z,{}),className:U()("".concat(X,"-picker"),d),popupClassName:U()("".concat(X,"-picker-dropdown"),K)},f))})]})},j=function(W){var d=W.className,K=W.popupClassName,f=w()(W,A),an=R.Z.useToken(),D=an.token,b=(0,J.getCommonConfig)(),X=b.sparkPrefix,un=h();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(un,{}),(0,p.jsx)(z.ZP,{theme:{components:{DatePicker:{activeBorderColor:D.colorPrimary}}},children:(0,p.jsx)(O.Z.RangePicker,E()({suffixIcon:(0,p.jsx)(a.Z,{}),className:U()("".concat(X,"-picker"),d),popupClassName:U()("".concat(X,"-picker-dropdown"),K),popupStyle:{padding:0}},f))})]})};x.RangePicker=j;var I=x},21618:function(Sn,Y,e){e.d(Y,{Z:function(){return D}});var q=e(97857),E=e.n(q),_=e(5574),w=e.n(_),J=e(13769),a=e.n(J),R=e(67294),z=e(93967),O=e.n(z),$=e(67985),U=e(38703),L=e(63701),N=e(62321),V=e(20399),l=e(80162),S=e(32485),h=e(93865),p=e(85893),m=function(X){var un=Math.floor(X/60),jn=Math.floor(X%60);return"".concat(un.toString().padStart(2,"0"),":").concat(jn.toString().padStart(2,"0"))},A=function(X){var un=X.className,jn=X.isPlaying,Nn=X.onPlayPause,Bn=X.onFullscreen,xn=X.onProgressClick,pn=X.enableAudio,kn=pn===void 0?!1:pn,In=X.muted,Un=In===void 0?!0:In,Ln=X.onMute,_n=(0,h.getCommonConfig)(),Dn=_n.sparkPrefix,bn=(0,R.useMemo)(function(){return m(X.currentTime||0)},[X.currentTime]),yn=(0,R.useMemo)(function(){return m(X.duration||0)},[X.duration]),zn=(0,R.useMemo)(function(){return Math.min((X.currentTime||0)/(X.duration||.01)*100,100)},[X.currentTime,X.duration]),On=function(ie){if(!(!xn||!X.duration)){var ne=ie.currentTarget.getBoundingClientRect(),de=ie.clientX-ne.left,oe=ne.width,se=de/oe,ve=se*X.duration,ge=Math.max(0,Math.min(ve,X.duration));xn(ge)}};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"".concat(Dn,"-video-player-controller ").concat(un||""),children:[(0,p.jsx)($.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:jn?(0,p.jsx)(L.Z,{}):(0,p.jsx)(N.Z,{}),onClick:Nn}),(0,p.jsx)($.Z,{bordered:!1,size:"small",shape:"default",disabled:!kn,icon:kn&&Un?(0,p.jsx)(V.Z,{}):(0,p.jsx)(l.Z,{}),onClick:Ln}),(0,p.jsx)("span",{className:"".concat(Dn,"-video-time-text"),children:bn}),(0,p.jsx)("div",{className:"".concat(Dn,"-video-progress-container"),onClick:On,children:(0,p.jsx)(U.Z,{className:"".concat(Dn,"-video-progress-bar"),percent:zn,showInfo:!1})}),(0,p.jsx)("span",{className:"".concat(Dn,"-video-time-text"),children:yn}),(0,p.jsx)($.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,p.jsx)(S.Z,{}),onClick:Bn})]})})},x=A,j=e(76526),I=e(68400),c=e.n(I),W=e(3067),d,K=(0,W.Z)(d||(d=c()([`
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
`])),function(b){return b.sparkPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.sparkPrefix},function(b){return b.sparkPrefix},function(b){return b.sparkPrefix},function(b){return b.sparkPrefix},function(b){return b.sparkPrefix},function(b){return b.antPrefix},function(b){return b.sparkPrefix},function(b){return b.sparkPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix},function(b){return b.antPrefix}),f=["controls","mouseEnterAutoPlay","children","className","style"],an=(0,R.forwardRef)(function(b,X){var un=b.controls,jn=b.mouseEnterAutoPlay,Nn=jn===void 0?!1:jn,Bn=b.children,xn=b.className,pn=b.style,kn=a()(b,f),In=(0,h.getCommonConfig)(),Un=In.sparkPrefix,Ln=K(),_n=(0,R.useState)(0),Dn=w()(_n,2),bn=Dn[0],yn=Dn[1],zn=(0,R.useState)(0),On=w()(zn,2),Jn=On[0],ie=On[1],ne=(0,R.useState)(!1),de=w()(ne,2),oe=de[0],se=de[1],ve=(0,j.Z)(b,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),ge=w()(ve,2),he=ge[0],ye=ge[1],fe=(0,R.useState)(!1),Ce=w()(fe,2),ot=Ce[0],Ie=Ce[1],Hn=(0,R.useRef)(null),De=(0,R.useRef)(!1),Nt=function(Pe){Hn.current=Pe,X&&(typeof X=="function"?X(Pe):X.current=Pe)};(0,R.useEffect)(function(){var le;return oe&&(le=setInterval(function(){Hn.current&&yn(Hn.current.currentTime)},16)),function(){le&&clearInterval(le)}},[oe]);var at=function(){return window.videoRef=Hn.current,Hn.current?"mozHasAudio"in Hn.current?(Ie(Hn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in Hn.current?(Ie(Hn.current.webkitAudioDecodedByteCount>0),!0):(Ie(!1),!1):!1},He=function(){Hn.current&&ie(Hn.current.duration)},Ve=function(){Hn.current&&(oe?Hn.current.pause():Hn.current.play(),se(!oe))},it=function(){se(!0)},lt=function(){se(!1)},Ae=function(){Hn.current&&Hn.current.requestFullscreen&&Hn.current.requestFullscreen()},Ke=function(){var Pe;se(!1),yn((Pe=Hn.current)===null||Pe===void 0?void 0:Pe.duration)},we=function(){Nn&&!De.current&&(oe||(Hn.current.play(),De.current=!0))},Re=function(){Nn&&De.current&&(De.current=!1)},ze=function(Pe){Hn.current&&(Hn.current.currentTime=Pe,yn(Pe))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Ln,{}),(0,p.jsx)("div",{className:O()("".concat(Un,"-video-container"),xn),style:pn,children:(0,p.jsxs)("div",{className:"".concat(Un,"-video-content"),onMouseEnter:we,onMouseLeave:Re,children:[(0,p.jsx)("video",E()(E()({ref:Nt},kn),{},{muted:he,className:"".concat(Un,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:He,onCanPlayThrough:at,onPlay:it,onPause:lt,onEnded:Ke})),un&&(0,p.jsx)(x,{className:"".concat(Un,"-video-controller-wrapper"),isPlaying:oe,currentTime:bn,duration:Jn,enableAudio:ot,muted:he,onMute:function(){return ye(!he)},onPlayPause:Ve,onFullscreen:Ae,onProgressClick:ze}),Bn]})})]})}),D=an},51850:function(Sn,Y,e){e.d(Y,{Z:function(){return J}});var q=e(97857),E=e.n(q),_=e(67294),w=new Map;function J(a){var R=a.globalStyle,z=a.name;(0,_.useLayoutEffect)(function(){var O=w.get(R)||0;if(O)w.set(R,E()(E()({},O),{},{count:O.count+1}));else{var $=document.createElement("style"),U=Math.random().toString(36).slice(2);$.innerHTML=R,$.dataset.id=U,$.dataset.flag="bailian-ui-use-style",z&&$.setAttribute("name",z),document.head.appendChild($),w.set(R,{count:1,id:U})}return function(){var L=w.get(R);w.set(R,E()(E()({},L),{},{count:L.count-1})),setTimeout(function(){var N=w.get(R);if((N==null?void 0:N.count)<=0){var V;w.delete(R),(V=document.head.querySelector('[data-id="'+N.id+'"]'))===null||V===void 0||V.remove()}},100)}},[R])}},23048:function(Sn,Y,e){e.d(Y,{Z:function(){return l}});var q=e(52677),E=e.n(q),_=e(27484),w=e.n(_),J=e(97857),a=e.n(J),R=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"Prompt","components.commonComponents.Pagination.PreviousPage":"Previous Page","components.commonComponents.Pagination.Items":"Items","components.commonComponents.Pagination.Page":"Page","components.commonComponents.Pagination.NextPage":"Next page","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"The number of words cannot exceed {wordLimit}.","components.commonComponents.SlateEditor.EnterHere":"Enter here","components.SlateEditor.utils.constant.Paragraph":"Paragraph","components.SlateEditor.utils.constant.Variable":"Variable","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"The selection range is incorrect.","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"[{wrapTagName}] cannot be placed in [{tagName}]","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"[{wrapTagName}] cannot be nested in [{tagName}]]","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"You can enter a maximum of {maxLen} characters.","components.commonComponents.Image.Preview":"Preview"}'),z=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"\u63D0\u793A","components.commonComponents.Pagination.PreviousPage":"\u4E0A\u4E00\u9875","components.commonComponents.Pagination.Items":"\u6761","components.commonComponents.Pagination.Page":"\u9875","components.commonComponents.Pagination.NextPage":"\u4E0B\u4E00\u9875","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57","components.commonComponents.SlateEditor.EnterHere":"\u5728\u8FD9\u91CC\u8F93\u5165","components.SlateEditor.utils.constant.Paragraph":"\u6BB5\u843D","components.SlateEditor.utils.constant.Variable":"\u53D8\u91CF","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"\u5212\u9009\u8303\u56F4\u6709\u8BEF","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57","components.commonComponents.Image.Preview":"\u9884\u89C8"}'),O={"en-US":a()({},R),"zh-CN":a()({},z)},$="zh-cn",U;function L(S){$=S,w().locale($||"zh-cn")}var N=function(h,p){var m=$==="zh-cn"?"zh-CN":"en-US",A=O[m][h.id]||h.defaultString||"",x=A.replace(/\{(\w+)\}/g,function(j,I){return p[I]||j});return x};function V(S,h){return U||L($),typeof S=="string"?N({id:S},h):(E()(S)==="object"&&S.dm&&(S.defaultMessage=S.dm),N({id:S.id,defaultString:S.dm},h))}var l={intl:U,get:V,updateLocale:L,language:$}},25996:function(Sn,Y,e){e.r(Y),e.d(Y,{Alert:function(){return Ve.Z},AlertDialog:function(){return le.default},Anchor:function(){return Pe.Z},Avatar:function(){return Io.Z},BLActionsColumn:function(){return Fl},BLAlert:function(){return Aa},BLAppLayout:function(){return qr},BLAppLayoutWithBack:function(){return Il},BLBackIcon:function(){return Yt},BLBackTitle:function(){return Qa},BLButton:function(){return Be},BLCardSelector:function(){return Ja},BLConfigProvider:function(){return qc},BLDatasetCascader:function(){return vc},BLDrawer:function(){return qa},BLDropMenu:function(){return ti},BLDropdown:function(){return Qe.Z},BLEllipsisTip:function(){return gt},BLErrorMessage:function(){return nc.Z},BLFeeds:function(){return Ml},BLFilesInput:function(){return ho},BLForm:function(){return fi},BLHelpIcon:function(){return fl},BLIconFont:function(){return En},BLIdIcon:function(){return xl},BLImgloader:function(){return zl},BLIntroHeaderCard:function(){return ao},BLLoadingIcon:function(){return kr},BLModal:function(){return lr},BLModelPriceComp:function(){return lo},BLPaginitionSelect:function(){return hc},BLPopconfirm:function(){return pi},BLPopover:function(){return nt},BLSLRModal:function(){return sc},BLSearch:function(){return Ui},BLSelect:function(){return Zr},BLSliderSelector:function(){return gl},BLTable:function(){return rl},BLTag:function(){return Cl},BLTagPreset:function(){return Wn},BLTooltip:function(){return al},BLUpload:function(){return ul},BLVideoPlayer:function(){return _l},Badge:function(){return it.Z},Breadcrumb:function(){return Do.Z},Button:function(){return Tt.Z},Card:function(){return Zo.Z},Checkbox:function(){return Mo.Z},CodeBlock:function(){return Lt.ZP},CodeBlockLangExtensionsMap:function(){return Lt.xO},Collapse:function(){return Oo.Z},CollapsePanel:function(){return Ao.Z},ConfigProvider:function(){return tt},DEFAULT_ICON_FONT_URL:function(){return No},DatasetGroupPublishStatus:function(){return go},DatasetGroupType:function(){return xc},DatePicker:function(){return wo.Z},Descriptions:function(){return Sa.Z},Drawer:function(){return kt.Z},Dropdown:function(){return Qe.Z},EllipsisTip:function(){return Wo},Empty:function(){return $o.Z},FileCard:function(){return To.s},FileIcon:function(){return To.Z},FilesInput:function(){return ho},FloatButton:function(){return lt.Z},Form:function(){return Uo.Z},HelpIcon:function(){return Qo},IconButton:function(){return Dt.Z},IconFont:function(){return Go.Z},Image:function(){return Jo.Z},Input:function(){return Mt.Z},InputNumber:function(){return Ae.Z},IntroHeaderCard:function(){return ao},MdEditor:function(){return At.Z},Modal:function(){return Je.Z},ModelPriceComp:function(){return lo},Pagination:function(){return Yo.Z},Popconfirm:function(){return qo.Z},Popover:function(){return Ot.Z},Progress:function(){return Ke.Z},PromptsEditor:function(){return At.Z},Radio:function(){return we.ZP},RadioButton:function(){return _o.default},Result:function(){return na.Z},Select:function(){return Re.default},Skeleton:function(){return ze.Z},SlateEditor:function(){return ba},Slider:function(){return xt.Z},SliderSelector:function(){return Ea},Spinner:function(){return Ca.Z},Statistic:function(){return Fa.Z},Steps:function(){return ea.Z},Switch:function(){return Na.Z},Table:function(){return Ta.Z},Tabs:function(){return Ht.Z},Tag:function(){return La.Z},TimePicker:function(){return ka.Z},Tooltip:function(){return Ge.Z},Upload:function(){return Ia.Z},Video:function(){return Da.Z},bailianDarkTheme:function(){return ko},bailianTheme:function(){return Lo},base64Decoder:function(){return es},base64Encoder:function(){return ns},carbonDarkTheme:function(){return rs},carbonTheme:function(){return ts},copy:function(){return Se.JG},delay:function(){return Po},fetcherIo:function(){return fo.v},fetcherPop:function(){return Ec},generateThemeByToken:function(){return K},getCommodityCodes:function(){return rt},getCommonConfig:function(){return fn.getCommonConfig},getRegionName:function(){return Oc},message:function(){return We.Z},notification:function(){return Xo.Z},parseJsonSafely:function(){return _c},purpleDarkTheme:function(){return ko},purpleTheme:function(){return Lo},renderTooltip:function(){return Se.rb},requestPop:function(){return Pt},requestPopSse:function(){return Qc},requestSse:function(){return Bo},safeHtml:function(){return yc.t},setCommonConfig:function(){return fn.setCommonConfig},staticRenderer:function(){return ke},useBailianStyle:function(){return He},useCommonConfig:function(){return fn.useCommonConfig},useGlobalStyle:function(){return Pc.Z},waitForDom:function(){return Fc},waitForFunc:function(){return Co}});var q=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#202041","colorPrimaryBgHover":"#202041","colorPrimaryBorder":"#2B2A55","colorPrimaryBorderHover":"#373476","colorPrimaryHover":"#857DE3","colorPrimary":"#5551CC","colorPrimaryActive":"#4643A1","colorPrimaryTextHover":"#857DE3","colorPrimaryText":"#5551CC","colorPrimaryTextActive":"#4643A1","colorTextBase":"#E7E7ED","colorBgBase":"#000000","colorText":"rgba(231, 231, 237, 0.88)","colorTextSecondary":"rgba(231, 231, 237, 0.65)","colorTextTertiary":"rgba(231, 231, 237, 0.45)","colorTextQuaternary":"rgba(231, 231, 237, 0.25)","colorBorder":"rgba(71, 71, 97, 0.8)","colorBorderSecondary":"rgba(56, 56, 76, 0.8)","colorFill":"rgba(231, 231, 237, 0.18)","colorFillSecondary":"rgba(231, 231, 237, 0.12)","colorFillTertiary":"rgba(231, 231, 237, 0.08)","colorFillQuaternary":"rgba(231, 231, 237, 0.04)","colorBgContainer":"#0F0F14","colorBgElevated":"#0F0F14","colorBgLayout":"#0F0F14","colorBgSpotlight":"rgba(71, 71, 97, 0.85)","colorBgMask":"rgba(5, 5, 8, 0.8)","colorInfo":"#0B83F1","colorInfoHover":"rgba(42, 114, 165, 1)","colorInfoBorder":"rgba(135, 209, 255, 0.2)","colorInfoText":"#0B83F1","colorInfoBg":"rgba(27, 73, 115, 0.25)","colorInfoBgHover":"rgba(27, 73, 115, 0.32)","colorInfoBorderHover":"rgba(94, 188, 255, 0.2)","colorSuccess":"#5BB98B","colorSuccessHover":"rgba(87, 141, 112, 1)","colorSuccessBg":"rgba(0, 50, 26, 0.25)","colorSuccessBgHover":"rgba(0, 50, 26, 0.32)","colorSuccessBorder":"rgba(211, 224, 217, 0.2)","colorSuccessBorderHover":"rgba(171, 212, 190, 0.2)","colorWarning":"#FAAD14","colorWarningHover":"rgba(170, 136, 43, 1)","colorWarningBg":"rgba(129, 116, 49, 0.25)","colorWarningBgHover":"rgba(129, 116, 49, 0.32)","colorWarningBorder":"rgba(255, 229, 143, 0.2)","colorWarningBorderHover":"rgba(255, 214, 102, 0.2)","colorError":"#FF4D4F","colorErrorHover":"rgba(165, 50, 48, 1)","colorErrorBg":"rgba(129, 46, 46, 0.25)","colorErrorBgHover":"rgba(129, 46, 46, 0.32)","colorErrorBorder":"rgba(255, 204, 199, 0.2)","colorErrorBorderHover":"rgba(255, 163, 158, 0.2)","colorLink":"#5551CC","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","colorTextWhite":"#fff","colorFillDisable":"#8D8C98","colorPurple":"#5551CC","colorPurpleHover":"#8383F0","colorPurpleBg":"rgba(226, 222, 255, 0.2)","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"rgba(251, 220, 239, 0.2)","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"rgba(255, 250, 184, 0.2)","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"rgba(255, 232, 201, 0.2)","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"rgba(200, 244, 233, 0.2)","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"rgba(194, 229, 255, 0.2)","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"rgba(239, 240, 243, 0.2)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}'),E=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#F2F0FF","colorPrimaryBgHover":"#F2F0FF","colorPrimaryBorder":"#E2DEFF","colorPrimaryBorderHover":"#BCB5FF","colorPrimaryHover":"#9189FA","colorPrimary":"#615CED","colorPrimaryActive":"#4444C7","colorPrimaryTextHover":"#9189FA","colorPrimaryText":"#615CED","colorPrimaryTextActive":"#4444C7","colorTextBase":"#26244c","colorBgBase":"#FFFFFF","colorText":"rgba(38, 36, 76, 0.88)","colorTextSecondary":"rgba(38, 36, 76, 0.65)","colorTextTertiary":"rgba(38, 36, 76, 0.45)","colorTextQuaternary":"rgba(38, 36, 76, 0.25)","colorBorder":"#cdd0dc","colorBorderSecondary":"#e6e8ee","colorFill":"#cdd0dc5c","colorFillSecondary":"#cdd0dc33","colorFillTertiary":"#cdd0dc26","colorFillQuaternary":"#cdd0dc1a","colorBgContainer":"#FFFFFF","colorBgElevated":"#FFFFFF","colorBgLayout":"#f9fafd","colorBgSpotlight":"rgba(38, 36, 76, 0.85)","colorBgMask":"rgba(20, 19, 39, 0.45)","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#87D1FF","colorInfoText":"#0B83F1","colorInfoBg":"#E6F7FF","colorInfoBgHover":"#B0E3FF","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#ABD4BE","colorSuccessBg":"#EBFAF0","colorSuccessBgHover":"#DFEDE4","colorSuccessBorder":"#D3E0D9","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FFD666","colorWarningBg":"#FFFBE6","colorWarningBgHover":"#FFF1B8","colorWarningBorder":"#FFE58F","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#FF7875","colorErrorBg":"#FFF2F0","colorErrorBgHover":"#FFF1F0","colorErrorBorder":"#FFCCC7","colorErrorBorderHover":"#FFA39E","colorLink":"#615CED","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#fff","colorFillDisable":"#DBDAE7","colorPurple":"#615CED","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"#EC4899","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"#EAB308","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"#FA8125","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"#14B8A6","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"#0090FF","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"#8E8C99","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),_=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#181818","colorPrimaryBgHover":"#2E2E2E","colorPrimaryBorder":"#323232","colorPrimaryBorderHover":"#2C2C2C","colorPrimaryHover":"#DFDFDF","colorPrimary":"#E4E4E4","colorPrimaryActive":"#7E7E7E","colorPrimaryTextHover":"#909090","colorPrimaryText":"#676767","colorPrimaryTextActive":"#959595","colorTextBase":"#E7E7ED","colorBgBase":"#0A0A0B","colorText":"#E7E7EDC7","colorTextSecondary":"#E7E7EDA6","colorTextTertiary":"#E7E7ED73","colorTextQuaternary":"#E7E7ED40","colorBorder":"#5B5B5BCC","colorBorderSecondary":"#323232CC","colorFill":"#E7E7ED2E","colorFillSecondary":"#E7E7ED1F","colorFillTertiary":"#E7E7ED14","colorFillQuaternary":"#E7E7ED0A","colorBgContainer":"#121212","colorBgElevated":"#212121","colorBgLayout":"#141414","colorBgSpotlight":"#525252D9","colorBgMask":"#050508CC","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#3990C9","colorInfoText":"#0B83F1","colorInfoBg":"#112233","colorInfoBgHover":"#264866","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#74A47C","colorSuccessBg":"#293631","colorSuccessBgHover":"#3F5147","colorSuccessBorder":"#73A377","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FF8C28","colorWarningBg":"#2D231A","colorWarningBgHover":"#4D3B23","colorWarningBorder":"#FFA628","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#EE654E","colorErrorBg":"#2B0B08","colorErrorBgHover":"#4A2A28","colorErrorBorder":"#EE5B4E","colorErrorBorderHover":"#FFA39E","colorLink":"#4D7DFF","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextWhite":"#FFFFFF","colorFillDisable":"#898989","colorPurple":"#615CED","colorPurpleHover":"#8383F0","colorPurpleBg":"#6964877A","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"#53424D7A","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"#9585527A","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"#6F58417A","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"#4658547A","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"#5E76897A","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"#5859647A","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextBlack":"#000000"}'),w=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(244, 244, 247, 1)","colorPrimaryBgHover":"rgba(239, 239, 244, 1)","colorPrimaryBorder":"rgba(62, 63, 66, 1)","colorPrimaryBorderHover":"rgba(130, 132, 137, 1)","colorPrimaryHover":"rgba(38, 38, 41, 1)","colorPrimary":"rgba(26, 26, 29, 1)","colorPrimaryActive":"rgba(0, 0, 0, 1)","colorPrimaryTextHover":"rgba(38, 38, 41, 1)","colorPrimaryText":"rgba(26, 26, 29, 1)","colorPrimaryTextActive":"rgba(0, 0, 0, 1)","colorTextBase":"rgba(26, 26, 29, 1)","colorBgBase":"rgba(255, 255, 255, 1)","colorText":"rgba(26, 26, 29, 0.88)","colorTextSecondary":"rgba(26, 26, 29, 0.65)","colorTextTertiary":"rgba(26, 26, 29, 0.45)","colorTextQuaternary":"rgba(26, 26, 29, 0.25)","colorBorder":"rgba(187, 187, 193, 1)","colorBorderSecondary":"rgba(234, 234, 234, 1)","colorFill":"rgba(0, 0, 43, 0.06)","colorFillSecondary":"rgba(0, 0, 85, 0.03)","colorFillTertiary":"rgba(205, 208, 220, 0.15)","colorFillQuaternary":"rgba(205, 208, 220, 0.1)","colorBgContainer":"rgba(255, 255, 255, 1)","colorBgElevated":"rgba(255, 255, 255, 1)","colorBgLayout":"rgba(250, 250, 251, 1)","colorBgSpotlight":"rgba(26, 26, 29, 0.85)","colorBgMask":"rgba(0, 0, 0, 0.45)","colorInfo":"rgba(11, 131, 241, 1)","colorInfoHover":"rgba(94, 188, 255, 1)","colorInfoBorder":"rgba(135, 209, 255, 1)","colorInfoText":"rgba(11, 131, 241, 1)","colorInfoBg":"rgba(230, 247, 255, 1)","colorInfoBgHover":"rgba(176, 227, 255, 1)","colorInfoBorderHover":"rgba(94, 188, 255, 1)","colorSuccess":"rgba(91, 185, 139, 1)","colorSuccessHover":"rgba(171, 212, 190, 1)","colorSuccessBg":"rgba(235, 250, 240, 1)","colorSuccessBgHover":"rgba(223, 237, 228, 1)","colorSuccessBorder":"rgba(211, 224, 217, 1)","colorSuccessBorderHover":"rgba(171, 212, 190, 1)","colorWarning":"rgba(250, 173, 20, 1)","colorWarningHover":"rgba(255, 214, 102, 1)","colorWarningBg":"rgba(255, 251, 230, 1)","colorWarningBgHover":"rgba(255, 241, 184, 1)","colorWarningBorder":"rgba(255, 229, 143, 1)","colorWarningBorderHover":"rgba(255, 214, 102, 1)","colorError":"rgba(255, 77, 79, 1)","colorErrorHover":"rgba(255, 120, 117, 1)","colorErrorBg":"rgba(255, 242, 240, 1)","colorErrorBgHover":"rgba(255, 241, 240, 1)","colorErrorBorder":"rgba(255, 204, 199, 1)","colorErrorBorderHover":"rgba(255, 163, 158, 1)","colorLink":"rgba(0, 77, 255, 1)","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"rgba(255, 255, 255, 1)","colorFillDisable":"rgba(232, 232, 235, 1)","colorPurple":"rgba(97, 92, 237, 1)","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"rgba(236, 72, 153, 1)","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"rgba(234, 179, 8, 1)","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"rgba(250, 129, 37, 1)","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"rgba(20, 184, 166, 1)","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"rgba(0, 144, 255, 1)","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"rgba(142, 140, 153, 1)","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),J=e(97857),a=e.n(J),R="rgba(0,0,0,0)",z=2,O=4,$=6,U=8,L=12,N=999,V="normal 12px/20px inherit",l="500 12px/20px inherit",S="normal 12px/20px Menlo, monospace",h="500 13px/20px inherit",p="normal 14px/24px inherit",m="500 14px/24px inherit",A="normal 14px/24px Menlo, monospace",x="normal 16px/28px inherit",j="500 16px/28px inherit",I="500 18px/32px inherit",c="500 20px/36px inherit",W="500 24px/44px inherit",d="500 32px/48px inherit";function K(n,t){return{theme:{cssVar:!0,hashed:!1,darkMode:t,token:a()({borderRadiusXS:z,borderRadiusSM:O,borderRadius:$,borderRadiusLG:U,borderRadiusXL:L,borderRadiusFull:N,footnoteRegular:V,footnoteMedium:l,footnoteSystemMonospace:S,bodyFormTitle:h,bodyRegular:p,bodyMedium:m,bodyCode:A,h5Regular:x,h5Medium:j,h4Medium:I,h3Medium:c,h2Medium:W,h1Medium:d},n),components:{Alert:{colorErrorBorder:R,colorInfoBorder:R,colorSuccessBorder:R,colorWarningBorder:R,colorInfoBg:n.colorInfoBg,borderRadiusLG:0,defaultPadding:"8px 20px",fontSize:12,lineHeight:"20px"},Badge:{colorError:n.colorPrimary,indicatorHeight:16,textFontSize:10},Breadcrumb:{separatorMargin:4,lastItemColor:n.colorText},Button:{contentFontSizeSM:12,defaultHoverBg:n.colorFillSecondary,defaultHoverBorderColor:n.colorBorderSecondary,defaultHoverColor:n.colorText,defaultActiveBg:n.colorFillSecondary,defaultActiveBorderColor:n.colorBorderSecondary,defaultActiveColor:n.colorText,defaultGhostColor:n.colorText,defaultGhostBorderColor:"transparent",dangerShadow:"none",defaultShadow:"none",primaryShadow:"none"},DatePicker:{paddingInline:8,colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Dropdown:{paddingBlock:4,controlPaddingHorizontal:8,controlItemBgHover:n.colorFillTertiary},Progress:{remainingColor:n.colorPrimaryBg,defaultColor:n.colorPrimary},Input:{colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},InputNumber:{colorBgBase:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Select:{colorBgBase:n.colorBgBase,selectorBg:n.colorBgBase,colorBgContainerDisabled:n.colorFillTertiary},Skeleton:{paragraphLiHeight:24,paragraphMarginTop:16,blockRadius:8},Slider:{railBg:n.colorPrimaryBg,railHoverBg:n.colorPrimaryBgHover,trackBg:n.colorPrimary,trackHoverBg:n.colorPrimary,handleColor:n.colorPrimary,railSize:8,handleSize:12,handleSizeHover:12},Segmented:{itemSelectedBg:n.colorBgBase,trackPadding:4,controlHeight:40,controlHeightLG:42,itemHoverBg:"unset"},Steps:{iconSize:20,iconFontSize:12,titleLineHeight:20},Modal:{headerBg:n.colorBgBase,contentBg:n.colorBgBase,titleFontSize:16,controlHeight:20},Tooltip:{sizePopupArrow:0},Popover:{sizePopupArrow:0},Table:{cellPaddingInline:20},Form:{itemMarginBottom:20},Collapse:{contentPadding:"8px 12px",headerPadding:"4px 12px"},Descriptions:{colonMarginRight:10,verticalLabelPaddingBottom:4,verticalContentPaddingBottom:24},Switch:{handleBg:n.colorBgContainer,trackHeight:24,handleSize:20,trackHeightSM:20,handleSizeSM:16,trackMinWidth:44,trackMinWidthSM:32}}},checkbox:{style:{fontWeight:"500"}},radio:{style:{fontWeight:"500"}}}}var f=e(67294),an=e(68400),D=e.n(an),b=e(3067),X,un=(0,b.Z)(X||(X=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),jn,Nn=(0,b.Z)(jn||(jn=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Bn,xn=(0,b.Z)(Bn||(Bn=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),pn,kn=(0,b.Z)(pn||(pn=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),In,Un=(0,b.Z)(In||(In=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ln,_n=(0,b.Z)(Ln||(Ln=D()([`
  .`,`-col {
    min-height: unset;
  }
`])),function(n){return n.antPrefix}),Dn,bn=(0,b.Z)(Dn||(Dn=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),yn,zn=(0,b.Z)(yn||(yn=D()([`
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
`])),function(n){return n.antPrefix}),On,Jn=(0,b.Z)(On||(On=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix}),ie,ne=(0,b.Z)(ie||(ie=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),de,oe=(0,b.Z)(de||(de=D()([`
  .`,"-select-outlined.","-select-multiple .",`-select-selection-item {
    background: var(--`,`-color-fill-tertiary);
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),se,ve=(0,b.Z)(se||(se=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),ge,he=(0,b.Z)(ge||(ge=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),ye,fe=(0,b.Z)(ye||(ye=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ce,ot=(0,b.Z)(Ce||(Ce=D()([`
  .`,`-tooltip {
    max-width: 500px;
    
    .`,`-tooltip-inner {
      border-radius: 8px;
    }
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix}),Ie,Hn=(0,b.Z)(Ie||(Ie=D()([`
  .`,"-upload-wrapper .",`-upload-drag {
    background-color: var(--`,`-color-bg-layout);
  }
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),De=function(){var t=un(),o=Nn(),i=xn(),u=kn(),s=Un(),v=_n(),g=bn(),y=zn(),B=Jn(),P=ne(),C=oe(),M=ve(),F=he(),T=fe(),H=ot(),nn=Hn();return function(){return f.createElement(f.Fragment,null,f.createElement(t),f.createElement(o),f.createElement(i),f.createElement(u),f.createElement(s),f.createElement(v),f.createElement(g),f.createElement(y),f.createElement(B),f.createElement(P),f.createElement(C),f.createElement(M),f.createElement(F),f.createElement(T),f.createElement(H),f.createElement(nn))}},Nt=null,at=function(){var t=De();return function(){return f.createElement(t)}},He=at,Ve=e(40056),it=e(40411),lt=e(32348),Ae=e(13457),Ke=e(38703),we=e(55742),Re=e(34041),ze=e(48054),le=e(37339),Pe=e(15560),Io=e(34952),Do=e(21004),Tt=e(57027),Zo=e(48432),Mo=e(34304),Lt=e(43158),Oo=e(81843),Ao=e(71615),wo=e(8732),kt=e(11765),Qe=e(28299),fn=e(93865),Ze=e(21317),Ro=e(93967),ln=e.n(Ro),It,zo=(0,b.Z)(It||(It=D()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(n){return n.sparkPrefix}),r=e(85893);function Wo(n){var t=n.className,o=t===void 0?"":t,i=n.style,u=i===void 0?{}:i,s=n.children,v=n.rows,g=v===void 0?1:v,y=n.tooltip,B=y||s,P=(0,fn.getCommonConfig)(),C=P.sparkPrefix,M=zo();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(Ze.Z.Paragraph,{className:ln()("".concat(C,"-ellipsis-tip"),o),style:u,ellipsis:{rows:g,tooltip:B},children:s})]})}var $o=e(21860),Uo=e(32151),Ho=e(29368),Dt=e(67985),Vo=e(21773),Ge=e(33369),Zt,Ko=(0,b.Z)(Zt||(Zt=D()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix});function Qo(n){var t=(0,Vo.X)(),o=Ko(),i=n.style,u=n.content,s=n.className,v=n.popoverProps,g=(0,fn.getCommonConfig)(),y=g.sparkPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(o,{}),(0,r.jsx)(Ge.Z,a()(a()({title:u,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:i},v),{},{children:(0,r.jsx)(Dt.Z,{className:ln()("".concat(y,"-help-icon"),s),icon:(0,r.jsx)(Ho.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var Go=e(38654),Jo=e(15713),Mt=e(86995),We=e(56373),Je=e(76561),Xo=e(89887),Yo=e(94476),qo=e(81930),Ot=e(14392),At=e(71493),_o=e(5626),na=e(65163),ea=e(89806),ta=e(5574),Rn=e.n(ta),je=e(23048),Te=e(45360),G=e(37946),ct=e(57645),Me=e(99963),wt,ra=(0,b.Z)(wt||(wt=D()([`
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
`]))),oa=e(19632),Le=e.n(oa),aa=(0,f.memo)(function(n){var t=n.attributes,o=n.children;return(0,r.jsx)("div",a()(a()({},t),{},{style:{marginTop:"8px"},children:o}))}),Rt,ia=(0,b.Z)(Rt||(Rt=D()([`
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
`]))),la=(0,f.memo)(function(n){var t=n.attributes,o=n.renderVarLabel,i=ia();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsxs)("span",a()(a()({},t),{},{children:[n.children,(0,r.jsx)("span",{className:"spark-editor-var-tag",children:o?o(n.element.code):n.element.label})]}))]})}),ss=function(t){return Object.keys(t).map(function(o){return{label:t[o].label,desc:t[o].desc,value:o}})},ca=[{code:"s",isParagraph:!0,out:[],inner:[],name:je.Z.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:aa,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:je.Z.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:la,isInline:!0,isVoid:!0,type:"single"}],st=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},us=function(t){return t.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},sa=function(t){return t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},ut=function n(t,o){var i="",u=o||{},s=u.tagRules,v=s===void 0?{}:s;return t.forEach(function(g,y){if(G.W_.isElement(g)){var B=v[g.type];if(!B)i+=st(g.text);else switch(B.code){case"image":i+="![".concat(g.fileName,"](").concat(g.src,")");break;case"pdf":i+="[".concat(g.fileName,"](").concat(g.src,")");break;case"s":i+="".concat(n(g.children,o)).concat(y<t.length-1?`
`:"");break;case"var":i+="${".concat(g.code,"}");default:break}}else i+=st(g.text)}),i},zt=function(t,o){if(t&&t.children.length){var i=ut(t.children,o);return i==="<s></s>"?"":sa(i)}return""},Xe=function(t){if(!t)return"";var o="",i=st(t).replace(/\$\{([^{}]+?)\}/g,function(u,s){return'<var code="'.concat(s,'" label="${').concat(s,'}" />')});return i.split(`
`).forEach(function(u){o+="<s>".concat(u,"</s>")}),"<speak>".concat(o,"</speak>")},ua=function n(t){var o,i=[];return(t==null||(o=t.childNodes)===null||o===void 0?void 0:o.length)>0&&t.childNodes.forEach(function(u,s,v){var g=u.nodeType,y=u.nodeName;if(g===1){for(var B={},P=0;P<u.attributes.length;P++){var C=u.attributes[P],M=C.nodeName,F=C.nodeValue;B[M]=F}var T=a()({type:y},B);u.childNodes.length>0?T.children=n(u):T.children=[{text:""}],i.push(T),y!=="s"&&(s>0&&v[s-1].nodeType===1&&i.unshift({text:""}),s===v.length-1&&i.push({text:""}))}else g===3&&i.push({text:u.nodeValue||""})}),i},Ye=function(t){if(t){var o=new DOMParser().parseFromString(t,"text/xml");return ua(o)}},da=function(t){if(!t||t.includes("</speak>"))return t;var o=t;return o.includes("<s>")||(o="<s>".concat(o,"</s>")),"<speak>".concat(o,"</speak>")},Wt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o={};return[].concat(Le()(t),Le()(ca)).forEach(function(i){o[i.code]||(o[i.code]=i)}),o},fa=e(15009),Qn=e.n(fa),ma=e(99289),be=e.n(ma),$t=function(t,o,i){if(!(!t||!o)){var u=t.selection,s=null;u&&(s=u.focus),i!=null&&i.at&&(s=i==null?void 0:i.at),s||(s={path:[0,0],offset:0});var v=s,g=v.path,y=v.offset,B=G.NB.get(t,G.y$.parent(g));if(!G.ML.isVoid(t,B)){var P=G.NB.string(G.NB.get(t,g)),C=P.substring(0,y-(i!=null&&i.deletePrefix?1:0)),M=P.substring(y,P.length);G.ML.withoutNormalizing(t,function(){t.apply({type:"insert_node",node:{text:M},path:g}),t.apply({type:"insert_node",node:o,path:g}),t.apply({type:"insert_node",node:{text:C},path:g});var F=G.y$.next(G.y$.next(G.y$.next(g)));t.apply({type:"remove_node",path:F,node:G.NB.get(t,F)});var T={path:G.y$.next(G.y$.next(g)),offset:0};t.apply({type:"set_selection",properties:null,newProperties:{anchor:T,focus:T}}),Me.F3.focus(t),t.onChange()})}}},xa=function(){var n=be()(Qn()().mark(function t(o,i,u){var s,v,g,y,B,P,C,M,F,T,H,nn,Z,k,en,rn,cn,tn,sn,vn,dn,gn,An,Xn,Pn,$n,ae,mn,hn,ee,te,Cn;return Qn()().wrap(function(on){for(;;)switch(on.prev=on.next){case 0:if(!(!o||!i)){on.next=2;break}return on.abrupt("return");case 2:if(v=o.selection,g=u||{},y=g.tip,B=g.selection,P=B===void 0?v:B,C=u==null||(s=u.rules)===null||s===void 0?void 0:s[i.type],!(P&&!G.e6.isCollapsed(P))){on.next=45;break}if(F=G.NB.fragment(o,P),T=qe(F),T!==""){on.next=10;break}return on.abrupt("return");case 10:if(H=_e(G.e6.edges(P)),nn=Rn()(H,2),Z=nn[0],k=nn[1],G.ML.isVoid(o,G.NB.get(o,G.y$.parent(Z.path)))&&(Z.path=G.y$.next(G.y$.parent(Z.path)),Z.offset=0),G.ML.isVoid(o,G.NB.get(o,G.y$.parent(k.path)))&&(k.path=G.y$.previous(G.y$.parent(k.path)),k.offset=G.NB.string(G.NB.get(o,k.path)).length),G.y$.hasPrevious(k.path)&&G.NB.get(o,G.y$.parent(Z.path))===G.NB.get(o,G.y$.previous(k.path))&&Z.offset===0&&k.offset===0&&(en=G.y$.previous(G.y$.parent(Z.path)),rn=G.NB.get(o,en),Z.path=en,Z.offset=rn.text.length),G.NB.parent(o,Z.path)!==G.NB.parent(o,k.path)){for(cn=G.NB.get(o,Z.path),tn=qe(G.NB.fragment(o,{anchor:{path:k.path,offset:0},focus:k}));G.xv.isText(cn)&&cn.text===""&&T===tn;)Z.path.splice(Z.path.length-1,1,1,0),cn=G.NB.get(o,Z.path);for(sn=G.NB.get(o,k.path),vn=G.NB.string(G.NB.get(o,G.e6.edges(P)[0].path)),dn=qe(G.NB.fragment(o,{anchor:Z,focus:{path:Z.path,offset:vn.length}}));G.xv.isText(sn)&&sn.text===""&&T===dn;)gn=k.path[k.path.length-1],k.path.splice(k.path.length-1,1,gn-1),sn=G.NB.get(o,k.path),G.W_.isElement(sn)&&(k.path.push(sn.children.length-1),k.offset=vn.length)}if(G.NB.parent(o,Z.path)===G.NB.parent(o,k.path)){on.next=18;break}return Te.ZP.info(je.Z.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),on.abrupt("return");case 18:An=G.y$.parent(Z.path),Xn=(C==null?void 0:C.name)||dt(),Pn=G.NB.get(o,An),$n=u==null||(M=u.rules)===null||M===void 0?void 0:M[Pn.type];case 22:if(!(C!=null&&C.out&&An.length>1)){on.next=30;break}if(C.out.includes(Pn.type)){on.next=27;break}return ae=($n==null?void 0:$n.name)||dt(),Te.ZP.warning(je.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:Xn,tagName:ae})),on.abrupt("return");case 27:An=G.y$.parent(An),on.next=22;break;case 30:if(!(C!=null&&C.inner&&G.NB.get(o,Z.path)!==G.NB.get(o,k.path))){on.next=42;break}mn=G.y$.next(Z.path);case 32:if(G.y$.equals(mn,k.path)){on.next=42;break}if(ee=G.NB.get(o,mn),te=u==null||(hn=u.rules)===null||hn===void 0?void 0:hn[ee.type],!(G.W_.isElement(ee)&&!C.inner.includes(ee.type))){on.next=39;break}return Cn=(te==null?void 0:te.name)||dt(),Te.ZP.warning(je.Z.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:Xn,tagName:Cn})),on.abrupt("return");case 39:mn=G.y$.next(mn),on.next=32;break;case 42:G.ML.withoutNormalizing(o,function(){var ue=G.NB.parent(o,Z.path),xe=G.NB.fragment(ue,{anchor:{path:[Z.path[Z.path.length-1]],offset:Z.offset},focus:{path:[k.path[k.path.length-1]],offset:k.offset}}),wn=G.NB.string(G.NB.get(o,Z.path));if(G.y$.equals(Z.path,k.path))o.apply({type:"remove_text",path:Z.path,offset:Z.offset,text:wn.substring(Z.offset,k.offset)});else{o.apply({type:"remove_text",path:Z.path,offset:Z.offset,text:wn.substring(Z.offset,wn.length)});for(var Mn=G.y$.next(Z.path);!G.y$.equals(Mn,k.path);)o.apply({type:"remove_node",path:Mn,node:G.NB.get(o,Mn)}),k.path=G.y$.previous(k.path);var Tn=G.NB.string(G.NB.get(o,k.path));o.apply({type:"remove_text",path:k.path,offset:0,text:Tn.substring(0,k.offset)})}if(!G.y$.equals(Z.path,k.path)){var Vn=G.NB.get(o,k.path);o.apply({type:"remove_node",path:k.path,node:Vn});var ce=G.NB.string(Vn);o.apply({type:"insert_text",path:Z.path,offset:Z.offset,text:ce})}$t(o,a()(a()({},i),{},{children:xe}),{at:Z,rules:u==null?void 0:u.rules})}),on.next=46;break;case 45:y&&Te.ZP.warning(y);case 46:case"end":return on.stop()}},t)}));return function(o,i,u){return n.apply(this,arguments)}}(),ds=function(t,o,i){if(!(!t||!o)){var u=Node.get(t,o),s=_e(u.children).reverse();Editor.withoutNormalizing(t,function(){t.apply({type:"remove_node",node:u,path:o}),s.forEach(function(T){t.apply({type:"insert_node",node:T,path:o})});for(var v=Path.parent(o),g=Node.get(t,v),y=0;Node.has(g,[y+1]);)if(Text.isText(Node.get(g,[y]))&&Text.isText(Node.get(g,[y+1]))){var B=_toConsumableArray(v);B.push(y+1);var P=Node.get(t,B),C=Node.string(P);t.apply({type:"remove_node",path:B,node:P});var M=Path.previous(B),F=Node.string(Node.get(t,M));t.apply({type:"insert_text",path:Path.previous(B),offset:F.length,text:C}),g=Node.get(t,v)}else y++;i==null||i(),Path.previous(o)})}},va=function(t,o,i){var u=i.at;t.apply({type:"set_node",path:u,properties:o,newProperties:o}),t.onChange()},fs=function(t,o,i){t.apply({type:"remove_node",path:i,node:Node.get(t,i)}),t.apply({type:"insert_node",path:i,node:o})},ga=function(t,o){t&&(G.ML.withoutNormalizing(t,function(){var i=_e(t.children);i.forEach(function(s){t.apply({type:"remove_node",path:[0],node:s})});var u=o?_e(o):[{type:"s",children:[{text:""}]}];u.reverse(),u.forEach(function(s){t.apply({type:"insert_node",path:[0],node:s})})}),t.onChange())},qe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(o,i){return o+G.NB.string(i)},"")},_e=function(t){return JSON.parse(JSON.stringify(t))},dt=function(){var t="";return t},ms=function(t){var o;return(o=t[0])===null||o===void 0||(o=o.children)===null||o===void 0?void 0:o.map(function(i){return i.children.map(function(u){return u.text}).join("")}).join("")},xs=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,o=t%60,i=parseInt("".concat(t/60)),u=0;return i>60&&(i=i%60,u=parseInt("".concat(i/60))),"".concat(u?"".concat(ft(u),":"):"").concat(ft(i),":").concat(ft(o))},ft=function(t){return t>=10?"".concat(t):"0".concat(t)},pa=function(t,o){if(!(!t||!o))return Me.F3.findPath(t,o)},ha=function(t){t&&G.ML.withoutNormalizing(t,function(){var o=G.ML.end(t,[]);G.YR.select(t,o),Me.F3.focus(t),t.onChange()})},Pa=function(t,o,i){var u=t.isInline,s=t.isVoid,v=t.insertText,g=t.insertBreak,y=t.apply;t.isInline=function(P){var C;return((C=i[P.type])===null||C===void 0?void 0:C.isInline)||u(P)},t.isVoid=function(P){var C;return((C=i[P.type])===null||C===void 0?void 0:C.isVoid)||s(P)};var B=function(C){var M=parseInt(t.maxLength||o||"1000"),F=zt(t,{tagRules:i}),T=F.length;if(T+C.length>M?(v(C.substring(0,M-T)),ct.MO.withoutSaving(t,function(){v(C.substring(M-T,C.length))})):v(C),t.selection&&T+C.length>M){var H=t.selection.focus,nn=H.path,Z=H.offset,k=Z-(T+C.length-M),en=C.substring(M-T,C.length),rn=je.Z.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:M});ct.MO.withoutSaving(t,function(){t.apply({type:"remove_text",path:nn,offset:k,text:en})}),Te.ZP.warning(rn)}};return t.insertText=B,t.insertFragment=function(P){var C=qe(P);B(C)},t.insertBreak=function(){var P=t.selection;if(P){var C=Array.from(G.ML.nodes(t,{at:P,match:function(H){return!G.ML.isEditor(H)&&G.W_.isElement(H)&&H.type!=="s"}})),M=Rn()(C,1),F=M[0];if(F)return;g()}},t.apply=function(P){P.type==="set_selection"&&mt||y(P)},t},ya=(0,f.forwardRef)(function(n,t){var o=ra(),i=n.value,u=n.wordLimit,s=u===void 0?1e3:u,v=n.disabled,g=n.onChange,y=n.variables,B=(0,f.useRef)(!1),P=(0,f.useRef)(Wt(n.tagRules)),C=(0,f.useMemo)(function(){return Pa((0,Me.BU)((0,ct.VC)((0,G.Jh)())),s,P.current)},[]),M=(0,f.useRef)(C.selection),F=(0,f.useRef)(y);(0,f.useEffect)(function(){P.current=Wt(n.tagRules)},[n.tagRules]),(0,f.useEffect)(function(){F.current=y},[y]),(0,f.useEffect)(function(){var Cn;if(!B.current){B.current=!0;return}C.maxLength=s;var Q=dn();Pn(((Cn=Ye(Xe(Q==null?void 0:Q.slice(0,s))))===null||Cn===void 0||(Cn=Cn[0])===null||Cn===void 0?void 0:Cn.children)||[{type:"s",children:[{text:""}]}])},[s]),(0,f.useImperativeHandle)(t,function(){return{editor:C,getEditorValue:dn,_insertNodes:An,_setNodes:gn,_setEditorContent:Pn,_findNodePath:ae,_wrapNodes:Xn,_serialize:mn,_generateTextBySelection:hn,_insertFragment:ee,_setEditorContentByStr:$n}});var T=(0,f.useMemo)(function(){var Cn=Ye(da(Xe(i))),Q;return Cn&&(Cn[0].type==="speak"?Q=Cn[0].children:Q=Cn),{initValue:Q}},[i]),H=T.initValue,nn=(0,f.useState)(H||[{type:"s",children:[{text:""}]}]),Z=Rn()(nn,2),k=Z[0],en=Z[1],rn=function(Q){JSON.stringify((C==null?void 0:C.selection)||"")!==JSON.stringify(M.current||"")&&(M.current=C==null?void 0:C.selection);var on=dn();i!==on&&(g==null||g(dn()),en(Q))},cn=function(Q){var on=Q.element,ue=on.type,xe=P.current[ue].render;return xe?(0,r.jsx)(xe,a()(a()({},Q),{},{renderVarLabel:n.renderVarLabel})):(0,r.jsx)(r.Fragment,{})},tn=(0,f.useCallback)(function(Cn){var Q=Cn.attributes,on=Cn.children,ue=Cn.leaf;return(0,r.jsx)("span",a()(a()({},Q),{},{style:{paddingLeft:ue.text===""?"3px":void 0},children:on}))},[]),sn=function(){mt=!0},vn=function(){mt=!1},dn=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt(C,a()(a()({},Q),{},{tagRules:P.current}))},gn=function(Q,on){va(C,Q,on)},An=function(Q){var on=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};$t(C,Q,a()(a()({},on),{},{rules:P.current}))},Xn=function(Q){var on=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xa(C,Q,a()(a()({},on),{},{rules:P.current}))},Pn=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];ga(C,Q)},$n=function(){var Q,on=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";Pn(((Q=Ye(Xe(on==null?void 0:on.slice(0,s))))===null||Q===void 0||(Q=Q[0])===null||Q===void 0?void 0:Q.children)||[{type:"s",children:[{text:""}]}])},ae=function(Q){return pa(C,Q)},mn=function(Q){var on=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ut(Q,a()(a()({},on),{},{tagRules:P.current}))},hn=function(){var Q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!C.selection)return null;var on=G.NB.fragment(C,C.selection);return ut(on,a()(a()({},Q),{},{tagRules:P.current}))},ee=function(Q){var on,ue=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,xe=dn();if(xe.length>=s){Te.ZP.warning(je.Z.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!C.selection||ue)&&ha(C);var wn=xe.endsWith("/n");ue&&xe&&!wn&&C.insertBreak();var Mn=Q.slice(0,s-xe.length),Tn=Ye(Xe(Mn))||[];(on=Tn[0])===null||on===void 0||on.children.forEach(function(Vn,ce){var Fe;ce!==0&&C.insertBreak(),(Fe=Vn.children)===null||Fe===void 0||Fe.forEach(function(Ue){Ue.text?C.insertText(Ue.text):An(Ue)})})};(0,f.useEffect)(function(){var Cn=dn();i!==Cn&&(g==null||g(dn()))},[]);var te=function(Q){var on=Q.clipboardData.getData("text/plain");ee(on,!1),Q.preventDefault()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{id:"text-editor",className:ln()("text-editor",n.className),children:(0,r.jsx)(Me.mH,{editor:C,value:k,onChange:rn,children:(0,r.jsx)(Me.CX,{onKeyDown:n.onKeyDown,placeholder:n.placeholder||je.Z.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:n.onBlur,onFocus:n.onFocus,className:ln()("text-editor-content",n.contentClassName),readOnly:v,renderElement:cn,renderLeaf:tn,onCompositionStart:sn,onCompositionEnd:vn,onPaste:te,maxLength:n.wordLimit,onCopy:function(Q){var on=hn()||"";Q.clipboardData.setData("text/plain",on),Q.preventDefault()}})})})]})}),ba=ya,mt=!1,xt=e(13191),Ca=e(88886),Sa=e(69065),ja=e(9783),me=e.n(ja),Ut,Ba=(0,b.Z)(Ut||(Ut=D()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix});function Ea(n){var t=(0,fn.getCommonConfig)(),o=t.sparkPrefix,i=Ba(),u=function(v){var g=typeof v=="string"?parseFloat(v):v;if(g===null||isNaN(g)){n.onChange(null);return}g<n.min?n.onChange(n.min):g>n.max?n.onChange(n.max):n.onChange(g)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsxs)("div",{onMouseUp:function(){var v;return(v=n.onBlur)===null||v===void 0?void 0:v.call(n)},className:ln()("".concat(o,"-slider-selector"),n.className),children:[(0,r.jsx)(xt.Z,{disabled:n.disabled,onChange:u,value:n.value===null?void 0:n.value,min:n.min,max:n.max,step:n.step,marks:n.marks||me()(me()({},n.min,n.min),n.max,n.max),tooltip:{getPopupContainer:function(v){return v}}}),(0,r.jsx)("div",{style:a()({width:"48px"},n.inputNumberWrapperStyle),children:(0,r.jsx)(Ae.Z,{disabled:n.disabled,controls:!1,min:n.min,max:n.max,onBlur:function(){var v;return(v=n.onBlur)===null||v===void 0?void 0:v.call(n)},step:n.step,value:n.value,onChange:u,precision:n.precision})})]})]})}var Fa=e(95542),Na=e(59113),Ta=e(80731),Ht=e(91268),La=e(20010),ka=e(69298),Ia=e(20946),Da=e(21618),Za=e(13769),Gn=e.n(Za),Vt,Ma=(0,b.Z)(Vt||(Vt=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),vs=null,Oa=["type"];function Aa(n){var t=n.type,o=t===void 0?n.banner?"warning":"info":t,i=Gn()(n,Oa),u=(0,fn.getCommonConfig)(),s=u.blPrefix,v=Ma();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(Ve.Z,a()(a()({},i),{},{type:n.type||o,className:ln()("".concat(s,"-alertWrapper"),i.className),action:n.action||n.button}))]})}function Kt(n,t){return Array.isArray(n)?Promise.all(n.map(function(o){return Kt(o,t)})):n?new Promise(function(o){var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.onload=o,i.onerror=o,i.href=wa(n,".css"),Ra(i,t)}):Promise.resolve()}function wa(n,t){var o=n.includes(t)?n:"".concat(n).concat(t);return o}function Ra(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.head,i=o===void 0?!1:o;if(i==="after"){var u=document.body.firstChild||document.body.childNodes[0];document.body.insertBefore(n,u)}else i?document.head.appendChild(n):document.body.appendChild(n)}var za=e(26910),vt=e(12801),Wa=["type","className","isCursorPointer","spin"],Qt=!1,$a=function(t){Qt||(Qt=!0,Kt(t,{head:!0}))};function En(n){var t=n.type,o=n.className,i=o===void 0?"":o,u=n.isCursorPointer,s=u===void 0?!1:u,v=n.spin,g=Gn()(n,Wa),y=(0,fn.getCommonConfig)(),B=y.blPrefix,P=(0,vt.X)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,{}),(0,r.jsx)("i",a()({style:n.styles,className:ln()("bl-iconfont",(0,za.Z)(t,"icon-")?"bl-".concat(t):t,s&&"".concat(B,"-cursor-pointer"),i,"".concat(B,"-icon"),me()({},"".concat(B,"-icon-spin"),v))},g))]})}var nt=function(n){var t=n.content===""||n.content===void 0||n.content===null,o=n.title===""||n.title===void 0||n.title===null,i=n.open!==void 0&&n.open!==null?n.open:t&&o?!1:void 0;return(0,r.jsx)(Ot.Z,a()(a()({},n),{},{open:i}))},Gt,Ua=(0,b.Z)(Gt||(Gt=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),gs=null,Ha=["className","disabled","tooltipContent","size","children","icon","iconType","onClick"];function Be(n){var t=n.className,o=n.disabled,i=n.tooltipContent,u=n.size,s=u===void 0?"default":u,v=n.children,g=n.icon,y=n.iconType,B=n.onClick,P=Gn()(n,Ha),C=Ua(),M=(0,fn.getCommonConfig)(),F=M.blPrefix,T=ln()("".concat(F,"-btn"),t,me()(me()({},"".concat(F,"-").concat(s),s),"".concat(F,"-link"),n.type==="link"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(nt,{content:i,children:(0,r.jsx)(Tt.Z,a()(a()({className:T,disabled:o,onClick:function(nn){o||B==null||B(nn)},icon:y?(0,r.jsx)(En,{className:"".concat(F,"-icon"),type:y}):g?(0,r.jsx)("span",{className:"".concat(F,"-iconWrap"),children:g}):null},P),{},{children:v}))})]})}var Jt=e(71681),Xt,Va=(0,b.Z)(Xt||(Xt=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix}),ps=null;function Yt(n){var t=n.onClick,o=(0,fn.getCommonConfig)(),i=o.blPrefix,u=Va();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(Be,{type:"text",className:ln()("".concat(i,"-back-icon-wrapper"),n.className),onClick:t,children:(0,r.jsx)(Jt.Z,{className:"".concat(i,"-back-icon")})})]})}var qt,Ka=(0,b.Z)(qt||(qt=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),hs=null;function Qa(n){var t=(0,fn.getCommonConfig)(),o=t.blPrefix,i=Ka(),u=function(v){n.onBack?n.onBack(v):history.back()};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsxs)("div",{className:ln()("".concat(o,"-back"),n.className),children:[(0,r.jsx)(Yt,{onClick:u,className:"".concat(o,"-backTitle-back-icon")}),(0,r.jsx)("div",{className:"".concat(o,"-title"),children:n.backTitle}),n.children]})]})}var $e=e(86250),_t=e(84567),nr,Ga=(0,b.Z)(nr||(nr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Ps=null;function Ja(n){var t=Ga(),o=n.options,i=n.value,u=n.type,s=u===void 0?"radio":u,v=(0,fn.getCommonConfig)(),g=v.blPrefix,y=function(C){switch(s){case"radio":n.onSelect(C);break;case"check":n.onSelect([].concat(Le()(i||[]),[C]));break}},B=function(C){switch(s){case"radio":break;case"check":n.onSelect((i||[]).filter(function(M){return M!==C}));break}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)("div",{className:ln()("".concat(g,"-card-selector"),n.className),children:o.map(function(P){var C=typeof P.disabled=="boolean"?P.disabled:n.getItemDisableStatus?n.getItemDisableStatus(P):!1,M=s==="radio"?i===P.value:i==null?void 0:i.includes(P.value);return(0,r.jsxs)("div",{onClick:function(){C||(M?B(P.value):y(P.value))},className:ln()("".concat(g,"-card-selector-item"),me()(me()({},"active",M),"disabled",C)),children:[(0,r.jsxs)($e.Z,{gap:"center",justify:"space-between",children:[(0,r.jsxs)($e.Z,{gap:8,align:"center",children:[(0,r.jsx)("span",{className:"".concat(g,"-card-selector-title"),children:P.label}),n.actionElement]}),s==="radio"?(0,r.jsx)(we.ZP,{checked:M}):(0,r.jsx)(_t.Z,{checked:M})]}),(0,r.jsx)(Ze.Z.Paragraph,{className:"".concat(g,"-card-selector-desc"),ellipsis:{tooltip:P.desc,rows:2},children:P.desc})]},P.value)})})]})}var Fn=e(7808),er,Xa=(0,b.Z)(er||(er=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),ys=null,Ya=["className","children","cancelText","okBtnClk","okText","footer","hiddenOk","hiddenCancel","disabledOk","hiddenFooter"];function qa(n){var t=n.className,o=n.children,i=n.cancelText,u=n.okBtnClk,s=n.okText,v=n.footer,g=n.hiddenOk,y=g===void 0?!1:g,B=n.hiddenCancel,P=B===void 0?!1:B,C=n.disabledOk,M=C===void 0?!1:C,F=n.hiddenFooter,T=F===void 0?!1:F,H=Gn()(n,Ya),nn=(0,fn.getCommonConfig)(),Z=nn.blPrefix,k=Xa();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k,{}),(0,r.jsxs)(kt.Z,a()(a()({className:ln()("".concat(Z,"-drawer"),t),footer:v},H),{},{children:[(0,r.jsx)("div",{className:"".concat(Z,"-content"),children:o}),!n.footer&&!T&&(0,r.jsxs)("div",{className:"".concat(Z,"-footer"),children:[!P&&(0,r.jsx)(Be,{onClick:n.onClose,className:"".concat(Z,"-btn"),children:i||Fn.Z.get({id:"pages.uiComponents.BizDrawer.Cancel",dm:"\u53D6\u6D88"})}),!y&&(0,r.jsx)(Be,{disabled:M,onClick:u,className:"".concat(Z,"-btn"),type:"primary",children:s||Fn.Z.get({id:"pages.uiComponents.BizDrawer.Ok",dm:"\u786E\u5B9A"})})]})]}))]})}var _a=e(33309),tr,ni=(0,b.Z)(tr||(tr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),bs=null,ei=["items","overlayClassName"];function ti(n){var t=n.items,o=n.overlayClassName,i=Gn()(n,ei),u=(0,fn.getCommonConfig)(),s=u.blPrefix,v=ni(),g=function(B){return B.map(function(P){return{key:P.key,className:P.isDanger?"danger-operation":"",label:(0,r.jsxs)("div",{onClick:function(){var M;P.disabled||(M=P.onClick)===null||M===void 0||M.call(P,P.key)},className:ln()("".concat(s,"-menuItem"),me()({},"".concat(s,"-disabled"),P.disabled)),children:[(0,r.jsx)("span",{children:P.label}),P.extraAction]})}})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(Qe.Z,a()(a()({menu:{items:g(t)},trigger:["click"],overlayClassName:ln()("".concat(s,"-overlay"),o),placement:"bottomRight"},i),{},{children:n.children||(0,r.jsx)(_a.Z,{className:"".concat(s,"-moreIcon")})}))]})}var rr,ri=(0,b.Z)(rr||(rr=D()([`
  div.`,`-ellipsis-tip {
    margin-bottom: 0;
    color: unset;
    line-height: 1.5;
    font-size: unset;
  }
`])),function(n){return n.blPrefix}),Cs=null;function gt(n){var t=n.className,o=t===void 0?"":t,i=n.style,u=i===void 0?{}:i,s=n.children,v=n.rows,g=v===void 0?1:v,y=n.tooltip,B=y||s,P=(0,fn.getCommonConfig)(),C=P.blPrefix,M=ri();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(Ze.Z.Paragraph,{className:ln()("".concat(C,"-ellipsis-tip"),o),style:u,ellipsis:{rows:g,tooltip:B},children:s})]})}var oi=e(52677),ai=e.n(oi),ii=e(63349),Ee=e(45387),li=e(78210),or,ci=(0,b.Z)(or||(or=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ss=null,si=["tooltip"],ui=(0,f.forwardRef)(function(n,t){var o=n.labelMarginRight,i=o===void 0?void 0:o,u=(0,f.useRef)(null),s=(0,fn.getCommonConfig)(),v=s.blPrefix,g=ci();return(0,f.useImperativeHandle)(t,function(){return u.current}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(Ee.Z,a()(a()({},n),{},{className:ln()(n.className,"".concat(v,"-form"),i==="small"&&"".concat(v,"-form-label-margin-small")),ref:u,requiredMark:function(B,P){return(0,r.jsxs)(r.Fragment,{children:[B,P.required&&(0,r.jsx)("span",{className:"".concat(v,"-required-mark"),children:"*"})]})}}))]})}),di=function(t){var o=t.tooltip,i=Gn()(t,si),u=(0,r.jsx)(ii.Z,{});function s(){if(o){var v=ai()(o)==="object"&&!f.isValidElement(o)?a()(a()({},o),{},{icon:o.icon||u}):{title:o,icon:u};return v}}return(0,r.jsx)(Ee.Z.Item,a()(a()({},i),{},{tooltip:s(),labelCol:t.labelCol||(t.layout==="vertical"?{flex:"unset"}:void 0)}))},ar=di;ar.useStatus=li.Z.useStatus;var Ne=ui;Ne.Item=ar,Ne.List=Ee.Z.List,Ne.ErrorList=Ee.Z.ErrorList,Ne.Provider=Ee.Z.Provider,Ne.useForm=Ee.Z.useForm,Ne.useFormInstance=Ee.Z.useFormInstance,Ne.useWatch=Ee.Z.useWatch;var fi=Ne,ir,mi=(0,b.Z)(ir||(ir=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),js=null,xi=["footer","children","okText","hiddenCancel","hiddenOk","className","cancelText","okBtnProps","cancelBtnProps","hiddenFooter"];function lr(n){var t=mi(),o=n.footer,i=n.children,u=n.okText,s=u===void 0?Fn.Z.get({id:"pages.uiComponents.BizModal.Ok",dm:"\u786E\u5B9A"}):u,v=n.hiddenCancel,g=n.hiddenOk,y=n.className,B=n.cancelText,P=B===void 0?Fn.Z.get({id:"pages.uiComponents.BizModal.Cancel",dm:"\u53D6\u6D88"}):B,C=n.okBtnProps,M=C===void 0?{}:C,F=n.cancelBtnProps,T=F===void 0?{}:F,H=n.hiddenFooter,nn=H===void 0?!1:H,Z=Gn()(n,xi),k=(0,fn.getCommonConfig)(),en=k.blPrefix,rn=function(){if(nn)return null;var tn=(0,r.jsxs)(r.Fragment,{children:[!v&&(0,r.jsx)(Be,a()(a()({},T),{},{onClick:n.onCancel,children:P})),!g&&(0,r.jsx)(Be,a()(a()({},M),{},{type:"primary",onClick:n.onOk,children:s}))]});return tn};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(Je.Z,a()(a()({className:ln()("".concat(en,"-modalCon"),y,me()({},"".concat(en,"-hiddenFooter"),n.hiddenFooter))},Z),{},{footer:o||rn(),children:(0,r.jsx)("div",{className:"".concat(en,"-content"),children:i})}))]})}var cr=e(86738),sr,vi=(0,b.Z)(sr||(sr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Bs=null,gi=["cancelText","okText","className","title"];function pi(n){var t=vi(),o=n.cancelText,i=o===void 0?Fn.Z.get({id:"pages.uiComponents.BizPopConfirm.Cancel",dm:"\u53D6\u6D88"}):o,u=n.okText,s=u===void 0?Fn.Z.get({id:"pages.uiComponents.BizPopConfirm.Ok",dm:"\u786E\u5B9A"}):u,v=n.className,g=n.title,y=Gn()(n,gi),B=(0,fn.getCommonConfig)(),P=B.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(cr.Z,a()(a()({title:g,overlayClassName:ln()("".concat(P,"-popconfirm"),v,me()({},"".concat(P,"-popconfirm-no-title"),!n.title)),cancelText:i,okText:s,okButtonProps:{style:{width:"initial",fontSize:12}},cancelButtonProps:{style:{width:"initial",fontSize:12}}},y),{},{children:n.children}))]})}var ur,hi=(0,b.Z)(ur||(ur=D()([`
.`,`-alert {
  .`,`-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--`,`-color-text);
    }
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Es=null,dr,Pi=(0,b.Z)(dr||(dr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Fs=null,fr,yi=(0,b.Z)(fr||(fr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ns=null,mr,bi=(0,b.Z)(mr||(mr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ts=null,xr,Ci=(0,b.Z)(xr||(xr=D()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
.`,`-float-btn {
  box-shadow: var(--`,`-box-shadow);
  
  &.`,`-float-btn-default {
    border: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ls=null,vr,Si=(0,b.Z)(vr||(vr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),ks=null,gr,ji=(0,b.Z)(gr||(gr=D()([`
.`,`-message-notice-content {
  border: 1px solid var(--`,`-color-border-secondary);
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix}),Is=null,pr,Bi=(0,b.Z)(pr||(pr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ds=null,hr,Ei=(0,b.Z)(hr||(hr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Zs=null,Pr,Fi=(0,b.Z)(Pr||(Pr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Ms=null,yr,Ni=(0,b.Z)(yr||(yr=D()([`
.`,`-segmented {
  .`,`-segmented-item-selected {
    box-shadow: none;
  }
  
  .`,`-segmented-thumb {
    box-shadow: none !important;
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Os=null,br,Ti=(0,b.Z)(br||(br=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),As=null,Cr,Li=(0,b.Z)(Cr||(Cr=D()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),ws=null,Sr,ki=(0,b.Z)(Sr||(Sr=D()([`
.`,`-table-cell {
  border-radius: 0;
}
`])),function(n){return n.antPrefix}),Rs=null,jr,Ii=(0,b.Z)(jr||(jr=D()([`
.`,`-tooltip {
  .`,`-tooltip-inner {
    border: 1px solid var(--`,`-color-border-secondary);
    box-shadow: var(--`,`-box-shadow);
  }
}
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),zs=null,Br,Di=(0,b.Z)(Br||(Br=D()([`
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
`]))),Zi=function(){var t=Di(),o=hi(),i=Pi(),u=yi(),s=bi(),v=Ci(),g=Si(),y=ji(),B=Bi(),P=Ei(),C=Fi(),M=Ni(),F=Ti(),T=Li(),H=ki(),nn=Ii();return function(){return f.createElement(f.Fragment,null,f.createElement(t),f.createElement(o),f.createElement(i),f.createElement(u),f.createElement(s),f.createElement(v),f.createElement(g),f.createElement(y),f.createElement(B),f.createElement(P),f.createElement(C),f.createElement(M),f.createElement(F),f.createElement(T),f.createElement(H),f.createElement(nn))}},Ws=null,Er=e(9361),Oe=e(55839),Fr=e(36447),Mi=e(53124),Oi=e(66115),Ai=["prefix","prefixCls","iconfont","children"];function wi(){var n=Zi();return(0,r.jsx)(n,{})}var Nr={};function et(n){var t,o=n.prefix,i=o===void 0?"":o,u=n.prefixCls,s=u===void 0?"":u,v=n.iconfont,g=v===void 0?"https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js":v,y=n.children,B=y===void 0?void 0:y,P=Gn()(n,Ai),C=(0,f.useState)(!1),M=Rn()(C,2),F=M[0],T=M[1],H=(0,f.useState)(((t=n.locale)===null||t===void 0?void 0:t.locale)||"defaultKey"),nn=Rn()(H,2),Z=nn[0],k=nn[1],en=(0,fn.getCommonConfig)(),rn=en.antPrefix,cn=(0,f.useContext)(Mi.E_),tn=cn.theme,sn=(0,f.useMemo)(function(){return s||(i?"".concat(i,"-ant"):rn)},[s,i]),vn=(0,Oi.Z)(n.theme||Nr,tn||Nr,{prefixCls:sn}),dn=(0,f.useMemo)(function(){var gn=a()(a()({},vn),{},{algorithm:vn.darkMode?Er.Z.darkAlgorithm:void 0});return gn},[vn]);return(0,f.useLayoutEffect)(function(){var gn={antPrefix:sn,configProviderProps:a()(a()({},P),{},{prefixCls:sn}),iconfont:g};i.length&&(gn=a()(a()({},gn),{},{sparkPrefix:"".concat(i,"-").concat(fn.DEFAULT_SPARK_PREFIX),prefix:i}),console.log("debug","".concat(i,"-").concat(fn.DEFAULT_SPARK_PREFIX))),(0,fn.setCommonConfig)(a()(a()({},gn),{},{isDarkMode:function(){try{return(P.theme.algorithm||dn.algorithm)===Er.Z.darkAlgorithm}catch(An){return!1}}()})),T(!0),Te.ZP.config({top:24})},[]),(0,f.useLayoutEffect)(function(){Oe.ZP.config({holderRender:function(An){return(0,r.jsx)(Oe.ZP,a()(a()({},P),{},{prefixCls:sn,theme:dn,wave:{disabled:!0},children:(0,r.jsx)(Fr.Z,{className:ln()("spark"),style:a()({},n.style),children:An},Z)}))}})},[P,sn,F]),(0,f.useLayoutEffect)(function(){var gn,An;je.Z.updateLocale(((gn=n.locale)===null||gn===void 0?void 0:gn.locale)||"zh-cn"),k(((An=n.locale)===null||An===void 0?void 0:An.locale)||"defaultKey")},[n.locale]),(0,r.jsx)(Oe.ZP,a()(a()({},P),{},{theme:dn,prefixCls:sn,wave:{disabled:!0},children:(0,r.jsx)(Fr.Z,{className:ln()("spark",n.className),style:a()({},n.style),children:F?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(wi,{}),B]}):null},Z)}))}et.ConfigContext=Oe.ZP.ConfigContext,et.config=function(n){Oe.ZP.config(n)},et.useConfig=Oe.ZP.useConfig;var tt=et,Ri=e(63397),Tr,zi=(0,b.Z)(Tr||(Tr=D()([`
  .`,`-search {
    .`,`-input-prefix {
      color: var(--`,`-color-text-tertiary);
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),$s=null,Wi=["onSearch","value","onChange","className"],$i=13;function Ui(n){var t=n.onSearch,o=n.value,i=n.onChange,u=n.className,s=Gn()(n,Wi),v=(0,fn.getCommonConfig)(),g=v.blPrefix,y=Object.prototype.hasOwnProperty.call(n,"value"),B=(0,f.useRef)(),P=zi();function C(){var F=y?o:B.current.input.value;t==null||t(F||"")}function M(F){var T=window.event?F.keyCode:F.which;switch(T){case $i:F.shiftKey||(C(),F.cancelable=!0,F.preventDefault(),F.stopPropagation());break;default:break}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P,{}),(0,r.jsx)(tt,{theme:{components:{Input:{paddingInline:8,paddingBlock:4}}},children:(0,r.jsx)(Mt.Z,a()({ref:B,value:o,className:ln()(u,"".concat(g,"-search")),onChange:i,prefix:(0,r.jsx)(Ri.Z,{}),onPressEnter:M},s))})]})}var Hi=e(75949),Vi=e(37193),Ki=e(90127),Lr,Qi=(0,b.Z)(Lr||(Lr=D()([`
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
`])),function(n){return n.blPrefix}),Us=null,kr=function(n){var t=(0,fn.getCommonConfig)(),o=t.blPrefix,i=Qi();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(Ki.Z,{className:ln()(n.className,"".concat(o,"-loading-icon"))})]})},Ir,Gi=(0,b.Z)(Ir||(Ir=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Hs=null,Ji=["open","onDropdownVisibleChange"],Dr=function(t){var o=t.open,i=t.onDropdownVisibleChange,u=Gn()(t,Ji),s=(0,f.useState)(o),v=Rn()(s,2),g=v[0],y=v[1],B=(0,f.useState)(!1),P=Rn()(B,2),C=P[0],M=P[1],F=(0,fn.getCommonConfig)(),T=F.blPrefix,H=Gi();(0,f.useEffect)(function(){y(o)},[o]);var nn=function(en){if(i){i(en);return}y(en)},Z=(0,f.useMemo)(function(){return t.loading?(0,r.jsx)(kr,{}):t.showSearch&&C?(0,r.jsx)(Hi.Z,{className:ln()("".concat(T,"-icon"))}):(0,r.jsx)(Vi.Z,{className:ln()("".concat(T,"-icon"),me()({},"".concat(T,"-iconOpen"),g))})},[g,C,t.showSearch,t.loading]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{}),(0,r.jsx)(Re.default,a()(a()({},u),{},{onDropdownVisibleChange:nn,open:g,className:ln()(t.className,"".concat(T,"-select")),suffixIcon:Z,placeholder:t.placeholder||"select",onFocus:function(){return M(!0)},onBlur:function(){return M(!1)}}))]})};Dr.Option=Re.default.Option;var Zr=Dr,Xi=e(64572),Yi=e(78401),qi=e(18412),_i=e(61939),nl=e(70661),Mr,el=(0,b.Z)(Mr||(Mr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Vs=null,tl=["className","columns"];function rl(n){var t=n.className,o=t===void 0?"":t,i=n.columns,u=Gn()(n,tl),s=(0,fn.getCommonConfig)(),v=s.blPrefix,g=el(),y=(i||[]).map(function(B){return a()(a()({},B),{},{filterIcon:B.filterIcon||(0,r.jsx)(Xi.Z,{className:"".concat(v,"-filter-icon")}),sortIcon:B.sortIcon||function(P){var C=P.sortOrder,M=C==="ascend"?Yi.Z:C==="descend"?qi.Z:_i.Z;return(0,r.jsx)(M,{className:"".concat(v,"-sort-icon")})}})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(nl.Z,a()(a()({className:ln()("".concat(v,"-table"),o)},u),{},{columns:y}))]})}var ol=["mode"],al=function(n){var t=n.mode,o=t===void 0?"light":t,i=Gn()(n,ol);return(0,r.jsx)(Ge.Z,a()({mode:o},i))},il=e(8610),Or=e(82484),Ar,ll=(0,b.Z)(Ar||(Ar=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Ks=null,cl=["className","uploadHints","fileSizeLimit"],sl=function(t){var o=ll(),i=(0,fn.getCommonConfig)(),u=i.blPrefix,s=t.className,v=t.uploadHints,g=t.fileSizeLimit,y=Gn()(t,cl);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)(Or.Z.Dragger,a()(a()({},y),{},{withCredentials:!0,id:"upload_dragger",name:"files",listType:"text",className:ln()("".concat(u,"-uploader"),s),fileList:[],beforeUpload:function(){var B=be()(Qn()().mark(function P(C,M){var F,T,H,nn,Z;return Qn()().wrap(function(en){for(;;)switch(en.prev=en.next){case 0:if(!(C.size>(g||100)*1024*1024)){en.next=7;break}return H=g||100,We.Z.warning(Fn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheSizeOfASingle",dm:"\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7{tmpText}M"},{tmpText:H})),(T=t.beforeUpload)===null||T===void 0||T.call(t,C,M,!1),en.abrupt("return",Promise.reject());case 7:if(C.size!==0){en.next=11;break}return We.Z.warning(Fn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheFileSizeCannotBe",dm:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u4E3A0"})),(nn=t.beforeUpload)===null||nn===void 0||nn.call(t,C,M,!1),en.abrupt("return",Promise.reject());case 11:if(C.name.split(".")[0].trim().length!==0){en.next=15;break}return We.Z.warning(Fn.Z.get({id:"components.BLCompatibleComponents.BLUpload.TheFileNameCannotBe",dm:"\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A"})),(Z=t.beforeUpload)===null||Z===void 0||Z.call(t,C,M,!1),en.abrupt("return",Promise.reject());case 15:return en.abrupt("return",(F=t.beforeUpload)===null||F===void 0?void 0:F.call(t,C,M,!0));case 16:case"end":return en.stop()}},P)}));return function(P,C){return B.apply(this,arguments)}}(),children:[(0,r.jsxs)("p",{className:ln()("".concat(u,"-upload_drag_icon")),children:[(0,r.jsx)(il.Z,{style:{fontSize:20,opacity:t.disabled?.4:1}}),(0,r.jsx)("p",{className:"".concat(u,"-upload_text"),children:Fn.Z.get({id:"components.BLCompatibleComponents.BLUpload.ClickOrDragToUpload",dm:"\u70B9\u51FB\u6216\u62D6\u62FD\u4E0A\u4F20\u6587\u4EF6"})})]}),v==null?void 0:v.map(function(B,P){return(0,r.jsx)("p",{className:"".concat(u,"-upload_hint"),children:B},P)})]}))]})},wr=function(t){var o=t.children;return(0,r.jsx)(Or.Z,a()(a()({},t),{},{children:o}))};wr.Dragger=sl;var ul=wr,Rr,dl=(0,b.Z)(Rr||(Rr=D()([`
  .`,`-info-icon {
    color: var(--`,`-color-icon);
    margin-left: var(--`,`-margin-xxs);
    font-size: 14px;

    &.`,`-info-icon-no-margin {
      margin: 0;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),Qs=null;function fl(n){var t;(0,vt.X)();var o=dl(),i=n.content,u=n.children,s=n.className,v=n.iconFontProps,g=n.noMargin,y=n.popoverProps,B=(0,fn.getCommonConfig)(),P=B.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(nt,a()(a()({content:i,overlayInnerStyle:{maxWidth:376},trigger:"hover"},y),{},{children:u||(0,r.jsx)(En,a()({className:ln()("".concat(P,"-info-icon"),me()({},"".concat(P,"-info-icon-no-margin"),g),"".concat(P,"-cursor-pointer"),s),type:(t=v==null?void 0:v.type)!==null&&t!==void 0?t:"bl-icon-helpCircle-line"},v))}))]})}var Se=e(6881),zr,ml=(0,b.Z)(zr||(zr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Gs=null,xl=function(n){var t=n.id,o=n.iconStyle,i=n.iconClassName,u=(0,fn.getCommonConfig)(),s=u.blPrefix,v=ml();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(nt,{content:(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(En,{onClick:function(){(0,Se.JG)(t),We.Z.success(Fn.Z.get({id:"components.bailian.BLIdIcon.CopySuccessfully",dm:"\u590D\u5236\u6210\u529F\uFF01"}))},className:"".concat(s,"-copyBtn"),type:"icon-copy-line",isCursorPointer:!0})]}),trigger:["click","hover"],children:(0,r.jsx)(En,{className:ln()("".concat(s,"-idIcon"),i),type:"icon-ID-line",style:o})})]})},Wr,vl=(0,b.Z)(Wr||(Wr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),Js=null;function gl(n){var t=(0,fn.getCommonConfig)(),o=t.blPrefix,i=vl();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsxs)("div",{onMouseUp:function(){var s;return(s=n.onBlur)===null||s===void 0?void 0:s.call(n)},className:ln()("".concat(o,"-slider-selector"),n.className),children:[(0,r.jsx)(xt.Z,{disabled:n.disabled,onChange:n.onChange,value:n.value===null?void 0:n.value,min:n.min,max:n.max,step:n.step,marks:n.marks||me()(me()({},n.min,n.min),n.max,n.max),tooltip:{getPopupContainer:function(s){return s}}}),(0,r.jsx)(Ae.Z,{disabled:n.disabled,controls:!1,min:n.min,max:n.max,onBlur:function(){var s;return(s=n.onBlur)===null||s===void 0?void 0:s.call(n)},step:n.step,value:n.value,onChange:n.onChange,precision:n.precision})]})]})}var $r=e(66309),Ur,Hr=(0,b.Z)(Ur||(Ur=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),Xs=null,pl=["fill","type","size","noIcon","noBorder","noBackground","disabled","preset","color"],hl=["className","type","size","disabled"],Pl=["default-fill","error-fill","processing-fill","success-fill","warning-fill","docx","pdf","doc","txt","csv","xlsx","xls","pptx","ppt","md","jpg","jpeg","bmp","gif","png","html"],Wn=function(n){return n.Default="default",n.Error="error",n.Processing="processing",n.Success="success",n.Warning="warning",n.DefaultFill="default-fill",n.ErrorFill="error-fill",n.ProcessingFill="processing-fill",n.SuccessFill="success-fill",n.WarningFill="warning-fill",n.docx="docx",n.doc="doc",n.pdf="pdf",n.txt="txt",n.csv="csv",n.xls="xls",n.xlsx="xlsx",n.ppt="ppt",n.pptx="pptx",n.md="md",n.jpg="jpg",n.jpeg="jpeg",n.bmp="bmp",n.gif="gif",n.png="png",n.html="html",n}({}),yl=function(t,o){switch(t){case Wn.Default:return(0,r.jsx)(En,{type:"bl-icon-infoCircle-line"});case Wn.Error:return(0,r.jsx)(En,{type:"icon-errorCircle-line"});case Wn.Processing:return(0,r.jsx)(En,{type:"icon-loadingCircle-line",style:{color:"var(--".concat(o,"-color-info)")},spin:!0});case Wn.Success:return(0,r.jsx)(En,{type:"icon-checkCircle-line"});case Wn.Warning:return(0,r.jsx)(En,{type:"icon-warningCircle-line"});case Wn.DefaultFill:return(0,r.jsx)(En,{type:"icon-minusCircle-fill",style:{color:"var(--".concat(o,"-color-text-description)")}});case Wn.ErrorFill:return(0,r.jsx)(En,{type:"icon-errorCircle-fill",style:{color:"var(--".concat(o,"-color-error)")}});case Wn.ProcessingFill:return(0,r.jsx)(En,{type:"icon-loadingCircle-line",style:{color:"var(--".concat(o,"-color-info)")},spin:!0});case Wn.SuccessFill:return(0,r.jsx)(En,{type:"icon-checkCircle-fill",style:{color:"var(--".concat(o,"-color-success)")}});case Wn.WarningFill:return(0,r.jsx)(En,{type:"icon-warningCircle-fill",style:{color:"var(--".concat(o,"-color-warning)")}});case Wn.docx:return(0,r.jsx)(En,{type:"icon-fileWord-line",style:{color:"#0B83F1"}});case Wn.pdf:return(0,r.jsx)(En,{type:"icon-filePDF-line",style:{color:"#FF5C5C"}});case Wn.doc:return(0,r.jsx)(En,{type:"icon-fileWord-line",style:{color:"#0B83F1"}});case Wn.txt:return(0,r.jsx)(En,{type:"icon-fileTXT-line",style:{color:"#7C73FF"}});case Wn.csv:case Wn.xls:case Wn.xlsx:return(0,r.jsx)(En,{type:"icon-fileExcel-line",style:{color:"rgb(0, 168, 115)"}});case Wn.ppt:case Wn.pptx:return(0,r.jsx)(En,{type:"icon-filePPT-line",style:{color:"rgb(235, 102, 108)"}});case Wn.md:return(0,r.jsx)(En,{type:"icon-fileMD-line",style:{color:"rgb(234, 145, 66)"}});case Wn.jpg:return(0,r.jsx)(En,{type:"icon-fileJPG-line",style:{color:"rgb(234, 145, 66)"}});case Wn.jpeg:return(0,r.jsx)(En,{type:"icon-fileJPG-line",style:{color:"#8AB305"}});case Wn.bmp:return(0,r.jsx)(En,{type:"icon-fileBMP-line",style:{color:"#52C41A"}});case Wn.gif:return(0,r.jsx)(En,{type:"icon-fileGIF-line",style:{color:"#20C591"}});case Wn.png:return(0,r.jsx)(En,{type:"icon-filePNG-line",style:{color:"#00CEC9"}});case Wn.html:return(0,r.jsx)(En,{type:"bl-icon-fileHTML-line",style:{color:"#878AAB"}});default:return}},Vr=function(n){return n.Default="default",n.Error="error",n.Processing="processing",n.Success="success",n.Warning="warning",n}(Vr||{});function Kr(n){var t=n.fill,o=n.type,i=n.size,u=n.noIcon,s=n.noBorder,v=n.noBackground,g=n.disabled,y=n.preset,B=n.color,P=Gn()(n,pl),C=Hr(),M=(0,fn.getCommonConfig)(),F=M.antPrefix,T=M.blPrefix,H=function(){if(!u){if(n.icon)return n.icon;if(y)return yl(y.toLowerCase(),F)}},nn=function(){var k=a()({},n.style);switch(B){case"White":{k.color="var(--".concat(F,"-color-text-label)"),k.backgroundColor="var(--".concat(F,"-color-fill-alter)"),k.borderColor="var(--".concat(F,"-color-border)");break}case"Grey":{k.color="var(--".concat(F,"-color-text-description)"),k.backgroundColor="var(--".concat(F,"-color-fill-quaternary)"),k.borderColor="var(--".concat(F,"-color-border)");break}case"Blue":{k.color="var(--".concat(F,"-color-info)"),k.backgroundColor="#EFFAFF",k.borderColor="#A9DEFF";break}case"LakeCyan":{k.color="#00CEC9",k.backgroundColor="#E6FFFA",k.borderColor="#80F7E3";break}case"GeekBlue":{k.color="#1C54E3",k.backgroundColor="#EBF4FF",k.borderColor="#AACBFF";break}case"Green":{k.color="#52C41A",k.backgroundColor="#F6FFED",k.borderColor="#C0F19A";break}case"Lime":{k.color="#8AB305",k.backgroundColor="#FEFFE6",k.borderColor="#E5F178";break}case"Orange":{k.color="#FA8125",k.backgroundColor="#FFF9F0",k.borderColor="#FFD3A1";break}case"BluePurple":{k.color="#624AFF",k.backgroundColor="#F6F5FF",k.borderColor="#CBC8FF";break}case"LakeBlue":{k.color="#2EB6DF",k.backgroundColor="#F0FEFF",k.borderColor="#A5F2FF";break}case"Purple":{k.color="#7347FF",k.backgroundColor="#F6F0FF",k.borderColor="#DBCAFF";break}}return s&&(k.borderColor="transparent"),v&&(k.backgroundColor="transparent"),k};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)($r.Z,a()(a()({},P),{},{icon:H(),className:ln()("".concat(T,"-Tag"),(Pl.includes((y||"").toLowerCase())||t)&&"".concat(T,"-Tag-fill"),n.type&&"".concat(T,"-").concat(o),n.size&&"".concat(T,"-").concat(i),y&&"".concat(T,"-").concat(y),g&&"".concat(T,"-disabled"),n.className),style:nn(),color:n.color||(y?Vr[y]:void 0),onClick:function(k){var en;g||(en=n.onClick)===null||en===void 0||en.call(n,k)}}))]})}function bl(n){var t=n.className,o=n.type,i=n.size,u=n.disabled,s=Gn()(n,hl),v=(0,fn.getCommonConfig)(),g=v.blPrefix,y=Hr();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsxs)($r.Z.CheckableTag,a()(a()({},s),{},{className:ln()("".concat(g,"-Tag"),"".concat(g,"-").concat(o),"".concat(g,"-").concat(i),u&&"".concat(g,"-disabled"),n.icon&&"".concat(g,"-with-icon"),t),onClick:function(P){var C;if(u){P.preventDefault();return}(C=n.onClick)===null||C===void 0||C.call(n,P)},onChange:function(P){var C;u||(C=n.onChange)===null||C===void 0||C.call(n,P)},children:[n.icon&&(0,r.jsx)("span",{className:"".concat(g,"-tag-checkable-icon"),children:n.icon}),n.children]}))]})}Kr.CheckableTag=bl;var Cl=Kr,Sl=e(42075),jl=e(96074),Qr=e(13445),Bl=e(29732),Gr=e(92344),Jr,El=(0,b.Z)(Jr||(Jr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix}),Ys=null,Xr=4;function Fl(n){var t=n.className,o=t===void 0?"":t,i=n.items,u=(0,fn.getCommonConfig)(),s=u.blPrefix,v=El(),g=(0,Qr.Z)((0,Bl.Z)(i),function(F){return!F.isHide});function y(){var F=g.length<=Xr?g.length:Xr-1,T=g.slice(0,F),H=g.slice(F);return(0,r.jsxs)(r.Fragment,{children:[B(T),P(H)]})}function B(F){return(0,r.jsx)(r.Fragment,{children:F.map(function(T){return(0,r.jsx)(f.Fragment,{children:C(T,{isAddOnClick:!T.popconfirmProps,isShowTooltip:!0})},T.key)})})}function P(F){if(F.length===0)return;var T=F.map(function(Z){return{label:C(Z,{isShowTooltip:!1}),key:Z.key,disabled:Z.disabled||M(Z),title:Z.disabled?Z.disabledTooltip:void 0}}),H=(0,Gr.Z)(F,function(Z,k){return Z[k.key]=k,Z},{});return(0,r.jsx)(Qe.Z,{className:"".concat(s,"-more-btn-dropdown"),menu:{items:T,onClick:nn},children:(0,r.jsx)("span",{className:"".concat(s,"-more-btn-text"),children:Fn.Z.get({id:"bailianUi.components.BLActions.More",dm:"\u66F4\u591A"})})});function nn(Z){var k=Z.key,en=H[k],rn=en.popconfirmProps,cn=en.onClick;rn||cn()}}function C(F){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},H=T.isAddOnClick,nn=H===void 0?!1:H,Z=T.isShowTooltip,k=Z===void 0?!1:Z,en=(0,r.jsx)(Ze.Z.Link,{className:F.className,disabled:F.disabled||M(F),onClick:nn?F.onClick:void 0,children:F.label}),rn=k?(0,r.jsx)(Ge.Z,{title:F.disabled&&F.disabledTooltip,children:en},F.key):en,cn=F.popconfirmProps?(0,r.jsx)(cr.Z,a()(a()({},F.popconfirmProps),{},{onConfirm:F.onClick,children:rn}),F.key):rn;return cn}function M(F){var T,H=((T=window.ALIYUN_CONSOLE_CONFIG)===null||T===void 0||(T=T.FEATURE_STATUS)===null||T===void 0?void 0:T.disableDangerOperation)&&F.isDangerOperation;return H}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(Sl.Z,{className:ln()("".concat(s,"-actions-column"),o),split:(0,r.jsx)(jl.Z,{type:"vertical"}),size:0,wrap:!0,children:y()})]})}var Nl=e(92783),Tl=e(30291),Yr,Ll=(0,b.Z)(Yr||(Yr=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),qs=null,kl=["header","logo","onBack"];function qr(n){var t=n.header,o=n.tabProps,i=o===void 0?{}:o,u=n.tabLeft,s=n.tabRight,v=n.segmentedProps,g=v===void 0?{}:v,y=n.tabs,B=n.activeKey,P=n.onChangeActiveKey,C=(0,vt.X)(),M=Ll(),F=(0,fn.getCommonConfig)(),T=F.blPrefix,H="".concat(T,"-app-layout"),nn=(0,f.useMemo)(function(){return Object.assign({},{options:y.map(function(k){return{label:k.label,value:k.key}})},g)},[g,y]),Z=(0,f.useMemo)(function(){return Object.assign({},{items:y},i)},[i,y]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(M,{}),(0,r.jsxs)($e.Z,{vertical:!0,className:H,children:[(0,r.jsx)("div",{className:"".concat(H,"-header"),children:t}),(0,r.jsxs)("div",{className:"".concat(H,"-content"),children:[(0,r.jsxs)($e.Z,{gap:16,justify:"space-between",className:"".concat(H,"-tab-bar"),children:[u||(0,r.jsx)("span",{className:"".concat(H,"-tab-right-placeholder")}),(0,r.jsx)(Nl.Z,a()({onChange:P,value:B},nn)),s||(0,r.jsx)("span",{className:"".concat(H,"-tab-left-placeholder")})]}),(0,r.jsx)(Ht.Z,a()({activeKey:B,className:"".concat(H,"-tab"),renderTabBar:function(){return(0,r.jsx)(r.Fragment,{})},animated:!0},Z))]})]})]})}function Il(n){var t=n.header,o=n.logo,i=n.onBack,u=Gn()(n,kl),s=(0,fn.getCommonConfig)(),v=s.blPrefix,g=(0,f.useRef)(null),y="".concat(v,"-app-layout-pro"),B=function(){location.hash="#/app-market"};return(0,r.jsx)("div",{ref:g,className:y,children:(0,r.jsx)(qr,a()({header:(0,r.jsx)(Tl.Z,{target:function(){return g.current},offsetTop:0,children:(0,r.jsxs)($e.Z,{className:"".concat(y,"-header"),gap:16,children:[(0,r.jsx)(Jt.Z,{size:32,className:"".concat(y,"-back-btn ").concat(v,"-cursor-pointer"),onClick:i||B}),(0,r.jsx)("img",{className:"".concat(y,"-logo"),src:o,alt:""}),t]})})},u))})}var _r,Dl=(0,b.Z)(_r||(_r=D()([`
  .`,`-commonFeeds {
    display: grid;
    
    .`,`-feedsItem {
      min-height: 10px;
    }
  }
`])),function(n){return n.blPrefix},function(n){return n.blPrefix}),_s=null,Zl=function(t){var o=(0,fn.getCommonConfig)(),i=o.blPrefix,u=Dl(),s=t.columns,v=s===void 0?4:s,g=t.gap,y=g===void 0?16:g,B=t.dataSource,P=B===void 0?[]:B,C=t.itemRender,M=t.autoRows,F=M===void 0?4:M;return P.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:ln()("".concat(i,"-commonFeeds")),style:{gridTemplateColumns:"repeat(".concat(v,", 1fr)"),gridColumnGap:"".concat(y,"px"),gridAutoRows:"".concat(F,"px")},children:P.map(function(T,H){return(0,r.jsx)("div",{className:"".concat(i,"-feedsItem"),style:{gridRowEnd:"span ".concat(Math.ceil((T.height||T.data.height)/F)+y/F)},children:(0,r.jsx)("div",{style:{height:"".concat(T.height||T.data.height,"px")},children:C(T,H)})},"".concat(H,"-").concat(T.height||T.data.height))})})]}):null},Ml=Zl,Ol=e(19474),no,Al=(0,b.Z)(no||(no=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),nu=null,wl=["src","width","height","vagueUrl","imageStyle","onLoad"],Rl=function(t){var o=(0,fn.getCommonConfig)(),i=o.blPrefix,u=Al(),s=t.src,v=t.width,g=v===void 0?"100%":v,y=t.height,B=y===void 0?100:y,P=t.vagueUrl,C=t.imageStyle,M=C===void 0?{}:C,F=t.onLoad,T=Gn()(t,wl),H=(0,f.useState)(!0),nn=Rn()(H,2),Z=nn[0],k=nn[1],en=(0,f.useState)(!1),rn=Rn()(en,2),cn=rn[0],tn=rn[1],sn=(0,f.useState)(!1),vn=Rn()(sn,2),dn=vn[0],gn=vn[1],An=(0,f.useRef)(!1),Xn=(0,f.useRef)(null),Pn=(0,Ol.Z)(Xn),$n=Rn()(Pn,1),ae=$n[0],mn=a()({width:g,height:B},M);return(0,f.useEffect)(function(){if(dn){if(s){var hn=new Image;hn.src=s,P&&setTimeout(function(){tn(!0)},500),hn.onload=function(){k(!1),tn(!1),F==null||F(!0)}}return function(){k(!0),tn(!1)}}},[s,dn]),(0,f.useEffect)(function(){if(ae){if(An.current)return;An.current=!0,gn(!0)}},[ae]),s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",a()(a()({className:"".concat(i,"-imgLoader"),id:"img-loader",style:{height:B,borderRadius:"".concat(mn.borderRadius||0,"px")},ref:Xn},T),{},{children:[(0,r.jsx)("div",{className:ln()("imgCou",{slideIn:Z,slideOut:!Z}),style:{height:B},children:(0,r.jsx)(ze.Z.Node,{active:!0})}),dn?(0,r.jsxs)(r.Fragment,{children:[P?(0,r.jsx)("div",{className:ln()("imgCou",{slideIn:Z&&cn,slideOut:!cn}),children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:P,type:"image/webp"}),(0,r.jsx)("img",{src:P,alt:"",className:"loaderImg",style:mn})]})}):null,(0,r.jsx)("div",{className:ln()("imgCou",{slideIn:!Z,slideOut:Z}),children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:s,type:"image/webp"}),(0,r.jsx)("img",{src:s,alt:"",className:"loaderImg",style:mn})]})})]}):null]}))]}):null},zl=Rl,Wl=e(27417),$l=e(94125),Ul=e(39747),Hl=e(36482),Vl=e(86125),eo,Kl=(0,b.Z)(eo||(eo=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),eu=null,Ql=function(t){var o=(0,fn.getCommonConfig)(),i=o.blPrefix,u=Kl();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:ln()("".concat(i,"-customSlider")),children:(0,r.jsx)(Vl.Z,a()(a()({},t),{},{tooltip:{open:!1}}))})]})},Gl=Ql,to,Jl=(0,b.Z)(to||(to=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),tu=null,Xl="https://img.alicdn.com/imgextra/i2/O1CN01ATn56X1MUCB0UBrp0_!!6000000001437-55-tps-200-200.svg",Yl="https://img.alicdn.com/imgextra/i3/O1CN01XYowFw1vV7WpkBcPN_!!6000000006177-55-tps-200-200.svg",ro=function(){return{duration:0,currentTime:0,isPlaying:!1,isMuted:!1,isFullScreen:!1}},ql=(0,f.forwardRef)(function(n,t){var o=Jl(),i=(0,fn.getCommonConfig)(),u=i.blPrefix,s=n.videoUrl,v=n.width,g=v===void 0?"100%":v,y=n.height,B=y===void 0?100:y,P=n.controls,C=P===void 0?!0:P,M=n.controlsTools,F=M===void 0?{playBtn:!0,time:!0,slider:!0,voiceBtn:!0,expandBtn:!0}:M,T=n.videoProps,H=T===void 0?{}:T,nn=n.skeleton,Z=nn===void 0?!0:nn,k=n.className,en=n.style,rn=n.clickEvent,cn=n.videoClickable,tn=cn===void 0?!1:cn,sn=n.viewportLoad,vn=sn===void 0?!1:sn,dn=n.notViewportAutoPause,gn=dn===void 0?!1:dn,An=n.viewportAutoPlay,Xn=An===void 0?!1:An;H.controls=!1;var Pn=(0,f.useRef)(null),$n=(0,f.useState)(ro()),ae=Rn()($n,2),mn=ae[0],hn=ae[1],ee=(0,f.useState)(!1),te=Rn()(ee,2),Cn=te[0],Q=te[1];(0,f.useEffect)(function(){if(s)return requestAnimationFrame(function(){on()}),function(){var wn;(wn=Pn.current)===null||wn===void 0||wn.pause(),Pn.current=null,Q(!1)}},[s]),(0,f.useEffect)(function(){var wn=function(Tn){var Vn=Tn.keyCode;if(Vn===27){if(!mn.isFullScreen)return;hn(function(ce){return a()(a()({},ce),{},{isFullScreen:!1})})}};return document.body.addEventListener("keydown",wn),function(){document.body.removeEventListener("keydown",wn)}},[mn.isFullScreen]);var on=function(){var Mn;Pn.current&&(hn(ro()),Pn.current.addEventListener("loadedmetadata",function(){var Tn,Vn=(Tn=Pn.current)===null||Tn===void 0?void 0:Tn.duration;hn(function(ce){return a()(a()({},ce),{},{duration:Vn})}),(0,Se.G6)()&&(Pn.current.currentTime=1)}),Pn.current.addEventListener("canplay",function(){Q(!0)}),Pn.current.addEventListener("play",function(){hn(function(Tn){return a()(a()({},Tn),{},{isPlaying:!0})})}),Pn.current.addEventListener("playing",function(){hn(function(Tn){return a()(a()({},Tn),{},{isPlaying:!0})})}),(Mn=Pn.current)===null||Mn===void 0||Mn.addEventListener("pause",function(){hn(function(Tn){return a()(a()({},Tn),{},{isPlaying:!1})})}),Pn.current.addEventListener("timeupdate",function(){var Tn,Vn=((Tn=Pn.current)===null||Tn===void 0?void 0:Tn.currentTime)||0;hn(function(ce){return Vn>=ce.duration&&(ce.isPlaying=!1),a()(a()({},ce),{},{currentTime:Vn})})}),Pn.current.addEventListener("ended",function(){hn(function(Tn){var Vn;return a()(a()({},Tn),{},{isPlaying:!1,currentTime:((Vn=Pn.current)===null||Vn===void 0?void 0:Vn.currentTime)||0})})}))},ue=function(){if(mn.isPlaying){var Mn;(Mn=Pn.current)===null||Mn===void 0||Mn.pause()}else{var Tn;(Tn=Pn.current)===null||Tn===void 0||Tn.play()}};(0,f.useImperativeHandle)(t,function(){return{video:Pn.current,videoInfo:mn}}),(0,f.useEffect)(function(){if(H.preload==="none"&&s&&!document.head.querySelector('link[href="'.concat(s,'"]'))){var wn=document.createElement("link");wn.rel="preload",wn.href=s,wn.as="video",document.head.appendChild(wn)}},[H.preload,s]),(0,f.useEffect)(function(){if(!(!gn&&!Xn&&!vn)){var wn=new IntersectionObserver(function(Mn){Mn.forEach(function(Tn){if(Tn.isIntersecting){var Vn,ce;vn&&((Vn=Pn.current)===null||Vn===void 0||Vn.load()),Xn&&((ce=Pn.current)===null||ce===void 0||ce.play())}else{var Fe;gn&&((Fe=Pn.current)===null||Fe===void 0||Fe.pause())}})},{root:null,rootMargin:"0px",threshold:.1});return wn.observe(Pn.current),function(){wn.disconnect()}}},[gn,Xn]);var xe=(0,f.useMemo)(function(){return!F.playBtn&&!F.time&&!F.slider&&!F.voiceBtn&&!F.expandBtn},[F]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{className:ln()("".concat(u,"-videoCou"),{fullScreen:mn.isFullScreen},k),style:en,onClick:function(){tn&&ue(),rn==null||rn()},children:[(0,r.jsx)("video",a()(a()({ref:Pn},H),{},{style:{width:mn.isFullScreen?"100vw":g,height:mn.isFullScreen?"100vh":B,objectFit:mn.isFullScreen?"contain":"cover"},width:mn.isFullScreen?"100vw":g,height:mn.isFullScreen?"100vh":B,children:(0,r.jsx)("source",{src:s,type:"video/mp4"})})),Z&&!Cn&&(0,r.jsx)("div",{className:"skeleton",style:{height:B},children:(0,r.jsx)(ze.Z.Node,{active:!0})}),C&&!xe?(0,r.jsxs)("div",{className:ln()("controlLine",{controlLineHover:C==="auto"&&mn.isPlaying}),onClick:function(Mn){return Mn.stopPropagation()},children:[F.playBtn?(0,r.jsx)("div",{className:ln()("playIcon","icon"),onClick:function(){if(mn.isPlaying){var Mn;(Mn=Pn.current)===null||Mn===void 0||Mn.pause()}else{var Tn;(Tn=Pn.current)===null||Tn===void 0||Tn.play()}hn(function(Vn){return a()(a()({},Vn),{},{isPlaying:!mn.isPlaying})})},children:mn.isPlaying?(0,r.jsx)(Wl.Z,{}):(0,r.jsx)($l.Z,{})}):null,F.time?(0,r.jsxs)("div",{className:"timeCou",children:[(0,r.jsx)("div",{className:"time",children:(0,Se.qp)(mn.currentTime)}),(0,r.jsx)("div",{className:"line",children:"/"}),(0,r.jsx)("div",{className:"time",children:(0,Se.qp)(mn.duration)})]}):null,F.slider?(0,r.jsx)("div",{className:"slide",children:(0,r.jsx)(Gl,{max:Math.floor(mn.duration),min:0,step:1,value:Math.floor(mn.currentTime),onChange:function(Mn){hn(function(Tn){return a()(a()({},Tn),{},{currentTime:Mn})}),Pn.current.currentTime=Mn},className:ln()("slider")})}):null,F.voiceBtn?(0,r.jsx)("img",{onClick:function(){Pn.current.muted=!mn.isMuted,hn(function(Mn){return a()(a()({},Mn),{},{isMuted:!mn.isMuted})})},src:mn.isMuted?Yl:Xl,alt:"",className:ln()("videoIcon","icon")}):null,F.expandBtn?(0,r.jsx)("div",{className:ln()("fullIcon","icon"),onClick:function(){hn(function(Mn){return a()(a()({},Mn),{},{isFullScreen:!mn.isFullScreen})})},children:mn.isFullScreen?(0,r.jsx)(Ul.Z,{}):(0,r.jsx)(Hl.Z,{})}):null]}):null]})]})}),_l=ql,nc=e(90612),oo,ec=(0,b.Z)(oo||(oo=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),ru=null;function ao(n){var t,o,i,u=(0,f.useState)(!1),s=Rn()(u,2),v=s[0],g=s[1],y=(0,f.useState)(0),B=Rn()(y,2),P=B[0],C=B[1],M=(0,f.useRef)(null),F=(0,fn.getCommonConfig)(),T=F.blPrefix,H=ec(),nn=function(cn){if(cn!=null&&cn.length)return(0,r.jsx)("div",{className:"".concat(T,"-steps-wrapper"),children:cn.map(function(tn,sn){return(0,r.jsxs)("div",{className:"".concat(T,"-step"),children:[(0,r.jsx)("div",{className:"".concat(T,"-index"),children:sn+1}),(0,r.jsxs)("div",{className:"".concat(T,"-content"),children:[(0,r.jsx)("p",{className:"".concat(T,"-title"),children:tn.title}),(0,r.jsx)(Ze.Z.Paragraph,{className:"".concat(T,"-desc"),ellipsis:{rows:4,tooltip:(0,Se.rb)(tn.desc||"")},children:tn.desc}),tn.action]})]},sn)})})};function Z(){if(M.current){var rn=Array.from(M.current.querySelectorAll(".".concat(T,"-upper-area, .").concat(T,"-lower-area"))).reduce(function(cn,tn){return cn+tn.offsetHeight},0);M.current.style.height="".concat(rn,"px")}}var k=function(cn){return cn.steps?nn(cn.steps):cn.children},en=function(){return!n.tabs||!v?null:n.tabs.length===1?(0,r.jsx)("div",{className:ln()("".concat(T,"-lower-area"),n.lowerCls),style:n.lowerStyle,children:n.tabs[0].steps?nn(n.tabs[0].steps):n.tabs[0].children}):(0,r.jsxs)("div",{className:ln()("".concat(T,"-lower-area"),n.lowerCls),style:n.lowerStyle,children:[(0,r.jsx)(we.ZP.Group,{optionType:"button",options:n.tabs.map(function(cn,tn){return{label:cn.title,value:tn}}),onChange:function(tn){var sn=tn.target.value;C(sn)},value:P,size:"small"}),k(n.tabs[P])]})};return(0,f.useLayoutEffect)(function(){var rn=new MutationObserver(Z);return M.current&&rn.observe(M.current,{childList:!0,subtree:!0}),function(){rn&&rn.disconnect()}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{}),(0,r.jsxs)("div",{className:ln()("".concat(T,"-container"),n.className),style:n.style,ref:M,children:[(0,r.jsx)("div",{className:ln()("".concat(T,"-upper-background")),style:{background:n.upperBackground}}),(0,r.jsxs)("div",{className:ln()("".concat(T,"-upper-area"),n.upperCls),style:n.upperStyle,children:[(0,r.jsx)("div",{className:"".concat(T,"-logoIcon-wrapper"),children:n.logo||(0,r.jsx)("img",{className:"".concat(T,"-logoIcon"),src:n.logoIcon,alt:""})}),(0,r.jsxs)("dl",{style:{flex:1},children:[(0,r.jsx)("dt",{children:n.title}),(0,r.jsx)(Ze.Z.Paragraph,{className:"".concat(T,"-desc"),style:{},ellipsis:{rows:2,tooltip:(0,Se.rb)(n.desc||"")},children:n.desc})]})]}),en(),n.checkListTrigger&&(0,r.jsx)("div",{className:"".concat(T,"-check-list-trigger"),children:(0,Se.kK)(n.checkListTrigger)?n.checkListTrigger:(0,r.jsx)(Be,{iconType:"icon-tips-line",size:"small",type:"text",onClick:(t=n.checkListTrigger)===null||t===void 0?void 0:t.onClick,children:(o=n.checkListTrigger)===null||o===void 0?void 0:o.text})}),((i=n.tabs)===null||i===void 0?void 0:i.length)&&(0,r.jsx)(En,{onClick:function(){return g(function(cn){return!cn})},className:"".concat(T,"-expand-btn"),type:v?"icon-collapse-line":"icon-expand-line"})]})]})}var tc={sfm_training_public:"sfm_training_public_cn",sfm_deployment_public:"sfm_deployment_public_cn",sfm_inference_public:"sfm_inference_public_cn"},rc={sfm_training_public:"sfm_trainingglobal_public_intl",sfm_deployment_public:"sfm_deploymentglobal_public_intl",sfm_inference_public:"sfm_inferenceglobal_public_intl"},rt=function(t){return(0,Se.DI)()?rc[t]:tc[t]},io,oc=(0,b.Z)(io||(io=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix}),ou=null;function lo(n){var t,o=n.serviceList,i=n.data,u=oc(),s=(0,fn.getCommonConfig)(),v=s.blPrefix,g=(0,f.useState)({inference:!0,ft:!0,deploy:!0}),y=Rn()(g,2),B=y[0],P=y[1],C=(0,f.useMemo)(function(){var F={};return o.forEach(function(T){switch(T.code){case rt("sfm_training_public"):F.buyModelFt=T.isBuy;break;case rt("sfm_deployment_public"):F.buyModelDeploy=T.isBuy;break;case rt("sfm_inference_public"):F.buyModelInterface=T.isBuy;break}}),F},[o]);(0,f.useEffect)(function(){var F=a()({},B);F.inference=i.supportInference,F.ft=i.supportFt,F.deploy=i.supportIndependentDeploy,P(F)},[i,C]);var M=function(T,H){return String(T)===""||String(T)==="0"?(0,r.jsx)("span",{className:"".concat(v,"-size"),children:Fn.Z.get({id:"pages.components.ModelDetailDrawer.LimitedTimeFree",dm:"\u9650\u65F6\u514D\u8D39"})}):T===void 0?(0,r.jsx)("span",{children:Fn.Z.get({id:"pages.components.ModelDetailDrawer.Updating",dm:"\u66F4\u65B0\u4E2D"})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"".concat(v,"-count"),children:T}),(0,r.jsxs)("span",{className:"".concat(v,"-size"),children:["/",H]})]})};return!B.inference&&!B.ft&&!B.deploy?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"".concat(v,"-model-price-con"),children:[B.inference&&(0,r.jsxs)(r.Fragment,{children:[i.inferenceInputTokenPriceDigits===void 0?null:(0,r.jsxs)("div",{children:[(0,r.jsx)(En,{className:"".concat(v,"-feeCon"),type:"icon-tag-line"}),Fn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCallInput",dm:"\u6A21\u578B\u8C03\u7528-\u8F93\u5165"}),(0,r.jsx)("span",{className:"".concat(v,"-price"),children:M(i.inferenceInputTokenPriceDigits,i.inferenceInputTokenPriceUnit)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(En,{className:"".concat(v,"-feeCon"),type:"icon-tag-line"}),i.inferenceInputTokenPriceDigits===void 0||i.inferenceOutputTokenPriceDigits===void 0?Fn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCall",dm:"\u6A21\u578B\u8C03\u7528"}):Fn.Z.get({id:"pages.components.ModelDetailDrawer.ModelCallOutput",dm:"\u6A21\u578B\u8C03\u7528-\u8F93\u51FA"}),(t=i.modelExt)!==null&&t!==void 0&&t.priceUrl?(0,r.jsx)("a",{href:i.modelExt.priceUrl,target:"_blank",rel:"noreferrer",children:Fn.Z.get({id:"pages.components.ModelDetailDrawer.ViewDetails",dm:"\u67E5\u770B\u8BE6\u60C5"})}):(0,r.jsx)("span",{className:"".concat(v,"-price"),children:M(i.inferenceOutputTokenPriceDigits,i.inferenceOutputTokenPriceUnit)})]})]}),B.ft&&(0,r.jsxs)("div",{children:[(0,r.jsx)(En,{className:"".concat(v,"-feeCon"),type:"icon-tag-line"}),Fn.Z.get({id:"pages.components.ModelDetailDrawer.ModelTraining",dm:"\u6A21\u578B\u8BAD\u7EC3"}),(0,r.jsx)("span",{className:"".concat(v,"-price"),children:M(i.trainPriceDigits,i.trainPriceUnit)})]}),B.deploy&&(0,r.jsxs)("div",{children:[(0,r.jsx)(En,{className:"".concat(v,"-feeCon"),type:"icon-tag-line"}),Fn.Z.get({id:"pages.components.ModelDetailDrawer.ModelDeploymentPayAsYou",dm:"\u6A21\u578B\u90E8\u7F72-\u540E\u4ED8\u8D39"}),(0,r.jsxs)("span",{className:"".concat(v,"-price"),children:[(0,r.jsx)("span",{className:"".concat(v,"-count"),children:Fn.Z.get({id:"pages.components.ModelDetailDrawer.Yuan.1",dm:"20\u5143"})}),(0,r.jsx)("span",{className:"".concat(v,"-size"),children:Fn.Z.get({id:"pages.components.ModelDetailDrawer.CalculationForceUnitHour",dm:"/\u7B97\u529B\u5355\u5143/\u5C0F\u65F6"})}),"\uFF08",i.postDeployPriceDigits?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"".concat(v,"-count"),children:i.postDeployPriceDigits}),(0,r.jsx)("span",{className:"".concat(v,"-size"),children:i.postDeployPriceUnit})]}):Fn.Z.get({id:"pages.components.ModelDetailDrawer.TheRequiredCalculationForceUnit",dm:"\u6240\u9700\u7B97\u529B\u5355\u5143\u4EE5\u6587\u6863\u4E3A\u51C6"}),"\uFF09"]})]})]})]})}var ac=e(20745),ke={show:function(t,o){var i=(0,fn.getCommonConfig)(),u=i.prefix,s=i.antPrefix,v=i.configProviderProps,g=document.querySelector("div[role=".concat(u,"-static").concat(o?"-".concat(o):"","]"));g&&g.parentElement.removeChild(g);var y=document.createElement("div");y.setAttribute("role","".concat(u,"-static").concat(o?"-".concat(o):""));var B=document.querySelector(".spark")||document.body;B.appendChild(y);var P=ac.createRoot(y);P.render((0,r.jsx)(tt,a()(a()({prefix:u,prefixCls:s},v),{},{children:t}))),y.root=P},hide:function(t){var o=(0,fn.getCommonConfig)(),i=o.prefix,u=i===void 0?"":i,s=document.querySelector("div[role=".concat(u,"-static").concat(t?"-".concat(t):"","]"));if(s){var v=s.root;v&&v.unmount(),s.parentElement.removeChild(s)}}},ic=e(96638),co,lc=(0,b.Z)(co||(co=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),au=null,cc=function(n){var t=lc(),o=(0,fn.getCommonConfig)(),i=o.blPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),(0,r.jsx)(lr,a()(a()({open:!0,width:462,hiddenFooter:!0,closeIcon:(0,r.jsx)(r.Fragment,{}),maskClosable:!1},n),{},{children:(0,r.jsxs)("div",{className:"".concat(i,"-buy-loading-modal-content"),children:[(0,r.jsx)("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN011LoItR1oCc8YALC6M_!!6000000005189-54-tps-264-264.apng",alt:""}),(0,r.jsx)("div",{className:"".concat(i,"-title"),children:n.title}),(0,r.jsx)(Ke.Z,{strokeColor:"#624AFF",trailColor:"#E7E8EE",showInfo:!1,className:"".concat(i,"-progress"),percent:n.percent})]})}))]})},so,uo=(0,b.Z)(so||(so=D()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix}),iu=null,sc={show:function(t){ke.show((0,r.jsx)(fc,{handleOk:t.handleOk,onSuccess:t.onSuccess,onClose:function(){ke.hide(t.id)},id:t.id,serviceName:t.serviceName,roleName:t.roleName,policyName:t.policyName,desc:t.desc,tips:t.tips,checkBox:t.checkBox,title:t.title}),t.id)},hide:function(t){ke.hide(t.id)}},uc={show:function(t){var o=t.authFailedMsg,i=t.id;ke.show((0,r.jsx)(dc,{onClose:function(){ke.hide(i)},authFailedMsg:o,id:t.id,serviceName:t.serviceName,roleName:t.roleName}),i)},hide:function(t){var o=t.id;ke.hide(o)}},dc=function(t){var o,i=uo(),u=(0,fn.getCommonConfig)(),s=u.prefix,v=u.sparkPrefix,g=v===void 0?"":v,y=t.onClose,B=t.authFailedMsg,P=t.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(Je.Z,{zIndex:1e4,onCancel:function(){return y()},open:!0,title:(0,r.jsxs)("div",{className:"".concat(g,"-auth-failed-modal-title"),children:[(0,r.jsx)(En,{type:"icon-warningCircle-fill"}),(0,r.jsx)("span",{className:"".concat(g,"-auth-failed-modal-title-text"),children:Fn.Z.get({id:"components.bailian.BLSLRModal.AuthorizationFailed",dm:"\u6388\u6743\u5931\u8D25"})})]}),width:690,getContainer:function(){return document.querySelector("div[role=".concat(s,"-static").concat(P?"-".concat(P):"","]"))||void 0},children:(0,r.jsxs)("div",{className:"".concat(g,"-auth-failed-modal-content"),children:[(0,r.jsx)("div",{className:"".concat(g,"-auth-modal-tips"),children:B||Fn.Z.get({id:"components.bailian.BLSLRModal.TheUserDoesNotHave",dm:"\u7528\u6237\u6CA1\u6709\u521B\u5EFA\u670D\u52A1\u5173\u8054\u89D2\u8272\u7684\u6743\u9650\uFF0C\u8BF7\u8054\u7CFB\u4E3B\u8D26\u53F7\u6216\u6743\u9650\u7BA1\u7406\u5458\u6388\u6743\u5F53\u524D\u7528\u6237\u6216\u521B\u5EFA\u670D\u52A1\u5173\u8054\u89D2\u8272\u7684\u81EA\u5B9A\u4E49\u6743\u9650\u7B56\u7565\u3002\u81EA\u5B9A\u4E49\u6743\u9650\u4FA7\u7684\u76F8\u5173\u4FE1\u606F\u53C2\u8003\u5982\u4E0B\uFF1A"})}),!!((o=t.serviceName)!==null&&o!==void 0&&o.length)&&(0,r.jsxs)("div",{className:"".concat(g,"-role-policy"),children:[(0,r.jsxs)("div",{children:["Service Name:",t.serviceName]}),(0,r.jsx)("div",{children:Fn.Z.get({id:"components.bailian.BLSLRModal.ServiceAssociatedRoleNameParamsrolename",dm:"\u670D\u52A1\u5173\u8054\u89D2\u8272\u540D\u79F0\uFF1A{paramsRoleName}"},{paramsRoleName:t.roleName})}),(0,r.jsx)("div",{children:Fn.Z.get({id:"components.bailian.BLSLRModal.UserPermissionsRequiredToPerform",dm:"\u6267\u884C\u8BE5\u64CD\u4F5C\u6240\u9700\u7684\u7528\u6237\u6743\u9650\uFF1Aram:CreateServiceLinkedRole"})})]})]})})]})},fc=function(t){var o=uo(),i=t.id,u=t.serviceName,s=t.roleName,v=t.desc,g=t.policyName,y=t.tips,B=t.checkBox,P=(0,fn.getCommonConfig)(),C=P.sparkPrefix,M=C===void 0?"":C,F=P.prefix,T=F===void 0?"":F,H=(0,ic.Z)({checked:!t.checkBox,showAlert:!1,percent:10,loading:!1,failed:!1}),nn=Rn()(H,2),Z=nn[0],k=nn[1],en=(0,f.useRef)(null),rn=function(){en.current&&(clearTimeout(en.current),en.current=null)},cn=function(){k(function(dn){return a()(a()({},dn),{},{percent:dn.percent<90?dn.percent+10:dn.percent})})},tn=function(){var dn;if(!Z.checked){k({showAlert:!0});return}k({loading:!0}),en.current=setInterval(function(){cn()},500),(dn=t.handleOk)===null||dn===void 0||dn.call(t).then(function(){var gn;rn(),k({percent:100}),t.onClose(),(gn=t.onSuccess)===null||gn===void 0||gn.call(t)}).catch(function(gn){t.onClose(),rn(),uc.show({authFailedMsg:gn==null?void 0:gn.errorMsg,id:i,serviceName:u,roleName:s}),k({loading:!1,failed:!0})})},sn=(0,f.useMemo)(function(){return(0,r.jsxs)("div",{className:"".concat(M,"-auth-modal-footer"),children:[(0,r.jsx)("div",{className:ln()("".concat(M,"-auth-modal-service"),Z.showAlert&&"".concat(M,"-auth-modal-alert")),children:B&&(0,r.jsx)(_t.Z,{value:Z.checked,onChange:function(dn){k({checked:dn.target.checked})},children:B})}),(0,r.jsxs)("div",{className:"".concat(M,"-auth-modal-actions"),children:[(0,r.jsx)(Be,{onClick:t.onClose,children:Fn.Z.get({id:"pages.components.OSSAuthModal.Cancel",dm:"\u53D6\u6D88"})}),(0,r.jsx)(Be,{onClick:tn,type:"primary",children:Fn.Z.get({id:"pages.components.OSSAuthModal.ConfirmAuthorization",dm:"\u786E\u8BA4\u6388\u6743"})})]})]})},[Z]);return Z.percent===100||Z.failed?null:Z.loading?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(cc,{percent:Z.percent,title:Fn.Z.get({id:"pages.components.OSSAuthModal.AuthorizationIsInProgressPlease",dm:"\u6B63\u5728\u6388\u6743\u4E2D\uFF0C\u8BF7\u7A0D\u7B49\u7247\u523B..."}),getContainer:function(){return document.querySelector("div[role=".concat(T,"-static").concat(i?"-".concat(i):"","]"))||void 0}})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsxs)(Je.Z,{zIndex:1e4,onCancel:t.onClose,footer:sn,open:!0,title:t.title,getContainer:function(){return document.querySelector("div[role=".concat(T,"-static").concat(i?"-".concat(i):"","]"))||void 0},width:690,children:[!!v&&(0,r.jsx)("div",{className:"".concat(M,"-auth-modal-tips"),children:v}),(!!(s!=null&&s.length)||!!(g!=null&&g.length))&&(0,r.jsxs)("div",{className:"".concat(M,"-role-policy"),children:[!!(s!=null&&s.length)&&(0,r.jsx)("div",{children:Fn.Z.get({id:"components.bailian.BLSLRModal.RoleNameRolename",dm:"\u89D2\u8272\u540D\u79F0\uFF1A{roleName}"},{roleName:s})}),!!(g!=null&&g.length)&&(0,r.jsx)("div",{children:Fn.Z.get({id:"components.bailian.BLSLRModal.RolePermissionPolicyPolicyname",dm:"\u89D2\u8272\u6743\u9650\u7B56\u7565\uFF1A{policyName}"},{policyName:g})})]}),!!y&&(0,r.jsx)("div",{className:"".concat(M,"-auth-modal-tips"),children:y})]})]})},fo=e(96981),pt=e(57381),mo=e(3303),xo=e(36409),vo,mc=(0,b.Z)(vo||(vo=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),lu=null,xc=function(n){return n[n.sftTG=0]="sftTG",n[n.testTG=2]="testTG",n[n.application=3]="application",n[n.sftIU=4]="sftIU",n[n.dopTG=5]="dopTG",n}({}),go=function(n){return n[n.draft=0]="draft",n[n.publishing=1]="publishing",n[n.published=2]="published",n[n.publishFailed=3]="publishFailed",n}({});function vc(n){var t=(0,fn.getCommonConfig)(),o=t.blPrefix,i=Ee.Z.useFormInstance(),u=mc(),s=n.className,v=s===void 0?"":s,g=n.style,y=n.group,B=n.releaseStatus,P=B===void 0?go.published:B,C=n.handleSelect,M=n.singleSelect,F=M===void 0?!1:M,T=n.formName,H=n.corpusItems,nn=n.defaultValue,Z=n.queryFn,k=Z===void 0?as:Z,en=(0,f.useRef)(),rn=(0,f.useState)([]),cn=Rn()(rn,2),tn=cn[0],sn=cn[1],vn=(0,f.useState)({releaseStatus:P,datasetGroupType:y,datasetGroupPageSize:10,datasetGroupPageNo:1,name:void 0}),dn=Rn()(vn,2),gn=dn[0],An=dn[1],Xn=(0,f.useState)([]),Pn=Rn()(Xn,2),$n=Pn[0],ae=Pn[1],mn=(0,f.useState)(!1),hn=Rn()(mn,2),ee=hn[0],te=hn[1],Cn=(0,f.useState)(!1),Q=Rn()(Cn,2),on=Q[0],ue=Q[1],xe=(0,f.useRef)(!0);(0,f.useEffect)(function(){(!H||!H.length)&&sn([])},[H]),(0,f.useEffect)(function(){y!=null&&y.length&&An(a()(a()({},gn),{},{datasetGroupType:y}))},[y]),(0,f.useEffect)(function(){y!=null&&y.length&&Tn(gn)},[gn]),(0,f.useEffect)(function(){Mn()},[nn]);var wn=function(){if(!on){var qn=document.querySelector("#menu-cou-scroll > div");if(qn){var Zn=qn.children[0];Zn.addEventListener("scroll",Ue),ue(!0)}}};function Mn(){var Yn=i.getFieldsValue(!0),qn=nn||Yn[T]||[];if(qn.length){var Zn=qn.map(function(Kn){return[Kn.fatherId,Kn.value]});sn(Zn)}}function Tn(Yn){te(!0),k(Yn).then(function(qn){te(!1);var Zn=is(qn),Kn=(0,Qr.Z)(Zn,function(pe){return(pe.children||[]).length>0}),re=Yn.datasetGroupPageNo===1?Kn:[].concat(Le()($n),Le()(Kn));ae(re),Mn(),xe.current=!!Zn.length}).catch(function(){te(!1)})}var Vn=(0,xo.Z)(function(Yn){An(a()(a()({},gn),{},{name:Yn,datasetGroupPageNo:1}))},500),ce=function(qn){var Zn=[];$n.forEach(function(Kn){var re;Kn!=null&&(re=Kn.children)!==null&&re!==void 0&&re.length&&Kn.children.forEach(function(pe){qn&&qn.some(function(cs){return cs.includes(pe.datasetId)})&&Zn.push(pe)})}),sn(function(){return qn}),C(Zn)},Fe=function(qn,Zn){var Kn=Zn.filter(function(re){return!!re});return Kn.length?Kn.map(function(re,pe){return!re||re!=null&&re.children?null:(0,r.jsxs)("div",{children:[re.fatherName,">",re.datasetVersionName]},pe)}):(sn([]),null)},Ue=function(qn){var Zn=qn.target;xe.current&&Zn.scrollHeight-Zn.clientHeight-Zn.scrollTop<=5&&An(function(Kn){return a()(a()({},Kn),{},{datasetGroupPageNo:Kn.datasetGroupPageNo+1})})},os=function(qn){var Zn;return(0,r.jsx)(pt.Z,{spinning:ee,children:(0,r.jsx)("div",{id:"menu-cou-scroll",style:{width:(Zn=en.current)===null||Zn===void 0||(Zn=Zn.nativeElement)===null||Zn===void 0?void 0:Zn.clientWidth},children:qn})})};function as(Yn){return Ft.apply(this,arguments)}function Ft(){return Ft=be()(Qn()().mark(function Yn(qn){var Zn,Kn;return Qn()().wrap(function(pe){for(;;)switch(pe.prev=pe.next){case 0:return pe.next=2,(0,fo.v)("zeldaEasy.broadscope-platform.datasetGroup.queryNonEmpty",{input:qn});case 2:return Zn=pe.sent,Kn=Zn.records||[],pe.abrupt("return",Kn);case 5:case"end":return pe.stop()}},Yn)})),Ft.apply(this,arguments)}function is(Yn){var qn=(Yn||[]).map(function(Zn){return a()(a()({},Zn),{},{originLabel:Zn.name,label:(0,r.jsx)(gt,{children:Zn.name}),value:Zn.datasetGroupId,children:(Zn.datasets||[]).map(function(Kn){var re=a()(a()({},Kn),{},{originLabel:Kn.datasetVersionName,value:Kn.datasetId,fatherId:Zn.datasetGroupId,fatherName:Zn.name});return re.label=ls(re),re})})});return qn}function ls(Yn){return(0,r.jsxs)("div",{className:"".concat(o,"-item-content"),children:[Yn.originLabel,(0,r.jsx)("span",{className:"".concat(o,"-count"),children:(0,r.jsx)(gt,{children:Fn.Z.get({id:"components.proComponents.BLDatasetCascader.DataVolumeChilddatacount",dm:"\uFF08\u6570\u636E\u91CF\uFF1A{childDataCount}\uFF09"},{childDataCount:Yn.dataCount})})})]})}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(mo.Z,{ref:en,className:ln()("".concat(o,"-dataset-cascader"),v),style:g,popupClassName:"".concat(o,"-cascader-popup"),options:$n,value:tn,onChange:ce,placeholder:Fn.Z.get({id:"bailianUi.bizComponents.BLDatasetCascader.Placeholder",dm:"\u8BF7\u9009\u62E9"}),showCheckedStrategy:mo.Z.SHOW_CHILD,multiple:!F,dropdownRender:os,loading:ee,displayRender:Fe,onFocus:wn,showSearch:{filter:function(){return!0}},onSearch:Vn,expandTrigger:"hover"})]})}var gc=e(35301),po,pc=(0,b.Z)(po||(po=D()([`
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
`])),function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.antPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix},function(n){return n.blPrefix}),cu=null,ho=function(n){var t=(0,fn.getCommonConfig)(),o=t.blPrefix,i=n.imageStatus,u=n.sendArea,s=n.onSend,v=n.hideSendArea,g=n.imageUrl,y=n.textAreaProps,B=pc(),P=(0,f.useState)(!1),C=Rn()(P,2),M=C[0],F=C[1],T=(0,f.useState)(!1),H=Rn()(T,2),nn=H[0],Z=H[1],k=(0,f.useState)(""),en=Rn()(k,2),rn=en[0],cn=en[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B,{}),(0,r.jsxs)("div",{className:ln()(n.wrapperClassName,"".concat(o,"-files-input"),M&&"".concat(o,"-files-input-focus")),children:[(i==="success"||i==="uploading")&&(0,r.jsxs)("div",{className:ln()("".concat(o,"-files-input-image")),onMouseEnter:function(){return Z(!0)},onMouseLeave:function(){return Z(!1)},children:[!!(g!=null&&g.length)&&i==="success"&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("img",{src:g})}),i==="uploading"&&(0,r.jsx)("div",{className:ln()("".concat(o,"-files-input-image-loading")),children:(0,r.jsx)(pt.Z,{})}),nn&&(0,r.jsx)("div",{className:"".concat(o,"-files-input-image-delete-mask"),children:(0,r.jsx)(En,{type:"icon-delete-line",className:"".concat(o,"-files-input-image-delete-icon"),onClick:function(){var sn;(sn=n.onDeleteImage)===null||sn===void 0||sn.call(n)}})})]}),(0,r.jsx)(gc.Z,a()(a()({},y),{},{className:ln()("".concat(o,"-input"),y.className),onFocus:function(sn){var vn;F(!0),(vn=y.onFocus)===null||vn===void 0||vn.call(y,sn)},onBlur:function(sn){var vn;F(!1),(vn=y.onBlur)===null||vn===void 0||vn.call(y,sn)},onChange:function(sn){var vn;cn(sn.target.value),(vn=y.onChange)===null||vn===void 0||vn.call(y,sn)},value:y.value===void 0?rn:y.value})),!v&&(u||(0,r.jsx)("div",{className:ln()("".concat(o,"-files-input-send-area")),children:(0,r.jsx)(En,{type:"icon-upperrightArrow-line",className:ln()("".concat(o,"-files-input-send-icon")),onClick:function(){s==null||s(rn)}})}))]})]})},hc=(0,f.forwardRef)(function(n,t){var o=n.fetchOptions,i=n.debounceTimeout,u=n.options,s=n.onOptionsChange,v=n.initializingContent,g=n.errorContent,y=n.paginitionType,B=y===void 0?"pageNo":y,P=n.autoFetch,C=(0,fn.getCommonConfig)(),M=C.antPrefix,F=(0,f.useState)(!1),T=Rn()(F,2),H=T[0],nn=T[1],Z=(0,f.useState)(""),k=Rn()(Z,2),en=k[0],rn=k[1],cn=(0,f.useRef)(""),tn=(0,f.useRef)(1),sn=(0,f.useRef)(void 0),vn=(0,f.useRef)(!0),dn=(0,f.useRef)(0),gn=(0,f.useState)(!1),An=Rn()(gn,2),Xn=An[0],Pn=An[1];(0,f.useEffect)(function(){P&&$n("refresh")},[]);var $n=(0,f.useMemo)(function(){var mn=function(ee){if(vn.current){dn.current+=1;var te=dn.current;ee==="refresh"&&(s([]),tn.current=1,sn.current=void 0),Pn(!0);var Cn={searchValue:cn.current,pageNo:tn.current,nextMarker:sn.current};o(Cn).then(function(Q){if(nn(!0),te===dn.current&&Q){Pn(!1),tn.current+=1;var on=ee==="refresh"?Q.options||[]:[].concat(Le()(u||[]),Le()(Q.options||[]));if(s(on),B==="nextMarker")sn.current=Q.nextMarker,vn.current=!!sn.current;else{var ue;(ue=Q.options)!==null&&ue!==void 0&&ue.length?vn.current=!0:vn.current=!1}}})}};return(0,xo.Z)(mn,i)},[o,i,u]),ae=(0,f.useCallback)(function(mn){var hn=mn.target;hn&&!Xn&&hn.clientHeight-(hn.scrollHeight-hn.scrollTop)>=-5&&$n("incremental")},[$n,Xn]);return(0,f.useImperativeHandle)(t,function(){return{debounceFetcher:$n,searchValue:en}},[$n,en]),P&&!H?v:u===null?g:(0,r.jsx)(Zr,a()(a()({},n),{},{onPopupScroll:ae,searchValue:en,onSearch:function(hn){cn.current=hn,rn(hn),tn.current=1,sn.current=void 0,vn.current=!0,$n("refresh")},onDropdownVisibleChange:function(hn){hn&&!H&&$n("refresh")},placeholder:Fn.Z.get({id:"components.proComponents.BLPaginitionSelect.YouCanSearchByPrefix",dm:"\u53EF\u6309\u7167\u524D\u7F00\u5339\u914D\u641C\u7D22\u6216\u76F4\u63A5\u9009\u62E9"}),virtual:!1,dropdownRender:function(hn){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(pt.Z,{spinning:Xn,children:[hn,!vn.current&&!!u.length&&(0,r.jsx)("div",{style:{color:"var(--".concat(M,"-color-text-description)"),fontSize:12,lineHeight:"32px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Fn.Z.get({id:"components.proComponents.BLPaginitionSelect.ItSOver",dm:"\u5DF2\u7ECF\u5230\u5E95\u4E86"})})]})})}}))}),Pc=e(51850);function Po(){return ht.apply(this,arguments)}function ht(){return ht=be()(Qn()().mark(function n(){var t,o=arguments;return Qn()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return t=o.length>0&&o[0]!==void 0?o[0]:100,u.abrupt("return",new Promise(function(s){setTimeout(s,t)}));case 2:case"end":return u.stop()}},n)})),ht.apply(this,arguments)}var yc=e(35872),bc=e(93361),yo=e(79697),Cc=e(37514),bo=e(38018),Sc=["product","action","url","version","region","headers"],jc=function(){var n=be()(Qn()().mark(function o(i,u,s){var v,g,y,B,P,C,M,F,T,H,nn,Z,k,en,rn;return Qn()().wrap(function(tn){for(;;)switch(tn.prev=tn.next){case 0:return g=i.product,y=i.action,B=i.url,P=i.version,C=i.region,M=i.headers,F=M===void 0?{}:M,T=Gn()(i,Sc),H="".concat(B||"/data/api.json","?action=").concat(y,"&product=").concat(g),P&&(H+="&version=".concat(P)),nn={sec_token:((v=window.ALIYUN_CONSOLE_CONFIG)===null||v===void 0?void 0:v.SEC_TOKEN)||"",region:C},u&&(nn.params=JSON.stringify(u)),s&&Object.assign(nn,s),Z=a()({method:"post",credentials:"same-origin",headers:a()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},F)},T),k=Object.assign({},Z),k.body=(0,bo.stringify)(nn),tn.next=11,fetch(H,k);case 11:return en=tn.sent,tn.next=14,en.json();case 14:if(rn=tn.sent,!(rn.code!=="200"&&!rn.successResponse)){tn.next=17;break}return tn.abrupt("return",Promise.reject(rn));case 17:return tn.abrupt("return",rn);case 18:case"end":return tn.stop()}},o)}));function t(o,i,u){return n.apply(this,arguments)}return t}(),Pt=jc,yt=e(1259),Bc=["withDefaultCornerstoneParam","cornerstoneParam","origin","autoMsg","ignoreCodes","region"];function Ec(n){var t,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=n.withDefaultCornerstoneParam,s=u===void 0?!0:u,v=n.cornerstoneParam,g=v===void 0?{}:v,y=n.origin,B=y===void 0?!1:y,P=n.autoMsg,C=P===void 0?!0:P,M=n.ignoreCodes,F=M===void 0?[]:M,T=n.region,H=Gn()(n,Bc),nn=a()(a()({},H),{},{region:T||((t=window.g_config)===null||t===void 0?void 0:t.ramRegion)}),Z=a()(a()(a()({},s?(0,yt.kF)(yt.Ii.pop):{}),g),i.cornerstoneParam),k=(0,bc.Z)(i,"cornerstoneParam"),en=a()({},k);(0,yo.Z)(Z)||(en.cornerstoneParam=Z);var rn={};return(0,yo.Z)(en)||(rn.content=JSON.stringify(en)),Pt(nn,o,rn).then(function(cn){var tn;if((tn=cn.data)!==null&&tn!==void 0&&tn.success){var sn=cn.data,vn=sn==null?void 0:sn.data;return!(0,Cc.Z)(vn)&&!B?{result:vn}:vn}var dn=cn.data;if(dn!=null&&dn.message||dn.errorMsg)return Promise.reject(dn);var gn=dn==null?void 0:dn.data;return gn!=null&&gn.ErrorMsg?(gn.code||(gn.code=gn.ErrorCode),gn.message||(gn.message=gn.ErrorMsg),Promise.reject(gn)):Promise.reject(dn||cn)}).catch(function(cn){var tn=cn||{};return console.group("pop REQUEST FAILED"),console.log("[options]",n),console.log("[data]",o),console.log("[extraParams]",i),console.log("[result]",tn),console.groupEnd(),tn.errorMsg&&(tn.message=tn.errorMsg),tn.errorCode&&(tn.code=tn.errorCode),(0,yt.S3)(tn,{autoMsg:C,ignoreCodes:F})})}function Co(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.timeout,i=o===void 0?5e3:o,u=t.intervalTime,s=u===void 0?100:u,v=Date.now();return new Promise(function(g,y){var B=setInterval(function(){var P=n();P?(clearInterval(B),g(P)):Date.now()-v>i&&(y("timeout"),clearInterval(B))},s)})}function Fc(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Co(function(){return document.querySelector(n)},t)}var Nc=e(89046),Tc=[{value:"cn-qingdao",label:"\u534E\u53171\uFF08\u9752\u5C9B\uFF09",labelEn:"China (Qingdao)"},{value:"cn-beijing",label:"\u534E\u53172\uFF08\u5317\u4EAC\uFF09",labelEn:"China (Beijing)"},{value:"cn-zhangjiakou",label:"\u534E\u53173\uFF08\u5F20\u5BB6\u53E3\uFF09",labelEn:"China (Zhangjiakou)"},{value:"cn-huhehaote",label:"\u534E\u53175\uFF08\u547C\u548C\u6D69\u7279\uFF09",labelEn:"China (Hohhot)"},{value:"cn-wulanchabu",label:"\u534E\u53176\uFF08\u4E4C\u5170\u5BDF\u5E03\uFF09",labelEn:"China (Ulanqab)"},{value:"cn-hangzhou",label:"\u534E\u4E1C1\uFF08\u676D\u5DDE\uFF09",labelEn:"China (Hangzhou)"},{value:"cn-shanghai",label:"\u534E\u4E1C2\uFF08\u4E0A\u6D77\uFF09",labelEn:"China (Shanghai)"},{value:"cn-nanjing",label:"\u534E\u4E1C5\uFF08\u5357\u4EAC-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Nanjing - Local Region)"},{value:"cn-fuzhou",label:"\u534E\u4E1C6\uFF08\u798F\u5DDE-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Fuzhou - Local Region)"},{value:"cn-shenzhen",label:"\u534E\u53571\uFF08\u6DF1\u5733\uFF09",labelEn:"China (Shenzhen)"},{value:"cn-heyuan",label:"\u534E\u53572\uFF08\u6CB3\u6E90\uFF09",labelEn:"China (Heyuan)"},{value:"cn-guangzhou",label:"\u534E\u53573\uFF08\u5E7F\u5DDE\uFF09",labelEn:"China (Guangzhou)"},{value:"cn-wuhan-lr",label:"\u534E\u4E2D1\uFF08\u6B66\u6C49-\u672C\u5730\u5730\u57DF\uFF09",labelEn:"China (Wuhan - Local Region)"},{value:"cn-chengdu",label:"\u897F\u53571\uFF08\u6210\u90FD\uFF09",labelEn:"China (Chengdu)"},{value:"cn-hongkong",label:"\u4E2D\u56FD\u9999\u6E2F",labelEn:"China (Hong Kong)"}],Lc=[{value:"ap-southeast-2",label:"\u6FB3\u5927\u5229\u4E9A\uFF08\u6089\u5C3C\uFF09\u5DF2\u5173\u505C",labelEn:"Australia (Sydney) Closed"},{value:"ap-southeast-6",label:"\u83F2\u5F8B\u5BBE\uFF08\u9A6C\u5C3C\u62C9\uFF09",labelEn:"Philippines (Manila)"},{value:"ap-northeast-2",label:"\u97E9\u56FD\uFF08\u9996\u5C14\uFF09",labelEn:"South Korea (Seoul)"},{value:"ap-southeast-3",label:"\u9A6C\u6765\u897F\u4E9A\uFF08\u5409\u9686\u5761\uFF09",labelEn:"Malaysia (Kuala Lumpur)"},{value:"ap-northeast-1",label:"\u65E5\u672C\uFF08\u4E1C\u4EAC\uFF09",labelEn:"Japan (Tokyo)"},{value:"ap-southeast-7",label:"\u6CF0\u56FD\uFF08\u66FC\u8C37\uFF09",labelEn:"Thailand (Bangkok)"},{value:"ap-southeast-1",label:"\u65B0\u52A0\u5761",labelEn:"Singapore"},{value:"ap-southeast-5",label:"\u5370\u5EA6\u5C3C\u897F\u4E9A\uFF08\u96C5\u52A0\u8FBE\uFF09",labelEn:"Indonesia (Jakarta)"}],kc=[{value:"eu-central-1",label:"\u5FB7\u56FD\uFF08\u6CD5\u5170\u514B\u798F\uFF09",labelEn:"Germany (Frankfurt)"},{value:"us-east-1",label:"\u7F8E\u56FD\uFF08\u5F17\u5409\u5C3C\u4E9A\uFF09",labelEn:"US (Virginia)"},{value:"us-west-1",label:"\u7F8E\u56FD\uFF08\u7845\u8C37\uFF09",labelEn:"US (Silicon Valley)"},{value:"eu-west-1",label:"\u82F1\u56FD\uFF08\u4F26\u6566\uFF09",labelEn:"UK (London)"}],Ic=[{value:"me-east-1",label:"\u963F\u8054\u914B\uFF08\u8FEA\u62DC\uFF09",labelEn:"UAE (Dubai)"},{value:"me-central-1",label:"\u6C99\u7279\uFF08\u5229\u96C5\u5F97\uFF09",labelEn:"Saudi Arabia (Riyadh)"}],Dc=[{value:"cn-beijing-finance-1",label:"\u534E\u53172 \u91D1\u878D\u4E91\uFF08\u9080\u6D4B\uFF09",labelEn:"China North 2 Finance (Preview)"},{value:"cn-hangzhou-finance",label:"\u534E\u4E1C1 \u91D1\u878D\u4E91",labelEn:"China East 1 Finance"},{value:"cn-shanghai-finance-1",label:"\u534E\u4E1C2 \u91D1\u878D\u4E91",labelEn:"China East 2 Finance"},{value:"cn-shenzhen-finance-1",label:"\u534E\u53571 \u91D1\u878D\u4E91",labelEn:"China South 1 Finance"}],Zc=[].concat(Tc,Lc,kc,Ic,Dc),Mc=(0,Gr.Z)(Zc,function(n,t){return n[t.value]=t,n},{});function Oc(n){var t,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(0,Nc.V)(),i=a()(a()({},Mc),(t=window.ALIYUN_CONSOLE_GLOBAL)===null||t===void 0?void 0:t.regionIdItemMap),u=i[n],s=o==="zh-CN"?"label":"labelEn";return(u==null?void 0:u[s])||""}function Ac(n,t){return bt.apply(this,arguments)}function bt(){return bt=be()(Qn()().mark(function n(t,o){var i,u,s;return Qn()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:u=t==null||(i=t.getReader)===null||i===void 0?void 0:i.call(t),u||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",t));case 2:return g.next=4,u.read();case 4:if((s=g.sent).done){g.next=8;break}try{o(s.value)}catch(y){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",y)}g.next=2;break;case 8:case"end":return g.stop()}},n)})),bt.apply(this,arguments)}function wc(n){var t,o,i,u=!1;return function(v){t===void 0?(t=v,o=0,i=-1):t=zc(t,v);for(var g=t.length,y=0;o<g;){u&&(t[o]===10&&(y=++o),u=!1);for(var B=-1;o<g&&B===-1;++o)switch(t[o]){case 58:i===-1&&(i=o-y);break;case 13:u=!0;case 10:B=o;break}if(B===-1)break;n(t.subarray(y,B),i),y=o,i=-1}y===g?t=void 0:y!==0&&(t=t.subarray(y),o-=y)}}function Rc(n,t,o){var i=So(),u=new TextDecoder;return function(v,g){if(v.length===0)o==null||o(i),i=So();else if(g>0){var y=u.decode(v.subarray(0,g)),B=g+(v[g+1]===32?2:1),P=u.decode(v.subarray(B));switch(y){case"data":i.data=i.data?"".concat(i.data,`
`).concat(P):P;break;case"event":i.event=P;break;case"id":n(i.id=P);break;case"retry":var C=parseInt(P,10);isNaN(C)||t(i.retry=C);break}}}}function zc(n,t){var o=new Uint8Array(n.length+t.length);return o.set(n),o.set(t,n.length),o}function So(){return{data:"",event:"",id:"",retry:void 0}}var Wc=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],Ct="text/event-stream",$c=1e3,jo="last-event-id";function Bo(n,t){return St.apply(this,arguments)}function St(){return St=be()(Qn()().mark(function n(t,o){var i,u,s,v,g,y,B,P,C,M,F,T,H;return Qn()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return i=o.signal,u=o.headers,s=o.onopen,v=o.onmessage,g=o.onclose,y=o.onerror,B=o.fetch,P=o.autoRetryTime,C=o.timeout,M=o.debug,F=M===void 0?!1:M,T=Gn()(o,Wc),H=0,Z.abrupt("return",new Promise(function(k,en){var rn=a()({},u);rn.accept||(rn.accept=Ct);var cn=$c,tn=0,sn=0,vn=new AbortController;function dn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(F&&console.log("[sse] dispose"),window.clearTimeout(tn),window.clearTimeout(sn),!ae){var mn,hn;(mn=vn)===null||mn===void 0||(hn=mn.abort)===null||hn===void 0||hn.call(mn)}}function gn(){window.clearTimeout(sn),C!==0&&(sn=window.setTimeout(function(){F&&console.log("[sse] timeout"),en(new Error("timeout")),y==null||y(new Error("timeout")),dn()},C||60*1e3))}i==null||i.addEventListener("abort",function(){dn(),k()});var An=B!=null?B:window.fetch,Xn=s!=null?s:Uc;function Pn(){return $n.apply(this,arguments)}function $n(){return $n=be()(Qn()().mark(function ae(){var mn,hn,ee,te;return Qn()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.prev=0,gn(),Q.next=4,An(t,a()(a()({},T),{},{headers:rn,signal:(mn=vn)===null||mn===void 0?void 0:mn.signal}));case 4:return hn=Q.sent,Q.next=7,Xn(hn);case 7:if(hn.body){Q.next=11;break}return F&&console.log("[sse]no body, delay 100ms"),Q.next=11,Po(100);case 11:return F&&console.log("[sse]response.body",hn.body),Q.next=14,Ac(hn.body,wc(Rc(function(on){on?rn[jo]=on:delete rn[jo]},function(on){cn=on},function(on){gn(),v==null||v(on)})));case 14:vn=null,g==null||g(),dn(),k(),Q.next=43;break;case 20:if(Q.prev=20,Q.t0=Q.catch(0),Q.t0&&console.error("[sse]err",Q.t0),!(!(i!=null&&i.aborted)&&P&&H<P)){Q.next=39;break}return Q.prev=24,H+=1,te=(ee=y==null?void 0:y(Q.t0))!==null&&ee!==void 0?ee:cn,window.clearTimeout(tn),typeof te=="number"&&(F&&console.log("[sse] retry "+H),tn=window.setTimeout(Pn,te)),Q.abrupt("return",Promise.resolve());case 32:Q.prev=32,Q.t1=Q.catch(24),F&&console.log("[sse] reject innerErr ",Q.t1),dn(),en(Q.t1);case 37:Q.next=43;break;case 39:F&&console.log("[sse] reject finally"),dn(Q.t0 instanceof Response||Q.t0 instanceof DOMException&&Q.t0.name==="AbortError"),y==null||y(Q.t0),en(Q.t0);case 43:case"end":return Q.stop()}},ae,null,[[0,20],[24,32]])})),$n.apply(this,arguments)}Pn()}));case 3:case"end":return Z.stop()}},n)})),St.apply(this,arguments)}function Uc(n){var t=n.headers.get("content-type");if(!(t!=null&&t.startsWith(Ct)))throw new Error("Expected content-type to be ".concat(Ct,", Actual: ").concat(t))}function Hc(n){return jt.apply(this,arguments)}function jt(){return jt=be()(Qn()().mark(function n(t){var o,i,u,s,v,g,y;return Qn()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return o=t.action,i=t.body,u=t.product,s=t.version,v=t.region,g=t.params,y={action:o,product:u,region:v,url:"/tool/sse/get.json",version:s},P.abrupt("return",Pt(y,g,{content:JSON.stringify(i)}));case 3:case"end":return P.stop()}},n)})),jt.apply(this,arguments)}function Vc(n,t,o,i){var u=t.onMessage,s=t.onClose,v=t.onError,g=t.timeout,y=n.body,B=n.uri,P=n.headers,C=n.query,M=n.path,F=P["Content-Type"],T="".concat(B.replace(/\/$/,"")).concat(M);C&&Object.keys(C).length&&(T="".concat(T,"?").concat((0,bo.stringify)(C)));try{i.value=!1,Bo(T,{method:"POST",body:F==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse(y)):y,signal:o.signal,timeout:g,headers:P,onopen:function(nn){return nn.status!==200?Promise.reject(nn):Promise.resolve()},onmessage:function(nn){try{var Z=nn.data,k=Z===void 0?"{}":Z,en=JSON.parse(k);u==null||u(en)}catch(rn){v==null||v(rn)}},onclose:function(){i.value=!0,s==null||s()},onerror:function(nn){i.value=!0,s==null||s(),!(nn instanceof DOMException&&nn.name==="AbortError")&&(v==null||v(nn))}})}catch(H){i.value=!0,v==null||v(H),s==null||s()}}function Kc(n,t,o){return Bt.apply(this,arguments)}function Bt(){return Bt=be()(Qn()().mark(function n(t,o,i){var u,s,v,g;return Qn()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return u=t.onClose,s=t.onError,B.prev=1,B.next=4,Hc(t);case 4:v=B.sent,g=v.data,Vc(g,t,o,i),B.next=13;break;case 9:B.prev=9,B.t0=B.catch(1),u==null||u(),s==null||s(B.t0);case 13:case"end":return B.stop()}},n,null,[[1,9]])})),Bt.apply(this,arguments)}function Qc(n){return Et.apply(this,arguments)}function Et(){return Et=be()(Qn()().mark(function n(t){var o,i;return Qn()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o=new AbortController,i={value:!0},s.next=4,Kc(t,o,i);case 4:return s.abrupt("return",{dispose:function(){i.value&&o.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return s.stop()}},n)})),Et.apply(this,arguments)}var Eo=e(47453),Gc=e(44959),Jc=["prefix","prefixCls","theme","iconFontUrl","children","className","style"],Fo=K(E),No="https://at.alicdn.com/t/a/font_4647901_lhuy923i2.css",Xc={button:{autoInsertSpace:!1},drawer:{closeIcon:(0,r.jsx)(Eo.Z,{})},modal:{closeIcon:(0,r.jsx)(Eo.Z,{})}};function Yc(){return He(),null}function qc(n){var t=n.prefix,o=t===void 0?"":t,i=n.prefixCls,u=i===void 0?"":i,s=n.theme,v=s===void 0?{}:s,g=n.iconFontUrl,y=g===void 0?No:g,B=n.children,P=B===void 0?void 0:B,C=n.className,M=n.style,F=Gn()(n,Jc),T=(0,Gc.Z)(Fo.theme,v,{components:{Table:{cellPaddingInline:20}}}),H=(0,f.useState)(!1),nn=Rn()(H,2),Z=nn[0],k=nn[1],en=(0,fn.getCommonConfig)(),rn=en.antPrefix,cn=u||rn||(o?"".concat(o,"-").concat(fn.DEFAULT_ANT_PREFIX):fn.DEFAULT_ANT_PREFIX);return(0,f.useLayoutEffect)(function(){y&&$a(y);var tn={antPrefix:cn};o.length&&(tn=a()(a()({},tn),{},{blPrefix:"".concat(o,"-").concat(fn.DEFAULT_BL_PREFIX),prefix:o})),(0,fn.setCommonConfig)(tn),k(!0)},[]),(0,r.jsxs)(tt,a()(a()(a()(a()({},Xc),F),Fo),{},{prefixCls:cn,theme:T,className:C,style:M,children:[(0,r.jsx)(Yc,{}),Z?P:null]}))}function _c(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof n!="string")return o||console.warn(n,"is not valid json"),t?n:null;try{return JSON.parse(n)}catch(i){return o||console.warn(n,"is not valid json"),t?n:null}}function ns(n){for(var t=new TextEncoder,o=t.encode(n),i="",u=0;u<o.length;u++)i+=String.fromCharCode(o[u]);var s=btoa(i);return s}function es(n){for(var t=atob(n),o=new Uint8Array(t.length),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);var u=new TextDecoder("utf-8"),s=u.decode(o);return s}var To=e(4767),Lo=K(E),ko=K(q,!0),ts=K(w),rs=K(_,!0)}}]);
