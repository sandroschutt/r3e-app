import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FilterUserPickups } from "../../../components/Lists/Flters";
import Admin from "../../../classes/Admin";
import User from "../../../classes/User";
import SchedulesTable from "../../../components/Tables/SchedulesTable";

export default function Pickups() {
  const { userData } = useUserDataContext();
  const [pageTitle, setPageTitle] = useState("Minhas Coletas");
  const [schedules, setSchedules] = useState("");
  const [schedule, setSchedule] = useState("");
  const userId = useParams();

  useEffect(() => {
    if (userData !== "" && userData.role !== undefined && schedules === "") {
      if (userData.role === "Admin") {
        if (userId.id === undefined) {
          Admin.getAllSchedules(setSchedules);
        } else {
          let urlParams = new URLSearchParams(window.location.search);
          let userName = urlParams.get("name");
          Admin.getUserSchedules(userId.id, setSchedules);
          setPageTitle(`Coletas de ${userName}`);
        }
      } else {
        let user = new User(userData.id);
        user.getSchedules(setSchedules);
      }
    }

    if (schedules !== "" && schedule === "") {
      setSchedule(schedules[0]);
    }
  }, [userData, userId, schedules, schedule]);

  if(schedules !== "" ) return (
    <Row id="pickups-view" className="flex-column">
      <Col>
        <UserHeader pageTitle={pageTitle} />
      </Col>
      <Col>
        <FilterUserPickups />
      </Col>
      <Row className="pickups--list-view ms-0">
        <SchedulesTable schedules={schedules}/>
      </Row>
    </Row>
  );
}
