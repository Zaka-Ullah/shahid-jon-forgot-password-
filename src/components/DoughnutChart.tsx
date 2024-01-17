import { Box, CircularProgress, styled } from "@mui/material";
import { useMemo } from "react";
import { DoughnutType } from "types/types";

const DoughnutChart = (props: DoughnutType) => {
  const {
    circlCut = 100,
    size = "100%",
    width = '100%',
    thickness = 6,
    colors = ["#6ed6e4", "#d4f3f7"],
    children,
    ...otherProps
  } = props;
  const { value = 0, total = 1 } = props;

  const progessValue = useMemo(
    () => (value / total) * (circlCut / 100) * 100,
    [value, circlCut, total]
  );

  return (
    <StyledBox width={width}  {...otherProps}>
      <CircularProgress
        variant="determinate"
        value={circlCut}
        thickness={thickness}
        className="total-circle"
        size={size}
        sx={{
          color: colors[1],
          strokeLinecap: "round", // Set smooth rounded ends
        }}
      />
      <StyledSubCircularProgress
        variant="determinate"
        value={progessValue}
        thickness={thickness}
        className="value-circle"
        size={size}
        sx={{
          color: colors[0],
          strokeLinecap: "round", // Set smooth rounded ends
        }}
      />

      <Box className="content">{children}</Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  position: "relative",
  width: "100%",
  "& .MuiCircularProgress-root": {
    display: "block",
  },
  "& .content": {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
});

const StyledSubCircularProgress = styled(CircularProgress)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
});

export default DoughnutChart;
