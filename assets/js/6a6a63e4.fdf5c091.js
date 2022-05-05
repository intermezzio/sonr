"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[776],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,k=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Buckets",id:"buckets",displayed_sidebar:"highwaySidebar"},c=void 0,u={unversionedId:"highway-sdk/buckets",id:"highway-sdk/buckets",title:"Buckets",description:"Similar to Amazon S3 or DigitalOcean Spaces, developers can leverage our decentralized storage module for uploading either application specific assets or user specific assets. While we encourage developers to use our SDK for best results, this storage is S3-compliant.",source:"@site/articles/highway-sdk/buckets.md",sourceDirName:"highway-sdk",slug:"/highway-sdk/buckets",permalink:"/articles/highway-sdk/buckets",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/highway-sdk/buckets.md",tags:[],version:"current",frontMatter:{title:"Buckets",id:"buckets",displayed_sidebar:"highwaySidebar"},sidebar:"highwaySidebar",previous:{title:"Channels",permalink:"/articles/highway-sdk/channels"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Bucket Types",id:"bucket-types",level:3},{value:"Usage",id:"usage",level:2},{value:"<code>CreateBucket()</code> - Creates a new bucket implementation for a given application",id:"createbucket---creates-a-new-bucket-implementation-for-a-given-application",level:3},{value:"<code>UpdateBucket()</code> - Modifies the bucket configuration and/or updates the bucket objects",id:"updatebucket---modifies-the-bucket-configuration-andor-updates-the-bucket-objects",level:3},{value:"Status Codes",id:"status-codes",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Similar to Amazon S3 or DigitalOcean Spaces, developers can leverage our decentralized storage module for uploading either application specific assets or user specific assets. While we encourage developers to use our SDK for best results, this storage is S3-compliant."),(0,a.kt)("p",null,"The Sonr bucket module is used to record the defined collections of Objects utilized by an Application on the Sonr Network. A bucket can be either public access, private access, or restricted access based on Developer configuration. A bucket is used to help organize similar objects for a given application."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The record type utilized in the ",(0,a.kt)("strong",{parentName:"p"},"Bucket module")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"WhichIs")," type. This type provides both an interface to utilize VerifiableCredentials and modify the BucketDoc type definition"),(0,a.kt)("h3",{id:"bucket-types"},"Bucket Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"App-specific bucket")," -- a bucket created by the developer containing visual assets and other media germane to the dApp.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User-specific bucket")," -- a bucket contrived through user-created data, facilitated by an ",(0,a.kt)("strong",{parentName:"p"},"Object")," or ",(0,a.kt)("strong",{parentName:"p"},"Channel"),"."))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Blockchain Methods supplied by Channel Module. Full implementation is still a work in progress.")),(0,a.kt)("h3",{id:"createbucket---creates-a-new-bucket-implementation-for-a-given-application"},(0,a.kt)("inlineCode",{parentName:"h3"},"CreateBucket()")," - Creates a new bucket implementation for a given application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) Creator                : The Account Address signing this message\n- (`Session`) Session               : The Session for the authenticated user\n- (`string`) Label                  : Name of the bucket defined by developer\n- (`string`) Description            : Description of the bucket defined by developer\n- (`string`) Kind                   : Functionality of the bucket i.e. ('public', 'private', 'restricted') *WIP*\n- (`List`) InitialObjects           : The initial list of objects to add to the bucket\n")),(0,a.kt)("h3",{id:"updatebucket---modifies-the-bucket-configuration-andor-updates-the-bucket-objects"},(0,a.kt)("inlineCode",{parentName:"h3"},"UpdateBucket()")," - Modifies the bucket configuration and/or updates the bucket objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Text"},"- (`string`) Creator                : The Account Address signing this message\n- (`Session`) Session               : The Session for the authenticated user\n- (`string`) Label                  : Name of the bucket defined by developer\n- (`string`) Description            : Description of the bucket defined by developer\n- (`List`) AddedObjects             : The list of objects to add to the bucket\n- (`List`) RemovedObjects           : The list of objects to remove from the bucket\n")),(0,a.kt)("h2",{id:"status-codes"},"Status Codes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-azcli"},"200 - SUCCESS\n300 - MULTIPLE CHOICE\n304 - NOT MODIFIED\n400 - BAD REQUEST\n401 - NOT AUTHORIZED\n\n")))}b.isMDXComponent=!0}}]);