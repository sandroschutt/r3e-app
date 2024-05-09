import "./style.scss";
import dummyDeviceImg from "../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export function UserList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>User Name</h5>
              <p>
                <strong>Data:</strong>
                <span>31/12/1999</span>
                <strong>Função:</strong>
                <span>cliente</span>
              </p>
              <p>
                <strong>Status:</strong>
                <span>ativo</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function StudentsList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>Student Name</h5>
              <p>
                <strong>Status:</strong>
                <span>ativo</span>
                <strong>Data:</strong>
                <span>31/12/1999</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function PickupsList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>Motorola Moto G2</h5>
              <p>
                <strong>Data:</strong>
                <span>31/12/1999</span>
                <strong>Cliente:</strong>
                <span>Cliente Teste</span>
              </p>
              <p>
                <strong>Empresa:</strong>
                <span>Empresa Teste</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function DeviceList() {
  const data = getListData();

  return (
    <div className="global-list">
      <ul>
        {data.map(() => {
          return (
            <li>
              <h5>Motorla Moto G2</h5>
              <p>
                <strong>Cliente:</strong>
                <span>Cliente Teste</span>
                <strong>Entrada:</strong>
                <span>31/12/1999</span>
              </p>
              <p>
                <strong>Estado:</strong>
                <span>bom</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function PublicDevicesList(props) {
  return (
    <div className="public-devices">
      <div className="list">
        <ul className="p-0 pe-1">{props.data.map(() => {
          return (
            <li className="d-flex justify-content-between align-items-center">
              <img src={dummyDeviceImg} alt="" />
              <h6>Moto G2</h6>
              <div className="d-flex justify-content-between">
                <p className="mb-0">
                  <strong>Marca:</strong><br />
                  <span>Motorola</span>
                </p>
                <p className="mb-0">
                  <strong>Ano:</strong><br />
                  <span>2014</span>
                </p>
                <p className="mb-0">
                  <strong>Proprietário:</strong><br />
                  <span>Nome Cliente</span>
                </p>
                <p className="mb-0">
                  <strong>Estado:</strong><br />
                  <span>bom</span>
                </p>
                <p className="mb-0">
                  <strong>Local:</strong><br />
                  <span>Rua Exemplo, 200, Bairro Exemplo</span>
                </p>
              </div>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export function UserPickupsList() {
  return (
    <li>
      <div className="pickup--filter">
        <p className="icon">
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
        <p>Motorola Moto G2</p>
        <p>Vendor:</p>
        <p>Vendor Name</p>
        <p>Data: 31/12/1999</p>
      </div>
    </li>
  );
}

export default function VendorPickupLocationsList() {
  return (
    <li>
      <div className="pickup-locations--list">
        <p>Ponto de Coleta</p>
        <p>
          <strong>Status:</strong>{" Ativo"}
        </p>
      </div>
    </li>
  );
}


function getListData() {
  let listData = [];

  for (let i = 0; i <= 19; i++) {
    listData.push(null);
  }

  return listData;
}
