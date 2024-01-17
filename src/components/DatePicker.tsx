import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker as DatePickerLib,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";

const DatePicker = (props: DatePickerProps<AdapterDayjs>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerLib {...props} format="DD/MM/YYYY" />
    </LocalizationProvider>
  );
};

const MonthPicker = (props: DatePickerProps<AdapterDayjs>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerLib
        openTo="month"
        views={["year", "month"]}
        {...props}
        format="MM/YYYY"
      />
    </LocalizationProvider>
  );
};

export { DatePicker, MonthPicker };
