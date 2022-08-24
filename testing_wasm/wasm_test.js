import {mnemonic} from "./wallet.js";
import {NftTestEngine} from "./nft_test.js";
import {main_addr} from "./constants.js";

// This will setup the NFT 721 contract we need for creating the marketplace
let NFT721 = new NftTestEngine(
    mnemonic,
    main_addr,
    "TEST",
    "TEST"
)

await NFT721.setup()
console.log(NFT721.contract_address)

