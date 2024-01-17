import { CustomPopupType } from "types/types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  styled,
} from "@mui/material";
import { useRef, useState } from "react";

const CustomPopup = (props: CustomPopupType) => {
  const {
    open,
    onClose,
    title,
    titleComponent,
    children,
    actionBtns,
    maxWidth = 350,
    maxHeight = 350,
  } = props;
  const [scroll] = useState<DialogProps["scroll"]>("paper");

  const descriptionElementRef = useRef<HTMLElement>(null);

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxwidth={maxWidth}
      maxheight={maxHeight}
    >
      {(title || titleComponent) && (
        <DialogTitle>{title || titleComponent}</DialogTitle>
      )}
      <DialogContent dividers={scroll === "paper"}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {children}
        </DialogContentText>
      </DialogContent>

      {actionBtns && <DialogActions>{actionBtns}</DialogActions>}
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)<{
  maxwidth?: number | string;
  maxheight?: number | string;
}>(({ maxwidth = 450, maxheight = 450 }) => ({
  "& .MuiPaper-root": {
    width: "calc(100% - 32px)",
    margin: 0,
    maxWidth: maxwidth,
    maxHeight: maxheight,
    "&, .header": {
      justifyContent: "center",
    },
    "& .header": {
      alignItems: "center",
      "& img, .tmp": {
        width: 24,
      },
    },
    "& button": {
      color: "#fff",
      borderRadius: 8,
    },
    "& .cancel-btn": {
      "&,:hover": {
        backgroundColor: "#e3e3e3",
      },
    },
    "& .cancel-accept": {
      "&,:hover": {
        backgroundColor: "#a81f13",
      },
    },
  },
  "& .MuiDialogActions-root": {
    justifyContent: "center",
  },
}));

export default CustomPopup;
