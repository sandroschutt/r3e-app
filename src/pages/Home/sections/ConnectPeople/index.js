import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import {
  faCheck
} from "@fortawesome/free-solid-svg-icons";

export default function ConnectPeople() {
  return (
    <section id="connect-people">
      <Row>
        <Col sm={12} xl={5} lg={5} className="connect-people-img"></Col>
        <Col sm={12} xl={7} lg={7} className="connect-people-text">
          <h4>
            <span className="text-success">Tecnologia</span> é melhor quando
            conecta as pessoas
          </h4>
          <p>
            Buscamos conectar doadores e parceiros aptos a tratar lixo
            eletrônico para diminuir o impacto ambiental e social da tecnologia
            em nosso país.
          </p>
          <p>
            O R3E é dedicado a tornar o processo de doação e captação o mais
            cômodo possível para todas as partes envolvidas.
          </p>
          <p className="icon-container">
            <span className="icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>Conectamos pessoas e organizações</span>
          </p>
          <p className="icon-container">
            <span className="icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>Processo simples e cômodo</span>
          </p>
          <p className="icon-container">
            <span className="icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>Impacto ambiental e social positivo</span>
          </p>
        </Col>
      </Row>
    </section>
  );
}
