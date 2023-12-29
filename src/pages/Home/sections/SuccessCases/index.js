import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function SuccessCases() {
  return (
    <section id="success-cases">
      <Row>
        <Col lg={6} sm={12} className="success-cases-text">
          <h6>Portfolio</h6>
          <h4>Cases de Sucesso</h4>
          <p>Confira o trabalho desenvolvido por nossos parceiros</p>
          <Button variant="outline-success">Ver todos</Button>
        </Col>
        <Col lg={6} sm={12}>
          <Row className="success-cases-images">
            <Col lg={6} sm={12}>
              <div className="case-image-tall"></div>
              <p>
                Nome do projeto
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
              <div className="case-image-short"></div>
              <p>
                Nome do projeto
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </Col>
            <Col lg={6} sm={12}>
              <div className="case-image-short"></div>
              <p>
                Nome do projeto
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
              <div className="case-image-tall"></div>
              <p>
                Nome do projeto
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}
