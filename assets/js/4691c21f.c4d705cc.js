"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[69],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9608:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"how-it-works",title:"How It Works",displayed_sidebar:"basicsSidebar"},l=void 0,c={unversionedId:"how-it-works",id:"how-it-works",title:"How It Works",description:"Sonr decentralizes application databases, making data universally composable and reusable across applications. The network consists of three core parts: &#x20;",source:"@site/articles/how-it-works.md",sourceDirName:".",slug:"/how-it-works",permalink:"/articles/how-it-works",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/how-it-works.md",tags:[],version:"current",frontMatter:{id:"how-it-works",title:"How It Works",displayed_sidebar:"basicsSidebar"},sidebar:"basicsSidebar",previous:{title:"Why Sonr?",permalink:"/articles/why-sonr"},next:{title:"The Sonr Stack",permalink:"/articles/sonr-stack"}},p={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sonr decentralizes application databases, making data universally composable and reusable across applications. The network consists of three core parts: "," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Highly-scalable, decentralized infrastructure for data availability and consensus,"," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Marketplace of community-created data models")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Suite of standard APIs for storing, updating, and retrieving data from those models."))),(0,o.kt)("h1",{id:"fundamental-building-blocks"},"Fundamental Building Blocks"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verifiable User Identity")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Realtime Peer-to-Peer Network")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Permission-less Application Hub")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"IBC Enabled Blockchain")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Object Storage (Data)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Blob Storage (Files)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Location based discovery) (Device Discovery)"))),(0,o.kt)("h1",{id:"verifiable-user-identity"},"Verifiable User Identity"),(0,o.kt)("p",null,"Our base DID (or decentralized identifier) follows a syntactic structure of the ",(0,o.kt)("strong",{parentName:"p"},"root")," (your DID), followed by a ",(0,o.kt)("strong",{parentName:"p"},"method")," (or in our case, in every case with this SDK, Sonr), then followed by a ",(0,o.kt)("strong",{parentName:"p"},"public key")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://archbee-image-uploads.s3.amazonaws.com/YigsjtwFFq_eX7dhChoeN/ze9buUbapxPP7S5ROVXn__6e60b2d-screenshot2022-03-10at25108pm.png",alt:"DID and channel schema"})),(0,o.kt)("h1",{id:"realtime-peer-to-peer-network"},"Realtime Peer to Peer Network"),(0,o.kt)("p",null,"Our network is build upon ",(0,o.kt)("inlineCode",{parentName:"p"},"LibP2P")," a peer to peer communication protocol. This allows Highway Nodes and Motor nodes to transmit data, share files, and locate one another. Each motor node in our network is assigned a ",(0,o.kt)("inlineCode",{parentName:"p"},"DHT")," address which allows for unique addressing of each motor in our application network."),(0,o.kt)("h1",{id:"ibc-inter-blockhain-communication"},"IBC (Inter Blockhain Communication)"),(0,o.kt)("p",null,"IBC can be implemented by any consensus algorithm that supports cheaply verifiable finality with any state machine that supports vector commitments. IBC defines a set of low-level primitives for authentication, transport, and ordering, and a set of application-level standards for asset & data semantics. Ledgers which support compatible standards can be connected together without any special permissions."))}m.isMDXComponent=!0}}]);