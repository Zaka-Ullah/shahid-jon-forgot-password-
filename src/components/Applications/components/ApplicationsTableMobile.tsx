import { Fragment, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ApplicationType } from "types/types";
import billAndLoans from "services/getApplication.json";
import { StyledApplicationBox, StyledSwiper } from "./ApplicationsTable.styles";
import { headCells } from "./ApplicationsTable";
import Img from "components/Img";
import iconsData from "constains/icons";
import StatusPopup from "./StatusPopup";
import { formatNullString } from "utils/stringUtils";
import { useApplicationsContext } from "contexts/ApplicationsContext";

type Props = {};

const ApplicationsTableMobile = (props: Props) => {
  const { currentStatus } = useApplicationsContext();

  let billAndLoansData = useMemo(() => {
    if (currentStatus === "All") {
      return billAndLoans;
    }
    return billAndLoans.filter((data) => data.statusCode === currentStatus);
  }, [currentStatus]);

  return (
    <StyledSwiper>
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation, Pagination]}
      >
        {billAndLoansData.map((application) => (
          <SwiperSlide key={application.applicationNo}>
            <ApplicationBox {...{ application }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};

const ApplicationBox = ({ application }: { application: ApplicationType }) => {
  const [openTooltip, setOpenTooltip] = useState<{
    open: boolean;
    anchorEl?: any;
    data?: string;
  }>({
    open: false,
    anchorEl: null,
  });

  const onCloseTooltip = () => {
    setOpenTooltip({ ...openTooltip, open: false });
  };

  const onOpenTooltip = (e?: any) => {
    setOpenTooltip({
      open: true,
      anchorEl: e?.currentTarget,
      data: application.statusDescription,
    });
  };

  return (
    <StyledApplicationBox spacing={1}>
      {headCells.map((field) => {
        const isStatusCode = field.id === "statusCode";

        return (
          <Fragment key={field.id}>
            <Typography className="title">{field.label}:</Typography>
            <Stack spacing={2} direction="row" alignItems="center">
              {isStatusCode && (
                <span className="spanFlex" onClick={onOpenTooltip}>
                  <Img
                    src={iconsData.yellowInfo}
                    alt="icon"
                    className="status-icon"
                  />
                </span>
              )}
              <Typography variant="body2">{application[field.id]}</Typography>

              {isStatusCode && (
                <Typography variant="body2" className="date-text">
                  {formatNullString(application.date)}
                </Typography>
              )}
            </Stack>
          </Fragment>
        );
      })}

      <StatusPopup
        open={openTooltip.open}
        onClose={onCloseTooltip}
        anchorEl={openTooltip.anchorEl}
        description={openTooltip.data}
      />
    </StyledApplicationBox>
  );
};

export default ApplicationsTableMobile;
