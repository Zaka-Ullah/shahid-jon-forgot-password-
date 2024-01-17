import { useEffect, useMemo, useState } from "react";
import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Close } from "@mui/icons-material";

import iconsData from "../../../constains/icons";
import Layer4BoxTemplate from "./Layer4BoxTemplate";
import { FavouriteDialogType, FavouriteItemType } from "types/types";
import ConfirmPopup from "../../CustomPopup";
import favouriteData from "../../../services/getFavourite.json";
import { useHomeContext } from "../../../contexts/HomeContext";
import ConfirmsButtons from "../../ConfirmsButtons";

type Props = { 
  allHeaderHeight: number;
  setAllHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
};

const underlineString = "----------";
const FAVOURITE_ITEMS_LEN_MAX = 6;

const Favourite = (props: Props) => {
  const { reloadFavouriteList, onReloadFavouriteList, onReloadOptions } =
    useHomeContext(); 
  const {allHeaderHeight,setAllHeaderHeight}=props
  const [favouriteItems, setFavouriteItems] = useState<FavouriteItemType[]>([]);
  const [deleteDialog, setDeleteDialog] = useState<FavouriteDialogType>({
    open: false,
  });
  const favouriteItemsLength = useMemo(
    () => favouriteItems.length,
    [favouriteItems]
  );

  const onClickLink = (link?: string) => {
    window.open(link);
  };

  const onClickDeleteFavouriteItem = (id?: number) => {
    setDeleteDialog({
      open: true,
      data: { id },
    });
  };

  const onCloseFavouriteDialog = () => {
    setDeleteDialog({ ...deleteDialog, open: false });
  };

  const onConfirmDeleteFavouriteItem = () => {
    onReloadFavouriteList();
    onReloadOptions();
  };

  const fetchFavouriteList = async () => {
    setFavouriteItems(favouriteData);
    console.log("call api layer 4 (favourite)");
  };

  useEffect(() => {
    fetchFavouriteList();
  }, [reloadFavouriteList]);

  return (
    <Layer4BoxTemplate title="Box 3" current="favourite" icon={iconsData.favourite} 
      allHeaderHeight={allHeaderHeight} 
      setAllHeaderHeight={setAllHeaderHeight}
     canscroll={false}>
      <Box className="content-box">
        <Box p={2} px={2.5} height="100%" boxSizing="border-box">
          {favouriteItems.length < 1 && (
            <StyledTypography>
              <StyledStarIcon />
              You can select frequently used links in the "Sponsorship Program
              Directory", and then click to add the link here
            </StyledTypography>
          )}
          <Stack spacing={1} justifyContent="space-evenly" height="100%">
            {Array.from(Array(FAVOURITE_ITEMS_LEN_MAX).keys()).map((_, idx) => {
              let isNullFavouriteItem = favouriteItemsLength < idx + 1;
              let currentFavouriteItem: FavouriteItemType = {
                id: undefined,
                link: "",
                name: "",
              };
              if (!isNullFavouriteItem) {
                currentFavouriteItem = favouriteItems[idx];
              }

              return (
                <Stack
                  key={idx}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {isNullFavouriteItem ? (
                    underlineString
                  ) : (
                    <>
                      <StyledTypography
                        islink={true}
                        onClick={() => onClickLink(currentFavouriteItem?.link)}
                      >
                        {currentFavouriteItem?.name}
                      </StyledTypography>
                      <StyledCloseButton
                        onClick={() =>
                          onClickDeleteFavouriteItem(currentFavouriteItem.id)
                        }
                      >
                        <Close />
                      </StyledCloseButton>
                    </>
                  )}
                </Stack>
              );
            })}
          </Stack>
        </Box>
      </Box>

      <ConfirmPopup
        open={deleteDialog.open}
        onClose={onCloseFavouriteDialog}
        title="Delete?"
      >
        <ConfirmsButtons
          onClickCancel={onCloseFavouriteDialog}
          onClickAccept={onConfirmDeleteFavouriteItem}
        />
      </ConfirmPopup>
    </Layer4BoxTemplate>
  );
};

const StyledTypography = styled(Typography)<{ islink?: boolean }>(
  ({ islink = false }) => ({
    display: "flex",
    textDecoration: islink ? "underline" : "initial",
    cursor: islink ? "pointer" : "initial",
    gap: 4,
  })
);

const StyledStarIcon = styled(StarIcon)({
  width: 8,
});

const StyledCloseButton = styled(IconButton)({
  width: 22,
  height: 22,
  "& svg": {
    width: 16,
    height: 16,
  },
});

export default Favourite;
