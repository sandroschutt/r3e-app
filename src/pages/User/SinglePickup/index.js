import "./style.scss";
import Api from "../../../classes/Api";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import UserHeader from "../../../components/UserHeader";
import Pickup from "../../../classes/Pickup";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ListViewMap } from "../../../components/Maps";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate, useParams } from "react-router-dom";
import { EditScheduleModal } from "../../../components/Modals/Schedule/EditScheduleModal";
import { DeleteScheduleModal } from "../../../components/Modals/Schedule/DeleteScheduleModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { validateDate } from "../../../validations/validateDate";
import { validatePhones } from "../../../validations/validatePhones";
import { GeolocationUtil } from "../../../helpers/GeolocationUtil";

export default function SinglePickup() {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const params = useParams();

  useEffect(() => {
    if (schedule === "") {
      Pickup.getPickup(params.id, setSchedule);
    }

    if (schedule !== "" && geolocation === "") {
      GeolocationUtil(schedule.client.address, setGeolocation);
    }
  }, [schedule, geolocation]);

  function handleScheduleAdminActions() {
    if (userData.role === "Admin")
      return (
        <div className="d-flex justify-content-end gap-3 align-items-center">
          <EditScheduleModal schedule={schedule} userRole={userData.role} />
          <DeleteScheduleModal id={schedule.id} />
        </div>
      );
  }

  function handleScheduleRoleActions(schedule) {
    if (
      userData.role === "Cliente" &&
      schedule.accepted === null &&
      schedule.status === "não aceito"
    ) {
      return (
        <div className="d-flex gap-3 p-3">
          <button
            type="button"
            className="d-flex align-items-center gap-2 btn btn-outline-success"
            onClick={() => Pickup.accept(schedule.id)}
          >
            <FontAwesomeIcon icon={faTruck} />
            Aceitar
          </button>
          <button
            type="button"
            className="d-flex align-items-center gap-2 btn btn-outline-danger"
            onClick={() => Pickup.deny(schedule.id)}
          >
            Rejeitar
          </button>
        </div>
      );
    }

    return (
      <div className="d-flex gap-3 p-3">
        <button
          type="button"
          className="d-flex align-items-center gap-2 btn btn-outline-primary"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/app/payments/${schedule.paymentId}`);
          }}
        >
          Pagamento
        </button>
        <button
          type="button"
          className="d-flex align-items-center gap-2 btn btn-outline-danger"
          onClick={() => {
            alert("cancelar coleta");
          }}
        >
          Cancelar
        </button>
      </div>
    );
  }

  function handleImages(image, source) {
    if (image !== null) {
      return <img src={source} className="user-avatar rounded" />;
    }

    return <img src={r3eMascot} className="user-avatar rounded" />;
  }

  if (schedule !== "")
    return (
      <>
        <Row>
          <UserHeader pageTitle={"Coleta"} />
        </Row>
        <Row className="single-pickup">
          <Col>
            <Row className="mb-3">
              <Col className="ps-0 pe-0">
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <p className="h4">Dados da coleta</p>
                    {handleScheduleAdminActions()}
                  </Card.Header>
                  <Card.Body>
                    <p className="d-flex mb-1 gap-2">
                      <strong>Status:</strong>
                      {schedule.status}
                    </p>
                    <p className="d-flex mb-1 gap-2">
                      <strong>Data agendada:</strong>
                      {validateDate(schedule.dateColect)}
                    </p>
                    <p className="d-flex mb-1 gap-2">
                      <strong>Data coletado:</strong>
                      {schedule.dateColected === null
                        ? "não coletado"
                        : validateDate(schedule.dateColected)}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Card>
              <Card.Header>
                <p className="h4">Usuários</p>
              </Card.Header>
              <Card.Body>
                <div className="user-header d-flex flex-row gap-3 align-items-center mb-3 p-3">
                  {handleImages(
                    schedule.vendor.avatar,
                    Api.endpoint(`uploads/avatar/${schedule.vendor.avatar}`)
                  )}
                  <div className="user-info">
                    <h5 className="name">
                      <strong className="me-3">
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            navigate(`/app/users/${schedule.vendorId}`);
                          }}
                        >
                          {schedule.vendor.name}
                        </a>
                      </strong>
                      <span className="role">
                        <strong>{schedule.vendor.role}</strong>
                      </span>
                    </h5>
                    <p className="email">
                      <strong className="me-2">E-mail:</strong>
                      {schedule.vendor.email}
                    </p>
                    <p className="email">
                      <strong className="me-2">Celular:</strong>
                      {validatePhones(schedule.vendor.phone)}
                    </p>
                    <p className="email">
                      <strong className="me-2">Localização:</strong>
                      {`${schedule.vendor.address.street}, ${schedule.vendor.address.number}, ${schedule.vendor.address.city} - ${schedule.vendor.address.state}`}
                    </p>
                  </div>
                </div>
                <div className="user-header d-flex flex-row gap-3 align-items-center mb-3 p-3">
                  {handleImages(
                    schedule.client.avatar,
                    Api.endpoint(`uploads/avatar/${schedule.client.avatar}`)
                  )}
                  <div className="user-info">
                    <h5 className="name">
                      <strong className="me-3">
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            navigate(`/app/users/${schedule.clientId}`);
                          }}
                        >
                          {schedule.client.name}
                        </a>
                      </strong>
                      <span className="role">
                        <strong>{schedule.client.role}</strong>
                      </span>
                    </h5>
                    <p className="email">
                      <strong className="me-2">E-mail:</strong>
                      {schedule.client.email}
                    </p>
                    <p className="email">
                      <strong className="me-2">Celular:</strong>
                      {validatePhones(schedule.client.phone)}
                    </p>
                    <p className="email">
                      <strong className="me-2">Localização:</strong>
                      {`${schedule.client.address.street}, ${schedule.client.address.number}, ${schedule.client.address.city} - ${schedule.client.address.state}`}
                    </p>
                  </div>
                </div>
                {handleScheduleRoleActions(schedule)}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <p className="h4">Dispositivo</p>
              </Card.Header>
              <Card.Body>
                <div className="device-header d-flex flex-row gap-3 align-items-top mb-3">
                {handleImages(
                    schedule.device.photo,
                    Api.endpoint(`uploads/device/${schedule.device.photo}`)
                  )}
                  <div className="device-info">
                    <h5 className="name">
                      <strong className="me-3">
                        <a
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            navigate(`/app/devices/${schedule.deviceId}`);
                          }}
                        >
                          {`${schedule.device.brand.name} ${schedule.device.model.name}`}
                        </a>
                      </strong>
                    </h5>
                    <p>
                      <strong className="me-2">Marca:</strong>
                      {schedule.device.brand.name}
                    </p>
                    <p>
                      <strong className="me-2">Ano:</strong>
                      {schedule.device.model.year}
                    </p>
                    <p>
                      <strong className="me-2">Estado:</strong>
                      {schedule.device.state}
                    </p>
                  </div>
                </div>
                <ListViewMap geolocation={geolocation} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
}
