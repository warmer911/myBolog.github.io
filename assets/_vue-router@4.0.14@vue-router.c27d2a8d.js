import{k as Je,u as X,a as He,r as et}from"./_@vue_reactivity@3.2.31@@vue.435b5d06.js";import{c as I,n as tt,i as B,l as Le,k as Be,p as ae,w as nt}from"./_@vue_runtime-core@3.2.31@@vue.b0aa5f29.js";/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const je=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",K=e=>je?Symbol(e):"_vr_"+e,rt=K("rvlm"),we=K("rvd"),J=K("r"),me=K("rl"),he=K("rvl"),q=typeof window!="undefined";function st(e){return e.__esModule||je&&e[Symbol.toStringTag]==="Module"}const A=Object.assign;function le(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const D=()=>{},ot=/\/$/,it=e=>e.replace(ot,"");function ue(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("?"),c=t.indexOf("#",g>-1?g:0);return g>-1&&(r=t.slice(0,g),l=t.slice(g+1,c>-1?c:t.length),s=e(l)),c>-1&&(r=r||t.slice(0,c),d=t.slice(c,t.length)),r=ut(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function ct(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ae(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function at(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!lt(e[n],t[n]))return!1;return!0}function lt(e,t){return Array.isArray(e)?Se(e,t):Array.isArray(t)?Se(t,e):e===t}function Se(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ut(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],!(s===1||d==="."))if(d==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var W;(function(e){e.pop="pop",e.push="push"})(W||(W={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function ft(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),it(e)}const ht=/^[^#]+#/;function dt(e,t){return e.replace(ht,"#")+t}function pt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function mt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=pt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function gt(e,t){de.set(e,t)}function yt(e){const t=de.get(e);return de.delete(e),t}let vt=()=>location.protocol+"//"+location.host;function ze(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,c=s.slice(g);return c[0]!=="/"&&(c="/"+c),Ae(c,"")}return Ae(n,e)+r+s}function Rt(e,t,n,r){let s=[],l=[],d=null;const g=({state:a})=>{const y=ze(e,location),v=n.value,C=t.value;let k=0;if(a){if(n.value=y,t.value=a,d&&d===v){d=null;return}k=C?a.position-C.position:0}else r(y);s.forEach(w=>{w(n.value,v,{delta:k,type:W.pop,direction:k?k>0?F.forward:F.back:F.unknown})})};function c(){d=n.value}function u(a){s.push(a);const y=()=>{const v=s.indexOf(a);v>-1&&s.splice(v,1)};return l.push(y),y}function i(){const{history:a}=window;!a.state||a.replaceState(A({},a.state,{scroll:ee()}),"")}function f(){for(const a of l)a();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:u,destroy:f}}function Ce(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Et(e){const{history:t,location:n}=window,r={value:ze(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,i){const f=e.indexOf("#"),a=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:vt()+e+c;try{t[i?"replaceState":"pushState"](u,"",a),s.value=u}catch(y){console.error(y),n[i?"replace":"assign"](a)}}function d(c,u){const i=A({},t.state,Ce(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});l(c,i,!0),r.value=c}function g(c,u){const i=A({},s.value,t.state,{forward:c,scroll:ee()});l(i.current,i,!0);const f=A({},Ce(r.value,c,null),{position:i.position+1},u);l(c,f,!1),r.value=c}return{location:r,state:s,push:g,replace:d}}function Pt(e){e=ft(e);const t=Et(e),n=Rt(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=A({location:"",base:e,go:r,createHref:dt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function un(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Pt(e)}function wt(e){return typeof e=="string"||e&&typeof e=="object"}function Ge(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ke=K("nf");var be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(be||(be={}));function G(e,t){return A(new Error,{type:e,[Ke]:!0},t)}function $(e,t){return e instanceof Error&&Ke in e&&(t==null||!!(e.type&t))}const _e="[^/]+?",At={sensitive:!1,strict:!1,start:!0,end:!0},St=/[.+*?^${}()[\]/\\]/g;function kt(e,t){const n=A({},At,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const a=u[f];let y=40+(n.sensitive?.25:0);if(a.type===0)f||(s+="/"),s+=a.value.replace(St,"\\$&"),y+=40;else if(a.type===1){const{value:v,repeatable:C,optional:k,regexp:w}=a;l.push({name:v,repeatable:C,optional:k});const P=w||_e;if(P!==_e){y+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+M.message)}}let O=C?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=k&&u.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),s+=O,y+=20,k&&(y+=-8),C&&(y+=-20),P===".*"&&(y+=-50)}i.push(y)}r.push(i)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(u){const i=u.match(d),f={};if(!i)return null;for(let a=1;a<i.length;a++){const y=i[a]||"",v=l[a-1];f[v.name]=y&&v.repeatable?y.split("/"):y}return f}function c(u){let i="",f=!1;for(const a of e){(!f||!i.endsWith("/"))&&(i+="/"),f=!1;for(const y of a)if(y.type===0)i+=y.value;else if(y.type===1){const{value:v,repeatable:C,optional:k}=y,w=v in u?u[v]:"";if(Array.isArray(w)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(w)?w.join("/"):w;if(!P)if(k)a.length<2&&(i.endsWith("/")?i=i.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);i+=P}}return i}return{re:d,score:r,keys:l,parse:g,stringify:c}}function Ct(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function bt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Ct(r[n],s[n]);if(l)return l;n++}return s.length-r.length}const _t={type:0,value:""},Ot=/[a-zA-Z0-9_]/;function xt(e){if(!e)return[[]];if(e==="/")return[[_t]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,c,u="",i="";function f(){!u||(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function a(){u+=c}for(;g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),d()):c===":"?(f(),n=1):a();break;case 4:a(),n=r;break;case 1:c==="("?n=2:Ot.test(c)?a():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:n=3:i+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),d(),s}function Mt(e,t,n){const r=kt(xt(e.path),n),s=A(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Nt(e,t){const n=[],r=new Map;t=xe({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}function l(i,f,a){const y=!a,v=Tt(i);v.aliasOf=a&&a.record;const C=xe(t,i),k=[v];if("alias"in i){const O=typeof i.alias=="string"?[i.alias]:i.alias;for(const M of O)k.push(A({},v,{components:a?a.record.components:v.components,path:M,aliasOf:a?a.record:v}))}let w,P;for(const O of k){const{path:M}=O;if(f&&M[0]!=="/"){const L=f.record.path,N=L[L.length-1]==="/"?"":"/";O.path=f.record.path+(M&&N+M)}if(w=Mt(O,f,C),a?a.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),y&&i.name&&!Oe(w)&&d(i.name)),"children"in v){const L=v.children;for(let N=0;N<L.length;N++)l(L[N],w,a&&a.children[N])}a=a||w,c(w)}return P?()=>{d(P)}:D}function d(i){if(Ge(i)){const f=r.get(i);f&&(r.delete(i),n.splice(n.indexOf(f),1),f.children.forEach(d),f.alias.forEach(d))}else{const f=n.indexOf(i);f>-1&&(n.splice(f,1),i.record.name&&r.delete(i.record.name),i.children.forEach(d),i.alias.forEach(d))}}function g(){return n}function c(i){let f=0;for(;f<n.length&&bt(i,n[f])>=0&&(i.record.path!==n[f].record.path||!Ve(i,n[f]));)f++;n.splice(f,0,i),i.record.name&&!Oe(i)&&r.set(i.record.name,i)}function u(i,f){let a,y={},v,C;if("name"in i&&i.name){if(a=r.get(i.name),!a)throw G(1,{location:i});C=a.record.name,y=A(It(f.params,a.keys.filter(P=>!P.optional).map(P=>P.name)),i.params),v=a.stringify(y)}else if("path"in i)v=i.path,a=n.find(P=>P.re.test(v)),a&&(y=a.parse(v),C=a.record.name);else{if(a=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!a)throw G(1,{location:i,currentLocation:f});C=a.record.name,y=A({},f.params,i.params),v=a.stringify(y)}const k=[];let w=a;for(;w;)k.unshift(w.record),w=w.parent;return{name:C,path:v,params:y,matched:k,meta:Ht(k)}}return e.forEach(i=>l(i)),{addRoute:l,resolve:u,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function It(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Tt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>A(t,n.meta),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ve(e,t){return t.children.some(n=>n===e||Ve(e,n))}const Ue=/#/g,Lt=/&/g,Bt=/\//g,jt=/=/g,qt=/\?/g,Qe=/\+/g,zt=/%5B/g,Gt=/%5D/g,De=/%5E/g,Kt=/%60/g,Fe=/%7B/g,Vt=/%7C/g,We=/%7D/g,Ut=/%20/g;function ge(e){return encodeURI(""+e).replace(Vt,"|").replace(zt,"[").replace(Gt,"]")}function Qt(e){return ge(e).replace(Fe,"{").replace(We,"}").replace(De,"^")}function pe(e){return ge(e).replace(Qe,"%2B").replace(Ut,"+").replace(Ue,"%23").replace(Lt,"%26").replace(Kt,"`").replace(Fe,"{").replace(We,"}").replace(De,"^")}function Dt(e){return pe(e).replace(jt,"%3D")}function Ft(e){return ge(e).replace(Ue,"%23").replace(qt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(Bt,"%2F")}function Z(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Qe," "),d=l.indexOf("="),g=Z(d<0?l:l.slice(0,d)),c=d<0?null:Z(l.slice(d+1));if(g in t){let u=t[g];Array.isArray(u)||(u=t[g]=[u]),u.push(c)}else t[g]=c}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Dt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(l=>l&&pe(l)):[r&&pe(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function Q(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function H(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const c=f=>{f===!1?g(G(4,{from:n,to:t})):f instanceof Error?g(f):wt(f)?g(G(2,{from:t,to:f})):(l&&r.enterCallbacks[s]===l&&typeof f=="function"&&l.push(f),d())},u=e.call(r&&r.instances[s],t,n,c);let i=Promise.resolve(u);e.length<3&&(i=i.then(c)),i.catch(f=>g(f))})}function fe(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Zt(g)){const u=(g.__vccOpts||g)[t];u&&s.push(H(u,n,r,l,d))}else{let c=g();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const i=st(u)?u.default:u;l.components[d]=i;const a=(i.__vccOpts||i)[t];return a&&H(a,n,r,l,d)()}))}}return s}function Zt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ne(e){const t=B(J),n=B(me),r=I(()=>t.resolve(X(e.to))),s=I(()=>{const{matched:c}=r.value,{length:u}=c,i=c[u-1],f=n.matched;if(!i||!f.length)return-1;const a=f.findIndex(z.bind(null,i));if(a>-1)return a;const y=Ie(c[u-2]);return u>1&&Ie(i)===y&&f[f.length-1].path!==y?f.findIndex(z.bind(null,c[u-2])):a}),l=I(()=>s.value>-1&&nn(n.params,r.value.params)),d=I(()=>s.value>-1&&s.value===n.matched.length-1&&qe(n.params,r.value.params));function g(c={}){return tn(c)?t[X(e.replace)?"replace":"push"](X(e.to)).catch(D):Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const Jt=Le({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ne,setup(e,{slots:t}){const n=He(Ne(e)),{options:r}=B(J),s=I(()=>({[Te(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Te(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),en=Jt;function tn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function Ie(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Te=(e,t,n)=>e!=null?e:t!=null?t:n,rn=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=B(he),s=I(()=>e.route||r.value),l=B(we,0),d=I(()=>s.value.matched[l]);ae(we,l+1),ae(rt,d),ae(he,s);const g=et();return nt(()=>[g.value,d.value,e.name],([c,u,i],[f,a,y])=>{u&&(u.instances[i]=c,a&&a!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=a.leaveGuards),u.updateGuards.size||(u.updateGuards=a.updateGuards))),c&&u&&(!a||!z(u,a)||!f)&&(u.enterCallbacks[i]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=d.value,i=u&&u.components[e.name],f=e.name;if(!i)return $e(n.default,{Component:i,route:c});const a=u.props[e.name],y=a?a===!0?c.params:typeof a=="function"?a(c):a:null,C=Be(i,A({},y,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(u.instances[f]=null)},ref:g}));return $e(n.default,{Component:C,route:c})||C}}});function $e(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sn=rn;function fn(e){const t=Nt(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Me,s=e.history,l=Q(),d=Q(),g=Q(),c=Je(T);let u=T;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=le.bind(null,o=>""+o),f=le.bind(null,Wt),a=le.bind(null,Z);function y(o,p){let h,m;return Ge(o)?(h=t.getRecordMatcher(o),m=p):m=o,t.addRoute(m,h)}function v(o){const p=t.getRecordMatcher(o);p&&t.removeRoute(p)}function C(){return t.getRoutes().map(o=>o.record)}function k(o){return!!t.getRecordMatcher(o)}function w(o,p){if(p=A({},p||c.value),typeof o=="string"){const R=ue(n,o,p.path),_=t.resolve({path:R.path},p),U=s.createHref(R.fullPath);return A(R,_,{params:a(_.params),hash:Z(R.hash),redirectedFrom:void 0,href:U})}let h;if("path"in o)h=A({},o,{path:ue(n,o.path,p.path).path});else{const R=A({},o.params);for(const _ in R)R[_]==null&&delete R[_];h=A({},o,{params:f(o.params)}),p.params=f(p.params)}const m=t.resolve(h,p),S=o.hash||"";m.params=i(a(m.params));const b=ct(r,A({},o,{hash:Qt(S),path:m.path})),E=s.createHref(b);return A({fullPath:b,hash:S,query:r===Me?Xt(o.query):o.query||{}},m,{redirectedFrom:void 0,href:E})}function P(o){return typeof o=="string"?ue(n,o,c.value.path):A({},o)}function O(o,p){if(u!==o)return G(8,{from:p,to:o})}function M(o){return V(o)}function L(o){return M(A(P(o),{replace:!0}))}function N(o){const p=o.matched[o.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let m=typeof h=="function"?h(o):h;return typeof m=="string"&&(m=m.includes("?")||m.includes("#")?m=P(m):{path:m},m.params={}),A({query:o.query,hash:o.hash,params:o.params},m)}}function V(o,p){const h=u=w(o),m=c.value,S=o.state,b=o.force,E=o.replace===!0,R=N(h);if(R)return V(A(P(R),{state:S,force:b,replace:E}),p||h);const _=h;_.redirectedFrom=p;let U;return!b&&at(r,m,h)&&(U=G(16,{to:_,from:m}),Pe(m,m,!0,!1)),(U?Promise.resolve(U):ye(_,m)).catch(x=>$(x)?$(x,2)?x:se(x):re(x,_,m)).then(x=>{if(x){if($(x,2))return V(A(P(x.to),{state:S,force:b,replace:E}),p||_)}else x=Re(_,m,!0,E,S);return ve(_,m,x),x})}function Ye(o,p){const h=O(o,p);return h?Promise.reject(h):Promise.resolve()}function ye(o,p){let h;const[m,S,b]=on(o,p);h=fe(m.reverse(),"beforeRouteLeave",o,p);for(const R of m)R.leaveGuards.forEach(_=>{h.push(H(_,o,p))});const E=Ye.bind(null,o,p);return h.push(E),j(h).then(()=>{h=[];for(const R of l.list())h.push(H(R,o,p));return h.push(E),j(h)}).then(()=>{h=fe(S,"beforeRouteUpdate",o,p);for(const R of S)R.updateGuards.forEach(_=>{h.push(H(_,o,p))});return h.push(E),j(h)}).then(()=>{h=[];for(const R of o.matched)if(R.beforeEnter&&!p.matched.includes(R))if(Array.isArray(R.beforeEnter))for(const _ of R.beforeEnter)h.push(H(_,o,p));else h.push(H(R.beforeEnter,o,p));return h.push(E),j(h)}).then(()=>(o.matched.forEach(R=>R.enterCallbacks={}),h=fe(b,"beforeRouteEnter",o,p),h.push(E),j(h))).then(()=>{h=[];for(const R of d.list())h.push(H(R,o,p));return h.push(E),j(h)}).catch(R=>$(R,8)?R:Promise.reject(R))}function ve(o,p,h){for(const m of g.list())m(o,p,h)}function Re(o,p,h,m,S){const b=O(o,p);if(b)return b;const E=p===T,R=q?history.state:{};h&&(m||E?s.replace(o.fullPath,A({scroll:E&&R&&R.scroll},S)):s.push(o.fullPath,S)),c.value=o,Pe(o,p,h,E),se()}let te;function Xe(){te=s.listen((o,p,h)=>{const m=w(o),S=N(m);if(S){V(A(S,{replace:!0}),m).catch(D);return}u=m;const b=c.value;q&&gt(ke(b.fullPath,h.delta),ee()),ye(m,b).catch(E=>$(E,12)?E:$(E,2)?(V(E.to,m).then(R=>{$(R,20)&&!h.delta&&h.type===W.pop&&s.go(-1,!1)}).catch(D),Promise.reject()):(h.delta&&s.go(-h.delta,!1),re(E,m,b))).then(E=>{E=E||Re(m,b,!1),E&&(h.delta?s.go(-h.delta,!1):h.type===W.pop&&$(E,20)&&s.go(-1,!1)),ve(m,b,E)}).catch(D)})}let ne=Q(),Ee=Q(),Y;function re(o,p,h){se(o);const m=Ee.list();return m.length?m.forEach(S=>S(o,p,h)):console.error(o),Promise.reject(o)}function Ze(){return Y&&c.value!==T?Promise.resolve():new Promise((o,p)=>{ne.add([o,p])})}function se(o){return Y||(Y=!o,Xe(),ne.list().forEach(([p,h])=>o?h(o):p()),ne.reset()),o}function Pe(o,p,h,m){const{scrollBehavior:S}=e;if(!q||!S)return Promise.resolve();const b=!h&&yt(ke(o.fullPath,0))||(m||!h)&&history.state&&history.state.scroll||null;return tt().then(()=>S(o,p,b)).then(E=>E&&mt(E)).catch(E=>re(E,o,p))}const oe=o=>s.go(o);let ie;const ce=new Set;return{currentRoute:c,addRoute:y,removeRoute:v,hasRoute:k,getRoutes:C,resolve:w,options:e,push:M,replace:L,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Ee.add,isReady:Ze,install(o){const p=this;o.component("RouterLink",en),o.component("RouterView",sn),o.config.globalProperties.$router=p,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>X(c)}),q&&!ie&&c.value===T&&(ie=!0,M(s.location).catch(S=>{}));const h={};for(const S in T)h[S]=I(()=>c.value[S]);o.provide(J,p),o.provide(me,He(h)),o.provide(he,c);const m=o.unmount;ce.add(o),o.unmount=function(){ce.delete(o),ce.size<1&&(u=T,te&&te(),c.value=T,ie=!1,Y=!1),m()}}}}function j(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function on(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(u=>z(u,g))?r.push(g):n.push(g));const c=e.matched[d];c&&(t.matched.find(u=>z(u,c))||s.push(c))}return[n,r,s]}function hn(){return B(J)}function dn(){return B(me)}export{un as a,hn as b,fn as c,dn as u};
