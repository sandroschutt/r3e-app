import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col } from "react-bootstrap";
import UserDashboard from "../../../components/Dashboards/User";
import AdminBoard from "../../Admin/AdminBoard";

export default function Dashboard() {
  const { userData } = useUserDataContext();

  function renderDashboard(role) {
    if (role === "Admin") {
      return <AdminBoard />;
    }

    if (role !== "Admin") {
      return <UserDashboard />;
    }
  }

  return (
    <div className="profile-view">
      <Col className="dashboard-header mb-5">
        <h1 className="w-100">Painel de controle</h1>
      </Col>
      {renderDashboard(userData.role)}
    </div>
  );
}
