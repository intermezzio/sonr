"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Registry",id:"registry",displayed_sidebar:"highwaySidebar"},c=void 0,l={unversionedId:"highway-sdk/registry",id:"highway-sdk/registry",title:"Registry",description:"The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information.",source:"@site/articles/highway-sdk/registry.md",sourceDirName:"highway-sdk",slug:"/highway-sdk/registry",permalink:"/articles/highway-sdk/registry",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/highway-sdk/registry.md",tags:[],version:"current",frontMatter:{title:"Registry",id:"registry",displayed_sidebar:"highwaySidebar"},sidebar:"highwaySidebar",previous:{title:"Using the CLI",permalink:"/articles/highway-sdk/using-cli"},next:{title:"Objects",permalink:"/articles/highway-sdk/objects"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>RegisterName()</code> - Register&#39;s a new &#39;.snr&#39; domain name for an account",id:"registername---registers-a-new-snr-domain-name-for-an-account",level:3},{value:"<code>RegisterApplication()</code> - Register&#39;s a new Application for the Sonr Network",id:"registerapplication---registers-a-new-application-for-the-sonr-network",level:3},{value:"<code>AccessName()</code> - Accesses a particular name essentially a &quot;Login&quot; function",id:"accessname---accesses-a-particular-name-essentially-a-login-function",level:3},{value:"<code>AccessApplication()</code> - Accesses a particular application essentially a &quot;Register&quot; function",id:"accessapplication---accesses-a-particular-application-essentially-a-register-function",level:3},{value:"Record Type: <code>WhoIs</code>",id:"record-type-whois",level:2},{value:"Status Codes",id:"status-codes",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The record type utilized in the ",(0,i.kt)("strong",{parentName:"p"},"Registry module")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"WhoIs")," type. This type provides both an interface to utilize WebAuthn credentials and a means to access the record's DIDDocument."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Blockchain Methods supplied by Registry Module. Full implementation is still a work in progress.")),(0,i.kt)("h3",{id:"registername---registers-a-new-snr-domain-name-for-an-account"},(0,i.kt)("inlineCode",{parentName:"h3"},"RegisterName()")," - Register's a new '.snr' domain name for an account"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) NameToRegister     : The name to register\n- (`string`) Creator            : The Account Address signing this message\n- (`Credential`) Credential     : Webauthn credential to use for registration\n- (`map`) Metadata              : Metadata to attach to the `WhoIs` record\n")),(0,i.kt)("h3",{id:"registerapplication---registers-a-new-application-for-the-sonr-network"},(0,i.kt)("inlineCode",{parentName:"h3"},"RegisterApplication()")," - Register's a new Application for the Sonr Network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) Creator                : The Account Address signing this message\n- (`Credential`) Credential         : Webauthn credential to use for registration\n- (`string`) ApplicationName        : The Name of the Application being registered\n- (`string`) ApplicationDescription : Short about description of the App\n- (`string`) ApplicationURL         : Website/Homepage of the App\n- (`string`) ApplicationCategory    : Category of the Application Type\n")),(0,i.kt)("h3",{id:"accessname---accesses-a-particular-name-essentially-a-login-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"AccessName()"),' - Accesses a particular name essentially a "Login" function'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) Creator            : The Account Address signing this message\n- (`Credential`) Credential     : Webauthn credential to use for registration\n- (`string`) Name               : The name to authenticate and retreive data\n")),(0,i.kt)("h3",{id:"accessapplication---accesses-a-particular-application-essentially-a-register-function"},(0,i.kt)("inlineCode",{parentName:"h3"},"AccessApplication()"),' - Accesses a particular application essentially a "Register" function'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) AppName                : The Name of the Application being accessed\n- (`string`) Creator                : The Account Address signing this message\n- (`Credential`) Credential         : Webauthn Credential of the authenticated user\n")),(0,i.kt)("h2",{id:"record-type-whois"},"Record Type: ",(0,i.kt)("inlineCode",{parentName:"h2"},"WhoIs")),(0,i.kt)("p",null,"``"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-none"},"- ('string') Name           : Name is the registered name of the User or Application\n- ('string') DID            : DID is the DID of the account\n- ('bytes') Document       : Document is the DID Document of the registered name and account encoded as JSON\n- ('string') Creator        : Creator is the Account Address of the creator of the DID Document\n- ('Credential') Credentials    : Credentials are the biometric info of the registered name and account encoded with public key\n- ('Type') Type           : Type is the type of the registered name\n- ('string') MetaData       : Additional Metadata for associated WhoIs\n- ('string') Timestamp      : Timestamp is the time of the last update of the DID Document\n- ('string') IsActive       : IsActive is the status of the DID Document\n- ('Enum') Type             : Type is the type of the registered name\n\n")),(0,i.kt)("h2",{id:"status-codes"},"Status Codes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-azcli"},"200 - SUCCESS\n300 - MULTIPLE CHOICE\n304 - NOT MODIFIED\n400 - BAD REQUEST\n401 - NOT AUTHORIZED\n")))}g.isMDXComponent=!0}}]);