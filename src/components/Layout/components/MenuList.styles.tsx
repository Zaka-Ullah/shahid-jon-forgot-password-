import { Box, Menu, Stack, styled } from "@mui/material";

const StyledMenuList = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  "& .close_icon": {
    cursor: "pointer",
  },
  "& .divider": {
    width: "100%",
    borderColor: "#000",
  },

  [theme.breakpoints.down("lg")]: {
    height: "calc(100% - 32px)",
  },
}));

const RouteBox = styled(Box)<{
  isselected?: boolean;
  isselectedroot?: boolean;
}>(({ isselected = false, isselectedroot = false, theme }) => ({
  display: "flex",
  cursor: "pointer",
  flexDirection: "column",
  padding: "24px 0",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isselected
    ? "#8b2219"
    : isselectedroot
    ? "#636366"
    : "transparent",
  "& a": {
    textDecoration: "initial",
  },
  "& .icon": {
    width: 55,
    height: 55,
  },
  "& .label": {
    color: isselected ? "#fff" : "#000",
    marginTop: 8,
    display: "flex",
    gap: 8,
    alignItems: "center",
    "& svg": {
      fontSize: 16,
      transform: `rotate(${isselectedroot ? 90 : 0}deg)`,
      transition: "all 0.2s",
    },
  },

  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
    backgroundColor: "initial",
    justifyContent: "flex-start",
    padding: 12,
    gap: 12,
    "& .icon": {
      width: 27,
      height: 27,
    },
    "& .label": {
      color: isselected ? "#8b2219" : isselectedroot ? "#636366" : "#444",
      marginTop: 0,
      fontWeight: isselected ? 700 : 500,
    },
  },
}));

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "#e0e0e0",
    overflow: "initial",
    color: "#fff",
    fontSize: 14,
    maxWidth: 256,
    margin: "0 32px",
  },
});

const StyledMenuContent = styled(Box)(({ theme }) => ({
  padding: 16,
  position: "relative",
  "& .arrow": {
    position: "absolute",
    left: -32,
    top: "50%",
    transform: "translateY(-50%)",
    border: "solid 16px transparent",
    borderRightColor: "#e0e0e0",
  },
  "& .option-box": {
    "& ul": {
      paddingInlineStart: 12,
    },
    gap: 8,
    "& .icon": {
      width: 32,
      height: "fit-content",
    },
    "& .title": {
      fontWeight: 600,
    },
    "& p": {
      color: "#000",
      cursor: "pointer",
    },
    "& .option": {
      display: "flex",
      gap: 6,
      textDecoration: "underline",
      "& svg": {
        width: 6,
      },
    },
  },
  [theme.breakpoints.down("lg")]: {
    padding: "8px 16px 8px 32px",
    "& .option-box": {
      "& .icon": {
        width: 18,
        height: "fit-content",
      },
    },
    "& .arrow": {
      display: "none",
    },
  },
}));

const MenuListFooter = styled(Box)({
  "& .logout_btn": {
    textTransform: "initial",
    margin: "16px 16px 0",
    fontSize: 20,
    fontWeight: 400,
    color: "#aa1f13",
  },
  "& .connect_text": {
    cursor: "pointer",
  },
  "& .mobile_text": {
    color: "#2b7366",
    "& img": {
      width: 22,
    },
  },
});

export {
  RouteBox,
  StyledMenu,
  StyledMenuContent,
  StyledMenuList,
  MenuListFooter,
};
