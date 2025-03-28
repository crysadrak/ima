"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8487],{6136:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"api/@ima/core/classes/DynamicRoute","title":"Class: DynamicRoute","description":"Defined in51","source":"@site/../docs/api/@ima/core/classes/DynamicRoute.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/DynamicRoute","permalink":"/api/@ima/core/classes/DynamicRoute","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/DynamicRoute.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: DispatcherImpl","permalink":"/api/@ima/core/classes/DispatcherImpl"},"next":{"title":"Class: Entry\\\\<T\\\\>","permalink":"/api/@ima/core/classes/Entry"}}');var n=s(2540),t=s(3023);const c={},a="Class: DynamicRoute",d={},o=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new DynamicRoute()",id:"new-dynamicroute",level:3},{value:"Parameters",id:"parameters",level:4},{value:"name",id:"name",level:5},{value:"pathExpression",id:"pathexpression",level:5},{value:"controller",id:"controller",level:5},{value:"view",id:"view",level:5},{value:"options?",id:"options",level:5},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"_controller",id:"_controller",level:3},{value:"cached",id:"cached",level:4},{value:"controller",id:"controller-1",level:4},{value:"resolved",id:"resolved",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"_name",id:"_name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"_options",id:"_options",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"_pathExpression",id:"_pathexpression",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"_view",id:"_view",level:3},{value:"cached",id:"cached-1",level:4},{value:"resolved",id:"resolved-1",level:4},{value:"view",id:"view-1",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Methods",id:"methods",level:2},{value:"extractParameters()",id:"extractparameters",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"path",id:"path",level:5},{value:"baseUrl",id:"baseurl",level:5},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"getController()",id:"getcontroller",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"getName()",id:"getname",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"getOptions()",id:"getoptions",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"getPathExpression()",id:"getpathexpression",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"getTrimmedPath()",id:"gettrimmedpath",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"path",id:"path-1",level:5},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"getView()",id:"getview",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"isAsync()",id:"isasync",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"module",id:"module",level:5},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"isControllerResolved()",id:"iscontrollerresolved",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"isViewResolved()",id:"isviewresolved",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"matches()",id:"matches",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"path",id:"path-2",level:5},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"preload()",id:"preload",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"toPath()",id:"topath",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"params",id:"params",level:5},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-3",level:4}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"class-dynamicroute",children:"Class: DynamicRoute"})}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/DynamicRoute.ts#L51",children:"packages/core/src/router/DynamicRoute.ts:51"})]}),"\n",(0,n.jsx)(r.p,{children:"Utility for representing and manipulating a single dynamic route in the\nrouter's configuration. Dynamic route is defined by regExp used for route\nmatching and overrides for toPath and extractParameters functions to generate\nand put together valid path."}),"\n",(0,n.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RoutePathExpression",children:(0,n.jsx)(r.code,{children:"RoutePathExpression"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-dynamicroute",children:"new DynamicRoute()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"new DynamicRoute"}),"(",(0,n.jsx)(r.code,{children:"name"}),", ",(0,n.jsx)(r.code,{children:"pathExpression"}),", ",(0,n.jsx)(r.code,{children:"controller"}),", ",(0,n.jsx)(r.code,{children:"view"}),", ",(0,n.jsx)(r.code,{children:"options"}),"?): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/DynamicRoute",children:(0,n.jsx)(r.code,{children:"DynamicRoute"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/DynamicRoute.ts#L58",children:"packages/core/src/router/DynamicRoute.ts:58"})]}),"\n",(0,n.jsx)(r.p,{children:"Initializes the route."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"name",children:"name"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.h5,{id:"pathexpression",children:"pathExpression"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RoutePathExpression",children:(0,n.jsx)(r.code,{children:"RoutePathExpression"})})}),"\n",(0,n.jsx)(r.p,{children:"Path expression used in route matching,\nto generate valid path with provided params and parsing params from current path."}),"\n",(0,n.jsx)(r.h5,{id:"controller",children:"controller"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/AsyncRouteController",children:(0,n.jsx)(r.code,{children:"AsyncRouteController"})})}),"\n",(0,n.jsx)(r.h5,{id:"view",children:"view"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/AsyncRouteView",children:(0,n.jsx)(r.code,{children:"AsyncRouteView"})})}),"\n",(0,n.jsx)(r.h5,{id:"options",children:"options?"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/interfaces/RouteFactoryOptions",children:(0,n.jsx)(r.code,{children:"RouteFactoryOptions"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/DynamicRoute",children:(0,n.jsx)(r.code,{children:"DynamicRoute"})})}),"\n",(0,n.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#constructors",children:(0,n.jsx)(r.code,{children:"constructor"})})]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"_controller",children:"_controller"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"protected"})," ",(0,n.jsx)(r.strong,{children:"_controller"}),": ",(0,n.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L58",children:"packages/core/src/router/AbstractRoute.ts:58"})]}),"\n",(0,n.jsx)(r.p,{children:"The full name of Object Container alias identifying the controller\nassociated with this route."}),"\n",(0,n.jsx)(r.h4,{id:"cached",children:"cached"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"cached"}),": ",(0,n.jsx)(r.code,{children:"null"})," | ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"controller-1",children:"controller"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"controller"}),": ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/AsyncRouteController",children:(0,n.jsx)(r.code,{children:"AsyncRouteController"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"resolved",children:"resolved"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"resolved"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#_controller",children:(0,n.jsx)(r.code,{children:"_controller"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"_name",children:"_name"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"protected"})," ",(0,n.jsx)(r.strong,{children:"_name"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L48",children:"packages/core/src/router/AbstractRoute.ts:48"})]}),"\n",(0,n.jsx)(r.p,{children:"The unique name of this route, identifying it among the rest of the\nroutes in the application."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#_name",children:(0,n.jsx)(r.code,{children:"_name"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"_options",children:"_options"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"protected"})," ",(0,n.jsx)(r.strong,{children:"_options"}),": ",(0,n.jsx)(r.a,{href:"/api/@ima/core/interfaces/RouteFactoryOptions",children:(0,n.jsx)(r.code,{children:"RouteFactoryOptions"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L76",children:"packages/core/src/router/AbstractRoute.ts:76"})]}),"\n",(0,n.jsx)(r.p,{children:"The route additional options."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#_options",children:(0,n.jsx)(r.code,{children:"_options"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"_pathexpression",children:"_pathExpression"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"protected"})," ",(0,n.jsx)(r.strong,{children:"_pathExpression"}),": ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RoutePathExpression",children:(0,n.jsx)(r.code,{children:"RoutePathExpression"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L53",children:"packages/core/src/router/AbstractRoute.ts:53"})]}),"\n",(0,n.jsx)(r.p,{children:"Path expression used in route matching, to generate valid path with\nprovided params and parsing params from current path."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#_pathexpression",children:(0,n.jsx)(r.code,{children:"_pathExpression"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"_view",children:"_view"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"protected"})," ",(0,n.jsx)(r.strong,{children:"_view"}),": ",(0,n.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L67",children:"packages/core/src/router/AbstractRoute.ts:67"})]}),"\n",(0,n.jsx)(r.p,{children:"The full name or Object Container alias identifying the view class\nassociated with this route."}),"\n",(0,n.jsx)(r.h4,{id:"cached-1",children:"cached"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"cached"}),": ",(0,n.jsx)(r.code,{children:"null"})," | ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"resolved-1",children:"resolved"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"resolved"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"view-1",children:"view"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"view"}),": ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/AsyncRouteView",children:(0,n.jsx)(r.code,{children:"AsyncRouteView"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#_view",children:(0,n.jsx)(r.code,{children:"_view"})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"extractparameters",children:"extractParameters()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"extractParameters"}),"(",(0,n.jsx)(r.code,{children:"path"}),", ",(0,n.jsx)(r.code,{children:"baseUrl"}),"): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteParams",children:(0,n.jsx)(r.code,{children:"RouteParams"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/DynamicRoute.ts#L112",children:"packages/core/src/router/DynamicRoute.ts:112"})]}),"\n",(0,n.jsx)(r.p,{children:"Extracts the parameter values from the provided path. The method\nextracts both the in-path parameters and parses the query, allowing the\nquery parameters to override the in-path parameters."}),"\n",(0,n.jsx)(r.p,{children:"The method returns an empty hash object if the path does not match this\nroute."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"path",children:"path"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"Currently routed path."}),"\n",(0,n.jsx)(r.h5,{id:"baseurl",children:"baseUrl"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"Currently routed baseUrl."}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteParams",children:(0,n.jsx)(r.code,{children:"RouteParams"})})}),"\n",(0,n.jsx)(r.p,{children:"Map of parameter names to parameter\nvalues."}),"\n",(0,n.jsx)(r.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#extractparameters",children:(0,n.jsx)(r.code,{children:"extractParameters"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getcontroller",children:"getController()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getController"}),"(): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})}),">"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L153",children:"packages/core/src/router/AbstractRoute.ts:153"})]}),"\n",(0,n.jsx)(r.p,{children:"Returns Controller class/alias/constant associated with this route.\nInternally caches async calls for dynamically imported controllers,\nmeaning that once they're loaded, you get the same promise for\nsubsequent calls."}),"\n",(0,n.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})}),">"]}),"\n",(0,n.jsx)(r.p,{children:"The Controller class/alias/constant."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#getcontroller",children:(0,n.jsx)(r.code,{children:"getController"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getname",children:"getName()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getName"}),"(): ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L132",children:"packages/core/src/router/AbstractRoute.ts:132"})]}),"\n",(0,n.jsx)(r.p,{children:"Returns the unique identifying name of this route."}),"\n",(0,n.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"The name of the route, identifying it."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#getname",children:(0,n.jsx)(r.code,{children:"getName"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getoptions",children:"getOptions()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getOptions"}),"(): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/interfaces/RouteFactoryOptions",children:(0,n.jsx)(r.code,{children:"RouteFactoryOptions"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L210",children:"packages/core/src/router/AbstractRoute.ts:210"})]}),"\n",(0,n.jsx)(r.p,{children:"Return route additional options."}),"\n",(0,n.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/interfaces/RouteFactoryOptions",children:(0,n.jsx)(r.code,{children:"RouteFactoryOptions"})})}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#getoptions",children:(0,n.jsx)(r.code,{children:"getOptions"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getpathexpression",children:"getPathExpression()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getPathExpression"}),"(): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RoutePathExpression",children:(0,n.jsx)(r.code,{children:"RoutePathExpression"})})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L220",children:"packages/core/src/router/AbstractRoute.ts:220"})]}),"\n",(0,n.jsx)(r.p,{children:"Path expression used in route matching, to generate valid path with\nprovided params and parsing params from current path."}),"\n",(0,n.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RoutePathExpression",children:(0,n.jsx)(r.code,{children:"RoutePathExpression"})})}),"\n",(0,n.jsx)(r.p,{children:"The path expression."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#getpathexpression",children:(0,n.jsx)(r.code,{children:"getPathExpression"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"gettrimmedpath",children:"getTrimmedPath()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getTrimmedPath"}),"(",(0,n.jsx)(r.code,{children:"path"}),"): ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L230",children:"packages/core/src/router/AbstractRoute.ts:230"})]}),"\n",(0,n.jsx)(r.p,{children:"Trims the trailing forward slash from the provided URL path."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"path-1",children:"path"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"The path to trim."}),"\n",(0,n.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"Trimmed path."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#gettrimmedpath",children:(0,n.jsx)(r.code,{children:"getTrimmedPath"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"getview",children:"getView()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getView"}),"(): ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})}),">"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L185",children:"packages/core/src/router/AbstractRoute.ts:185"})]}),"\n",(0,n.jsx)(r.p,{children:"Returns View class/alias/constant associated with this route.\nInternally caches async calls for dynamically imported views,\nmeaning that once they're loaded, you get the same promise for\nsubsequent calls."}),"\n",(0,n.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})})," | ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})}),">"]}),"\n",(0,n.jsx)(r.p,{children:"The View class/alias/constant."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#getview",children:(0,n.jsx)(r.code,{children:"getView"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"isasync",children:"isAsync()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"isAsync"}),"(",(0,n.jsx)(r.code,{children:"module"}),"): ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L139",children:"packages/core/src/router/AbstractRoute.ts:139"})]}),"\n",(0,n.jsx)(r.p,{children:"Checks if given argument is an async handler."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"module",children:"module"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"unknown"})}),"\n",(0,n.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-11",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#isasync",children:(0,n.jsx)(r.code,{children:"isAsync"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"iscontrollerresolved",children:"isControllerResolved()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"isControllerResolved"}),"(): ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L173",children:"packages/core/src/router/AbstractRoute.ts:173"})]}),"\n",(0,n.jsx)(r.p,{children:"Returns true for resolved controller. This is always true\nfor sync route views."}),"\n",(0,n.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-12",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#iscontrollerresolved",children:(0,n.jsx)(r.code,{children:"isControllerResolved"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"isviewresolved",children:"isViewResolved()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"isViewResolved"}),"(): ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L203",children:"packages/core/src/router/AbstractRoute.ts:203"})]}),"\n",(0,n.jsx)(r.p,{children:"Returns true for resolved view. This is always true\nfor sync route views."}),"\n",(0,n.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-13",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#isviewresolved",children:(0,n.jsx)(r.code,{children:"isViewResolved"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"matches",children:"matches()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"matches"}),"(",(0,n.jsx)(r.code,{children:"path"}),"): ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/DynamicRoute.ts#L105",children:"packages/core/src/router/DynamicRoute.ts:105"})]}),"\n",(0,n.jsx)(r.p,{children:"Tests whether the provided URL path matches this route. The provided\npath may contain the query."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"path-2",children:"path"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"The URL path."}),"\n",(0,n.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"boolean"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"true"})," if the provided path matches this route."]}),"\n",(0,n.jsx)(r.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#matches",children:(0,n.jsx)(r.code,{children:"matches"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"preload",children:"preload()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"preload"}),"(): ",(0,n.jsx)(r.code,{children:"Promise"}),"<[",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})}),", ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})}),"]>"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/AbstractRoute.ts#L239",children:"packages/core/src/router/AbstractRoute.ts:239"})]}),"\n",(0,n.jsx)(r.p,{children:"Preloads dynamically imported view and controller."}),"\n",(0,n.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<[",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteController",children:(0,n.jsx)(r.code,{children:"RouteController"})}),", ",(0,n.jsx)(r.a,{href:"/api/@ima/core/type-aliases/RouteView",children:(0,n.jsx)(r.code,{children:"RouteView"})}),"]>"]}),"\n",(0,n.jsx)(r.p,{children:"Promise.All resolving to [view, controller] tuple."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-14",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#preload",children:(0,n.jsx)(r.code,{children:"preload"})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"topath",children:"toPath()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"toPath"}),"(",(0,n.jsx)(r.code,{children:"params"}),"): ",(0,n.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Defined in: ",(0,n.jsx)(r.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/router/DynamicRoute.ts#L98",children:"packages/core/src/router/DynamicRoute.ts:98"})]}),"\n",(0,n.jsx)(r.p,{children:"Creates the URL and query parts of a URL by substituting the route's\nparameter placeholders by the provided parameter value."}),"\n",(0,n.jsx)(r.p,{children:"The extraneous parameters that do not match any of the route's\nplaceholders will be appended as the query string."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsx)(r.h5,{id:"params",children:"params"}),"\n",(0,n.jsx)(r.p,{children:"The route\nparameter values."}),"\n",(0,n.jsx)(r.h4,{id:"returns-13",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"string"})}),"\n",(0,n.jsx)(r.p,{children:"Path and, if necessary, query parts of the URL\nrepresenting this route with its parameters replaced by the\nprovided parameter values."}),"\n",(0,n.jsx)(r.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute",children:(0,n.jsx)(r.code,{children:"AbstractRoute"})}),".",(0,n.jsx)(r.a,{href:"/api/@ima/core/classes/AbstractRoute#topath",children:(0,n.jsx)(r.code,{children:"toPath"})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3023:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>a});var i=s(3696);const n={},t=i.createContext(n);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);