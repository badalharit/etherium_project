# etherium_project

------------------------------------------
-----------------TRUFFLE------------------
------------------------------------------
> truffle compile // It'll compile all the contracts at once
> truffle migrate // To make the contract live through Ganache
> truffle migrate --reset // To re-create the contract & make it live through Ganache
> truffle migrate --network ropsten // To make the contract live through Metamask with Ropsten
> truffle migrate --network ropsten --reset // To re-create the contract & make it live through Metamask with Ropsten

/*
 * LOG's Start
 */
 
 Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\demo.sol
> Artifacts written to C:\xampp\htdocs\Etherium\web\build\contracts
> Compiled successfully using:
   > value sent:          0 ETH
   > total cost:          0.000774335991415566 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11802204)
   > confirmation number: 2 (block: 11802205)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000774335991415566 ETH


2_demo_migration.js
===================

   Replacing 'demo'
   ----------------
   > transaction hash:    0x236cb7692380b40fe399d7031e0e81295213390e6da37136b22a6be81321a615
   > Blocks: 1            Seconds: 22
   > contract address:    0x5b21f3299a3BD2a156Cd989cD06f6891873De4E0
   > block number:        11802208
   > block timestamp:     1642000885
   > account:             0x8e753E9175E554D685eCE6A0fF3D54e08f8fBd38
   > balance:             4.998549348731373412
   > gas used:            156607 (0x263bf)
   > gas price:           3.358296695 gwei
   > value sent:          0 ETH
   > total cost:          0.000525932770513865 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11802209)
   > confirmation number: 2 (block: 11802210)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000525932770513865 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.001300268761929431 ETH

/*
 * LOG's End
 */

------------------------------------------
-------------React + Truffle--------------
------------------------------------------

$ truffle compile // To compile the contracts
$ truffle migrate --reset // To force migrate it through Ganache

/*
 * Log Start
 */

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\SimpleStorage.sol
> Artifacts written to C:\xampp\htdocs\Etherium\web\frontend\client\src\contracts
> Compiled successfully using:
   - solc: 0.8.11+commit.d7f03943.Emscripten.clang



Starting migrations...
======================
> Network name:    'ganache'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x4326b6b007c6aaffad8740852455e5b74cb067478f687e9c5889fa8b01eebc9c
   > Blocks: 0            Seconds: 0
   > contract address:    0x4311c8884eb81938ce165487A4E892BFd8Bc8026
   > block number:        9
   > block timestamp:     1642003108
   > account:             0xea8993f2efB6d061Bded5a67de06B24E6044aD2a
   > balance:             99.97694414
   > gas used:            201843 (0x31473)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00403686 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00403686 ETH


2_deploy_contracts.js
=====================

   Replacing 'SimpleStorage'
   -------------------------
   > transaction hash:    0x8851288d5759daeee92fef71b1ff9ca5d3e2cb03d679661ecb4ec74e549a9861
   > Blocks: 0            Seconds: 0
   > contract address:    0xAA273cf522F3Ef7ea5d35317102EbF71C18D5D86
   > block number:        11
   > block timestamp:     1642003109
   > account:             0xea8993f2efB6d061Bded5a67de06B24E6044aD2a
   > balance:             99.97358076
   > gas used:            125653 (0x1ead5)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00251306 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00251306 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.00654992 ETH

/*
 * Log End
 */

 > npm start // To trigger the React app