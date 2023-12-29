import "./style.css";
import { Col, Row } from "react-bootstrap";

export default function Team() {
  return (
    <section id="team">
      <Row>
        <Col lg={6} sm={12} className="title">
          <h6>Nosso time</h6>
          <h4>Experts e profissionais</h4>
        </Col>
        <Col lg={6} sm={12} className="team-description">
          <p>
            Nosso time conta com desenvolvedores, técnicos e profissionais de
            marketing que mantém a iniciativa viva e causando um impacto
            positivo na sociedade.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={3} sm={12} className="team-card mb-3">
          <div className="card-text">
            <p className="title">José Aldo</p>
            <p className="subtitle">Desenvolvedor</p>
          </div>
          <div className="card-img first-img"></div>
        </Col>
        <Col lg={3} sm={12} className="team-card mb-3">
          <div className="card-text">
            <p className="title">Izabella Wu</p>
            <p className="subtitle">Desenvolvedora</p>
          </div>
          <div className="card-img second-img"></div>
        </Col>
        <Col lg={3} sm={12} className="team-card mb-3">
          <div className="card-text">
            <p className="title">Milton Souza</p>
            <p className="subtitle">Marketing</p>
          </div>
          <div className="card-img third-img"></div>
        </Col>
        <Col lg={3} sm={12} className="team-card mb-3">
          <div className="card-text">
            <p className="title">Cleiton Lima</p>
            <p className="subtitle">Técnico</p>
          </div>
          <div className="card-img fourth-img"></div>
        </Col>
      </Row>
    </section>
  );
}
