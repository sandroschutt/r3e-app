import "./style.scss";
import dummyDeviceImg from "../../assets/images/smartphone-placeholder.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Col, Row } from "react-bootstrap";
import { NotificationsModal } from "../Modals";
import { useNavigate } from "react-router-dom";
import { validateDate } from "../../validations/validateDate";
import { CreateDeviceModal } from "../Modals/Device/CreateDeviceModal";
import { useEffect, useState } from "react";
import Brands from "../../classes/Brands";
import Models from "../../classes/Models";

export function UserList(props) {
  const users = props.users;
  const setUser = props.setUser;

  if (users !== "") {
    return (
      <div className="public-devices">
        <div className="list">
          <ul className="ps-0 pe-1">
            {users.map((user, index) => {
              return (
                <li
                  key={index}
                  className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center"
                  onClick={() => {
                    setUser(user);
                  }}
                >
                  <h6 className="mb-0">{user.name}</h6>
                  <div className="col-12 d-flex">
                    <p className="mb-0">
                      <strong>Data:</strong>
                      <span>{validateDate(user.createdAt)}</span>
                      <strong>Função:</strong>
                      <span>{user.role}</span>
                    </p>
                    <p className="mb-0">
                      <strong>Status:</strong>
                      <span>{user.active ? "ativo" : "inativo"}</span>
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
}

export function StudentsList(props) {
  const students = props.students;

  return (
    <div className="public-devices">
      <div className="list">
        <ul className="ps-0 pe-1">
          {students.map((student, index) => {
            return (
              <li
                key={index}
                className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center"
                onClick={() => {
                  props.setStudent(student);
                }}
              >
                <h5>{student.name}</h5>
                <p>
                  <strong>Status:</strong>
                  <span>ativo</span>
                  <strong>Data:</strong>
                  <span>{validateDate(student.createdAt)}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function PickupsList(props) {
  const navigate = useNavigate();

  if (props.schedules !== "") {
    let schedules = props.schedules;

    return (
      <div className="public-devices">
        <div className="list">
          <ul className="ps-0 pe-1">
            {schedules.map((schedule, index) => {
              return (
                <li
                  key={index}
                  className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center"
                  onClick={() => {
                    navigate(`pickup-locations/${schedule.id}`);
                  }}
                >
                  <h6 className="col-12">{schedule.device.name}</h6>
                  <div className="col-12 d-flex">
                    <p>
                      <strong>Cliente:</strong>
                      <br />
                      <span>{schedule.client.name}</span>
                    </p>
                    <p>
                      <strong>Empresa:</strong>
                      <br />
                      <span>{schedule.vendor.name}</span>
                    </p>
                    <p>
                      <strong>Data:</strong>
                      <br />
                      <span>{validateDate(schedule.dateColect)}</span>
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
}

export function DeviceList(props) {
  const navigate = useNavigate();

  if (props.devices !== "") {
    let devices = props.devices;
    return (
      <div className="public-devices">
        <div className="list">
          <ul className="ps-0 pe-1">
            {devices.map((device, index) => {
              return (
                <li
                  key={index}
                  className="admin-dashboard-list-item d-flex flex-row flex-wrap justify-content-between align-items-center"
                  onClick={() => {
                    navigate(`devices/${device.id}`);
                  }}
                >
                  <h6>{`${device.brand.name} ${device.model.name}`}</h6>
                  <div className="col-12 d-flex">
                    <p>
                      <strong>Cliente:</strong>
                      <span>Teste</span>
                      <strong>Entrada:</strong>
                      <span>{validateDate(device.createdAt)}</span>
                    </p>
                    <p>
                      <strong>Estado:</strong>
                      <span>{device.state}</span>
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
}

export function PublicDevicesList(props) {
  const navigate = useNavigate();

  const [brands, setBrands] = useState("");
  const [models, setModels] = useState("");

  useEffect(() => {
    if (brands === "") Brands.getAll(setBrands);
    if (models === "") Models.getAll(setModels);
  }, []);

  return (
    <div className="public-devices">
      <div className="my-2">
        <CreateDeviceModal models={models} brands={brands} />
      </div>
      <div className="list">
        <ul className="p-0 pe-1">
          {props.devices.map((device, index) => {
            return (
              <li
                key={index}
                className="d-flex flex-row justify-content-between align-items-center"
                onClick={() => {
                  navigate(`${device.id}`);
                }}
              >
                <Col className="col-2">
                  <img src={dummyDeviceImg} alt="" />
                </Col>
                <Col className="col-10">
                  <Row className="flex-row justify-content-around">
                    <Col>
                      <h4>{device.model.name}</h4>
                    </Col>
                    <Col>
                      <p className="mb-0">
                        <strong>Marca:</strong>
                        <br />
                        <span>{device.brand.name}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="mb-0">
                        <strong>Ano:</strong>
                        <br />
                        <span>{device.model.year}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="mb-0">
                        <strong>Proprietário:</strong>
                        <br />
                        <span>{device.user.name}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="mb-0">
                        <strong>Estado:</strong>
                        <br />
                        <span>{device.state}</span>
                      </p>
                    </Col>
                    <Col>
                      <p className="mb-0">
                        <strong>Local:</strong>
                        <br />
                        <span>{`${device.user.address.street}, ${device.user.address.neighborhood}`}</span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function UserPickupsList(props) {
  if (props.schedules !== "") {
    return (
      <div className="public-devices">
        <div className="list">
          <ul className="ps-0 pe-1">
            {props.schedules.map((schedule, index) => {
              return (
                <li
                  key={index}
                  className={`d-flex flex-row justify-content-between align-items-center`}
                  onClick={() => {
                    props.setSchedule(schedule);
                  }}
                >
                  <p>
                    <span className="icon">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {`${schedule.device.brand.name} ${schedule.device.model.name}`}
                  </p>
                  <p>Vendor: {schedule.vendor.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <p>Aguardando dados...</p>;
  }
}

export function PickupLocationsList(props) {
  if (props.locations !== "") {
    let locations = props.locations;

    return (
      <div className="public-devices">
        <div className="list">
          <ul className="ps-0 pe-1">
            {locations.map((location, index) => (
              <li
                key={index}
                className={`d-flex flex-row justify-content-between align-items-center`}
                onClick={() => {
                  props.setLocation(location);
                }}
              >
                <p>{location.name}</p>
                <p>
                  <strong>Status:</strong>
                  {" Ativo"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
