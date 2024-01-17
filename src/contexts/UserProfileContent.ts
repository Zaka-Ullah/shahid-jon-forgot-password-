import { createContext, useContext } from "react";
import { SelectionType } from "types/setting";
import { UserProfileType } from "types/user";

type UserProfileContextType = {
  updatedData: any;
  onTurnOnEditMode: () => void;
  onTurnOffEditMode: () => void;
  editMode: boolean;
  userProfile?: UserProfileType;
  settingData: SelectionType[];
  onUpdateUserProfile: (data?: any) => void;
  onChangeUpdateData: (data?: any) => void;
  onClearUpdatedData: () => void;
  onReloadUserProfile: () => void;
};

const UserProfileContext = createContext<UserProfileContextType>({
  updatedData: {},
  onTurnOnEditMode: () => {},
  onTurnOffEditMode: () => {},
  editMode: false,
  userProfile: undefined,
  settingData: [],
  onUpdateUserProfile: () => {},
  onChangeUpdateData: () => {},
  onClearUpdatedData: () => {},
  onReloadUserProfile: () => {}
});

export const useUserProfileContext = () => {
  const userProfileContext = useContext(UserProfileContext);

  if (!userProfileContext) {
    throw new Error(
      "UserProfileContext has to be used within <UserProfileContext.Provider>"
    );
  }

  return userProfileContext;
};

export default UserProfileContext;
