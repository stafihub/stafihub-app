import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useInit } from "./hooks/useInit";
import { MainLayout } from "./layout/MainLayout";
import { StakeLayout } from "./layout/StakeLayout";
import { RAsset } from "./pages/RAsset";
import { RTokenHome } from "./pages/RTokenHome";
import { StakeHome } from "./pages/StakeHome";
import { StakeRecovery } from "./pages/StakeRecovery";
import { StakeRedeem } from "./pages/StakeRedeem";
import { StakeReward } from "./pages/StakeReward";
import { StakeStatus } from "./pages/StakeStatus";

function App() {
  useInit();

  return (
    <div className="flex justify-center">
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
