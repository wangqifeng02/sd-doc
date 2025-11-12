"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{16978:function(k,p,e){e.r(p);var g=e(21618),s=e(85893);p.default=function(){return(0,s.jsx)(g.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},57027:function(k,p,e){var g=e(97857),s=e.n(g),D=e(52677),c=e.n(D),h=e(13769),_=e.n(h),f=e(40443),B=e(9361),C=e(83622),E=e(55839),T=e(93967),y=e.n(T),x=e(67294),L=e(38654),j=e(33369),l=e(85893),o=["iconSize","loading"],n=(0,x.forwardRef)(function(a,r){var m=B.Z.useToken(),P=a.iconSize,d=a.loading,i=_()(a,o),M=x.useMemo(function(){return i.type==="primaryLess"?"primary":i.type==="textCompact"?"link":i.type},[i.type]),R=(0,x.useMemo)(function(){if(d){if(typeof d=="boolean")return{icon:(0,l.jsx)(f.Z,{spin:!0})};if(c()(d)==="object")return s()({icon:(0,l.jsx)(f.Z,{spin:!0})},d)}return d},[d]),A=x.useMemo(function(){return d&&c()(d)==="object"&&d.icon?d==null?void 0:d.icon:i.iconType?(0,l.jsx)(L.Z,{type:i.iconType,size:P!=null?P:i.size}):i.icon?x.cloneElement(i.icon,{size:P!=null?P:i.size}):null},[i.iconType,i.icon]),b=(0,l.jsx)(C.ZP,s()(s()({},i),{},{loading:R,ref:r,type:M,icon:A,style:s()({fontWeight:500,lineHeight:1},i.style),className:y()(i.className,"spark-button")}));return i.type==="primaryLess"?(0,l.jsx)(E.ZP,{theme:{token:{colorPrimary:m.token.colorText,colorPrimaryHover:m.token.colorTextSecondary,colorPrimaryActive:m.token.colorTextBase}},children:(0,l.jsx)(j.Z,{title:i.tooltipContent,children:b})}):i.type==="textCompact"?(0,l.jsx)(j.Z,{title:i.tooltipContent,children:(0,l.jsx)(C.ZP,s()(s()({},i),{},{ref:r,icon:A,color:"default",variant:"link",style:s()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},i.style),className:y()(i.className,"spark-button")}))}):(0,l.jsx)(j.Z,{title:i.tooltipContent,children:b})});p.Z=n},67985:function(k,p,e){e.d(p,{Z:function(){return n}});var g=e(97857),s=e.n(g),D=e(13769),c=e.n(D),h=e(38654),_=e(93865),f=e(57027),B=e(93967),C=e.n(B),E=e(67294),T=e(68400),y=e.n(T),x=e(3067),L,j=(0,x.Z)(L||(L=y()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(a){return a.sparkPrefix},function(a){return a.antPrefix},function(a){return a.antPrefix}),l=e(85893),o=["className","iconType","bordered"],n=function(a){var r=a.className,m=a.iconType,P=a.bordered,d=P===void 0?!0:P,i=c()(a,o),M=(0,_.getCommonConfig)(),R=M.iconfont,A=j(),b=(0,E.useMemo)(function(){return m?(0,l.jsx)(h.Z,{type:m,size:a.size}):typeof a.icon=="string"?(0,l.jsx)(h.Z,{type:a.icon,size:a.size}):a.icon},[a.icon,m,R]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A,{}),(0,l.jsx)(f.Z,s()(s()({className:C()(r,"".concat(M.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:d?"default":"text"},i),{},{icon:b}))]})}},21773:function(k,p,e){e.d(p,{X:function(){return h}});var g=e(68400),s=e.n(g),D=e(3067),c,h=(0,D.Z)(c||(c=s()([`
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
`])),function(_){return _.sparkPrefix},function(_){return _.sparkPrefix},function(_){return _.sparkPrefix},function(_){return _.antPrefix},function(_){return _.antPrefix})},38654:function(k,p,e){e.d(p,{Z:function(){return o}});var g=e(9783),s=e.n(g),D=e(97857),c=e.n(D),h=e(13769),_=e.n(h),f=e(93865),B=e(27356),C=e(93967),E=e.n(C),T=e(67294),y=e(21773),x=e(85893),L=["type","className","isCursorPointer","spin","size"],j;function l(n){return j||(j=(0,B.Z)({scriptUrl:n})),j}function o(n){var a=n.type,r=n.className,m=r===void 0?"":r,P=n.isCursorPointer,d=P===void 0?!1:P,i=n.spin,M=n.size,R=_()(n,L),A=(0,f.getCommonConfig)(),b=A.sparkPrefix,Z=A.iconfont,S=(0,y.X)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S,{}),T.createElement(l(Z),c()({type:a,style:c()({fontSize:M},n.style),className:E()(d&&"".concat(b,"-cursor-pointer"),m,"".concat(b,"-icon"),s()({},"".concat(b,"-icon-spin"),i))},R))]})}},33369:function(k,p,e){e.d(p,{Z:function(){return a}});var g=e(97857),s=e.n(g),D=e(13769),c=e.n(D),h=e(93865),_=e(35872),f=e(83062),B=e(93967),C=e.n(B),E=e(67294),T=e(68400),y=e.n(T),x=e(3067),L,j=(0,x.Z)(L||(L=y()([`
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
`])),function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.sparkPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix},function(r){return r.antPrefix}),l=e(85893),o=["mode","arrow","overlayClassName","getPopupContainer","align"],n=(0,E.forwardRef)(function(r,m){var P=j(),d=r.mode,i=d===void 0?"dark":d,M=r.arrow,R=r.overlayClassName,A=r.getPopupContainer,b=r.align,Z=c()(r,o),S=(0,h.getCommonConfig)(),t=S.sparkPrefix,u=S.antPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(P,{}),(0,l.jsx)(f.Z,s()(s()({},Z),{},{arrow:M!=null?M:!1,overlayClassName:C()(R,i==="light"&&"".concat(t,"-tooltip-light")),getPopupContainer:A||function(U){return(0,_.Q)(U,".".concat(u,"-app"))},ref:m}))]})}),a=n},21618:function(k,p,e){e.d(p,{Z:function(){return S}});var g=e(97857),s=e.n(g),D=e(5574),c=e.n(D),h=e(13769),_=e.n(h),f=e(67294),B=e(93967),C=e.n(B),E=e(67985),T=e(38703),y=e(63701),x=e(62321),L=e(20399),j=e(80162),l=e(32485),o=e(93865),n=e(85893),a=function(u){var U=Math.floor(u/60),I=Math.floor(u%60);return"".concat(U.toString().padStart(2,"0"),":").concat(I.toString().padStart(2,"0"))},r=function(u){var U=u.className,I=u.isPlaying,F=u.onPlayPause,z=u.onFullscreen,X=u.onProgressClick,Q=u.enableAudio,J=Q===void 0?!1:Q,Y=u.muted,V=Y===void 0?!0:Y,re=u.onMute,ae=(0,o.getCommonConfig)(),K=ae.sparkPrefix,oe=(0,f.useMemo)(function(){return a(u.currentTime||0)},[u.currentTime]),$=(0,f.useMemo)(function(){return a(u.duration||0)},[u.duration]),ie=(0,f.useMemo)(function(){return Math.min((u.currentTime||0)/(u.duration||.01)*100,100)},[u.currentTime,u.duration]),G=function(w){if(!(!X||!u.duration)){var q=w.currentTarget.getBoundingClientRect(),ee=w.clientX-q.left,N=q.width,H=ee/N,se=H*u.duration,ne=Math.max(0,Math.min(se,u.duration));X(ne)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(K,"-video-player-controller ").concat(U||""),children:[(0,n.jsx)(E.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:I?(0,n.jsx)(y.Z,{}):(0,n.jsx)(x.Z,{}),onClick:F}),(0,n.jsx)(E.Z,{bordered:!1,size:"small",shape:"default",disabled:!J,icon:J&&V?(0,n.jsx)(L.Z,{}):(0,n.jsx)(j.Z,{}),onClick:re}),(0,n.jsx)("span",{className:"".concat(K,"-video-time-text"),children:oe}),(0,n.jsx)("div",{className:"".concat(K,"-video-progress-container"),onClick:G,children:(0,n.jsx)(T.Z,{className:"".concat(K,"-video-progress-bar"),percent:ie,showInfo:!1})}),(0,n.jsx)("span",{className:"".concat(K,"-video-time-text"),children:$}),(0,n.jsx)(E.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,n.jsx)(l.Z,{}),onClick:z})]})})},m=r,P=e(35106),d=e(68400),i=e.n(d),M=e(3067),R,A=(0,M.Z)(R||(R=i()([`
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
`])),function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),b=["controls","mouseEnterAutoPlay","children","className","style"],Z=(0,f.forwardRef)(function(t,u){var U=t.controls,I=t.mouseEnterAutoPlay,F=I===void 0?!1:I,z=t.children,X=t.className,Q=t.style,J=_()(t,b),Y=(0,o.getCommonConfig)(),V=Y.sparkPrefix,re=A(),ae=(0,f.useState)(0),K=c()(ae,2),oe=K[0],$=K[1],ie=(0,f.useState)(0),G=c()(ie,2),de=G[0],w=G[1],q=(0,f.useState)(!1),ee=c()(q,2),N=ee[0],H=ee[1],se=(0,P.Z)(t,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),ne=c()(se,2),ue=ne[0],fe=ne[1],_e=(0,f.useState)(!1),ce=c()(_e,2),me=ce[0],le=ce[1],v=(0,f.useRef)(null),te=(0,f.useRef)(!1),ve=function(W){v.current=W,u&&(typeof u=="function"?u(W):u.current=W)};(0,f.useEffect)(function(){var O;return N&&(O=setInterval(function(){v.current&&$(v.current.currentTime)},16)),function(){O&&clearInterval(O)}},[N]);var ge=function(){return window.videoRef=v.current,v.current?"mozHasAudio"in v.current?(le(v.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in v.current?(le(v.current.webkitAudioDecodedByteCount>0),!0):(le(!1),!1):!1},Pe=function(){v.current&&w(v.current.duration)},pe=function(){v.current&&(N?v.current.pause():v.current.play(),H(!N))},Ee=function(){H(!0)},xe=function(){H(!1)},he=function(){v.current&&v.current.requestFullscreen&&v.current.requestFullscreen()},Ce=function(){var W;H(!1),$((W=v.current)===null||W===void 0?void 0:W.duration)},ye=function(){F&&!te.current&&(N||(v.current.play(),te.current=!0))},je=function(){F&&te.current&&(te.current=!1)},Me=function(W){v.current&&(v.current.currentTime=W,$(W))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(re,{}),(0,n.jsx)("div",{className:C()("".concat(V,"-video-container"),X),style:Q,children:(0,n.jsxs)("div",{className:"".concat(V,"-video-content"),onMouseEnter:ye,onMouseLeave:je,children:[(0,n.jsx)("video",s()(s()({ref:ve},J),{},{muted:ue,className:"".concat(V,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:Pe,onCanPlayThrough:ge,onPlay:Ee,onPause:xe,onEnded:Ce})),U&&(0,n.jsx)(m,{className:"".concat(V,"-video-controller-wrapper"),isPlaying:N,currentTime:oe,duration:de,enableAudio:me,muted:ue,onMute:function(){return fe(!ue)},onPlayPause:pe,onFullscreen:he,onProgressClick:Me}),z]})})]})}),S=Z},35872:function(k,p,e){e.d(p,{Q:function(){return B},t:function(){return f}});var g=e(97857),s=e.n(g),D=e(27856),c=e.n(D),h=c()(window),_={ADD_ATTR:["target"]};function f(C){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return h.sanitize(C||"",s()(s()({},_),E))}var B=function(E,T){var y=E.closest(T);return y||document.querySelector(T)}},35106:function(k,p,e){e.d(p,{Z:function(){return l}});var g=e(97582),s=e(67294),D=function(o){return o!==null&&typeof o=="object"},c=function(o){return typeof o=="function"},h=function(o){return typeof o=="string"},_=function(o){return typeof o=="boolean"},f=function(o){return typeof o=="number"},B=function(o){return typeof o=="undefined"},C=!1,E=C;function T(o){E&&(c(o)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof o)));var n=(0,s.useRef)(o);n.current=(0,s.useMemo)(function(){return o},[o]);var a=(0,s.useRef)();return a.current||(a.current=function(){for(var r=[],m=0;m<arguments.length;m++)r[m]=arguments[m];return n.current.apply(this,r)}),a.current}var y=T,x=function(){var o=(0,g.CR)((0,s.useState)({}),2),n=o[1];return(0,s.useCallback)(function(){return n({})},[])},L=x;function j(o,n){n===void 0&&(n={});var a=o!=null?o:{},r=n.defaultValue,m=n.defaultValuePropName,P=m===void 0?"defaultValue":m,d=n.valuePropName,i=d===void 0?"value":d,M=n.trigger,R=M===void 0?"onChange":M,A=a[i],b=Object.prototype.hasOwnProperty.call(a,i),Z=(0,s.useMemo)(function(){return b?A:Object.prototype.hasOwnProperty.call(a,P)?a[P]:r},[]),S=(0,s.useRef)(Z);b&&(S.current=A);var t=L();function u(U){for(var I=[],F=1;F<arguments.length;F++)I[F-1]=arguments[F];var z=c(U)?U(S.current):U;b||(S.current=z,t()),a[R]&&a[R].apply(a,(0,g.ev)([z],(0,g.CR)(I),!1))}return[S.current,y(u)]}var l=j}}]);
