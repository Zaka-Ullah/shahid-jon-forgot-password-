import { FavouriteDialogType } from "types/types";
import { createContext, useContext } from "react";

type EcatalogContextType = {
  setFavouriteDialog: (data: FavouriteDialogType) => void;
  onReloadOptionsData: () => void;
};

const ECatalogContext = createContext<EcatalogContextType>({
  setFavouriteDialog: () => {},
  onReloadOptionsData: () => {},
});

export const useECatalogContext = () => {
  const ecatalogContext = useContext(ECatalogContext);

  if (!ecatalogContext) {
    throw new Error(
      "EcatalogContext has to be used within <EcatalogContext.Provider>"
    );
  }

  return ecatalogContext;
};

export default ECatalogContext;
