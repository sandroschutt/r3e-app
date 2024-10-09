import { createContext, useContext, useEffect, useState } from "react";
import User from "../../classes/User";

const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  useEffect(() => {
    if(userData === "") {
      new User(2).data(setUserData);
    }
  }, [userData])

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

const useUserDataContext = () => {
  return useContext(UserContext);
};

export { useUserDataContext, UserDataContext };
