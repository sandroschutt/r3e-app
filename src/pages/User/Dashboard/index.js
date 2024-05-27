import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col } from "react-bootstrap";
import UserDashboard from "../../../components/Dashboards/User";
import AdminDashboard from "../../../components/Dashboards/Admin";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();

  function renderDashboard(role) {
    switch(role) {
      case "Admin":
        return <AdminDashboard />
      case "Cliente":
        return <UserDashboard />
    }
  }

  return (
    <div className="profile-view">
      <Col className="dashboard-header">
        <h1 className="w-100">Painel de controle</h1>
      </Col>
      {
        renderDashboard("Admin")
      }
    </div>
  );
}
