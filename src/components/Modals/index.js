import "./style.scss";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ReturnProcess from "../../classes/ReturnProcess";
import { Badge } from "react-bootstrap";
import Notification from "../../classes/Notification";
import { useUserDataContext } from "../../context/UserDataContext";
import { validateDate } from "../../validations/validateDate";

export function AdminAddReturnProcessModal() {
  const [show, setShow] = useState(false);
  const [finality, setFinality] = useState(1);
  const [process, setProcess] = useState(1);
  const [destination, setDestination] = useState(1);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleFormData() {
    if (description === "") {
      alert("Existem valores ausentes no formulário!");
      return;
    }

    let formData = {
      description: description,
      finality: finality,
      process: process,
      destination: destination,
    };

    ReturnProcess.create(formData);
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        {"+ Adicionar nova"}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar nova</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Finalidade:</label>
              <Form.Select
                name="finality"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setFinality(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  reciclagem
                </option>
                <option key={2} value={2}>
                  desmonte
                </option>
                <option key={3} value={3}>
                  peças
                </option>
                <option key={4} value={4}>
                  recondicionamento
                </option>
                <option key={5} value={5}>
                  reuso
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Processo:</label>
              <Form.Select
                name="process"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setProcess(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  desmonte e reaproveitamento de materiais
                </option>
                <option key={2} value={2}>
                  desmonte e reaproveitamento de componentes
                </option>
                <option key={3} value={3}>
                  desmonte e reaproveitamento de peças
                </option>
                <option key={4} value={4}>
                  instalação de peças de terceiros
                </option>
                <option key={5} value={5}>
                  contemplar estudante com dispositivo
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <label className="main-label mb-2">Destino:</label>
              <Form.Select
                name="destination"
                className="mb-3"
                defaultValue={1}
                onChange={(event) => setDestination(event.target.value)}
                required
              >
                <option key={1} value={1}>
                  empresa especializada
                </option>
                <option key={2} value={2}>
                  oficina R3E
                </option>
                <option key={3} value={3}>
                  estudantes
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <label className="main-label mb-2">Descrição:</label>
              <Form.Control
                className="mb-3"
                name="description"
                as="textarea"
                rows={8}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={() => handleFormData()}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function NotificationsModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notificationList, setNotificationList] = useState("");
  const userData = useUserDataContext();

  useEffect(() => {
    if (notificationList === "")
      Notification.getAll(userData.userData.id, setNotificationList);
  }, [notificationList, userData]);

  function handleOpenNotification(notification) {
    notification.read = true;
    const { id } = notification;
    Notification.update(id, userData.userData.id, notification);
    if (notification.url) window.location.href = notification.url;
  }

  function handleNotificationsBadge(notificationList) {
    notificationList = notificationList.filter(
      (notification) => notification.read === false
    );
    if (notificationList.length > 0)
      return (
        <Badge
          bg="danger"
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ minHeight: "24px", minWidth: "24px" }}
        >
          <p className="mb-0">{notificationList.length}</p>
        </Badge>
      );
  }

  function notificationItemBackgroundColor(notification) {
    if (notification.read === false) {
      return "var(--bs-gray-200)";
    } else if (notification.read === true) return "white";
  }

  if (notificationList !== "")
    return (
      <div
        className="custom-modal"
        style={{ display: "block", position: "initial" }}
      >
        <>
          <span
            style={{
              position: "absolute",
              marginLeft: "-20px",
              fontSize: ".8em",
            }}
          >
            {handleNotificationsBadge(notificationList)}
          </span>
          <FontAwesomeIcon
            className="notifications"
            icon={faBell}
            onClick={() => {
              if (show === false) handleShow();
              if (show !== false) handleClose();
            }}
          />
        </>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            className="d-flex bg-success text-light align-items-center"
            closeButton
          >
            <p className="h4 me-3 mb-0">Notificações</p>
            {handleNotificationsBadge(notificationList)}
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="p-0 mb-0 overflow-y-scroll">
              <ul className="p-0" style={{ height: "600px" }}>
                {notificationList.map((notification, index) => {
                  return (
                    <li
                      key={index}
                      className="d-flex justify-content-between align-items-center px-4 py-2 border"
                      onClick={() => {
                        handleOpenNotification(notification);
                      }}
                      style={{
                        backgroundColor:
                          notificationItemBackgroundColor(notification),
                        minHeight: "80px",
                      }}
                    >
                      <a href="#" className="text-dark text-reset">
                        <p className="mb-1">
                          <strong>{notification.content}</strong>
                        </p>
                      </a>
                      <p
                        className="mb-0"
                        style={{ textAlign: "right", fontSize: ".8em" }}
                      >
                        {validateDate(notification.createdAt)}
                      </p>
                    </li>
                  );
                })}
                <li>
                  <p className="text-center text-secondary py-3">
                    Todas as notificações foram carregadas
                  </p>
                </li>
              </ul>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
}

export function SinglePickupContact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <strong>Contato</strong>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Assunto da mensagem"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control className="mb-3" as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function SinglePickupCancelationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <strong>Cancelar</strong>
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>
            Aguardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
