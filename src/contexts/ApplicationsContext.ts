import { Dispatch, SetStateAction, createContext, useContext } from "react";

type ApplicationsContextType = {
  currentStatus?: string;
  setCurrentStatus: Dispatch<SetStateAction<string>>;
  onOpenFilterPopup: () => void;
  onCloseFilterPopup: () => void;
  onReloadData: () => void;
};

const ApplicationsContext = createContext<ApplicationsContextType>({
  currentStatus: undefined,
  setCurrentStatus: () => {},
  onOpenFilterPopup: () => {},
  onCloseFilterPopup: () => {},
  onReloadData: () => {},
});

export const useApplicationsContext = () => {
  const applicationsContext = useContext(ApplicationsContext);

  if (!applicationsContext) {
    throw new Error(
      "ApplicationsContext has to be used within <ApplicationsContext.Provider>"
    );
  }

  return applicationsContext;
};

export default ApplicationsContext;
