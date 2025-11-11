"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[1860],{57027:function(N,E,e){var C=e(97857),s=e.n(C),y=e(52677),u=e.n(y),c=e(13769),l=e.n(c),M=e(40443),k=e(9361),b=e(83622),D=e(55839),h=e(93967),P=e.n(h),g=e(67294),A=e(38654),i=e(33369),r=e(85893),L=["iconSize","loading"],d=(0,g.forwardRef)(function(O,n){var T=k.Z.useToken(),o=O.iconSize,t=O.loading,a=l()(O,L),_=g.useMemo(function(){return a.type==="primaryLess"?"primary":a.type==="textCompact"?"link":a.type},[a.type]),m=(0,g.useMemo)(function(){if(t){if(typeof t=="boolean")return{icon:(0,r.jsx)(M.Z,{spin:!0})};if(u()(t)==="object")return s()({icon:(0,r.jsx)(M.Z,{spin:!0})},t)}return t},[t]),p=g.useMemo(function(){return t&&u()(t)==="object"&&t.icon?t==null?void 0:t.icon:a.iconType?(0,r.jsx)(A.Z,{type:a.iconType,size:o!=null?o:a.size}):a.icon?g.cloneElement(a.icon,{size:o!=null?o:a.size}):null},[a.iconType,a.icon]),f=(0,r.jsx)(b.ZP,s()(s()({},a),{},{loading:m,ref:n,type:_,icon:p,style:s()({fontWeight:500,lineHeight:1},a.style),className:P()(a.className,"spark-button")}));return a.type==="primaryLess"?(0,r.jsx)(D.ZP,{theme:{token:{colorPrimary:T.token.colorText,colorPrimaryHover:T.token.colorTextSecondary,colorPrimaryActive:T.token.colorTextBase}},children:(0,r.jsx)(i.Z,{title:a.tooltipContent,children:f})}):a.type==="textCompact"?(0,r.jsx)(i.Z,{title:a.tooltipContent,children:(0,r.jsx)(b.ZP,s()(s()({},a),{},{ref:n,icon:p,color:"default",variant:"link",style:s()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},a.style),className:P()(a.className,"spark-button")}))}):(0,r.jsx)(i.Z,{title:a.tooltipContent,children:f})});E.Z=d},21860:function(N,E,e){e.d(E,{Z:function(){return T}});var C=e(97857),s=e.n(C),y=e(93865),u=e(86250),c=e(67294),l=e(57027),M=e(68400),k=e.n(M),b=e(3067),D,h=(0,b.Z)(D||(D=k()([`
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
`])),function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix},function(o){return o.sparkPrefix},function(o){return o.antPrefix}),P=e(5574),g=e.n(P),A=e(29691),i=e(85893),r=document.querySelector("#empty-svg-container");function L(o){var t=(0,A.ZP)(),a=g()(t,5),_=a[4],m=o.svgUrl,p=o.tokenMap,f=p===void 0?{}:p,B=o.className,x=o.size,R=m.includes(".svg"),v=(0,c.useState)(""),S=g()(v,2),H=S[0],X=S[1];return(0,c.useEffect)(function(){if(!r){var F=document.createElement("div");F.innerHTML="<svg></svg>",r=F.querySelector("svg"),r.id="empty-svg-container",r.setAttribute("aria-hidden","true"),r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.overflow="hidden",document.body.insertBefore(r,document.body.firstChild)}},[]),(0,c.useEffect)(function(){r&&_!==null&&_!==void 0&&_.key&&(r.classList.forEach(function(F){return r.classList.remove(F)}),r.classList.add(_.key))},[_==null?void 0:_.key]),(0,c.useEffect)(function(){if(R){var F=btoa(m),w='<svg><use xlink:href="#'.concat(F,'"></use></svg>');if(X(w),!document.getElementById(F)){var K='<symbol id="'.concat(F,'"></symbol>');r.innerHTML=r.innerHTML+K,fetch(m).then(function(W){return W.text()}).then(function(W){var j=W;Object.keys(f).forEach(function($){j=j.replace(new RegExp($,"g"),f[$])});var G=j.match(/viewBox="([^"]*)"/),z=G?G[1]:"",Q=document.getElementById(F),Z=j.replace(/<svg[^>]*>/,"");Z=Z.replace(/<\/svg>/,""),z&&Q.setAttribute("viewBox",z),Q.innerHTML=Z})}}},[m]),R?(0,i.jsx)("div",{className:B,dangerouslySetInnerHTML:{__html:H},style:{width:x,height:x}}):(0,i.jsx)("img",{src:m,className:B,style:{width:x,height:x}})}var d={url:"https://gw.alicdn.com/imgextra/i3/O1CN01r3f3Si24iFTRz9Bho_!!6000000007424-55-tps-320-320.svg",tokenMap:{"#CDD0DC":"color-border"}},O={noData:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01mWN5tE1MAxb2z7LwA_!!6000000001395-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#BCB5FF":"color-primary-border-hover","#FFFFFF":"color-bg-base","#615CED":"color-primary","#1ACDD0DC":"color-fill-quaternary","#CDD0DC":"color-border"}},networkError:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01su6GHG1RupL5K5TOQ_!!6000000002172-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},404:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01GE0jXZ1xpqjvMjCZh_!!6000000006493-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#26CDD0DC":"color-fill-tertiary","#CDD0DC":"color-border","#F3F0FF":"color-primary-bg","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},arrears:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01xN8uYv1Dz2MLvrFAF_!!6000000000286-55-tps-108-108.svg",tokenMap:{"#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#F3F0FF":"color-primary-bg","#615CED":"color-primary"}},desktopOnly:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01ZzNku41rshVhRVh9x_!!6000000005687-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FFFFFF":"color-bg-base","#615CED":"color-primary"}},noAudio:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01fTQ6vi1GXxnIrmizf_!!6000000000633-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#615CED":"color-primary","#E6E8EE":"color-border-secondary"}},noImage:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01zQAH9A1oJUD9XDtmi_!!6000000005204-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noVideo:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01kqss5i1JuoOrJ8fNV_!!6000000001089-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noAccess:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01RwpRz91oGHREFlmdY_!!6000000005197-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}},error:{url:"https://gw.alicdn.com/imgextra/i1/O1CN01TlQR4c1L3nn4DkG2z_!!6000000001244-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#E6E8EE":"color-border-secondary","#615CED":"color-primary"}},noModel:{url:"https://gw.alicdn.com/imgextra/i2/O1CN01BSPmLi1iaXGByjbne_!!6000000004429-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#26CDD0DC":"color-fill-tertiary","#5CCDD0DC":"color-fill","#615CED":"color-primary"}},noApp:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01stSIP31fzmEtpppWc_!!6000000004078-55-tps-108-108.svg",tokenMap:{"#E6E8EE":"color-border-secondary","#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#33CDD0DC":"color-fill-secondary","#615CED":"color-primary"}},success:{url:"https://gw.alicdn.com/imgextra/i3/O1CN01sGzZ5B1Bx5RQAjUe5_!!6000000000011-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#5BB98B":"color-success","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},failed:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01Fd1Gmx1QNYxQ8hj0H_!!6000000001964-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#FF7875":"color-error-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},inProgress:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01w2RXic1LADKqVxH56_!!6000000001258-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#E6E8EE":"color-border-secondary","#CDD0DC":"color-border","#9189FA":"color-primary-hover","#615CED":"color-primary","#26CDD0DC":"color-fill-tertiary","#33CDD0DC":"color-fill-secondary","#1aCDD0DC":"color-fill-quaternary"}},stayTuned:{url:"https://gw.alicdn.com/imgextra/i4/O1CN01W2Kbyc26dmqmatyoB_!!6000000007685-55-tps-108-108.svg",tokenMap:{"#FFFFFF":"color-bg-base","#CDD0DC":"color-border","#615CED":"color-primary"}}},n=function(t){var a=t.imageStyle,_=t.title,m=t.description,p=m===void 0?"No Data":m,f=t.children,B=t.texture,x=B===void 0?!0:B,R=t.size,v=R===void 0?320:R,S=t.okText,H=t.okType,X=H===void 0?"primary":H,F=t.okButtonProps,w=t.onOk,K=t.type||"noData",W=(0,y.getCommonConfig)(),j=W.sparkPrefix,G=W.isDarkMode,z=W.antPrefix,Q=t.image||O[K].url,Z=(0,c.useMemo)(function(){var U,I=s()({},(U=O[K])===null||U===void 0?void 0:U.tokenMap);return I&&Object.keys(I).forEach(function(J){I[J]="var(--".concat(z,"-").concat(I[J],")")}),I},[K]),$=(0,c.useMemo)(function(){var U=s()({},d.tokenMap);return Object.keys(U).forEach(function(I){U[I]="var(--".concat(z,"-").concat(U[I],")")}),U},[G]),Y=h(),V=typeof v=="string"?parseFloat(v.replace(/px/i,"")):v!=null?v:0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Y,{}),(0,i.jsxs)("div",{className:"".concat(j,"-empty ").concat(t.className||""),style:s()(s()({},a),{},{width:v,height:v}),children:[x&&(0,i.jsx)(L,{size:v,svgUrl:d.url,tokenMap:$,className:"".concat(j,"-empty-texture")}),(0,i.jsx)(L,{size:v,svgUrl:Q,tokenMap:Z,className:"".concat(j,"-empty-image")}),(0,i.jsxs)(u.Z,{vertical:!0,align:"center",style:{marginTop:"52.5%"},children:[_&&(0,i.jsx)("div",{className:"".concat(j,"-empty-title"),style:{marginBottom:p?.025*V:0},children:_}),p&&(0,i.jsx)("div",{className:"".concat(j,"-empty-description"),children:p}),!!S&&(0,i.jsx)("div",{style:{marginTop:.05*V},children:(0,i.jsx)(l.Z,s()(s()({type:X,onClick:w},F),{},{children:S}))}),!!f&&f]})]})]})},T=n},21773:function(N,E,e){e.d(E,{X:function(){return c}});var C=e(68400),s=e.n(C),y=e(3067),u,c=(0,y.Z)(u||(u=s()([`
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
`])),function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.sparkPrefix},function(l){return l.antPrefix},function(l){return l.antPrefix})},38654:function(N,E,e){e.d(E,{Z:function(){return L}});var C=e(9783),s=e.n(C),y=e(97857),u=e.n(y),c=e(13769),l=e.n(c),M=e(93865),k=e(27356),b=e(93967),D=e.n(b),h=e(67294),P=e(21773),g=e(85893),A=["type","className","isCursorPointer","spin","size"],i;function r(d){return i||(i=(0,k.Z)({scriptUrl:d})),i}function L(d){var O=d.type,n=d.className,T=n===void 0?"":n,o=d.isCursorPointer,t=o===void 0?!1:o,a=d.spin,_=d.size,m=l()(d,A),p=(0,M.getCommonConfig)(),f=p.sparkPrefix,B=p.iconfont,x=(0,P.X)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{}),h.createElement(r(B),u()({type:O,style:u()({fontSize:_},d.style),className:D()(t&&"".concat(f,"-cursor-pointer"),T,"".concat(f,"-icon"),s()({},"".concat(f,"-icon-spin"),a))},m))]})}},33369:function(N,E,e){e.d(E,{Z:function(){return O}});var C=e(97857),s=e.n(C),y=e(13769),u=e.n(y),c=e(93865),l=e(35872),M=e(83062),k=e(93967),b=e.n(k),D=e(67294),h=e(68400),P=e.n(h),g=e(3067),A,i=(0,g.Z)(A||(A=P()([`
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
`])),function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),r=e(85893),L=["mode","arrow","overlayClassName","getPopupContainer","align"],d=(0,D.forwardRef)(function(n,T){var o=i(),t=n.mode,a=t===void 0?"dark":t,_=n.arrow,m=n.overlayClassName,p=n.getPopupContainer,f=n.align,B=u()(n,L),x=(0,c.getCommonConfig)(),R=x.sparkPrefix,v=x.antPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)(M.Z,s()(s()({},B),{},{arrow:_!=null?_:!1,overlayClassName:b()(m,a==="light"&&"".concat(R,"-tooltip-light")),getPopupContainer:p||function(S){return(0,l.Q)(S,".".concat(v,"-app"))},ref:T}))]})}),O=d},35872:function(N,E,e){e.d(E,{Q:function(){return k},t:function(){return M}});var C=e(97857),s=e.n(C),y=e(27856),u=e.n(y),c=u()(window),l={ADD_ATTR:["target"]};function M(b){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return c.sanitize(b||"",s()(s()({},l),D))}var k=function(D,h){var P=D.closest(h);return P||document.querySelector(h)}}}]);
