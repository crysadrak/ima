"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[1916],{6807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"basic-features/extensions","title":"Extensions","description":"Basic features > Extensions as a companion to Controllers","source":"@site/../docs/basic-features/extensions.md","sourceDirName":"basic-features","slug":"/basic-features/extensions","permalink":"/basic-features/extensions","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/extensions.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"Extensions","description":"Basic features > Extensions as a companion to Controllers"},"sidebar":"docs","previous":{"title":"Async Routing","permalink":"/basic-features/routing/async-routing"},"next":{"title":"Object Container","permalink":"/basic-features/object-container"}}');var o=t(2540),r=t(3023);const i={title:"Extensions",description:"Basic features > Extensions as a companion to Controllers"},l=void 0,a={},c=[{value:"Why use extensions",id:"why-use-extensions",level:2},{value:"How to use extensions",id:"how-to-use-extensions",level:2},{value:"Passing partial state from controllers",id:"passing-partial-state-from-controllers",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Extensions provide means of extending the page controllers with additional\nmanaged state and logic."}),"\n",(0,o.jsxs)(n.p,{children:["An extension has access to the current route\nparameters, can specify the resources to load when the page is loading or\nbeing updated, may intercept event bus events and modify the state of the\npage just like an ordinary controller, except that the modifications are\nrestricted to the state fields which the extension explicitly specifies\nusing its ",(0,o.jsx)(n.code,{children:"getAllowedStateKeys()"})," method."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(1379).A+"",width:"881",height:"421"})}),"\n",(0,o.jsx)(n.h2,{id:"why-use-extensions",children:"Why use extensions"}),"\n",(0,o.jsx)(n.p,{children:"Best case to use extension is a component that\nrequires interception of controller lifecycle events and/or loading external\ndata."}),"\n",(0,o.jsx)(n.p,{children:"Putting the component's logic inside the controller would be unwise for 3\nreasons:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Controller would contain code that is not as clear. For newcomers to\nyour project it'd seem strange why you're mixing e.g. ",(0,o.jsx)(n.strong,{children:"HomeController"}),"\nlogic with ",(0,o.jsx)(n.strong,{children:"GalleryComponent"})," logic."]}),"\n",(0,o.jsx)(n.li,{children:"Component file and its extension file should be kept together because nothing is\nbigger pain than searching for related code in the whole project structure."}),"\n",(0,o.jsx)(n.li,{children:"Component can be used in multiple Views. That means you'd have to\ncopy &\xa0paste the same logic to multiple controllers."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use-extensions",children:"How to use extensions"}),"\n",(0,o.jsx)(n.p,{children:"As mentioned above, the extension file should be next to a file of the component\nit's extending. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"app/\n  \u251c\u2500 ...\n  \u251c\u2500 component\n  |   \u251c\u2500 ...\n  |   \u2514\u2500 gallery\n  |   |   \u251c\u2500 Gallery.jsx\n  |   |   \u251c\u2500 gallery.less\n  |   |   \u2514\u2500 GalleryExtension.js\n  |   \u2514\u2500 ...\n  \u2514\u2500 ...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the extension file should be plain ",(0,o.jsx)(n.code,{children:"class"})," extending\n",(0,o.jsx)(n.code,{children:"ima/extension/AbstractExtension"})," with the same methods as you'd use in the controller. In addition you should implement ",(0,o.jsx)(n.code,{children:"getAllowedStateKeys()"})," method which returns array of keys the extension is allowed to change in controller's state. (If the extension itself creates the state key, it does not have to be claimed this way - the extension has access to it automatically.)"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," List and description of controller methods can be seen in ",(0,o.jsx)(n.a,{href:"./controller-lifecycle",children:"Controller lifecycle"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// app/component/gallery/GalleryExtension.js\nimport { AbstractExtension } from '@ima/core';\n\nexport default class GalleryExtension extends AbstractExtension {\n  static get $dependencies() {\n    return [];\n  }\n\n  load() {\n    // Where the magic happens...\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["All extensions to be used on a page must be added to the current controller\nvia ",(0,o.jsx)(n.code,{children:"$extensions"})," getter. After that, the extensions will go\nthrough the same lifecycle as the controller."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { AbstractController } from '@ima/core';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default class PostController extends AbstractController {\n  static get $dependencies() {\n    return [];\n  }\n\n  static get $extensions() {\n    return [GalleryExtension];\n  }\n\n  constructor() {\n    //If needed, extension instance can be retrieved using getExtension();\n    this._galleryExtension = this.getExtension(GalleryExtension);\n  }\n\n  ...\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Extensions can be also defined within routes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"//routes.js\n\nimport PostController from 'app/page/post/PostController';\nimport PostView from 'app/page/post/PostView';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default (ns, oc, routesConfig, router) =>\n  router\n    .add('home', '/', PostController, PostView, {\n      extensions: [GalleryExtension],\n    });\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Extensions can be defined in global array of extensions.\nThis array can be registered in the OC as constant:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"\n//bind.js\nimport Extension1 from 'app/component/gallery/GalleryExtension';\nimport Extension2 from 'app/component/gallery/GalleryExtension2';\n...\nexport default (ns, oc, config) => {\n  oc.constant('$galleryExtensions', [Extension, Extension2]);\n}\n\n//PostController.js\nimport { AbstractController } from '@ima/core';\nimport GalleryExtension from 'app/component/gallery/GalleryExtension';\n\nexport default class PostController extends AbstractController {\n\n  ...\n\n  static get $extensions() {\n    return ['...$galleryExtensions'];\n  }\n\n  ...\n}\n\n//Or in routes.js\n...\nrouter\n    .add('home', '/', PostController, PostView, {\n      extensions: ['...$galleryExtensions'],\n    });\n...\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or just exported array:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"\n//GalleryExtensions.js\nimport Extension1 from 'app/component/gallery/GalleryExtension';\nimport Extension2 from 'app/component/gallery/GalleryExtension2';\n\nexport const GalleryExtensions = [Extension, Extension2];\n\n\n//PostController.js\nimport { AbstractController } from '@ima/core';\nimport { GalleryExtensions } from 'app/component/gallery/GalleryExtensions';\n\nexport default class PostController extends AbstractController {\n\n  ...\n\n  static get $extensions() {\n    return [...GalleryExtensions];\n  }\n\n  ...\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"passing-partial-state-from-controllers",children:"Passing partial state from controllers"}),"\n",(0,o.jsx)(n.p,{children:"During any lifecycle phase of the page the controller's lifecycle method is called first and then the same method is called on every extension registered in the controller. Order of the extensions is crucial and the same as in which the extensions were registered."}),"\n",(0,o.jsxs)(n.p,{children:["Since ",(0,o.jsx)(n.a,{href:"https://github.com/seznam/IMA.js-core/releases/tag/0.16.0",children:"v16"})," you can access the state loaded in controller and preceding extensions (hence the cruciality of extensions order). Bear in mind that the accessed state may contain unresolved promises that need to be treated differently."]}),"\n",(0,o.jsxs)(n.p,{children:["Addition of ",(0,o.jsx)(n.code,{children:"async/await"})," functionality in ",(0,o.jsx)(n.strong,{children:"v17"})," can lead to dramatic performance drop if not used well. Keep in mind that every ",(0,o.jsx)(n.code,{children:"await"})," in Controller's or Extension's ",(0,o.jsx)(n.code,{children:"load"})," method will delay execution of next ",(0,o.jsx)(n.code,{children:"load"})," method until the asynchronous operation finishes."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// app/component/gallery/GalleryExtension.js\n\nload() {\n  const {\n    user: userPromise, // needs to be chained with .then()\n    userGroupName,\n  } = this.getState();\n\n  const galleryPromise = userPromise.then(user => {\n    // Calling this.getState() here would still give us unresolved promises.\n    return this._galleryService.loadByUserName(user.name);\n  });\n\n  return {\n    gallery: galleryPromise\n  };\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1379:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/diagram-extensions-18900886a7c88b68d3d538a161a0170e.png"},3023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(3696);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);