import { Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker, MonthPicker } from "components/DatePicker";
import dayjs from "dayjs";
// import { DatePicker } from "@mui/x-date-pickers";
import * as yup from "yup";

type Props = {
  selectedScheme: string;
  values: any;
  handleChange: any;
  setFieldValue: any;
  errors?: any;
};

const DOCTYPES = [
  { label: "Doctype 1", value: "ABC" },
  { label: "Doctype 2", value: "CDF" },
];

const Form = ({
  selectedScheme,
  values,
  handleChange,
  setFieldValue,
  errors,
}: Props) => {
  return (
    <>
      {selectedScheme !== "wfa" && (
        <>
          <Grid item xs={4}>
            <Typography>docType</Typography>
          </Grid>
          <Grid item xs={8}>
            <Select disabled value={values.docType} name="docType">
              {DOCTYPES.map((doctype) => (
                <MenuItem key={doctype.value} value={doctype.value}>
                  {doctype.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </>
      )}

      <Grid item xs={4}>
        <Typography>docId</Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField value={values?.docId} name="docId" disabled />
      </Grid>

      {["nlsft", "nlsps"].indexOf(selectedScheme) > -1 && (
        <>
          <Grid item xs={4}>
            <Typography>studentNo</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="studentNo"
              value={values.studentNo}
              onChange={handleChange}
              error={errors.studentNo}
              helperText={errors.studentNo}
            />
          </Grid>
        </>
      )}

      {["wfa", "cef", "tsfs", "fasp", "sts-tert"].indexOf(selectedScheme) >
        -1 && (
        <>
          <Grid item xs={4}>
            <Typography>dob</Typography>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              defaultValue={values?.dob}
              slotProps={{
                textField: {
                  name: "dob",
                },
              }}
              disabled
            />
          </Grid>
        </>
      )}

      {["wfa", "enls"].indexOf(selectedScheme) > -1 && (
        <>
          <Grid item xs={4}>
            <Typography>applicationNo</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="applicationNo"
              value={values.applicationNo}
              onChange={handleChange}
              error={errors.applicationNo}
              helperText={errors.applicationNo}
            />
          </Grid>
        </>
      )}

      {selectedScheme === "wfa" && (
        <>
          <Grid item xs={4}>
            <Typography>phoneNo</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              name="phoneNo"
              value={values.phoneNo}
              onChange={handleChange}
              error={errors.phoneNo}
              helperText={errors.phoneNo}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>claimPeriod</Typography>
          </Grid>
          <Grid container item xs={8} spacing={2}>
            <Grid item xs={6}>
              <MonthPicker
                slotProps={{
                  textField: {
                    name: "claimPeriodFrom",
                    error: errors.claimPeriodFrom,
                    helperText: errors.claimPeriodFrom,
                  },
                }}
                onChange={(e: any) =>
                  setFieldValue("claimPeriodFrom", dayjs(e).format("YYYYMM"))
                }
              />
            </Grid>
            <Grid item xs={6}>
              <MonthPicker
                slotProps={{
                  textField: {
                    name: "claimPeriodTo",
                    error: errors.claimPeriodTo,
                    helperText: errors.claimPeriodTo,
                  },
                }}
                onChange={(e: any) => {
                  setFieldValue("claimPeriodTo", dayjs(e).format("YYYYMM"));
                }}
              />
            </Grid>
          </Grid>
        </>
      )}

      {selectedScheme === "hh" && (
        <>
          <Grid item xs={4}>
            <Typography>studentDOB</Typography>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              slotProps={{
                textField: {
                  name: "studentDOB",
                  error: errors.studentDOB,
                  helperText: errors.studentDOB,
                },
              }}
              onChange={(e: any) => {
                setFieldValue("studentDOB", dayjs(e).format("DD/MM/YYYY"));
              }}
            />
          </Grid>
        </>
      )}

      <Grid item xs={12}>
        <Typography align="center" className="error" variant="body2">
          {errors?.atLeastOneField}
        </Typography>
      </Grid>
    </>
  );
};

export const FirstFormSchema = yup.object().shape({
  phoneNo: yup.string().matches(/^[4-9][0-9]{7}$/, "Invalid phone number"),
  applicationNo: yup.string().max(20, "Maximum 20 Char"),
  claimPeriodFrom: yup.string(),
  claimPeriodTo: yup
    .string()
    .test(
      "claimPeriodFrom",
      "End date can't be before start date",
      function (data: any) {
        return data && this.parent.claimPeriodFrom
          ? data > this.parent.claimPeriodFrom
          : true;
      }
    ),
  atLeastOneField: yup
    .mixed()
    .test(
      "atLeastOneField",
      "At least one editable field must be filled",
      function (value) {
        const { applicationNo, phoneNo, claimPeriodTo, claimPeriodFrom } =
          this.parent;
        return (
          !!applicationNo || !!phoneNo || !!(claimPeriodTo && claimPeriodFrom)
        );
      }
    ),
});

export const ThirdFormSchema = yup.object().shape({
  studentNo: yup.string().max(20, "Maximum 20 Char"),
});

export const FourthFormSchema = yup.object().shape({
  applicationNo: yup.string().max(20, "Maximum 20 Char"),
});

export default Form;
