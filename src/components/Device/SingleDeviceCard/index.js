import "./style.scss";
import smartphonePlaceholder from "../../../assets/images/smartphone-placeholder.avif";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { EditDeviceModal } from "../../Modals/Device/EditDeviceModal";
import { DeleteDeviceModal } from "../../Modals/Device/DeleteDeviceModal";
import { useEffect, useState } from "react";
import Brands from "../../../classes/Brands";
import Models from "../../../classes/Models";
import { CreateScheduleModal } from "../../Modals/Schedule/CreateScheduleModal";
import { useUserDataContext } from "../../../context/UserDataContext";
import { validatePhones } from "../../../validations/validatePhones.js";
import { DeviceEvaluation } from "../DeviceEvaluation/index.js";
import Api from "../../../classes/Api.js";
import { CreateSchoolDeviceRequestModal } from "../../Modals/Schedule/CreateSchoolDeviceRequestModal.js";

export default function SingleDeviceCard(props) {
  const { userData } = useUserDataContext();
  const deviceImage = props.device.photo !== null ? Api.endpoint(`uploads/device/${props.device.photo}`) : smartphonePlaceholder;
  const [brands, setBrands] = useState("");
  const [models, setModels] = useState("");

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);
    if (models === "") Models.getAll(setModels);
  }, []);

  function renderButtons(device) {
    if (userData.role === "Escola" && device.reserved === false)
      return <CreateSchoolDeviceRequestModal deviceId={props.device.id} schoolId={userData.id} />

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

  function handleClientDeviceActions(role, device) {
    if (role === "Cliente" || role === "Admin")
      return (
        <div className="d-flex gap-3">
          <EditDeviceModal device={device} models={models} brands={brands} />
          <DeleteDeviceModal deviceId={device.id} />
        </div>
      );
  }

  if (props.device !== "") {
    const device = props.device;
    const avatar = Api.endpoint(`uploads/avatar/${device.user.avatar}`);

    return (
      <Row className="gap-3">
        <Card className="col col-6 px-0">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <p className="h4 mb-0">{`${device.brand.name} ${device.model.name} ${device.model.year}`}</p>
              {handleClientDeviceActions(userData.role, device)}
            </div>
          </Card.Header>
          <Card.Body>
            <Row className="single-device--card gap-0 mb-3">
              <Col className="ps-0 col-3">
                <img
                  src={deviceImage}
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
                  <p className="d-flex justify-content-between mb-2">
                    <div>
                      <span>
                        <strong>Tratativa:</strong>
                      </span>{" "}
                      <span>{device.returnProccess.finality}</span>
                    </div>
                    <div className="single-device--actions">
                      {renderButtons(device)}
                    </div>
                  </p>
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
                  <a href={`/app/users/${device.userId}`}>
                    <div
                      className="rounded-circle"
                      style={{
                        backgroundImage: `url(${
                          device.user.avatar !== null ? avatar : r3eMascot
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100px",
                        height: "100px",
                      }}
                    ></div>
                  </a>
                </Col>
                <Col>
                  <p className="mb-2 h5">
                    <strong>
                      <a href={`/app/users/${device.userId}`}>
                        {device.user.name}
                      </a>
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
                <Badge bg="primary">
                  {device.returnProccess.finality.toUpperCase()}
                </Badge>
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
