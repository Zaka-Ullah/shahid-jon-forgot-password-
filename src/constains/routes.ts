import { SidebarItemType } from "types/types";
import { HomeIcon, MailIcon, SettingIcon, UserIcon } from "assets/icons";

export const PATHS = {
  home: "",
  email: "/email",
  profile: "/user-profile",
  changePw: "/user-profile/change-pw",
  userSMSOTP: "/user-profile/sms-otp",
  userEmailOTP: "/user-profile/email-otp",
  userSMSEmailOTP: "/user-profile/sms-email-otp",
  setting: "/setting",
};

export const ROUTES: SidebarItemType[] = [
  {
    label: "Home",
    icon: HomeIcon,
    link: PATHS.home,
  },
  {
    label: "Email",
    icon: MailIcon,
    link: PATHS.email,
  },
  {
    label: "Profile",
    icon: UserIcon,
    link: PATHS.profile,
  },
  {
    label: "Support",
    icon: SettingIcon,
    link: PATHS.setting,
    options: [
      {
        label: "Caculator",
        icon: HomeIcon,
        options: [
          { label: "Option 1", link: "https://facebook.com" },
          { label: "Option 2" },
        ],
      },
      {
        label: "Caculator",
        icon: HomeIcon,
        options: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    ],
  },
];
