import { Popover, Collapse } from "@mui/material";
import classNames from "classnames";
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from "material-ui-popup-state/hooks";
import { RTokenItem, useRTokenList } from "../../hooks/useRTokenList";
import { useMatch, useParams, useNavigate } from "react-router-dom";
import { TokenIcon, FormatterText } from "@stafihub/react-components";
import iconClose from "../../assets/images/icon_close_dark.svg";
import { useChainStakeStatus } from "../../hooks/useChainStakeStatus";

interface DashboardTokenSelectorProps {}

export const DashboardTokenSelector = (props: DashboardTokenSelectorProps) => {
  const navigate = useNavigate();
  const rTokenList = useRTokenList();

  const selectPopupState = usePopupState({
    variant: "popover",
    popupId: "select",
  });

  const matchDashboard = useMatch("/rToken/:rToken/dashboard");
  const params = useParams();

  return (
    <div>
      <div
        {...bindTrigger(selectPopupState)}
        className={classNames(
          "ml-20 text-[20px] cursor-pointer pb-3 px-1 font-bold",
          matchDashboard
            ? "text-secondary border-b-[2px] border-secondary border-solid"
            : "text-white"
        )}
      >
        DASHBOARD
      </div>

      {/* Select rToken Popover */}
      <Popover
        {...bindPopover(selectPopupState)}
        TransitionComponent={Collapse}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          marginTop: "4px",
          "& .MuiTypography-root": {
            padding: "0px",
          },
        }}
      >
        <div className="min-w-[360px] py-4">
          <div className="mx-5 mb-3 flex items-center justify-between">
            <div className="text-[20px] text-text-black1">Select a rToken</div>

            <img
              src={iconClose}
              alt="close"
              className="w-3 h-3 cursor-pointer"
              onClick={() => selectPopupState.close()}
            />
          </div>

          {rTokenList.map((rTokenItem) => (
            <TokenItem
              key={rTokenItem.chainId}
              item={rTokenItem}
              selected={
                !!matchDashboard && rTokenItem.rTokenName === params.rToken
              }
              onClick={() => {
                selectPopupState.close();
                navigate(`/rToken/${rTokenItem.rTokenName}/dashboard`);
              }}
            />
          ))}
        </div>
      </Popover>
    </div>
  );
};

interface TokenItemProps {
  item: RTokenItem;
  selected: boolean;
  onClick: () => void;
}

const TokenItem = (props: TokenItemProps) => {
  const { item } = props;
  const { stakeStatus } = useChainStakeStatus(item.chainId);

  return (
    <div key={item.chainId} className="cursor-pointer" onClick={props.onClick}>
      <div
        className={classNames("px-5 h-16 flex items-center justify-between", {
          "bg-divider-light": props.selected,
        })}
      >
        <div className="flex items-center">
          <TokenIcon tokenName={item.tokenName} size={36} withBorder />

          <div className={classNames("ml-[10px] text-[16px] text-text-black1")}>
            {item.rTokenName}
          </div>
        </div>

        <div
          className={classNames("mr-2 font-bold text-[16px] text-text-black1")}
        >
          <FormatterText value={stakeStatus?.rTokenBalance} decimals={2} />
        </div>
      </div>

      <div
        className={classNames("ml-[-20px] mr-[-7px] bg-divider-light h-[1px]")}
      />
    </div>
  );
};
