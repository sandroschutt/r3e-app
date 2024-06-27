import "./style.scss";
import UserHeader from "../../../components/UserHeader";
// import Client from "../../../classes/roles/Client";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FilterUserPickups } from "../../../components/Lists/Flters";
import { UserPickupsList } from "../../../components/Lists";
import { ListViewMap } from "../../../components/Maps";
import DummyDeviceImage from "../../../assets/images/motog2 1.jpg";
import {
  SinglePickupContact,
  SinglePickupCancelationModal
} from "../../../components/Modals";
import { Admin } from "../../../classes/Admin";
import User from "../../../classes/User";
import { validateDate } from "../../../validations/validateDate";

export default function Pickups() {
  const { userData } = useUserDataContext();
  const [pageTitle, setPageTitle] = useState("Minhas Coletas");
  const [schedules, setSchedules] = useState("");
  const [schedule, setSchedule] = useState("");
  const userId = useParams();

  useEffect(() => {
    if (userData !== "" && userData.role !== undefined && schedules === "") {
      if (userData.role === "Admin") {
        if(userId.id === undefined) {
          Admin.getAllSchedules(setSchedules);
        } else {
          let urlParams = new URLSearchParams(window.location.search);
          let userName = urlParams.get('name');
          Admin.getUserSchedules(userId.id, setSchedules);
          setPageTitle(`Coletas de ${userName}`);
        }
      } else {
        let user = new User(userData.id);
        user.getAllSchedules(setSchedules);
      }
    }

    if(schedules !== "" && schedule === "") {
      setSchedule(schedules[0]);
    }
  }, [userData, userId, schedules, schedule]);

  function renderSchedules(schedules) {
    if (schedules !== "") {
      return (
        <>
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
        </>
      )
    } else return <p>Aguardando dados...</p>;
  }

  return (
    <Row id="pickups-view" className="flex-column">
      <Col>
        <UserHeader pageTitle={pageTitle} />
      </Col>
      <Col>
        <FilterUserPickups />
      </Col>
      <Row className="pickups--list-view">
        {
          renderSchedules(schedules)
        }
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
          <h5>{`${props.schedule.device.brand.name} ${props.schedule.device.model.name}`}</h5>
        </div>
        <p className="details">
          <span
            onClick={() => {
              navigate(`/admin/devices/${props.schedule.deviceId}`)
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
              <strong>Proprietário:</strong> {props.userData.name}
            </p>
          </li>
          <li>
            <p>
              <strong>Data:</strong> {validateDate(props.schedule.createdAt)}
            </p>
          </li>
          <li>
            <p>
              <strong>Coleta:</strong>{" "}
              {props.schedule.dateColected === null
                ? "pendente"
                : validateDate(props.schedule.dateColected)}
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
