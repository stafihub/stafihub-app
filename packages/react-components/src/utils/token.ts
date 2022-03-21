import rETH from "../assets/images/rETH.svg";
import rFIS from "../assets/images/rFIS.svg";
import rBNB from "../assets/images/rBNB.svg";
import rDOT from "../assets/images/rDOT.svg";
import rATOM from "../assets/images/rATOM.svg";
import rSOL from "../assets/images/rSOL.svg";
import rKSM from "../assets/images/rKSM.svg";
import rMATIC from "../assets/images/rMATIC.svg";

export function getTokenIcon(title: string): any | null {
  switch (title) {
    case "rETH":
      return rETH;
    case "rFIS":
      return rFIS;
    case "rBNB":
      return rBNB;
    case "rDOT":
      return rDOT;
    case "rATOM":
      return rATOM;
    case "rSOL":
      return rSOL;
    case "rKSM":
      return rKSM;
    case "rMATIC":
      return rMATIC;
  }
  return rETH;
}
