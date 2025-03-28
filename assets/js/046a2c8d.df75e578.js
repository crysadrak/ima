"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[3685],{4178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"basic-features/typescript","title":"TypeScript","description":"Basic features > TypeScript","source":"@site/../docs/basic-features/typescript.md","sourceDirName":"basic-features","slug":"/basic-features/typescript","permalink":"/basic-features/typescript","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/basic-features/typescript.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"TypeScript","description":"Basic features > TypeScript"},"sidebar":"docs","previous":{"title":"Error Handling","permalink":"/basic-features/error-handling"},"next":{"title":"Testing","permalink":"/basic-features/testing"}}');var r=t(2540),i=t(3023),a=t(3776),o=t(6052);const l={title:"TypeScript",description:"Basic features > TypeScript"},c=void 0,d={},p=[{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:"ima-env.d.ts",id:"ima-envdts",level:3},{value:"<code>create-ima-app</code> support",id:"create-ima-app-support",level:2},{value:"Controller generic types",id:"controller-generic-types",level:2},{value:"Extending existing interfaces",id:"extending-existing-interfaces",level:2},{value:"Extending <code>Utils</code>",id:"extending-utils",level:3},{value:"Extending <code>ObjectContainer</code>",id:"extending-objectcontainer",level:3},{value:"Extending <code>Settings</code>",id:"extending-settings",level:3},{value:"Dictionary localization keys",id:"dictionary-localization-keys",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Since IMA.js v18 we provide ",(0,r.jsx)(n.strong,{children:"support for Typescript in your application code"})," with proper type declarations from the core packages."]}),"\n",(0,r.jsxs)(n.p,{children:["To enable TypeScript in your project, first you need to add ",(0,r.jsx)(n.code,{children:"typescript"})," to your app dependencies:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i -D typescript\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev typescript\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add -D typescript\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"tsconfigjson",children:"tsconfig.json"}),"\n",(0,r.jsxs)(n.p,{children:["Now create ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," file (that may look something like this):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title=./tsconfig.json",children:'{\n  "compilerOptions": {\n    "allowJs": true,\n    "target": "ES2022",\n    "lib": [\n      "ES2022",\n      "DOM",\n      "DOM.Iterable"\n    ],\n    "module": "ES2022",\n    "moduleResolution": "Node16",\n    "strict": true,\n    "resolveJsonModule": true,\n    "jsx": "react-jsx",\n    "baseUrl": ".",\n    "outDir": "./build/ts-cache",\n    "paths": {\n      "app/*": [\n        "app/*"\n      ],\n    }\n  },\n  "include": ["./app/**/*", "./build/tmp/types/**/*"],\n  "exclude": ["./**/__tests__"]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When CLI detects existence of the ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," file, it automatically starts ",(0,r.jsx)(n.strong,{children:"type checking"})," and ",(0,r.jsx)(n.strong,{children:"compiling"})," files with ",(0,r.jsx)(n.code,{children:"*.ts"})," and ",(0,r.jsx)(n.code,{children:"*.tsx"})," extensions."]}),"\n",(0,r.jsxs)(n.p,{children:["Keep in mind that the code is still compiled using ",(0,r.jsx)(n.a,{href:"https://swc.rs/",children:"swc"}),", the same way JS code is. This means that certain settings in ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," only applies to type checking (like ",(0,r.jsx)(n.code,{children:"target"}),", ",(0,r.jsx)(n.code,{children:"moduleResolution"}),", etc.), but compilation uses it's own settings to match the JS code."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["You will also probably need to install additional ",(0,r.jsx)(n.code,{children:"@types/*"})," type definition libs to ensure proper support, like react types:"]}),(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i -D @types/react @types/react-dom\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @types/react @types/react-dom\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add -D @types/react @types/react-dom\n"})})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"ima-envdts",children:"ima-env.d.ts"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally we recommend creating a new ",(0,r.jsx)(n.code,{children:"ima-env.d.ts"})," file in root of your ",(0,r.jsx)(n.code,{children:"./app"})," folder with following contents:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=./app/ima-env.d.ts",children:'/// <reference types="@ima/cli/global" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"This adds proper types support for webpack specific imports like images and other files."}),"\n",(0,r.jsxs)(n.h2,{id:"create-ima-app-support",children:[(0,r.jsx)(n.code,{children:"create-ima-app"})," support"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also easily create a typescript base IMA.js application using ",(0,r.jsx)(n.code,{children:"--typescript"})," cli argument when running ",(0,r.jsx)(n.code,{children:"create-ima-app"})," command:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx create-ima-app ~/Desktop/ima-ts --typescript\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn dlx create-ima-app ~/Desktop/ima-ts --typescript\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm dlx create-ima-app ~/Desktop/ima-ts --typescript\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"controller-generic-types",children:"Controller generic types"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AbstractController"})," class follows similar principles used in React ",(0,r.jsx)(n.code,{children:"AbstractComponent"})," type. There are 3 generic types you can define on the class definition itself."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=AbstractController.ts",children:"export class AbstractController<\n  S extends PageState = {},\n  R extends RouteParams = {},\n  SS extends S = S\n> extends Controller<S, R, SS>;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"S"})," - Use to define shape of your controller managed state."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"R"})," - Use to define controller's route route params that are extracted to ",(0,r.jsx)(n.code,{children:"this.params"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SS"})," - Defaults to ",(0,r.jsx)(n.code,{children:"S"}),", however when you are using any extensions in your controller, that have their own state, you can merge those state types in this generic value, to have proper type support for ",(0,r.jsx)(n.code,{children:"this.getState()"})," method (this will now include all state keys, including ones used in extensions)."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=HomeController.ts",children:"import { TestExtension, GalleryExtensionState } from './GalleryExtension';\n\nexport type HomeControllerState = {\n  cards: Promise<CardData>;\n  message: string;\n  name: string;\n};\n\nexport class HomeController extends AbstractController<\n  HomeControllerState,\n  { detailId?: string },\n  HomeControllerState & GalleryExtensionState\n>{\n  static $extensions?: Dependencies<Extension<any, any>> = [GalleryExtension];\n\n  load(): HomeControllerState {\n    const cardsPromise = this.#httpAgent\n      .get<CardData>('http://localhost:3001/static/static/public/cards.json')\n      .then(response => response.body);\n\n    // `state` contains all merged types from `SS` generic value.\n    const state = this.getState();\n\n    return {\n      message: 'test',\n      cards: cardsPromise,\n      name: 'nam',\n    };\n  }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extending-existing-interfaces",children:"Extending existing interfaces"}),"\n",(0,r.jsxs)(n.p,{children:["Since you can extend certain features like ",(0,r.jsx)(n.code,{children:"ComponentUtils"})," or settings from within your application or through plugins, and in order to provide type checking for these, we are using specific interfaces that you can extend using ",(0,r.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html",children:"Declaration Merging"})," feature."]}),"\n",(0,r.jsx)(n.p,{children:"This ensures (when used correctly), that you always have correct static types when using these interfaces, even when they are extended in multiple places."}),"\n",(0,r.jsxs)(n.h3,{id:"extending-utils",children:["Extending ",(0,r.jsx)(n.code,{children:"Utils"})]}),"\n",(0,r.jsxs)(n.p,{children:["When using component utils, in addition to registering your classes using ",(0,r.jsx)(n.code,{children:"ComponentUtils"})," helper, make sure to also extend ",(0,r.jsx)(n.code,{children:"Utils"})," interface. This adds autocomplete and typechecking to ",(0,r.jsx)(n.code,{children:"this.utils()"})," and ",(0,r.jsx)(n.code,{children:"useComponentUtils"})," in your components."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=./app/config/bind.ts",children:"declare module '@ima/core' {\n  interface Utils {\n    $CssClasses: typeof defaultCssClasses;\n  }\n}\n\nexport const initBindApp: InitBindFunction = (ns, oc) => {\n  oc.get(ComponentUtils).register({\n    $CssClasses: '$CssClasses',\n  });\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"extending-objectcontainer",children:["Extending ",(0,r.jsx)(n.code,{children:"ObjectContainer"})]}),"\n",(0,r.jsxs)(n.p,{children:["Same goes for defining string aliases in Object container. This adds proper type checking to dependencies definition and ",(0,r.jsx)(n.code,{children:"oc.get"})," autocomplete."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=./app/config/bind.ts",children:"declare module '@ima/core' {\n  interface OCAliasMap {\n    $CssClasses: () => typeof cssClassNameProcessor;\n    $PageRendererFactory: PageRendererFactory;\n    API_KEY: string;\n  }\n}\n\nexport const initBindApp: InitBindFunction = (ns, oc) => {\n  oc.bind('$CssClasses', function () { return cssClassNameProcessor; });\n  oc.bind('$PageRendererFactory', PageRendererFactory);\n  oc.constant('API_KEY', '14fasdf');\n};\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"extending-settings",children:["Extending ",(0,r.jsx)(n.code,{children:"Settings"})]}),"\n",(0,r.jsxs)(n.p,{children:["This makes sure you don't have any missing or additional fields in your app settings. Other environments than ",(0,r.jsx)(n.code,{children:"prod"})," have all fields made optional, since they are deeply merged with the ",(0,r.jsx)(n.code,{children:"prod"})," settings."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"?:"})," for settings with default values. This applies mostly to plugins."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"title=./app/config/settings.ts",children:"declare module '@ima/core' {\n  interface Settings {\n    links: Record<'documentation' | 'tutorial' | 'plugins' | 'api', string>;\n  }\n}\n\nexport const initSettings: InitSettingsFunction = (ns, oc, config) => {\n  return {\n    prod: {\n      links: {\n        documentation: 'https://imajs.io/docs',\n        api: 'https://imajs.io/api',\n      },\n    }\n  }\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dictionary-localization-keys",children:"Dictionary localization keys"}),"\n",(0,r.jsxs)(n.p,{children:["When compiling app language files, we also generate dictionary keys during runtime. These are then stored in ",(0,r.jsx)(n.code,{children:"'./build/tmp/types/dictionary.ts'"})," file. Don't forget to include this file in ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," source files array, to have correct static type checking:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title=./tsconfig.json",children:'{\n  "include": ["./app/**/*", "./build/tmp/types/**/*"],\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["When used in IMA.js plugins, you can manually extend the ",(0,r.jsx)(n.code,{children:"DictionaryMap"})," interface:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"declare module '@ima/core' {\n  interface DictionaryMap {\n    'home.intro': string;\n  }\n}\n\nexport {};\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6052:(e,n,t)=>{t.d(n,{A:()=>a});t(3696);var s=t(2689);const r={tabItem:"tabItem_wHwb"};var i=t(2540);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},3776:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(3696),r=t(2689),i=t(3707),a=t(9519),o=t(3604),l=t(5196),c=t(6229),d=t(8030);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,p]=m({queryString:t,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),j=(()=>{const e=c??g;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),x(e)}),[p,x,i]),tabValues:i}}var x=t(5200);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=t(2540);function y(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==s&&(c(n),a(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:p,onClick:d,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(v,{...e,children:p(e.children)},String(n))}},3023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(3696);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);