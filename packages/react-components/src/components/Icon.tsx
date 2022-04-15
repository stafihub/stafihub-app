import IcomoonReact from "icomoon-react";

const iconSet = require("../../icomoon-selection.json");

export const Icon = (props: any) => (
  <IcomoonReact iconSet={iconSet} {...props} />
);
