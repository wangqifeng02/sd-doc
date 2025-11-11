"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{16978:function(U,f,e){e.r(f);var _=e(21618),o=e(85893);f.default=function(){return(0,o.jsx)(_.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},57027:function(U,f,e){var _=e(97857),o=e.n(_),h=e(52677),c=e.n(h),g=e(13769),d=e.n(g),r=e(40443),y=e(9361),m=e(83622),v=e(55839),x=e(93967),O=e.n(x),C=e(67294),A=e(38654),M=e(33369),l=e(85893),R=["iconSize","loading"],a=(0,C.forwardRef)(function(s,t){var D=y.Z.useToken(),p=s.iconSize,P=s.loading,i=d()(s,R),j=C.useMemo(function(){return i.type==="primaryLess"?"primary":i.type==="textCompact"?"link":i.type},[i.type]),B=(0,C.useMemo)(function(){if(P){if(typeof P=="boolean")return{icon:(0,l.jsx)(r.Z,{spin:!0})};if(c()(P)==="object")return o()({icon:(0,l.jsx)(r.Z,{spin:!0})},P)}return P},[P]),b=C.useMemo(function(){return P&&c()(P)==="object"&&P.icon?P==null?void 0:P.icon:i.iconType?(0,l.jsx)(A.Z,{type:i.iconType,size:p!=null?p:i.size}):i.icon?C.cloneElement(i.icon,{size:p!=null?p:i.size}):null},[i.iconType,i.icon]),L=(0,l.jsx)(m.ZP,o()(o()({},i),{},{loading:B,ref:t,type:j,icon:b,style:o()({fontWeight:500,lineHeight:1},i.style),className:O()(i.className,"spark-button")}));return i.type==="primaryLess"?(0,l.jsx)(v.ZP,{theme:{token:{colorPrimary:D.token.colorText,colorPrimaryHover:D.token.colorTextSecondary,colorPrimaryActive:D.token.colorTextBase}},children:(0,l.jsx)(M.Z,{title:i.tooltipContent,children:L})}):i.type==="textCompact"?(0,l.jsx)(M.Z,{title:i.tooltipContent,children:(0,l.jsx)(m.ZP,o()(o()({},i),{},{ref:t,icon:b,color:"default",variant:"link",style:o()({fontWeight:500,paddingLeft:0,paddingRight:0,lineHeight:1},i.style),className:O()(i.className,"spark-button")}))}):(0,l.jsx)(M.Z,{title:i.tooltipContent,children:L})});f.Z=a},67985:function(U,f,e){e.d(f,{Z:function(){return a}});var _=e(97857),o=e.n(_),h=e(13769),c=e.n(h),g=e(38654),d=e(93865),r=e(57027),y=e(93967),m=e.n(y),v=e(67294),x=e(68400),O=e.n(x),C=e(3067),A,M=(0,C.Z)(A||(A=O()([`
.`,"-icon-button.",`-btn {
  .`,`-btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`])),function(s){return s.sparkPrefix},function(s){return s.antPrefix},function(s){return s.antPrefix}),l=e(85893),R=["className","iconType","bordered"],a=function(s){var t=s.className,D=s.iconType,p=s.bordered,P=p===void 0?!0:p,i=c()(s,R),j=(0,d.getCommonConfig)(),B=j.iconfont,b=M(),L=(0,v.useMemo)(function(){return D?(0,l.jsx)(g.Z,{type:D,size:s.size}):typeof s.icon=="string"?(0,l.jsx)(g.Z,{type:s.icon,size:s.size}):s.icon},[s.icon,D,B]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b,{}),(0,l.jsx)(r.Z,o()(o()({className:m()(t,"".concat(j.sparkPrefix,"-icon-button")),style:{lineHeight:1},type:P?"default":"text"},i),{},{icon:L}))]})}},21773:function(U,f,e){e.d(f,{X:function(){return g}});var _=e(68400),o=e.n(_),h=e(3067),c,g=(0,h.Z)(c||(c=o()([`
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
`])),function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.sparkPrefix},function(d){return d.antPrefix},function(d){return d.antPrefix})},38654:function(U,f,e){e.d(f,{Z:function(){return R}});var _=e(9783),o=e.n(_),h=e(97857),c=e.n(h),g=e(13769),d=e.n(g),r=e(93865),y=e(27356),m=e(93967),v=e.n(m),x=e(67294),O=e(21773),C=e(85893),A=["type","className","isCursorPointer","spin","size"],M;function l(a){return M||(M=(0,y.Z)({scriptUrl:a})),M}function R(a){var s=a.type,t=a.className,D=t===void 0?"":t,p=a.isCursorPointer,P=p===void 0?!1:p,i=a.spin,j=a.size,B=d()(a,A),b=(0,r.getCommonConfig)(),L=b.sparkPrefix,z=b.iconfont,K=(0,O.X)();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(K,{}),x.createElement(l(z),c()({type:s,style:c()({fontSize:j},a.style),className:v()(P&&"".concat(L,"-cursor-pointer"),D,"".concat(L,"-icon"),o()({},"".concat(L,"-icon-spin"),i))},B))]})}},33369:function(U,f,e){e.d(f,{Z:function(){return s}});var _=e(97857),o=e.n(_),h=e(13769),c=e.n(h),g=e(93865),d=e(35872),r=e(83062),y=e(93967),m=e.n(y),v=e(67294),x=e(68400),O=e.n(x),C=e(3067),A,M=(0,C.Z)(A||(A=O()([`
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
`])),function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.sparkPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix},function(t){return t.antPrefix}),l=e(85893),R=["mode","arrow","overlayClassName","getPopupContainer","align"],a=(0,v.forwardRef)(function(t,D){var p=M(),P=t.mode,i=P===void 0?"dark":P,j=t.arrow,B=t.overlayClassName,b=t.getPopupContainer,L=t.align,z=c()(t,R),K=(0,g.getCommonConfig)(),n=K.sparkPrefix,u=K.antPrefix;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(r.Z,o()(o()({},z),{},{arrow:j!=null?j:!1,overlayClassName:m()(B,i==="light"&&"".concat(n,"-tooltip-light")),getPopupContainer:b||function(F){return(0,d.Q)(F,".".concat(u,"-app"))},ref:D}))]})}),s=a},21618:function(U,f,e){e.d(f,{Z:function(){return K}});var _=e(97857),o=e.n(_),h=e(5574),c=e.n(h),g=e(13769),d=e.n(g),r=e(67294),y=e(93967),m=e.n(y),v=e(67985),x=e(38703),O=e(63701),C=e(62321),A=e(20399),M=e(80162),l=e(32485),R=e(93865),a=e(85893),s=function(u){var F=Math.floor(u/60),Z=Math.floor(u%60);return"".concat(F.toString().padStart(2,"0"),":").concat(Z.toString().padStart(2,"0"))},t=function(u){var F=u.className,Z=u.isPlaying,H=u.onPlayPause,te=u.onFullscreen,$=u.onProgressClick,X=u.enableAudio,Q=X===void 0?!1:X,J=u.muted,k=J===void 0?!0:J,re=u.onMute,ae=(0,R.getCommonConfig)(),W=ae.sparkPrefix,oe=(0,r.useMemo)(function(){return s(u.currentTime||0)},[u.currentTime]),V=(0,r.useMemo)(function(){return s(u.duration||0)},[u.duration]),ie=(0,r.useMemo)(function(){return Math.min((u.currentTime||0)/(u.duration||.01)*100,100)},[u.currentTime,u.duration]),Y=function(G){if(!(!$||!u.duration)){var w=G.currentTarget.getBoundingClientRect(),q=G.clientX-w.left,I=w.width,N=q/I,se=N*u.duration,ee=Math.max(0,Math.min(se,u.duration));$(ee)}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"".concat(W,"-video-player-controller ").concat(F||""),children:[(0,a.jsx)(v.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:Z?(0,a.jsx)(O.Z,{}):(0,a.jsx)(C.Z,{}),onClick:H}),(0,a.jsx)(v.Z,{bordered:!1,size:"small",shape:"default",disabled:!Q,icon:Q&&k?(0,a.jsx)(A.Z,{}):(0,a.jsx)(M.Z,{}),onClick:re}),(0,a.jsx)("span",{className:"".concat(W,"-video-time-text"),children:oe}),(0,a.jsx)("div",{className:"".concat(W,"-video-progress-container"),onClick:Y,children:(0,a.jsx)(x.Z,{className:"".concat(W,"-video-progress-bar"),percent:ie,showInfo:!1})}),(0,a.jsx)("span",{className:"".concat(W,"-video-time-text"),children:V}),(0,a.jsx)(v.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,a.jsx)(l.Z,{}),onClick:te})]})})},D=t,p=e(76526),P=e(68400),i=e.n(P),j=e(3067),B,b=(0,j.Z)(B||(B=i()([`
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
`])),function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.sparkPrefix},function(n){return n.sparkPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix},function(n){return n.antPrefix}),L=["controls","mouseEnterAutoPlay","children","className","style"],z=(0,r.forwardRef)(function(n,u){var F=n.controls,Z=n.mouseEnterAutoPlay,H=Z===void 0?!1:Z,te=n.children,$=n.className,X=n.style,Q=d()(n,L),J=(0,R.getCommonConfig)(),k=J.sparkPrefix,re=b(),ae=(0,r.useState)(0),W=c()(ae,2),oe=W[0],V=W[1],ie=(0,r.useState)(0),Y=c()(ie,2),de=Y[0],G=Y[1],w=(0,r.useState)(!1),q=c()(w,2),I=q[0],N=q[1],se=(0,p.Z)(n,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),ee=c()(se,2),ue=ee[0],fe=ee[1],_e=(0,r.useState)(!1),ce=c()(_e,2),me=ce[0],le=ce[1],E=(0,r.useRef)(null),ne=(0,r.useRef)(!1),ve=function(S){E.current=S,u&&(typeof u=="function"?u(S):u.current=S)};(0,r.useEffect)(function(){var T;return I&&(T=setInterval(function(){E.current&&V(E.current.currentTime)},16)),function(){T&&clearInterval(T)}},[I]);var ge=function(){return window.videoRef=E.current,E.current?"mozHasAudio"in E.current?(le(E.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in E.current?(le(E.current.webkitAudioDecodedByteCount>0),!0):(le(!1),!1):!1},Pe=function(){E.current&&G(E.current.duration)},pe=function(){E.current&&(I?E.current.pause():E.current.play(),N(!I))},Ee=function(){N(!0)},xe=function(){N(!1)},he=function(){E.current&&E.current.requestFullscreen&&E.current.requestFullscreen()},Ce=function(){var S;N(!1),V((S=E.current)===null||S===void 0?void 0:S.duration)},ye=function(){H&&!ne.current&&(I||(E.current.play(),ne.current=!0))},Me=function(){H&&ne.current&&(ne.current=!1)},je=function(S){E.current&&(E.current.currentTime=S,V(S))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(re,{}),(0,a.jsx)("div",{className:m()("".concat(k,"-video-container"),$),style:X,children:(0,a.jsxs)("div",{className:"".concat(k,"-video-content"),onMouseEnter:ye,onMouseLeave:Me,children:[(0,a.jsx)("video",o()(o()({ref:ve},Q),{},{muted:ue,className:"".concat(k,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:Pe,onCanPlayThrough:ge,onPlay:Ee,onPause:xe,onEnded:Ce})),F&&(0,a.jsx)(D,{className:"".concat(k,"-video-controller-wrapper"),isPlaying:I,currentTime:oe,duration:de,enableAudio:me,muted:ue,onMute:function(){return fe(!ue)},onPlayPause:pe,onFullscreen:he,onProgressClick:je}),te]})})]})}),K=z},35872:function(U,f,e){e.d(f,{Q:function(){return y},t:function(){return r}});var _=e(97857),o=e.n(_),h=e(27856),c=e.n(h),g=c()(window),d={ADD_ATTR:["target"]};function r(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return g.sanitize(m||"",o()(o()({},d),v))}var y=function(v,x){var O=v.closest(x);return O||document.querySelector(x)}},76526:function(U,f,e){e.d(f,{Z:function(){return y}});var _=e(97582),o=e(67294),h=e(92770),c=e(22638),g=function(){var m=(0,_.CR)((0,o.useState)({}),2),v=m[1];return(0,o.useCallback)(function(){return v({})},[])},d=g;function r(m,v){v===void 0&&(v={});var x=m!=null?m:{},O=v.defaultValue,C=v.defaultValuePropName,A=C===void 0?"defaultValue":C,M=v.valuePropName,l=M===void 0?"value":M,R=v.trigger,a=R===void 0?"onChange":R,s=x[l],t=Object.prototype.hasOwnProperty.call(x,l),D=(0,o.useMemo)(function(){return t?s:Object.prototype.hasOwnProperty.call(x,A)?x[A]:O},[]),p=(0,o.useRef)(D);t&&(p.current=s);var P=d();function i(j){for(var B=[],b=1;b<arguments.length;b++)B[b-1]=arguments[b];var L=(0,h.mf)(j)?j(p.current):j;t||(p.current=L,P()),x[a]&&x[a].apply(x,(0,_.ev)([L],(0,_.CR)(B),!1))}return[p.current,(0,c.Z)(i)]}var y=r},22638:function(U,f,e){var _=e(67294),o=e(92770),h=e(31663);function c(g){h.Z&&((0,o.mf)(g)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof g)));var d=(0,_.useRef)(g);d.current=(0,_.useMemo)(function(){return g},[g]);var r=(0,_.useRef)();return r.current||(r.current=function(){for(var y=[],m=0;m<arguments.length;m++)y[m]=arguments[m];return d.current.apply(this,y)}),r.current}f.Z=c},92770:function(U,f,e){e.d(f,{mf:function(){return o}});var _=function(r){return r!==null&&typeof r=="object"},o=function(r){return typeof r=="function"},h=function(r){return typeof r=="string"},c=function(r){return typeof r=="boolean"},g=function(r){return typeof r=="number"},d=function(r){return typeof r=="undefined"}},31663:function(U,f){var e=!1;f.Z=e}}]);
