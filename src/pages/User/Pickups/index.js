import "./style.scss";
import { Row, Col } from "react-bootstrap";
import { FilterUserPickups } from "../../../components/Lists/Flters";
import { PublicDevicesList } from "../../../components/Lists";
import DummyDeviceImage from "../../../assets/images/motog2 1.jpg";
import DummyDeviceMap from "../../../assets/images/pickups-dummy-map.png";
import UserHeader from "../../../components/UserHeader";

export default function Pickups() {
  let dummyDevices = [];

  for (let i = 0; i <= 29; i++) {
    dummyDevices.push(null);
  }

  return (
    <Row id="pickups-view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Minhas Coletas"} />
      </Col>
      <Col>
        <FilterUserPickups />
      </Col>
      <Row className="pickups--list-view">
        <Col>
          <PublicDevicesList data={dummyDevices} />
        </Col>
        <Col className="pickups--item-view">
          <div className="item-header">
            <img src={DummyDeviceImage} alt="" />
            <div className="text">
              <div className="main">
                <h5>{"Motorola Moto G2 2014"}</h5>
              </div>
              <p className="details">
                <span>Ver</span>
                <span>Contato</span>
                <span>Cancelar</span>
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Proprietário:</strong> Cliente Teste
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Endereço:</strong> Rua Teste Batista Siqueira
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Data:</strong> 31/12/1999
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Coleta:</strong> 01/01/2000
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="item-body">
            <img src={DummyDeviceMap} alt={""} />
          </div>
        </Col>
      </Row>
    </Row>
  );
}
