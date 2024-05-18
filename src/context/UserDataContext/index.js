import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  if(userData === "") {
    // Fetch user data from api
    // Set user data
    setUserData({role: "user"})
  }

  return (
    <UserContext.Provider value={{userData, updateUserData}}>{children}</UserContext.Provider>
  );
}

const useUserDataContext = () => {
  return useContext(UserContext);
}

export { useUserDataContext, UserDataContext };
