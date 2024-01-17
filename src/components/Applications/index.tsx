import { Box, styled } from "@mui/material";
import { Header, ApplicationsTable, Filter } from "./components";
import BillAndLoansContext from "../../contexts/ApplicationsContext";
import useBillAndLoans from "./useApplications";
import CustomPopup from "../../components/CustomPopup";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
import ApplicationsTableMobile from "./components/ApplicationsTableMobile";

type Props = {};

const Applications = (props: Props) => {
  const {
    showFilter,
    currentStatus,
    setCurrentStatus,
    onCloseFilterPopup,
    onOpenFilterPopup,
    onReloadData,
  } = useBillAndLoans();
  const { upTabletBreakpoint } = useMediaBreakpoints();

  const contextData = {
    currentStatus,
    setCurrentStatus,
    onCloseFilterPopup,
    onOpenFilterPopup,
    onReloadData,
  };

  return (
    <BillAndLoansContext.Provider value={contextData}>
      <StyledContentBox className="STYLEDCONTENTBOX" sx={{ mb: 2, pb: 1 }}>
        <Header />
        <StyledContentBox2 className="STYLEDCONTENTBOX2">
          {upTabletBreakpoint ? (
            <ApplicationsTable />
          ) : (
            <ApplicationsTableMobile />
          )}
        </StyledContentBox2>
      </StyledContentBox>

      <CustomPopup
        open={showFilter}
        onClose={onCloseFilterPopup}
        maxHeight="auto"
        maxWidth={460}
      >
        <Filter />
      </CustomPopup>
    </BillAndLoansContext.Provider>
  );
};

export const StyledContentBox = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: "#FFFFFF",
  overflow: "hidden",
  height: "337px",
  width: "100%",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
  },
}));

const StyledContentBox2 = styled(Box)({
  padding: "16px",
  height: `calc(100% - 50px)`,
  // overflowY: 'hidden'
});

export default Applications;
