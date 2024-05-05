import "./style.scss";
import { DeviceList, PickupsList, UserList } from "../../Lists";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-wrapper">
      <div className={"admin-dashboard--item"}>
        <h3>Usuários</h3>
        <div className="admin-dashboard--info">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </div>
        <UserList />
      </div>
      <div className={"admin-dashboard--item"}>
        <h3>Coletas</h3>
        <div className="admin-dashboard--info">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </div>
        <PickupsList />
      </div>
      <div className={"admin-dashboard--item"}>
        <h3>Dispositivos</h3>
        <div className="admin-dashboard--info">
          <p><strong>Novos:</strong>99</p>
          <p><strong>Clientes:</strong>99</p>
          <p><strong>Escolas:</strong>99</p>
          <p><strong>Todos:</strong>99</p>
          <p><strong>Empresas:</strong>99</p>
          <p><strong>ONGs:</strong>99</p>
        </div>
        <DeviceList />
      </div>
    </div>
  );
}
