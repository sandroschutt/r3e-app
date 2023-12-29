import "./style.css";
import { Col, Row } from "react-bootstrap";

export default function Steps() {
  return (
    <section id="steps">
      <Row>
        <Col lg={4} sm={12}>
          <h6>Etapa 1</h6>
          <h5>Descarte</h5>
          <p>
            Nosssa plataforma simplifica o processo de descarte de REEE
            permitindo que você cadastre um dispositovo e agende a agende a
            coleta.
          </p>
        </Col>
        <Col lg={4} sm={12}>
          <h6>Etapa 2</h6>
          <h5>Coleta</h5>
          <p>
            Após seu dispositivo ser eleito para coleta, um de nossos parceiros
            entrará em contato com você para realizar a coleta na comodidade da
            sua casa.
          </p>
        </Col>
        <Col lg={4} sm={12}>
          <h6>Etapa 3</h6>
          <h5>Reaproveitamento</h5>
          <p>
            Nossos parceiros avaliam o dispositivo coleta e dão o melhor fim ao
            seu resíduo, evitando a contaminação do meio ambiente.
          </p>
        </Col>
      </Row>
    </section>
  );
}
