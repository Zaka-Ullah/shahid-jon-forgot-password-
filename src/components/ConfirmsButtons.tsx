import { Button, ButtonProps, Stack, StackProps, styled } from "@mui/material";

type Props = {
  onClickCancel?: () => void;
  onClickAccept?: () => void;
  cancelText?: string;
  acceptText?: string;
  hideAcceptBtn?: boolean;
  hideCancelBtn?: boolean;
  otherProps?: StackProps;
  acceptBtnProps?: ButtonProps;
};

const ConfirmsButtons = (props: Props) => {
  const {
    onClickAccept = () => {},
    onClickCancel = () => {},
    cancelText = "Cancel",
    acceptText = "Accept",
    hideAcceptBtn = false,
    hideCancelBtn = false,
    otherProps,
    acceptBtnProps,
  } = props;
  return (
    <StyledStack direction="row" spacing={3} {...otherProps}>
      {!hideCancelBtn && (
        <Button className="cancel-btn" onClick={onClickCancel}>
          {cancelText}
        </Button>
      )}
      {!hideAcceptBtn && (
        <Button
          className="cancel-accept"
          onClick={onClickAccept}
          {...acceptBtnProps}
        >
          {acceptText}
        </Button>
      )}
    </StyledStack>
  );
};

const StyledStack = styled(Stack)({
  justifyContent: "center",
  "& button": {
    textTransform: "initial",
    minWidth: 88,
  },
});

export default ConfirmsButtons;
