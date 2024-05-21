import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();
  const navigate = useNavigate();

  return (
    <div className="profile-view">
      <Col className="dashboard-header">
        <h1 className="w-100">Painel de controle</h1>
      </Col>
      <Col className="px-0">
        <Col>
          <Row className="option-group flex-column px-0">
            <Row className="option gap-3 mb-3">
              <Col className="my-pickups h-100 text-light px-0" onClick={() => navigate(`pickups`)}>
                <Row className="option-content py-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="col-8 px-2">
                    <h5>Minhas Coletas</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
              <Col className="my-devices h-100 px-0 text-light" onClick={() => navigate(`public-devices`)}>
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="col-8 px-2">
                    <h5>Meus Dispositivos</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="option gap-3 mb-3">
              <Col className="sustainable-map h-100 px-0 text-light" onClick={() => navigate(`map`)}>
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="col-8 px-2">
                    <h5>Mapa Sustentável</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
              <Col className="pickup-locations h-100 px-0 text-light" onClick={() => navigate(`pickup-locations`)}>
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="col-8 px-2">
                    <h5>Pontos de coleta</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col>
          <Row className="option-group flex-column justify-content-around">
            <Row className="option w-50 gap-3 mb-3 align-items-center">
              <Col className="minor-option h-100 p-2 bg-success d-flex flex-column align-items-center justify-content-center" onClick={() => navigate(`profile`)}>
                <FontAwesomeIcon icon={faUserCircle} style={{height: "96px", width: "auto", color: "lightgrey"}} />
                <h6 className="text-white text-bold my-3">Perfil</h6>
              </Col>
              <Col className="minor-option h-100 p-2 bg-dark text-light d-flex flex-column align-items-center justify-content-center" onClick={() => navigate(`settings`)}>
                <FontAwesomeIcon className="text-secondary" icon={faGear} style={{ height: "96px", width: "auto" }} />
                <h6 className="text-white text-bold my-3">Configurações</h6>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row className="option gap-3 mb-3"></Row>
          </Row>
        </Col>
      </Col>
</div>
  );
}
