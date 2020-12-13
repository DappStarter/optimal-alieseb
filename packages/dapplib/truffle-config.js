require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth mad minor grace open flat giggle'; 
let testAccounts = [
"0x0f3675c3ceb44aef48601f27dd3c2c2c789587281946f4c5abe26d6bccd6857b",
"0xcbef26c2d31c47cdef8bfa6143f2faa913788d8d4c2d01be6a351b987035303c",
"0xcd55b580b027f44b2a836a258d5a77d846be290b31ca0e5ff84ca07a70bb1467",
"0x600ebd5f528020c2ab34b3ac4bea7e929903e8a0cbd40bdebb120163d28c1818",
"0x3d47b3a7e791f366364245206243e2b32b09cbae0a8c8adbf379d7992186b0ce",
"0x1ba48749b98d608e985284748192497b31adab492d63b6571ab0aed613c5f6b2",
"0x8fcd71aa8d0e794c08f219da604fb72af2331ac14f842c6308f28492b55e2b6d",
"0x7b2c9ce347cedef7812f067fbb2fce6c78b33eec1b9962a179e1f2316f5ace72",
"0xb20756b355c9657faa6f3f07c7fcef61ab4de57b69abc4d3ce7dbc8e92d37095",
"0xb652336e673bf9ac135d68dbb6b9306a1f43fcd920abb3481597b70ed7eaf269"
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
            version: '^0.5.11'
        }
    }
};
