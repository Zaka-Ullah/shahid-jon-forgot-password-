import { Button, styled } from "@mui/material";


const BaseButton = styled(Button)({
  borderRadius: 8,
  textTransform: "initial",
  minWidth: 88,
});

export const CancelButton = styled(BaseButton)({
  "&,:hover": {
    backgroundColor: "#949494",
  },
  color: "#fff",
});


export const AcceptButton = styled(BaseButton)({
  "&,:hover": {
    backgroundColor: "#a81f13",
  },
  color: "#fff",
  "&.Mui-disabled": {
    color: "#ffffff70"
  }
});
