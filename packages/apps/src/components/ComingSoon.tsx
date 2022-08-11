import comingSoon from "../assets/images/coming_soon.png";
import { openLink } from "../utils/common";

export const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={comingSoon}
        className="mt-[100px] w-[640px]"
        alt="coming soon"
      />

      <div
        className="mt-[-80px] border-solid border-[1px] border-[#9DAFBE] rounded-full px-[80px] py-[20px] font-arialBold font-bold text-[28px] text-white flex items-center justify-center cursor-pointer tracking-wider"
        onClick={() => openLink("https://discord.com/invite/jB77etn")}
      >
        Follow Us For Update
      </div>
    </div>
  );
};
