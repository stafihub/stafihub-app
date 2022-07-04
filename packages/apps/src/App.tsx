import { Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useInit } from "./hooks/useInit";
import { MainLayout } from "./layout/MainLayout";
import { RPoolLayout } from "./layout/RPoolLayout";
import { RTokenV2Layout } from "./layout/RTokenV2Layout";
import { StakeLayout } from "./layout/StakeLayout";
import { StakeLayoutV2 } from "./layout/StakeLayoutV2";
import { FeeStation } from "./pages/FeeStation";
import { IBCBridge } from "./pages/IBCBridge";
import { LiquidityPrograms } from "./pages/LiquidityPrograms";
import { MintDetail } from "./pages/MintDetail";
import { MintPrograms } from "./pages/MintPrograms";
import { RAsset } from "./pages/RAsset";
import { RTokenDashboard } from "./pages/RTokenDashboard";
import { RTokenV2StakeList } from "./pages/RTokenV2StakeList";
import { StakeHome } from "./pages/StakeHome";
import { StakeRecovery } from "./pages/StakeRecovery";
import { StakeRecoveryV2 } from "./pages/StakeRecoveryV2";
import { StakeRedeem } from "./pages/StakeRedeem";
import { StakeRedeemV2 } from "./pages/StakeRedeemV2";
import { StakeReward } from "./pages/StakeReward";
import { StakeStatus } from "./pages/StakeStatus";
import { StakeUnbond } from "./pages/StakeUnbond";
import { StakeV2 } from "./pages/StakeV2";
import { ValidatorHome } from "./pages/ValidatorHome";
import { SnackbarUtilsConfigurator } from "./utils/snackbarUtils";

const useStyles = makeStyles({
  root: { marginLeft: "160px" },
  successSnackbar: {
    backgroundColor: "#6758FF !important",
    // color: "#1d1930 !important",
    fontSize: "16px !important",
    fontFamily: "Helvetica, sans-serif",
  },
});

function App() {
  useInit();
  const classes = useStyles();

  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Fade as React.ComponentType}
      classes={{
        root: classes.root,
        variantSuccess: classes.successSnackbar,
      }}
    >
      <SnackbarUtilsConfigurator />

      <div className="flex justify-center">
        <Routes>
          <Route path="/validator" element={<ValidatorHome />} />

          <Route path="/" element={<MainLayout />}>
            <Route path="/rAsset" element={<RAsset />} />

            <Route path="/rToken" element={<RTokenV2Layout />}>
              <Route index element={<RTokenV2StakeList />} />

              <Route path=":rToken/stake" element={<StakeV2 />} />

              <Route path=":rToken/dashboard" element={<RTokenDashboard />} />
            </Route>

            <Route path="/:rToken/stake" element={<StakeLayoutV2 />}>
              <Route path="redeem" element={<StakeRedeemV2 />} />
            </Route>

            <Route path="/stake" element={<StakeLayoutV2 />}>
              <Route path="recovery" element={<StakeRecoveryV2 />} />
            </Route>

            {/* <Route path="/:rToken/stake" element={<StakeLayout />}>
              <Route index element={<StakeHome />} />

              <Route path="status" element={<StakeStatus />} />

              <Route path="reward" element={<StakeReward />} />

              <Route path="unbond" element={<StakeUnbond />} />

              <Route path="recovery" element={<StakeRecovery />} />

              <Route path="redeem" element={<StakeRedeem />} />
            </Route> */}

            <Route path="/feeStation" element={<FeeStation />} />

            <Route path="/rBridge" element={<IBCBridge />} />

            <Route path="/rPool" element={<RPoolLayout />}>
              <Route index element={<MintPrograms />} />

              <Route path="mint" element={<MintPrograms />} />

              <Route path="liquidity" element={<LiquidityPrograms />} />
            </Route>

            <Route path="/mint/:rToken/:cycle" element={<MintDetail />} />

            <Route path="/" element={<Navigate replace to="/rToken" />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </SnackbarProvider>
  );
}

export default App;
