// import { FavouriteDialogType } from "types/types";
import { createContext, useContext } from "react";
import { DemandNoteInfoType } from "types/types";

type HomeContextType = {
  reLoadOptions: boolean;
  reloadFavouriteList: boolean;
  verifiedAccount: boolean;
  tabs: DemandNoteInfoType[];
  messageDisplay?: string;
  onReloadTabs: () => void;
  onReloadFavouriteList: () => void;
  onReloadOptions: () => void;
  isGroupWithL2: boolean;
};

const HomeContext = createContext<HomeContextType>({
  reLoadOptions: false,
  reloadFavouriteList: false,
  verifiedAccount: false,
  tabs: [],
  messageDisplay: undefined,
  onReloadTabs: () => {},
  onReloadFavouriteList: () => {},
  onReloadOptions: () => {},
  isGroupWithL2: true,
});

export const useHomeContext = () => {
  const homeContext = useContext(HomeContext);

  if (!homeContext) {
    throw new Error(
      "useHomeContext has to be used within <HomeContext.Provider>"
    );
  }

  return homeContext;
};

export default HomeContext;
