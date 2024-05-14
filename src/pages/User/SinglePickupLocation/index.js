import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { SingleViewMap } from "../../../components/Maps";

export default function SinglePickupLocation() {
  return (
    <>
      <Row>
        <h1 className="mb-5">{"Pontos de Coleta / Cooperita"}</h1>
      </Row>
      <Row className="single-pickup-location flex-column row-gap-5">
        <Col className="single-pickup-location--card flex-column">
          <Col className="card-header d-flex align-items-end p-3">
            <h2 className="text-light">Cooperita</h2>
          </Col>

          <Col className="p-3">
            <p>
              <strong className="me-2">Endereço:</strong> Lorem ipsum dolor sit amet, 300, Lorem
              Ipsum, Lorem Ipsum - LP, Lorem
            </p>
            <p>
              <strong className="me-2">CEP:</strong> 99999-999
            </p>
            <p>
              <strong className="me-2">Resíduos:</strong> plástico, vidro, papel,
              eletroeletrônicos
            </p>
            <p>
              <strong className="me-2">Filiação:</strong> Cooperita
            </p>
            <p>
              <strong className="me-2">CNPJ:</strong> 9999999999
            </p>
          </Col>
        </Col>
        <Col>
          <h4 className="mb-3">Descrição</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>

        <Col className="single-pickup-location--map">
          <h4 className="mb-3">Localização e Distância</h4>
          <SingleViewMap />
        </Col>
      </Row>
    </>
  );
}
