import { Box } from "@mui/material";
import { StyledContentTooltip, StyledPoper } from "./ApplicationsTable.styles";

const StatusPopup = ({
  open,
  onClose,
  anchorEl,
  description = "",
}: {
  open: boolean;
  onClose: () => void;
  anchorEl?: any;
  description?: string;
}) => {
  return (
    <StyledPoper
      {...{ open, onClose, anchorEl }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
    >
      <StyledContentTooltip>
        <div className="content">
          {description?.split("\n").map((line, index) => (
            <Box key={index}>{line}</Box>
          ))}
        </div>
        <i className="arrow" />
      </StyledContentTooltip>
    </StyledPoper>
  );
};

export default StatusPopup;
