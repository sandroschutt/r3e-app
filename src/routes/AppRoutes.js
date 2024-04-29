import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import Dashboard from "../pages/User/Dashboard";
import PublicDevices from "../pages/User/PublicDevices";
import SingleDevices from "../pages/User/SingleDevices";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <AuthRoutes />
            </AuthLayout>
          }
        />
        <Route path="/dashboard/role" element={<Dashboard />} />
        <Route path="/public/devices" element={<PublicDevices />} />
        <Route path="/single/device" element={<SingleDevices />} />
      </Routes>
    </BrowserRouter>
  );
}
