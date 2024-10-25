"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(5773),r=(n(7294),n(3905));const i={id:"ima_core.PluginLoader",title:"Class: PluginLoader",sidebar_label:"@ima/core.PluginLoader",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/ima_core.PluginLoader",id:"api/classes/ima_core.PluginLoader",title:"Class: PluginLoader",description:"@ima/core.PluginLoader",source:"@site/../docs/api/classes/ima_core.PluginLoader.md",sourceDirName:"api/classes",slug:"/api/classes/ima_core.PluginLoader",permalink:"/api/classes/ima_core.PluginLoader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"ima_core.PluginLoader",title:"Class: PluginLoader",sidebar_label:"@ima/core.PluginLoader",custom_edit_url:null},sidebar:"api",previous:{title:"@ima/core.PageStateManagerImpl",permalink:"/api/classes/ima_core.PageStateManagerImpl"},next:{title:"@ima/core.Request",permalink:"/api/classes/ima_core.Request"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_bootstrap",id:"_bootstrap",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_plugins",id:"_plugins",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"getPlugins",id:"getplugins",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"register",id:"register",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/ima_core"},"@ima/core"),".PluginLoader"),(0,r.kt)("p",null,"Plugin loader utility used to register external IMA.js plugins. This\nadds ability for external packages to automatically hook into several\nIMA.js application parts and automatically bootstrap certain settings."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new PluginLoader"),"()"),(0,r.kt)("p",null,"Initializes the plugin loader."),(0,r.kt)("p",null,"This is private constructor and should not be used outside of this file.\nYou should use the exported instance to register ima.js plugins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { pluginLoader } from '@ima/core';\n\n@private\n")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L26"},"packages/core/src/pluginLoader.ts:26")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"_bootstrap"},"_","bootstrap"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"_","bootstrap"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/ima_core.Bootstrap"},(0,r.kt)("inlineCode",{parentName:"a"},"Bootstrap"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L14"},"packages/core/src/pluginLoader.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"_plugins"},"_","plugins"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"_","plugins"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.InitPluginConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InitPluginConfig")),"  }",">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L10"},"packages/core/src/pluginLoader.ts:10")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getplugins"},"getPlugins"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPlugins"),"(): { ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.InitPluginConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InitPluginConfig")),"  }[]"),(0,r.kt)("p",null,"Returns array of registered IMA.js plugins."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"{ ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/ima_core.InitPluginConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InitPluginConfig")),"  }[]"),(0,r.kt)("p",null,"Array of IMA.js plugins."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L88"},"packages/core/src/pluginLoader.ts:88")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"init"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Initializes the plugin loader with bootstrap instance. Which is later used\nto handle dynamically loaded IMA.js plugins."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bootstrap")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Bootstrap"},(0,r.kt)("inlineCode",{parentName:"a"},"Bootstrap"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"App bootstrap instance.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L36"},"packages/core/src/pluginLoader.ts:36")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"register"},"register"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"register"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"registerFn"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Registers plugin into IMA.js bootstrap sequence."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Plugin name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"registerFn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"ns"),": ",(0,r.kt)("a",{parentName:"td",href:"/api/classes/ima_core.Namespace"},(0,r.kt)("inlineCode",{parentName:"a"},"Namespace")),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/ima_core.InitPluginConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"InitPluginConfig"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Plugin initialization function.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"pluginLoader.register('@ima/plugin-logger', ns => {\n  ns.set('ima.plugin.logger', logger);\n\n  return {\n    initSettings,\n    initServices,\n    initBind,\n  };\n});\n")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/crysadrak/ima/blob/fb424e0/packages/core/src/pluginLoader.ts#L57"},"packages/core/src/pluginLoader.ts:57")))}c.isMDXComponent=!0}}]);