import "./style.scss";
import { Button, Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { PickupLocationsList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PickupLocation from "../../../classes/PickupLocation";
import { useNavigate } from "react-router-dom";

export default function PickupLocations() {
  const [locations, setLocations] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (locations === "") {
      PickupLocation.getAllLocations(setLocations);
    }

    if(locations !== "" && location === "") {
      setLocation(locations[0])
    }
  }, [locations, location]);

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
          <PickupLocationsList locations={locations} setLocation={setLocation}/>
        </Col>
        <LocationCard location={location}/>
      </Col>
    </Row>
  );
}

function LocationCard(props) {
  const navigate = useNavigate();

  if(props.location !== "") {
    let location = props.location;

    return (
      <Col className="item-view p-0">
        <Row className="flex-column flex-wrap">
          <Col className="item-header d-flex align-items-end p-3">
            <h2>{location.name}</h2>
          </Col>
          <Col className="item-body d-flex flex-column justify-content-between p-3">
            <Row className="flex-column mb-4">
              <p className="text-start">
                <strong>Descrição:</strong> 
                {location.description}
              </p>
  
              <p className="text-start">
                <strong>Endereço:</strong>
                {"Necessário atrelar o endereço (user->address) junto do local. Também precisa colocar a coluna 'status' em PickupLocations"}
              </p>
  
              <p className="text-start">
                <strong>CEP:</strong> {location.cep}
              </p>
            </Row>
  
            <Row className="d-flex column-gap-2 justify-content-between">
            <Col>
                <Button
                  variant="outline-primary"
                  className="btn btn-outline-success w-100"
                  onClick={() => {
                    navigate(`${location.id}`)
                  }}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <span className="ms-1">Ver</span>
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  className="btn btn-outline-success w-100"
                  onClick={() => {
                    alert("Open pickup location in editing mode");
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <span className="ms-1">Editar</span>
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  className="btn btn-outline-success w-100"
                  onClick={() => {
                    alert("Send API request to deactivate the pickup location");
                  }}
                >
                  <FontAwesomeIcon icon={faPowerOff} />
                  <span className="ms-1">Desativar</span>
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  className="btn btn-outline-success w-100"
                  onClick={() => {
                    alert("Send API request to delete the pickup location");
                  }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                  <span className="ms-1">Excluir</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
