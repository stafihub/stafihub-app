import * as _152 from "./abci/types";
import * as _153 from "./crypto/keys";
import * as _154 from "./crypto/proof";
import * as _155 from "./libs/bits/types";
import * as _156 from "./p2p/types";
import * as _157 from "./types/block";
import * as _158 from "./types/evidence";
import * as _159 from "./types/params";
import * as _160 from "./types/types";
import * as _161 from "./types/validator";
import * as _162 from "./version/types";
export namespace tendermint {
  export const abci = { ..._152
  };
  export const crypto = { ..._153,
    ..._154
  };
  export namespace libs {
    export const bits = { ..._155
    };
  }
  export const p2p = { ..._156
  };
  export const types = { ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._161
  };
  export const version = { ..._162
  };
}