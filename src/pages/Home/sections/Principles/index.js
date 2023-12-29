import "./style.css";
import { Col, Row } from "react-bootstrap";

export default function Principles() {
  return (
    <section id="our-principles">
      <Row>
        <Col lg={6} sm={12} className="image"></Col>
        <Col lg={6} sm={12} className="principles-text align-self-center">
          <h3>Nossos Princípios</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
    </section>
  );
}
