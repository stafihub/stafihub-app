//@ts-nocheck
import * as _0 from "../bridge/genesis";
import * as _1 from "../bridge/params";
import * as _2 from "../bridge/proposal";
import * as _3 from "../bridge/query";
import * as _4 from "../bridge/tx";
import * as _5 from "../claim/genesis";
import * as _6 from "../claim/params";
import * as _7 from "../claim/query";
import * as _8 from "../claim/tx";
import * as _9 from "../ledger/genesis";
import * as _10 from "../ledger/ledger";
import * as _11 from "../ledger/proposal";
import * as _12 from "../ledger/query";
import * as _13 from "../ledger/tx";
import * as _14 from "../mining/genesis";
import * as _15 from "../mining/models";
import * as _16 from "../mining/params";
import * as _17 from "../mining/query";
import * as _18 from "../mining/tx";
import * as _19 from "../rdex/genesis";
import * as _20 from "../rdex/models";
import * as _21 from "../rdex/params";
import * as _22 from "../rdex/query";
import * as _23 from "../rdex/tx";
import * as _24 from "../rmintreward/genesis";
import * as _25 from "../rmintreward/models";
import * as _26 from "../rmintreward/params";
import * as _27 from "../rmintreward/query";
import * as _28 from "../rmintreward/tx";
import * as _163 from "../bridge/tx.amino";
import * as _164 from "../claim/tx.amino";
import * as _165 from "../ledger/tx.amino";
import * as _166 from "../mining/tx.amino";
import * as _167 from "../rdex/tx.amino";
import * as _168 from "../rmintreward/tx.amino";
import * as _169 from "../bridge/tx.registry";
import * as _170 from "../claim/tx.registry";
import * as _171 from "../ledger/tx.registry";
import * as _172 from "../mining/tx.registry";
import * as _173 from "../rdex/tx.registry";
import * as _174 from "../rmintreward/tx.registry";
import * as _175 from "../bridge/query.lcd";
import * as _176 from "../claim/query.lcd";
import * as _177 from "../ledger/query.lcd";
import * as _178 from "../mining/query.lcd";
import * as _179 from "../rdex/query.lcd";
import * as _180 from "../rmintreward/query.lcd";
import * as _181 from "../bridge/query.rpc.Query";
import * as _182 from "../claim/query.rpc.Query";
import * as _183 from "../ledger/query.rpc.Query";
import * as _184 from "../mining/query.rpc.Query";
import * as _185 from "../rdex/query.rpc.Query";
import * as _186 from "../rmintreward/query.rpc.Query";
import * as _187 from "../bridge/tx.rpc.msg";
import * as _188 from "../claim/tx.rpc.msg";
import * as _189 from "../ledger/tx.rpc.msg";
import * as _190 from "../mining/tx.rpc.msg";
import * as _191 from "../rdex/tx.rpc.msg";
import * as _192 from "../rmintreward/tx.rpc.msg";
import * as _290 from "./lcd";
import * as _291 from "./rpc.query";
import * as _292 from "./rpc.tx";
export namespace stafihub {
  export namespace stafihub {
    export const bridge = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._163,
      ..._169,
      ..._175,
      ..._181,
      ..._187
    };
    export const claim = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._164,
      ..._170,
      ..._176,
      ..._182,
      ..._188
    };
    export const ledger = { ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._165,
      ..._171,
      ..._177,
      ..._183,
      ..._189
    };
    export const mining = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._166,
      ..._172,
      ..._178,
      ..._184,
      ..._190
    };
    export const rdex = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._167,
      ..._173,
      ..._179,
      ..._185,
      ..._191
    };
    export const rmintreward = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._168,
      ..._174,
      ..._180,
      ..._186,
      ..._192
    };
  }
  export const ClientFactory = { ..._290,
    ..._291,
    ..._292
  };
}