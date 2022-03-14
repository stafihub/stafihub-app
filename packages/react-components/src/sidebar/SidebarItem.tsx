import classNames from "classnames";
import { useNavigate, useMatch } from "react-router-dom";

interface SidebarItemProps {
  defaultIcon: any;
  activeIcon: any;
  title: string;
  targetUrl: string;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const navigate = useNavigate();
  const match = useMatch(props.targetUrl);

  return (
    <div
      className={classNames(
        "mt-[25px] w-[122px] h-[42px] rounded-full flex items-center cursor-pointer",
        { "bg-[#FFEEF3]": match }
      )}
      onClick={() => navigate(props.targetUrl)}
    >
      <img
        src={match ? props.activeIcon : props.defaultIcon}
        alt="icon"
        className="w-[36px] h-[36px] rounded-full ml-[9px]"
      />

      <div
        className={classNames("text-[16px] text-white ml-[10px]", {
          "font-bold text-[#6758FF]": match,
        })}
      >
        {props.title}
      </div>
    </div>
  );
};
