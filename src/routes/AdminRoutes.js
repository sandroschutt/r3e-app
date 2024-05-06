/**
 * UserDataContext must fetch user data from the api
 * Attributes:
 *  name, email, address, phone
*/

import { Routes, Route } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import Dashboard from "../pages/User/Dashboard";
import ManageUsers from "../pages/Admin/ManageUsers";

export default function AdminRoutes() {
  return (
    <UserDataContext>
      <Routes>
        <Route path="/" element={<Dashboard user={"admin"}/>} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/students" element={<ManageUsers />} />
        <Route path="/recycling-settings" element={<ManageUsers />} />
      </Routes>
    </UserDataContext>
  );
}
