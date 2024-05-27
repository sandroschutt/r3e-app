import "./style.scss";
import { Col, Row } from "react-bootstrap";
import PublicFooter from "../PublicFooter";
import PublicNav from "../PublicNav";

export default function AuthLayout({ children }) {
  return (
    <div id="auth-container">
      <Row className="flex-column g-0 justify-content-between">
        <Col className="px-0">
          <PublicNav />
        </Col>
        <Col className="px-0 content">
          <div className="content">{children}</div>
        </Col>
        <Col className="px-0">
          <PublicFooter />
        </Col>
      </Row>
    </div>
  );
}
