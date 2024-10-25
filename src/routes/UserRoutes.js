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
import { Route, Routes } from "react-router-dom";
import NotFoundComponent from "../pages/404.js";

export default function UserRoutes() {
  return (
    <UserDataContext>
      <UserLayout>
        <Routes>
          <Route path="/" element={<Dashboard user={"user"} />} />
          <Route path="/dashboard" element={<Dashboard user={"user"} />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/devices" element={<PublicDevices />} />
          <Route path="/devices/:id" element={<SingleDevices />} />
          <Route path={"/pickups"} element={<Pickups />} />
          <Route path={"/pickups/:id"} element={<SinglePickup />} />
          <Route path="/payments" element={<PaymentsView />} />
          <Route path="/payments/:id" element={<SinglePayment />} />
          <Route path={"/pickup-locations"} element={<PickupLocations />} />
          <Route
            path={"/pickup-locations/:id"}
            element={<SinglePickupLocation />}
          />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route
            path="/school-device-requests"
            element={<ManageSchoolDeviceRequests />}
          />
          <Route
            path="/school-device-requests/:id"
            element={<SingleSchoolDeviceRequest />}
          />
          {/* Admin routes */}
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/users/:id/devices" element={<PublicDevices />} />
          <Route path="/users/:id/pickups" element={<Pickups />} />
          <Route path="/students" element={<ManageStudents />} />
          <Route path="/recycling-settings" element={<ManageReturnProcess />} />
          <Route path="/device-brands" element={<DeviceBrands />} />
          <Route path="/device-models" element={<DeviceModels />} />
          <Route path={"/workshop"} element={<Workshop />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/capabilities" element={<CapabilitiesComponent />} />
          <Route path="/404" element={<NotFoundComponent />} />
        </Routes>
      </UserLayout>
    </UserDataContext>
  );
}
