import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Admin from "../../../classes/Admin";
import User from "../../../classes/User";
import SchedulesTable from "../../../components/Tables/SchedulesTable";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";

export default function Pickups() {
  const { userData } = useUserDataContext();
  const [pageTitle, setPageTitle] = useState("Minhas Coletas");
  const [schedules, setSchedules] = useState("");
  const [schedule, setSchedule] = useState("");
  const userId = useParams();

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

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

    if (schedules !== "" && search !== null && searched === false) {
      const filteredSchedules = schedules.filter((schedule) => searchInObject(schedule, search));
      setSchedules(filteredSchedules);
      setSearched(true);
    }
  }, [userData, userId, schedules, schedule]);

  if(schedules !== "" ) return (
    <Row id="pickups-view" className="flex-column">
      <Col>
        <UserHeader pageTitle={pageTitle} />
        <SearchResults search={search} />
      </Col>
      <Row className="pickups--list-view ms-0">
        <SchedulesTable schedules={schedules} userRole={userData.role}/>
      </Row>
    </Row>
  );
}
