"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[4949],{87382:function(T,u,n){n.r(u);var m=n(88886),_=n(9361),f=n(85893),g=function(){var d=_.Z.useToken(),l=d.token;return(0,f.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:l.colorBgBase},children:(0,f.jsx)(m.Z,{tip:(0,f.jsx)("span",{children:"No progress"})})})};u.default=g},11597:function(T,u,n){n.r(u);var m=n(5574),_=n.n(m),f=n(88886),g=n(57027),E=n(38703),d=n(9361),l=n(67294),a=n(85893),j=function(){var h=(0,l.useState)(0),P=_()(h,2),t=P[0],C=P[1],e=(0,l.useState)(!0),r=_()(e,2),O=r[0],c=r[1],p=(0,l.useRef)(null),s=d.Z.useToken(),x=s.token;return(0,l.useEffect)(function(){return function(){clearInterval(p.current),p.current=null}},[]),(0,l.useEffect)(function(){O?p.current=setInterval(function(){C(function(v){return v>=100?0:v+1})},100):(clearInterval(p.current),p.current=null)},[O]),(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:x.colorBgBase},children:(0,a.jsx)(f.Z,{spinning:O,tip:O?(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:["File uploading",(0,a.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:t}),"% ..."]}),(0,a.jsx)(g.Z,{type:"link",onClick:function(){return c(!1)},children:"Cancel"}),(0,a.jsx)(E.Z,{percent:t,showInfo:!1})]}):void 0})})};u.default=j},73845:function(T,u,n){n.r(u);var m=n(5574),_=n.n(m),f=n(88886),g=n(57027),E=n(38703),d=n(9361),l=n(67294),a=n(85893),j=function(){var h=(0,l.useState)(0),P=_()(h,2),t=P[0],C=P[1],e=d.Z.useToken(),r=e.token;return(0,l.useEffect)(function(){var O=setInterval(function(){C(function(c){return c>=100?0:c+1})},100);return function(){return clearInterval(O)}},[]),(0,a.jsx)(f.Z,{tip:(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:["File uploading"," ",(0,a.jsx)("span",{style:{display:"inline-block",width:"24px"},children:t}),"% ..."]}),(0,a.jsx)(g.Z,{type:"link",children:"Cancel"}),(0,a.jsx)(E.Z,{percent:t,showInfo:!1})]}),children:(0,a.jsx)("div",{style:{width:"560px",height:"240px",background:"repeating-linear-gradient(135deg, ".concat(r.colorBorderSecondary," 0, ").concat(r.colorBorderSecondary," 1px, ").concat(r.colorBgBase," 1px, ").concat(r.colorBgBase," 15px)"),backgroundSize:"auto",backgroundPosition:"top left",backgroundRepeat:"no-repeat",overflow:"hidden",borderRadius:"6px",border:"1px solid ".concat(r.colorBorderSecondary)}})})};u.default=j},80786:function(T,u,n){n.r(u);var m=n(5574),_=n.n(m),f=n(88886),g=n(57027),E=n(38703),d=n(9361),l=n(67294),a=n(85893),j=`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;if(typeof document!="undefined"){var D=document.createElement("style");D.textContent=j,document.head.appendChild(D)}var h=function(){var t=(0,l.useState)(0),C=_()(t,2),e=C[0],r=C[1],O=(0,l.useState)(!0),c=_()(O,2),p=c[0],s=c[1],x=(0,l.useRef)(null),v=d.Z.useToken(),o=v.token;return(0,l.useEffect)(function(){return function(){clearInterval(x.current),x.current=null}},[]),(0,l.useEffect)(function(){p?x.current=setInterval(function(){r(function(i){return i>=100?0:i+1})},100):(clearInterval(x.current),x.current=null)},[p]),(0,a.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:o.colorBgBase},children:(0,a.jsx)(f.Z,{indicator:(0,a.jsx)("img",{src:"https://img.alicdn.com/imgextra/i4/O1CN01wnPSEe1fK6CJxV4Xa_!!6000000003987-55-tps-40-40.svg",style:{animation:"spin 1s linear infinite"}}),spinning:p,tip:p?(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{children:["File uploading",(0,a.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:e}),"% ..."]}),(0,a.jsx)(g.Z,{type:"link",onClick:function(){return s(!1)},children:"Cancel"}),(0,a.jsx)(E.Z,{percent:e,showInfo:!1})]}):void 0})})};u.default=h},57027:function(T,u,n){var m=n(97857),_=n.n(m),f=n(52677),g=n.n(f),E=n(13769),d=n.n(E),l=n(40443),a=n(9361),j=n(83622),D=n(55839),h=n(93967),P=n.n(h),t=n(67294),C=n(38654),e=n(33369),r=n(85893),O=["iconSize","loading"],c=(0,t.forwardRef)(function(p,s){var x=a.Z.useToken(),v=p.iconSize,o=p.loading,i=d()(p,O),M=t.useMemo(function(){return i.type==="primaryLess"?"primary":i.type==="textCompact"?"link":i.type},[i.type]),U=(0,t.useMemo)(function(){if(o){if(typeof o=="boolean")return{icon:(0,r.jsx)(l.Z,{spin:!0})};if(g()(o)==="object")return _()({icon:(0,r.jsx)(l.Z,{spin:!0})},o)}return o},[o]),y=t.useMemo(function(){return o&&g()(o)==="object"&&o.icon?o==null?void 0:o.icon:i.iconType?(0,r.jsx)(C.Z,{type:i.iconType,size:v!=null?v:i.size}):i.icon?t.cloneElement(i.icon,{size:v!=null?v:i.size}):null},[i.iconType,i.icon]),b=(0,r.jsx)(j.ZP,_()(_()({},i),{},{loading:U,ref:s,type:M,icon:y,style:_()({fontWeight:500,lineHeight:1},i.style),className:P()(i.className,"spark-button")}));return i.type==="primaryLess"?(0,r.jsx)(D.ZP,{theme:{token:{colorPrimary:x.token.colorText,colorPrimaryHover:x.token.colorTextSecondary,colorPrimaryActive:x.token.colorTextBase}},children:(0,r.jsx)(e.Z,{title:i.tooltipContent,children:b})}):i.type==="textCompact"?(0,r.jsx)(e.Z,{title:i.tooltipContent,children:(0,r.jsx)(j.ZP,_()(_()({},i),{},{ref:s,icon:y,color:"default",variant:"link",style:_()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},i.style),className:P()(i.className,"spark-button")}))}):(0,r.jsx)(e.Z,{title:i.tooltipContent,children:b})});u.Z=c},21773:function(T,u,n){n.d(u,{X:function(){return E}});var m=n(68400),_=n.n(m),f=n(3067),g,E=(0,f.Z)(g||(g=_()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix})},38654:function(T,u,n){n.d(u,{Z:function(){return O}});var m=n(9783),_=n.n(m),f=n(97857),g=n.n(f),E=n(13769),d=n.n(E),l=n(93865),a=n(27356),j=n(93967),D=n.n(j),h=n(67294),P=n(21773),t=n(85893),C=["type","className","isCursorPointer","spin","size"],e;function r(c){return e||(e=(0,a.Z)({scriptUrl:c})),e}function O(c){var p=c.type,s=c.className,x=s===void 0?"":s,v=c.isCursorPointer,o=v===void 0?!1:v,i=c.spin,M=c.size,U=d()(c,C),y=(0,l.getCommonConfig)(),b=y.sparkPrefix,I=y.iconfont,A=(0,P.X)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A,{}),h.createElement(r(I),g()({type:p,style:g()({fontSize:M},c.style),className:D()(o&&"".concat(b,"-cursor-pointer"),x,"".concat(b,"-icon"),_()({},"".concat(b,"-icon-spin"),i))},U))]})}},88886:function(T,u,n){n.d(u,{Z:function(){return C}});var m=n(9783),_=n.n(m),f=n(93865),g=n(9361),E=n(38703),d=n(93967),l=n.n(d),a=n(68400),j=n.n(a),D=n(3067),h,P=(0,D.Z)(h||(h=j()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix}),t=n(85893),C=function(e){var r=e.indicator,O=e.spinning,c=O===void 0?!0:O,p=e.children,s=e.style,x=e.className,v=(0,f.getCommonConfig)(),o=v.sparkPrefix,i=g.Z.useToken(),M=P(),U=(0,t.jsxs)("svg",{className:"".concat(o,"-default-indicator"),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",version:"1.1",width:"40",height:"40",viewBox:"0 0 40 40",children:[(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"master_svg0_25_4868/25_4776",children:(0,t.jsx)("rect",{x:"0",y:"0",width:"40",height:"40",rx:"20"})})}),(0,t.jsxs)("g",{clipPath:"url(#master_svg0_25_4868/25_4776)",children:[(0,t.jsx)("g",{children:(0,t.jsx)("ellipse",{cx:"20",cy:"20",rx:"14",ry:"14",fillOpacity:"0",strokeOpacity:"1",stroke:i.token.colorPrimaryBg,fill:"none",strokeWidth:"4"})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{d:"M34.3689,27.038Q31.4537,32.9898,25.1838,35.137Q18.913800000000002,37.2842,12.96201,34.3689Q7.0102,31.4537,4.863009,25.1838Q2.71582,18.913800000000002,5.63105,12.96201Q6.68107,10.81826,8.3111,9.07436Q8.37819,9.00258,8.45199,8.93773Q8.5258,8.872869999999999,8.60561,8.81556Q8.685410000000001,8.75825,8.77045,8.70903Q8.85549,8.65982,8.94495,8.61918Q9.0344,8.57854,9.127410000000001,8.546859999999999Q9.22042,8.51518,9.31608,8.49278Q9.41175,8.470369999999999,9.50915,8.45745Q9.60655,8.44452,9.70475,8.44121Q9.80294,8.43789,9.90099,8.44422Q9.99904,8.45055,10.096,8.46645Q10.19296,8.48236,10.28789,8.50769Q10.382819999999999,8.53303,10.47481,8.567540000000001Q10.5668,8.60206,10.654969999999999,8.645430000000001Q10.74313,8.6888,10.82662,8.7406Q10.91011,8.7924,10.98812,8.852129999999999Q11.066130000000001,8.91186,11.13791,8.97896Q11.20969,9.046050000000001,11.27455,9.11985Q11.33941,9.193660000000001,11.39672,9.27347Q11.45403,9.35327,11.50324,9.438320000000001Q11.55246,9.52336,11.5931,9.61281Q11.63374,9.70227,11.665420000000001,9.79527Q11.69709,9.88828,11.7195,9.98394Q11.74191,10.079609999999999,11.75483,10.17701Q11.767759999999999,10.27441,11.77107,10.37261Q11.77439,10.4708,11.76806,10.568850000000001Q11.76173,10.6669,11.74582,10.763860000000001Q11.72992,10.86082,11.70458,10.95575Q11.67925,11.05068,11.64473,11.142669999999999Q11.61022,11.23466,11.566849999999999,11.32283Q11.52348,11.41099,11.47168,11.49448Q11.41988,11.57797,11.36015,11.65598Q11.300419999999999,11.73399,11.233319999999999,11.805769999999999Q10.0108,13.1137,9.22329,14.7215Q7.03687,19.1854,8.64726,23.8878Q10.25765,28.5903,14.7215,30.7767Q19.1854,32.9631,23.8878,31.3527Q28.5903,29.7423,30.7767,25.2785Q30.8199,25.1903,30.8716,25.1067Q30.9232,25.0231,30.9829,24.945Q31.0425,24.8669,31.1094,24.795Q31.1764,24.7231,31.2501,24.6581Q31.3238,24.5931,31.4035,24.5357Q31.4832,24.4782,31.5682,24.4289Q31.6531,24.3795,31.7425,24.3387Q31.8319,24.2979,31.9249,24.2661Q32.0178,24.2343,32.1134,24.2117Q32.2091,24.1891,32.3064,24.1761Q32.403800000000004,24.163,32.501999999999995,24.1595Q32.6002,24.156,32.6983,24.1622Q32.7963,24.1683,32.893299999999996,24.1841Q32.990300000000005,24.1998,33.085300000000004,24.225Q33.1802,24.2502,33.2723,24.2845Q33.3643,24.3189,33.452600000000004,24.3621Q33.540800000000004,24.4053,33.6244,24.457Q33.708,24.5087,33.786100000000005,24.5683Q33.8642,24.6279,33.936099999999996,24.6948Q34.007999999999996,24.7618,34.073,24.8355Q34.1379,24.9092,34.1954,24.9889Q34.2528,25.0686,34.3022,25.1536Q34.3515,25.2385,34.3923,25.3279Q34.433099999999996,25.4173,34.465,25.5103Q34.4968,25.6032,34.519400000000005,25.6988Q34.5419,25.7945,34.555,25.8919Q34.5681,25.9892,34.571600000000004,26.0874Q34.5751,26.1856,34.5689,26.2837Q34.5627,26.3817,34.547,26.4787Q34.5312,26.5757,34.5061,26.6707Q34.4809,26.7657,34.4465,26.8577Q34.4122,26.9498,34.3689,27.038Z",fill:i.token.colorPrimary,fillOpacity:"1"})})]})]}),y=e.tip||e.showProgress&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{children:["loading",e.percent!==void 0&&e.percent!==null&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{display:"inline-block",width:"24px",textAlign:"center"},children:e.percent}),"%"]})]}),(0,t.jsx)(E.Z,{percent:e.percent,showInfo:!1})]})||null;return p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M,{}),(0,t.jsxs)("div",{className:l()("".concat(o,"-spinner-overlay"),x),style:s,children:[(0,t.jsx)("div",{className:l()("".concat(o,"-spinner-content"),_()({},"".concat(o,"-spinning"),c)),children:p}),c&&(0,t.jsxs)("div",{className:"".concat(o,"-spinner"),children:[(0,t.jsx)("div",{className:"".concat(o,"-indicator"),children:r||U}),(0,t.jsx)("div",{className:"".concat(o,"-title"),children:y})]})]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M,{}),(0,t.jsx)("div",{className:l()("".concat(o,"-spinner"),x),style:s,children:c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(o,"-indicator"),children:r||U}),(0,t.jsx)("div",{className:"".concat(o,"-title"),children:y})]})})]})}},33369:function(T,u,n){n.d(u,{Z:function(){return p}});var m=n(97857),_=n.n(m),f=n(13769),g=n.n(f),E=n(93865),d=n(35872),l=n(83062),a=n(93967),j=n.n(a),D=n(67294),h=n(68400),P=n.n(h),t=n(3067),C,e=(0,t.Z)(C||(C=P()([`
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
`])),function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),r=n(85893),O=["mode","arrow","overlayClassName","getPopupContainer","align"],c=(0,D.forwardRef)(function(s,x){var v=e(),o=s.mode,i=o===void 0?"dark":o,M=s.arrow,U=s.overlayClassName,y=s.getPopupContainer,b=s.align,I=g()(s,O),A=(0,E.getCommonConfig)(),B=A.sparkPrefix,Q=A.antPrefix;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(l.Z,_()(_()({},I),{},{arrow:M!=null?M:!1,overlayClassName:j()(U,i==="light"&&"".concat(B,"-tooltip-light")),getPopupContainer:y||function(k){return(0,d.Q)(k,".".concat(Q,"-app"))},ref:x}))]})}),p=c},35872:function(T,u,n){n.d(u,{Q:function(){return a},t:function(){return l}});var m=n(97857),_=n.n(m),f=n(27856),g=n.n(f),E=g()(window),d={ADD_ATTR:["target"]};function l(j){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return E.sanitize(j||"",_()(_()({},d),D))}var a=function(D,h){var P=D.closest(h);return P||document.querySelector(h)}}}]);
