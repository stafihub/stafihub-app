import { getShortAddress } from "@stafihub/apps-util";
import classNames from "classnames";
import { CustomLoading } from "@stafihub/react-components";
import { useDispatch } from "react-redux";
import iconClose from "../assets/images/icon_close_bold.svg";
import iconSuccess from "../assets/images/icon_correct.svg";
import iconError from "../assets/images/icon_error.svg";
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

          <div className="mt-2 mx-6 flex items-center justify-between">
            <div className="text-[#8f8f8f] text-[12px] 5px]">
              {item.name === "Staking"
                ? "Waiting to be staked"
                : "Broadcasting"}
            </div>

            <div className="">
              {item.status === 0 ? (
                <CustomLoading color="#FF7FA7" size={14} />
              ) : item.status === 1 ? (
                <img src={iconSuccess} alt="success" className="w-4" />
              ) : (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>

          {item.name === "Staking" && (
            <div className="mt-2 ml-6 text-primary font-bold text-[12px] scale-[0.7] origin-top-left">
              Next staking circle in 3 hours
            </div>
          )}

          <div
            className={classNames(
              "mt-3 mx-6 flex items-center justify-between text-[12px] text-[#8f8f8f]",
              {
                invisible: item.status === 0,
              }
            )}
          >
            {item.status === 1 ? (
              <div>Completed</div>
            ) : item.status === 0 ? (
              <>Pending</>
            ) : (
              <div>Error</div>
            )}

            <div className="">
              {item.status === 1 && (
                <img src={iconSuccess} alt="success" className="w-4" />
              )}

              {item.status === 2 && (
                <img src={iconError} alt="error" className="w-4" />
              )}
            </div>
          </div>

          <div className="mt-8 ml-6 flex items-center text-[12px] text-[#8f8f8f]">
            {item.txHash && (
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
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
