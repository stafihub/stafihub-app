import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressSidebar } from "../components/ProgressSidebar";
import { Sidebar } from "../components/Sidebar";
import { ProgressModal } from "../modals/ProgressModal";

export const MainLayout = () => {
  return (
    <div className="bg-black-900 h-screen flex w-full-screen relative">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="overflow-auto flex-1">
          <Outlet />
        </div>
      </div>

      <ProgressSidebar />

      <ProgressModal />
    </div>
  );
};
