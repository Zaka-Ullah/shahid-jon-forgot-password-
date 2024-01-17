import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Img from "../../Img";
import { ChildrenType } from "types/types";

import { EightK } from "@mui/icons-material";
// import { FormattedMessage, useIntl } from "react-intl";
// import { useConfig } from "hooks/contextHooks";

type Props = {
  icon: string;
  title: string;
  children: ChildrenType;
  headerbgcolor?: string;
  canscroll?: boolean;
  allHeaderHeight: number;
  setAllHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
  current: string;
};

const Layer4BoxTemplate = (props: Props) => {
  // const { locale } = useConfig();
  const typographyRef = useRef<HTMLDivElement | null>(null);
  let locale = "en";
  const theme = useTheme();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const {
    icon,
    title,
    children,
    headerbgcolor = "#9fa7ac",
    canscroll = true,
    allHeaderHeight,
    setAllHeaderHeight,
    current,
  } = props;
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        if (allHeaderHeight < height) {
          setAllHeaderHeight(height);
        }
      }
    });
    if (current === "cef") {
      setTimeout(() => {
        if (typographyRef.current) {
          resizeObserver.observe(typographyRef.current);
        }
      }, 20);
    } else if (current === "favourite") {
      setTimeout(() => {
        if (typographyRef.current) {
          resizeObserver.observe(typographyRef.current);
        }
      }, 40);
    } else {
      setTimeout(() => {
        if (typographyRef.current) {
          resizeObserver.observe(typographyRef.current);
        }
      }, 60);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <StyledTemplate>
      <StyledHeadBox
        headerbgcolor={headerbgcolor}
        locale={locale}
        onlyLargeScreen={onlyLargeScreen}
      >
        <Img src={icon} alt="icon" />
        {allHeaderHeight !== 0 ? (
          <StyledHeadTitle
            className="title"
            height={allHeaderHeight}
            ref={typographyRef}
          >
            {/* <FormattedMessage id={title} /> */}
            <Typography className="title">{title}</Typography>
          </StyledHeadTitle>
        ) : (
          <Typography className="title" ref={typographyRef}>
            {/* <FormattedMessage id={title} /> */}
            <Typography className="title">{title}</Typography>
          </Typography>
        )}
      </StyledHeadBox>

      <StyledContentBox {...{ canscroll }}>{children}</StyledContentBox>
    </StyledTemplate>
  );
};

const StyledTemplate = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: 6,
  overflow: "hidden",
});
const StyledHeadTitle = styled(Typography)({
  display: "flex",
  alignItems: "center",
});
const StyledHeadBox = styled(Box)<{
  headerbgcolor?: string;
  locale?: string;
  onlyLargeScreen: boolean;
}>(
  ({
    headerbgcolor = "#fff",
    locale = "en",
    onlyLargeScreen = false,
    theme,
  }) => ({
    height: "100%",
    // whiteSpace: "nowrap",
    // minHeight: 50,
    display: "flex",
    padding: "8px 16px",
    gap: 16,
    backgroundColor: headerbgcolor,
    alignItems: "center",
    color: "#fff",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.375)",
    "& .title": {
      fontWeight: 600,
      fontSize: locale === "en" && onlyLargeScreen ? 25 : 30,
      lineHeight: 1,
    },
    "& img": {
      height: 24,
    },

    [theme.breakpoints.down("sm")]: {
      "& .title": {
        fontSize: 20,
      },
    },
  })
);

const StyledContentBox = styled(Box)<{ canscroll: boolean }>(
  ({ canscroll = true }) => ({
    // padding: '0 0 0 24px',
    "& .content-box": {
      height: 310,
      overflowY: canscroll ? "auto" : "hidden",
      overflowX: canscroll ? "auto" : "hidden",
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d9d9d9",
        borderRadius: 4,
      },
    },
  })
);

export default Layer4BoxTemplate;
