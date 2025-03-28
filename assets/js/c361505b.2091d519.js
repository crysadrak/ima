"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[4212],{8159:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/@ima/core/classes/Cache","title":"Class: abstract Cache\\\\<V\\\\>","description":"Defined in11","source":"@site/../docs/api/@ima/core/classes/Cache.md","sourceDirName":"api/@ima/core/classes","slug":"/api/@ima/core/classes/Cache","permalink":"/api/@ima/core/classes/Cache","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/api/@ima/core/classes/Cache.md","tags":[],"version":"current","frontMatter":{},"sidebar":"api","previous":{"title":"Class: Bootstrap","permalink":"/api/@ima/core/classes/Bootstrap"},"next":{"title":"Class: CacheEntry\\\\<V\\\\>","permalink":"/api/@ima/core/classes/CacheEntry"}}');var r=c(2540),i=c(3023);const a={},d="Class: abstract Cache<V>",h={},l=[{value:"Extended by",id:"extended-by",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new Cache()",id:"new-cache",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"clear()",id:"clear",level:3},{value:"Returns",id:"returns-1",level:4},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters",level:4},{value:"key",id:"key",level:5},{value:"Returns",id:"returns-2",level:4},{value:"deserialize()",id:"deserialize",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"serializedData",id:"serializeddata",level:5},{value:"Returns",id:"returns-3",level:4},{value:"disable()",id:"disable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"enable()",id:"enable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"get()",id:"get",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"key",id:"key-1",level:5},{value:"Returns",id:"returns-6",level:4},{value:"has()",id:"has",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"key",id:"key-2",level:5},{value:"Returns",id:"returns-7",level:4},{value:"serialize()",id:"serialize",level:3},{value:"Returns",id:"returns-8",level:4},{value:"set()",id:"set",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"key",id:"key-3",level:5},{value:"value",id:"value",level:5},{value:"ttl?",id:"ttl",level:5},{value:"Returns",id:"returns-9",level:4}];function t(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsxs)(s.h1,{id:"class-abstract-cachev",children:["Class: ",(0,r.jsx)(s.code,{children:"abstract"})," Cache<V>"]})}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L11",children:"packages/core/src/cache/Cache.ts:11"})]}),"\n",(0,r.jsx)(s.p,{children:"The cache provides a temporary storage for expirable information. The\nprimary use of a cache is caching information obtained via costly means\n(CPU-heavy computation or networking) to speed up the application's\nperformance when the same information needs to be retrieved multiple times."}),"\n",(0,r.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/api/@ima/core/classes/CacheImpl",children:(0,r.jsx)(s.code,{children:"CacheImpl"})})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"V"})," = ",(0,r.jsx)(s.code,{children:"unknown"})]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-cache",children:"new Cache()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new Cache"}),"<",(0,r.jsx)(s.code,{children:"V"}),">(): ",(0,r.jsx)(s.a,{href:"/api/@ima/core/classes/Cache",children:(0,r.jsx)(s.code,{children:"Cache"})}),"<",(0,r.jsx)(s.code,{children:"V"}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/api/@ima/core/classes/Cache",children:(0,r.jsx)(s.code,{children:"Cache"})}),"<",(0,r.jsx)(s.code,{children:"V"}),">"]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"clear",children:"clear()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"clear"}),"(): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L15",children:"packages/core/src/cache/Cache.ts:15"})]}),"\n",(0,r.jsx)(s.p,{children:"Clears the cache by deleting all entries."}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"delete",children:"delete()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"delete"}),"(",(0,r.jsx)(s.code,{children:"key"}),"): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L69",children:"packages/core/src/cache/Cache.ts:69"})]}),"\n",(0,r.jsx)(s.p,{children:"Deletes the specified cache entry. The method has no effect if the entry\ndoes not exist."}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"key",children:"key"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The identifier of the cache entry."}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"deserialize",children:"deserialize()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"deserialize"}),"(",(0,r.jsx)(s.code,{children:"serializedData"}),"): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L118",children:"packages/core/src/cache/Cache.ts:118"})]}),"\n",(0,r.jsx)(s.p,{children:"Loads the provided serialized cache data into this cache. Entries\npresent in this cache but not specified in the provided data will remain\nin this cache intact."}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"serializeddata",children:"serializedData"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/api/@ima/core/type-aliases/SerializedData",children:(0,r.jsx)(s.code,{children:"SerializedData"})}),"<",(0,r.jsx)(s.code,{children:"V"}),">"]}),"\n",(0,r.jsxs)(s.p,{children:["An\nobject representing the state of the cache to load, obtained by\nparsing the JSON string returned by the ",(0,r.jsx)(s.a,{href:"/api/@ima/core/classes/Cache#serialize",children:"Cache#serialize"}),"\nmethod."]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"disable",children:"disable()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"disable"}),"(): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L83",children:"packages/core/src/cache/Cache.ts:83"})]}),"\n",(0,r.jsx)(s.p,{children:"Disables the cache, preventing the retrieval of any cached entries and\nreporting all cache entries as non-existing. Disabling the cache does\nnot however prevent modifying the existing or creating new cache\nentries."}),"\n",(0,r.jsx)(s.p,{children:"Disabling the cache also clears all of its current entries."}),"\n",(0,r.jsx)(s.p,{children:"The method has no effect if the cache is already disabled."}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"enable",children:"enable()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"enable"}),"(): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L92",children:"packages/core/src/cache/Cache.ts:92"})]}),"\n",(0,r.jsx)(s.p,{children:"Enables the cache, allowing the retrieval of cache entries."}),"\n",(0,r.jsx)(s.p,{children:"The method has no effect if the cache is already enabled."}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"get",children:"get()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"get"}),"(",(0,r.jsx)(s.code,{children:"key"}),"): ",(0,r.jsx)(s.code,{children:"null"})," | ",(0,r.jsx)(s.code,{children:"V"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L43",children:"packages/core/src/cache/Cache.ts:43"})]}),"\n",(0,r.jsx)(s.p,{children:"Returns the value of the entry identified by the specified key."}),"\n",(0,r.jsxs)(s.p,{children:["The method returns ",(0,r.jsx)(s.code,{children:"null"})," if the specified entry does not exist, has\nalready expired, or the cache is currently disabled."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"key-1",children:"key"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The identifier of the cache entry."}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"null"})," | ",(0,r.jsx)(s.code,{children:"V"})]}),"\n",(0,r.jsxs)(s.p,{children:["The value of the specified cache entry, or ",(0,r.jsx)(s.code,{children:"null"})," if the entry\nis not available."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"has",children:"has()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"has"}),"(",(0,r.jsx)(s.code,{children:"key"}),"): ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L29",children:"packages/core/src/cache/Cache.ts:29"})]}),"\n",(0,r.jsx)(s.p,{children:"Tests whether the cache contains a fresh entry for the specified key. A\ncache entry is fresh if the has not expired its TTL (time to live)."}),"\n",(0,r.jsxs)(s.p,{children:["The method always returns ",(0,r.jsx)(s.code,{children:"false"})," if the cache is currently disabled."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"key-2",children:"key"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The identifier of the cache entry."}),"\n",(0,r.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"true"})," if the cache is enabled, the entry exists and has\nnot expired yet."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"serialize",children:"serialize()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"serialize"}),"(): ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L104",children:"packages/core/src/cache/Cache.ts:104"})]}),"\n",(0,r.jsxs)(s.p,{children:["Exports the state of this cache to an HTML-safe JSON string. The data\nobtained by parsing the result of this method are compatible with the\n",(0,r.jsx)(s.a,{href:"/api/@ima/core/classes/Cache#deserialize",children:"Cache#deserialize"})," method."]}),"\n",(0,r.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"A JSON string containing an object representing of the\ncurrent state of this cache."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"set",children:"set()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"set"}),"(",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"value"}),", ",(0,r.jsx)(s.code,{children:"ttl"}),"?): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Defined in: ",(0,r.jsx)(s.a,{href:"https://github.com/crysadrak/ima/blob/2fd9b5f0584a85cd0dacedfe6dbbdc064a4af0a6/packages/core/src/cache/Cache.ts#L59",children:"packages/core/src/cache/Cache.ts:59"})]}),"\n",(0,r.jsx)(s.p,{children:"Sets the cache entry identified by the specified key to the provided\nvalue. The entry is created if it does not exist yet."}),"\n",(0,r.jsx)(s.p,{children:"The method has no effect if the cache is currently disabled."}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsx)(s.h5,{id:"key-3",children:"key"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),"\n",(0,r.jsx)(s.p,{children:"The identifier of the cache entry."}),"\n",(0,r.jsx)(s.h5,{id:"value",children:"value"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"V"})}),"\n",(0,r.jsx)(s.p,{children:"The cache entry value."}),"\n",(0,r.jsx)(s.h5,{id:"ttl",children:"ttl?"}),"\n",(0,r.jsxs)(s.p,{children:["Cache entry time to live in milliseconds. The\nentry will expire after the specified amount of milliseconds. Use\n",(0,r.jsx)(s.code,{children:"null"})," or omit the parameter to use the default TTL of this cache."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},3023:(e,s,c)=>{c.d(s,{R:()=>a,x:()=>d});var n=c(3696);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);