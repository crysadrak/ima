"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(5773),a=(r(7294),r(3905));const i={title:"Dynamic imports",description:"Advanced Features > Dynamic imports and lazy loading"},o=void 0,c={unversionedId:"advanced-features/dynamic-imports",id:"advanced-features/dynamic-imports",title:"Dynamic imports",description:"Advanced Features > Dynamic imports and lazy loading",source:"@site/../docs/advanced-features/dynamic-imports.md",sourceDirName:"advanced-features",slug:"/advanced-features/dynamic-imports",permalink:"/advanced-features/dynamic-imports",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/advanced-features/dynamic-imports.md",tags:[],version:"current",lastUpdatedBy:"Filip Satek",lastUpdatedAt:1729085417,formattedLastUpdatedAt:"Oct 16, 2024",frontMatter:{title:"Dynamic imports",description:"Advanced Features > Dynamic imports and lazy loading"},sidebar:"docs",previous:{title:"Testing",permalink:"/basic-features/testing"},next:{title:"Introduction to @ima/cli",permalink:"/cli/"}},s={},p=[{value:"Dynamic imports",id:"dynamic-imports",level:2},{value:"Preloading and prefetching",id:"preloading-and-prefetching",level:2},{value:"React suspense",id:"react-suspense",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dynamic-imports"},"Dynamic imports"),(0,a.kt)("h2",{id:"preloading-and-prefetching"},"Preloading and prefetching"),(0,a.kt)("p",null,"Since we're using webpack, to built the application, it already has support for ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules"},"inline directives")," for preloading and prefetching. Using this comment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackPrefetch: true */ './path/to/LoginModal.js');\n")),(0,a.kt)("p",null,"will result in",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="prefetch" href="login-modal-chunk.js">')," being appended in the head of the page. For more information about"),(0,a.kt)("h2",{id:"react-suspense"},"React suspense"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"Suspense")," currently ",(0,a.kt)("strong",{parentName:"p"},"doesn't support SSR"),". However you can use it to load client-side react components. Don't forget to add proper handlers so it only gets rendered on client, since SSR will result in an hydratation error."))}u.isMDXComponent=!0}}]);