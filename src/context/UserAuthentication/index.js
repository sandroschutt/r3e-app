import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserAuthContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <UserContext.Provider value={{userData, updateUserData}}>{children}</UserContext.Provider>
  );
}

const useUserAuthContext = () => {
  return useContext(UserContext);
}

export { useUserAuthContext, UserAuthContext };
