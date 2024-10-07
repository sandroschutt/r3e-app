import "./style.scss";
import { Col, Row } from "react-bootstrap";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { validatePhones } from "../../../validations/validatePhones.js";

export default function UserProfileList(props) {
  const user = props.user;

  if (user !== "") {
    return (
      <>
        <Row className="profile-header p-3 justify-content-start align-items-center">
          <Col className="profile-picture col-2">
            <div
              className="bg-light"
              style={{ backgroundImage: `url(${r3eMascot})` }}
            ></div>
          </Col>
          <Col className="profile-info col-8">
            <h3>{user.name}</h3>
          </Col>
        </Row>
        <div className="user-profile--list-section p-5">
          <h5>Contato</h5>
          <hr className="mb-4 text-secondary" />
          <p className="mb-3">
            <strong>Nome:</strong> {user.name}
          </p>

          <p className="mb-3">
            <strong>E-mail:</strong> {user.email}
          </p>

          <p className="mb-3">
            <strong>Celular:</strong> {validatePhones(user.phone)}
          </p>
        </div>

        <div className="user-profile--list-section p-5">
          <h5>Endereço</h5>
          <hr className="mb-4 text-secondary" />
          <p className="mb-3">
            <strong>CEP:</strong> {user.address.zipcode}
          </p>

          <p className="mb-3">
            <strong>Rua:</strong> {user.address.street}
          </p>
          <p className="mb-3">
            <strong>Cidade:</strong> {user.address.city}
          </p>
          <p className="mb-3">
            <strong>Estado:</strong> {user.address.state}
          </p>
        </div>
      </>
    );
  }
}
