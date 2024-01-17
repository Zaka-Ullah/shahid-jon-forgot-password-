import { SxProps } from "@mui/material";
import { FC, ReactNode, SVGProps } from "react";

export type SubMenuItemType = {
  title: string;
  isFavourite?: boolean;
  url?: string;
  menuItems?: SubMenuItemType[];
};

export type MenuItemType = {
  title: string;
  icon: string;
  menuItems?: SubMenuItemType[];
};

export type TipItemType = {
  title?: string;
  icon?: string;
  menuItems?: SubMenuItemType[];
};

export type OptionType = {
  id: number;
  title: string;
  titleBackgroundColor: string;
  contentBackgroundColor: string;
  icon: string;
  guideSubject: string;
  guideTitle: string;
  guideSubTitle?: string;
  guideIcon?: string;
  guideButtonText?: string;
  guideButtonBg: string;
  showFull?: boolean;
  menuItems?: MenuItemType[];
  tips?: TipItemType;
};
export type ExpandOptionType = {
  id: number;
  title: string;
  titleBackgroundColor: string;
  contentBackgroundColor: string;
  icon: string;
  buttonText?: string;
  buttonBg?: string;
};

export type FavouriteDialogType = {
  open: boolean;
  data?: any;
};

export type ChildrenType = string | JSX.Element | JSX.Element[];

export type NotificationType = {
  id: number;
  title: string;
  content: string;
};

export type ScheduleType = {
  id: number;
  date?: string;
  time?: string;
  subject: string;
  description: string;
};

export type FavouriteItemType = {
  id?: number;
  name: string;
  link: string;
};

export type CefBalanceDataType = {
  accountBalance: number;
  count: number;
  maximumEntitlement: number;
};

export type DoughnutType = {
  circlCut?: number;
  value?: number;
  total?: number;
  size?: string | number;
  thickness?: number;
  colors?: string[];
  children?: ReactNode;
  className?: string;
  sx?: SxProps;
  width?: string;
};

export type RunningTextDialogType = {
  open: boolean;
  data?: any;
};

export type CustomPopupType = {
  open: boolean;
  onClose: () => void;
  title?: string;
  titleComponent?: ChildrenType;
  children: ChildrenType;
  maxWidth?: number | string;
  maxHeight?: number | string;
  actionBtns?: ChildrenType;
};

export type SelectItemType = {
  label?: string;
  value?: any;
};

export type ApplicationType = {
  applicationNo: string | number;
  scheme: string;
  remark?: string;
  statusDescription?: string;
  statusCode?: string;
  date?: string;
};

export type SidebarItemType = {
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  options?: SidebarItemOptionType[];
  link?: string;
};

export type SidebarItemOptionType = {
  label: string;
  icon: any;
  options?: SubSidebarItemOptionType[];
};

export type SubSidebarItemOptionType = {
  label: string;
  link?: string;
};

export type DemandNoteInfoType = {
  schemeType: string;
  atmPpsRefNum: string;
  demandNoteRefNum: string;
  outstandingPayable: number;
  issueDate: string;
  dueDate: string;
  loanInfoList?: LoadInfoType[];
  remark?: string;
};

export type LoadInfoType = {
  loanRefNum: string;
  loanStatus: string;
  principal: number | string;
  principalRepaid: number;
};

export type SchemeType = {
  label: string;
  value: string;
};
