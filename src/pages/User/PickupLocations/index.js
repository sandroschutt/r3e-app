import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import PickupLocationsTable from "../../../components/Tables/PickupLocationsTable";
import { useUserDataContext } from "../../../context/UserDataContext";
import { getSearchQueryParams, searchInObject, SearchResults } from "../../../components/forms/SearchForm";
import PickupLocation from "../../../classes/PickupLocation";
import { useEffect, useState } from "react";

export default function PickupLocations() {
  const { userData } = useUserDataContext();
  const [locations, setLocations] = useState("");

  const [search, setSearch] = useState(getSearchQueryParams());
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (locations === "") PickupLocation.getAll(setLocations);

    if (locations !== "" && search !== null && searched === false) {
      const filteredLocations = locations.filter((location) => searchInObject(location, search));
      setLocations(filteredLocations);
      setSearched(true);
    }
  }, [locations, search, searched]);

  return (
    <Row id="pickup-locations-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pontos de Coleta"} />
        <SearchResults search={search} />
      </Col>
      <Col className="pickup-location--list-view">
        <Col>
          <PickupLocationsTable userId={userData.id} locations={locations} />
        </Col>
      </Col>
    </Row>
  );
}
