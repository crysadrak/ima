"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3081],{937:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/@ima/core/classes/EventBus","title":"Class: abstract EventBus","description":"Defined in28","source":"@site/../docs/api/@ima/core/classes/EventBus.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/EventBus","permalink":"/api/@ima/core/classes/EventBus","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/EventBus.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: abstract Error","permalink":"/api/@ima/core/classes/Error"},"next":{"title":"Class: EventBusImpl","permalink":"/api/@ima/core/classes/EventBusImpl"}}');var r=s(2540),i=s(3023);const l={},d="Class: abstract EventBus",a={},c=[{value:"Extended by",id:"extended-by",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EventBus()",id:"new-eventbus",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"fire()",id:"fire",level:3},{value:"Parameters",id:"parameters",level:4},{value:"eventTarget",id:"eventtarget",level:5},{value:"eventName",id:"eventname",level:5},{value:"data?",id:"data",level:5},{value:"options?",id:"options",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws",level:4},{value:"See",id:"see",level:4},{value:"listen()",id:"listen",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"eventTarget",id:"eventtarget-1",level:5},{value:"eventName",id:"eventname-1",level:5},{value:"listener",id:"listener",level:5},{value:"Returns",id:"returns-2",level:4},{value:"listenAll()",id:"listenall",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"eventTarget",id:"eventtarget-2",level:5},{value:"listener",id:"listener-1",level:5},{value:"Returns",id:"returns-3",level:4},{value:"unlisten()",id:"unlisten",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"eventTarget",id:"eventtarget-3",level:5},{value:"eventName",id:"eventname-2",level:5},{value:"listener",id:"listener-2",level:5},{value:"Returns",id:"returns-4",level:4},{value:"unlistenAll()",id:"unlistenall",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"eventTarget",id:"eventtarget-4",level:5},{value:"listener",id:"listener-3",level:5},{value:"Returns",id:"returns-5",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsxs)(n.h1,{id:"class-abstract-eventbus",children:["Class: ",(0,r.jsx)(n.code,{children:"abstract"})," EventBus"]})}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L28",children:"packages/core/src/event/EventBus.ts:28"})]}),"\n",(0,r.jsx)(n.p,{children:"Utility for sending and intercepting wrapped custom DOM events on the DOM or\npropagating them to the current controller."}),"\n",(0,r.jsx)(n.p,{children:"As with native events, the event fired by this event bus always propagate up\nthe DOM tree until they reach the window."}),"\n",(0,r.jsx)(n.p,{children:"Note that the events fired by this event bus are wrapped in custom DOM\nevents which always bear an obscure name set by the implementation of this\ninterface, preventing custom event name collisions, and allowing observation\nand capture of all fired events. The actual event name is always consistent\nby the implementation."}),"\n",(0,r.jsx)(n.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBusImpl",children:(0,r.jsx)(n.code,{children:"EventBusImpl"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"new-eventbus",children:"new EventBus()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"new EventBus"}),"(): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"fire",children:"fire()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fire"}),"(",(0,r.jsx)(n.code,{children:"eventTarget"}),", ",(0,r.jsx)(n.code,{children:"eventName"}),", ",(0,r.jsx)(n.code,{children:"data"}),"?, ",(0,r.jsx)(n.code,{children:"options"}),"?): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L56",children:"packages/core/src/event/EventBus.ts:56"})]}),"\n",(0,r.jsx)(n.p,{children:"Fires a new custom event of the specified name, carrying the provided\ndata."}),"\n",(0,r.jsx)(n.p,{children:"Note that this method does not prevent the event listeners to modify the\ndata in any way. The order in which the event listeners will be executed\nis unspecified and should not be relied upon."}),"\n",(0,r.jsxs)(n.p,{children:["Note that the default options are\n",(0,r.jsx)(n.code,{children:"{ bubbles: true, cancelable: true }"}),", which is different from the\ndefault values used in the native custom events\n(",(0,r.jsx)(n.code,{children:"{ bubbles: false, cancelable: false }"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"eventtarget",children:"eventTarget"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EventTarget"})}),"\n",(0,r.jsx)(n.p,{children:"The event target at which the event\nwill be  dispatched (e.g. element/document/window)."}),"\n",(0,r.jsx)(n.h5,{id:"eventname",children:"eventName"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the event to fire."}),"\n",(0,r.jsx)(n.h5,{id:"data",children:"data?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"any"})}),"\n",(0,r.jsx)(n.p,{children:"The data to pass to the event listeners."}),"\n",(0,r.jsx)(n.h5,{id:"options",children:"options?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusOptions",children:(0,r.jsx)(n.code,{children:"EventBusOptions"})})}),"\n",(0,r.jsxs)(n.p,{children:["The\noverride of the default options passed to the constructor of the\ncustom event fired by this event bus.\nThe default options passed to the custom event constructor are\n",(0,r.jsx)(n.code,{children:"{ bubbles: true, cancelable: true }"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.p,{children:"This custom event bus."}),"\n",(0,r.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"Thrown if the provided event target cannot be used to\nfire the event."}),"\n",(0,r.jsx)(n.h4,{id:"see",children:"See"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event",children:"https://developer.mozilla.org/en-US/docs/Web/API/Event/Event"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"listen",children:"listen()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"listen"}),"(",(0,r.jsx)(n.code,{children:"eventTarget"}),", ",(0,r.jsx)(n.code,{children:"eventName"}),", ",(0,r.jsx)(n.code,{children:"listener"}),"): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L104",children:"packages/core/src/event/EventBus.ts:104"})]}),"\n",(0,r.jsx)(n.p,{children:"Registers the provided event listener to be executed when the specific\ncustom event is fired by the same implementation of the event bus and\npasses through the specified event target."}),"\n",(0,r.jsx)(n.p,{children:"When the specified event is fired, the event listener will be executed\nwith the event passed as the first argument."}),"\n",(0,r.jsx)(n.p,{children:"The order in which the event listeners will be executed is unspecified\nand should not be relied upon."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"eventtarget-1",children:"eventTarget"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EventTarget"})}),"\n",(0,r.jsx)(n.p,{children:"The event target at which the listener\nshould listen for the specified event."}),"\n",(0,r.jsx)(n.h5,{id:"eventname-1",children:"eventName"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the event to listen for."}),"\n",(0,r.jsx)(n.h5,{id:"listener",children:"listener"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusListener",children:(0,r.jsx)(n.code,{children:"EventBusListener"})})}),"\n",(0,r.jsx)(n.p,{children:"The event listener to\nregister."}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.p,{children:"This event bus."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"listenall",children:"listenAll()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"listenAll"}),"(",(0,r.jsx)(n.code,{children:"eventTarget"}),", ",(0,r.jsx)(n.code,{children:"listener"}),"): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L82",children:"packages/core/src/event/EventBus.ts:82"})]}),"\n",(0,r.jsx)(n.p,{children:"Registers the provided event listener to be executed when any custom\nevent is fired using the same implementation of the event bus and passes\nthrough the specified event target."}),"\n",(0,r.jsx)(n.p,{children:"When the specified event is fired, the event listener will be executed\nwith the event passed as the first argument."}),"\n",(0,r.jsx)(n.p,{children:"The order in which the event listeners will be executed is unspecified\nand should not be relied upon."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"eventtarget-2",children:"eventTarget"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EventTarget"})}),"\n",(0,r.jsx)(n.p,{children:"The event target at which the listener\nshould listen for all event bus events."}),"\n",(0,r.jsx)(n.h5,{id:"listener-1",children:"listener"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusListener",children:(0,r.jsx)(n.code,{children:"EventBusListener"})})}),"\n",(0,r.jsx)(n.p,{children:"The event listener to\nregister."}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.p,{children:"This event bus."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unlisten",children:"unlisten()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unlisten"}),"(",(0,r.jsx)(n.code,{children:"eventTarget"}),", ",(0,r.jsx)(n.code,{children:"eventName"}),", ",(0,r.jsx)(n.code,{children:"listener"}),"): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L145",children:"packages/core/src/event/EventBus.ts:145"})]}),"\n",(0,r.jsx)(n.p,{children:"Removes the provided event listener from the set of event listeners\nexecuted when the specified custom event fired by the same\nimplementation passes through the specified event target."}),"\n",(0,r.jsx)(n.p,{children:"The method has no effect if the listener is not registered for the\nspecified event at the specified event target."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"eventtarget-3",children:"eventTarget"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EventTarget"})}),"\n",(0,r.jsx)(n.p,{children:"The event target at which the listener\nis listening for the event."}),"\n",(0,r.jsx)(n.h5,{id:"eventname-2",children:"eventName"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"string"})}),"\n",(0,r.jsx)(n.p,{children:"The name of the event listened for."}),"\n",(0,r.jsx)(n.h5,{id:"listener-2",children:"listener"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusListener",children:(0,r.jsx)(n.code,{children:"EventBusListener"})})}),"\n",(0,r.jsx)(n.p,{children:"The event listener to\nderegister."}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.p,{children:"This event bus."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"unlistenall",children:"unlistenAll()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"unlistenAll"}),"(",(0,r.jsx)(n.code,{children:"eventTarget"}),", ",(0,r.jsx)(n.code,{children:"listener"}),"): ",(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defined in: ",(0,r.jsx)(n.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/event/EventBus.ts#L126",children:"packages/core/src/event/EventBus.ts:126"})]}),"\n",(0,r.jsx)(n.p,{children:"Removes the provided event listener from the set of event listeners\nexecuted when the any custom event fired by the same implementation\npasses through the specified event target."}),"\n",(0,r.jsx)(n.p,{children:"The method has no effect if the listener is not registered at the\nspecified event target."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsx)(n.h5,{id:"eventtarget-4",children:"eventTarget"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"EventTarget"})}),"\n",(0,r.jsx)(n.p,{children:"The event target at which the event\nlistener listens for events."}),"\n",(0,r.jsx)(n.h5,{id:"listener-3",children:"listener"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/type-aliases/EventBusListener",children:(0,r.jsx)(n.code,{children:"EventBusListener"})})}),"\n",(0,r.jsx)(n.p,{children:"The event listener to\nderegister."}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@ima/core/classes/EventBus",children:(0,r.jsx)(n.code,{children:"EventBus"})})}),"\n",(0,r.jsx)(n.p,{children:"This event bus."})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(3696);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);