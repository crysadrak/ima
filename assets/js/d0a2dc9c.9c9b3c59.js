"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1073],{8664:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"plugins/available-plugins","title":"Existing plugins","description":"Plugins > List of existing plugins","source":"@site/../docs/plugins/available-plugins.md","sourceDirName":"plugins","slug":"/plugins/available-plugins","permalink":"/plugins/available-plugins","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/plugins/available-plugins.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"Existing plugins","description":"Plugins > List of existing plugins"},"sidebar":"docs","previous":{"title":"Plugins API","permalink":"/plugins/plugin-api"},"next":{"title":"Introduction","permalink":"/devtools/devtools-introduction"}}');var t=n(2540),r=n(3023);const l={title:"Existing plugins",description:"Plugins > List of existing plugins"},a=void 0,o={},c=[{value:"IMA.js-plugins",id:"imajs-plugins",level:2}];function g(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["We've already described a way to ",(0,t.jsx)(s.a,{href:"/plugins/plugin-api#plugin-registration",children:"create your own IMA.js plugins"}),"\nthrough a very simple interface. Now we would like to talk about ",(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins",children:"IMA.js-plugins"})," monorepo that already ",(0,t.jsx)(s.strong,{children:"contains variety of plugins"})," that covers many of the common use cases."]}),"\n",(0,t.jsx)(s.h2,{id:"imajs-plugins",children:"IMA.js-plugins"}),"\n",(0,t.jsxs)(s.p,{children:["Each plugin in ",(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins",children:"this repository"})," is thoroughly tested and maintained, so it always works with the most up to date IMA.js version. We, here at ",(0,t.jsx)(s.a,{href:"https://www.seznam.cz/",children:"Seznam.cz"})," use it daily in production on many of our projects, so don't worry about using them safely in the production environment."]}),"\n",(0,t.jsxs)(s.p,{children:["Without further ado, let's quickly describe in this compact list ",(0,t.jsx)(s.strong,{children:"what each plugin does and when you would want to use them"}),":"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"This list is updated manually, so there can be situations where it doesn't match on 100% what is currently present in the monorepository itself."})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic",children:(0,t.jsx)(s.strong,{children:"plugin-analytic"})})," - Abstract analytic plugin for the IMA.js application. Serves as a base for other analytic plugins."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic-fb-pixel",children:(0,t.jsx)(s.strong,{children:"plugin-analytic-fb-pixel"})})," - Facebook Pixel analytics."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-analytic-google",children:(0,t.jsx)(s.strong,{children:"plugin-analytic-google"})})," - UA and GA4 google analytics."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-halson-rest-client",children:(0,t.jsx)(s.strong,{children:"plugin-halson-rest-client"})})," - HAL+JSON REST API client for IMA applications, based on ",(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-rest-client",children:"@ima/plugin-rest-client"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/cli-plugin-less-constants",children:(0,t.jsx)(s.strong,{children:"plugin-less-constants"})})," - Adds preprocessor which converts theme values defined in the JS file, to their LESS variable counterparts."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-logger",children:(0,t.jsx)(s.strong,{children:"plugin-logger"})})," - A logging tool for IMA.js framework."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-resource-loader",children:(0,t.jsx)(s.strong,{children:"plugin-resource-loader"})})," - Plugin for loading scripts and styles."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-rest-client",children:(0,t.jsx)(s.strong,{children:"plugin-rest-client"})})," - Generic REST API client plugin."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-script-loader",children:(0,t.jsx)(s.strong,{children:"plugin-script-loader"})})," - Plugin for loading 3rd party scripts."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-shared-cache",children:(0,t.jsx)(s.strong,{children:"plugin-shared-cache"})})," - A utility for creating caches that are shared between requests by all IMA.js application instances within the same node.js process."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-managed-component",children:(0,t.jsx)(s.strong,{children:"plugin-managed-component"})})," - Provides an extension to ",(0,t.jsx)(s.code,{children:"AbstractComponent"})," with additional utility."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-select",children:(0,t.jsx)(s.strong,{children:"plugin-select"})})," - Plugin to select extra props from page state to your component."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-self-xss",children:(0,t.jsx)(s.strong,{children:"plugin-self-xss"})})," - This plugin is trying to mitigate Self-XSS security attack by sending simple message into console."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-style-loader",children:(0,t.jsx)(s.strong,{children:"plugin-style-loader"})})," - This is the plugin for loading 3rd party styles for the IMA.js application."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-useragent",children:(0,t.jsx)(s.strong,{children:"plugin-useragent"})})," - Parses useragent from client and server requests."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-xhr",children:(0,t.jsx)(s.strong,{children:"plugin-xhr"})})," - Helper plugin simplifying the usage of the XMLHttpRequest API."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-local-storage",children:(0,t.jsx)(s.strong,{children:"plugin-local-storage"})})," - ",(0,t.jsx)(s.code,{children:"localstorage"})," implementation of ",(0,t.jsx)(s.code,{children:"Storage"})," interface for IMA.js applications."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-testing-integration",children:(0,t.jsx)(s.strong,{children:"plugin-testing-integration"})})," - This is a plugin for integration testing of any IMA.js based application."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-websocket",children:(0,t.jsx)(s.strong,{children:"plugin-websocket"})})," - Allows creating socket server and connected clients can send broadcast message."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/seznam/IMA.js-plugins/tree/master/packages/plugin-merkur",children:(0,t.jsx)(s.strong,{children:"plugin-merkur"})})," - For easier integrations of ",(0,t.jsx)(s.a,{href:"https://merkur.js.org/",children:"merkur"})," widget to ima application."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},3023:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(3696);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);