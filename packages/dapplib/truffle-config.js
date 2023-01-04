require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note random upgrade hover entire oppose spy'; 
let testAccounts = [
"0x8eacb3f96eb09098d189ddea8c91287d3b258e624eda392607e73deae738b84c",
"0xacd02a750db442824d45645b0df85b33866759a797494f04a6c482452f8a6274",
"0x4fab490efa43d2fdcdfcbc13811a7145d05e0a8a8dbaa6c68f7566b0b381db6e",
"0xf836615ba42b2936ebd7c14433833d2c7058023278522f9dcebd65e5d6b2d120",
"0xb6348c123864a941a8745da9a7a4687c3ef3f9cd007fc291e1d598d4c781fb65",
"0xc37d78d3f1c2a8705f8673ea18261006afafd2992e466b0a8716164d77844e5f",
"0x88278a9362ed286755f523b5d980d8b4dd7f8b1ccc1c17d27442d25d1cfe086f",
"0x1cf7f86fe533c1f83913fb23df684ae65e14a694f0c8e7d8fe59368a2e1294be",
"0xc808211c993b62a80f020c587485beb05e6ac1b8a1e1b4d710a15484f2622ad1",
"0x8e6f30f0e7a9e0c588422038fd65250d0d8161cf12d6a40d616abe35a9ee279b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

