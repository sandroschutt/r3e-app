import "./style.scss";
import { useUserDataContext } from "../../../context/UserDataContext";
import { Col, Row } from "react-bootstrap";

export default function Dashboard() {
  const { userData, updateUserData } = useUserDataContext();

  return (
    <Row className="profile-view flex-column">
      <Col className="dashboard-header">
        <h1 className="w-100">Painel de controle</h1>
      </Col>
      <Col className="px-0">
        <Col>
          <Row className="option-group flex-column px-0">
            <Row className="option gap-3 mb-3">
              <Col className="h-100 border border-success bg-success text-light">
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4 border border-success"></Col>
                  <Col className="col-8 px-2 border border-success">
                    <h5>Minhas Coletas</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
              <Col className="h-100 bg-primary text-light">
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
              <Col className="h-100 bg-secondary text-light">
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="option-content col-8 px-2">
                    <h5>Mapa Sustentável</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Col>
                </Row>
              </Col>
              <Col className="h-100 bg-warning text-light">
                <Row className="option-content p-2 align-items-center">
                  <Col className="col-4"></Col>
                  <Col className="option-content col-8 px-2">
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
            <Row className="option w-50 gap-3 mb-3">
              <Col className="h-100 p-2 border border-success bg-success">
                <p>Perfil</p>
              </Col>
              <Col className="h-100 p-2 border border-secondary bg-secondary">
                <p>NULL</p>
              </Col>
              <Col className="h-100 p-2 border border-dark bg-dark text-light">
                Configurações
              </Col>
              <Col className="h-100 p-2 border border-danger bg-danger">
                <p>Sair</p>
              </Col>
            </Row>
            <Row className="option gap-3 mb-3"></Row>
          </Row>
        </Col>
      </Col>
</Row>
  );
}
