/**
 * If NOT admin, return UserDashboard else return AdminDashboard
*/

import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import AdminDashboard from "../../../components/Dashboards/Admin";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();

  return (
    <>
      <h1>Painel de controle</h1>
      <div className="profile-view">
        <AdminDashboard />
      </div>
    </>
  );
}
