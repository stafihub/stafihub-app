import iconNotice from "../assets/images/icon_notice.svg";
import iconStatis from "../assets/images/icon_statis.svg";
import {
  connectAtomjs,
  createCosmosClient,
  getKeplrAccount,
} from "@stafihub/apps-wallet";

export const Header = () => {
  const renderAccount = () => {
    return (
      <div
        className="mr-3 h-[36px] bg-primary rounded-[3px] flex flex-col justify-center items-center px-2 cursor-pointer"
        onClick={async () => {
          await connectAtomjs("cosmosHub");
          const account = await getKeplrAccount("cosmosHub");
          console.log("account", account);
        }}
      >
        <div className="text-white font-bold text-[14px]">23.45 ETH</div>

        <div className="mt-[3px] text-text-gray1 font-bold text-[12px] scale-[0.8] origin-center">
          0xN3J2s…2jh8ss
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-end pt-[20px] items-center h-[56px]">
      <img
        src={iconNotice}
        alt="notice"
        className="mr-3 w-[19px] h-[19px] cursor-pointer"
      />

      {renderAccount()}

      <img
        src={iconStatis}
        alt="statis"
        className="mr-5 w-[19px] h-[19px] cursor-pointer"
      />
    </div>
  );
};
