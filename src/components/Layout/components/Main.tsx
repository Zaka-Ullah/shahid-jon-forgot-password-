import { Theme, styled } from "@mui/material";
import { SIDEBAR_WIDTH_DESKTOP } from "constains/layout";

interface MainStyleProps {
  theme: Theme;
  open: boolean;
}
// styles
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }: MainStyleProps) => ({
    marginTop: 52,
    width: "100%",
    ...(!open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter,
      }),
      [theme.breakpoints.up("lg")]: {
        marginLeft: -SIDEBAR_WIDTH_DESKTOP,
        width: "100%",
      },
    }),
    ...(open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter,
      }),
      width: `calc(100% - ${SIDEBAR_WIDTH_DESKTOP}px)`,
      [theme.breakpoints.down("lg")]: {
        width: "100%",
      },
    }),
  })
);

export default Main;
