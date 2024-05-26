import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import Client from "../../../classes/roles/Client";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FilterUserPickups } from "../../../components/Lists/Flters";
import { UserPickupsList } from "../../../components/Lists";
import { ListViewMap } from "../../../components/Maps";
import DummyDeviceImage from "../../../assets/images/motog2 1.jpg";
import {
  SinglePickupContact,
  SinglePickupCancelationModal
} from "../../../components/Modals";

export default function Pickups() {
  const { userData, updateUserData } = useUserDataContext();
  const [schedules, setSchedules] = useState("");
  const [hasDataArrived, setHasDataArrived] = useState(false);
  const [schedule, setSchedule] = useState("");
  const [firstSchedule, setFirstSchedule] = useState(false);
  const user = new Client(2);

  useEffect(() => {
    if (userData.user !== undefined && hasDataArrived === false) {
      user.getUserSchedules(setSchedules, setSchedule);
      setHasDataArrived(true);
    }
  }, [userData, schedules, firstSchedule, hasDataArrived]);

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
          <UserPickupsList schedules={schedules} setSchedule={setSchedule} />
        </Col>
        <Col className="pickups--item-view">
          <div className="item-header">
            <img
              src={DummyDeviceImage}
              style={{ backgroundColor: "lightgrey" }}
              alt=""
            />
            <CardHeaderText schedule={schedule} userData={userData} />
          </div>
          <div className="item-body">
            <ListViewMap />
          </div>
        </Col>
      </Row>
    </Row>
  );
}

function CardHeaderText(props) {
  const navigate = useNavigate();

  if (props.schedule !== "") {
    return (
      <div className="text">
        <div className="main">
          <h5>{`${props.schedule.device.brand.name} ${props.schedule.device.model.name} ${props.schedule.device.model.year}`}</h5>
        </div>
        <p className="details">
          <span
            onClick={() => {
              navigate(`${props.schedule.deviceId}`)
            }}
          >
            <strong>Ver</strong>
          </span>
          <SinglePickupContact />
          <SinglePickupCancelationModal />
        </p>
        <ul>
          <li>
            <p>
              <strong>Proprietário:</strong> {props.userData.user.name}
            </p>
          </li>
          <li>
            <p>
              <strong>Data:</strong> {props.schedule.createdAt}
            </p>
          </li>
          <li>
            <p>
              <strong>Coleta:</strong>{" "}
              {props.schedule.dateColected === null
                ? "pendente"
                : props.schedule.dateColected}
            </p>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="text w-100">
        <p>Aguardando dados...</p>
      </div>
    );
  }
}
