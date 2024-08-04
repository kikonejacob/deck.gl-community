"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4675],{7211:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(4848),s=t(8453);const n={},i="Overview",a={id:"modules/arrow-layers/README",title:"Overview",description:"The deck.gl-community repo is specifically set up to collect useful code that no longer has dedicated maintainers. This means that there is often no one who can respond quickly to issues. The vis.gl / Open Visualization team members who try to keep this running can only put a few hours into it every now and then. It is important to understand this limitation. If your project depends on timely fixes, and you are not able to contribute them yourself, deck.gl-community modules may not be the right choice for you.",source:"@site/../docs/modules/arrow-layers/README.md",sourceDirName:"modules/arrow-layers",slug:"/modules/arrow-layers/",permalink:"/deck.gl-community/docs/modules/arrow-layers/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/arrow-layers/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimental Layouts",permalink:"/deck.gl-community/docs/modules/graph-layers/api-reference/layouts/layout-gallery"},next:{title:"Get Started",permalink:"/deck.gl-community/docs/modules/arrow-layers/developer-guide/get-started"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Examples",id:"examples",level:2},{value:"History",id:"history",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(r.admonition,{type:"danger",children:(0,o.jsx)(r.p,{children:"The deck.gl-community repo is specifically set up to collect useful code that no longer has dedicated maintainers. This means that there is often no one who can respond quickly to issues. The vis.gl / Open Visualization team members who try to keep this running can only put a few hours into it every now and then. It is important to understand this limitation. If your project depends on timely fixes, and you are not able to contribute them yourself, deck.gl-community modules may not be the right choice for you."})}),"\n",(0,o.jsx)(r.admonition,{type:"danger",children:(0,o.jsxs)(r.p,{children:["The arrow layers module is still in the process of being ported into deck.gl-community from ",(0,o.jsx)(r.a,{href:"https://github.com/geoarrow/deck.gl-layers",children:"geoarrow/deck.gl-layers"}),"."]})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.img,{src:"https://img.shields.io/badge/deck.gl-v9-green.svg?style=flat-square%22",alt:"deck.gl v9"}),"\n",(0,o.jsx)(r.img,{src:"https://img.shields.io/badge/webgpu-no-red.svg?style=flat-square%22",alt:"WebGPU not supported"})]}),"\n",(0,o.jsxs)(r.p,{children:["This module provides deck.gl layers that accept Apache Arrow and ",(0,o.jsx)(r.a,{href:"https://geoarrow.org",children:"GeoArrow"})," tables.\nThese layers take advantage of the deck.gl ",(0,o.jsx)(r.a,{href:"https://deck.gl/docs/developer-guide/performance#supply-attributes-directly",children:"low-level binary interface"})," to provide binary arrow data from Apache Arrow tables directly to the GPU."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.img,{alt:"arrow-layers example",src:t(8492).A+"",width:"2560",height:"1284"}),"\n",(0,o.jsxs)("p",{style:{textAlign:"center"},children:["3.2 million points rendered with a ",(0,o.jsx)("code",{children:"GeoArrowScatterplotLayer"}),"."]})]}),"\n",(0,o.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Fast"}),": copies binary buffers directly from an ",(0,o.jsx)(r.a,{href:"https://www.npmjs.com/package/apache-arrow",children:"Arrow JS"})," ",(0,o.jsx)(r.a,{href:"https://arrow.apache.org/docs/js/classes/Arrow_dom.Table.html",children:(0,o.jsx)(r.code,{children:"Table"})})," object to the GPU using ",(0,o.jsx)(r.a,{href:"https://deck.gl/docs/developer-guide/performance#supply-attributes-directly",children:"deck.gl's binary data interface"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Memory-efficient"}),": no intermediate data representation and no garbage-collector overhead."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Full layer customization"}),": Use the same layer properties as in the upstream deck.gl layer documentation. Any ",(0,o.jsx)(r.em,{children:"accessor"})," (layer property prefixed with ",(0,o.jsx)(r.code,{children:"get*"}),") can be passed an Arrow ",(0,o.jsx)(r.a,{href:"https://arrow.apache.org/docs/js/classes/Arrow_dom.Vector.html",children:(0,o.jsx)(r.code,{children:"Vector"})}),"."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Input validation"}),". Validation can be turned off via the ",(0,o.jsx)(r.code,{children:"_validate"})," property on most layer types."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Multi-threaded polygon triangulation"}),". When rendering polygon layers, a process called ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Polygon_triangulation",children:"polygon triangulation"})," must happen on the CPU before data can be copied to the GPU. Ordinarily, this can block the main thread for several seconds, but the ",(0,o.jsx)(r.code,{children:"GeoArrowSolidPolygonLayer"})," will perform this process off the main thread, on up to 8 web workers."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:"Progressive rendering support"}),". For streaming-capable data formats like Arrow IPC and Parquet, you can render a GeoArrow layer per chunk as the data loads."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(r.p,{children:["Standalone examples exist in the ",(0,o.jsx)(r.code,{children:"examples/arrow-layers"})," directory. Create an issue if you have trouble running them."]}),"\n",(0,o.jsx)(r.h2,{id:"history",children:"History"}),"\n",(0,o.jsxs)(r.p,{children:["This module is based on the ",(0,o.jsx)(r.a,{href:"https://github.com/geoarrow/deck.gl-layers",children:"geoarrow/deck.gl-layers"})," module, originally developed by Kyle Barron as part of his independent multi-prong effort to implement fully optimized GeoArrow and GeoParquet based browser visualizations."]}),"\n",(0,o.jsx)(r.p,{children:"It was agreed that the deck.gl-community repository is a good long-term home for this particular module. Of note is that there is also interest to bring Apache Arrow support into the deck.gl core repository in a future release and therefore moving development of these layers closer to deck.gl will reduce the risk of duplicated work."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8492:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/hero-e20828c8354fa582c9916165bd146895.jpg"},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var o=t(6540);const s={},n=o.createContext(s);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);