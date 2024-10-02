import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { SingleViewMap } from "../../../components/Maps";
import PickupLocation from "../../../classes/PickupLocation";
import { useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader";

export default function SinglePickupLocation() {
  const [pickupLocation, setPickupLocation] = useState("");
  let pickupLocationId = window.location.pathname.split("/")
  pickupLocationId = pickupLocationId[pickupLocationId.length -1];

  useEffect(() => {
    if(pickupLocation === "") {
      PickupLocation.getOne(pickupLocationId, setPickupLocation)
    }
  }, [pickupLocation])

  if(pickupLocation.id !== undefined) {
    return (
      <>
        <Row>
          <UserHeader pageTitle={"Ponto de Coleta"}/>
        </Row>
        <Row className="single-pickup-location flex-column row-gap-5">
          <Col className="single-pickup-location--card flex-column">
            <Col className="card-header d-flex align-items-end p-3">
              <h2 className="text-light">{pickupLocation.name}</h2>
            </Col>
  
            <Col className="p-3">
              <p>
                <strong className="me-2">Endereço:</strong>
                precisa anexar o endereço do usuário responsável à requisição
              </p>
              <p>
                <strong className="me-2">CEP:</strong>
                { pickupLocation.cep }
              </p>
              <p>
                <strong className="me-2">Ramo:</strong>
                { pickupLocation.business }
              </p>
              <p>
                <strong className="me-2">Filiação:</strong>
                { pickupLocation.userId }
              </p>
            </Col>
          </Col>
          <Col>
            <h4 className="mb-3">Descrição</h4>
            <p>
              {pickupLocation.description}
            </p>
          </Col>
  
          <Col className="single-pickup-location--map">
            <h4 className="mb-3">Localização e Distância</h4>
            <SingleViewMap />
          </Col>
        </Row>
      </>
    );
  }
}
