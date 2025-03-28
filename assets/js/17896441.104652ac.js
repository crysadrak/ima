(self.webpackChunk_ima_docs=self.webpackChunk_ima_docs||[]).push([[8401],{3815:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>an});var s=n(3696),a=n(2952),o=n(8225),i=n(2540);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(2689),m=n(7978),h=n(7963),p=n(9985);function f(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,i.jsxs)(p.A,{className:(0,u.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}function x(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(f,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(f,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=r();return(0,i.jsx)(x,{previous:e.previous,next:e.next})}var g=n(4669),j=n(9294),v=n(7404),N=n(1599),A=n(6658);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function y(e){const t=C[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,N.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:c}=(0,j.HW)(a),r=l??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,u.A)(t,v.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(y,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(k,{versionLabel:c.label,to:r.path,onClick:()=>o(c.name)})})]})}function B(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,i.jsx)(L,{className:t,versionMetadata:n}):null}function _(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,i.jsx)("span",{className:(0,u.A)(t,v.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const w={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};function T(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,i.jsxs)(p.A,{href:t,title:a,className:(0,u.A)(w.tag,s?w.tagWithCount:w.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const E={tags:"tags_Ow0B",tag:"tag_DFxh"};function H(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,u.A)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:E.tag,children:(0,i.jsx)(T,{...e})},e.permalink)))})]})}const M={iconEdit:"iconEdit_bHB7"};function I(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function S(e){let{editUrl:t}=e;return(0,i.jsxs)(p.A,{to:t,className:v.G.common.editThisPage,children:[(0,i.jsx)(I,{}),(0,i.jsx)(h.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function U(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,g.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,g.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function R(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=U({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(h.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function z(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function V(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,i.jsx)(h.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(R,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(z,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const O={lastUpdated:"lastUpdated_ydrU"};function D(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:a}=e;return(0,i.jsxs)("div",{className:(0,u.A)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(S,{editUrl:n})}),(0,i.jsx)("div",{className:(0,u.A)("col",O.lastUpdated),children:(s||a)&&(0,i.jsx)(V,{lastUpdatedAt:s,lastUpdatedBy:a})})]})}function G(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,l=!!(t||n||s);return o||l?(0,i.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,u.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(H,{tags:a})})}),l&&(0,i.jsx)(D,{className:(0,u.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var P=n(9695),F=n(2427);function $(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function W(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=W({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function Q(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>q(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function X(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Z(e){const t=(0,s.useRef)(void 0),n=X();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=Q(l,{anchorTopOffset:n.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function Y(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,i.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,i.jsxs)("li",{children:[(0,i.jsx)(p.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,i.jsx)(Y,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const J=s.memo(Y);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c,...r}=e;const d=(0,F.p)(),u=l??d.tableOfContents.minHeadingLevel,m=c??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>W({toc:$(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Z((0,s.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:m}}),[a,o,u,m])),(0,i.jsx)(J,{toc:h,className:n,linkClassName:a,...r})}const ee={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function te(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,P.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.A)(ne.tocCollapsible,!o&&ne.tocCollapsibleExpanded,n),children:[(0,i.jsx)(te,{collapsed:o,onClick:l}),(0,i.jsx)(P.N,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const ae={tocMobile:"tocMobile_Ojys"};function oe(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,ae.tocMobile)})}const ie={tableOfContents:"tableOfContents_XG6w",docItemContainer:"docItemContainer_Tr6w"},le="table-of-contents__link toc-highlight",ce="table-of-contents__link--active";function re(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,u.A)(ie.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(K,{...n,linkClassName:le,linkActiveClassName:ce})})}function de(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(re,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var ue=n(1282),me=n(3023),he=n(7943),pe=n(5200),fe=n(4996);function xe(){const{prism:e}=(0,F.p)(),{colorMode:t}=(0,fe.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var be=n(9934),ge=n.n(be);const je=/title=(?<quote>["'])(?<title>.*?)\1/,ve=/\{(?<range>[\d,-]+)\}/,Ne={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},Ae={...Ne,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Ce=Object.keys(Ne);function ye(e,t){const n=e.map((e=>{const{start:n,end:s}=Ae[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function ke(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&ve.test(o)){const e=o.match(ve).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=ge()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return ye(["js","jsBlock"],t);case"jsx":case"tsx":return ye(["js","jsBlock","jsx"],t);case"html":return ye(["js","jsBlock","html"],t);case"python":case"py":case"bash":return ye(["bash"],t);case"markdown":case"md":return ye(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return ye(["tex"],t);case"lua":case"haskell":return ye(["lua"],t);case"sql":return ye(["lua","jsBlock"],t);case"wasm":return ye(["wasm"],t);case"vb":case"vba":case"visual-basic":return ye(["vb","rem"],t);case"vbnet":return ye(["vbnet","rem"],t);case"batch":return ye(["rem"],t);case"basic":return ye(["rem","f90"],t);case"fsharp":return ye(["js","ml"],t);case"ocaml":case"sml":return ye(["ml"],t);case"fortran":return ye(["f90"],t);case"cobol":return ye(["cobol"],t);default:return ye(Ce,t)}}(s,a),l=n.split("\n"),c=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),r=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<l.length;){const e=l[h].match(i);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));r[t]?c[r[t]].range+=`${h},`:d[t]?c[d[t]].start=h:u[t]&&(c[u[t]].range+=`${c[u[t]].start}-${h-1},`),l.splice(h,1)}n=l.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;ge()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const Le="codeBlockContainer_mQmQ";function Be(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(xe());return(0,i.jsx)(t,{...n,style:s,className:(0,u.A)(n.className,Le,v.G.common.codeBlock)})}const _e={codeBlockContent:"codeBlockContent_D5yF",codeBlockTitle:"codeBlockTitle_x_ju",codeBlock:"codeBlock_RMoD",codeBlockStandalone:"codeBlockStandalone_wQog",codeBlockLines:"codeBlockLines_AclH",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_O625",buttonGroup:"buttonGroup_aaMX"};function we(e){let{children:t,className:n}=e;return(0,i.jsx)(Be,{as:"pre",tabIndex:0,className:(0,u.A)(_e.codeBlockStandalone,"thin-scrollbar",n),children:(0,i.jsx)("code",{className:_e.codeBlockLines,children:t})})}const Te={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Ee(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=Te);const a=(0,o._q)(t),i=(0,o.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var He=n(3915);const Me="codeLine_FAqz",Ie="codeLineNumber_BE9Z",Se="codeLineContent_EF2y";function Ue(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,u.A)(n,s&&Me)}),c=t.map(((e,t)=>(0,i.jsx)("span",{...o({token:e})},t)));return(0,i.jsxs)("span",{...l,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:Ie}),(0,i.jsx)("span",{className:Se,children:c})]}):c,(0,i.jsx)("br",{})]})}function Re(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function ze(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Ve={copyButtonCopied:"copyButtonCopied_TYdd",copyButtonIcons:"copyButtonIcons_z5j7",copyButtonIcon:"copyButtonIcon_FoOz",copyButtonSuccessIcon:"copyButtonSuccessIcon_L0B6"};function Oe(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),c=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),i=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}s.remove(),i&&(o.removeAllRanges(),o.addRange(i)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,i.jsx)("button",{type:"button","aria-label":a?(0,h.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.A)("clean-btn",n,Ve.copyButton,a&&Ve.copyButtonCopied),onClick:c,children:(0,i.jsxs)("span",{className:Ve.copyButtonIcons,"aria-hidden":"true",children:[(0,i.jsx)(Re,{className:Ve.copyButtonIcon}),(0,i.jsx)(ze,{className:Ve.copyButtonSuccessIcon})]})})}function De(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const Ge="wordWrapButtonIcon_HV9T",Pe="wordWrapButtonEnabled_XzR1";function Fe(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,h.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,i.jsx)("button",{type:"button",onClick:n,className:(0,u.A)("clean-btn",t,s&&Pe),"aria-label":a,title:a,children:(0,i.jsx)(De,{className:Ge,"aria-hidden":"true"})})}function $e(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,F.p)(),m=function(e){return e?.toLowerCase()}(c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),h=xe(),p=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),l=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Ee(o,l),(0,s.useEffect)((()=>{l()}),[e,l]),(0,s.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}(),f=function(e){return e?.match(je)?.groups.title??""}(a)||o,{lineClassNames:x,code:b}=ke(t,{metastring:a,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,i.jsxs)(Be,{as:"div",className:(0,u.A)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`),children:[f&&(0,i.jsx)("div",{className:_e.codeBlockTitle,children:f}),(0,i.jsxs)("div",{className:_e.codeBlockContent,children:[(0,i.jsx)(He.f4,{theme:h,code:b,language:m??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,i.jsx)("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,u.A)(t,_e.codeBlock,"thin-scrollbar"),style:n,children:(0,i.jsx)("code",{className:(0,u.A)(_e.codeBlockLines,g&&_e.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,i.jsx)(Ue,{line:e,getLineProps:a,getTokenProps:o,classNames:x[t],showLineNumbers:g},t)))})})}}),(0,i.jsxs)("div",{className:_e.buttonGroup,children:[(p.isEnabled||p.isCodeScrollable)&&(0,i.jsx)(Fe,{className:_e.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),(0,i.jsx)(Oe,{className:_e.codeButton,code:b})]})]})]})}function We(e){let{children:t,...n}=e;const a=(0,pe.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?$e:we;return(0,i.jsx)(l,{...n,children:o},String(a))}function qe(e){return(0,i.jsx)("code",{...e})}var Qe=n(9256),Xe=n(5470);const Ze="details_IpIu",Ye="isBrowser_QD4r",Je="collapsibleContent_Fd2D";function Ke(e){return!!e&&("SUMMARY"===e.tagName||Ke(e.parentElement))}function et(e,t){return!!e&&(e===t||et(e.parentElement,t))}function tt(e){let{summary:t,children:n,...a}=e;(0,Xe.A)().collectAnchor(a.id);const o=(0,pe.A)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:r}=(0,P.u)({initialState:!a.open}),[d,u]=(0,s.useState)(a.open),m=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...a,ref:l,open:d,"data-collapsed":c,className:(0,Qe.A)(Ze,o&&Ye,a.className),onMouseDown:e=>{Ke(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Ke(t)&&et(t,l.current)&&(e.preventDefault(),c?(r(!1),u(!0)):r(!0))},children:[m,(0,i.jsx)(P.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),u(!e)},children:(0,i.jsx)("div",{className:Je,children:n})})]})}const nt="details_jERq";function st(e){let{...t}=e;return(0,i.jsx)(tt,{...t,className:(0,u.A)("alert alert--info",nt,t.className)})}function at(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,i.jsx)(i.Fragment,{children:t.filter((e=>e!==n))});return(0,i.jsx)(st,{...e,summary:n,children:a})}function ot(e){return(0,i.jsx)(ue.A,{...e})}const it="containsTaskList_QWGu";function lt(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&it)}const ct="img_SS3x";function rt(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}const dt="admonition_WCGJ",ut="admonitionHeading_GCBg",mt="admonitionIcon_L39b",ht="admonitionContent_pbrs";function pt(e){let{type:t,className:n,children:s}=e;return(0,i.jsx)("div",{className:(0,u.A)(v.G.common.admonition,v.G.common.admonitionType(t),dt,n),children:s})}function ft(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:ut,children:[(0,i.jsx)("span",{className:mt,children:t}),n]})}function xt(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:ht,children:t}):null}function bt(e){const{type:t,icon:n,title:s,children:a,className:o}=e;return(0,i.jsxs)(pt,{type:t,className:o,children:[s||n?(0,i.jsx)(ft,{title:s,icon:n}):null,(0,i.jsx)(xt,{children:a})]})}function gt(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const jt={icon:(0,i.jsx)(gt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function vt(e){return(0,i.jsx)(bt,{...jt,...e,className:(0,u.A)("alert alert--secondary",e.className),children:e.children})}function Nt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const At={icon:(0,i.jsx)(Nt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Ct(e){return(0,i.jsx)(bt,{...At,...e,className:(0,u.A)("alert alert--success",e.className),children:e.children})}function yt(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const kt={icon:(0,i.jsx)(yt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Lt(e){return(0,i.jsx)(bt,{...kt,...e,className:(0,u.A)("alert alert--info",e.className),children:e.children})}function Bt(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const _t={icon:(0,i.jsx)(Bt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function wt(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Tt={icon:(0,i.jsx)(wt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Et={icon:(0,i.jsx)(Bt,{}),title:(0,i.jsx)(h.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Ht={...{note:vt,tip:Ct,info:Lt,warning:function(e){return(0,i.jsx)(bt,{..._t,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(bt,{...Tt,...e,className:(0,u.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(vt,{title:"secondary",...e}),important:e=>(0,i.jsx)(Lt,{title:"important",...e}),success:e=>(0,i.jsx)(Ct,{title:"success",...e}),caution:function(e){return(0,i.jsx)(bt,{...Et,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})}}};function Mt(e){const t=rt(e),n=(s=t.type,Ht[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Ht.info));var s;return(0,i.jsx)(n,{...t})}const It={Head:he.A,details:at,Details:at,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(qe,{...e}):(0,i.jsx)(We,{...e})},a:function(e){return(0,i.jsx)(p.A,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:lt(e.className)})},li:function(e){return(0,Xe.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,ct))});var t},h1:e=>(0,i.jsx)(ot,{as:"h1",...e}),h2:e=>(0,i.jsx)(ot,{as:"h2",...e}),h3:e=>(0,i.jsx)(ot,{as:"h3",...e}),h4:e=>(0,i.jsx)(ot,{as:"h4",...e}),h5:e=>(0,i.jsx)(ot,{as:"h5",...e}),h6:e=>(0,i.jsx)(ot,{as:"h6",...e}),admonition:Mt,mermaid:()=>null};function St(e){let{children:t}=e;return(0,i.jsx)(me.x,{components:It,children:t})}function Ut(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(ue.A,{as:"h1",children:n})}),(0,i.jsx)(St,{children:t})]})}var Rt=n(3511),zt=n(4422),Vt=n(3254);function Ot(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Dt={breadcrumbHomeIcon:"breadcrumbHomeIcon_sfvy"};function Gt(){const e=(0,Vt.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(Ot,{className:Dt.breadcrumbHomeIcon})})})}const Pt={breadcrumbsContainer:"breadcrumbsContainer_T5ub"};function Ft(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function $t(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function Wt(){const e=(0,Rt.OF)(),t=(0,zt.Dt)();return e?(0,i.jsx)("nav",{className:(0,u.A)(v.G.docs.docBreadcrumbs,Pt.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(Gt,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)($t,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Ft,{href:a,isLast:s,children:t.label})},n)}))]})}):null}function qt(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Qt(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Xt(){return(0,i.jsx)(he.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Zt(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function Yt(){return(0,i.jsx)(h.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function Jt(e){let{className:t}=e;return(0,i.jsx)(Mt,{type:"caution",title:(0,i.jsx)(Zt,{}),className:(0,u.A)(t,v.G.common.draftBanner),children:(0,i.jsx)(Yt,{})})}function Kt(e){let{className:t}=e;return(0,i.jsx)(Mt,{type:"caution",title:(0,i.jsx)(qt,{}),className:(0,u.A)(t,v.G.common.unlistedBanner),children:(0,i.jsx)(Qt,{})})}function en(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Xt,{}),(0,i.jsx)(Kt,{...e})]})}function tn(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(en,{}),s.draft&&(0,i.jsx)(Jt,{})]})}const nn={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function sn(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(oe,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(de,{})}}(),{metadata:s}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&nn.docItemCol),children:[(0,i.jsx)(tn,{metadata:s}),(0,i.jsx)(B,{}),(0,i.jsxs)("div",{className:nn.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(Wt,{}),(0,i.jsx)(_,{}),n.mobile,(0,i.jsx)(Ut,{children:t}),(0,i.jsx)(G,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function an(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(sn,{children:(0,i.jsx)(n,{})})]})})}},9934:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},3023:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>l});var s=n(3696);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);