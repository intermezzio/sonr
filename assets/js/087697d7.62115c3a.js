"use strict";(self.webpackChunksonr_docs=self.webpackChunksonr_docs||[]).push([[1341],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=o.createContext({}),d=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},p=function(n){var e=d(n.components);return o.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),m=d(t),u=a,_=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return t?o.createElement(_,r(r({ref:e},p),{},{components:t})):o.createElement(_,r({ref:e},p))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,r=new Array(s);r[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:a,r[1]=i;for(var d=2;d<s;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5889:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var o=t(7462),a=t(3366),s=(t(7294),t(3905)),r=["components"],i={title:"Setup Validator",id:"setup-validator",displayed_sidebar:"runSidebar"},l="Adding a Validator Node",d={unversionedId:"run-nodes/setup-validator",id:"run-nodes/setup-validator",title:"Setup Validator",description:"After creating your first node (which will be the proposer) you will need to hit the genesis endpoint of the node.",source:"@site/articles/run-nodes/setup-validator.md",sourceDirName:"run-nodes",slug:"/run-nodes/setup-validator",permalink:"/articles/run-nodes/setup-validator",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/articles/run-nodes/setup-validator.md",tags:[],version:"current",frontMatter:{title:"Setup Validator",id:"setup-validator",displayed_sidebar:"runSidebar"},sidebar:"runSidebar"},p={},c=[{value:"Call to Initial Node",id:"call-to-initial-node",level:2},{value:"Get genesis file from proposer node",id:"get-genesis-file-from-proposer-node",level:3},{value:"Install sonrd Binary to Validator Node",id:"install-sonrd-binary-to-validator-node",level:2},{value:"Tendermint Documentation",id:"tendermint-documentation",level:2},{value:"Deployment from Validator Node",id:"deployment-from-validator-node",level:2},{value:"Deployment from Proposer Node",id:"deployment-from-proposer-node",level:2},{value:"Proposer -&gt; config.toml",id:"proposer---configtoml",level:2},{value:"Adding the peer",id:"adding-the-peer",level:3},{value:"Adding Persistent Peer into the Validator Node",id:"adding-persistent-peer-into-the-validator-node",level:2},{value:"Add the proposer node as a peer on the validator node",id:"add-the-proposer-node-as-a-peer-on-the-validator-node",level:3},{value:"Run the validator node",id:"run-the-validator-node",level:2}],m={toc:c};function u(n){var e=n.components,t=(0,a.Z)(n,r);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"adding-a-validator-node"},"Adding a Validator Node"),(0,s.kt)("p",null,"After creating your first node (which will be the proposer) you will need to hit the genesis endpoint of the node."),(0,s.kt)("h2",{id:"call-to-initial-node"},"Call to Initial Node"),(0,s.kt)("h3",{id:"get-genesis-file-from-proposer-node"},"Get genesis file from proposer node"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-curl"},"  GET http://0.0.0.0:26657/genesis\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Make sure to replace with the proper proposer IP")),(0,s.kt)("p",null,"Return Will Look As Follows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": -1,\n    "result": {\n        "genesis": {\n            "genesis_time": "2022-04-04T17:57:31.550285Z",\n            "chain_id": "sonr",\n            "initial_height": "1",\n            "consensus_params": {\n                "block": {\n                    "max_bytes": "22020096",\n                    "max_gas": "-1",\n                    "time_iota_ms": "1000"\n                },\n                "evidence": {\n                    "max_age_num_blocks": "100000",\n                    "max_age_duration": "172800000000000",\n                    "max_bytes": "1048576"\n                },\n                "validator": {\n                    "pub_key_types": [\n                        "ed25519"\n                    ]\n                },\n                "version": {}\n            },\n            "app_hash": "",\n            "app_state": {\n                "auth": {\n                    "params": {\n                        "max_memo_characters": "256",\n                        "tx_sig_limit": "7",\n                        "tx_size_cost_per_byte": "10",\n                        "sig_verify_cost_ed25519": "590",\n                        "sig_verify_cost_secp256k1": "1000"\n                    },\n                    "accounts": [\n                        {\n                            "@type": "/cosmos.auth.v1beta1.BaseAccount",\n                            "address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                            "pub_key": null,\n                            "account_number": "0",\n                            "sequence": "0"\n                        },\n                        {\n                            "@type": "/cosmos.auth.v1beta1.BaseAccount",\n                            "address": "snr1mtq5lfpfwgk782jwkue52psmwhqrwf93pjk2lz",\n                            "pub_key": null,\n                            "account_number": "0",\n                            "sequence": "0"\n                        }\n                    ]\n                },\n                "bank": {\n                    "params": {\n                        "send_enabled": [],\n                        "default_send_enabled": true\n                    },\n                    "balances": [\n                        {\n                            "address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                            "coins": [\n                                {\n                                    "denom": "snr",\n                                    "amount": "20000"\n                                },\n                                {\n                                    "denom": "stake",\n                                    "amount": "200000000"\n                                }\n                            ]\n                        },\n                        {\n                            "address": "snr1mtq5lfpfwgk782jwkue52psmwhqrwf93pjk2lz",\n                            "coins": [\n                                {\n                                    "denom": "snr",\n                                    "amount": "10000"\n                                },\n                                {\n                                    "denom": "stake",\n                                    "amount": "100000000"\n                                }\n                            ]\n                        }\n                    ],\n                    "supply": [],\n                    "denom_metadata": []\n                },\n                "blob": {\n                    "params": {},\n                    "thereIsList": []\n                },\n                "bucket": {\n                    "params": {},\n                    "whichIsList": []\n                },\n                "capability": {\n                    "index": "1",\n                    "owners": []\n                },\n                "channel": {\n                    "howIsList": [],\n                    "params": {}\n                },\n                "crisis": {\n                    "constant_fee": {\n                        "amount": "1000",\n                        "denom": "stake"\n                    }\n                },\n                "distribution": {\n                    "delegator_starting_infos": [],\n                    "delegator_withdraw_infos": [],\n                    "fee_pool": {\n                        "community_pool": []\n                    },\n                    "outstanding_rewards": [],\n                    "params": {\n                        "base_proposer_reward": "0.010000000000000000",\n                        "bonus_proposer_reward": "0.040000000000000000",\n                        "community_tax": "0.020000000000000000",\n                        "withdraw_addr_enabled": true\n                    },\n                    "previous_proposer": "",\n                    "validator_accumulated_commissions": [],\n                    "validator_current_rewards": [],\n                    "validator_historical_rewards": [],\n                    "validator_slash_events": []\n                },\n                "evidence": {\n                    "evidence": []\n                },\n                "feegrant": {\n                    "allowances": []\n                },\n                "genutil": {\n                    "gen_txs": [\n                        {\n                            "body": {\n                                "messages": [\n                                    {\n                                        "@type": "/cosmos.staking.v1beta1.MsgCreateValidator",\n                                        "description": {\n                                            "moniker": "mynode",\n                                            "identity": "",\n                                            "website": "",\n                                            "security_contact": "",\n                                            "details": ""\n                                        },\n                                        "commission": {\n                                            "rate": "0.100000000000000000",\n                                            "max_rate": "0.200000000000000000",\n                                            "max_change_rate": "0.010000000000000000"\n                                        },\n                                        "min_self_delegation": "1",\n                                        "delegator_address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                                        "validator_address": "snrvaloper19hpavu3wlggjmcmp8wj4n6vehc8vtuc979fvg8",\n                                        "pubkey": {\n                                            "@type": "/cosmos.crypto.ed25519.PubKey",\n                                            "key": "jtNoxMnorE0Z7h2zet5C2je4Q/uglxXt+Te8sra68BY="\n                                        },\n                                        "value": {\n                                            "denom": "stake",\n                                            "amount": "100000000"\n                                        }\n                                    }\n                                ],\n                                "memo": "ff2063aec84c4f15eff6c9c673523d33fd7e2160@192.168.0.167:26656",\n                                "timeout_height": "0",\n                                "extension_options": [],\n                                "non_critical_extension_options": []\n                            },\n                            "auth_info": {\n                                "signer_infos": [\n                                    {\n                                        "public_key": {\n                                            "@type": "/cosmos.crypto.secp256k1.PubKey",\n                                            "key": "Ar9URUi9cKAbvoyms5AkJuOM+Hb10kCN8waeERgIUEpG"\n                                        },\n                                        "mode_info": {\n                                            "single": {\n                                                "mode": "SIGN_MODE_DIRECT"\n                                            }\n                                        },\n                                        "sequence": "0"\n                                    }\n                                ],\n                                "fee": {\n                                    "amount": [],\n                                    "gas_limit": "200000",\n                                    "payer": "",\n                                    "granter": ""\n                                }\n                            },\n                            "signatures": [\n                                "LQNQURhHPfDDR75YRr0kmszBRTRAG6NNWNpbzEucUIg0nc6wpNOFJ/1aEWZgbJCoYQYiuXYZaNuSORIXRCfgKg=="\n                            ]\n                        }\n                    ]\n                },\n                "gov": {\n                    "deposit_params": {\n                        "max_deposit_period": "172800s",\n                        "min_deposit": [\n                            {\n                                "amount": "10000000",\n                                "denom": "stake"\n                            }\n                        ]\n                    },\n                    "deposits": [],\n                    "proposals": [],\n                    "starting_proposal_id": "1",\n                    "tally_params": {\n                        "quorum": "0.334000000000000000",\n                        "threshold": "0.500000000000000000",\n                        "veto_threshold": "0.334000000000000000"\n                    },\n                    "votes": [],\n                    "voting_params": {\n                        "voting_period": "172800s"\n                    }\n                },\n                "ibc": {\n                    "channel_genesis": {\n                        "ack_sequences": [],\n                        "acknowledgements": [],\n                        "channels": [],\n                        "commitments": [],\n                        "next_channel_sequence": "0",\n                        "receipts": [],\n                        "recv_sequences": [],\n                        "send_sequences": []\n                    },\n                    "client_genesis": {\n                        "clients": [],\n                        "clients_consensus": [],\n                        "clients_metadata": [],\n                        "create_localhost": false,\n                        "next_client_sequence": "0",\n                        "params": {\n                            "allowed_clients": [\n                                "06-solomachine",\n                                "07-tendermint"\n                            ]\n                        }\n                    },\n                    "connection_genesis": {\n                        "client_connection_paths": [],\n                        "connections": [],\n                        "next_connection_sequence": "0",\n                        "params": {\n                            "max_expected_time_per_block": "30000000000"\n                        }\n                    }\n                },\n                "mint": {\n                    "minter": {\n                        "annual_provisions": "0.000000000000000000",\n                        "inflation": "0.130000000000000000"\n                    },\n                    "params": {\n                        "blocks_per_year": "6311520",\n                        "goal_bonded": "0.670000000000000000",\n                        "inflation_max": "0.200000000000000000",\n                        "inflation_min": "0.070000000000000000",\n                        "inflation_rate_change": "0.130000000000000000",\n                        "mint_denom": "stake"\n                    }\n                },\n                "object": {\n                    "params": {},\n                    "whatIsList": []\n                },\n                "params": null,\n                "registry": {\n                    "params": {},\n                    "whoIsList": []\n                },\n                "slashing": {\n                    "missed_blocks": [],\n                    "params": {\n                        "downtime_jail_duration": "600s",\n                        "min_signed_per_window": "0.500000000000000000",\n                        "signed_blocks_window": "100",\n                        "slash_fraction_double_sign": "0.050000000000000000",\n                        "slash_fraction_downtime": "0.010000000000000000"\n                    },\n                    "signing_infos": []\n                },\n                "staking": {\n                    "delegations": [],\n                    "exported": false,\n                    "last_total_power": "0",\n                    "last_validator_powers": [],\n                    "params": {\n                        "bond_denom": "stake",\n                        "historical_entries": 10000,\n                        "max_entries": 7,\n                        "max_validators": 100,\n                        "unbonding_time": "1814400s"\n                    },\n                    "redelegations": [],\n                    "unbonding_delegations": [],\n                    "validators": []\n                },\n                "transfer": {\n                    "denom_traces": [],\n                    "params": {\n                        "receive_enabled": true,\n                        "send_enabled": true\n                    },\n                    "port_id": "transfer"\n                },\n                "upgrade": {},\n                "vault": {\n                    "params": {}\n                },\n                "vesting": {}\n            }\n        }\n    }\n}\n')),(0,s.kt)("p",null,"Copy the following from the return"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n            "genesis_time": "2022-04-04T17:57:31.550285Z",\n            "chain_id": "sonr",\n            "initial_height": "1",\n            "consensus_params": {\n                "block": {\n                    "max_bytes": "22020096",\n                    "max_gas": "-1",\n                    "time_iota_ms": "1000"\n                },\n                "evidence": {\n                    "max_age_num_blocks": "100000",\n                    "max_age_duration": "172800000000000",\n                    "max_bytes": "1048576"\n                },\n                "validator": {\n                    "pub_key_types": [\n                        "ed25519"\n                    ]\n                },\n                "version": {}\n            },\n            "app_hash": "",\n            "app_state": {\n                "auth": {\n                    "params": {\n                        "max_memo_characters": "256",\n                        "tx_sig_limit": "7",\n                        "tx_size_cost_per_byte": "10",\n                        "sig_verify_cost_ed25519": "590",\n                        "sig_verify_cost_secp256k1": "1000"\n                    },\n                    "accounts": [\n                        {\n                            "@type": "/cosmos.auth.v1beta1.BaseAccount",\n                            "address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                            "pub_key": null,\n                            "account_number": "0",\n                            "sequence": "0"\n                        },\n                        {\n                            "@type": "/cosmos.auth.v1beta1.BaseAccount",\n                            "address": "snr1mtq5lfpfwgk782jwkue52psmwhqrwf93pjk2lz",\n                            "pub_key": null,\n                            "account_number": "0",\n                            "sequence": "0"\n                        }\n                    ]\n                },\n                "bank": {\n                    "params": {\n                        "send_enabled": [],\n                        "default_send_enabled": true\n                    },\n                    "balances": [\n                        {\n                            "address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                            "coins": [\n                                {\n                                    "denom": "snr",\n                                    "amount": "20000"\n                                },\n                                {\n                                    "denom": "stake",\n                                    "amount": "200000000"\n                                }\n                            ]\n                        },\n                        {\n                            "address": "snr1mtq5lfpfwgk782jwkue52psmwhqrwf93pjk2lz",\n                            "coins": [\n                                {\n                                    "denom": "snr",\n                                    "amount": "10000"\n                                },\n                                {\n                                    "denom": "stake",\n                                    "amount": "100000000"\n                                }\n                            ]\n                        }\n                    ],\n                    "supply": [],\n                    "denom_metadata": []\n                },\n                "blob": {\n                    "params": {},\n                    "thereIsList": []\n                },\n                "bucket": {\n                    "params": {},\n                    "whichIsList": []\n                },\n                "capability": {\n                    "index": "1",\n                    "owners": []\n                },\n                "channel": {\n                    "howIsList": [],\n                    "params": {}\n                },\n                "crisis": {\n                    "constant_fee": {\n                        "amount": "1000",\n                        "denom": "stake"\n                    }\n                },\n                "distribution": {\n                    "delegator_starting_infos": [],\n                    "delegator_withdraw_infos": [],\n                    "fee_pool": {\n                        "community_pool": []\n                    },\n                    "outstanding_rewards": [],\n                    "params": {\n                        "base_proposer_reward": "0.010000000000000000",\n                        "bonus_proposer_reward": "0.040000000000000000",\n                        "community_tax": "0.020000000000000000",\n                        "withdraw_addr_enabled": true\n                    },\n                    "previous_proposer": "",\n                    "validator_accumulated_commissions": [],\n                    "validator_current_rewards": [],\n                    "validator_historical_rewards": [],\n                    "validator_slash_events": []\n                },\n                "evidence": {\n                    "evidence": []\n                },\n                "feegrant": {\n                    "allowances": []\n                },\n                "genutil": {\n                    "gen_txs": [\n                        {\n                            "body": {\n                                "messages": [\n                                    {\n                                        "@type": "/cosmos.staking.v1beta1.MsgCreateValidator",\n                                        "description": {\n                                            "moniker": "mynode",\n                                            "identity": "",\n                                            "website": "",\n                                            "security_contact": "",\n                                            "details": ""\n                                        },\n                                        "commission": {\n                                            "rate": "0.100000000000000000",\n                                            "max_rate": "0.200000000000000000",\n                                            "max_change_rate": "0.010000000000000000"\n                                        },\n                                        "min_self_delegation": "1",\n                                        "delegator_address": "snr19hpavu3wlggjmcmp8wj4n6vehc8vtuc93yk643",\n                                        "validator_address": "snrvaloper19hpavu3wlggjmcmp8wj4n6vehc8vtuc979fvg8",\n                                        "pubkey": {\n                                            "@type": "/cosmos.crypto.ed25519.PubKey",\n                                            "key": "jtNoxMnorE0Z7h2zet5C2je4Q/uglxXt+Te8sra68BY="\n                                        },\n                                        "value": {\n                                            "denom": "stake",\n                                            "amount": "100000000"\n                                        }\n                                    }\n                                ],\n                                "memo": "ff2063aec84c4f15eff6c9c673523d33fd7e2160@192.168.0.167:26656",\n                                "timeout_height": "0",\n                                "extension_options": [],\n                                "non_critical_extension_options": []\n                            },\n                            "auth_info": {\n                                "signer_infos": [\n                                    {\n                                        "public_key": {\n                                            "@type": "/cosmos.crypto.secp256k1.PubKey",\n                                            "key": "Ar9URUi9cKAbvoyms5AkJuOM+Hb10kCN8waeERgIUEpG"\n                                        },\n                                        "mode_info": {\n                                            "single": {\n                                                "mode": "SIGN_MODE_DIRECT"\n                                            }\n                                        },\n                                        "sequence": "0"\n                                    }\n                                ],\n                                "fee": {\n                                    "amount": [],\n                                    "gas_limit": "200000",\n                                    "payer": "",\n                                    "granter": ""\n                                }\n                            },\n                            "signatures": [\n                                "LQNQURhHPfDDR75YRr0kmszBRTRAG6NNWNpbzEucUIg0nc6wpNOFJ/1aEWZgbJCoYQYiuXYZaNuSORIXRCfgKg=="\n                            ]\n                        }\n                    ]\n                },\n                "gov": {\n                    "deposit_params": {\n                        "max_deposit_period": "172800s",\n                        "min_deposit": [\n                            {\n                                "amount": "10000000",\n                                "denom": "stake"\n                            }\n                        ]\n                    },\n                    "deposits": [],\n                    "proposals": [],\n                    "starting_proposal_id": "1",\n                    "tally_params": {\n                        "quorum": "0.334000000000000000",\n                        "threshold": "0.500000000000000000",\n                        "veto_threshold": "0.334000000000000000"\n                    },\n                    "votes": [],\n                    "voting_params": {\n                        "voting_period": "172800s"\n                    }\n                },\n                "ibc": {\n                    "channel_genesis": {\n                        "ack_sequences": [],\n                        "acknowledgements": [],\n                        "channels": [],\n                        "commitments": [],\n                        "next_channel_sequence": "0",\n                        "receipts": [],\n                        "recv_sequences": [],\n                        "send_sequences": []\n                    },\n                    "client_genesis": {\n                        "clients": [],\n                        "clients_consensus": [],\n                        "clients_metadata": [],\n                        "create_localhost": false,\n                        "next_client_sequence": "0",\n                        "params": {\n                            "allowed_clients": [\n                                "06-solomachine",\n                                "07-tendermint"\n                            ]\n                        }\n                    },\n                    "connection_genesis": {\n                        "client_connection_paths": [],\n                        "connections": [],\n                        "next_connection_sequence": "0",\n                        "params": {\n                            "max_expected_time_per_block": "30000000000"\n                        }\n                    }\n                },\n                "mint": {\n                    "minter": {\n                        "annual_provisions": "0.000000000000000000",\n                        "inflation": "0.130000000000000000"\n                    },\n                    "params": {\n                        "blocks_per_year": "6311520",\n                        "goal_bonded": "0.670000000000000000",\n                        "inflation_max": "0.200000000000000000",\n                        "inflation_min": "0.070000000000000000",\n                        "inflation_rate_change": "0.130000000000000000",\n                        "mint_denom": "stake"\n                    }\n                },\n                "object": {\n                    "params": {},\n                    "whatIsList": []\n                },\n                "params": null,\n                "registry": {\n                    "params": {},\n                    "whoIsList": []\n                },\n                "slashing": {\n                    "missed_blocks": [],\n                    "params": {\n                        "downtime_jail_duration": "600s",\n                        "min_signed_per_window": "0.500000000000000000",\n                        "signed_blocks_window": "100",\n                        "slash_fraction_double_sign": "0.050000000000000000",\n                        "slash_fraction_downtime": "0.010000000000000000"\n                    },\n                    "signing_infos": []\n                },\n                "staking": {\n                    "delegations": [],\n                    "exported": false,\n                    "last_total_power": "0",\n                    "last_validator_powers": [],\n                    "params": {\n                        "bond_denom": "stake",\n                        "historical_entries": 10000,\n                        "max_entries": 7,\n                        "max_validators": 100,\n                        "unbonding_time": "1814400s"\n                    },\n                    "redelegations": [],\n                    "unbonding_delegations": [],\n                    "validators": []\n                },\n                "transfer": {\n                    "denom_traces": [],\n                    "params": {\n                        "receive_enabled": true,\n                        "send_enabled": true\n                    },\n                    "port_id": "transfer"\n                },\n                "upgrade": {},\n                "vault": {\n                    "params": {}\n                },\n                "vesting": {}\n            }\n        }\n')),(0,s.kt)("h2",{id:"install-sonrd-binary-to-validator-node"},"Install sonrd Binary to Validator Node"),(0,s.kt)("p",null,"Download the sonrd binary and run the init command to create the following files"),(0,s.kt)("p",null,"You can also copy app.toml, client.toml, config.toml & genesis.json from the proposer node as a secondary choice."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},"The files go as follows:\n    1. addrbook.json\n    2. app.toml\n    3. client.toml\n    4. config.toml\n    5. genesis.json\n    6. node_key.json\n    7. priv_validator_key.json\n")),(0,s.kt)("h2",{id:"tendermint-documentation"},"Tendermint Documentation"),(0,s.kt)("p",null,"Install Tendermint\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.35/introduction/install.html"},"Tendermint Installation")),(0,s.kt)("p",null,"Follow creation of validator node via Documentation\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.35/nodes/validators.html"},"Tendermint Validator Documentation")),(0,s.kt)("h2",{id:"deployment-from-validator-node"},"Deployment from Validator Node"),(0,s.kt)("p",null,"Run Initialization of Validator"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"  tendermint init validator\n")),(0,s.kt)("p",null,"Use the files created from .tendermint/config/genesis.json and copy the validator array into the proposer node via the genesis.json file"),(0,s.kt)("h2",{id:"deployment-from-proposer-node"},"Deployment from Proposer Node"),(0,s.kt)("p",null,"Grab the Node ID from the proposer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"  ./sonrd tendermint show-node-id\n")),(0,s.kt)("h2",{id:"proposer---configtoml"},"Proposer -> config.toml"),(0,s.kt)("p",null,"Head to line 188 in config.toml"),(0,s.kt)("h3",{id:"adding-the-peer"},"Adding the peer"),(0,s.kt)("p",null,"The peer structure is the node ID @ IP of validator node and port. Example below"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Text"},"  ff2063aec84c4f15eff6c9c673523d33fd7e2160@0.0.0.0:26656\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Make sure to add the proper IP address of the validator node")),(0,s.kt)("h2",{id:"adding-persistent-peer-into-the-validator-node"},"Adding Persistent Peer into the Validator Node"),(0,s.kt)("p",null,"Follow the same steps as above, head to the genesis.json file on the validator node, copy the genesis.json file from the proposer node and paste into the file."),(0,s.kt)("h3",{id:"add-the-proposer-node-as-a-peer-on-the-validator-node"},"Add the proposer node as a peer on the validator node"),(0,s.kt)("p",null,"Follow the same steps, use the node ID from the proposer node and paste NODE","_","ID\\:IP\\:PORT into line 188 on coonfig.toml"),(0,s.kt)("h2",{id:"run-the-validator-node"},"Run the validator node"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"  ./sonrd start\n")),(0,s.kt)("p",null,"You should see the validator start to catch up to the proposer node and start validating new blocks!"))}u.isMDXComponent=!0}}]);