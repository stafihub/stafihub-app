#!/bin/bash

protoc \
  --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="./src" \
  --proto_path="./proto" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "./proto/ledger/tx.proto" \
  "./proto/ledger/query.proto" \
  "./proto/ledger/ledger.proto"