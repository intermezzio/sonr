"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[2288],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(h,o(o({ref:n},l),{},{components:t})):a.createElement(h,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},936:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],d={},s="ADR-001: Sonr DID Method Specification",c={unversionedId:"reference/ADR-001",id:"reference/ADR-001",title:"ADR-001: Sonr DID Method Specification",description:"Table of Contents",source:"@site/articles/reference/ADR-001.md",sourceDirName:"reference",slug:"/reference/ADR-001",permalink:"/articles/reference/ADR-001",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/reference/ADR-001.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Abstract",id:"abstract",level:2},{value:"DID Method Name",id:"did-method-name",level:2},{value:"DID Method Specific Identifier",id:"did-method-specific-identifier",level:2},{value:"Relationship between DIDs and Sonr accounts",id:"relationship-between-dids-and-sonr-accounts",level:3},{value:"DID Document Format (JSON-LD)",id:"did-document-format-json-ld",level:2},{value:"CRUD Operations",id:"crud-operations",level:2},{value:"Create (Register)",id:"create-register",level:3},{value:"Read",id:"read",level:3},{value:"Update",id:"update",level:3},{value:"Deactivate",id:"deactivate",level:3},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Replay Attack",id:"replay-attack",level:3},{value:"Privacy Considerations",id:"privacy-considerations",level:2},{value:"Keep Personally Identifiable Information (PII) Private",id:"keep-personally-identifiable-information-pii-private",level:3},{value:"DID Correlation Risks and Pseudonymous DIDs",id:"did-correlation-risks-and-pseudonymous-dids",level:3},{value:"Reference Implementations",id:"reference-implementations",level:2},{value:"References",id:"references",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adr-001-sonr-did-method-specification"},"ADR-001: Sonr DID Method Specification"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* [Introduction](#introduction)\n* [Specification](#specification)\n* [Example](#example)\n* [Conclusion](#conclusion)\n")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"Sonr is a privacy focused blockchain built to reinvent how we handle identity and data transmission. Sonr also supports DID operations. DIDs are created and stored in the Sonr Node, and they are used with verifiable credentials."),(0,r.kt)("p",null,"This specification describes how DIDs are managed on the Sonr."),(0,r.kt)("h2",{id:"did-method-name"},"DID Method Name"),(0,r.kt)("p",null,"The namestring is ",(0,r.kt)("inlineCode",{parentName:"p"},"snr"),"."),(0,r.kt)("p",null,"A DID must begin with the prefix: ",(0,r.kt)("inlineCode",{parentName:"p"},"did:snr")," in lowercase."),(0,r.kt)("h2",{id:"did-method-specific-identifier"},"DID Method Specific Identifier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'sonr-did = "did:snr:" idstring\nidstring = 32*44(base58)\nbase58 = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "A" / "B" /\n         "C" / "D" / "E" / "F" / "G" / "H" / "J" / "K" / "L" / "M" / "N" /\n         "P" / "Q" / "R" / "S" / "T" / "U" / "V" / "W" / "X" / "Y" / "Z" /\n         "a" / "b" / "c" / "d" / "e" / "f" / "g" / "h" / "i" / "j" / "k" /\n         "m" / "n" / "o" / "p" / "q" / "r" / "s" / "t" / "u" / "v" / "w" /\n         "x" / "y" / "z"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"idstring")," is a base58-encoded SHA-256 hash of a Secp256k1 public key. It means that DIDs are case-sensitive, even though the prefix is always lower-case. The Sonr SDK provides a tool for generating the Secp256k1 key-pair either randomly or from a mnemonic provided by the user."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm\n")),(0,r.kt)("h3",{id:"relationship-between-dids-and-sonr-accounts"},"Relationship between DIDs and Sonr accounts"),(0,r.kt)("p",null,"DIDs are independent of any Sonr accounts. Sonr accounts are necessary only for sending transactions to Sonr to create/update/deactivate the DIDs."),(0,r.kt)("p",null,"It means that Sonr accounts are not used to verify the DID ownership. To prove the DID ownership, users must include a signature to the transaction. The signature must be generated with the private key which corresponds to one of the public keys registered in the DID document. The signature is different from the Sonr transaction signature generated with the private key of the Sonr account."),(0,r.kt)("p",null,"The details are described below."),(0,r.kt)("h2",{id:"did-document-format-json-ld"},"DID Document Format (JSON-LD)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/did/v1",\n  "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n  "verificationMethod": [\n    {\n      "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n      "type": "Secp256k1VerificationKey2018",\n      "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n      "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n    }\n  ],\n  "authentication": [\n    "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1"\n  ]\n}\n')),(0,r.kt)("p",null,"Currently, the ",(0,r.kt)("inlineCode",{parentName:"p"},"controller")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod")," must be equal to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/2020/WD-did-core-20200907/#dfn-did-subjects"},"DID subject"),". It would be extended later."),(0,r.kt)("p",null,"The Key IDs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," are references to one of public keys specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod"),". The spec of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," would be extended in the future."),(0,r.kt)("p",null,"The Sonr DID Document doesn't contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," field currently. It would be extended soon."),(0,r.kt)("h2",{id:"crud-operations"},"CRUD Operations"),(0,r.kt)("h3",{id:"create-register"},"Create (Register)"),(0,r.kt)("p",null,"To create a DID Document in Sonr, the following transaction should be submitted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "did/MsgCreateDID",\n  "value": {\n    "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "document": {\n      "@context": "https://www.w3.org/ns/did/v1",\n      "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n      "verificationMethod": [\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n        }\n      ],\n      "authentication": [\n        "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1"\n      ]\n    },\n    "signature": "FLOgUBcMEjKs/o1lgu4Y5Ump/2xee0D0tLsrY9+YVMUD/G/qbSHo3lOJ4Jv2zsDn1grcbIYSQsOvoBTbYXXg3g==",\n    "verification_method_id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n    "from_address": "sonr1d58s72gu0mjkw0lkgyvr0eqzz3mv74awfsjslz"\n  }\n}\n')),(0,r.kt)("p",null,"The transaction must have a ",(0,r.kt)("inlineCode",{parentName:"p"},"did")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," which will be stored in the Sonr blockchain."),(0,r.kt)("p",null,"It also must have a ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," for proving the ownership of the DID.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," must be generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," and the sequence ",(0,r.kt)("inlineCode",{parentName:"p"},'"0"'),".\nIt must be signed with a private key which corresponds to the public key referred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," must be one of the key IDs specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,r.kt)("p",null,"The source of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," should look like (encoded with Amino):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "@context": ...,\n        "id": "did:snr:...",\n        ...\n    },\n    "sequence": "0"\n}\n')),(0,r.kt)("p",null,"The transaction also must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"from_address")," which is a Sonr account.\nAlso, it must be signed with the private key of the Sonr account, so that Sonr can verify the transaction."),(0,r.kt)("p",null,"The transaction fails if the same DID exists or if it has been already deactivated."),(0,r.kt)("h3",{id:"read"},"Read"),(0,r.kt)("p",null,"A Sonr DID Document can be looked up by the following query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm"\n}\n')),(0,r.kt)("p",null,"If the DID exists (not deactivated yet), the result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "document": {\n    "@context": "https://www.w3.org/ns/did/v1",\n    "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "verificationMethod": [\n      {\n        "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n        "type": "Secp256k1VerificationKey2018",\n        "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n        "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n      }\n    ],\n    "authentication": [\n      "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1"\n    ]\n  },\n  "sequence": "0"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," is returned along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),".\nIt must be included in the subsequent transaction (update/deactivate) for preventing transaction replay attacks."),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"Only the DID owner can replace the DID Document using the following transaction."),(0,r.kt)("p",null,"This example is for adding a new public key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationMethod")," and adding a dedicated public key to the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "did/MsgUpdateDID",\n  "value": {\n    "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "document": {\n      "@context": "https://www.w3.org/ns/did/v1",\n      "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n      "verificationMethod": [\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "dBuN4i7dqwCLzSX7GHBLsfUoXw5RmWQ3DwQ9Ee4bfh5Y"\n        },\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key2",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "2BjcxuwijyE1om4991ANiFrwZJ3Ev5YYX9KiPKgaHmGsi"\n        }\n      ],\n      "authentication": [\n        "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n        {\n          "id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key3",\n          "type": "Secp256k1VerificationKey2018",\n          "controller": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n          "publicKeyBase58": "yE1om4991ANiFrwZJ3Ev5YYX9KiPKgaHmGsi2Bjcxuwij"\n        }\n      ]\n    },\n    "signature": "xtsQH3D5naHe9IXmhCnohlChwHiD0dx9PI4aPkaJPGoEznYMHmg0aBerg85ai7T2WNxxlc39uFzAxKbI4sbJCA==",\n    "verification_method_id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n    "from_address": "sonr1d58s72gu0mjkw0lkgyvr0eqzz3mv74awfsjslz"\n  }\n}\n')),(0,r.kt)("p",null,"Like creating DIDs, The ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," must be generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"document")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," returned from the Read DID operation.\nIt must be signed with a private key which corresponds to the public key referred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," must be one of the key IDs specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,r.kt)("p",null,"Whenever submitting this transaction, the user must query the current ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," by the Read DID operation.\n(The user can also increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," manually, but the transaction can be rejected if there are the concurrent transactions with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence"),".)"),(0,r.kt)("p",null,"The source of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," should look like (encoded with Amino):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "@context": ...,\n        "id": "did:snr:...",\n        ...\n    },\n    "sequence": "50"\n}\n')),(0,r.kt)("p",null,"The transaction fails if the DID has been already deactivated."),(0,r.kt)("h3",{id:"deactivate"},"Deactivate"),(0,r.kt)("p",null,"To deactivate the DID document, the DID owner should send the following transaction."),(0,r.kt)("p",null,"Sonr doesn't delete the DID document. The document is just deactivated.\nThis strategy guarantees that malicious users cannot recreate the DID,\nbecause the DID deactivation may be appropriate when a person dies or a business is terminated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "did/MsgDeactivateDID",\n  "value": {\n    "did": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",\n    "signature": "xtsQH3D5naHe9IXmhCnohlChwHiD0dx9PI4aPkaJPGoEznYMHmg0aBerg85ai7T2WNxxlc39uFzAxKbI4sbJCA==",\n    "verification_method_id": "did:snr:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm#key1",\n    "from_address": "sonr1d58s72gu0mjkw0lkgyvr0eqzz3mv74awfsjslz"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," must be generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"did")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," returned from the Read DID operation.\nIt must be signed with a private key which corresponds to the public key referred by the ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id")," must be one of the key IDs specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"document"),"."),(0,r.kt)("p",null,"The source of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," should look like (encoded with Amino):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "did:snr:...",\n  "sequence": "50"\n}\n')),(0,r.kt)("p",null,"The transaction fails if the DID doesn't exist or if it has been already deactivated."),(0,r.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n")),(0,r.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section is non-normative.")),(0,r.kt)("h3",{id:"replay-attack"},"Replay Attack"),(0,r.kt)("p",null,"To prove the DID ownership, Create/Update/Deactivate transactions must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"verification_method_id"),".\nIf malicious users can replay the transaction with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", the DID document can be modified unexpectedly."),(0,r.kt)("p",null,"To prevent replay attacks, a ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," must be included when generating the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," can be obtained by the Read DID operation."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," is monotonically incremented by the Sonr when the transaction is committed.\nThat is, malicious users cannot reuse the signature from the previous transaction committed.\nThe user must generate a new signature from the new ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence"),"."),(0,r.kt)("h2",{id:"privacy-considerations"},"Privacy Considerations"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section is non-normative.")),(0,r.kt)("h3",{id:"keep-personally-identifiable-information-pii-private"},"Keep Personally Identifiable Information (PII) Private"),(0,r.kt)("p",null,"A DID Document should not include Personally Identifiable Information (PII), even if it is encrypted. All personal data should be kept behind service endpoints under the control of the DID subject. For example, if a DID Document contains a URL which contains any human-meaningful information, such as a username, some personal data can be unintentionally revealed without the DID subject's consent. For more details, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#keep-personally-identifiable-information-pii-private"},"Decentralized Identifier Specification"),"."),(0,r.kt)("h3",{id:"did-correlation-risks-and-pseudonymous-dids"},"DID Correlation Risks and Pseudonymous DIDs"),(0,r.kt)("p",null,"If DID Controllers want to mitigate the risk of correlation, they should use unique DIDs for every interaction and the corresponding DID Documents should contain a unique public key. For more details, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#did-correlation-risks-and-pseudonymous-dids"},"Decentralized Identifier Specification"),"."),(0,r.kt)("h2",{id:"reference-implementations"},"Reference Implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sonr-io/blockchain"},"Sonr Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sonr-io/core"},"Sonr core/did"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-spec/"},"https://w3c-ccg.github.io/did-spec/"))))}m.isMDXComponent=!0}}]);