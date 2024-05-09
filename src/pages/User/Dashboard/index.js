/**
 * If NOT admin, return UserDashboard else return AdminDashboard
*/

import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import UserDashboard from "../../../components/Dashboards/User";
// import AdminDashboard from "../../../components/Dashboards/Admin";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();

  console.log(userData);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="profile-view">
        <UserDashboard />
      </div>
    </>
  );
}
