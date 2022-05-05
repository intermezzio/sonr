"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"basicsSidebar":[{"type":"link","label":"Introduction","href":"/articles/introduction","docId":"introduction"},{"type":"link","label":"Why Sonr?","href":"/articles/why-sonr","docId":"why-sonr"},{"type":"link","label":"How It Works","href":"/articles/how-it-works","docId":"how-it-works"},{"type":"link","label":"The Sonr Stack","href":"/articles/sonr-stack","docId":"sonr-stack"},{"type":"category","label":"Advanced","items":[{"type":"link","label":"Identifiers","href":"/articles/advanced/identifiers","docId":"advanced/identifiers"},{"type":"link","label":"Privacy","href":"/articles/advanced/privacy","docId":"advanced/privacy"},{"type":"link","label":"Security","href":"/articles/advanced/security","docId":"advanced/security"},{"type":"link","label":"Token","href":"/articles/advanced/token","docId":"advanced/token"}],"collapsible":true,"collapsed":true}],"motorSidebar":[{"type":"link","label":"Access & Authentication","href":"/articles/motor-node/access-authentication","docId":"motor-node/access-authentication"},{"type":"link","label":"Discovery","href":"/articles/motor-node/discovery","docId":"motor-node/discovery"},{"type":"link","label":"Transmission","href":"/articles/motor-node/transmission","docId":"motor-node/transmission"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/articles/motor-node/installation","docId":"motor-node/installation"}],"collapsible":true,"collapsed":false}],"highwaySidebar":[{"type":"link","label":"Using the CLI","href":"/articles/highway-sdk/using-cli","docId":"highway-sdk/using-cli"},{"type":"category","label":"Modules","items":[{"type":"link","label":"Registry","href":"/articles/highway-sdk/registry","docId":"highway-sdk/registry"},{"type":"link","label":"Objects","href":"/articles/highway-sdk/objects","docId":"highway-sdk/objects"},{"type":"link","label":"Channels","href":"/articles/highway-sdk/channels","docId":"highway-sdk/channels"},{"type":"link","label":"Buckets","href":"/articles/highway-sdk/buckets","docId":"highway-sdk/buckets"}],"collapsible":true,"collapsed":false}],"runSidebar":[{"type":"link","label":"Setup Validator","href":"/articles/run-nodes/setup-validator","docId":"run-nodes/setup-validator"}],"resourcesSidebar":[{"type":"link","label":"ADR-001","href":"/articles/reference/adr-001","docId":"reference/adr-001"},{"type":"link","label":"ADR-002","href":"/articles/reference/adr-002","docId":"reference/adr-002"}]},"docs":{"advanced/identifiers":{"id":"advanced/identifiers","title":"Identifiers","description":"Sonr uses the handshake protocol to register subdomains on the .snr/ TLD -- Top-Level-Domain. Using a .snr/ instead of a traditional username was an idea that came to fruition when we realized how much we disliked passwords and not having a genuine identity on the internet. Right now 90% of all social logins on the internet are proxied through Facebook and Google. We believe that ownership of data should reside in the people, not the services that facilitate it.","sidebar":"basicsSidebar"},"advanced/privacy":{"id":"advanced/privacy","title":"Privacy","description":"Our protocols are built on top of block chain technology, letting us take advantage of it\'s distributive anonymous nature. All data stored is denormalized. Writes on our chain are only related by did, and publicKey. With each message sent on our network handshaked, with TCP/TLS.&#x20;","sidebar":"basicsSidebar"},"advanced/security":{"id":"advanced/security","title":"Security","description":"Both of Sonr\'s Highwawy and Motor Nodes require 3 separate pairs of keys to interact with the Network. An Account Key, Link Key, and Group Key.","sidebar":"basicsSidebar"},"advanced/token":{"id":"advanced/token","title":"Token","description":"Online P2P exchanges between Motor Nodes have zero tolls. Outlined are some methods for the Sonr Utility Token.","sidebar":"basicsSidebar"},"highway-sdk/buckets":{"id":"highway-sdk/buckets","title":"Buckets","description":"Similar to Amazon S3 or DigitalOcean Spaces, developers can leverage our decentralized storage module for uploading either application specific assets or user specific assets. While we encourage developers to use our SDK for best results, this storage is S3-compliant.","sidebar":"highwaySidebar"},"highway-sdk/channels":{"id":"highway-sdk/channels","title":"Channels","description":"The Sonr channel module is used to store the records of the active pubsub topics associated with Applications powered by the Sonr Network. Each record contains an ChannelDoc which describes the Topic configuration and status of the channel. Each channel is required to have a set RegisteredType to pass as a payload with ChannelMessages.","sidebar":"highwaySidebar"},"highway-sdk/objects":{"id":"highway-sdk/objects","title":"Objects","description":"The Sonr object module is used to store the records of verifiable objects for a specific application powered by the Sonr Network. Each record contains an ObjectDoc which describes the type definition of the associated object.","sidebar":"highwaySidebar"},"highway-sdk/registry":{"id":"highway-sdk/registry","title":"Registry","description":"The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information.","sidebar":"highwaySidebar"},"highway-sdk/using-cli":{"id":"highway-sdk/using-cli","title":"Using the CLI","description":"The highway is a single binary which allows for interfacing with the Sonr Blockchain (see \'Using the CLI\' for information on commands). The highway is also equipped with a REST server.  The following is a diagram outlining the topology of highway and available features.","sidebar":"highwaySidebar"},"how-it-works":{"id":"how-it-works","title":"How It Works","description":"Sonr decentralizes application databases, making data universally composable and reusable across applications. The network consists of three core parts: &#x20;","sidebar":"basicsSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Imagine a world where you can sign up to get a driver\'s license for the internet. This driver\'s license would be encrypted on the Sonr network blockchain retaining a record book of all your devices and data quickly guaranteeing you universal validity. Only you will be able to access your record book with your driver\u2019s license.","sidebar":"basicsSidebar"},"motor-node/access-authentication":{"id":"motor-node/access-authentication","title":"Access & Authentication","description":"We think authentication should be simple, yet secure. The Sonr network uses s.","sidebar":"motorSidebar"},"motor-node/discovery":{"id":"motor-node/discovery","title":"Discovery","description":"The Sonr protocol uses various methods and fallbacks to ensure no friction discoverability when finding another user. Its node has an Exchange service that provides immediate discovery, validation, and verification access for every peer. The service operates in two separate modes: Local and Global, with the Local mode functioning similar to Airdrop and Global to Email.","sidebar":"motorSidebar"},"motor-node/installation":{"id":"motor-node/installation","title":"Installation","description":"Node.JS","sidebar":"motorSidebar"},"motor-node/transmission":{"id":"motor-node/transmission","title":"Transmission","description":"We believe that the most neglected aspect of the current internet is File Transfer. Simply put, there\'s been little change in how file transfer has worked since the invention of Mediafire. Right now sharing files is equivalent to mailing a letter to your next-door neighbor instead of just handing it to them yourself.","sidebar":"motorSidebar"},"reference/adr-001":{"id":"reference/adr-001","title":"ADR-001","description":"Table of Contents","sidebar":"resourcesSidebar"},"reference/adr-002":{"id":"reference/adr-002","title":"ADR-002","description":"Table of Contents","sidebar":"resourcesSidebar"},"run-nodes/setup-validator":{"id":"run-nodes/setup-validator","title":"Setup Validator","description":"After creating your first node (which will be the proposer) you will need to hit the genesis endpoint of the node.","sidebar":"runSidebar"},"sonr-stack":{"id":"sonr-stack","title":"The Sonr Stack","description":"The Sonr Node has two different modes","sidebar":"basicsSidebar"},"why-sonr":{"id":"why-sonr","title":"Why Sonr?","description":"Sonr\'s decentralized realtime network provides Web3 developers with a toolset that makes it possible to quickly deploy scalable Web3 applications with verifiable data that can be reused and shared across all Sonr powered applications.","sidebar":"basicsSidebar"}}}')}}]);