import "./style.scss";
import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { EditDeviceModal } from "../../Modals/Device/EditDeviceModal";
import { DeleteDeviceModal } from "../../Modals/Device/DeleteDeviceModal";
import { useEffect, useState } from "react";
import Brands from "../../../classes/Brands";
import Models from "../../../classes/Models";
import { CreateScheduleModal } from "../../Modals/Schedule/CreateScheduleModal";
import { useUserDataContext } from "../../../context/UserDataContext";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";
import { validatePhones } from "../../../validations/validatePhones.js";
import { DeviceEvaluation } from "../DeviceEvaluation/index.js";

export default function SingleDeviceCard(props) {
  const { userData } = useUserDataContext();
  const [brands, setBrands] = useState("");
  const [models, setModels] = useState("");

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);
    if (models === "") Models.getAll(setModels);
  }, []);

  function renderButtons(device) {
    if (userData.role === "Escola" && device.reserved === 0)
      return (
        <Button
          variant="outline-success"
          className="d-flex gap-2 align-items-center"
          onClick={() => {
            SchoolDeviceRequets.create(
              {
                schoolId: userData.id,
                deviceId: props.device.id,
              },
              userData.role
            );
          }}
        >
          <FontAwesomeIcon icon={faTruck} />
          Requisitar
        </Button>
      );

    if (userData.role !== "Client" && userData.role !== "Escola") {
      return (
        <div className="d-flex align-items-center gap-3">
          <CreateScheduleModal device={device} />
        </div>
      );
    }
  }

  function handleAdminEvaluation(id, returnProcessId) {
    if (userData.role === "Admin")
      return <DeviceEvaluation id={id} default={returnProcessId} />;
  }

  if (props.device !== "") {
    const device = props.device;
    return (
      <Row className="gap-3">
        <Card className="col col-6 px-0">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <p className="h4 mb-0">{`${device.brand.name} ${device.model.name} ${device.model.year}`}</p>
              <div className="d-flex gap-3">
                <EditDeviceModal
                  device={device}
                  models={models}
                  brands={brands}
                />
                <DeleteDeviceModal deviceId={device.id} />
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Row className="single-device--card gap-3 mb-3">
              <Col className="ps-0 col-2">
                <img
                  src={dummyDeviceImg}
                  height={164}
                  style={{ width: "auto" }}
                  className="rounded"
                />
              </Col>
              <Col>
                <div>
                  <p className="mb-2">
                    <span>
                      <strong>Marca:</strong>
                    </span>{" "}
                    <span>{device.brand.name}</span>
                  </p>
                  <p className="mb-2">
                    <span>
                      <strong>Ano:</strong>
                    </span>{" "}
                    <span>{device.model.year}</span>
                  </p>
                  <p className="mb-2">
                    <span>
                      <strong>Estado:</strong>
                    </span>{" "}
                    <span>{device.state}</span>
                  </p>
                  <p className="mb-2">
                    <span>
                      <strong>Uso:</strong>
                    </span>{" "}
                    <span>7 anos</span>
                  </p>
                  <p className="mb-2">
                    <span>
                      <strong>Tratativa:</strong>
                    </span>{" "}
                    <span>{device.returnProccess.finality}</span>
                  </p>

                  <div className="single-device--actions d-flex">
                    {renderButtons(device)}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="p-3 border">
                <p>
                  <strong>Endereço</strong>
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Rua:</strong> Rua Exemplo da Silva, 666
                </p>
                <p className="mb-2">
                  <strong>Bairro:</strong> Exemplo Pereira
                </p>
                <p className="mb-2">
                  <strong>Cidade:</strong> Cidade Exemplo
                </p>
                <p className="mb-2">
                  <strong>Estado:</strong> SP
                </p>
                <p className="mb-2">
                  <strong>CEP:</strong> 18305-005
                </p>
              </div>
            </Row>
          </Card.Body>
        </Card>
        <Col className="col-5">
          <Card className="mb-3">
            <Card.Header>
              <p className="h4 mb-0">Proprietário</p>
            </Card.Header>
            <Card.Body className="p-4">
              <Row className="gap-5 align-items-center">
                <Col className="col-2">
                  <img
                    src={dummyDeviceImg}
                    height={100}
                    width={100}
                    className="rounded-circle"
                  />
                </Col>
                <Col>
                  <p className="mb-2 h5">
                    <strong>
                      <a href="#">{device.user.name}</a>
                    </strong>
                  </p>
                  <p className="mb-1">email@teste.com</p>
                  <p className="mb-1">{validatePhones("99999999999")}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="px-0">
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <p className="h4 mb-0">Avaliação</p>
                <Badge bg="primary">{device.returnProccess.finality.toUpperCase()}</Badge>
              </div>
            </Card.Header>
            <Card.Body className="p-4">
              <p>{device.returnProccess.description}</p>
              {handleAdminEvaluation(device.id, device.returnProccessId)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  } else return <p>Aguardando dispositivo...</p>;
}
