"use strict";(self.webpackChunk_agentscope_ai_design=self.webpackChunk_agentscope_ai_design||[]).push([[991],{16978:function(F,l,n){n.r(l);var s=n(21618),i=n(85893);l.default=function(){return(0,i.jsx)(s.Z,{src:"https://cloud.video.taobao.com/vod/ObvVc91XA3OJXnFHl0KVhBo_60LrKAROCojWxB_EAYs.mp4",controls:!0,style:{width:"100%",height:"100%"}})}},21618:function(F,l,n){n.d(l,{Z:function(){return de}});var s=n(97857),i=n.n(s),y=n(5574),f=n.n(y),v=n(13769),x=n.n(v),t=n(67294),C=n(93967),c=n.n(C),d=n(5019),g=n(38703),Q=n(63701),O=n(62321),B=n(20399),Z=n(80162),D=n(32485),S=n(93865),a=n(85893),A=function(r){var V=Math.floor(r/60),p=Math.floor(r%60);return"".concat(V.toString().padStart(2,"0"),":").concat(p.toString().padStart(2,"0"))},T=function(r){var V=r.className,p=r.isPlaying,z=r.onPlayPause,ee=r.onFullscreen,I=r.onProgressClick,W=r.enableAudio,U=W===void 0?!1:W,K=r.muted,E=K===void 0?!0:K,ne=r.onMute,te=(0,S.getCommonConfig)(),h=te.sparkPrefix,re=(0,t.useMemo)(function(){return A(r.currentTime||0)},[r.currentTime]),N=(0,t.useMemo)(function(){return A(r.duration||0)},[r.duration]),ae=(0,t.useMemo)(function(){return Math.min((r.currentTime||0)/(r.duration||.01)*100,100)},[r.currentTime,r.duration]),X=function($){if(!(!I||!r.duration)){var H=$.currentTarget.getBoundingClientRect(),J=$.clientX-H.left,P=H.width,j=J/P,oe=j*r.duration,Y=Math.max(0,Math.min(oe,r.duration));I(Y)}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"".concat(h,"-video-player-controller ").concat(V||""),children:[(0,a.jsx)(d.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:p?(0,a.jsx)(Q.Z,{}):(0,a.jsx)(O.Z,{}),onClick:z}),(0,a.jsx)(d.Z,{bordered:!1,size:"small",shape:"default",disabled:!U,icon:U&&E?(0,a.jsx)(B.Z,{}):(0,a.jsx)(Z.Z,{}),onClick:ne}),(0,a.jsx)("span",{className:"".concat(h,"-video-time-text"),children:re}),(0,a.jsx)("div",{className:"".concat(h,"-video-progress-container"),onClick:X,children:(0,a.jsx)(g.Z,{className:"".concat(h,"-video-progress-bar"),percent:ae,showInfo:!1})}),(0,a.jsx)("span",{className:"".concat(h,"-video-time-text"),children:N}),(0,a.jsx)(d.Z,{bordered:!1,size:"small",shape:"default",disabled:!1,icon:(0,a.jsx)(D.Z,{}),onClick:ee})]})})},w=T,M=n(76526),q=n(68400),_=n.n(q),R=n(3067),k,b=(0,R.Z)(k||(k=_()([`
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
`])),function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.sparkPrefix},function(e){return e.sparkPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix},function(e){return e.antPrefix}),L=["controls","mouseEnterAutoPlay","children","className","style"],ce=(0,t.forwardRef)(function(e,r){var V=e.controls,p=e.mouseEnterAutoPlay,z=p===void 0?!1:p,ee=e.children,I=e.className,W=e.style,U=x()(e,L),K=(0,S.getCommonConfig)(),E=K.sparkPrefix,ne=b(),te=(0,t.useState)(0),h=f()(te,2),re=h[0],N=h[1],ae=(0,t.useState)(0),X=f()(ae,2),le=X[0],$=X[1],H=(0,t.useState)(!1),J=f()(H,2),P=J[0],j=J[1],oe=(0,M.Z)(e,{valuePropName:"muted",trigger:"onMutedChange",defaultValue:!0}),Y=f()(oe,2),ue=Y[0],fe=Y[1],ve=(0,t.useState)(!1),se=f()(ve,2),me=se[0],ie=se[1],o=(0,t.useRef)(null),G=(0,t.useRef)(!1),ge=function(m){o.current=m,r&&(typeof r=="function"?r(m):r.current=m)};(0,t.useEffect)(function(){var u;return P&&(u=setInterval(function(){o.current&&N(o.current.currentTime)},16)),function(){u&&clearInterval(u)}},[P]);var he=function(){return window.videoRef=o.current,o.current?"mozHasAudio"in o.current?(ie(o.current.mozHasAudio),!0):"webkitAudioDecodedByteCount"in o.current?(ie(o.current.webkitAudioDecodedByteCount>0),!0):(ie(!1),!1):!1},Pe=function(){o.current&&$(o.current.duration)},xe=function(){o.current&&(P?o.current.pause():o.current.play(),j(!P))},ye=function(){j(!0)},Ce=function(){j(!1)},Me=function(){o.current&&o.current.requestFullscreen&&o.current.requestFullscreen()},be=function(){var m;j(!1),N((m=o.current)===null||m===void 0?void 0:m.duration)},pe=function(){z&&!G.current&&(P||(o.current.play(),G.current=!0))},Ee=function(){z&&G.current&&(G.current=!1)},je=function(m){o.current&&(o.current.currentTime=m,N(m))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ne,{}),(0,a.jsx)("div",{className:c()("".concat(E,"-video-container"),I),style:W,children:(0,a.jsxs)("div",{className:"".concat(E,"-video-content"),onMouseEnter:pe,onMouseLeave:Ee,children:[(0,a.jsx)("video",i()(i()({ref:ge},U),{},{muted:ue,className:"".concat(E,"-video-element"),crossOrigin:"anonymous",onLoadedMetadata:Pe,onCanPlayThrough:he,onPlay:ye,onPause:Ce,onEnded:be})),V&&(0,a.jsx)(w,{className:"".concat(E,"-video-controller-wrapper"),isPlaying:P,currentTime:re,duration:le,enableAudio:me,muted:ue,onMute:function(){return fe(!ue)},onPlayPause:xe,onFullscreen:Me,onProgressClick:je}),ee]})})]})}),de=ce},76526:function(F,l,n){n.d(l,{Z:function(){return C}});var s=n(97582),i=n(67294),y=n(92770),f=n(22638),v=function(){var c=(0,s.CR)((0,i.useState)({}),2),d=c[1];return(0,i.useCallback)(function(){return d({})},[])},x=v;function t(c,d){d===void 0&&(d={});var g=c!=null?c:{},Q=d.defaultValue,O=d.defaultValuePropName,B=O===void 0?"defaultValue":O,Z=d.valuePropName,D=Z===void 0?"value":Z,S=d.trigger,a=S===void 0?"onChange":S,A=g[D],T=Object.prototype.hasOwnProperty.call(g,D),w=(0,i.useMemo)(function(){return T?A:Object.prototype.hasOwnProperty.call(g,B)?g[B]:Q},[]),M=(0,i.useRef)(w);T&&(M.current=A);var q=x();function _(R){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];var L=(0,y.mf)(R)?R(M.current):R;T||(M.current=L,q()),g[a]&&g[a].apply(g,(0,s.ev)([L],(0,s.CR)(k),!1))}return[M.current,(0,f.Z)(_)]}var C=t},22638:function(F,l,n){var s=n(67294),i=n(92770),y=n(31663);function f(v){y.Z&&((0,i.mf)(v)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof v)));var x=(0,s.useRef)(v);x.current=(0,s.useMemo)(function(){return v},[v]);var t=(0,s.useRef)();return t.current||(t.current=function(){for(var C=[],c=0;c<arguments.length;c++)C[c]=arguments[c];return x.current.apply(this,C)}),t.current}l.Z=f},92770:function(F,l,n){n.d(l,{mf:function(){return i}});var s=function(t){return t!==null&&typeof t=="object"},i=function(t){return typeof t=="function"},y=function(t){return typeof t=="string"},f=function(t){return typeof t=="boolean"},v=function(t){return typeof t=="number"},x=function(t){return typeof t=="undefined"}},31663:function(F,l){var n=!1;l.Z=n}}]);
