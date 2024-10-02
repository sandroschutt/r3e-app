import { Col, Row } from "react-bootstrap";
import UserHeader from "../../../components/UserHeader";
import { FilterPublicDevices } from "../../../components/Lists/Flters";
import { useUserDataContext } from "../../../context/UserDataContext";
import PaymentsTable from "../../../components/Tables/PaymentsTable";

export default function PaymentsView() {
  const { userData } = useUserDataContext();

  return (
    <Row id="payments-view" className={"flex-column"}>
      <Col>
        <UserHeader pageTitle={"Pagamentos"} />
      </Col>

      <Col>
        <FilterPublicDevices />
      </Col>

      <Col className="--list-view">
        <Col>
          <PaymentsTable />
        </Col>
      </Col>
    </Row>
  );
}