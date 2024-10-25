"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(5773),n=(r(7294),r(3905));const i={id:"ima_react_page_renderer.PageRendererFactory",title:"Class: PageRendererFactory",sidebar_label:"@ima/react-page-renderer.PageRendererFactory",custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/ima_react_page_renderer.PageRendererFactory",id:"api/classes/ima_react_page_renderer.PageRendererFactory",title:"Class: PageRendererFactory",description:"@ima/react-page-renderer.PageRendererFactory",source:"@site/../docs/api/classes/ima_react_page_renderer.PageRendererFactory.md",sourceDirName:"api/classes",slug:"/api/classes/ima_react_page_renderer.PageRendererFactory",permalink:"/api/classes/ima_react_page_renderer.PageRendererFactory",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_react_page_renderer.PageRendererFactory",title:"Class: PageRendererFactory",sidebar_label:"@ima/react-page-renderer.PageRendererFactory",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/react-page-renderer.ErrorBoundary",permalink:"/api/classes/ima_react_page_renderer.ErrorBoundary"},next:{title:"@ima/react-page-renderer.ServerPageRenderer",permalink:"/api/classes/ima_react_page_renderer.ServerPageRenderer"}},p={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_componentUtils",id:"_componentutils",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"_isFunctionalComponent",id:"_isfunctionalcomponent",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getDocumentView",id:"getdocumentview",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getManagedRootView",id:"getmanagedrootview",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getUtils",id:"getutils",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:d},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/ima_react_page_renderer"},"@ima/react-page-renderer"),".PageRendererFactory"),(0,n.kt)("p",null,"Factory for page render."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new PageRendererFactory"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"componentUtils"),")"),(0,n.kt)("p",null,"Initializes the factory used by the page renderer."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"componentUtils")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/classes/ima_core.ComponentUtils"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentUtils"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The registry of component utilities.")))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L15"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:15")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"_componentutils"},"_","componentUtils"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_","componentUtils"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/ima_core.ComponentUtils"},(0,n.kt)("inlineCode",{parentName:"a"},"ComponentUtils"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L8"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:8")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_isfunctionalcomponent"},"_","isFunctionalComponent"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"_isFunctionalComponent"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"component"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"component")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"unknown"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L91"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:91")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getdocumentview"},"getDocumentView"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getDocumentView"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"documentView"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"ComponentType")),(0,n.kt)("p",null,"Returns the class constructor of the specified document view component.\nDocument view may be specified as a namespace path or as a class\nconstructor."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"documentView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ComponentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The namespace path pointing to the document view component, or the constructor of the document view component.")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ComponentType")),(0,n.kt)("p",null,"The constructor of the document\nview component."),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L40"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:40")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getmanagedrootview"},"getManagedRootView"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getManagedRootView"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"managedRootView"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"ComponentType")),(0,n.kt)("p",null,"Returns the class constructor of the specified managed root view\ncomponent. Managed root view may be specified as a namespace\npath or as a class constructor."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"managedRootView")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ComponentType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The namespace path pointing to the managed root view component, or the constructor of the React component.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ComponentType")),(0,n.kt)("p",null,"The constructor of the managed\nroot view component."),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L71"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:71")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getutils"},"getUtils"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getUtils"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Utils"},(0,n.kt)("inlineCode",{parentName:"a"},"Utils"))),(0,n.kt)("p",null,"Return object of services which are defined for alias $Utils."),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.Utils"},(0,n.kt)("inlineCode",{parentName:"a"},"Utils"))),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/react-page-renderer/src/renderer/PageRendererFactory.ts#L25"},"packages/react-page-renderer/src/renderer/PageRendererFactory.ts:25")))}m.isMDXComponent=!0}}]);