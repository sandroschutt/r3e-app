import "./style.scss";
import MainNav from "../../components/Navigation/MainNav";
import { Col, Row } from "react-bootstrap";

export default function UserLayout(props) {
  return (
    <Row className="justify-content-between">
      <Col className="col-2 p-0">
        <MainNav />
      </Col>
      <Col className="content col-10 p-3">
        {props.children}
      </Col>
    </Row>
  );
}
