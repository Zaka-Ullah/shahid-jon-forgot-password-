const SIDEBAR_WIDTH_MOBILE = "100%";
const SIDEBAR_WIDTH_DESKTOP = 159;

const SCROLL_BAR_STYLES = {
  "&::-webkit-scrollbar": {
    width: 4,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
  },
};

const BREAKPOINT_VALUES = {
  xs: 0,
  sm: 500,
  sm2: 600,
  md: 800,
  md2: 1200,
  lg: 1440,
  xl: 1440,
};

export {
  SIDEBAR_WIDTH_MOBILE,
  SIDEBAR_WIDTH_DESKTOP,
  SCROLL_BAR_STYLES,
  BREAKPOINT_VALUES,
};
