/**
 * If NOT admin, return UserDashboard else return AdminDashboard
*/

import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import UserDashboard from "../../../components/Dashboards/User";
import AdminDashboard from "../../../components/Dashboards/Admin";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();

  console.log(userData);

  function roleTemplate(role) {
    if(role === "admin") {
      return <AdminDashboard />;
    } else {
      return <UserDashboard />;
    }
  }

  return (
    <>
      <h1>Dashboard</h1>
      <div className="profile-view">
        {
          roleTemplate("admin")
        }
      </div>
    </>
  );
}
