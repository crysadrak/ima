"use strict";(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[2387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(8944);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},6745:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(5773),l=n(7294),r=n(8944),i=n(2466),o=n(3620),u=n(1980),s=n(7392),p=n(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,s]=b({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=u??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==o&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(y,(0,a.Z)({},e,t)),l.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},2324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(5773),l=(n(7294),n(3905)),r=n(6745),i=n(1683);const o={title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin"},u=void 0,s={unversionedId:"cli/plugins/analyze-plugin",id:"cli/plugins/analyze-plugin",title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin",source:"@site/../docs/cli/plugins/analyze-plugin.md",sourceDirName:"cli/plugins",slug:"/cli/plugins/analyze-plugin",permalink:"/cli/plugins/analyze-plugin",draft:!1,editUrl:"https://github.com/seznam/ima/tree/master/docs/../docs/cli/plugins/analyze-plugin.md",tags:[],version:"current",lastUpdatedBy:"Filip Satek",lastUpdatedAt:1729085417,formattedLastUpdatedAt:"Oct 16, 2024",frontMatter:{title:"Analyze Plugin",description:"CLI > CLI Plugins and their API > Analyze Plugin"},sidebar:"docs",previous:{title:"CLI Plugins API",permalink:"/cli/cli-plugins-api"},next:{title:"ScrambleCSS Plugin",permalink:"/cli/plugins/scramble-css-plugin"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"--analyze",id:"--analyze",level:3},{value:"Options",id:"options",level:2},{value:"open",id:"open",level:3},{value:"bundleStatsOptions",id:"bundlestatsoptions",level:3},{value:"bundleAnalyzerOptions",id:"bundleanalyzeroptions",level:3}],d={toc:c},m="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pre-configures ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com/package/bundle-stats-webpack-plugin"},"bundle-stats-webpack-plugin")," and ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," webpack plugins for fast and easy bundle analyzing."),(0,l.kt)("p",null,"This plugin provides easy way to ",(0,l.kt)("strong",{parentName:"p"},"analyze webpack bundle"),". Apart from pre-configuring the forementioned plugins, it also outputs ",(0,l.kt)("inlineCode",{parentName:"p"},"stats.json")," file which can be used in multiple other online webpack bundle analyzer tools. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alexkuz.github.io/webpack-chart/"},"Webpack Chart")," - interactive pie chart"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://chrisbateman.github.io/webpack-visualizer/"},"Webpack Visualizer")," - visualize and analyze bundle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://webpack.jakoblind.no/optimize/"},"Bundle optimize helper")," - analyze and optimize bundle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://statoscope.tech/"},"Statoscope")," - detailed webpack stats analyzer")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The plugin also prints these links directly into the console when the build finishes, for easier access.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ima/cli-plugin-analyze -D\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @ima/cli-plugin-analyze --dev\n"))),(0,l.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @ima/cli-plugin-analyze -D\n")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=./ima.config.js",title:"./ima.config.js"},"const { AnalyzePlugin } = require('@ima/cli-plugin-analyze');\n\n/**\n * @type import('@ima/cli').ImaConfig\n */\nmodule.exports = {\n  plugins: [new AnalyzePlugin()],\n};\n")),(0,l.kt)("h2",{id:"cli-arguments"},"CLI Arguments"),(0,l.kt)("h3",{id:"--analyze"},"--analyze"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"client |\xa0client.es | server"))),(0,l.kt)("p",null,"Run the ima build command with ",(0,l.kt)("inlineCode",{parentName:"p"},"--analyze")," argument and pick one of the three produced bundles you want to analyze. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"npx ima build --analyze=client"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new AnalyzePlugin(options: {\n  open?: boolean;\n  bundleStatsOptions?: BundleStatsWebpackPlugin.Options;\n  bundleAnalyzerOptions?: BundleAnalyzerPlugin.Options;\n});\n")),(0,l.kt)("h3",{id:"open"},"open"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean = true"))),(0,l.kt)("p",null,"Set to false if you don't want to automatically open the browser window with the html reports when the build finishes."),(0,l.kt)("h3",{id:"bundlestatsoptions"},"bundleStatsOptions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"object"))),(0,l.kt)("p",null,"Pass any option that the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleStatsWebpackPlugin")," accepts. These are then merged with some of our custom defaults."),(0,l.kt)("h3",{id:"bundleanalyzeroptions"},"bundleAnalyzerOptions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"object"))),(0,l.kt)("p",null,"Pass any option that the ",(0,l.kt)("inlineCode",{parentName:"p"},"BundleAnalyzerPlugin")," accepts. These are then merged with some of our custom defaults."))}b.isMDXComponent=!0}}]);