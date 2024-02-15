import { BoxProps, Stack, Typography, useTheme } from "@mui/material";
import { Header, Sidebar, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main"; 
import { Row } from "components/Row";
import ForgotPassword from "./components/ForgotPassword";

const Layout = (props: BoxProps) => {
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const onToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <Row 

      direction="column"
      minHeight="100vh"
      justifyContent="space-between"
      bgcolor="#f4f4f4"
    >    
    
     <ForgotPassword/> 
  
    
    {/*
      <Header {...{ openSidebar, onToggleSidebar }} />

      <Stack
        direction="row"
        width="100%"
      >
        <Sidebar {...{ openSidebar, onCloseSidebar }} />
        <Main theme={theme} open={openSidebar}>
          <Outlet />
        </Main>
      </Stack>
      <Footer width="100%" />  
       */}
    </Row>
  );
};

export { Layout }; 
 
