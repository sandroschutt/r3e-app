/**
 * UserDataContext must fetch user data from the api
 * Attributes:
 *  name, email, address, phone
 */

import { Routes, Route } from 'react-router-dom'
import { UserDataContext } from '../context/UserDataContext'
import UserLayout from '../layout/UserLayout'
import Dashboard from '../pages/User/Dashboard'
import PublicDevices from '../pages/User/PublicDevices'
import SingleDevices from '../pages/User/SingleDevices'
import Profile from '../pages/User/Profile'
import Pickups from '../pages/User/Pickups'
import PickupLocations from '../pages/User/PickupLocations'
import SinglePickupLocation from '../pages/User/SinglePickupLocation'
import MapView from '../pages/User/MapView'
import { SettingsView } from '../pages/User/SettingsView'
import SinglePickup from '../pages/User/SinglePickup'
import PaymentsView from '../pages/User/PaymentsView'
import SinglePayment from '../pages/User/SinglePayment'
import UserProfile from "../pages/Admin/UserProfile";
import Integrations from "../pages/Admin/Integrations";
import ManageStudents from '../pages/Admin/ManageStudents'
import ManageSchoolDeviceRequests from '../pages/Admin/ManageSchoolDeviceRequests'
import SingleSchoolDeviceRequest from '../pages/User/SingleSchoolDeviceRequest'

export default function UserRoutes () {
  return (
    <UserDataContext>
      <UserLayout>
        <Routes>
          <Route path='/' element={<Dashboard user={'user'} />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path='/map' element={<MapView />} />
          <Route path='/devices' element={<PublicDevices />} />
          <Route path='/devices/:id' element={<SingleDevices />} />
          <Route path={'/pickups'} element={<Pickups />} />
          <Route path={'/pickups/:id'} element={<SinglePickup />} />
          <Route path='/payments' element={<PaymentsView />} />
          <Route path='/payments/:id' element={<SinglePayment />} />
          <Route path={'/pickup-locations'} element={<PickupLocations />} />
          <Route
            path={'/pickup-locations/:id'}
            element={<SinglePickupLocation />}
          />
          <Route path='/settings' element={<SettingsView />} />
          <Route path="/integrations" element={<Integrations/>}/>
          <Route path="/students" element={<ManageStudents />} />
          <Route path="/school-device-requests" element={<ManageSchoolDeviceRequests/>}/>
          <Route path="/school-device-requests/:id" element={<SingleSchoolDeviceRequest/>}/>
        </Routes>
      </UserLayout>
    </UserDataContext>
  )
}
