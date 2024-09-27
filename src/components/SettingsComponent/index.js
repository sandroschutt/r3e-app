import { Button, Col, Row } from "react-bootstrap";
import "./style.scss";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export function SettingsComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [showLocalization, setShowLocalization] = useState(true);
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [showNotifications, setShowNotifications] = useState(true);
  const [anyoneCanContact, setAnyoneCanContact] = useState(true);

  const settings = {
    visibleLocation: "",
    visiblePhone: "",
    visibleMail: "",
    notifications: "",
    recieveMessages: "",
  };

  function handleVisibility() {
    setIsVisible(!isVisible);

    console.log(isVisible);
  }

  function handleShowLocalization() {
    setShowLocalization(!showLocalization);
  }

  function handleShowContactInfo() {
    setShowContactInfo(!showContactInfo);
  }

  function handleShowNotifications() {
    setShowNotifications(!showNotifications);
  }

  function handleAnyoneCanContact() {
    setAnyoneCanContact(!anyoneCanContact);
  }

  function handleUpdateSettings() {
    if (isVisible) {
      settings.visibleLocation = showLocalization;
      settings.visiblePhone = showContactInfo;
      settings.visibleMail = showContactInfo;
      settings.notifications = showNotifications;
      settings.recieveMessages = anyoneCanContact;
    } else {
      settings.visibleLocation = false;
      settings.visiblePhone = false;
      settings.visibleMail = false;
      settings.notifications = false;
      settings.recieveMessages = false;
    }

    console.log(settings);
  }

  return (
    <div>
      <Form
        className="mb-5"
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdateSettings();
        }}
      >
        <h5 className="mb-4">Privacidade</h5>
        <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
          <Col className="col-6 text-start mr-0 my-0">
            <p> Visivilidade</p>
          </Col>
          <Col className="col-4 text-end mx-0">
            <p className="mb-0 mr-2">{isVisible ? "Visível" : "Invisível "}</p>
          </Col>
          <Col className="col-1 text-end mx-0">
            <Form.Check
              type="switch"
              id="visibility-swith"
              checked={isVisible}
              isValid
              onChange={() => {
                handleVisibility();
              }}
            />
          </Col>
        </Row>
        <hr className="mt-0 w-50 w-sm-100 w-xs-100" />

        <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
          <Col className="col-6 text-start  mr-5 my-0">
            <p>Outros usuários podem ver minha localização ?</p>
          </Col>
          <Col className="col-4 text-end mx-0">
            <p className="mb-0 mr-2">{showLocalization ? "Sim" : "Não"}</p>
          </Col>
          <Col className="col-1 text-end mx-0">
            <Form.Check // prettier-ignore
              type="switch"
              id="show-localization-switch"
              disabled={isVisible === false ? true : false}
              checked={showLocalization}
              onChange={() => {
                handleShowLocalization();
              }}
            />
          </Col>
        </Row>
        <hr className="mt-0 w-50 w-sm-100 w-xs-100" />

        <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
          <Col className="col-6 text-start mr-5 my-0">
            <p className="fs-12">Outros usuários podem ver meu email? </p>
          </Col>
          <Col className="col-4 text-end text-end mx-0">
            <p className="mb-0 mr-2">{showContactInfo ? "Sim" : "Não"}</p>
          </Col>
          <Col className="col-1 text-end mx-0">
            <Form.Check // prettier-ignore
              type="switch"
              id="show-email-switch"
              disabled={isVisible === false ? true : false}
              checked={showContactInfo}
              onChange={() => {
                handleShowContactInfo();
              }}
            />
          </Col>
        </Row>
        <hr className="mt-0 w-50 w-sm-100 w-xs-100" />

        <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
          <Col className="col-6 text-start mr-5 my-0">
            <p>Receber notificações?</p>
          </Col>
          <Col className="col-4 text-end mx-0">
            <p className="mb-0 mr-2">{showNotifications ? "Sim" : "Não"}</p>
          </Col>
          <Col className="col-1 text-end mx-0">
            <Form.Check // prettier-ignore
              type="switch"
              id="anyone-can-contact-switch"
              disabled={isVisible === false ? true : false}
              checked={showNotifications}
              onChange={() => {
                handleShowNotifications();
              }}
            />
          </Col>
        </Row>
        <hr className="mt-0 w-50 w-sm-100 w-xs-100" />

        <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
          <Col className="col-6 text-start mr-5 my-0">
            <p> Qualquer usuário pode entrar em contato comigo ?</p>
          </Col>
          <Col className="col-4 text-end mx-0">
            <p className="mb-0 mr-2">{anyoneCanContact ? "Sim" : "Não"}</p>
          </Col>
          <Col className="col-1 text-end mx-0">
            <Form.Check // prettier-ignore
              type="switch"
              id="anyone-can-contact-switch"
              disabled={isVisible === false ? true : false}
              checked={anyoneCanContact}
              onChange={() => {
                handleAnyoneCanContact();
              }}
            />
          </Col>
        </Row>
        <hr className="mt-0 w-50 w-sm-100 w-xs-100" />
        <Button variant="outline-success" type="submit">
          Salvar
        </Button>
      </Form>

      <h5 className="my-4">Conta</h5>
      <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
        <Col>
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "#000000", textDecoration: "none" }}
          >
            Redefinir Senha
          </button>
          <hr className="my-2" />
        </Col>
      </Row>
      <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
        <Col>
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "#000000", textDecoration: "none" }}
          >
            Solicitar cópia dos meus dados
          </button>
          <hr className="my-2" />
        </Col>
      </Row>
      <Row className="flex-row justify-content w-50 w-sm-100 w-xs-50 mb-0">
        <Col>
          <button
            type="button"
            className="btn btn-link"
            style={{ color: "#ce0707", textDecoration: "none" }}
          >
            Excluir conta do R3E
          </button>
          <hr className="my-2" />
        </Col>
      </Row>
    </div>
  );
}
