import { Stack, StackProps, Typography, styled } from "@mui/material";
import Select from "../../Select";
import iconsData from "../../../constains/icons";
import Img from "../../Img";
import applicationData from "../../../services/getApplication.json";
import { useMemo } from "react";
import { useApplicationsContext } from "contexts/ApplicationsContext";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";

type Props = {};

const Header = (props: Props) => {
  const { onOpenFilterPopup } = useApplicationsContext();
  const { upTabletBreakpoint, rangeMobileBreakpoint, rangeTabletBreakpoint } =
    useMediaBreakpoints();

  return (
    <>
      <StyledHeader spacing={2} direction="row" px={2}>
        <Stack className="title-box" direction="row" spacing={2}>
          <Img src={iconsData.billAndLoan} alt="icon" />
          <Typography>Application Progress</Typography>
        </Stack>

        <Stack className="search-box" spacing={2} direction="row">
          {upTabletBreakpoint && <SelectBox />}
          <Img
            src={iconsData.filter}
            alt="icon"
            className="filter-icon"
            onClick={onOpenFilterPopup}
          />
        </Stack>
      </StyledHeader>
      {(rangeMobileBreakpoint || rangeTabletBreakpoint) && <SelectBox />}
    </>
  );
};

const SelectBox = () => {
  const { currentStatus, setCurrentStatus } = useApplicationsContext();
  const formatStatusList = useMemo(() => {
    return [
      "All",
      ...applicationData
        .map((data) => data.statusCode)
        .filter(
          (value, idx, crtList) => crtList.indexOf(value) === idx && value
        ),
    ].map((data) => ({
      value: data,
      label: data,
    }));
  }, []);

  const onChangeCurrentStatus = (e: any) => {
    setCurrentStatus(e.target.value);
  };

  return (
    <StyledSelectBox>
      <Typography className="search">Search</Typography>
      <StyledSelect
        items={formatStatusList}
        value={currentStatus}
        onChange={(e) => onChangeCurrentStatus(e)}
      />
    </StyledSelectBox>
  );
};

const StyledHeader = styled(Stack)(({ theme }) => ({
  backgroundColor: "#8b8181",
  height: 50,
  boxShadow: "0 2px 6px 0 rgba(0,0,0,0.375)",
  borderRadius: 6,
  justifyContent: "space-between",
  alignItems: "center",
  "& p": {
    color: "white",
  },
  "& .search-box": {
    alignItems: "center",
    "& .search": {
      fontSize: 18,
    },
    "& .filter-icon": {
      cursor: "pointer",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .search-box": {
      "& .filter-icon": {
        height: 20,
      },
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#fff",
  "& .MuiSelect-select": {
    padding: "4px 8px",
  },
  minWidth: 256,

  [theme.breakpoints.down("md")]: {
    minWidth: 124,
    borderRadius: 12,
  },
}));

const StyledSelectBox = styled((props: StackProps) => (
  <Stack spacing={2} direction="row" {...props} />
))(({ theme }) => ({
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#e6e6e6",
    padding: 8,
    justifyContent: "flex-end",
    color: "#8b8181",
  },
}));

export { Header };
