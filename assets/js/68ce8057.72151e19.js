"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=l,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(7462),l=(r(7294),r(3905));const n={},o="Overview",i={unversionedId:"modules/editor-core/README",id:"modules/editor-core/README",title:"Overview",description:"nebula.gl provides editable and interactive map overlay layers, built using the power of deck.gl.",source:"@site/../docs/modules/editor-core/README.md",sourceDirName:"modules/editor-core",slug:"/modules/editor-core/",permalink:"/deck.gl-community/docs/modules/editor-core/",draft:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/editor-core/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/deck.gl-community/docs/upgrade-guide"},next:{title:"What's New",permalink:"/deck.gl-community/docs/modules/editor-core/whats-new"}},s={},u=[{value:"Design Goals",id:"design-goals",level:2},{value:"Why nebula.gl?",id:"why-nebulagl",level:2},{value:"Quick Overview of the nebula.gl API",id:"quick-overview-of-the-nebulagl-api",level:2},{value:"EditableGeoJsonLayer",id:"editablegeojsonlayer",level:3},{value:"Callbacks",id:"callbacks",level:4},{value:"Overlays",id:"overlays",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nebula.gl"},"nebula.gl")," provides editable and interactive map overlay layers, built using the power of ",(0,l.kt)("a",{parentName:"p",href:"https://deck.gl/"},"deck.gl"),"."),(0,l.kt)("h2",{id:"design-goals"},"Design Goals"),(0,l.kt)("p",null,"nebula.gl aspires to be an ultra-performant, fully 3D-enabled GeoJSON editing system primarily focused on geospatial editing use cases."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Maximal rendering and editing performance, without need for complex application logic (such as splitting data into subgroups etc)."),(0,l.kt)("li",{parentName:"ul"},"Target performance: Editing at 60fps (e.g. dragging sub objects) in GeoJSON payloads with 100K features (points, lines or polygons)."),(0,l.kt)("li",{parentName:"ul"},"Handles GeoJSON corner cases, e.g. automatically changing object types from ",(0,l.kt)("inlineCode",{parentName:"li"},"Polygon")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"MultiPolygon")," when addition polygons are added."),(0,l.kt)("li",{parentName:"ul"},"Fully 3D enabled (Can e.g. use WebGL z-buffer so that lines being rendered are properly occluded by other geometry)."),(0,l.kt)("li",{parentName:"ul"},"Seamless integration with deck.gl and all geospatial deck.gl layers, allowing for GeoJSON editing to be interleaved with rich 3D visualizations."),(0,l.kt)("li",{parentName:"ul"},"Handle all aspects of event handling, including touch screen support.")),(0,l.kt)("h2",{id:"why-nebulagl"},"Why nebula.gl?"),(0,l.kt)("p",null,"You should strongly consider nebula.gl:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You want a full-featured, ultra-high-performance editing solution for GeoJson."),(0,l.kt)("li",{parentName:"ul"},"You are already using e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"deck.gl")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"react-map-gl"),".")),(0,l.kt)("p",null,"You may want to look at alternatives if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you have very simple editing requirements (just a simple polygon etc)"),(0,l.kt)("li",{parentName:"ul"},"If you don't want to use ",(0,l.kt)("inlineCode",{parentName:"li"},"deck.gl")," in your project.")),(0,l.kt)("p",null,"If nebula.gl is more than what you need (e.g. in terms of bundle size), and you may want to look at other solutions, e.g. the simple polygon editor overlay being developed in react-map-gl."),(0,l.kt)("p",null,"That said, if you are already using ",(0,l.kt)("inlineCode",{parentName:"p"},"deck.gl")," the additional overhead of nebula.gl is small, and the seamless integration with deck.gl should be valuable."),(0,l.kt)("h2",{id:"quick-overview-of-the-nebulagl-api"},"Quick Overview of the nebula.gl API"),(0,l.kt)("h3",{id:"editablegeojsonlayer"},"EditableGeoJsonLayer"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/modules/editor-layers/api-reference/editable-geojson-layer"},"EditableGeoJsonLayer")," is implemented as a ",(0,l.kt)("a",{parentName:"p",href:"https://deck.gl"},"deck.gl")," layer. It provides the ability to view and edit multiple types of geometry formatted as ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"GeoJSON")," (an open standard format for geometry) including polygons, lines, and points."),(0,l.kt)("h4",{id:"callbacks"},"Callbacks"),(0,l.kt)("p",null,"When there is the ability to edit, callbacks are provided to inform you of edits."),(0,l.kt)("h3",{id:"overlays"},"Overlays"),(0,l.kt)("p",null,"The overlay layers are based on HTML and rendered by the browser. You can use them\nfor complicated objects that follow map points. They are less performant\nbut more flexible. For more details see ",(0,l.kt)("a",{parentName:"p",href:"/docs/modules/react-overlays/api-reference/html-overlay"},"Using Html Overlays")))}c.isMDXComponent=!0}}]);