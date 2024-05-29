import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col } from "react-bootstrap";
import UserDashboard from "../../../components/Dashboards/User";
import AdminDashboard from "../../../components/Dashboards/Admin";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();
  const [role, setRole] = useState("");

  useEffect(() => {
    if(userData.user !== undefined && role === "") {
      setRole(userData.user.role);
    }
  }, [userData, role])
  
  function renderDashboard(role) {
    switch(role) {
      default:
        return <UserDashboard />
      case "Admin":
        return <AdminDashboard />
      case "Cliente":
        return <UserDashboard />
    }
  }

  return (
    <div className="profile-view">
      <Col className="dashboard-header mb-5">
        <h1 className="w-100">Painel de controle</h1>
      </Col>
      {
        renderDashboard(role)
      }
    </div>
  );
}
