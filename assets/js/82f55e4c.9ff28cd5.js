"use strict";(self.webpackChunkcoolcarly_github_io=self.webpackChunkcoolcarly_github_io||[]).push([[5979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4309:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(3697);function i(e){return n.createElement("div",null,n.createElement(a.s,{id:"cusdis-thread",attrs:{host:"https://cusdis.com",appId:"f8cc5e7b-0163-4dab-8f95-fae1a9306c1b",pageId:e.attrs.pageId,pageTitle:e.attrs.pageTitle,pageUrl:e.attrs.pageUrl}}))}},7987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(4309);const o={title:"Home",id:"science_home",sidebar_position:1,pagination_prev:null},c=void 0,s={unversionedId:"science/science_home",id:"science/science_home",title:"Home",description:"About",source:"@site/docs/science/index.mdx",sourceDirName:"science",slug:"/science/",permalink:"/science/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Home",id:"science_home",sidebar_position:1,pagination_prev:null},sidebar:"scienceSidebar",next:{title:"Organic Bioelectronics",permalink:"/science/organic-bioelectronics"}},l={},d=[{value:"About",id:"about",level:3}],p={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"about"},"About"),(0,a.kt)("p",null,"In this section, I write about different concepts in chemistry. Often, I become fascinated with a particular detail or idea. Therefore, this space provides a place to research and write about it. "),(0,a.kt)(i.Z,{attrs:{pageId:o.id,pageTitle:o.title,pageUrl:o.__resourcePath},mdxType:"CusdisComments"}))}f.isMDXComponent=!0},3697:(e,t,r)=>{t.s=void 0;const n=r(7294),a=r(168);t.s=function(e){const t=n.useRef(null),r=e.attrs.host||"https://cusdis.com";return a.useScript(`${r}/js/cusdis.es.js`),a.useScript(e.lang?`${r}/js/widget/lang/${e.lang}.js`:""),n.useLayoutEffect((()=>{const e=window.renderCusdis;e&&e(t.current)}),[e.attrs.appId,e.attrs.host,e.attrs.pageId,e.attrs.pageTitle,e.attrs.pageUrl,e.lang]),n.createElement(n.Fragment,null,n.createElement("div",{id:"cusdis_thread","data-host":r,"data-page-id":e.attrs.pageId,"data-app-id":e.attrs.appId,"data-page-title":e.attrs.pageTitle,"data-page-url":e.attrs.pageUrl,"data-theme":e.attrs.theme,style:e.style,ref:t}))}},168:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useScript=void 0;const n=r(7294);t.useScript=function(e){const[t,r]=n.useState(e?"loading":"idle");return n.useEffect((()=>{if(!e)return void r("idle");let t=document.querySelector(`script[src="${e}"]`);if(t)r(t.getAttribute("data-status"));else{t=document.createElement("script"),t.src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);const r=e=>{t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",r),t.addEventListener("error",r)}const n=e=>{r("load"===e.type?"ready":"error")};return t.addEventListener("load",n),t.addEventListener("error",n),()=>{t&&(t.removeEventListener("load",n),t.removeEventListener("error",n))}}),[e]),t}}}]);