import { CardContainer } from "@stafihub/react-components/src";
import { Outlet } from "react-router-dom";

export const StakeLayoutV2 = () => {
  return (
    <div className="flex justify-center pt-[55px]">
      <CardContainer>
        <Outlet />
      </CardContainer>
    </div>
  );
};
