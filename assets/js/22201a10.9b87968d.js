"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2272],{1483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(4848),a=t(8453);const o={},l="@deck.gl-community/bing-maps",i={id:"modules/bing-maps/developer-guide/get-started",title:"@deck.gl-community/bing-maps",description:"This module allows deck.gl to be used as a Bing Maps custom layer.",source:"@site/../docs/modules/bing-maps/developer-guide/get-started.md",sourceDirName:"modules/bing-maps/developer-guide",slug:"/modules/bing-maps/developer-guide/get-started",permalink:"/deck.gl-community/docs/modules/bing-maps/developer-guide/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/deck.gl-community/tree/master/website/../docs/modules/bing-maps/developer-guide/get-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/deck.gl-community/docs/modules/bing-maps/"},next:{title:"DeckOverlay",permalink:"/deck.gl-community/docs/modules/bing-maps/api-reference/deck-overlay"}},r={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deckgl-communitybing-maps",children:"@deck.gl-community/bing-maps"}),"\n",(0,s.jsxs)(n.p,{children:["This module allows ",(0,s.jsx)(n.a,{href:"https://deck.gl",children:"deck.gl"})," to be used as a Bing Maps custom layer."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install deck.gl @deck.gl-community/bing-maps\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import {loadModules} from '@deck.gl-community/bing-maps';\nimport {GeoJsonLayer} from 'deck.gl';\n\nloadModules().then(({Maps, Location, DeckOverlay}) => {\n  // Create map\n  const map = new Map(document.getElementById('map'), {\n    credentials: 'YOUR_API_KEY',\n    // Disable modes that are not supported\n    disableBirdsEye: true,\n    disableStreetside: true\n  });\n\n  map.setView({\n    center: new Location(37.78, -122.45),\n    zoom: 10\n  });\n\n  // Add deck.gl overlay\n  const deckOverlay = new DeckOverlay({\n    layers: [\n      new GeoJsonLayer({\n        data:\n          'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson',\n        lineWidthMinPixels: 2,\n        getLineColor: [60, 60, 60],\n        getFillColor: [200, 200, 200]\n      })\n    ]\n  });\n  map.layers.insert(deckOverlay);\n});\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6540);const a={},o=s.createContext(a);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);