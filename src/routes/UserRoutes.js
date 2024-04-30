/**
 * UserDataContext must fetch user data from the api
 * Attributes:
 *  name, email, address, phone
*/

import { Routes, Route } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import Dashboard from "../pages/User/Dashboard";
import PublicDevices from "../pages/User/PublicDevices";
import SingleDevices from "../pages/User/SingleDevices";
import Profile from "../pages/User/Profile";

export default function UserRoutes() {
  return (
    <UserDataContext>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/public-devices" element={<PublicDevices />} />
        <Route path="/single-device" element={<SingleDevices />} />
      </Routes>
    </UserDataContext>
  );
}
