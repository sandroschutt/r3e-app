import { createContext, useContext, useEffect, useState } from "react";
import User from "../../classes/User";

const UserContext = createContext();

function UserDataContext({ children }) {
  const [userData, setUserData] = useState("");

  const updateUserData = (newData) => {
    setUserData(newData);
  };

  useEffect(() => {
    if (userData === "") {
      let cookie = JSON.parse(getCookie("_r3e"));
      new User(cookie.user).data(setUserData);
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

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { useUserDataContext, UserDataContext };
