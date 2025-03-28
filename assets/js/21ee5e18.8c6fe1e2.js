"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[5547],{4006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"basic-features/object-container","title":"Object Container","description":"Basic features > Object Container and IMA.js dependency injection","source":"@site/../docs/basic-features/object-container.md","sourceDirName":"basic-features","slug":"/basic-features/object-container","permalink":"/basic-features/object-container","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/object-container.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"Object Container","description":"Basic features > Object Container and IMA.js dependency injection"},"sidebar":"docs","previous":{"title":"Extensions","permalink":"/basic-features/extensions"},"next":{"title":"Rendering process","permalink":"/basic-features/rendering-process"}}');var r=t(2540),s=t(3023);const c={title:"Object Container",description:"Basic features > Object Container and IMA.js dependency injection"},o=void 0,a={},d=[{value:"Automatic registration with Object Container",id:"automatic-registration-with-object-container",level:2},{value:"Manually registering dependencies",id:"manually-registering-dependencies",level:2},{value:"1. <code>bind()</code>",id:"1-bind",level:3},{value:"2. <code>constant()</code>",id:"2-constant",level:3},{value:"3. <code>inject()</code>",id:"3-inject",level:3},{value:"4. <code>provide()</code>",id:"4-provide",level:3},{value:"Obtaining dependencies",id:"obtaining-dependencies",level:2},{value:"1. Dependency Injection",id:"1-dependency-injection",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:4},{value:"Spread dependencies",id:"spread-dependencies",level:4},{value:"2. <code>get()</code>",id:"2-get",level:3},{value:"3. <code>create()</code>",id:"3-create",level:3},{value:"Other methods",id:"other-methods",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Object Container (OC)"})," is an enhanced dependency injector with support for aliases and constants. It is sophisticated and registers everything it comes across but only if it actually matters."]}),"\n",(0,r.jsx)(n.p,{children:"By registering controllers and views the OC can simply follow your dependency tree and register everything you might possibly need. Below is a diagram of simple dependency tree."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"app/config/routes.js\n\u251c\u2500 OrderController\n|   \u251c\u2500 OrderService / OrderEntity\n|   |   \u2514\u2500 RestClient\n|   |     \u251c\u2500 $HttpAgent\n|   |     \u251c\u2500 $Cache\n|   |     \u2514\u2500 LinkGenerator\n|   |       \u2514\u2500 $Router\n|   \u2514\u2500 UserService / UserEntity\n|     \u2514\u2500 RestClient\n|       \u251c\u2500 $HttpAgent\n|       \u251c\u2500 $Cache\n|       \u2514\u2500 LinkGenerator\n|         \u2514\u2500 $Router\n\u2514\u2500 UserController\n  \u251c\u2500 ...\n  \u2514\u2500 ...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"automatic-registration-with-object-container",children:"Automatic registration with Object Container"}),"\n",(0,r.jsxs)(n.p,{children:["Every class that defines static property ",(0,r.jsx)(n.code,{children:"$dependencies"})," which exports array of dependencies is automatically registered to ",(0,r.jsx)(n.code,{children:"oc"})," and instanced when it is used (this can happen lazily upon first usage)."]}),"\n",(0,r.jsx)(n.h2,{id:"manually-registering-dependencies",children:"Manually registering dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Since the OC cannot discover everything and doesn't know about interfaces you can register your dependencies in a file ",(0,r.jsx)(n.code,{children:"app/config/bind.js"}),".\nThis file contains a function that receives the namespace register\n",(0,r.jsx)(n.em,{children:"(deprecated)"}),", OC instance and a config object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\nexport let init = (ns, oc, config) => {\n  // Register stuff here\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["OC handles ",(0,r.jsx)(n.em,{children:"instances"})," of registered dependencies. When registering a class, be aware that its static methods and properties won't be available through OC."]}),"\n",(0,r.jsx)(n.p,{children:"Below is list of methods that the OC provides to register your dependencies."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Every method returns the OC itself so you can chain them together."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"1-bind",children:["1. ",(0,r.jsx)(n.code,{children:"bind()"})]}),"\n",(0,r.jsx)(n.p,{children:"Binds the specified class or factory function and dependencies to the\nspecified alias.\nThis allows to create new instances of the class or the\nfunction by referencing the alias. Same goes for specifying the class of\nthe function as a dependency."}),"\n",(0,r.jsx)(n.p,{children:"Also note that the same class or function may be bound to several\naliases and each may use different dependencies."}),"\n",(0,r.jsx)(n.p,{children:"The alias will use the current dependencies bound to the class if no\ndependencies are provided."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\n//\n// Binding custom router implementation and\n// UserAgent class from IMA.js user-agent plugin\n\nimport { UserAgent } from '@ima/plugin-useragent';\nimport { CustomRouter } from 'app/your-custom-overrides/Router';\n\nexport let init = (ns, oc, config) => {\n  // Simple alias\n  oc.bind('UserAgent', UserAgent);\n\n  // Alias with dependencies\n  // Override of the IMA.js router implementation\n  oc.bind('$Router', CustomRouter, [\n      '$PageManager', '$RouteFactory', '$Dispatcher', Window\n  ]);\n\n  // ...\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The dollar-sign ",(0,r.jsx)(n.code,{children:"$"})," at the beginning of an alias marks IMA.js\ninternal component."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"2-constant",children:["2. ",(0,r.jsx)(n.code,{children:"constant()"})]}),"\n",(0,r.jsxs)(n.p,{children:["Defines a new constant registered within the OC. Note that\nthis is the only way of passing ",(0,r.jsx)(n.code,{children:"string"})," values to constructors\nbecause the OC treats strings as class, interface, alias\nor constant names. Once the constant is defined it cannot be redefined."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\n//\n// Assigning API root URL to a constant that can be later used as a dependency\n// (for example in IMA.js RestAPI client)\n\nexport let init = (ns, oc, config) => {\n  oc.constant('REST_API_ROOT_URL', config.api.url);\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),"\xa0Constants are not limited to primitive values but can also\ntake objects."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"3-inject",children:["3. ",(0,r.jsx)(n.code,{children:"inject()"})]}),"\n",(0,r.jsx)(n.p,{children:"Configures the object loader with the specified default dependencies for\nthe specified class."}),"\n",(0,r.jsx)(n.p,{children:"New instances of the class created by the OC will receive the provided\ndependencies into constructor unless custom dependencies are provided."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\n//\n// Injecting the rest client.\n// Notice how we used the REST_API_ROOT_URL constant\n\nimport Cache from 'ima/cache/Cache';\nimport HttpAgent from 'ima/http/HttpAgent';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\nimport LinkGenerator from 'app/rest-client-impl/LinkGenerator';\n\nexport let init = (ns, oc, config) => {\n  oc.inject(SimpleRestClient, [\n    HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n  ]);\n}\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," For more information about the IMA.js REST Client see ",(0,r.jsx)(n.a,{href:"https://github.com/jurca/IMA-plugin-rest-client",children:"IMA-plugin-rest-client"})," repository."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"4-provide",children:["4. ",(0,r.jsx)(n.code,{children:"provide()"})]}),"\n",(0,r.jsx)(n.p,{children:"Configures the default implementation of the specified interface.\nWhen the interface is requested from the OC the default implementation\nis provided."}),"\n",(0,r.jsxs)(n.p,{children:["The implementation constructor will obtain the provided default\ndependencies or the dependencies provided to the ",(0,r.jsx)(n.a,{href:"#3-create",children:(0,r.jsx)(n.code,{children:"create()"})})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\n//\n//\n\nimport { AbstractRestClient } from 'ima-plugin-rest-client';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\n\nexport let init = (ns, oc, config) => {\n  oc.provide(AbstractRestClient, SimpleRestClient);\n\n  // We didn't specify any dependencies on purpose\n  // they were set in the previous example.\n  // Otherwise it would be like this:\n\n  oc.provide(\n    AbstractRestClient,\n    SimpleRestClient,\n    [\n      HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n    ]\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"obtaining-dependencies",children:"Obtaining dependencies"}),"\n",(0,r.jsx)(n.p,{children:"In IMA.js application you can obtain dependencies using many different methods, where each one can be useful in different situation and environment."}),"\n",(0,r.jsx)(n.h3,{id:"1-dependency-injection",children:"1. Dependency Injection"}),"\n",(0,r.jsxs)(n.p,{children:["Apart from defining dependencies manually in ",(0,r.jsx)(n.code,{children:"app/config/bind.js"})," can every class (discovered by the OC) define a static getter ",(0,r.jsx)(n.code,{children:"$dependencies"}),". This getter should return list of dependencies specified by a class constructor or a ",(0,r.jsx)(n.code,{children:"string"})," alias."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/page/order/OrderController.js\n//\n// OrderController is discovered by the OC\n// because it's registered in app/config/routes.js\n\nimport { AbstractController } from '@ima/core';\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return [\n      OrderService,\n      UserService,\n      '$Router'\n    ];\n  }\n\n  // ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once you've defined the dependencies the constructor of the class will receive their instances."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"  constructor(orderService, userService, $router) {\n    super();\n\n    this._orderService = orderService;\n    this._userService = userService;\n    this._$router = $router;\n  }\n\n  // ...\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Dependencies can also be defined as optional.\nIf those dependencies are present in the OC, the constructor of the class will receive their instances.\nOtherwise it will receive ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To use optional dependency, prefix ",(0,r.jsx)(n.code,{children:"?"})," is added before the string alias or the dependency is wrapped in array, with option specifying if it's optional or not."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/page/order/OrderController.js\n//\n// OrderController using optional dependencies\n\nimport { AbstractController } from '@ima/core';\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return [\n      [OrderService, { optional: true }],\n      [UserService, { optional: false }],\n      '?$Settings.api.serverApiUrl'\n    ];\n  }\n\n  // ...\n"})}),"\n",(0,r.jsx)(n.h4,{id:"spread-dependencies",children:"Spread dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Dependencies can be added to array registered in the OC. These dependencies can be then spread to the class constructor using spread operator ",(0,r.jsx)(n.code,{children:"..."}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/config/bind.js\n//\n// Creating array of dependencies\n\nimport OrderService from 'app/model/order/OrderService.js';\nimport UserService from 'app/model/user/UserService.js';\n\nexport let init = (ns, oc, config) => {\n  oc.constant('$spreadDependencies', [OrderService, UserService]);\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// app/page/order/OrderController.js\n//\n// OrderController using spread dependencies\n\nimport { AbstractController } from '@ima/core';\n\nexport default class OrderController extends AbstractController {\n\n  static get $dependencies() {\n    return ['...$spreadDependencies'];\n  }\n\n  constructor(orderService, userService) {\n    super();\n\n    this._orderService = orderService;\n    this._userService = userService;\n  }\n\n  // ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Spread and optional dependencies can be combined."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// ...\nstatic get $dependencies() {\n  return ['...?$spreadDependencies'];\n}\n// ...\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// ...\nstatic get $dependencies() {\n  return [['...$spreadDependencies', { optional: true }]];\n}\n// ...\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"2-get",children:["2. ",(0,r.jsx)(n.code,{children:"get()"})]}),"\n",(0,r.jsxs)(n.p,{children:["Retrieves the ",(0,r.jsx)(n.strong,{children:"shared instance"})," or value of the specified constant, alias,\nclass or factory function, interface, or fully qualified namespace path\n(the method checks these in this order in case of a name clash)."]}),"\n",(0,r.jsx)(n.p,{children:"The instance or value is created lazily the first time it is requested."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"oc.get('REST_API_ROOT_URL');\noc.get('UserAgent');\noc.get(AbstractRestClient); // This returns instance of `SimpleRestClient` as we defined in the previous example\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"3-create",children:["3. ",(0,r.jsx)(n.code,{children:"create()"})]}),"\n",(0,r.jsxs)(n.p,{children:["Creates a ",(0,r.jsx)(n.strong,{children:"new instance"})," of the class or retrieves the value generated by\nthe factory function identified by the provided name, class, interface,\nor factory function, passing in the provided dependencies."]}),"\n",(0,r.jsx)(n.p,{children:"The method uses the dependencies specified when the class, interface or\nfactory function has been registered with the object container if no\ncustom dependencies are provided."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { Cache, HttpAgent } from '@ima/core';\nimport SimpleRestClient from 'app/rest-client-impl/SimpleRestClient';\nimport LinkGenerator from 'app/rest-client-impl/LinkGenerator';\n\noc.create('UserAgent');\noc.create(\n  SimpleRestClient,\n  [\n    HttpAgent, Cache, 'REST_API_ROOT_URL', LinkGenerator\n  ]\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The last two method are not used as much as the first one but can be\nuseful inside the ",(0,r.jsx)(n.code,{children:"app/config/bind.js"})," and ",(0,r.jsx)(n.code,{children:"app/config/routes.js"})]}),"\n",(0,r.jsx)(n.h2,{id:"other-methods",children:"Other methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"has()"})," returns ",(0,r.jsx)(n.code,{children:"true"})," if the specified object, class or resource is registered\nwithin the OC."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if (oc.has('UserAgent') && oc.get('UserAgent').isMobile()) {\n  // Register conditional stuff here...\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getConstructorOf()"})," returns the class constructor function of the specified class or alias."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3023:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var i=t(3696);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);