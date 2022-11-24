import * as _131 from "./applications/transfer/v1/genesis";
import * as _132 from "./applications/transfer/v1/query";
import * as _133 from "./applications/transfer/v1/transfer";
import * as _134 from "./applications/transfer/v1/tx";
import * as _135 from "./core/channel/v1/channel";
import * as _136 from "./core/channel/v1/genesis";
import * as _137 from "./core/channel/v1/query";
import * as _138 from "./core/channel/v1/tx";
import * as _139 from "./core/client/v1/client";
import * as _140 from "./core/client/v1/genesis";
import * as _141 from "./core/client/v1/query";
import * as _142 from "./core/client/v1/tx";
import * as _143 from "./core/commitment/v1/commitment";
import * as _144 from "./core/connection/v1/connection";
import * as _145 from "./core/connection/v1/genesis";
import * as _146 from "./core/connection/v1/query";
import * as _147 from "./core/connection/v1/tx";
import * as _148 from "./core/types/v1/genesis";
import * as _149 from "./lightclients/localhost/v1/localhost";
import * as _150 from "./lightclients/solomachine/v1/solomachine";
import * as _151 from "./lightclients/tendermint/v1/tendermint";
import * as _270 from "./applications/transfer/v1/tx.amino";
import * as _271 from "./core/channel/v1/tx.amino";
import * as _272 from "./core/client/v1/tx.amino";
import * as _273 from "./core/connection/v1/tx.amino";
import * as _274 from "./applications/transfer/v1/tx.registry";
import * as _275 from "./core/channel/v1/tx.registry";
import * as _276 from "./core/client/v1/tx.registry";
import * as _277 from "./core/connection/v1/tx.registry";
import * as _278 from "./applications/transfer/v1/query.lcd";
import * as _279 from "./core/channel/v1/query.lcd";
import * as _280 from "./core/client/v1/query.lcd";
import * as _281 from "./core/connection/v1/query.lcd";
import * as _282 from "./applications/transfer/v1/query.rpc.Query";
import * as _283 from "./core/channel/v1/query.rpc.Query";
import * as _284 from "./core/client/v1/query.rpc.Query";
import * as _285 from "./core/connection/v1/query.rpc.Query";
import * as _286 from "./applications/transfer/v1/tx.rpc.msg";
import * as _287 from "./core/channel/v1/tx.rpc.msg";
import * as _288 from "./core/client/v1/tx.rpc.msg";
import * as _289 from "./core/connection/v1/tx.rpc.msg";
import * as _296 from "./lcd";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._270,
        ..._274,
        ..._278,
        ..._282,
        ..._286
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._135,
        ..._136,
        ..._137,
        ..._138,
        ..._271,
        ..._275,
        ..._279,
        ..._283,
        ..._287
      };
    }
    export namespace client {
      export const v1 = { ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._272,
        ..._276,
        ..._280,
        ..._284,
        ..._288
      };
    }
    export namespace commitment {
      export const v1 = { ..._143
      };
    }
    export namespace connection {
      export const v1 = { ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._273,
        ..._277,
        ..._281,
        ..._285,
        ..._289
      };
    }
    export namespace types {
      export const v1 = { ..._148
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._149
      };
    }
    export namespace solomachine {
      export const v1 = { ..._150
      };
    }
    export namespace tendermint {
      export const v1 = { ..._151
      };
    }
  }
  export const ClientFactory = { ..._296,
    ..._297,
    ..._298
  };
}