"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8495],{5627:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/@ima/core/classes/PageStateManagerImpl","title":"Class: PageStateManagerImpl\\\\<S\\\\>","description":"Defined in22","source":"@site/../docs/api/@ima/core/classes/PageStateManagerImpl.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/PageStateManagerImpl","permalink":"/api/@ima/core/classes/PageStateManagerImpl","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/PageStateManagerImpl.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: PageStateManagerDecorator","permalink":"/api/@ima/core/classes/PageStateManagerDecorator"},"next":{"title":"Class: PluginLoader","permalink":"/api/@ima/core/classes/PluginLoader"}}');var n=s(2540),t=s(3023);const c={},i="Class: PageStateManagerImpl<S>",d={},l=[{value:"Extends",id:"extends",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new PageStateManagerImpl()",id:"new-pagestatemanagerimpl",level:3},{value:"Parameters",id:"parameters",level:4},{value:"dispatcher",id:"dispatcher",level:5},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"onChange()?",id:"onchange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"newState",id:"newstate",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Accessors",id:"accessors",level:2},{value:"$dependencies",id:"dependencies",level:3},{value:"Get Signature",id:"get-signature",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Methods",id:"methods",level:2},{value:"_callOnChangeCallback()",id:"_callonchangecallback",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"newState",id:"newstate-1",level:5},{value:"Returns",id:"returns-3",level:4},{value:"_eraseExcessHistory()",id:"_eraseexcesshistory",level:3},{value:"Returns",id:"returns-4",level:4},{value:"_pushToHistory()",id:"_pushtohistory",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"newState",id:"newstate-2",level:5},{value:"Returns",id:"returns-5",level:4},{value:"beginTransaction()",id:"begintransaction",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"cancelTransaction()",id:"canceltransaction",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"clear()",id:"clear",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"commitTransaction()",id:"committransaction",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"getAllStates()",id:"getallstates",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"getState()",id:"getstate",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"getTransactionStatePatches()",id:"gettransactionstatepatches",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"setState()",id:"setstate",level:3},{value:"Type Parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"patchState",id:"patchstate",level:5},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-8",level:4}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"class-pagestatemanagerimpls",children:"Class: PageStateManagerImpl<S>"})}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L22",children:"packages/core/src/page/state/PageStateManagerImpl.ts:22"})]}),"\n",(0,n.jsxs)(a.p,{children:["The implementation of the ",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:"PageStateManager"})," interface."]}),"\n",(0,n.jsx)(a.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),"<",(0,n.jsx)(a.code,{children:"S"}),">"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,n.jsxs)(a.p,{children:["\u2022 ",(0,n.jsx)(a.strong,{children:"S"})," ",(0,n.jsx)(a.em,{children:"extends"})," ",(0,n.jsx)(a.a,{href:"/api/@ima/core/type-aliases/PageState",children:(0,n.jsx)(a.code,{children:"PageState"})})," = {}"]}),"\n",(0,n.jsx)(a.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(a.h3,{id:"new-pagestatemanagerimpl",children:"new PageStateManagerImpl()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"new PageStateManagerImpl"}),"<",(0,n.jsx)(a.code,{children:"S"}),">(",(0,n.jsx)(a.code,{children:"dispatcher"}),"): ",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManagerImpl",children:(0,n.jsx)(a.code,{children:"PageStateManagerImpl"})}),"<",(0,n.jsx)(a.code,{children:"S"}),">"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L40",children:"packages/core/src/page/state/PageStateManagerImpl.ts:40"})]}),"\n",(0,n.jsx)(a.p,{children:"Initializes the page state manager."}),"\n",(0,n.jsx)(a.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(a.h5,{id:"dispatcher",children:"dispatcher"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/Dispatcher",children:(0,n.jsx)(a.code,{children:"Dispatcher"})})}),"\n",(0,n.jsx)(a.p,{children:"Dispatcher fires events to app."}),"\n",(0,n.jsx)(a.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManagerImpl",children:(0,n.jsx)(a.code,{children:"PageStateManagerImpl"})}),"<",(0,n.jsx)(a.code,{children:"S"}),">"]}),"\n",(0,n.jsx)(a.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#constructors",children:(0,n.jsx)(a.code,{children:"constructor"})})]}),"\n",(0,n.jsx)(a.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(a.h3,{id:"onchange",children:"onChange()?"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"optional"})," ",(0,n.jsx)(a.strong,{children:"onChange"}),": (",(0,n.jsx)(a.code,{children:"newState"}),") => ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManager.ts#L7",children:"packages/core/src/page/state/PageStateManager.ts:7"})]}),"\n",(0,n.jsx)(a.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(a.h5,{id:"newstate",children:"newState"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"S"})}),"\n",(0,n.jsx)(a.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#onchange",children:(0,n.jsx)(a.code,{children:"onChange"})})]}),"\n",(0,n.jsx)(a.h2,{id:"accessors",children:"Accessors"}),"\n",(0,n.jsx)(a.h3,{id:"dependencies",children:"$dependencies"}),"\n",(0,n.jsx)(a.h4,{id:"get-signature",children:"Get Signature"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"get"})," ",(0,n.jsx)(a.code,{children:"static"})," ",(0,n.jsx)(a.strong,{children:"$dependencies"}),"(): ",(0,n.jsx)(a.em,{children:"typeof"})," ",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/Dispatcher",children:(0,n.jsx)(a.code,{children:"Dispatcher"})}),"[]"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L31",children:"packages/core/src/page/state/PageStateManagerImpl.ts:31"})]}),"\n",(0,n.jsx)(a.h5,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.em,{children:"typeof"})," ",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/Dispatcher",children:(0,n.jsx)(a.code,{children:"Dispatcher"})}),"[]"]}),"\n",(0,n.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(a.h3,{id:"_callonchangecallback",children:"_callOnChangeCallback()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"_callOnChangeCallback"}),"(",(0,n.jsx)(a.code,{children:"newState"}),"): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L175",children:"packages/core/src/page/state/PageStateManagerImpl.ts:175"})]}),"\n",(0,n.jsx)(a.p,{children:"Call registered callback function on (@link onChange) with newState."}),"\n",(0,n.jsx)(a.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(a.h5,{id:"newstate-1",children:"newState"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"S"})}),"\n",(0,n.jsx)(a.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"_eraseexcesshistory",children:"_eraseExcessHistory()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"_eraseExcessHistory"}),"(): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L157",children:"packages/core/src/page/state/PageStateManagerImpl.ts:157"})]}),"\n",(0,n.jsx)(a.p,{children:"Erase the oldest state from storage only if it exceed max\ndefined size of history."}),"\n",(0,n.jsx)(a.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"_pushtohistory",children:"_pushToHistory()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"_pushToHistory"}),"(",(0,n.jsx)(a.code,{children:"newState"}),"): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L167",children:"packages/core/src/page/state/PageStateManagerImpl.ts:167"})]}),"\n",(0,n.jsx)(a.p,{children:"Push new state to history storage."}),"\n",(0,n.jsx)(a.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsx)(a.h5,{id:"newstate-2",children:"newState"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"S"})}),"\n",(0,n.jsx)(a.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"begintransaction",children:"beginTransaction()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"beginTransaction"}),"(): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L106",children:"packages/core/src/page/state/PageStateManagerImpl.ts:106"})]}),"\n",(0,n.jsxs)(a.p,{children:["Starts queueing state patches off the main state. While the transaction\nis active every ",(0,n.jsx)(a.code,{children:"setState"})," call has no effect on the current state."]}),"\n",(0,n.jsxs)(a.p,{children:["Note that call to ",(0,n.jsx)(a.code,{children:"getState"})," after the transaction has begun will\nreturn state as it was before the transaction."]}),"\n",(0,n.jsx)(a.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#begintransaction",children:(0,n.jsx)(a.code,{children:"beginTransaction"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"canceltransaction",children:"cancelTransaction()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"cancelTransaction"}),"(): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L148",children:"packages/core/src/page/state/PageStateManagerImpl.ts:148"})]}),"\n",(0,n.jsx)(a.p,{children:"Cancels ongoing transaction. Uncommitted state changes are lost."}),"\n",(0,n.jsx)(a.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#canceltransaction",children:(0,n.jsx)(a.code,{children:"cancelTransaction"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"clear",children:"clear()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"clear"}),"(): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L49",children:"packages/core/src/page/state/PageStateManagerImpl.ts:49"})]}),"\n",(0,n.jsx)(a.p,{children:"Clears the state history."}),"\n",(0,n.jsx)(a.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#clear",children:(0,n.jsx)(a.code,{children:"clear"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"committransaction",children:"commitTransaction()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"commitTransaction"}),"(): ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L123",children:"packages/core/src/page/state/PageStateManagerImpl.ts:123"})]}),"\n",(0,n.jsxs)(a.p,{children:["Applies queued state patches to the main state. All patches are squashed\nand applied with one ",(0,n.jsx)(a.code,{children:"setState"})," call."]}),"\n",(0,n.jsx)(a.h4,{id:"returns-9",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"void"})}),"\n",(0,n.jsx)(a.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#committransaction",children:(0,n.jsx)(a.code,{children:"commitTransaction"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"getallstates",children:"getAllStates()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"getAllStates"}),"(): ",(0,n.jsx)(a.code,{children:"S"}),"[]"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L92",children:"packages/core/src/page/state/PageStateManagerImpl.ts:92"})]}),"\n",(0,n.jsx)(a.p,{children:"Returns the recorded history of page states. The states will be\nchronologically sorted from the oldest to the newest."}),"\n",(0,n.jsx)(a.p,{children:"Note that the implementation may limit the size of the recorded history,\ntherefore the complete history may not be available."}),"\n",(0,n.jsx)(a.h4,{id:"returns-10",children:"Returns"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"S"}),"[]"]}),"\n",(0,n.jsx)(a.p,{children:"The recorded history of page states."}),"\n",(0,n.jsx)(a.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#getallstates",children:(0,n.jsx)(a.code,{children:"getAllStates"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"getstate",children:"getState()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"getState"}),"(): ",(0,n.jsx)(a.code,{children:"S"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L85",children:"packages/core/src/page/state/PageStateManagerImpl.ts:85"})]}),"\n",(0,n.jsx)(a.p,{children:"Returns the current page state."}),"\n",(0,n.jsx)(a.h4,{id:"returns-11",children:"Returns"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"S"})}),"\n",(0,n.jsx)(a.p,{children:"The current page state."}),"\n",(0,n.jsx)(a.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#getstate",children:(0,n.jsx)(a.code,{children:"getState"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"gettransactionstatepatches",children:"getTransactionStatePatches()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"getTransactionStatePatches"}),"(): (",(0,n.jsx)(a.code,{children:"null"})," | ",(0,n.jsx)(a.code,{children:"S"})," | ",(0,n.jsx)(a.code,{children:"Pick"}),"<",(0,n.jsx)(a.code,{children:"S"}),", ",(0,n.jsx)(a.code,{children:"any"}),">)[]"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L99",children:"packages/core/src/page/state/PageStateManagerImpl.ts:99"})]}),"\n",(0,n.jsx)(a.p,{children:"Returns queueing state patches off the main state from the begin of transaction."}),"\n",(0,n.jsx)(a.h4,{id:"returns-12",children:"Returns"}),"\n",(0,n.jsxs)(a.p,{children:["(",(0,n.jsx)(a.code,{children:"null"})," | ",(0,n.jsx)(a.code,{children:"S"})," | ",(0,n.jsx)(a.code,{children:"Pick"}),"<",(0,n.jsx)(a.code,{children:"S"}),", ",(0,n.jsx)(a.code,{children:"any"}),">)[]"]}),"\n",(0,n.jsx)(a.p,{children:"State patches from the begin of transaction."}),"\n",(0,n.jsx)(a.h4,{id:"overrides-7",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#gettransactionstatepatches",children:(0,n.jsx)(a.code,{children:"getTransactionStatePatches"})})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsx)(a.h3,{id:"setstate",children:"setState()"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"setState"}),"<",(0,n.jsx)(a.code,{children:"K"}),">(",(0,n.jsx)(a.code,{children:"patchState"}),"): ",(0,n.jsx)(a.code,{children:"number"})," | ",(0,n.jsx)(a.code,{children:"void"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Defined in: ",(0,n.jsx)(a.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/page/state/PageStateManagerImpl.ts#L59",children:"packages/core/src/page/state/PageStateManagerImpl.ts:59"})]}),"\n",(0,n.jsx)(a.p,{children:"Sets a new page state by applying the provided patch to the current\nstate."}),"\n",(0,n.jsx)(a.h4,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,n.jsxs)(a.p,{children:["\u2022 ",(0,n.jsx)(a.strong,{children:"K"})," ",(0,n.jsx)(a.em,{children:"extends"})," ",(0,n.jsx)(a.code,{children:"string"})," | ",(0,n.jsx)(a.code,{children:"number"})," | ",(0,n.jsx)(a.code,{children:"symbol"})]}),"\n",(0,n.jsx)(a.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsx)(a.h5,{id:"patchstate",children:"patchState"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"null"})," | ",(0,n.jsx)(a.code,{children:"S"})," | ",(0,n.jsx)(a.code,{children:"Pick"}),"<",(0,n.jsx)(a.code,{children:"S"}),", ",(0,n.jsx)(a.code,{children:"K"}),">"]}),"\n",(0,n.jsx)(a.h4,{id:"returns-13",children:"Returns"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"number"})," | ",(0,n.jsx)(a.code,{children:"void"})]}),"\n",(0,n.jsx)(a.h4,{id:"overrides-8",children:"Overrides"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager",children:(0,n.jsx)(a.code,{children:"PageStateManager"})}),".",(0,n.jsx)(a.a,{href:"/api/@ima/core/classes/PageStateManager#setstate",children:(0,n.jsx)(a.code,{children:"setState"})})]})]})}function o(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3023:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>i});var r=s(3696);const n={},t=r.createContext(n);function c(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);