"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2809],{7880:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"api/@ima/core/classes/ServerWindow","title":"Class: ServerWindow","description":"Defined in10","source":"@site/../docs/api/@ima/core/classes/ServerWindow.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/ServerWindow","permalink":"/api/@ima/core/classes/ServerWindow","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/ServerWindow.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: ServerRouter","permalink":"/api/@ima/core/classes/ServerRouter"},"next":{"title":"Class: SessionMapStorage\\\\<V\\\\>","permalink":"/api/@ima/core/classes/SessionMapStorage"}}');var d=s(2540),i=s(3023);const c={},l="Class: ServerWindow",o={},t=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ServerWindow()",id:"new-serverwindow",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Get Signature",id:"get-signature",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Methods",id:"methods",level:2},{value:"bindEventListener()",id:"bindeventlistener",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides",level:4},{value:"createCustomEvent()",id:"createcustomevent",level:3},{value:"Type Parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"name",id:"name",level:5},{value:"options",id:"options",level:5},{value:"Returns",id:"returns-3",level:4},{value:"See",id:"see",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"getBody()",id:"getbody",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"getDocument()",id:"getdocument",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"getDomain()",id:"getdomain",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"getElementById()",id:"getelementbyid",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"getHistoryState()",id:"gethistorystate",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"getHost()",id:"gethost",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"getPath()",id:"getpath",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"getScrollX()",id:"getscrollx",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"getScrollY()",id:"getscrolly",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"getUrl()",id:"geturl",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"getWindow()",id:"getwindow",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"hasSessionStorage()",id:"hassessionstorage",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Overrides",id:"overrides-13",level:4},{value:"isClient()",id:"isclient",level:3},{value:"Returns",id:"returns-16",level:4},{value:"Overrides",id:"overrides-14",level:4},{value:"isCookieEnabled()",id:"iscookieenabled",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Overrides",id:"overrides-15",level:4},{value:"pushState()",id:"pushstate",level:3},{value:"Returns",id:"returns-18",level:4},{value:"Overrides",id:"overrides-16",level:4},{value:"querySelector()",id:"queryselector",level:3},{value:"Returns",id:"returns-19",level:4},{value:"Overrides",id:"overrides-17",level:4},{value:"querySelectorAll()",id:"queryselectorall",level:3},{value:"Type Parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"selector",id:"selector",level:5},{value:"Returns",id:"returns-20",level:4},{value:"Overrides",id:"overrides-18",level:4},{value:"redirect()",id:"redirect",level:3},{value:"Returns",id:"returns-21",level:4},{value:"Overrides",id:"overrides-19",level:4},{value:"replaceState()",id:"replacestate",level:3},{value:"Returns",id:"returns-22",level:4},{value:"Overrides",id:"overrides-20",level:4},{value:"scrollTo()",id:"scrollto",level:3},{value:"Returns",id:"returns-23",level:4},{value:"Overrides",id:"overrides-21",level:4},{value:"setTitle()",id:"settitle",level:3},{value:"Returns",id:"returns-24",level:4},{value:"Overrides",id:"overrides-22",level:4},{value:"unbindEventListener()",id:"unbindeventlistener",level:3},{value:"Returns",id:"returns-25",level:4},{value:"Overrides",id:"overrides-23",level:4}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.header,{children:(0,d.jsx)(r.h1,{id:"class-serverwindow",children:"Class: ServerWindow"})}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L10",children:"packages/core/src/window/ServerWindow.ts:10"})]}),"\n",(0,d.jsxs)(r.p,{children:["Server-side implementation of the ",(0,d.jsx)(r.code,{children:"Window"})," utility API."]}),"\n",(0,d.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})})}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(r.h3,{id:"new-serverwindow",children:"new ServerWindow()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"new ServerWindow"}),"(): ",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/ServerWindow",children:(0,d.jsx)(r.code,{children:"ServerWindow"})})]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/ServerWindow",children:(0,d.jsx)(r.code,{children:"ServerWindow"})})}),"\n",(0,d.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#constructors",children:(0,d.jsx)(r.code,{children:"constructor"})})]}),"\n",(0,d.jsx)(r.h2,{id:"accessors",children:"Accessors"}),"\n",(0,d.jsx)(r.h3,{id:"dependencies",children:"$dependencies"}),"\n",(0,d.jsx)(r.h4,{id:"get-signature",children:"Get Signature"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"get"})," ",(0,d.jsx)(r.code,{children:"static"})," ",(0,d.jsx)(r.strong,{children:"$dependencies"}),"(): ",(0,d.jsx)(r.code,{children:"never"}),"[]"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L11",children:"packages/core/src/window/ServerWindow.ts:11"})]}),"\n",(0,d.jsx)(r.h5,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"never"}),"[]"]}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.h3,{id:"bindeventlistener",children:"bindEventListener()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"bindEventListener"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L194",children:"packages/core/src/window/ServerWindow.ts:194"})]}),"\n",(0,d.jsx)(r.p,{children:"Registers the provided event listener to be executed when the specified\nevent occurs on the specified event target."}),"\n",(0,d.jsxs)(r.p,{children:["Registering the same event listener for the same event on the same event\ntarget with the same ",(0,d.jsx)(r.code,{children:"useCapture"})," flag value repeatedly has no\neffect."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#bindeventlistener",children:(0,d.jsx)(r.code,{children:"bindEventListener"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"createcustomevent",children:"createCustomEvent()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"createCustomEvent"}),"<",(0,d.jsx)(r.code,{children:"T"}),">(",(0,d.jsx)(r.code,{children:"name"}),", ",(0,d.jsx)(r.code,{children:"options"}),"): ",(0,d.jsx)(r.code,{children:"CustomEvent"}),"<",(0,d.jsx)(r.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L179",children:"packages/core/src/window/ServerWindow.ts:179"})]}),"\n",(0,d.jsx)(r.p,{children:"Create new instance of CustomEvent of the specified name and using the\nprovided options."}),"\n",(0,d.jsx)(r.h4,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"T"})]}),"\n",(0,d.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsx)(r.h5,{id:"name",children:"name"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.p,{children:"Custom event's name (sometimes referred to as the\nevent's type)."}),"\n",(0,d.jsx)(r.h5,{id:"options",children:"options"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"CustomEventInit"}),"<",(0,d.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,d.jsx)(r.p,{children:"The custom event's options."}),"\n",(0,d.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"CustomEvent"}),"<",(0,d.jsx)(r.code,{children:"T"}),">"]}),"\n",(0,d.jsx)(r.p,{children:"The created custom event."}),"\n",(0,d.jsx)(r.h4,{id:"see",children:"See"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",children:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#createcustomevent",children:(0,d.jsx)(r.code,{children:"createCustomEvent"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getbody",children:"getBody()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getBody"}),"(): ",(0,d.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L109",children:"packages/core/src/window/ServerWindow.ts:109"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns the document's body element. The method returns\n",(0,d.jsx)(r.code,{children:"undefined"})," if invoked at the server-side."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"undefined"})}),"\n",(0,d.jsxs)(r.p,{children:["The document's body element, or\n",(0,d.jsx)(r.code,{children:"undefined"})," if invoked at the server side."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getbody",children:(0,d.jsx)(r.code,{children:"getBody"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getdocument",children:"getDocument()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getDocument"}),"(): ",(0,d.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L53",children:"packages/core/src/window/ServerWindow.ts:53"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns the native ",(0,d.jsx)(r.code,{children:"document"})," object representing any web page loaded\nin the browser and serves as an entry point into the web page's content\nwhich is the DOM tree at the client-side. The method returns ",(0,d.jsx)(r.code,{children:"undefined"}),"\nif used at the server-side."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"undefined"})}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:"document"})," object at the\nclient-side, or ",(0,d.jsx)(r.code,{children:"undefined"})," at the server-side."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getdocument",children:(0,d.jsx)(r.code,{children:"getDocument"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getdomain",children:"getDomain()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getDomain"}),"(): ",(0,d.jsx)(r.code,{children:'""'})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L81",children:"packages/core/src/window/ServerWindow.ts:81"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns the domain of the current document's URL as\n",(0,d.jsx)(r.code,{children:"${protocol}://${host}"}),"."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'""'})}),"\n",(0,d.jsx)(r.p,{children:"The current domain."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getdomain",children:(0,d.jsx)(r.code,{children:"getDomain"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getelementbyid",children:"getElementById()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getElementById"}),"(): ",(0,d.jsx)(r.code,{children:"null"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L116",children:"packages/core/src/window/ServerWindow.ts:116"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns the HTML element with the specified ",(0,d.jsx)(r.code,{children:"id"})," attribute value."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"null"})}),"\n",(0,d.jsxs)(r.p,{children:["The element with the specified id, or\n",(0,d.jsx)(r.code,{children:"null"})," if no such element exists."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getelementbyid",children:(0,d.jsx)(r.code,{children:"getElementById"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"gethistorystate",children:"getHistoryState()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getHistoryState"}),"(): ",(0,d.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L123",children:"packages/core/src/window/ServerWindow.ts:123"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns the history state."}),"\n",(0,d.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"undefined"})}),"\n",(0,d.jsx)(r.p,{children:"The current history state"}),"\n",(0,d.jsx)(r.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#gethistorystate",children:(0,d.jsx)(r.code,{children:"getHistoryState"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"gethost",children:"getHost()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getHost"}),"(): ",(0,d.jsx)(r.code,{children:'""'})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L88",children:"packages/core/src/window/ServerWindow.ts:88"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'""'})}),"\n",(0,d.jsx)(r.p,{children:"The current host."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-7",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#gethost",children:(0,d.jsx)(r.code,{children:"getHost"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getpath",children:"getPath()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getPath"}),"(): ",(0,d.jsx)(r.code,{children:'""'})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L95",children:"packages/core/src/window/ServerWindow.ts:95"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns the path part of the current URL, including the query string."}),"\n",(0,d.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'""'})}),"\n",(0,d.jsx)(r.p,{children:"The path and query string parts of the current URL."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-8",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getpath",children:(0,d.jsx)(r.code,{children:"getPath"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getscrollx",children:"getScrollX()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getScrollX"}),"(): ",(0,d.jsx)(r.code,{children:"0"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L60",children:"packages/core/src/window/ServerWindow.ts:60"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns the number of pixels the viewport is scrolled horizontally."}),"\n",(0,d.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"0"})}),"\n",(0,d.jsx)(r.p,{children:"The number of pixels the viewport is scrolled\nhorizontally."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-9",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getscrollx",children:(0,d.jsx)(r.code,{children:"getScrollX"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getscrolly",children:"getScrollY()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getScrollY"}),"(): ",(0,d.jsx)(r.code,{children:"0"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L67",children:"packages/core/src/window/ServerWindow.ts:67"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns the number of pixels the document is scrolled vertically."}),"\n",(0,d.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"0"})}),"\n",(0,d.jsx)(r.p,{children:"The number of pixels the document is scrolled\nvertically."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-10",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getscrolly",children:(0,d.jsx)(r.code,{children:"getScrollY"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"geturl",children:"getUrl()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getUrl"}),"(): ",(0,d.jsx)(r.code,{children:'""'})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L102",children:"packages/core/src/window/ServerWindow.ts:102"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-13",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:'""'})}),"\n",(0,d.jsx)(r.p,{children:"The current document's URL."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-11",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#geturl",children:(0,d.jsx)(r.code,{children:"getUrl"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"getwindow",children:"getWindow()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"getWindow"}),"(): ",(0,d.jsx)(r.code,{children:"undefined"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L46",children:"packages/core/src/window/ServerWindow.ts:46"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns the native ",(0,d.jsx)(r.code,{children:"window"})," object representing the global context\nat the client-side. The method returns ",(0,d.jsx)(r.code,{children:"undefined"})," if used at the\nserver-side."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-14",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"undefined"})}),"\n",(0,d.jsxs)(r.p,{children:["The ",(0,d.jsx)(r.code,{children:"window"})," object at the\nclient-side, or ",(0,d.jsx)(r.code,{children:"undefined"})," at the server-side."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-12",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#getwindow",children:(0,d.jsx)(r.code,{children:"getWindow"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"hassessionstorage",children:"hasSessionStorage()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"hasSessionStorage"}),"(): ",(0,d.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L32",children:"packages/core/src/window/ServerWindow.ts:32"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns ",(0,d.jsx)(r.code,{children:"true"})," if the session storage is supported."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-15",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"false"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"true"})," if the session storage is supported."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-13",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#hassessionstorage",children:(0,d.jsx)(r.code,{children:"hasSessionStorage"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"isclient",children:"isClient()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"isClient"}),"(): ",(0,d.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L18",children:"packages/core/src/window/ServerWindow.ts:18"})]}),"\n",(0,d.jsx)(r.h4,{id:"returns-16",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"false"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"true"})," if invoked at the client side."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-14",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#isclient",children:(0,d.jsx)(r.code,{children:"isClient"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"iscookieenabled",children:"isCookieEnabled()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"isCookieEnabled"}),"(): ",(0,d.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L25",children:"packages/core/src/window/ServerWindow.ts:25"})]}),"\n",(0,d.jsxs)(r.p,{children:["Returns ",(0,d.jsx)(r.code,{children:"true"})," if the cookies are set and processed with every\nHTTP request and response automatically by the environment."]}),"\n",(0,d.jsx)(r.h4,{id:"returns-17",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"false"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"true"})," if cookies are handled automatically by\nthe environment."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-15",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#iscookieenabled",children:(0,d.jsx)(r.code,{children:"isCookieEnabled"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"pushstate",children:"pushState()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"pushState"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L165",children:"packages/core/src/window/ServerWindow.ts:165"})]}),"\n",(0,d.jsx)(r.p,{children:"Pushes a new state to the browser history. The method has no effect if\nthe current browser does not support the history API (IE9)."}),"\n",(0,d.jsx)(r.h4,{id:"returns-18",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-16",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#pushstate",children:(0,d.jsx)(r.code,{children:"pushState"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"queryselector",children:"querySelector()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"querySelector"}),"(): ",(0,d.jsx)(r.code,{children:"null"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L130",children:"packages/core/src/window/ServerWindow.ts:130"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns the first element matching the specified CSS 3 selector."}),"\n",(0,d.jsx)(r.h4,{id:"returns-19",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"null"})}),"\n",(0,d.jsxs)(r.p,{children:["The first element matching the CSS selector or\n",(0,d.jsx)(r.code,{children:"null"})," if no such element exists."]}),"\n",(0,d.jsx)(r.h4,{id:"overrides-17",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#queryselector",children:(0,d.jsx)(r.code,{children:"querySelector"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"queryselectorall",children:"querySelectorAll()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"querySelectorAll"}),"<",(0,d.jsx)(r.code,{children:"E"}),">(",(0,d.jsx)(r.code,{children:"selector"}),"): ",(0,d.jsx)(r.code,{children:"NodeListOf"}),"<",(0,d.jsx)(r.code,{children:"E"}),">"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L137",children:"packages/core/src/window/ServerWindow.ts:137"})]}),"\n",(0,d.jsx)(r.p,{children:"Returns a node list of all elements matching the specified CSS 3\nselector."}),"\n",(0,d.jsx)(r.h4,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["\u2022 ",(0,d.jsx)(r.strong,{children:"E"})," ",(0,d.jsx)(r.em,{children:"extends"})," ",(0,d.jsx)(r.code,{children:"Element"})," = ",(0,d.jsx)(r.code,{children:"Element"})]}),"\n",(0,d.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsx)(r.h5,{id:"selector",children:"selector"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"string"})}),"\n",(0,d.jsx)(r.p,{children:"The CSS selector."}),"\n",(0,d.jsx)(r.h4,{id:"returns-20",children:"Returns"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"NodeListOf"}),"<",(0,d.jsx)(r.code,{children:"E"}),">"]}),"\n",(0,d.jsx)(r.p,{children:"A node list containing all elements matching the\nspecified CSS selector."}),"\n",(0,d.jsx)(r.h4,{id:"overrides-18",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#queryselectorall",children:(0,d.jsx)(r.code,{children:"querySelectorAll"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"redirect",children:"redirect()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"redirect"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L158",children:"packages/core/src/window/ServerWindow.ts:158"})]}),"\n",(0,d.jsx)(r.p,{children:"Performs a hard redirect (discarding the current JavaScript state) to\nthe specified URL."}),"\n",(0,d.jsx)(r.h4,{id:"returns-21",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-19",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#redirect",children:(0,d.jsx)(r.code,{children:"redirect"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"replacestate",children:"replaceState()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"replaceState"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L172",children:"packages/core/src/window/ServerWindow.ts:172"})]}),"\n",(0,d.jsx)(r.p,{children:"Replaces the current history entry. The method has no effect if the\ncurrent browser does not support the history API (IE9)."}),"\n",(0,d.jsx)(r.h4,{id:"returns-22",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-20",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#replacestate",children:(0,d.jsx)(r.code,{children:"replaceState"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"scrollto",children:"scrollTo()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"scrollTo"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L74",children:"packages/core/src/window/ServerWindow.ts:74"})]}),"\n",(0,d.jsx)(r.p,{children:"Scrolls the viewport to the specified location (if possible)."}),"\n",(0,d.jsx)(r.h4,{id:"returns-23",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-21",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#scrollto",children:(0,d.jsx)(r.code,{children:"scrollTo"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"settitle",children:"setTitle()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"setTitle"}),"(): ",(0,d.jsx)(r.code,{children:"never"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L39",children:"packages/core/src/window/ServerWindow.ts:39"})]}),"\n",(0,d.jsx)(r.p,{children:"Sets the new page title of the document."}),"\n",(0,d.jsx)(r.h4,{id:"returns-24",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"never"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-22",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#settitle",children:(0,d.jsx)(r.code,{children:"setTitle"})})]}),"\n",(0,d.jsx)(r.hr,{}),"\n",(0,d.jsx)(r.h3,{id:"unbindeventlistener",children:"unbindEventListener()"}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"unbindEventListener"}),"(): ",(0,d.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["Defined in: ",(0,d.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/window/ServerWindow.ts#L201",children:"packages/core/src/window/ServerWindow.ts:201"})]}),"\n",(0,d.jsx)(r.p,{children:"Deregister the provided event listener, so it will no longer we\nexecuted when the specified event occurs on the specified event target."}),"\n",(0,d.jsx)(r.p,{children:"The method has no effect if the provided event listener is not\nregistered to be executed at the specified event."}),"\n",(0,d.jsx)(r.h4,{id:"returns-25",children:"Returns"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.code,{children:"void"})}),"\n",(0,d.jsx)(r.h4,{id:"overrides-23",children:"Overrides"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window",children:(0,d.jsx)(r.code,{children:"Window"})}),".",(0,d.jsx)(r.a,{href:"/api/@ima/core/classes/Window#unbindeventlistener",children:(0,d.jsx)(r.code,{children:"unbindEventListener"})})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},3023:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>l});var n=s(3696);const d={},i=n.createContext(d);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);