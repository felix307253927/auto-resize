(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e["auto-resize"]={}))})(this,function(e){"use strict";function t({width:n=1920,height:o=1080}){let i;const s=()=>{const u=document.documentElement.offsetWidth,c=document.documentElement.offsetHeight,m=Math.min(u/n,c/o);document.body.style.transform=`translate(-50%, -50%) scale(${m||1})`};(()=>{document.body.style.width=`${n}px`,document.body.style.height=`${o}px`,document.body.style.position="relative",document.body.style.top="50%",document.body.style.left="50%",document.body.style.transformOrigin="center",document.documentElement.style.width="100vw",document.documentElement.style.height="100vh",s()})();const d=()=>{clearTimeout(i),i=setTimeout(s,300)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)}e.autoResize=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});