"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1495],{9463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"basic-features/page-state","title":"Page State","description":"Basic features > Page State and it\'s usage","source":"@site/../docs/basic-features/page-state.md","sourceDirName":"basic-features","slug":"/basic-features/page-state","permalink":"/basic-features/page-state","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/page-state.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"Page State","description":"Basic features > Page State and it\'s usage"},"sidebar":"docs","previous":{"title":"Events","permalink":"/basic-features/events"},"next":{"title":"SEO & Meta Manager","permalink":"/basic-features/seo-and-meta-manager"}}');var a=n(2540),i=n(3023);const o={title:"Page State",description:"Basic features > Page State and it's usage"},r=void 0,l={},c=[{value:"Get &amp;\xa0Set",id:"get-set",level:2},{value:"Initial page state",id:"initial-page-state",level:2},{value:"Partial state",id:"partial-state",level:2},{value:"State transactions",id:"state-transactions",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Core of each application is the data the app is working with. The data needs to be managed in some manner and user needs to be able to manipulate with the data during application run. IMA.js adopted a React style of state management."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(19).A+"",width:"881",height:"421"})}),"\n",(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.strong,{children:"PageStateManager"})," class is used for managing ",(0,a.jsx)(t.strong,{children:"page state"})," and is in tight cooperation with ",(0,a.jsx)(t.strong,{children:"PageManager"}),".\nPageManager need state manager to collect initial state from Controller and registered extension, and to be informed about every state change that happens inside Controller or Extension."]}),"\n",(0,a.jsx)(t.h2,{id:"get-set",children:"Get &\xa0Set"}),"\n",(0,a.jsxs)(t.p,{children:["As we've mentioned before, IMA.js state management is inspired by React. In every Controller and Extension you can call ",(0,a.jsx)(t.code,{children:"this.setState(patchObject)"})," method that will update page state and trigger new rendering of a View. Counterpart to ",(0,a.jsx)(t.code,{children:"setState"})," is ",(0,a.jsx)(t.code,{children:"getState"}),". This method returns current state that is shared among controller and all its registered extensions."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// app/page/home/HomeController.js\n\nonVisibilityToggle() {\n  const {\xa0visibility } = this.getState();\n\n  this.setState({ visibility: !visibility });\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"initial-page-state",children:"Initial page state"}),"\n",(0,a.jsxs)(t.p,{children:["First additions to page state are set when ",(0,a.jsx)(t.code,{children:"load"})," method of a Controller and Extensions returns an object of resources. These resources may be plain data or (un)resolved promises. Promises are handled differently on server vs. client. This behavior is described in Controller's ",(0,a.jsxs)(t.a,{href:"./controller-lifecycle#load-serverclient",children:[(0,a.jsx)(t.code,{children:"load"})," method documentation"]}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"partial-state",children:"Partial state"}),"\n",(0,a.jsxs)(t.p,{children:["Since Extensions also have a word in loading resources it may be necessary to share resources between Controller and Extensions. Here comes partial state into play. It allows you to call ",(0,a.jsx)(t.code,{children:"getState"})," method in ",(0,a.jsx)(t.code,{children:"load"})," method of an Extension. Received state consists of states collected from loaded Controller and Extensions loaded prior to the current Extension. Extensions are loaded in the same order as they were registered in a Controller."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": Promises in received state may not be resolved. Therefore you need to chain promises or use ",(0,a.jsx)(t.code,{children:"async/await"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": If you'll use ",(0,a.jsx)(t.code,{children:"async/await"})," execution will not be parallel relative to other promises."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// app/page/home/HomeController.js\nexport default class HomeController extends AbstractController {\n\n  load() {\n    const userPromise = this._userService.load(this.params.userId);\n\n    return {\n      user: userPromise\n    };\n  }\n}\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// app/component/poll/PollExtension.js\nexport default class PollExtension extends AbstractExtension {\n  getAllowedStateKeys() {\n    return ['pollVotes'];\n  }\n\n  load() {\n    const { user: userPromise } = this.getState();\n    const pollVotesPromise = userPromise.then(\n      user => this._pollService.getVotes(user.id)\n    );\n\n    return {\n      pollVotes: pollVotesPromise\n    };\n  }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"state-transactions",children:"State transactions"}),"\n",(0,a.jsx)(t.p,{children:"State transactions, similarly to SQL transactions, provide a way to queue state patches and then commit them as a one to the original state."}),"\n",(0,a.jsxs)(t.p,{children:["They're here for use cases where you'd in you workflow call ",(0,a.jsx)(t.code,{children:"setState"})," method multiple times or you'd have to collect state patches in a separate variable (this is hard to do across multiple methods)."]}),"\n",(0,a.jsxs)(t.p,{children:["Transaction is initiated with ",(0,a.jsx)(t.code,{children:"beginStateTransaction()"})," in Controller/Extension. After that\nevery setState call is queued and doesn't change the state or re-render anything. If there\nis another transaction initiated before you commit you'll lost your patches."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to see what changes are in queue from the begin of transaction call ",(0,a.jsx)(t.code,{children:"getTransactionStatePatches()"})," method."]}),"\n",(0,a.jsxs)(t.p,{children:["To finish the transaction you have to call ",(0,a.jsx)(t.code,{children:"commitStateTransaction()"})," method. It will squash\nall the patches made during the transaction into a one and apply it to the original state.\nTherefore your application will re-render only once and you'll also receive ",(0,a.jsx)(t.a,{href:"./events#stateeventsbefore_change_state",children:"state events"})," only once."]}),"\n",(0,a.jsxs)(t.p,{children:["Another way to finish the transaction is to cancel it via ",(0,a.jsx)(t.code,{children:"cancelStateTransaction()"})," method."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": Call to ",(0,a.jsx)(t.code,{children:"getState"})," method after the transaction has begun will return state as it was before the transaction eg. the returned state doesn't include changes from the transaction period until the transaction is committed."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"async onFormSubmit({ content, deleteRevisions = false }) {\n  const { article } = this.getState();\n\n  this.beginStateTransaction();\n\n  const result = await this._http.put(/* ... */);\n\n  if (deleteRevisions) {\n    await this.deleteArticleRevisions();\n  }\n\n  this.setState({ article: Object.assign({}, article, {\xa0content }) });\n  this.commitStateTransaction();\n}\n\nasync deleteArticleRevisions() {\n  const { article, revisions } = this.getState();\n\n  await this._http.delete(/* ... */);\n\n  this.setState({ revisions: [] });\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In the example above, after the form is submitted with ",(0,a.jsx)(t.code,{children:"deleteRevisions = true"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Two ",(0,a.jsx)(t.code,{children:"setState"})," calls are made"]}),"\n",(0,a.jsxs)(t.li,{children:["Only one render is triggered after the ",(0,a.jsx)(t.code,{children:"commitStateTransaction"})," call"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/diagram-page-state-5512b3a2b5f48555cf76c83172bf4788.png"},3023:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(3696);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);