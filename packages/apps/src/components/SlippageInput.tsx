import { InputBase } from "@mui/material";

interface SlippageInputProps {
  placeholder: string;
  value: string;
  handleValueChange: (value: string) => void;
}

export const SlippageInput = (props: SlippageInputProps) => {
  return (
    <InputBase
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        let value = e.target.value.replace(/[^\d\.]/g, "");
        value = value.replace(/^\./g, "");
        value = value.replace(/\.{2,}/g, ".");
        value = value
          .replace(".", "$#$")
          .replace(/\./g, "")
          .replace("$#$", ".");
        value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
        if (Number(value) > Number(99)) {
          return;
        } else if (Number(value) > 0 && Number(value) < Number(0.1)) {
          return;
        }
        props.handleValueChange(value);
      }}
      sx={{
        color: "#ffffff",
        "& .MuiInputBase-input": {
          fontWeight: "800",
          fontFamily: "Helvetica, sans-serif",
          color: "#ffffff",
          fontSize: "12px",
        },
      }}
    />
  );
};
