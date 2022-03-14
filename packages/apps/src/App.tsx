import React from "react";
import { MainLayout } from "./layout/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { RAsset } from "./pages/RAsset";
import { RTokenHome } from "./pages/RTokenHome";
import { StakeLayout } from "./layout/StakeLayout";
import { StakeHome } from "./pages/StakeHome";
import { StakeStatus } from "./pages/StakeStatus";
import { StakeRecovery } from "./pages/StakeRecovery";
import { StakeReward } from "./pages/StakeReward";
import { useDispatch } from "react-redux";
import { setCurrentNetwork } from "./redux/reducers/AppSlice";
import { cosmosConfig } from "@stafihub/apps-config";
import { StakeRedeem } from "./pages/StakeRedeem";

function App() {
  const dispatch = useDispatch();
  dispatch(setCurrentNetwork(cosmosConfig.terra));

  return (
    <div className="flex leading-none justify-center">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/rAsset" element={<RAsset />} />

          <Route path="/rToken" element={<RTokenHome />} />

          <Route path="/stake/:tokenName" element={<StakeLayout />}>
            <Route index element={<StakeHome />} />

            <Route path="status" element={<StakeStatus />} />

            <Route path="reward" element={<StakeReward />} />

            <Route path="recovery" element={<StakeRecovery />} />

            <Route path="redeem" element={<StakeRedeem />} />
          </Route>

          <Route path="/" element={<Navigate replace to="/rAsset" />} />
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
