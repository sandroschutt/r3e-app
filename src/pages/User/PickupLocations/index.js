import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import PickupLocationsTable from "../../../components/Tables/PickupLocationsTable";
import { useUserDataContext } from "../../../context/UserDataContext";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import PickupLocation from "../../../classes/PickupLocation";
import { useEffect, useState } from "react";
import { PickupLocationsList } from "../../../components/Lists/PickupLocarionsList";

export default function PickupLocations() {
  const { userData } = useUserDataContext();
  const [locations, setLocations] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (locations === "" && userData.role === "Admin") PickupLocation.getAll(setLocations);

    if (locations === "" && userData.role !== "Admin" && userData.id !== undefined) PickupLocation.getUserPickupLocations(userData.id, setLocations);

    if (locations !== "" && search !== null && searched === false) {
      const filteredLocations = locations.filter((location) => searchInObject(location, search));
      setLocations(filteredLocations);
      setSearched(true);
    }
  }, [locations, search, searched, userData]);

  function handlePickupLocationTable() {
    if(userData.role === "Admin") return <PickupLocationsTable locations={locations} />
    return <PickupLocationsList locations={locations} />
  }

  return (
    <Row id="pickup-locations-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pontos de Coleta"} />
        <SearchResults search={search} />
      </Col>
      <Col className="pickup-location--list-view">
        <Col>
          { handlePickupLocationTable() }
        </Col>
      </Col>
    </Row>
  );
}
