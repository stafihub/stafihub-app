import stafihubLogo from "../assets/images/stafihub_logo.svg";
import rAssetIcon from "../assets/images/icon_rAsset.svg";
import rAssetIconActive from "../assets/images/icon_rAsset_active.svg";
import rTokenIcon from "../assets/images/icon_rToken.svg";
import rTokenIconActive from "../assets/images/icon_rToken_active.svg";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="w-[160px] h-screen bg-gradient-to-b from-[#0f0f0f] via-[#131313] to-[#0a0a0a] flex flex-col items-center overflow-auto">
      <img
        src={stafihubLogo}
        alt="logo"
        className="mt-6 ml-4 mb-[25px]  w-[116px] h-[38px] self-start"
      />

      <SidebarItem
        defaultIcon={rAssetIcon}
        activeIcon={rAssetIconActive}
        title="rAsset"
        targetUrl="/rAsset"
      />

      <SidebarItem
        defaultIcon={rTokenIcon}
        activeIcon={rTokenIconActive}
        title="rToken"
        targetUrl="/rToken"
      />
    </div>
  );
};
