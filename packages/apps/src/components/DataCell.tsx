import { Stack, Tooltip } from "@mui/material";
import classNames from "classnames";
import tooltipIcon from "../assets/images/icon_tooltip.svg";

interface DataCellProps {
  title: string;
  content: string;
  showTooltip?: boolean;
  tooltip?: string;
  mt?: string;
  contentColor?: string;
  clickable?: boolean;
  onClick?: () => void;
}

export const DataCell = (props: DataCellProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" mt={props.mt}>
      <Stack direction="row" alignItems="flex-start">
        {/* <Typography
          color="secondary"
          fontSize="12px"
          lineHeight="10px"
          sx={{
            transform: "scale(0.8)",
            transformOrigin: "center left",
          }}
        >
          {props.title} :
        </Typography> */}

        <div className="text-text-gray4 text-[12px] scale-[0.8] origin-left">
          {props.title} :
        </div>

        {props.showTooltip && (
          <Tooltip title={props.tooltip || ""} placement="right-end">
            <img src={tooltipIcon} width="8px" height="8px" alt="tooltip" />
          </Tooltip>
        )}
      </Stack>

      <div
        className={classNames("text-[12px] scale-[0.8] origin-right", {
          "cursor-pointer": props.clickable,
        })}
        style={{
          color: props.contentColor || "white",
        }}
      >
        {props.content}
      </div>
    </Stack>
  );
};
