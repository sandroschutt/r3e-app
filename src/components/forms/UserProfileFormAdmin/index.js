import "./style.scss";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { brazilianStatesList } from "../json/brazilianStatesList.js";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { validatePhones } from "../../../validations/validatePhones.js";
import Api from "../../../classes/Api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfileFormAdmin(props) {
  const [avatar, setAvatar] = useState("");
  const params = useParams();
  const user = props.user.user;

  useEffect(() => {
    if(avatar === "" && params.id === undefined) {
      setAvatar(Api.endpoint(`uploads/avatar/${user.avatar}`))
      return;
    }

    if(avatar === "") setAvatar(Api.endpoint(`uploads/avatar/${user.avatar}`));
  }, [avatar])

  function handleFormData(event) {
    event.preventDefault();
    user.update(user.id, user);
  }

  if (user !== "") {
    return (
      <Form
        className="user-profile--form px-0"
        onSubmit={(event) => handleFormData(event)}
      >
        <Row className="profile-header p-3 justify-content-between align-items-center">
          <Col className="profile-picture col-2">
            <div
              className="bg-light"
              style={{
                backgroundImage: `url(${
                  user.avatar !== null ? avatar : r3eMascot
                })`,
              }}
            >
              <FontAwesomeIcon
                className="p-2 bg-secondary text-light rounded"
                icon={faPenToSquare}
                onClick={(event) => {
                  event.target.nextElementSibling.click();
                }}
                style={{
                  position: "relative",
                  right: "-80px",
                  fontSize: ".8em",
                }}
              />
              <input
                type="file"
                accept="img/jpeg, img/jpg, img/png"
                onChange={(event) => (user.image = event.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
          </Col>
          <Col className="profile-info col-8">
            <h3>{user.name}</h3>
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
              placeholder={user.name}
              onChange={(event) => (user.name = event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder={user.email}
              onChange={(event) => (user.email = event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userSecondarEmail">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder={user.secondaryEmail || "secondary@usermail.com"}
              onChange={(event) =>
                (user.secondaryEmail = event.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPhone">
            <Form.Label>Celular:</Form.Label>
            <Form.Control
              type="text"
              placeholder={validatePhones(user.phone)}
              onChange={(event) => (user.phone = event.target.value)}
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
              placeholder={user.address.zipcode}
              onChange={(event) =>
                (user.address.zipcode = event.target.value)
              }
              maxLength={9}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userStreet">
            <Form.Label>Rua:</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.address.street}
              onChange={(event) =>
                (user.address.street = event.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userAddressNumber">
            <Form.Label>Nº:</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.address.number}
              onChange={(event) =>
                (user.address.number = event.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userNeighborhood">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.address.neighborhood}
              onChange={(event) =>
                (user.address.neighborhood = event.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userCity">
            <Form.Label>Cidade:</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.address.city}
              onChange={(event) => (user.address.city = event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userState">
            <Form.Label>Estado:</Form.Label>
            <Form.Select
              aria-label="Estado"
              defaultValue={user.address.state}
              onChange={(event) =>
                (user.address.state = event.target.value)
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
              // defaultValue={user.document.type}
              onChange={(event) =>
                (user.document.type = event.target.value)
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
              placeholder={user.document.documentNumber}
              onChange={(event) =>
                (user.document.documentNumber = event.target.value)
              }
            />
          </Form.Group>
        </div>
      </Form>
    );
  }
}
