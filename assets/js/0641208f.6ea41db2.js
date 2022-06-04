"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[8156],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"ADR Overview",id:"adr-overview",displayed_sidebar:"resourcesSidebar"},c="Prysm ADR Guide",l={unversionedId:"reference/adr-overview",id:"reference/adr-overview",title:"ADR Overview",description:"This guide serves as a walkthrough for ADRs 001-006. It provides a high level overview of each ADR with a special emphasis on interactions with the blockchain.",source:"@site/articles/reference/ADR-OVERVIEW.md",sourceDirName:"reference",slug:"/reference/adr-overview",permalink:"/articles/reference/adr-overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/reference/ADR-OVERVIEW.md",tags:[],version:"current",frontMatter:{title:"ADR Overview",id:"adr-overview",displayed_sidebar:"resourcesSidebar"},sidebar:"resourcesSidebar",next:{title:"ADR-001",permalink:"/articles/reference/adr-001"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"ADR-001: Decentralized Identifiers",id:"adr-001-decentralized-identifiers",level:2},{value:"ADR-002: Object Schemas",id:"adr-002-object-schemas",level:2},{value:"ADR-003: Buckets",id:"adr-003-buckets",level:2},{value:"ADR-004: Channels",id:"adr-004-channels",level:2},{value:"ADR-005: NFT Standard",id:"adr-005-nft-standard",level:2},{value:"ADR-006: Functions",id:"adr-006-functions",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prysm-adr-guide"},"Prysm ADR Guide"),(0,o.kt)("p",null,"This guide serves as a walkthrough for ADRs 001-006. It provides a high level overview of each ADR with a special emphasis on interactions with the blockchain."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"An Architecture Decision Record (ADR) is a document which describes in detail a significant addition to the Sonr platform. This includes a high level description all the way down to specific methods to be added. This guide will link each ADR for reference, but the blockchain interactions for each ADR will be synthesized and documented here."),(0,o.kt)("h2",{id:"adr-001-decentralized-identifiers"},"ADR-001: Decentralized Identifiers"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-001"},"LINK TO ADR-001")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://w3.org/TR/did-core"},"Decentralized Identifiers (DIDs)")," are the foundation of decentralization on Sonr. They provide a standardized way to support unfederated identities that are not owned by any individual organization\u2014including Sonr.\nAny time a user or application is created or updated, a transaction on the blockchain is created. This may mean changing metadata for an account, such as a profile picture link; adding or removing a device (new phone, laptop, etc.); buying or transferring an alias, for example \u201calice.snr\u201d; or authorizing another device as a controller, for example in the case you need to let an application act on your behalf. These transactions will always be done on behalf of the end user."),(0,o.kt)("h2",{id:"adr-002-object-schemas"},"ADR-002: Object Schemas"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-002"},"LINK TO ADR-002")),(0,o.kt)("p",null,"Schemas and Objects together are the primary means for persistent data on Sonr. Schemas are data types, implemented as ",(0,o.kt)("a",{parentName:"p",href:"https://ipld.io"},"IPLD")," schemas that enable platform-agnostic models within Sonr and without. Objects on the other hand are simply data blobs on ",(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io"},"IPFS")," (not to be confused with IPLD) that can be deserialized and represented by a schema.\nSchemas will be largely immutable, but creating them requires a transaction on the blockchain. Any updates to a schema are made in the form of a new schema and a deprecation of the old one. Objects by contrast are not stored on-chain. The only interaction between objects and the chain arises when buckets are introduced (more on that in the next section). These transactions will be done mostly by developers."),(0,o.kt)("h2",{id:"adr-003-buckets"},"ADR-003: Buckets"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-003"},"LINK TO ADR-003")),(0,o.kt)("p",null,"Objects on Sonr will oftentimes be related to one another. For example, a user will have a vault containing all their encryption keys, a group of objects related to a particular application they use, or just personal information. These related objects will be tied together through buckets. A bucket is essentially a list of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/content-addressing/"},"CIDs")," or a set of small data blobs that is owned by an end user. Buckets also facilitate access control by acting as a central repository for shared encryption keys.\nCreating, updating, and deleting buckets all require transactions on the blockchain. This is likely to be done very frequently, with the cost on the end user."),(0,o.kt)("h2",{id:"adr-004-channels"},"ADR-004: Channels"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-004"},"LINK TO ADR-004")),(0,o.kt)("p",null,"The purpose of channels is to facilitate real-time communication between nodes on the network. In many cases, these channels need only exist for a short time to transfer data from one node to another or establish a connection\u2014these are ephemeral channels. Ephemeral channels require no blockchain resources and no persisted data. Persistent channels on the other hand are created on-chain and never become unavailable unless deactivated. These channels are meant to facilitate things akin to Discord channels or notifications."),(0,o.kt)("h2",{id:"adr-005-nft-standard"},"ADR-005: NFT Standard"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-005"},"LINK TO ADR-005")),(0,o.kt)("p",null,"This is just what it sounds like. Sonr will use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/cw-plus/0.9.0/cw721/spec/"},"CW721")," Spec for implementing NFTs, enabling developers to build ",(0,o.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," smart contracts for custom NFT logic. A transaction on-chain will be required for any mint, buy, sell, or transfer of NFTs."),(0,o.kt)("h2",{id:"adr-006-functions"},"ADR-006: Functions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.sonr.io/articles/reference/adr-006"},"LINK TO ADR-006")),(0,o.kt)("p",null,"Functions on Sonr allow developers to run serverless code, similar to AWS Lambda or GCP Cloud Functions. Creating, updating, and deleting these functions will involve a transaction to the chain, cost of execution will be determined from one of the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"total_cost = static_cost + runtime_fees (static_cost)"),(0,o.kt)("li",{parentName:"ul"},"total_cost=variable_cost+runtime_fees+ gas_fees (variable cost)"),(0,o.kt)("li",{parentName:"ul"},"total_cost=runtime_fees (runtime_cost) but execution is facilitated by an off-chain service (free). Developers will be the only users performing these transactions.")))}p.isMDXComponent=!0}}]);