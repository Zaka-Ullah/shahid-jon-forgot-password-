import { Divider, Stack, Typography, styled } from "@mui/material";
import Img from "./Img";
import { globalIcon } from "constains/icons";
import { useMemo, useState } from "react";

type Props = {};

const MulLanguage = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  const languages = useMemo(
    () =>
      [
        { label: "ENG", value: "eng" },
        { label: "JPY", value: "jpy" },
        { label: "KOR", value: "kor" },
      ].filter((language) => language.value !== selectedLanguage),
    [selectedLanguage]
  );

  const onClickLanguage = (value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <StyledStack spacing={1} direction="row">
      <Img src={globalIcon} alt="icon" className="global_icon" />

      {languages.map((language, i) => {
        let isLastestLang = i === languages.length - 1;
        return (
          <Stack direction="row" key={language.value} alignItems="center">
            <Typography
              className={`lang_text`}
              onClick={() => onClickLanguage(language.value)}
            >
              {language.label}
            </Typography>
            {!isLastestLang && (
              <Divider orientation="vertical" className="vertical_line" />
            )}
          </Stack>
        );
      })}
    </StyledStack>
  );
};

const StyledStack = styled(Stack)({
  "& .global_icon": {
    width: 24,
    height: "auto",
  },
  "& .lang_text": {
    fontWeight: 500,
    cursor: "pointer",

    "&.mr-1": {
      marginRight: 8,
    },
  },
  ".vertical_line": {
    borderColor: "#000",
    height: "1em",
    marginLeft: 2
  },
});

export { MulLanguage };
