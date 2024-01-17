import { CSSProperties } from "react";
import iconsData from "../constains/icons";
import Img from "./Img";

type Props = {
  isFavourite?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};

const FavouriteIcon = (props: Props) => {
  let { isFavourite = false, style = {}, onClick = () => {} } = props;
  let { IsFavourited, IsUnfavourited } = iconsData;

  const onToggleLocalIsFavourite = () => {
    // setLocalIsFavourite(!localIsFavourite);
    onClick();
  };

  return (
    <Img
      onClick={onToggleLocalIsFavourite}
      src={isFavourite ? IsFavourited : IsUnfavourited}
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

export default FavouriteIcon;
