import "./style.scss";
import UserHeader from "../../../components/UserHeader";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Admin from "../../../classes/Admin";
import User from "../../../classes/User";
import SchedulesTable from "../../../components/Tables/SchedulesTable";
import {
  getSearchQueryParams,
  searchInObject,
  SearchResults,
} from "../../../components/forms/SearchForm";
import { PickupsList } from "../../../components/Lists/PickupsList";

export default function Pickups() {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("Minhas Coletas");
  const [schedules, setSchedules] = useState("");
  const [schedule, setSchedule] = useState("");
  const params = useParams();

  const search = getSearchQueryParams();
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (userData.role !== undefined && userData.role === "Escola")
      navigate(`/app/404`);

    if (userData.role !== undefined && schedules === "") {
      if (userData.role === "Admin") {
        if (params.id === undefined) {
          Admin.getAllSchedules(setSchedules);
        } else {
          Admin.getUserSchedules(params.id, setSchedules);
          setPageTitle(`Coletas de ${userData.name}`);
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
      const filteredSchedules = schedules.filter((schedule) =>
        searchInObject(schedule, search)
      );
      setSchedules(filteredSchedules);
      setSearched(true);
    }
  }, [userData, schedules, schedule]);

  function handleUserTable() {
    if (userData.role === "Admin" && schedules !== "")
      return <SchedulesTable schedules={schedules} userRole={userData.role} />;
    if (userData.role !== "Admin" && schedules !== "")
      return <PickupsList schedules={schedules} userRole={userData.role} />;
  }

  if (schedules !== "")
    return (
      <Row id="pickups-view" className="flex-column">
        <Col>
          <UserHeader pageTitle={pageTitle} />
          <SearchResults search={search} />
        </Col>
        <Row className="pickups--list-view ms-0">{handleUserTable()}</Row>
      </Row>
    );
}
