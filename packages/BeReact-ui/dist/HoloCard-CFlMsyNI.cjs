"use strict";const s=require("./jsx-runtime-CdzQHM_M.cjs"),n=require("react");function j({content:i}){const r=n.useRef(null),a=n.useCallback(()=>{const e=r.current;e&&(e.style.setProperty("--x","50%"),e.style.setProperty("--y","50%"),e.style.setProperty("--bg-x","50%"),e.style.setProperty("--bg-y","50%"),e.style.setProperty("--r-x","0deg"),e.style.setProperty("--r-y","0deg"))},[]),y=n.useCallback(e=>{const t=r.current;if(t){const d=t.clientWidth,x=t.clientHeight,l=t.getBoundingClientRect(),o=(e.clientX-l.left)/d,c=(e.clientY-l.top)/x,u=-(o-.5)*26,p=(c-.5)*26,m=40+20*o,g=40+20*c;t.style.setProperty("--x",100*o+"%"),t.style.setProperty("--y",100*c+"%"),t.style.setProperty("--bg-x",m+"%"),t.style.setProperty("--bg-y",g+"%"),t.style.setProperty("--r-x",u+"deg"),t.style.setProperty("--r-y",p+"deg")}},[]);return s.jsxRuntimeExports.jsx("div",{className:"card",ref:r,onMouseMove:y,onMouseLeave:a,children:s.jsxRuntimeExports.jsx("div",{className:"card__wrapper",children:s.jsxRuntimeExports.jsxs("div",{className:"card__3d",children:[s.jsxRuntimeExports.jsx("div",{className:"card__image",children:i}),s.jsxRuntimeExports.jsx("div",{className:"card__layer1"}),s.jsxRuntimeExports.jsx("div",{className:"card__layer2"})]})})})}exports.HoloCard=j;
