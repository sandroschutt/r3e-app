/**
 * UserDataContext must fetch user data from the api
 * Attributes:
 *  name, email, address, phone
 */

import { Routes, Route } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContext";
import Dashboard from "../pages/Admin/Dashboard";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageStudents from "../pages/Admin/ManageStudents";
import PublicDevices from "../pages/User/PublicDevices";
import SingleDevices from "../pages/User/SingleDevices";
import Pickups from "../pages/User/Pickups";
import PickupLocations from "../pages/User/PickupLocations";
import SinglePickupLocation from "../pages/User/SinglePickupLocation";
import MapView from "../pages/User/MapView";
import SinglePickup from "../pages/User/SinglePickup";
import UserLayout from "../layout/UserLayout";
import { SettingsView } from "../pages/User/SettingsView";
import ManageReturnProcess from "../pages/Admin/ManageReturnProcess";
import Workshop from "../pages/Admin/Workshop";
import Integrations from "../pages/Admin/Integrations";
import UserProfile from "../pages/Admin/UserProfile";

export default function AdminRoutes() {
  return (
    <UserDataContext>
      <UserLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/users/:id/devices" element={<PublicDevices />} />
          <Route path="/users/:id/pickups" element={<Pickups />} />
          <Route path="/students" element={<ManageStudents />} />
          <Route path="/recycling-settings" element={<ManageReturnProcess />} />
          <Route path="/devices" element={<PublicDevices />} />
          <Route path="/devices/:id" element={<SingleDevices />} />
          <Route path={"/pickups"} element={<Pickups />} />
          <Route path={"/pickups/:id"} element={<SinglePickup />} />
          <Route path={"/pickup-locations"} element={<PickupLocations />} />
          <Route path={"/pickup-locations/:id"} element={<SinglePickupLocation />} />
          <Route path={"/workshop"} element={<Workshop/>} />
          <Route path="/map" element={<MapView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/integrations" element={<Integrations/>}/>
        </Routes>
      </UserLayout>
    </UserDataContext>
  );
}
