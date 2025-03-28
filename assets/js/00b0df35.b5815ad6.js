"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[6199],{3731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/@ima/react-page-renderer/functions/useEventBus","title":"Function: useEventBus()","description":"useEventBus(eventTarget?, eventName?, listener?): useEventBusType","source":"@site/../docs/api/@ima/react-page-renderer/functions/useEventBus.md","sourceDirName":"api/@ima/react-page-renderer/functions","slug":"/api/@ima/react-page-renderer/functions/useEventBus","permalink":"/api/@ima/react-page-renderer/functions/useEventBus","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/react-page-renderer/functions/useEventBus.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Function: useDispatcher()","permalink":"/api/@ima/react-page-renderer/functions/useDispatcher"},"next":{"title":"Function: useLink()","permalink":"/api/@ima/react-page-renderer/functions/useLink"}}');var s=t(2540),i=t(3023);const a={},c="Function: useEventBus()",d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"eventTarget?",id:"eventtarget",level:3},{value:"eventName?",id:"eventname",level:3},{value:"listener?",id:"listener",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-useeventbus",children:"Function: useEventBus()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"useEventBus"}),"(",(0,s.jsx)(n.code,{children:"eventTarget"}),"?, ",(0,s.jsx)(n.code,{children:"eventName"}),"?, ",(0,s.jsx)(n.code,{children:"listener"}),"?): ",(0,s.jsx)(n.a,{href:"/api/@ima/react-page-renderer/interfaces/useEventBusType",children:(0,s.jsx)(n.code,{children:"useEventBusType"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Defined in: ",(0,s.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/react-page-renderer/src/hooks/eventBus.ts#L27",children:"packages/react-page-renderer/src/hooks/eventBus.ts:27"})]}),"\n",(0,s.jsx)(n.p,{children:"Hook to register listeners for dispatcher events. Returns\ndecorated dispatcher fire function. Omitting hook params\ndoesn't register any events to the dispatcher but provides\naccess to the dispatcher's fire method."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"eventtarget",children:"eventTarget?"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"null"})," | ",(0,s.jsx)(n.code,{children:"EventTarget"})]}),"\n",(0,s.jsx)(n.h3,{id:"eventname",children:"eventName?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"string"})}),"\n",(0,s.jsx)(n.h3,{id:"listener",children:"listener?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusListener",children:(0,s.jsx)(n.code,{children:"EventBusListener"})})}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/@ima/react-page-renderer/interfaces/useEventBusType",children:(0,s.jsx)(n.code,{children:"useEventBusType"})})}),"\n",(0,s.jsxs)(n.p,{children:["Dispatcher ",(0,s.jsx)(n.code,{children:"fire"})," method."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { fire } = useEventBus(\n\tcomponentRef.current,\n\t'event',\n () => {}\n);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(3696);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);