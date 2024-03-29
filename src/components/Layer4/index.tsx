import { Box, Grid, styled } from "@mui/material";
import { Reminder, CEF, Favourite } from "./components";
import { useEffect, useMemo, useState, useRef } from "react";
import { useHomeContext } from "contexts/HomeContext";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
const Layer4 = () => {
  const remainderTitleRef = useRef<HTMLDivElement | null>(null);
  const cefTitleRef = useRef<HTMLDivElement | null>(null);
  const favouriteTitleRef = useRef<HTMLDivElement | null>(null);
  if (cefTitleRef !== null) {
    console.log(
      cefTitleRef.current?.children[1].children[0].textContent?.toString()
        .length
    );
  }
  const [greaterHeightTitleRef, setGreaterHeightTitleRef] = useState<
    React.RefObject<HTMLDivElement | null>
  >(useRef<HTMLDivElement | null>(null));
  const [reminder] = useState(true);
  const [cef] = useState(true);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { tabs, messageDisplay } = useHomeContext();
  const { rangeTabletBreakpoint } = useMediaBreakpoints();
  const [allHeaderHeight, setAllHeaderHeight] = useState<number>(0);
  const isGroupWithL2 = useMemo(() => {
    return tabs?.length < 1 && !messageDisplay;
  }, [tabs, messageDisplay]);

  useEffect(() => {
    setTimeout(() => {
      let cefTitleHeight: number | undefined =
        cefTitleRef.current?.getBoundingClientRect().height;
      let remainderTitleHeight: number | undefined =
        remainderTitleRef.current?.getBoundingClientRect().height;
      let favouriteTitleHeight: number | undefined =
        favouriteTitleRef.current?.getBoundingClientRect().height;
      let greater: number = 0;
      let greaterText: number = 0;
      if (
        cefTitleHeight !== undefined &&
        remainderTitleHeight !== undefined &&
        favouriteTitleHeight !== undefined
      ) {
        if (cefTitleHeight > greater) {
          if (cefTitleRef !== null) {
            const textContentLength =
              cefTitleRef.current?.children[1]?.children[0]?.textContent?.toString()
                ?.length ?? 0;

            if (textContentLength > greaterText) {
              greaterText = textContentLength;
              greater = cefTitleHeight;
              setGreaterHeightTitleRef(cefTitleRef);
            }
          }
        }
        if (remainderTitleHeight > greater) {
          if (remainderTitleRef !== null) {
            const textContentLength =
              remainderTitleRef.current?.children[1]?.children[0]?.textContent?.toString()
                ?.length ?? 0;
            if (textContentLength > greaterText) {
              greaterText = textContentLength;
              greater = remainderTitleHeight;
              setGreaterHeightTitleRef(remainderTitleRef);
            }
          }
        }
        if (favouriteTitleHeight > greater) {
          if (favouriteTitleRef !== null) {
            const textContentLength =
              favouriteTitleRef.current?.children[1]?.children[0]?.textContent?.toString()
                ?.length ?? 0;

            if (textContentLength > greaterText) {
              greaterText = textContentLength;
              greater = favouriteTitleHeight;
              setGreaterHeightTitleRef(favouriteTitleRef);
            }
          }
        }
        setAllHeaderHeight(greater);
      }
    }, 50);
    window.addEventListener("resize", handleResize);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    if (greaterHeightTitleRef !== null) {
      console.log(greaterHeightTitleRef.current?.getBoundingClientRect());
      setAllHeaderHeight(0);
      setTimeout(() => {
        let greater =
          greaterHeightTitleRef.current?.getBoundingClientRect().height;
        if (greater !== undefined) {
          setAllHeaderHeight(greater);
        }
      }, 0);
    }
  }, [windowWidth]);
  return (
    <Box>
      <StyledGrid spacing={2} container>
        {reminder && (
          <Grid item xs={12} md={12} lg={6}>
            <Reminder
              allHeaderHeight={allHeaderHeight}
              remainderTitleRef={remainderTitleRef}
            />
          </Grid>
        )}
        {cef && (
          <Grid
            item
            xs={12}
            md={isGroupWithL2 ? 12 : 6}
            lg={reminder ? (isGroupWithL2 ? 6 : 3) : 6}
          >
            <CEF
              hasreminder={reminder}
              allHeaderHeight={allHeaderHeight}
              cefTitleRef={cefTitleRef}
            />
          </Grid>
        )}
        {!isGroupWithL2 && (
          <Grid
            item
            xs={12}
            md={reminder ? 6 : rangeTabletBreakpoint ? 6 : 6}
            lg={reminder ? 3 : 0}
          >
            <Favourite
              allHeaderHeight={allHeaderHeight}
              favouriteTitleRef={favouriteTitleRef}
            />
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
