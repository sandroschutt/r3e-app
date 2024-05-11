import "./style.scss";
import dummyDeviceImg from "../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Col, Row } from "react-bootstrap";

export function UserList() {
  const data = getListData();

  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {data.map(() => {
            return (
              <li className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center">
                <h6 className="mb-0">User Name</h6>
                <div className="col-12 d-flex">
                  <p className="mb-0">
                    <strong>Data:</strong>
                    <span>31/12/1999</span>
                    <strong>Função:</strong>
                    <span>cliente</span>
                  </p>
                  <p className="mb-0">
                    <strong>Status:</strong>
                    <span>ativo</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function StudentsList() {
  const data = getListData();

  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {data.map(() => {
            return (
              <li className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center">
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
    </div>
  );
}

export function PickupsList() {
  const data = getListData();

  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {data.map(() => {
            return (
              <li className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center">
                <h6 className="col-12">Motorla Moto G2</h6>
                <div className="col-12 d-flex">
                  <p>
                    <strong>Cliente:</strong>
                    <span>Teste</span>
                  </p>
                  <p>
                    <strong>Empresa:</strong>
                    <span>Teste</span>
                  </p>
                  <p>
                    <strong>Data:</strong>
                    <span>31/12/1999</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function DeviceList() {
  const data = getListData();

  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {data.map(() => {
            return (
              <li className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center">
                <h6>Motorla Moto G2</h6>
                <div className="col-12 d-flex">
                  <p>
                    <strong>Cliente:</strong>
                    <span>Teste</span>
                    <strong>Entrada:</strong>
                    <span>31/12/1999</span>
                  </p>
                  <p>
                    <strong>Estado:</strong>
                    <span>bom</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function PublicDevicesList(props) {
  return (
    <div className="public-devices">
      <div className="list">
        <ul className="p-0 pe-1">{props.data.map(() => {
          return (
            <li className="d-flex flex-row justify-content-between align-items-center">
              <Col className="col-2">
                <img src={dummyDeviceImg} alt="" />
              </Col>
              <Col className="col-10">
                <Row className="flex-row justify-content-around">
                  <Col>
                    <h4>Moto G2</h4>
                  </Col>
                  <Col>
                    <p className="mb-0">
                      <strong>Marca:</strong><br />
                      <span>Motorola</span>
                    </p>
                  </Col>
                  <Col>
                    <p className="mb-0">
                      <strong>Ano:</strong><br />
                      <span>2014</span>
                    </p>
                  </Col>
                  <Col>
                    <p className="mb-0">
                      <strong>Proprietário:</strong><br />
                      <span>Nome Cliente</span>
                    </p>
                  </Col>
                  <Col>
                    <p className="mb-0">
                      <strong>Estado:</strong><br />
                      <span>bom</span>
                    </p>
                  </Col>
                  <Col>
                    <p className="mb-0">
                      <strong>Local:</strong><br />
                      <span>Rua Exemplo, 200, Bairro Exemplo</span>
                    </p>
                  </Col>
                </Row>
              </Col>
            </li>
          )
        })}</ul>
      </div>
    </div>
  );
}

export function UserPickupsList(props) {
  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {props.data.map(() => {
            return (
              <li className="d-flex flex-row justify-content-between align-items-center">
                <p className="icon">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </p>
                <p>Motorola Moto G2</p>
                <p>Vendor: Vendor Name</p>
                <p>Data: 31/12/1999</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export function VendorPickupLocationsList(props) {
  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {props.data.map(() =>
            <li className="d-flex flex-row justify-content-between align-items-center">
              <p>Ponto de Coleta</p>
              <p>
                <strong>Status:</strong>{" Ativo"}
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}


function getListData() {
  let listData = [];

  for (let i = 0; i <= 19; i++) {
    listData.push(null);
  }

  return listData;
}
