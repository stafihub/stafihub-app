import stafihubLogo from "../assets/images/stafihub_logo.svg";
import rAssetIcon from "../assets/images/icon_rAsset.svg";
import rAssetIconActive from "../assets/images/icon_rAsset_active.svg";
import rPoolIcon from "../assets/images/icon_rPool.svg";
import rPoolIconActive from "../assets/images/icon_rPool_active.svg";
import rBridgeIcon from "../assets/images/icon_rBridge.svg";
import rBridgeIconActive from "../assets/images/icon_rBridge_active.svg";
import rTokenIcon from "../assets/images/icon_rToken.svg";
import rTokenIconActive from "../assets/images/icon_rToken_active.svg";
import { useNavigate, useMatch, useLocation } from "react-router-dom";
import classNames from "classnames";
import { SidebarItem } from "@stafihub/react-components";

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matchBridge = useMatch("/rBridge");

  return (
    <div className="w-[160px] min-w-[160px] h-screen bg-gradient-to-b from-[#0f0f0f] via-[#131313] to-[#0a0a0a] flex flex-col items-center overflow-auto relative">
      <img
        src={stafihubLogo}
        alt="logo"
        className="mt-6 ml-4 mb-[25px]  w-[116px] h-[38px] self-start cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />

      <SidebarItem
        defaultIcon={rTokenIcon}
        activeIcon={rTokenIconActive}
        title="rToken"
        targetUrl="/rToken"
        match={location.pathname.includes("/rToken")}
      />

      <SidebarItem
        defaultIcon={rAssetIcon}
        activeIcon={rAssetIconActive}
        title="rAsset"
        targetUrl="/rAsset"
      />

      <div
        className={classNames(
          "mt-[25px] w-[122px] h-[42px] rounded-full flex items-center cursor-pointer",
          { "bg-[#FFEEF3]": matchBridge }
        )}
        onClick={() => navigate("/rBridge")}
      >
        <img
          src={matchBridge ? rBridgeIconActive : rBridgeIcon}
          alt="icon"
          className="w-[36px] h-[36px] rounded-full ml-[9px]"
        />

        <div
          className={classNames("text-[16px] text-white ml-[10px]", {
            "font-bold text-[#6758FF]": matchBridge,
          })}
        >
          <div>rBridge</div>
          <div className="text-[12px] scale-[0.7] origin-left">IBC</div>
        </div>
      </div>

      {/* <SidebarItem
        defaultIcon={rPoolIcon}
        activeIcon={rPoolIconActive}
        title="rPool"
        targetUrl="/rPool"
        match={
          location.pathname.includes("/rPool") ||
          location.pathname.includes("/mint")
        }
      /> */}

      <div className="absolute bottom-5 text-[12px] text-text-gray5 left-auto right-auto flex flex-col items-center">
        <div>Need FIS for fees?</div>
        <div className="mt-[1px] flex items-center">
          <div>Try our</div>
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
