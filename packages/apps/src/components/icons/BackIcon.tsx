interface BackIconProps {
  color?: string;
  size?: "small" | "medium";
  onClick?: () => void;
}

export function BackIcon(props: BackIconProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3141"
      width={props.size === "small" ? 13 : props.size === "medium" ? 16 : 13}
      height={props.size === "small" ? 13 : props.size === "medium" ? 16 : 13}
      style={{
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <path
        d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z"
        p-id="3142"
        fill={props.color || "white"}
      ></path>
    </svg>
  );
}
