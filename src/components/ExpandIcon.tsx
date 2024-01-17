import { CSSProperties } from "react";
import iconsData from "../constains/icons";
import Img from "./Img";

type Props = {
  expanded?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};

const ExpandIcon = (props: Props) => {
  let { expanded = false, style = {}, onClick = () => {} } = props;
  let { IconE, IconX } = iconsData;
  return (
    <Img
      onClick={onClick}
      src={expanded ? IconX : IconE}
      alt="icon"
      sx={{
        cursor: "pointer",
        width: 16,
        height: 16,
        ...style,
      }}
    />
  );
};

export default ExpandIcon;
