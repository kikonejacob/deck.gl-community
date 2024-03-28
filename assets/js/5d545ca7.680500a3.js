"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),g=n,y=s["".concat(d,".").concat(g)]||s[g]||u[g]||o;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="GraphGL",l={unversionedId:"modules/react-graph-layers/api-reference/graphgl",id:"modules/react-graph-layers/api-reference/graphgl",title:"GraphGL",description:"Usage",source:"@site/../docs/modules/react-graph-layers/api-reference/graphgl.md",sourceDirName:"modules/react-graph-layers/api-reference",slug:"/modules/react-graph-layers/api-reference/graphgl",permalink:"/deck.gl-community/docs/modules/react-graph-layers/api-reference/graphgl",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/react-graph-layers/api-reference/graphgl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/deck.gl-community/docs/modules/react-graph-layers/"},next:{title:"Node Style",permalink:"/deck.gl-community/docs/modules/react-graph-layers/api-reference/node-style"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"<code>graph</code> (Graph, required)",id:"graph-graph-required",level:3},{value:"<code>layout</code> (Layout, required)",id:"layout-layout-required",level:3},{value:"<code>initialViewState</code> (Object, optional)",id:"initialviewstate-object-optional",level:3},{value:"<code>nodeStyle</code> (Array, required)",id:"nodestyle-array-required",level:3},{value:"<code>nodeEvents</code> (Object, optional)",id:"nodeevents-object-optional",level:3},{value:"<code>edgeStyle</code> (Object | Array, required)",id:"edgestyle-object--array-required",level:3},{value:"<code>edgeEvents</code> (Object, optional)",id:"edgeevents-object-optional",level:3}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphgl"},"GraphGL"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/gatsby/images/graph.png",height:"200"})),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import GraphGL, {JSONLoader, NODE_TYPE, D3ForceLayout} from 'react-graph-layers';\n\nconst App = ({data}) => {\n  const graph = JSONLoader({\n    json: data,\n    nodeParser: (node) => ({id: node.id}),\n    edgeParser: (edge) => ({\n      id: edge.id,\n      sourceId: edge.sourceId,\n      targetId: edge.targetId,\n      directed: true\n    })\n  });\n  return (\n    <GraphGL\n      graph={graph}\n      layout={new D3ForceLayout()}\n      nodeStyle={[\n        {\n          type: NODE_TYPE.CIRCLE,\n          radius: 10,\n          fill: 'blue',\n          opacity: 1\n        }\n      ]}\n      edgeStyle={{\n        stroke: 'black',\n        strokeWidth: 2\n      }}\n      enableDragging\n    />\n  );\n};\n")),(0,n.kt)("h3",{id:"graph-graph-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"graph")," (Graph, required)"),(0,n.kt)("p",null,"The graph data will need to be processed through JSONLoader and converted into ",(0,n.kt)("inlineCode",{parentName:"p"},"Graph")," object. The expected data should be an object includes two arrays: ",(0,n.kt)("inlineCode",{parentName:"p"},"nodes")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"edges"),". Each node require an unique ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),". Each edge should have ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," as edge ID, ",(0,n.kt)("inlineCode",{parentName:"p"},"sourceId")," as the ID of the source node, and ",(0,n.kt)("inlineCode",{parentName:"p"},"targetId")," as the ID of the target node. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const data = {\n  nodes: [{id: '1'}, {id: '2'}, {id: '3'}],\n  edges: [\n    {id: 'e1', sourceId: '1', targetId: '2'},\n    {id: 'e2', sourceId: '1', targetId: '3'},\n    {id: 'e3', sourceId: '2', targetId: '3'}\n  ]\n};\n")),(0,n.kt)("p",null,"Then, you can convert the data into ",(0,n.kt)("inlineCode",{parentName:"p"},"Graph")," by ",(0,n.kt)("inlineCode",{parentName:"p"},"JSONLoader"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {JSONLoader} from 'react-graph-layers';\nconst graph = JSONLoader({json: data});\n")),(0,n.kt)("h3",{id:"layout-layout-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"layout")," (Layout, required)"),(0,n.kt)("p",null,"Use one of the layouts provided by react-graph-layers or create a new custom layout class by following the instruction. For more detail, please see the Layout docs/api-reference/layout section."),(0,n.kt)("h3",{id:"initialviewstate-object-optional"},(0,n.kt)("inlineCode",{parentName:"h3"},"initialViewState")," (Object, optional)"),(0,n.kt)("p",null,"For more detail, please see /docs/api-reference/viewport."),(0,n.kt)("h3",{id:"nodestyle-array-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"nodeStyle")," (Array, required)"),(0,n.kt)("p",null,"A node is made of a set of layers. nodeStyle is a set of style objects to describe the style for each layer.\nFor more detail, please see the (explanation of nodeStyle](docs/api-reference/node-style)."),(0,n.kt)("h3",{id:"nodeevents-object-optional"},(0,n.kt)("inlineCode",{parentName:"h3"},"nodeEvents")," (Object, optional)"),(0,n.kt)("p",null,"For more detail, please see the interactions reference /docs/api-reference/interactions."),(0,n.kt)("h3",{id:"edgestyle-object--array-required"},(0,n.kt)("inlineCode",{parentName:"h3"},"edgeStyle")," (Object | Array, required)"),(0,n.kt)("p",null,"For more detail, please see the explanation of edgeStyle docs/api-reference/edge-style"),(0,n.kt)("h3",{id:"edgeevents-object-optional"},(0,n.kt)("inlineCode",{parentName:"h3"},"edgeEvents")," (Object, optional)"),(0,n.kt)("p",null,"For more detail, please see api-reference interactions docs/api-reference/interactions."))}u.isMDXComponent=!0}}]);