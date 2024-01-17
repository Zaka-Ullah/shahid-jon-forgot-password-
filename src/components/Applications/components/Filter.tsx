import { Grid, MenuItem, Select, Stack, Typography } from "@mui/material";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import { StyledFilter } from "./Filter.styles";
import { useEffect, useMemo, useState } from "react";
import schemesData from "services/getSchemaType.json";
import { SchemeType } from "types/types";
import ConfirmsButtons from "components/ConfirmsButtons";
import { useApplicationsContext } from "contexts/ApplicationsContext";
import FilterForm, {
  FourthFormSchema,
  FirstFormSchema,
  ThirdFormSchema,
} from "./FilterForms";
import { Form, Formik } from "formik";
import dayjs from "dayjs";

type Props = {};

const user = {
  docId: "ABC",
  docType: "ABC",
  dob: dayjs(Date.now()),
};

const Filter = (props: Props) => {
  const { onCloseFilterPopup, onReloadData } = useApplicationsContext();
  const [schemes, setSchemes] = useState<SchemeType[]>([]);
  const [selectedScheme, setselectedScheme] = useState<string>("wfa");

  const initialValues = {
    docId: user.docId,
    dob: user.dob,
    docType: user.docType,
    phoneNo: "",
    applicationNo: "",
    claimPeriodFrom: "",
    claimPeriodTo: "",
  };

  const currentForm = useMemo(() => {
    return (
      values: any,
      handleChange: any,
      setFieldValue: any,
      errors: any
    ) => {
      const props = {
        ...{ selectedScheme, values, handleChange, setFieldValue, errors },
      };

      return <FilterForm {...props} />;
    };
  }, [selectedScheme]);

  const FilterSchema = useMemo(() => {
    switch (selectedScheme) {
      case "wfa":
        return FirstFormSchema;
      case "nlsft":
      case "nlsps":
        return ThirdFormSchema;
      case "enls":
        return FourthFormSchema;
      default:
        break;
    }
  }, [selectedScheme]);

  const onChangeScheme = (e: any) => {
    setselectedScheme(e?.target?.value);
  };

  const formatResData = (values: any = {}) => {
    let {
      applicationNo,
      dob,
      docId,
      claimPeriodTo,
      phoneNo,
      claimPeriodFrom,
    } = values;
    values.dob = dayjs(dob).format("DD/MM/YYYY");
    switch (selectedScheme) {
      case "wfa":
        let claimPeriod =
          claimPeriodFrom &&
          claimPeriodTo &&
          `${claimPeriodFrom}-${claimPeriodTo}`;
        return { docId, dob, applicationNo, phoneNo, claimPeriod };

      default:
        return values;
    }
  };

  const onClickConfirm = (values: any) => {
    let resData = formatResData(values);
    console.log(resData);
    let sendApi = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
      }, 2000);
    });
    sendApi
      .then((data) => {
        onReloadData();
        onCloseFilterPopup();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setSchemes(schemesData);
  }, []);

  return (
    <StyledFilter>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onClickConfirm}
        validationSchema={FilterSchema}
      >
        {({ values, errors, handleChange, setFieldValue }) => (
          <Form>
            <Stack spacing={2} direction="row" alignItems="center" mb={2}>
              <DifferenceOutlinedIcon />
              <Typography>Add Application No</Typography>
            </Stack>

            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <Typography>Schema</Typography>
              </Grid>

              <Grid item xs={8}>
                <Select
                  className="scheme_select"
                  fullWidth
                  value={selectedScheme}
                  onChange={onChangeScheme}
                >
                  {schemes.map((scheme) => (
                    <MenuItem key={scheme.value} value={scheme.value}>
                      {scheme.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              {currentForm(values, handleChange, setFieldValue, errors)}
            </Grid>

            <ConfirmsButtons
              otherProps={{ pt: 2 }}
              onClickCancel={onCloseFilterPopup}
              acceptBtnProps={{ type: "submit" }}
            />
          </Form>
        )}
      </Formik>
    </StyledFilter>
  );
};

export { Filter };
