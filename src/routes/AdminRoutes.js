/**
 * UserDataContext must fetch user data from the api
 * Attributes:
 *  name, email, address, phone
*/

import { Routes, Route } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import Dashboard from "../pages/User/Dashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageStudents from "../pages/Admin/ManageStudents";
import ManageReturncategories from "../pages/Admin/ManageReturncategories";

export default function AdminRoutes() {
  return (
    <UserDataContext>
      <Routes>
        <Route path="/" element={<Dashboard user={"admin"}/>} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/students" element={<ManageStudents />} />
        <Route path="/recycling-settings" element={<ManageReturncategories />} />
      </Routes>
    </UserDataContext>
  );
}
