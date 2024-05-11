import "./style.scss";
import DummyAvatarImage from "../../assets/images/r3d3_profile_avatar.png";
import { Col, Row } from "react-bootstrap";

export function AdminUsersPreview(props) {
  return (
    <Row className="admin-users--preview flex-column justify-content-between">
      <Col className="admin-users--preview--header d-flex align-items-center gap-4 col-2 w-100">
        <img src={DummyAvatarImage} alt="" />
        <div>
          <h2>Nome de Usuário</h2>
          <p>
            <strong>{props.users === "student" ? "Estudante" : "Cliente"}</strong>email@usuario.com
          </p>
        </div>
      </Col>
      <Col className="admin-users-preview--children col-8 w-100">{props.children}</Col>
      <Col className="admin-users--preview--actions col-2 w-100">
        <Row className="w-100">
          {props.actions.map((action) => {
            return (
              <Col>
                <button className="admin-users--preview--actions--item">
                  {action}
                </button>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
