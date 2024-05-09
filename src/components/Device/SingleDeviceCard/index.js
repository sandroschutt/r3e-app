import "./style.scss";
import dummyDeviceImg from "../../../assets/images/motog2 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Row } from "react-bootstrap";

export default function SingleDeviceCard() {
  return (
    <Row className="single-device--card">
      <Col className="col-3 ps-0">
        <img src={dummyDeviceImg} alt="" />
      </Col>
      <Col className="col-5">
        <div className="single-device--data">
          <h2>Motorola Moto G2</h2>
          <p>
            <span>
              <strong>Marca:</strong>
            </span>{" "}
            <span>Motorola</span>
          </p>
          <p>
            <span>
              <strong>Ano:</strong>
            </span>{" "}
            <span>2015</span>
          </p>
          <p>
            <span>
              <strong>Estado:</strong>
            </span>{" "}
            <span>bom</span>
          </p>
          <p>
            <span>
              <strong>Uso:</strong>
            </span>{" "}
            <span>7 anos</span>
          </p>
          <p>
            <span>
              <strong>Estado:</strong>
            </span>{" "}
            <span>usável</span>
          </p>

          <p>
            <span>
              <strong>Proprietário:</strong>
            </span>
            <span>Nome do Proprietário(a)</span>
          </p>

          <p>
            <span>
              <strong>Endereço:</strong>
            </span>
            <span>Rua Exemplo, 200, Bairro Exemplo</span>
          </p>

          <div className="single-device--actions d-flex">
            <Button className="me-2" variant="outline-success">
              <FontAwesomeIcon icon={faTruck} />
              <span className="ms-1">Icon text</span>
            </Button>
            <Button className="me-2" variant="outline-success">
              <FontAwesomeIcon icon={faMessage} />
              <span className="ms-1">Icon text</span>
            </Button>
            <Button className="me-2" variant="outline-success">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ms-1">Icon text</span>
            </Button>
          </div>
        </div>
      </Col>
      <p className="single-device--badge bg-dark text-white text-center">C</p>
    </Row>
  );
}
