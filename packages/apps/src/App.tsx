import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useInit } from "./hooks/useInit";
import { MainLayout } from "./layout/MainLayout";
import { StakeLayout } from "./layout/StakeLayout";
import { FeeStation } from "./pages/FeeStation";
import { RAsset } from "./pages/RAsset";
import { RTokenHome } from "./pages/RTokenHome";
import { StakeHome } from "./pages/StakeHome";
import { StakeRecovery } from "./pages/StakeRecovery";
import { StakeRedeem } from "./pages/StakeRedeem";
import { StakeReward } from "./pages/StakeReward";
import { StakeStatus } from "./pages/StakeStatus";
import { SnackbarProvider } from "notistack";
import { Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SnackbarUtilsConfigurator } from "./utils/snackbarUtils";
import { StakeUnbond } from "./pages/StakeUnbond";
import { IBCBridge } from "./pages/IBCBridge";

const useStyles = makeStyles({
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
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      TransitionComponent={Fade as React.ComponentType}
      classes={{
        variantSuccess: classes.successSnackbar,
      }}
    >
      <SnackbarUtilsConfigurator />

      <div className="flex justify-center">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/rAsset" element={<RAsset />} />

            <Route path="/rToken" element={<RTokenHome />} />

            <Route path="/:rToken/stake" element={<StakeLayout />}>
              <Route index element={<StakeHome />} />

              <Route path="status" element={<StakeStatus />} />

              <Route path="reward" element={<StakeReward />} />

              <Route path="unbond" element={<StakeUnbond />} />

              <Route path="recovery" element={<StakeRecovery />} />

              <Route path="redeem" element={<StakeRedeem />} />
            </Route>

            <Route path="/feeStation" element={<FeeStation />} />

            <Route path="/rBridge" element={<IBCBridge />} />

            <Route path="/" element={<Navigate replace to="/rToken" />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </SnackbarProvider>
  );
}

export default App;
