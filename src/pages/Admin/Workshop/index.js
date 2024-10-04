import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { AdminDevicesTable } from "../../../components/Tables";
import { useEffect, useState } from "react";
import Admin from "../../../classes/Admin";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";

export default function Workshop() {
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
