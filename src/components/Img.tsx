import { Box, SxProps } from "@mui/material";

type Props = {
  src?: string;
  alt: string;
  onClick?: any;
  sx?: SxProps;
  className?: string;
};

const Img = (props: Props) => {
  let {
    src,
    alt,
    onClick = () => {},
    sx = {},
    className = "",
  } = props;
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onClick={onClick}
      sx={sx}
      className={className}
    />
  );
};

export default Img;
