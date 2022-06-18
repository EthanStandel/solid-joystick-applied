const Do=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Do();const He={};function Ro(s){He.context=s}const Po=(s,e)=>s===e,ur={equals:Po};let Ba=ka;const hi={},yn=1,qi=2,Ga={owned:null,cleanups:null,context:null,owner:null};var $e=null;let pi=null,Ve=null,li=null,Ke=null,xt=null,Js=0;function Io(s,e){const t=Ve,n=$e,i=s.length===0,r=i?Ga:{owned:null,cleanups:null,context:null,owner:e||n},o=i?s:()=>s(()=>nr(r));$e=r,Ve=null;try{return tr(o,!0)}finally{Ve=t,$e=n}}function mn(s,e){e=e?Object.assign({},ur,e):ur;const t={value:s,observers:null,observerSlots:null,pending:hi,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.pending!==hi?t.pending:t.value)),er(t,i));return[zo.bind(t),n]}function ft(s,e,t){const n=Va(s,e,!1,yn);Zi(n)}function Qs(s,e,t){Ba=Bo;const n=Va(s,e,!1,yn);n.user=!0,xt?xt.push(n):Zi(n)}function Fo(s){if(li)return s();let e;const t=li=[];try{e=s()}finally{li=null}return tr(()=>{for(let n=0;n<t.length;n+=1){const i=t[n];if(i.pending!==hi){const r=i.pending;i.pending=hi,er(i,r)}}},!1),e}function ui(s){let e,t=Ve;return Ve=null,e=s(),Ve=t,e}function No(s){Qs(()=>ui(s))}function Bs(s){return $e===null||($e.cleanups===null?$e.cleanups=[s]:$e.cleanups.push(s)),s}function zo(){const s=pi;if(this.sources&&(this.state||s)){const e=Ke;Ke=null,this.state===yn||s?Zi(this):Xi(this),Ke=e}if(Ve){const e=this.observers?this.observers.length:0;Ve.sources?(Ve.sources.push(this),Ve.sourceSlots.push(e)):(Ve.sources=[this],Ve.sourceSlots=[e]),this.observers?(this.observers.push(Ve),this.observerSlots.push(Ve.sources.length-1)):(this.observers=[Ve],this.observerSlots=[Ve.sources.length-1])}return this.value}function er(s,e,t){if(li)return s.pending===hi&&li.push(s),s.pending=e,e;if(s.comparator&&s.comparator(s.value,e))return e;let n=!1;return s.value=e,s.observers&&s.observers.length&&tr(()=>{for(let i=0;i<s.observers.length;i+=1){const r=s.observers[i];n&&pi.disposed.has(r),(n&&!r.tState||!n&&!r.state)&&(r.pure?Ke.push(r):xt.push(r),r.observers&&Ha(r)),n||(r.state=yn)}if(Ke.length>1e6)throw Ke=[],new Error},!1),e}function Zi(s){if(!s.fn)return;nr(s);const e=$e,t=Ve,n=Js;Ve=$e=s,Uo(s,s.value,n),Ve=t,$e=e}function Uo(s,e,t){let n;try{n=s.fn(e)}catch(i){Wa(i)}(!s.updatedAt||s.updatedAt<=t)&&(s.observers&&s.observers.length?er(s,n):s.value=n,s.updatedAt=t)}function Va(s,e,t,n=yn,i){const r={fn:s,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:$e,context:null,pure:t};return $e===null||$e!==Ga&&($e.owned?$e.owned.push(r):$e.owned=[r]),r}function ci(s){const e=pi;if(s.state===0||e)return;if(s.state===qi||e)return Xi(s);if(s.suspense&&ui(s.suspense.inFallback))return s.suspense.effects.push(s);const t=[s];for(;(s=s.owner)&&(!s.updatedAt||s.updatedAt<Js);)(s.state||e)&&t.push(s);for(let n=t.length-1;n>=0;n--)if(s=t[n],s.state===yn||e)Zi(s);else if(s.state===qi||e){const i=Ke;Ke=null,Xi(s,t[0]),Ke=i}}function tr(s,e){if(Ke)return s();let t=!1;e||(Ke=[]),xt?t=!0:xt=[],Js++;try{const n=s();return Oo(t),n}catch(n){Wa(n)}finally{Ke=null,t||(xt=null)}}function Oo(s){Ke&&(ka(Ke),Ke=null),!s&&(xt.length?Fo(()=>{Ba(xt),xt=null}):xt=null)}function ka(s){for(let e=0;e<s.length;e++)ci(s[e])}function Bo(s){let e,t=0;for(e=0;e<s.length;e++){const i=s[e];i.user?s[t++]=i:ci(i)}He.context&&Ro();const n=s.length;for(e=0;e<t;e++)ci(s[e]);for(e=n;e<s.length;e++)ci(s[e])}function Xi(s,e){const t=pi;s.state=0;for(let n=0;n<s.sources.length;n+=1){const i=s.sources[n];i.sources&&(i.state===yn||t?i!==e&&ci(i):(i.state===qi||t)&&Xi(i,e))}}function Ha(s){const e=pi;for(let t=0;t<s.observers.length;t+=1){const n=s.observers[t];(!n.state||e)&&(n.state=qi,n.pure?Ke.push(n):xt.push(n),n.observers&&Ha(n))}}function nr(s){let e;if(s.sources)for(;s.sources.length;){const t=s.sources.pop(),n=s.sourceSlots.pop(),i=t.observers;if(i&&i.length){const r=i.pop(),o=t.observerSlots.pop();n<i.length&&(r.sourceSlots[o]=n,i[n]=r,t.observerSlots[n]=o)}}if(s.owned){for(e=0;e<s.owned.length;e++)nr(s.owned[e]);s.owned=null}if(s.cleanups){for(e=0;e<s.cleanups.length;e++)s.cleanups[e]();s.cleanups=null}s.state=0,s.context=null}function Wa(s){throw s}function ki(s,e){return ui(()=>s(e||{}))}function Go(s,e,t){let n=t.length,i=e.length,r=n,o=0,a=0,c=e[i-1].nextSibling,l=null;for(;o<i||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[r-1];)i--,r--;if(i===o){const h=r<n?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)s.insertBefore(t[a++],h)}else if(r===a)for(;o<i;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[i-1]){const h=e[--i].nextSibling;s.insertBefore(t[a++],e[o++].nextSibling),s.insertBefore(t[--r],h),e[i]=t[r]}else{if(!l){l=new Map;let f=a;for(;f<r;)l.set(t[f],f++)}const h=l.get(e[o]);if(h!=null)if(a<h&&h<r){let f=o,d=1,m;for(;++f<i&&f<r&&!((m=l.get(e[f]))==null||m!==h+d);)d++;if(d>h-a){const g=e[o];for(;a<h;)s.insertBefore(t[a++],g)}else s.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const fr="_$DX_DELEGATE";function Vo(s,e,t){let n;return Io(i=>{n=i,e===document?s():Gs(e,s(),e.firstChild?null:void 0,t)}),()=>{n(),e.textContent=""}}function qa(s,e,t){const n=document.createElement("template");n.innerHTML=s;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function ko(s,e=window.document){const t=e[fr]||(e[fr]=new Set);for(let n=0,i=s.length;n<i;n++){const r=s[n];t.has(r)||(t.add(r),e.addEventListener(r,Ho))}}function ss(s,e,t={}){const n=s.style,i=typeof t=="string";if(e==null&&i||typeof e=="string")return n.cssText=e;i&&(n.cssText=void 0,t={}),e||(e={});let r,o;for(o in t)e[o]==null&&n.removeProperty(o),delete t[o];for(o in e)r=e[o],r!==t[o]&&(n.setProperty(o,r),t[o]=r);return t}function Gs(s,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return ji(s,e,n,t);ft(i=>ji(s,e(),i,t),n)}function Ho(s){const e=`$$${s.type}`;let t=s.composedPath&&s.composedPath()[0]||s.target;for(s.target!==t&&Object.defineProperty(s,"target",{configurable:!0,value:t}),Object.defineProperty(s,"currentTarget",{configurable:!0,get(){return t||document}}),He.registry&&!He.done&&(He.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n.call(t,i,s):n.call(t,s),s.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function ji(s,e,t,n,i){for(He.context&&!t&&(t=[...s.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,o=n!==void 0;if(s=o&&t[0]&&t[0].parentNode||s,r==="string"||r==="number"){if(He.context)return t;if(r==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=Tn(s,t,n,a)}else t!==""&&typeof t=="string"?t=s.firstChild.data=e:t=s.textContent=e}else if(e==null||r==="boolean"){if(He.context)return t;t=Tn(s,t,n)}else{if(r==="function")return ft(()=>{let a=e();for(;typeof a=="function";)a=a();t=ji(s,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[];if(Vs(a,e,i))return ft(()=>t=ji(s,a,t,n,!0)),()=>t;if(He.context){for(let c=0;c<a.length;c++)if(a[c].parentNode)return t=a}if(a.length===0){if(t=Tn(s,t,n),o)return t}else Array.isArray(t)?t.length===0?dr(s,a,n):Go(s,t,a):(t&&Tn(s),dr(s,a));t=a}else if(e instanceof Node){if(He.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=Tn(s,t,n,e);Tn(s,t,null,e)}else t==null||t===""||!s.firstChild?s.appendChild(e):s.replaceChild(e,s.firstChild);t=e}}return t}function Vs(s,e,t){let n=!1;for(let i=0,r=e.length;i<r;i++){let o=e[i],a;if(o instanceof Node)s.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=Vs(s,o)||n;else if((a=typeof o)=="string")s.push(document.createTextNode(o));else if(a==="function")if(t){for(;typeof o=="function";)o=o();n=Vs(s,Array.isArray(o)?o:[o])||n}else s.push(o),n=!0;else s.push(document.createTextNode(o.toString()))}return n}function dr(s,e,t){for(let n=0,i=e.length;n<i;n++)s.insertBefore(e[n],t)}function Tn(s,e,t,n){if(t===void 0)return s.textContent="";const i=n||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const c=a.parentNode===s;!r&&!o?c?s.replaceChild(i,a):s.insertBefore(i,t):c&&a.remove()}else r=!0}}else s.insertBefore(i,t);return[i]}const Wo=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],qo=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Wo]),Xo=new Set(["innerHTML","textContent","innerText","children"]),jo={className:"class",htmlFor:"for"},pr={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Yo=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$o={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Zo(s,e,t){let n=t.length,i=e.length,r=n,o=0,a=0,c=e[i-1].nextSibling,l=null;for(;o<i||a<r;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[r-1];)i--,r--;if(i===o){const h=r<n?a?t[a-1].nextSibling:t[r-a]:c;for(;a<r;)s.insertBefore(t[a++],h)}else if(r===a)for(;o<i;)(!l||!l.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[r-1]&&t[a]===e[i-1]){const h=e[--i].nextSibling;s.insertBefore(t[a++],e[o++].nextSibling),s.insertBefore(t[--r],h),e[i]=t[r]}else{if(!l){l=new Map;let f=a;for(;f<r;)l.set(t[f],f++)}const h=l.get(e[o]);if(h!=null)if(a<h&&h<r){let f=o,d=1,m;for(;++f<i&&f<r&&!((m=l.get(e[f]))==null||m!==h+d);)d++;if(d>h-a){const g=e[o];for(;a<h;)s.insertBefore(t[a++],g)}else s.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const mr="_$DX_DELEGATE";function Xa(s,e,t){const n=document.createElement("template");n.innerHTML=s;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function Ko(s,e=window.document){const t=e[mr]||(e[mr]=new Set);for(let n=0,i=s.length;n<i;n++){const r=s[n];t.has(r)||(t.add(r),e.addEventListener(r,rl))}}function Jo(s,e,t){t==null?s.removeAttribute(e):s.setAttribute(e,t)}function Qo(s,e,t,n){n==null?s.removeAttributeNS(e,t):s.setAttributeNS(e,t,n)}function el(s,e){e==null?s.removeAttribute("class"):s.className=e}function tl(s,e,t,n){if(n)Array.isArray(t)?(s[`$$${e}`]=t[0],s[`$$${e}Data`]=t[1]):s[`$$${e}`]=t;else if(Array.isArray(t)){const i=t[0];s.addEventListener(e,t[0]=r=>i.call(s,t[1],r))}else s.addEventListener(e,t)}function nl(s,e,t={}){const n=Object.keys(e||{}),i=Object.keys(t);let r,o;for(r=0,o=i.length;r<o;r++){const a=i[r];!a||a==="undefined"||e[a]||(_r(s,a,!1),delete t[a])}for(r=0,o=n.length;r<o;r++){const a=n[r],c=!!e[a];!a||a==="undefined"||t[a]===c||!c||(_r(s,a,!0),t[a]=c)}return t}function ks(s,e,t={}){const n=s.style,i=typeof t=="string";if(e==null&&i||typeof e=="string")return n.cssText=e;i&&(n.cssText=void 0,t={}),e||(e={});let r,o;for(o in t)e[o]==null&&n.removeProperty(o),delete t[o];for(o in e)r=e[o],r!==t[o]&&(n.setProperty(o,r),t[o]=r);return t}function gr(s,e,t,n){typeof e=="function"?ft(i=>vr(s,e(),i,t,n)):vr(s,e,void 0,t,n)}function il(s,e,t,n,i={},r=!1){e||(e={});for(const o in i)if(!(o in e)){if(o==="children")continue;xr(s,o,null,i[o],t,r)}for(const o in e){if(o==="children"){n||Yi(s,e.children);continue}const a=e[o];i[o]=xr(s,o,a,i[o],t,r)}}function sl(s){return s.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function _r(s,e,t){const n=e.trim().split(/\s+/);for(let i=0,r=n.length;i<r;i++)s.classList.toggle(n[i],t)}function xr(s,e,t,n,i,r){let o,a,c;if(e==="style")return ks(s,t,n);if(e==="classList")return nl(s,t,n);if(t===n)return n;if(e==="ref")r||t(s);else if(e.slice(0,3)==="on:"){const l=e.slice(3);n&&s.removeEventListener(l,n),t&&s.addEventListener(l,t)}else if(e.slice(0,10)==="oncapture:"){const l=e.slice(10);n&&s.removeEventListener(l,n,!0),t&&s.addEventListener(l,t,!0)}else if(e.slice(0,2)==="on"){const l=e.slice(2).toLowerCase(),h=Yo.has(l);if(!h&&n){const f=Array.isArray(n)?n[0]:n;s.removeEventListener(l,f)}(h||t)&&(tl(s,l,t,h),h&&Ko([l]))}else if((c=Xo.has(e))||!i&&(pr[e]||(a=qo.has(e)))||(o=s.nodeName.includes("-")))e==="class"||e==="className"?el(s,t):o&&!a&&!c?s[sl(e)]=t:s[pr[e]||e]=t;else{const l=i&&e.indexOf(":")>-1&&$o[e.split(":")[0]];l?Qo(s,l,e,t):Jo(s,jo[e]||e,t)}return t}function rl(s){const e=`$$${s.type}`;let t=s.composedPath&&s.composedPath()[0]||s.target;for(s.target!==t&&Object.defineProperty(s,"target",{configurable:!0,value:t}),Object.defineProperty(s,"currentTarget",{configurable:!0,get(){return t||document}}),He.registry&&!He.done&&(He.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n.call(t,i,s):n.call(t,s),s.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function vr(s,e,t={},n,i){return e||(e={}),!i&&"children"in e&&ft(()=>t.children=Yi(s,e.children,t.children)),e.ref&&e.ref(s),ft(()=>il(s,e,n,!0,t,!0)),t}function Yi(s,e,t,n,i){for(He.context&&!t&&(t=[...s.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,o=n!==void 0;if(s=o&&t[0]&&t[0].parentNode||s,r==="string"||r==="number"){if(He.context)return t;if(r==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=An(s,t,n,a)}else t!==""&&typeof t=="string"?t=s.firstChild.data=e:t=s.textContent=e}else if(e==null||r==="boolean"){if(He.context)return t;t=An(s,t,n)}else{if(r==="function")return ft(()=>{let a=e();for(;typeof a=="function";)a=a();t=Yi(s,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[];if(Hs(a,e,i))return ft(()=>t=Yi(s,a,t,n,!0)),()=>t;if(He.context){for(let c=0;c<a.length;c++)if(a[c].parentNode)return t=a}if(a.length===0){if(t=An(s,t,n),o)return t}else Array.isArray(t)?t.length===0?Mr(s,a,n):Zo(s,t,a):(t&&An(s),Mr(s,a));t=a}else if(e instanceof Node){if(He.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=An(s,t,n,e);An(s,t,null,e)}else t==null||t===""||!s.firstChild?s.appendChild(e):s.replaceChild(e,s.firstChild);t=e}}return t}function Hs(s,e,t){let n=!1;for(let i=0,r=e.length;i<r;i++){let o=e[i],a;if(o instanceof Node)s.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=Hs(s,o)||n;else if((a=typeof o)=="string")s.push(document.createTextNode(o));else if(a==="function")if(t){for(;typeof o=="function";)o=o();n=Hs(s,Array.isArray(o)?o:[o])||n}else s.push(o),n=!0;else s.push(document.createTextNode(o.toString()))}return n}function Mr(s,e,t){for(let n=0,i=e.length;n<i;n++)s.insertBefore(e[n],t)}function An(s,e,t,n){if(t===void 0)return s.textContent="";const i=n||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const c=a.parentNode===s;!r&&!o?c?s.replaceChild(i,a):s.insertBefore(i,t):c&&a.remove()}else r=!0}}else s.insertBefore(i,t);return[i]}var Pt;(s=>{s.hypotenuse=(e,t)=>Math.hypot(e,t),s.angleRadians=(e,t)=>{const n=Math.atan2(-t,e);return n>0?n:n+2*Math.PI},s.radiansToDegrees=e=>e*180/Math.PI,s.getMaxX=(e,t)=>Math.sin(e+Math.PI/2)*t,s.getMaxY=(e,t)=>Math.cos(e+Math.PI/2)*t})(Pt||(Pt={}));const al=Xa("<div><button></button></div>"),yr=({onMove:s=()=>{},disableReset:e=!1,disableResetAnimation:t=!1,disabled:n=!1,disableX:i=!1,disableY:r=!1,boundingModel:o="center",boundaryModifier:a=0,throttleEventsBy:c=0,resetAnimation:l=".2s ease",baseProps:h={},handleProps:f={},plugins:d=[]})=>{const[m,g]=mn(0),[p,u]=mn(0),[_,b]=mn(!1),A=yt.handleState(),T={current:void 0},S={current:void 0},C=()=>{if(T.current&&S.current){const w=o==="inner"||o==="outer"?Math.max(S.current.clientWidth,S.current.clientHeight)/2:0;return T.current.clientWidth/2+(o==="outer"?w:-w)+a}else throw new Error("Trying to get radius before baseRef rendered")},F=(()=>{if(s&&c!==0){let w=0;return N=>{const P=new Date().getTime();P-w>=c&&(w=P,s(N))}}else return s})(),M=(w,N)=>{const P=C();if(A.pluginDragging.some(J=>J)&&T&&S&&!n){const J=Pt.hypotenuse(w,N),j=Pt.angleRadians(w,N),L=i?0:J<P||o==="none"?w:Pt.getMaxX(j,P),k=r?0:J<P||o==="none"?N:Pt.getMaxY(j,P);g(L),u(k),F?.({offset:{pixels:{x:L,y:k},percentage:{x:L/P,y:k/P}},angle:{radians:j,degrees:Pt.radiansToDegrees(j)},pressure:{pixels:J>P&&o!=="none"?P:J,percentage:J>P&&o!=="none"?1:Math.abs(J/P)}})}};return s?.(yt.eventState()),d.forEach((w,N)=>w({onMove:s,disableReset:e,disableResetAnimation:t,disabled:n,disableX:i,disableY:r,boundingModel:o,boundaryModifier:a,throttleEventsBy:c,resetAnimation:l,baseProps:h,handleProps:f,plugins:d,handleHandleMove:M,getRadius:C,xOffset:m,setXOffset:g,yOffset:p,setYOffset:u,shouldTransition:_,setShouldTransition:b,pluginIndex:N,handleState:A,handleRef:S,baseRef:T})),(()=>{const w=al.cloneNode(!0),N=w.firstChild,P=T.current;typeof P=="function"?P(w):T.current=w,gr(w,h,!1,!0);const J=S.current;return typeof J=="function"?J(N):S.current=N,gr(N,f,!1,!1),N.disabled=n||i&&r,ft(j=>{const L={...Sr.base,...h.style??{}},k=Sr.handle(m(),p(),_()&&!t,l,f.style);return j._v$=ks(w,L,j._v$),j._v$2=ks(N,k,j._v$2),j},{_v$:void 0,_v$2:void 0}),w})()},yt={handleState:()=>({pluginDragging:[],initialOffsets:{x:0,y:0}}),eventState:()=>({offset:{pixels:{x:0,y:0},percentage:{x:0,y:0}},angle:{radians:0,degrees:0},pressure:{pixels:0,percentage:0}})},Sr={base:{width:"100%",height:"100%",display:"flex","justify-content":"center","align-items":"center"},handle:(s,e,t,n,i={})=>({"touch-action":"none",transform:`translate(${s}px,${e}px)`,...t?{transition:`all ${n}`}:{},...i})},br=(s={})=>({getRadius:e,handleState:t,setShouldTransition:n,handleHandleMove:i,pluginIndex:r,setXOffset:o,setYOffset:a,onMove:c})=>{No(()=>{const l=ol(s),h=()=>window.navigator.getGamepads()?.[l.index];window.addEventListener("gamepadconnected",m=>{m.gamepad.index===l.index&&d()});const f=()=>{const m=h();if(m){const g=e(),p=m.axes[l.xIndex],u=m.axes[l.yIndex],_=Math.abs(p)<l.deadzonePercent,b=Math.abs(u)<l.deadzonePercent;if(!_||!b){const A=p!==t.initialOffsets.x,T=u!==t.initialOffsets.y;(A||T)&&(Object.assign(t,{initialOffsets:{x:p,y:u}}),t.pluginDragging[r]=!0,n(!1),i(p*g,u*g))}else _&&b&&t.pluginDragging[r]&&(Object.assign(t,{initialOffsets:{x:0,y:0}}),t.pluginDragging[r]=!1,n(!0),o(0),a(0),c?.(yt.eventState()));d()}},d=()=>{l.pollingModel==="requestAnimationFrame"?requestAnimationFrame(f):typeof l.pollingModel=="number"&&setTimeout(f,l.pollingModel)};d()})},ol=(s={})=>({xIndex:0,yIndex:1,index:0,deadzonePercent:.05,pollingModel:"requestAnimationFrame",...s!==!0?s:{}}),wr=()=>({disableX:s,disableY:e,handleState:t,handleHandleMove:n,disableReset:i,setShouldTransition:r,setYOffset:o,setXOffset:a,onMove:c,pluginIndex:l,handleProps:h,handleRef:f})=>{const d=p=>{p.preventDefault();const u=s?0:p.targetTouches[0].clientX-t.initialOffsets.x,_=e?0:p.targetTouches[0].clientY-t.initialOffsets.y;n(u,_)},m=()=>{f.current.removeEventListener("touchmove",d),r(!0),i||(Object.assign(t,yt.handleState()),o(0),a(0),c?.(yt.eventState()))},g=h?.onpointerdown;Object.assign(h,{ontouchstart:p=>{typeof g=="function"&&g(p),f.current.addEventListener("touchmove",d),f.current.addEventListener("touchend",m,{once:!0}),r(!1),(!i||!t.pluginDragging[l])&&(Object.assign(t,{initialOffsets:{x:p.targetTouches[0].clientX,y:p.targetTouches[0].clientY}}),t.pluginDragging[l]=!0)}})},Er=()=>({disableX:s,disableY:e,handleState:t,handleHandleMove:n,disableReset:i,setShouldTransition:r,setYOffset:o,setXOffset:a,onMove:c,pluginIndex:l,handleProps:h})=>{const f=g=>{g.preventDefault();const p=s?0:g.clientX-t.initialOffsets.x,u=e?0:g.clientY-t.initialOffsets.y;n(p,u)},d=()=>{window.removeEventListener("mousemove",f),r(!0),i||(Object.assign(t,yt.handleState()),o(0),a(0),c?.(yt.eventState()))},m=h?.onpointerdown;Object.assign(h,{onmousedown:g=>{typeof m=="function"&&m(g),window.addEventListener("mousemove",f),window.addEventListener("mouseup",d,{once:!0}),r(!1),(!i||!t.pluginDragging[l])&&(Object.assign(t,{initialOffsets:{x:g.clientX,y:g.clientY}}),t.pluginDragging[l]=!0)}})},Tr=({up:s,down:e,left:t,right:n}=ja())=>({handleHandleMove:i,getRadius:r,handleState:o,pluginIndex:a,setXOffset:c,setYOffset:l,setShouldTransition:h,onMove:f})=>{const[d,m]=mn({});Qs(()=>{const u=d();try{const _=r();h(!0);let b=0,A=0;u.up&&(A-=_),u.down&&(A+=_),u.left&&(b-=_),u.right&&(b+=_),b===0&&A===0?(o.pluginDragging[a]=!1,c(0),l(0),f?.(yt.eventState())):o.pluginDragging[a]=!0,i(b,A)}catch{}});const g=u=>{u.code===s?m({...d(),up:!0}):u.code===e?m({...d(),down:!0}):u.code===t?m({...d(),left:!0}):u.code===n&&m({...d(),right:!0})},p=u=>{u.code===s?m({...d(),up:!1}):u.code===e?m({...d(),down:!1}):u.code===t?m({...d(),left:!1}):u.code===n&&m({...d(),right:!1})};window.addEventListener("keydown",g),window.addEventListener("keyup",p),Bs(()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",p)})},ja=(s="wasd")=>s==="wasd"?{up:"KeyW",down:"KeyS",left:"KeyA",right:"KeyD"}:{up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"},ll=Xa("<canvas></canvas>"),cl=({hideOnLock:s=!1}={})=>({handleProps:e,getRadius:t,setXOffset:n,setYOffset:i,onMove:r,baseRef:o})=>{const a=(()=>{const d=ll.cloneNode(!0);return d.style.setProperty("z-index","-1"),d.style.setProperty("height","1px"),d.style.setProperty("width","1px"),d.style.setProperty("background","transparent"),d})(),c=e.children??null;e.children=[c,a];const l=d=>{o.current&&s&&(o.current.style.visibility=d?"hidden":"unset")},h=()=>{const d=t(),m=d*.1;let g;const p=()=>{n(0),i(0),r(yt.eventState())},u=()=>{requestAnimationFrame(()=>{document.pointerLockElement?(g?g=void 0:p(),u()):(p(),l(!1),document.removeEventListener("mousemove",_))})};u();const _=b=>{if(g=b,document.pointerLockElement){n(b.movementX*m),i(b.movementY*m);const A=Pt.angleRadians(b.movementX,b.movementY),T=Pt.hypotenuse(b.movementX,b.movementY);r({offset:{pixels:{x:b.movementX,y:b.movementY},percentage:{x:b.movementX*m/d,y:b.movementY*m/d}},angle:{radians:A,degrees:Pt.radiansToDegrees(A)},pressure:{pixels:T,percentage:T*m}})}};document.addEventListener("mousemove",_)},f=e.onclick;e.onclick=d=>{typeof f=="function"&&f(d),l(!0),a.requestPointerLock(),setTimeout(()=>h(),100)}};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ir="141",hl=0,Ar=1,ul=2,Ya=1,fl=2,ai=3,fi=0,Mt=1,Xn=2,dl=1,tn=0,Wn=1,Cr=2,Lr=3,Dr=4,pl=5,kn=100,ml=101,gl=102,Rr=103,Pr=104,_l=200,xl=201,vl=202,Ml=203,$a=204,Za=205,yl=206,Sl=207,bl=208,wl=209,El=210,Tl=0,Al=1,Cl=2,Ws=3,Ll=4,Dl=5,Rl=6,Pl=7,Ki=0,Il=1,Fl=2,qt=0,Nl=1,zl=2,Ul=3,Ol=4,Bl=5,Ka=300,jn=301,Yn=302,qs=303,Xs=304,Ji=306,js=1e3,_t=1001,Ys=1002,st=1003,Ir=1004,Fr=1005,ht=1006,Gl=1007,Qi=1008,vn=1009,Vl=1010,kl=1011,Ja=1012,Hl=1013,fn=1014,dn=1015,di=1016,Wl=1017,ql=1018,qn=1020,Xl=1021,jl=1022,vt=1023,Yl=1024,$l=1025,gn=1026,$n=1027,Zl=1028,Kl=1029,Jl=1030,Ql=1031,ec=1033,rs=33776,as=33777,os=33778,ls=33779,Nr=35840,zr=35841,Ur=35842,Or=35843,tc=36196,Br=37492,Gr=37496,Vr=37808,kr=37809,Hr=37810,Wr=37811,qr=37812,Xr=37813,jr=37814,Yr=37815,$r=37816,Zr=37817,Kr=37818,Jr=37819,Qr=37820,ea=37821,ta=36492,Mn=3e3,ze=3001,nc=3200,ic=3201,Kn=0,sc=1,Ht="srgb",pn="srgb-linear",cs=7680,rc=519,na=35044,ia="300 es",$s=1035;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const qe=[];for(let s=0;s<256;s++)qe[s]=(s<16?"0":"")+s.toString(16);const hs=Math.PI/180,sa=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[e&255]+qe[e>>8&255]+"-"+qe[e>>16&15|64]+qe[e>>24&255]+"-"+qe[t&63|128]+qe[t>>8&255]+"-"+qe[t>>16&255]+qe[t>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function ac(s,e){return(s%e+e)%e}function us(s,e,t){return(1-t)*s+t*e}function ra(s){return(s&s-1)===0&&s!==0}function Zs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Ce{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],p=i[0],u=i[3],_=i[6],b=i[1],A=i[4],T=i[7],S=i[2],C=i[5],F=i[8];return r[0]=o*p+a*b+c*S,r[3]=o*u+a*A+c*C,r[6]=o*_+a*T+c*F,r[1]=l*p+h*b+f*S,r[4]=l*u+h*A+f*C,r[7]=l*_+h*T+f*F,r[2]=d*p+m*b+g*S,r[5]=d*u+m*A+g*C,r[8]=d*_+m*T+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(i*l-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Qa(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function $i(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fs={[Ht]:{[pn]:_n},[pn]:{[Ht]:Hi}},dt={legacyMode:!0,get workingColorSpace(){return pn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(fs[e]&&fs[e][t]!==void 0){const n=fs[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},eo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ge={r:0,g:0,b:0},pt={h:0,s:0,l:0},yi={h:0,s:0,l:0};function ds(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Si(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pn){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pn){if(e=ac(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ds(o,r,e+1/3),this.g=ds(o,r,e),this.b=ds(o,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,dt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,dt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,h=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,dt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,dt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ht){const n=eo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return dt.fromWorkingColorSpace(Si(this,Ge),e),rt(Ge.r*255,0,255)<<16^rt(Ge.g*255,0,255)<<8^rt(Ge.b*255,0,255)<<0}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pn){dt.fromWorkingColorSpace(Si(this,Ge),t);const n=Ge.r,i=Ge.g,r=Ge.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pn){return dt.fromWorkingColorSpace(Si(this,Ge),t),e.r=Ge.r,e.g=Ge.g,e.b=Ge.b,e}getStyle(e=Ht){return dt.fromWorkingColorSpace(Si(this,Ge),e),e!==Ht?`color(${e} ${Ge.r} ${Ge.g} ${Ge.b})`:`rgb(${Ge.r*255|0},${Ge.g*255|0},${Ge.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(pt),pt.h+=e,pt.s+=t,pt.l+=n,this.setHSL(pt.h,pt.s,pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pt),e.getHSL(yi);const n=us(pt.h,yi.h,t),i=us(pt.s,yi.s,t),r=us(pt.l,yi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ve.NAMES=eo;let Cn;class to{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cn===void 0&&(Cn=$i("canvas")),Cn.width=e.width,Cn.height=e.height;const n=Cn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$i("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class no{constructor(e=null){this.isSource=!0,this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ps(i[o].image)):r.push(ps(i[o]))}else r=ps(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ps(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?to.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oc=0;class St extends Jn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=_t,i=_t,r=ht,o=Qi,a=vt,c=vn,l=1,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=mi(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ka)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Ka;class Ze{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],p=c[2],u=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-p)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+p)<.1&&Math.abs(g+u)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,T=(m+1)/2,S=(_+1)/2,C=(h+d)/4,F=(f+p)/4,M=(g+u)/4;return A>T&&A>S?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=C/n,r=F/n):T>S?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=C/i,r=M/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=F/r,i=M/r),this.set(n,i,r,t),this}let b=Math.sqrt((u-g)*(u-g)+(f-p)*(f-p)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(u-g)/b,this.y=(f-p)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nn extends Jn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new no(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lc extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=st,this.minFilter=st,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==d||l!==m||h!==g){let u=1-a;const _=c*d+l*m+h*g+f*p,b=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const S=Math.sqrt(A),C=Math.atan2(S,_*b);u=Math.sin(u*C)/S,a=Math.sin(a*C)/S}const T=a*b;if(c=c*u+d*T,l=l*u+m*T,h=h*u+g*T,f=f*u+p*T,u===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*m-l*d,e[t+1]=c*g+h*d+l*f-a*m,e[t+2]=l*g+h*m+a*d-c*f,e[t+3]=h*g-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,f=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-f*-o,this.y=h*c+d*-o+f*-r-l*-a,this.z=f*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new R,aa=new gi;class _i{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],f=e[c+1],d=e[c+2];h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>r&&(r=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),f=e.getY(c),d=e.getZ(c);h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>r&&(r=h),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)rn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(rn)}else n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ii),bi.subVectors(this.max,ii),Ln.subVectors(e.a,ii),Dn.subVectors(e.b,ii),Rn.subVectors(e.c,ii),Yt.subVectors(Dn,Ln),$t.subVectors(Rn,Dn),an.subVectors(Ln,Rn);let t=[0,-Yt.z,Yt.y,0,-$t.z,$t.y,0,-an.z,an.y,Yt.z,0,-Yt.x,$t.z,0,-$t.x,an.z,0,-an.x,-Yt.y,Yt.x,0,-$t.y,$t.x,0,-an.y,an.x,0];return!_s(t,Ln,Dn,Rn,bi)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,Ln,Dn,Rn,bi))?!1:(wi.crossVectors(Yt,$t),t=[wi.x,wi.y,wi.z],_s(t,Ln,Dn,Rn,bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ot[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ot[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ot[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ot[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ot[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ot[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ot[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ot[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ot),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ot=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,gs=new _i,Ln=new R,Dn=new R,Rn=new R,Yt=new R,$t=new R,an=new R,ii=new R,bi=new R,wi=new R,on=new R;function _s(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){on.fromArray(s,r);const a=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),c=e.dot(on),l=t.dot(on),h=n.dot(on);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const cc=new _i,oa=new R,Ei=new R,xs=new R;class sr{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){xs.subVectors(e,this.center);const t=xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(xs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Ei.set(0,0,1).multiplyScalar(e.radius):Ei.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oa.copy(e.center).add(Ei)),this.expandByPoint(oa.copy(e.center).sub(Ei)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new R,vs=new R,Ti=new R,Zt=new R,Ms=new R,Ai=new R,ys=new R;class hc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.direction).multiplyScalar(t).add(this.origin),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vs.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(vs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ti),a=Zt.dot(this.direction),c=-Zt.dot(Ti),l=Zt.lengthSq(),h=Math.abs(1-o*o);let f,d,m,g;if(h>0)if(f=o*c-a,d=o*a-c,g=r*h,f>=0)if(d>=-g)if(d<=g){const p=1/h;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ti).multiplyScalar(d).add(vs),m}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),i=Bt.dot(Bt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,i,r){Ms.subVectors(t,e),Ai.subVectors(n,e),ys.crossVectors(Ms,Ai);let o=this.direction.dot(ys),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zt.subVectors(this.origin,e);const c=a*this.direction.dot(Ai.crossVectors(Zt,Ai));if(c<0)return null;const l=a*this.direction.dot(Ms.cross(Zt));if(l<0||c+l>o)return null;const h=-a*Zt.dot(ys);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l,h,f,d,m,g,p,u){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pn.setFromMatrixColumn(e,0).length(),r=1/Pn.setFromMatrixColumn(e,1).length(),o=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*f,g=a*h,p=a*f;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=p-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+g,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+p,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uc,e,fc)}lookAt(e,t,n){const i=this.elements;return ot.subVectors(e,t),ot.lengthSq()===0&&(ot.z=1),ot.normalize(),Kt.crossVectors(n,ot),Kt.lengthSq()===0&&(Math.abs(n.z)===1?ot.x+=1e-4:ot.z+=1e-4,ot.normalize(),Kt.crossVectors(n,ot)),Kt.normalize(),Ci.crossVectors(ot,Kt),i[0]=Kt.x,i[4]=Ci.x,i[8]=ot.x,i[1]=Kt.y,i[5]=Ci.y,i[9]=ot.y,i[2]=Kt.z,i[6]=Ci.z,i[10]=ot.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],p=n[6],u=n[10],_=n[14],b=n[3],A=n[7],T=n[11],S=n[15],C=i[0],F=i[4],M=i[8],w=i[12],N=i[1],P=i[5],J=i[9],j=i[13],L=i[2],k=i[6],B=i[10],q=i[14],X=i[3],O=i[7],W=i[11],Q=i[15];return r[0]=o*C+a*N+c*L+l*X,r[4]=o*F+a*P+c*k+l*O,r[8]=o*M+a*J+c*B+l*W,r[12]=o*w+a*j+c*q+l*Q,r[1]=h*C+f*N+d*L+m*X,r[5]=h*F+f*P+d*k+m*O,r[9]=h*M+f*J+d*B+m*W,r[13]=h*w+f*j+d*q+m*Q,r[2]=g*C+p*N+u*L+_*X,r[6]=g*F+p*P+u*k+_*O,r[10]=g*M+p*J+u*B+_*W,r[14]=g*w+p*j+u*q+_*Q,r[3]=b*C+A*N+T*L+S*X,r[7]=b*F+A*P+T*k+S*O,r[11]=b*M+A*J+T*B+S*W,r[15]=b*w+A*j+T*q+S*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],p=e[7],u=e[11],_=e[15];return g*(+r*c*f-i*l*f-r*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+u*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+_*(-i*a*h-t*c*f+t*a*d+i*o*f-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],p=e[13],u=e[14],_=e[15],b=f*u*l-p*d*l+p*c*m-a*u*m-f*c*_+a*d*_,A=g*d*l-h*u*l-g*c*m+o*u*m+h*c*_-o*d*_,T=h*p*l-g*f*l+g*a*m-o*p*m-h*a*_+o*f*_,S=g*f*c-h*p*c-g*a*d+o*p*d+h*a*u-o*f*u,C=t*b+n*A+i*T+r*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/C;return e[0]=b*F,e[1]=(p*d*r-f*u*r-p*i*m+n*u*m+f*i*_-n*d*_)*F,e[2]=(a*u*r-p*c*r+p*i*l-n*u*l-a*i*_+n*c*_)*F,e[3]=(f*c*r-a*d*r-f*i*l+n*d*l+a*i*m-n*c*m)*F,e[4]=A*F,e[5]=(h*u*r-g*d*r+g*i*m-t*u*m-h*i*_+t*d*_)*F,e[6]=(g*c*r-o*u*r-g*i*l+t*u*l+o*i*_-t*c*_)*F,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*m+t*c*m)*F,e[8]=T*F,e[9]=(g*f*r-h*p*r-g*n*m+t*p*m+h*n*_-t*f*_)*F,e[10]=(o*p*r-g*a*r+g*n*l-t*p*l-o*n*_+t*a*_)*F,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*m-t*a*m)*F,e[12]=S*F,e[13]=(h*p*i-g*f*i+g*n*d-t*p*d-h*n*u+t*f*u)*F,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*u-t*a*u)*F,e[15]=(o*f*i-h*a*i+h*n*c-t*f*c-o*n*d+t*a*d)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,m=r*h,g=r*f,p=o*h,u=o*f,_=a*f,b=c*l,A=c*h,T=c*f,S=n.x,C=n.y,F=n.z;return i[0]=(1-(p+_))*S,i[1]=(m+T)*S,i[2]=(g-A)*S,i[3]=0,i[4]=(m-T)*C,i[5]=(1-(d+_))*C,i[6]=(u+b)*C,i[7]=0,i[8]=(g+A)*F,i[9]=(u-b)*F,i[10]=(1-(d+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pn.set(i[0],i[1],i[2]).length();const o=Pn.set(i[4],i[5],i[6]).length(),a=Pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mt.copy(this);const l=1/r,h=1/o,f=1/a;return mt.elements[0]*=l,mt.elements[1]*=l,mt.elements[2]*=l,mt.elements[4]*=h,mt.elements[5]*=h,mt.elements[6]*=h,mt.elements[8]*=f,mt.elements[9]*=f,mt.elements[10]*=f,t.setFromRotationMatrix(mt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*l,m=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pn=new R,mt=new Je,uc=new R(0,0,0),fc=new R(1,1,1),Kt=new R,Ci=new R,ot=new R,la=new Je,ca=new gi;class xi{constructor(e=0,t=0,n=0,i=xi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return la.makeRotationFromQuaternion(e),this.setFromRotationMatrix(la,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ca.setFromEuler(this),this.setFromQuaternion(ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xi.DefaultOrder="XYZ";xi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class so{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dc=0;const ha=new R,In=new gi,Gt=new Je,Li=new R,si=new R,pc=new R,mc=new gi,ua=new R(1,0,0),fa=new R(0,1,0),da=new R(0,0,1),gc={type:"added"},pa={type:"removed"};class bt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new R,t=new xi,n=new gi,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ft}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(ua,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(da,e)}translateOnAxis(e,t){return ha.copy(e).applyQuaternion(this.quaternion),this.position.add(ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ua,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(da,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Li.copy(e):Li.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(si,Li,this.up):Gt.lookAt(Li,si,this.up),this.quaternion.setFromRotationMatrix(Gt),i&&(Gt.extractRotation(i.matrixWorld),In.setFromRotationMatrix(Gt),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,e,pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DefaultUp=new R(0,1,0);bt.DefaultMatrixAutoUpdate=!0;const gt=new R,Vt=new R,Ss=new R,kt=new R,Fn=new R,Nn=new R,ma=new R,bs=new R,ws=new R,Es=new R;class It{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gt.subVectors(e,t),i.cross(gt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gt.subVectors(i,t),Vt.subVectors(n,t),Ss.subVectors(e,t);const o=gt.dot(gt),a=gt.dot(Vt),c=gt.dot(Ss),l=Vt.dot(Vt),h=Vt.dot(Ss),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kt),kt.x>=0&&kt.y>=0&&kt.x+kt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,kt),c.set(0,0),c.addScaledVector(r,kt.x),c.addScaledVector(o,kt.y),c.addScaledVector(a,kt.z),c}static isFrontFacing(e,t,n,i){return gt.subVectors(n,t),Vt.subVectors(e,t),gt.cross(Vt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gt.subVectors(this.c,this.b),Vt.subVectors(this.a,this.b),gt.cross(Vt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return It.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fn.subVectors(i,n),Nn.subVectors(r,n),bs.subVectors(e,n);const c=Fn.dot(bs),l=Nn.dot(bs);if(c<=0&&l<=0)return t.copy(n);ws.subVectors(e,i);const h=Fn.dot(ws),f=Nn.dot(ws);if(h>=0&&f<=h)return t.copy(i);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fn,o);Es.subVectors(e,r);const m=Fn.dot(Es),g=Nn.dot(Es);if(g>=0&&m<=g)return t.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Nn,a);const u=h*g-m*f;if(u<=0&&f-h>=0&&m-g>=0)return ma.subVectors(r,i),a=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(ma,a);const _=1/(u+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(Fn,o).addScaledVector(Nn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _c=0;class Xe extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Wn,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===dl;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Xe.fromType=function(){return null};class rr extends Xe{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ki,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Be=new R,Di=new Ce;class Nt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ve),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ce),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new R),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix3(e),this.setXY(t,Di.x,Di.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ro extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ao extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xn extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xc=0;const ct=new Je,Ts=new bt,zn=new R,lt=new _i,ri=new _i,ke=new R;class Sn extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qa(e)?ao:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ct.makeRotationFromQuaternion(e),this.applyMatrix4(ct),this}rotateX(e){return ct.makeRotationX(e),this.applyMatrix4(ct),this}rotateY(e){return ct.makeRotationY(e),this.applyMatrix4(ct),this}rotateZ(e){return ct.makeRotationZ(e),this.applyMatrix4(ct),this}translate(e,t,n){return ct.makeTranslation(e,t,n),this.applyMatrix4(ct),this}scale(e,t,n){return ct.makeScale(e,t,n),this.applyMatrix4(ct),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,lt.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,lt.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(lt.min),this.boundingBox.expandByPoint(lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(lt.min,ri.min),lt.expandByPoint(ke),ke.addVectors(lt.max,ri.max),lt.expandByPoint(ke)):(lt.expandByPoint(ri.min),lt.expandByPoint(ri.max))}lt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ke.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ke));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ke.fromBufferAttribute(a,l),c&&(zn.fromBufferAttribute(e,l),ke.add(zn)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let N=0;N<a;N++)l[N]=new R,h[N]=new R;const f=new R,d=new R,m=new R,g=new Ce,p=new Ce,u=new Ce,_=new R,b=new R;function A(N,P,J){f.fromArray(i,N*3),d.fromArray(i,P*3),m.fromArray(i,J*3),g.fromArray(o,N*2),p.fromArray(o,P*2),u.fromArray(o,J*2),d.sub(f),m.sub(f),p.sub(g),u.sub(g);const j=1/(p.x*u.y-u.x*p.y);!isFinite(j)||(_.copy(d).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(j),b.copy(m).multiplyScalar(p.x).addScaledVector(d,-u.x).multiplyScalar(j),l[N].add(_),l[P].add(_),l[J].add(_),h[N].add(b),h[P].add(b),h[J].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let N=0,P=T.length;N<P;++N){const J=T[N],j=J.start,L=J.count;for(let k=j,B=j+L;k<B;k+=3)A(n[k+0],n[k+1],n[k+2])}const S=new R,C=new R,F=new R,M=new R;function w(N){F.fromArray(r,N*3),M.copy(F);const P=l[N];S.copy(P),S.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(M,P);const j=C.dot(h[N])<0?-1:1;c[N*4]=S.x,c[N*4+1]=S.y,c[N*4+2]=S.z,c[N*4+3]=j}for(let N=0,P=T.length;N<P;++N){const J=T[N],j=J.start,L=J.count;for(let k=j,B=j+L;k<B;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,f=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),u=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,u),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,u),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let f=0,d=l;f<h;f++,d++)o[d]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ke.fromBufferAttribute(e,t),ke.normalize(),e.setXYZ(t,ke.x,ke.y,ke.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let p=0,u=c.length;p<u;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new Nt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ga=new Je,Un=new hc,As=new sr,Jt=new R,Qt=new R,en=new R,Cs=new R,Ls=new R,Ds=new R,Ri=new R,Pi=new R,Ii=new R,Fi=new Ce,Ni=new Ce,zi=new Ce,Rs=new R,Ui=new R;class Wt extends bt{constructor(e=new Sn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),e.ray.intersectsSphere(As)===!1)||(ga.copy(r).invert(),Un.copy(e.ray).applyMatrix4(ga),n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],b=i[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,C=T;S<C;S+=3){const F=a.getX(S),M=a.getX(S+1),w=a.getX(S+2);o=Oi(this,b,e,Un,c,l,h,f,d,F,M,w),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(a.count,g.start+g.count);for(let _=p,b=u;_<b;_+=3){const A=a.getX(_),T=a.getX(_+1),S=a.getX(_+2);o=Oi(this,i,e,Un,c,l,h,f,d,A,T,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){const _=m[p],b=i[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let S=A,C=T;S<C;S+=3){const F=S,M=S+1,w=S+2;o=Oi(this,b,e,Un,c,l,h,f,d,F,M,w),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),u=Math.min(c.count,g.start+g.count);for(let _=p,b=u;_<b;_+=3){const A=_,T=_+1,S=_+2;o=Oi(this,i,e,Un,c,l,h,f,d,A,T,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function vc(s,e,t,n,i,r,o,a){let c;if(e.side===Mt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==Xn,a),c===null)return null;Ui.copy(a),Ui.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ui);return l<t.near||l>t.far?null:{distance:l,point:Ui.clone(),object:s}}function Oi(s,e,t,n,i,r,o,a,c,l,h,f){Jt.fromBufferAttribute(i,l),Qt.fromBufferAttribute(i,h),en.fromBufferAttribute(i,f);const d=s.morphTargetInfluences;if(r&&d){Ri.set(0,0,0),Pi.set(0,0,0),Ii.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const u=d[g],_=r[g];u!==0&&(Cs.fromBufferAttribute(_,l),Ls.fromBufferAttribute(_,h),Ds.fromBufferAttribute(_,f),o?(Ri.addScaledVector(Cs,u),Pi.addScaledVector(Ls,u),Ii.addScaledVector(Ds,u)):(Ri.addScaledVector(Cs.sub(Jt),u),Pi.addScaledVector(Ls.sub(Qt),u),Ii.addScaledVector(Ds.sub(en),u)))}Jt.add(Ri),Qt.add(Pi),en.add(Ii)}s.isSkinnedMesh&&(s.boneTransform(l,Jt),s.boneTransform(h,Qt),s.boneTransform(f,en));const m=vc(s,e,t,n,Jt,Qt,en,Rs);if(m){a&&(Fi.fromBufferAttribute(a,l),Ni.fromBufferAttribute(a,h),zi.fromBufferAttribute(a,f),m.uv=It.getUV(Rs,Jt,Qt,en,Fi,Ni,zi,new Ce)),c&&(Fi.fromBufferAttribute(c,l),Ni.fromBufferAttribute(c,h),zi.fromBufferAttribute(c,f),m.uv2=It.getUV(Rs,Jt,Qt,en,Fi,Ni,zi,new Ce));const g={a:l,b:h,c:f,normal:new R,materialIndex:0};It.getNormal(Jt,Qt,en,g.normal),m.face=g}return m}class Qn extends Sn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(f,2));function g(p,u,_,b,A,T,S,C,F,M,w){const N=T/F,P=S/M,J=T/2,j=S/2,L=C/2,k=F+1,B=M+1;let q=0,X=0;const O=new R;for(let W=0;W<B;W++){const Q=W*P-j;for(let Y=0;Y<k;Y++){const Z=Y*N-J;O[p]=Z*b,O[u]=Q*A,O[_]=L,l.push(O.x,O.y,O.z),O[p]=0,O[u]=0,O[_]=C>0?1:-1,h.push(O.x,O.y,O.z),f.push(Y/F),f.push(1-W/M),q+=1}}for(let W=0;W<M;W++)for(let Q=0;Q<F;Q++){const Y=d+Q+k*W,Z=d+Q+k*(W+1),ce=d+(Q+1)+k*(W+1),ue=d+(Q+1)+k*W;c.push(Y,Z,ue),c.push(Z,ce,ue),X+=6}a.addGroup(m,X,w),m+=X,d+=q}}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ye(s){const e={};for(let t=0;t<s.length;t++){const n=Zn(s[t]);for(const i in n)e[i]=n[i]}return e}const Mc={clone:Zn,merge:Ye};var yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Xe{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=yc,this.fragmentShader=Sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oo extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ut extends oo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const On=90,Bn=1;class bc extends bt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ut(On,Bn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new ut(On,Bn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const o=new ut(On,Bn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new ut(On,Bn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const c=new ut(On,Bn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,1)),this.add(c);const l=new ut(On,Bn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class lo extends St{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wc extends nn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qn(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Zn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:tn});r.uniforms.tEquirect.value=t;const o=new Wt(i,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=ht),new bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ps=new R,Ec=new R,Tc=new Ft;class cn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ps.subVectors(n,t).cross(Ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ps),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tc.getNormalMatrix(e),i=this.coplanarPoint(Ps).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new sr,Bi=new R;class co{constructor(e=new cn,t=new cn,n=new cn,i=new cn,r=new cn,o=new cn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],f=n[7],d=n[8],m=n[9],g=n[10],p=n[11],u=n[12],_=n[13],b=n[14],A=n[15];return t[0].setComponents(a-i,f-c,p-d,A-u).normalize(),t[1].setComponents(a+i,f+c,p+d,A+u).normalize(),t[2].setComponents(a+r,f+l,p+m,A+_).normalize(),t[3].setComponents(a-r,f-l,p-m,A-_).normalize(),t[4].setComponents(a-o,f-h,p-g,A-b).normalize(),t[5].setComponents(a+o,f+h,p+g,A+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bi.x=i.normal.x>0?e.max.x:e.min.x,Bi.y=i.normal.y>0?e.max.y:e.min.y,Bi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ho(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ac(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const f=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,f){const d=h.array,m=h.updateRange;s.bindBuffer(f,l),m.count===-1?s.bufferSubData(f,0,d):(t?s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,h)):f.version<l.version&&(r(f.buffer,l,h),f.version=l.version)}return{get:o,remove:a,update:c}}class ar extends Sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=e/a,d=t/c,m=[],g=[],p=[],u=[];for(let _=0;_<h;_++){const b=_*d-o;for(let A=0;A<l;A++){const T=A*f-r;g.push(T,-b,0),p.push(0,0,1),u.push(A/a),u.push(1-_/c)}}for(let _=0;_<c;_++)for(let b=0;b<a;b++){const A=b+l*_,T=b+l*(_+1),S=b+1+l*(_+1),C=b+1+l*_;m.push(A,T,C),m.push(T,S,C)}this.setIndex(m),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(u,2))}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc="vec3 transformed = vec3( position );",Nc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Uc=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Oc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$c=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ph=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,mh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,su=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ru=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,au=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gu=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,_u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Mu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,bu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,wu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ru=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ku=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:Cc,alphamap_pars_fragment:Lc,alphatest_fragment:Dc,alphatest_pars_fragment:Rc,aomap_fragment:Pc,aomap_pars_fragment:Ic,begin_vertex:Fc,beginnormal_vertex:Nc,bsdfs:zc,iridescence_fragment:Uc,bumpmap_pars_fragment:Oc,clipping_planes_fragment:Bc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:Vc,clipping_planes_vertex:kc,color_fragment:Hc,color_pars_fragment:Wc,color_pars_vertex:qc,color_vertex:Xc,common:jc,cube_uv_reflection_fragment:Yc,defaultnormal_vertex:$c,displacementmap_pars_vertex:Zc,displacementmap_vertex:Kc,emissivemap_fragment:Jc,emissivemap_pars_fragment:Qc,encodings_fragment:eh,encodings_pars_fragment:th,envmap_fragment:nh,envmap_common_pars_fragment:ih,envmap_pars_fragment:sh,envmap_pars_vertex:rh,envmap_physical_pars_fragment:gh,envmap_vertex:ah,fog_vertex:oh,fog_pars_vertex:lh,fog_fragment:ch,fog_pars_fragment:hh,gradientmap_pars_fragment:uh,lightmap_fragment:fh,lightmap_pars_fragment:dh,lights_lambert_vertex:ph,lights_pars_begin:mh,lights_toon_fragment:_h,lights_toon_pars_fragment:xh,lights_phong_fragment:vh,lights_phong_pars_fragment:Mh,lights_physical_fragment:yh,lights_physical_pars_fragment:Sh,lights_fragment_begin:bh,lights_fragment_maps:wh,lights_fragment_end:Eh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:Ah,logdepthbuf_pars_vertex:Ch,logdepthbuf_vertex:Lh,map_fragment:Dh,map_pars_fragment:Rh,map_particle_fragment:Ph,map_particle_pars_fragment:Ih,metalnessmap_fragment:Fh,metalnessmap_pars_fragment:Nh,morphcolor_vertex:zh,morphnormal_vertex:Uh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:Gh,normal_fragment_maps:Vh,normal_pars_fragment:kh,normal_pars_vertex:Hh,normal_vertex:Wh,normalmap_pars_fragment:qh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:jh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:$h,output_fragment:Zh,packing:Kh,premultiplied_alpha_fragment:Jh,project_vertex:Qh,dithering_fragment:eu,dithering_pars_fragment:tu,roughnessmap_fragment:nu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:su,shadowmap_pars_vertex:ru,shadowmap_vertex:au,shadowmask_pars_fragment:ou,skinbase_vertex:lu,skinning_pars_vertex:cu,skinning_vertex:hu,skinnormal_vertex:uu,specularmap_fragment:fu,specularmap_pars_fragment:du,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:gu,transmission_pars_fragment:_u,uv_pars_fragment:xu,uv_pars_vertex:vu,uv_vertex:Mu,uv2_pars_fragment:yu,uv2_pars_vertex:Su,uv2_vertex:bu,worldpos_vertex:wu,background_vert:Eu,background_frag:Tu,cube_vert:Au,cube_frag:Cu,depth_vert:Lu,depth_frag:Du,distanceRGBA_vert:Ru,distanceRGBA_frag:Pu,equirect_vert:Iu,equirect_frag:Fu,linedashed_vert:Nu,linedashed_frag:zu,meshbasic_vert:Uu,meshbasic_frag:Ou,meshlambert_vert:Bu,meshlambert_frag:Gu,meshmatcap_vert:Vu,meshmatcap_frag:ku,meshnormal_vert:Hu,meshnormal_frag:Wu,meshphong_vert:qu,meshphong_frag:Xu,meshphysical_vert:ju,meshphysical_frag:Yu,meshtoon_vert:$u,meshtoon_frag:Zu,points_vert:Ku,points_frag:Ju,shadow_vert:Qu,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},ie={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ft},uv2Transform:{value:new Ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ft}}},Rt={basic:{uniforms:Ye([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Ye([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Ye([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Ye([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Ye([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ve(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Ye([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Ye([ie.points,ie.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Ye([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Ye([ie.common,ie.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Ye([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Ye([ie.sprite,ie.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:Ye([ie.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Ye([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Ye([ie.lights,ie.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Rt.physical={uniforms:Ye([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};function sf(s,e,t,n,i,r){const o=new ve(0);let a=i===!0?0:1,c,l,h=null,f=0,d=null;function m(p,u){let _=!1,b=u.isScene===!0?u.background:null;b&&b.isTexture&&(b=e.get(b));const A=s.xr,T=A.getSession&&A.getSession();T&&T.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ji)?(l===void 0&&(l=new Wt(new Qn(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Zn(Rt.cube.uniforms),vertexShader:Rt.cube.vertexShader,fragmentShader:Rt.cube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(h!==b||f!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wt(new ar(2,2),new Xt({name:"BackgroundMaterial",uniforms:Zn(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){t.buffers.color.setClear(p.r,p.g,p.b,u,r)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),a=u,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function rf(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=u(null);let l=c,h=!1;function f(L,k,B,q,X){let O=!1;if(o){const W=p(q,B,k);l!==W&&(l=W,m(l.object)),O=_(L,q,B,X),O&&b(L,q,B,X)}else{const W=k.wireframe===!0;(l.geometry!==q.id||l.program!==B.id||l.wireframe!==W)&&(l.geometry=q.id,l.program=B.id,l.wireframe=W,O=!0)}X!==null&&t.update(X,34963),(O||h)&&(h=!1,M(L,k,B,q),X!==null&&s.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function p(L,k,B){const q=B.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let O=X[k.id];O===void 0&&(O={},X[k.id]=O);let W=O[q];return W===void 0&&(W=u(d()),O[q]=W),W}function u(L){const k=[],B=[],q=[];for(let X=0;X<i;X++)k[X]=0,B[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:q,object:L,attributes:{},index:null}}function _(L,k,B,q){const X=l.attributes,O=k.attributes;let W=0;const Q=B.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const ce=X[Y];let ue=O[Y];if(ue===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;W++}return l.attributesNum!==W||l.index!==q}function b(L,k,B,q){const X={},O=k.attributes;let W=0;const Q=B.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let ce=O[Y];ce===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor));const ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),X[Y]=ue,W++}l.attributes=X,l.attributesNum=W,l.index=q}function A(){const L=l.newAttributes;for(let k=0,B=L.length;k<B;k++)L[k]=0}function T(L){S(L,0)}function S(L,k){const B=l.newAttributes,q=l.enabledAttributes,X=l.attributeDivisors;B[L]=1,q[L]===0&&(s.enableVertexAttribArray(L),q[L]=1),X[L]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),X[L]=k)}function C(){const L=l.newAttributes,k=l.enabledAttributes;for(let B=0,q=k.length;B<q;B++)k[B]!==L[B]&&(s.disableVertexAttribArray(B),k[B]=0)}function F(L,k,B,q,X,O){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(L,k,B,X,O):s.vertexAttribPointer(L,k,B,q,X,O)}function M(L,k,B,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const X=q.attributes,O=B.getAttributes(),W=k.defaultAttributeValues;for(const Q in O){const Y=O[Q];if(Y.location>=0){let Z=X[Q];if(Z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ce=Z.normalized,ue=Z.itemSize,V=t.get(Z);if(V===void 0)continue;const Ne=V.buffer,Me=V.type,ye=V.bytesPerElement;if(Z.isInterleavedBufferAttribute){const re=Z.data,Ie=re.stride,Ee=Z.offset;if(re.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)S(Y.location+ge,re.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<Y.locationSize;ge++)T(Y.location+ge);s.bindBuffer(34962,Ne);for(let ge=0;ge<Y.locationSize;ge++)F(Y.location+ge,ue/Y.locationSize,Me,ce,Ie*ye,(Ee+ue/Y.locationSize*ge)*ye)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)S(Y.location+re,Z.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<Y.locationSize;re++)T(Y.location+re);s.bindBuffer(34962,Ne);for(let re=0;re<Y.locationSize;re++)F(Y.location+re,ue/Y.locationSize,Me,ce,ue*ye,ue/Y.locationSize*re*ye)}}else if(W!==void 0){const ce=W[Q];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(Y.location,ce);break;case 3:s.vertexAttrib3fv(Y.location,ce);break;case 4:s.vertexAttrib4fv(Y.location,ce);break;default:s.vertexAttrib1fv(Y.location,ce)}}}}C()}function w(){J();for(const L in a){const k=a[L];for(const B in k){const q=k[B];for(const X in q)g(q[X].object),delete q[X];delete k[B]}delete a[L]}}function N(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const B in k){const q=k[B];for(const X in q)g(q[X].object),delete q[X];delete k[B]}delete a[L.id]}function P(L){for(const k in a){const B=a[k];if(B[L.id]===void 0)continue;const q=B[L.id];for(const X in q)g(q[X].object),delete q[X];delete B[L.id]}}function J(){j(),h=!0,l!==c&&(l=c,m(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:J,resetDefaultState:j,dispose:w,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:T,disableUnusedAttributes:C}}function af(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,f),t.update(h,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function of(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(F){if(F==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),u=s.getParameter(36347),_=s.getParameter(36348),b=s.getParameter(36349),A=d>0,T=o||e.has("OES_texture_float"),S=A&&T,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:A,floatFragmentTextures:T,floatVertexTextures:S,maxSamples:C}}function lf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new cn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||i;return i=d,t=h(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(f,d,m){const g=f.clippingPlanes,p=f.clipIntersection,u=f.clipShadows,_=s.get(f);if(!i||g===null||g.length===0||r&&!u)r?h(null):l();else{const b=r?0:n,A=b*4;let T=_.clippingState||null;c.value=T,T=h(g,d,A,m);for(let S=0;S!==A;++S)T[S]=t[S];_.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,g){const p=f!==null?f.length:0;let u=null;if(p!==0){if(u=c.value,g!==!0||u===null){const _=m+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(u===null||u.length<_)&&(u=new Float32Array(_));for(let A=0,T=m;A!==p;++A,T+=4)o.copy(f[A]).applyMatrix4(b,a),o.normal.toArray(u,T),u[T+3]=o.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function cf(s){let e=new WeakMap;function t(o,a){return a===qs?o.mapping=jn:a===Xs&&(o.mapping=Yn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qs||a===Xs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wc(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hf extends oo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hn=4,_a=[.125,.215,.35,.446,.526,.582],un=20,Is=new hf,xa=new ve;let Fs=null;const hn=(1+Math.sqrt(5))/2,Vn=1/hn,va=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,hn,Vn),new R(0,hn,-Vn),new R(Vn,0,hn),new R(-Vn,0,hn),new R(hn,Vn,0),new R(-hn,Vn,0)];class Ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs),e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===Yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:di,format:vt,encoding:Mn,depthBuffer:!1},i=ya(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(r)),this._blurMaterial=ff(r,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,n,i){const a=new ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(xa),h.toneMapping=qt,h.autoClear=!1;const m=new rr({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),g=new Wt(new Qn,m);let p=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(xa),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):b===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const A=this._cubeSize;Gi(i,b*A,_>2?A:0,A,A),h.setRenderTarget(i),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===jn||e.mapping===Yn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=va[(i-1)%va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Wt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*un-1),p=r/g,u=isFinite(r)?1+Math.floor(h*p):un;u>un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${un}`);const _=[];let b=0;for(let F=0;F<un;++F){const M=F/p,w=Math.exp(-M*M/2);_.push(w),F===0?b+=w:F<u&&(b+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/b;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;const T=this._sizeLods[i],S=3*T*(i>A-Hn?i-A+Hn:0),C=4*(this._cubeSize-T);Gi(t,S,C,3*T,2*T),c.setRenderTarget(t),c.render(f,Is)}}function uf(s){const e=[],t=[],n=[];let i=s;const r=s-Hn+1+_a.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Hn?c=_a[o-s+Hn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,p=3,u=2,_=1,b=new Float32Array(p*g*m),A=new Float32Array(u*g*m),T=new Float32Array(_*g*m);for(let C=0;C<m;C++){const F=C%3*2/3-1,M=C>2?0:-1,w=[F,M,0,F+2/3,M,0,F+2/3,M+1,0,F,M,0,F+2/3,M+1,0,F,M+1,0];b.set(w,p*g*C),A.set(d,u*g*C);const N=[C,C,C,C,C,C];T.set(N,_*g*C)}const S=new Sn;S.setAttribute("position",new Nt(b,p)),S.setAttribute("uv",new Nt(A,u)),S.setAttribute("faceIndex",new Nt(T,_)),e.push(S),i>Hn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ya(s,e,t){const n=new nn(s,e,t);return n.texture.mapping=Ji,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ff(s,e,t){const n=new Float32Array(un),i=new R(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Sa(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ba(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===qs||c===Xs,h=c===jn||c===Yn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ma(s)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new Ma(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mf(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let A=0,T=b.length;A<T;A+=3){const S=b[A+0],C=b[A+1],F=b[A+2];d.push(S,C,C,F,F,S)}}else{const b=g.array;p=g.version;for(let A=0,T=b.length/3-1;A<T;A+=3){const S=A+0,C=A+1,F=A+2;d.push(S,C,C,F,F,S)}}const u=new(Qa(d)?ao:ro)(d,1);u.version=p;const _=r.get(f);_&&e.remove(_),r.set(f,u)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function gf(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*c),t.update(m,r,1)}function f(d,m,g){if(g===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,m,a,d*c,g),t.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f}function _f(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xf(s,e){return s[0]-e[0]}function vf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ns(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Mf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ze,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,u=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==u){let B=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var g=B;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,F=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),S===!0&&(N=2),C===!0&&(N=3);let P=h.attributes.position.count*N,J=1;P>e.maxTextureSize&&(J=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const j=new Float32Array(P*J*4*u),L=new io(j,P,J,u);L.type=dn,L.needsUpdate=!0;const k=N*4;for(let q=0;q<u;q++){const X=F[q],O=M[q],W=w[q],Q=P*J*4*q;for(let Y=0;Y<X.count;Y++){const Z=Y*k;T===!0&&(o.fromBufferAttribute(X,Y),X.normalized===!0&&Ns(o,X),j[Q+Z+0]=o.x,j[Q+Z+1]=o.y,j[Q+Z+2]=o.z,j[Q+Z+3]=0),S===!0&&(o.fromBufferAttribute(O,Y),O.normalized===!0&&Ns(o,O),j[Q+Z+4]=o.x,j[Q+Z+5]=o.y,j[Q+Z+6]=o.z,j[Q+Z+7]=0),C===!0&&(o.fromBufferAttribute(W,Y),W.normalized===!0&&Ns(o,W),j[Q+Z+8]=o.x,j[Q+Z+9]=o.y,j[Q+Z+10]=o.z,j[Q+Z+11]=W.itemSize===4?o.w:1)}}_={count:u,texture:L,size:new Ce(P,J)},r.set(h,_),h.addEventListener("dispose",B)}let b=0;for(let T=0;T<m.length;T++)b+=m[T];const A=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let u=n[h.id];if(u===void 0||u.length!==p){u=[];for(let S=0;S<p;S++)u[S]=[S,0];n[h.id]=u}for(let S=0;S<p;S++){const C=u[S];C[0]=S,C[1]=m[S]}u.sort(vf);for(let S=0;S<8;S++)S<p&&u[S][1]?(a[S][0]=u[S][0],a[S][1]=u[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(xf);const _=h.morphAttributes.position,b=h.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const C=a[S],F=C[0],M=C[1];F!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+S)!==_[F]&&h.setAttribute("morphTarget"+S,_[F]),b&&h.getAttribute("morphNormal"+S)!==b[F]&&h.setAttribute("morphNormal"+S,b[F]),i[S]=M,A+=M):(_&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),b&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const T=h.morphTargetsRelative?1:1-A;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function yf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const uo=new St,fo=new io,po=new lc,mo=new lo,wa=[],Ea=[],Ta=new Float32Array(16),Aa=new Float32Array(9),Ca=new Float32Array(4);function ei(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=wa[i];if(r===void 0&&(r=new Float32Array(i),wa[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function es(s,e){let t=Ea[e];t===void 0&&(t=new Int32Array(e),Ea[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Sf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;s.uniform2fv(this.addr,e),nt(t,e)}}function wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;s.uniform3fv(this.addr,e),nt(t,e)}}function Ef(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;s.uniform4fv(this.addr,e),nt(t,e)}}function Tf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ca.set(n),s.uniformMatrix2fv(this.addr,!1,Ca),nt(t,n)}}function Af(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Aa.set(n),s.uniformMatrix3fv(this.addr,!1,Aa),nt(t,n)}}function Cf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ta.set(n),s.uniformMatrix4fv(this.addr,!1,Ta),nt(t,n)}}function Lf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Df(s,e){const t=this.cache;tt(t,e)||(s.uniform2iv(this.addr,e),nt(t,e))}function Rf(s,e){const t=this.cache;tt(t,e)||(s.uniform3iv(this.addr,e),nt(t,e))}function Pf(s,e){const t=this.cache;tt(t,e)||(s.uniform4iv(this.addr,e),nt(t,e))}function If(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ff(s,e){const t=this.cache;tt(t,e)||(s.uniform2uiv(this.addr,e),nt(t,e))}function Nf(s,e){const t=this.cache;tt(t,e)||(s.uniform3uiv(this.addr,e),nt(t,e))}function zf(s,e){const t=this.cache;tt(t,e)||(s.uniform4uiv(this.addr,e),nt(t,e))}function Uf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||uo,i)}function Of(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||po,i)}function Bf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mo,i)}function Gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fo,i)}function Vf(s){switch(s){case 5126:return Sf;case 35664:return bf;case 35665:return wf;case 35666:return Ef;case 35674:return Tf;case 35675:return Af;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return Rf;case 35669:case 35673:return Pf;case 5125:return If;case 36294:return Ff;case 36295:return Nf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Gf}}function kf(s,e){s.uniform1fv(this.addr,e)}function Hf(s,e){const t=ei(e,this.size,2);s.uniform2fv(this.addr,t)}function Wf(s,e){const t=ei(e,this.size,3);s.uniform3fv(this.addr,t)}function qf(s,e){const t=ei(e,this.size,4);s.uniform4fv(this.addr,t)}function Xf(s,e){const t=ei(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jf(s,e){const t=ei(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yf(s,e){const t=ei(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $f(s,e){s.uniform1iv(this.addr,e)}function Zf(s,e){s.uniform2iv(this.addr,e)}function Kf(s,e){s.uniform3iv(this.addr,e)}function Jf(s,e){s.uniform4iv(this.addr,e)}function Qf(s,e){s.uniform1uiv(this.addr,e)}function ed(s,e){s.uniform2uiv(this.addr,e)}function td(s,e){s.uniform3uiv(this.addr,e)}function nd(s,e){s.uniform4uiv(this.addr,e)}function id(s,e,t){const n=e.length,i=es(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||uo,i[r])}function sd(s,e,t){const n=e.length,i=es(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||po,i[r])}function rd(s,e,t){const n=e.length,i=es(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||mo,i[r])}function ad(s,e,t){const n=e.length,i=es(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||fo,i[r])}function od(s){switch(s){case 5126:return kf;case 35664:return Hf;case 35665:return Wf;case 35666:return qf;case 35674:return Xf;case 35675:return jf;case 35676:return Yf;case 5124:case 35670:return $f;case 35667:case 35671:return Zf;case 35668:case 35672:return Kf;case 35669:case 35673:return Jf;case 5125:return Qf;case 36294:return ed;case 36295:return td;case 36296:return nd;case 35678:case 36198:case 36298:case 36306:case 35682:return id;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return rd;case 36289:case 36303:case 36311:case 36292:return ad}}class ld{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vf(t.type)}}class cd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=od(t.type)}}class hd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function La(s,e){s.seq.push(e),s.map[e.id]=e}function ud(s,e,t){const n=s.name,i=n.length;for(zs.lastIndex=0;;){const r=zs.exec(n),o=zs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){La(t,l===void 0?new ld(a,s,e):new cd(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new hd(a),La(t,f)),t=f}}}class Wi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ud(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Da(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let fd=0;function dd(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pd(s){switch(s){case Mn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ra(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+dd(s.getShaderSource(e),o)}else return i}function md(s,e){const t=pd(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gd(s,e){let t;switch(e){case Nl:t="Linear";break;case zl:t="Reinhard";break;case Ul:t="OptimizedCineon";break;case Ol:t="ACESFilmic";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _d(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}function xd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vd(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function oi(s){return s!==""}function Pa(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Md=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ks(s){return s.replace(Md,yd)}function yd(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ks(t)}const Sd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fa(s){return s.replace(bd,go).replace(Sd,wd)}function wd(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),go(s,e,t,n)}function go(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Na(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ed(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Td(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jn:case Yn:e="ENVMAP_TYPE_CUBE";break;case Ji:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ad(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yn:e="ENVMAP_MODE_REFRACTION";break}return e}function Cd(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ki:e="ENVMAP_BLENDING_MULTIPLY";break;case Il:e="ENVMAP_BLENDING_MIX";break;case Fl:e="ENVMAP_BLENDING_ADD";break}return e}function Ld(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dd(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ed(t),l=Td(t),h=Ad(t),f=Cd(t),d=Ld(t),m=t.isWebGL2?"":_d(t),g=xd(r),p=i.createProgram();let u,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(oi).join(`
`),u.length>0&&(u+=`
`),_=[m,g].filter(oi).join(`
`),_.length>0&&(_+=`
`)):(u=[Na(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),_=[m,Na(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?we.tonemapping_pars_fragment:"",t.toneMapping!==qt?gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,md("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oi).join(`
`)),o=Ks(o),o=Pa(o,t),o=Ia(o,t),a=Ks(a),a=Pa(a,t),a=Ia(a,t),o=Fa(o),a=Fa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=b+u+o,T=b+_+a,S=Da(i,35633,A),C=Da(i,35632,T);if(i.attachShader(p,S),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(S).trim(),P=i.getShaderInfoLog(C).trim();let J=!0,j=!0;if(i.getProgramParameter(p,35714)===!1){J=!1;const L=Ra(i,S,"vertex"),k=Ra(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+L+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(N===""||P==="")&&(j=!1);j&&(this.diagnostics={runnable:J,programLog:w,vertexShader:{log:N,prefix:u},fragmentShader:{log:P,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new Wi(i,p)),F};let M;return this.getAttributes=function(){return M===void 0&&(M=vd(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=fd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let Rd=0;class Pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Id(e);t.set(e,n)}return t.get(e)}}class Id{constructor(e){this.id=Rd++,this.code=e,this.usedTimes=0}}function Fd(s,e,t,n,i,r,o){const a=new so,c=new Pd,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,w,N,P,J){const j=P.fog,L=J.geometry,k=M.isMeshStandardMaterial?P.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),q=!!B&&B.mapping===Ji?B.image.height:null,X=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const O=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,W=O!==void 0?O.length:0;let Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let Y,Z,ce,ue;if(X){const Ie=Rt[X];Y=Ie.vertexShader,Z=Ie.fragmentShader}else Y=M.vertexShader,Z=M.fragmentShader,c.update(M),ce=c.getVertexShaderID(M),ue=c.getFragmentShaderID(M);const V=s.getRenderTarget(),Ne=M.alphaTest>0,Me=M.clearcoat>0,ye=M.iridescence>0;return{isWebGL2:h,shaderID:X,shaderName:M.type,vertexShader:Y,fragmentShader:Z,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V===null?s.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Mn,map:!!M.map,matcap:!!M.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:q,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===sc,tangentSpaceNormalMap:M.normalMapType===Kn,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ze,clearcoat:Me,clearcoatMap:Me&&!!M.clearcoatMap,clearcoatRoughnessMap:Me&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!M.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!M.iridescenceMap,iridescenceThicknessMap:ye&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Wn,alphaMap:!!M.alphaMap,alphaTest:Ne,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!L.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:qt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===Mt,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(w,M),b(w,M),w.push(s.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.combine),M.push(w.vertexUvs),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function b(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),w.fog&&a.enable(33),M.push(a.mask),a.disableAll(),w.useFog&&a.enable(0),w.flatShading&&a.enable(1),w.logarithmicDepthBuffer&&a.enable(2),w.skinning&&a.enable(3),w.morphTargets&&a.enable(4),w.morphNormals&&a.enable(5),w.morphColors&&a.enable(6),w.premultipliedAlpha&&a.enable(7),w.shadowMapEnabled&&a.enable(8),w.physicallyCorrectLights&&a.enable(9),w.doubleSided&&a.enable(10),w.flipSided&&a.enable(11),w.useDepthPacking&&a.enable(12),w.dithering&&a.enable(13),w.specularIntensityMap&&a.enable(14),w.specularColorMap&&a.enable(15),w.transmission&&a.enable(16),w.transmissionMap&&a.enable(17),w.thicknessMap&&a.enable(18),w.sheen&&a.enable(19),w.sheenColorMap&&a.enable(20),w.sheenRoughnessMap&&a.enable(21),w.decodeVideoTexture&&a.enable(22),w.opaque&&a.enable(23),M.push(a.mask)}function A(M){const w=g[M.type];let N;if(w){const P=Rt[w];N=Mc.clone(P.uniforms)}else N=M.uniforms;return N}function T(M,w){let N;for(let P=0,J=l.length;P<J;P++){const j=l[P];if(j.cacheKey===w){N=j,++N.usedTimes;break}}return N===void 0&&(N=new Dd(s,w,M,r),l.push(N)),N}function S(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function C(M){c.remove(M)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:T,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:F}}function Nd(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function zd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function za(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ua(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,g,p,u){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:u},s[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=u),e++,_}function a(f,d,m,g,p,u){const _=o(f,d,m,g,p,u);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,g,p,u){const _=o(f,d,m,g,p,u);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||zd),n.length>1&&n.sort(d||za),i.length>1&&i.sort(d||za)}function h(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ud(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Ua,s.set(n,[r])):i>=s.get(n).length?(r=new Ua,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Od(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ve};break;case"SpotLight":t={position:new R,direction:new R,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Bd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gd=0;function Vd(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function kd(s,e){const t=new Od,n=Bd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new Je,a=new Je;function c(h,f){let d=0,m=0,g=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,u=0,_=0,b=0,A=0,T=0,S=0,C=0;h.sort(Vd);const F=f!==!0?Math.PI:1;for(let w=0,N=h.length;w<N;w++){const P=h[w],J=P.color,j=P.intensity,L=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=J.r*j*F,m+=J.g*j*F,g+=J.b*j*F;else if(P.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],j);else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*F),P.castShadow){const q=P.shadow,X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=t.get(P);if(B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(J).multiplyScalar(j*F),B.distance=L,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,P.castShadow){const q=P.shadow,X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=k,i.spotShadowMatrix[_]=P.shadow.matrix,C++}i.spot[_]=B,_++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(J).multiplyScalar(j),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=B,b++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity*F),B.distance=P.distance,B.decay=P.decay,P.castShadow){const q=P.shadow,X=n.get(P);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[u]=X,i.pointShadowMap[u]=k,i.pointShadowMatrix[u]=P.shadow.matrix,S++}i.point[u]=B,u++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(j*F),B.groundColor.copy(P.groundColor).multiplyScalar(j*F),i.hemi[A]=B,A++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const M=i.hash;(M.directionalLength!==p||M.pointLength!==u||M.spotLength!==_||M.rectAreaLength!==b||M.hemiLength!==A||M.numDirectionalShadows!==T||M.numPointShadows!==S||M.numSpotShadows!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=u,i.hemi.length=A,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotShadowMatrix.length=C,M.directionalLength=p,M.pointLength=u,M.spotLength=_,M.rectAreaLength=b,M.hemiLength=A,M.numDirectionalShadows=T,M.numPointShadows=S,M.numSpotShadows=C,i.version=Gd++)}function l(h,f){let d=0,m=0,g=0,p=0,u=0;const _=f.matrixWorldInverse;for(let b=0,A=h.length;b<A;b++){const T=h[b];if(T.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(T.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const S=i.hemi[u];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(_),u++}}}return{setup:c,setupView:l,state:i}}function Oa(s,e){const t=new kd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hd(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Oa(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Oa(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class _o extends Xe{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xo extends Xe{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xd(s,e,t){let n=new co;const i=new Ce,r=new Ce,o=new Ze,a=new _o({depthPacking:ic}),c=new xo,l={},h=t.maxTextureSize,f={0:Mt,1:fi,2:Xn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Wd,fragmentShader:qd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Sn;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Wt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya,this.render=function(T,S,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;const F=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),N=s.state;N.setBlending(tn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let P=0,J=T.length;P<J;P++){const j=T[P],L=j.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const k=L.getFrameExtents();if(i.multiply(k),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/k.x),i.x=r.x*k.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/k.y),i.y=r.y*k.y,L.mapSize.y=r.y)),L.map===null&&!L.isPointLightShadow&&this.type===ai&&(L.map=new nn(i.x,i.y),L.map.texture.name=j.name+".shadowMap",L.mapPass=new nn(i.x,i.y),L.camera.updateProjectionMatrix()),L.map===null){const q={minFilter:st,magFilter:st,format:vt};L.map=new nn(i.x,i.y,q),L.map.texture.name=j.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const B=L.getViewportCount();for(let q=0;q<B;q++){const X=L.getViewport(q);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(o),L.updateMatrices(j,q),n=L.getFrustum(),A(S,C,L.camera,j,this.type)}!L.isPointLightShadow&&this.type===ai&&_(L,C),L.needsUpdate=!1}u.needsUpdate=!1,s.setRenderTarget(F,M,w)};function _(T,S){const C=e.update(p);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,C,d,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,C,m,p,null)}function b(T,S,C,F,M,w){let N=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0?N=P:N=C.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const J=N.uuid,j=S.uuid;let L=l[J];L===void 0&&(L={},l[J]=L);let k=L[j];k===void 0&&(k=N.clone(),L[j]=k),N=k}return N.visible=S.visible,N.wireframe=S.wireframe,w===ai?N.side=S.shadowSide!==null?S.shadowSide:S.side:N.side=S.shadowSide!==null?S.shadowSide:f[S.side],N.alphaMap=S.alphaMap,N.alphaTest=S.alphaTest,N.clipShadows=S.clipShadows,N.clippingPlanes=S.clippingPlanes,N.clipIntersection=S.clipIntersection,N.displacementMap=S.displacementMap,N.displacementScale=S.displacementScale,N.displacementBias=S.displacementBias,N.wireframeLinewidth=S.wireframeLinewidth,N.linewidth=S.linewidth,C.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(C.matrixWorld),N.nearDistance=F,N.farDistance=M),N}function A(T,S,C,F,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const P=e.update(T),J=T.material;if(Array.isArray(J)){const j=P.groups;for(let L=0,k=j.length;L<k;L++){const B=j[L],q=J[B.materialIndex];if(q&&q.visible){const X=b(T,q,F,C.near,C.far,M);s.renderBufferDirect(C,null,P,X,T,B)}}}else if(J.visible){const j=b(T,J,F,C.near,C.far,M);s.renderBufferDirect(C,null,P,j,T,null)}}const N=T.children;for(let P=0,J=N.length;P<J;P++)A(N[P],S,C,F,M)}}function jd(s,e,t){const n=t.isWebGL2;function i(){let E=!1;const ne=new Ze;let te=null;const fe=new Ze(0,0,0,0);return{setMask:function(oe){te!==oe&&!E&&(s.colorMask(oe,oe,oe,oe),te=oe)},setLocked:function(oe){E=oe},setClear:function(oe,pe,K,me,De){De===!0&&(oe*=me,pe*=me,K*=me),ne.set(oe,pe,K,me),fe.equals(ne)===!1&&(s.clearColor(oe,pe,K,me),fe.copy(ne))},reset:function(){E=!1,te=null,fe.set(-1,0,0,0)}}}function r(){let E=!1,ne=null,te=null,fe=null;return{setTest:function(oe){oe?ue(2929):V(2929)},setMask:function(oe){ne!==oe&&!E&&(s.depthMask(oe),ne=oe)},setFunc:function(oe){if(te!==oe){if(oe)switch(oe){case Tl:s.depthFunc(512);break;case Al:s.depthFunc(519);break;case Cl:s.depthFunc(513);break;case Ws:s.depthFunc(515);break;case Ll:s.depthFunc(514);break;case Dl:s.depthFunc(518);break;case Rl:s.depthFunc(516);break;case Pl:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);te=oe}},setLocked:function(oe){E=oe},setClear:function(oe){fe!==oe&&(s.clearDepth(oe),fe=oe)},reset:function(){E=!1,ne=null,te=null,fe=null}}}function o(){let E=!1,ne=null,te=null,fe=null,oe=null,pe=null,K=null,me=null,De=null;return{setTest:function(Re){E||(Re?ue(2960):V(2960))},setMask:function(Re){ne!==Re&&!E&&(s.stencilMask(Re),ne=Re)},setFunc:function(Re,Qe,Et){(te!==Re||fe!==Qe||oe!==Et)&&(s.stencilFunc(Re,Qe,Et),te=Re,fe=Qe,oe=Et)},setOp:function(Re,Qe,Et){(pe!==Re||K!==Qe||me!==Et)&&(s.stencilOp(Re,Qe,Et),pe=Re,K=Qe,me=Et)},setLocked:function(Re){E=Re},setClear:function(Re){De!==Re&&(s.clearStencil(Re),De=Re)},reset:function(){E=!1,ne=null,te=null,fe=null,oe=null,pe=null,K=null,me=null,De=null}}}const a=new i,c=new r,l=new o;let h={},f={},d=new WeakMap,m=[],g=null,p=!1,u=null,_=null,b=null,A=null,T=null,S=null,C=null,F=!1,M=null,w=null,N=null,P=null,J=null;const j=s.getParameter(35661);let L=!1,k=0;const B=s.getParameter(7938);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=k>=2);let q=null,X={};const O=s.getParameter(3088),W=s.getParameter(2978),Q=new Ze().fromArray(O),Y=new Ze().fromArray(W);function Z(E,ne,te){const fe=new Uint8Array(4),oe=s.createTexture();s.bindTexture(E,oe),s.texParameteri(E,10241,9728),s.texParameteri(E,10240,9728);for(let pe=0;pe<te;pe++)s.texImage2D(ne+pe,0,6408,1,1,0,6408,5121,fe);return oe}const ce={};ce[3553]=Z(3553,3553,1),ce[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ue(2929),c.setFunc(Ws),je(!1),it(Ar),ue(2884),Ee(tn);function ue(E){h[E]!==!0&&(s.enable(E),h[E]=!0)}function V(E){h[E]!==!1&&(s.disable(E),h[E]=!1)}function Ne(E,ne){return f[E]!==ne?(s.bindFramebuffer(E,ne),f[E]=ne,n&&(E===36009&&(f[36160]=ne),E===36160&&(f[36009]=ne)),!0):!1}function Me(E,ne){let te=m,fe=!1;if(E)if(te=d.get(ne),te===void 0&&(te=[],d.set(ne,te)),E.isWebGLMultipleRenderTargets){const oe=E.texture;if(te.length!==oe.length||te[0]!==36064){for(let pe=0,K=oe.length;pe<K;pe++)te[pe]=36064+pe;te.length=oe.length,fe=!0}}else te[0]!==36064&&(te[0]=36064,fe=!0);else te[0]!==1029&&(te[0]=1029,fe=!0);fe&&(t.isWebGL2?s.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ye(E){return g!==E?(s.useProgram(E),g=E,!0):!1}const re={[kn]:32774,[ml]:32778,[gl]:32779};if(n)re[Rr]=32775,re[Pr]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(re[Rr]=E.MIN_EXT,re[Pr]=E.MAX_EXT)}const Ie={[_l]:0,[xl]:1,[vl]:768,[$a]:770,[El]:776,[bl]:774,[yl]:772,[Ml]:769,[Za]:771,[wl]:775,[Sl]:773};function Ee(E,ne,te,fe,oe,pe,K,me){if(E===tn){p===!0&&(V(3042),p=!1);return}if(p===!1&&(ue(3042),p=!0),E!==pl){if(E!==u||me!==F){if((_!==kn||T!==kn)&&(s.blendEquation(32774),_=kn,T=kn),me)switch(E){case Wn:s.blendFuncSeparate(1,771,1,771);break;case Cr:s.blendFunc(1,1);break;case Lr:s.blendFuncSeparate(0,769,0,1);break;case Dr:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Wn:s.blendFuncSeparate(770,771,1,771);break;case Cr:s.blendFunc(770,1);break;case Lr:s.blendFuncSeparate(0,769,0,1);break;case Dr:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}b=null,A=null,S=null,C=null,u=E,F=me}return}oe=oe||ne,pe=pe||te,K=K||fe,(ne!==_||oe!==T)&&(s.blendEquationSeparate(re[ne],re[oe]),_=ne,T=oe),(te!==b||fe!==A||pe!==S||K!==C)&&(s.blendFuncSeparate(Ie[te],Ie[fe],Ie[pe],Ie[K]),b=te,A=fe,S=pe,C=K),u=E,F=null}function ge(E,ne){E.side===Xn?V(2884):ue(2884);let te=E.side===Mt;ne&&(te=!te),je(te),E.blending===Wn&&E.transparent===!1?Ee(tn):Ee(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);const fe=E.stencilWrite;l.setTest(fe),fe&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),wt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ue(32926):V(32926)}function je(E){M!==E&&(E?s.frontFace(2304):s.frontFace(2305),M=E)}function it(E){E!==hl?(ue(2884),E!==w&&(E===Ar?s.cullFace(1029):E===ul?s.cullFace(1028):s.cullFace(1032))):V(2884),w=E}function at(E){E!==N&&(L&&s.lineWidth(E),N=E)}function wt(E,ne,te){E?(ue(32823),(P!==ne||J!==te)&&(s.polygonOffset(ne,te),P=ne,J=te)):V(32823)}function We(E){E?ue(3089):V(3089)}function Fe(E){E===void 0&&(E=33984+j-1),q!==E&&(s.activeTexture(E),q=E)}function zt(E,ne){q===null&&Fe();let te=X[q];te===void 0&&(te={type:void 0,texture:void 0},X[q]=te),(te.type!==E||te.texture!==ne)&&(s.bindTexture(E,ne||ce[E]),te.type=E,te.texture=ne)}function Ut(){const E=X[q];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function x(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function G(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function _e(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function U(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(E){Q.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),Q.copy(E))}function le(E){Y.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),Y.copy(E))}function ae(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,X={},f={},d=new WeakMap,m=[],g=null,p=!1,u=null,_=null,b=null,A=null,T=null,S=null,C=null,F=!1,M=null,w=null,N=null,P=null,J=null,Q.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ue,disable:V,bindFramebuffer:Ne,drawBuffers:Me,useProgram:ye,setBlending:Ee,setMaterial:ge,setFlipSided:je,setCullFace:it,setLineWidth:at,setPolygonOffset:wt,setScissorTest:We,activeTexture:Fe,bindTexture:zt,unbindTexture:Ut,compressedTexImage2D:y,texImage2D:_e,texImage3D:U,texStorage2D:ee,texStorage3D:se,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:$,scissor:he,viewport:le,reset:ae}}function Yd(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,x){return _?new OffscreenCanvas(y,x):$i("canvas")}function A(y,x,G,$){let ee=1;if((y.width>$||y.height>$)&&(ee=$/Math.max(y.width,y.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const se=x?Zs:Math.floor,_e=se(ee*y.width),U=se(ee*y.height);p===void 0&&(p=b(_e,U));const he=G?b(_e,U):p;return he.width=_e,he.height=U,he.getContext("2d").drawImage(y,0,0,_e,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+_e+"x"+U+")."),he}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return ra(y.width)&&ra(y.height)}function S(y){return a?!1:y.wrapS!==_t||y.wrapT!==_t||y.minFilter!==st&&y.minFilter!==ht}function C(y,x){return y.generateMipmaps&&x&&y.minFilter!==st&&y.minFilter!==ht}function F(y){s.generateMipmap(y)}function M(y,x,G,$,ee=!1){if(a===!1)return x;if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=x;return x===6403&&(G===5126&&(se=33326),G===5131&&(se=33325),G===5121&&(se=33321)),x===33319&&(G===5126&&(se=33328),G===5131&&(se=33327),G===5121&&(se=33323)),x===6408&&(G===5126&&(se=34836),G===5131&&(se=34842),G===5121&&(se=$===ze&&ee===!1?35907:32856),G===32819&&(se=32854),G===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(y,x,G){return C(y,G)===!0||y.isFramebufferTexture&&y.minFilter!==st&&y.minFilter!==ht?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function N(y){return y===st||y===Ir||y===Fr?9728:9729}function P(y){const x=y.target;x.removeEventListener("dispose",P),j(x),x.isVideoTexture&&g.delete(x)}function J(y){const x=y.target;x.removeEventListener("dispose",J),k(x)}function j(y){const x=n.get(y);if(x.__webglInit===void 0)return;const G=y.source,$=u.get(G);if($){const ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(y),Object.keys($).length===0&&u.delete(G)}n.remove(y)}function L(y){const x=n.get(y);s.deleteTexture(x.__webglTexture);const G=y.source,$=u.get(G);delete $[x.__cacheKey],o.memory.textures--}function k(y){const x=y.texture,G=n.get(y),$=n.get(x);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(G.__webglFramebuffer[ee]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,se=x.length;ee<se;ee++){const _e=n.get(x[ee]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(y)}let B=0;function q(){B=0}function X(){const y=B;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),B+=1,y}function O(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.encoding),x.join()}function W(y,x){const G=n.get(y);if(y.isVideoTexture&&zt(y),y.isRenderTargetTexture===!1&&y.version>0&&G.__version!==y.version){const $=y.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,y,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,G.__webglTexture)}function Q(y,x){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Me(G,y,x);return}t.activeTexture(33984+x),t.bindTexture(35866,G.__webglTexture)}function Y(y,x){const G=n.get(y);if(y.version>0&&G.__version!==y.version){Me(G,y,x);return}t.activeTexture(33984+x),t.bindTexture(32879,G.__webglTexture)}function Z(y,x){const G=n.get(y);if(y.version>0&&G.__version!==y.version){ye(G,y,x);return}t.activeTexture(33984+x),t.bindTexture(34067,G.__webglTexture)}const ce={[js]:10497,[_t]:33071,[Ys]:33648},ue={[st]:9728,[Ir]:9984,[Fr]:9986,[ht]:9729,[Gl]:9985,[Qi]:9987};function V(y,x,G){if(G?(s.texParameteri(y,10242,ce[x.wrapS]),s.texParameteri(y,10243,ce[x.wrapT]),(y===32879||y===35866)&&s.texParameteri(y,32882,ce[x.wrapR]),s.texParameteri(y,10240,ue[x.magFilter]),s.texParameteri(y,10241,ue[x.minFilter])):(s.texParameteri(y,10242,33071),s.texParameteri(y,10243,33071),(y===32879||y===35866)&&s.texParameteri(y,32882,33071),(x.wrapS!==_t||x.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(y,10240,N(x.magFilter)),s.texParameteri(y,10241,N(x.minFilter)),x.minFilter!==st&&x.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(x.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(y,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ne(y,x){let G=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",P));const $=x.source;let ee=u.get($);ee===void 0&&(ee={},u.set($,ee));const se=O(x);if(se!==y.__cacheKey){ee[se]===void 0&&(ee[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[se].usedTimes++;const _e=ee[y.__cacheKey];_e!==void 0&&(ee[y.__cacheKey].usedTimes--,_e.usedTimes===0&&L(x)),y.__cacheKey=se,y.__webglTexture=ee[se].texture}return G}function Me(y,x,G){let $=3553;x.isDataArrayTexture&&($=35866),x.isData3DTexture&&($=32879);const ee=Ne(y,x),se=x.source;if(t.activeTexture(33984+G),t.bindTexture($,y.__webglTexture),se.version!==se.__currentVersion||ee===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const _e=S(x)&&T(x.image)===!1;let U=A(x.image,_e,!1,h);U=Ut(x,U);const he=T(U)||a,le=r.convert(x.format,x.encoding);let ae=r.convert(x.type),E=M(x.internalFormat,le,ae,x.encoding,x.isVideoTexture);V($,x,he);let ne;const te=x.mipmaps,fe=a&&x.isVideoTexture!==!0,oe=se.__currentVersion===void 0||ee===!0,pe=w(x,U,he);if(x.isDepthTexture)E=6402,a?x.type===dn?E=36012:x.type===fn?E=33190:x.type===qn?E=35056:E=33189:x.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===gn&&E===6402&&x.type!==Ja&&x.type!==fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=fn,ae=r.convert(x.type)),x.format===$n&&E===6402&&(E=34041,x.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=qn,ae=r.convert(x.type))),oe&&(fe?t.texStorage2D(3553,1,E,U.width,U.height):t.texImage2D(3553,0,E,U.width,U.height,0,le,ae,null));else if(x.isDataTexture)if(te.length>0&&he){fe&&oe&&t.texStorage2D(3553,pe,E,te[0].width,te[0].height);for(let K=0,me=te.length;K<me;K++)ne=te[K],fe?t.texSubImage2D(3553,K,0,0,ne.width,ne.height,le,ae,ne.data):t.texImage2D(3553,K,E,ne.width,ne.height,0,le,ae,ne.data);x.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(3553,pe,E,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,le,ae,U.data)):t.texImage2D(3553,0,E,U.width,U.height,0,le,ae,U.data);else if(x.isCompressedTexture){fe&&oe&&t.texStorage2D(3553,pe,E,te[0].width,te[0].height);for(let K=0,me=te.length;K<me;K++)ne=te[K],x.format!==vt?le!==null?fe?t.compressedTexSubImage2D(3553,K,0,0,ne.width,ne.height,le,ne.data):t.compressedTexImage2D(3553,K,E,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(3553,K,0,0,ne.width,ne.height,le,ae,ne.data):t.texImage2D(3553,K,E,ne.width,ne.height,0,le,ae,ne.data)}else if(x.isDataArrayTexture)fe?(oe&&t.texStorage3D(35866,pe,E,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,le,ae,U.data)):t.texImage3D(35866,0,E,U.width,U.height,U.depth,0,le,ae,U.data);else if(x.isData3DTexture)fe?(oe&&t.texStorage3D(32879,pe,E,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,le,ae,U.data)):t.texImage3D(32879,0,E,U.width,U.height,U.depth,0,le,ae,U.data);else if(x.isFramebufferTexture){if(oe)if(fe)t.texStorage2D(3553,pe,E,U.width,U.height);else{let K=U.width,me=U.height;for(let De=0;De<pe;De++)t.texImage2D(3553,De,E,K,me,0,le,ae,null),K>>=1,me>>=1}}else if(te.length>0&&he){fe&&oe&&t.texStorage2D(3553,pe,E,te[0].width,te[0].height);for(let K=0,me=te.length;K<me;K++)ne=te[K],fe?t.texSubImage2D(3553,K,0,0,le,ae,ne):t.texImage2D(3553,K,E,le,ae,ne);x.generateMipmaps=!1}else fe?(oe&&t.texStorage2D(3553,pe,E,U.width,U.height),t.texSubImage2D(3553,0,0,0,le,ae,U)):t.texImage2D(3553,0,E,le,ae,U);C(x,he)&&F($),se.__currentVersion=se.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ye(y,x,G){if(x.image.length!==6)return;const $=Ne(y,x),ee=x.source;if(t.activeTexture(33984+G),t.bindTexture(34067,y.__webglTexture),ee.version!==ee.__currentVersion||$===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const se=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,U=[];for(let K=0;K<6;K++)!se&&!_e?U[K]=A(x.image[K],!1,!0,l):U[K]=_e?x.image[K].image:x.image[K],U[K]=Ut(x,U[K]);const he=U[0],le=T(he)||a,ae=r.convert(x.format,x.encoding),E=r.convert(x.type),ne=M(x.internalFormat,ae,E,x.encoding),te=a&&x.isVideoTexture!==!0,fe=ee.__currentVersion===void 0||$===!0;let oe=w(x,he,le);V(34067,x,le);let pe;if(se){te&&fe&&t.texStorage2D(34067,oe,ne,he.width,he.height);for(let K=0;K<6;K++){pe=U[K].mipmaps;for(let me=0;me<pe.length;me++){const De=pe[me];x.format!==vt?ae!==null?te?t.compressedTexSubImage2D(34069+K,me,0,0,De.width,De.height,ae,De.data):t.compressedTexImage2D(34069+K,me,ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+K,me,0,0,De.width,De.height,ae,E,De.data):t.texImage2D(34069+K,me,ne,De.width,De.height,0,ae,E,De.data)}}}else{pe=x.mipmaps,te&&fe&&(pe.length>0&&oe++,t.texStorage2D(34067,oe,ne,U[0].width,U[0].height));for(let K=0;K<6;K++)if(_e){te?t.texSubImage2D(34069+K,0,0,0,U[K].width,U[K].height,ae,E,U[K].data):t.texImage2D(34069+K,0,ne,U[K].width,U[K].height,0,ae,E,U[K].data);for(let me=0;me<pe.length;me++){const Re=pe[me].image[K].image;te?t.texSubImage2D(34069+K,me+1,0,0,Re.width,Re.height,ae,E,Re.data):t.texImage2D(34069+K,me+1,ne,Re.width,Re.height,0,ae,E,Re.data)}}else{te?t.texSubImage2D(34069+K,0,0,0,ae,E,U[K]):t.texImage2D(34069+K,0,ne,ae,E,U[K]);for(let me=0;me<pe.length;me++){const De=pe[me];te?t.texSubImage2D(34069+K,me+1,0,0,ae,E,De.image[K]):t.texImage2D(34069+K,me+1,ne,ae,E,De.image[K])}}}C(x,le)&&F(34067),ee.__currentVersion=ee.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function re(y,x,G,$,ee){const se=r.convert(G.format,G.encoding),_e=r.convert(G.type),U=M(G.internalFormat,se,_e,G.encoding);n.get(x).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,U,x.width,x.height,x.depth,0,se,_e,null):t.texImage2D(ee,0,U,x.width,x.height,0,se,_e,null)),t.bindFramebuffer(36160,y),Fe(x)?d.framebufferTexture2DMultisampleEXT(36160,$,ee,n.get(G).__webglTexture,0,We(x)):s.framebufferTexture2D(36160,$,ee,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(y,x,G){if(s.bindRenderbuffer(36161,y),x.depthBuffer&&!x.stencilBuffer){let $=33189;if(G||Fe(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===dn?$=36012:ee.type===fn&&($=33190));const se=We(x);Fe(x)?d.renderbufferStorageMultisampleEXT(36161,se,$,x.width,x.height):s.renderbufferStorageMultisample(36161,se,$,x.width,x.height)}else s.renderbufferStorage(36161,$,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,y)}else if(x.depthBuffer&&x.stencilBuffer){const $=We(x);G&&Fe(x)===!1?s.renderbufferStorageMultisample(36161,$,35056,x.width,x.height):Fe(x)?d.renderbufferStorageMultisampleEXT(36161,$,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,y)}else{const $=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<$.length;ee++){const se=$[ee],_e=r.convert(se.format,se.encoding),U=r.convert(se.type),he=M(se.internalFormat,_e,U,se.encoding),le=We(x);G&&Fe(x)===!1?s.renderbufferStorageMultisample(36161,le,he,x.width,x.height):Fe(x)?d.renderbufferStorageMultisampleEXT(36161,le,he,x.width,x.height):s.renderbufferStorage(36161,he,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function Ee(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,ee=We(x);if(x.depthTexture.format===gn)Fe(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ee):s.framebufferTexture2D(36160,36096,3553,$,0);else if(x.depthTexture.format===$n)Fe(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ee):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ge(y){const x=n.get(y),G=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,y)}else if(G){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=s.createRenderbuffer(),Ie(x.__webglDepthbuffer[$],y,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Ie(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function je(y,x,G){const $=n.get(y);x!==void 0&&re($.__webglFramebuffer,y,y.texture,36064,3553),G!==void 0&&ge(y)}function it(y){const x=y.texture,G=n.get(y),$=n.get(x);y.addEventListener("dispose",J),y.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=x.version,o.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,_e=T(y)||a;if(ee){G.__webglFramebuffer=[];for(let U=0;U<6;U++)G.__webglFramebuffer[U]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),se)if(i.drawBuffers){const U=y.texture;for(let he=0,le=U.length;he<le;he++){const ae=n.get(U[he]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Fe(y)===!1){const U=se?x:[x];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let he=0;he<U.length;he++){const le=U[he];G.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[he]);const ae=r.convert(le.format,le.encoding),E=r.convert(le.type),ne=M(le.internalFormat,ae,E,le.encoding),te=We(y);s.renderbufferStorageMultisample(36161,te,ne,y.width,y.height),s.framebufferRenderbuffer(36160,36064+he,36161,G.__webglColorRenderbuffer[he])}s.bindRenderbuffer(36161,null),y.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,$.__webglTexture),V(34067,x,_e);for(let U=0;U<6;U++)re(G.__webglFramebuffer[U],y,x,36064,34069+U);C(x,_e)&&F(34067),t.unbindTexture()}else if(se){const U=y.texture;for(let he=0,le=U.length;he<le;he++){const ae=U[he],E=n.get(ae);t.bindTexture(3553,E.__webglTexture),V(3553,ae,_e),re(G.__webglFramebuffer,y,ae,36064+he,3553),C(ae,_e)&&F(3553)}t.unbindTexture()}else{let U=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?U=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,$.__webglTexture),V(U,x,_e),re(G.__webglFramebuffer,y,x,36064,U),C(x,_e)&&F(U),t.unbindTexture()}y.depthBuffer&&ge(y)}function at(y){const x=T(y)||a,G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let $=0,ee=G.length;$<ee;$++){const se=G[$];if(C(se,x)){const _e=y.isWebGLCubeRenderTarget?34067:3553,U=n.get(se).__webglTexture;t.bindTexture(_e,U),F(_e),t.unbindTexture()}}}function wt(y){if(a&&y.samples>0&&Fe(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],G=y.width,$=y.height;let ee=16384;const se=[],_e=y.stencilBuffer?33306:36096,U=n.get(y),he=y.isWebGLMultipleRenderTargets===!0;if(he)for(let le=0;le<x.length;le++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let le=0;le<x.length;le++){se.push(36064+le),y.depthBuffer&&se.push(_e);const ae=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ae===!1&&(y.depthBuffer&&(ee|=256),y.stencilBuffer&&(ee|=1024)),he&&s.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[le]),ae===!0&&(s.invalidateFramebuffer(36008,[_e]),s.invalidateFramebuffer(36009,[_e])),he){const E=n.get(x[le]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,E,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,ee,9728),m&&s.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let le=0;le<x.length;le++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+le,36161,U.__webglColorRenderbuffer[le]);const ae=n.get(x[le]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+le,3553,ae,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function We(y){return Math.min(f,y.samples)}function Fe(y){const x=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(y){const x=o.render.frame;g.get(y)!==x&&(g.set(y,x),y.update())}function Ut(y,x){const G=y.encoding,$=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===$s||G!==Mn&&(G===ze?a===!1?e.has("EXT_sRGB")===!0&&$===vt?(y.format=$s,y.minFilter=ht,y.generateMipmaps=!1):x=to.sRGBToLinear(x):($!==vt||ee!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),x}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Fe}function $d(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===vn)return 5121;if(r===Wl)return 32819;if(r===ql)return 32820;if(r===Vl)return 5120;if(r===kl)return 5122;if(r===Ja)return 5123;if(r===Hl)return 5124;if(r===fn)return 5125;if(r===dn)return 5126;if(r===di)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Xl)return 6406;if(r===vt)return 6408;if(r===Yl)return 6409;if(r===$l)return 6410;if(r===gn)return 6402;if(r===$n)return 34041;if(r===Zl)return 6403;if(r===jl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===$s)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Kl)return 36244;if(r===Jl)return 33319;if(r===Ql)return 33320;if(r===ec)return 36249;if(r===rs||r===as||r===os||r===ls)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===as)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===as)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nr||r===zr||r===Ur||r===Or)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ur)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Or)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Br||r===Gr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Br)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vr||r===kr||r===Hr||r===Wr||r===qr||r===Xr||r===jr||r===Yr||r===$r||r===Zr||r===Kr||r===Jr||r===Qr||r===ea)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Vr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$r)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qr)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ea)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ta)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ta)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===qn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Zd extends ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kd={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd))),l&&e.hand){o=!0;for(const p of e.hand.values()){const u=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const b=new Vi;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[p.jointName]=b,l.add(b)}const _=l.joints[p.jointName];u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class Jd extends St{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:gn,h!==gn&&h!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gn&&(n=fn),n===void 0&&h===$n&&(n=qn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:st,this.minFilter=c!==void 0?c:st,this.flipY=!1,this.generateMipmaps=!1}}class Qd extends Jn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,h=null,f=null,d=null,m=null;const g=t.getContextAttributes();let p=null,u=null;const _=[],b=new Map,A=new ut;A.layers.enable(1),A.viewport=new Ze;const T=new ut;T.layers.enable(2),T.viewport=new Ze;const S=[A,T],C=new Zd;C.layers.enable(1),C.layers.enable(2);let F=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=_[O];return W===void 0&&(W=new Us,_[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=_[O];return W===void 0&&(W=new Us,_[O]=W),W.getGripSpace()},this.getHand=function(O){let W=_[O];return W===void 0&&(W=new Us,_[O]=W),W.getHandSpace()};function w(O){const W=b.get(O.inputSource);W!==void 0&&W.dispatchEvent({type:O.type,data:O.inputSource})}function N(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",P),b.forEach(function(O,W){O!==void 0&&O.disconnect(W)}),b.clear(),F=null,M=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,u=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",N),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),u=new nn(d.framebufferWidth,d.framebufferHeight,{format:vt,type:vn,encoding:e.outputEncoding})}else{let W=null,Q=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,W=g.stencil?$n:gn,Q=g.stencil?qn:fn);const Z={colorFormat:e.outputEncoding===ze?35907:32856,depthFormat:Y,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Z),i.updateRenderState({layers:[f]}),u=new nn(f.textureWidth,f.textureHeight,{format:vt,type:vn,depthTexture:new Jd(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(u);ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(O){const W=i.inputSources;for(let Q=0;Q<W.length;Q++){const Y=W[Q].handedness==="right"?1:0;b.set(W[Q],_[Y])}for(let Q=0;Q<O.removed.length;Q++){const Y=O.removed[Q],Z=b.get(Y);Z&&(Z.dispatchEvent({type:"disconnected",data:Y}),b.delete(Y))}for(let Q=0;Q<O.added.length;Q++){const Y=O.added[Q],Z=b.get(Y);Z&&Z.dispatchEvent({type:"connected",data:Y})}}const J=new R,j=new R;function L(O,W,Q){J.setFromMatrixPosition(W.matrixWorld),j.setFromMatrixPosition(Q.matrixWorld);const Y=J.distanceTo(j),Z=W.projectionMatrix.elements,ce=Q.projectionMatrix.elements,ue=Z[14]/(Z[10]-1),V=Z[14]/(Z[10]+1),Ne=(Z[9]+1)/Z[5],Me=(Z[9]-1)/Z[5],ye=(Z[8]-1)/Z[0],re=(ce[8]+1)/ce[0],Ie=ue*ye,Ee=ue*re,ge=Y/(-ye+re),je=ge*-ye;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(je),O.translateZ(ge),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const it=ue+ge,at=V+ge,wt=Ie-je,We=Ee+(Y-je),Fe=Ne*V/at*it,zt=Me*V/at*it;O.projectionMatrix.makePerspective(wt,We,Fe,zt,it,at)}function k(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;C.near=T.near=A.near=O.near,C.far=T.far=A.far=O.far,(F!==C.near||M!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,M=C.far);const W=O.parent,Q=C.cameras;k(C,W);for(let Z=0;Z<Q.length;Z++)k(Q[Z],W);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),O.position.copy(C.position),O.quaternion.copy(C.quaternion),O.scale.copy(C.scale),O.matrix.copy(C.matrix),O.matrixWorld.copy(C.matrixWorld);const Y=O.children;for(let Z=0,ce=Y.length;Z<ce;Z++)Y[Z].updateMatrixWorld(!0);Q.length===2?L(C,A,T):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let B=null;function q(O,W){if(l=W.getViewerPose(c||o),m=W,l!==null){const Y=l.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let Z=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,Z=!0);for(let ce=0;ce<Y.length;ce++){const ue=Y[ce];let V=null;if(d!==null)V=d.getViewport(ue);else{const Me=h.getViewSubImage(f,ue);V=Me.viewport,ce===0&&(e.setRenderTargetTextures(u,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(u))}let Ne=S[ce];Ne===void 0&&(Ne=new ut,Ne.layers.enable(ce),Ne.viewport=new Ze,S[ce]=Ne),Ne.matrix.fromArray(ue.transform.matrix),Ne.projectionMatrix.fromArray(ue.projectionMatrix),Ne.viewport.set(V.x,V.y,V.width,V.height),ce===0&&C.matrix.copy(Ne.matrix),Z===!0&&C.cameras.push(Ne)}}const Q=i.inputSources;for(let Y=0;Y<_.length;Y++){const Z=Q[Y],ce=b.get(Z);ce!==void 0&&ce.update(Z,W,c||o)}B&&B(O,W),m=null}const X=new ho;X.setAnimationLoop(q),this.setAnimationLoop=function(O){B=O},this.dispose=function(){}}}function ep(s,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,b,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),l(p,u)):u.isMeshStandardMaterial?(i(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,A)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),g(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(r(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?a(p,u,_,b):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===Mt&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===Mt&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const T=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*T}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let b;u.map?b=u.map:u.specularMap?b=u.specularMap:u.displacementMap?b=u.displacementMap:u.normalMap?b=u.normalMap:u.bumpMap?b=u.bumpMap:u.roughnessMap?b=u.roughnessMap:u.metalnessMap?b=u.metalnessMap:u.alphaMap?b=u.alphaMap:u.emissiveMap?b=u.emissiveMap:u.clearcoatMap?b=u.clearcoatMap:u.clearcoatNormalMap?b=u.clearcoatNormalMap:u.clearcoatRoughnessMap?b=u.clearcoatRoughnessMap:u.iridescenceMap?b=u.iridescenceMap:u.iridescenceThicknessMap?b=u.iridescenceThicknessMap:u.specularIntensityMap?b=u.specularIntensityMap:u.specularColorMap?b=u.specularColorMap:u.transmissionMap?b=u.transmissionMap:u.thicknessMap?b=u.thicknessMap:u.sheenColorMap?b=u.sheenColorMap:u.sheenRoughnessMap&&(b=u.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let A;u.aoMap?A=u.aoMap:u.lightMap&&(A=u.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function r(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function a(p,u,_,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=b*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let A;u.map?A=u.map:u.alphaMap&&(A=u.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===Mt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function tp(){const s=$i("canvas");return s.style.display="block",s}function vo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:tp(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mn,this.physicallyCorrectLights=!1,this.toneMapping=qt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let u=!1,_=0,b=0,A=null,T=-1,S=null;const C=new Ze,F=new Ze;let M=null,w=e.width,N=e.height,P=1,J=null,j=null;const L=new Ze(0,0,w,N),k=new Ze(0,0,w,N);let B=!1;const q=new co;let X=!1,O=!1,W=null;const Q=new Je,Y=new Ce,Z=new R,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return A===null?P:1}let V=t;function Ne(v,D){for(let z=0;z<v.length;z++){const I=v[z],H=e.getContext(I,D);if(H!==null)return H}return null}try{const v={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ir}`),e.addEventListener("webglcontextlost",E,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",te,!1),V===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),V=Ne(D,v),V===null)throw Ne(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Me,ye,re,Ie,Ee,ge,je,it,at,wt,We,Fe,zt,Ut,y,x,G,$,ee,se,_e,U,he;function le(){Me=new pf(V),ye=new of(V,Me,s),Me.init(ye),U=new $d(V,Me,ye),re=new jd(V,Me,ye),Ie=new _f,Ee=new Nd,ge=new Yd(V,Me,re,Ee,ye,U,Ie),je=new cf(p),it=new df(p),at=new Ac(V,ye),he=new rf(V,Me,at,ye),wt=new mf(V,at,Ie,he),We=new yf(V,wt,at,Ie),ee=new Mf(V,ye,ge),x=new lf(Ee),Fe=new Fd(p,je,it,Me,ye,he,x),zt=new ep(p,Ee),Ut=new Ud,y=new Hd(Me,ye),$=new sf(p,je,re,We,h,o),G=new Xd(p,We,ye),se=new af(V,Me,Ie,ye),_e=new gf(V,Me,Ie,ye),Ie.programs=Fe.programs,p.capabilities=ye,p.extensions=Me,p.properties=Ee,p.renderLists=Ut,p.shadowMap=G,p.state=re,p.info=Ie}le();const ae=new Qd(p,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(v){v!==void 0&&(P=v,this.setSize(w,N,!1))},this.getSize=function(v){return v.set(w,N)},this.setSize=function(v,D,z){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=v,N=D,e.width=Math.floor(v*P),e.height=Math.floor(D*P),z!==!1&&(e.style.width=v+"px",e.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(w*P,N*P).floor()},this.setDrawingBufferSize=function(v,D,z){w=v,N=D,P=z,e.width=Math.floor(v*z),e.height=Math.floor(D*z),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(L)},this.setViewport=function(v,D,z,I){v.isVector4?L.set(v.x,v.y,v.z,v.w):L.set(v,D,z,I),re.viewport(C.copy(L).multiplyScalar(P).floor())},this.getScissor=function(v){return v.copy(k)},this.setScissor=function(v,D,z,I){v.isVector4?k.set(v.x,v.y,v.z,v.w):k.set(v,D,z,I),re.scissor(F.copy(k).multiplyScalar(P).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(v){re.setScissorTest(B=v)},this.setOpaqueSort=function(v){J=v},this.setTransparentSort=function(v){j=v},this.getClearColor=function(v){return v.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(v=!0,D=!0,z=!0){let I=0;v&&(I|=16384),D&&(I|=256),z&&(I|=1024),V.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",E,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Ut.dispose(),y.dispose(),Ee.dispose(),je.dispose(),it.dispose(),We.dispose(),he.dispose(),Fe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",De),ae.removeEventListener("sessionend",Re),W&&(W.dispose(),W=null),Qe.stop()};function E(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const v=Ie.autoReset,D=G.enabled,z=G.autoUpdate,I=G.needsUpdate,H=G.type;le(),Ie.autoReset=v,G.enabled=D,G.autoUpdate=z,G.needsUpdate=I,G.type=H}function te(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function fe(v){const D=v.target;D.removeEventListener("dispose",fe),oe(D)}function oe(v){pe(v),Ee.remove(v)}function pe(v){const D=Ee.get(v).programs;D!==void 0&&(D.forEach(function(z){Fe.releaseProgram(z)}),v.isShaderMaterial&&Fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,z,I,H,de){D===null&&(D=ce);const xe=H.isMesh&&H.matrixWorld.determinant()<0,be=Ao(v,D,z,I,H);re.setMaterial(I,xe);let Se=z.index;const Pe=z.attributes.position;if(Se===null){if(Pe===void 0||Pe.count===0)return}else if(Se.count===0)return;let Te=1;I.wireframe===!0&&(Se=wt.getWireframeAttribute(z),Te=2),he.setup(H,I,be,z,Se);let Ae,Ue=se;Se!==null&&(Ae=at.get(Se),Ue=_e,Ue.setIndex(Ae));const sn=Se!==null?Se.count:Pe.count,bn=z.drawRange.start*Te,wn=z.drawRange.count*Te,Tt=de!==null?de.start*Te:0,Le=de!==null?de.count*Te:1/0,En=Math.max(bn,Tt),Oe=Math.min(sn,bn+wn,Tt+Le)-1,At=Math.max(0,Oe-En+1);if(At!==0){if(H.isMesh)I.wireframe===!0?(re.setLineWidth(I.wireframeLinewidth*ue()),Ue.setMode(1)):Ue.setMode(4);else if(H.isLine){let jt=I.linewidth;jt===void 0&&(jt=1),re.setLineWidth(jt*ue()),H.isLineSegments?Ue.setMode(1):H.isLineLoop?Ue.setMode(2):Ue.setMode(3)}else H.isPoints?Ue.setMode(0):H.isSprite&&Ue.setMode(4);if(H.isInstancedMesh)Ue.renderInstances(En,At,H.count);else if(z.isInstancedBufferGeometry){const jt=Math.min(z.instanceCount,z._maxInstanceCount);Ue.renderInstances(En,At,jt)}else Ue.render(En,At)}},this.compile=function(v,D){d=y.get(v),d.init(),g.push(d),v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(p.physicallyCorrectLights),v.traverse(function(z){const I=z.material;if(I)if(Array.isArray(I))for(let H=0;H<I.length;H++){const de=I[H];ts(de,v,z)}else ts(I,v,z)}),g.pop(),d=null};let K=null;function me(v){K&&K(v)}function De(){Qe.stop()}function Re(){Qe.start()}const Qe=new ho;Qe.setAnimationLoop(me),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(v){K=v,ae.setAnimationLoop(v),v===null?Qe.stop():Qe.start()},ae.addEventListener("sessionstart",De),ae.addEventListener("sessionend",Re),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(p,v,D,A),d=y.get(v,g.length),d.init(),g.push(d),Q.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Q),O=this.localClippingEnabled,X=x.init(this.clippingPlanes,O,D),f=Ut.get(v,m.length),f.init(),m.push(f),Et(v,D,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(J,j),X===!0&&x.beginShadows();const z=d.state.shadowsArray;if(G.render(z,v,D),X===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,v),d.setupLights(p.physicallyCorrectLights),D.isArrayCamera){const I=D.cameras;for(let H=0,de=I.length;H<de;H++){const xe=I[H];cr(f,v,xe,xe.viewport)}}else cr(f,v,D);A!==null&&(ge.updateMultisampleRenderTarget(A),ge.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(p,v,D),he.resetDefaultState(),T=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Et(v,D,z,I){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){I&&Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);const xe=We.update(v),be=v.material;be.visible&&f.push(v,xe,be,z,Z.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ie.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ie.render.frame),!v.frustumCulled||q.intersectsObject(v))){I&&Z.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Q);const xe=We.update(v),be=v.material;if(Array.isArray(be)){const Se=xe.groups;for(let Pe=0,Te=Se.length;Pe<Te;Pe++){const Ae=Se[Pe],Ue=be[Ae.materialIndex];Ue&&Ue.visible&&f.push(v,xe,Ue,z,Z.z,Ae)}}else be.visible&&f.push(v,xe,be,z,Z.z,null)}}const de=v.children;for(let xe=0,be=de.length;xe<be;xe++)Et(de[xe],D,z,I)}function cr(v,D,z,I){const H=v.opaque,de=v.transmissive,xe=v.transparent;d.setupLightsView(z),de.length>0&&Eo(H,D,z),I&&re.viewport(C.copy(I)),H.length>0&&Mi(H,D,z),de.length>0&&Mi(de,D,z),xe.length>0&&Mi(xe,D,z),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Eo(v,D,z){const I=ye.isWebGL2;W===null&&(W=new nn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?di:vn,minFilter:Qi,samples:I&&r===!0?4:0})),p.getDrawingBufferSize(Y),I?W.setSize(Y.x,Y.y):W.setSize(Zs(Y.x),Zs(Y.y));const H=p.getRenderTarget();p.setRenderTarget(W),p.clear();const de=p.toneMapping;p.toneMapping=qt,Mi(v,D,z),p.toneMapping=de,ge.updateMultisampleRenderTarget(W),ge.updateRenderTargetMipmap(W),p.setRenderTarget(H)}function Mi(v,D,z){const I=D.isScene===!0?D.overrideMaterial:null;for(let H=0,de=v.length;H<de;H++){const xe=v[H],be=xe.object,Se=xe.geometry,Pe=I===null?xe.material:I,Te=xe.group;be.layers.test(z.layers)&&To(be,D,z,Se,Pe,Te)}}function To(v,D,z,I,H,de){v.onBeforeRender(p,D,z,I,H,de),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),H.onBeforeRender(p,D,z,I,v,de),H.transparent===!0&&H.side===Xn?(H.side=Mt,H.needsUpdate=!0,p.renderBufferDirect(z,D,I,H,v,de),H.side=fi,H.needsUpdate=!0,p.renderBufferDirect(z,D,I,H,v,de),H.side=Xn):p.renderBufferDirect(z,D,I,H,v,de),v.onAfterRender(p,D,z,I,H,de)}function ts(v,D,z){D.isScene!==!0&&(D=ce);const I=Ee.get(v),H=d.state.lights,de=d.state.shadowsArray,xe=H.state.version,be=Fe.getParameters(v,H.state,de,D,z),Se=Fe.getProgramCacheKey(be);let Pe=I.programs;I.environment=v.isMeshStandardMaterial?D.environment:null,I.fog=D.fog,I.envMap=(v.isMeshStandardMaterial?it:je).get(v.envMap||I.environment),Pe===void 0&&(v.addEventListener("dispose",fe),Pe=new Map,I.programs=Pe);let Te=Pe.get(Se);if(Te!==void 0){if(I.currentProgram===Te&&I.lightsStateVersion===xe)return hr(v,be),Te}else be.uniforms=Fe.getUniforms(v),v.onBuild(z,be,p),v.onBeforeCompile(be,p),Te=Fe.acquireProgram(be,Se),Pe.set(Se,Te),I.uniforms=be.uniforms;const Ae=I.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=x.uniform),hr(v,be),I.needsLights=Lo(v),I.lightsStateVersion=xe,I.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMap.value=H.state.directionalShadowMap,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotShadowMap.value=H.state.spotShadowMap,Ae.spotShadowMatrix.value=H.state.spotShadowMatrix,Ae.pointShadowMap.value=H.state.pointShadowMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ue=Te.getUniforms(),sn=Wi.seqWithValue(Ue.seq,Ae);return I.currentProgram=Te,I.uniformsList=sn,Te}function hr(v,D){const z=Ee.get(v);z.outputEncoding=D.outputEncoding,z.instancing=D.instancing,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Ao(v,D,z,I,H){D.isScene!==!0&&(D=ce),ge.resetTextureUnits();const de=D.fog,xe=I.isMeshStandardMaterial?D.environment:null,be=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Mn,Se=(I.isMeshStandardMaterial?it:je).get(I.envMap||xe),Pe=I.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Te=!!I.normalMap&&!!z.attributes.tangent,Ae=!!z.morphAttributes.position,Ue=!!z.morphAttributes.normal,sn=!!z.morphAttributes.color,bn=I.toneMapped?p.toneMapping:qt,wn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Tt=wn!==void 0?wn.length:0,Le=Ee.get(I),En=d.state.lights;if(X===!0&&(O===!0||v!==S)){const Ct=v===S&&I.id===T;x.setState(I,v,Ct)}let Oe=!1;I.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==En.state.version||Le.outputEncoding!==be||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Se||I.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==x.numPlanes||Le.numIntersection!==x.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==Te||Le.morphTargets!==Ae||Le.morphNormals!==Ue||Le.morphColors!==sn||Le.toneMapping!==bn||ye.isWebGL2===!0&&Le.morphTargetsCount!==Tt)&&(Oe=!0):(Oe=!0,Le.__version=I.version);let At=Le.currentProgram;Oe===!0&&(At=ts(I,D,H));let jt=!1,ti=!1,ns=!1;const et=At.getUniforms(),ni=Le.uniforms;if(re.useProgram(At.program)&&(jt=!0,ti=!0,ns=!0),I.id!==T&&(T=I.id,ti=!0),jt||S!==v){if(et.setValue(V,"projectionMatrix",v.projectionMatrix),ye.logarithmicDepthBuffer&&et.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),S!==v&&(S=v,ti=!0,ns=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ct=et.map.cameraPosition;Ct!==void 0&&Ct.setValue(V,Z.setFromMatrixPosition(v.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&et.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||H.isSkinnedMesh)&&et.setValue(V,"viewMatrix",v.matrixWorldInverse)}if(H.isSkinnedMesh){et.setOptional(V,H,"bindMatrix"),et.setOptional(V,H,"bindMatrixInverse");const Ct=H.skeleton;Ct&&(ye.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),et.setValue(V,"boneTexture",Ct.boneTexture,ge),et.setValue(V,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const is=z.morphAttributes;return(is.position!==void 0||is.normal!==void 0||is.color!==void 0&&ye.isWebGL2===!0)&&ee.update(H,z,I,At),(ti||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,et.setValue(V,"receiveShadow",H.receiveShadow)),ti&&(et.setValue(V,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&Co(ni,ns),de&&I.fog===!0&&zt.refreshFogUniforms(ni,de),zt.refreshMaterialUniforms(ni,I,P,N,W),Wi.upload(V,Le.uniformsList,ni,ge)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Wi.upload(V,Le.uniformsList,ni,ge),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&et.setValue(V,"center",H.center),et.setValue(V,"modelViewMatrix",H.modelViewMatrix),et.setValue(V,"normalMatrix",H.normalMatrix),et.setValue(V,"modelMatrix",H.matrixWorld),At}function Co(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Lo(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,D,z){Ee.get(v.texture).__webglTexture=D,Ee.get(v.depthTexture).__webglTexture=z;const I=Ee.get(v);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=z===void 0,I.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,D){const z=Ee.get(v);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,z=0){A=v,_=D,b=z;let I=!0;if(v){const Se=Ee.get(v);Se.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),I=!1):Se.__webglFramebuffer===void 0?ge.setupRenderTarget(v):Se.__hasExternalTextures&&ge.rebindTextures(v,Ee.get(v.texture).__webglTexture,Ee.get(v.depthTexture).__webglTexture)}let H=null,de=!1,xe=!1;if(v){const Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture)&&(xe=!0);const Pe=Ee.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(H=Pe[D],de=!0):ye.isWebGL2&&v.samples>0&&ge.useMultisampledRTT(v)===!1?H=Ee.get(v).__webglMultisampledFramebuffer:H=Pe,C.copy(v.viewport),F.copy(v.scissor),M=v.scissorTest}else C.copy(L).multiplyScalar(P).floor(),F.copy(k).multiplyScalar(P).floor(),M=B;if(re.bindFramebuffer(36160,H)&&ye.drawBuffers&&I&&re.drawBuffers(v,H),re.viewport(C),re.scissor(F),re.setScissorTest(M),de){const Se=Ee.get(v.texture);V.framebufferTexture2D(36160,36064,34069+D,Se.__webglTexture,z)}else if(xe){const Se=Ee.get(v.texture),Pe=D||0;V.framebufferTextureLayer(36160,36064,Se.__webglTexture,z||0,Pe)}T=-1},this.readRenderTargetPixels=function(v,D,z,I,H,de,xe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){re.bindFramebuffer(36160,be);try{const Se=v.texture,Pe=Se.format,Te=Se.type;if(Pe!==vt&&U.convert(Pe)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Te===di&&(Me.has("EXT_color_buffer_half_float")||ye.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Te!==vn&&U.convert(Te)!==V.getParameter(35738)&&!(Te===dn&&(ye.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-I&&z>=0&&z<=v.height-H&&V.readPixels(D,z,I,H,U.convert(Pe),U.convert(Te),de)}finally{const Se=A!==null?Ee.get(A).__webglFramebuffer:null;re.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(v,D,z=0){const I=Math.pow(2,-z),H=Math.floor(D.image.width*I),de=Math.floor(D.image.height*I);ge.setTexture2D(D,0),V.copyTexSubImage2D(3553,z,0,0,v.x,v.y,H,de),re.unbindTexture()},this.copyTextureToTexture=function(v,D,z,I=0){const H=D.image.width,de=D.image.height,xe=U.convert(z.format),be=U.convert(z.type);ge.setTexture2D(z,0),V.pixelStorei(37440,z.flipY),V.pixelStorei(37441,z.premultiplyAlpha),V.pixelStorei(3317,z.unpackAlignment),D.isDataTexture?V.texSubImage2D(3553,I,v.x,v.y,H,de,xe,be,D.image.data):D.isCompressedTexture?V.compressedTexSubImage2D(3553,I,v.x,v.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):V.texSubImage2D(3553,I,v.x,v.y,xe,be,D.image),I===0&&z.generateMipmaps&&V.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(v,D,z,I,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=v.max.x-v.min.x+1,xe=v.max.y-v.min.y+1,be=v.max.z-v.min.z+1,Se=U.convert(I.format),Pe=U.convert(I.type);let Te;if(I.isData3DTexture)ge.setTexture3D(I,0),Te=32879;else if(I.isDataArrayTexture)ge.setTexture2DArray(I,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,I.flipY),V.pixelStorei(37441,I.premultiplyAlpha),V.pixelStorei(3317,I.unpackAlignment);const Ae=V.getParameter(3314),Ue=V.getParameter(32878),sn=V.getParameter(3316),bn=V.getParameter(3315),wn=V.getParameter(32877),Tt=z.isCompressedTexture?z.mipmaps[0]:z.image;V.pixelStorei(3314,Tt.width),V.pixelStorei(32878,Tt.height),V.pixelStorei(3316,v.min.x),V.pixelStorei(3315,v.min.y),V.pixelStorei(32877,v.min.z),z.isDataTexture||z.isData3DTexture?V.texSubImage3D(Te,H,D.x,D.y,D.z,de,xe,be,Se,Pe,Tt.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Te,H,D.x,D.y,D.z,de,xe,be,Se,Tt.data)):V.texSubImage3D(Te,H,D.x,D.y,D.z,de,xe,be,Se,Pe,Tt),V.pixelStorei(3314,Ae),V.pixelStorei(32878,Ue),V.pixelStorei(3316,sn),V.pixelStorei(3315,bn),V.pixelStorei(32877,wn),H===0&&I.generateMipmaps&&V.generateMipmap(Te),re.unbindTexture()},this.initTexture=function(v){ge.setTexture2D(v,0),re.unbindTexture()},this.resetState=function(){_=0,b=0,A=null,re.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class np extends vo{}np.prototype.isWebGL1Renderer=!0;class ip extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class sp extends Xe{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Mo extends Xe{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class rp extends Xe{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new R;new R;new R;new R;new It;class ap extends Xe{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class op extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yo extends Xe{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lp extends yo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cp extends Xe{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ki,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hp extends Xe{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class up extends Xe{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class fp extends Xe{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ki,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class So extends Xe{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kn,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends Mo{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const pp={ShadowMaterial:ap,SpriteMaterial:sp,RawShaderMaterial:op,ShaderMaterial:Xt,PointsMaterial:rp,MeshPhysicalMaterial:lp,MeshStandardMaterial:yo,MeshPhongMaterial:cp,MeshToonMaterial:hp,MeshNormalMaterial:up,MeshLambertMaterial:fp,MeshDepthMaterial:_o,MeshDistanceMaterial:xo,MeshBasicMaterial:rr,MeshMatcapMaterial:So,LineDashedMaterial:dp,LineBasicMaterial:Mo,Material:Xe};Xe.fromType=function(s){return new pp[s]};const bo="\\[\\]\\.:\\/",lr="[^"+bo+"]",mp="[^"+bo.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",lr);/(WCOD+)?/.source.replace("WCOD",mp);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lr);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lr);const Lt=new Uint32Array(512),Dt=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(Lt[s]=0,Lt[s|256]=32768,Dt[s]=24,Dt[s|256]=24):e<-14?(Lt[s]=1024>>-e-14,Lt[s|256]=1024>>-e-14|32768,Dt[s]=-e-1,Dt[s|256]=-e-1):e<=15?(Lt[s]=e+15<<10,Lt[s|256]=e+15<<10|32768,Dt[s]=13,Dt[s|256]=13):e<128?(Lt[s]=31744,Lt[s|256]=64512,Dt[s]=24,Dt[s|256]=24):(Lt[s]=31744,Lt[s|256]=64512,Dt[s]=13,Dt[s|256]=13)}const wo=new Uint32Array(2048),vi=new Uint32Array(64),gp=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,wo[s]=e|t}for(let s=1024;s<2048;++s)wo[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)vi[s]=s<<23;vi[31]=1199570944;vi[32]=2147483648;for(let s=33;s<63;++s)vi[s]=2147483648+(s-32<<23);vi[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(gp[s]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ir);const _p=qa("<div></div>"),xp=({leftJoystickState:s,rightJoystickState:e})=>{const t=(()=>{const o=_p.cloneNode(!0);return o.$$dblclick=()=>{document.fullscreenElement?document.exitFullscreen():document.querySelector("#root")?.requestFullscreen()},o})(),[n,i]=mn({width:window.innerWidth,height:window.innerHeight}),r=()=>i({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",r),Bs(()=>window.removeEventListener("resize",r)),Qs(()=>{const{renderer:o,scene:a,camera:c}=vp(t,n());Bs(()=>t.removeChild(o.domElement));const l=()=>{const h=ui(s).offset.percentage,f=ui(e).offset.percentage;c.translateX(.1*h.x),c.translateZ(.1*h.y),c.rotateX(.03*-f.y),c.rotateY(.03*-f.x),o.render(a,c),requestAnimationFrame(l)};l()}),t},vp=(s,{width:e,height:t})=>{const n=new ip,i=new ut(75,e/t,.1,1e3),r=new vo;r.setSize(window.innerWidth,window.innerHeight);const o=new Qn(1,1,1),a=new So({color:"red"}),c=new Wt(o,a);return n.add(c),i.position.z=5,s.appendChild(r.domElement),{renderer:r,scene:n,camera:i,cube:c}};ko(["dblclick"]);const Os=qa("<div></div>"),Mp=()=>{const[s,e]=mn(yt.eventState()),[t,n]=mn(yt.eventState());return[ki(xp,{leftJoystickState:s,rightJoystickState:t}),(()=>{const i=Os.cloneNode(!0);return Gs(i,ki(yr,{get plugins(){return[wr(),Er(),br(),Tr()]},onMove:e,get baseProps(){return{style:ln.joystickBase}},get handleProps(){return{children:(()=>{const r=Os.cloneNode(!0);return ft(o=>ss(r,ln.joystickHandleChild,o)),r})(),style:ln.joystickHandle}}}),null),Gs(i,ki(yr,{get plugins(){return[wr(),Er(),br({xIndex:2,yIndex:3}),Tr(ja("arrows")),cl({hideOnLock:!0})]},onMove:n,get baseProps(){return{style:ln.joystickBase}},get handleProps(){return{children:(()=>{const r=Os.cloneNode(!0);return ft(o=>ss(r,ln.joystickHandleChild,o)),r})(),style:ln.joystickHandle}}}),null),ft(r=>ss(i,ln.joystickContainer,r)),i})()]},ln={joystickContainer:{position:"fixed",bottom:"1rem",left:"1rem",width:"calc(100vw - 2rem)","justify-content":"space-between",display:"flex",gap:"1rem"},joystickBase:{"border-radius":"50%","z-index":1,height:"min(35vh, 35vw)",width:"min(35vh, 35vw)",background:"rgba(255, 255, 255, .1)"},joystickHandleChild:{width:"50%",height:"50%",background:"rgba(255, 0, 0, .1)","border-radius":"50%"},joystickHandle:{outline:"none",padding:"0",width:"100%",height:"100%",display:"flex","justify-content":"center","align-items":"center",background:"transparent","border-radius":"50%",border:"none"}};Vo(()=>ki(Mp,{}),document.getElementById("root"));
