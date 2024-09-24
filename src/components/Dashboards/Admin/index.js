import "./style.scss";
import { DeviceList, PickupsList, UserList } from "../../Lists";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Device from "../../../classes/Device";
import Admin from "../../../classes/Admin";

export default function AdminDashboard() {
  const [users, setUsers] = useState("");
  const [schedules, setSchedules] = useState("");
  const [devices, setDevices] = useState("");

  useEffect(() => {
    if(users === "") {
      Admin.getAllSchedules(setSchedules);
    }

    if (schedules === "") {
      Admin.getAllUsers(setUsers);
    }

    if(devices === "") {
      Device.getAllDevices(setDevices);
    }
  }, [devices, users, schedules])

  return (
    <Row className="admin-dashboard-wrapper">
      <Col className={"admin-dashboard--item"}>
        <h3>Usuários</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <UserList users={users}/>
      </Col>
      <Col className={"admin-dashboard--item"}>
        <h3>Coletas</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <PickupsList schedules={schedules} />
      </Col>
      <Col className={"admin-dashboard--item"}>
        <h3>Dispositivos</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <DeviceList devices={devices} />
      </Col>
    </Row>
  );
}
