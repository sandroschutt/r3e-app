import "./style.scss";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { brazilianStatesList } from "../json/brazilianStatesList.js";
import r3eMascot from "../../../assets/images/r3d3_profile_avatar.png";
import { validatePhones } from "../../../validations/validatePhones.js";
import User from "../../../classes/User.js";
import Api from "../../../classes/Api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserDataContext } from "../../../context/UserDataContext/index.js";

export default function UserProfileForm(props) {
  const {userData} = useUserDataContext();
  const user = new User(userData.id);
  const [avatar, setAvatar] = useState("");
  const params = useParams();

  useEffect(() => {
    if(avatar === "" && params.id === undefined) {
      setAvatar(Api.endpoint(`uploads/avatar/${userData.avatar}`))
      return;
    }

    if(avatar === "") setAvatar(Api.endpoint(`uploads/avatar/${user.avatar}`));
  }, [avatar])

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
              style={{
                backgroundImage: `url(${
                  userData.avatar !== null ? avatar : r3eMascot
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
                onChange={(event) => (userData.image = event.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
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
              onChange={(event) =>
                (userData.secondaryEmail = event.target.value)
              }
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
          <Form.Group className="mb-3" controlId="userAddressNumber">
            <Form.Label>Nº:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.address.number}
              onChange={(event) =>
                (userData.address.number = event.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="userNeighborhood">
            <Form.Label>Bairro:</Form.Label>
            <Form.Control
              type="text"
              placeholder={userData.address.neighborhood}
              onChange={(event) =>
                (userData.address.neighborhood = event.target.value)
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
