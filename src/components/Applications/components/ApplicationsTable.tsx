import {
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  Box,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import Img from "components/Img";
import iconsData from "constains/icons";
import { useApplicationsContext } from "contexts/ApplicationsContext";
import { useMemo, useState } from "react";
import billAndLoans from "services/getApplication.json";
import { formatNullString } from "utils/stringUtils";
import { ApplicationType } from "types/types";
import {
  StyledCenterStack,
  StyledTable,
} from "./ApplicationsTable.styles";
import StatusPopup from "./StatusPopup";
type Props = {};
type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: keyof ApplicationType;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "applicationNo",
    numeric: false,
    disablePadding: true,
    label: "Application No",
  },
  {
    id: "scheme",
    numeric: true,
    disablePadding: false,
    label: "Scheme",
  },
  {
    id: "remark",
    numeric: true,
    disablePadding: false,
    label: "Remark",
  },
  {
    id: "statusCode",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

const ApplicationsTable = (props: Props) => {
  const [billAndLoansData] = useState<ApplicationType[]>(
    billAndLoans.map((data) => ({
      ...data,
      applicationNo: parseInt(data.applicationNo),
    }))
  );
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("statusCode");
  const [page] = useState(0);
  const [rowsPerPage] = useState(100);

  const { currentStatus } = useApplicationsContext();
  const [openTooltip, setOpenTooltip] = useState<{
    open: boolean;
    anchorEl?: any;
    data?: {
      statusDescription: "";
    };
  }>({
    open: false,
    anchorEl: null,
  });

  let getBillAndLoansData = useMemo(() => {
    if (currentStatus === "All") {
      return billAndLoansData;
    }
    return billAndLoansData.filter((data) => data.statusCode === currentStatus);
  }, [currentStatus]);

  const billAndLoads = useMemo(
    () =>
      stableSort(getBillAndLoansData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, currentStatus]
  );

  function descendingComparator<T>(a: T, b: T, orderByC: keyof T) {
    if (b[orderByC] < a[orderByC]) {
      return -1;
    }
    if (b[orderByC] > a[orderByC]) {
      return 1;
    }
    return 0;
  }

  const onCloseTooltip = () => {
    setOpenTooltip({ ...openTooltip, open: false });
  };

  const onOpenTooltip = (e?: any, data?: any) => {
    setOpenTooltip({ open: true, anchorEl: e?.currentTarget, data });
  };

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    console.log("property", property);
    console.log("isAsc", isAsc);
  };

  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      console.log("a", a[0]);
      console.log("b", b[0]);
      const orderC = comparator(a[0], b[0]);
      if (orderC !== 0) {
        return orderC;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function getComparator<Key extends keyof any>(
    orderC: Order,
    orderByC: Key
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
    return orderC === "desc"
      ? (a, b) => descendingComparator(a, b, orderByC)
      : (a, b) => -descendingComparator(a, b, orderByC);
  }

  return (
    <TableContainer
      sx={{
        height: "100%",
        "&::-webkit-scrollbar": {
          width: 4,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#d9d9d9",
          borderRadius: 4,
        },
      }}
    >
      <StyledTable className="MYSCROLLBAR">
        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {billAndLoads.map((billAndLoan, idx) => {
            let { applicationNo, scheme, remark, date, statusCode } =
              billAndLoan;
            return (
              <TableRow key={idx}>
                <TableCell width="15%">{applicationNo}</TableCell>
                <TableCell width="35%">{scheme}</TableCell>
                <TableCell className="bold" width="15%">
                  {formatNullString(remark)}
                </TableCell>
                <TableCell width="35%">
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <StyledCenterStack direction="row" spacing={1} flex={1}>
                      <span
                        className="spanFlex"
                        onClick={(e: any) => onOpenTooltip(e, billAndLoan)}
                      >
                        <Img
                          src={iconsData.yellowInfo}
                          alt="icon"
                          className="status-icon"
                        />
                      </span>
                      <Typography className="bold">
                        {formatNullString(statusCode)}
                      </Typography>
                    </StyledCenterStack>
                    <Typography className="date-text">
                      {formatNullString(date)}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>

      <StatusPopup
        open={openTooltip.open}
        onClose={onCloseTooltip}
        anchorEl={openTooltip.anchorEl}
        description={openTooltip.data?.statusDescription}
      />
    </TableContainer>
  );
};

export { ApplicationsTable };
