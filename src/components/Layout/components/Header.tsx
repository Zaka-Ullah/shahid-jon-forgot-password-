import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, styled } from "@mui/material";

type Props = {
  openSidebar: boolean;
  onToggleSidebar: () => void;
};

const Header = (props: Props) => {
  const { onToggleSidebar } = props;

  return (
    <StyledAppbar position="fixed">
      <Toolbar>
        <IconButton
          className="collapse-btn"
          sx={{ mr: 2 }}
          onClick={onToggleSidebar}
        >
          <Menu />
        </IconButton>
      </Toolbar>
    </StyledAppbar>
  );
};

const StyledAppbar = styled(AppBar)({
  backgroundColor: "#fff",
  "& .collapse-btn": {
    backgroundColor: "#d8d8d8",
    borderRadius: 8,
  },
});

export { Header };
