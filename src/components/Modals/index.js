import Modal from "react-bootstrap/Modal";
import "./style.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NotificationList } from "../Lists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useUserDataContext } from "../../context/UserDataContext";
import ReturnProcess from "../../classes/ReturnProcess";
import User from "../../classes/User";
import {
  handlePostDeviceFormSubmit,
  handleSelectPlaceholder,
  handleStateOptions,
} from "./helpers";
import Device from "../../classes/Device";
import Brands from "../../classes/Brands";
import Models from "../../classes/Models";

export function NewUserModal() {
  const user = new User();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    info: {
      name: "",
      email: "",
      secondaryEmail: "",
      phone: "",
      role: "",
    },
    document: {
      type: "",
      documentNumber: "",
    },
    address: {
      zipcode: "",
      street: "",
      city: "",
      state: "",
    },
  };

  function handleFormSubmit(data) {
    if (
      data.info.name === "" ||
      data.info.email === "" ||
      data.info.phone === "" ||
      data.document.docNumber === "" ||
      data.address.zipcode === "" ||
      data.address.street === "" ||
      data.address.city === "" ||
      data.address.state === ""
    ) {
      alert(
        "Para criar um novo usuário é necessário preencher completamente o formulário."
      );
      console.log(data);
      return;
    }

    user.create(data);
  }

  return (
    <>
      <Button className="btn-success text-right mb-2" onClick={handleShow}>
        Novo usuário +
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Novo usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="new-user-form"
            onSubmit={(event) => {
              event.preventDefault();
              handleFormSubmit(data);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Nome:</Form.Label>
              <Form.Control
                className="mb-3"
                name="name"
                type="text"
                placeholder="Nome do Novo Usuário"
                onChange={(event) => (data.info.name = event.target.value)}
                autoFocus
              />
              <Form.Label htmlFor="email">E-mail:</Form.Label>
              <Form.Control
                className="mb-3"
                name="email"
                type="email"
                placeholder="E-mail:"
                onChange={(event) => (data.info.email = event.target.value)}
              />
              <Form.Label htmlFor="secondaryEmail">
                E-mail alternativo:
              </Form.Label>
              <Form.Control
                className="mb-3"
                name="secondaryEmail"
                type="secondaryEmail"
                placeholder="usuario@email.com:"
                onChange={(event) =>
                  (data.info.secondaryEmail = event.target.value)
                }
              />
              <Form.Label htmlFor="phone">Celular:</Form.Label>
              <Form.Control
                className="mb-3"
                name="phone"
                type="text"
                placeholder="Celular:"
                onChange={(event) => (data.info.phone = event.target.value)}
              />
              <Form.Label htmlFor="role">Função:</Form.Label>
              <Form.Select
                name="role"
                defaultValue={"2"}
                onChange={(event) => (data.info.role = event.target.value)}
              >
                <option value="2">Cliente</option>
                <option value="3">Empresa</option>
                <option value="4">ONG</option>
                <option value="5">Escola</option>
              </Form.Select>
            </Form.Group>
            <h5>Documento</h5>
            <hr />
            <Form.Label htmlFor="doctype">Tipo:</Form.Label>
            <Form.Select
              name="doctype"
              className="mb-3"
              defaultValue={"rg"}
              onChange={(event) => (data.document.type = event.target.value)}
              required
            >
              <option value="rg" key="rg">
                --RG
              </option>
              <option value="cpf" key="cpf">
                --CPF
              </option>
              <option value="cpf" key="cnpj">
                --CNPJ
              </option>
            </Form.Select>
            <Form.Label htmlFor="docnumber">Número:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="docnumber"
              id="docNumber"
              placeholder="Nº:"
              onChange={(event) =>
                (data.document.documentNumber = event.target.value)
              }
              required
            />
            <h5>Endereço</h5>
            <hr />
            <Form.Label htmlFor="zipcode">CEP:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="zipcode"
              id="zipcode"
              onChange={(event) => (data.address.zipcode = event.target.value)}
              maxLength={9}
              placeholder="99999-999"
            />
            <Form.Label htmlFor="street">Rua:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="street"
              id="street"
              placeholder="Rua Exemplo, 999:"
              onChange={(event) => (data.address.street = event.target.value)}
            />
            <Form.Label htmlFor="city">Cidade:</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              name="city"
              id="city"
              placeholder="Itapetininga"
              onChange={(event) => (data.address.city = event.target.value)}
            />
            <Form.Label htmlFor="role">Estado:</Form.Label>
            <Form.Control
              className="mb-5"
              type="text"
              name="state"
              placeholder="SP"
              onChange={(event) => (data.address.state = event.target.value)}
              maxLength={2}
            />
            <Form.Group>
              <Button className="me-3" variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Registrar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

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
  let dummyNotifications = [];

  for (let i = 0; i <= 10; i++) {
    dummyNotifications.push(null);
  }

  return (
    <div
      className="custom-modal"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <NotificationList data={dummyNotifications} />
        </Modal.Body>
      </Modal.Dialog>
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
