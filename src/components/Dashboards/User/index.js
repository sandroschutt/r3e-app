import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import profileDummyAvatar from "../../../assets/images/r3d3_profile_avatar.png";
import { Col, Row } from "react-bootstrap";

export default function UserDashboard() {
  return (
    <div className="user-dashboard-wrapper">
      <Row className="user-card">
        <Col className="col-xl-2 p-0 text-center">
          <img src={profileDummyAvatar} alt="" />
        </Col>
        <Col>
          <h2>Nome do Usuário</h2>
          <div className="card-text d-flex">
            <p>Role</p>
            <span>somemail@example.com</span>
          </div>
          <div className="card-text d-flex">
            <p>Editar perfil</p>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </Col>
      </Row>
      <Row className="user-info">
        <Col className="col-4">
          <h3>Col</h3>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
        </Col>
        <Col className="col-4">
          <h3>Col</h3>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
        </Col>
        <Col className="col-4">
          <h3>Col</h3>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
          <p>
            <span className="key">Key:</span>
            <span>Value Lorem ipsum some</span>
          </p>
        </Col>
      </Row>
    </div>
  );
}
