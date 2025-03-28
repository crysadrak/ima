"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[7363],{6173:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"cli/plugins/scramble-css-plugin","title":"ScrambleCSS Plugin","description":"CLI > CLI Plugins and their API > ScrambleCSS Plugin","source":"@site/../docs/cli/plugins/scramble-css-plugin.md","sourceDirName":"cli/plugins","slug":"/cli/plugins/scramble-css-plugin","permalink":"/cli/plugins/scramble-css-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/seznam/ima/tree/master/docs/../docs/cli/plugins/scramble-css-plugin.md","tags":[],"version":"current","lastUpdatedBy":"Ji\u0159\xed Fencl","lastUpdatedAt":1743072967000,"frontMatter":{"title":"ScrambleCSS Plugin","description":"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},"sidebar":"docs","previous":{"title":"Analyze Plugin","permalink":"/cli/plugins/analyze-plugin"},"next":{"title":"LESS Constants Plugin","permalink":"/cli/plugins/less-constants-plugin"}}');var l=n(2540),t=n(3023),r=n(3776),i=n(6052);const o={title:"ScrambleCSS Plugin",description:"CLI > CLI Plugins and their API > ScrambleCSS Plugin"},c=void 0,u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>$CssClasses</code> override and <code>hashtable.json</code>",id:"cssclasses-override-and-hashtablejson",level:3},{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"--scrambleCss",id:"--scramblecss",level:3},{value:"Options",id:"options",level:2},{value:"scrambleCssMinimizerOptions",id:"scramblecssminimizeroptions",level:3}];function h(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"Implements CSS class minimizer and uglifier that can be reverse-compiled at runtime (you can access classes using their original name)."}),"\n",(0,l.jsxs)(s.p,{children:["It works by processing all CSS files using custom PostCSS plugin, that mangles (scrambles) and minimizes all classes, while also building translation table (",(0,l.jsx)(s.code,{children:"hashtable.json"}),") along the way."]}),"\n",(0,l.jsxs)(s.p,{children:["The result is CSS file with mangled class names and companion hashtable that we use in our custom ",(0,l.jsx)(s.code,{children:"$CssClasses"})," processor to, translate existing classes used out components to the new scrambled ones."]}),"\n",(0,l.jsx)(s.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(s.admonition,{type:"caution",children:[(0,l.jsxs)(s.p,{children:["As mentioned above, for this feature to work ",(0,l.jsxs)(s.strong,{children:["you need to wrap all your ",(0,l.jsx)(s.code,{children:"classNames"})," in ",(0,l.jsx)(s.code,{children:"cssClasses"})," function."]})," Otherwise you'll end up with scrambled classes in CSS file but original class names in your components."]}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-jsx",children:"import { useComponent } from '@ima/react-hooks';\n\nexport default function Card() {\n  const { cssClasses } = useComponent();\n\n  return (\n    // highlight-next-line\n    <div className={cssClasses('card')} />\n  );\n}\n"})}),(0,l.jsxs)(s.p,{children:["or in case of ",(0,l.jsx)(s.strong,{children:"class components"}),":"]}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-jsx",children:"import { AbstractPureComponent } from '@ima/react-page-renderer';\n\nexport default class Card extends AbstractPureComponent {\n  render() {\n    return (\n      // highlight-next-line\n      <div className={this.cssClasses('card')} />\n    );\n  }\n}\n"})})]}),"\n",(0,l.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,l.jsx)(i.A,{value:"npm",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npm install @ima/cli-plugin-scramble-css -D\n"})})}),(0,l.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"yarn add @ima/cli-plugin-scramble-css --dev\n"})})}),(0,l.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"pnpm add @ima/cli-plugin-scramble-css -D\n"})})})]}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",metastring:"title=./ima.config.js",children:"const { ScrambleCssPlugin } = require('@ima/cli-plugin-scramble-css');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [new ScrambleCssPlugin()],\n};\n"})}),"\n",(0,l.jsxs)(s.h3,{id:"cssclasses-override-and-hashtablejson",children:[(0,l.jsx)(s.code,{children:"$CssClasses"})," override and ",(0,l.jsx)(s.code,{children:"hashtable.json"})]}),"\n",(0,l.jsxs)(s.p,{children:["We have to provide our custom ",(0,l.jsx)(s.code,{children:"$CssClasses"})," processor and pass it our generate ",(0,l.jsx)(s.code,{children:"hashtable.json"})," file. To do that, we're going to load it's contents in the app environment:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",metastring:"title=./server/config/environment.js",children:"const fs = require('fs');\nconst path = require('path');\n\nconst hashTablePath = path.resolve(\n  __dirname,\n  '../../build/static/css/hashTable.json'\n);\n\nmodule.exports = (() => {\n  return {\n    prod: {\n      $App: {\n        scrambleCss: {\n          hashTable: fs.existsSync(hashTablePath)\n            ? JSON.parse(fs.readFileSync(hashTablePath))\n            : null,\n        },\n      },\n      // ...\n    }\n  }\n});\n\n"})}),"\n",(0,l.jsxs)(s.p,{children:["Finally, the hashtable is now available under ",(0,l.jsx)(s.code,{children:"config.$App.scrambleCss.hashTable"}),", so we're going to provide it to the plugin's custom ",(0,l.jsx)(s.code,{children:"$CssClasses"})," processor in the app ",(0,l.jsx)(s.code,{children:"bind.js"})," file, and we're done:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-js",metastring:"title=./app/config/bind.js",children:"import { scrambleCssClasses } from '@ima/cli-plugin-scramble-css/scrambleCssClasses';\n\nexport default (ns, oc, config) => {\n  oc.bind(\n    '$CssClasses',\n    scrambleCssClasses(config?.$App?.scrambleCss?.hashTable),\n    []\n  );\n};\n"})}),"\n",(0,l.jsx)(s.h2,{id:"cli-arguments",children:"CLI Arguments"}),"\n",(0,l.jsx)(s.h3,{id:"--scramblecss",children:"--scrambleCss"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"boolean"})}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["The scrambling is enabled by default for the ",(0,l.jsx)(s.code,{children:"production"})," environment. However you can explicitly enable/disable it using this CLI argument. This applies for both CLI commands."]}),"\n",(0,l.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-ts",children:"new ScrambleCssPlugin(options: {\n  scrambleCssMinimizerOptions?: {\n    hashTableFilename?: string;\n    mainAssetFilter?: (filename: string) => boolean;\n  };\n});\n"})}),"\n",(0,l.jsx)(s.h3,{id:"scramblecssminimizeroptions",children:"scrambleCssMinimizerOptions"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"object"})}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["These are passed directly into the ",(0,l.jsx)(s.code,{children:"ScrambleCssMinimizer"}),". You can define custom:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"hashTableFilename"})," - custom translation ",(0,l.jsx)(s.code,{children:"hashtable.json"})," filename. Defaults to: ",(0,l.jsx)(s.strong,{children:"./build/static/css/hashTable.json"}),"."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"mainAssetFilter"})," - should resolve to the ",(0,l.jsx)(s.strong,{children:"main css file"}),". The minimizer first processes the main.css file and generates the ",(0,l.jsx)(s.code,{children:"hashtable.json"})," ",(0,l.jsx)(s.strong,{children:"translation table"}),". If you then want to process other assets with existing hashtable, these should be filtered out in this function, since the minimizer minimizes them in ",(0,l.jsx)(s.strong,{children:"second pass using existing"})," ",(0,l.jsx)(s.code,{children:"hashtable.json"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"You should be fine with the default options in almost any situation except some special use cases."})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},6052:(e,s,n)=>{n.d(s,{A:()=>r});n(3696);var a=n(2689);const l={tabItem:"tabItem_wHwb"};var t=n(2540);function r(e){let{children:s,hidden:n,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:n,children:s})}},3776:(e,s,n)=>{n.d(s,{A:()=>y});var a=n(3696),l=n(2689),t=n(3707),r=n(9519),i=n(3604),o=n(5196),c=n(6229),u=n(8030);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:l}}=e;return{value:s,label:n,attributes:a,default:l}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const l=(0,r.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(l.location.search);s.set(t,e),l.replace({...l.location,search:s.toString()})}),[t,l])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:l}=e,t=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:t}))),[c,d]=p({queryString:n,groupId:l}),[b,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[l,t]=(0,u.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:l}),f=(()=>{const e=c??b;return m({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,t]),tabValues:t}}var g=n(5200);const f={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=n(2540);function j(e){let{className:s,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const s=e.currentTarget,n=o.indexOf(s),l=i[n].value;l!==a&&(c(s),r(l))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...t,className:(0,l.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function C(e){const s=b(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...s,...e}),(0,x.jsx)(v,{...s,...e})]})}function y(e){const s=(0,g.A)();return(0,x.jsx)(C,{...e,children:d(e.children)},String(s))}},3023:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var a=n(3696);const l={},t=a.createContext(l);function r(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);