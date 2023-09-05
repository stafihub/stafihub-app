import * as _157 from "./abci/types";
import * as _158 from "./crypto/keys";
import * as _159 from "./crypto/proof";
import * as _160 from "./libs/bits/types";
import * as _161 from "./p2p/types";
import * as _162 from "./types/block";
import * as _163 from "./types/evidence";
import * as _164 from "./types/params";
import * as _165 from "./types/types";
import * as _166 from "./types/validator";
import * as _167 from "./version/types";
export namespace tendermint {
  export const abci = { ..._157
  };
  export const crypto = { ..._158,
    ..._159
  };
  export namespace libs {
    export const bits = { ..._160
    };
  }
  export const p2p = { ..._161
  };
  export const types = { ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._166
  };
  export const version = { ..._167
  };
}