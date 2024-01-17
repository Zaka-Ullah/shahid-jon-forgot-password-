import { useMemo } from "react";
import {
  useLocation,
  useNavigate as useNavigateRouter,
} from "react-router-dom";

const useNavigate = () => {
  const search = useLocation().search;
  const navigate = useNavigateRouter();

  return useMemo(
    () => ({
      navigate,
      navigateSearch: (path: string) => navigate({ pathname: path, search }),
    }),
    [navigate, search]
  );
};

export default useNavigate;
