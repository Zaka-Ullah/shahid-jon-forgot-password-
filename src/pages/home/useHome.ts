import { useCallback, useEffect, useMemo, useState } from "react";
import { DemandNoteInfoType } from "types/types";
import tabsData from "services/getBillandLoans.json";

const useHome = () => {
  const [reLoadOptions, setReLoadOptions] = useState(false);
  const [reloadFavouriteList, setReloadFavouriteList] = useState(false);
  const [verifiedAccount] = useState(true);
  const [tabs, setTabs] = useState<DemandNoteInfoType[]>([]);
  const [messageDisplay, setmessageDisplay] = useState<string>();
  const [reloadTabs, setReloadTabs] = useState(false);

  const onReloadFavouriteList = () => {
    setReloadFavouriteList(!reloadFavouriteList);
  };

  const onReloadOptions = () => {
    setReLoadOptions(!reLoadOptions);
  };

  const onReloadTabs = useCallback(() => {
    setReloadTabs(!reloadTabs);
  }, [setReloadTabs, reloadTabs]);

  useEffect(() => {
    setTabs(tabsData.demandNoteInfoList);
    setmessageDisplay(tabsData.messageDisplay);
    console.log("fetch tab api");
  }, [reloadTabs]);

  const isGroupWithL2 = useMemo(() => {
    return tabs?.length < 1 && !messageDisplay;
  }, [tabs, messageDisplay]);

  const homeContextData = {
    reLoadOptions,
    reloadFavouriteList,
    verifiedAccount,
    tabs,
    messageDisplay,
    onReloadTabs,
    onReloadFavouriteList,
    onReloadOptions,
    isGroupWithL2,
  };

  return {
    homeContextData,
  };
};

export default useHome;
