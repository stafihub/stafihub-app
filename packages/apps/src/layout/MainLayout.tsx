import { Sidebar } from "@stafihub/react-components";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const MainLayout = () => {
  return (
    <div className="bg-black-900 h-screen flex w-full-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
