import "./style.scss";
import { Button, Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import VendorPickupLocationsList, { PublicDevicesList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function PickupLocations() {
  let dummyDevices = [];

  for (let i = 0; i <= 29; i++) {
    dummyDevices.push(null);
  }

  return (
    <Row id="pickup-locations-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pontos de Coleta"} />
      </Col>

      <Col>
        <FilterPublicDevices />
      </Col>

      <Col className="pickup-location--list-view">
        <Col>
          <VendorPickupLocationsList data={dummyDevices} />
        </Col>
        <Col className="item-view p-0">
          <Row className="flex-column flex-wrap">
            <Col className="item-header d-flex align-items-end p-3">
              <h2>Cooperita</h2>
            </Col>
            <Col className="item-body d-flex flex-column justify-content-between p-3">
              <div>
                <p className="text-start">
                  <strong>Descrição:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud
                </p>

                <p className="text-start">
                  <strong>Endereço:</strong> Lorem ipsum dolor sit amet, 300,
                  Lorem Ipsum, Lorem Ipsum - LP, Lorem
                </p>

                <p className="text-start">
                  <strong>CEP:</strong> 99999-999
                </p>
              </div>

              <Row className="justify-content-between column-gap-2">
                <Col>
                  <Button variant="outline-primary" className="btn btn-outline-success">
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <span className="ms-1">Editar</span>
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="btn btn-outline-success">
                    <FontAwesomeIcon icon={faPowerOff} />
                    <span className="ms-1">Desativar</span>
                  </Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" className="btn btn-outline-success">
                    <FontAwesomeIcon icon={faTrashCan} />
                    <span className="ms-1">Excluir</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </Row>
  );
}
