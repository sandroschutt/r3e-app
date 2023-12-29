import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import { faRepeat, faTags, faTrophy, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function SimplifiedProcess() {
  return (
    <section id="simplified-proccess">
      <Row>
        <Col lg={4} sm={12}>
          <h4>Processo Simplificado</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <Button variant="success">Doar daispositivo</Button>
        </Col>
        <Col lg={4} sm={12}>
          <div className="icon-container">
            <p className="icon">
              <FontAwesomeIcon icon={faRepeat} />
            </p>
            <h6>Doações</h6>
            <p className="proccess-description">
              Doadores cadastram dispositivos na plataforma, tornando-os
              elegíveis para captação por nossos parceiros.
            </p>
          </div>
          <div className="icon-container">
            <p className="icon">
              <FontAwesomeIcon icon={faTrophy} />
            </p>
            <h6>Disputa</h6>
            <p className="proccess-description">
              A disputa é iniciada assim que um dispositivo é selecionado por um
              parceiro e tem o prazo de três dias para ser encerrado. O vencedor
              da disputa poderá entrar em contato com o doador para agendar a
              coleta.
            </p>
          </div>
        </Col>
        <Col lg={4} sm={12}>
          <div className="icon-container">
            <p className="icon">
              <FontAwesomeIcon icon={faTags} />
            </p>
            <h6>Listagem</h6>
            <p className="proccess-description">
              Com ajuda de nosso Mapa Sustentável, parceiros podem identificar
              dispositivos de seu interesse e disputá-los com outros
              interessados.
            </p>
          </div>
          <div className="icon-container">
            <p className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </p>
            <h6>Coleta</h6>
            <p className="proccess-description">
              O doador recebe uma notificação sobre o prazo de coleta e
              condições de retirada. Disponibilizamos um canal de comunicação
              entre doador e reciclaodr.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
