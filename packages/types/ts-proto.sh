#!/bin/bash

protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src" \
  --proto_path="./proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "./proto/ledger/tx.proto" \
  "./proto/ledger/query.proto" \
  "./proto/ledger/ledger.proto" \
  "./proto/mining/tx.proto" \
  "./proto/mining/query.proto" \
  "./proto/mining/models.proto" \
  "./proto/rdex/tx.proto" \
  "./proto/rdex/query.proto" \
  "./proto/rdex/models.proto" \
  "./proto/claim/tx.proto" \
  "./proto/claim/query.proto" \
  "./proto/claim/params.proto" \
  "./proto/bridge/tx.proto" \
  "./proto/bridge/query.proto" \
  "./proto/bridge/params.proto" \
  "./proto/rmintreward/query.proto" \
  "./proto/rmintreward/tx.proto" \
  "./proto/cosmos/base/tendermint/v1beta1/query.proto" \
  "./proto/cosmos/bank/v1beta1/query.proto" \
  "./proto/cosmos/staking/v1beta1/query.proto" \
  "./proto/ibc/applications/transfer/v1/query.proto" \
  "./proto/ibc/applications/transfer/v1/tx.proto" \
  "./proto/ibc/core/channel/v1/query.proto" \
  "./proto/ibc/lightclients/tendermint/v1/tendermint.proto"