import { getShortAddress } from "@stafihub/apps-util";
import classNames from "classnames";
import { CustomLoading } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import iconClose from "../assets/images/icon_close_bold.svg";
import iconSuccess from "../assets/images/icon_success.png";
import sidebarProgressIcon from "../assets/images/sidebar_progress.svg";
import { useSidebarProgressProps } from "../hooks/useSidebarProgressProps";
import { setSidebarProgressProps } from "../redux/reducers/TxSlice";
import { openLink } from "../utils/common";

export const ProgressSidebar = () => {
  const dispatch = useDispatch();
  const sidebarProgressProps = useSidebarProgressProps();

  return (
    <div
      className={classNames(
        "absolute z-10 right-0 top-24 w-[253px] h-[610px] overflow-auto bg-[#252525] rounded-md px-3 py-2 animate-siderbar_progress_show flex flex-col items-start",
        { hidden: !sidebarProgressProps.visible }
      )}
    >
      <img
        src={iconClose}
        alt="close"
        className="w-4 cursor-pointer"
        onClick={() => {
          dispatch(setSidebarProgressProps({ visible: false }));
        }}
      />

      <div className="mt-[-8px] self-center flex items-center">
        <img src={sidebarProgressIcon} alt="icon" className="w-10" />
        <div className="ml-1 text-white font-bold text-[14px]">
          Liquidity Process
        </div>
      </div>

      {sidebarProgressProps.items?.map((item, index) => (
        <div className="mt-9 self-stretch" key={item.name}>
          <div className="flex items-center">
            <div className="text-white text-[12px] w-4 h-4 rounded-full border-solid border-[0.5px] border-white flex items-center justify-center">
              {index + 1}
            </div>

            <div className="ml-2 text-white font-bold text-[16px] italic">
              {item.name}
            </div>
          </div>

          <div className="mt-2 ml-6 mr-6 flex items-center justify-between">
            <div className="text-[#8f8f8f] text-[12px] 5px]">Brocasting…</div>

            <div className="">
              {item.status === 0 ? (
                <CustomLoading color="#FF7FA7" size={14} />
              ) : (
                <img src={iconSuccess} alt="success" className="w-4" />
              )}
            </div>
          </div>

          <div
            className={classNames(
              "mt-8 ml-6 flex items-center text-[12px] text-[#8f8f8f]",
              {
                invisible: item.status !== 1,
              }
            )}
          >
            {item.status === 1 ? (
              item.txHash ? (
                <>
                  <div>Check Tx</div>
                  <div
                    className="ml-3 underline cursor-pointer"
                    onClick={() => {
                      openLink(
                        `${sidebarProgressProps.explorerUrl}/tx/${item.txHash}`
                      );
                    }}
                  >
                    {getShortAddress(item.txHash, 4)}
                  </div>
                </>
              ) : (
                <div>Completed</div>
              )
            ) : (
              <>Pending</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
