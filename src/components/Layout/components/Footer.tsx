import {
  Box,
  BoxProps,
  Container,
  Divider,
  Link,
  Typography,
  styled,
} from "@mui/material";
import { EDragonIcon, Wcag2Icon } from "assets/icons";
import { Row } from "components/Row";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
import useNavigate from "hooks/useNavigate";

const Footer = (props: BoxProps) => {
  const { upTabletBreakpoint } = useMediaBreakpoints();
  const { navigate } = useNavigate();
  const isLoggedIn = false;

  const handleClick = (link: string) => {
    navigate(`${isLoggedIn ? "/user" : ""}/${link}`, { replace: true });
  };

  return (
    <StyledFooter {...props}>
      <Container maxWidth="lg">
        {!upTabletBreakpoint && (
          <Row px={6} pb={4}>
            <Typography>Disclaimer</Typography>
          </Row>
        )}

        {!upTabletBreakpoint && <Divider className="vertical_line" />}

        <Row
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          py={2}
          px={{ xs: 6, md: 0 }}
          spacing={{ xs: 1, md: 2 }}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography className="footer_text" onClick={() => {}}>
            Sitemap
          </Typography>
          {upTabletBreakpoint && (
            <Divider
              orientation="vertical"
              flexItem
              className="vertical_line"
            />
          )}
          <Typography className="footer_text" onClick={() => {}}>
            Important Notices
          </Typography>
          {upTabletBreakpoint && (
            <Divider
              orientation="vertical"
              flexItem
              className="vertical_line"
            />
          )}
          <Typography className="footer_text" onClick={() => {}}>
            Privacy Policy
          </Typography>
        </Row>

        {!upTabletBreakpoint && <Divider className="vertical_line" />}

        <Row
          mt={4}
          spacing={4}
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Row className="imgs_box">
            <FooterLink
              onClick={() => handleClick("copyright")}
              underline="hover"
            >
              <EDragonIcon />
            </FooterLink>
            <FooterLink
              onClick={() => handleClick("copyright")}
              underline="hover"
            >
              <Wcag2Icon />
            </FooterLink>
          </Row>

          <FooterLink
            onClick={() => handleClick("disclaimer")}
            underline="hover"
            fontWeight="bold"
            align="center"
          >
            © 2023 © Working Family and Student Financial Assistance Agency -
            Centralized e-Service Portal
          </FooterLink>
        </Row>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled(Box)(({ theme }) => ({
  padding: 32,
  backgroundColor: "#000",
  boxSizing: "border-box",
  p: {
    color: "#fff",
    fontSize: 14,
  },

  ".vertical_line": {
    borderColor: "#fff",
  },
  ".imgs_box": {
    svg: {
      height: 31,
      width: 88,
    },
  },

  [theme.breakpoints.down("md")]: {
    p: {
      fontSize: 13,
    },
  },
}));

const FooterLink = styled(Link)({
  // border: '1px solid red',
  color: "#fff",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "14px",
  textDecoration: "none !important",
  opacity: "0.8",
  "& svg": {
    fontsize: "1.125rem",
    marginRight: 8,
  },
  "&:hover": {
    opacity: "1",
  },
  cursor: "pointer",
});

export default Footer;
