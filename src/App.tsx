import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Layout } from "components";
import { ThemeProvider } from "@mui/material";
import theme from "themes/currentTheme";

const Home = lazy(() => import("./pages/home"));
const Email = lazy(() => import("./pages/email"));
// const UserProfile = lazy(() => import("./pages/user-profile"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/email" element={<Email />} />
              {/* <Route path="/user-profile/*" element={<UserProfile />} /> */}
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
