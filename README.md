## NODE version
14.15.4


## Upgrading Command

truffle migrate --network eth

## Upgrading Error

Error: New storage layout is incompatible

../project:/contracts/V2/TransferManagerV2.sol:111: Inserted `royaltyRegister`
  > New variables should be placed after all existing inherited variables

../project:/contracts/V2/TransferManagerV2.sol:112: Upgraded `__gap` to an incompatible type
  - Bad storage gap resize from 46 to 45
    Size decrease must match with corresponding variable inserts