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
import * as _29 from "../rvalidator/genesis";
import * as _30 from "../rvalidator/params";
import * as _31 from "../rvalidator/proposal";
import * as _32 from "../rvalidator/query";
import * as _33 from "../rvalidator/tx";
import * as _168 from "../bridge/tx.amino";
import * as _169 from "../claim/tx.amino";
import * as _170 from "../ledger/tx.amino";
import * as _171 from "../mining/tx.amino";
import * as _172 from "../rdex/tx.amino";
import * as _173 from "../rmintreward/tx.amino";
import * as _174 from "../rvalidator/tx.amino";
import * as _175 from "../bridge/tx.registry";
import * as _176 from "../claim/tx.registry";
import * as _177 from "../ledger/tx.registry";
import * as _178 from "../mining/tx.registry";
import * as _179 from "../rdex/tx.registry";
import * as _180 from "../rmintreward/tx.registry";
import * as _181 from "../rvalidator/tx.registry";
import * as _182 from "../bridge/query.lcd";
import * as _183 from "../claim/query.lcd";
import * as _184 from "../ledger/query.lcd";
import * as _185 from "../mining/query.lcd";
import * as _186 from "../rdex/query.lcd";
import * as _187 from "../rmintreward/query.lcd";
import * as _188 from "../rvalidator/query.lcd";
import * as _189 from "../bridge/query.rpc.Query";
import * as _190 from "../claim/query.rpc.Query";
import * as _191 from "../ledger/query.rpc.Query";
import * as _192 from "../mining/query.rpc.Query";
import * as _193 from "../rdex/query.rpc.Query";
import * as _194 from "../rmintreward/query.rpc.Query";
import * as _195 from "../rvalidator/query.rpc.Query";
import * as _196 from "../bridge/tx.rpc.msg";
import * as _197 from "../claim/tx.rpc.msg";
import * as _198 from "../ledger/tx.rpc.msg";
import * as _199 from "../mining/tx.rpc.msg";
import * as _200 from "../rdex/tx.rpc.msg";
import * as _201 from "../rmintreward/tx.rpc.msg";
import * as _202 from "../rvalidator/tx.rpc.msg";
import * as _300 from "./lcd";
import * as _301 from "./rpc.query";
import * as _302 from "./rpc.tx";
export namespace stafihub {
  export namespace stafihub {
    export const bridge = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._168,
      ..._175,
      ..._182,
      ..._189,
      ..._196
    };
    export const claim = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._169,
      ..._176,
      ..._183,
      ..._190,
      ..._197
    };
    export const ledger = { ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._170,
      ..._177,
      ..._184,
      ..._191,
      ..._198
    };
    export const mining = { ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._171,
      ..._178,
      ..._185,
      ..._192,
      ..._199
    };
    export const rdex = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._172,
      ..._179,
      ..._186,
      ..._193,
      ..._200
    };
    export const rmintreward = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._173,
      ..._180,
      ..._187,
      ..._194,
      ..._201
    };
    export const rvalidator = { ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._174,
      ..._181,
      ..._188,
      ..._195,
      ..._202
    };
  }
  export const ClientFactory = { ..._300,
    ..._301,
    ..._302
  };
}