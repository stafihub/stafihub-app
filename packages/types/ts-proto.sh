#!/bin/bash

protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src" \
  --proto_path="./proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "./proto/ledger/tx.proto" \
  "./proto/ledger/query.proto" \
  "./proto/ledger/ledger.proto" \
  "./proto/cosmos/bank/v1beta1/query.proto" \
  "./proto/cosmos/staking/v1beta1/query.proto" \
  "./proto/ibc/applications/transfer/v1/query.proto" \
  "./proto/ibc/applications/transfer/v1/tx.proto" \
  "./proto/ibc/core/channel/v1/query.proto" \
  "./proto/ibc/lightclients/tendermint/v1/tendermint.proto" 