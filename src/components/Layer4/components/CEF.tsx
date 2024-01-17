import { Box, Button, Stack, Typography, styled } from "@mui/material";

import Layer4BoxTemplate from "./Layer4BoxTemplate";
import iconsData from "../../../constains/icons";
import { useEffect, useMemo, useState } from "react";
import { CefBalanceDataType } from "types/types";
import cefData from "../../../services/getCEFBalance.json";
import { formatMoney } from "../../../utils/stringUtils";
import "./CEF.css";
import DoughnutChart from "../../DoughnutChart";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
import { useHomeContext } from "contexts/HomeContext";
// import DoughnutChart from "../../DoughnutChart";

type Props = {
  hasreminder: boolean; 
  allHeaderHeight: number;
  setAllHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};
 
const CIRCLCUT = 70;

const CEF = (props: Props) => {
  const { hasreminder,allHeaderHeight,setAllHeaderHeight } = props;
  const [cefBalanceData, setCefBalanceData] = useState<CefBalanceDataType>({
    accountBalance: 0,
    count: 0,
    maximumEntitlement: 0,
  });
  const { isGroupWithL2 } = useHomeContext();
  const { accountBalance, count, maximumEntitlement } = cefBalanceData;
  const {
    rangeMobile2Breakpoint,
    rangeDesktop2Breakpoint,
    rangeMobileBreakpoint,
    upDesktopBreakpoint,
  } = useMediaBreakpoints();

  const allInOneCEF = useMemo(
    () =>
      ((rangeMobileBreakpoint || rangeMobile2Breakpoint) &&
        !(hasreminder && rangeDesktop2Breakpoint)) ||
      (!isGroupWithL2 && rangeDesktop2Breakpoint) ||
      (hasreminder && upDesktopBreakpoint && !isGroupWithL2),
    [
      rangeMobile2Breakpoint,
      hasreminder,
      rangeDesktop2Breakpoint,
      upDesktopBreakpoint,
      isGroupWithL2,
      rangeMobileBreakpoint,
    ]
  );

  useEffect(() => {
    setCefBalanceData(cefData); 
     
  }, []);

  return (
    <Layer4BoxTemplate 
    current="cef"
      title="BOX 2 BOX 2 BOX 2 BOX 2 BOX 2 BOX 2 BOX 2 BOX 2 LL"
      icon={iconsData.cef}
      headerbgcolor="#2ca9bf"
      canscroll={false} 
      allHeaderHeight={allHeaderHeight} 
      setAllHeaderHeight={setAllHeaderHeight}
    >
      <StyledContentBox
        className="content-box"
        alignItems="center"
        // direction={hasreminder ? "column" : "row"}
        direction={allInOneCEF ? "column" : "row"}
        gap={hasreminder ? 0 : 2}
      >
        <Box className="chart-box">
          {/* <Box className="chart-box" width={hasreminder ? '270px' : '270px'}> */}
          <Stack textAlign="center" justifyContent="center" position="relative">
            <DoughnutChart
              value={accountBalance}
              total={maximumEntitlement}
              size={220}
              circlCut={CIRCLCUT}
              sx={{
                transform: `rotate(${180 + CIRCLCUT - 30 / 2}deg)`,
              }}
            />

            <InsideChartBox
              className="REMINDER=FALSE/TRUE"
              top={allInOneCEF ? "60%" : "40%"}
            >
              <Typography className="title">title-1:</Typography>
              <Typography className="value">
                HK$ {formatMoney(accountBalance.toString())}
              </Typography>

              <Typography className="title">title 1:</Typography>
              <Typography className="value">{count}</Typography>

              {/* {hasreminder && ( */}
              {allInOneCEF && (
                <>
                  <Typography className="title">title 1:</Typography>
                  <Typography className="total" mb={1}>
                    HK$ {formatMoney(maximumEntitlement.toString())}
                  </Typography>
                  <StyledButton className="btn-inside">Button</StyledButton>
                </>
              )}
            </InsideChartBox>
          </Stack>
        </Box>
        {/* {!hasreminder && ( */}
        {!allInOneCEF && (
          <Stack
            className="REMINDER=FALSE"
            width="50%"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className="title">title 1:</Typography>
            <Typography className="value" mb={2}>
              HK$ {formatMoney(maximumEntitlement.toString())}
            </Typography>
            <StyledButton>Button</StyledButton>
          </Stack>
        )}
      </StyledContentBox>
    </Layer4BoxTemplate>
  );
};

const StyledContentBox = styled(Stack)({
  justifyContent: "center",
  "& .bottom-line": {
    maxWidth: 200,
  },
  "& .chart-box": {},
  "& .value, .total": {
    fontWeight: 700,
    fontSize: 20,
  },
  "& .total": {
    fontSize: 22,
  },
});

const StyledButton = styled(Button)({
  color: "#fff",
  "&,:hover": {
    backgroundColor: "#428fa0",
  },
  display: "block",
  margin: "10 auto",
  maxWidth: 235,
  width: "100%",
  fontSize: 18,
  fontWeight: 700,
  textTransform: "initial",
  textDecoration: "underline",
  borderRadius: 10,
});

const InsideChartBox = styled(Stack)({
  // top: '60%',
  position: "absolute",
  right: "50%",
  transform: "translate(50%, calc(-50% + 16px))",
  width: "100%",
  alignItems: "center",
  "& p": {
    lineHeight: 1.35,
  },
  "& .btn-inside": {
    marginTop: "10px",
  },
});

export default CEF;
