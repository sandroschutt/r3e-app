import "./style.scss";
import DummyAvatarImage from "../../assets/images/r3d3_profile_avatar.png";
import { Button, Col, Row } from "react-bootstrap";

export function AdminUsersPreview(props) {
  return (
    <Row className="admin-users--preview flex-column justify-content-between">
      <Col className="admin-users--preview--header d-flex align-items-center gap-4 col-2 w-100">
        <img src={DummyAvatarImage} alt="" />
        <div>
          <h2>Nome de Usuário</h2>
          <p>
            <strong className="me-2">{props.users === "student" ? "Estudante" : "Cliente"}</strong>email@usuario.com
          </p>
        </div>
      </Col>
      <Col className="admin-users-preview--children col-8 w-100">{props.children}</Col>
      <Col className="admin-users--preview--actions col-2 w-100 d-flex">
        <Row className="w-100 justify-content-around align-items-center">
          {props.actions.map((action) => {
            return (
              <Col>
                <Button variant="outline-success" className="w-100" onClick={() => alert(`${action} usuário ou estudante`)}>
                  {action}
                </Button>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
}
