import "./style.css";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";

export default function Main() {
  return (
    <section id="main">
      <Row>
        <Col>
          <h1>Ajude o meio ambiente e a sociedade</h1>

          <p>
            O descarte correto do seu lixo eletrônico evita a contaminação do
            meio ambiente e pode ajudar projetos sociais e empresas. Clique no
            botão abaixo para agendar uma coleta!
          </p>

          <ButtonGroup>
            <Button variant="dark">Saiba mais</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="success">Reciclar</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
}
