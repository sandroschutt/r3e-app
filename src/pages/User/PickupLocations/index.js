import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { useEffect, useState } from "react";
import PickupLocation from "../../../classes/PickupLocation";
import PickupLocationsTable from "../../../components/Tables/PickupLocationsTable";

export default function PickupLocations() {
  const [locations, setLocations] = useState("");

  useEffect(() => {
    if (locations === "") PickupLocation.getAll(setLocations);
  }, [locations]);

  if(locations !== "") return (
    <Row id="pickup-locations-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pontos de Coleta"} />
      </Col>

      <Col>
        <FilterPublicDevices />
      </Col>

      <Col className="pickup-location--list-view">
        <Col>
          <PickupLocationsTable locations={locations} />
        </Col>
      </Col>
    </Row>
  );
}
