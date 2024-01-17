import { Box, Popover, Stack, Table, styled } from "@mui/material";

const oddDividerStyle = (bgColor = "#fff") => ({
  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    width: 1,
    height: "calc(100% - 16px)",
    backgroundColor: bgColor,
    right: 0,
    top: 8,
  },
});

const StyledTable = styled(Table)({
  backgroundColor: "#fff",
  "& thead": {
    "& th": {
      backgroundColor: "#b8b2b2",
      color: "#fff",
      fontWeight: 400,
      fontSize: 18,
      ...oddDividerStyle(),
    },
  },
  "& .bold": {
    fontWeight: 700,
  },
  "& td, th": {
    padding: 8,
    position: "relative",
    borderBottom: "1px solid #b5b6b8",
  },
  "& tbody": {
    "& tr:nth-of-type(even)": {
      backgroundColor: "#e8ecf4",
    },
    "& .status-icon": {
      cursor: "pointer",
    },
    "& td": {
      ...oddDividerStyle("#b7b9bd"),
    },
  },
  "& .date-text": {
    display: "flex",
    color: "#b5b5b5",
    alignSelf: "center",
    flex: 1,
  },
});

const StyledCenterStack = styled(Stack)({
  alignItems: "center",
  "& .spanFlex": {
    display: "flex",
  },
});

const StyledContentTooltip = styled(Box)({
  position: "relative",
  "& .content": {
    padding: "8px 16px",
  },
  "& .arrow": {
    position: "absolute",
    left: -32,
    top: "50%",
    transform: "translateY(-50%)",
    border: "solid 16px transparent",
    borderRightColor: "#de9f22",
  },
});

const StyledPoper = styled(Popover)({
  "& .MuiPaper-root": {
    backgroundColor: "#de9f22",
    overflow: "initial",
    color: "#fff",
    fontSize: 14,
    maxWidth: 256,
    margin: "0 32px",
  },
});

const StyledApplicationBox = styled(Stack)({
  padding: "16px 48px",
  "& .title": {
    fontWeight: 600,
  },
  "& .value": {
    color: "#010101",
  },
  "& .status-icon": {
    height: 20,
    cursor: "pointer",
  },
});

const StyledSwiper = styled(Box)({
  "& .swiper-button-prev, .swiper-button-next": {
    color: "#b6b0b0",
    "&:after": {
      fontSize: 40,
    },
  },
  "& .swiper-button-prev": {
    left: 0,
  },
  "& .swiper-button-next": {
    right: 0,
  },
  "& .swiper-pagination": {
    right: 0,
    top: 0,
    color: "#fff",
    fontWeight: 900,
    width: "fit-content",
    height: "fit-content",
    padding: "2px 8px",
    borderRadius: "32px",
    fontSize: 12,
    left: "auto",
    backgroundColor: "#b6b0b0",
  },
  "& .date-text": {
    color: "#b5b5b5",
  },
});

export {
  StyledCenterStack,
  StyledContentTooltip,
  StyledPoper,
  StyledTable,
  StyledApplicationBox,
  StyledSwiper,
};
