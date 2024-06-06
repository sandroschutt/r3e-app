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
import Integrations from '../pages/User/Integrations'

export default function UserRoutes () {
  return (
    <UserDataContext>
      <UserLayout>
        <Routes>
          <Route path='/' element={<Dashboard user={'user'} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/devices' element={<PublicDevices />} />
          <Route path='/devices/:id' element={<SingleDevices />} />
          <Route path={'/pickups'} element={<Pickups />} />
          <Route path={'/pickups/:id'} element={<SinglePickup />} />
          <Route path={'/pickup-locations'} element={<PickupLocations />} />
          <Route
            path={'/pickup-locations/:id'}
            element={<SinglePickupLocation />}
          />
          <Route path='/map' element={<MapView />} />
          <Route path='/settings' element={<SettingsView />} />
          <Route path='/integrations' element={<Integrations />} />
        </Routes>
      </UserLayout>
    </UserDataContext>
  )
}
