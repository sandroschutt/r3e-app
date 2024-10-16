import { Button, Col, Row } from "react-bootstrap";
import "./style.scss";
import Form from "react-bootstrap/Form";
import { brazilianStatesList } from "../json/brazilianStatesList.js";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { validatePhones } from "../../../validations/validatePhones.js";
import User from "../../../classes/User.js";
import Api from "../../../classes/Api.js";

export default function UserProfileForm(props) {
  const userData = props.user;
  const user = new User(userData.id);
  const avatar = Api.endpoint(`uploads/avatar/${userData.avatar}`)

  function handleFormData(event) {
    event.preventDefault();
    user.update(userData.id, userData);
  }

  if (userData !== "") {
    return (
      <Form
        className="user-profile--form px-0"
        onSubmit={(event) => handleFormData(event)}
      >
        <Row className="profile-header p-3 justify-content-between align-items-center">
          <Col className="profile-picture col-2">
            <div
              className="bg-light"
              style={{ backgroundImage: `url(${userData.avatar !== null ? avatar : r3eMascot})` }}
            ></div>
          </Col>
          <Col className="profile-info col-8">
            <h3>{userData.name}</h3>
          </Col>
          <Col className="profile-main-action col-2">
            <Button type="submit" variant="success">
              Atualizar
            </Button>
          </Col>
        </Row>
        <div className="user-profile--form-section p-5">
          <h5>Contato</h5>
          <hr className="mb-4 text-secondary" />
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.name}
              onChange={(event) => (userData.name = event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder={userData.email}
              onChange={(event) => (userData.email = event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userSecondarEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder={userData.secondaryEmail || "secondary@usermail.com"}
              onChange={(event) => (userData.secondaryEmail = event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPhone">
            <Form.Label>Celular:</Form.Label>
            <Form.Control
              type="text"
              placeholder={validatePhones(userData.phone)}
              onChange={(event) => (userData.phone = event.target.value)}
              maxLength={15}
            />
          </Form.Group>
        </div>

        <div className="user-profile--form-section p-5">
          <h5>Endereço</h5>
          <hr className="mb-4 text-secondary" />
          <Form.Group className="mb-3" controlId="userZipcode">
            <Form.Label>CEP:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.address.zipcode}
              onChange={(event) =>
                (userData.address.zipcode = event.target.value)
              }
              maxLength={9}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userStreet">
            <Form.Label>Rua:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.address.street}
              onChange={(event) =>
                (userData.address.street = event.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userCity">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.address.city}
              onChange={(event) => (userData.address.city = event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userState">
            <Form.Label>Estado:</Form.Label>
            <Form.Select
              aria-label="Estado"
              defaultValue={userData.address.state}
              onChange={(event) =>
                (userData.address.state = event.target.value)
              }
            >
              {brazilianStatesList.map((state, index) => {
                return (
                  <option value={state.uf} key={index}>
                    {state.label}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </div>

        <div className="user-profile--form-section p-5">
          <h5>Documento</h5>
          <hr className="mb-4 text-secondary" />
          <Form.Group className="mb-3" controlId="userDocumentType">
            <Form.Label>Tipo:</Form.Label>
            <Form.Select
              aria-label="doctype"
              defaultValue={userData.document.type}
              onChange={(event) =>
                (userData.document.type = event.target.value)
              }
            >
              <option value="rg">RG</option>
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
              <option value="outros">Outro</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userDocumentNumber">
            <Form.Label>Número do documento:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.document.documentNumber}
              onChange={(event) =>
                (userData.document.documentNumber = event.target.value)
              }
            />
          </Form.Group>
        </div>
      </Form>
    );
  }
}
