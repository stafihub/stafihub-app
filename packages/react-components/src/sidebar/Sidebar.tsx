import stafihubLogo from "../assets/images/stafihub_logo.svg";
import rAssetIcon from "../assets/images/icon_rAsset.svg";
import rAssetIconActive from "../assets/images/icon_rAsset_active.svg";
import rTokenIcon from "../assets/images/icon_rToken.svg";
import rTokenIconActive from "../assets/images/icon_rToken_active.svg";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[160px] h-screen bg-gradient-to-b from-[#0f0f0f] via-[#131313] to-[#0a0a0a] flex flex-col items-center overflow-auto relative">
      <img
        src={stafihubLogo}
        alt="logo"
        className="mt-6 ml-4 mb-[25px]  w-[116px] h-[38px] self-start"
      />

      {/* <SidebarItem
        defaultIcon={rAssetIcon}
        activeIcon={rAssetIconActive}
        title="rAsset"
        targetUrl="/rAsset"
      /> */}

      <SidebarItem
        defaultIcon={rTokenIcon}
        activeIcon={rTokenIconActive}
        title="rToken"
        targetUrl="/rToken"
      />

      <div className="absolute bottom-48 text-[12px] text-text-gray5 left-auto right-auto flex flex-col items-center">
        <div>Run out of FIS fee?</div>
        <div className="mt-[1px] flex items-center">
          <div>Try</div>
          <div
            className="ml-1 text-primary underline cursor-pointer"
            onClick={() => navigate("/feeStation")}
          >
            Fee Station
          </div>
        </div>
      </div>
    </div>
  );
};
