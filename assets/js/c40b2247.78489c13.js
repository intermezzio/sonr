"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[2288],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=i,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={title:"ADR-001",id:"adr-001",displayed_sidebar:"resourcesSidebar"},d="ADR-001: DID Method Specification",l={unversionedId:"reference/adr-001",id:"reference/adr-001",title:"ADR-001",description:"hackmd-github-sync-badge",source:"@site/articles/reference/ADR-001.md",sourceDirName:"reference",slug:"/reference/adr-001",permalink:"/articles/reference/adr-001",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/reference/ADR-001.md",tags:[],version:"current",frontMatter:{title:"ADR-001",id:"adr-001",displayed_sidebar:"resourcesSidebar"},sidebar:"resourcesSidebar",previous:{title:"ADR Overview",permalink:"/articles/reference/adr-overview"},next:{title:"ADR-002",permalink:"/articles/reference/adr-002"}},c={},p=[{value:"Abstract",id:"abstract",level:2},{value:"DID Method Name",id:"did-method-name",level:2},{value:"DID Method Specific Identifier",id:"did-method-specific-identifier",level:2},{value:"Relationship between DIDs and Sonr wallet accounts",id:"relationship-between-dids-and-sonr-wallet-accounts",level:3},{value:"DID Document Format (JSON-LD)",id:"did-document-format-json-ld",level:2},{value:"Create",id:"create",level:2},{value:"Create",id:"create-1",level:2},{value:"Read",id:"read",level:2},{value:"Update",id:"update",level:2},{value:"Deactivate",id:"deactivate",level:2},{value:"Buying an Alias",id:"buying-an-alias",level:3},{value:"Selling an Alias",id:"selling-an-alias",level:3},{value:"Transferring Alias",id:"transferring-alias",level:3},{value:"Keep Personally Identifiable Information (PII) Private",id:"keep-personally-identifiable-information-pii-private",level:3},{value:"DID Correlation Risks and Pseudonymous DIDs",id:"did-correlation-risks-and-pseudonymous-dids",level:3}],u={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-001-did-method-specification"},"ADR-001: DID Method Specification"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/iomfscGXR1ycI_67NrLvMw"},(0,r.kt)("img",{parentName:"a",src:"https://hackmd.io/iomfscGXR1ycI_67NrLvMw/badge",alt:"hackmd-github-sync-badge"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"Sonr is a privacy focused blockchain built to reinvent how we handle identity and data transmission.\nSonr also supports DID operations.\nDIDs are created and stored in the Sonr Node, and they are used with verifiable credentials."),(0,r.kt)("p",null,"This specification describes how DIDs are managed on the Sonr."),(0,r.kt)("h2",{id:"did-method-name"},"DID Method Name"),(0,r.kt)("p",null,"The name-string is ",(0,r.kt)("inlineCode",{parentName:"p"},"snr"),"."),(0,r.kt)("p",null,"A DID must begin with the prefix: ",(0,r.kt)("inlineCode",{parentName:"p"},"did:snr")," in lowercase."),(0,r.kt)("h2",{id:"did-method-specific-identifier"},"DID Method Specific Identifier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sonr-did = "did:snr:" idstring\nidstring = 32*44(base58)\nbase58 = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "A" / "B" /\n         "C" / "D" / "E" / "F" / "G" / "H" / "J" / "K" / "L" / "M" / "N" /\n         "P" / "Q" / "R" / "S" / "T" / "U" / "V" / "W" / "X" / "Y" / "Z" /\n         "a" / "b" / "c" / "d" / "e" / "f" / "g" / "h" / "i" / "j" / "k" /\n         "m" / "n" / "o" / "p" / "q" / "r" / "s" / "t" / "u" / "v" / "w" /\n         "x" / "y" / "z"\n\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"idstring")," is a base58-encoded SHA-256 hash of a Secp256k1 public key, otherwise known as the Sonr Blockchain Wallet address.\nThis means that DIDs are case-sensitive, even though the prefix is always lower-case.\nThe Sonr Highway CLI provides a tool for generating the Secp256k1 key-pair either randomly or from a BIP44 mnemonic provided by the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm\n")),(0,r.kt)("h3",{id:"relationship-between-dids-and-sonr-wallet-accounts"},"Relationship between DIDs and Sonr wallet accounts"),(0,r.kt)("p",null,"Sonr Blockchain Wallets are integrated within every Motor powered application. The Sonr Motor is a light peer-to-peer node embedded within every decentralized application built with the Highway SDK. From here on, a Sonr Blockchain Wallet Account will be referenced as a motor."),(0,r.kt)("h2",{id:"did-document-format-json-ld"},"DID Document Format (JSON-LD)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/did/v1",\n\n    // All connected Motor Nodes for a Sonr User\n  "controller":[\n        "did:snr:123",\n    ],\n\n    // Address to Multisig wallet for all user motor nodes\n  "id": "did:snr:abc",\n\n    // Registered alias (.snr) names\n  "alsoKnownAs": [\n    "test.snr",\n    "example.snr"\n  ],\n\n    // User authenticated application credentials get stored as assertionMethod\n    "assertionMethod": [...],\n\n    // Connected Motors webauthn credentials get stored as verificationMethod\n  "verificationMethod": [\n    {\n            // Set to Motor Nodes Wallet Address\n      "controller": "did:snr:123",\n\n            // Id of Key set to unique value and operating system/architecture\n      "id": "did:snr:123#ios-arm64-1",\n\n            // JWK generated from WebAuthN Credential\n      "publicKeyJwk": {\n        "crv": "P-256",\n        "kty": "EC",\n        "x": "UANQ8pgvJT33JbrnwMiu1L1JCGQFOEm1ThaNAJcFrWA=",\n        "y": "UWm6q5n1iXyeCJLMGDInN40bkkKr8KkoTWDqJBZQXRo="\n      },\n      "type": "JsonWebKey2020"\n    }\n  ],\n\n    // User public facing services\n    "service": [{\n        // Inbound/Outbound Mailbox - Sonr Core Service\n    "id":"snr:123#mailbox",\n    "type": "EncryptedDataVault",\n        // MultiAddr of hosted IPFS node\n    "serviceEndpoint": "/ip4/159.313.1.45/tcp/57665/peer/123/snr/test"\n  }]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"controller"),"\n: Currently, the controller represents the set of DIDs associated with the top-level document for a User. In order for the controller to be valid an accompanying entry must be present in the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod")," and must conform to the *",(0,r.kt)("strong",{parentName:"p"},"*",(0,r.kt)("a",{parentName:"strong",href:"https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/"},"FIDO2 WebAuthn"),"**")," specification."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\n: The ID of the DIDDocument is created from the ",(0,r.kt)("inlineCode",{parentName:"p"},"multisignature")," key address returned from the set of all ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," \u2019s present with matching controllers. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is regenerated on every instance a controller is added or removed from the DIDDocument."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alsoKnownAs"),"\n: This property is utilized to provide resolvable aliases to the associated DIDDocument. Users purchase a name alias which is suffixed by, .snr, a resolvable TLD on the ",(0,r.kt)("a",{parentName:"p",href:"https://handshake.org/"},"Handshake Network"),". Motor nodes are packaged with the lightweight ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/handshake-org/hnsd"},"HNS Resolver"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assertionMethod"),"\n: This property is currently being used to store authenticated application credentials. When Users first access an application, they utilize the account DID in order to authenticate their session."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod"),"\n: This property is utilized for storing the individual Motor ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAuthn")," credentials. This mechanism is put into place to associate users by individual devices opposed to strictly an account based structure."),(0,r.kt)("h1",{id:"crud-operations"},"CRUD Operations"),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/create/whois\n- Owner:string\n- DidDocument:[]byte\n- WhoisType:Enum{ WhoisType_APP | WhoisType_USER }\n")),(0,r.kt)("p",null,"This method takes a DIDDocument as an input along with the did of the account calling the TX, and verifies the signature. If successful, and there is no existing WhoIs created for the user or application. Parameters include: Signature, DIDDocument, address, and WhoIsType."),(0,r.kt)("p",null,"The resulting response is a ",(0,r.kt)("inlineCode",{parentName:"p"},"WhoIs")," object containing the following payload body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "document": {\n    "@context": "<https://www.w3.org/ns/did/v1>",\n    "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "verificationMethod": [\n      {\n        "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n        "type": "Secp256k1VerificationKey2018",\n        "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n        "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n      }\n    ],\n    "authentication": [\n      "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1"\n    ]\n  },\n  "sequence": "0"\n}\n\n')),(0,r.kt)("h1",{id:"crud-operations-1"},"CRUD Operations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All transactions TX will incur a gas fee whenever read and writes are made to the store. `fees = gas ")," gas-prices`*"),(0,r.kt)("h2",{id:"create-1"},"Create"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/create/whois\n- Owner:string\n- DidDocument:[]byte\n- WhoisType:Enum{ WhoisType_APP | WhoisType_USER }\n")),(0,r.kt)("p",null,"This method takes a DIDDocument as an input along with the DID of the account calling the TX and verifies the signature. If successful, and there is no existing WhoIs created for the user or application. Parameters include: Signature, DIDDocument, address, and WhoIsType."),(0,r.kt)("h2",{id:"read"},"Read"),(0,r.kt)("p",null,"A Sonr DID Document can be looked up with three possible queries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Find a DIDDocument by ID\n(GET): /v1/registry/query/whois/:did\n- DID:string\n\n// Find a DIDDocument with the matching controller\n(GET): /v1/registry/query/whois/controller/:did\n- DID:string\n\n// Find a DIDDocument with the matching alias\n(GET): /v1/registry/query/whois/alias/:name\n- Name:string\n")),(0,r.kt)("p",null,"If the DID exists (not deactivated yet), the result is a ",(0,r.kt)("inlineCode",{parentName:"p"},"WhoIs")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "document": {\n    "@context": "<https://www.w3.org/ns/did/v1>",\n    "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "verificationMethod": [\n      {\n        "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n        "type": "Secp256k1VerificationKey2018",\n        "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n        "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n      }\n    ],\n    "authentication": [\n      "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1"\n    ]\n  },\n  "alias": ["a.snr", "b.snr"],\n    "controllers": [snr7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm],\n}\n\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")," list and ",(0,r.kt)("inlineCode",{parentName:"p"},"controller")," list for wallet addresses is returned along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),".\nIt must be included in the subsequent transaction (update/deactivate) for preventing transaction replay attacks."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"Only the DID owner can replace the DID Document using the following transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/update/whois\n- Owner:string\n- DidDocument:[]byte\n- Did:string\n")),(0,r.kt)("p",null,"This example is for adding a new public key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod")," and adding a dedicated public key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "did/MsgUpdateDID",\n  "value": {\n    "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "document": {\n      "@context": "<https://www.w3.org/ns/did/v1>",\n      "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n      "verificationMethod": [\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n        },\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key2",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "2BjcxuwijyE1om4991ANiFrwZJ3Ev5YYX9KiPKgaHmGsi"\n        }\n      ],\n      "authentication": [\n        "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key3",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "yE1om4991ANiFrwZJ3Ev5YYX9KiPKgaHmGsi2Bjcxuwij"\n        }\n      ]\n    },\n    "signature": "xtsQH3D5naHe9IXmhCnohlChwHiD0dx9PI4aPkaJPGoEznYMHmg0aBerg85ai7T2WNxxlc39uFzAxKbI4sbJCA==",\n    "verification_method_id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n    "from_address": "sonr1d58s72gu0mjkw0lkgyvr0eqzz3mv74awfsjslz"\n  }\n}\n\n')),(0,r.kt)("p",null,"Like creating DIDs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," must be generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," returned from the Read DID operation.\nIt must be signed with a private key which corresponds to the public key referred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," must be one of the key IDs specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,r.kt)("p",null,"Whenever submitting this transaction the user must query the current ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," by the Read DID operation.\n(The user can also increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," manually, but the transaction can be rejected if there are the concurrent transactions with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence"),".)"),(0,r.kt)("p",null,"The source of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," should look like (encoded with Amino):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "@context": ...,\n        "id": "did:snr:...",\n        ...\n    },\n    "sequence": "50"\n}\n\n')),(0,r.kt)("p",null,"The transaction fails if the DID has been already deactivated."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deactivate"},"Deactivate"),(0,r.kt)("p",null,"To deactivate the DID document, the DID owner should send the following transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/deactivate/whois\n- Owner:string\n- Did:string\n")),(0,r.kt)("p",null,"Sonr doesn't delete the DID document. The document is just deactivated.\nThis strategy guarantees that malicious users cannot recreate the DID,\nbecause the DID deactivation may be appropriate when a person dies or a business is terminated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "did/MsgDeactivateDID",\n  "value": {\n    "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "signature": "xtsQH3D5naHe9IXmhCnohlChwHiD0dx9PI4aPkaJPGoEznYMHmg0aBerg85ai7T2WNxxlc39uFzAxKbI4sbJCA==",\n    "verification_method_id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n    "from_address": "sonr1d58s72gu0mjkw0lkgyvr0eqzz3mv74awfsjslz"\n  }\n}\n\n')),(0,r.kt)("p",null,"This method sets the state of a particular WhoIs to be deactivated. In order to successfully perform this request, the TX creator and signature must be the same as the WhoIs owner."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," must be generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"did")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," returned from the Read DID operation.\nIt must be signed with a private key which corresponds to the public key referred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," must be one of the key IDs specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,r.kt)("p",null,"The source of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," should look like (encoded with Amino):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "did:snr:...",\n  "sequence": "50"\n}\n\n')),(0,r.kt)("p",null,"The transaction fails if the DID doesn't exist or if it has been already deactivated."),(0,r.kt)("h1",{id:"resolution-of-aliases"},"Resolution of Aliases"),(0,r.kt)("p",null,"User\u2019s can purchase alias identifiers with the ",(0,r.kt)("inlineCode",{parentName:"p"},".snr")," domain namespace in order to have applications resolve their DIDDocument. This is how to purchase a new alias on behalf of a user."),(0,r.kt)("h3",{id:"buying-an-alias"},"Buying an Alias"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/buy/alias/name\n- Creator:string\n- Did:string\n- Amount:int32\n- Name:string\n")),(0,r.kt)("p",null,"This method purchases a user alias .snr domain i.e.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"{example}.snr"),", and inserts it into the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"alsoKnownAs"),"\xa0field of the app's DIDDocument. Request fails when the DIDDoc type doesn\u2019t match, wallet balance is too low, the alias has already been purchased, creator is not listed as controller of DIDDoc, or WhoIs is deactivated. The purchase of a user alias .snr domain will have a cost associated. "),(0,r.kt)("h3",{id:"selling-an-alias"},"Selling an Alias"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/sell/alias/name\n- Creator:string\n- Did:string\n- Amount:int32\n- Name:string\n")),(0,r.kt)("p",null,"This method purchases a user alias .snr domain i.e.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"{example}.snr"),", and inserts it into the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"alsoKnownAs"),"\xa0field of the app's DIDDocument. Request fails when the DIDDoc type doesn\u2019t match, wallet balance is too low, the alias has already been purchased, creator is not listed as controller of DIDDoc, or WhoIs is deactivated. The selling of a user alias .snr domain will have a cost assocaited by the Alias Owner and will incur a fee upon sale. "),(0,r.kt)("h3",{id:"transferring-alias"},"Transferring Alias"),(0,r.kt)("p",null,"In the situation that a user wants to transfer an owned alias from their DIDDocument to another peer on the network, the following method is called:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(POST): /v1/registry/transfer/alias/name\n- Creator:string\n- Did:string\n- Alias:string\n- Recipient:string\n")),(0,r.kt)("p",null,"This method transfers an existing User .snr name Alias to the specified peer. The alias is removed from the current App's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"alsoKnownAs"),"\xa0list and inserted into the new App's\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"alsoKnownAs"),"\xa0list. The transfer of an alias .snr domain will have incur a fee upon trasnfer to the specified peer."),(0,r.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n\n")),(0,r.kt)("h1",{id:"privacy-considerations"},"Privacy Considerations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section is non-normative.")),(0,r.kt)("h3",{id:"keep-personally-identifiable-information-pii-private"},"Keep Personally Identifiable Information (PII) Private"),(0,r.kt)("p",null,"A DID Document should not include Personally Identifiable Information (PII), even if it is encrypted. All personal data should be kept behind service endpoints under the control of the DID subject. For example, if a DID Document contains a URL which contains any human-meaningful information, such as a username, some personal data can be unintentionally revealed without the DID subject's consent. For more details, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#keep-personally-identifiable-information-pii-private"},"Decentralized Identifier Specification"),"."),(0,r.kt)("h3",{id:"did-correlation-risks-and-pseudonymous-dids"},"DID Correlation Risks and Pseudonymous DIDs"),(0,r.kt)("p",null,"If DID Controllers want to mitigate the risk of correlation, they should use unique DIDs for every interaction and the corresponding DID Documents should contain a unique public key. For more details, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#did-correlation-risks-and-pseudonymous-dids"},"Decentralized Identifier Specification"),"."),(0,r.kt)("h1",{id:"reference-implementations"},"Reference Implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sonr-io/blockchain"},"Sonr Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sonr-io/core"},"Sonr core/did"))),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-spec/"},"https://w3c-ccg.github.io/did-spec/"))))}h.isMDXComponent=!0}}]);