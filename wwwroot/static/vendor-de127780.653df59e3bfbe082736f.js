"use strict";(self.webpackChunkui_react=self.webpackChunkui_react||[]).push([[5925],{93470:(e,t,n)=>{n.d(t,{i:()=>u});var r=n(67294),o=n(22760),s=n(36425),l=n(85893);const i=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function a(e){const t=[],n=[];return Array.from(e.querySelectorAll(i)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function c(){return!0}function u(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:i=!1,disableRestoreFocus:u=!1,getTabbable:d=a,isEnabled:f=c,open:p}=e,m=r.useRef(!1),h=r.useRef(null),v=r.useRef(null),y=r.useRef(null),b=r.useRef(null),g=r.useRef(!1),E=r.useRef(null),x=(0,o.Z)(t.ref,E),R=r.useRef(null);r.useEffect((()=>{p&&E.current&&(g.current=!n)}),[n,p]),r.useEffect((()=>{if(!p||!E.current)return;const e=(0,s.Z)(E.current);return E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),g.current&&E.current.focus()),()=>{u||(y.current&&y.current.focus&&(m.current=!0,y.current.focus()),y.current=null)}}),[p]),r.useEffect((()=>{if(!p||!E.current)return;const e=(0,s.Z)(E.current),t=t=>{R.current=t,!i&&f()&&"Tab"===t.key&&e.activeElement===E.current&&t.shiftKey&&(m.current=!0,v.current&&v.current.focus())},n=()=>{const t=E.current;if(null===t)return;if(!e.hasFocus()||!f()||m.current)return void(m.current=!1);if(t.contains(e.activeElement))return;if(i&&e.activeElement!==h.current&&e.activeElement!==v.current)return;if(e.activeElement!==b.current)b.current=null;else if(null!==b.current)return;if(!g.current)return;let n=[];if(e.activeElement!==h.current&&e.activeElement!==v.current||(n=d(E.current)),n.length>0){var r,o;const e=Boolean((null==(r=R.current)?void 0:r.shiftKey)&&"Tab"===(null==(o=R.current)?void 0:o.key)),t=n[0],s=n[n.length-1];"string"!=typeof t&&"string"!=typeof s&&(e?s.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,i,u,f,p,d]);const Z=e=>{null===y.current&&(y.current=e.relatedTarget),g.current=!0};return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)("div",{tabIndex:p?0:-1,onFocus:Z,ref:h,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:x,onFocus:e=>{null===y.current&&(y.current=e.relatedTarget),g.current=!0,b.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,l.jsx)("div",{tabIndex:p?0:-1,onFocus:Z,ref:v,"data-testid":"sentinelEnd"})]})}},97364:(e,t,n)=>{n.d(t,{r:()=>O});var r=n(87462),o=n(63366),s=n(67294),l=n(22760),i=n(54895),a=n(36425),c=n(74511),u=n(58510),d=n(78385),f=n(8027);const p="base";function m(e,t){const n=f._v[t];return n?`${p}--${n}`:function(e,t){return`${p}-${e}-${t}`}(e,t)}const h="Popper";function v(e){return m(h,e)}!function(e,t){const n={};t.forEach((t=>{n[t]=m(e,t)}))}(h,["root"]);var y=n(48542),b=n(85893);const g={disableDefaultClasses:!1},E=s.createContext(g);const x=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],R=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Z(e){return"function"==typeof e?e():e}function w(e){return void 0!==e.nodeType}const P=()=>(0,u.Z)({root:["root"]},function(e){const{disableDefaultClasses:t}=s.useContext(E);return n=>t?"":e(n)}(v)),S={},T=s.forwardRef((function(e,t){var n;const{anchorEl:a,children:u,direction:d,disablePortal:f,modifiers:p,open:m,placement:h,popperOptions:v,popperRef:g,slotProps:E={},slots:R={},TransitionProps:w}=e,S=(0,o.Z)(e,x),T=s.useRef(null),O=(0,l.Z)(T,t),N=s.useRef(null),k=(0,l.Z)(N,g),C=s.useRef(k);(0,i.Z)((()=>{C.current=k}),[k]),s.useImperativeHandle(g,(()=>N.current),[]);const I=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(h,d),[A,j]=s.useState(I),[L,F]=s.useState(Z(a));s.useEffect((()=>{N.current&&N.current.forceUpdate()})),s.useEffect((()=>{a&&F(Z(a))}),[a]),(0,i.Z)((()=>{if(!L||!m)return;let e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{j(e.placement)}}];null!=p&&(e=e.concat(p)),v&&null!=v.modifiers&&(e=e.concat(v.modifiers));const t=(0,c.fi)(L,T.current,(0,r.Z)({placement:I},v,{modifiers:e}));return C.current(t),()=>{t.destroy(),C.current(null)}}),[L,f,p,m,v,I]);const M={placement:A};null!==w&&(M.TransitionProps=w);const $=P(),D=null!=(n=R.root)?n:"div",H=(0,y.y)({elementType:D,externalSlotProps:E.root,externalForwardedProps:S,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:$.root});return(0,b.jsx)(D,(0,r.Z)({},H,{children:"function"==typeof u?u(M):u}))})),O=s.forwardRef((function(e,t){const{anchorEl:n,children:l,container:i,direction:c="ltr",disablePortal:u=!1,keepMounted:f=!1,modifiers:p,open:m,placement:h="bottom",popperOptions:v=S,popperRef:y,style:g,transition:E=!1,slotProps:x={},slots:P={}}=e,O=(0,o.Z)(e,R),[N,k]=s.useState(!0);if(!f&&!m&&(!E||N))return null;let C;if(i)C=i;else if(n){const e=Z(n);C=e&&w(e)?(0,a.Z)(e).body:(0,a.Z)(null).body}const I=m||!f||E&&!N?void 0:"none",A=E?{in:m,onEnter:()=>{k(!1)},onExited:()=>{k(!0)}}:void 0;return(0,b.jsx)(d.h,{disablePortal:u,container:C,children:(0,b.jsx)(T,(0,r.Z)({anchorEl:n,direction:c,disablePortal:u,modifiers:p,ref:t,open:E?!N:m,placement:h,popperOptions:v,popperRef:y,slotProps:x,slots:P},O,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:I},g),TransitionProps:A,children:l}))})}))},78385:(e,t,n)=>{n.d(t,{h:()=>c});var r=n(67294),o=n(73935),s=n(22760),l=n(54895),i=n(25091),a=n(85893);const c=r.forwardRef((function(e,t){const{children:n,container:c,disablePortal:u=!1}=e,[d,f]=r.useState(null),p=(0,s.Z)(r.isValidElement(n)?n.ref:null,t);if((0,l.Z)((()=>{u||f(function(e){return"function"==typeof e?e():e}(c)||document.body)}),[c,u]),(0,l.Z)((()=>{if(d&&!u)return(0,i.Z)(t,d),()=>{(0,i.Z)(t,null)}}),[t,d,u]),u){if(r.isValidElement(n)){const e={ref:p};return r.cloneElement(n,e)}return(0,a.jsx)(r.Fragment,{children:n})}return(0,a.jsx)(r.Fragment,{children:d?o.createPortal(n,d):d})}))},37598:(e,t,n)=>{n.d(t,{u:()=>m});var r=n(87462),o=n(63366),s=n(67294),l=n(22760),i=n(96613),a=n(54895),c=n(86145),u=n(85893);const d=["onChange","maxRows","minRows","style","value"];function f(e){return parseInt(e,10)||0}const p={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};const m=s.forwardRef((function(e,t){const{onChange:n,maxRows:m,minRows:h=1,style:v,value:y}=e,b=(0,o.Z)(e,d),{current:g}=s.useRef(null!=y),E=s.useRef(null),x=(0,l.Z)(t,E),R=s.useRef(null),Z=s.useCallback((()=>{const t=E.current,n=(0,i.Z)(t).getComputedStyle(t);if("0px"===n.width)return{outerHeightStyle:0,overflowing:!1};const r=R.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");const o=n.boxSizing,s=f(n.paddingBottom)+f(n.paddingTop),l=f(n.borderBottomWidth)+f(n.borderTopWidth),a=r.scrollHeight;r.value="x";const c=r.scrollHeight;let u=a;h&&(u=Math.max(Number(h)*c,u)),m&&(u=Math.min(Number(m)*c,u)),u=Math.max(u,c);return{outerHeightStyle:u+("border-box"===o?s+l:0),overflowing:Math.abs(u-a)<=1}}),[m,h,e.placeholder]),w=s.useCallback((()=>{const e=Z();if(null==(t=e)||0===Object.keys(t).length||0===t.outerHeightStyle&&!t.overflowing)return;var t;const n=E.current;n.style.height=`${e.outerHeightStyle}px`,n.style.overflow=e.overflowing?"hidden":""}),[Z]);(0,a.Z)((()=>{const e=()=>{w()};let t;const n=(0,c.Z)(e),r=E.current,o=(0,i.Z)(r);let s;return o.addEventListener("resize",n),"undefined"!=typeof ResizeObserver&&(s=new ResizeObserver(e),s.observe(r)),()=>{n.clear(),cancelAnimationFrame(t),o.removeEventListener("resize",n),s&&s.disconnect()}}),[Z,w]),(0,a.Z)((()=>{w()}));return(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)("textarea",(0,r.Z)({value:y,onChange:e=>{g||w(),n&&n(e)},ref:x,rows:h,style:v},b)),(0,u.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:R,tabIndex:-1,style:(0,r.Z)({},p,v,{paddingTop:0,paddingBottom:0})})]})}))},16556:(e,t,n)=>{n.d(t,{d:()=>b});var r=n(87462),o=n(67294),s=n(22760),l=n(36425),i=n(22010),a=n(15725),c=n(30437),u=n(96613),d=n(98902);function f(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function p(e){return parseInt((0,u.Z)(e).getComputedStyle(e).paddingRight,10)||0}function m(e,t,n,r,o){const s=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===s.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&f(e,o)}))}function h(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function v(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,l.Z)(e);return t.body===e?(0,u.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=(0,d.Z)((0,l.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${p(r)+e}px`;const t=(0,l.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${p(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,l.Z)(r).body;else{const t=r.parentElement,n=(0,u.Z)(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const y=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&f(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);m(t,e.mount,e.modalRef,r,!0);const o=h(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=h(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=v(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=h(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&f(e.modalRef,t),m(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&f(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function b(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:u=!1,manager:d=y,closeAfterTransition:p=!1,onTransitionEnter:m,onTransitionExited:h,children:v,onClose:b,open:g,rootRef:E}=e,x=o.useRef({}),R=o.useRef(null),Z=o.useRef(null),w=(0,s.Z)(Z,E),[P,S]=o.useState(!g),T=function(e){return!!e&&e.props.hasOwnProperty("in")}(v);let O=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(O=!1);const N=()=>(x.current.modalRef=Z.current,x.current.mount=R.current,x.current),k=()=>{d.mount(N(),{disableScrollLock:u}),Z.current&&(Z.current.scrollTop=0)},C=(0,i.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||(0,l.Z)(R.current).body;d.add(N(),e),Z.current&&k()})),I=o.useCallback((()=>d.isTopModal(N())),[d]),A=(0,i.Z)((e=>{R.current=e,e&&(g&&I()?k():Z.current&&f(Z.current,O))})),j=o.useCallback((()=>{d.remove(N(),O)}),[O,d]);o.useEffect((()=>()=>{j()}),[j]),o.useEffect((()=>{g?C():T&&p||j()}),[g,j,T,p,C]);const L=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&229!==t.which&&I()&&(n||(t.stopPropagation(),b&&b(t,"escapeKeyDown")))},F=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&b&&b(t,"backdropClick")};return{getRootProps:(t={})=>{const n=(0,c._)(e);delete n.onTransitionEnter,delete n.onTransitionExited;const o=(0,r.Z)({},n,t);return(0,r.Z)({role:"presentation"},o,{onKeyDown:L(o),ref:w})},getBackdropProps:(e={})=>{const t=e;return(0,r.Z)({"aria-hidden":!0},t,{onClick:F(t),open:g})},getTransitionProps:()=>({onEnter:(0,a.Z)((()=>{S(!1),m&&m()}),null==v?void 0:v.props.onEnter),onExited:(0,a.Z)((()=>{S(!0),h&&h(),p&&j()}),null==v?void 0:v.props.onExited)}),rootRef:w,portalRef:A,isTopModal:I,exited:P,hasTransition:T}}},10238:(e,t,n)=>{n.d(t,{$:()=>s});var r=n(87462),o=n(28442);function s(e,t,n){return void 0===e||(0,o.X)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},30437:(e,t,n)=>{function r(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{_:()=>r})},28442:(e,t,n)=>{function r(e){return"string"==typeof e}n.d(t,{X:()=>r})},48542:(e,t,n)=>{n.d(t,{y:()=>d});var r=n(87462),o=n(63366),s=n(22760),l=n(10238),i=n(90512),a=n(30437);function c(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var t;const{elementType:n,externalSlotProps:d,ownerState:f,skipResolvingSlotProps:p=!1}=e,m=(0,o.Z)(e,u),h=p?{}:function(e,t,n){return"function"==typeof e?e(t,n):e}(d,f),{props:v,internalRef:y}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:s,className:l}=e;if(!t){const e=(0,i.Z)(null==n?void 0:n.className,l,null==s?void 0:s.className,null==o?void 0:o.className),t=(0,r.Z)({},null==n?void 0:n.style,null==s?void 0:s.style,null==o?void 0:o.style),a=(0,r.Z)({},n,s,o);return e.length>0&&(a.className=e),Object.keys(t).length>0&&(a.style=t),{props:a,internalRef:void 0}}const u=(0,a._)((0,r.Z)({},s,o)),d=c(o),f=c(s),p=t(u),m=(0,i.Z)(null==p?void 0:p.className,null==n?void 0:n.className,l,null==s?void 0:s.className,null==o?void 0:o.className),h=(0,r.Z)({},null==p?void 0:p.style,null==n?void 0:n.style,null==s?void 0:s.style,null==o?void 0:o.style),v=(0,r.Z)({},p,n,f,d);return m.length>0&&(v.className=m),Object.keys(h).length>0&&(v.style=h),{props:v,internalRef:p.ref}}((0,r.Z)({},m,{externalSlotProps:h})),b=(0,s.Z)(y,null==h?void 0:h.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,l.$)(n,(0,r.Z)({},v,{ref:b}),f)}}}]);