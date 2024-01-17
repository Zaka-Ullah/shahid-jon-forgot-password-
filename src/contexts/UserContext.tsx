import { createContext, useContext, useMemo, useReducer } from "react";

type UserPayload = {
  user: {
    docId?: string;
    docType?: string;
    dob?: string;
  };
};

type UserContextType = {
  state: UserPayload;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: {
    docId: "ABC",
    docType: "ABC",
    dob: "2023-10-25",
  },
};

const UserContext = createContext<UserContextType>({
  state: initialState,
  dispatch: () => null,
});

//* reducer define
const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const UserProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
export default UserContext;
