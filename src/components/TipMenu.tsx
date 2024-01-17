import { Box, Stack, Typography, styled } from "@mui/material";
import { TipItemType } from "types/types";
import { useState } from "react";
import Img from "./Img";
import iconsData from "../constains/icons";

type Props = {
  tips?: TipItemType;
};

const TipMenu = (props: Props) => {
  const { tips } = props;
  const [showTips, setShowTips] = useState(false);

  const onClickTip = () => {
    setShowTips(!showTips);
  };

  return (
    <Stack className="row" position="relative">
      <StyledTipText onClick={onClickTip}>
        {tips?.title}
        <Img
          src={iconsData.Tips}
          alt="icon"
          sx={{ width: 18, ml: 1, verticalAlign: "middle" }}
        />
      </StyledTipText>
      {showTips && (
        <StyledTipsBox spacing={1}>
          <Typography fontWeight={600}>{tips?.title}</Typography>
          {tips?.menuItems?.map((menuItem: any, id: number) => (
            <a key={id} href={menuItem?.url}>
              {menuItem.title}
            </a>
          ))}
          <Box className="triangle-up" />
        </StyledTipsBox>
      )}
    </Stack>
  );
};

const StyledTipText = styled(Typography)({
  cursor: "pointer",
  textDecorationLine: "underline",
  fontWeight: 700,
});

const StyledTipsBox = styled(Stack)({
  padding: "8px",
  top: "calc(100% + 8px)",
  borderRadius: 4,
  zIndex: 2,
  backgroundColor: "#f5a61c",
  position: "absolute",
  "& a, p": {
    color: "#fff",
  },
  "& .triangle-up": {
    position: "absolute",
    width: 0,
    height: 0,
    right: 8,
    top: -16,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "16px solid #f5a61c",
  },
});

export default TipMenu;
