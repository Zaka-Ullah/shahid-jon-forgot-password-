import { styled } from "@mui/material";

export const StyledFilter = styled("div")({
  "& .scheme_select": {
    "& .MuiSelect-select": {
      // padding: 2,
    },
  },
  "& .MuiInputBase-input": {
    padding: "8px 4px",
  },
  "& .MuiSelect-select": {
    padding: "6px 4px",
    backgroundColor: "#f7f8fa",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "#f7f8fa",
    // padding: "0 8px",
  },
  "& input, .MuiSelect-select": {
    fontSize: 12,
  },
  "& .MuiFormControl-root, .MuiInputBase-root": {
    width: "100%",
    minWidth: "auto",
  },
  "& .error": {
    color: "#d32f2f",
  },
  "& button": {
    padding: "6px",
    "& svg": {
      width: 18,
      height: 18,
    },
  },
});
