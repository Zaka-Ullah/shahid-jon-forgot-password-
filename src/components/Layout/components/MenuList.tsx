import {
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Img from "components/Img";
import { PATHS, ROUTES } from "constains/routes";
import useNavigate from "hooks/useNavigate";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { SidebarItemOptionType, SidebarItemType } from "types/types";
import {
  MenuListFooter,
  RouteBox,
  StyledMenu,
  StyledMenuContent,
  StyledMenuList,
} from "./MenuList.styles";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
import { Close } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { greenPhoneIcon, logoutIcon } from "constains/icons";
import { MulLanguage } from "components/MulLanguage";
import { Row } from "components/Row";
type Props = { onCloseSidebar?: () => void };

const MenuList = ({ onCloseSidebar }: Props) => {
  let { navigate } = useNavigate();
  const [openMenu, setShowMenu] = useState<{
    open: boolean;
    anchorEl?: any;
    selectedRoot?: string;
    options?: SidebarItemOptionType[];
  }>({
    open: false,
    anchorEl: null,
    options: [],
  });
  let location = useLocation();
  const { downDesktopBreakpoint } = useMediaBreakpoints();

  const onClickRouteBox = (e: any, route: SidebarItemType) => {
    if (route.options) {
      setShowMenu({
        open: !openMenu.open,
        anchorEl: e.currentTarget,
        selectedRoot: openMenu.open ? route.link : undefined,
        options: route.options,
      });
      return;
    }
    if (typeof route.link === "string") {
      navigate(route.link);
      onCloseSidebar?.();
    }
  };

  const getRootPath = () => {
    let splitParts = location.pathname.split("/").filter((path) => path);
    return splitParts.length > 0 ? "/" + splitParts[0] : PATHS.home;
  };

  const onCloseMenu = () => {
    setShowMenu({ open: false, options: openMenu.options });
  };

  const onClickConnect = () => {
    window.open("http://www.cnn.com");
  };

  return (
    <StyledMenuList p={{ xs: 2, lg: 0 }}>
      <Box flex={1}>
        {downDesktopBreakpoint && (
          <Stack alignItems="flex-end" spacing={1}>
            <IconButton onClick={onCloseSidebar}>
              <Close className="close_icon" />
            </IconButton>

            <Divider className="divider" />
          </Stack>
        )}

        {ROUTES.map((route, id) => {
          let { label, icon, link, options } = route;
          let isSelected = link === getRootPath();
          let isSelectedRoot = link === openMenu.selectedRoot;
          let showMenuContent =
            options && downDesktopBreakpoint && options?.length > 0;
          let Icon = icon;

          return (
            <Stack key={id}>
              <RouteBox
                isselected={isSelected}
                isselectedroot={isSelectedRoot}
                onClick={(e) => onClickRouteBox(e, route)}
              >
                <Icon
                  fill={
                    isSelected
                      ? downDesktopBreakpoint
                        ? "#8b2219"
                        : "#fff"
                      : "#444"
                  }
                />
                <Typography className="label">
                  {label}

                  {showMenuContent && <ArrowForwardIosIcon />}
                </Typography>
              </RouteBox>
              <Collapse in={showMenuContent && openMenu.open}>
                <MenuContent options={openMenu.options} />
              </Collapse>
            </Stack>
          );
        })}
      </Box>

      {downDesktopBreakpoint && (
        <MenuListFooter>
          <Row>
            <MulLanguage />
            <Divider
              orientation="vertical"
              flexItem
              style={{ borderColor: "#000" }}
            />
            <Typography onClick={onClickConnect} className="connect_text">
              Connect Smart
            </Typography>
          </Row>

          <Row className="mobile_text" my={2} spacing={1}>
            <Img src={greenPhoneIcon} alt="icon" />
            <Typography>Text</Typography>
          </Row>

          <Divider className="divider" />
          <Button
            variant="text"
            className="logout_btn"
            startIcon={<Img src={logoutIcon} alt="icon" />}
          >
            Logout
          </Button>
        </MenuListFooter>
      )}

      {!downDesktopBreakpoint && (
        <StyledMenu
          open={openMenu.open}
          onClose={onCloseMenu}
          anchorEl={openMenu.anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <MenuContent options={openMenu.options} />
        </StyledMenu>
      )}
    </StyledMenuList>
  );
};

const MenuContent = ({
  options = [],
}: {
  options?: SidebarItemOptionType[];
}) => {
  const onClickSubSidebarItem = (option: any) => {
    window.open(option.link);
  };

  return (
    <StyledMenuContent>
      {options?.map((option, id) => {
        let Icon = option.icon;
        return (
          <Stack key={id} mt={id > 0 ? 1 : 0}>
            <Stack direction="row" className="option-box">
              <Icon fill="#444" />
              <Stack spacing={1}>
                <Typography className="title">{option.label}</Typography>
                {option.options?.map((option, id) => (
                  <Typography
                    className="option"
                    key={id}
                    variant="body2"
                    onClick={() => onClickSubSidebarItem(option)}
                  >
                    <FiberManualRecordIcon />
                    {option.label}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Stack>
        );
      })}
      <i className="arrow" />
    </StyledMenuContent>
  );
};

export default MenuList;
