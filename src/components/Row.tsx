import { Stack, StackProps } from "@mui/material";

const Row = (props: StackProps) => {
  return <Stack direction="row" alignItems="center" spacing={2} {...props} />;
};

export { Row };
