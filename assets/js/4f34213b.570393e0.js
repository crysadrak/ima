"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[656],{8702:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"api/@ima/core/classes/SerialBatch","title":"Class: SerialBatch","description":"Defined in4","source":"@site/../docs/api/@ima/core/classes/SerialBatch.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/SerialBatch","permalink":"/api/@ima/core/classes/SerialBatch","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/SerialBatch.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: abstract Router","permalink":"/api/@ima/core/classes/Router"},"next":{"title":"Class: ServerPageManager","permalink":"/api/@ima/core/classes/ServerPageManager"}}');var i=r(2540),n=r(3023);const a={},d="Class: SerialBatch",t={},l=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new SerialBatch()",id:"new-serialbatch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"jobs",id:"jobs",level:5},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Properties",id:"properties",level:2},{value:"_jobs",id:"_jobs",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Methods",id:"methods",level:2},{value:"_executeJob()",id:"_executejob",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"stage",id:"stage",level:5},{value:"args",id:"args",level:5},{value:"Returns",id:"returns-1",level:4},{value:"_validateJob()",id:"_validatejob",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"job",id:"job",level:5},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"append()",id:"append",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"jobs",id:"jobs-1",level:5},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"execute()",id:"execute",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"args",id:"args-1",level:5},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"class-serialbatch",children:"Class: SerialBatch"})}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/SerialBatch.ts#L4",children:"packages/core/src/execution/SerialBatch.ts:4"})]}),"\n",(0,i.jsxs)(s.p,{children:["Basic implementation of the ",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/Execution",children:"Execution"})," interface. Provides the basic\nfunctionality for appending and validating jobs."]}),"\n",(0,i.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"new-serialbatch",children:"new SerialBatch()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"new SerialBatch"}),"(",(0,i.jsx)(s.code,{children:"jobs"}),"): ",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/SerialBatch",children:(0,i.jsx)(s.code,{children:"SerialBatch"})})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/AbstractExecution.ts#L13",children:"packages/core/src/execution/AbstractExecution.ts:13"})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.h5,{id:"jobs",children:"jobs"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})}),"[] = ",(0,i.jsx)(s.code,{children:"[]"})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/SerialBatch",children:(0,i.jsx)(s.code,{children:"SerialBatch"})})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})}),".",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution#constructors",children:(0,i.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"_jobs",children:"_jobs"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"protected"})," ",(0,i.jsx)(s.strong,{children:"_jobs"}),": ",(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/AbstractExecution.ts#L11",children:"packages/core/src/execution/AbstractExecution.ts:11"})]}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})}),".",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution#_jobs",children:(0,i.jsx)(s.code,{children:"_jobs"})})]}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"_executejob",children:"_executeJob()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"_executeJob"}),"(",(0,i.jsx)(s.code,{children:"stage"}),", ",(0,i.jsx)(s.code,{children:"args"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/SerialBatch.ts#L22",children:"packages/core/src/execution/SerialBatch.ts:22"})]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsx)(s.h5,{id:"stage",children:"stage"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})})}),"\n",(0,i.jsx)(s.h5,{id:"args",children:"args"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"unknown"}),"[]"]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"unknown"}),">"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"_validatejob",children:"_validateJob()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"_validateJob"}),"(",(0,i.jsx)(s.code,{children:"job"}),"): ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/AbstractExecution.ts#L44",children:"packages/core/src/execution/AbstractExecution.ts:44"})]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsx)(s.code,{children:"true"})," if the given job can be executed"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsx)(s.h5,{id:"job",children:"job"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})})}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"boolean"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})}),".",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution#_validatejob",children:(0,i.jsx)(s.code,{children:"_validateJob"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"append",children:"append()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"append"}),"(",(0,i.jsx)(s.code,{children:"jobs"}),"): ",(0,i.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/AbstractExecution.ts#L22",children:"packages/core/src/execution/AbstractExecution.ts:22"})]}),"\n",(0,i.jsx)(s.p,{children:"Adds a new job to be executed. The job is appended at the end of the\nlist of current jobs therefore is executed last."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsx)(s.h5,{id:"jobs-1",children:"jobs"}),"\n",(0,i.jsx)(s.p,{children:"The jobs to be executed."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})})," | ",(0,i.jsx)(s.a,{href:"/api/@ima/core/type-aliases/ExecutionJob",children:(0,i.jsx)(s.code,{children:"ExecutionJob"})}),"[]"]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"void"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})}),".",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution#append",children:(0,i.jsx)(s.code,{children:"append"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"execute",children:"execute()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"execute"}),"(...",(0,i.jsx)(s.code,{children:"args"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Defined in: ",(0,i.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/execution/SerialBatch.ts#L8",children:"packages/core/src/execution/SerialBatch.ts:8"})]}),"\n",(0,i.jsxs)(s.p,{children:["Start executing collected jobs. In the end a ",(0,i.jsx)(s.code,{children:"Promise"})," is returned\nwith a resulting value. On the returned ",(0,i.jsx)(s.code,{children:"Promise"})," a ",(0,i.jsx)(s.code,{children:"catch"}),"\nmethod can be called to prevent any unwanted interruption."]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsx)(s.h5,{id:"args-1",children:"args"}),"\n",(0,i.jsxs)(s.p,{children:["...",(0,i.jsx)(s.code,{children:"unknown"}),"[]"]}),"\n",(0,i.jsx)(s.p,{children:"Arguments to be passed when executing jobs"}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"unknown"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution",children:(0,i.jsx)(s.code,{children:"AbstractExecution"})}),".",(0,i.jsx)(s.a,{href:"/api/@ima/core/classes/AbstractExecution#execute",children:(0,i.jsx)(s.code,{children:"execute"})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3023:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>d});var c=r(3696);const i={},n=c.createContext(i);function a(e){const s=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(n.Provider,{value:s},e.children)}}}]);