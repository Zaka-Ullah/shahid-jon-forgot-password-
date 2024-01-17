import { SelectItemType } from "types/types";
import {
  MenuItem,
  Select as SelectLib,
  SelectProps,
  styled,
} from "@mui/material";

type Props = {
  items?: SelectItemType[];
} & SelectProps;

const Select = ({ items = [], ...props }: Props) => {
  return (
    <StyledSelect {...props}>
      {items.map((item) => {
        let { value, label } = item;
        return <MenuItem value={value}>{label}</MenuItem>;
      })}
      {props.children}
    </StyledSelect>
  );
};

const StyledSelect = styled(SelectLib)({
  "& .MuiSelect-select": {
    padding: "6px 4px",
    backgroundColor: "#f7f8fa",
  },
});

export default Select;
