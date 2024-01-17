import { Box, Grid, styled } from "@mui/material";
import { Reminder, CEF, Favourite } from "./components";
import { useMemo, useState } from "react";
import { useHomeContext } from "contexts/HomeContext";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";

type Props = {};
type headerHeight={ 
  CEF:number, 
   Remainder:number,  
   Favourite:number


}
const Layer4 = (props: Props) => {
  const [reminder] = useState(true);
  const [cef] = useState(true);
  const { tabs, messageDisplay } = useHomeContext();
  const { rangeTabletBreakpoint } = useMediaBreakpoints(); 
  const [allHeaderHeight,setAllHeaderHeight]=useState<number>(0)   
  
  const isGroupWithL2 = useMemo(() => {
    return tabs?.length < 1 && !messageDisplay;
  }, [tabs, messageDisplay]);
   console.log("main Layer4")
  return (
    <Box>
      <StyledGrid spacing={2} container>
        {reminder && (
          <Grid item xs={12} md={12} lg={6}>
            <Reminder allHeaderHeight={allHeaderHeight} setAllHeaderHeight={setAllHeaderHeight}/>
          </Grid>
        )}
        {cef && (
          <Grid
            item
            xs={12}
            md={isGroupWithL2 ? 12 : 6}
            lg={reminder ? (isGroupWithL2 ? 6 : 3) : 6}
          >
            <CEF hasreminder={reminder} allHeaderHeight={allHeaderHeight} setAllHeaderHeight={setAllHeaderHeight} />
          </Grid>
        )}
        {!isGroupWithL2 && (
          <Grid
            item
            xs={12}
            md={reminder ? 6 : rangeTabletBreakpoint ? 6 : 6}
            lg={reminder ? 3 : 0}
          >
            <Favourite  allHeaderHeight={allHeaderHeight} setAllHeaderHeight={setAllHeaderHeight}  />
          </Grid>
        )}
      </StyledGrid>
    </Box>
  );
};

const StyledGrid = styled(Grid)({
  backgroundColor: "#f4f4f4",
});

export default Layer4;
