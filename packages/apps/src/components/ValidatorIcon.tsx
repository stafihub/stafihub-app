import { useCallback, useEffect, useState } from "react";
import iconValidator from "../assets/images/icon_validator.svg";

interface TokenIconV2Props {
  logoUrl: string;
}

export const ValidatorIcon = (props: TokenIconV2Props) => {
  const [image, setImage] = useState("");

  const urlExists = async (url: string) => {
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status !== 404;
  };

  const loadImage = useCallback(async () => {
    const exists = await urlExists(props.logoUrl);
    if (exists) {
      setImage(props.logoUrl);
    } else {
      setImage(iconValidator);
    }
  }, [props.logoUrl]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return (
    <div>
      <img
        src={image}
        alt="icon"
        width="36px"
        height="36px"
        style={{ visibility: !image ? "hidden" : "inherit" }}
      />
    </div>
  );
};
