import "./style.scss";
import { useEffect, useState } from "react";
import { useUserDataContext } from "../../../context/UserDataContext";
import SchoolDeviceRequets from "../../../classes/SchoolDeviceRequests";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import {
  getSearchQueryParams,
  searchInObject,
  SearchResults,
} from "../../../components/forms/SearchForm";
import SchoolDeviceRequestsTable from "../../../components/Tables/SchoolDeviceRequestsTable";
import { useNavigate } from "react-router-dom";

export default function ManageSchoolDeviceRequests() {
  const { userData } = useUserDataContext();
  const navigate = useNavigate();
  const [schoolDeviceRequets, setSchoolDeviceRequets] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);


  useEffect(() => {
    if (userData.role !== "Admin" && userData.role !== "Escola") navigate(`/app/404`);
    if (userData.role === "Admin" && schoolDeviceRequets === "") SchoolDeviceRequets.getAll(setSchoolDeviceRequets);
    if (userData.role === "Escola" && schoolDeviceRequets === "") SchoolDeviceRequets.getSchoolRequests(userData.id, setSchoolDeviceRequets);

    if (schoolDeviceRequets !== "" && search !== null && searched === false) {
      const filteredDevices = schoolDeviceRequets.filter((request) =>
        searchInObject(request, search)
      );
      setSchoolDeviceRequets(filteredDevices);
      setSearched(true);
    }
  }, [userData, schoolDeviceRequets, search, searched]);

  if (schoolDeviceRequets !== "")
    return (
      <Row id="admin-users--view" className="flex-column">
        <Col>
          <UserHeader pageTitle={"Pedidos de Dispositivos"} />
          <SearchResults search={search} />
        </Col>
        <Col className="admin-users--filters">
          <SchoolDeviceRequestsTable requests={schoolDeviceRequets} userRole={userData.role}/>
        </Col>
      </Row>
    );
}
