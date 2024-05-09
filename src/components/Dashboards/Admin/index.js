import "./style.scss";
import { DeviceList, PickupsList, UserList } from "../../Lists";
import { Col, Row } from "react-bootstrap";

export default function AdminDashboard() {
  return (
    <Row className="admin-dashboard-wrapper">
      <Col className={"admin-dashboard--item"}>
        <h3>Usuários</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <UserList />
      </Col>
      <Col className={"admin-dashboard--item"}>
        <h3>Coletas</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <PickupsList />
      </Col>
      <Col className={"admin-dashboard--item"}>
        <h3>Dispositivos</h3>
        <Col className="admin-dashboard--info d-flex flex-wrap">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </Col>
        <DeviceList />
      </Col>
    </Row>
  );
}
