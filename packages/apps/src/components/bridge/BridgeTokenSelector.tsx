import iconDown from "../../assets/images/icon_down_gray.svg";

interface BridgeChainSelectorProps {
  selectedTokenName: string | undefined;
}

export const BridgeTokenSelector = (props: BridgeChainSelectorProps) => {
  return (
    <div className="rounded-[4px] bg-[#23292f] pl-8 pr-5 h-12 flex items-center justify-between cursor-pointer">
      {props.selectedTokenName ? (
        <div className="text-[16px] font-bold text-white">
          {props.selectedTokenName}
        </div>
      ) : (
        <div className="text-[12px] text-text-gray7">Choose a token</div>
      )}

      <img src={iconDown} alt="down" className="w-4" />
    </div>
  );
};
