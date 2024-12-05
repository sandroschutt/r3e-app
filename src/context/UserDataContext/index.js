import { createContext, useContext, useEffect, useState } from "react";
import User from "../../classes/User";
import Cookies from "js-cookie";

const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  useEffect(() => {
    if (userData === "") {
      let r3eCookie = Cookies.get("_r3e");

      if (r3eCookie !== undefined) {
        let data = JSON.parse(r3eCookie);
        new User(data.user).data(setUserData);
      }
    }
  }, [userData]);

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
