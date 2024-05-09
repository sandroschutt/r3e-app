import "./style.scss";
import { PublicDevicesList } from "../../../components/Lists";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";

export default function PublicDevices() {
  let dummyDevicesArray = [];

  for (let i = 0; i <= 9; i++) {
    dummyDevicesArray.push(null);
  }

  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Dispisitivos"} />
      </Col>
      <Col>
        <FilterPublicDevices />
        <PublicDevicesList data={dummyDevicesArray} />
      </Col>
    </Row>
  );
}
