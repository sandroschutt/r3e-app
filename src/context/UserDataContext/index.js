import { createContext, useContext, useEffect, useState } from "react";
import Client from "../../classes/roles/Client";

const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  useEffect(() => {
    if(userData === "") {
      let user = new Client(1);
      setUserData(user.getUserData(setUserData));
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
