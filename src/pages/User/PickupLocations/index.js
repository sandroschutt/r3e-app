import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { useEffect, useState } from "react";
import PickupLocation from "../../../classes/PickupLocation";
import PickupLocationsTable from "../../../components/Tables/PickupLocationsTable";

export default function PickupLocations() {
  return (
    <Row id="pickup-locations-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pontos de Coleta"} />
      </Col>

      <Col>
        <FilterPublicDevices />
      </Col>

      <Col className="pickup-location--list-view">
        <Col>
          <PickupLocationsTable />
        </Col>
      </Col>
    </Row>
  );
}
