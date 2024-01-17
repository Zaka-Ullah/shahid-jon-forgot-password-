import { Stack, styled } from "@mui/material";
import {
  Applications,
  // ECatalog,
  // Layer2,
  Layer4,
  // Notifications,
} from "components";
import HomeContext from "contexts/HomeContext";
import useHome from "./useHome";

type Props = {};

const Home = (props: Props) => {
  const { homeContextData } = useHome();
  const { verifiedAccount } = homeContextData;

  return (
    <HomeContext.Provider value={homeContextData}>
      <StyledStack spacing={2} px={1}>
        {/* <Notifications /> */}
        {/* <ECatalog /> */}
        {/* {verifiedAccount && <Layer2 />} */}
        <Applications />
        <Layer4 />
      </StyledStack>
    </HomeContext.Provider>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  "& .title-box": {
    alignItems: "center",
    "& > p": {
      fontWeight: 700,
      fontSize: 30,
    },
    "& img": {
      height: 30,
    },
  },
  // Mobile view
  [theme.breakpoints.down("sm")]: {
    "& .title-box": {
      "& > p": {
        fontSize: 20,
      },
      "& img": {
        height: 20,
      },
    },
  },
}));

export default Home;
