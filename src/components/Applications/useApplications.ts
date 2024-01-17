import { useEffect, useState } from "react";

const useApplications = () => {
  const [currentStatus, setCurrentStatus] = useState<string>("All");
  const [showFilter, setShowFilter] = useState(false);
  const [reloadData, setreloadData] = useState(false);

  const onCloseFilterPopup = () => {
    setShowFilter(false);
  };

  const onOpenFilterPopup = () => {
    setShowFilter(true);
  };

  const onReloadData = () => {
    setreloadData(!reloadData);
  };

  useEffect(() => {
    console.log("reload data" + currentStatus);
  }, [currentStatus, reloadData]);

  return {
    showFilter,
    currentStatus,
    setCurrentStatus,
    onCloseFilterPopup,
    onOpenFilterPopup,
    onReloadData,
  };
};

export default useApplications;
