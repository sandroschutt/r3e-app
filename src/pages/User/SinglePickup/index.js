import "./style.scss";
import { useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import Pickup from "../../../classes/Pickup";
import { ListViewMap, SingleViewMap } from "../../../components/Maps";

export default function SinglePickup() {
  const [schedule, setSchedule] = useState("");
  let scheduleId = window.location.pathname.split("/");
  scheduleId = scheduleId[scheduleId.length - 1];

  useEffect(() => {
    if (schedule === "") {
      Pickup.getPickup(scheduleId, setSchedule);
    }
  }, [schedule]);

  function renderSchedule(schedule) {
    if (schedule !== "") {
      return (
        <>
          <Row>
            <Col className="schedule-data d-flex align-items-center mb-3">
              <h3 className="me-3">Dados da coleta:</h3>
              <span>
                <strong>Status:</strong>
                {schedule.status}
              </span>
              <span>
                <strong>Data agendada:</strong>
                {schedule.dateColect}
              </span>
              <span>
                <strong>Data coletado:</strong>
                {schedule.dateColected === null ? "não coletado" : schedule.dateColected}
              </span>
            </Col>
          </Row>
          <Row className="single-pickup">
            <Col>
              <h4 className="mb-4">Empresa</h4>
              <div className="user-header d-flex flex-row gap-3 align-items-center mb-3">
                <div className="user-avatar"></div>
                <div className="user-info">
                  <h5 className="name">
                    <strong className="me-3">{schedule.vendor.name}</strong>
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
                    {schedule.vendor.phone}
                  </p>
                  <p className="email">
                    <strong className="me-2">Localização:</strong>
                    {`${schedule.vendor.address.street}, 666, ${schedule.vendor.address.city} - ${schedule.vendor.address.state}`}
                  </p>
                </div>
              </div>
              <ListViewMap />
            </Col>
            <Col>
              <h4 className="mb-4">Dispositivo</h4>
              <div className="device-header d-flex flex-row gap-3 align-items-center mb-3">
                <div className="device-image"></div>
                <div className="device-info">
                  <h5 className="name">
                    <strong className="me-3">{schedule.device.model.name}</strong>
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
              <div className="device-specifications">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th style={{ fontSize: "1.2em" }}>
                        <strong>Especificação</strong>
                      </th>
                      <th style={{ fontSize: "1.2em" }}>
                        <strong>Valor</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong className="me-2">Categoria</strong>
                      </td>
                      <td>{schedule.device.model.category}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">Sistema Operacional</strong>
                      </td>
                      <td>{schedule.device.model.OS}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">CPU</strong>
                      </td>
                      <td>{schedule.device.model.CPU}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">RAM</strong>
                      </td>
                      <td>{schedule.device.model.RAM}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">Bateria</strong>
                      </td>
                      <td>{schedule.device.model.battery}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">Network</strong>
                      </td>
                      <td>{schedule.device.model.network}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong className="me-2">Tela</strong>
                      </td>
                      <td>{schedule.device.model.screen}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </>
      );
    }
  }

  return (
    <>
      <Row>
        <UserHeader pageTitle={"Coleta"} />
      </Row>
      { renderSchedule(schedule) }
    </>
  );
}
