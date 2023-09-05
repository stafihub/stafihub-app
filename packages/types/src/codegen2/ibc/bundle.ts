import * as _136 from "./applications/transfer/v1/genesis";
import * as _137 from "./applications/transfer/v1/query";
import * as _138 from "./applications/transfer/v1/transfer";
import * as _139 from "./applications/transfer/v1/tx";
import * as _140 from "./core/channel/v1/channel";
import * as _141 from "./core/channel/v1/genesis";
import * as _142 from "./core/channel/v1/query";
import * as _143 from "./core/channel/v1/tx";
import * as _144 from "./core/client/v1/client";
import * as _145 from "./core/client/v1/genesis";
import * as _146 from "./core/client/v1/query";
import * as _147 from "./core/client/v1/tx";
import * as _148 from "./core/commitment/v1/commitment";
import * as _149 from "./core/connection/v1/connection";
import * as _150 from "./core/connection/v1/genesis";
import * as _151 from "./core/connection/v1/query";
import * as _152 from "./core/connection/v1/tx";
import * as _153 from "./core/types/v1/genesis";
import * as _154 from "./lightclients/localhost/v1/localhost";
import * as _155 from "./lightclients/solomachine/v1/solomachine";
import * as _156 from "./lightclients/tendermint/v1/tendermint";
import * as _280 from "./applications/transfer/v1/tx.amino";
import * as _281 from "./core/channel/v1/tx.amino";
import * as _282 from "./core/client/v1/tx.amino";
import * as _283 from "./core/connection/v1/tx.amino";
import * as _284 from "./applications/transfer/v1/tx.registry";
import * as _285 from "./core/channel/v1/tx.registry";
import * as _286 from "./core/client/v1/tx.registry";
import * as _287 from "./core/connection/v1/tx.registry";
import * as _288 from "./applications/transfer/v1/query.lcd";
import * as _289 from "./core/channel/v1/query.lcd";
import * as _290 from "./core/client/v1/query.lcd";
import * as _291 from "./core/connection/v1/query.lcd";
import * as _292 from "./applications/transfer/v1/query.rpc.Query";
import * as _293 from "./core/channel/v1/query.rpc.Query";
import * as _294 from "./core/client/v1/query.rpc.Query";
import * as _295 from "./core/connection/v1/query.rpc.Query";
import * as _296 from "./applications/transfer/v1/tx.rpc.msg";
import * as _297 from "./core/channel/v1/tx.rpc.msg";
import * as _298 from "./core/client/v1/tx.rpc.msg";
import * as _299 from "./core/connection/v1/tx.rpc.msg";
import * as _306 from "./lcd";
import * as _307 from "./rpc.query";
import * as _308 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._280,
        ..._284,
        ..._288,
        ..._292,
        ..._296
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._140,
        ..._141,
        ..._142,
        ..._143,
        ..._281,
        ..._285,
        ..._289,
        ..._293,
        ..._297
      };
    }
    export namespace client {
      export const v1 = { ..._144,
        ..._145,
        ..._146,
        ..._147,
        ..._282,
        ..._286,
        ..._290,
        ..._294,
        ..._298
      };
    }
    export namespace commitment {
      export const v1 = { ..._148
      };
    }
    export namespace connection {
      export const v1 = { ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._283,
        ..._287,
        ..._291,
        ..._295,
        ..._299
      };
    }
    export namespace types {
      export const v1 = { ..._153
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._154
      };
    }
    export namespace solomachine {
      export const v1 = { ..._155
      };
    }
    export namespace tendermint {
      export const v1 = { ..._156
      };
    }
  }
  export const ClientFactory = { ..._306,
    ..._307,
    ..._308
  };
}