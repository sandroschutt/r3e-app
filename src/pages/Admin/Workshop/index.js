import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { AdminDevicesTable } from "../../../components/Tables";
import { useEffect, useState } from "react";
import Admin from "../../../classes/Admin";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import { useUserDataContext } from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

export default function Workshop() {
  const {userData} = useUserDataContext();
  const navigate = useNavigate();
  const [devices, setDevices] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (devices === "") {
      Admin.getWorkshopDevices(setDevices);
    }

    if (devices !== "" && search !== null && searched === false) {
      const filteredDevices = devices.filter((device) =>
        searchInObject(device, search)
      );
      setDevices(filteredDevices);
      setSearched(true);
    }
  }, [devices, search, searched]);

  if(userData.capabilities !== undefined && !userData.capabilities.manageAllDevices) navigate(`/app/404`);

  if (devices !== "") {
    return (
      <Row id="public-devices--view" className="flex-column">
        <Col>
          <UserHeader pageTitle={"Oficina"} />
          <SearchResults search={search} />
        </Col>
        <Col>
          <AdminDevicesTable devices={devices} />
        </Col>
      </Row>
    );
  } else return <p>Aguradando dados...</p>;
}
