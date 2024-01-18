import Layer4BoxTemplate from "./Layer4BoxTemplate";
import iconsData from "../../../constains/icons";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import { ScheduleType } from "types/types";
import reminder from "../../../services/getReminder.json";

interface Props {
  allHeaderHeight: number; 
  remainderTitleRef: React.RefObject<HTMLDivElement | null>;
}
const Remainder = (props: Props) => { 
  const {allHeaderHeight,remainderTitleRef}=props 
  const [schedules] = useState<ScheduleType[]>(reminder);

  return (
    //title="BOX1" PLS try with all the length of title, i.e small,medium and long title
    <Layer4BoxTemplate title="Reminder " icon={iconsData.reminder} 
      allHeaderHeight={allHeaderHeight}  
      currentHeader="remainder" 
      remainderTitleRef={remainderTitleRef}
     >  
      <Box py={0} px={4} height="100%" boxSizing="border-box">
        <StyledContentBox className="content-box">
          {schedules.map((schedule) => {
            let { id, time, date, subject, description } = schedule;
            return (
              <Box key={id} mt="15px">
                <StyledChedule>
                  <Typography className="title">
                    <span>
                      {date} {time && `@ ${time}`}
                    </span>{" "}
                    {subject}
                  </Typography>

                  <Typography className="content title">
                    {description}
                  </Typography>
                </StyledChedule>
                <Divider className="bottom-line" />
              </Box>
            );
          })}
        </StyledContentBox>
      </Box>
    </Layer4BoxTemplate>
  );
};

const StyledContentBox = styled(Box)({
  "& .bottom-line": {
    maxWidth: 200,
    borderBottomWidth: 2,
  },
});

const StyledChedule = styled(Stack)(({theme}) => ({
  borderLeft: "6px solid #9ea6ab",
  padding: 8,
  "& .title": {
    "& span": {
      fontWeight: 700,
    },
    fontSize: 20,
  },
  "& .content": {
    color: "#684848",
  },
  [theme.breakpoints.down("sm")]: {
    "& .title": {
      fontSize: 16,
    },
  },
}));

export default Remainder;
