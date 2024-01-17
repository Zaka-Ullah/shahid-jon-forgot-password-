import { Stack } from "@mui/material";
import { MailTable } from "./components";

type Props = {};

const Email = (props: Props) => {
  return (
    <Stack spacing={2} p={2}>
      EMail
      <MailTable />
    </Stack>
  );
};

export default Email;
