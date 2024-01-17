import { createTheme } from "@mui/material/styles";
import { BREAKPOINT_VALUES } from "constains/layout";

const theme = () =>
  createTheme({
    breakpoints: { values: BREAKPOINT_VALUES },
  });

export default theme;
