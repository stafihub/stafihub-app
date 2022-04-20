import { ScrollToTop } from "@stafihub/react-components";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { StakeSidebar } from "../components/StakeSidebar";
import { ProgressModal } from "../modals/ProgressModal";

export const MainLayout = () => {
  return (
    <div className="bg-black-900 h-screen max-w-[1920px] flex w-full relative">
      <ScrollToTop />

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="overflow-auto flex-1">
          <Outlet />
        </div>
      </div>

      <StakeSidebar />

      <ProgressModal />
    </div>
  );
};
