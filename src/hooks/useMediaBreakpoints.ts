import { useMediaQuery } from "@mui/material";
import { BREAKPOINT_VALUES } from "constains/layout";

const useMediaBreakpoints = () => {
  const mobilePoint = BREAKPOINT_VALUES.sm;
  const mobile2Point = BREAKPOINT_VALUES.sm2;
  const tabletPoint = BREAKPOINT_VALUES.md;
  const desktop2Point = BREAKPOINT_VALUES.md2;
  const desktopPoint = BREAKPOINT_VALUES.lg;
  const commonmobileTablet=BREAKPOINT_VALUES.md1;
  const rangeMobile2Breakpoint = useMediaQuery(
    `(min-width:0px) and (max-width:${mobile2Point}px)`
  );
  const rangeMobileBreakpoint = useMediaQuery(
    `(min-width:0px) and (max-width:${mobilePoint}px)`
  ); 

  const upMobileBreakpoint = useMediaQuery(`(min-width:${mobilePoint}px)`);
  const commonTabletMobile=useMediaQuery(`(max-width:${commonmobileTablet}px)`)
  const rangeTabletBreakpoint = useMediaQuery(
    `(min-width:${mobilePoint}px) and (max-width:${tabletPoint - 1}px)`
  );
  const upTabletBreakpoint = useMediaQuery(`(min-width:${tabletPoint}px)`);

  // DESKTOP
  const upDesktopBreakpoint = useMediaQuery(`(min-width:${desktopPoint}px)`);
  const rangeDesktopBreakpoint = useMediaQuery(
    `(min-width:${tabletPoint}px) and (max-width:${desktopPoint}px)`
  );
  const rangeDesktop2Breakpoint = useMediaQuery(
    `(min-width:${tabletPoint}px) and (max-width:${desktop2Point}px)`
  );
  const downDesktopBreakpoint = useMediaQuery(`(max-width:${desktopPoint - 1}px)`);
  const downDesktop2Breakpoint = useMediaQuery(`(max-width:${desktop2Point}px)`);

  return {
    commonTabletMobile,
    rangeMobileBreakpoint,
    upMobileBreakpoint,
    rangeTabletBreakpoint,
    upTabletBreakpoint,
    upDesktopBreakpoint,
    downDesktopBreakpoint,
    rangeDesktopBreakpoint,
    rangeMobile2Breakpoint,
    rangeDesktop2Breakpoint,
    downDesktop2Breakpoint
  };
};

export default useMediaBreakpoints;
