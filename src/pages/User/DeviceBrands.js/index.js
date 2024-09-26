import { FilterPublicDevices } from "../../../components/Lists/Flters";
import UserHeader from "../../../components/UserHeader";
import { Col, Row } from "react-bootstrap";
import BrandsTable from "../../../components/Tables/Devices/BrandsTable";

export default function DeviceBrands() {
  return (
    <Row id="public-devices--view" className="flex-column">
      <Col>
        <UserHeader pageTitle={"Marcas de Dispositivos"} />
      </Col>
      <Col>
        <FilterPublicDevices />
        <BrandsTable />
      </Col>
    </Row>
  );
}
