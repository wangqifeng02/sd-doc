"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[7969],{60218:function(ln,O,n){n.r(O),n.d(O,{useStyle:function(){return T}});var z=n(68400),v=n.n(z),F=n(3067),N,T=(0,F.default)(N||(N=v()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix})},37339:function(ln,O,n){n.r(O);var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(23048),o=n(33495),E=n(52565),S=n(96406),D=n(55595),C=n(86250),b=n(85576),P=n(93967),M=n.n(P),I=n(93865),t=n(60218),m=n(85893),d=["children","type","danger","title","width","className"],c=function(f){var x=function(an){var q=an.type,en=an.title,fn=(0,I.getCommonConfig)(),dn=fn.antPrefix;switch(q){case"success":return(0,m.jsxs)(C.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,m.jsx)(o.Z,{style:{color:"var(--".concat(dn,"-color-success)"),fontSize:18,margin:"0 3px"}}),en]});case"warning":case"confirm":return(0,m.jsxs)(C.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,m.jsx)(E.Z,{style:{color:"var(--".concat(dn,"-color-warning)"),fontSize:18,margin:"0 3px"}}),en]});case"info":return(0,m.jsxs)(C.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,m.jsx)(S.Z,{style:{color:"var(--".concat(dn,"-color-info)"),fontSize:18,margin:"0 3px"}}),en]});case"error":return(0,m.jsxs)(C.Z,{align:"center",gap:8,className:"leading-[28px]",children:[(0,m.jsx)(D.Z,{style:{color:"var(--".concat(dn,"-color-error)"),fontSize:18,margin:"0 3px"}}),en]});default:return T.default.get({id:"components.commonComponents.AlertDialog.Prompt",dm:"\u63D0\u793A"})}},r=f.children,L=f.type,i=L===void 0?"info":L,B=f.danger,Y=B===void 0?!1:B,H=f.title,V=f.width,A=V===void 0?400:V,R=f.className,X=R===void 0?"":R,un=N()(f,d);return{width:A,transitionName:"",restProps:un,closeIcon:null,title:x({type:i,title:H}),okButtonProps:{danger:i==="error"||i==="warning"||Y},destroyOnClose:!0,className:M()(X,"animate-in","".concat((0,I.getCommonConfig)().sparkPrefix,"-alert-dialog")),content:f.content||r,children:r}},u=function(f){var x=c(f),r=(0,t.useStyle)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{}),(0,m.jsx)(b.Z,v()(v()({width:x.width,transitionName:""},x.restProps),{},{closeIcon:null,title:x.title,okButtonProps:x.okButtonProps||{},destroyOnClose:x.destroyOnClose,className:x.className,children:x.content||x.children}))]})},a=["success","info","warning","error","confirm"];a.forEach(function(s){u[s]=function(f){var x=c(v()(v()({},f),{},{type:s}));function r(){var L=(0,t.useStyle)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{}),x.content]})}return b.Z.confirm(v()(v()(v()({},x),x.restProps),{},{content:(0,m.jsx)(r,{}),icon:null}))}}),O.default=u},15560:function(ln,O,n){n.d(O,{Z:function(){return P}});var z=n(97857),v=n.n(z),F=n(36569),N=n(67294),T=n(68400),o=n.n(T),E=n(3067),S,D=(0,E.default)(S||(S=o()([`

.`,"-anchor-wrapper .","-anchor .",`-anchor-link-title {
  color: var(--`,`-color-text-secondary);
  line-height: 32px;
  padding: 0 16px;
}

.`,`-anchor-link {
  --`,`-anchor-link-padding-block: 0;
  --`,`-anchor-link-padding-inline-start: 0;
}
`])),function(M){return M.antPrefix},function(M){return M.antPrefix},function(M){return M.antPrefix},function(M){return M.antPrefix},function(M){return M.antPrefix},function(M){return M.antPrefix},function(M){return M.antPrefix}),C=n(85893),b=(0,N.forwardRef)(function(M,I){var t=D();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(t,{}),(0,C.jsx)(F.Z,v()({},M))]})}),P=b},34952:function(ln,O,n){n.d(O,{Z:function(){return d}});var z=n(97857),v=n.n(z),F=n(5574),N=n.n(F),T=n(13769),o=n.n(T),E=n(68997),S=n(67294),D=n(68400),C=n.n(D),b=n(3067),P,M=(0,b.default)(P||(P=C()([`
.`,`-avatar {
  cursor: default;
}
`])),function(c){return c.antPrefix}),I=n(85893),t=["children"],m=(0,S.forwardRef)(function(c,u){var a=M(),s=c.children,f=o()(c,t),x=(0,S.useState)(c.children),r=N()(x,2),L=r[0],i=r[1];return(0,S.useEffect)(function(){if(typeof s=="string"){i(s.slice(0,1));return}i(s)},[s]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{}),(0,I.jsx)(E.Z,v()(v()({ref:u},f),{},{children:L}))]})}),d=m},21004:function(ln,O,n){n.d(O,{Z:function(){return u}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(9838),o=n(68997),E=n(85418),S=n(85673),D=n(67294),C=n(93865),b=n(68400),P=n.n(b),M=n(3067),I,t=(0,M.default)(I||(I=P()([`
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
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix}),m=n(85893),d=["items"],c=function(s){var f=s.items,x=f===void 0?[]:f,r=N()(s,d),L=(0,C.getCommonConfig)(),i=L.sparkPrefix,B=t(),Y=D.useMemo(function(){return x.map(function(H){var V=H.title,A=[];return H.iconUrl&&A.push((0,m.jsx)(o.Z,{size:20,src:H.iconUrl},"avatar")),H.dropdown?A.push((0,m.jsxs)("span",{className:"".concat(i,"-breadcrumb-dropdown-title"),children:[H.title,(0,m.jsx)(T.Z,{size:16})]},"title")):A.push((0,m.jsx)("span",{children:H.title},"title")),H.dropdown?V=(0,m.jsx)(E.Z,{menu:{items:H.dropdown.items},trigger:["click"],placement:"bottomCenter",className:"".concat(i,"-breadcrumb-dropdown"),children:(0,m.jsx)("span",{children:A})}):(H.iconUrl||A.length>1)&&(V=(0,m.jsx)("span",{className:"".concat(i,"-breadcrumb-item-content"),children:A})),v()(v()({},H),{},{title:V})})},[x]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B,{}),(0,m.jsx)(S.Z,v()(v()({},r),{},{items:Y,className:"".concat(i,"-breadcrumb ").concat(r.className||"")}))]})},u=c},57027:function(ln,O,n){var z=n(97857),v=n.n(z),F=n(52677),N=n.n(F),T=n(13769),o=n.n(T),E=n(40443),S=n(9361),D=n(83622),C=n(55839),b=n(93967),P=n.n(b),M=n(67294),I=n(38654),t=n(33369),m=n(85893),d=["iconSize","loading"],c=(0,M.forwardRef)(function(u,a){var s=S.Z.useToken(),f=u.iconSize,x=u.loading,r=o()(u,d),L=M.useMemo(function(){return r.type==="primaryLess"?"primary":r.type==="textCompact"?"link":r.type},[r.type]),i=(0,M.useMemo)(function(){if(x){if(typeof x=="boolean")return{icon:(0,m.jsx)(E.Z,{spin:!0})};if(N()(x)==="object")return v()({icon:(0,m.jsx)(E.Z,{spin:!0})},x)}return x},[x]),B=M.useMemo(function(){return x&&N()(x)==="object"&&x.icon?x==null?void 0:x.icon:r.iconType?(0,m.jsx)(I.Z,{type:r.iconType,size:f!=null?f:r.size}):r.icon?M.cloneElement(r.icon,{size:f!=null?f:r.size}):null},[r.iconType,r.icon]),Y=(0,m.jsx)(D.ZP,v()(v()({},r),{},{loading:i,ref:a,type:L,icon:B,style:v()({fontWeight:500,lineHeight:1},r.style),className:P()(r.className,"spark-button")}));return r.type==="primaryLess"?(0,m.jsx)(C.ZP,{theme:{token:{colorPrimary:s.token.colorText,colorPrimaryHover:s.token.colorTextSecondary,colorPrimaryActive:s.token.colorTextBase}},children:(0,m.jsx)(t.Z,{title:r.tooltipContent,children:Y})}):r.type==="textCompact"?(0,m.jsx)(t.Z,{title:r.tooltipContent,children:(0,m.jsx)(D.ZP,v()(v()({},r),{},{ref:a,icon:B,color:"default",variant:"link",style:v()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},r.style),className:P()(r.className,"spark-button")}))}):(0,m.jsx)(t.Z,{title:r.tooltipContent,children:Y})});O.Z=c},48432:function(ln,O,n){n.d(O,{Z:function(){return m}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(4393),E=n(93967),S=n.n(E),D=n(68400),C=n.n(D),b=n(3067),P,M=(0,b.default)(P||(P=C()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix}),I=n(85893),t=["title","info","children","className"],m=function(d){var c=d.title,u=d.info,a=d.children,s=d.className,f=N()(d,t),x=M(),r=(0,T.getCommonConfig)(),L=r.sparkPrefix;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(x,{}),(0,I.jsx)(o.Z,v()(v()({className:S()("".concat(L,"-card"),s)},f),{},{title:null,children:(0,I.jsxs)("div",{className:"".concat(L,"-card-wrapper"),children:[c&&(0,I.jsx)("div",{className:"".concat(L,"-title"),children:c}),u&&(0,I.jsx)("div",{className:"".concat(L,"-info"),children:u}),a&&(0,I.jsx)("div",{className:"".concat(L,"-content"),children:a})]})}))]})}},34304:function(ln,O,n){n.d(O,{Z:function(){return m}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(84567),o=n(67294),E=n(93865),S=n(68400),D=n.n(S),C=n(3067),b,P=(0,C.default)(b||(b=D()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),M=n(85893),I=["description","descriptionClassName","descriptionStyle","children"],t=function(c){var u=c.description,a=c.descriptionClassName,s=c.descriptionStyle,f=c.children,x=N()(c,I),r=(0,E.getCommonConfig)(),L=r.antPrefix,i=r.sparkPrefix,B=P(),Y={marginLeft:"24px",marginTop:"6px",fontSize:"12px",color:"var(--".concat(L,"-color-text-tertiary)")};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(B,{}),(0,M.jsxs)("div",{className:"".concat(i,"-checkbox"),children:[(0,M.jsx)(T.Z,v()(v()({},x),{},{children:f})),u&&(0,M.jsx)("div",{className:a,style:v()(v()({},Y),s),children:u})]})]})};t.Group=T.Z.Group;var m=t},43158:function(ln,O,n){n.d(O,{ZP:function(){return an},xO:function(){return R}});var z=n(97857),v=n.n(z),F=n(19632),N=n.n(F),T=n(93865),o=n(31639),E=n(48120),S=n(4997),D=n(82261),C=n(60310),b=n(122),P=n(9155),M=n(48825),I=n(12386),t=n(33236),m=n(62391),d=n(28519),c=n(17089),u=n(89580),a=n(55839),s=n(9361),f=n(93967),x=n.n(f),r=n(16295),L=n(67294),i=n(68400),B=n.n(i),Y=n(3067),H,V=(0,Y.default)(H||(H=B()([`
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
`])),function(q){return q.sparkPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix},function(q){return q.antPrefix}),A=n(85893),R={javascript:[(0,b.eJ)()],jsx:[(0,b.eJ)()],python:[(0,t.Vs)()],json:[(0,P.AV)()],java:[(0,C.C)()],yaml:[(0,m.rV)()],php:[(0,I.h)()],go:[(0,S.go)()],csharp:[(0,o.N)()],css:[(0,E.iv)()],html:[(0,D.dy)()],curl:[],markdown:[(0,M.JH)()]},X={javascript:[(0,d.Q2)()],json:[(0,d.Q2)(),(0,d.ir)((0,P.ap)())]},un=function(){var en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"{}",fn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,dn=en;try{dn=JSON.stringify(JSON.parse(en),null,fn)}catch(Nn){}return dn},vn=function(en){var fn,dn=(0,T.getCommonConfig)(),Nn=L.useContext(a.ZP.ConfigContext),gn=((fn=Nn.theme)===null||fn===void 0?void 0:fn.algorithm)===s.Z.darkAlgorithm,Cn=dn.sparkPrefix,xn=dn.antPrefix,cn=V(),sn=(0,L.useMemo)(function(){return en.theme===void 0?gn?c.Pc:c.Zp:en.theme==="dark"?c.Pc:c.Zp},[gn]),Ln=typeof en.language=="string"?[].concat(N()(R[en.language]||[]),N()(en.value&&en.language in X?X[en.language]:[])):en.language.reduce(function(pn,mn){return[].concat(N()(pn),[R[mn]])},[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(cn,{}),(0,A.jsx)("div",{className:x()("".concat(Cn,"-code-block"),en.className),children:(0,A.jsx)(u.ZP,v()({extensions:Ln,value:en.language==="json"?un(en.value):en.value,theme:sn},(0,r.Z)(en,["language","theme","extensions","value"])))})]})},an=vn},81843:function(ln,O,n){n.d(O,{Z:function(){return b}});var z=n(97857),v=n.n(z),F=n(47221),N=n(68400),T=n.n(N),o=n(3067),E,S=(0,o.default)(E||(E=T()([`
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
`])),function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),D=n(85893),C=function(M){var I=S();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(I,{}),(0,D.jsx)(F.Z,v()({},M))]})},b=C},71615:function(ln,O,n){n.d(O,{Z:function(){return a}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(5574),o=n.n(T),E=n(93865),S=n(9838),D=n(28387),C=n(93967),b=n.n(C),P=n(67294),M=n(68400),I=n.n(M),t=n(3067),m,d=(0,t.default)(m||(m=I()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix}),c=n(85893),u=function(f){var x,r,L,i,B,Y,H=f.collapsedHeight,V=f.expandedHeight,A=f.title,R=A===void 0?"":A,X=f.expandOnPanelClick,un=f.extra,vn=f.children,an=f.defaultExpanded,q=(0,P.useState)(an),en=o()(q,2),fn=en[0],dn=en[1],Nn=(0,P.useState)(!0),gn=o()(Nn,2),Cn=gn[0],xn=gn[1],cn=(0,P.useState)(H),sn=o()(cn,2),Ln=sn[0],pn=sn[1],mn=(0,P.useRef)(null),An=(0,E.getCommonConfig)(),On=An.sparkPrefix,Tn=An.antPrefix,_=d();(0,P.useEffect)(function(){mn.current&&pn(fn&&V?V:fn?mn.current.scrollHeight:H)},[fn,H,V,vn]);var Rn=function(tn){tn.stopPropagation(),tn.preventDefault(),dn(function(Xn){return!Xn})},jn=function(tn){tn.stopPropagation(),tn.preventDefault(),V&&(fn||dn(!0))},yn=function(){xn(!0)},Wn=function(){xn(!0)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(_,{}),(0,c.jsxs)("div",{className:b()("".concat(On,"-collapse-panel"),{collapsible:!fn&&X},(x=f.classNames)===null||x===void 0?void 0:x.wrapper),style:(r=f.styles)===null||r===void 0?void 0:r.wrapper,onClick:X?jn:void 0,onMouseEnter:X?yn:void 0,onMouseLeave:X?Wn:void 0,children:[(0,c.jsxs)("div",{className:b()("".concat(On,"-collapse-panel-header"),(L=f.classNames)===null||L===void 0?void 0:L.header),style:(i=f.styles)===null||i===void 0?void 0:i.header,onClick:Rn,children:[(0,c.jsxs)("span",{className:"".concat(On,"-collapse-panel-title"),children:[R,V&&(0,c.jsxs)("div",{className:"".concat(On,"-collapse-panel-icon-wrapper"),children:[!fn&&Cn&&X&&(0,c.jsx)(S.Z,{style:{fontSize:"18px"}}),fn&&Cn&&X&&(0,c.jsx)(D.Z,{style:{fontSize:"18px"}})]})]}),un&&(0,c.jsx)("div",{className:"".concat(On,"-collapse-panel-extra"),onClick:function(tn){tn.stopPropagation(),tn.preventDefault()},children:un})]}),(0,c.jsxs)("div",{className:b()("".concat(On,"-collapse-panel-content"),N()({},"".concat(On,"-collapse-panel-expanded"),fn),(B=f.classNames)===null||B===void 0?void 0:B.content),style:v()({height:Ln},(Y=f.styles)===null||Y===void 0?void 0:Y.content),children:[(0,c.jsx)("div",{ref:mn,className:"".concat("".concat(On,"-collapse-panel-contentWrapper")," ",fn&&V?"scrollable":""),children:vn}),!fn&&V&&(0,c.jsx)("div",{className:"".concat(On,"-collapse-panel-mask")})]})]})]})},a=u},8732:function(ln,O,n){n.d(O,{Z:function(){return x}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(95706),E=n(9361),S=n(55839),D=n(88760),C=n(93967),b=n.n(C),P=n(67294),M=n(68400),I=n.n(M),t=n(3067),m,d=(0,t.default)(m||(m=I()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),c=n(85893),u=["className","popupClassName"],a=["className","popupClassName"],s=function(L){var i=L.className,B=L.popupClassName,Y=N()(L,u),H=E.Z.useToken(),V=H.token,A=(0,T.getCommonConfig)(),R=A.sparkPrefix,X=d();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(X,{}),(0,c.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:V.colorPrimary,paddingInline:8}}},children:(0,c.jsx)(D.default,v()({suffixIcon:(0,c.jsx)(o.Z,{style:{fontSize:"20px"}}),className:b()("".concat(R,"-picker"),i),popupClassName:b()("".concat(R,"-picker-dropdown"),B)},Y))})]})},f=function(L){var i=L.className,B=L.popupClassName,Y=N()(L,a),H=E.Z.useToken(),V=H.token,A=(0,T.getCommonConfig)(),R=A.sparkPrefix,X=d();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(X,{}),(0,c.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:V.colorPrimary,paddingInline:8}}},children:(0,c.jsx)(D.default.RangePicker,v()({suffixIcon:(0,c.jsx)(o.Z,{style:{fontSize:"20px"}}),className:b()("".concat(R,"-picker"),i),popupClassName:b()("".concat(R,"-picker-dropdown"),B),popupStyle:{padding:0}},Y))})]})};s.RangePicker=f;var x=s},69065:function(ln,O,n){n.d(O,{Z:function(){return a}});var z=n(9783),v=n.n(z),F=n(97857),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(9361),D=n(26412),C=n(93967),b=n.n(C),P=n(68400),M=n.n(P),I=n(3067),t,m=(0,I.default)(t||(t=M()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),d=n(85893),c=["className","layout","colon","style"],u=function(f){var x,r,L=m(),i=f.className,B=f.layout,Y=f.colon,H=Y===void 0?!1:Y,V=f.style,A=o()(f,c),R=(0,E.getCommonConfig)(),X=R.antPrefix,un=S.Z.useToken(),vn=un.token;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L,{}),(0,d.jsx)(D.Z,N()({className:b()(i,B==="vertical"&&"".concat(X,"-descriptions-vertical")),layout:B,colon:H,style:N()(v()(v()({},"--".concat(X,"-descriptions-vertical-label-padding-bottom"),"".concat((x=vn.Descriptions.verticalLabelPaddingBottom)!==null&&x!==void 0?x:4,"px")),"--".concat(X,"-descriptions-vertical-content-padding-bottom"),"".concat((r=vn.Descriptions.verticalContentPaddingBottom)!==null&&r!==void 0?r:24,"px")),V)},A))]})},a=u},11765:function(ln,O,n){n.d(O,{Z:function(){return L}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(89102),D=n(85265),C=n(93967),b=n.n(C),P=n(57027),M=n(67294),I=n(68400),t=n.n(I),m=n(3067),d,c=(0,m.default)(d||(d=t()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),u=n(85893),a=["onOk","onCancel","okText","okButtonProps","cancelText","cancelButtonProps","info","footer"],s=function(B){var Y=B.onOk,H=B.onCancel,V=B.okText,A=V===void 0?"\u786E\u5B9A":V,R=B.okButtonProps,X=B.cancelText,un=X===void 0?"\u53D6\u6D88":X,vn=B.cancelButtonProps,an=B.info,q=B.footer,en=o()(B,a),fn=c(),dn=(0,E.getCommonConfig)(),Nn=dn.antPrefix,gn=function(xn){if(H)H();else{var cn;(cn=en.onClose)===null||cn===void 0||cn.call(en,xn)}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(fn,{}),(0,u.jsx)(L,v()(v()({},en),{},{footer:q||(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"".concat(Nn,"-drawer-footer-info"),children:an}),(0,u.jsxs)("div",{className:"".concat(Nn,"-drawer-footer-buttons"),children:[(0,u.jsx)(P.Z,v()(v()({onClick:gn},vn),{},{children:un})),(0,u.jsx)(P.Z,v()(v()({type:"primary",onClick:Y},R),{},{children:A}))]})]})}))]})},f=s,x=["children","className","style","showDivider"],r=function(B){var Y=B.children,H=B.className,V=B.style,A=B.showDivider,R=A===void 0?!0:A,X=o()(B,x),un=c(),vn=(0,E.getCommonConfig)(),an=vn.sparkPrefix,q=vn.antPrefix;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(un,{}),(0,u.jsx)(D.Z,v()(v()({closeIcon:(0,u.jsx)(S.Z,{size:24}),className:b()("".concat(an,"-drawer"),H,N()({},"".concat(q,"-show-divider"),R)),style:v()({},V)},X),{},{children:Y}))]})};Object.assign(r,{Confirm:f});var L=r},28299:function(ln,O,n){n.d(O,{Z:function(){return I}});var z=n(97857),v=n.n(z),F=n(93865),N=n(97634),T=n(85418),o=n(67294),E=n(68400),S=n.n(E),D=n(3067),C,b=(0,D.default)(C||(C=S()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),P=n(85893),M=function(m){var d,c,u=(0,F.getCommonConfig)(),a=u.antPrefix,s=(0,o.useMemo)(function(){var x;if(!((x=m.menu)!==null&&x!==void 0&&x.selectable)||!m.menu){var r;return((r=m.menu)===null||r===void 0?void 0:r.items)||[]}return m.menu.items.map(function(L){var i={},B=L.label;return B&&(i.label=(0,P.jsxs)("div",{className:"".concat(a,"-dropdown-check-wrapper"),children:[B,(0,P.jsx)("span",{className:"".concat(a,"-dropdown-check-icon"),children:(0,P.jsx)(N.Z,{})})]})),v()(v()({},L),i)})},[(d=m.menu)===null||d===void 0?void 0:d.items,(c=m.menu)===null||c===void 0?void 0:c.selectable]),f=b();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f,{}),(0,P.jsx)(T.Z,v()(v()({},m),{},{menu:v()(v()({},m.menu),{},{items:s}),overlayStyle:v()({},m.overlayStyle)}))]})},I=M},21860:function(ln,O,n){n.d(O,{Z:function(){return s}});var z=n(97857),v=n.n(z),F=n(93865),N=n(86250),T=n(67294),o=n(57027),E=n(68400),S=n.n(E),D=n(3067),C,b=(0,D.default)(C||(C=S()([`
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
`])),function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix},function(f){return f.sparkPrefix},function(f){return f.antPrefix}),P=n(5574),M=n.n(P),I=n(29691),t=n(85893),m=document.querySelector("#empty-svg-container");function d(f){var x=(0,I.ZP)(),r=M()(x,5),L=r[4],i=f.svgUrl,B=f.tokenMap,Y=B===void 0?{}:B,H=f.className,V=f.size,A=i.includes(".svg"),R=(0,T.useState)(""),X=M()(R,2),un=X[0],vn=X[1];return(0,T.useEffect)(function(){if(!m){var an=document.createElement("div");an.innerHTML="<svg></svg>",m=an.querySelector("svg"),m.id="empty-svg-container",m.setAttribute("aria-hidden","true"),m.style.position="absolute",m.style.width="0",m.style.height="0",m.style.overflow="hidden",document.body.insertBefore(m,document.body.firstChild)}},[]),(0,T.useEffect)(function(){m&&L!==null&&L!==void 0&&L.key&&(m.classList.forEach(function(an){return m.classList.remove(an)}),m.classList.add(L.key))},[L==null?void 0:L.key]),(0,T.useEffect)(function(){if(A){var an=btoa(i),q='<svg><use xlink:href="#'.concat(an,'"></use></svg>');if(vn(q),!document.getElementById(an)){var en='<symbol id="'.concat(an,'"></symbol>');m.innerHTML=m.innerHTML+en,fetch(i).then(function(fn){return fn.text()}).then(function(fn){var dn=fn;Object.keys(Y).forEach(function(cn){dn=dn.replace(new RegExp(cn,"g"),Y[cn])});var Nn=dn.match(/viewBox="([^"]*)"/),gn=Nn?Nn[1]:"",Cn=document.getElementById(an),xn=dn.replace(/<svg[^>]*>/,"");xn=xn.replace(/<\/svg>/,""),gn&&Cn.setAttribute("viewBox",gn),Cn.innerHTML=xn})}}},[i]),A?(0,t.jsx)("div",{className:H,dangerouslySetInnerHTML:{__html:un},style:{width:V,height:V}}):(0,t.jsx)("img",{src:i,className:H,style:{width:V,height:V}})}var c={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},u={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},a=function(x){var r=x.imageStyle,L=x.title,i=x.description,B=i===void 0?"No Data":i,Y=x.children,H=x.texture,V=H===void 0?!0:H,A=x.size,R=A===void 0?320:A,X=x.okText,un=x.okType,vn=un===void 0?"primary":un,an=x.okButtonProps,q=x.onOk,en=x.type||"noData",fn=(0,F.getCommonConfig)(),dn=fn.sparkPrefix,Nn=fn.isDarkMode,gn=fn.antPrefix,Cn=x.image||u[en].url,xn=(0,T.useMemo)(function(){var pn,mn=v()({},(pn=u[en])===null||pn===void 0?void 0:pn.tokenMap);return mn&&Object.keys(mn).forEach(function(An){mn[An]="var(--".concat(gn,"-").concat(mn[An],")")}),mn},[en]),cn=(0,T.useMemo)(function(){var pn=v()({},c.tokenMap);return Object.keys(pn).forEach(function(mn){pn[mn]="var(--".concat(gn,"-").concat(pn[mn],")")}),pn},[Nn]),sn=b(),Ln=typeof R=="string"?parseFloat(R.replace(/px/i,"")):R!=null?R:0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(sn,{}),(0,t.jsxs)("div",{className:"".concat(dn,"-empty ").concat(x.className||""),style:v()(v()({},r),{},{width:R,height:R}),children:[V&&(0,t.jsx)(d,{size:R,svgUrl:c.url,tokenMap:cn,className:"".concat(dn,"-empty-texture")}),(0,t.jsx)(d,{size:R,svgUrl:Cn,tokenMap:xn,className:"".concat(dn,"-empty-image")}),(0,t.jsxs)(N.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[L&&(0,t.jsx)("div",{className:"".concat(dn,"-empty-title"),style:{marginBottom:B?.025*Ln:0},children:L}),B&&(0,t.jsx)("div",{className:"".concat(dn,"-empty-description"),children:B}),!!X&&(0,t.jsx)("div",{style:{marginTop:.05*Ln},children:(0,t.jsx)(o.Z,v()(v()({type:vn,onClick:q},an),{},{children:X}))}),!!Y&&Y]})]})]})},s=a},4767:function(ln,O,n){n.d(O,{s:function(){return Ye},Z:function(){return Qe}});var z=n(97857),v=n.n(z),F=n(93865),N=n(67294),T=Object.defineProperty,o=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,D=(p,h,y)=>h in p?T(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,C=(p,h)=>{for(var y in h||(h={}))E.call(h,y)&&D(p,y,h[y]);if(o)for(var y of o(h))S.call(h,y)&&D(p,y,h[y]);return p};const b=p=>React.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"common_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#common_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#7E7AFA"}),React.createElement("path",{d:"M12 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Z",fill:"#FFF"}),React.createElement("path",{d:"M26 6a4 4 0 0 0 4 4h6L26 0v6Z",fill:"#FFF",fillOpacity:.4})));var P="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzdFN0FGQSIvPjxwYXRoIGQ9Ik0xMiAxN2ExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDEgMSAwIDJIMTNhMSAxIDAgMCAxLTEtMVptMCA1YTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMSAxIDAgMkgxM2ExIDEgMCAwIDEtMS0xWm0wIDVhMSAxIDAgMCAxIDEtMWgxNGExIDEgMCAxIDEgMCAySDEzYTEgMSAwIDAgMS0xLTFaIiBmaWxsPSIjRkZGIi8+PHBhdGggZD0iTTI2IDZhNCA0IDAgMCAwIDQgNGg2TDI2IDB2NloiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjQiLz48L2c+PC9zdmc+",M=Object.defineProperty,I=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(p,h,y)=>h in p?M(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,c=(p,h)=>{for(var y in h||(h={}))t.call(h,y)&&d(p,y,h[y]);if(I)for(var y of I(h))m.call(h,y)&&d(p,y,h[y]);return p};const u=p=>React.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"epub_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#epub_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#8DCA36"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"m29.292 23.716-8.581 8.582a1.001 1.001 0 0 1-1.416 0l-8.587-8.587a1.001 1.001 0 0 1 0-1.416l8.587-8.587a1.001 1.001 0 0 1 1.416 0l5.234 5.234-6.28 6.279-1.698-1.699 4.58-4.58-2.544-2.544-6.605 6.605 6.605 6.605L28.3 21.31l.991.99a1.001 1.001 0 0 1 0 1.416Z",fillRule:"evenodd",fill:"#FFF"})));var a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzhEQ0EzNiIvPjxwYXRoIGQ9Ik0yNiAwdjZhNCA0IDAgMCAwIDQgNGg2TDI2IDBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0ibTI5LjI5MiAyMy43MTYtOC41ODEgOC41ODJhMS4wMDEgMS4wMDEgMCAwIDEtMS40MTYgMGwtOC41ODctOC41ODdhMS4wMDEgMS4wMDEgMCAwIDEgMC0xLjQxNmw4LjU4Ny04LjU4N2ExLjAwMSAxLjAwMSAwIDAgMSAxLjQxNiAwbDUuMjM0IDUuMjM0LTYuMjggNi4yNzktMS42OTgtMS42OTkgNC41OC00LjU4LTIuNTQ0LTIuNTQ0LTYuNjA1IDYuNjA1IDYuNjA1IDYuNjA1TDI4LjMgMjEuMzFsLjk5MS45OWExLjAwMSAxLjAwMSAwIDAgMSAwIDEuNDE2WiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==",s=Object.defineProperty,f=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,L=(p,h,y)=>h in p?s(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,i=(p,h)=>{for(var y in h||(h={}))x.call(h,y)&&L(p,y,h[y]);if(f)for(var y of f(h))r.call(h,y)&&L(p,y,h[y]);return p};const B=p=>React.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"excel_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#excel_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#44C161"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"m19.996 25.918-4.78 5.697q-.039.046-.081.087-.043.042-.09.08-.046.037-.096.07-.05.032-.102.06-.053.027-.108.049-.056.022-.113.039-.057.016-.116.027-.058.011-.118.017-.059.005-.118.004-.06 0-.12-.007-.058-.007-.117-.019-.058-.012-.115-.03t-.111-.041q-.055-.024-.107-.052-.053-.029-.102-.063-.049-.033-.095-.072-.045-.038-.087-.08-.042-.043-.079-.09-.037-.046-.07-.096-.032-.05-.06-.103-.027-.052-.05-.108-.022-.055-.038-.112-.017-.057-.028-.116-.01-.058-.016-.118-.005-.059-.005-.119.001-.06.007-.118.007-.06.02-.118.011-.058.03-.115.017-.057.04-.112.024-.054.053-.107.028-.052.062-.101.034-.05.072-.095l5.055-6.024-5.058-6.027q-.155-.185-.227-.415-.073-.23-.052-.47.021-.24.133-.455.111-.214.296-.369.045-.038.095-.072.049-.033.101-.062.052-.028.107-.052.055-.023.112-.041.056-.018.115-.03.058-.013.117-.02.06-.006.119-.006.06 0 .119.004.06.006.118.016.058.011.115.028.058.017.113.039t.108.05q.053.027.103.06.05.032.096.07.047.037.09.079.042.041.08.087l4.783 5.7 4.793-5.713q.038-.045.08-.087.043-.042.09-.08.046-.036.096-.069.05-.032.103-.06.053-.027.108-.05.055-.022.113-.039.057-.016.115-.027.059-.011.118-.016.06-.006.12-.005.059 0 .118.007.06.007.117.019.059.012.115.03.057.018.112.041.055.024.107.052.052.03.101.063.05.033.095.072.046.038.088.08.041.043.079.09.037.046.07.096.032.05.06.103.027.052.05.108.021.055.038.112.017.057.028.116.01.059.016.118.005.06.004.119 0 .06-.007.119-.006.059-.019.117-.012.058-.03.115t-.041.112q-.023.055-.052.107-.029.052-.062.101-.034.05-.072.095l-5.068 6.04 5.065 6.037q.038.046.072.095.034.049.062.101.029.052.052.107.024.055.042.112.018.056.03.115.012.058.019.117.006.06.007.12 0 .059-.005.118-.005.06-.016.118-.01.058-.028.116-.016.057-.039.112-.022.055-.05.108-.027.053-.06.103-.032.05-.07.096-.036.047-.078.09-.042.042-.087.08-.185.155-.415.228-.23.072-.47.051-.24-.02-.455-.132-.214-.111-.369-.296l-4.79-5.71Z",fillRule:"evenodd",fill:"#FFF"})));var Y="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzQ0QzE2MSIvPjxwYXRoIGQ9Ik0yNiAwdjZhNCA0IDAgMCAwIDQgNGg2TDI2IDBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0ibTE5Ljk5NiAyNS45MTgtNC43OCA1LjY5N3EtLjAzOS4wNDYtLjA4MS4wODctLjA0My4wNDItLjA5LjA4LS4wNDYuMDM3LS4wOTYuMDctLjA1LjAzMi0uMTAyLjA2LS4wNTMuMDI3LS4xMDguMDQ5LS4wNTYuMDIyLS4xMTMuMDM5LS4wNTcuMDE2LS4xMTYuMDI3LS4wNTguMDExLS4xMTguMDE3LS4wNTkuMDA1LS4xMTguMDA0LS4wNiAwLS4xMi0uMDA3LS4wNTgtLjAwNy0uMTE3LS4wMTktLjA1OC0uMDEyLS4xMTUtLjAzdC0uMTExLS4wNDFxLS4wNTUtLjAyNC0uMTA3LS4wNTItLjA1My0uMDI5LS4xMDItLjA2My0uMDQ5LS4wMzMtLjA5NS0uMDcyLS4wNDUtLjAzOC0uMDg3LS4wOC0uMDQyLS4wNDMtLjA3OS0uMDktLjAzNy0uMDQ2LS4wNy0uMDk2LS4wMzItLjA1LS4wNi0uMTAzLS4wMjctLjA1Mi0uMDUtLjEwOC0uMDIyLS4wNTUtLjAzOC0uMTEyLS4wMTctLjA1Ny0uMDI4LS4xMTYtLjAxLS4wNTgtLjAxNi0uMTE4LS4wMDUtLjA1OS0uMDA1LS4xMTkuMDAxLS4wNi4wMDctLjExOC4wMDctLjA2LjAyLS4xMTguMDExLS4wNTguMDMtLjExNS4wMTctLjA1Ny4wNC0uMTEyLjAyNC0uMDU0LjA1My0uMTA3LjAyOC0uMDUyLjA2Mi0uMTAxLjAzNC0uMDUuMDcyLS4wOTVsNS4wNTUtNi4wMjQtNS4wNTgtNi4wMjdxLS4xNTUtLjE4NS0uMjI3LS40MTUtLjA3My0uMjMtLjA1Mi0uNDcuMDIxLS4yNC4xMzMtLjQ1NS4xMTEtLjIxNC4yOTYtLjM2OS4wNDUtLjAzOC4wOTUtLjA3Mi4wNDktLjAzMy4xMDEtLjA2Mi4wNTItLjAyOC4xMDctLjA1Mi4wNTUtLjAyMy4xMTItLjA0MS4wNTYtLjAxOC4xMTUtLjAzLjA1OC0uMDEzLjExNy0uMDIuMDYtLjAwNi4xMTktLjAwNi4wNiAwIC4xMTkuMDA0LjA2LjAwNi4xMTguMDE2LjA1OC4wMTEuMTE1LjAyOC4wNTguMDE3LjExMy4wMzl0LjEwOC4wNXEuMDUzLjAyNy4xMDMuMDYuMDUuMDMyLjA5Ni4wNy4wNDcuMDM3LjA5LjA3OS4wNDIuMDQxLjA4LjA4N2w0Ljc4MyA1LjcgNC43OTMtNS43MTNxLjAzOC0uMDQ1LjA4LS4wODcuMDQzLS4wNDIuMDktLjA4LjA0Ni0uMDM2LjA5Ni0uMDY5LjA1LS4wMzIuMTAzLS4wNi4wNTMtLjAyNy4xMDgtLjA1LjA1NS0uMDIyLjExMy0uMDM5LjA1Ny0uMDE2LjExNS0uMDI3LjA1OS0uMDExLjExOC0uMDE2LjA2LS4wMDYuMTItLjAwNS4wNTkgMCAuMTE4LjAwNy4wNi4wMDcuMTE3LjAxOS4wNTkuMDEyLjExNS4wMy4wNTcuMDE4LjExMi4wNDEuMDU1LjAyNC4xMDcuMDUyLjA1Mi4wMy4xMDEuMDYzLjA1LjAzMy4wOTUuMDcyLjA0Ni4wMzguMDg4LjA4LjA0MS4wNDMuMDc5LjA5LjAzNy4wNDYuMDcuMDk2LjAzMi4wNS4wNi4xMDMuMDI3LjA1Mi4wNS4xMDguMDIxLjA1NS4wMzguMTEyLjAxNy4wNTcuMDI4LjExNi4wMS4wNTkuMDE2LjExOC4wMDUuMDYuMDA0LjExOSAwIC4wNi0uMDA3LjExOS0uMDA2LjA1OS0uMDE5LjExNy0uMDEyLjA1OC0uMDMuMTE1dC0uMDQxLjExMnEtLjAyMy4wNTUtLjA1Mi4xMDctLjAyOS4wNTItLjA2Mi4xMDEtLjAzNC4wNS0uMDcyLjA5NWwtNS4wNjggNi4wNCA1LjA2NSA2LjAzN3EuMDM4LjA0Ni4wNzIuMDk1LjAzNC4wNDkuMDYyLjEwMS4wMjkuMDUyLjA1Mi4xMDcuMDI0LjA1NS4wNDIuMTEyLjAxOC4wNTYuMDMuMTE1LjAxMi4wNTguMDE5LjExNy4wMDYuMDYuMDA3LjEyIDAgLjA1OS0uMDA1LjExOC0uMDA1LjA2LS4wMTYuMTE4LS4wMS4wNTgtLjAyOC4xMTYtLjAxNi4wNTctLjAzOS4xMTItLjAyMi4wNTUtLjA1LjEwOC0uMDI3LjA1My0uMDYuMTAzLS4wMzIuMDUtLjA3LjA5Ni0uMDM2LjA0Ny0uMDc4LjA5LS4wNDIuMDQyLS4wODcuMDgtLjE4NS4xNTUtLjQxNS4yMjgtLjIzLjA3Mi0uNDcuMDUxLS4yNC0uMDItLjQ1NS0uMTMyLS4yMTQtLjExMS0uMzY5LS4yOTZsLTQuNzktNS43MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",H=Object.defineProperty,V=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,X=(p,h,y)=>h in p?H(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,un=(p,h)=>{for(var y in h||(h={}))A.call(h,y)&&X(p,y,h[y]);if(V)for(var y of V(h))R.call(h,y)&&X(p,y,h[y]);return p};const vn=p=>React.createElement("svg",un({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"html_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#html_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#FCB723"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M12 23.5v6.316c0 .654.537 1.184 1.2 1.184.663 0 1.2-.53 1.2-1.184v-5.132h11.2v5.132c0 .654.537 1.184 1.2 1.184.663 0 1.2-.53 1.2-1.184V17.184C28 16.53 27.463 16 26.8 16c-.663 0-1.2.53-1.2 1.184v5.132H14.4v-5.132c0-.654-.537-1.184-1.2-1.184-.663 0-1.2.53-1.2 1.184V23.5Z",fillRule:"evenodd",fill:"#FFF"})));var an="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iI0ZDQjcyMyIvPjxwYXRoIGQ9Ik0yNiAwdjZhNCA0IDAgMCAwIDQgNGg2TDI2IDBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTEyIDIzLjV2Ni4zMTZjMCAuNjU0LjUzNyAxLjE4NCAxLjIgMS4xODQuNjYzIDAgMS4yLS41MyAxLjItMS4xODR2LTUuMTMyaDExLjJ2NS4xMzJjMCAuNjU0LjUzNyAxLjE4NCAxLjIgMS4xODQuNjYzIDAgMS4yLS41MyAxLjItMS4xODRWMTcuMTg0QzI4IDE2LjUzIDI3LjQ2MyAxNiAyNi44IDE2Yy0uNjYzIDAtMS4yLjUzLTEuMiAxLjE4NHY1LjEzMkgxNC40di01LjEzMmMwLS42NTQtLjUzNy0xLjE4NC0xLjItMS4xODQtLjY2MyAwLTEuMi41My0xLjIgMS4xODRWMjMuNVoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",q=Object.defineProperty,en=Object.getOwnPropertySymbols,fn=Object.prototype.hasOwnProperty,dn=Object.prototype.propertyIsEnumerable,Nn=(p,h,y)=>h in p?q(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,gn=(p,h)=>{for(var y in h||(h={}))fn.call(h,y)&&Nn(p,y,h[y]);if(en)for(var y of en(h))dn.call(h,y)&&Nn(p,y,h[y]);return p};const Cn=p=>React.createElement("svg",gn({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"image_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#image_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#FF8EA8"}),React.createElement("path",{d:"M26 6a4 4 0 0 0 4 4h6L26 0v6Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M30.141 29.761h-20a.156.156 0 0 1-.11-.25l5.75-5.812a.313.313 0 0 1 .376 0l3.374 3.03a.314.314 0 0 0 .376 0l3.985-6.64a.312.312 0 0 1 .437 0l5.937 9.422c.06.06.06.158 0 .219l-.125.031ZM15 20.314a1.562 1.562 0 1 0 3.125 0 1.563 1.563 0 1 0-3.125 0Z",fill:"#F5F5F5"})));var xn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iI0ZGOEVBOCIvPjxwYXRoIGQ9Ik0yNiA2YTQgNCAwIDAgMCA0IDRoNkwyNiAwdjZaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTMwLjE0MSAyOS43NjFoLTIwYS4xNTYuMTU2IDAgMCAxLS4xMS0uMjVsNS43NS01LjgxMmEuMzEzLjMxMyAwIDAgMSAuMzc2IDBsMy4zNzQgMy4wM2EuMzE0LjMxNCAwIDAgMCAuMzc2IDBsMy45ODUtNi42NGEuMzEyLjMxMiAwIDAgMSAuNDM3IDBsNS45MzcgOS40MjJjLjA2LjA2LjA2LjE1OCAwIC4yMTlsLS4xMjUuMDMxWk0xNSAyMC4zMTRhMS41NjIgMS41NjIgMCAxIDAgMy4xMjUgMCAxLjU2MyAxLjU2MyAwIDEgMC0zLjEyNSAwWiIgZmlsbD0iI0Y1RjVGNSIvPjwvZz48L3N2Zz4=",cn=Object.defineProperty,sn=Object.getOwnPropertySymbols,Ln=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable,mn=(p,h,y)=>h in p?cn(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,An=(p,h)=>{for(var y in h||(h={}))Ln.call(h,y)&&mn(p,y,h[y]);if(sn)for(var y of sn(h))pn.call(h,y)&&mn(p,y,h[y]);return p};const On=p=>React.createElement("svg",An({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"md_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#md_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#5CCAC3"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M26.577 16.422c.794-.869 2.242-.307 2.242.87V29.71a1.29 1.29 0 0 1-2.58 0v-9.092l-5.127 5.616a1.29 1.29 0 0 1-1.905 0l-5.128-5.616v9.092a1.29 1.29 0 0 1-2.579 0V17.292c0-1.177 1.449-1.739 2.242-.87l6.418 7.03 6.417-7.03Z",fill:"#FFF"})));var Tn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzVDQ0FDMyIvPjxwYXRoIGQ9Ik0yNiAwdjZhNCA0IDAgMCAwIDQgNGg2TDI2IDBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTI2LjU3NyAxNi40MjJjLjc5NC0uODY5IDIuMjQyLS4zMDcgMi4yNDIuODdWMjkuNzFhMS4yOSAxLjI5IDAgMCAxLTIuNTggMHYtOS4wOTJsLTUuMTI3IDUuNjE2YTEuMjkgMS4yOSAwIDAgMS0xLjkwNSAwbC01LjEyOC01LjYxNnY5LjA5MmExLjI5IDEuMjkgMCAwIDEtMi41NzkgMFYxNy4yOTJjMC0xLjE3NyAxLjQ0OS0xLjczOSAyLjI0Mi0uODdsNi40MTggNy4wMyA2LjQxNy03LjAzWiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",_=Object.defineProperty,Rn=Object.getOwnPropertySymbols,jn=Object.prototype.hasOwnProperty,yn=Object.prototype.propertyIsEnumerable,Wn=(p,h,y)=>h in p?_(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,Kn=(p,h)=>{for(var y in h||(h={}))jn.call(h,y)&&Wn(p,y,h[y]);if(Rn)for(var y of Rn(h))yn.call(h,y)&&Wn(p,y,h[y]);return p};const tn=p=>React.createElement("svg",Kn({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"mobi_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#mobi_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#FF832B"}),React.createElement("path",{d:"M14.775 26.556v-3.458l-1.872 2.04a.761.761 0 0 1-.584.258.761.761 0 0 1-.584-.257l-1.876-2.043v3.484a.787.787 0 1 1-1.573 0v-5.488c0-.361.168-.607.505-.739.337-.13.627-.063.872.203l2.656 2.892 2.651-2.892c.245-.266.536-.334.873-.203.337.131.505.378.505.74v5.463a.787.787 0 0 1-1.573 0Zm16.153.81a.787.787 0 0 1-.787-.786v-5.504a.787.787 0 1 1 1.573 0v5.504a.787.787 0 0 1-.786.787Zm-5.067-2.842v1.27h1.458c.404-.009.607-.221.607-.639 0-.387-.175-.598-.525-.633l-1.54.002Zm-1.573 2.056v-5.504a.787.787 0 0 1 .766-.787h2.267v.002a2.117 2.117 0 0 1 2.019 2.118c0 .454-.145.895-.413 1.26a2.215 2.215 0 0 1-1.596 3.698h-2.28c-.012 0-.023 0-.034-.002a.787.787 0 0 1-.73-.785Zm3.08-3.635c.266-.044.398-.223.398-.536 0-.343-.159-.524-.478-.545h-1.427v1.09h1.433c.028-.002.043-.01.075-.009Zm-10.397.881c0-1.955 1.498-3.54 3.347-3.54 1.848 0 3.346 1.585 3.346 3.54s-1.498 3.54-3.346 3.54c-1.849 0-3.347-1.585-3.347-3.54Zm3.347-2.015c-.486 0-.906.187-1.258.56-.376.397-.564.882-.564 1.455 0 .573.188 1.058.564 1.456.352.372.772.559 1.258.559s.905-.187 1.257-.56c.376-.397.564-.882.564-1.455 0-.573-.188-1.058-.564-1.456-.352-.372-.771-.559-1.257-.559Z",fill:"#FFF"}),React.createElement("path",{d:"M26 6a4 4 0 0 0 4 4h6L26 0v6Z",fill:"#FFF",fillOpacity:.4})));var Xn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iI0ZGODMyQiIvPjxwYXRoIGQ9Ik0xNC43NzUgMjYuNTU2di0zLjQ1OGwtMS44NzIgMi4wNGEuNzYxLjc2MSAwIDAgMS0uNTg0LjI1OC43NjEuNzYxIDAgMCAxLS41ODQtLjI1N2wtMS44NzYtMi4wNDN2My40ODRhLjc4Ny43ODcgMCAxIDEtMS41NzMgMHYtNS40ODhjMC0uMzYxLjE2OC0uNjA3LjUwNS0uNzM5LjMzNy0uMTMuNjI3LS4wNjMuODcyLjIwM2wyLjY1NiAyLjg5MiAyLjY1MS0yLjg5MmMuMjQ1LS4yNjYuNTM2LS4zMzQuODczLS4yMDMuMzM3LjEzMS41MDUuMzc4LjUwNS43NHY1LjQ2M2EuNzg3Ljc4NyAwIDAgMS0xLjU3MyAwWm0xNi4xNTMuODFhLjc4Ny43ODcgMCAwIDEtLjc4Ny0uNzg2di01LjUwNGEuNzg3Ljc4NyAwIDEgMSAxLjU3MyAwdjUuNTA0YS43ODcuNzg3IDAgMCAxLS43ODYuNzg3Wm0tNS4wNjctMi44NDJ2MS4yN2gxLjQ1OGMuNDA0LS4wMDkuNjA3LS4yMjEuNjA3LS42MzkgMC0uMzg3LS4xNzUtLjU5OC0uNTI1LS42MzNsLTEuNTQuMDAyWm0tMS41NzMgMi4wNTZ2LTUuNTA0YS43ODcuNzg3IDAgMCAxIC43NjYtLjc4N2gyLjI2N3YuMDAyYTIuMTE3IDIuMTE3IDAgMCAxIDIuMDE5IDIuMTE4YzAgLjQ1NC0uMTQ1Ljg5NS0uNDEzIDEuMjZhMi4yMTUgMi4yMTUgMCAwIDEtMS41OTYgMy42OThoLTIuMjhjLS4wMTIgMC0uMDIzIDAtLjAzNC0uMDAyYS43ODcuNzg3IDAgMCAxLS43My0uNzg1Wm0zLjA4LTMuNjM1Yy4yNjYtLjA0NC4zOTgtLjIyMy4zOTgtLjUzNiAwLS4zNDMtLjE1OS0uNTI0LS40NzgtLjU0NWgtMS40Mjd2MS4wOWgxLjQzM2MuMDI4LS4wMDIuMDQzLS4wMS4wNzUtLjAwOVptLTEwLjM5Ny44ODFjMC0xLjk1NSAxLjQ5OC0zLjU0IDMuMzQ3LTMuNTQgMS44NDggMCAzLjM0NiAxLjU4NSAzLjM0NiAzLjU0cy0xLjQ5OCAzLjU0LTMuMzQ2IDMuNTRjLTEuODQ5IDAtMy4zNDctMS41ODUtMy4zNDctMy41NFptMy4zNDctMi4wMTVjLS40ODYgMC0uOTA2LjE4Ny0xLjI1OC41Ni0uMzc2LjM5Ny0uNTY0Ljg4Mi0uNTY0IDEuNDU1IDAgLjU3My4xODggMS4wNTguNTY0IDEuNDU2LjM1Mi4zNzIuNzcyLjU1OSAxLjI1OC41NTlzLjkwNS0uMTg3IDEuMjU3LS41NmMuMzc2LS4zOTcuNTY0LS44ODIuNTY0LTEuNDU1IDAtLjU3My0uMTg4LTEuMDU4LS41NjQtMS40NTYtLjM1Mi0uMzcyLS43NzEtLjU1OS0xLjI1Ny0uNTU5WiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yNiA2YTQgNCAwIDAgMCA0IDRoNkwyNiAwdjZaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PC9nPjwvc3ZnPg==",je=Object.defineProperty,le=Object.getOwnPropertySymbols,bn=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,ge=(p,h,y)=>h in p?je(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,me=(p,h)=>{for(var y in h||(h={}))bn.call(h,y)&&ge(p,y,h[y]);if(le)for(var y of le(h))ae.call(h,y)&&ge(p,y,h[y]);return p};const ye=p=>React.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"pdf_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#pdf_svg__a)"},React.createElement("path",{d:"M4 6v28a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6Z",fill:"#F04B57"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M26.365 32.773c-1.684 0-3.196-2.892-3.99-4.772-1.338-.558-2.812-1.08-4.244-1.416-1.253.826-3.385 2.064-5.023 2.064-1.016 0-1.748-.51-2.016-1.4-.206-.733-.032-1.238.19-1.512.43-.59 1.32-.89 2.653-.89 1.08 0 2.448.19 3.975.558.985-.7 1.985-1.511 2.875-2.37-.396-1.874-.827-4.913.268-6.314.542-.668 1.369-.89 2.37-.59 1.094.316 1.51.985 1.637 1.512.463 1.827-1.638 4.292-3.054 5.74a27.386 27.386 0 0 0 1.237 3.786c2.033.906 4.45 2.26 4.723 3.734.11.51-.047.985-.463 1.4-.358.296-.737.47-1.138.47Zm-1.514-3.188c.37.825.724 1.214.91 1.214.029 0 .07-.012.127-.063.069-.076.069-.126.057-.173-.038-.216-.351-.572-1.094-.978Zm-10.698-3.34c-.593 0-.756.144-.806.21-.014.022-.056.087-.014.254.036.143.135.295.442.295.385 0 .942-.216 1.59-.606a5.744 5.744 0 0 0-1.212-.153Zm5.802-.736c.36.102.715.221 1.063.357a9.546 9.546 0 0 1-.308-.986c-.248.214-.499.424-.755.629Zm2.504-7.119a.372.372 0 0 0-.294.134c-.234.295-.261 1.039-.08 1.991.688-.736 1.06-1.414.968-1.776-.013-.053-.053-.215-.373-.309a.753.753 0 0 0-.221-.04Z",fill:"#FFF"})));var De="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCA2djI4YTYgNiAwIDAgMCA2IDZoMjBhNiA2IDAgMCAwIDYtNlYxMEwyNiAwSDEwYTYgNiAwIDAgMC02IDZaIiBmaWxsPSIjRjA0QjU3Ii8+PHBhdGggZD0iTTI2IDB2NmE0IDQgMCAwIDAgNCA0aDZMMjYgMFoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJNMjYuMzY1IDMyLjc3M2MtMS42ODQgMC0zLjE5Ni0yLjg5Mi0zLjk5LTQuNzcyLTEuMzM4LS41NTgtMi44MTItMS4wOC00LjI0NC0xLjQxNi0xLjI1My44MjYtMy4zODUgMi4wNjQtNS4wMjMgMi4wNjQtMS4wMTYgMC0xLjc0OC0uNTEtMi4wMTYtMS40LS4yMDYtLjczMy0uMDMyLTEuMjM4LjE5LTEuNTEyLjQzLS41OSAxLjMyLS44OSAyLjY1My0uODkgMS4wOCAwIDIuNDQ4LjE5IDMuOTc1LjU1OC45ODUtLjcgMS45ODUtMS41MTEgMi44NzUtMi4zNy0uMzk2LTEuODc0LS44MjctNC45MTMuMjY4LTYuMzE0LjU0Mi0uNjY4IDEuMzY5LS44OSAyLjM3LS41OSAxLjA5NC4zMTYgMS41MS45ODUgMS42MzcgMS41MTIuNDYzIDEuODI3LTEuNjM4IDQuMjkyLTMuMDU0IDUuNzRhMjcuMzg2IDI3LjM4NiAwIDAgMCAxLjIzNyAzLjc4NmMyLjAzMy45MDYgNC40NSAyLjI2IDQuNzIzIDMuNzM0LjExLjUxLS4wNDcuOTg1LS40NjMgMS40LS4zNTguMjk2LS43MzcuNDctMS4xMzguNDdabS0xLjUxNC0zLjE4OGMuMzcuODI1LjcyNCAxLjIxNC45MSAxLjIxNC4wMjkgMCAuMDctLjAxMi4xMjctLjA2My4wNjktLjA3Ni4wNjktLjEyNi4wNTctLjE3My0uMDM4LS4yMTYtLjM1MS0uNTcyLTEuMDk0LS45NzhabS0xMC42OTgtMy4zNGMtLjU5MyAwLS43NTYuMTQ0LS44MDYuMjEtLjAxNC4wMjItLjA1Ni4wODctLjAxNC4yNTQuMDM2LjE0My4xMzUuMjk1LjQ0Mi4yOTUuMzg1IDAgLjk0Mi0uMjE2IDEuNTktLjYwNmE1Ljc0NCA1Ljc0NCAwIDAgMC0xLjIxMi0uMTUzWm01LjgwMi0uNzM2Yy4zNi4xMDIuNzE1LjIyMSAxLjA2My4zNTdhOS41NDYgOS41NDYgMCAwIDEtLjMwOC0uOTg2Yy0uMjQ4LjIxNC0uNDk5LjQyNC0uNzU1LjYyOVptMi41MDQtNy4xMTlhLjM3Mi4zNzIgMCAwIDAtLjI5NC4xMzRjLS4yMzQuMjk1LS4yNjEgMS4wMzktLjA4IDEuOTkxLjY4OC0uNzM2IDEuMDYtMS40MTQuOTY4LTEuNzc2LS4wMTMtLjA1My0uMDUzLS4yMTUtLjM3My0uMzA5YS43NTMuNzUzIDAgMCAwLS4yMjEtLjA0WiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",Ne=Object.defineProperty,ve=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,xe=(p,h,y)=>h in p?Ne(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,Se=(p,h)=>{for(var y in h||(h={}))Le.call(h,y)&&xe(p,y,h[y]);if(ve)for(var y of ve(h))Ee.call(h,y)&&xe(p,y,h[y]);return p};const Oe=p=>React.createElement("svg",Se({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"ppt_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#ppt_svg__a)"},React.createElement("path",{d:"M4 6v28a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6Z",fill:"#FF5B3B"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M25.802 19.255c.288.293.44.717.44 1.344 0 .628-.152 1.052-.44 1.345-.307.315-.828.548-1.596.669H12.793c-.714 0-1.293.579-1.293 1.293v5.8a1.293 1.293 0 0 0 2.586 0V25.2h10.216c.061 0 .122-.004.183-.013 2.762-.395 4.343-2.012 4.343-4.587 0-2.575-1.58-4.192-4.343-4.587a1.293 1.293 0 0 0-.183-.013H12.793a1.293 1.293 0 1 0 0 2.586h11.413c.768.121 1.289.354 1.596.669Z",fill:"#FFF"})));var zn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCA2djI4YTYgNiAwIDAgMCA2IDZoMjBhNiA2IDAgMCAwIDYtNlYxMEwyNiAwSDEwYTYgNiAwIDAgMC02IDZaIiBmaWxsPSIjRkY1QjNCIi8+PHBhdGggZD0iTTI2IDB2NmE0IDQgMCAwIDAgNCA0aDZMMjYgMFoiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJNMjUuODAyIDE5LjI1NWMuMjg4LjI5My40NC43MTcuNDQgMS4zNDQgMCAuNjI4LS4xNTIgMS4wNTItLjQ0IDEuMzQ1LS4zMDcuMzE1LS44MjguNTQ4LTEuNTk2LjY2OUgxMi43OTNjLS43MTQgMC0xLjI5My41NzktMS4yOTMgMS4yOTN2NS44YTEuMjkzIDEuMjkzIDAgMCAwIDIuNTg2IDBWMjUuMmgxMC4yMTZjLjA2MSAwIC4xMjItLjAwNC4xODMtLjAxMyAyLjc2Mi0uMzk1IDQuMzQzLTIuMDEyIDQuMzQzLTQuNTg3IDAtMi41NzUtMS41OC00LjE5Mi00LjM0My00LjU4N2ExLjI5MyAxLjI5MyAwIDAgMC0uMTgzLS4wMTNIMTIuNzkzYTEuMjkzIDEuMjkzIDAgMSAwIDAgMi41ODZoMTEuNDEzYy43NjguMTIxIDEuMjg5LjM1NCAxLjU5Ni42NjlaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==",Gn=Object.defineProperty,Be=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,Fe=(p,h,y)=>h in p?Gn(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,qe=(p,h)=>{for(var y in h||(h={}))ze.call(h,y)&&Fe(p,y,h[y]);if(Be)for(var y of Be(h))_e.call(h,y)&&Fe(p,y,h[y]);return p};const Pt=p=>React.createElement("svg",qe({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"txt_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#txt_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#38B8F3"}),React.createElement("path",{d:"M26 6a4 4 0 0 0 4 4h6L26 0v6Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M9.204 18.996q-.083 0-.165.017-.082.016-.16.048-.077.032-.147.079-.07.046-.129.105-.059.06-.105.129-.047.07-.079.147-.032.077-.048.16-.017.082-.017.165 0 .084.017.166.016.082.048.16.032.077.079.147.046.07.105.128.06.06.13.106.069.047.146.079.078.032.16.048t.165.016h1.9v6.45q0 .084.017.166.016.082.048.16.032.076.079.146.046.07.105.129.06.06.13.106.069.046.146.078.078.032.16.049.082.016.165.016.084 0 .166-.016.082-.017.16-.049.077-.032.147-.078.07-.047.128-.106.06-.06.106-.129.047-.07.079-.147.032-.077.048-.16.016-.081.016-.165v-6.45h1.9q.084 0 .166-.016t.16-.048q.077-.032.147-.079.07-.046.129-.106.059-.059.105-.128.047-.07.079-.147.032-.078.048-.16t.016-.166q0-.083-.016-.166-.016-.082-.048-.159t-.079-.147q-.046-.07-.105-.129-.06-.059-.13-.105-.069-.047-.146-.079-.078-.032-.16-.048-.082-.017-.166-.017h-5.5Zm16.091 0q-.083 0-.166.017-.082.016-.159.048t-.147.079q-.07.046-.129.105-.059.06-.105.129-.047.07-.079.147-.032.077-.048.16-.017.082-.017.165 0 .084.017.166.016.082.048.16.032.077.079.147.046.07.105.128.06.06.13.106.069.047.146.079.077.032.16.048.082.016.165.016h1.9v6.45q0 .084.017.166.016.082.048.16.032.076.078.146.047.07.106.129.06.06.129.106.07.046.147.078.077.032.16.049.082.016.165.016.084 0 .166-.016.082-.017.16-.049.077-.032.146-.078.07-.047.13-.106.058-.06.105-.129.046-.07.079-.147.032-.077.048-.16.016-.081.016-.165v-6.45h1.9q.084 0 .166-.016t.16-.048q.077-.032.146-.079.07-.046.13-.106.059-.059.105-.128.047-.07.079-.147.032-.078.048-.16t.016-.166q0-.083-.016-.166-.016-.082-.048-.159t-.079-.147q-.046-.07-.106-.129-.059-.059-.128-.105-.07-.047-.147-.079-.078-.032-.16-.048-.082-.017-.166-.017h-5.5Zm-2.966.408q.054-.064.12-.117.065-.052.14-.091.074-.039.154-.062.08-.024.164-.031.084-.007.167.002.084.009.164.034t.153.066q.074.04.138.094.13.109.208.259.078.15.093.319t-.036.33q-.051.162-.16.292l-2.528 3.013 2.528 3.013q.054.065.095.138.04.074.065.154t.034.163q.01.084.002.167-.007.084-.03.164-.024.08-.063.155-.038.075-.09.14-.053.065-.118.12-.13.108-.291.16-.162.05-.33.035-.17-.014-.32-.093-.15-.078-.259-.208l-2.335-2.783-2.336 2.783q-.109.13-.259.208-.15.079-.319.093-.169.015-.33-.036-.162-.05-.292-.16-.064-.054-.116-.119-.053-.065-.092-.14-.038-.074-.062-.155-.023-.08-.03-.164-.008-.083.001-.167.01-.083.035-.163t.065-.154q.04-.073.094-.138l2.53-3.013-2.53-3.013q-.108-.13-.16-.292-.05-.161-.035-.33.014-.169.093-.319.078-.15.208-.26.064-.053.137-.093.074-.04.154-.066.08-.025.163-.034.084-.01.167-.002.084.007.164.03.081.024.155.063.075.039.14.091.066.053.12.117l2.335 2.783 2.335-2.783Z",fillRule:"evenodd",fill:"#FFF"})));var ue="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzM4QjhGMyIvPjxwYXRoIGQ9Ik0yNiA2YTQgNCAwIDAgMCA0IDRoNkwyNiAwdjZaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTkuMjA0IDE4Ljk5NnEtLjA4MyAwLS4xNjUuMDE3LS4wODIuMDE2LS4xNi4wNDgtLjA3Ny4wMzItLjE0Ny4wNzktLjA3LjA0Ni0uMTI5LjEwNS0uMDU5LjA2LS4xMDUuMTI5LS4wNDcuMDctLjA3OS4xNDctLjAzMi4wNzctLjA0OC4xNi0uMDE3LjA4Mi0uMDE3LjE2NSAwIC4wODQuMDE3LjE2Ni4wMTYuMDgyLjA0OC4xNi4wMzIuMDc3LjA3OS4xNDcuMDQ2LjA3LjEwNS4xMjguMDYuMDYuMTMuMTA2LjA2OS4wNDcuMTQ2LjA3OS4wNzguMDMyLjE2LjA0OHQuMTY1LjAxNmgxLjl2Ni40NXEwIC4wODQuMDE3LjE2Ni4wMTYuMDgyLjA0OC4xNi4wMzIuMDc2LjA3OS4xNDYuMDQ2LjA3LjEwNS4xMjkuMDYuMDYuMTMuMTA2LjA2OS4wNDYuMTQ2LjA3OC4wNzguMDMyLjE2LjA0OS4wODIuMDE2LjE2NS4wMTYuMDg0IDAgLjE2Ni0uMDE2LjA4Mi0uMDE3LjE2LS4wNDkuMDc3LS4wMzIuMTQ3LS4wNzguMDctLjA0Ny4xMjgtLjEwNi4wNi0uMDYuMTA2LS4xMjkuMDQ3LS4wNy4wNzktLjE0Ny4wMzItLjA3Ny4wNDgtLjE2LjAxNi0uMDgxLjAxNi0uMTY1di02LjQ1aDEuOXEuMDg0IDAgLjE2Ni0uMDE2dC4xNi0uMDQ4cS4wNzctLjAzMi4xNDctLjA3OS4wNy0uMDQ2LjEyOS0uMTA2LjA1OS0uMDU5LjEwNS0uMTI4LjA0Ny0uMDcuMDc5LS4xNDcuMDMyLS4wNzguMDQ4LS4xNnQuMDE2LS4xNjZxMC0uMDgzLS4wMTYtLjE2Ni0uMDE2LS4wODItLjA0OC0uMTU5dC0uMDc5LS4xNDdxLS4wNDYtLjA3LS4xMDUtLjEyOS0uMDYtLjA1OS0uMTMtLjEwNS0uMDY5LS4wNDctLjE0Ni0uMDc5LS4wNzgtLjAzMi0uMTYtLjA0OC0uMDgyLS4wMTctLjE2Ni0uMDE3aC01LjVabTE2LjA5MSAwcS0uMDgzIDAtLjE2Ni4wMTctLjA4Mi4wMTYtLjE1OS4wNDh0LS4xNDcuMDc5cS0uMDcuMDQ2LS4xMjkuMTA1LS4wNTkuMDYtLjEwNS4xMjktLjA0Ny4wNy0uMDc5LjE0Ny0uMDMyLjA3Ny0uMDQ4LjE2LS4wMTcuMDgyLS4wMTcuMTY1IDAgLjA4NC4wMTcuMTY2LjAxNi4wODIuMDQ4LjE2LjAzMi4wNzcuMDc5LjE0Ny4wNDYuMDcuMTA1LjEyOC4wNi4wNi4xMy4xMDYuMDY5LjA0Ny4xNDYuMDc5LjA3Ny4wMzIuMTYuMDQ4LjA4Mi4wMTYuMTY1LjAxNmgxLjl2Ni40NXEwIC4wODQuMDE3LjE2Ni4wMTYuMDgyLjA0OC4xNi4wMzIuMDc2LjA3OC4xNDYuMDQ3LjA3LjEwNi4xMjkuMDYuMDYuMTI5LjEwNi4wNy4wNDYuMTQ3LjA3OC4wNzcuMDMyLjE2LjA0OS4wODIuMDE2LjE2NS4wMTYuMDg0IDAgLjE2Ni0uMDE2LjA4Mi0uMDE3LjE2LS4wNDkuMDc3LS4wMzIuMTQ2LS4wNzguMDctLjA0Ny4xMy0uMTA2LjA1OC0uMDYuMTA1LS4xMjkuMDQ2LS4wNy4wNzktLjE0Ny4wMzItLjA3Ny4wNDgtLjE2LjAxNi0uMDgxLjAxNi0uMTY1di02LjQ1aDEuOXEuMDg0IDAgLjE2Ni0uMDE2dC4xNi0uMDQ4cS4wNzctLjAzMi4xNDYtLjA3OS4wNy0uMDQ2LjEzLS4xMDYuMDU5LS4wNTkuMTA1LS4xMjguMDQ3LS4wNy4wNzktLjE0Ny4wMzItLjA3OC4wNDgtLjE2dC4wMTYtLjE2NnEwLS4wODMtLjAxNi0uMTY2LS4wMTYtLjA4Mi0uMDQ4LS4xNTl0LS4wNzktLjE0N3EtLjA0Ni0uMDctLjEwNi0uMTI5LS4wNTktLjA1OS0uMTI4LS4xMDUtLjA3LS4wNDctLjE0Ny0uMDc5LS4wNzgtLjAzMi0uMTYtLjA0OC0uMDgyLS4wMTctLjE2Ni0uMDE3aC01LjVabS0yLjk2Ni40MDhxLjA1NC0uMDY0LjEyLS4xMTcuMDY1LS4wNTIuMTQtLjA5MS4wNzQtLjAzOS4xNTQtLjA2Mi4wOC0uMDI0LjE2NC0uMDMxLjA4NC0uMDA3LjE2Ny4wMDIuMDg0LjAwOS4xNjQuMDM0dC4xNTMuMDY2cS4wNzQuMDQuMTM4LjA5NC4xMy4xMDkuMjA4LjI1OS4wNzguMTUuMDkzLjMxOXQtLjAzNi4zM3EtLjA1MS4xNjItLjE2LjI5MmwtMi41MjggMy4wMTMgMi41MjggMy4wMTNxLjA1NC4wNjUuMDk1LjEzOC4wNC4wNzQuMDY1LjE1NHQuMDM0LjE2M3EuMDEuMDg0LjAwMi4xNjctLjAwNy4wODQtLjAzLjE2NC0uMDI0LjA4LS4wNjMuMTU1LS4wMzguMDc1LS4wOS4xNC0uMDUzLjA2NS0uMTE4LjEyLS4xMy4xMDgtLjI5MS4xNi0uMTYyLjA1LS4zMy4wMzUtLjE3LS4wMTQtLjMyLS4wOTMtLjE1LS4wNzgtLjI1OS0uMjA4bC0yLjMzNS0yLjc4My0yLjMzNiAyLjc4M3EtLjEwOS4xMy0uMjU5LjIwOC0uMTUuMDc5LS4zMTkuMDkzLS4xNjkuMDE1LS4zMy0uMDM2LS4xNjItLjA1LS4yOTItLjE2LS4wNjQtLjA1NC0uMTE2LS4xMTktLjA1My0uMDY1LS4wOTItLjE0LS4wMzgtLjA3NC0uMDYyLS4xNTUtLjAyMy0uMDgtLjAzLS4xNjQtLjAwOC0uMDgzLjAwMS0uMTY3LjAxLS4wODMuMDM1LS4xNjN0LjA2NS0uMTU0cS4wNC0uMDczLjA5NC0uMTM4bDIuNTMtMy4wMTMtMi41My0zLjAxM3EtLjEwOC0uMTMtLjE2LS4yOTItLjA1LS4xNjEtLjAzNS0uMzMuMDE0LS4xNjkuMDkzLS4zMTkuMDc4LS4xNS4yMDgtLjI2LjA2NC0uMDUzLjEzNy0uMDkzLjA3NC0uMDQuMTU0LS4wNjYuMDgtLjAyNS4xNjMtLjAzNC4wODQtLjAxLjE2Ny0uMDAyLjA4NC4wMDcuMTY0LjAzLjA4MS4wMjQuMTU1LjA2My4wNzUuMDM5LjE0LjA5MS4wNjYuMDUzLjEyLjExN2wyLjMzNSAyLjc4MyAyLjMzNS0yLjc4M1oiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",Jn=Object.defineProperty,ne=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,oe=(p,h,y)=>h in p?Jn(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,Re=(p,h)=>{for(var y in h||(h={}))k.call(h,y)&&oe(p,y,h[y]);if(ne)for(var y of ne(h))Ce.call(h,y)&&oe(p,y,h[y]);return p};const ht=p=>React.createElement("svg",Re({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"web_svg__a"},React.createElement("rect",{width:40,height:40,rx:0})),React.createElement("clipPath",{id:"web_svg__b"},React.createElement("rect",{x:9.375,y:13.75,width:21.25,height:21.25,rx:0}))),React.createElement("g",{clipPath:"url(#web_svg__a)"},React.createElement("path",{d:"M4 6v28a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6Z",fill:"#615CED"}),React.createElement("path",{d:"M26.001 0v6a4 4 0 0 0 4 4h6l-10-10Z",fill:"#FFF",fillOpacity:.4}),React.createElement("g",{clipPath:"url(#web_svg__b)",fillRule:"evenodd",fill:"#FFF"},React.createElement("path",{d:"M11.053 20.596q-.763 1.805-.763 3.78 0 1.974.763 3.779.737 1.742 2.08 3.086 1.344 1.343 3.087 2.08 1.804.764 3.78.764 1.974 0 3.779-.764 1.742-.737 3.086-2.08 1.343-1.344 2.08-3.086.763-1.805.763-3.78 0-1.974-.763-3.78-.737-1.742-2.08-3.085-1.344-1.343-3.086-2.08-1.805-.764-3.78-.764-1.975 0-3.78.764-1.742.737-3.085 2.08-1.344 1.343-2.08 3.086Zm3.29 9.436Q12 27.689 12 24.375q0-3.313 2.343-5.656 2.343-2.343 5.656-2.343 3.314 0 5.656 2.343 2.343 2.343 2.343 5.656 0 3.314-2.343 5.657-2.342 2.343-5.656 2.343-3.313 0-5.656-2.343Z"}),React.createElement("path",{d:"M11.145 25.23h17.708q.085 0 .167-.016.083-.017.16-.05.078-.031.148-.078.07-.047.13-.106.06-.06.106-.13.047-.07.08-.148.032-.078.048-.16.016-.083.016-.167t-.016-.167q-.016-.082-.049-.16-.032-.078-.079-.148-.046-.07-.106-.13t-.13-.106q-.07-.047-.147-.079-.078-.032-.16-.049-.083-.016-.168-.016H11.145q-.084 0-.167.016-.082.017-.16.05-.078.031-.148.078-.07.047-.13.106-.06.06-.106.13-.047.07-.079.148-.032.078-.049.16-.016.083-.016.167t.016.167q.017.082.05.16.031.078.078.148.047.07.106.13.06.06.13.106.07.047.148.079.078.032.16.049.083.016.167.016Z"}),React.createElement("path",{d:"M16.701 17.797q-1.099 2.746-1.099 6.578 0 3.833 1.099 6.579 1.252 3.13 3.298 3.13 2.046 0 3.298-3.13 1.099-2.746 1.099-6.579 0-3.832-1.099-6.578-1.252-3.13-3.298-3.13-2.046 0-3.298 3.13Zm1.588 12.522q-.976-2.44-.976-5.944 0-3.502.976-5.943.43-1.074.953-1.627.405-.429.757-.429.353 0 .758.429.523.553.953 1.627.976 2.44.976 5.943 0 3.503-.976 5.944-.43 1.074-.953 1.627-.405.429-.758.429-.352 0-.757-.429-.524-.553-.953-1.627Z"}),React.createElement("path",{d:"M13.134 18.845q-.12-.12-.185-.277-.065-.158-.065-.328 0-.084.016-.166.017-.083.05-.16.031-.079.078-.149.047-.07.106-.13.06-.059.13-.106.07-.046.148-.079.078-.032.16-.048.083-.017.167-.017.17 0 .327.065.157.066.278.186 2.343 2.343 5.656 2.343 3.313 0 5.656-2.343.12-.12.278-.186.157-.065.327-.065.084 0 .167.017.082.016.16.048.078.033.148.08.07.046.13.106.059.06.106.13.046.07.079.147.032.078.048.16.017.083.017.167 0 .17-.065.328-.065.157-.186.277-1.343 1.343-3.086 2.08-1.804.764-3.78.764-1.974 0-3.779-.764-1.742-.737-3.086-2.08Zm3.086 8.98q-1.742.737-3.086 2.08-.12.12-.185.277-.065.158-.065.328 0 .084.016.166.017.083.05.16.031.079.078.149.047.07.106.13.06.059.13.106.07.046.148.079.078.032.16.048.083.017.167.017.17 0 .327-.065.157-.066.278-.186 2.343-2.343 5.656-2.343 3.313 0 5.656 2.343.12.12.278.186.157.065.327.065.084 0 .167-.017.082-.016.16-.048.078-.033.148-.08.07-.046.13-.106.059-.06.106-.13.046-.07.079-.147.032-.078.048-.16.017-.083.017-.167 0-.17-.065-.328-.065-.157-.186-.277-1.343-1.343-3.086-2.08-1.804-.764-3.78-.764-1.974 0-3.779.764Z"}))));var nt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImIiPjxyZWN0IHg9IjkuMzc1IiB5PSIxMy43NSIgd2lkdGg9IjIxLjI1IiBoZWlnaHQ9IjIxLjI1IiByeD0iMCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0iTTQgNnYyOGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2WiIgZmlsbD0iIzYxNUNFRCIvPjxwYXRoIGQ9Ik0yNi4wMDEgMHY2YTQgNCAwIDAgMCA0IDRoNmwtMTAtMTBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PGcgY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMS4wNTMgMjAuNTk2cS0uNzYzIDEuODA1LS43NjMgMy43OCAwIDEuOTc0Ljc2MyAzLjc3OS43MzcgMS43NDIgMi4wOCAzLjA4NiAxLjM0NCAxLjM0MyAzLjA4NyAyLjA4IDEuODA0Ljc2NCAzLjc4Ljc2NCAxLjk3NCAwIDMuNzc5LS43NjQgMS43NDItLjczNyAzLjA4Ni0yLjA4IDEuMzQzLTEuMzQ0IDIuMDgtMy4wODYuNzYzLTEuODA1Ljc2My0zLjc4IDAtMS45NzQtLjc2My0zLjc4LS43MzctMS43NDItMi4wOC0zLjA4NS0xLjM0NC0xLjM0My0zLjA4Ni0yLjA4LTEuODA1LS43NjQtMy43OC0uNzY0LTEuOTc1IDAtMy43OC43NjQtMS43NDIuNzM3LTMuMDg1IDIuMDgtMS4zNDQgMS4zNDMtMi4wOCAzLjA4NlptMy4yOSA5LjQzNlExMiAyNy42ODkgMTIgMjQuMzc1cTAtMy4zMTMgMi4zNDMtNS42NTYgMi4zNDMtMi4zNDMgNS42NTYtMi4zNDMgMy4zMTQgMCA1LjY1NiAyLjM0MyAyLjM0MyAyLjM0MyAyLjM0MyA1LjY1NiAwIDMuMzE0LTIuMzQzIDUuNjU3LTIuMzQyIDIuMzQzLTUuNjU2IDIuMzQzLTMuMzEzIDAtNS42NTYtMi4zNDNaIi8+PHBhdGggZD0iTTExLjE0NSAyNS4yM2gxNy43MDhxLjA4NSAwIC4xNjctLjAxNi4wODMtLjAxNy4xNi0uMDUuMDc4LS4wMzEuMTQ4LS4wNzguMDctLjA0Ny4xMy0uMTA2LjA2LS4wNi4xMDYtLjEzLjA0Ny0uMDcuMDgtLjE0OC4wMzItLjA3OC4wNDgtLjE2LjAxNi0uMDgzLjAxNi0uMTY3dC0uMDE2LS4xNjdxLS4wMTYtLjA4Mi0uMDQ5LS4xNi0uMDMyLS4wNzgtLjA3OS0uMTQ4LS4wNDYtLjA3LS4xMDYtLjEzdC0uMTMtLjEwNnEtLjA3LS4wNDctLjE0Ny0uMDc5LS4wNzgtLjAzMi0uMTYtLjA0OS0uMDgzLS4wMTYtLjE2OC0uMDE2SDExLjE0NXEtLjA4NCAwLS4xNjcuMDE2LS4wODIuMDE3LS4xNi4wNS0uMDc4LjAzMS0uMTQ4LjA3OC0uMDcuMDQ3LS4xMy4xMDYtLjA2LjA2LS4xMDYuMTMtLjA0Ny4wNy0uMDc5LjE0OC0uMDMyLjA3OC0uMDQ5LjE2LS4wMTYuMDgzLS4wMTYuMTY3dC4wMTYuMTY3cS4wMTcuMDgyLjA1LjE2LjAzMS4wNzguMDc4LjE0OC4wNDcuMDcuMTA2LjEzLjA2LjA2LjEzLjEwNi4wNy4wNDcuMTQ4LjA3OS4wNzguMDMyLjE2LjA0OS4wODMuMDE2LjE2Ny4wMTZaIi8+PHBhdGggZD0iTTE2LjcwMSAxNy43OTdxLTEuMDk5IDIuNzQ2LTEuMDk5IDYuNTc4IDAgMy44MzMgMS4wOTkgNi41NzkgMS4yNTIgMy4xMyAzLjI5OCAzLjEzIDIuMDQ2IDAgMy4yOTgtMy4xMyAxLjA5OS0yLjc0NiAxLjA5OS02LjU3OSAwLTMuODMyLTEuMDk5LTYuNTc4LTEuMjUyLTMuMTMtMy4yOTgtMy4xMy0yLjA0NiAwLTMuMjk4IDMuMTNabTEuNTg4IDEyLjUyMnEtLjk3Ni0yLjQ0LS45NzYtNS45NDQgMC0zLjUwMi45NzYtNS45NDMuNDMtMS4wNzQuOTUzLTEuNjI3LjQwNS0uNDI5Ljc1Ny0uNDI5LjM1MyAwIC43NTguNDI5LjUyMy41NTMuOTUzIDEuNjI3Ljk3NiAyLjQ0Ljk3NiA1Ljk0MyAwIDMuNTAzLS45NzYgNS45NDQtLjQzIDEuMDc0LS45NTMgMS42MjctLjQwNS40MjktLjc1OC40MjktLjM1MiAwLS43NTctLjQyOS0uNTI0LS41NTMtLjk1My0xLjYyN1oiLz48cGF0aCBkPSJNMTMuMTM0IDE4Ljg0NXEtLjEyLS4xMi0uMTg1LS4yNzctLjA2NS0uMTU4LS4wNjUtLjMyOCAwLS4wODQuMDE2LS4xNjYuMDE3LS4wODMuMDUtLjE2LjAzMS0uMDc5LjA3OC0uMTQ5LjA0Ny0uMDcuMTA2LS4xMy4wNi0uMDU5LjEzLS4xMDYuMDctLjA0Ni4xNDgtLjA3OS4wNzgtLjAzMi4xNi0uMDQ4LjA4My0uMDE3LjE2Ny0uMDE3LjE3IDAgLjMyNy4wNjUuMTU3LjA2Ni4yNzguMTg2IDIuMzQzIDIuMzQzIDUuNjU2IDIuMzQzIDMuMzEzIDAgNS42NTYtMi4zNDMuMTItLjEyLjI3OC0uMTg2LjE1Ny0uMDY1LjMyNy0uMDY1LjA4NCAwIC4xNjcuMDE3LjA4Mi4wMTYuMTYuMDQ4LjA3OC4wMzMuMTQ4LjA4LjA3LjA0Ni4xMy4xMDYuMDU5LjA2LjEwNi4xMy4wNDYuMDcuMDc5LjE0Ny4wMzIuMDc4LjA0OC4xNi4wMTcuMDgzLjAxNy4xNjcgMCAuMTctLjA2NS4zMjgtLjA2NS4xNTctLjE4Ni4yNzctMS4zNDMgMS4zNDMtMy4wODYgMi4wOC0xLjgwNC43NjQtMy43OC43NjQtMS45NzQgMC0zLjc3OS0uNzY0LTEuNzQyLS43MzctMy4wODYtMi4wOFptMy4wODYgOC45OHEtMS43NDIuNzM3LTMuMDg2IDIuMDgtLjEyLjEyLS4xODUuMjc3LS4wNjUuMTU4LS4wNjUuMzI4IDAgLjA4NC4wMTYuMTY2LjAxNy4wODMuMDUuMTYuMDMxLjA3OS4wNzguMTQ5LjA0Ny4wNy4xMDYuMTMuMDYuMDU5LjEzLjEwNi4wNy4wNDYuMTQ4LjA3OS4wNzguMDMyLjE2LjA0OC4wODMuMDE3LjE2Ny4wMTcuMTcgMCAuMzI3LS4wNjUuMTU3LS4wNjYuMjc4LS4xODYgMi4zNDMtMi4zNDMgNS42NTYtMi4zNDMgMy4zMTMgMCA1LjY1NiAyLjM0My4xMi4xMi4yNzguMTg2LjE1Ny4wNjUuMzI3LjA2NS4wODQgMCAuMTY3LS4wMTcuMDgyLS4wMTYuMTYtLjA0OC4wNzgtLjAzMy4xNDgtLjA4LjA3LS4wNDYuMTMtLjEwNi4wNTktLjA2LjEwNi0uMTMuMDQ2LS4wNy4wNzktLjE0Ny4wMzItLjA3OC4wNDgtLjE2LjAxNy0uMDgzLjAxNy0uMTY3IDAtLjE3LS4wNjUtLjMyOC0uMDY1LS4xNTctLjE4Ni0uMjc3LTEuMzQzLTEuMzQzLTMuMDg2LTIuMDgtMS44MDQtLjc2NC0zLjc4LS43NjQtMS45NzQgMC0zLjc3OS43NjRaIi8+PC9nPjwvZz48L3N2Zz4=",Ze=Object.defineProperty,ke=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,We=(p,h,y)=>h in p?Ze(p,h,{enumerable:!0,configurable:!0,writable:!0,value:y}):p[h]=y,jt=(p,h)=>{for(var y in h||(h={}))Ue.call(h,y)&&We(p,y,h[y]);if(ke)for(var y of ke(h))et.call(h,y)&&We(p,y,h[y]);return p};const yt=p=>React.createElement("svg",jt({xmlns:"http://www.w3.org/2000/svg",fill:"none",width:40,height:40},p),React.createElement("defs",null,React.createElement("clipPath",{id:"word_svg__a"},React.createElement("rect",{width:40,height:40,rx:0}))),React.createElement("g",{clipPath:"url(#word_svg__a)"},React.createElement("path",{d:"M4 34a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V10L26 0H10a6 6 0 0 0-6 6v28Z",fill:"#2B8DFF"}),React.createElement("path",{d:"M26 0v6a4 4 0 0 0 4 4h6L26 0Z",fill:"#FFF",fillOpacity:.4}),React.createElement("path",{d:"M26.577 30.578c.794.869 2.242.307 2.242-.87V17.29a1.29 1.29 0 0 0-2.58 0v9.092l-5.127-5.616a1.29 1.29 0 0 0-1.905 0l-5.128 5.616V17.29a1.29 1.29 0 0 0-2.579 0v12.418c0 1.177 1.449 1.739 2.242.87l6.418-7.03 6.417 7.03Z",fill:"#FFF"})));var be="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNNCAzNGE2IDYgMCAwIDAgNiA2aDIwYTYgNiAwIDAgMCA2LTZWMTBMMjYgMEgxMGE2IDYgMCAwIDAtNiA2djI4WiIgZmlsbD0iIzJCOERGRiIvPjxwYXRoIGQ9Ik0yNiAwdjZhNCA0IDAgMCAwIDQgNGg2TDI2IDBaIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii40Ii8+PHBhdGggZD0iTTI2LjU3NyAzMC41NzhjLjc5NC44NjkgMi4yNDIuMzA3IDIuMjQyLS44N1YxNy4yOWExLjI5IDEuMjkgMCAwIDAtMi41OCAwdjkuMDkybC01LjEyNy01LjYxNmExLjI5IDEuMjkgMCAwIDAtMS45MDUgMGwtNS4xMjggNS42MTZWMTcuMjlhMS4yOSAxLjI5IDAgMCAwLTIuNTc5IDB2MTIuNDE4YzAgMS4xNzcgMS40NDkgMS43MzkgMi4yNDIuODdsNi40MTgtNy4wMyA2LjQxNyA3LjAzWiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",Dt=n(68400),tt=n.n(Dt),Ie=n(3067),Ae,pe=(0,Ie.default)(Ae||(Ae=tt()([`
.`,`-file-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background: var(--`,`-color-bg-container);
  border: 1px solid var(--`,`-color-border-secondary);
}

.`,`-file-card-info {
  font-size: 12px;
  color: var(--`,`-color-text);
}

.`,`-file-card-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.`,`-file-card-size {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  color: var(--`,`-color-text-quaternary);
}
`])),function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix},function(p){return p.sparkPrefix},function(p){return p.sparkPrefix},function(p){return p.antPrefix}),Vn=n(85893),Me={common:P,epub:a,excel:Y,html:an,image:xn,md:Tn,mobi:Xn,pdf:De,ppt:zn,txt:ue,web:nt,word:be};function rt(p){for(var h=p,y=["B","KB","MB","GB","TB","PB","EB"],_n=0;h>=1024&&_n<y.length-1;)h/=1024,_n++;return"".concat(h.toFixed(0)," ").concat(y[_n])}function Ye(p){var h=(0,F.getCommonConfig)(),y=h.sparkPrefix,_n=pe(),Pe=p.width,Ge=Pe===void 0?140:Pe,de=p.iconSize,He=de===void 0?32:de;return(0,Vn.jsxs)(Vn.Fragment,{children:[(0,Vn.jsx)(_n,{}),(0,Vn.jsxs)("div",{className:"".concat(y,"-file-card"),style:{width:Ge},children:[(0,Vn.jsx)(Qe,{type:p.type,size:He,src:p.src}),(0,Vn.jsxs)("div",{className:"".concat(y,"-file-card-info"),children:[(0,Vn.jsx)("div",{className:"".concat(y,"-file-card-name"),children:p.name}),(p.size||p.desc)&&(0,Vn.jsx)("div",{className:"".concat(y,"-file-card-size"),children:p.desc||rt(p.size)})]}),(0,Vn.jsx)("div",{style:{flex:1}}),p.children]})]})}function Qe(p){var h=p.size,y=h===void 0?40:h,_n=p.type,Pe=_n===void 0?"common":_n,Ge=p.src,de=p.style,He=de===void 0?{}:de;return(0,Vn.jsx)("img",{style:v()({display:"block",width:y,height:y},He),src:Ge||Me[Pe]||"common"})}},32151:function(ln,O,n){n.d(O,{Z:function(){return L}});var z=n(52677),v=n.n(z),F=n(13769),N=n.n(F),T=n(97857),o=n.n(T),E=n(93865),S=n(96406),D=n(45387),C=n(25449),b=n(93967),P=n.n(b),M=n(67294),I=n(68400),t=n.n(I),m=n(3067),d,c=(0,m.default)(d||(d=t()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),u=n(85893),a=["tooltip"],s=(0,M.forwardRef)(function(i,B){var Y=i.labelMarginRight,H=Y===void 0?void 0:Y,V=(0,M.useRef)(null),A=(0,E.getCommonConfig)(),R=A.sparkPrefix,X=c();return(0,M.useImperativeHandle)(B,function(){return V.current}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(X,{}),(0,u.jsx)(D.Z,o()(o()({},i),{},{className:P()(i.className,"".concat(R,"-form"),H==="small"&&"".concat(R,"-form-label-margin-small")),ref:V,requiredMark:function(vn,an){return(0,u.jsxs)(u.Fragment,{children:[vn,an.required&&(0,u.jsx)("span",{className:"".concat(R,"-required-mark"),children:"*"})]})}}))]})}),f=function(B){var Y=B.tooltip,H=N()(B,a),V=(0,u.jsx)(S.Z,{});function A(){if(Y){var R=v()(Y)==="object"&&!M.isValidElement(Y)?o()(o()({},Y),{},{icon:Y.icon||V}):{title:Y,icon:V};return R}}return(0,u.jsx)(D.Z.Item,o()(o()({},H),{},{tooltip:A(),labelCol:B.labelCol||(B.layout==="vertical"?{flex:"unset"}:void 0)}))},x=f;x.useStatus=C.Z.useStatus;var r=s;r.Item=x,r.List=D.Z.List,r.ErrorList=D.Z.ErrorList,r.Provider=D.Z.Provider,r.useForm=D.Z.useForm,r.useFormInstance=D.Z.useFormInstance,r.useWatch=D.Z.useWatch;var L=r},67985:function(ln,O,n){n.d(O,{Z:function(){return c}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(38654),o=n(93865),E=n(57027),S=n(93967),D=n.n(S),C=n(67294),b=n(68400),P=n.n(b),M=n(3067),I,t=(0,M.default)(I||(I=P()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),m=n(85893),d=["className","iconType","bordered"],c=function(u){var a=u.className,s=u.iconType,f=u.bordered,x=f===void 0?!0:f,r=N()(u,d),L=(0,o.getCommonConfig)(),i=L.iconfont,B=t(),Y=(0,C.useMemo)(function(){return s?(0,m.jsx)(T.Z,{type:s,size:u.size}):typeof u.icon=="string"?(0,m.jsx)(T.Z,{type:u.icon,size:u.size}):u.icon},[u.icon,s,i]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(B,{}),(0,m.jsx)(E.Z,v()(v()({className:D()(a,"".concat(L.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:x?"default":"text"},r),{},{icon:Y}))]})}},21773:function(ln,O,n){n.d(O,{X:function(){return T}});var z=n(68400),v=n.n(z),F=n(3067),N,T=(0,F.default)(N||(N=v()([`
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

.`,`-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1;
}

.`,`-icon-spin {
  animation: spinning 1s ease-in-out infinite;
}

.`,`-cursor-pointer {
  cursor: pointer;
  color: var(--`,`-color-icon);
  
  &:hover {
    color: var(--`,`-color-icon-hover);
  }
}
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix})},38654:function(ln,O,n){n.d(O,{Z:function(){return d}});var z=n(9783),v=n.n(z),F=n(97857),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(73437),D=n(93967),C=n.n(D),b=n(67294),P=n(21773),M=n(85893),I=["type","className","isCursorPointer","spin","size"],t;function m(c){return t||(t=(0,S.Z)({scriptUrl:c})),t}function d(c){var u=c.type,a=c.className,s=a===void 0?"":a,f=c.isCursorPointer,x=f===void 0?!1:f,r=c.spin,L=c.size,i=o()(c,I),B=(0,E.getCommonConfig)(),Y=B.sparkPrefix,H=B.iconfont,V=(0,P.X)();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(V,{}),b.createElement(m(H),N()({type:u,style:N()({fontSize:L},c.style),className:C()(x&&"".concat(Y,"-cursor-pointer"),s,"".concat(Y,"-icon"),v()({},"".concat(Y,"-icon-spin"),r))},i))]})}},15713:function(ln,O,n){n.d(O,{Z:function(){return m}});var z=n(97857),v=n.n(z),F=n(23048),N=n(93865),T=n(43974),o=n(15241),E=n(67294),S=n(68400),D=n.n(S),C=n(3067),b,P=(0,C.default)(b||(b=D()([`
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
`])),function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix}),M=n(85893),I=function(c){var u=P(),a=(0,N.getCommonConfig)(),s=a.antPrefix,f=(0,E.useMemo)(function(){var x={transitionName:""},r=c.preview;return r===!1?!1:r===!0?x:v()(v()({mask:(0,M.jsxs)("div",{className:"".concat(s,"-image-mask-info"),children:[(0,M.jsx)(T.Z,{className:"".concat(s,"-image-mask-info-icon")}),(0,M.jsx)("span",{className:"".concat(s,"-image-mask-info-text"),children:F.default.get({id:"components.commonComponents.Image.Preview",dm:"\u9884\u89C8"})})]})},r),x)},[c.preview]);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u,{}),(0,M.jsx)(o.Z,v()({preview:f},c))]})},t=I;t.PreviewGroup=o.Z.PreviewGroup;var m=t},86995:function(ln,O,n){n.d(O,{Z:function(){return s}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(25278),D=n(93967),C=n.n(D),b=n(67294),P=n(68400),M=n.n(P),I=n(3067),t,m=(0,I.default)(t||(t=M()([`
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
`])),function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix},function(f){return f.antPrefix}),d=n(85893),c=["shape"],u=b.forwardRef(function(f,x){var r=f.shape,L=r===void 0?"default":r,i=o()(f,c),B=(0,E.getCommonConfig)(),Y=B.antPrefix,H=m();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(H,{}),(0,d.jsx)(S.Z,v()(v()({},i),{},{className:C()(f.className,N()({},"".concat(Y,"-input-round"),L==="round")),ref:x}))]})}),a=b.forwardRef(function(f,x){var r=(0,E.getCommonConfig)(),L=r.antPrefix,i=m();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i,{}),(0,d.jsx)(S.Z.TextArea,v()(v()({},f),{},{className:C()("".concat(L,"-text-area"),f.className),ref:x}))]})});Object.assign(u,{TextArea:a,Search:S.Z.Search,Password:S.Z.Password,OTP:S.Z.OTP});var s=u},56373:function(ln,O,n){var z=n(5574),v=n.n(z),F=n(13769),N=n.n(F),T=n(97857),o=n.n(T),E=n(33495),S=n(52565),D=n(55595),C=n(96406),b=n(45360),P=n(85893),M=["content"],I={success:{type:"success",icon:(0,P.jsx)(E.Z,{})},warning:{type:"warning",icon:(0,P.jsx)(S.Z,{})},error:{type:"error",icon:(0,P.jsx)(D.Z,{})},info:{type:"info",icon:(0,P.jsx)(C.Z,{})}},t=function(c,u){var a,s;typeof u=="string"?s={content:u}:s=o()({},u);var f=s,x=f.content,r=N()(f,M);b.ZP.open(o()({type:c,content:x,icon:c==="loading"||(a=I[c])===null||a===void 0?void 0:a.icon},r))},m=function(c){var u=b.ZP.useMessage(c),a=v()(u,2),s=a[0],f=a[1],x=function(i,B){var Y,H;typeof B=="string"?H={content:B,type:i}:H=o()(o()({},B),{},{type:i}),s[i](o()(o()({},H),{},{icon:(Y=I[i])===null||Y===void 0?void 0:Y.icon}))},r=o()(o()({},s),{},{success:function(i){return x("success",i)},warning:function(i){return x("warning",i)},error:function(i){return x("error",i)},info:function(i){return x("info",i)},loading:function(i){return x("loading",i)}});return[r,f]};O.Z=o()(o()({},b.ZP),{},{success:function(c){return t("success",c)},warning:function(c){return t("warning",c)},error:function(c){return t("error",c)},info:function(c){return t("info",c)},loading:function(c){return t("loading",c)},useMessage:m})},76561:function(ln,O,n){n.d(O,{Z:function(){return a}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(24772),D=n(85576),C=n(93967),b=n.n(C),P=n(68400),M=n.n(P),I=n(3067),t,m=(0,I.default)(t||(t=M()([`
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
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),d=n(85893),c=["showDivider","closable"],u=function(f){var x=m(),r=(0,E.getCommonConfig)(),L=r.sparkPrefix,i=f.showDivider,B=i===void 0?!0:i,Y=f.closable,H=Y===void 0?!0:Y,V=o()(f,c),A=function(vn){return f.info?(0,d.jsxs)("div",{className:"".concat(L,"-modal-footer-wrapper"),children:[(0,d.jsx)("span",{className:"".concat(L,"-modal-footer-info"),children:f.info}),(0,d.jsx)("div",{className:"".concat(L,"-modal-footer-origin-node"),children:vn})]}):vn},R=H?f.closeIcon||(0,d.jsx)(S.Z,{className:"".concat(L,"-modal-title-close"),onClick:function(vn){var an;(an=f.onCancel)===null||an===void 0||an.call(f,vn)}}):null,X=f.footer===void 0?A:f.footer;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{}),(0,d.jsx)(D.Z,v()(v()({},V),{},{closeIcon:null,title:(0,d.jsxs)("div",{className:"".concat(L,"-modal-title-wrapper"),children:[(0,d.jsx)("div",{className:"".concat(L,"-modal-title"),children:f.title}),R]}),wrapClassName:b()("".concat(L,"-modal"),N()({},"".concat(L,"-show-divider"),B),f.wrapClassName,"animate-in"),footer:X,transitionName:""}))]})};u.useModal=D.Z.useModal,u.success=D.Z.success,u.error=D.Z.error,u.warning=D.Z.warning,u.info=D.Z.info,u.confirm=D.Z.confirm,u.SMALL_WIDTH=640,u.MEDIUM_WIDTH=800,u.LARGE_WIDTH=960;var a=u},89887:function(ln,O,n){var z=n(5574),v=n.n(z),F=n(97857),N=n.n(F),T=n(93865),o=n(77900),E=n(29998),S=n(29368),D=n(61441),C=n(26855),b=n(85893),P=["success","warning","error","info"];function M(t,m){if(t==="success")return(0,b.jsx)(o.Z,{style:{color:"var(--".concat(m,"-color-success)"),fontSize:24}});if(t==="warning")return(0,b.jsx)(E.Z,{style:{color:"var(--".concat(m,"-color-warning)"),fontSize:24}});if(t==="info")return(0,b.jsx)(S.Z,{style:{color:"var(--".concat(m,"-color-info)"),fontSize:24}});if(t==="error")return(0,b.jsx)(D.Z,{style:{color:"var(--".concat(m,"-color-error)"),fontSize:24}})}var I={};I.destroy=C.ZP.destroy,I.open=function(t){var m=(0,T.getCommonConfig)(),d=m.sparkPrefix,c="".concat(d,"-notification");t.className&&(c+=" ".concat(t.className)),C.ZP.open(N()(N()({},t),{},{className:c}))},P.forEach(function(t){I[t]=function(m){var d=(0,T.getCommonConfig)(),c=d.sparkPrefix,u=d.antPrefix,a="".concat(c,"-notification");m.className&&(a+=" ".concat(m.className)),C.ZP[t](N()(N()({},m),{},{className:a,icon:M(t,u)}))}}),I.useNotification=function(t){var m=(0,T.getCommonConfig)(),d=m.sparkPrefix,c=m.antPrefix,u="".concat(d,"-notification"),a=C.ZP.useNotification(t),s=v()(a,2),f=s[0],x=s[1],r={};return P.forEach(function(L){r[L]=function(i){return f[L](N()(N()({},i),{},{className:u,icon:M(L,c)}))}}),r.open=function(L){C.ZP.open(N()(N()({},L),{},{className:u}))},r.destroy=f.destroy,[r,x]},O.Z=I},94476:function(ln,O,n){n.d(O,{Z:function(){return f}});var z=n(97857),v=n.n(z),F=n(52677),N=n.n(F),T=n(13769),o=n.n(T),E=n(93865),S=n(23048),D=n(54604),C=n(53033),b=n(52861),P=n(86250),M=n(46339),I=n(68400),t=n.n(I),m=n(3067),d,c=(0,m.default)(d||(d=t()([`
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
`])),function(x){return x.sparkPrefix},function(x){return x.sparkPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix},function(x){return x.antPrefix}),u=n(85893),a=["hideSwitchButton"],s={options:[{label:"10 ".concat(S.default.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.default.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:10},{label:"20 ".concat(S.default.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.default.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:20},{label:"50 ".concat(S.default.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.default.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:50},{label:"100 ".concat(S.default.get({id:"components.commonComponents.Pagination.Items",dm:"\u6761"})," / ").concat(S.default.get({id:"components.commonComponents.Pagination.Page",dm:"\u9875"})),value:100}]},f=function(x){var r=x.hideSwitchButton,L=r===void 0?!1:r,i=o()(x,a),B=(0,E.getCommonConfig)(),Y=B.sparkPrefix,H=c(),V=function(){var un=function(an,q,en){return q==="jump-prev"||q==="jump-next"?(0,u.jsx)(D.Z,{className:"".concat(Y,"-jump-next-icon")}):L||x.itemRender?en:q==="prev"?(0,u.jsx)("a",{children:(0,u.jsxs)(P.Z,{gap:8,children:[(0,u.jsx)(C.Z,{})," ",(0,u.jsx)("span",{children:S.default.get({id:"components.commonComponents.Pagination.PreviousPage",dm:"\u4E0A\u4E00\u9875"})})]})}):q==="next"?(0,u.jsx)("a",{children:(0,u.jsxs)(P.Z,{gap:8,children:[(0,u.jsx)("span",{children:S.default.get({id:"components.commonComponents.Pagination.NextPage",dm:"\u4E0B\u4E00\u9875"})})," ",(0,u.jsx)(b.Z,{})]})}):en};return un},A;i.showSizeChanger!==null&&i.showSizeChanger!==void 0?A=i.showSizeChanger:A=i.total&&i.total>50;var R=function(){return x.showSizeChanger===!0?s:x.showSizeChanger===!1?!1:N()(x.showSizeChanger)==="object"&&x.showSizeChanger?x.showSizeChanger:i.total&&i.total>50?s:!1};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(H,{}),(0,u.jsx)(M.Z,v()(v()({itemRender:V()},i),{},{showSizeChanger:R(),className:"".concat(Y,"-pagination")}))]})}},81930:function(ln,O,n){var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(52565),E=n(96406),S=n(55595),D=n(33495),C=n(86738),b=n(67294),P=n(85893),M=["icon","type","okButtonProps"],I=b.forwardRef(function(t,m){var d=t.icon,c=t.type,u=c===void 0?"confirm":c,a=t.okButtonProps,s=N()(t,M),f=(0,T.getCommonConfig)(),x=f.antPrefix,r=function(){return d||(u==="confirm"?(0,P.jsx)(o.Z,{style:{color:"var(--".concat(x,"-color-warning)")}}):u==="info"?(0,P.jsx)(E.Z,{style:{color:"var(--".concat(x,"-color-info)")}}):u==="warning"?(0,P.jsx)(o.Z,{style:{color:"var(--".concat(x,"-color-warning)")}}):u==="error"?(0,P.jsx)(S.Z,{style:{color:"var(--".concat(x,"-color-error)")}}):u==="success"?(0,P.jsx)(D.Z,{style:{color:"var(--".concat(x,"-color-success)")}}):(0,P.jsx)(o.Z,{style:{color:"var(--".concat(x,"-color-warning)")}}))},L=function(){var B={};return["warning","error"].includes(u)&&(B.danger=!0),v()(v()({},B),a||{})};return(0,P.jsx)(C.Z,v()(v()({},s),{},{ref:m,icon:r(),okButtonProps:L()}))});O.Z=I},14392:function(ln,O,n){var z=n(97857),v=n.n(z),F=n(93865),N=n(35872),T=n(55241),o=n(67294),E=n(85893),S=o.forwardRef(function(D,C){var b=D.content===""||D.content===void 0||D.content===null,P=D.title===""||D.title===void 0||D.title===null,M=D.open!==void 0&&D.open!==null?D.open:b&&P?!1:void 0,I=(0,F.getCommonConfig)(),t=I.antPrefix;return(0,E.jsx)(T.Z,v()(v()({},D),{},{arrow:D.arrow||!1,open:M,ref:C,getPopupContainer:D.getPopupContainer||function(m){return(0,N.Q)(m,".".concat(t,"-app"))}}))});O.Z=S},71493:function(ln,O,n){n.d(O,{Z:function(){return Cn}});var z=n(9783),v=n.n(z),F=n(19632),N=n.n(F),T=n(5574),o=n.n(T),E=n(68400),S=n.n(E),D=n(15664),C=n(48825),b=n(17089),P=n(89580),M=n(55839),I=n(9361),t=n(30122),m=n(93967),d=n.n(m),c=n(67294),u=n(12444),a=n.n(u),s=n(72004),f=n.n(s),x=n(31996),r=n.n(x),L=n(26037),i=n.n(L),B=n(75533),Y=function(xn){r()(sn,xn);var cn=i()(sn);function sn(Ln){var pn;return a()(this,sn),pn=cn.call(this),pn.name=Ln,pn}return f()(sn,[{key:"eq",value:function(pn){return pn.name==this.name}},{key:"toDOM",value:function(){var pn=document.createElement("span");return pn.setAttribute("aria-hidden","true"),pn.className="cm-prompt-var",pn.textContent="${".concat(this.name,"}"),pn}},{key:"ignoreEvent",value:function(){return!1}}]),sn}(B.l9),H=new B.Y1({regexp:/\$\{(\w+)\}/g,decoration:function(cn){return B.p.replace({widget:new Y(cn[1])})}}),V=B.lg.fromClass(function(){function xn(cn){a()(this,xn),v()(this,"placeholders",void 0),this.placeholders=H.createDeco(cn)}return f()(xn,[{key:"update",value:function(sn){this.placeholders=H.updateDeco(sn,this.placeholders)}}]),xn}(),{decorations:function(cn){return cn.placeholders},provide:function(cn){return B.tk.atomicRanges.of(function(sn){var Ln;return((Ln=sn.plugin(cn))===null||Ln===void 0?void 0:Ln.placeholders)||B.p.none})}}),A=[V],R=n(97857),X=n.n(R),un=n(34790);function vn(){var xn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],cn=arguments.length>1?arguments[1]:void 0,sn=cn.onCreate,Ln=cn.createBtnText;return(0,un.ys)({override:[function(pn){var mn=pn.matchBefore(/\/(\w+)?/);return!mn||mn&&mn.from==mn.to&&!pn.explicit?null:{from:mn==null?void 0:mn.from,options:(sn?[].concat(N()(xn),[{label:"/NEW_VAR",boost:-99}]):xn).map(function(An){return X()(X()({},An),{},{displayLabel:An.label==="/NEW_VAR"?Ln:An.label.slice(1),apply:function(Tn,_,Rn,jn){if(_.label==="/NEW_VAR")return Tn.dispatch({changes:{from:Rn,to:jn,insert:""}}),sn==null?void 0:sn();var yn=_.label.slice(1),Wn="${".concat(yn,"}");Tn.dispatch({changes:{from:Rn,to:jn,insert:Wn}})}})})}}]})}var an=n(85893),q,en,fn=(0,t.kc)(function(xn){var cn=xn.css,sn=xn.token;return{onCreate:cn(q||(q=S()([`
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
  `])),sn.colorBorderSecondary,sn.colorBgContainer),cm:cn(en||(en=S()([`
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
  `])),sn.colorTextSecondary,sn.colorBlue,sn.colorPurple,sn.colorPurpleBg,sn.colorBgContainer,sn.colorText,sn.colorFillSecondary),root:{position:"relative",minHeight:300,backgroundColor:sn.colorBgBase,border:"1px solid ".concat(sn.colorBorderSecondary),borderRadius:6,overflow:"hidden",padding:"4px 12px",resize:"vertical"},footer:{position:"absolute",bottom:0,left:0,right:0,padding:"0 12px",height:30,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:12,color:sn.colorTextTertiary,backgroundColor:sn.colorBgBase},tips:{display:"flex",alignItems:"center",gap:4}}}),dn={markdown:[(0,C.JH)()]},Nn=[],gn=function(cn){var sn=fn(),Ln=sn.styles,pn=cn.variables||Nn,mn=(0,c.useState)(!1),An=o()(mn,2),On=An[0],Tn=An[1],_=cn.onCreate,Rn=c.useContext(M.ZP.ConfigContext),jn=Rn.theme.algorithm===I.Z.darkAlgorithm,yn=cn.createBtnText||"+ \u65B0\u589E\u53D8\u91CF",Wn=(0,c.useMemo)(function(){return jn?b.Pc:b.Zp},[jn]),Kn=(0,c.useMemo)(function(){return[].concat(N()(dn.markdown),N()(A),[vn(N()(pn).map(function(Xn){return{label:"/".concat(Xn.code),info:Xn.label}})||[],{onCreate:_,createBtnText:yn})])},[pn]);(0,c.useEffect)(function(){return Tn(!0),function(){Tn(!1)}},[]);var tn=c.useMemo(function(){return cn.tipsText===!1?(0,an.jsx)("div",{className:Ln.tips}):cn.tipsText?cn.tipsText:(0,an.jsxs)("div",{className:Ln.tips,children:['\u8F93\u5165"/"\u5F15\u7528\u53D8\u91CF\uFF0C\u652F\u6301 ',(0,an.jsx)(D.Z,{size:16})," \u56DE\u8F66\u65B0\u589E"]})},[cn.tipsText]);return On?(0,an.jsxs)("div",{className:Ln.root,children:[(0,an.jsx)(P.ZP,{className:d()(Ln.cm,v()({},Ln.onCreate,_)),extensions:Kn,value:cn.value,theme:Wn,lang:"markdown",onChange:cn.onChange,basicSetup:{lineNumbers:!1,foldGutter:!1,highlightActiveLine:!1}},Wn),(0,an.jsxs)("div",{className:Ln.footer,children:[tn,cn.maxLength?(0,an.jsxs)("div",{children:[cn.value.length,"/",cn.maxLength]}):null]})]}):null},Cn=(0,c.memo)(gn)},25845:function(ln,O,n){n.r(O),n.d(O,{useStyle:function(){return T}});var z=n(68400),v=n.n(z),F=n(3067),N,T=(0,F.default)(N||(N=v()([`
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
`])),function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix},function(o){return o.antPrefix})},5626:function(ln,O,n){n.r(O);var z=n(97857),v=n.n(z),F=n(93865),N=n(55742),T=n(93967),o=n.n(T),E=n(25845),S=n(85893);O.default=function(D){var C=(0,F.getCommonConfig)(),b=C.sparkPrefix,P=C.antPrefix,M=D.gap,I=M===void 0?12:M,t=D.bordered,m=t===void 0?!1:t,d=D.ghost,c=d===void 0?!0:d,u=(0,E.useStyle)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{}),(0,S.jsx)(N.ZP.Group,v()(v()({},D),{},{className:o()(D.className,D.bordered?"".concat(b,"-radio-group-bordered"):"",c?"".concat(P,"-radio-group-ghost"):""),optionType:"button"}))]})}},65163:function(ln,O,n){var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(21860),o=n(85893),E=["texture"];O.Z=function(S){var D=S.texture,C=D===void 0?!1:D,b=N()(S,E);return(0,o.jsx)(T.Z,v()(v()({},b),{},{texture:C}))}},13191:function(ln,O,n){n.d(O,{J:function(){return x},Z:function(){return L}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(93865),o=n(86125),E=n(93967),S=n.n(E),D=n(67294),C=n(68400),b=n.n(C),P=n(3067),M,I=(0,P.default)(M||(M=b()([`
.`,"-slider.","-slider.",`-slider-no-marks {
  margin: 0;
}
`])),function(i){return i.antPrefix},function(i){return i.sparkPrefix},function(i){return i.sparkPrefix}),t=n(13769),m=n.n(t),d=n(13457),c,u=(0,P.default)(c||(c=b()([`
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
`])),function(i){return i.sparkPrefix},function(i){return i.sparkPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix},function(i){return i.antPrefix}),a=n(85893),s=["styles","classNames","sliderProps","inputNumberProps"];function f(i){var B,Y,H=(0,T.getCommonConfig)(),V=H.sparkPrefix;console.log("debug sparkPrefix in SliderSelector",V);var A=i.styles,R=i.classNames,X=i.sliderProps,un=i.inputNumberProps,vn=m()(i,s),an=u(),q=i.marks||((B=i.sliderProps)===null||B===void 0?void 0:B.marks)||null,en=q||N()(N()({},i.min,i.min),i.max,i.max),fn=q&&((Y=Object.keys(q))===null||Y===void 0?void 0:Y.length)>0,dn=function(gn){var Cn=typeof gn=="string"?parseFloat(gn):gn;if(Cn===null||isNaN(Cn)){i.onChange(null);return}Cn<i.min?i.onChange(i.min):Cn>i.max?i.onChange(i.max):i.onChange(Cn)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(an,{}),(0,a.jsxs)("div",{style:A==null?void 0:A.wrapper,className:S()("".concat(V,"-slider-input"),N()({},"".concat(V,"-slider-input-has-marks"),fn),R==null?void 0:R.wrapper),onMouseUp:function(){var gn;(gn=i.onBlur)===null||gn===void 0||gn.call(i)},children:[(0,a.jsx)(x,v()(v()(v()({disabled:i.disabled,min:i.min,max:i.max,step:i.step,tooltip:{getPopupContainer:function(gn){return gn}}},vn),X),{},{marks:en,style:v()(v()(v()({},A==null?void 0:A.slider),X==null?void 0:X.style),{},{width:"100%"}),className:S()(R==null?void 0:R.slider,X==null?void 0:X.className),onChange:dn,value:i.value===null?void 0:i.value})),(0,a.jsx)(d.Z,v()(v()({controls:!1,step:i.step,min:i.min,max:i.max,disabled:i.disabled},un),{},{onBlur:function(){var gn;(gn=i.onBlur)===null||gn===void 0||gn.call(i)},value:i.value,onChange:dn,style:v()(v()({},A==null?void 0:A.inputNumber),un==null?void 0:un.style),className:S()(R==null?void 0:R.inputNumber,un==null?void 0:un.className)}))]})]})}var x=D.forwardRef(function(i,B){var Y=(0,T.getCommonConfig)(),H=Y.sparkPrefix,V=I();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(V,{}),(0,a.jsx)(o.Z,v()(v()({},i),{},{className:S()("".concat(H,"-slider"),N()({},"".concat(H,"-slider-no-marks"),!Object.keys(i.marks||{}).length),i.className),ref:B}))]})}),r=x;Object.assign(r,{Input:f});var L=r},88886:function(ln,O,n){n.d(O,{Z:function(){return I}});var z=n(9783),v=n.n(z),F=n(93865),N=n(9361),T=n(38703),o=n(93967),E=n.n(o),S=n(68400),D=n.n(S),C=n(3067),b,P=(0,C.default)(b||(b=D()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix}),M=n(85893),I=function(t){var m=t.indicator,d=t.spinning,c=d===void 0?!0:d,u=t.children,a=t.style,s=t.className,f=(0,F.getCommonConfig)(),x=f.sparkPrefix,r=N.Z.useToken(),L=P(),i=(0,M.jsxs)("svg",{className:"".concat(x,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,M.jsx)("defs",{children:(0,M.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,M.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,M.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,M.jsx)("g",{children:(0,M.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:r.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,M.jsx)("g",{children:(0,M.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:r.token.colorPrimary,fillOpacity:"1"})})]})]}),B=t.tip||t.showProgress&&(0,M.jsxs)("div",{children:[(0,M.jsxs)("span",{children:["loading",t.percent!==void 0&&t.percent!==null&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:t.percent}),"%"]})]}),(0,M.jsx)(T.Z,{percent:t.percent,showInfo:!1})]})||null;return u?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{}),(0,M.jsxs)("div",{className:E()("".concat(x,"-spinner-overlay"),s),style:a,children:[(0,M.jsx)("div",{className:E()("".concat(x,"-spinner-content"),v()({},"".concat(x,"-spinning"),c)),children:u}),c&&(0,M.jsxs)("div",{className:"".concat(x,"-spinner"),children:[(0,M.jsx)("div",{className:"".concat(x,"-indicator"),children:m||i}),(0,M.jsx)("div",{className:"".concat(x,"-title"),children:B})]})]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{}),(0,M.jsx)("div",{className:E()("".concat(x,"-spinner"),s),style:a,children:c&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{className:"".concat(x,"-indicator"),children:m||i}),(0,M.jsx)("div",{className:"".concat(x,"-title"),children:B})]})})]})}},95542:function(ln,O,n){n.d(O,{Z:function(){return b}});var z=n(97857),v=n.n(z),F=n(55054),N=n(68400),T=n.n(N),o=n(3067),E,S=(0,o.default)(E||(E=T()([`
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
`])),function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix},function(P){return P.antPrefix}),D=n(85893),C=function(M){var I=S();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(I,{}),(0,D.jsx)(F.Z,v()({},M))]})},b=C},89806:function(ln,O,n){n.d(O,{Z:function(){return I}});var z=n(97857),v=n.n(z),F=n(93865),N=n(97634),T=n(42119),o=n(67294),E=n(68400),S=n.n(E),D=n(3067),C,b=(0,D.default)(C||(C=S()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),P=n(85893),M=function(m){var d=(0,F.getCommonConfig)(),c=d.sparkPrefix,u=b(),a=(0,o.useMemo)(function(){if(m.items)return m.items.map(function(s,f){var x=s.status;return!x&&m.current!==void 0&&(f<m.current?x="finish":f===m.current?x="process":x="wait"),x==="finish"?v()(v()({},s),{},{icon:(0,P.jsx)(N.Z,{className:"".concat(c,"-finish-icon")})}):s})},[m.items,m.current]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(u,{}),(0,P.jsx)(T.Z,v()(v()({},m),{},{items:a,className:"".concat(c,"-steps")}))]})},I=M},59113:function(ln,O,n){n.d(O,{Z:function(){return t}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(86250),o=n(72269),E=n(93865),S=n(68400),D=n.n(S),C=n(3067),b,P=(0,C.default)(b||(b=D()([`
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
`])),function(m){return m.sparkPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.antPrefix},function(m){return m.sparkPrefix}),M=n(85893),I=["label","className"],t=function(m){var d=P(),c=m.label,u=m.className,a=N()(m,I),s=(0,E.getCommonConfig)(),f=s.sparkPrefix;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(d,{}),(0,M.jsxs)(T.Z,{align:"center",gap:8,className:u,children:[(0,M.jsx)(o.Z,v()(v()({},a),{},{className:"".concat(f,"-switch")})),c&&(0,M.jsx)("span",{className:"".concat(f,"-switch-label"),children:c})]})]})}},80731:function(ln,O,n){n.d(O,{Z:function(){return d}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(52253),E=n(3929),S=n(93967),D=n.n(S),C=n(68400),b=n.n(C),P=n(3067),M,I=(0,P.default)(M||(M=b()([`
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
`])),function(c){return c.sparkPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix},function(c){return c.antPrefix}),t=n(85893),m=["columns"];function d(c){var u,a=(0,T.getCommonConfig)(),s=a.sparkPrefix,f=c.columns,x=N()(c,m);f=(u=f)===null||u===void 0?void 0:u.map(function(L){return v()(v()({},L),{},{sortIcon:L.sortIcon||function(){return(0,t.jsx)(o.Z,{style:{fontSize:16,marginLeft:8}})}})});var r=I();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{}),(0,t.jsx)(E.Z,v()({className:D()("".concat(s,"-table")),columns:f},x))]})}},91268:function(ln,O,n){n.d(O,{Z:function(){return x}});var z=n(97857),v=n.n(z),F=n(9783),N=n.n(F),T=n(5574),o=n.n(T),E=n(13769),S=n.n(E),D=n(93865),C=n(27848),b=n(92398),P=n(92783),M=n(93967),I=n.n(M),t=n(68400),m=n.n(t),d=n(3067),c,u=(0,d.default)(c||(c=m()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix}),a=n(85893),s=["type","centered"],f=function(L){var i=L.type,B=L.centered,Y=S()(L,s),H=(0,D.getCommonConfig)(),V=H.sparkPrefix,A=(0,C.Z)(function(){var an;return(an=Y.items[0])===null||an===void 0?void 0:an.key},{value:Y.activeKey,defaultValue:Y.defaultActiveKey}),R=o()(A,2),X=R[0],un=R[1],vn=u();return i==="segmented"?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(vn,{}),(0,a.jsx)(b.Z,v()(v()({animated:!1},Y),{},{activeKey:X,renderTabBar:function(q){var en,fn=((en=L.items)===null||en===void 0?void 0:en.map(function(dn){return{label:dn.label,value:dn.key,disabled:dn.disabled}}))||[];return(0,a.jsx)(P.Z,{options:fn,onChange:function(Nn){var gn;un(Nn),(gn=L.onChange)===null||gn===void 0||gn.call(L,Nn)},className:I()("".concat(V,"-segmented-tab-bar"),N()({},"".concat(V,"-segmented-tab-bar-centered"),B)),value:q.activeKey,size:L.size})}}))]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(vn,{}),(0,a.jsx)(b.Z,v()(v()({},L),{},{type:i}))]})};f.TabPane=b.Z.TabPane;var x=f},20010:function(ln,O,n){n.d(O,{Z:function(){return c}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(66309),E=n(93967),S=n.n(E),D=n(67294),C=n(68400),b=n.n(C),P=n(3067),M,I=(0,P.default)(M||(M=b()([`
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
`])),function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.sparkPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix},function(u){return u.sparkPrefix},function(u){return u.antPrefix},function(u){return u.antPrefix}),t=n(85893),m=["children","className","bordered","color","size"],d=(0,D.forwardRef)(function(u,a){var s=u.children,f=u.className,x=u.bordered,r=x===void 0?!1:x,L=u.color,i=L===void 0?"mauve":L,B=u.size,Y=B===void 0?"middle":B,H=N()(u,m),V=I(),A=(0,T.getCommonConfig)(),R=A.sparkPrefix;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{}),(0,t.jsx)(o.Z,v()(v()({className:S()("".concat(R,"-tag ").concat(R,"-tag-").concat(i," ").concat(R,"-tag-").concat(Y),f),bordered:r},H),{},{ref:a,children:s}))]})}),c=d},69298:function(ln,O,n){n.d(O,{Z:function(){return x}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(78874),E=n(9361),S=n(55839),D=n(68351),C=n(93967),b=n.n(C),P=n(67294),M=n(68400),I=n.n(M),t=n(3067),m,d=(0,t.default)(m||(m=I()([`
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
`])),function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),c=n(85893),u=["className","popupClassName"],a=["className","popupClassName"],s=function(L){var i=L.className,B=L.popupClassName,Y=N()(L,u),H=E.Z.useToken(),V=H.token,A=(0,T.getCommonConfig)(),R=A.sparkPrefix,X=d();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(X,{}),(0,c.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:V.colorPrimary}}},children:(0,c.jsx)(D.Z,v()({suffixIcon:(0,c.jsx)(o.Z,{}),className:b()("".concat(R,"-picker"),i),popupClassName:b()("".concat(R,"-picker-dropdown"),B)},Y))})]})},f=function(L){var i=L.className,B=L.popupClassName,Y=N()(L,a),H=E.Z.useToken(),V=H.token,A=(0,T.getCommonConfig)(),R=A.sparkPrefix,X=d();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(X,{}),(0,c.jsx)(S.ZP,{theme:{components:{DatePicker:{activeBorderColor:V.colorPrimary}}},children:(0,c.jsx)(D.Z.RangePicker,v()({suffixIcon:(0,c.jsx)(o.Z,{}),className:b()("".concat(R,"-picker"),i),popupClassName:b()("".concat(R,"-picker-dropdown"),B),popupStyle:{padding:0}},Y))})]})};s.RangePicker=f;var x=s},33369:function(ln,O,n){n.d(O,{Z:function(){return u}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(35872),E=n(83062),S=n(93967),D=n.n(S),C=n(67294),b=n(68400),P=n.n(b),M=n(3067),I,t=(0,M.default)(I||(I=P()([`
/* \u9ED8\u8BA4\u6DF1\u8272 */
.`,`-tooltip-content {
  .`,`-tooltip-inner {
    border: 1px solid transparent;
    padding: 6px 12px;
    background: var(--`,`-color-text-base);
    color: var(--`,`-color-bg-base);
  }
}

/* \u6D45\u8272\u6A21\u5F0F */
.`,`-tooltip-light {
  .`,"-tooltip-content .",`-tooltip-inner {
    background: var(--`,`-color-bg-base);
    color: var(--`,`-color-text);
  }
  
  .`,`-tooltip-arrow {
    &::after {
      background: var(--`,`-color-bg-base);
    }
  }
}
`])),function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),m=n(85893),d=["mode","arrow","overlayClassName","getPopupContainer","align"],c=(0,C.forwardRef)(function(a,s){var f=t(),x=a.mode,r=x===void 0?"dark":x,L=a.arrow,i=a.overlayClassName,B=a.getPopupContainer,Y=a.align,H=N()(a,d),V=(0,T.getCommonConfig)(),A=V.sparkPrefix,R=V.antPrefix;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{}),(0,m.jsx)(E.Z,v()(v()({},H),{},{arrow:L!=null?L:!1,overlayClassName:D()(i,r==="light"&&"".concat(A,"-tooltip-light")),getPopupContainer:B||function(X){return(0,o.Q)(X,".".concat(R,"-app"))},ref:s}))]})}),u=c},20946:function(ln,O,n){n.d(O,{Z:function(){return u}});var z=n(97857),v=n.n(z),F=n(13769),N=n.n(F),T=n(93865),o=n(23799),E=n(93967),S=n.n(E),D=n(68400),C=n.n(D),b=n(3067),P,M=(0,b.default)(P||(P=C()([`
.`,"-upload.",`-upload-wrapper {
  .`,"-upload.",`-upload-select {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
  }
  
  .`,`-upload-drag {
    border: var(--`,"-line-width) dashed var(--",`-color-border-secondary);
    background-color: var(--`,`-color-fill-tertiary);
    
    .`,`-upload-btn {
      padding: 32px 48px;
    }
    
    .`,`-upload-drag-container {
      text-align: center;
      
      .`,`-upload-icon {
        display: inline-grid;
        place-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: var(--`,`-color-bg-base);
      }
      
      .`,`-upload-text {
        margin-top: 8px;
        margin-bottom: 0;
        color: var(--`,`-color-text);
        font-weight: 500;
        line-height: 24px;
      }
      
      .`,`-upload-hint {
        margin-top: 4px;
        margin-bottom: 0;
        color: var(--`,`-color-text-secondary);
        line-height: 20px;
      }
    }
  }
}

.`,"-upload.",`-custom-uploaded {
  .`,`-upload-list {
    &:first-child {
      margin-top: 0;
      width: 242px;
    }
    
    .`,`-upload-list-item {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 9px 12px;
      margin-top: 20px;
      border-color: var(--`,`-color-border-secondary);
      border-style: solid;
      
      .`,`-upload-list-item-thumbnail {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
      }
      
      .`,`-upload-list-item-name {
        width: 150px;
        color: var(--`,`-color-text);
        line-height: 24px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .`,`-upload-list-item-actions {
        .`,`-btn {
          width: 32px;
          height: 32px;
          color: var(--`,`-color-text-tertiary);
        }
      }
      
      .`,`-upload-list-item-progress {
        bottom: 6px;
        padding-left: 48px;
        
        .`,`-progress {
          display: flex;
          align-items: center;
          height: 20px;
        }
      }
      
      &.`,`-upload-list-item-error {
        border-color: var(--`,`-color-border-secondary);
        
        .`,`-upload-list-item-name {
          color: var(--`,`-color-error);
        }
        
        .`,`-btn-icon .anticon {
          color: var(--`,`-color-text-tertiary);
        }
      }
    }
  }
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.sparkPrefix},function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),I=n(85893),t=["className"],m=["className"],d=function(s){var f=s.className,x=N()(s,t),r=(0,T.getCommonConfig)(),L=r.sparkPrefix,i=M();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{}),(0,I.jsx)(o.Z,v()({className:S()("".concat(L,"-upload"),f)},x))]})},c=function(s){var f=s.className,x=N()(s,m),r=(0,T.getCommonConfig)(),L=r.sparkPrefix,i=M();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i,{}),(0,I.jsx)(o.Z.Dragger,v()({className:S()("".concat(L,"-upload"),f)},x))]})};d.Dragger=c,d.LIST_IGNORE=o.Z.LIST_IGNORE;var u=d},21618:function(ln,O,n){n.d(O,{Z:function(){return V}});var z=n(97857),v=n.n(z),F=n(5574),N=n.n(F),T=n(13769),o=n.n(T),E=n(67294),S=n(93967),D=n.n(S),C=n(67985),b=n(38703),P=n(63701),M=n(62321),I=n(20399),t=n(80162),m=n(32485),d=n(93865),c=n(85893),u=function(R){var X=Math.floor(R/60),un=Math.floor(R%60);return"".concat(X.toString().padStart(2,"0"),":").concat(un.toString().padStart(2,"0"))},a=function(R){var X=R.className,un=R.isPlaying,vn=R.onPlayPause,an=R.onFullscreen,q=R.onProgressClick,en=R.enableAudio,fn=en===void 0?!1:en,dn=R.muted,Nn=dn===void 0?!0:dn,gn=R.onMute,Cn=(0,d.getCommonConfig)(),xn=Cn.sparkPrefix,cn=(0,E.useMemo)(function(){return u(R.currentTime||0)},[R.currentTime]),sn=(0,E.useMemo)(function(){return u(R.duration||0)},[R.duration]),Ln=(0,E.useMemo)(function(){return Math.min((R.currentTime||0)/(R.duration||.01)*100,100)},[R.currentTime,R.duration]),pn=function(An){if(!(!q||!R.duration)){var On=An.currentTarget.getBoundingClientRect(),Tn=An.clientX-On.left,_=On.width,Rn=Tn/_,jn=Rn*R.duration,yn=Math.max(0,Math.min(jn,R.duration));q(yn)}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"".concat(xn,"-video-player-controller ").concat(X||""),children:[(0,c.jsx)(C.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:un?(0,c.jsx)(P.Z,{}):(0,c.jsx)(M.Z,{}),onClick:vn}),(0,c.jsx)(C.Z,{bordered:!1,size:"small",shape:"default",disabled:!fn,icon:fn&&Nn?(0,c.jsx)(I.Z,{}):(0,c.jsx)(t.Z,{}),onClick:gn}),(0,c.jsx)("span",{className:"".concat(xn,"-video-time-text"),children:cn}),(0,c.jsx)("div",{className:"".concat(xn,"-video-progress-container"),onClick:pn,children:(0,c.jsx)(b.Z,{className:"".concat(xn,"-video-progress-bar"),percent:Ln,showInfo:!1})}),(0,c.jsx)("span",{className:"".concat(xn,"-video-time-text"),children:sn}),(0,c.jsx)(C.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,c.jsx)(m.Z,{}),onClick:an})]})})},s=a,f=n(35106),x=n(68400),r=n.n(x),L=n(3067),i,B=(0,L.default)(i||(i=r()([`
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
`])),function(A){return A.sparkPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.antPrefix},function(A){return A.sparkPrefix},function(A){return A.sparkPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix},function(A){return A.antPrefix}),Y=["controls","mouseEnterAutoPlay","children","className","style"],H=(0,E.forwardRef)(function(A,R){var X=A.controls,un=A.mouseEnterAutoPlay,vn=un===void 0?!1:un,an=A.children,q=A.className,en=A.style,fn=o()(A,Y),dn=(0,d.getCommonConfig)(),Nn=dn.sparkPrefix,gn=B(),Cn=(0,E.useState)(0),xn=N()(Cn,2),cn=xn[0],sn=xn[1],Ln=(0,E.useState)(0),pn=N()(Ln,2),mn=pn[0],An=pn[1],On=(0,E.useState)(!1),Tn=N()(On,2),_=Tn[0],Rn=Tn[1],jn=(0,f.Z)(A,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),yn=N()(jn,2),Wn=yn[0],Kn=yn[1],tn=(0,E.useState)(!1),Xn=N()(tn,2),je=Xn[0],le=Xn[1],bn=(0,E.useRef)(null),ae=(0,E.useRef)(!1),ge=function(Gn){bn.current=Gn,R&&(typeof R=="function"?R(Gn):R.current=Gn)};(0,E.useEffect)(function(){var zn;return _&&(zn=setInterval(function(){bn.current&&sn(bn.current.currentTime)},16)),function(){zn&&clearInterval(zn)}},[_]);var me=function(){return window.videoRef=bn.current,bn.current?"mozHasAudio"in bn.current?(le(bn.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in bn.current?(le(bn.current.webkitAudioDecodedByteCount>0),!0):(le(!1),!1):!1},ye=function(){bn.current&&An(bn.current.duration)},De=function(){bn.current&&(_?bn.current.pause():bn.current.play(),Rn(!_))},Ne=function(){Rn(!0)},ve=function(){Rn(!1)},Le=function(){bn.current&&bn.current.requestFullscreen&&bn.current.requestFullscreen()},Ee=function(){var Gn;Rn(!1),sn((Gn=bn.current)===null||Gn===void 0?void 0:Gn.duration)},xe=function(){vn&&!ae.current&&(_||(bn.current.play(),ae.current=!0))},Se=function(){vn&&ae.current&&(ae.current=!1)},Oe=function(Gn){bn.current&&(bn.current.currentTime=Gn,sn(Gn))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(gn,{}),(0,c.jsx)("div",{className:D()("".concat(Nn,"-video-container"),q),style:en,children:(0,c.jsxs)("div",{className:"".concat(Nn,"-video-content"),onMouseEnter:xe,onMouseLeave:Se,children:[(0,c.jsx)("video",v()(v()({ref:ge},fn),{},{muted:Wn,className:"".concat(Nn,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:ye,onCanPlayThrough:me,onPlay:Ne,onPause:ve,onEnded:Ee})),X&&(0,c.jsx)(s,{className:"".concat(Nn,"-video-controller-wrapper"),isPlaying:_,currentTime:cn,duration:mn,enableAudio:je,muted:Wn,onMute:function(){return Kn(!Wn)},onPlayPause:De,onFullscreen:Le,onProgressClick:Oe}),an]})})]})}),V=H},93865:function(ln,O,n){n.r(O),n.d(O,{DEFAULT_ANT_PREFIX:function(){return o},DEFAULT_BL_PREFIX:function(){return E},DEFAULT_SPARK_PREFIX:function(){return S},getCommonConfig:function(){return P},setCommonConfig:function(){return b},useCommonConfig:function(){return M}});var z=n(5574),v=n.n(z),F=n(97857),N=n.n(F),T=n(67294),o="ant",E="bl",S="spark",D=[],C={antPrefix:o,blPrefix:E,sparkPrefix:S,configProviderProps:{},isDarkMode:!1};function b(I){Object.assign(C,I),requestAnimationFrame(function(){D.forEach(function(t){return t(N()({},C))})})}function P(){return C}function M(){var I=(0,T.useState)(function(){return P()}),t=v()(I,2),m=t[0],d=t[1];return(0,T.useLayoutEffect)(function(){var c=d;return D.push(c),function(){var u=D.findIndex(function(a){return a===c});u>=0&&D.splice(u,1)}},[]),m}},51850:function(ln,O,n){n.d(O,{Z:function(){return T}});var z=n(97857),v=n.n(z),F=n(67294),N=new Map;function T(o){var E=o.globalStyle,S=o.name;(0,F.useLayoutEffect)(function(){var D=N.get(E)||0;if(D)N.set(E,v()(v()({},D),{},{count:D.count+1}));else{var C=document.createElement("style"),b=Math.random().toString(36).slice(2);C.innerHTML=E,C.dataset.id=b,C.dataset.flag="bailian-ui-use-style",S&&C.setAttribute("name",S),document.head.appendChild(C),N.set(E,{count:1,id:b})}return function(){var P=N.get(E);N.set(E,v()(v()({},P),{},{count:P.count-1})),setTimeout(function(){var M=N.get(E);if((M==null?void 0:M.count)<=0){var I;N.delete(E),(I=document.head.querySelector('[data-id="'+M.id+'"]'))===null||I===void 0||I.remove()}},100)}},[E])}},23048:function(ln,O,n){n.r(O),n.d(O,{default:function(){return t},format:function(){return M}});var z=n(52677),v=n.n(z),F=n(27484),N=n.n(F),T=n(97857),o=n.n(T),E=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"Prompt","components.commonComponents.Pagination.PreviousPage":"Previous Page","components.commonComponents.Pagination.Items":"Items","components.commonComponents.Pagination.Page":"Page","components.commonComponents.Pagination.NextPage":"Next page","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"The number of words cannot exceed {wordLimit}.","components.commonComponents.SlateEditor.EnterHere":"Enter here","components.SlateEditor.utils.constant.Paragraph":"Paragraph","components.SlateEditor.utils.constant.Variable":"Variable","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"The selection range is incorrect.","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"[{wrapTagName}] cannot be placed in [{tagName}]","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"[{wrapTagName}] cannot be nested in [{tagName}]]","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"You can enter a maximum of {maxLen} characters.","components.commonComponents.Image.Preview":"Preview"}'),S=JSON.parse('{"components.commonComponents.AlertDialog.Prompt":"\u63D0\u793A","components.commonComponents.Pagination.PreviousPage":"\u4E0A\u4E00\u9875","components.commonComponents.Pagination.Items":"\u6761","components.commonComponents.Pagination.Page":"\u9875","components.commonComponents.Pagination.NextPage":"\u4E0B\u4E00\u9875","components.commonComponents.SlateEditor.TheNumberOfWordsCannot":"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57","components.commonComponents.SlateEditor.EnterHere":"\u5728\u8FD9\u91CC\u8F93\u5165","components.SlateEditor.utils.constant.Paragraph":"\u6BB5\u843D","components.SlateEditor.utils.constant.Variable":"\u53D8\u91CF","components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect":"\u5212\u9009\u8303\u56F4\u6709\u8BEF","components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn":"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185","components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn":"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011","components.SlateEditor.utils.withEditor.YouCanEnterAMaximum":"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57","components.commonComponents.Image.Preview":"\u9884\u89C8"}'),D={"en-US":o()({},E),"zh-CN":o()({},S)},C="zh-cn",b;function P(m){C=m,N().locale(C||"zh-cn")}var M=function(d,c){var u=C==="zh-cn"?"zh-CN":"en-US",a=D[u][d.id]||d.defaultString||"",s=a.replace(/\{(\w+)\}/g,function(f,x){return c[x]||f});return s};function I(m,d){return b||P(C),typeof m=="string"?M({id:m},d):(v()(m)==="object"&&m.dm&&(m.defaultMessage=m.dm),M({id:m.id,defaultString:m.dm},d))}var t={intl:b,get:I,updateLocale:P,language:C}},17969:function(ln,O,n){n.r(O),n.d(O,{Alert:function(){return Y.Z},AlertDialog:function(){return an.default},Anchor:function(){return q.Z},Avatar:function(){return en.Z},Badge:function(){return H.Z},Breadcrumb:function(){return fn.Z},Button:function(){return dn.Z},Card:function(){return Nn.Z},Checkbox:function(){return gn.Z},CodeBlock:function(){return Cn.ZP},CodeBlockLangExtensionsMap:function(){return Cn.xO},Collapse:function(){return xn.Z},CollapsePanel:function(){return cn.Z},ConfigProvider:function(){return ca},DatePicker:function(){return sn.Z},Descriptions:function(){return sr.Z},Drawer:function(){return Ln.Z},Dropdown:function(){return pn.Z},EllipsisTip:function(){return Xn},Empty:function(){return je.Z},FileCard:function(){return qt.s},FileIcon:function(){return qt.Z},FloatButton:function(){return V.Z},Form:function(){return le.Z},HelpIcon:function(){return Ne},IconButton:function(){return ae.Z},IconFont:function(){return ve.Z},Image:function(){return Le.Z},Input:function(){return Ee.Z},InputNumber:function(){return A.Z},MdEditor:function(){return ze.Z},Modal:function(){return Se.Z},Pagination:function(){return zn.Z},Popconfirm:function(){return Gn.Z},Popover:function(){return Be.Z},Progress:function(){return R.Z},PromptsEditor:function(){return ze.Z},Radio:function(){return X.ZP},RadioButton:function(){return _e.default},Result:function(){return Fe.Z},Select:function(){return un.default},Skeleton:function(){return vn.Z},SlateEditor:function(){return lr},Slider:function(){return Nt.Z},SliderSelector:function(){return fr},Spinner:function(){return cr.Z},Statistic:function(){return gr.Z},Steps:function(){return qe.Z},Switch:function(){return mr.Z},Table:function(){return vr.Z},Tabs:function(){return xr.Z},Tag:function(){return pr.Z},TimePicker:function(){return Mr.Z},Tooltip:function(){return me.Z},Upload:function(){return Pr.Z},Video:function(){return hr.Z},bailianDarkTheme:function(){return er},bailianTheme:function(){return nr},base64Decoder:function(){return da},base64Encoder:function(){return ua},carbonDarkTheme:function(){return ga},carbonTheme:function(){return fa},copy:function(){return Lr},delay:function(){return St},generateThemeByToken:function(){return B},getCommonConfig:function(){return mn.getCommonConfig},message:function(){return xe.Z},notification:function(){return Oe.Z},parseJsonSafely:function(){return sa},purpleDarkTheme:function(){return er},purpleTheme:function(){return nr},renderTooltip:function(){return Er},requestPop:function(){return It},requestPopSse:function(){return kr},requestSse:function(){return wt},safeHtml:function(){return yr.t},setCommonConfig:function(){return mn.setCommonConfig},useCommonConfig:function(){return mn.useCommonConfig},useGlobalStyle:function(){return jr.Z},waitForDom:function(){return Sr},waitForFunc:function(){return Ct}});var z=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#202041","colorPrimaryBgHover":"#202041","colorPrimaryBorder":"#2B2A55","colorPrimaryBorderHover":"#373476","colorPrimaryHover":"#857DE3","colorPrimary":"#5551CC","colorPrimaryActive":"#4643A1","colorPrimaryTextHover":"#857DE3","colorPrimaryText":"#5551CC","colorPrimaryTextActive":"#4643A1","colorTextBase":"#E7E7ED","colorBgBase":"#000000","colorText":"rgba(231, 231, 237, 0.88)","colorTextSecondary":"rgba(231, 231, 237, 0.65)","colorTextTertiary":"rgba(231, 231, 237, 0.45)","colorTextQuaternary":"rgba(231, 231, 237, 0.25)","colorBorder":"rgba(71, 71, 97, 0.8)","colorBorderSecondary":"rgba(56, 56, 76, 0.8)","colorFill":"rgba(231, 231, 237, 0.18)","colorFillSecondary":"rgba(231, 231, 237, 0.12)","colorFillTertiary":"rgba(231, 231, 237, 0.08)","colorFillQuaternary":"rgba(231, 231, 237, 0.04)","colorBgContainer":"#0F0F14","colorBgElevated":"#0F0F14","colorBgLayout":"#0F0F14","colorBgSpotlight":"rgba(71, 71, 97, 0.85)","colorBgMask":"rgba(5, 5, 8, 0.8)","colorInfo":"#0B83F1","colorInfoHover":"rgba(42, 114, 165, 1)","colorInfoBorder":"rgba(135, 209, 255, 0.2)","colorInfoText":"#0B83F1","colorInfoBg":"rgba(27, 73, 115, 0.25)","colorInfoBgHover":"rgba(27, 73, 115, 0.32)","colorInfoBorderHover":"rgba(94, 188, 255, 0.2)","colorSuccess":"#5BB98B","colorSuccessHover":"rgba(87, 141, 112, 1)","colorSuccessBg":"rgba(0, 50, 26, 0.25)","colorSuccessBgHover":"rgba(0, 50, 26, 0.32)","colorSuccessBorder":"rgba(211, 224, 217, 0.2)","colorSuccessBorderHover":"rgba(171, 212, 190, 0.2)","colorWarning":"#FAAD14","colorWarningHover":"rgba(170, 136, 43, 1)","colorWarningBg":"rgba(129, 116, 49, 0.25)","colorWarningBgHover":"rgba(129, 116, 49, 0.32)","colorWarningBorder":"rgba(255, 229, 143, 0.2)","colorWarningBorderHover":"rgba(255, 214, 102, 0.2)","colorError":"#FF4D4F","colorErrorHover":"rgba(165, 50, 48, 1)","colorErrorBg":"rgba(129, 46, 46, 0.25)","colorErrorBgHover":"rgba(129, 46, 46, 0.32)","colorErrorBorder":"rgba(255, 204, 199, 0.2)","colorErrorBorderHover":"rgba(255, 163, 158, 0.2)","colorLink":"#5551CC","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.04),0px 8px 40px 0px rgba(255, 255, 255, 0.06),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","colorTextWhite":"#fff","colorFillDisable":"#8D8C98","colorPurple":"#5551CC","colorPurpleHover":"#8383F0","colorPurpleBg":"rgba(226, 222, 255, 0.2)","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"rgba(251, 220, 239, 0.2)","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"rgba(255, 250, 184, 0.2)","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"rgba(255, 232, 201, 0.2)","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"rgba(200, 244, 233, 0.2)","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"rgba(194, 229, 255, 0.2)","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"rgba(239, 240, 243, 0.2)","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.16),0px 12px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.16),-12px 0px 60px 0px rgba(255, 255, 255, 0.08),0px 0px 1px 0px rgba(255, 255, 255, 0.02);","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)"}'),v=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#F2F0FF","colorPrimaryBgHover":"#F2F0FF","colorPrimaryBorder":"#E2DEFF","colorPrimaryBorderHover":"#BCB5FF","colorPrimaryHover":"#9189FA","colorPrimary":"#615CED","colorPrimaryActive":"#4444C7","colorPrimaryTextHover":"#9189FA","colorPrimaryText":"#615CED","colorPrimaryTextActive":"#4444C7","colorTextBase":"#26244c","colorBgBase":"#FFFFFF","colorText":"rgba(38, 36, 76, 0.88)","colorTextSecondary":"rgba(38, 36, 76, 0.65)","colorTextTertiary":"rgba(38, 36, 76, 0.45)","colorTextQuaternary":"rgba(38, 36, 76, 0.25)","colorBorder":"#cdd0dc","colorBorderSecondary":"#e6e8ee","colorFill":"#cdd0dc5c","colorFillSecondary":"#cdd0dc33","colorFillTertiary":"#cdd0dc26","colorFillQuaternary":"#cdd0dc1a","colorBgContainer":"#FFFFFF","colorBgElevated":"#FFFFFF","colorBgLayout":"#f9fafd","colorBgSpotlight":"rgba(38, 36, 76, 0.85)","colorBgMask":"rgba(20, 19, 39, 0.45)","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#87D1FF","colorInfoText":"#0B83F1","colorInfoBg":"#E6F7FF","colorInfoBgHover":"#B0E3FF","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#ABD4BE","colorSuccessBg":"#EBFAF0","colorSuccessBgHover":"#DFEDE4","colorSuccessBorder":"#D3E0D9","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FFD666","colorWarningBg":"#FFFBE6","colorWarningBgHover":"#FFF1B8","colorWarningBorder":"#FFE58F","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#FF7875","colorErrorBg":"#FFF2F0","colorErrorBgHover":"#FFF1F0","colorErrorBorder":"#FFCCC7","colorErrorBorderHover":"#FFA39E","colorLink":"#615CED","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"#fff","colorFillDisable":"#DBDAE7","colorPurple":"#615CED","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"#EC4899","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"#EAB308","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"#FA8125","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"#14B8A6","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"#0090FF","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"#8E8C99","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),F=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"#181818","colorPrimaryBgHover":"#2E2E2E","colorPrimaryBorder":"#323232","colorPrimaryBorderHover":"#2C2C2C","colorPrimaryHover":"#DFDFDF","colorPrimary":"#E4E4E4","colorPrimaryActive":"#7E7E7E","colorPrimaryTextHover":"#909090","colorPrimaryText":"#676767","colorPrimaryTextActive":"#959595","colorTextBase":"#E7E7ED","colorBgBase":"#0A0A0B","colorText":"#E7E7EDC7","colorTextSecondary":"#E7E7EDA6","colorTextTertiary":"#E7E7ED73","colorTextQuaternary":"#E7E7ED40","colorBorder":"#5B5B5BCC","colorBorderSecondary":"#323232CC","colorFill":"#E7E7ED2E","colorFillSecondary":"#E7E7ED1F","colorFillTertiary":"#E7E7ED14","colorFillQuaternary":"#E7E7ED0A","colorBgContainer":"#121212","colorBgElevated":"#212121","colorBgLayout":"#141414","colorBgSpotlight":"#525252D9","colorBgMask":"#050508CC","colorInfo":"#0B83F1","colorInfoHover":"#5EBCFF","colorInfoBorder":"#3990C9","colorInfoText":"#0B83F1","colorInfoBg":"#112233","colorInfoBgHover":"#264866","colorInfoBorderHover":"#5EBCFF","colorSuccess":"#5BB98B","colorSuccessHover":"#74A47C","colorSuccessBg":"#293631","colorSuccessBgHover":"#3F5147","colorSuccessBorder":"#73A377","colorSuccessBorderHover":"#ABD4BE","colorWarning":"#FAAD14","colorWarningHover":"#FF8C28","colorWarningBg":"#2D231A","colorWarningBgHover":"#4D3B23","colorWarningBorder":"#FFA628","colorWarningBorderHover":"#FFD666","colorError":"#FF4D4F","colorErrorHover":"#EE654E","colorErrorBg":"#2B0B08","colorErrorBgHover":"#4A2A28","colorErrorBorder":"#EE5B4E","colorErrorBorderHover":"#FFA39E","colorLink":"#4D7DFF","boxShadow":"0px 4px 6px 0px rgba(255, 255, 255, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(255, 255, 255, 0.06),0px 8px 40px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextWhite":"#FFFFFF","colorFillDisable":"#898989","colorPurple":"#615CED","colorPurpleHover":"#8383F0","colorPurpleBg":"#6964877A","colorPink":"#EC4899","colorPinkHover":"#E494BC","colorPinkBg":"#53424D7A","colorYellow":"#EAB308","colorYellowHover":"#DBBE62","colorYellowBg":"#9585527A","colorOrange":"#FA8125","colorOrangeHover":"#F7A25F","colorOrangeBg":"#6F58417A","colorTeal":"#14B8A6","colorTealHover":"#7BC7BE","colorTealBg":"#4658547A","colorBlue":"#0090FF","colorBlueHover":"#83BFED","colorBlueBg":"#5E76897A","colorMauve":"#8E8C99","colorMauveHover":"#BBB8CA","colorMauveBg":"#5859647A","boxShadowTertiary":"0px 12px 32px -16px rgba(255, 255, 255, 0.24),0px 12px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(255, 255, 255, 0.24),-12px 0px 60px 0px rgba(255, 255, 255, 0.12),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(255, 255, 255, 0.08),0px 12px 40px 0px rgba(255, 255, 255, 0.16),0px 0px 1px 0px rgba(255, 255, 255, 0.04)","colorTextBlack":"#000000"}'),N=JSON.parse('{"borderRadiusXS":2,"borderRadiusSM":4,"borderRadius":6,"borderRadiusLG":8,"borderRadiusXL":12,"borderRadiusFull":999,"wireframe":false,"colorPrimaryBg":"rgba(244, 244, 247, 1)","colorPrimaryBgHover":"rgba(239, 239, 244, 1)","colorPrimaryBorder":"rgba(62, 63, 66, 1)","colorPrimaryBorderHover":"rgba(130, 132, 137, 1)","colorPrimaryHover":"rgba(38, 38, 41, 1)","colorPrimary":"rgba(26, 26, 29, 1)","colorPrimaryActive":"rgba(0, 0, 0, 1)","colorPrimaryTextHover":"rgba(38, 38, 41, 1)","colorPrimaryText":"rgba(26, 26, 29, 1)","colorPrimaryTextActive":"rgba(0, 0, 0, 1)","colorTextBase":"rgba(26, 26, 29, 1)","colorBgBase":"rgba(255, 255, 255, 1)","colorText":"rgba(26, 26, 29, 0.88)","colorTextSecondary":"rgba(26, 26, 29, 0.65)","colorTextTertiary":"rgba(26, 26, 29, 0.45)","colorTextQuaternary":"rgba(26, 26, 29, 0.25)","colorBorder":"rgba(187, 187, 193, 1)","colorBorderSecondary":"rgba(234, 234, 234, 1)","colorFill":"rgba(0, 0, 43, 0.06)","colorFillSecondary":"rgba(0, 0, 85, 0.03)","colorFillTertiary":"rgba(205, 208, 220, 0.15)","colorFillQuaternary":"rgba(205, 208, 220, 0.1)","colorBgContainer":"rgba(255, 255, 255, 1)","colorBgElevated":"rgba(255, 255, 255, 1)","colorBgLayout":"rgba(250, 250, 251, 1)","colorBgSpotlight":"rgba(26, 26, 29, 0.85)","colorBgMask":"rgba(0, 0, 0, 0.45)","colorInfo":"rgba(11, 131, 241, 1)","colorInfoHover":"rgba(94, 188, 255, 1)","colorInfoBorder":"rgba(135, 209, 255, 1)","colorInfoText":"rgba(11, 131, 241, 1)","colorInfoBg":"rgba(230, 247, 255, 1)","colorInfoBgHover":"rgba(176, 227, 255, 1)","colorInfoBorderHover":"rgba(94, 188, 255, 1)","colorSuccess":"rgba(91, 185, 139, 1)","colorSuccessHover":"rgba(171, 212, 190, 1)","colorSuccessBg":"rgba(235, 250, 240, 1)","colorSuccessBgHover":"rgba(223, 237, 228, 1)","colorSuccessBorder":"rgba(211, 224, 217, 1)","colorSuccessBorderHover":"rgba(171, 212, 190, 1)","colorWarning":"rgba(250, 173, 20, 1)","colorWarningHover":"rgba(255, 214, 102, 1)","colorWarningBg":"rgba(255, 251, 230, 1)","colorWarningBgHover":"rgba(255, 241, 184, 1)","colorWarningBorder":"rgba(255, 229, 143, 1)","colorWarningBorderHover":"rgba(255, 214, 102, 1)","colorError":"rgba(255, 77, 79, 1)","colorErrorHover":"rgba(255, 120, 117, 1)","colorErrorBg":"rgba(255, 242, 240, 1)","colorErrorBgHover":"rgba(255, 241, 240, 1)","colorErrorBorder":"rgba(255, 204, 199, 1)","colorErrorBorderHover":"rgba(255, 163, 158, 1)","colorLink":"rgba(0, 77, 255, 1)","boxShadow":"0px 4px 6px 0px rgba(0, 0, 0, 0.08)","boxShadowSecondary":"0px 12px 24px -16px rgba(0, 0, 0, 0.06),0px 8px 40px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","colorTextWhite":"rgba(255, 255, 255, 1)","colorFillDisable":"rgba(232, 232, 235, 1)","colorPurple":"rgba(97, 92, 237, 1)","colorPurpleHover":"#8080FF","colorPurpleBg":"rgba(226, 222, 255, 0.8)","colorPink":"rgba(236, 72, 153, 1)","colorPinkHover":"#E593BC","colorPinkBg":"rgba(251, 220, 239, 0.8)","colorYellow":"rgba(234, 179, 8, 1)","colorYellowHover":"#F1D372","colorYellowBg":"rgba(255, 250, 184, 0.8)","colorOrange":"rgba(250, 129, 37, 1)","colorOrangeHover":"#E88C45","colorOrangeBg":"rgba(255, 232, 201, 0.8)","colorTeal":"rgba(20, 184, 166, 1)","colorTealHover":"#5FB3A9","colorTealBg":"rgba(200, 244, 233, 0.8)","colorBlue":"rgba(0, 144, 255, 1)","colorBlueHover":"#72BCF5","colorBlueBg":"rgba(194, 229, 255, 0.8)","colorMauve":"rgba(142, 140, 153, 1)","colorMauveHover":"#C0BFC8","colorMauveBg":"rgba(239, 240, 243, 0.8)","boxShadowTertiary":"0px 12px 32px -16px rgba(0, 0, 0, 0.24),0px 12px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowTertiaryLeft":"-12px 0px 32px -16px rgba(0, 0, 0, 0.24),-12px 0px 60px 0px rgba(0, 0, 0, 0.12),0px 0px 1px 0px rgba(0, 0, 0, 0.04)","boxShadowInput":"0px 12px 24px -16px rgba(54, 54, 73, 0.04),0px 12px 40px 0px rgba(51, 51, 71, 0.08),0px 0px 1px 0px rgba(44, 44, 54, 0.02)"}'),T=n(97857),o=n.n(T),E="rgba(0,0,0,0)",S=2,D=4,C=6,b=8,P=12,M=999,I="normal 12px/20px inherit",t="500 12px/20px inherit",m="normal 12px/20px Menlo, monospace",d="500 13px/20px inherit",c="normal 14px/24px inherit",u="500 14px/24px inherit",a="normal 14px/24px Menlo, monospace",s="normal 16px/28px inherit",f="500 16px/28px inherit",x="500 18px/32px inherit",r="500 20px/36px inherit",L="500 24px/44px inherit",i="500 32px/48px inherit";function B(e,l){return{theme:{cssVar:!0,hashed:!1,darkMode:l,token:o()({borderRadiusXS:S,borderRadiusSM:D,borderRadius:C,borderRadiusLG:b,borderRadiusXL:P,borderRadiusFull:M,footnoteRegular:I,footnoteMedium:t,footnoteSystemMonospace:m,bodyFormTitle:d,bodyRegular:c,bodyMedium:u,bodyCode:a,h5Regular:s,h5Medium:f,h4Medium:x,h3Medium:r,h2Medium:L,h1Medium:i},e),components:{Alert:{colorErrorBorder:E,colorInfoBorder:E,colorSuccessBorder:E,colorWarningBorder:E,colorInfoBg:e.colorInfoBg,borderRadiusLG:0,defaultPadding:"8px 20px",fontSize:12,lineHeight:"20px"},Badge:{colorError:e.colorPrimary,indicatorHeight:16,textFontSize:10},Breadcrumb:{separatorMargin:4,lastItemColor:e.colorText},Button:{contentFontSizeSM:12,defaultHoverBg:e.colorFillSecondary,defaultHoverBorderColor:e.colorBorderSecondary,defaultHoverColor:e.colorText,defaultActiveBg:e.colorFillSecondary,defaultActiveBorderColor:e.colorBorderSecondary,defaultActiveColor:e.colorText,defaultGhostColor:e.colorText,defaultGhostBorderColor:"transparent",dangerShadow:"none",defaultShadow:"none",primaryShadow:"none"},DatePicker:{paddingInline:8,colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Dropdown:{paddingBlock:4,controlPaddingHorizontal:8,controlItemBgHover:e.colorFillTertiary},Progress:{remainingColor:e.colorPrimaryBg,defaultColor:e.colorPrimary},Input:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},InputNumber:{colorBgBase:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Select:{colorBgBase:e.colorBgBase,selectorBg:e.colorBgBase,colorBgContainerDisabled:e.colorFillTertiary},Skeleton:{paragraphLiHeight:24,paragraphMarginTop:16,blockRadius:8},Slider:{railBg:e.colorPrimaryBg,railHoverBg:e.colorPrimaryBgHover,trackBg:e.colorPrimary,trackHoverBg:e.colorPrimary,handleColor:e.colorPrimary,railSize:8,handleSize:12,handleSizeHover:12},Segmented:{itemSelectedBg:e.colorBgBase,trackPadding:4,controlHeight:40,controlHeightLG:42,itemHoverBg:"unset"},Steps:{iconSize:20,iconFontSize:12,titleLineHeight:20},Modal:{headerBg:e.colorBgBase,contentBg:e.colorBgBase,titleFontSize:16,controlHeight:20},Tooltip:{sizePopupArrow:0},Popover:{sizePopupArrow:0},Table:{cellPaddingInline:20},Form:{itemMarginBottom:20},Collapse:{contentPadding:"8px 12px",headerPadding:"4px 12px"},Descriptions:{colonMarginRight:10,verticalLabelPaddingBottom:4,verticalContentPaddingBottom:24},Switch:{handleBg:e.colorBgContainer,trackHeight:24,handleSize:20,trackHeightSM:20,handleSizeSM:16,trackMinWidth:44,trackMinWidthSM:32}}},checkbox:{style:{fontWeight:"500"}},radio:{style:{fontWeight:"500"}}}}var Y=n(40056),H=n(40411),V=n(87834),A=n(13457),R=n(38703),X=n(55742),un=n(34041),vn=n(48054),an=n(37339),q=n(15560),en=n(34952),fn=n(21004),dn=n(57027),Nn=n(48432),gn=n(34304),Cn=n(43158),xn=n(81843),cn=n(71615),sn=n(8732),Ln=n(11765),pn=n(28299),mn=n(93865),An=n(7825),On=n(93967),Tn=n.n(On),_=n(67294),Rn=n(68400),jn=n.n(Rn),yn=n(3067),Wn,Kn=(0,yn.default)(Wn||(Wn=jn()([`
div.`,`-ellipsis-tip {
  margin-bottom: 0;
  color: unset;
  line-height: 1.5;
  font-size: unset;
}
`])),function(e){return e.sparkPrefix}),tn=n(85893);function Xn(e){var l=e.className,g=l===void 0?"":l,j=e.style,w=j===void 0?{}:j,Z=e.children,Q=e.rows,U=Q===void 0?1:Q,$=e.tooltip,J=$||Z,K=(0,mn.getCommonConfig)(),W=K.sparkPrefix,Mn=Kn();return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(Mn,{}),(0,tn.jsx)(An.Z.Paragraph,{className:Tn()("".concat(W,"-ellipsis-tip"),g),style:w,ellipsis:{rows:U,tooltip:J},children:Z})]})}var je=n(21860),le=n(32151),bn=n(29368),ae=n(67985),ge=n(21773),me=n(33369),ye,De=(0,yn.default)(ye||(ye=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.blPrefix});function Ne(e){var l=(0,ge.X)(),g=De(),j=e.style,w=e.content,Z=e.className,Q=e.popoverProps,U=(0,mn.getCommonConfig)(),$=U.sparkPrefix;return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(l,{}),(0,tn.jsx)(g,{}),(0,tn.jsx)(me.Z,o()(o()({title:w,overlayInnerStyle:{maxWidth:376},trigger:"hover",style:j},Q),{},{children:(0,tn.jsx)(ae.Z,{className:Tn()("".concat($,"-help-icon"),Z),icon:(0,tn.jsx)(bn.Z,{}),shape:"circle",bordered:!1,size:"small"})}))]})}var ve=n(38654),Le=n(15713),Ee=n(86995),xe=n(56373),Se=n(76561),Oe=n(89887),zn=n(94476),Gn=n(81930),Be=n(14392),ze=n(71493),_e=n(5626),Fe=n(65163),qe=n(89806),Pt=n(5574),ue=n.n(Pt),Jn=n(23048),ne=n(45360),k=n(37946),Ce=n(57645),oe=n(99963),Re,ht=(0,yn.default)(Re||(Re=jn()([`
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
`]))),nt=n(19632),Ze=n.n(nt),ke=(0,_.memo)(function(e){var l=e.attributes,g=e.children;return(0,tn.jsx)("div",o()(o()({},l),{},{style:{marginTop:"8px"},children:g}))}),Ue,et=(0,yn.default)(Ue||(Ue=jn()([`
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
`]))),We=(0,_.memo)(function(e){var l=e.attributes,g=e.renderVarLabel,j=et();return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(j,{}),(0,tn.jsxs)("span",o()(o()({},l),{},{children:[e.children,(0,tn.jsx)("span",{className:"spark-editor-var-tag",children:g?g(e.element.code):e.element.label})]}))]})}),jt=function(l){return Object.keys(l).map(function(g){return{label:l[g].label,desc:l[g].desc,value:g}})},yt=[{code:"s",isParagraph:!0,out:[],inner:[],name:Jn.default.get({id:"components.SlateEditor.utils.constant.Paragraph",dm:"\u6BB5\u843D"}),render:ke,type:"double"},{code:"var",isParagraph:!1,out:["s"],inner:[],name:Jn.default.get({id:"components.SlateEditor.utils.constant.Variable",dm:"\u53D8\u91CF"}),render:We,isInline:!0,isVoid:!0,type:"single"}],be=function(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},Dt=function(l){return l.replace(/&/g,"&amp;").replace(/{/g,"").replace(/}/g,"").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},tt=function(l){return l.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'")},Ie=function e(l,g){var j="",w=g||{},Z=w.tagRules,Q=Z===void 0?{}:Z;return l.forEach(function(U,$){if(k.W_.isElement(U)){var J=Q[U.type];if(!J)j+=be(U.text);else switch(J.code){case"image":j+="![".concat(U.fileName,"](").concat(U.src,")");break;case"pdf":j+="[".concat(U.fileName,"](").concat(U.src,")");break;case"s":j+="".concat(e(U.children,g)).concat($<l.length-1?`
`:"");break;case"var":j+="${".concat(U.code,"}");default:break}}else j+=be(U.text)}),j},Ae=function(l,g){if(l&&l.children.length){var j=Ie(l.children,g);return j==="<s></s>"?"":tt(j)}return""},pe=function(l){if(!l)return"";var g="",j=be(l).replace(/\$\{([^{}]+?)\}/g,function(w,Z){return'<var code="'.concat(Z,'" label="${').concat(Z,'}" />')});return j.split(`
`).forEach(function(w){g+="<s>".concat(w,"</s>")}),"<speak>".concat(g,"</speak>")},Vn=function e(l){var g,j=[];return(l==null||(g=l.childNodes)===null||g===void 0?void 0:g.length)>0&&l.childNodes.forEach(function(w,Z,Q){var U=w.nodeType,$=w.nodeName;if(U===1){for(var J={},K=0;K<w.attributes.length;K++){var W=w.attributes[K],Mn=W.nodeName,Dn=W.nodeValue;J[Mn]=Dn}var Pn=o()({type:$},J);w.childNodes.length>0?Pn.children=e(w):Pn.children=[{text:""}],j.push(Pn),$!=="s"&&(Z>0&&Q[Z-1].nodeType===1&&j.unshift({text:""}),Z===Q.length-1&&j.push({text:""}))}else U===3&&j.push({text:w.nodeValue||""})}),j},Me=function(l){if(l){var g=new DOMParser().parseFromString(l,"text/xml");return Vn(g)}},rt=function(l){if(!l||l.includes("</speak>"))return l;var g=l;return g.includes("<s>")||(g="<s>".concat(g,"</s>")),"<speak>".concat(g,"</speak>")},Ye=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g={};return[].concat(Ze()(l),Ze()(yt)).forEach(function(j){g[j.code]||(g[j.code]=j)}),g},Qe=n(15009),p=n.n(Qe),h=n(99289),y=n.n(h),_n=function(l,g,j){if(!(!l||!g)){var w=l.selection,Z=null;w&&(Z=w.focus),j!=null&&j.at&&(Z=j==null?void 0:j.at),Z||(Z={path:[0,0],offset:0});var Q=Z,U=Q.path,$=Q.offset,J=k.NB.get(l,k.y$.parent(U));if(!k.ML.isVoid(l,J)){var K=k.NB.string(k.NB.get(l,U)),W=K.substring(0,$-(j!=null&&j.deletePrefix?1:0)),Mn=K.substring($,K.length);k.ML.withoutNormalizing(l,function(){l.apply({type:"insert_node",node:{text:Mn},path:U}),l.apply({type:"insert_node",node:g,path:U}),l.apply({type:"insert_node",node:{text:W},path:U});var Dn=k.y$.next(k.y$.next(k.y$.next(U)));l.apply({type:"remove_node",path:Dn,node:k.NB.get(l,Dn)});var Pn={path:k.y$.next(k.y$.next(U)),offset:0};l.apply({type:"set_selection",properties:null,newProperties:{anchor:Pn,focus:Pn}}),oe.F3.focus(l),l.onChange()})}}},Pe=function(){var e=y()(p()().mark(function l(g,j,w){var Z,Q,U,$,J,K,W,Mn,Dn,Pn,En,Sn,nn,on,Zn,In,$n,wn,Fn,Hn,Bn,kn,Un,fe,ee,te,ce,Yn,Qn,qn,re,hn;return p()().wrap(function(rn){for(;;)switch(rn.prev=rn.next){case 0:if(!(!g||!j)){rn.next=2;break}return rn.abrupt("return");case 2:if(Q=g.selection,U=w||{},$=U.tip,J=U.selection,K=J===void 0?Q:J,W=w==null||(Z=w.rules)===null||Z===void 0?void 0:Z[j.type],!(K&&!k.e6.isCollapsed(K))){rn.next=45;break}if(Dn=k.NB.fragment(g,K),Pn=Ke(Dn),Pn!==""){rn.next=10;break}return rn.abrupt("return");case 10:if(En=Ve(k.e6.edges(K)),Sn=ue()(En,2),nn=Sn[0],on=Sn[1],k.ML.isVoid(g,k.NB.get(g,k.y$.parent(nn.path)))&&(nn.path=k.y$.next(k.y$.parent(nn.path)),nn.offset=0),k.ML.isVoid(g,k.NB.get(g,k.y$.parent(on.path)))&&(on.path=k.y$.previous(k.y$.parent(on.path)),on.offset=k.NB.string(k.NB.get(g,on.path)).length),k.y$.hasPrevious(on.path)&&k.NB.get(g,k.y$.parent(nn.path))===k.NB.get(g,k.y$.previous(on.path))&&nn.offset===0&&on.offset===0&&(Zn=k.y$.previous(k.y$.parent(nn.path)),In=k.NB.get(g,Zn),nn.path=Zn,nn.offset=In.text.length),k.NB.parent(g,nn.path)!==k.NB.parent(g,on.path)){for($n=k.NB.get(g,nn.path),wn=Ke(k.NB.fragment(g,{anchor:{path:on.path,offset:0},focus:on}));k.xv.isText($n)&&$n.text===""&&Pn===wn;)nn.path.splice(nn.path.length-1,1,1,0),$n=k.NB.get(g,nn.path);for(Fn=k.NB.get(g,on.path),Hn=k.NB.string(k.NB.get(g,k.e6.edges(K)[0].path)),Bn=Ke(k.NB.fragment(g,{anchor:nn,focus:{path:nn.path,offset:Hn.length}}));k.xv.isText(Fn)&&Fn.text===""&&Pn===Bn;)kn=on.path[on.path.length-1],on.path.splice(on.path.length-1,1,kn-1),Fn=k.NB.get(g,on.path),k.W_.isElement(Fn)&&(on.path.push(Fn.children.length-1),on.offset=Hn.length)}if(k.NB.parent(g,nn.path)===k.NB.parent(g,on.path)){rn.next=18;break}return ne.ZP.info(Jn.default.get({id:"components.SlateEditor.utils.editor.TheSelectionRangeIsIncorrect",dm:"\u5212\u9009\u8303\u56F4\u6709\u8BEF"})),rn.abrupt("return");case 18:Un=k.y$.parent(nn.path),fe=(W==null?void 0:W.name)||at(),ee=k.NB.get(g,Un),te=w==null||(Mn=w.rules)===null||Mn===void 0?void 0:Mn[ee.type];case 22:if(!(W!=null&&W.out&&Un.length>1)){rn.next=30;break}if(W.out.includes(ee.type)){rn.next=27;break}return ce=(te==null?void 0:te.name)||at(),ne.ZP.warning(Jn.default.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBePlacedIn",dm:"\u3010{wrapTagName}\u3011\u4E0D\u80FD\u5728\u653E\u5728\u3010{tagName}\u3011\u5185"},{wrapTagName:fe,tagName:ce})),rn.abrupt("return");case 27:Un=k.y$.parent(Un),rn.next=22;break;case 30:if(!(W!=null&&W.inner&&k.NB.get(g,nn.path)!==k.NB.get(g,on.path))){rn.next=42;break}Yn=k.y$.next(nn.path);case 32:if(k.y$.equals(Yn,on.path)){rn.next=42;break}if(qn=k.NB.get(g,Yn),re=w==null||(Qn=w.rules)===null||Qn===void 0?void 0:Qn[qn.type],!(k.W_.isElement(qn)&&!W.inner.includes(qn.type))){rn.next=39;break}return hn=(re==null?void 0:re.name)||at(),ne.ZP.warning(Jn.default.get({id:"components.SlateEditor.utils.editor.WraptagnameCannotBeNestedIn",dm:"\u3010{wrapTagName}\u3011\u4E2D\u4E0D\u80FD\u5D4C\u5957\u3010{tagName}\u3011"},{wrapTagName:fe,tagName:hn})),rn.abrupt("return");case 39:Yn=k.y$.next(Yn),rn.next=32;break;case 42:k.ML.withoutNormalizing(g,function(){var se=k.NB.parent(g,nn.path),ie=k.NB.fragment(se,{anchor:{path:[nn.path[nn.path.length-1]],offset:nn.offset},focus:{path:[on.path[on.path.length-1]],offset:on.offset}}),Te=k.NB.string(k.NB.get(g,nn.path));if(k.y$.equals(nn.path,on.path))g.apply({type:"remove_text",path:nn.path,offset:nn.offset,text:Te.substring(nn.offset,on.offset)});else{g.apply({type:"remove_text",path:nn.path,offset:nn.offset,text:Te.substring(nn.offset,Te.length)});for(var we=k.y$.next(nn.path);!k.y$.equals(we,on.path);)g.apply({type:"remove_node",path:we,node:k.NB.get(g,we)}),on.path=k.y$.previous(on.path);var vt=k.NB.string(k.NB.get(g,on.path));g.apply({type:"remove_text",path:on.path,offset:0,text:vt.substring(0,on.offset)})}if(!k.y$.equals(nn.path,on.path)){var Je=k.NB.get(g,on.path);g.apply({type:"remove_node",path:on.path,node:Je});var xt=k.NB.string(Je);g.apply({type:"insert_text",path:nn.path,offset:nn.offset,text:xt})}_n(g,o()(o()({},j),{},{children:ie}),{at:nn,rules:w==null?void 0:w.rules})}),rn.next=46;break;case 45:$&&ne.ZP.warning($);case 46:case"end":return rn.stop()}},l)}));return function(g,j,w){return e.apply(this,arguments)}}(),Ge=function(l,g,j){if(!(!l||!g)){var w=Node.get(l,g),Z=Ve(w.children).reverse();Editor.withoutNormalizing(l,function(){l.apply({type:"remove_node",node:w,path:g}),Z.forEach(function(Pn){l.apply({type:"insert_node",node:Pn,path:g})});for(var Q=Path.parent(g),U=Node.get(l,Q),$=0;Node.has(U,[$+1]);)if(Text.isText(Node.get(U,[$]))&&Text.isText(Node.get(U,[$+1]))){var J=_toConsumableArray(Q);J.push($+1);var K=Node.get(l,J),W=Node.string(K);l.apply({type:"remove_node",path:J,node:K});var Mn=Path.previous(J),Dn=Node.string(Node.get(l,Mn));l.apply({type:"insert_text",path:Path.previous(J),offset:Dn.length,text:W}),U=Node.get(l,Q)}else $++;j==null||j(),Path.previous(g)})}},de=function(l,g,j){var w=j.at;l.apply({type:"set_node",path:w,properties:g,newProperties:g}),l.onChange()},He=function(l,g,j){l.apply({type:"remove_node",path:j,node:Node.get(l,j)}),l.apply({type:"insert_node",path:j,node:g})},tr=function(l,g){l&&(k.ML.withoutNormalizing(l,function(){var j=Ve(l.children);j.forEach(function(Z){l.apply({type:"remove_node",path:[0],node:Z})});var w=g?Ve(g):[{type:"s",children:[{text:""}]}];w.reverse(),w.forEach(function(Z){l.apply({type:"insert_node",path:[0],node:Z})})}),l.onChange())},Ke=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return l.reduce(function(g,j){return g+k.NB.string(j)},"")},Ve=function(l){return JSON.parse(JSON.stringify(l))},at=function(){var l="";return l},ma=function(l){var g;return(g=l[0])===null||g===void 0||(g=g.children)===null||g===void 0?void 0:g.map(function(j){return j.children.map(function(w){return w.text}).join("")}).join("")},va=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,g=l%60,j=parseInt("".concat(l/60)),w=0;return j>60&&(j=j%60,w=parseInt("".concat(j/60))),"".concat(w?"".concat(ot(w),":"):"").concat(ot(j),":").concat(ot(g))},ot=function(l){return l>=10?"".concat(l):"0".concat(l)},rr=function(l,g){if(!(!l||!g))return oe.F3.findPath(l,g)},ar=function(l){l&&k.ML.withoutNormalizing(l,function(){var g=k.ML.end(l,[]);k.YR.select(l,g),oe.F3.focus(l),l.onChange()})},or=function(l,g,j){var w=l.isInline,Z=l.isVoid,Q=l.insertText,U=l.insertBreak,$=l.apply;l.isInline=function(K){var W;return((W=j[K.type])===null||W===void 0?void 0:W.isInline)||w(K)},l.isVoid=function(K){var W;return((W=j[K.type])===null||W===void 0?void 0:W.isVoid)||Z(K)};var J=function(W){var Mn=parseInt(l.maxLength||g||"1000"),Dn=Ae(l,{tagRules:j}),Pn=Dn.length;if(Pn+W.length>Mn?(Q(W.substring(0,Mn-Pn)),Ce.MO.withoutSaving(l,function(){Q(W.substring(Mn-Pn,W.length))})):Q(W),l.selection&&Pn+W.length>Mn){var En=l.selection.focus,Sn=En.path,nn=En.offset,on=nn-(Pn+W.length-Mn),Zn=W.substring(Mn-Pn,W.length),In=Jn.default.get({id:"components.SlateEditor.utils.withEditor.YouCanEnterAMaximum",dm:"\u6700\u591A\u53EF\u8F93\u5165{maxLen}\u5B57"},{maxLen:Mn});Ce.MO.withoutSaving(l,function(){l.apply({type:"remove_text",path:Sn,offset:on,text:Zn})}),ne.ZP.warning(In)}};return l.insertText=J,l.insertFragment=function(K){var W=Ke(K);J(W)},l.insertBreak=function(){var K=l.selection;if(K){var W=Array.from(k.ML.nodes(l,{at:K,match:function(En){return!k.ML.isEditor(En)&&k.W_.isElement(En)&&En.type!=="s"}})),Mn=ue()(W,1),Dn=Mn[0];if(Dn)return;U()}},l.apply=function(K){K.type==="set_selection"&&it||$(K)},l},ir=(0,_.forwardRef)(function(e,l){var g=ht(),j=e.value,w=e.wordLimit,Z=w===void 0?1e3:w,Q=e.disabled,U=e.onChange,$=e.variables,J=(0,_.useRef)(!1),K=(0,_.useRef)(Ye(e.tagRules)),W=(0,_.useMemo)(function(){return or((0,oe.BU)((0,Ce.VC)((0,k.Jh)())),Z,K.current)},[]),Mn=(0,_.useRef)(W.selection),Dn=(0,_.useRef)($);(0,_.useEffect)(function(){K.current=Ye(e.tagRules)},[e.tagRules]),(0,_.useEffect)(function(){Dn.current=$},[$]),(0,_.useEffect)(function(){var hn;if(!J.current){J.current=!0;return}W.maxLength=Z;var G=Bn();ee(((hn=Me(pe(G==null?void 0:G.slice(0,Z))))===null||hn===void 0||(hn=hn[0])===null||hn===void 0?void 0:hn.children)||[{type:"s",children:[{text:""}]}])},[Z]),(0,_.useImperativeHandle)(l,function(){return{editor:W,getEditorValue:Bn,_insertNodes:Un,_setNodes:kn,_setEditorContent:ee,_findNodePath:ce,_wrapNodes:fe,_serialize:Yn,_generateTextBySelection:Qn,_insertFragment:qn,_setEditorContentByStr:te}});var Pn=(0,_.useMemo)(function(){var hn=Me(rt(pe(j))),G;return hn&&(hn[0].type==="speak"?G=hn[0].children:G=hn),{initValue:G}},[j]),En=Pn.initValue,Sn=(0,_.useState)(En||[{type:"s",children:[{text:""}]}]),nn=ue()(Sn,2),on=nn[0],Zn=nn[1],In=function(G){JSON.stringify((W==null?void 0:W.selection)||"")!==JSON.stringify(Mn.current||"")&&(Mn.current=W==null?void 0:W.selection);var rn=Bn();j!==rn&&(U==null||U(Bn()),Zn(G))},$n=function(G){var rn=G.element,se=rn.type,ie=K.current[se].render;return ie?(0,tn.jsx)(ie,o()(o()({},G),{},{renderVarLabel:e.renderVarLabel})):(0,tn.jsx)(tn.Fragment,{})},wn=(0,_.useCallback)(function(hn){var G=hn.attributes,rn=hn.children,se=hn.leaf;return(0,tn.jsx)("span",o()(o()({},G),{},{style:{paddingLeft:se.text===""?"3px":void 0},children:rn}))},[]),Fn=function(){it=!0},Hn=function(){it=!1},Bn=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ae(W,o()(o()({},G),{},{tagRules:K.current}))},kn=function(G,rn){de(W,G,rn)},Un=function(G){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_n(W,G,o()(o()({},rn),{},{rules:K.current}))},fe=function(G){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Pe(W,G,o()(o()({},rn),{},{rules:K.current}))},ee=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];tr(W,G)},te=function(){var G,rn=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";ee(((G=Me(pe(rn==null?void 0:rn.slice(0,Z))))===null||G===void 0||(G=G[0])===null||G===void 0?void 0:G.children)||[{type:"s",children:[{text:""}]}])},ce=function(G){return rr(W,G)},Yn=function(G){var rn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ie(G,o()(o()({},rn),{},{tagRules:K.current}))},Qn=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!W.selection)return null;var rn=k.NB.fragment(W,W.selection);return Ie(rn,o()(o()({},G),{},{tagRules:K.current}))},qn=function(G){var rn,se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,ie=Bn();if(ie.length>=Z){ne.ZP.warning(Jn.default.get({id:"components.commonComponents.SlateEditor.TheNumberOfWordsCannot",dm:"\u5B57\u6570\u4E0D\u80FD\u8D85\u8FC7{wordLimit}\u5B57"}));return}(!W.selection||se)&&ar(W);var Te=ie.endsWith("/n");se&&ie&&!Te&&W.insertBreak();var we=G.slice(0,Z-ie.length),vt=Me(pe(we))||[];(rn=vt[0])===null||rn===void 0||rn.children.forEach(function(Je,xt){var pt;xt!==0&&W.insertBreak(),(pt=Je.children)===null||pt===void 0||pt.forEach(function(Mt){Mt.text?W.insertText(Mt.text):Un(Mt)})})};(0,_.useEffect)(function(){var hn=Bn();j!==hn&&(U==null||U(Bn()))},[]);var re=function(G){var rn=G.clipboardData.getData("text/plain");qn(rn,!1),G.preventDefault()};return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(g,{}),(0,tn.jsx)("div",{id:"text-editor",className:Tn()("text-editor",e.className),children:(0,tn.jsx)(oe.mH,{editor:W,value:on,onChange:In,children:(0,tn.jsx)(oe.CX,{onKeyDown:e.onKeyDown,placeholder:e.placeholder||Jn.default.get({id:"components.commonComponents.SlateEditor.EnterHere",dm:"\u5728\u8FD9\u91CC\u8F93\u5165"}),onBlur:e.onBlur,onFocus:e.onFocus,className:Tn()("text-editor-content",e.contentClassName),readOnly:Q,renderElement:$n,renderLeaf:wn,onCompositionStart:Fn,onCompositionEnd:Hn,onPaste:re,maxLength:e.wordLimit,onCopy:function(G){var rn=Qn()||"";G.clipboardData.setData("text/plain",rn),G.preventDefault()}})})})]})}),lr=ir,it=!1,Nt=n(13191),cr=n(88886),sr=n(69065),ur=n(9783),Lt=n.n(ur),Et,dr=(0,yn.default)(Et||(Et=jn()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix});function fr(e){var l=(0,mn.getCommonConfig)(),g=l.sparkPrefix,j=dr(),w=function(Q){var U=typeof Q=="string"?parseFloat(Q):Q;if(U===null||isNaN(U)){e.onChange(null);return}U<e.min?e.onChange(e.min):U>e.max?e.onChange(e.max):e.onChange(U)};return(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(j,{}),(0,tn.jsxs)("div",{onMouseUp:function(){var Q;return(Q=e.onBlur)===null||Q===void 0?void 0:Q.call(e)},className:Tn()("".concat(g,"-slider-selector"),e.className),children:[(0,tn.jsx)(Nt.Z,{disabled:e.disabled,onChange:w,value:e.value===null?void 0:e.value,min:e.min,max:e.max,step:e.step,marks:e.marks||Lt()(Lt()({},e.min,e.min),e.max,e.max),tooltip:{getPopupContainer:function(Q){return Q}}}),(0,tn.jsx)("div",{style:o()({width:"48px"},e.inputNumberWrapperStyle),children:(0,tn.jsx)(A.Z,{disabled:e.disabled,controls:!1,min:e.min,max:e.max,onBlur:function(){var Q;return(Q=e.onBlur)===null||Q===void 0?void 0:Q.call(e)},step:e.step,value:e.value,onChange:w,precision:e.precision})})]})]})}var gr=n(95542),mr=n(59113),vr=n(80731),xr=n(91268),pr=n(20010),Mr=n(69298),Pr=n(20946),hr=n(21618),jr=n(51850);function St(){return lt.apply(this,arguments)}function lt(){return lt=y()(p()().mark(function e(){var l,g=arguments;return p()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return l=g.length>0&&g[0]!==void 0?g[0]:100,w.abrupt("return",new Promise(function(Z){setTimeout(Z,l)}));case 2:case"end":return w.stop()}},e)})),lt.apply(this,arguments)}var yr=n(35872),Dr=n(13769),$e=n.n(Dr),Nr=["maxWidth","maxHeight"];function xa(){var e;return((e=window.g_config)===null||e===void 0?void 0:e.isIntl)||!1}var Lr=function(l){if(navigator.clipboard)navigator.clipboard.writeText(l);else{var g=document.createElement("textarea");document.body.appendChild(g),g.style.position="fixed",g.style.clip="rect(0 0 0 0)",g.style.top="10px",g.value=l,g.select(),document.execCommand("copy",!0),document.body.removeChild(g)}},Er=function(l){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=g.maxWidth,w=g.maxHeight,Z=$e()(g,Nr);return o()({overlayInnerStyle:{maxWidth:j||326,maxHeight:w||150,overflowY:"auto",padding:"6px 12px"},title:l,arrow:!1},Z)};function pa(e){return React.isValidElement(e)}function Ma(e){var l=e||navigator.userAgent;return/^((?!chrome|android).)*safari/i.test(l)}var ct=function(l){return l>=10?l:"0".concat(l)},Pa=function(l){if(l<60){var g=Math.ceil(l);return"0:".concat(ct(g))}var j=Math.floor(l/60),w=Math.ceil(l%60);return"".concat(ct(j),":").concat(ct(w))};function Ct(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=l.timeout,j=g===void 0?5e3:g,w=l.intervalTime,Z=w===void 0?100:w,Q=Date.now();return new Promise(function(U,$){var J=setInterval(function(){var K=e();K?(clearInterval(J),U(K)):Date.now()-Q>j&&($("timeout"),clearInterval(J))},Z)})}function Sr(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ct(function(){return document.querySelector(e)},l)}var bt=n(38018),Cr=["product","action","url","version","region","headers"],br=function(){var e=y()(p()().mark(function g(j,w,Z){var Q,U,$,J,K,W,Mn,Dn,Pn,En,Sn,nn,on,Zn,In;return p()().wrap(function(wn){for(;;)switch(wn.prev=wn.next){case 0:return U=j.product,$=j.action,J=j.url,K=j.version,W=j.region,Mn=j.headers,Dn=Mn===void 0?{}:Mn,Pn=$e()(j,Cr),En="".concat(J||"/data/api.json","?action=").concat($,"&product=").concat(U),K&&(En+="&version=".concat(K)),Sn={sec_token:((Q=window.ALIYUN_CONSOLE_CONFIG)===null||Q===void 0?void 0:Q.SEC_TOKEN)||"",region:W},w&&(Sn.params=JSON.stringify(w)),Z&&Object.assign(Sn,Z),nn=o()({method:"post",credentials:"same-origin",headers:o()({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},Dn)},Pn),on=Object.assign({},nn),on.body=(0,bt.stringify)(Sn),wn.next=11,fetch(En,on);case 11:return Zn=wn.sent,wn.next=14,Zn.json();case 14:if(In=wn.sent,!(In.code!=="200"&&!In.successResponse)){wn.next=17;break}return wn.abrupt("return",Promise.reject(In));case 17:return wn.abrupt("return",In);case 18:case"end":return wn.stop()}},g)}));function l(g,j,w){return e.apply(this,arguments)}return l}(),It=br;function Ir(e,l){return st.apply(this,arguments)}function st(){return st=y()(p()().mark(function e(l,g){var j,w,Z;return p()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:w=l==null||(j=l.getReader)===null||j===void 0?void 0:j.call(l),w||(console.log("[sse]error: Can Not Find Reader Object"),console.log("[sse]StreamInfo: ",l));case 2:return U.next=4,w.read();case 4:if((Z=U.sent).done){U.next=8;break}try{g(Z.value)}catch($){console.log("[sse-error][onmessage] pleach check `onmessage` or `onJsonText`.",$)}U.next=2;break;case 8:case"end":return U.stop()}},e)})),st.apply(this,arguments)}function Ar(e){var l,g,j,w=!1;return function(Q){l===void 0?(l=Q,g=0,j=-1):l=wr(l,Q);for(var U=l.length,$=0;g<U;){w&&(l[g]===10&&($=++g),w=!1);for(var J=-1;g<U&&J===-1;++g)switch(l[g]){case 58:j===-1&&(j=g-$);break;case 13:w=!0;case 10:J=g;break}if(J===-1)break;e(l.subarray($,J),j),$=g,j=-1}$===U?l=void 0:$!==0&&(l=l.subarray($),g-=$)}}function Tr(e,l,g){var j=At(),w=new TextDecoder;return function(Q,U){if(Q.length===0)g==null||g(j),j=At();else if(U>0){var $=w.decode(Q.subarray(0,U)),J=U+(Q[U+1]===32?2:1),K=w.decode(Q.subarray(J));switch($){case"data":j.data=j.data?"".concat(j.data,`
`).concat(K):K;break;case"event":j.event=K;break;case"id":e(j.id=K);break;case"retry":var W=parseInt(K,10);isNaN(W)||l(j.retry=W);break}}}}function wr(e,l){var g=new Uint8Array(e.length+l.length);return g.set(e),g.set(l,e.length),g}function At(){return{data:"",event:"",id:"",retry:void 0}}var Or=["signal","headers","onopen","onmessage","onclose","onerror","fetch","autoRetryTime","timeout","debug"],ut="text/event-stream",Br=1e3,Tt="last-event-id";function wt(e,l){return dt.apply(this,arguments)}function dt(){return dt=y()(p()().mark(function e(l,g){var j,w,Z,Q,U,$,J,K,W,Mn,Dn,Pn,En;return p()().wrap(function(nn){for(;;)switch(nn.prev=nn.next){case 0:return j=g.signal,w=g.headers,Z=g.onopen,Q=g.onmessage,U=g.onclose,$=g.onerror,J=g.fetch,K=g.autoRetryTime,W=g.timeout,Mn=g.debug,Dn=Mn===void 0?!1:Mn,Pn=$e()(g,Or),En=0,nn.abrupt("return",new Promise(function(on,Zn){var In=o()({},w);In.accept||(In.accept=ut);var $n=Br,wn=0,Fn=0,Hn=new AbortController;function Bn(){var ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(Dn&&console.log("[sse] dispose"),window.clearTimeout(wn),window.clearTimeout(Fn),!ce){var Yn,Qn;(Yn=Hn)===null||Yn===void 0||(Qn=Yn.abort)===null||Qn===void 0||Qn.call(Yn)}}function kn(){window.clearTimeout(Fn),W!==0&&(Fn=window.setTimeout(function(){Dn&&console.log("[sse] timeout"),Zn(new Error("timeout")),$==null||$(new Error("timeout")),Bn()},W||60*1e3))}j==null||j.addEventListener("abort",function(){Bn(),on()});var Un=J!=null?J:window.fetch,fe=Z!=null?Z:zr;function ee(){return te.apply(this,arguments)}function te(){return te=y()(p()().mark(function ce(){var Yn,Qn,qn,re;return p()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.prev=0,kn(),G.next=4,Un(l,o()(o()({},Pn),{},{headers:In,signal:(Yn=Hn)===null||Yn===void 0?void 0:Yn.signal}));case 4:return Qn=G.sent,G.next=7,fe(Qn);case 7:if(Qn.body){G.next=11;break}return Dn&&console.log("[sse]no body, delay 100ms"),G.next=11,St(100);case 11:return Dn&&console.log("[sse]response.body",Qn.body),G.next=14,Ir(Qn.body,Ar(Tr(function(rn){rn?In[Tt]=rn:delete In[Tt]},function(rn){$n=rn},function(rn){kn(),Q==null||Q(rn)})));case 14:Hn=null,U==null||U(),Bn(),on(),G.next=43;break;case 20:if(G.prev=20,G.t0=G.catch(0),G.t0&&console.error("[sse]err",G.t0),!(!(j!=null&&j.aborted)&&K&&En<K)){G.next=39;break}return G.prev=24,En+=1,re=(qn=$==null?void 0:$(G.t0))!==null&&qn!==void 0?qn:$n,window.clearTimeout(wn),typeof re=="number"&&(Dn&&console.log("[sse] retry "+En),wn=window.setTimeout(ee,re)),G.abrupt("return",Promise.resolve());case 32:G.prev=32,G.t1=G.catch(24),Dn&&console.log("[sse] reject innerErr ",G.t1),Bn(),Zn(G.t1);case 37:G.next=43;break;case 39:Dn&&console.log("[sse] reject finally"),Bn(G.t0 instanceof Response||G.t0 instanceof DOMException&&G.t0.name==="AbortError"),$==null||$(G.t0),Zn(G.t0);case 43:case"end":return G.stop()}},ce,null,[[0,20],[24,32]])})),te.apply(this,arguments)}ee()}));case 3:case"end":return nn.stop()}},e)})),dt.apply(this,arguments)}function zr(e){var l=e.headers.get("content-type");if(!(l!=null&&l.startsWith(ut)))throw new Error("Expected content-type to be ".concat(ut,", Actual: ").concat(l))}function Fr(e){return ft.apply(this,arguments)}function ft(){return ft=y()(p()().mark(function e(l){var g,j,w,Z,Q,U,$;return p()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return g=l.action,j=l.body,w=l.product,Z=l.version,Q=l.region,U=l.params,$={action:g,product:w,region:Q,url:"/tool/sse/get.json",version:Z},K.abrupt("return",It($,U,{content:JSON.stringify(j)}));case 3:case"end":return K.stop()}},e)})),ft.apply(this,arguments)}function Rr(e,l,g,j){var w=l.onMessage,Z=l.onClose,Q=l.onError,U=l.timeout,$=e.body,J=e.uri,K=e.headers,W=e.query,Mn=e.path,Dn=K["Content-Type"],Pn="".concat(J.replace(/\/$/,"")).concat(Mn);W&&Object.keys(W).length&&(Pn="".concat(Pn,"?").concat((0,bt.stringify)(W)));try{j.value=!1,wt(Pn,{method:"POST",body:Dn==="application/x-www-form-urlencoded"?new URLSearchParams(JSON.parse($)):$,signal:g.signal,timeout:U,headers:K,onopen:function(Sn){return Sn.status!==200?Promise.reject(Sn):Promise.resolve()},onmessage:function(Sn){try{var nn=Sn.data,on=nn===void 0?"{}":nn,Zn=JSON.parse(on);w==null||w(Zn)}catch(In){Q==null||Q(In)}},onclose:function(){j.value=!0,Z==null||Z()},onerror:function(Sn){j.value=!0,Z==null||Z(),!(Sn instanceof DOMException&&Sn.name==="AbortError")&&(Q==null||Q(Sn))}})}catch(En){j.value=!0,Q==null||Q(En),Z==null||Z()}}function Zr(e,l,g){return gt.apply(this,arguments)}function gt(){return gt=y()(p()().mark(function e(l,g,j){var w,Z,Q,U;return p()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return w=l.onClose,Z=l.onError,J.prev=1,J.next=4,Fr(l);case 4:Q=J.sent,U=Q.data,Rr(U,l,g,j),J.next=13;break;case 9:J.prev=9,J.t0=J.catch(1),w==null||w(),Z==null||Z(J.t0);case 13:case"end":return J.stop()}},e,null,[[1,9]])})),gt.apply(this,arguments)}function kr(e){return mt.apply(this,arguments)}function mt(){return mt=y()(p()().mark(function e(l){var g,j;return p()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return g=new AbortController,j={value:!0},Z.next=4,Zr(l,g,j);case 4:return Z.abrupt("return",{dispose:function(){j.value&&g.abort("\u53D6\u6D88\u8BF7\u6C42")}});case 5:case"end":return Z.stop()}},e)})),mt.apply(this,arguments)}var Ot,Ur=(0,yn.default)(Ot||(Ot=jn()([`
.`,`-alert {
  .`,`-alert-close-icon {
    font-size: 16px;
    
    .anticon-close {
      color: var(--`,`-color-text);
    }
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ha=null,Bt,Wr=(0,yn.default)(Bt||(Bt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ja=null,zt,Yr=(0,yn.default)(zt||(zt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ya=null,Ft,Qr=(0,yn.default)(Ft||(Ft=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Da=null,Rt,Gr=(0,yn.default)(Rt||(Rt=jn()([`
/* \u53D6\u6D88\u6240\u6709button\u7684boxShadow */
.`,`-float-btn {
  box-shadow: var(--`,`-box-shadow);
  
  &.`,`-float-btn-default {
    border: 1px solid var(--`,`-color-border-secondary);
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Na=null,Zt,Hr=(0,yn.default)(Zt||(Zt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),La=null,kt,Kr=(0,yn.default)(kt||(kt=jn()([`
.`,`-message-notice-content {
  border: 1px solid var(--`,`-color-border-secondary);
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix}),Ea=null,Ut,Vr=(0,yn.default)(Ut||(Ut=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Sa=null,Wt,$r=(0,yn.default)(Wt||(Wt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ca=null,Yt,Xr=(0,yn.default)(Yt||(Yt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),ba=null,Qt,Jr=(0,yn.default)(Qt||(Qt=jn()([`
.`,`-segmented {
  .`,`-segmented-item-selected {
    box-shadow: none;
  }
  
  .`,`-segmented-thumb {
    box-shadow: none !important;
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ia=null,Gt,_r=(0,yn.default)(Gt||(Gt=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Aa=null,Ht,qr=(0,yn.default)(Ht||(Ht=jn()([`
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
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Ta=null,Kt,na=(0,yn.default)(Kt||(Kt=jn()([`
.`,`-table-cell {
  border-radius: 0;
}
`])),function(e){return e.antPrefix}),wa=null,Vt,ea=(0,yn.default)(Vt||(Vt=jn()([`
.`,`-tooltip {
  .`,`-tooltip-inner {
    border: 1px solid var(--`,`-color-border-secondary);
    box-shadow: var(--`,`-box-shadow);
  }
}
`])),function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),Oa=null,$t,ta=(0,yn.default)($t||($t=jn()([`
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
`]))),ra=function(){var l=ta(),g=Ur(),j=Wr(),w=Yr(),Z=Qr(),Q=Gr(),U=Hr(),$=Kr(),J=Vr(),K=$r(),W=Xr(),Mn=Jr(),Dn=_r(),Pn=qr(),En=na(),Sn=ea();return function(){return _.createElement(_.Fragment,null,_.createElement(l),_.createElement(g),_.createElement(j),_.createElement(w),_.createElement(Z),_.createElement(Q),_.createElement(U),_.createElement($),_.createElement(J),_.createElement(K),_.createElement(W),_.createElement(Mn),_.createElement(Dn),_.createElement(Pn),_.createElement(En),_.createElement(Sn))}},Ba=null,Xt=n(9361),he=n(55839),Jt=n(36447),aa=n(53124),oa=n(66115),ia=["prefix","prefixCls","iconfont","children"];function la(){var e=ra();return(0,tn.jsx)(e,{})}var _t={};function Xe(e){var l,g=e.prefix,j=g===void 0?"":g,w=e.prefixCls,Z=w===void 0?"":w,Q=e.iconfont,U=Q===void 0?"https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js":Q,$=e.children,J=$===void 0?void 0:$,K=$e()(e,ia),W=(0,_.useState)(!1),Mn=ue()(W,2),Dn=Mn[0],Pn=Mn[1],En=(0,_.useState)(((l=e.locale)===null||l===void 0?void 0:l.locale)||"defaultKey"),Sn=ue()(En,2),nn=Sn[0],on=Sn[1],Zn=(0,mn.getCommonConfig)(),In=Zn.antPrefix,$n=(0,_.useContext)(aa.E_),wn=$n.theme,Fn=(0,_.useMemo)(function(){return Z||(j?"".concat(j,"-ant"):In)},[Z,j]),Hn=(0,oa.Z)(e.theme||_t,wn||_t,{prefixCls:Fn}),Bn=(0,_.useMemo)(function(){var kn=o()(o()({},Hn),{},{algorithm:Hn.darkMode?Xt.Z.darkAlgorithm:void 0});return kn},[Hn]);return(0,_.useLayoutEffect)(function(){var kn={antPrefix:Fn,configProviderProps:o()(o()({},K),{},{prefixCls:Fn}),iconfont:U};j.length&&(kn=o()(o()({},kn),{},{sparkPrefix:"".concat(j,"-").concat(mn.DEFAULT_SPARK_PREFIX),prefix:j}),console.log("debug","".concat(j,"-").concat(mn.DEFAULT_SPARK_PREFIX))),(0,mn.setCommonConfig)(o()(o()({},kn),{},{isDarkMode:function(){try{return(K.theme.algorithm||Bn.algorithm)===Xt.Z.darkAlgorithm}catch(Un){return!1}}()})),Pn(!0),ne.ZP.config({top:24})},[]),(0,_.useLayoutEffect)(function(){he.ZP.config({holderRender:function(Un){return(0,tn.jsx)(he.ZP,o()(o()({},K),{},{prefixCls:Fn,theme:Bn,wave:{disabled:!0},children:(0,tn.jsx)(Jt.Z,{className:Tn()("spark"),style:o()({},e.style),children:Un},nn)}))}})},[K,Fn,Dn]),(0,_.useLayoutEffect)(function(){var kn,Un;Jn.default.updateLocale(((kn=e.locale)===null||kn===void 0?void 0:kn.locale)||"zh-cn"),on(((Un=e.locale)===null||Un===void 0?void 0:Un.locale)||"defaultKey")},[e.locale]),(0,tn.jsx)(he.ZP,o()(o()({},K),{},{theme:Bn,prefixCls:Fn,wave:{disabled:!0},children:(0,tn.jsx)(Jt.Z,{className:Tn()("spark",e.className),style:o()({},e.style),children:Dn?(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(la,{}),J]}):null},nn)}))}Xe.ConfigContext=he.ZP.ConfigContext,Xe.config=function(e){he.ZP.config(e)},Xe.useConfig=he.ZP.useConfig;var ca=Xe;function sa(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof e!="string")return g||console.warn(e,"is not valid json"),l?e:null;try{return JSON.parse(e)}catch(j){return g||console.warn(e,"is not valid json"),l?e:null}}function ua(e){for(var l=new TextEncoder,g=l.encode(e),j="",w=0;w<g.length;w++)j+=String.fromCharCode(g[w]);var Z=btoa(j);return Z}function da(e){for(var l=atob(e),g=new Uint8Array(l.length),j=0;j<l.length;j++)g[j]=l.charCodeAt(j);var w=new TextDecoder("utf-8"),Z=w.decode(g);return Z}var qt=n(4767),nr=B(v),er=B(z,!0),fa=B(N),ga=B(F,!0)},3067:function(ln,O,n){n.r(O),n.d(O,{default:function(){return T}});var z=n(93865),v=n(30122),F=n(67294),N=n(85893);function T(){for(var o=arguments.length,E=new Array(o),S=0;S<o;S++)E[S]=arguments[S];return function(){var D=(0,z.useCommonConfig)(),C=D.sparkPrefix,b=D.antPrefix,P=D.blPrefix,M=v.vJ.apply(void 0,E),I=(0,F.useRef)(function(){return(0,N.jsx)(M,{sparkPrefix:C,antPrefix:b,blPrefix:P})});return I.current}}},35872:function(ln,O,n){n.d(O,{Q:function(){return S},t:function(){return E}});var z=n(97857),v=n.n(z),F=n(27856),N=n.n(F),T=N()(window),o={ADD_ATTR:["target"]};function E(D){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return T.sanitize(D||"",v()(v()({},o),C))}var S=function(C,b){var P=C.closest(b);return P||document.querySelector(b)}}}]);
