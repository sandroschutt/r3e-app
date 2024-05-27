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
import ManageReturncategories from "../pages/Admin/ManageReturncategories";
import PublicDevices from "../pages/User/PublicDevices";
import SingleDevices from "../pages/User/SingleDevices";
import Pickups from "../pages/User/Pickups";
import PickupLocations from "../pages/User/PickupLocations";
import SinglePickupLocation from "../pages/User/SinglePickupLocation";
import MapView from "../pages/User/MapView";
import SinglePickup from "../pages/User/SinglePickup";
import UserLayout from "../layout/UserLayout";
import { SettingsView } from "../pages/User/SettingsView";

export default function AdminRoutes() {
  return (
    <UserDataContext>
      <UserLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/students" element={<ManageStudents />} />
          <Route
            path="/recycling-settings"
            element={<ManageReturncategories />}
          />
          <Route path="/devices" element={<PublicDevices />} />
          <Route path="/devices/:id" element={<SingleDevices />} />
          <Route path={"/pickups"} element={<Pickups />} />
          <Route path={"/pickups/:id"} element={<SinglePickup />} />
          <Route path={"/pickup-locations"} element={<PickupLocations />} />
          <Route path={"/pickup-location"} element={<SinglePickupLocation />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </UserLayout>
    </UserDataContext>
  );
}
