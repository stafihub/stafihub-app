import { useNavigate } from "react-router-dom";
import { FormatterText, RTokenIcon } from "@stafihub/react-components";
import { MintProgramsData } from "../../types/interface";

interface MintProgramsItemProps {
  data: MintProgramsData;
}

export const MintProgramsItem = (props: MintProgramsItemProps) => {
  const navigate = useNavigate();
  const { data } = props;

  return (
    <div className="w-full pt-5 pb-3 flex text-white bg-black-700 items-center">
      <div className="basis-[30%] font-bold text-[16px] flex items-center">
        <div className="ml-6 mr-[10px]">
          <RTokenIcon rtokenName={data.derivativeTokenName} size={26} />
        </div>

        <div>{data.derivativeTokenName}</div>
      </div>

      <div className="basis-3/12 text-[14px]">{data.portalOn}</div>

      <div className="basis-3/12 text-[14px]">
        {data.apyList.map((apyItem, index) => (
          <div
            key={index}
            className="w-[100px] mb-2 flex items-end justify-between"
          >
            <div>1 : {apyItem.ratio}</div>

            <div className="mb-[1px] text-text-gray3 text-[12px] scale-[0.7] origin-bottom">
              {apyItem.unit}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[20%] text-[14px]">
        {data.rewardList.map((rewardItem) => (
          <div className="w-[70px] mb-2 flex items-end justify-between">
            <div>
              <FormatterText value={rewardItem.amount} decimals={0} />
            </div>

            <div className="mb-[1px] text-text-gray3 text-[12px] scale-[0.7] origin-bottom">
              {rewardItem.unit}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[30%] text-[14px]">
        $ <FormatterText value={data.mintedValue} decimals={0} />
      </div>

      <div className="basis-[30%] text-[14px]">{data.duration}D</div>

      <div className="basis-3/12 text-[14px]">
        <div
          className="w-[66px] h-[22px] text-primary text-[12px] flex justify-center items-center border-primary border-solid border-[0.5px] rounded-full cursor-pointer"
          onClick={() => navigate("/mint/1")}
        >
          Earn
        </div>
      </div>
    </div>
  );
};
