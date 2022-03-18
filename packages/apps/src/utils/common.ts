import { TokenModel } from "@stafihub/types";
import atomIcon from "../assets/images/ATOM.svg";

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createTokenModel(name: string): TokenModel {
  let icon = atomIcon;

  return {
    name: name,
    icon,
    balance: "--",
  };
}
