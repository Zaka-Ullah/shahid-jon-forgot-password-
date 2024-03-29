import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
  Select,
  MenuItem,
} from "@mui/material";
import useMediaBreakpoints from "hooks/useMediaBreakpoints";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import { transform } from "typescript";
interface StyledCommonTabletProps {
  commonTabletMobile?: boolean;
  docType?: string;
}
interface Values {
  docType: string;
  documentId: string;
  contact: string;
  email: string;
  name: string;
  countryCode: string;
  hkidnumber?: string;
}
interface CountryCode {
  value: string;
  label: string;
}
const countryCodeOptions: CountryCode[] = [
  { label: "Code", value: " " },
  {
    label: "US",
    value: "+1",
  },
  {
    label: "UK",
    value: "+44",
  },
  {
    label: "Aus",
    value: "+61",
  },
  {
    label: "HK",
    value: "+852",
  },
];
interface DocType {
  label: string;
  value: string;
}
const DocTypeOptions: DocType[] = [
  { label: "Select Doc Type", value: " " },
  { label: "HKD", value: "HKD" },
  { label: "Passport", value: "passport" },
];
const initialValues: Values = {
  docType: " ",
  countryCode: " ",
  contact: "",
  documentId: "",
  email: "",
  name: "",
  hkidnumber: "",
};

const validationSchema = Yup.object({
  docType: Yup.string()
    .required("Document type is required")
    .matches(/^[^\s].*/, "Document type is required")
    .trim()
    .strict(true),
  countryCode: Yup.string()
    .required("Country Code is required")
    .matches(/^[^\s].*/, "Country Code is required")
    .trim()
    .strict(true),
  documentId: Yup.string()
    .required("Document ID is required")
    .matches(
      /^[0-9-]+$/,
      "Document ID can only contain letters, numbers, hyphens, and underscores"
    )
    .min(6, "Document ID must be at least 6 characters")
    .max(20, "Document ID must be at most 20 characters"),
  name: Yup.string()
    .required("English name is required")
    .matches(
      /^[A-Za-z\s]+$/,
      "English name can only contain alphabets and spaces"
    )
    .min(2, "English name must be at least 2 characters")
    .max(50, "English name must be at most 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .max(255, "Email must be at most 255 characters"),

  contact: Yup.string()
    .required("Contact is required")
    .matches(/^[^\s].*/, "Contact is required")
    .trim()
    .strict(true),
});

export default function ForgotPassword() {
  const [hkidNumberError, setHkidNumberError] = useState<boolean>(false);
  const { commonTabletMobile } = useMediaBreakpoints();
  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (hkidNumberError) {
      } else {
        console.log(values);
      }
      // Handle form submission here
    },
  });

  return (
    <StyledPaper>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="row">
          <ForgotPasswordTypo>Forgot Password</ForgotPasswordTypo>
        </Stack>
        <StyledStackDocument direction="row" mt={4}>
          <StyledDocumentType commonTabletMobile={commonTabletMobile}>
            <Typography>Document Type:</Typography>
            <StyledSelectDoc
              id="docType"
              name="docType"
              value={formik.values.docType}
              placeholder="Select Doc Type"
              onChange={(e) => {
                formik.handleChange(e);
                if (e.target.value !== "HKD") {
                  setHkidNumberError(false);
                }
              }}
            >
              {" "}
              {DocTypeOptions.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </StyledSelectDoc>
            {formik.touched.docType && formik.errors.docType ? (
              <StyledFormikError>{formik.errors.docType}</StyledFormikError>
            ) : null}
          </StyledDocumentType>
          <StyledDocumentIdBox
            direction="row"
            commonTabletMobile={commonTabletMobile}
          >
            <StyledDocumentIDTextField
              name="documentId"
              commonTabletMobile={commonTabletMobile}
              docType={formik.values.docType}
              onChange={formik.handleChange}
              placeholder={`${
                formik.values.docType === "passport" ||
                formik.values.docType === " "
                  ? "Document ID"
                  : "Hong Kong ID"
              }`}
            />
            {formik.values.docType !== "passport" &&
            formik.values.docType !== " " ? (
              <StyledHKIDnumberBox
                docType={formik.values.docType}
                direction="row"
              >
                <StyledHKIDNumberTypoLeft>(</StyledHKIDNumberTypoLeft>
                <StyledHKIDNumberField
                  name="hkidnumber"
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (e.target.value.length > 0) {
                      setHkidNumberError(false);
                    } else {
                      setHkidNumberError(true);
                    }
                  }}
                ></StyledHKIDNumberField>
                <StyledHKIDNumberTypoRight>)</StyledHKIDNumberTypoRight>
              </StyledHKIDnumberBox>
            ) : undefined}
            {formik.touched.documentId && formik.errors.documentId ? (
              <StyledFormikError>
                {formik.values.docType === "passport" ||
                formik.values.docType === " "
                  ? formik.errors.documentId
                  : "Hong Kong ID"}
              </StyledFormikError>
            ) : null}
            {formik.touched.hkidnumber && hkidNumberError ? (
              <StyledFormikError className="block">
                HKID Number Is Required
              </StyledFormikError>
            ) : null}
          </StyledDocumentIdBox>
          <StyledEnglishNameBox commonTabletMobile={commonTabletMobile}>
            <Typography mt={4}>English Name *</Typography>
            <StyledEnglishNameTextField
              name="name"
              id="name"
              onChange={formik.handleChange}
              placeholder="English Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <StyledFormikError className="block">
                {formik.errors.name}
              </StyledFormikError>
            ) : null}
          </StyledEnglishNameBox>
        </StyledStackDocument>
        <StyledStackContact direction="row">
          <StyledBoxMobileNo commonTabletMobile={commonTabletMobile}>
            <Typography mt={4}>Mobile No. *</Typography>
            <StyledSelectCountryCode
              id="countryCode"
              name="countryCode"
              value={formik.values.countryCode}
              placeholder="Code"
              commonTabletMobile={commonTabletMobile}
              onChange={formik.handleChange}
            >
              {" "}
              {countryCodeOptions.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </StyledSelectCountryCode>
            <StyledContactTextField
              commonTabletMobile={commonTabletMobile}
              placeholder="Enter Phone Number"
              id="contact"
              name="contact"
              onChange={formik.handleChange}
            />
            {formik.touched.contact && formik.errors.contact ? (
              <StyledFormikError>{formik.errors.contact}</StyledFormikError>
            ) : null}
            {formik.touched.countryCode && formik.errors.countryCode ? (
              <StyledFormikError>{formik.errors.countryCode}</StyledFormikError>
            ) : null}
          </StyledBoxMobileNo>
          <StyledBoxEmail commonTabletMobile={commonTabletMobile}>
            <Typography mt={4}>Email *</Typography>
            <StyledContactTextEmail
              name="email"
              commonTabletMobile={commonTabletMobile}
              onChange={formik.handleChange}
              placeholder="Enter Your Email Address"
            />
            {formik.touched.email && formik.errors.email ? (
              <StyledFormikError>{formik.errors.email}</StyledFormikError>
            ) : null}
          </StyledBoxEmail>
        </StyledStackContact>
        <StyledOTPRequestLabel>
          Will send an OTP to your email or sms if matching account found
        </StyledOTPRequestLabel>
        <StyledButtonStack direction="row">
          <StyledButtonCancel>Cancel</StyledButtonCancel>
          <StyledButtonSubmit
            onClick={(e) => {
              if (formik.values.docType === "passport") {
                setHkidNumberError(false);
              } else {
                if (formik.values.docType === "HKD") {
                  if (formik.values.hkidnumber !== undefined) {
                    if (formik.values.hkidnumber.length > 0) {
                      setHkidNumberError(false);
                    } else {
                      setHkidNumberError(true);
                    }
                  } else {
                    setHkidNumberError(true);
                  }
                }
              }
            }}
            type="submit"
          >
            Submit
          </StyledButtonSubmit>
        </StyledButtonStack>
      </form>
    </StyledPaper>
  );
}
//All Styles Goes Here
const StyledSelectCountryCode = styled(Select)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    width: "30%",
    height: "43px",
    marginTop: "5px",
    ...(commonTabletMobile && {
      width: "35%",
      transform: "translate(0%)",
    }),
  })
);

const StyledDocumentIdBox = styled(Stack)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: commonTabletMobile ? "100%" : "35%",
    ...(commonTabletMobile && {
      transform: "translate(0%)",
    }),
  })
);
const StyledDocumentIDTextField = styled(TextField)<StyledCommonTabletProps>(
  ({ commonTabletMobile, docType }) => ({
    marginTop: "25px",
    width:
      commonTabletMobile && docType !== "passport"
        ? "50%"
        : !commonTabletMobile && docType !== "passport"
        ? "60%"
        : "100%",
    "& input": {
      padding: "10px",
    },
    ...(commonTabletMobile && {
      transform: "translate(0%)",
    }),
  })
);
const StyledHKIDNumberTypoLeft = styled(Typography)({
  width: "10px",
  fontSize: "41px",
  lineHeight: "40px",
  color: "gray",
  fontWeight: "normal",
});
const StyledHKIDNumberTypoRight = styled(Typography)({
  width: "10px",
  fontSize: "41px",
  lineHeight: "40px",
  color: "gray",
});
const StyledHKIDNumberField = styled(TextField)({
  width: "50%",
  padding: "0px",

  marginTop: "2px",
  "& input": {
    padding: "8px",
    textAlign: "center",
  },
});
const StyledHKIDnumberBox = styled(Stack)<StyledCommonTabletProps>(
  ({ commonTabletMobile, docType }) => ({
    width: commonTabletMobile ? "10%" : "30%",
    marginTop: "25px",
    flexWrap: "wrap",
    justifyContent: "space-around",
  })
);
const StyledFormikError = styled(Typography)({
  color: "red",
  marginTop: "5px",
  fontSize: "14px",
  paddingLeft: "4px",
  width: "100%",
});
const StyledStackDocument = styled(Stack)({
  // border: '1px solid red',
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "space-between",
});
const StyledPaper = styled(Paper)({
  // border: '1px solid red',
  width: "90vw",
  maxHeight: "90vh",
  padding: "45px",
  paddingTop: "15px",
  top: "50%",
  transform: "translate(0,-50%)",
  overflowY: "auto",
  position: "fixed",
  boxSizing: "border-box",
  borderRadius: "15px",
  "&::-webkit-scrollbar": {
    width: "0px",
    height: "0px",
  },
});
const StyledSelectDoc = styled(Select)({
  width: "100%",
  height: "43px",
  marginTop: "5px",
  boxShadow: "none !important",
});
const ForgotPasswordTypo = styled(Typography)({
  textAlign: "center",
  fontWeight: "900",
  fontSize: "21px",
  width: "100%",
  marginTop: "12px",
});
const StyledOTPRequestLabel = styled(Typography)({
  textAlign: "center",
  fontSize: "16px",
  width: "100%",
  marginTop: "32px",
});
const StyledDocumentType = styled(Box)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    width: "35%",
    ...(commonTabletMobile && {
      width: "80vw",
      transform: "translate(0%)",
    }),
  })
);
const StyledBoxMobileNo = styled(Box)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    width: commonTabletMobile ? "80vw" : "35%",
    ...(commonTabletMobile && {
      transform: "translate(0%)",
    }),
  })
);
const StyledBoxEmail = styled(Box)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    width: "35%",
    ...(commonTabletMobile && {
      width: "80vw",
      transform: "translate(0%)",
    }),
  })
);

const StyledContactTextEmail = styled(TextField)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    marginTop: "5px",
    width: "100%",
    "& input": {
      padding: "10px",
    },
    "&:focus": {
      border: " solid black 1px !important",
    },
    ...(commonTabletMobile && {
      width: "100%",
      transform: "translate(0%)",
    }),
  })
);
const StyledContactTextField = styled(TextField)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    marginTop: "5px",

    marginLeft: "5%",
    "& input": {
      padding: "10px",
    },
    "&:focus": {
      border: " solid black 1px !important",
    },
    ...(commonTabletMobile && {
      transform: "translate(0%)",
    }),
    width: commonTabletMobile ? "60%" : "65%",
  })
);
const StyledEnglishNameTextField = styled(TextField)({
  marginTop: "5px",
  width: "100%",
  "& input": {
    padding: "10px",
  },
  "&:focus": {
    border: " solid black 1px !important",
  },
});
const StyledEnglishNameBox = styled(Box)<StyledCommonTabletProps>(
  ({ commonTabletMobile }) => ({
    marginTop: "10px",
    width: "35%",
    ...(commonTabletMobile && {
      width: "100%",
      transform: "translate(0%)",
    }),
  })
);
const StyledStackContact = styled(Stack)({
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
});
const StyledButtonStack = styled(Stack)({
  justifyContent: "space-between",
  width: "100%",
  marginTop: "25px",
});
const StyledButtonCancel = styled(Button)({
  width: "35%",
  color: "rgb(173, 185, 196)",
  background: "rgb(224, 224, 224)",
  "&:hover": {
    background: "rgb(224, 224, 224)  !important",
  },
  textTransform: "none",
});
const StyledButtonSubmit = styled(Button)({
  width: "35%",
  background: "rgb(176, 28, 20)",
  color: "white",
  textTransform: "none",
  "&:hover": {
    background: "rgb(176, 28, 20)  !important",
  },
});
