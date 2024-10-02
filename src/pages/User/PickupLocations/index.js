import "./style.scss";
import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import PickupLocationsTable from "../../../components/Tables/PickupLocationsTable";
import { useUserDataContext } from "../../../context/UserDataContext";

export default function PickupLocations() {
  const { userData } = useUserDataContext();
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
          <PickupLocationsTable userId={userData.id} userRole={userData.role}/>
        </Col>
      </Col>
    </Row>
  );
}
