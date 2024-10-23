import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import AuthRoutes from "./AuthRoutes";
import Dashboard from "../pages/User/Dashboard";
import UserProfile from "../pages/Admin/UserProfile";
import PublicDevices from "../pages/User/PublicDevices";
import SingleDevices from "../pages/User/SingleDevices";
import Pickups from "../pages/User/Pickups";
import SinglePickup from "../pages/User/SinglePickup";
import PaymentsView from "../pages/User/PaymentsView";
import SinglePayment from "../pages/User/SinglePayment";
import PickupLocations from "../pages/User/PickupLocations";
import { SettingsView } from "../pages/User/SettingsView";
import Integrations from "../pages/Admin/Integrations";
import ManageStudents from "../pages/Admin/ManageStudents";
import ManageSchoolDeviceRequests from "../pages/Admin/ManageSchoolDeviceRequests";
import SingleSchoolDeviceRequest from "../pages/User/SingleSchoolDeviceRequest";
import SinglePickupLocation from "../pages/User/SinglePickupLocation";
import { UserDataContext } from "../context/UserDataContext";
import UserLayout from "../layout/UserLayout";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageReturnProcess from "../pages/Admin/ManageReturnProcess";
import DeviceBrands from "../pages/User/DeviceBrands.js";
import DeviceModels from "../pages/User/DeviceModels";
import Workshop from "../pages/Admin/Workshop";
import CapabilitiesComponent from "../components/capabilities";
import UserRoutes from "./UserRoutes.js";

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
        <Route path="/app/*" element={<UserRoutes/>} />
      </Routes>
    </BrowserRouter>
  );
}
