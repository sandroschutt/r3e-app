import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faGraduationCap,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

export default function NewOpportunities() {
  return (
    <section id="new-opportunities">
      <Row>
        <Col sm={12} lg={6} className="new-opportunities-img"></Col>
        <Col sm={12} lg={6} className="new-opportunities-text">
          <h6>Impacto social</h6>
          <h4>Tecnologia criando novas oportunidades</h4>
          <p>
            Organizações Não Governamentais (ONGs), projetos sociais,
            instituições de ensino e pequenas empresas podem dar uma sobrevida
            positiva para os dispositivos captados, seja fornecendo acesso à
            tecnologia para estudantes da rede pública ou reciclando lixo
            prejudicial ao meio ambiente.
          </p>
          <p>
            Nosso objetivo é tornar seu descarte em um recurso útil para a
            sociedade.
          </p>

          <div className="opportunities-icons">
            <Row>
              <Col sm={12}>
                <p className="icon-container">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvira} />
                  </span>
                  <span>ONGs</span>
                </p>
              </Col>
              <Col sm={12}>
                <p className="icon-container">
                  <span className="icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <span>Instituições de ensino</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <p className="icon-container">
                  <span className="icon">
                    <FontAwesomeIcon icon={faFlag} />
                  </span>
                  <span>Projetos sociais</span>
                </p>
              </Col>
              <Col sm={12}>
                <p className="icon-container">
                  <span className="icon">
                    <FontAwesomeIcon icon={faIndustry} />
                  </span>
                  <span>Empresas e MEIs</span>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section>
  );
}
