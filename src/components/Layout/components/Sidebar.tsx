import { memo, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";
import MenuList from "./MenuList";
import { SIDEBAR_WIDTH_DESKTOP, SIDEBAR_WIDTH_MOBILE } from "constains/layout";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";

type Props = {
  openSidebar: boolean;
  onCloseSidebar: () => void;
};

const Sidebar = (props: Props) => {
  const { openSidebar, onCloseSidebar } = props;
  const theme = useTheme();
  const { upDesktopBreakpoint } = useMediaBreakpoints();

  const drawer = useMemo(
    () => (
      <Box
        component="div"
        style={{
          height: `calc(100vh - ${!upDesktopBreakpoint ? "0" : "64"}px)`,
        }}
        bgcolor={upDesktopBreakpoint ? "#e0e0e0" : "#fff"}
      >
        <MenuList {...{ onCloseSidebar }} />
      </Box>
    ),
    [upDesktopBreakpoint]
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

    // console.log(openSidebar)

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: upDesktopBreakpoint ? SIDEBAR_WIDTH_DESKTOP : "auto",
      }}
    >
      <Drawer
        container={container}
        variant={upDesktopBreakpoint ? "persistent" : "temporary"}
        anchor="left"
        open={openSidebar}
        onClose={onCloseSidebar}
        sx={{
          "& .MuiDrawer-paper": {
            width: upDesktopBreakpoint
              ? SIDEBAR_WIDTH_DESKTOP
              : SIDEBAR_WIDTH_MOBILE,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("lg")]: {
              top: "64px",
            },
          },
        }}
        // ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {openSidebar && drawer}
      </Drawer>
    </Box>
  );
};

export default memo(Sidebar);
